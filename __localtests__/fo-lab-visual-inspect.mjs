#!/usr/bin/env node
/**
 * Headed visual gate: simplified FO fix lab (layout-top table, no overlay ink scan).
 * Artifacts: __localtests__/artifacts/fo-lab-visual-{live,svg,canvas}.png
 *
 *   HEADLESS=0 node __localtests__/fo-lab-visual-inspect.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  FO_FIX_LAB_BLOCK_CHARS,
  FO_FIX_LAB_LANDMARK,
} from './fo-fix-lab-fixture.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTIFACTS = path.join(__dirname, 'artifacts')
const RECIPE = 'product-baseline'
const VIEWS = ['live', 'svg', 'canvas']
const MIN_STAGE_HIGHER_PX = 0.5

async function waitForRecipeReady(page) {
  await page.waitForFunction(
    () =>
      window.__foFixLab?.done === true &&
      window.__foFixLastResult?.recipeId === 'product-baseline' &&
      Number.isFinite(window.__foFixLastResult?.liveBlockAnchorTopInRootPx),
    null,
    { timeout: 180_000 },
  )
  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(String(bootErr))
}

function viewPass(view, data, metrics) {
  const reasons = []
  if (!data.blockOk) reasons.push('block row missing in fixture')
  if (!data.panelVisible) reasons.push('layout compare panel hidden')
  if (!data.hasOverlay) reasons.push('#ink-top-overlay missing')
  if (view !== 'live' && data.markerLineCount < 1) {
    reasons.push('expected ink-marker overlay on svg/canvas view')
  }
  if (data.lineOverTable) reasons.push('marker line overlaps metrics table')
  if (!Number.isFinite(metrics.live)) reasons.push('live top missing')
  if (!Number.isFinite(metrics.svg)) reasons.push('svg top missing')
  if (!Number.isFinite(metrics.canvas)) reasons.push('canvas top missing')
  return { pass: reasons.length === 0, reasons }
}

async function main() {
  fs.mkdirSync(ARTIFACTS, { recursive: true })
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 780 })

  const reloadUrl = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${new URLSearchParams({
    recipe: RECIPE,
    auto: '1',
    view: 'live',
    dpr: '1',
    landmark: FO_FIX_LAB_LANDMARK,
    includeInactive: '1',
  })}`

  try {
    await page.goto(reloadUrl, { waitUntil: 'load', timeout: 120_000 })
    await waitForRecipeReady(page)
    await page.waitForTimeout(200)

    const metrics = await page.evaluate((minPx) => {
      const row = window.__foFixLastResult
      const m =
        row && typeof window.__foFixLab?.canonicalComparableInk === 'function'
          ? window.__foFixLab.canonicalComparableInk(row)
          : window.__foFixLab?.inkMarkers
      const svgHi = m?.svgHigherOnScreenPx ?? m?.svgHigherPx
      const canvasHi = m?.canvasHigherOnScreenPx ?? m?.canvasHigherPx
      return {
        live: row?.liveBlockAnchorTopInRootPx ?? m?.liveLineY ?? null,
        svg: row?.svgBlockAnchorTopInRootPx ?? m?.svgLineY ?? null,
        canvas: row?.canvasBlockAnchorTopInRootPx ?? m?.canvasLineY ?? null,
        svgVsLive: row?.liveVsSvgTopPx ?? m?.svgVsLive ?? null,
        canvasVsLive: row?.liveVsCanvasTopPx ?? m?.canvasVsLive ?? null,
        svgHigher: Number.isFinite(svgHi) && svgHi > minPx,
        canvasHigher: Number.isFinite(canvasHi) && canvasHi > minPx,
        svgHigherPx: svgHi ?? null,
        canvasHigherPx: canvasHi ?? null,
        verdict: document.getElementById('verdict')?.textContent ?? '',
      }
    }, MIN_STAGE_HIGHER_PX)

    const views = {}
    for (const view of VIEWS) {
      const shotPath = path.join(ARTIFACTS, `fo-lab-visual-${view}.png`)
      await page.evaluate((v) => {
        const input = document.querySelector(`input[name="view"][value="${v}"]`)
        if (input) {
          input.checked = true
          input.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, view)
      await page.waitForTimeout(400)
      await page
        .evaluate(() => window.__foFixLab?.refreshInkMarkers?.())
        .catch(() => {})
      await page.waitForTimeout(150)
      await page.locator('.fixture-wrap').screenshot({ path: shotPath })

      const data = await page.evaluate((landmark) => {
        const root = document.getElementById('capture-target')
        const runner = window.__foFixLabRunner
        const el =
          runner?.findLandmarkInkElement?.(root, landmark) ??
          root?.querySelector(`[data-landmark="Blocks"]`) ??
          root?.querySelector('nav a')
        const text = (el?.textContent || '').trim()
        const panel = document.getElementById('ink-compare-panel')
        const tableRect = panel?.getBoundingClientRect()
        let lineOverTable = false
        for (const line of document.querySelectorAll('.ink-marker-line, .debug-ink-line')) {
          const r = line.getBoundingClientRect()
          if (
            tableRect?.height &&
            r.bottom > tableRect.top + 2 &&
            r.top < tableRect.bottom
          ) {
            lineOverTable = true
            break
          }
        }
        return {
          text,
          blockOk: text.length >= 6 && text.includes('\u2588'),
          panelVisible: Boolean(panel && !panel.hidden),
          hasOverlay: Boolean(document.getElementById('ink-top-overlay')),
          markerLineCount: document.querySelectorAll('.ink-marker-line, .debug-ink-line').length,
          lineOverTable,
          tableRows: document.querySelectorAll('#ink-compare-tbody tr').length,
        }
      }, FO_FIX_LAB_LANDMARK)

      const verdict = viewPass(view, data, metrics)
      views[view] = { ...data, ...verdict, screenshot: shotPath }
    }

    const overallPass = VIEWS.every((v) => views[v]?.pass)

    const reportPath = path.join(ARTIFACTS, 'fo-lab-visual-report.json')
    fs.writeFileSync(
      reportPath,
      `${JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          note:
            'Mini lab landmark H (██████). Checkout Home/Products: checkout-example.html?recipe=product-baseline&auto=1&landmarks=Home,Products',
          blockChars: FO_FIX_LAB_BLOCK_CHARS,
          landmark: FO_FIX_LAB_LANDMARK,
          reloadUrl,
          pass: overallPass,
          metrics,
          views,
        },
        null,
        2,
      )}\n`,
    )

    console.log('\n--- FO fix lab visual inspect (simplified UI) ---\n')
    console.log(`Reload: ${reloadUrl}\n`)
    console.log(
      `Layout top (#capture-target): live=${metrics.live} svg=${metrics.svg} canvas=${metrics.canvas}`,
    )
    console.log(
      `On-screen higher (live−stage): svg=${metrics.svgHigherPx}px canvas=${metrics.canvasHigherPx}px · Δ stage−live: svg=${metrics.svgVsLive} canvas=${metrics.canvasVsLive}`,
    )
    if (metrics.verdict) console.log(`Verdict: ${metrics.verdict}`)
    console.log('')
    for (const view of VIEWS) {
      const row = views[view]
      const status = row.pass ? 'PASS' : 'FAIL'
      const why = row.pass ? 'ok' : row.reasons?.join('; ')
      console.log(`${view}: ${status} — ${why}`)
      console.log(`  ${row.screenshot}`)
    }
    console.log(`\nOverall: ${overallPass ? 'PASS' : 'FAIL'}`)
    console.log(`Report: ${reportPath}\n`)
    process.exit(overallPass ? 0 : 1)
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

#!/usr/bin/env node
/**
 * Headed probe: toggle live/svg/canvas on fo-fix-lab-ink-v2 product-baseline Home,
 * measure displayed preview ink tops per view vs metrics table.
 *
 *   SNAPDOM_LOCAL_PORT=9390 node __localtests__/fo-product-baseline-toggle-probe.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTIFACTS = path.join(__dirname, 'artifacts')
const VIEWS = ['live', 'svg', 'canvas']

async function main() {
  fs.mkdirSync(ARTIFACTS, { recursive: true })
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 780 })

  const qs = new URLSearchParams({
    recipe: 'product-baseline',
    auto: '1',
    view: 'live',
    dpr: '1',
    landmark: 'Home',
    includeInactive: '1',
    _cb: String(Date.now()),
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab-ink-v2.html?${qs}`

  try {
    console.log(`[toggle-probe] ${url}`)
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foFixLab?.done === true, null, { timeout: 180_000 })
    const bootErr = await page.evaluate(() => window.__foFixLab?.error)
    if (bootErr) throw new Error(bootErr)

    const metrics = await page.evaluate(() => {
      const row = window.__foFixLastResult
      const m =
        typeof window.__foFixLab?.canonicalComparableInk === 'function'
          ? window.__foFixLab.canonicalComparableInk(row)
          : null
      return {
        liveTop: m?.liveRoot ?? row?.liveTopPx,
        svgTop: m?.svgRoot ?? row?.svgTopPx,
        canvasTop: m?.canvasRoot ?? row?.canvasTopPx,
        canvasBitmap: row?.canvasPreviewBitmapTopPx,
        svgBitmap: row?.svgPreviewBitmapTopPx,
        liveRange: row?.liveRangeInkTopPx,
        liveBitmap: row?.livePreviewBitmapInkTopPx,
        verdict: document.getElementById('verdict')?.textContent?.trim() ?? '',
        metricsPanel: document.getElementById('metrics')?.textContent?.trim() ?? '',
        inkMetricsRev: window.__foFixLab?.inkMetricsRev ?? null,
      }
    })

    const viewTops = {}
    for (const view of VIEWS) {
      await page.evaluate((v) => {
        const input = document.querySelector(`input[name="view"][value="${v}"]`)
        if (input) {
          input.checked = true
          input.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }, view)
      await page.waitForTimeout(400)
      await page.evaluate(() => window.__foFixLab?.refreshInkMarkers?.()).catch(() => {})
      await page.waitForTimeout(150)

      const data = await page.evaluate((v) => {
        const root = document.getElementById('capture-target')
        const rootRect = root?.getBoundingClientRect()
        const marker = document.querySelector('.ink-marker-line')
        const markerTop = marker?.getBoundingClientRect()?.top ?? null
        const markerRootY =
          markerTop != null && rootRect ? markerTop - rootRect.top : null
        const markerDataTop = marker?.getAttribute('data-ink-top-px')
        const row = window.__foFixLastResult
        const runner = window.__foFixLabRunner
        const el =
          runner?.findLandmarkInkElement?.(root, row?.landmark ?? 'Home') ??
          root?.querySelector('nav a')
        const scanOpts = { visibleInk: true, inkScanMode: 'integer', scanBandFromRootTop: true }
        const dpr = row?.dpr ?? 1
        let scanTop = null
        let scanBitmap = null
        if (v === 'svg') {
          const img = document.querySelector('#svg-slot img.preview-svg')
          if (img && runner?.measurePreviewBitmapInkTopInRoot) {
            const painted = runner.measurePreviewBitmapInkTopInRoot(img, root, el, dpr, scanOpts)
            scanTop = painted?.topInRoot ?? painted?.top ?? null
            scanBitmap = painted?.bitmapTopInRoot ?? null
          }
        } else if (v === 'canvas') {
          const canvas = document.querySelector('#view-canvas canvas.preview-canvas')
          if (canvas && runner?.measurePreviewBitmapInkTopInRoot) {
            const painted = runner.measurePreviewBitmapInkTopInRoot(canvas, root, el, dpr, scanOpts)
            scanTop = painted?.topInRoot ?? painted?.top ?? null
            scanBitmap = painted?.bitmapTopInRoot ?? null
          }
        } else if (v === 'live' && runner?.measureLiveVisibleInkTop) {
          const live = runner.measureLiveVisibleInkTop(el, root)
          scanTop = live?.top ?? live?.topInRoot ?? null
        }
        return {
          markerViewportTop: markerTop,
          markerRootY,
          markerDataTop: markerDataTop != null ? Number(markerDataTop) : null,
          scanTop,
          scanBitmap,
        }
      }, view)

      viewTops[view] = data
      await page.locator('.fixture-wrap').screenshot({
        path: path.join(ARTIFACTS, `fo-baseline-toggle-${view}.png`),
      })
    }

    const orderOk =
      Number.isFinite(metrics.liveTop) &&
      Number.isFinite(metrics.svgTop) &&
      Number.isFinite(metrics.canvasTop) &&
      metrics.canvasTop < metrics.svgTop &&
      metrics.svgTop < metrics.liveTop

    const report = {
      generatedAt: new Date().toISOString(),
      url,
      inkMetricsRev: metrics.inkMetricsRev,
      tableMetrics: metrics,
      viewTops,
      orderCheck: {
        canvasLtSvgLtLive: orderOk,
        canvasTop: metrics.canvasTop,
        svgTop: metrics.svgTop,
        liveTop: metrics.liveTop,
      },
    }

    const outPath = path.join(ARTIFACTS, 'fo-product-baseline-toggle-probe.json')
    fs.writeFileSync(outPath, `${JSON.stringify(report, null, 2)}\n`)

    console.log('\n--- Table metrics ---')
    console.log(
      `live=${metrics.liveTop} svg=${metrics.svgTop} canvas=${metrics.canvasTop} ` +
        `(bitmap canvas=${metrics.canvasBitmap} svg=${metrics.svgBitmap})`,
    )
    console.log(`verdict:\n${metrics.verdict}`)
    console.log('\n--- Per-view marker/scan ---')
    for (const v of VIEWS) {
      const d = viewTops[v]
      console.log(
        `${v}: markerRootY=${d.markerRootY} scanTop=${d.scanTop} markerVp=${d.markerViewportTop}`,
      )
    }
    console.log(`\nOrder canvas < svg < live: ${orderOk ? 'PASS' : 'FAIL'}`)
    console.log(`Report: ${outPath}\n`)

    if (!orderOk) process.exitCode = 1
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

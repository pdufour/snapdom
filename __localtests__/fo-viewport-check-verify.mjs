#!/usr/bin/env node
/**
 * Viewport-top checker gate — product-baseline, Home (headed).
 * Layout tops (GBCR) on compare-stage previews; saves screenshots.
 *
 *   npm run debug:fo-viewport-check-verify
 */
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  checkViewportStageTopsAcceptance,
  computeLandmarkInkMetrics,
  formatLabRowStageYLineInk,
  formatViewportCheckMetrics,
} from './fo-landmark-ink-metrics.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const ARTIFACT_DIR = path.join(REPO_ROOT, '__localtests__/artifacts')
const LANDMARK = 'Home'
const VIEWS = ['live', 'svg', 'canvas']

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

function assertHomeRun(row, m, ui) {
  const errors = []
  if (row.recipeId !== 'product-baseline') errors.push(`recipeId=${row.recipeId}`)
  const lm = String(row.landmark ?? '')
  if (lm.toLowerCase() !== 'home') errors.push(`landmark=${lm || '—'} (expected Home)`)
  if (/landmark not found/i.test(ui.resultText ?? '')) {
    errors.push('result mentions landmark not found')
  }
  if (m.metricMode !== 'ink') {
    errors.push(`metricMode=${m.metricMode ?? '—'} (expected ink bitmap scan)`)
  }
  if (!Number.isFinite(m.liveTop) || !Number.isFinite(m.svgTop) || !Number.isFinite(m.canvasTop)) {
    errors.push('missing live/svg/canvas ink top Y')
  }
  for (const line of ['Live ink Y:', 'SVG ink Y:', 'Canvas ink Y:']) {
    if (!ui.metricsText.includes(line)) errors.push(`#metrics missing ${line}`)
  }
  if (!/bitmap ink/i.test(ui.metricsText ?? '')) {
    errors.push('#metrics must describe bitmap ink (preview band)')
  }
  if (row.inkScanActive !== true) {
    errors.push('row.inkScanActive must be true after preview ink scan')
  }
  if (m.inkUiAligned) {
    errors.push('ink must not report aligned on product-baseline (known stage drift)')
  }
  const acceptance = checkViewportStageTopsAcceptance(m, { maxSvgCanvasGapPx: 2.01 })
  if (!acceptance.pass) errors.push(...acceptance.errors)
  return errors
}

async function main() {
  const { server, port } = await startLocalServer(REPO_ROOT)
  const base = `http://127.0.0.1:${port}`
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 900, height: 520 })

  const qs = new URLSearchParams({
    recipe: 'product-baseline',
    auto: '1',
    landmark: LANDMARK,
    dpr: '1',
  })
  const url = `${base}/__localtests__/fo-fix-lab.html?${qs}`

  console.log(`[fo-viewport-check-verify] ${url}\n`)

  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(
    () => {
      if (window.__foFixLab?.error) return true
      return (
        window.__foFixLab?.done === true &&
        window.__foFixLastResult?.recipeId === 'product-baseline' &&
        Number.isFinite(window.__foFixLastResult?.liveBlockAnchorTopInRootPx) &&
        Number.isFinite(window.__foFixLastResult?.svgPreviewBitmapTopPx) &&
        window.__foFixLastResult?.inkScanActive === true
      )
    },
    null,
    { timeout: 180_000 },
  )

  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(bootErr)

  const screenshots = {}
  await mkdir(ARTIFACT_DIR, { recursive: true })

  for (const view of VIEWS) {
    await page.evaluate((v) => {
      const input = document.querySelector(`input[name="view"][value="${v}"]`)
      if (input) {
        input.checked = true
        input.dispatchEvent(new Event('change', { bubbles: true }))
      }
    }, view)
    await page.waitForTimeout(view === 'svg' ? 450 : 280)
    const shot = path.join(ARTIFACT_DIR, `fo-viewport-check-verify-${view}.png`)
    await page.locator('#compare-stage').screenshot({ path: shot })
    screenshots[view] = shot
  }

  const row = await page.evaluate(() => window.__foFixLastResult)
  const ui = await page.evaluate(() => ({
    metricsText: document.getElementById('metrics')?.textContent ?? '',
    verdictText: document.getElementById('verdict')?.innerText ?? '',
    resultText: document.getElementById('result')?.textContent ?? '',
    banners: Array.from(document.querySelectorAll('#verdict .ink-shift-banner')).map(
      (el) => el.textContent,
    ),
  }))

  const m = computeLandmarkInkMetrics(row)

  console.log(`product-baseline · landmark ${LANDMARK}\n`)
  console.log(`  live ink:   ${fmt(m.liveTop)}`)
  console.log(`  svg ink:    ${fmt(m.svgTop)}`)
  console.log(`  canvas ink: ${fmt(m.canvasTop)}`)
  console.log(`  ${formatLabRowStageYLineInk(m)}`)
  console.log(`  ink aligned: ${m.inkUiAligned ? 'yes' : 'no'}`)
  console.log(`  layout aligned: ${m.layoutUiAligned ? 'yes' : 'no'}`)
  if (ui.banners?.length) console.log(`  Verdict: ${ui.banners.join(' | ')}`)
  console.log('\n#metrics panel:\n' + formatViewportCheckMetrics(m))

  const errors = assertHomeRun(row, m, ui)
  const match = errors.length === 0
  console.log(`\nInk viewport checker: ${match ? 'OK' : 'FAIL'}`)

  await writeFile(
    path.join(ARTIFACT_DIR, 'fo-viewport-check-verify.json'),
    `${JSON.stringify(
      {
        pass: match,
        row,
        metrics: m,
        ui,
        screenshots,
        errors,
      },
      null,
      2,
    )}\n`,
  )

  for (const [v, p] of Object.entries(screenshots)) console.log(`  screenshot ${v}: ${p}`)

  await browser.close().catch(() => {})
  await closeLocalServer(server)

  if (errors.length) {
    console.error('\nFAIL:')
    for (const e of errors) console.error(`  • ${e}`)
    process.exit(1)
  }

  console.log('\nfo-viewport-check-verify: OK (exit 0)')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

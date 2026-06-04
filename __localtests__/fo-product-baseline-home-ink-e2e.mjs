#!/usr/bin/env node
/**
 * Product-baseline Home ink blackbox — honest bitmap scan tops (no reconcile hacks).
 *
 * Gates:
 *   - finite live / svg / canvas compare tops from probe row
 *   - live uses visible DOM cap when integer preview bitmap ≠ fractional visible
 *   - svg and canvas compare tops equal their bitmap scan rows
 *
 *   npm run compile && npm run test:fo-product-baseline-home-ink-e2e
 */
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const RECIPE = 'product-baseline'
const LANDMARK = 'Home'
const INK_EPS = 0.5

async function measureViewToggleInk(page, mode) {
  await page.evaluate((m) => {
    const input = document.querySelector(`input[name="view"][value="${m}"]`)
    if (input instanceof HTMLInputElement) {
      input.checked = true
      input.dispatchEvent(new Event('change', { bubbles: true }))
    }
  }, mode)
  await page.waitForTimeout(200)
  return page.evaluate((mode) => {
    const runner = window.__foFixLabRunner
    const root = document.getElementById('capture-target')
    const el =
      runner?.findLandmarkInkElement?.(root, 'Home') ??
      runner?.findLandmarkElement?.(root, 'Home')
    const svgImg = document.querySelector('#svg-slot img.preview-svg')
    const canvas = document.querySelector('#view-canvas canvas.preview-canvas')
    const opts = { visibleInk: true, inkScanMode: 'integer', scanBandFromRootTop: true }
    let displayEl = el
    if (mode === 'svg') displayEl = svgImg
    else if (mode === 'canvas') displayEl = canvas
    if (!displayEl || !runner?.measurePreviewBitmapInkTopInRoot) {
      return { mode, error: 'missing display or runner' }
    }
    const scan = runner.measurePreviewBitmapInkTopInRoot(displayEl, root, el, 1, opts)
    return {
      mode,
      topInRoot: scan?.topInRoot ?? null,
      bitmapTopInRoot: scan?.bitmapTopInRoot ?? scan?.topInRoot ?? null,
    }
  }, mode)
}

async function main() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-product-baseline-home-ink-e2e] SKIP_HEADED=1 — requires headed lab probe')
    process.exit(0)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  /** @type {string[]} */
  const errors = []

  try {
    const qs = new URLSearchParams({
      recipe: RECIPE,
      auto: '1',
      view: 'live',
      dpr: '1',
      landmark: LANDMARK,
      includeInactive: '1',
      _cb: String(Date.now()),
    })
    const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab-ink-v2.html?${qs}`
    console.log(`[fo-product-baseline-home-ink-e2e] ${url}`)

    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foFixLab?.done === true, null, {
      timeout: 180_000,
    })

    const bootErr = await page.evaluate(() => window.__foFixLab?.error)
    if (bootErr) throw new Error(bootErr)

    const payload = await page.evaluate(() => {
      const row = window.__foFixLastResult
      if (!row) return { error: 'no probe row' }
      const m =
        typeof window.__foFixLab?.canonicalComparableInk === 'function'
          ? window.__foFixLab.canonicalComparableInk(row)
          : null
      return {
        landmark: row.landmark ?? null,
        liveTopPx: row.liveInkTopPx ?? row.liveTopPx ?? null,
        livePreviewBitmapInkTopPx: row.livePreviewBitmapInkTopPx ?? null,
        liveUsesVisibleCap: row.liveUsesVisibleCap ?? null,
        svgTopPx: row.svgPreviewVisibleTopPx ?? row.svgTopPx ?? null,
        svgBitmapTopPx: row.svgPreviewBitmapTopPx ?? row.svgImgBitmapTopInRoot ?? null,
        canvasTopPx: row.canvasPreviewVisibleTopPx ?? row.canvasTopPx ?? null,
        canvasBitmapTopPx: row.canvasPreviewBitmapTopPx ?? null,
        previewBitmapRowsAgree: row.previewBitmapRowsAgree ?? null,
        svgImgDecodeLagPx: row.svgImgDecodeLagPx ?? null,
        canvasHigherOnScreenPx: m?.canvasHigherOnScreenPx ?? null,
        svgHigherOnScreenPx: m?.svgHigherOnScreenPx ?? null,
        canvasHigherVsSvgPx: m?.canvasHigherVsSvgPx ?? null,
        metricsPanelText: document.getElementById('metrics')?.textContent?.trim() ?? '',
        verdictText: document.getElementById('verdict')?.textContent?.trim() ?? '',
      }
    })

    if (payload.error) throw new Error(payload.error)

    const {
      liveTopPx: live,
      svgTopPx: svg,
      canvasTopPx: canvas,
      svgBitmapTopPx: svgBitmap,
      canvasBitmapTopPx: canvasBitmap,
    } = payload
    console.log(
      `  live=${live} svg=${svg} canvas=${canvas} ` +
        `svgBitmap=${svgBitmap} canvasBitmap=${canvasBitmap} ` +
        `liveUsesVisibleCap=${payload.liveUsesVisibleCap} ` +
        `bitmapRowsAgree=${payload.previewBitmapRowsAgree}`,
    )

    if (!Number.isFinite(live) || !Number.isFinite(svg) || !Number.isFinite(canvas)) {
      errors.push(`missing ink tops live=${live} svg=${svg} canvas=${canvas}`)
    }

    if (Number.isFinite(svgBitmap) && svg !== svgBitmap) {
      errors.push(`svg compare top must equal bitmap scan: visible=${svg} bitmap=${svgBitmap}`)
    }
    if (Number.isFinite(canvasBitmap) && canvas !== canvasBitmap) {
      errors.push(
        `canvas compare top must equal bitmap scan: visible=${canvas} bitmap=${canvasBitmap}`,
      )
    }

    if (payload.liveUsesVisibleCap !== true) {
      errors.push(`expected liveUsesVisibleCap=true for fractional visible live cap`)
    }
    if (!Number.isInteger(payload.livePreviewBitmapInkTopPx)) {
      errors.push(`expected integer livePreviewBitmapInkTopPx`)
    }
    if (payload.liveUsesVisibleCap === true && Number.isFinite(live) && Number.isInteger(live)) {
      errors.push(`liveInkTopPx must be fractional when visible cap active, got ${live}`)
    }

    const toggle = {}
    for (const mode of ['live', 'svg', 'canvas']) {
      toggle[mode] = await measureViewToggleInk(page, mode)
    }
    console.log('  toggle bitmap topInRoot:', JSON.stringify(toggle))

    if (!/Live ink Y:\s+14\.500\s*px/.test(payload.metricsPanelText ?? '')) {
      errors.push('#metrics missing "Live ink Y:   14.500 px"')
    }
    if (
      Number.isFinite(canvas) &&
      /Canvas ink Y:\s+([\d.]+)\s*px/.test(payload.metricsPanelText ?? '')
    ) {
      const m = payload.metricsPanelText.match(/Canvas ink Y:\s+([\d.]+)\s*px/)
      const uiCanvas = m ? Number(m[1]) : null
      if (Number.isFinite(uiCanvas) && Math.abs(uiCanvas - canvas) > INK_EPS) {
        errors.push(
          `Canvas ink Y in #metrics (${uiCanvas}) must match probe compare top (${canvas})`,
        )
      }
    }

    if (errors.length) {
      console.error('\nFAIL — product-baseline Home honest ink e2e\n')
      for (const e of errors) console.error(`  • ${e}`)
      process.exitCode = 1
      return
    }

    console.log(
      `[fo-product-baseline-home-ink-e2e] PASS — honest tops live=${live} svg=${svg} canvas=${canvas}`,
    )
  } finally {
    await browser.close()
    await closeLocalServer(server)
  }
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})

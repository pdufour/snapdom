#!/usr/bin/env node
/**
 * Canvas vs live visible ink blackbox — product-baseline Home on fo-fix-lab-ink-v2.
 *
 * Catches regressions where canvas bitmap Y ties live preview band (14) but visible
 * live cap is ~14.5, producing a false "Canvas ink matches live on screen" verdict.
 *
 * Gates:
 *   - stale lab (missing canvas-live-visible-v4 build bar / inkMetricsRev)
 *   - liveTopPx rounded to 14 instead of visible ~14.5
 *   - liveTopPx === canvasTopPx === 14 (false tie)
 *   - canvas visible reconciled from viewport (≈13) while bitmap stays 14
 *   - canvasHigherOnScreenPx ≥ 1 when live≈14.5 and canvas visible≈13
 *
 *   npm run compile && npm run test:fo-canvas-live-ink-e2e
 *   SKIP_HEADED=1 npm run test:fo-canvas-live-ink-e2e
 */
import { closeLocalServer, launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const RECIPE = 'product-baseline'
const LANDMARK = 'Home'
const LAB_BUILD = 'canvas-svg-viewport-v7'
const LIVE_VISIBLE_MIN = 14.25
const LIVE_VISIBLE_MAX = 14.75
const CANVAS_VISIBLE_EXPECT = 13
const CANVAS_BITMAP_EXPECT = 14
const CANVAS_VISIBLE_TOL = 0.51
const CANVAS_HIGHER_EXPECT = 1.5
const CANVAS_HIGHER_TOL = 0.26
const INK_EPS = 0.5

/** @param {string[]} errors */
function gateStaleLabBuild(payload, errors) {
  const { buildBarText, buildStampText, inkMetricsRev } = payload
  if (!buildBarText?.includes(LAB_BUILD)) {
    errors.push(
      `stale lab: missing #lab-live-build-bar "${LAB_BUILD}" — got: ${JSON.stringify(buildBarText?.slice(0, 80) ?? '')}`,
    )
  }
  if (!buildStampText?.includes(LAB_BUILD)) {
    errors.push(
      `stale lab: #lab-build-stamp missing "${LAB_BUILD}" — hard refresh fo-fix-lab-ink-v2.html`,
    )
  }
  if (inkMetricsRev !== LAB_BUILD) {
    errors.push(`stale lab: window.__foFixLab.inkMetricsRev=${JSON.stringify(inkMetricsRev)} (expected ${LAB_BUILD})`)
  }
}

/** @param {string[]} errors */
function gateLiveVisibleCap(payload, errors) {
  const { liveTopPx: live } = payload
  if (!Number.isFinite(live)) {
    errors.push(`missing liveTopPx (expected visible cap ~14.5)`)
    return
  }
  if (live < LIVE_VISIBLE_MIN || live > LIVE_VISIBLE_MAX) {
    errors.push(
      `liveTopPx=${live.toFixed(3)} outside visible cap band [${LIVE_VISIBLE_MIN}, ${LIVE_VISIBLE_MAX}] — ` +
        `likely using preview-band 14 instead of DOM visible ~14.5`,
    )
  }
  if (Math.abs(live - 14) < 0.01) {
    errors.push('liveTopPx pinned to 14.000 — expected visible DOM cap ~14.5 (not preview-band integer)')
  }
}

/** @param {string[]} errors */
function gateFalseLiveCanvasTie(payload, errors) {
  const { liveTopPx: live, canvasTopPx: canvas, canvasBitmapTopPx: canvasBitmap } = payload
  if (!Number.isFinite(live) || !Number.isFinite(canvas)) return

  const liveInt = Math.abs(live - 14) < 0.01
  const canvasInt = Math.abs(canvas - 14) < 0.01
  const bitmapInt = Number.isFinite(canvasBitmap) && Math.abs(canvasBitmap - 14) < 0.01

  if (liveInt && canvasInt) {
    errors.push(
      `false tie: liveTopPx=${live} and canvasTopPx=${canvas} both ≈14 — live should be ~14.5 visible cap`,
    )
  }
  if (liveInt && canvasInt && bitmapInt) {
    errors.push(
      `triple tie at row 14: live=${live} canvas visible=${canvas} canvas bitmap=${canvasBitmap} — ` +
        'visible live cap must diverge from canvas bitmap',
    )
  }
}

/** @param {string[]} errors */
function gateCanvasHigherOnScreen(payload, errors) {
  const { liveTopPx: live, canvasTopPx: canvas, canvasBitmapTopPx: canvasBitmap, canvasHigherOnScreenPx } =
    payload
  if (!Number.isFinite(live) || !Number.isFinite(canvas)) return

  const canvasHigher =
    Number.isFinite(canvasHigherOnScreenPx) ? canvasHigherOnScreenPx : live - canvas

  if (canvasHigher < CANVAS_HIGHER_EXPECT - CANVAS_HIGHER_TOL) {
    errors.push(
      `canvasHigherOnScreenPx=${canvasHigher.toFixed(3)} < ${CANVAS_HIGHER_EXPECT - CANVAS_HIGHER_TOL} — ` +
        `canvas should read ~${CANVAS_HIGHER_EXPECT}px higher on screen than live (live=${live}, canvas visible=${canvas}, bitmap=${canvasBitmap})`,
    )
  }

  const liveNearCap = live >= LIVE_VISIBLE_MIN && live <= LIVE_VISIBLE_MAX
  const canvasNearBitmap =
    Number.isFinite(canvasBitmap) && Math.abs(canvasBitmap - CANVAS_BITMAP_EXPECT) <= CANVAS_VISIBLE_TOL
  if (liveNearCap && canvasNearBitmap && canvasHigher < CANVAS_HIGHER_EXPECT - CANVAS_HIGHER_TOL) {
    errors.push(
      `live≈14.5 + canvas bitmap≈14 but canvasHigherOnScreenPx=${canvasHigher.toFixed(3)} — ` +
        'regression: visible live cap vs preview-band canvas',
    )
  }
}

/** @param {string[]} errors */
function gateMetricsCanvasY(payload, errors) {
  const panel = payload.metricsPanelText ?? ''
  const canvasLine = panel.match(/Canvas ink Y:\s+([\d.]+)\s*px/)?.[1]
  if (canvasLine != null) {
    const y = Number(canvasLine)
    if (Number.isFinite(y) && Math.abs(y - CANVAS_VISIBLE_EXPECT) > CANVAS_VISIBLE_TOL) {
      errors.push(`#metrics Canvas ink Y line reads ${canvasLine} — expected ~${CANVAS_VISIBLE_EXPECT}.000 (viewport-reconciled visible)`)
    }
  }
  if (Number.isFinite(payload.canvasBitmapTopPx) && Math.abs(payload.canvasBitmapTopPx - CANVAS_BITMAP_EXPECT) > CANVAS_VISIBLE_TOL) {
    errors.push(`canvas bitmap=${payload.canvasBitmapTopPx} expected ~${CANVAS_BITMAP_EXPECT}`)
  }
}

/** @param {string[]} errors */
function gateVerdictCanvasHigher(payload, errors) {
  const verdict = payload.verdictText ?? ''
  if (!/Canvas ink 1\.50 px higher on screen than live/.test(verdict)) {
    errors.push(
      `#verdict missing "Canvas ink 1.50 px higher on screen than live" — got: ${JSON.stringify(verdict.slice(0, 120))}`,
    )
  }
}

/** @param {string[]} errors */
function gateResultCanvasPhrase(payload, errors) {
  const result = payload.resultText ?? ''
  if (/Canvas ink matches live on screen/.test(result)) {
    errors.push('#result still says Canvas ink matches live on screen')
  }
  if (!/Canvas ink 1\.50 px higher on screen than live/.test(result)) {
    errors.push('#result missing "Canvas ink 1.50 px higher on screen than live"')
  }
}

/** @param {string[]} errors */
function gateUiVerdict(payload, errors) {
  const uiBlob = `${payload.metricsPanelText}\n${payload.verdictText}\n${payload.metricsText}\n${payload.inkCompareText}`
  if (/Canvas ink matches live on screen/.test(uiBlob)) {
    errors.push(
      'UI verdict says "Canvas ink matches live on screen" — expected ~0.5px higher when live≈14.5 canvas≈14',
    )
  }
  if (/Canvas ink .* lower on screen than live/.test(uiBlob)) {
    errors.push('UI verdict says canvas lower than live — product-baseline canvas should be higher on screen')
  }
}

/** @param {string[]} errors */
function gateMetricsLiveY(payload, errors) {
  const panel = payload.metricsPanelText ?? ''
  if (/Live ink Y:\s+14\.000\s*px/.test(panel)) {
    errors.push('#metrics shows Live ink Y: 14.000 px — expected 14.500 (visible DOM cap, not preview band)')
  }
  if (!/Live ink Y:/.test(panel)) {
    errors.push('#metrics missing "Live ink Y:" line')
  }
  const liveLine = panel.match(/Live ink Y:\s+([\d.]+)\s*px/)?.[1]
  if (liveLine != null) {
    const y = Number(liveLine)
    if (Number.isFinite(y) && Math.abs(y - 14) < 0.01) {
      errors.push(`#metrics Live ink Y line reads ${liveLine} — expected ~14.500`)
    }
  }
}

async function loadProbe(page, port) {
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
  console.log(`[fo-canvas-live-ink-e2e] ${url}`)

  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foFixLab?.done === true, null, {
    timeout: 180_000,
  })

  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(bootErr)

  return page.evaluate(() => {
    const row = window.__foFixLastResult
    if (!row) return { error: 'no probe row' }
    const m =
      typeof window.__foFixLab?.canonicalComparableInk === 'function'
        ? window.__foFixLab.canonicalComparableInk(row)
        : null
    return {
      landmark: row.landmark ?? null,
      recipeId: row.recipeId ?? null,
      liveTopPx: row.liveTopPx ?? row.liveInkTopPx ?? row.livePreviewInkTopPx ?? null,
      livePreviewBitmapInkTopPx: row.livePreviewBitmapInkTopPx ?? row.livePreviewInkTopPx ?? null,
      canvasTopPx:
        row.canvasPreviewVisibleTopPx ?? row.canvasTopPx ?? row.canvasPreviewBitmapTopPx ?? null,
      canvasBitmapTopPx: row.canvasPreviewBitmapTopPx ?? row.canvasPreviewInkTopPx ?? null,
      canvasHigherOnScreenPx: m?.canvasHigherOnScreenPx ?? null,
      inkMetricsRev: window.__foFixLab?.inkMetricsRev ?? null,
      buildBarText: document.getElementById('lab-live-build-bar')?.textContent?.trim() ?? '',
      buildStampText: document.getElementById('lab-build-stamp')?.textContent?.trim() ?? '',
      metricsText: document.getElementById('ink-delta-summary')?.textContent?.trim() ?? '',
      metricsPanelText: document.getElementById('metrics')?.textContent?.trim() ?? '',
      verdictText: document.getElementById('verdict')?.textContent?.trim() ?? '',
      resultText: document.getElementById('result')?.textContent?.trim() ?? '',
      viewLegendText: document.getElementById('view-legend')?.textContent?.trim() ?? '',
      inkCompareText: document.getElementById('ink-compare-tbody')?.textContent?.trim() ?? '',
    }
  })
}

async function main() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-canvas-live-ink-e2e] SKIP_HEADED=1 — requires headed lab probe')
    process.exit(0)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  /** @type {string[]} */
  const errors = []

  try {
    const payload = await loadProbe(page, port)
    if (payload.error) throw new Error(payload.error)

    if (payload.recipeId !== RECIPE) {
      errors.push(`recipeId=${payload.recipeId} (expected ${RECIPE})`)
    }
    if (String(payload.landmark ?? '').toLowerCase() !== LANDMARK.toLowerCase()) {
      errors.push(`landmark=${payload.landmark} (expected ${LANDMARK})`)
    }

    console.log(
      `  live=${payload.liveTopPx} livePreviewBitmap=${payload.livePreviewBitmapInkTopPx} ` +
        `canvas=${payload.canvasTopPx} canvasBitmap=${payload.canvasBitmapTopPx} ` +
        `canvasHigher=${payload.canvasHigherOnScreenPx}`,
    )

    gateStaleLabBuild(payload, errors)
    gateLiveVisibleCap(payload, errors)
    gateFalseLiveCanvasTie(payload, errors)
    gateCanvasHigherOnScreen(payload, errors)
    gateUiVerdict(payload, errors)
    gateMetricsLiveY(payload, errors)
    gateMetricsCanvasY(payload, errors)
    gateVerdictCanvasHigher(payload, errors)
    gateResultCanvasPhrase(payload, errors)

    // Toggle Live ↔ Canvas — verdict must stay "canvas higher", not "matches live"
    await page.evaluate(() => {
      const canvasInput = document.querySelector('input[name="view"][value="canvas"]')
      if (canvasInput instanceof HTMLInputElement) {
        canvasInput.checked = true
        canvasInput.dispatchEvent(new Event('change', { bubbles: true }))
      }
    })
    await page.waitForTimeout(150)
    const canvasViewUi = await page.evaluate(() => {
      const metrics = document.getElementById('metrics')?.textContent ?? ''
      const verdict = document.getElementById('verdict')?.textContent ?? ''
      const result = document.getElementById('result')?.textContent ?? ''
      const viewLegend = document.getElementById('view-legend')?.textContent ?? ''
      return { metrics, verdict, result, viewLegend, blob: `${metrics}\n${verdict}\n${result}\n${viewLegend}` }
    })
    if (/Canvas ink matches live on screen/.test(canvasViewUi.blob)) {
      errors.push(
        'after switching to Canvas view, UI still says "Canvas ink matches live on screen"',
      )
    }
    if (!/Canvas ink 1\.50 px higher on screen than live/.test(canvasViewUi.verdict)) {
      errors.push('after Canvas view toggle, #verdict missing "Canvas ink 1.50 px higher on screen than live"')
    }
    if (!/Canvas ink 1\.50 px higher on screen than live/.test(canvasViewUi.viewLegend)) {
      errors.push('after Canvas view toggle, #view-legend missing "Canvas ink 1.50 px higher on screen than live"')
    }

    if (errors.length) {
      console.error('\nFAIL — fo-canvas-live-ink-e2e (canvas vs live visible ink)\n')
      for (const e of errors) console.error(`  • ${e}`)
      if (payload.metricsPanelText) {
        console.error('\n#metrics excerpt:\n' + payload.metricsPanelText.slice(0, 600))
      }
      if (payload.verdictText) {
        console.error('\n#verdict excerpt:\n' + payload.verdictText.slice(0, 400))
      }
      process.exitCode = 1
      return
    }

    const canvasHigher =
      Number.isFinite(payload.canvasHigherOnScreenPx)
        ? payload.canvasHigherOnScreenPx
        : payload.liveTopPx - payload.canvasTopPx
    console.log(
      `[fo-canvas-live-ink-e2e] PASS — ${LAB_BUILD} · live=${payload.liveTopPx} canvas=${payload.canvasTopPx} ` +
        `(canvas ${canvasHigher.toFixed(2)}px higher on screen)`,
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

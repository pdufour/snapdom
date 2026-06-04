#!/usr/bin/env node
/**
 * Stage ink e2e — live / SVG preview / canvas decode paths via fo-ink-bounds-scan.mjs.
 *
 * Border-top cases (ink flush at band top):
 *   aligned-0 / aligned-5     — all stages row 0 / 5
 *   border-top-0              — live=svg=canvas row 0
 *   border-top-all-down-5     — all stages row 5 (Δ=5 from top)
 *   border-top-live-down-5    — live only +5px
 *   border-top-svg-down-5     — svg only +5px
 *   border-top-canvas-down-5  — canvas only +5px
 *
 * Also see: fo-ink-border-e2e.mjs, fo-ink-shift5-e2e.mjs, fo-stage-order-e2e.mjs
 * Real FO product-baseline Home toggle stack (canvas < svg < live):
 *   npm run test:fo-product-baseline-home-ink-e2e  (in test:fo-ink-blackbox)
 *       delta = stageTop − liveTop (+ = stage lower than live).
 *
 * Tolerances:
 *   aligned cases (inkTop 20…60): live ≈ svg ≈ canvas within ±1px (device row)
 *   drift cases: integer px gaps within ±1px (canvasHigherPx, svgHigherPx)
 *   predictable shift cases: per-stage expected tops within ±1px
 *   node synthetic (SKIP_HEADED=1): same matrix without headed Chrome
 *
 * URL params (headed fixture): ?inkTop=&liveShift=&svgShift=&canvasShift=
 *
 *   npm run debug:fo-stage-ink-e2e
 *   SKIP_HEADED=1 npm run debug:fo-stage-ink-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  INK_SCAN_CAP_CORE_DEFAULTS,
  inkTopIntegerRowFromImageData,
  syntheticInkBandRgba,
} from './fo-ink-bounds-scan.mjs'

const ALIGNED_INK_TOPS = [0, 5, 10, 15, 20, 25, 30, 35, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65]
const ALIGNED_TOL = 1
const DRIFT_TOL = 1
const BAND_W = 100
const BAND_H = 80

const SCAN_OPTS = {
  capCrest: true,
  refineUpward: true,
  solidBand: true,
  ...INK_SCAN_CAP_CORE_DEFAULTS,
}

function scanSyntheticRow(inkTop) {
  return inkTopIntegerRowFromImageData(
    syntheticInkBandRgba(BAND_W, BAND_H, inkTop, 12),
    BAND_W,
    BAND_H,
    SCAN_OPTS,
  )
}

/** Node synthetic: canvas drawImage Y shift mirrors headed fixture. */
function scanSyntheticCanvasRow(inkTop, canvasShift) {
  return scanSyntheticRow(inkTop + canvasShift)
}

/**
 * @param {{ inkTop: number, liveShift?: number, svgShift?: number, canvasShift?: number, expect: object }} c
 */
function assertPredictableCase(c, errors, matrix) {
  const liveShift = c.liveShift ?? 0
  const svgShift = c.svgShift ?? 0
  const canvasShift = c.canvasShift ?? 0
  const live = scanSyntheticRow(c.inkTop + liveShift)
  const svg = scanSyntheticRow(c.inkTop + svgShift)
  const canvas = scanSyntheticCanvasRow(c.inkTop, canvasShift)
  const exp = c.expect
  let pass = live != null && svg != null && canvas != null
  if (pass && Number.isFinite(exp.liveTop) && Math.abs(live - exp.liveTop) > DRIFT_TOL) {
    pass = false
  }
  if (pass && Number.isFinite(exp.svgTop) && Math.abs(svg - exp.svgTop) > DRIFT_TOL) {
    pass = false
  }
  if (pass && Number.isFinite(exp.canvasTop) && Math.abs(canvas - exp.canvasTop) > DRIFT_TOL) {
    pass = false
  }
  matrix.push({ id: c.id, live, svg, canvas, pass })
  if (!pass) {
    errors.push(
      `${c.id}: live=${live} svg=${svg} canvas=${canvas} expected live=${exp.liveTop} svg=${exp.svgTop} canvas=${exp.canvasTop}`,
    )
  }
}

/** Node synthetic matrix — no browser. */
function runNodeSynthetic() {
  const errors = []
  /** @type {object[]} */
  const matrix = []

  for (const inkTop of ALIGNED_INK_TOPS) {
    const live = scanSyntheticRow(inkTop)
    const svg = scanSyntheticRow(inkTop)
    const canvas = scanSyntheticRow(inkTop)
    const pass =
      live != null &&
      Math.abs(live - inkTop) <= ALIGNED_TOL &&
      Math.abs(svg - inkTop) <= ALIGNED_TOL &&
      Math.abs(canvas - inkTop) <= ALIGNED_TOL &&
      Math.abs(svg - live) <= ALIGNED_TOL &&
      Math.abs(canvas - live) <= ALIGNED_TOL
    matrix.push({ id: `aligned-${inkTop}`, live, svg, canvas, pass })
    if (!pass) {
      errors.push(`aligned-${inkTop}: live=${live} svg=${svg} canvas=${canvas}`)
    }
  }

  const driftCases = [
    { id: 'canvas-higher-3', liveTop: 50, svgTop: 50, canvasTop: 47, canvasHigherPx: 3 },
    { id: 'canvas-higher-2', liveTop: 50, svgTop: 50, canvasTop: 48, canvasHigherPx: 2 },
    { id: 'canvas-higher-5', liveTop: 50, svgTop: 50, canvasTop: 45, canvasHigherPx: 5 },
    { id: 'svg-higher-1', liveTop: 50, svgTop: 49, canvasTop: 50, svgHigherPx: 1, deltaCanvasVsLive: 0 },
    { id: 'svg-higher-2', liveTop: 50, svgTop: 48, canvasTop: 50, svgHigherPx: 2, deltaCanvasVsLive: 0 },
    { id: 'svg-higher-5', liveTop: 50, svgTop: 45, canvasTop: 50, svgHigherPx: 5, deltaCanvasVsLive: 0 },
  ]

  for (const c of driftCases) {
    const live = scanSyntheticRow(c.liveTop)
    const svg = scanSyntheticRow(c.svgTop)
    const canvas = scanSyntheticCanvasRow(50, c.canvasTop - 50)
    const canvasHigherPx = svg != null && canvas != null ? svg - canvas : null
    const svgHigherPx = live != null && svg != null ? live - svg : null
    let pass = live != null && svg != null && canvas != null
    if (pass && Math.abs(live - c.liveTop) > DRIFT_TOL) pass = false
    if (pass && Number.isFinite(c.canvasHigherPx)) {
      pass = canvasHigherPx != null && Math.abs(canvasHigherPx - c.canvasHigherPx) <= DRIFT_TOL
    }
    if (pass && Number.isFinite(c.svgHigherPx)) {
      pass = svgHigherPx != null && Math.abs(svgHigherPx - c.svgHigherPx) <= DRIFT_TOL
    }
    if (pass && Number.isFinite(c.deltaCanvasVsLive)) {
      const deltaCanvasVsLive = live != null && canvas != null ? canvas - live : null
      pass =
        deltaCanvasVsLive != null &&
        Math.abs(deltaCanvasVsLive - c.deltaCanvasVsLive) <= DRIFT_TOL
    }
    matrix.push({
      id: c.id,
      live,
      svg,
      canvas,
      canvasHigherPx,
      svgHigherPx,
      pass,
    })
    if (!pass) {
      errors.push(
        `${c.id}: live=${live} svg=${svg} canvas=${canvas} canvasHigher=${canvasHigherPx} svgHigher=${svgHigherPx}`,
      )
    }
  }

  for (const shift of [1, 2, 3, 5, 7, 8, 10, 12]) {
    assertPredictableCase(
      {
        id: `all-down-${shift}`,
        inkTop: 40,
        liveShift: shift,
        svgShift: shift,
        canvasShift: shift,
        expect: { liveTop: 40 + shift, svgTop: 40 + shift, canvasTop: 40 + shift },
      },
      errors,
      matrix,
    )
  }

  const borderTopCases = [
    {
      id: 'border-top-0',
      inkTop: 0,
      expect: { liveTop: 0, svgTop: 0, canvasTop: 0 },
    },
    {
      id: 'border-top-all-down-5',
      inkTop: 0,
      liveShift: 5,
      svgShift: 5,
      canvasShift: 5,
      expect: { liveTop: 5, svgTop: 5, canvasTop: 5 },
    },
    {
      id: 'border-top-live-down-5',
      inkTop: 0,
      liveShift: 5,
      expect: { liveTop: 5, svgTop: 0, canvasTop: 0 },
    },
    {
      id: 'border-top-svg-down-5',
      inkTop: 0,
      svgShift: 5,
      expect: { liveTop: 0, svgTop: 5, canvasTop: 0 },
    },
    {
      id: 'border-top-canvas-down-5',
      inkTop: 0,
      canvasShift: 5,
      expect: { liveTop: 0, svgTop: 0, canvasTop: 5 },
    },
    {
      id: 'border-top-all-up-5',
      inkTop: 5,
      liveShift: -5,
      svgShift: -5,
      canvasShift: -5,
      expect: { liveTop: 0, svgTop: 0, canvasTop: 0 },
    },
  ]

  for (const c of borderTopCases) {
    assertPredictableCase(c, errors, matrix)
  }

  const predictableCases = [
    {
      id: 'live-down-3',
      inkTop: 40,
      liveShift: 3,
      expect: { liveTop: 43, svgTop: 40, canvasTop: 40 },
    },
    {
      id: 'live-down-10',
      inkTop: 40,
      liveShift: 10,
      expect: { liveTop: 50, svgTop: 40, canvasTop: 40 },
    },
    {
      id: 'svg-down-10',
      inkTop: 40,
      svgShift: 10,
      expect: { liveTop: 40, svgTop: 50, canvasTop: 40 },
    },
    {
      id: 'canvas-down-10',
      inkTop: 40,
      canvasShift: 10,
      expect: { liveTop: 40, svgTop: 40, canvasTop: 50 },
    },
    {
      id: 'canvas-up-10',
      inkTop: 50,
      canvasShift: -10,
      expect: { liveTop: 50, svgTop: 50, canvasTop: 40 },
    },
    {
      id: 'stacked',
      inkTop: 40,
      svgShift: 5,
      canvasShift: 10,
      expect: { liveTop: 40, svgTop: 45, canvasTop: 50 },
    },
    {
      id: 'triple-misaligned',
      inkTop: 40,
      svgShift: 3,
      canvasShift: -3,
      expect: { liveTop: 40, svgTop: 43, canvasTop: 37 },
    },
  ]

  for (const c of predictableCases) {
    assertPredictableCase(c, errors, matrix)
  }

  if (errors.length) {
    throw new Error(`node synthetic:\n  ${errors.join('\n  ')}`)
  }
  console.log(`[fo-stage-ink-e2e] node synthetic OK (${matrix.length} cases)`)
  return matrix
}

function summarizeMatrix(matrix) {
  const failed = matrix.filter((r) => !r.pass)
  return { total: matrix.length, passed: matrix.length - failed.length, failed }
}

async function main() {
  runNodeSynthetic()
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-stage-ink-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-stage-ink-e2e.html`
  console.log(`[fo-stage-ink-e2e] ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foStageInkE2e?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foStageInkE2e?.bootError)
    if (bootErr) throw new Error(bootErr)

    const payload = await page.evaluate(async () => window.__foStageInkE2e.run())
    console.log(JSON.stringify(payload, null, 2))

    const summary = summarizeMatrix(payload.matrix)
    if (!payload.pass) {
      const fails = payload.matrix.filter((r) => !r.pass)
      console.error('FAIL —', fails.map((r) => `${r.id}: ${r.errors?.join('; ')}`).join('\n  '))
      process.exitCode = 1
      return
    }
    console.log(
      `PASS — ${summary.passed}/${summary.total} cases (aligned ±${payload.alignedTol}px, drift/predictable ±${payload.driftTol}px)`,
    )
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

/**
 * Shared runner for per-stage ink e2e (live / svg / canvas / order).
 * Uses fo-per-stage-ink-e2e.html fixture + fo-ink-bounds-scan.mjs.
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  INK_SCAN_CAP_CORE_DEFAULTS,
  inkTopIntegerRowFromImageData,
  syntheticInkBandRgba,
} from './fo-ink-bounds-scan.mjs'

export const BAND_W = 100
export const BAND_H = 80
export const ALIGNED_TOL = 1
export const DRIFT_TOL = 1
export const ALIGNED_INK_TOPS = [
  0, 5, 10, 15, 20, 25, 30, 35, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65,
]

export const SCAN_OPTS = {
  capCrest: true,
  refineUpward: true,
  solidBand: true,
  ...INK_SCAN_CAP_CORE_DEFAULTS,
}

export function scanSyntheticRow(inkTop, barH = 12) {
  return inkTopIntegerRowFromImageData(
    syntheticInkBandRgba(BAND_W, BAND_H, inkTop, barH),
    BAND_W,
    BAND_H,
    SCAN_OPTS,
  )
}

const STAGE_FIXTURE = {
  live: {
    html: 'fo-live-ink-e2e.html',
    global: '__foLiveInkE2e',
  },
  svg: {
    html: 'fo-svg-ink-e2e.html',
    global: '__foSvgInkE2e',
  },
  canvas: {
    html: 'fo-canvas-ink-e2e.html',
    global: '__foCanvasInkE2e',
  },
}

/** @param {'live'|'svg'|'canvas'} path */
export function runStageNodeSynthetic(path, cases) {
  const errors = []
  const matrix = []
  for (const c of cases) {
    const inkTop = c.inkTop + (c.shift ?? 0)
    const barH = c.barH ?? 12
    const row = scanSyntheticRow(inkTop, barH)
    const pass = row != null && Math.abs(row - inkTop) <= ALIGNED_TOL
    matrix.push({ id: c.id, path, inkTop, barH, row, pass })
    if (!pass) errors.push(`${c.id}: row=${row} expected ${inkTop}`)
  }
  if (errors.length) throw new Error(`${path} synthetic:\n  ${errors.join('\n  ')}`)
  console.log(`[fo-${path}-ink-e2e] node synthetic OK (${matrix.length} cases)`)
  return matrix
}

export async function runStageHeaded(path, cases, label) {
  if (process.env.SKIP_HEADED === '1') {
    console.log(`[${label}] SKIP_HEADED=1 — headed skipped`)
    return
  }
  const fixture = STAGE_FIXTURE[path]
  if (!fixture) throw new Error(`unknown stage path: ${path}`)
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const base = `http://127.0.0.1:${port}/__localtests__/${fixture.html}`
  try {
    const results = []
    for (const c of cases) {
      const inkTop = c.inkTop + (c.shift ?? 0)
      const qs = new URLSearchParams({ inkTop: String(inkTop) })
      if (Number.isFinite(c.barH)) qs.set('barH', String(c.barH))
      if (path === 'canvas' && Number.isFinite(c.canvasShift)) {
        qs.set('canvasShift', String(c.canvasShift))
      }
      const url = `${base}?${qs}`
      await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
      await page.waitForFunction(
        (g) => window[g]?.ready === true,
        fixture.global,
        { timeout: 60_000 },
      )
      const bootErr = await page.evaluate((g) => window[g]?.bootError, fixture.global)
      if (bootErr) throw new Error(bootErr)
      const row = await page.evaluate((g) => window[g].scan(), fixture.global)
      const pass = row != null && Math.abs(row - inkTop) <= ALIGNED_TOL
      results.push({ id: c.id, path, inkTop, row, pass })
      if (!pass) {
        throw new Error(`${c.id}: row=${row} expected ${inkTop}`)
      }
    }
    console.log(`[${label}] headed OK (${results.length} cases)`)
  } finally {
    await browser.close()
    server.close()
  }
}

export function alignedCases(prefix) {
  return ALIGNED_INK_TOPS.map((inkTop) => ({ id: `${prefix}-aligned-${inkTop}`, inkTop, shift: 0 }))
}

export function borderTopCases(prefix) {
  return [
    { id: `${prefix}-border-top-0`, inkTop: 0, shift: 0 },
    { id: `${prefix}-border-top-5`, inkTop: 5, shift: 0 },
    { id: `${prefix}-border-top-down-5`, inkTop: 0, shift: 5 },
    { id: `${prefix}-border-top-up-5`, inkTop: 5, shift: -5 },
    { id: `${prefix}-border-top-down-5-from-40`, inkTop: 40, shift: 5 },
  ]
}

export function shiftCases(prefix) {
  return [
    { id: `${prefix}-down-1`, inkTop: 40, shift: 1 },
    { id: `${prefix}-down-2`, inkTop: 40, shift: 2 },
    { id: `${prefix}-down-3`, inkTop: 40, shift: 3 },
    { id: `${prefix}-down-5`, inkTop: 40, shift: 5 },
    { id: `${prefix}-down-8`, inkTop: 40, shift: 8 },
    { id: `${prefix}-down-10`, inkTop: 40, shift: 10 },
    { id: `${prefix}-down-12`, inkTop: 40, shift: 12 },
    { id: `${prefix}-up-3`, inkTop: 50, shift: -3 },
    { id: `${prefix}-up-5`, inkTop: 50, shift: -5 },
    { id: `${prefix}-up-8`, inkTop: 50, shift: -8 },
  ]
}

export function barHeightCases(prefix) {
  return [
    { id: `${prefix}-barh8-40`, inkTop: 40, barH: 8 },
    { id: `${prefix}-barh8-50`, inkTop: 50, barH: 8 },
    { id: `${prefix}-barh16-40`, inkTop: 40, barH: 16 },
    { id: `${prefix}-barh16-50`, inkTop: 50, barH: 16 },
  ]
}

#!/usr/bin/env node
/**
 * Canvas + SVG + live border-top (ink top) detection e2e.
 *
 * Fixture: black horizontal bar at known inkTop in 100×80 band.
 *   Live:   DOM bar → canvas fillRect → scan
 *   Canvas: SVG → Image.decode → drawImage → inkTopRowFromCanvasRegion
 *   SVG:    data-URL FO SVG → img → canvas → scan
 *
 * Matrix (each stage independently, ±1px tolerance):
 *   top-0       | inkTop 0 shift 0  → 0
 *   top-0-down-5| inkTop 0 shift +5 → 5
 *   baseline-40 | inkTop 40 shift 0  → 40
 *   down-5      | inkTop 40 shift +5 → 45
 *   down-10     | inkTop 40 shift +10 → 50
 *   up-5        | inkTop 50 shift -5 → 45
 *   up-5-from-45| inkTop 45 shift -5 → 40
 *
 * Cross-stage: inkTop 40, canvas shift +5 vs svg shift 0 → canvas 45, svg 40, delta 5.
 *
 *   npm run debug:fo-canvas-svg-border-e2e
 *   SKIP_HEADED=1 npm run debug:fo-canvas-svg-border-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  INK_SCAN_CAP_CORE_DEFAULTS,
  inkTopIntegerRowFromImageData,
  syntheticInkBandRgba,
} from './fo-ink-bounds-scan.mjs'

const BAND_W = 100
const BAND_H = 80
const TOL = 1

const SCAN_OPTS = {
  capCrest: true,
  refineUpward: true,
  solidBand: true,
  ...INK_SCAN_CAP_CORE_DEFAULTS,
}

/** @type {{ id: string, inkTop: number, shift: number, expectedTop: number }[]} */
export const STAGE_CASES = [
  { id: 'top-0', inkTop: 0, shift: 0, expectedTop: 0 },
  { id: 'top-0-down-5', inkTop: 0, shift: 5, expectedTop: 5 },
  { id: 'baseline-40', inkTop: 40, shift: 0, expectedTop: 40 },
  { id: 'down-5', inkTop: 40, shift: 5, expectedTop: 45 },
  { id: 'down-10', inkTop: 40, shift: 10, expectedTop: 50 },
  { id: 'up-5', inkTop: 50, shift: -5, expectedTop: 45 },
  { id: 'up-5-from-45', inkTop: 45, shift: -5, expectedTop: 40 },
]

export const STAGES = ['live', 'svg', 'canvas']

/** @type {{ id: string, inkTop: number, canvasShift: number, svgShift: number, expect: object }[]} */
export const CROSS_CASES = [
  {
    id: 'cross-canvas-down5',
    inkTop: 40,
    canvasShift: 5,
    svgShift: 0,
    expect: { canvasTop: 45, svgTop: 40, delta: 5 },
  },
]

function scanSyntheticRow(inkTop, barH = 12) {
  return inkTopIntegerRowFromImageData(
    syntheticInkBandRgba(BAND_W, BAND_H, inkTop, barH),
    BAND_W,
    BAND_H,
    SCAN_OPTS,
  )
}

/** Node synthetic — canvas drawImage Y shift mirrors headed fixture. */
function scanSyntheticCanvasRow(inkTop, canvasShift) {
  return scanSyntheticRow(inkTop + canvasShift)
}

function runNodeSynthetic() {
  const errors = []
  /** @type {object[]} */
  const matrix = []

  for (const stage of STAGES) {
    for (const c of STAGE_CASES) {
      const row =
        stage === 'canvas'
          ? scanSyntheticCanvasRow(c.inkTop, c.shift)
          : scanSyntheticRow(c.inkTop + c.shift)
      const pass = row != null && Math.abs(row - c.expectedTop) <= TOL
      matrix.push({
        id: `${stage}-${c.id}`,
        stage,
        inkTop: c.inkTop,
        shift: c.shift,
        expectedTop: c.expectedTop,
        row,
        pass,
      })
      if (!pass) {
        errors.push(`${stage}-${c.id}: row=${row} expected ${c.expectedTop}`)
      }
    }
  }

  for (const c of CROSS_CASES) {
    const canvasTop = scanSyntheticCanvasRow(c.inkTop, c.canvasShift)
    const svgTop = scanSyntheticRow(c.inkTop + c.svgShift)
    const delta = canvasTop != null && svgTop != null ? canvasTop - svgTop : null
    const exp = c.expect
    let pass = canvasTop != null && svgTop != null && delta != null
    if (pass && Math.abs(canvasTop - exp.canvasTop) > TOL) pass = false
    if (pass && Math.abs(svgTop - exp.svgTop) > TOL) pass = false
    if (pass && Math.abs(delta - exp.delta) > TOL) pass = false
    matrix.push({
      id: c.id,
      stage: 'cross',
      canvasTop,
      svgTop,
      delta,
      pass,
    })
    if (!pass) {
      errors.push(
        `${c.id}: canvas=${canvasTop} svg=${svgTop} delta=${delta} expected canvas=${exp.canvasTop} svg=${exp.svgTop} delta=${exp.delta}`,
      )
    }
  }

  if (errors.length) {
    throw new Error(`node synthetic:\n  ${errors.join('\n  ')}`)
  }
  console.log(`[fo-canvas-svg-border-e2e] node synthetic OK (${matrix.length} cases)`)
  return matrix
}

function printMatrixTable(matrix) {
  const cols = ['id', 'stage', 'expectedTop', 'row', 'canvasTop', 'svgTop', 'delta', 'pass']
  const rows = matrix.map((r) =>
    cols.map((k) => {
      if (k === 'expectedTop') return String(r.expectedTop ?? '')
      return String(r[k] ?? '')
    }),
  )
  const widths = cols.map((c, i) => Math.max(c.length, ...rows.map((row) => row[i].length)))
  console.log(cols.map((c, i) => c.padEnd(widths[i])).join('  '))
  console.log(widths.map((w) => '-'.repeat(w)).join('  '))
  for (const row of rows) {
    console.log(row.map((cell, i) => cell.padEnd(widths[i])).join('  '))
  }
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-canvas-svg-border-e2e] SKIP_HEADED=1 — headed skipped')
    return null
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-canvas-svg-border-e2e.html`
  console.log(`[fo-canvas-svg-border-e2e] ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foCanvasSvgBorderE2e?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foCanvasSvgBorderE2e?.bootError)
    if (bootErr) throw new Error(bootErr)

    const payload = await page.evaluate(() => window.__foCanvasSvgBorderE2e.run())
    return payload
  } finally {
    await browser.close()
    server.close()
  }
}

async function main() {
  const syntheticMatrix = runNodeSynthetic()
  printMatrixTable(syntheticMatrix)

  const headedPayload = await runHeaded()
  if (!headedPayload) return

  console.log(JSON.stringify(headedPayload, null, 2))
  printMatrixTable(headedPayload.matrix)

  const failed = headedPayload.matrix.filter((r) => !r.pass)
  if (!headedPayload.pass) {
    console.error(
      'FAIL —',
      failed.map((r) => `${r.id}: ${r.errors?.join('; ')}`).join('\n  '),
    )
    process.exitCode = 1
    return
  }
  console.log(
    `PASS — ${headedPayload.matrix.length}/${headedPayload.matrix.length} cases (±${headedPayload.tol}px)`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

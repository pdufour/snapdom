#!/usr/bin/env node
/**
 * Ink detection matrix e2e — 3 stages × inkTop [0,5,20,40,60] × shift [0,5,10] = 45 cases.
 *
 *   npm run debug:fo-ink-detection-matrix-e2e
 *   SKIP_HEADED=1 npm run debug:fo-ink-detection-matrix-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { ALIGNED_TOL, scanSyntheticRow } from './fo-ink-e2e-runner.mjs'

const PATHS = ['live', 'svg', 'canvas']
const INK_TOPS = [0, 5, 20, 40, 60]
const SHIFTS = [0, 5, 10]

function buildCases() {
  /** @type {{ id: string, path: string, inkTop: number, shift: number, expectedTop: number }[]} */
  const cases = []
  for (const path of PATHS) {
    for (const inkTop of INK_TOPS) {
      for (const shift of SHIFTS) {
        cases.push({
          id: `${path}-t${inkTop}-s${shift}`,
          path,
          inkTop,
          shift,
          expectedTop: inkTop + shift,
        })
      }
    }
  }
  return cases
}

function runNodeSynthetic() {
  const cases = buildCases()
  const errors = []
  const matrix = []
  for (const c of cases) {
    const row = scanSyntheticRow(c.expectedTop)
    const pass = row != null && Math.abs(row - c.expectedTop) <= ALIGNED_TOL
    matrix.push({ id: c.id, path: c.path, expectedTop: c.expectedTop, row, pass })
    if (!pass) errors.push(`${c.id}: row=${row} expected ${c.expectedTop}`)
  }
  if (errors.length) throw new Error(`node synthetic:\n  ${errors.join('\n  ')}`)
  console.log(`[fo-ink-detection-matrix-e2e] node synthetic OK (${matrix.length} cases)`)
  return matrix
}

function printTable(matrix) {
  const cols = ['id', 'path', 'expectedTop', 'row', 'pass']
  const rows = matrix.map((r) => cols.map((k) => String(r[k] ?? '')))
  const widths = cols.map((c, i) =>
    Math.max(c.length, ...rows.map((row) => row[i].length)),
  )
  const header = cols.map((c, i) => c.padEnd(widths[i])).join('  ')
  const sep = widths.map((w) => '-'.repeat(w)).join('  ')
  console.log(header)
  console.log(sep)
  for (const row of rows) {
    console.log(row.map((cell, i) => cell.padEnd(widths[i])).join('  '))
  }
}

async function main() {
  runNodeSynthetic()
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-ink-detection-matrix-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-ink-detection-matrix-e2e.html`
  console.log(`[fo-ink-detection-matrix-e2e] ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foInkDetectionMatrix?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foInkDetectionMatrix?.bootError)
    if (bootErr) throw new Error(bootErr)

    const payload = await page.evaluate(() => window.__foInkDetectionMatrix.run())
    printTable(payload.matrix)
    const passed = payload.matrix.filter((r) => r.pass).length
    if (!payload.pass) {
      const fails = payload.matrix.filter((r) => !r.pass)
      console.error('FAIL —', fails.map((r) => `${r.id}: ${r.errors?.join('; ')}`).join('\n  '))
      process.exitCode = 1
      return
    }
    console.log(`PASS — ${passed}/${payload.matrix.length} cases (±${payload.tol}px)`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

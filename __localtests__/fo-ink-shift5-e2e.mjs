#!/usr/bin/env node
/**
 * Focused ±5px ink-top shift e2e — live, svg, canvas.
 * top-0 (row 0), top-0+5 (row 5); baseline inkTop=40; +5px → 45; −5px from 50 → 45.
 *
 *   npm run debug:fo-ink-shift5-e2e
 *   SKIP_HEADED=1 npm run debug:fo-ink-shift5-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  ALIGNED_TOL,
  scanSyntheticRow,
} from './fo-ink-e2e-runner.mjs'

const BASE = 40
const SHIFT = 5

/** @type {{ id: string, path: 'live'|'svg'|'canvas', inkTop: number, expectRow: number }[]} */
const CASES = [
  { id: 'live-top-0', path: 'live', inkTop: 0, expectRow: 0 },
  { id: 'live-top-0-down-5', path: 'live', inkTop: SHIFT, expectRow: SHIFT },
  { id: 'live-baseline', path: 'live', inkTop: BASE, expectRow: BASE },
  { id: 'live-down-5', path: 'live', inkTop: BASE + SHIFT, expectRow: BASE + SHIFT },
  { id: 'live-up-5', path: 'live', inkTop: 50 - SHIFT, expectRow: 45 },
  { id: 'svg-top-0', path: 'svg', inkTop: 0, expectRow: 0 },
  { id: 'svg-top-0-down-5', path: 'svg', inkTop: SHIFT, expectRow: SHIFT },
  { id: 'svg-baseline', path: 'svg', inkTop: BASE, expectRow: BASE },
  { id: 'svg-down-5', path: 'svg', inkTop: BASE + SHIFT, expectRow: BASE + SHIFT },
  { id: 'svg-up-5', path: 'svg', inkTop: 50 - SHIFT, expectRow: 45 },
  { id: 'canvas-top-0', path: 'canvas', inkTop: 0, expectRow: 0 },
  { id: 'canvas-top-0-down-5', path: 'canvas', inkTop: SHIFT, expectRow: SHIFT },
  { id: 'canvas-baseline', path: 'canvas', inkTop: BASE, expectRow: BASE },
  { id: 'canvas-down-5', path: 'canvas', inkTop: BASE + SHIFT, expectRow: BASE + SHIFT },
  { id: 'canvas-up-5', path: 'canvas', inkTop: 50 - SHIFT, expectRow: 45 },
]

function runNodeSynthetic() {
  const errors = []
  for (const c of CASES) {
    const row = scanSyntheticRow(c.inkTop)
    if (row == null || Math.abs(row - c.expectRow) > ALIGNED_TOL) {
      errors.push(`${c.id}: row=${row} expected ${c.expectRow}`)
    } else {
      console.log(`  ✓ ${c.id} row=${row}`)
    }
  }
  if (errors.length) throw new Error(`synthetic fail:\n  ${errors.join('\n  ')}`)
  console.log(`[fo-ink-shift5-e2e] node synthetic OK (${CASES.length} cases)`)
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-ink-shift5-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const fixture = `http://127.0.0.1:${port}/__localtests__/fo-per-stage-ink-e2e.html`
  try {
    for (const c of CASES) {
      const url = `${fixture}?path=${c.path}&inkTop=${c.inkTop}`
      await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
      await page.waitForFunction(() => window.__foPerStageInk?.ready === true, null, {
        timeout: 60_000,
      })
      const row = await page.evaluate(async () => window.__foPerStageInk.scan())
      if (row == null || Math.abs(row - c.expectRow) > ALIGNED_TOL) {
        throw new Error(`${c.id}: row=${row} expected ${c.expectRow}`)
      }
      console.log(`  ✓ ${c.id} headed row=${row}`)
    }
    console.log(`[fo-ink-shift5-e2e] headed OK (${CASES.length} cases)`)
  } finally {
    await browser.close()
    server.close()
  }
}

async function main() {
  runNodeSynthetic()
  await runHeaded()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})

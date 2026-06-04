#!/usr/bin/env node
/**
 * Ink detection blackbox e2e — live, svg, canvas.
 *
 * Observable-only: bar position in → ink top row out (±1px).
 *   top-0           inkTop 0  → row 0
 *   top-0 + 5px     inkTop 5  → row 5
 *   baseline 40     inkTop 40 → row 40
 *   baseline + 5px  inkTop 45 → row 45
 *   delta +5        scan(n) then scan(n+5) → Δrow = 5
 *   delta −5        scan(5) then scan(0)   → Δrow = −5
 *
 *   npm run test:fo-ink-blackbox-e2e
 *   SKIP_HEADED=1 npm run test:fo-ink-blackbox-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { ALIGNED_TOL, scanSyntheticRow } from './fo-ink-e2e-runner.mjs'

/** @type {const} */
const STAGES = ['live', 'svg', 'canvas']

/** @type {{ id: string, path: typeof STAGES[number], inkTop: number, expectRow: number }[]} */
const STATIC = STAGES.flatMap((path) => [
  { id: `${path}-border-top-0`, path, inkTop: 0, expectRow: 0 },
  { id: `${path}-border-top-5`, path, inkTop: 5, expectRow: 5 },
  { id: `${path}-baseline-40`, path, inkTop: 40, expectRow: 40 },
  { id: `${path}-baseline-40-down-5`, path, inkTop: 45, expectRow: 45 },
])

/** @type {{ id: string, path: typeof STAGES[number], base: number, shift: number }[]} */
const DELTA = STAGES.flatMap((path) => [
  { id: `${path}-delta-0-to-5`, path, base: 0, shift: 5 },
  { id: `${path}-delta-40-to-45`, path, base: 40, shift: 5 },
  { id: `${path}-delta-5-to-0`, path, base: 5, shift: -5 },
  { id: `${path}-delta-45-to-40`, path, base: 45, shift: -5 },
])

const ALL = STATIC.length + DELTA.length

function runSynthetic() {
  const errors = []
  for (const c of STATIC) {
    const row = scanSyntheticRow(c.inkTop)
    if (row == null || Math.abs(row - c.expectRow) > ALIGNED_TOL) {
      errors.push(`${c.id}: row=${row} expected ${c.expectRow}`)
    } else {
      console.log(`  ✓ ${c.id} row=${row}`)
    }
  }
  for (const c of DELTA) {
    const r0 = scanSyntheticRow(c.base)
    const r1 = scanSyntheticRow(c.base + c.shift)
    const delta = r1 != null && r0 != null ? r1 - r0 : null
    if (delta == null || Math.abs(delta - c.shift) > ALIGNED_TOL) {
      errors.push(`${c.id}: Δ=${delta} expected ${c.shift}`)
    } else {
      console.log(`  ✓ ${c.id} Δrow=${delta}`)
    }
  }
  if (errors.length) throw new Error(`synthetic:\n  ${errors.join('\n  ')}`)
  console.log(`[fo-ink-blackbox-e2e] synthetic OK (${ALL} cases)`)
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-ink-blackbox-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-ink-blackbox-e2e.html`
  console.log(`[fo-ink-blackbox-e2e] ${url}`)
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foInkBlackboxE2e?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foInkBlackboxE2e?.bootError)
    if (bootErr) throw new Error(bootErr)
    const payload = await page.evaluate(() => window.__foInkBlackboxE2e.run())
    for (const r of payload.matrix) {
      if (r.pass) {
        const detail = r.delta != null ? `Δrow=${r.delta}` : `row=${r.row}`
        console.log(`  ✓ ${r.id} headed ${detail}`)
      }
    }
    if (!payload.pass) {
      const fails = payload.matrix.filter((r) => !r.pass)
      throw new Error(fails.map((r) => `${r.id}: ${r.errors?.join('; ')}`).join('\n  '))
    }
    console.log(`[fo-ink-blackbox-e2e] headed OK (${payload.matrix.length} cases)`)
  } finally {
    await browser.close()
    server.close()
  }
}

async function main() {
  runSynthetic()
  await runHeaded()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})

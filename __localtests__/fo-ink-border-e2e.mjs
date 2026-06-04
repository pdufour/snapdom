#!/usr/bin/env node
/**
 * Top border (ink top) detection e2e — live, svg, canvas.
 *
 * Cases per stage:
 *   top-0     — bar flush at band top (row 0)
 *   at-40     — baseline
 *   top-0+5   — move 5px down from top (row 5)
 *   at-40+5   — move 5px down from 40 (row 45)
 *   delta-5   — scan(base) then scan(base+5); assert Δrow = 5
 *
 *   npm run debug:fo-ink-border-e2e
 *   SKIP_HEADED=1 npm run debug:fo-ink-border-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { ALIGNED_TOL, scanSyntheticRow } from './fo-ink-e2e-runner.mjs'

/** @type {const} */
const STAGES = ['live', 'svg', 'canvas']

/** @type {{ id: string, path: typeof STAGES[number], inkTop: number, expectRow: number }[]} */
const STATIC_CASES = STAGES.flatMap((path) => [
  { id: `${path}-top-0`, path, inkTop: 0, expectRow: 0 },
  { id: `${path}-at-40`, path, inkTop: 40, expectRow: 40 },
  { id: `${path}-top-0-plus-5`, path, inkTop: 5, expectRow: 5 },
  { id: `${path}-at-40-plus-5`, path, inkTop: 45, expectRow: 45 },
])

/** @type {{ id: string, path: typeof STAGES[number], base: number, shift: number }[]} */
const DELTA_CASES = STAGES.flatMap((path) => [
  { id: `${path}-delta-0-to-5`, path, base: 0, shift: 5 },
  { id: `${path}-delta-40-to-45`, path, base: 40, shift: 5 },
])

async function scanHeaded(page, fixture, path, inkTop) {
  const url = `${fixture}?path=${path}&inkTop=${inkTop}`
  await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
  await page.waitForFunction(() => window.__foPerStageInk?.ready === true, null, {
    timeout: 60_000,
  })
  const bootErr = await page.evaluate(() => window.__foPerStageInk?.bootError)
  if (bootErr) throw new Error(bootErr)
  return page.evaluate(async () => window.__foPerStageInk.scan())
}

function runNodeSynthetic() {
  const errors = []
  for (const c of STATIC_CASES) {
    const row = scanSyntheticRow(c.inkTop)
    if (row == null || Math.abs(row - c.expectRow) > ALIGNED_TOL) {
      errors.push(`${c.id}: row=${row} expected ${c.expectRow}`)
    } else {
      console.log(`  ✓ ${c.id} row=${row}`)
    }
  }
  for (const c of DELTA_CASES) {
    const r0 = scanSyntheticRow(c.base)
    const r1 = scanSyntheticRow(c.base + c.shift)
    const delta = r1 != null && r0 != null ? r1 - r0 : null
    if (delta == null || Math.abs(delta - c.shift) > ALIGNED_TOL) {
      errors.push(`${c.id}: Δ=${delta} expected ${c.shift} (r0=${r0} r1=${r1})`)
    } else {
      console.log(`  ✓ ${c.id} Δrow=${delta}`)
    }
  }
  if (errors.length) throw new Error(`synthetic:\n  ${errors.join('\n  ')}`)
  console.log(
    `[fo-ink-border-e2e] node synthetic OK (${STATIC_CASES.length + DELTA_CASES.length} cases)`,
  )
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-ink-border-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const fixture = `http://127.0.0.1:${port}/__localtests__/fo-per-stage-ink-e2e.html`
  try {
    for (const c of STATIC_CASES) {
      const row = await scanHeaded(page, fixture, c.path, c.inkTop)
      if (row == null || Math.abs(row - c.expectRow) > ALIGNED_TOL) {
        throw new Error(`${c.id}: row=${row} expected ${c.expectRow}`)
      }
      console.log(`  ✓ ${c.id} headed row=${row}`)
    }
    for (const c of DELTA_CASES) {
      const r0 = await scanHeaded(page, fixture, c.path, c.base)
      const r1 = await scanHeaded(page, fixture, c.path, c.base + c.shift)
      const delta = r1 - r0
      if (Math.abs(delta - c.shift) > ALIGNED_TOL) {
        throw new Error(`${c.id}: Δ=${delta} expected ${c.shift} (r0=${r0} r1=${r1})`)
      }
      console.log(`  ✓ ${c.id} headed Δrow=${delta}`)
    }
    console.log(
      `[fo-ink-border-e2e] headed OK (${STATIC_CASES.length + DELTA_CASES.length} cases)`,
    )
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

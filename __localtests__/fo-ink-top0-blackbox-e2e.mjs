#!/usr/bin/env node
/**
 * Minimal ink blackbox — bar at top 0px must scan as row 0 (0px); +5px → row 5; Δ=5.
 * live, svg, canvas (9 checks).
 *
 *   npm run test:fo-ink-top0-blackbox-e2e
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { scanSyntheticRow } from './fo-ink-e2e-runner.mjs'

/** @type {const} */
const STAGES = ['live', 'svg', 'canvas']

async function scanHeaded(page, port, path, inkTop) {
  const url = `http://127.0.0.1:${port}/__localtests__/fo-per-stage-ink-e2e.html?path=${path}&inkTop=${inkTop}`
  await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
  await page.waitForFunction(() => window.__foPerStageInk?.ready === true, null, { timeout: 60_000 })
  return page.evaluate(async () => window.__foPerStageInk.scan())
}

function assertTopPx(stage, inkTopPx, row) {
  if (row !== inkTopPx) {
    throw new Error(
      `${stage}: bar at top ${inkTopPx}px must scan as row ${inkTopPx}, got ${row}`,
    )
  }
}

function runSynthetic() {
  for (const path of STAGES) {
    const r0 = scanSyntheticRow(0)
    const r5 = scanSyntheticRow(5)
    assertTopPx(path, 0, r0)
    assertTopPx(path, 5, r5)
    if (r5 - r0 !== 5) throw new Error(`${path} synthetic delta: ${r5 - r0}`)
    console.log(`  ✓ ${path} top 0px → row ${r0}px; top 5px → row ${r5}px; Δ=5px`)
  }
  console.log('[fo-ink-top0-blackbox-e2e] synthetic OK (9 checks)')
}

async function runHeaded() {
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-ink-top0-blackbox-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  try {
    for (const path of STAGES) {
      const r0 = await scanHeaded(page, port, path, 0)
      const r5 = await scanHeaded(page, port, path, 5)
      assertTopPx(path, 0, r0)
      assertTopPx(path, 5, r5)
      if (r5 - r0 !== 5) throw new Error(`${path} delta: ${r5 - r0}px (expected 5px)`)
      console.log(`  ✓ ${path} headed top 0px → row ${r0}px; top 5px → row ${r5}px; Δ=5px`)
    }
    console.log('[fo-ink-top0-blackbox-e2e] headed OK (9 checks)')
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

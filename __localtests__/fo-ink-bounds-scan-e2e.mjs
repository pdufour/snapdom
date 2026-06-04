#!/usr/bin/env node
/**
 * Ink bounds scan backends: native-lum, image-trim within ±5px of row 45.
 *   npm run test:fo-ink-bounds-e2e
 *   SKIP_HEADED=1 node __localtests__/fo-ink-bounds-scan-e2e.mjs
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  INK_SCAN_CAP_CORE_DEFAULTS,
  inkTopIntegerRowFromImageData,
  syntheticInkBandRgba,
} from './fo-ink-bounds-scan.mjs'

const EXPECT_ROW = 45
const TOL = 5

function runNodeSynthetic() {
  const w = 120
  const h = 100
  const data = syntheticInkBandRgba(w, h, EXPECT_ROW, 8)
  const row = inkTopIntegerRowFromImageData(data, w, h, {
    capCrest: true,
    refineUpward: true,
    ...INK_SCAN_CAP_CORE_DEFAULTS,
  })
  if (row !== EXPECT_ROW) {
    throw new Error(`node synthetic: expected row ${EXPECT_ROW}, got ${row}`)
  }
  console.log('[fo-ink-bounds-scan-e2e] node synthetic OK')
}

async function main() {
  runNodeSynthetic()
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-ink-bounds-scan-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-ink-bounds-scan-e2e.html`
  console.log(`[fo-ink-bounds-scan-e2e] ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foInkBoundsScanE2e?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foInkBoundsScanE2e?.bootError)
    if (bootErr) throw new Error(bootErr)

    const payload = await page.evaluate(() => window.__foInkBoundsScanE2e.run())
    console.log(JSON.stringify(payload, null, 2))
    if (!payload.pass) {
      process.exitCode = 1
      return
    }
    const rows = payload.matrix ?? payload.results ?? []
    const winner = rows.filter((r) => r.pass).sort((a, b) => a.err - b.err)[0]
    console.log(
      `PASS — ${rows.length} scan(s); best: ${winner?.backend ?? '—'} row ${winner?.row} (err ${winner?.err})`,
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

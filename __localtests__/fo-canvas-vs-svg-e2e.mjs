#!/usr/bin/env node
/**
 * Canvas ink top ~2–3px higher on screen than SVG (smaller device row).
 *   npm run test:fo-canvas-vs-svg-e2e
 *   SKIP_HEADED=1 node __localtests__/fo-canvas-vs-svg-e2e.mjs
 */
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import {
  INK_SCAN_CAP_CORE_DEFAULTS,
  inkTopIntegerRowFromImageData,
  syntheticInkBandRgba,
} from './fo-ink-bounds-scan.mjs'

const SVG_ROW = 48
const CANVAS_ROW = 45
const MIN_GAP = 2
const MAX_GAP = 3.5

function runNodeSignSanity() {
  const w = 80
  const h = 100
  const svgRow = inkTopIntegerRowFromImageData(syntheticInkBandRgba(w, h, SVG_ROW), w, h, {
    capCrest: true,
    refineUpward: true,
    ...INK_SCAN_CAP_CORE_DEFAULTS,
  })
  const canvasRow = inkTopIntegerRowFromImageData(
    syntheticInkBandRgba(w, h, CANVAS_ROW),
    w,
    h,
    { capCrest: true, refineUpward: true, ...INK_SCAN_CAP_CORE_DEFAULTS },
  )
  const delta = svgRow - canvasRow
  if (!(canvasRow < svgRow && delta >= MIN_GAP && delta <= MAX_GAP)) {
    throw new Error(`node sign sanity failed: svg=${svgRow} canvas=${canvasRow} delta=${delta}`)
  }
  console.log('[fo-canvas-vs-svg-e2e] node sign sanity OK')
}

async function main() {
  runNodeSignSanity()
  if (process.env.SKIP_HEADED === '1') {
    console.log('[fo-canvas-vs-svg-e2e] SKIP_HEADED=1 — headed skipped')
    return
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  const url = `http://127.0.0.1:${port}/__localtests__/fo-canvas-vs-svg-e2e.html`
  console.log(`[fo-canvas-vs-svg-e2e] ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60_000 })
    await page.waitForFunction(() => window.__foCanvasVsSvgE2e?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foCanvasVsSvgE2e?.bootError)
    if (bootErr) throw new Error(bootErr)

    const payload = await page.evaluate(() => window.__foCanvasVsSvgE2e.run())
    console.log(JSON.stringify(payload, null, 2))
    if (!payload.pass) process.exitCode = 1
    else console.log('PASS — canvas ink higher than SVG')
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

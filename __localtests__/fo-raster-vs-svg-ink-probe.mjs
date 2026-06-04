#!/usr/bin/env node
/**
 * Three-way ink on mini Home: live vs inline FO vs canvas raster (product-baseline).
 * Headed Chrome only.
 *
 *   SNAPDOM_LOCAL_PORT=8786 node __localtests__/fo-raster-vs-svg-ink-probe.mjs
 *   node __localtests__/fo-raster-vs-svg-ink-probe.mjs --json .sandbox-edit/raster-vs-svg-ink-probe.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { fmtInkPx } from './fo-ink-metric-format.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'raster-vs-svg-ink-probe.json')
const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({ dpr: '2', scale: '1', landmark: 'Home' })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-raster-vs-svg-ink-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foRasterVsSvgInkProbe?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foRasterVsSvgInkProbe?.bootError)
    if (bootErr) throw new Error(`Boot failed: ${bootErr}`)

    const payload = await page.evaluate(async () => window.__foRasterVsSvgInkProbe.run())
    payload.generatedAt = new Date().toISOString()
    payload.port = port

    const outPath = jsonOutArg
      ? path.resolve(process.cwd(), jsonOutArg)
      : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    console.log(`Verdict: ${payload.verdict}`)
    const ink = payload.ink || {}
    console.log(
      `svgΔ=${fmtInkPx(ink.liveVsSvgTopPx)} canvasΔ=${fmtInkPx(ink.liveVsCanvasTopPx)} svg↔canvas=${fmtInkPx(ink.svgVsCanvasTopPx)}`,
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

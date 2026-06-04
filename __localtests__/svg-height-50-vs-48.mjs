#!/usr/bin/env node
/**
 * Root-cause: why decoded SVG is 500×50 not 500×48 for mini nav capture.
 * Parses capture SVG (svgOutH, viewBox, FO, pad inference) vs live layout + ink drift.
 *
 *   npm run compile && node __localtests__/svg-height-50-vs-48.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'svg-height-50-vs-48.json')

async function main() {
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = '9911'
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  const url = `http://127.0.0.1:${port}/__localtests__/svg-height-50-vs-48.html?dpr=2&scale=1&landmark=Home`
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__svgHeight5048?.ready === true, null, { timeout: 120_000 })
    const bootErr = await page.evaluate(() => window.__svgHeight5048?.bootError)
    if (bootErr) throw new Error(bootErr)
    const payload = await page.evaluate(async () => window.__svgHeight5048.run())
    payload.generatedAt = new Date().toISOString()
    payload.port = port

    await fs.promises.mkdir(path.dirname(DEFAULT_OUT), { recursive: true })
    await fs.promises.writeFile(DEFAULT_OUT, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${DEFAULT_OUT}`)
    console.log(JSON.stringify(payload.summary, null, 2))
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

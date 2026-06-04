#!/usr/bin/env node
/**
 * actualBoundingBoxAscent/Descent vs half-leading predictors for canvasΔ.
 *
 *   npm run compile && node __localtests__/fo-font-metrics-probe.mjs
 *   node __localtests__/fo-font-metrics-probe.mjs --json .sandbox-edit/fo-font-metrics-probe.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-font-metrics-probe.json')

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const dpr = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 560 })

  const url = `http://127.0.0.1:${port}/__localtests__/fo-font-metrics-probe.html?dpr=${dpr}`
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foFontMetricsProbe?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foFontMetricsProbe?.bootError)
  if (bootErr) throw new Error(bootErr)

  const payload = await page.evaluate(() => window.__foFontMetricsProbe.result)
  payload.port = port
  payload.headed = process.env.HEADLESS !== '1'
  payload.chromeVersion = await page.evaluate(() => navigator.userAgent)

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- FO font metrics ---')
  for (const row of payload.landmarks ?? []) {
    console.log(
      `${row.landmark}: canvasΔ=${row.canvasOffsetPx ?? '—'} halfLeading=${row.halfLeadingLhFsPx ?? '—'} |Δ|=${row.predictors?.halfLeadingLhFsDeltaAbs ?? '—'}`,
    )
  }
  console.log(`bestPredictor=${payload.synthesis?.bestPredictor ?? '—'}`)
  console.log(`Wrote ${jsonOut}`)

  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})

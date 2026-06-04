#!/usr/bin/env node
/**
 * DPR sweep — canvasΔ class at 1, 1.25, 1.5, 2, 2.5.
 *
 *   npm run compile && node __localtests__/fo-dpr-sweep-probe.mjs
 *   node __localtests__/fo-dpr-sweep-probe.mjs --json .sandbox-edit/fo-dpr-sweep-probe.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-dpr-sweep-probe.json')
const DEFAULT_DPRS = '1,1.25,1.5,2,2.5'

const args = process.argv.slice(2)
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : DEFAULT_OUT
const dprs = args.includes('--dprs') ? args[args.indexOf('--dprs') + 1] : DEFAULT_DPRS

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 560 })

  const url = `http://127.0.0.1:${port}/__localtests__/fo-dpr-sweep-probe.html?dprs=${encodeURIComponent(dprs)}`
  await page.goto(url, { waitUntil: 'load', timeout: 300_000 })
  await page.waitForFunction(() => window.__foDprSweepProbe?.ready === true, null, {
    timeout: 600_000,
  })
  const bootErr = await page.evaluate(() => window.__foDprSweepProbe?.bootError)
  if (bootErr) throw new Error(bootErr)

  const payload = await page.evaluate(() => window.__foDprSweepProbe.result)
  payload.port = port
  payload.headed = process.env.HEADLESS !== '1'
  payload.chromeVersion = await page.evaluate(() => navigator.userAgent)

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- FO DPR sweep ---')
  for (const row of payload.rows ?? []) {
    console.log(
      `  dpr=${row.dpr} canvasΔ=${row.threeWay?.liveVsCanvasTopPx?.toFixed(3) ?? '—'} class=${row.classification} residual=${row.residualFromHalfLeadingPx ?? '—'}`,
    )
  }
  console.log(`spread=${payload.synthesis?.canvasDeltaSpreadPx ?? '—'} dpr2−dpr1=${payload.synthesis?.dpr2MinusDpr1Px ?? '—'}`)
  console.log(`Wrote ${jsonOut}`)

  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})

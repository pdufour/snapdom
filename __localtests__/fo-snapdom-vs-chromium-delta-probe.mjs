#!/usr/bin/env node
/**
 * Byte-diff snapdom capture SVG vs hand-built static FO at decode time.
 *
 *   npm run compile && node __localtests__/fo-snapdom-vs-chromium-delta-probe.mjs
 *   node __localtests__/fo-snapdom-vs-chromium-delta-probe.mjs --json .sandbox-edit/fo-snapdom-vs-chromium-delta-probe.json
 *
 * Headed Chrome only.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-snapdom-vs-chromium-delta-probe.json')

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

  const url = `http://127.0.0.1:${port}/__localtests__/fo-snapdom-vs-chromium-delta-probe.html?dpr=${dpr}`
  await page.goto(url, { waitUntil: 'load', timeout: 180_000 })
  await page.waitForFunction(() => window.__foSnapdomVsChromiumDeltaProbe?.ready === true, null, {
    timeout: 300_000,
  })
  const bootErr = await page.evaluate(() => window.__foSnapdomVsChromiumDeltaProbe?.bootError)
  if (bootErr) throw new Error(bootErr)

  const payload = await page.evaluate(() => window.__foSnapdomVsChromiumDeltaProbe.result)
  payload.port = port
  payload.headed = process.env.HEADLESS !== '1'
  payload.chromeVersion = await page.evaluate(() => navigator.userAgent)

  await fs.promises.mkdir(path.dirname(jsonOut), { recursive: true })
  await fs.promises.writeFile(jsonOut, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- FO snapdom vs chromium delta ---')
  console.log(`SVG byte diff: ${payload.byteDiff?.diffByteCount ?? '—'} bytes (identical=${payload.byteDiff?.identical})`)
  console.log(`snapdom canvasΔ=${payload.decode?.snapdomCaptureSvg?.canvasDelta ?? '—'}`)
  console.log(`hand-built canvasΔ=${payload.decode?.handBuiltStaticSvg?.canvasDelta ?? '—'}`)
  console.log(`decode Δ=${payload.decode?.canvasDeltaDiffPx ?? '—'} — ${payload.synthesis?.decodeInvariant ?? '—'}`)
  console.log(`Wrote ${jsonOut}`)

  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})

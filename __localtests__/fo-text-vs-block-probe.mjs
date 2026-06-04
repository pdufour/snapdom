#!/usr/bin/env node
/**
 * Text vs block three-way ink in one FO — is drift text-only or whole-content shift?
 *
 *   node __localtests__/fo-text-vs-block-probe.mjs
 *   node __localtests__/fo-text-vs-block-probe.mjs --json .sandbox-edit/text-vs-block-probe.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'text-vs-block-probe.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

function printTable(payload) {
  const t = payload.text?.threeWay ?? {}
  const b = payload.block?.threeWay ?? {}
  console.log('\n--- FO text vs block three-way ink (canvas scan) ---\n')
  console.log(`Verdict: ${payload.verdict ?? '—'}\n`)
  console.log(
    'target'.padEnd(8) +
      'live'.padStart(8) +
      'svg'.padStart(8) +
      'canvas'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  console.log(
    'text'.padEnd(8) +
      fmt(t.livePaintedTopInBorder).padStart(8) +
      fmt(t.svgPaintedTopInBorder).padStart(8) +
      fmt(t.canvasPaintedTopInBorder).padStart(8) +
      fmt(t.liveVsSvgTopPx).padStart(8) +
      fmt(t.liveVsCanvasTopPx).padStart(9),
  )
  console.log(
    'block'.padEnd(8) +
      fmt(b.livePaintedTopInBorder).padStart(8) +
      fmt(b.svgPaintedTopInBorder).padStart(8) +
      fmt(b.canvasPaintedTopInBorder).padStart(8) +
      fmt(b.liveVsSvgTopPx).padStart(8) +
      fmt(b.liveVsCanvasTopPx).padStart(9),
  )
  console.log(
    `\nCanvas Δ gap (|text−block|): ${fmt(payload.summary?.canvasDeltaGapPx)}px`,
  )
  console.log(`SVG Δ gap (|text−block|):    ${fmt(payload.summary?.svgDeltaGapPx)}px`)
  for (const line of payload.interpretation ?? []) {
    console.log(`  · ${line}`)
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-text-vs-block-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foTextVsBlockProbe?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foTextVsBlockProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(async () => window.__foTextVsBlockProbe.run())
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.headless = process.env.HEADLESS === '1'
    payload.commands = [
      'npm run compile',
      'node __localtests__/fo-text-vs-block-probe.mjs',
    ]

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    printTable(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

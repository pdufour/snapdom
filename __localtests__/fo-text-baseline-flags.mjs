#!/usr/bin/env node
/**
 * Headed probe: experimentalFoTextBaselineFix vs experimentalFoTextLineHeightNormal.
 *
 *   npm run compile && node __localtests__/fo-text-baseline-flags.mjs
 *   node __localtests__/fo-text-baseline-flags.mjs --json .sandbox-edit/text-baseline-flags.json
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '..', '.sandbox-edit', 'text-baseline-flags.json')
const PLATEAU_PX = 2.797
const PLATEAU_TOL = 0.15
const SIGNIFICANT_PX = 0.05

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function interpret(payload) {
  const baseline = payload.baselineCanvasDeltaPx
  const absBaseline = baseline != null ? Math.abs(baseline) : null
  const atPlateau =
    absBaseline != null && Math.abs(absBaseline - PLATEAU_PX) <= PLATEAU_TOL

  /** @type {string[]} */
  const lines = []
  if (baseline != null) {
    lines.push(`Baseline canvasΔ=${roundPx(baseline)}px (|Δ|=${roundPx(absBaseline)}px).`)
  }
  if (atPlateau) {
    lines.push(
      `Baseline still at ~${PLATEAU_PX}px plateau — text baseline flags did NOT fix checkout nav drift.`,
    )
  } else if (absBaseline != null && absBaseline < 0.5) {
    lines.push('Baseline canvasΔ < 0.5px — drift may be fixed (verify blackbox).')
  }

  for (const row of payload.comparisons ?? []) {
    if (row.id === 'baseline') continue
    const ch = row.deltaFromBaselinePx
    if (ch == null) continue
    if (Math.abs(ch) >= SIGNIFICANT_PX) {
      lines.push(
        `${row.id}: canvasΔ=${roundPx(row.canvasDeltaPx)}px (Δ from baseline ${ch >= 0 ? '+' : ''}${roundPx(ch)}px).`,
      )
    } else {
      lines.push(`${row.id}: no meaningful canvasΔ change vs baseline (${roundPx(ch)}px).`)
    }
    if (row.id === 'textBaselineFix' || row.id === 'both') {
      lines.push(
        `${row.id}: svgHasBaselineFixCss=${row.svgHasBaselineFixCss === true}, svgHasLeadingTrim=${row.svgHasLeadingTrim === true}.`,
      )
    }
  }

  const anyImprovement = (payload.comparisons ?? []).some(
    (row) =>
      row.id !== 'baseline' &&
      row.canvasDeltaPx != null &&
      baseline != null &&
      Math.abs(row.canvasDeltaPx) < Math.abs(baseline) - SIGNIFICANT_PX,
  )

  let verdict = 'NOT_FIXED_AT_PLATEAU'
  if (!atPlateau && absBaseline != null && absBaseline < 0.5) verdict = 'BASELINE_CLEAN'
  else if (anyImprovement) verdict = 'PARTIAL_FLAG_EFFECT'
  else if (!atPlateau) verdict = 'BASELINE_MOVED_NOT_PLATEAU'

  return { verdict, atPlateau, lines, fixed: atPlateau ? false : absBaseline != null && absBaseline < 0.5 }
}

function printTable(payload, info) {
  console.log('\n--- fo-text-baseline-flags (canvasΔ = live↔canvas topInBorder) ---\n')
  console.log(
    'variant'.padEnd(20) +
      'baseFix'.padStart(8) +
      'lhNorm'.padStart(8) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δcanvas'.padStart(9),
  )
  for (const row of payload.variants) {
    const cmp = payload.comparisons.find((c) => c.id === row.id)
    console.log(
      row.id.padEnd(20) +
        (row.flags.experimentalFoTextBaselineFix ? 'on' : 'off').padStart(8) +
        (row.flags.experimentalFoTextLineHeightNormal ? 'on' : 'off').padStart(8) +
        (row.threeWay.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (row.threeWay.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9) +
        (cmp?.deltaFromBaselinePx?.toFixed(3) ?? '—').padStart(9),
    )
  }
  console.log(`\nVerdict: ${info.verdict}`)
  for (const line of info.lines) console.log(`  · ${line}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-text-baseline-flags.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foTextBaselineFlags?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foTextBaselineFlags?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(() => {
      const p = window.__foTextBaselineFlags.last
      return JSON.parse(JSON.stringify(p))
    })
    const info = interpret(payload)
    payload.verdict = info.verdict
    payload.interpretation = info.lines
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.headless = process.env.HEADLESS === '1'

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    printTable(payload, info)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

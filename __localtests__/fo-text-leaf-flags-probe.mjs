#!/usr/bin/env node
/**
 * Probe for experimentalFoTextLeafNormalize (serialize pin on text leaves).
 * Headed Chrome. Writes .sandbox-edit/text-leaf-flags.json
 *
 *   node __localtests__/fo-text-leaf-flags-probe.mjs
 *   node __localtests__/fo-text-leaf-flags-probe.mjs --json path.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_OUT = path.join(__dirname, '..', '.sandbox-edit', 'text-leaf-flags.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

const SIGNIFICANT_PX = 0.05

function interpret(payload) {
  const baseline = payload.comparisons?.find((c) => c.id === 'baseline')
  const refCanvas = baseline?.canvasDeltaPx ?? null
  const refSvg = baseline?.svgDeltaPx ?? null

  /** @type {string[]} */
  const lines = []

  if (refCanvas != null) {
    lines.push(`Baseline canvasΔ (live↔canvas topInBorder): ${refCanvas.toFixed(3)}px.`)
  }
  if (refSvg != null) {
    lines.push(`Baseline svgΔ (live↔SVG topInBorder): ${refSvg.toFixed(3)}px.`)
  }

  for (const id of ['textLeafNormalize']) {
    const row = payload.comparisons?.find((c) => c.id === id)
    if (!row || refCanvas == null || row.deltaFromBaselinePx == null) continue
    const ch = row.deltaFromBaselinePx
    if (Math.abs(ch) >= SIGNIFICANT_PX) {
      lines.push(
        `${id}: canvasΔ ${row.canvasDeltaPx?.toFixed(3)}px (Δ from baseline ${ch >= 0 ? '+' : ''}${ch.toFixed(3)}px).`,
      )
    } else {
      lines.push(`${id}: no meaningful canvasΔ change vs baseline (${ch.toFixed(3)}px).`)
    }
    if (row.serializedPinInSvg) {
      const pins = Object.entries(row.serializedPinInSvg)
        .map(([k, v]) => `${k}=${v ? 'yes' : 'no'}`)
        .join(', ')
      lines.push(`${id}: serializedPinInSvg { ${pins} }.`)
    }
  }

  let verdict = 'FLAG_NO_EFFECT'
  const norm = payload.comparisons?.find((c) => c.id === 'textLeafNormalize')
  const anyCanvasMove =
    norm?.deltaFromBaselinePx != null && Math.abs(norm.deltaFromBaselinePx) >= SIGNIFICANT_PX
  if (anyCanvasMove) verdict = 'FLAG_AFFECTS_CANVAS_INK'
  else if (refSvg != null && Math.abs(refSvg) < SIGNIFICANT_PX && refCanvas != null && Math.abs(refCanvas) >= SIGNIFICANT_PX) {
    verdict = 'BITMAP_ONLY_DRIFT_UNCHANGED'
  }

  return { verdict, lines, refCanvas, refSvg }
}

function printTable(payload, info) {
  console.log('\n--- fo-text-leaf-flags-probe (canvasΔ = live↔canvas topInBorder) ---\n')
  console.log(
    'variant'.padEnd(20) +
      'norm'.padStart(6) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δcanvas'.padStart(9),
  )
  for (const row of payload.variants) {
    const cmp = payload.comparisons.find((c) => c.id === row.id)
    console.log(
      row.id.padEnd(20) +
        (row.flags.experimentalFoTextLeafNormalize ? 'on' : 'off').padStart(6) +
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
  const url = `http://127.0.0.1:${port}/__localtests__/fo-text-leaf-flags-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foTextLeafFlagsProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foTextLeafFlagsProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(() => {
      const p = window.__foTextLeafFlagsProbe.last
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

#!/usr/bin/env node
/**
 * Headed probe: product snapdom toCanvas-only flags on mini Home.
 * Variants: product-baseline + each experimentalRaster* flag alone.
 *
 *   npm run compile && node __localtests__/fo-tocanvas-only-flags-probe.mjs
 *   node __localtests__/fo-tocanvas-only-flags-probe.mjs --json .sandbox-edit/tocanvas-only-flags.json
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable for FO ink).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tocanvas-only-flags.json')
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

  /** @type {string[]} */
  const lines = []
  if (baseline != null) {
    lines.push(`Product baseline canvasΔ=${roundPx(baseline)}px (|Δ|=${roundPx(absBaseline)}px).`)
  }

  for (const row of payload.comparisons ?? []) {
    if (row.id === 'product-baseline') continue
    const ch = row.deltaFromBaselinePx
    if (ch == null) continue
    if (Math.abs(ch) >= SIGNIFICANT_PX) {
      lines.push(
        `${row.id}: canvasΔ=${roundPx(row.canvasDeltaPx)}px (Δ from baseline ${ch >= 0 ? '+' : ''}${roundPx(ch)}px).`,
      )
    } else {
      lines.push(`${row.id}: no meaningful canvasΔ change vs baseline (${roundPx(ch)}px).`)
    }
  }

  const anyImprovement = (payload.comparisons ?? []).some(
    (row) =>
      row.id !== 'product-baseline' &&
      row.canvasDeltaPx != null &&
      baseline != null &&
      Math.abs(row.canvasDeltaPx) < Math.abs(baseline) - SIGNIFICANT_PX,
  )

  let verdict = 'NO_FLAG_IMPROVEMENT'
  if (absBaseline != null && absBaseline < 0.5) verdict = 'BASELINE_CLEAN'
  else if (anyImprovement) verdict = 'FLAG_IMPROVES_CANVAS_DELTA'
  else if (
    (payload.comparisons ?? []).some(
      (row) =>
        row.id !== 'product-baseline' &&
        row.deltaFromBaselinePx != null &&
        Math.abs(row.deltaFromBaselinePx) >= SIGNIFICANT_PX,
    )
  ) {
    verdict = 'FLAGS_MOVE_CANVAS_DELTA'
  }

  return { verdict, lines, anyImprovement }
}

function printTable(payload, info) {
  console.log('\n--- toCanvas-only flags probe (mini Home) ---\n')
  console.log(
    'variant'.padEnd(36) +
      'natDim'.padStart(7) +
      'noGbcr'.padStart(7) +
      'ceil'.padStart(6) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δbase'.padStart(8),
  )
  for (const row of payload.variants ?? []) {
    const t = row.threeWay ?? {}
    const cmp = payload.comparisons?.find((c) => c.id === row.id)
    const on = (v) => (v ? 'on' : 'off')
    console.log(
      String(row.id).padEnd(36) +
        on(row.flags?.experimentalRasterNaturalDims).padStart(7) +
        on(row.flags?.experimentalRasterDisableGbcrNudge).padStart(7) +
        on(row.flags?.experimentalRasterBackingCeil).padStart(6) +
        (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9) +
        (cmp?.deltaFromBaselinePx?.toFixed(3) ?? '—').padStart(8),
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
  const url = `http://127.0.0.1:${port}/__localtests__/fo-tocanvas-only-flags-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foToCanvasOnlyFlagsProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foToCanvasOnlyFlagsProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const probe = await page.evaluate(() => {
      const p = window.__foToCanvasOnlyFlagsProbe.last
      return JSON.parse(JSON.stringify(p))
    })

    const evaluation = interpret(probe)
    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      port,
      ...probe,
      evaluation,
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printTable(payload, evaluation)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

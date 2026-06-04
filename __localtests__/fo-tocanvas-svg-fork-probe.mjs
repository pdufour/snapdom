#!/usr/bin/env node
/**
 * Headed probe: product experimentalRasterSvgPatch on mini Home.
 * Verifies SVG leg unchanged (capture string) while canvas leg may move per patch.
 *
 *   npm run compile && node __localtests__/fo-tocanvas-svg-fork-probe.mjs
 *   node __localtests__/fo-tocanvas-svg-fork-probe.mjs --json .sandbox-edit/tocanvas-svg-fork.json
 *
 * Headed Chrome by default. Opt-in headless: HEADLESS=1 (unreliable for FO ink).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tocanvas-svg-fork.json')
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
  lines.push(
    payload.svgLegUnchanged
      ? 'SVG leg unchanged across variants (raster fork only).'
      : 'WARNING: SVG leg changed — patch may be mutating capture output.',
  )

  for (const row of payload.comparisons ?? []) {
    if (row.id === 'product-baseline') continue
    const ch = row.deltaFromBaselineCanvasPx
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

  let verdict = 'NO_PATCH_IMPROVEMENT'
  if (!payload.svgLegUnchanged) verdict = 'SVG_LEG_CHANGED'
  else if (absBaseline != null && absBaseline < 0.5) verdict = 'BASELINE_CLEAN'
  else if (anyImprovement) verdict = 'PATCH_IMPROVES_CANVAS_DELTA'
  else if (
    (payload.comparisons ?? []).some(
      (row) =>
        row.id !== 'product-baseline' &&
        row.deltaFromBaselineCanvasPx != null &&
        Math.abs(row.deltaFromBaselineCanvasPx) >= SIGNIFICANT_PX,
    )
  ) {
    verdict = 'PATCHES_MOVE_CANVAS_DELTA'
  }

  return { verdict, lines, anyImprovement }
}

function printTable(payload, info) {
  console.log('\n--- experimentalRasterSvgPatch probe (mini Home) ---\n')
  console.log(
    'variant'.padEnd(18) +
      'patch'.padEnd(16) +
      'svgΔ'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δsvg'.padStart(8) +
      'Δcanvas'.padStart(9),
  )
  for (const row of payload.variants ?? []) {
    const t = row.threeWay ?? {}
    const cmp = payload.comparisons?.find((c) => c.id === row.id)
    console.log(
      String(row.id).padEnd(18) +
        String(row.experimentalRasterSvgPatch ?? '—').padEnd(16) +
        (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8) +
        (t.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(9) +
        (cmp?.deltaFromBaselineSvgPx?.toFixed(3) ?? '—').padStart(8) +
        (cmp?.deltaFromBaselineCanvasPx?.toFixed(3) ?? '—').padStart(9),
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
  const url = `http://127.0.0.1:${port}/__localtests__/fo-tocanvas-svg-fork-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foToCanvasSvgForkProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foToCanvasSvgForkProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const probe = await page.evaluate(() => {
      const p = window.__foToCanvasSvgForkProbe.last
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

    if (!probe.svgLegUnchanged) {
      process.exitCode = 1
    }
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

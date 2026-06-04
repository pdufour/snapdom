#!/usr/bin/env node
/**
 * Mini Home: does |live↔canvas ink Δ| scale with export scale?
 * product-baseline @ scale 1, 1.5, 2 — headed Chrome.
 *
 *   SNAPDOM_LOCAL_PORT=9915 node __localtests__/scale-proportionality.mjs
 *   node __localtests__/scale-proportionality.mjs --json __localtests__/.sandbox-edit/scale-proportionality.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SCALES = [1, 1.5, 2]
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'scale-proportionality.json')

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function interpret(rows) {
  const base = rows.find((r) => r.scale === 1)
  const baseCanvas = base?.liveVsCanvasTopPx ?? null
  const baseSvg = base?.liveVsSvgTopPx ?? null

  /** @type {string[]} */
  const lines = []
  if (baseCanvas == null) {
    return { verdict: 'ERROR', mechanism: 'unknown', lines: ['Missing scale=1 baseline row.'] }
  }

  const canvasAbs = rows.map((r) => ({
    scale: r.scale,
    absCanvas: Math.abs(r.liveVsCanvasTopPx ?? 0),
    absSvg: Math.abs(r.liveVsSvgTopPx ?? 0),
    ratioToScale1: baseCanvas !== 0 ? (r.liveVsCanvasTopPx ?? 0) / baseCanvas : null,
    ratioAbsToScale1: Math.abs(baseCanvas) > 0.01 ? Math.abs(r.liveVsCanvasTopPx ?? 0) / Math.abs(baseCanvas) : null,
  }))

  const r15 = canvasAbs.find((x) => x.scale === 1.5)
  const r2 = canvasAbs.find((x) => x.scale === 2)
  const scalesWithExport =
    r15?.ratioAbsToScale1 != null &&
    r2?.ratioAbsToScale1 != null &&
    Math.abs(r15.ratioAbsToScale1 - 1.5) < 0.25 &&
    Math.abs(r2.ratioAbsToScale1 - 2) < 0.35

  const nearConstant =
    r15?.ratioAbsToScale1 != null &&
    r2?.ratioAbsToScale1 != null &&
    Math.abs(r15.ratioAbsToScale1 - 1) < 0.15 &&
    Math.abs(r2.ratioAbsToScale1 - 1) < 0.15

  if (Math.abs(baseSvg ?? 0) < 0.35) {
    lines.push(`SVG≈live at scale=1 (svgΔ=${(baseSvg ?? 0).toFixed(3)}px) — canvas gap is post-serialization.`)
  }

  for (const x of canvasAbs) {
    lines.push(
      `scale=${x.scale}: |canvasΔ|=${x.absCanvas.toFixed(3)}px (signed ${rows.find((r) => r.scale === x.scale)?.liveVsCanvasTopPx?.toFixed(3)}), ratio|Δ|/|Δ@1|=${x.ratioAbsToScale1?.toFixed(3) ?? '—'}`,
    )
  }

  let verdict
  let mechanism
  if (scalesWithExport) {
    verdict = 'SCALES_WITH_EXPORT'
    mechanism = 'blit/geometry (drawImage / backing-store scaling)'
    lines.push('Canvas Δ magnitude tracks export scale ≈ linearly → investigate blit/geometry, not a fixed FO raster px offset.')
  } else if (nearConstant) {
    verdict = 'CONSTANT_IN_CSS_PX'
    mechanism = 'FO raster offset (fixed CSS px before scale)'
    lines.push('Canvas Δ magnitude ~constant across export scales → fixed FO raster offset in CSS px, not proportional blit stretch.')
  } else {
    verdict = 'MIXED_OR_NONLINEAR'
    mechanism = 'unclear — inspect per-scale signed Δ and svg↔canvas split'
    lines.push('Neither clean linear scaling nor flat constant — check signed deltas and svg↔canvas stage split.')
  }

  return { verdict, mechanism, lines, canvasAbs, baseCanvas, baseSvg }
}

function printTable(payload) {
  console.log('\n--- scale proportionality (product-baseline, mini Home) ---\n')
  console.log('scale'.padEnd(8) + 'canvasΔ'.padStart(10) + 'svgΔ'.padStart(10) + '|Δ|/|Δ@1|'.padStart(10))
  const base = payload.rows.find((r) => r.scale === 1)
  const baseAbs = Math.abs(base?.liveVsCanvasTopPx ?? 1)
  for (const r of payload.rows) {
    const ratio = baseAbs > 0.01 ? Math.abs(r.liveVsCanvasTopPx ?? 0) / baseAbs : null
    console.log(
      String(r.scale).padEnd(8) +
        (r.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(10) +
        (r.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(10) +
        (ratio?.toFixed(3) ?? '—').padStart(10),
    )
  }
  console.log(`\nVerdict: ${payload.interpretation.verdict}`)
  console.log(`Mechanism hint: ${payload.interpretation.mechanism}`)
  for (const line of payload.interpretation.lines) console.log(`  · ${line}`)
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

  /** @type {Record<string, unknown>[]} */
  const rows = []

  try {
    for (const scale of SCALES) {
      const qs = new URLSearchParams({
        dpr: String(dprArg),
        scale: String(scale),
        landmark: landmarkArg,
      })
      const url = `http://127.0.0.1:${port}/__localtests__/scale-proportionality.html?${qs}`
      console.log(`Probing scale=${scale}: ${url}`)
      await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
      await page.waitForFunction(() => window.__scaleProportionalityProbe?.ready === true, null, {
        timeout: 120_000,
      })
      const bootErr = await page.evaluate(() => window.__scaleProportionalityProbe?.bootError)
      if (bootErr) throw new Error(`Boot failed at scale=${scale}: ${bootErr}`)
      const row = await page.evaluate(async () => window.__scaleProportionalityProbe.run())
      rows.push(row)
    }

    const interpretation = interpret(rows)
    const payload = {
      probe: 'scale-proportionality',
      recipeId: 'product-baseline',
      fixture: 'mini',
      landmark: landmarkArg,
      dpr: dprArg,
      scales: SCALES,
      rows,
      interpretation,
      generatedAt: new Date().toISOString(),
      port,
    }

    const outPath = jsonOutArg ?? DEFAULT_OUT
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

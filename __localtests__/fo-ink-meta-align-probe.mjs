#!/usr/bin/env node
/**
 * Headed probe: experimentalCaptureInkMeta + experimentalRasterInkAlign on mini Home.
 *
 *   npm run compile && node __localtests__/fo-ink-meta-align-probe.mjs
 *   node __localtests__/fo-ink-meta-align-probe.mjs --json .sandbox-edit/ink-meta-align.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { fmtInkPx, roundInkPx } from './fo-ink-metric-format.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 9931
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'ink-meta-align.json')
const PLATEAU_PX = 2.797
const PLATEAU_TOL = 0.15

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return roundInkPx(v)
}

function interpret(payload) {
  const baseline = payload.baselineCanvasDeltaPx
  const absBaseline = baseline != null ? Math.abs(baseline) : null
  const atPlateau =
    absBaseline != null && Math.abs(absBaseline - PLATEAU_PX) <= PLATEAU_TOL

  const align = payload.comparisons?.find((c) => c.id === 'ink-meta-align')
  const alignCanvas = align?.canvasDeltaPx
  const improved =
    alignCanvas != null &&
    baseline != null &&
    Math.abs(alignCanvas) < Math.abs(baseline) - 0.05

  /** @type {string[]} */
  const lines = []
  if (baseline != null) {
    lines.push(`Baseline canvasΔ=${roundPx(baseline)}px (|Δ|=${roundPx(absBaseline)}px).`)
  }
  const meta = payload.captureMetaAlign
  if (meta) {
    lines.push(
      `Capture meta: inkTopFracInBorder=${roundPx(meta.inkTopFracInBorder)} expected=${roundPx(meta.inkTopFracExpected)} refBorderH=${roundPx(meta.inkRefBorderH)}.`,
    )
    const fracDelta =
      meta.inkTopFracInBorder != null && meta.inkTopFracExpected != null
        ? meta.inkTopFracInBorder - meta.inkTopFracExpected
        : null
    if (fracDelta != null) {
      lines.push(`Fraction delta (measured−expected)=${roundPx(fracDelta)}.`)
    }
  }
  if (alignCanvas != null) {
    lines.push(`ink-meta-align canvasΔ=${roundPx(alignCanvas)}px.`)
  }
  if (improved) {
    lines.push('ink-meta-align improved |canvasΔ| vs baseline.')
  } else if (atPlateau && alignCanvas != null) {
    lines.push('Still at ~2.797px plateau — ink meta align did not fix nav drift.')
  }

  let verdict = 'NOT_FIXED_AT_PLATEAU'
  if (!atPlateau && absBaseline != null && absBaseline < 0.5) verdict = 'BASELINE_CLEAN'
  else if (improved) verdict = 'INK_META_PARTIAL'
  else if (!atPlateau) verdict = 'BASELINE_MOVED'

  return { verdict, atPlateau, improved, lines, fixed: improved || (absBaseline != null && absBaseline < 0.5) }
}

function printTable(payload, info) {
  console.log('\n--- ink meta align probe (capture Range frac → raster dy) ---\n')
  console.log(
    'variant'.padEnd(22) +
      'capMeta'.padStart(8) +
      'raster'.padStart(8) +
      'canvasΔ'.padStart(9) +
      'Δbase'.padStart(8),
  )
  for (const row of payload.variants ?? []) {
    const cmp = payload.comparisons?.find((c) => c.id === row.id)
    const on = (v) => (v ? 'on' : 'off')
    console.log(
      String(row.id).padEnd(22) +
        on(row.flags?.experimentalCaptureInkMeta).padStart(8) +
        on(row.flags?.experimentalRasterInkAlign).padStart(8) +
        (fmtInkPx(cmp?.canvasDeltaPx) ?? '—').padStart(10) +
        (fmtInkPx(cmp?.deltaFromBaselinePx) ?? '—').padStart(9),
    )
  }
  console.log(`\nVerdict: ${info.verdict} (fixed=${info.fixed})`)
  for (const line of info.lines) console.log(`  · ${line}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
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
  const url = `http://127.0.0.1:${port}/__localtests__/fo-ink-meta-align-probe.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foInkMetaAlignProbe?.ready === true, null, {
      timeout: 180_000,
    })
    const bootErr = await page.evaluate(() => window.__foInkMetaAlignProbe?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const probe = await page.evaluate(() => {
      const p = window.__foInkMetaAlignProbe.last
      return JSON.parse(JSON.stringify(p))
    })

    const evaluation = interpret(probe)
    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      port,
      plateauReferencePx: PLATEAU_PX,
      ...probe,
      evaluation,
    }

    const outPath = jsonOutArg
      ? path.isAbsolute(jsonOutArg)
        ? jsonOutArg
        : path.join(REPO_ROOT, jsonOutArg)
      : DEFAULT_OUT
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

#!/usr/bin/env node
/**
 * Line-box strut math vs canvas ink offset on mini Home.
 * Measures live Range, cap model, inline SVG, canvas tops; compares canvas offset
 * to (lineHeight-fontSize)/2 and (contentBox-lineHeight)/2 from getComputedStyle.
 *
 *   npm run compile && SNAPDOM_LOCAL_PORT=9930 node __localtests__/line-box-strut-math.mjs
 *   node __localtests__/line-box-strut-math.mjs --json __localtests__/.sandbox-edit/line-box-strut-math.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PORT = 9930
const DEFAULT_OUT = path.join(__dirname, '.sandbox-edit', 'line-box-strut-math.json')
const MATCH_EPS = 0.06

const COMMANDS = [
  'npm run compile',
  `SNAPDOM_LOCAL_PORT=${DEFAULT_PORT} node __localtests__/line-box-strut-math.mjs`,
]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** @param {number | null} canvasOffset @param {Record<string, number | null>} metrics */
function buildMetricCorrelation(canvasOffset, metrics) {
  if (canvasOffset == null) {
    return { matches: [], best: null, notes: ['canvasOffset missing — FO ink unreadable?'] }
  }

  /** @type {{ id: string, value: number, deltaSigned: number, deltaAbs: number }[]} */
  const rows = []
  for (const [id, value] of Object.entries(metrics)) {
    if (value == null || !Number.isFinite(value)) continue
    const deltaSigned = roundPx(canvasOffset - value)
    const deltaAbs = roundPx(Math.abs(canvasOffset - value))
    rows.push({ id, value: roundPx(value), deltaSigned, deltaAbs })
    // Also test negated metric (sign convention flip)
    const neg = -value
    rows.push({
      id: `${id} (negated)`,
      value: roundPx(neg),
      deltaSigned: roundPx(canvasOffset - neg),
      deltaAbs: roundPx(Math.abs(canvasOffset - neg)),
    })
  }

  rows.sort((a, b) => (a.deltaAbs ?? Infinity) - (b.deltaAbs ?? Infinity))
  const matches = rows.filter((r) => r.deltaAbs != null && r.deltaAbs <= MATCH_EPS)
  const best = rows[0] ?? null

  /** @type {string[]} */
  const notes = []
  if (best) {
    notes.push(
      `Closest single metric: ${best.id}=${best.value}px — |canvasOffset−metric|=${best.deltaAbs}px (canvasOffset=${roundPx(canvasOffset)}px).`,
    )
  }
  if (matches.length) {
    notes.push(
      `Within ${MATCH_EPS}px: ${matches.map((m) => `${m.id} (Δ=${m.deltaAbs}px)`).join(', ')}.`,
    )
  } else if (best) {
    notes.push(`No single computed metric within ${MATCH_EPS}px of canvas offset.`)
  }

  return { matchEpsilonPx: MATCH_EPS, canvasOffsetPx: roundPx(canvasOffset), rows, matches, best, notes }
}

/** @param {Record<string, unknown>} probe */
function buildAnalysis(probe) {
  const canvasOffset = probe.offsetsFromLiveRange?.canvasOffsetPx ?? null
  const strut = probe.strutMath || {}
  const metrics = {
    halfLeadingLhFs: strut.halfLeadingLhFs ?? null,
    halfStrutContentLh: strut.halfStrutContentLh ?? null,
    halfLeadingFontMetrics: strut.halfLeadingFontMetrics ?? null,
    capModelHalfLeading: probe.capModelHalfLeading ?? null,
    capModelOffsetFromLive: probe.offsetsFromLiveRange?.capModelOffsetPx ?? null,
    inlineSvgOffsetFromLive: probe.offsetsFromLiveRange?.inlineSvgOffsetPx ?? null,
    paddingTopPx: strut.paddingTopPx ?? null,
    borderTopPx: strut.borderTopPx ?? null,
    lineHeightPx: strut.lineHeightPx ?? null,
    fontSizePx: strut.fontSizePx ?? null,
    contentBoxPx: strut.contentBoxPx ?? null,
    fontBoxHeightPx: strut.fontBoxHeightPx ?? null,
  }

  const correlation = buildMetricCorrelation(canvasOffset, metrics)

  /** @type {string[]} */
  const notes = [...correlation.notes]
  const svgOffset = probe.offsetsFromLiveRange?.inlineSvgOffsetPx ?? null
  if (svgOffset != null && Math.abs(svgOffset) < 0.35) {
    notes.push('Inline SVG ink ≈ live Range — canvas gap is FO→bitmap raster, not serialization.')
  }
  if (strut.halfLeadingLhFs != null && strut.halfStrutContentLh != null) {
    notes.push(
      `Strut: (lh−fs)/2=${roundPx(strut.halfLeadingLhFs)}px; (contentBox−lh)/2=${roundPx(strut.halfStrutContentLh)}px; contentBox=${roundPx(strut.contentBoxPx)}px lh=${roundPx(strut.lineHeightPx)}px.`,
    )
  }

  return { metrics, correlation, notes }
}

function printSummary(payload) {
  const t = payload.topsInBorder || {}
  const o = payload.offsetsFromLiveRange || {}
  const s = payload.strutMath || {}
  console.log('\n--- line-box strut math (mini Home) ---\n')
  console.log('tops in border (px):')
  console.log(`  live Range:  ${t.liveRangeTopInBorder ?? '—'}`)
  console.log(`  cap model:   ${t.capModelTopInBorder ?? '—'}`)
  console.log(`  inline SVG:  ${t.inlineSvgTopInBorder ?? '—'}`)
  console.log(`  canvas:      ${t.canvasTopInBorder ?? '—'}`)
  console.log('\noffsets from live Range (px):')
  console.log(`  cap model:   ${o.capModelOffsetPx ?? '—'}`)
  console.log(`  inline SVG:  ${o.inlineSvgOffsetPx ?? '—'}`)
  console.log(`  canvas:      ${o.canvasOffsetPx ?? '—'}`)
  console.log('\nstrut math (getComputedStyle):')
  console.log(`  (lineHeight−fontSize)/2 = ${s.halfLeadingLhFs ?? '—'}`)
  console.log(`  (contentBox−lineHeight)/2 = ${s.halfStrutContentLh ?? '—'}`)
  console.log('\nmetric correlation (canvas offset):')
  const best = payload.analysis?.correlation?.best
  if (best) {
    console.log(`  best: ${best.id} → |Δ|=${best.deltaAbs}px`)
  }
  for (const n of payload.analysis?.notes ?? []) {
    console.log(`  · ${n}`)
  }
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('WARNING: HEADLESS=1 — FO canvas ink unreliable per project rules')
  }
  if (!process.env.SNAPDOM_LOCAL_PORT) {
    process.env.SNAPDOM_LOCAL_PORT = String(DEFAULT_PORT)
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const url = `http://127.0.0.1:${port}/__localtests__/line-box-strut-math.html?auto=1&dpr=${dprArg}&scale=${scaleArg}&landmark=${encodeURIComponent(landmarkArg)}`
  console.log('Opening', url)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__lineBoxStrutMathProbe?.ready === true, null, {
      timeout: 60_000,
    })
    await page.waitForFunction(() => window.__lineBoxStrutMathProbe?.done === true, null, {
      timeout: 300_000,
    })
    const err = await page.evaluate(() => window.__lineBoxStrutMathProbe?.error)
    if (err) throw new Error(err)

    const probe = await page.evaluate(() => window.__lineBoxStrutMathProbe.payload)
    const analysis = buildAnalysis(probe)

    const outPath = jsonOutArg ?? DEFAULT_OUT
    const payload = {
      probe: 'line-box-strut-math',
      generatedAt: new Date().toISOString(),
      port,
      headed: process.env.HEADLESS !== '1',
      fixture: 'mini-nav',
      landmark: landmarkArg,
      dpr: dprArg,
      scale: scaleArg,
      recipeId: 'product-baseline',
      commands: COMMANDS,
      ...probe,
      analysis,
      conclusion: analysis.notes.join(' '),
    }

    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printSummary(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

#!/usr/bin/env node
/**
 * Headed lh matrix: leaf-only line-height vs Range / cap / SVG / canvas tops.
 * Tests hypothesis: canvas delta correlates with half-leading strut (lh−fs)/2.
 *
 *   npm run compile && node __localtests__/fo-text-baseline-lh-probe.mjs
 *   node __localtests__/fo-text-baseline-lh-probe.mjs --json .sandbox-edit/text-baseline-lh-matrix.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 9932
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'text-baseline-lh-matrix.json')
const MATCH_EPS = 0.15

const LH_VARIANTS = [
  { id: 'lh-1', lineHeight: '1' },
  { id: 'lh-1.2', lineHeight: '1.2' },
  { id: 'lh-1.35', lineHeight: '1.35' },
  { id: 'lh-normal', lineHeight: 'normal' },
  { id: 'lh-48px', lineHeight: '48px' },
]

const COMMANDS = [
  'npm run compile',
  `SNAPDOM_LOCAL_PORT=${DEFAULT_PORT} node __localtests__/fo-text-baseline-lh-probe.mjs`,
]

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : 'Home'
const singleMode = args.includes('--single')

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function fmt(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

function pearsonR(xs, ys) {
  const pairs = []
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] == null || ys[i] == null || !Number.isFinite(xs[i]) || !Number.isFinite(ys[i])) continue
    pairs.push([xs[i], ys[i]])
  }
  if (pairs.length < 2) return null
  const n = pairs.length
  const mx = pairs.reduce((s, [x]) => s + x, 0) / n
  const my = pairs.reduce((s, [, y]) => s + y, 0) / n
  let num = 0
  let dx = 0
  let dy = 0
  for (const [x, y] of pairs) {
    num += (x - mx) * (y - my)
    dx += (x - mx) ** 2
    dy += (y - my) ** 2
  }
  const den = Math.sqrt(dx * dy)
  return den > 0 ? roundPx(num / den) : null
}

function olsSlope(xs, ys) {
  const pairs = []
  for (let i = 0; i < xs.length; i++) {
    if (xs[i] == null || ys[i] == null || !Number.isFinite(xs[i]) || !Number.isFinite(ys[i])) continue
    pairs.push([xs[i], ys[i]])
  }
  if (pairs.length < 2) return null
  const n = pairs.length
  const mx = pairs.reduce((s, [x]) => s + x, 0) / n
  const my = pairs.reduce((s, [, y]) => s + y, 0) / n
  let num = 0
  let den = 0
  for (const [x, y] of pairs) {
    num += (x - mx) * (y - my)
    den += (x - mx) ** 2
  }
  return den > 0 ? roundPx(num / den) : null
}

function buildHypothesisAnalysis(rows) {
  const halfLeading = rows.map(
    (r) => r.halfLeadingCssLhFs ?? r.stages?.live?.halfLeadingCssLhFsPx ?? null,
  )
  const canvasDelta = rows.map((r) => r.canvasDeltaPx ?? r.offsetsFromLiveRange?.canvasOffsetPx ?? null)
  const fontAscent = rows.map((r) => r.fontBoundingBoxAscent ?? null)
  const liveRangeTop = rows.map((r) => r.topsInBorder?.liveRangeTopInBorder ?? null)

  const residuals = rows.map((r, i) => {
    const hl = halfLeading[i]
    const cd = canvasDelta[i]
    if (hl == null || cd == null) return null
    return roundPx(cd - hl)
  })

  const rHalfLeading = pearsonR(halfLeading, canvasDelta)
  const rFontAscent = pearsonR(fontAscent, canvasDelta)
  const rLiveRangeVsHalfLeading = pearsonR(halfLeading, liveRangeTop)
  const slopeHalfLeading = olsSlope(halfLeading, canvasDelta)

  const withinEps = rows
    .map((r, i) => {
      const hl = halfLeading[i]
      const cd = canvasDelta[i]
      if (hl == null || cd == null) return null
      return {
        id: r.id,
        halfLeadingLhFs: hl,
        canvasDeltaPx: cd,
        deltaAbs: roundPx(Math.abs(cd - hl)),
      }
    })
    .filter(Boolean)
    .sort((a, b) => (a.deltaAbs ?? Infinity) - (b.deltaAbs ?? Infinity))

  const strongCorr = rHalfLeading != null && Math.abs(rHalfLeading) >= 0.85
  const moderateCorr = rHalfLeading != null && Math.abs(rHalfLeading) >= 0.6

  /** @type {string[]} */
  const notes = []
  notes.push(
    `Pearson r(canvasΔ, (lh−fs)/2)=${rHalfLeading ?? '—'}; slope=${slopeHalfLeading ?? '—'}.`,
  )
  notes.push(`Pearson r(canvasΔ, fontBoundingBoxAscent)=${rFontAscent ?? '—'}.`)
  notes.push(`Pearson r(liveRangeTop, (lh−fs)/2)=${rLiveRangeVsHalfLeading ?? '—'}.`)
  if (withinEps.length) {
    const best = withinEps[0]
    notes.push(
      `Closest |canvasΔ−halfLeading|: ${best.id} Δ=${best.deltaAbs}px (canvasΔ=${best.canvasDeltaPx}, halfLeading=${best.halfLeadingLhFs}).`,
    )
    const matches = withinEps.filter((w) => w.deltaAbs <= MATCH_EPS)
    if (matches.length) {
      notes.push(`${matches.length}/${rows.length} rows within ${MATCH_EPS}px of half-leading strut.`)
    }
  }

  let verdict = 'INCONCLUSIVE'
  if (strongCorr && slopeHalfLeading != null && slopeHalfLeading > 0.5) {
    verdict = 'HALF_LEADING_CORRELATES'
    notes.push('Hypothesis supported: canvas delta tracks half-leading strut across lh matrix.')
  } else if (moderateCorr) {
    verdict = 'HALF_LEADING_PARTIAL'
    notes.push('Partial correlation — canvas drift partly explained by half-leading, not 1:1.')
  } else if (rHalfLeading != null && Math.abs(rHalfLeading) < 0.3) {
    verdict = 'HALF_LEADING_WEAK'
    notes.push('Weak correlation — canvas delta does not track (lh−fs)/2 across lh values.')
  }

  return {
    hypothesis: 'canvas delta correlates with half-leading strut (lh−fs)/2',
    matchEpsilonPx: MATCH_EPS,
    pearsonR: {
      canvasDeltaVsHalfLeadingLhFs: rHalfLeading,
      canvasDeltaVsFontBoundingBoxAscent: rFontAscent,
      liveRangeTopVsHalfLeadingLhFs: rLiveRangeVsHalfLeading,
    },
    olsSlopeCanvasDeltaOnHalfLeading: slopeHalfLeading,
    perRowResidualCanvasMinusHalfLeading: rows.map((r, i) => ({
      id: r.id,
      lineHeightPinned: r.lineHeightPinned,
      halfLeadingCssLhFs: halfLeading[i],
      canvasDeltaPx: canvasDelta[i],
      residualPx: residuals[i],
    })),
    closestHalfLeadingMatch: withinEps[0] ?? null,
    verdict,
    notes,
  }
}

function printMatrixTable(payload) {
  console.log('\n--- text baseline × line-height matrix (mini Home leaf lh) ---\n')
  console.log(
    'variant'.padEnd(12) +
      'lh pin'.padStart(8) +
      'lh px'.padStart(8) +
      '½strut'.padStart(8) +
      'fBBA'.padStart(7) +
      'live'.padStart(8) +
      'cap'.padStart(8) +
      'svg'.padStart(8) +
      'canvas'.padStart(8) +
      'canvasΔ'.padStart(9),
  )
  for (const row of payload.rows ?? []) {
    const t = row.topsInBorder ?? {}
    console.log(
      String(row.id).padEnd(12) +
        String(row.lineHeightPinned ?? '—').padStart(8) +
        fmt(row.cssLineHeightPx ?? row.lineHeightPx).padStart(8) +
        fmt(row.halfLeadingCssLhFs ?? row.halfLeadingLhFs).padStart(8) +
        fmt(row.fontBoundingBoxAscent).padStart(7) +
        fmt(t.liveRangeTopInBorder).padStart(8) +
        fmt(t.capModelTopInBorder).padStart(8) +
        fmt(t.inlineSvgTopInBorder).padStart(8) +
        fmt(t.canvasTopInBorder).padStart(8) +
        fmt(row.canvasDeltaPx).padStart(9),
    )
  }
  const h = payload.hypothesisAnalysis ?? {}
  console.log(`\nVerdict: ${h.verdict ?? '—'}`)
  for (const n of h.notes ?? []) console.log(`  · ${n}`)
  console.log('')
}

async function runSingleVariantPage(page, port, variant) {
  const qs = new URLSearchParams({
    auto: '1',
    lh: variant.lineHeight,
    dpr: String(dprArg),
    scale: String(scaleArg),
    landmark: landmarkArg,
  })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-text-baseline-lh-probe.html?${qs}`
  console.log(`  ${variant.id} (lh=${variant.lineHeight})`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__foTextBaselineLhProbe?.ready === true, null, {
    timeout: 60_000,
  })
  await page.waitForFunction(() => window.__foTextBaselineLhProbe?.done === true, null, {
    timeout: 180_000,
  })
  const bootErr = await page.evaluate(() => window.__foTextBaselineLhProbe?.bootError)
  if (bootErr) throw new Error(`${variant.id}: ${bootErr}`)
  return page.evaluate(() => window.__foTextBaselineLhProbe.payload)
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
  await page.setViewportSize({ width: 520, height: 480 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    if (singleMode) {
      const qs = new URLSearchParams({
        auto: '1',
        dpr: String(dprArg),
        scale: String(scaleArg),
        landmark: landmarkArg,
      })
      const url = `http://127.0.0.1:${port}/__localtests__/fo-text-baseline-lh-probe.html?${qs}`
      console.log(`Page: ${url}`)
      await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
      await page.waitForFunction(() => window.__foTextBaselineLhProbe?.ready === true, null, {
        timeout: 120_000,
      })
      const payload = await page.evaluate(async () => window.__foTextBaselineLhProbe.run())
      payload.generatedAt = new Date().toISOString()
      payload.port = port
      payload.headed = process.env.HEADLESS !== '1'
      const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
      await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
      await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
      console.log(`Wrote ${outPath}`)
      return
    }

    console.log('Running lh matrix (one capture per variant):')
    /** @type {Record<string, unknown>[]} */
    const rows = []
    for (const variant of LH_VARIANTS) {
      rows.push(await runSingleVariantPage(page, port, variant))
    }

    const hypothesisAnalysis = buildHypothesisAnalysis(rows)
    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    const payload = {
      probe: 'fo-text-baseline-lh-probe',
      generatedAt: new Date().toISOString(),
      port,
      headed: process.env.HEADLESS !== '1',
      fixture: 'mini-nav-leaf-lh',
      landmark: landmarkArg,
      dpr: dprArg,
      scale: scaleArg,
      recipeId: 'product-baseline',
      lhVariants: LH_VARIANTS.map((v) => v.lineHeight),
      commands: COMMANDS,
      rows,
      hypothesisAnalysis,
      conclusion: hypothesisAnalysis.notes.join(' '),
    }

    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)
    printMatrixTable(payload)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

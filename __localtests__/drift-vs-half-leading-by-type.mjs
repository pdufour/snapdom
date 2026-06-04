#!/usr/bin/env node
/**
 * Headed sweep: line-height 1 | normal | 1.35 on text leaf per checkout landmark type.
 * Tests whether canvas drift scales with (lh−fs)/2 per type (nav-link, h2, label).
 *
 *   npm run compile && node __localtests__/drift-vs-half-leading-by-type.mjs
 *   node __localtests__/drift-vs-half-leading-by-type.mjs --json .sandbox-edit/drift-vs-half-leading-by-type.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_PORT = 9934
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'drift-vs-half-leading-by-type.json')

const LANDMARK_TYPES = ['nav-link', 'h2', 'label']
const LH_VARIANTS = ['1', 'normal', '1.35']
const MATCH_EPS = 0.15

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 2
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
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

/**
 * @param {{ rows: Record<string, unknown>[] }} block
 */
function analyzeType(block) {
  const rows = block.rows ?? []
  const halfLeading = rows.map((r) => r.halfLeadingLhFsPx ?? null)
  const canvasDelta = rows.map((r) => r.canvasDeltaPx ?? null)
  const residuals = rows.map((r) => r.residualCanvasMinusHalfLeadingPx ?? null)

  const r = pearsonR(halfLeading, canvasDelta)
  const slope = olsSlope(halfLeading, canvasDelta)
  const canvasSpread =
    canvasDelta.filter((v) => v != null).length >= 2
      ? roundPx(Math.max(...canvasDelta.filter((v) => v != null)) - Math.min(...canvasDelta.filter((v) => v != null)))
      : null

  const residualSpread =
    residuals.filter((v) => v != null).length >= 2
      ? roundPx(Math.max(...residuals.filter((v) => v != null)) - Math.min(...residuals.filter((v) => v != null)))
      : null

  /** @type {string[]} */
  const notes = []
  notes.push(
    `r(canvasΔ, (lh−fs)/2)=${r ?? '—'}; OLS slope=${slope ?? '—'}; canvasΔ spread across lh=${canvasSpread ?? '—'}px.`,
  )

  let scalesWithHalfLeading = 'INCONCLUSIVE'
  if (r != null && Math.abs(r) >= 0.85 && slope != null && slope > 0.4) {
    scalesWithHalfLeading = 'YES'
    notes.push('Canvas drift tracks half-leading strut across lh sweep (strong positive correlation).')
  } else if (r != null && Math.abs(r) >= 0.6 && slope != null && slope > 0.25) {
    scalesWithHalfLeading = 'PARTIAL'
    notes.push('Partial scaling — drift moves with half-leading but not 1:1.')
  } else if (canvasSpread != null && canvasSpread < 0.2) {
    scalesWithHalfLeading = 'NO_FLAT'
    notes.push('Canvas drift nearly flat across lh variants — does not scale with (lh−fs)/2.')
  } else if (r != null && Math.abs(r) < 0.35) {
    scalesWithHalfLeading = 'NO_WEAK'
    notes.push('Weak correlation — drift does not track half-leading across lh values.')
  }

  if (residualSpread != null) {
    notes.push(`Residual (canvasΔ − halfLeading) spread=${residualSpread}px across lh sweep.`)
  }

  const closest = rows
    .map((row) => {
      const hl = row.halfLeadingLhFsPx
      const cd = row.canvasDeltaPx
      if (hl == null || cd == null) return null
      return {
        lhVariant: row.lhVariant,
        halfLeadingLhFsPx: hl,
        canvasDeltaPx: cd,
        deltaAbs: roundPx(Math.abs(cd - hl)),
      }
    })
    .filter(Boolean)
    .sort((a, b) => (a.deltaAbs ?? Infinity) - (b.deltaAbs ?? Infinity))[0]

  if (closest) {
    notes.push(
      `Closest |canvasΔ−(lh−fs)/2|: lh=${closest.lhVariant} Δ=${closest.deltaAbs}px (canvasΔ=${closest.canvasDeltaPx}, halfLeading=${closest.halfLeadingLhFsPx}).`,
    )
    const matches = rows.filter((row) => {
      const hl = row.halfLeadingLhFsPx
      const cd = row.canvasDeltaPx
      return hl != null && cd != null && Math.abs(cd - hl) <= MATCH_EPS
    })
    if (matches.length) {
      notes.push(`${matches.length}/${rows.length} rows within ${MATCH_EPS}px of half-leading.`)
    }
  }

  return {
    landmarkType: block.landmarkType,
    pearsonR_canvasDeltaVsHalfLeadingLhFs: r,
    olsSlopeCanvasDeltaOnHalfLeading: slope,
    canvasDeltaSpreadPx: canvasSpread,
    residualSpreadPx: residualSpread,
    scalesWithHalfLeading,
    closestOneToOneMatch: closest ?? null,
    notes,
  }
}

function printSummary(payload) {
  console.log('\n--- drift vs (lh−fs)/2 by landmark type (headed, snapdom) ---\n')
  for (const block of payload.byType ?? []) {
    console.log(`[${block.landmarkType}] ${block.fixtureSource} — landmark "${block.landmark}"`)
    console.log(
      'lh'.padEnd(8) +
        '½strut'.padStart(8) +
        'canvasΔ'.padStart(9) +
        'residual'.padStart(10) +
        'svgΔ'.padStart(8),
    )
    for (const row of block.rows ?? []) {
      const t = row.threeWay ?? {}
      console.log(
        String(row.lhVariant).padEnd(8) +
          (row.halfLeadingLhFsPx?.toFixed(3) ?? '—').padStart(8) +
          (row.canvasDeltaPx?.toFixed(3) ?? '—').padStart(9) +
          (row.residualCanvasMinusHalfLeadingPx?.toFixed(3) ?? '—').padStart(10) +
          (t.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(8),
      )
    }
    const a = payload.analysis?.byType?.find((x) => x.landmarkType === block.landmarkType)
    console.log(`  → ${a?.scalesWithHalfLeading ?? '—'} (r=${a?.pearsonR_canvasDeltaVsHalfLeadingLhFs ?? '—'}, slope=${a?.olsSlopeCanvasDeltaOnHalfLeading ?? '—'})`)
    for (const n of a?.notes ?? []) console.log(`     · ${n}`)
    console.log('')
  }
  console.log(`Overall: ${payload.analysis?.overall?.summary ?? '—'}\n`)
}

async function probeVariant(page, port, type, lh, { dpr, scale }) {
  const qs = new URLSearchParams({
    type,
    lh,
    dpr: String(dpr),
    scale: String(scale),
  })
  const url = `http://127.0.0.1:${port}/__localtests__/drift-vs-half-leading-by-type.html?${qs}`
  console.log(`  ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => window.__driftVsHalfLeadingByType?.ready === true, null, {
    timeout: 120_000,
  })
  const bootErr = await page.evaluate(() => window.__driftVsHalfLeadingByType?.bootError)
  if (bootErr) throw new Error(`Boot failed (type=${type}, lh=${lh}): ${bootErr}`)
  return page.evaluate(async () => window.__driftVsHalfLeadingByType.run())
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
  await page.setViewportSize({ width: 800, height: 640 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  try {
    /** @type {Record<string, unknown>[]} */
    const byType = []

    for (const landmarkType of LANDMARK_TYPES) {
      console.log(`\n=== type: ${landmarkType} ===`)
      /** @type {Record<string, unknown>[]} */
      const rows = []
      for (const lh of LH_VARIANTS) {
        console.log(`  lh=${lh}`)
        const row = await probeVariant(page, port, landmarkType, lh, {
          dpr: dprArg,
          scale: scaleArg,
        })
        rows.push(row)
      }
      byType.push({
        landmarkType,
        fixtureSource: rows[0]?.fixtureSource,
        landmark: rows[0]?.landmark,
        textLeafSelector: rows[0]?.textLeafSelector,
        rows,
      })
    }

    const typeAnalysis = byType.map((block) => analyzeType(block))
    const yesCount = typeAnalysis.filter((a) => a.scalesWithHalfLeading === 'YES').length
    const partialCount = typeAnalysis.filter((a) => a.scalesWithHalfLeading === 'PARTIAL').length
    const flatCount = typeAnalysis.filter((a) => a.scalesWithHalfLeading.startsWith('NO')).length

    const payload = {
      probe: 'drift-vs-half-leading-by-type',
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      path: 'snapdom',
      recipe: { id: 'product-baseline', rasterPatch: 'product-toCanvas' },
      lhSweep: LH_VARIANTS,
      lhAppliedOn: 'live text leaf + matching FO CSS inject',
      landmarkTypes: LANDMARK_TYPES,
      port,
      dpr: dprArg,
      scale: scaleArg,
      byType,
      analysis: {
        byType: typeAnalysis,
        overall: {
          typesStronglyScaling: yesCount,
          typesPartiallyScaling: partialCount,
          typesNotScaling: flatCount,
          summary:
            yesCount > 0
              ? `${yesCount}/${LANDMARK_TYPES.length} type(s) show strong canvasΔ vs (lh−fs)/2 correlation.`
              : flatCount === LANDMARK_TYPES.length
                ? `None of ${LANDMARK_TYPES.length} landmark types scale canvas drift with (lh−fs)/2 across lh 1|normal|1.35.`
                : `Mixed: ${partialCount} partial, ${flatCount} flat/weak across types.`,
        },
      },
    }

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    await fs.promises.mkdir(path.dirname(outPath), { recursive: true })
    await fs.promises.writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`\nWrote ${outPath}`)
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

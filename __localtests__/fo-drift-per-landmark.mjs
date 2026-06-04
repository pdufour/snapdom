#!/usr/bin/env node
/**
 * Per-landmark FO drift: typography + product-baseline three-way ink.
 * Fixtures: mini-nav + checkout-example (nav + form labels).
 *
 *   npm run compile && node __localtests__/fo-drift-per-landmark.mjs
 *   node __localtests__/fo-drift-per-landmark.mjs --json .sandbox-edit/drift-per-landmark.json
 *
 * Headed Chrome by default. HEADLESS=1 discouraged for FO canvas ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'drift-per-landmark.json')
const MATCH_EPS = 0.15

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : 1
const scaleArg = args.includes('--scale') ? Number(args[args.indexOf('--scale') + 1]) : 1

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

/** @param {Record<string, unknown>[]} rows */
function flattenRows(rows) {
  /** @type {Record<string, unknown>[]} */
  const out = []
  for (const fx of rows) {
    for (const row of fx.rows ?? []) {
      if (row.error) continue
      out.push({
        fixture: fx.fixture,
        landmark: row.landmark,
        elementKind: row.metrics?.elementKind ?? null,
        ...row.summary,
        halfLayoutStrut: row.metrics?.halfLayoutStrutPx ?? null,
        svgDelta: row.threeWay?.liveVsSvgTopPx ?? null,
        flexChildStretched: row.metrics?.flexChildStretched ?? false,
      })
    }
  }
  return out
}

/** @param {Record<string, unknown>[]} flat */
function buildCorrelation(flat) {
  const canvasDelta = flat.map((r) => r.canvasDelta ?? null)
  const halfLeadingStrut = flat.map((r) => r.halfLeadingStrut ?? null)
  const halfLayoutStrut = flat.map((r) => r.halfLayoutStrut ?? null)
  const fontSize = flat.map((r) => r.fontSize ?? null)
  const lineHeight = flat.map((r) => r.lineHeight ?? null)
  const layoutBox = flat.map((r) => r.layoutBox ?? null)

  const canvasSpread =
    canvasDelta.filter((v) => v != null).length >= 2
      ? roundPx(Math.max(...canvasDelta.filter((v) => v != null)) - Math.min(...canvasDelta.filter((v) => v != null)))
      : null

  const residuals = flat.map((r) => {
    const cd = r.canvasDelta
    const hl = r.halfLeadingStrut
    if (cd == null || hl == null) return null
    return roundPx(cd - hl)
  })

  const residualSpread =
    residuals.filter((v) => v != null).length >= 2
      ? roundPx(Math.max(...residuals.filter((v) => v != null)) - Math.min(...residuals.filter((v) => v != null)))
      : null

  /** @type {string[]} */
  const notes = []
  const rHalfLeading = pearsonR(halfLeadingStrut, canvasDelta)
  const rLayoutStrut = pearsonR(halfLayoutStrut, canvasDelta)
  const rFontSize = pearsonR(fontSize, canvasDelta)
  const rLineHeight = pearsonR(lineHeight, canvasDelta)
  const rLayoutBox = pearsonR(layoutBox, canvasDelta)

  notes.push(
    `canvasΔ spread across ${flat.length} landmarks = ${fmt(canvasSpread)} px (not proportional to typography alone).`,
  )
  notes.push(
    `Pearson r(canvasΔ, halfLeadingStrut)=${fmt(rHalfLeading)}; r(canvasΔ, halfLayoutStrut)=${fmt(rLayoutStrut)}.`,
  )
  notes.push(`Residual (canvasΔ − halfLeadingStrut) spread = ${fmt(residualSpread)} px.`)

  let verdict = 'CONSTANT_CLASS'
  if (canvasSpread != null && canvasSpread < 0.35) {
    verdict = 'CONSTANT_CLASS'
    notes.push('Canvas drift is nearly constant across landmarks — typography metrics do not explain the spread.')
  } else if (rHalfLeading != null && Math.abs(rHalfLeading) >= 0.85) {
    verdict = 'SCALES_WITH_HALF_LEADING'
    notes.push('Canvas drift tracks (lineHeight−fontSize)/2 across landmarks.')
  } else if (rHalfLeading != null && Math.abs(rHalfLeading) >= 0.5) {
    verdict = 'PARTIAL_TYPOGRAPHY'
    notes.push('Partial typography coupling — drift moves with half-leading but not 1:1.')
  } else {
    verdict = 'WEAK_TYPOGRAPHY'
    notes.push('Weak correlation — per-landmark typography does not predict canvas drift magnitude.')
  }

  /** Closest |canvasΔ − metric| per row */
  const perRowMatch = flat.map((r) => {
    const cd = r.canvasDelta
    if (cd == null) return { landmark: r.landmark, fixture: r.fixture, best: null }
    const candidates = [
      { id: 'halfLeadingStrut', value: r.halfLeadingStrut },
      { id: 'halfLayoutStrut', value: r.halfLayoutStrut },
      { id: 'fontSize', value: r.fontSize },
      { id: 'lineHeight', value: r.lineHeight },
    ]
    const scored = candidates
      .filter((c) => c.value != null && Number.isFinite(c.value))
      .map((c) => ({
        ...c,
        deltaAbs: roundPx(Math.abs(cd - c.value)),
      }))
      .sort((a, b) => (a.deltaAbs ?? Infinity) - (b.deltaAbs ?? Infinity))
    return {
      landmark: r.landmark,
      fixture: r.fixture,
      canvasDelta: cd,
      best: scored[0] ?? null,
    }
  })

  const navRows = flat.filter((r) => r.elementKind === 'nav-link')
  const labelRows = flat.filter((r) => r.elementKind === 'block-label')
  const navMean =
    navRows.length && navRows.every((r) => r.canvasDelta != null)
      ? roundPx(navRows.reduce((s, r) => s + (r.canvasDelta ?? 0), 0) / navRows.length)
      : null
  const labelMean =
    labelRows.length && labelRows.every((r) => r.canvasDelta != null)
      ? roundPx(labelRows.reduce((s, r) => s + (r.canvasDelta ?? 0), 0) / labelRows.length)
      : null

  if (navMean != null && labelMean != null) {
    notes.push(
      `Bucket means: nav-link canvasΔ=${fmt(navMean)} px (${navRows.length} rows); block-label canvasΔ=${fmt(labelMean)} px (${labelRows.length} rows).`,
    )
  }

  return {
    verdict,
    canvasDeltaSpreadPx: canvasSpread,
    residualSpreadPx: residualSpread,
    pearsonR: {
      canvasDeltaVsHalfLeadingStrut: rHalfLeading,
      canvasDeltaVsHalfLayoutStrut: rLayoutStrut,
      canvasDeltaVsFontSize: rFontSize,
      canvasDeltaVsLineHeight: rLineHeight,
      canvasDeltaVsLayoutBox: rLayoutBox,
    },
    perRowClosestMetric: perRowMatch,
    notes,
  }
}

function printSummary(payload) {
  console.log('\n--- FO drift per landmark (product-baseline, headed) ---\n')
  for (const fx of payload.fixtures ?? []) {
    console.log(`Fixture: ${fx.fixture} (${fx.captureDims?.cssW}×${fx.captureDims?.cssH} CSS px, dpr=${fx.dpr})`)
    console.log(
      'landmark'.padEnd(14) +
        'fs'.padStart(6) +
        'lh'.padStart(6) +
        'layout'.padStart(8) +
        '½strut'.padStart(8) +
        'layout½'.padStart(9) +
        'svgΔ'.padStart(8) +
        'canvasΔ'.padStart(9),
    )
    for (const row of fx.rows ?? []) {
      if (row.error) {
        console.log(`${row.landmark}: ${row.error}`)
        continue
      }
      const s = row.summary ?? {}
      const t = row.threeWay ?? {}
      const m = row.metrics ?? {}
      console.log(
        String(row.landmark).padEnd(14) +
          fmt(s.fontSize).padStart(6) +
          fmt(s.lineHeight).padStart(6) +
          fmt(s.layoutBox).padStart(8) +
          fmt(s.halfLeadingStrut).padStart(8) +
          fmt(m.halfLayoutStrutPx).padStart(9) +
          fmt(t.liveVsSvgTopPx).padStart(8) +
          fmt(s.canvasDelta).padStart(9),
      )
    }
    console.log('')
  }
  const c = payload.correlation ?? {}
  console.log(`Correlation verdict: ${c.verdict ?? '—'}`)
  console.log(
    `  r(canvasΔ, halfLeadingStrut)=${fmt(c.pearsonR?.canvasDeltaVsHalfLeadingStrut)}` +
      `  spread=${fmt(c.canvasDeltaSpreadPx)} px` +
      `  residual spread=${fmt(c.residualSpreadPx)} px`,
  )
  for (const n of c.notes ?? []) console.log(`  · ${n}`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 800, height: 900 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  const qs = new URLSearchParams({ dpr: String(dprArg), scale: String(scaleArg) })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-drift-per-landmark.html?${qs}`
  console.log(`Page: ${url}`)

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foDriftPerLandmark?.ready === true, null, {
      timeout: 120_000,
    })
    const bootErr = await page.evaluate(() => window.__foDriftPerLandmark?.bootError)
    if (bootErr) {
      console.error('Boot failed:', bootErr)
      process.exitCode = 1
      return
    }

    const payload = await page.evaluate(async () => window.__foDriftPerLandmark.run())
    const flat = flattenRows(payload.fixtures ?? [])
    payload.correlation = buildCorrelation(flat)
    payload.generatedAt = new Date().toISOString()
    payload.port = port
    payload.headless = process.env.HEADLESS === '1'
    payload.commands = ['npm run compile', 'node __localtests__/fo-drift-per-landmark.mjs']

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
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

#!/usr/bin/env node
/**
 * W7 regression probe — product-baseline vs lab w7 vs src-mirror fo-y-half-leading-meta.
 *
 *   npm run debug:fo-w7-regression
 *   node __localtests__/fo-w7-regression-probe.mjs --json .sandbox-edit/fo-w7-regression-probe.json
 *
 * Mini fixture · Blocks landmark · dpr 1 and 2. Headed Chrome only — HEADLESS=1 unreliable.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-w7-regression-probe.json')

const RECIPES = [
  'product-baseline',
  'tc-fix-w7-rfork-fo-y-half-leading-meta',
  'src-mirror-experimentalRasterSvgPatchFoYHalfLeadingMeta',
]

const LANDMARKS = ['Blocks']
const DPRS = [1, 2]

/** Baseline |canvas−live| @ dpr=1 Blocks (pre-fork drift; mini fixture). */
const BASELINE_CANVAS_MIN = 1.0
/** w7 structural fork residual (Range subpixel vs integer scan). */
const W7_CANVAS_MAX = 0.5
const SVG_NEAR_LIVE_MAX = 0.06

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function abs(v) {
  return v == null || !Number.isFinite(v) ? null : Math.abs(v)
}

function layoutDelta(row) {
  if (
    row?.liveTopPx == null ||
    row?.canvasTopPx == null ||
    !Number.isFinite(row.liveTopPx) ||
    !Number.isFinite(row.canvasTopPx)
  ) {
    return null
  }
  return row.canvasTopPx - row.liveTopPx
}

function baselineCanvasDrift(row) {
  const live = row.liveTopPx
  const canvas = row.canvasTopPx
  if (!Number.isFinite(live) || !Number.isFinite(canvas)) return null
  return live - canvas
}

function expectBaseline(row) {
  const inkDrift = abs(row.liveVsCanvasTopPx)
  const layoutDrift = abs(layoutDelta(row))
  const absDrift = inkDrift ?? layoutDrift
  /** @type {string[]} */
  const errors = []
  if (absDrift == null || absDrift < BASELINE_CANVAS_MIN) {
    errors.push(`baseline |canvasΔ|=${absDrift ?? '—'}px expected ≥${BASELINE_CANVAS_MIN}`)
  }
  return errors
}

function expectW7(row) {
  const canvasAbs = abs(row.liveVsCanvasTopPx ?? layoutDelta(row))
  /** @type {string[]} */
  const errors = []
  if (canvasAbs == null || canvasAbs > W7_CANVAS_MAX) {
    errors.push(`w7 |canvas layout Δ|=${canvasAbs ?? '—'} expected ≤${W7_CANVAS_MAX}`)
  }
  return errors
}

async function runRecipe(page, base, recipeId, landmark, dpr) {
  const qs = new URLSearchParams({
    recipe: recipeId,
    auto: '1',
    view: 'canvas',
    dpr: String(dpr),
    landmark,
    includeInactive: '1',
  })
  const url = `${base}/__localtests__/fo-fix-lab.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(
    () => window.__foFixLab?.done === true && window.__foFixLastResult?.recipeId,
    null,
    { timeout: 180_000 },
  )
  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(`${recipeId} @ ${landmark} dpr=${dpr}: ${bootErr}`)

  return page.evaluate(() => {
    const r = window.__foFixLastResult
    return {
      recipeId: r?.recipeId,
      landmark: r?.landmark,
      dpr: r?.dpr,
      liveVsCanvasTopPx: r?.liveVsCanvasTopPx,
      liveVsSvgTopPx: r?.liveVsSvgTopPx,
      liveTopPx: r?.livePreviewLayoutTopPx ?? r?.liveLayoutTopPx ?? r?.liveTopPx,
      svgTopPx: r?.svgPreviewLayoutTopPx ?? r?.svgTopPx,
      canvasTopPx: r?.canvasPreviewLayoutTopPx ?? r?.canvasTopPx,
      rasterForkApplied: r?.rasterForkAudit?.applied,
    }
  })
}

function printReport(payload) {
  console.log('\n--- FO w7 regression probe (headed) ---\n')
  console.log(
    'recipe'.padEnd(52) +
      'lm'.padStart(10) +
      'dpr'.padStart(4) +
      'canvasΔ'.padStart(10) +
      'svgΔ'.padStart(9) +
      'pass'.padStart(6),
  )
  for (const row of payload.rows) {
    console.log(
      String(row.recipeId).padEnd(52) +
        String(row.landmark).padStart(10) +
        String(row.dpr).padStart(4) +
        (row.liveVsCanvasTopPx?.toFixed(3) ?? '—').padStart(10) +
        (row.liveVsSvgTopPx?.toFixed(3) ?? '—').padStart(9) +
        (row.pass ? '✓' : '✗').padStart(6),
    )
    for (const err of row.errors ?? []) console.log(`    ${err}`)
  }
  console.log(`\nOverall: ${payload.pass ? 'PASS' : 'FAIL'} (${payload.failCount} failing row(s))`)
  console.log('')
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const base = `http://127.0.0.1:${port}`
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  /** @type {Record<string, unknown>[]} */
  const rows = []

  try {
    for (const recipeId of RECIPES) {
      for (const landmark of LANDMARKS) {
        for (const dpr of DPRS) {
          console.log(`Probe: ${recipeId} · ${landmark} · dpr=${dpr}`)
          const raw = await runRecipe(page, base, recipeId, landmark, dpr)
          const rounded = {
            ...raw,
            liveVsCanvasTopPx: roundPx(raw.liveVsCanvasTopPx),
            liveVsSvgTopPx: roundPx(raw.liveVsSvgTopPx),
            liveTopPx: roundPx(raw.liveTopPx),
            svgTopPx: roundPx(raw.svgTopPx),
            canvasTopPx: roundPx(raw.canvasTopPx),
          }
          const isBaseline = recipeId === 'product-baseline'
          const errors = isBaseline ? expectBaseline(rounded) : expectW7(rounded)
          rows.push({
            ...rounded,
            pass: errors.length === 0,
            errors,
          })
        }
      }
    }
  } finally {
    await browser.close()
    server.close()
  }

  const failCount = rows.filter((r) => !r.pass).length
  const payload = {
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    recipes: RECIPES,
    landmarks: LANDMARKS,
    dprs: DPRS,
    thresholds: {
      baselineCanvasMin: BASELINE_CANVAS_MIN,
      w7CanvasMax: W7_CANVAS_MAX,
      svgNearLiveMax: SVG_NEAR_LIVE_MAX,
    },
    rows,
    pass: failCount === 0,
    failCount,
  }

  const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)
  console.log(`Wrote ${outPath}`)

  printReport(payload)
  process.exit(payload.pass ? 0 : 1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

#!/usr/bin/env node
/**
 * Three-way consistency — baseline must show large canvas drift, tight svg↔live.
 *
 *   npm run test:fo-three-way
 *   node __localtests__/fo-three-way-consistency-probe.mjs --json .sandbox-edit/fo-three-way-consistency.json
 *
 * Headed Chrome only — HEADLESS=1 unreliable for FO→bitmap ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-three-way-consistency.json')

const BASELINE_RECIPE = 'product-baseline'
const LANDMARKS = ['Home', 'Products']
const DPRS = [1, 2]

const CANVAS_DRIFT_MIN = 0.5
const SVG_NEAR_LIVE_MAX = 0.15

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function abs(v) {
  return v == null || !Number.isFinite(v) ? null : Math.abs(v)
}

function expectBaseline(row) {
  const canvasAbs = abs(row.liveVsCanvasTopPx)
  const svgAbs = abs(row.liveVsSvgTopPx)
  /** @type {string[]} */
  const errors = []
  if (canvasAbs == null || canvasAbs <= CANVAS_DRIFT_MIN) {
    errors.push(`|canvasΔ|=${canvasAbs ?? '—'} expected >${CANVAS_DRIFT_MIN}`)
  }
  if (svgAbs != null && svgAbs >= SVG_NEAR_LIVE_MAX) {
    errors.push(`|svgΔ|=${svgAbs} expected <${SVG_NEAR_LIVE_MAX}`)
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

  return page.evaluate(() => ({
    recipeId: window.__foFixLastResult?.recipeId,
    landmark: window.__foFixLastResult?.landmark,
    dpr: window.__foFixLastResult?.dpr,
    liveVsCanvasTopPx: window.__foFixLastResult?.liveVsCanvasTopPx,
    liveVsSvgTopPx: window.__foFixLastResult?.liveVsSvgTopPx,
    liveTopPx: window.__foFixLastResult?.liveTopPx,
    svgTopPx: window.__foFixLastResult?.svgTopPx,
    canvasTopPx: window.__foFixLastResult?.canvasTopPx,
  }))
}

function printReport(payload) {
  console.log('\n--- FO three-way consistency (headed) ---\n')
  for (const row of payload.rows) {
    console.log(
      `${String(row.landmark).padEnd(10)} dpr=${String(row.dpr).padStart(1)} canvasΔ=${row.liveVsCanvasTopPx?.toFixed(3) ?? '—'} svgΔ=${row.liveVsSvgTopPx?.toFixed(3) ?? '—'} ${row.pass ? '✓' : '✗'}`,
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
    for (const landmark of LANDMARKS) {
      for (const dpr of DPRS) {
        console.log(`Probe: ${BASELINE_RECIPE} · ${landmark} · dpr=${dpr}`)
        const raw = await runRecipe(page, base, BASELINE_RECIPE, landmark, dpr)
        const rounded = {
          ...raw,
          liveVsCanvasTopPx: roundPx(raw.liveVsCanvasTopPx),
          liveVsSvgTopPx: roundPx(raw.liveVsSvgTopPx),
        }
        const errors = expectBaseline(rounded)
        rows.push({ ...rounded, pass: errors.length === 0, errors })
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
    recipeId: BASELINE_RECIPE,
    landmarks: LANDMARKS,
    dprs: DPRS,
    thresholds: { canvasDriftMin: CANVAS_DRIFT_MIN, svgNearLiveMax: SVG_NEAR_LIVE_MAX },
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

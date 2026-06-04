#!/usr/bin/env node
/**
 * W7 UI path vs CLI matrix — detect +0.297 under-shift vs −0.203 structural residual.
 *
 *   npm run test:fo-w7-ui-path
 *   node __localtests__/fo-w7-ui-path-probe.mjs --json .sandbox-edit/fo-w7-ui-path-probe.json
 *
 * Headed Chrome only — HEADLESS=1 unreliable for FO→bitmap ink.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'fo-w7-ui-path-probe.json')

const W7_RECIPE = 'tc-fix-w7-rfork-fo-y-half-leading-meta'
const LANDMARK = 'Home'
const DPR = 1

/** Structural w7 residual @ dpr=1 (integer scan). */
const W7_GOOD_MIN = -0.35
const W7_GOOD_MAX = 0.05
/** Under-shift when fork/meta uses 2.5 instead of 2.8 strut. */
const UNDER_SHIFT_MIN = 0.22
const UNDER_SHIFT_MAX = 0.38
const UI_CLI_MAX_DELTA = 0.08

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function abs(v) {
  return v == null || !Number.isFinite(v) ? null : Math.abs(v)
}

function isUnderShiftRegression(canvasDelta) {
  const v = roundPx(canvasDelta)
  return v != null && v >= UNDER_SHIFT_MIN && v <= UNDER_SHIFT_MAX
}

function isGoodW7(canvasDelta) {
  const v = roundPx(canvasDelta)
  return v != null && v >= W7_GOOD_MIN && v <= W7_GOOD_MAX
}

async function runUiSingleRecipe(page, base) {
  const qs = new URLSearchParams({
    recipe: W7_RECIPE,
    auto: '1',
    view: 'canvas',
    dpr: String(DPR),
    landmark: LANDMARK,
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
  if (bootErr) throw new Error(`UI single recipe: ${bootErr}`)

  return page.evaluate(() => ({
    path: 'ui-single-recipe',
    recipeId: window.__foFixLastResult?.recipeId,
    liveVsCanvasTopPx: window.__foFixLastResult?.liveVsCanvasTopPx,
    liveVsSvgTopPx: window.__foFixLastResult?.liveVsSvgTopPx,
    rasterForkApplied: window.__foFixLastResult?.rasterForkAudit?.patchApplied,
    lhStrutHalfLeadingPx: window.__foFixLastResult?.rasterForkAudit?.lhStrutHalfLeadingPx,
  }))
}

async function runCliMatrix(page, base) {
  const qs = new URLSearchParams({
    matrix: '1',
    auto: '1',
    view: 'canvas',
    dpr: String(DPR),
    landmark: LANDMARK,
    ids: W7_RECIPE,
    excludeTextBypass: '1',
    includeInactive: '1',
  })
  const url = `${base}/__localtests__/fo-fix-lab.html?${qs}`
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(
    () => window.__foFixLab?.done === true && Array.isArray(window.__foFixMatrix),
    null,
    { timeout: 180_000 },
  )
  const bootErr = await page.evaluate(() => window.__foFixLab?.error)
  if (bootErr) throw new Error(`CLI matrix URL: ${bootErr}`)

  return page.evaluate((recipeId) => {
    const rows = window.__foFixMatrix || []
    const row = rows.find((r) => r.recipeId === recipeId) ?? rows[rows.length - 1]
    return {
      path: 'cli-matrix-url',
      recipeId: row?.recipeId,
      liveVsCanvasTopPx: row?.liveVsCanvasTopPx,
      liveVsSvgTopPx: row?.liveVsSvgTopPx,
      rasterForkApplied: row?.rasterForkAudit?.patchApplied,
      lhStrutHalfLeadingPx: row?.rasterForkAudit?.lhStrutHalfLeadingPx,
      matrixRowCount: rows.length,
    }
  }, W7_RECIPE)
}

function evaluatePath(row) {
  const canvas = roundPx(row.liveVsCanvasTopPx)
  /** @type {string[]} */
  const errors = []
  if (isUnderShiftRegression(canvas)) {
    errors.push(
      `canvasΔ=${canvas} in under-shift band [${UNDER_SHIFT_MIN},${UNDER_SHIFT_MAX}] (expected w7 ≈ −0.203, not +0.297)`,
    )
  } else if (!isGoodW7(canvas)) {
    errors.push(`canvasΔ=${canvas ?? '—'} outside good w7 band [${W7_GOOD_MIN},${W7_GOOD_MAX}]`)
  }
  if (row.rasterForkApplied === false) {
    errors.push('raster fork not applied (patchApplied=NO)')
  }
  return errors
}

function printReport(payload) {
  console.log('\n--- FO w7 UI path probe (headed) ---\n')
  for (const row of payload.paths) {
    console.log(
      `${row.path.padEnd(22)} canvasΔ=${row.liveVsCanvasTopPx?.toFixed(3) ?? '—'} fork=${row.rasterForkApplied ?? '?'} ${row.pass ? '✓' : '✗'}`,
    )
    for (const err of row.errors ?? []) console.log(`    ${err}`)
  }
  if (payload.uiCliMismatch) {
    console.log(
      `UI vs matrix Δ: ${payload.uiCliCanvasGapPx?.toFixed(3) ?? '—'} (max ${UI_CLI_MAX_DELTA})`,
    )
  }
  console.log(`\nOverall: ${payload.pass ? 'PASS' : 'FAIL'}`)
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

  try {
    console.log(`Probe UI single recipe: ${W7_RECIPE}`)
    const uiRaw = await runUiSingleRecipe(page, base)
    console.log(`Probe CLI matrix URL: ${W7_RECIPE}`)
    const cliRaw = await runCliMatrix(page, base)

    const uiRounded = {
      ...uiRaw,
      liveVsCanvasTopPx: roundPx(uiRaw.liveVsCanvasTopPx),
      liveVsSvgTopPx: roundPx(uiRaw.liveVsSvgTopPx),
      lhStrutHalfLeadingPx: roundPx(uiRaw.lhStrutHalfLeadingPx),
    }
    const cliRounded = {
      ...cliRaw,
      liveVsCanvasTopPx: roundPx(cliRaw.liveVsCanvasTopPx),
      liveVsSvgTopPx: roundPx(cliRaw.liveVsSvgTopPx),
      lhStrutHalfLeadingPx: roundPx(cliRaw.lhStrutHalfLeadingPx),
    }

    const uiErrors = evaluatePath(uiRounded)
    const cliErrors = evaluatePath(cliRounded)
    const uiCliCanvasGapPx =
      uiRounded.liveVsCanvasTopPx != null && cliRounded.liveVsCanvasTopPx != null
        ? Math.abs(uiRounded.liveVsCanvasTopPx - cliRounded.liveVsCanvasTopPx)
        : null
    const uiCliMismatch =
      uiCliCanvasGapPx != null && uiCliCanvasGapPx > UI_CLI_MAX_DELTA
    /** @type {string[]} */
    const parityErrors = []
    if (uiCliMismatch) {
      parityErrors.push(
        `UI vs matrix canvasΔ gap ${roundPx(uiCliCanvasGapPx)} > ${UI_CLI_MAX_DELTA}`,
      )
    }

    const paths = [
      { ...uiRounded, pass: uiErrors.length === 0, errors: uiErrors },
      { ...cliRounded, pass: cliErrors.length === 0, errors: cliErrors },
    ]
    const failCount =
      paths.filter((p) => !p.pass).length + (parityErrors.length ? 1 : 0)

    const payload = {
      generatedAt: new Date().toISOString(),
      headed: process.env.HEADLESS !== '1',
      recipeId: W7_RECIPE,
      landmark: LANDMARK,
      dpr: DPR,
      thresholds: {
        w7GoodBand: [W7_GOOD_MIN, W7_GOOD_MAX],
        underShiftBand: [UNDER_SHIFT_MIN, UNDER_SHIFT_MAX],
        uiCliMaxGap: UI_CLI_MAX_DELTA,
      },
      paths,
      uiCliCanvasGapPx: roundPx(uiCliCanvasGapPx),
      uiCliMismatch,
      parityErrors,
      pass: failCount === 0,
      failCount,
    }

    const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)
    console.log(`Wrote ${outPath}`)

    printReport(payload)
    process.exit(payload.pass ? 0 : 1)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

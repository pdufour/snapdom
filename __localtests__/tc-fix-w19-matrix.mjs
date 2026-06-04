#!/usr/bin/env node
/**
 * Wave-19 matrix calibrate — w7 residual closure only.
 * Writes `.sandbox-edit/tc-fix-w19-matrix.json`.
 *
 *   npm run debug:tc-fix-w19-matrix-calibrate
 *   node __localtests__/tc-fix-w19-matrix.mjs --json .sandbox-edit/tc-fix-w19-matrix.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tc-fix-w19-matrix.json')

const GATE_PX = 0.06
const W7_BEST_PX = 0.203
const W7_REF = 'tc-fix-w7-rfork-fo-y-half-leading-meta'
const BASELINE = 'product-baseline'

const RECIPE_IDS_CSV =
  'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w19-*'

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink may be unreliable; use headed Chrome.')
  }

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })
  page.on('pageerror', (err) => console.error('[pageerror]', err.message))

  /** @type {Record<string, unknown>[]} */
  let calibrateRows = []

  try {
    const probeQs = new URLSearchParams({
      matrix: '1',
      auto: '1',
      calibrate: '1',
      landmarks: 'Home,Products',
      includeInactive: '1',
      ids: RECIPE_IDS_CSV,
    })
    const probeUrl = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${probeQs}`
    console.log(`Calibrating (batch): ${RECIPE_IDS_CSV}`)
    console.log(probeUrl)
    await page.goto(probeUrl, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(() => window.__foFixLab?.done === true, null, {
      timeout: 600_000,
    })
    const err = await page.evaluate(() => window.__foFixLab?.error)
    if (err) throw new Error(String(err))
    calibrateRows = await page.evaluate(() => window.__foFixCalibrateMatrix ?? [])
  } finally {
    await browser.close()
    server.close()
  }

  /** @type {Record<string, { worstAbsDeltaTop: number | null, meanAbsDeltaTop: number | null, pass: boolean, labInkScanMode?: string, landmarks: unknown[] }>} */
  const byRecipe = {}
  for (const raw of calibrateRows) {
    const id = String(raw.recipeId ?? '')
    if (!id) continue
    byRecipe[id] = {
      worstAbsDeltaTop: roundPx(raw.worstAbsDeltaTop),
      meanAbsDeltaTop: roundPx(raw.meanAbsDeltaTop),
      pass: Boolean(raw.pass),
      labInkScanMode: raw.labInkScanMode ?? 'integer',
      landmarks: Array.isArray(raw.landmarks) ? raw.landmarks : [],
    }
  }

  const leaders = Object.entries(byRecipe)
    .filter(([id]) => id !== BASELINE)
    .map(([recipeId, row]) => ({ recipeId, ...row }))
    .sort((a, b) => (a.worstAbsDeltaTop ?? 99) - (b.worstAbsDeltaTop ?? 99))

  const best = leaders[0]
  const w7 = byRecipe[W7_REF]
  const baseline = byRecipe[BASELINE]

  const integerLeaders = leaders.filter(
    (r) => (r.labInkScanMode ?? 'integer') === 'integer',
  )
  const w19IntegerBest = integerLeaders.find((r) => r.recipeId.startsWith('tc-fix-w19-'))

  const w7Worst = w7?.worstAbsDeltaTop ?? W7_BEST_PX
  const w7ResidualStill = Math.abs(w7Worst - W7_BEST_PX) < 0.01
  const noIntegerPass = !integerLeaders.some((r) => r.pass && (r.worstAbsDeltaTop ?? 99) <= GATE_PX)

  const payload = {
    gatePx: GATE_PX,
    dpr: 1,
    landmarks: ['Home', 'Products'],
    recipeIdsCsv: RECIPE_IDS_CSV,
    hypothesis: 'w7 −0.203 = Range subpixel vs integer ink scan',
    baseline: { recipeId: BASELINE, ...baseline },
    w7: { recipeId: W7_REF, ...w7 },
    bestLeader: best ?? null,
    w19IntegerBest: w19IntegerBest ?? null,
    integerLeaders: integerLeaders.slice(0, 8),
    leaders: leaders.slice(0, 10),
    rows: calibrateRows,
    w7ResidualStill203: w7ResidualStill,
    noIntegerGatePass: noIntegerPass,
    verdict:
      integerLeaders.some((r) => r.pass && (r.worstAbsDeltaTop ?? 99) <= GATE_PX)
        ? 'FIXED'
        : w7ResidualStill && noIntegerPass
          ? 'STOP_CHURN'
          : best && (best.worstAbsDeltaTop ?? 99) < w7Worst
            ? 'PARTIAL'
            : 'NOT_FIXED',
    recommendStop:
      w7ResidualStill &&
      noIntegerPass &&
      (w19IntegerBest?.worstAbsDeltaTop ?? w7Worst) >= GATE_PX,
  }

  const outPath = jsonOutArg
    ? path.isAbsolute(jsonOutArg)
      ? jsonOutArg
      : path.join(REPO_ROOT, jsonOutArg)
    : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

  console.log(
    `\nWave-19 calibrate → ${outPath}`,
    `\nVerdict: ${payload.verdict}`,
    `\nBest: ${best?.recipeId ?? '—'} worst|Δ|=${best?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
    `\nw7 ref: worst|Δ|=${w7Worst?.toFixed?.(3) ?? w7Worst} · baseline: ${baseline?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
    `\nRecommend STOP: ${payload.recommendStop}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

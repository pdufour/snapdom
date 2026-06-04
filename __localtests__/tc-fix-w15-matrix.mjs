#!/usr/bin/env node
/**
 * Wave-15 matrix calibrate — writes `.sandbox-edit/tc-fix-w15-matrix.json`.
 *
 *   npm run debug:tc-fix-w15-matrix-calibrate
 *   node __localtests__/tc-fix-w15-matrix.mjs --json .sandbox-edit/tc-fix-w15-matrix.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tc-fix-w15-matrix.json')

const GATE_PX = 0.06
const W7_REF = 'tc-fix-w7-rfork-fo-y-half-leading-meta'
const BASELINE = 'product-baseline'

const RECIPE_IDS_CSV =
  'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w12-rfork-w7-y-range-subpx-draw,tc-fix-w15-*'

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
    for (const row of calibrateRows) {
      console.log(
        `  ${row.recipeId}: worst|Δ|=${row.worstAbsDeltaTop?.toFixed?.(3) ?? row.worstAbsDeltaTop} pass=${row.pass}`,
      )
    }
  } finally {
    await browser.close()
    server.close()
  }

  /** @type {Record<string, { worstAbsDeltaTop: number | null, pass: boolean }>} */
  const byRecipe = {}
  for (const raw of calibrateRows) {
    const id = String(raw.recipeId ?? '')
    if (!id) continue
    byRecipe[id] = {
      worstAbsDeltaTop: roundPx(raw.worstAbsDeltaTop),
      pass: Boolean(raw.pass),
    }
  }

  const w15Ids = Object.keys(byRecipe).filter((id) => id.startsWith('tc-fix-w15-'))
  const w15Sorted = w15Ids
    .map((id) => ({ recipeId: id, ...byRecipe[id] }))
    .sort(
      (a, b) =>
        (a.worstAbsDeltaTop ?? Infinity) - (b.worstAbsDeltaTop ?? Infinity),
    )

  const leaders = [...calibrateRows]
    .filter((r) => r.recipeId && r.recipeId !== BASELINE && !r.error)
    .sort((a, b) => (a.worstAbsDeltaTop ?? 99) - (b.worstAbsDeltaTop ?? 99))

  const best = leaders[0]
  const w7 = byRecipe[W7_REF]
  const baseline = byRecipe[BASELINE]
  const bestW15 = w15Sorted[0] ?? null
  const gatePass = calibrateRows.some(
    (r) => r.pass && (r.worstAbsDeltaTop ?? 99) <= GATE_PX,
  )
  const beatW7 =
    best != null &&
    (best.worstAbsDeltaTop ?? 99) < (w7?.worstAbsDeltaTop ?? 0.203)

  const payload = {
    generatedAt: new Date().toISOString(),
    gatePx: GATE_PX,
    dpr: 1,
    landmarks: ['Home', 'Products'],
    recipeIds: RECIPE_IDS_CSV,
    baseline: { recipeId: BASELINE, ...baseline },
    w7: { recipeId: W7_REF, ...w7 },
    bestW15,
    bestLeader: best
      ? { recipeId: best.recipeId, worstAbsDeltaTop: roundPx(best.worstAbsDeltaTop), pass: best.pass }
      : null,
    w15Leaders: w15Sorted.slice(0, 8),
    rows: calibrateRows,
    verdict: gatePass ? 'FIXED' : beatW7 ? 'PARTIAL' : 'NOT_FIXED',
  }

  const outPath = jsonOutArg
    ? path.isAbsolute(jsonOutArg)
      ? jsonOutArg
      : path.join(REPO_ROOT, jsonOutArg)
    : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

  console.log(
    `\nWave-15 calibrate → ${outPath}`,
    `\nVerdict: ${payload.verdict}`,
    `\nBest: ${best?.recipeId ?? '—'} worst|Δ|=${best?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
    `\nw7 ref: worst|Δ|=${w7?.worstAbsDeltaTop?.toFixed(3) ?? '—'} · baseline: ${baseline?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

#!/usr/bin/env node
/**
 * Wave-17 matrix calibrate — writes `.sandbox-edit/tc-fix-w17-matrix.json`.
 *
 *   npm run debug:tc-fix-w17-matrix-calibrate
 *   node __localtests__/tc-fix-w17-matrix.mjs --json .sandbox-edit/tc-fix-w17-matrix.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tc-fix-w17-matrix.json')

const GATE_PX = 0.06
const W7_BEST_PX = 0.203
const W7_REF = 'tc-fix-w7-rfork-fo-y-half-leading-meta'
const BASELINE = 'product-baseline'

const RECIPE_IDS_CSV =
  'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w17-*'

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

  /** @type {Record<string, { worstAbsDeltaTop: number | null, meanAbsDeltaTop: number | null, pass: boolean, landmarks: unknown[] }>} */
  const byRecipe = {}
  for (const raw of calibrateRows) {
    const id = String(raw.recipeId ?? '')
    if (!id) continue
    byRecipe[id] = {
      worstAbsDeltaTop: roundPx(raw.worstAbsDeltaTop),
      meanAbsDeltaTop: roundPx(raw.meanAbsDeltaTop),
      pass: Boolean(raw.pass),
      landmarks: Array.isArray(raw.landmarks) ? raw.landmarks : [],
    }
  }

  const w17Ids = Object.keys(byRecipe).filter((id) => id.startsWith('tc-fix-w17-'))
  const w17Sorted = w17Ids
    .map((id) => ({ recipeId: id, ...byRecipe[id] }))
    .sort(
      (a, b) =>
        (a.worstAbsDeltaTop ?? Infinity) - (b.worstAbsDeltaTop ?? Infinity),
    )

  const w7 = byRecipe[W7_REF]
  const baseline = byRecipe[BASELINE]
  const bestW17 = w17Sorted[0] ?? null
  const gatePass = w17Sorted.some(
    (r) => r.pass && (r.worstAbsDeltaTop ?? 99) <= GATE_PX,
  )
  const beatsW7 =
    bestW17 != null &&
    Number.isFinite(bestW17.worstAbsDeltaTop) &&
    bestW17.worstAbsDeltaTop < W7_BEST_PX

  const payload = {
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    gatePx: GATE_PX,
    w7BestPx: W7_BEST_PX,
    verdict: gatePass ? 'FIXED' : beatsW7 ? 'IMPROVED_NOT_GATE' : 'NOT_FIXED',
    note: gatePass
      ? 'At least one w17 row passes ≤0.06 px gate on Home+Products.'
      : beatsW7
        ? `Best w17 beats w7 ${W7_BEST_PX}px but does not pass ≤${GATE_PX}px gate.`
        : 'No w17 row beats w7 0.203 px or passes ≤0.06 px gate.',
    reference: {
      baseline: { recipeId: BASELINE, ...baseline },
      w7: { recipeId: W7_REF, ...w7 },
    },
    bestW17,
    w17Leaders: w17Sorted.slice(0, 5),
    w17All: w17Sorted,
    rows: calibrateRows,
  }

  const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- Wave-17 calibrate (Home + Products) ---\n')
  console.log(
    'recipe'.padEnd(52) +
      'worst|Δ|'.padStart(10) +
      'mean|Δ|'.padStart(10) +
      'pass'.padStart(6),
  )
  for (const row of w17Sorted) {
    console.log(
      row.recipeId.padEnd(52) +
        (row.worstAbsDeltaTop?.toFixed(3) ?? '—').padStart(10) +
        (row.meanAbsDeltaTop?.toFixed(3) ?? '—').padStart(10) +
        (row.pass ? '✓' : '✗').padStart(6),
    )
  }
  console.log(
    `\nw7 ref: worst|Δ|=${w7?.worstAbsDeltaTop?.toFixed(3) ?? '—'} · baseline: ${baseline?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
  )
  console.log(
    `Best w17: ${bestW17?.recipeId ?? '—'} (worst|Δ|=${bestW17?.worstAbsDeltaTop?.toFixed(3) ?? '—'})`,
  )
  console.log(`Verdict: ${payload.verdict}`)
  console.log(`Wrote ${outPath}\n`)

  process.exit(gatePass || beatsW7 ? 0 : 1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

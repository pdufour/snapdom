#!/usr/bin/env node
/**
 * Wave-14 matrix calibrate — writes `.sandbox-edit/tc-fix-w14-matrix.json`.
 *
 *   npm run debug:tc-fix-w14-matrix-calibrate
 *   node __localtests__/tc-fix-w14-matrix.mjs --json .sandbox-edit/tc-fix-w14-matrix.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tc-fix-w14-matrix.json')

const GATE_PX = 0.06
const W7_REF = 'tc-fix-w7-rfork-fo-y-half-leading-meta'
const BASELINE = 'product-baseline'

const RECIPE_GLOB =
  'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w13-*,tc-fix-w14-*'

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

function matchGlob(id, pattern) {
  if (pattern.endsWith('*')) return id.startsWith(pattern.slice(0, -1))
  return id === pattern
}

function resolveRecipeIds(allIds, globCsv) {
  const patterns = globCsv.split(',').map((s) => s.trim()).filter(Boolean)
  return allIds.filter((id) => patterns.some((p) => matchGlob(id, p)))
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
    const allRecipeIds = await page.evaluate(async () => {
      const mod = await import('/__localtests__/fo-fix-recipes.js')
      await mod.ensureFoFixRecipesLoaded?.()
      return mod.FO_FIX_RECIPES.map((r) => r.id)
    }).catch(async () => {
      const probeQs = new URLSearchParams({ auto: '1', calibrate: '1', landmarks: 'Home,Products' })
      await page.goto(
        `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${probeQs}`,
        { waitUntil: 'load', timeout: 120_000 },
      )
      await page.waitForFunction(() => window.__foFixRecipeIds?.length, null, { timeout: 120_000 })
      return page.evaluate(() => window.__foFixRecipeIds.map(String))
    })

    const targetIds = resolveRecipeIds(allRecipeIds, RECIPE_GLOB)
    console.log(`Calibrating ${targetIds.length} recipes (glob: ${RECIPE_GLOB})`)

    for (const recipeId of targetIds) {
      const probeQs = new URLSearchParams({
        recipe: recipeId,
        auto: '1',
        calibrate: '1',
        landmarks: 'Home,Products',
        includeInactive: '1',
      })
      const probeUrl = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${probeQs}`
      console.log(`  ${recipeId}`)
      await page.goto(probeUrl, { waitUntil: 'load', timeout: 120_000 })
      await page.waitForFunction(
        () => window.__foFixLab?.done === true && window.__foFixCalibrate?.recipeId,
        null,
        { timeout: 180_000 },
      )
      const err = await page.evaluate(() => window.__foFixLab?.error)
      if (err) {
        calibrateRows.push({ recipeId, error: String(err) })
        continue
      }
      const row = await page.evaluate(() => window.__foFixCalibrate)
      calibrateRows.push(row)
    }
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

  const w14Ids = Object.keys(byRecipe).filter((id) => id.startsWith('tc-fix-w14-'))
  const w14Sorted = w14Ids
    .map((id) => ({ recipeId: id, ...byRecipe[id] }))
    .sort(
      (a, b) =>
        (a.worstAbsDeltaTop ?? Infinity) - (b.worstAbsDeltaTop ?? Infinity),
    )

  const w7 = byRecipe[W7_REF]
  const baseline = byRecipe[BASELINE]
  const bestW14 = w14Sorted[0] ?? null
  const gatePass = w14Sorted.some((r) => r.pass && (r.worstAbsDeltaTop ?? 99) <= GATE_PX)

  const payload = {
    generatedAt: new Date().toISOString(),
    headed: process.env.HEADLESS !== '1',
    gatePx: GATE_PX,
    verdict: gatePass ? 'FIXED' : 'NOT_FIXED',
    note: gatePass
      ? 'At least one w14 row passes ≤0.06 px gate on Home+Products.'
      : 'No w14 row passes ≤0.06 px integer ink gate — parity NOT fixed.',
    reference: {
      baseline: { recipeId: BASELINE, ...baseline },
      w7: { recipeId: W7_REF, ...w7 },
    },
    bestW14,
    w14Leaders: w14Sorted.slice(0, 5),
    w14All: w14Sorted,
    rows: calibrateRows,
  }

  const outPath = jsonOutArg ? path.resolve(process.cwd(), jsonOutArg) : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

  console.log('\n--- Wave-14 calibrate (Home + Products) ---\n')
  console.log(
    'recipe'.padEnd(48) +
      'worst|Δ|'.padStart(10) +
      'mean|Δ|'.padStart(10) +
      'pass'.padStart(6),
  )
  for (const row of w14Sorted) {
    console.log(
      row.recipeId.padEnd(48) +
        (row.worstAbsDeltaTop?.toFixed(3) ?? '—').padStart(10) +
        (row.meanAbsDeltaTop?.toFixed(3) ?? '—').padStart(10) +
        (row.pass ? '✓' : '✗').padStart(6),
    )
  }
  console.log(
    `\nw7 ref: worst|Δ|=${w7?.worstAbsDeltaTop?.toFixed(3) ?? '—'} · baseline: ${baseline?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
  )
  console.log(`Best w14: ${bestW14?.recipeId ?? '—'} (worst|Δ|=${bestW14?.worstAbsDeltaTop?.toFixed(3) ?? '—'})`)
  console.log(`Verdict: ${payload.verdict}`)
  console.log(`Wrote ${outPath}\n`)

  process.exit(gatePass ? 0 : 1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

#!/usr/bin/env node
/**
 * Wave-20 matrix calibrate — w7 refine (minus-subpixel + root-only).
 * Writes `.sandbox-edit/tc-fix-w20-matrix.json`.
 *
 *   npm run debug:tc-fix-w20-matrix-calibrate
 *   node __localtests__/tc-fix-w20-matrix.mjs --json .sandbox-edit/w20-calibrate-results.json
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const DEFAULT_OUT = path.join(REPO_ROOT, '.sandbox-edit', 'tc-fix-w20-matrix.json')

const GATE_PX = 0.06
const W7_REF = 'tc-fix-w7-rfork-fo-y-half-leading-meta'
const BASELINE = 'product-baseline'

const RECIPE_GLOB =
  'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w20-*'

const args = process.argv.slice(2)
const jsonOutArg = args.includes('--json') ? args[args.indexOf('--json') + 1] : null

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
      await page.goto(
        `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${probeQs}`,
        { waitUntil: 'load', timeout: 120_000 },
      )
      await page.waitForFunction(
        () => window.__foFixLab?.done === true,
        null,
        { timeout: 180_000 },
      )
      const bootErr = await page.evaluate(() => window.__foFixLab?.error)
      if (bootErr) throw new Error(`${recipeId}: ${bootErr}`)

      const rows = await page.evaluate(() => window.__foFixCalibrateRows ?? [])
      const row = rows.find((r) => r.recipeId === recipeId) ?? rows[0]
      if (row) {
        calibrateRows.push(row)
        const worst = row.worstAbsDeltaTop
        console.log(
          `  ${recipeId}: worst|Δ|=${worst?.toFixed?.(3) ?? worst} pass=${row.passGate ?? '—'}`,
        )
      }
    }
  } finally {
    await browser.close()
    server.close()
  }

  const byRecipe = Object.fromEntries(
    calibrateRows.map((r) => [r.recipeId, r]),
  )
  const leaders = [...calibrateRows]
    .filter((r) => r.recipeId !== BASELINE)
    .sort((a, b) => (a.worstAbsDeltaTop ?? 99) - (b.worstAbsDeltaTop ?? 99))

  const best = leaders[0]
  const w7 = byRecipe[W7_REF]
  const baseline = byRecipe[BASELINE]
  const w20Best = leaders.find((r) => r.recipeId?.startsWith('tc-fix-w20-'))

  const w7ResidualStill = Math.abs((w7?.worstAbsDeltaTop ?? 0.203) - 0.203) < 0.01
  const noIntegerPass = !leaders.some((r) => r.passGate === true)

  const payload = {
    gatePx: GATE_PX,
    dpr: 1,
    landmarks: ['Home', 'Products'],
    recipeGlob: RECIPE_GLOB,
    hypothesis: 'w7 refine — minus-subpixel FO y + root-only scope',
    baseline: { recipeId: BASELINE, ...baseline },
    w7: { recipeId: W7_REF, ...w7 },
    bestLeader: best ?? null,
    w20Best: w20Best ?? null,
    leaders: leaders.slice(0, 10),
    rows: calibrateRows,
    w7ResidualStill203: w7ResidualStill,
    noIntegerGatePass: noIntegerPass,
    verdict:
      best?.passGate === true
        ? 'FIXED'
        : w7ResidualStill && noIntegerPass
          ? 'NOT_FIXED'
          : best && (best.worstAbsDeltaTop ?? 99) < (w7?.worstAbsDeltaTop ?? 0.203)
            ? 'PARTIAL'
            : 'NOT_FIXED',
    recommendStop:
      w7ResidualStill &&
      noIntegerPass &&
      (w20Best?.worstAbsDeltaTop ?? 0.203) >= GATE_PX,
  }

  const outPath = jsonOutArg
    ? path.isAbsolute(jsonOutArg)
      ? jsonOutArg
      : path.join(REPO_ROOT, jsonOutArg)
    : DEFAULT_OUT
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`)

  const w20ResultsPath = path.join(REPO_ROOT, '.sandbox-edit', 'w20-calibrate-results.json')
  if (outPath !== w20ResultsPath) {
    fs.writeFileSync(w20ResultsPath, `${JSON.stringify(payload, null, 2)}\n`)
  }

  console.log(
    `\nWave-20 calibrate → ${outPath}`,
    `\nVerdict: ${payload.verdict}`,
    `\nBest: ${best?.recipeId ?? '—'} worst|Δ|=${best?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
    `\nw7 ref: worst|Δ|=${w7?.worstAbsDeltaTop?.toFixed(3) ?? '—'} · baseline: ${baseline?.worstAbsDeltaTop?.toFixed(3) ?? '—'}`,
    `\nRecommend STOP: ${payload.recommendStop}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

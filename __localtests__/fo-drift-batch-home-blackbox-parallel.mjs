#!/usr/bin/env node
/**
 * Parallel checkout blackbox-metric drift batches (30 recipes, parallel Chrome).
 *
 *   node __localtests__/fo-drift-batch-home-blackbox-parallel.mjs --offsets 0,30 --parallel 3
 *   node __localtests__/fo-drift-batch-home-blackbox-parallel.mjs --offsets auto --parallel 3 --include-inactive
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const BATCH_SCRIPT = path.join(__dirname, 'fo-drift-batch-home-blackbox-metric.mjs')
const LIMIT = 30
const BASE_PORT = 8820
const NAV_INK_BUDGET = 0.06
const MERGE_OUT = path.join(SANDBOX, 'fo-drift-batch-home-blackbox-scored-merged.json')

const DEFAULT_IDS = [
  'product-baseline',
  'tc-fix-*',
  'tc-blh-*',
  'tc-decode-*',
  'tc-raster-*',
  'fix321-*',
  'tc-fork-*',
].join(',')

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const offsetsRaw = argAfter('--offsets')
const from = Number(argAfter('--from') ?? 0)
const count = Number(argAfter('--count') ?? 2)
const parallel = Math.max(1, Number(argAfter('--parallel') ?? 3))
const includeInactive = args.includes('--include-inactive')
const matrixIds = (argAfter('--ids') ?? DEFAULT_IDS)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

function computeAutoOffsets() {
  /** @type {number[]} */
  const out = []
  let offset = 0
  for (;;) {
    const n = resolveFoFixMatrixRecipes({
      ids: matrixIds,
      excludeTextBypass: true,
      includeInactive,
      limit: LIMIT,
      offset,
    }).length
    if (!n) break
    out.push(offset)
    if (n < LIMIT) break
    offset += LIMIT
    if (offset > LIMIT * 200) break
  }
  return out
}

/** @type {number[]} */
let offsets
if (offsetsRaw === 'auto') {
  offsets = computeAutoOffsets()
} else if (offsetsRaw) {
  offsets = offsetsRaw
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n >= 0)
} else {
  offsets = Array.from({ length: Math.max(0, count) }, (_, i) => from + i * LIMIT)
}

function reportPath(offset) {
  return path.join(SANDBOX, `fo-drift-batch-home-blackbox-o${offset}-l${LIMIT}.json`)
}

function runBatch(offset, port) {
  return new Promise((resolve, reject) => {
    const childArgs = [
      BATCH_SCRIPT,
      '--sandbox-home',
      '--ids',
      matrixIds.join(','),
      '--limit',
      String(LIMIT),
      '--offset',
      String(offset),
    ]
    if (includeInactive) childArgs.push('--include-inactive')

    const env = { ...process.env, SNAPDOM_LOCAL_PORT: String(port) }
    const child = spawn(process.execPath, childArgs, {
      cwd: REPO_ROOT,
      env,
      stdio: 'inherit',
    })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve(offset)
      else reject(new Error(`blackbox batch offset=${offset} exit ${code}`))
    })
  })
}

async function runPool(list) {
  /** @type {Promise<void>[]} */
  const inFlight = new Set()
  for (let i = 0; i < list.length; i++) {
    const offset = list[i]
    const port = BASE_PORT + (i % 20)
    const p = runBatch(offset, port).then(
      () => {
        inFlight.delete(p)
      },
      (err) => {
        inFlight.delete(p)
        throw err
      },
    )
    inFlight.add(p)
    if (inFlight.size >= parallel) await Promise.race(inFlight)
  }
  await Promise.all(inFlight)
}

function mergeReports(activeOffsets) {
  /** @type {object[]} */
  const allRanked = []
  /** @type {object[]} */
  const skipped = []
  /** @type {object[]} */
  const errors = []

  for (const offset of activeOffsets) {
    const p = reportPath(offset)
    if (!fs.existsSync(p)) {
      console.warn(`Missing ${p}`)
      continue
    }
    const data = JSON.parse(fs.readFileSync(p, 'utf8'))
    for (const r of data.ranked ?? []) {
      allRanked.push({ ...r, batchOffset: offset })
    }
    for (const r of data.skipped ?? []) skipped.push({ ...r, batchOffset: offset })
    for (const r of data.errors ?? []) errors.push({ ...r, batchOffset: offset })
  }

  allRanked.sort((a, b) => a.rankScore - b.rankScore)
  const baseline = allRanked.find((r) => r.recipeId === 'product-baseline')
  const top5 = allRanked.slice(0, 5)
  const winners = allRanked.filter((r) => r.beatsBaseline)
  const inBudgetCandidates = allRanked.filter((r) => {
    const h = r.homeCanvasVsBorderTop
    const p = r.productsCanvasVsBorderTop
    if (h == null || p == null) return false
    return Math.abs(h) <= NAV_INK_BUDGET && Math.abs(p) <= NAV_INK_BUDGET
  })

  const merged = {
    generatedAt: new Date().toISOString(),
    metric: 'paint.canvas.vs-border.top',
    fixture: 'checkout-example.html',
    dpr: 2,
    limit: LIMIT,
    offsets: activeOffsets,
    matrixIds,
    parallel,
    headed: process.env.HEADLESS !== '1',
    baseline: {
      home: baseline?.homeCanvasVsBorderTop ?? -0.91,
      products: baseline?.productsCanvasVsBorderTop ?? -0.91,
    },
    blackboxGate: 'Home/Products paint.canvas.vs-border.top toward 0 from −0.91; npm run test:blackbox for src promotion',
    top5,
    winners,
    best: allRanked[0] ?? null,
    beatsBaselineCount: winners.length,
    inBudgetCandidates,
    bestInBudget: inBudgetCandidates[0] ?? null,
    inBudgetCount: inBudgetCandidates.length,
    promoteSrc: false,
    promoteSrcReason:
      inBudgetCandidates.length > 0
        ? 'Candidate(s) within nav ink budget — run bounce-check-experimental + npm run test:blackbox before src promotion'
        : winners.length
          ? 'Nav-only winners beat −0.91 toward 0 but exceed 0.06px budget and/or fail full INK_GATE_LABELS'
          : 'No recipe beat checkout −0.91 toward 0 on Home+Products',
    doNotPromoteAsDefault: ['fo-y-strut-range-meta', 'fo-y-half-leading-meta'],
    rankedCount: allRanked.length,
    skipped,
    errors,
  }

  fs.mkdirSync(SANDBOX, { recursive: true })
  fs.writeFileSync(MERGE_OUT, `${JSON.stringify(merged, null, 2)}\n`)
  console.log(`\nMerged → ${MERGE_OUT}`)
  if (merged.best) {
    console.log(
      `Top checkout metric: ${merged.best.recipeId} Home=${merged.best.homeCanvasVsBorderTop} Products=${merged.best.productsCanvasVsBorderTop}`,
    )
  }
  console.log('\nTop 5 (checkout paint.canvas.vs-border.top):')
  for (const r of top5) {
    console.log(
      `  ${r.recipeId}: Home=${r.homeCanvasVsBorderTop} Products=${r.productsCanvasVsBorderTop} beats=${r.beatsBaseline}`,
    )
  }
  return merged
}

function filterNonEmptyOffsets(list) {
  const kept = []
  for (const offset of list) {
    const n = resolveFoFixMatrixRecipes({
      ids: matrixIds,
      excludeTextBypass: true,
      includeInactive,
      limit: LIMIT,
      offset,
    }).length
    if (n > 0) kept.push(offset)
    else console.warn(`Skip offset=${offset} (0 recipes)`)
  }
  return kept
}

async function main() {
  const active = filterNonEmptyOffsets(offsets)
  console.log(
    `Blackbox-metric batches: offsets=[${active.join(',')}] parallel=${parallel} ids=${matrixIds.join(',')}`,
  )
  if (!active.length) {
    console.error('No recipe slices')
    process.exit(1)
  }
  await runPool(active)
  const merged = mergeReports(active)

  if (merged.winners?.length) {
    console.log(`\n${merged.winners.length} recipe(s) beat −0.91 toward 0 on checkout query harness`)
    console.log('Run npm run test:blackbox after promoting flags to src/ — not done automatically.')
  } else {
    console.log('\nNo recipe beat checkout baseline toward 0; promoteSrc remains false.')
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

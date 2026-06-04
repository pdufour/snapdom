#!/usr/bin/env node
/**
 * Run drift-batch1 matrix batches (40 recipes each), optionally in parallel.
 *
 *   node __localtests__/fo-drift-batch1-parallel.mjs --from 0 --count 1
 *   node __localtests__/fo-drift-batch1-parallel.mjs --offsets 0 --parallel 4 --include-inactive
 *   node __localtests__/fo-drift-batch1-parallel.mjs --offsets auto --parallel 4 --include-inactive \
 *     --ids 'product-baseline,drift-batch1-*'
 *   npm run debug:fo-drift-batch1
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const BATCH_SCRIPT = path.join(__dirname, 'fo-drift-matrix-batch.mjs')
const LIMIT = 40
const BASE_PORT = 8820
const DEFAULT_IDS = 'product-baseline,drift-batch1-*'

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const offsetsRaw = argAfter('--offsets')
const from = Number(argAfter('--from') ?? 0)
const count = Number(argAfter('--count') ?? 1)
const parallel = Math.max(1, Number(argAfter('--parallel') ?? 1))
const includeInactive = args.includes('--include-inactive')
const idsRaw = argAfter('--ids')
const mergeOutArg = argAfter('--merge-out')

const matrixIds = parseMatrixIds(idsRaw ?? DEFAULT_IDS)

function parseMatrixIds(raw) {
  return String(raw)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function defaultMergeOutPath() {
  const slug = matrixIds
    .map((p) => p.replace(/\*/g, 'x').replace(/[^a-zA-Z0-9-]+/g, '-'))
    .join('-')
    .slice(0, 80)
  const defaultSlug = parseMatrixIds(DEFAULT_IDS)
    .map((p) => p.replace(/\*/g, 'x'))
    .join('-')
  if (slug === defaultSlug.slice(0, slug.length) && matrixIds.length === defaultSlug.length) {
    return path.join(SANDBOX, 'fo-drift-batch1-merged.json')
  }
  return path.join(SANDBOX, `fo-drift-batch1-${slug || 'custom'}-merged.json`)
}

const mergeOutPath = mergeOutArg
  ? path.isAbsolute(mergeOutArg)
    ? mergeOutArg
    : path.join(REPO_ROOT, mergeOutArg)
  : defaultMergeOutPath()

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

if (!offsets.length) {
  console.error('No offsets to run')
  process.exit(1)
}

/**
 * @param {number} offset
 * @param {number} port
 */
function runBatch(offset, port) {
  return new Promise((resolve, reject) => {
    const childArgs = [
      BATCH_SCRIPT,
      '--sandbox-home',
      '--landmark',
      'Home',
      '--dpr',
      '1',
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
      else reject(new Error(`batch offset=${offset} exit ${code}`))
    })
  })
}

/** @param {number[]} list */
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

function reportPath(offset) {
  return path.join(SANDBOX, `fo-drift-batch-home-o${offset}-l${LIMIT}.json`)
}

function mergeReports(activeOffsets) {
  /** @type {number | null} */
  let baselineAbs = null
  /** @type {object[]} */
  const sliceRows = []
  for (const offset of activeOffsets) {
    const p = reportPath(offset)
    if (!fs.existsSync(p)) {
      console.warn(`Missing ${p}`)
      continue
    }
    const data = JSON.parse(fs.readFileSync(p, 'utf8'))
    const ranked = data.ranked ?? data.rows ?? []
    const baseline = ranked.find(
      (r) => r.recipeId === 'product-baseline' || r.id === 'product-baseline',
    )
    const batchBaselineAbs =
      baseline?.absCanvasVsLive ??
      (Number.isFinite(baseline?.canvasVsLive)
        ? Math.abs(baseline.canvasVsLive)
        : null) ??
      data.baselineAbsCanvasVsLive ??
      null
    if (Number.isFinite(batchBaselineAbs)) baselineAbs = batchBaselineAbs
    for (const r of ranked) {
      const id = r.recipeId ?? r.id
      if (!id || id === 'product-baseline') continue
      const abs = r.absCanvasVsLive ?? Math.abs(r.canvasVsLive ?? r.previewCanvasVsLive ?? NaN)
      if (!Number.isFinite(abs)) continue
      sliceRows.push({ offset, id, rankedRow: r })
    }
  }
  /** @type {object[]} */
  const withBaseline = sliceRows.map(({ offset, id, rankedRow: r }) => {
    const abs = r.absCanvasVsLive ?? Math.abs(r.canvasVsLive ?? r.previewCanvasVsLive ?? NaN)
    return {
      offset,
      id,
      canvasVsLive: r.canvasVsLive ?? r.previewCanvasVsLive,
      absCanvasVsLive: abs,
      beatsBaseline: Number.isFinite(baselineAbs) && abs < baselineAbs,
    }
  })
  withBaseline.sort((a, b) => a.absCanvasVsLive - b.absCanvasVsLive)
  const merged = {
    landmark: 'Home',
    limit: LIMIT,
    offsets: activeOffsets,
    matrixIds,
    blackboxGate: 'Home paint.canvas.vs-border.top default ≈ -0.91px; do not promote fo-y-strut-range-meta (-1.91)',
    top10: withBaseline.slice(0, 10),
    best: withBaseline[0] ?? null,
  }
  fs.mkdirSync(path.dirname(mergeOutPath), { recursive: true })
  fs.writeFileSync(mergeOutPath, `${JSON.stringify(merged, null, 2)}\n`)
  console.log(`\nMerged → ${mergeOutPath}`)
  if (merged.best) {
    console.log(
      `Global best (batches with baseline): ${merged.best.id} |canvasVsLive|=${merged.best.absCanvasVsLive} (offset ${merged.best.offset})`,
    )
  }
  const last = activeOffsets[activeOffsets.length - 1] ?? 0
  let next = last + LIMIT
  while (
    resolveFoFixMatrixRecipes({
      ids: matrixIds,
      excludeTextBypass: true,
      includeInactive,
      limit: LIMIT,
      offset: next,
    }).length === 0 &&
    next < last + LIMIT * 20
  ) {
    next += LIMIT
  }
  if (
    resolveFoFixMatrixRecipes({
      ids: matrixIds,
      excludeTextBypass: true,
      includeInactive,
      limit: LIMIT,
      offset: next,
    }).length > 0
  ) {
    const idsFlag = matrixIds.join(',')
    console.log(
      `\nNext: node __localtests__/fo-drift-batch1-parallel.mjs --offsets ${next},${next + LIMIT},${next + LIMIT * 2} --parallel 3 --include-inactive --ids '${idsFlag}'`,
    )
  } else {
    console.log('\nAll recipe slices complete for this id filter.')
  }
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
    `Drift batch1: offsets=[${active.join(',')}] parallel=${parallel} limit=${LIMIT} ids=${matrixIds.join(',')}`,
  )
  if (!active.length) {
    console.error('No recipe slices to run')
    process.exit(1)
  }
  await runPool(active)
  mergeReports(active)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

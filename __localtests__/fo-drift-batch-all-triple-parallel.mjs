#!/usr/bin/env node
/**
 * Run ALL drift-batch triple matrices in parallel and merge global ranking.
 * Discovers recipes-drift-batch*-triple.js shards + recipes-drift-batch1.js.
 * Triple score: |svgΔ| + |canvasΔ| + |svg−canvas|.
 *
 *   node __localtests__/fo-drift-batch-all-triple-parallel.mjs --parallel 4 --landmark Home
 *   npm run debug:fo-drift-all-triple
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { fmtInkPx } from './fo-ink-metric-format.mjs'
import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SHARDS_DIR = path.join(__dirname, 'fo-recipes-shards')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const landmark = String(argAfter('--landmark') ?? 'Home').trim()
const dprArg = argAfter('--dpr')
const dpr = dprArg != null && Number.isFinite(Number(dprArg)) ? Number(dprArg) : 1
const parallelEach = Math.max(1, Number(argAfter('--parallel') ?? 4))
const topN = Math.max(1, Number(argAfter('--top') ?? 25))
const dryRun = args.includes('--dry-run')

/**
 * @returns {{ batchKey: string, shardFile: string, matrixScript: string, reportFile: string, idPattern: string }[]}
 */
function discoverDriftBatches() {
  if (!fs.existsSync(SHARDS_DIR)) return []
  const files = fs.readdirSync(SHARDS_DIR).filter((f) => f.endsWith('.js'))
  /** @type {ReturnType<typeof discoverDriftBatches>} */
  const out = []

  if (files.includes('recipes-drift-batch1.js')) {
    out.push({
      batchKey: 'batch1',
      shardFile: 'recipes-drift-batch1.js',
      matrixScript: 'fo-drift-batch1-triple-matrix.mjs',
      reportFile: 'fo-drift-batch1-triple-matrix.json',
      idPattern: 'drift-batch1-*',
    })
  }

  for (const f of files) {
    const m = f.match(/^recipes-drift-batch(.+)-triple\.js$/)
    if (!m) continue
    const suffix = m[1]
    const matrixScript = `fo-drift-batch${suffix}-triple-matrix.mjs`
    out.push({
      batchKey: `batch${suffix}`,
      shardFile: f,
      matrixScript,
      reportFile: `fo-drift-batch${suffix}-triple-matrix.json`,
      idPattern: `drift-batch${suffix}-*`,
    })
  }

  out.sort((a, b) => a.batchKey.localeCompare(b.batchKey, undefined, { numeric: true }))
  return out
}

/**
 * @param {string} relScript
 * @param {string} batchKey
 * @param {number} portHint
 */
function runMatrixScript(relScript, batchKey, portHint) {
  const script = path.join(__dirname, relScript)
  if (!fs.existsSync(script)) {
    return Promise.reject(new Error(`Missing matrix script for ${batchKey}: ${relScript}`))
  }
  return new Promise((resolve, reject) => {
    /** @type {string[]} */
    const childArgs = [
      script,
      '--parallel',
      String(parallelEach),
      '--landmark',
      landmark,
      '--dpr',
      String(dpr),
    ]
    console.log(`\n=== Starting ${batchKey} (${path.basename(script)}) port hint ${portHint} ===`)
    const env = { ...process.env, SNAPDOM_LOCAL_PORT: String(portHint) }
    const child = spawn(process.execPath, childArgs, {
      cwd: REPO_ROOT,
      env,
      stdio: 'inherit',
    })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve(undefined)
      else reject(new Error(`${batchKey} (${path.basename(script)}) exit ${code}`))
    })
  })
}

/** @param {object} row */
function normalizeRankRow(row, batchKey) {
  const absSvg =
    row.absSvgVsLive ??
    (Number.isFinite(row.svgVsLive) ? Math.abs(row.svgVsLive) : Infinity)
  const absCanvas =
    row.absCanvasVsLive ??
    (Number.isFinite(row.canvasVsLive) ? Math.abs(row.canvasVsLive) : Infinity)
  const svgVsCanvas =
    row.svgVsCanvas ??
    row.previewSvgVsCanvas ??
    (Number.isFinite(row.svgVsLive) && Number.isFinite(row.canvasVsLive)
      ? row.canvasVsLive - row.svgVsLive
      : null)
  const absSvgCanvas =
    row.absSvgVsCanvas ??
    (Number.isFinite(svgVsCanvas) ? Math.abs(svgVsCanvas) : Infinity)
  const tripleScore =
    row.tripleScore ??
    row.sumAbsSvgCanvasTriple ??
    (Number.isFinite(absSvg) && Number.isFinite(absCanvas) && Number.isFinite(absSvgCanvas)
      ? absSvg + absCanvas + absSvgCanvas
      : Infinity)
  return {
    ...row,
    batch: batchKey,
    absSvgVsLive: absSvg,
    absCanvasVsLive: absCanvas,
    absSvgVsCanvas: absSvgCanvas,
    svgVsCanvas,
    tripleScore,
  }
}

/**
 * @param {object[]} ranked
 */
function printTopRanked(ranked) {
  console.log(`\nTop ${topN} across ALL drift batches (tripleScore = |svgΔ|+|canvasΔ|+|svg−canvas|):\n`)
  console.log(
    'recipe'.padEnd(44) +
      'batch'.padStart(10) +
      'triple'.padStart(8) +
      'svgΔ'.padStart(9) +
      'canΔ'.padStart(9) +
      's−c'.padStart(9),
  )
  console.log('-'.repeat(89))
  for (const r of ranked.slice(0, topN)) {
    console.log(
      String(r.recipeId ?? r.id).padEnd(44) +
        String(r.batch ?? '').padStart(10) +
        fmtInkPx(r.tripleScore).padStart(8) +
        fmtInkPx(r.svgVsLive).padStart(9) +
        fmtInkPx(r.canvasVsLive).padStart(9) +
        fmtInkPx(r.svgVsCanvas).padStart(9),
    )
  }
  const baseline = ranked.find((r) => (r.recipeId ?? r.id) === 'product-baseline')
  if (baseline) {
    console.log('-'.repeat(89))
    console.log(
      `${'product-baseline (reference)'.padEnd(44)}` +
        String(baseline.batch ?? '').padStart(10) +
        fmtInkPx(baseline.tripleScore).padStart(8) +
        fmtInkPx(baseline.svgVsLive).padStart(9) +
        fmtInkPx(baseline.canvasVsLive).padStart(9) +
        fmtInkPx(baseline.svgVsCanvas).padStart(9),
    )
  }
}

async function main() {
  const batches = discoverDriftBatches()
  if (!batches.length) {
    console.error('No drift batch shards found under fo-recipes-shards/')
    process.exit(1)
  }

  const matrixRecipes = resolveFoFixMatrixRecipes({
    ids: ['product-baseline', 'drift-batch*'],
    excludeTextBypass: true,
    includeInactive: false,
    limit: 99999,
  })

  console.log(
    `Drift ALL triple parallel: ${batches.length} batches, ${matrixRecipes.length} recipes (resolveFoFixMatrixRecipes) landmark=${landmark} dpr=${dpr} parallelEach=${parallelEach}`,
  )
  for (const b of batches) {
    console.log(`  - ${b.batchKey}: ${b.shardFile} → ${b.matrixScript}`)
  }

  if (dryRun) {
    console.log('\n--dry-run: skipping matrix probes')
    return
  }

  const BASE_PORT = 8800
  await Promise.all(
    batches.map((b, i) => runMatrixScript(b.matrixScript, b.batchKey, BASE_PORT + i * 20)),
  )

  /** @type {object[]} */
  const combinedRanked = []
  /** @type {object[]} */
  const combinedErrors = []
  /** @type {Record<string, string>} */
  const batchReports = {}

  for (const b of batches) {
    const reportPath = path.join(SANDBOX, b.reportFile)
    batchReports[b.batchKey] = reportPath
    if (!fs.existsSync(reportPath)) {
      console.warn(`Missing report ${reportPath} for ${b.batchKey}`)
      continue
    }
    const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
    for (const row of data.ranked ?? []) {
      combinedRanked.push(normalizeRankRow(row, b.batchKey))
    }
    for (const row of data.errors ?? []) {
      combinedErrors.push({ ...row, batch: b.batchKey })
    }
  }

  combinedRanked.sort((a, b) => {
    if (a.tripleScore !== b.tripleScore) return a.tripleScore - b.tripleScore
    if (a.absSvgVsCanvas !== b.absSvgVsCanvas) return a.absSvgVsCanvas - b.absSvgVsCanvas
    if (a.absCanvasVsLive !== b.absCanvasVsLive) return a.absCanvasVsLive - b.absCanvasVsLive
    return a.absSvgVsLive - b.absSvgVsLive
  })

  printTopRanked(combinedRanked)

  const mergedPath = path.join(SANDBOX, 'fo-drift-all-triple-merged.json')
  const report = {
    landmark,
    dpr,
    parallelEach,
    rankMetric: '|svgΔ|+|canvasΔ|+|svg−canvas|',
    recipeCount: matrixRecipes.length,
    recipeIds: matrixRecipes.map((r) => r.id),
    batchCount: batches.length,
    batches: batches.map((b) => ({
      batchKey: b.batchKey,
      shardFile: b.shardFile,
      matrixScript: b.matrixScript,
      reportFile: b.reportFile,
    })),
    batchReports,
    bestCombinedRecipeId: combinedRanked[0]?.recipeId ?? combinedRanked[0]?.id ?? null,
    bestCombinedTripleScore: combinedRanked[0]?.tripleScore ?? null,
    bestCombinedBatch: combinedRanked[0]?.batch ?? null,
    top25: combinedRanked.slice(0, topN),
    baseline: combinedRanked.find((r) => (r.recipeId ?? r.id) === 'product-baseline') ?? null,
    ranked: combinedRanked,
    errors: combinedErrors,
  }
  fs.mkdirSync(SANDBOX, { recursive: true })
  fs.writeFileSync(mergedPath, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`\nWrote merged ranking ${mergedPath}`)
  if (combinedRanked[0]) {
    console.log(
      `Best overall: ${combinedRanked[0].recipeId ?? combinedRanked[0].id} (${combinedRanked[0].batch}) triple=${fmtInkPx(combinedRanked[0].tripleScore)}`,
    )
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

#!/usr/bin/env node
/**
 * Drift batch 3333 triple matrix — headed Chrome, optional parallel workers.
 * Rank by tripleScore = |svgΔ| + |canvasΔ| + |svg−canvas|.
 *
 *   node __localtests__/fo-drift-batch3333-triple-matrix.mjs
 *   node __localtests__/fo-drift-batch3333-triple-matrix.mjs --parallel 4 --landmark Home
 *   npm run debug:fo-drift-batch3333-triple
 */
import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { computeLandmarkInkMetrics } from './fo-landmark-layout-metrics.mjs'
import { fmtInkPx } from './fo-ink-metric-format.mjs'
import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const ARTIFACTS = path.join(__dirname, 'artifacts')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const DEFAULT_LANDMARK = 'Home'
const DEFAULT_IDS = ['product-baseline', 'drift-batch3333-*']
const BASE_PORT = 8850

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const landmark = String(argAfter('--landmark') ?? DEFAULT_LANDMARK).trim()
const dpr = Number.isFinite(Number(argAfter('--dpr'))) ? Number(argAfter('--dpr')) : 1
const parallel = Math.max(1, Number(argAfter('--parallel') ?? 1))
const workerMode = args.includes('--worker')
const workerChunk = workerMode ? Number(argAfter('--worker-chunk') ?? 0) : null
const workerPort = workerMode ? Number(argAfter('--worker-port') ?? BASE_PORT) : null
const matrixIds = argAfter('--ids')
  ? argAfter('--ids')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
  : DEFAULT_IDS
const mergeOutArg = argAfter('--merge-out')

/** @param {number | null | undefined} v */
function absPx(v) {
  return Number.isFinite(v) ? Math.abs(v) : Infinity
}

/** @param {object} row */
function blackboxAlignedCanvasDelta(row) {
  for (const v of [
    row.blackboxAlignedCanvasVsLivePx,
    row.deltaTopCapModel,
    row.bitmapCanvasDelta,
    row.liveVsCanvasTopPx,
  ]) {
    if (Number.isFinite(v)) return v
  }
  return null
}

/**
 * @param {object} row
 * @param {ReturnType<typeof computeLandmarkInkMetrics>} m
 */
function scoreRow(row, m) {
  const svgDelta = m.deltaSvgVsLive
  const canvasDelta = blackboxAlignedCanvasDelta(row) ?? m.deltaCanvasVsLive
  const svgVsCanvas = Number.isFinite(m.deltaSvgVsCanvas)
    ? m.deltaSvgVsCanvas
    : Number.isFinite(row.svgVsCanvasTopPx)
      ? row.svgVsCanvasTopPx
      : null
  const absSvg = absPx(svgDelta)
  const absCanvas = absPx(canvasDelta)
  const absSvgCanvas = absPx(svgVsCanvas)
  const tripleScore = absSvg + absCanvas + absSvgCanvas
  return {
    absSvg,
    absCanvas,
    absSvgCanvas,
    tripleScore,
    svgDelta,
    canvasDelta,
    svgVsCanvas,
  }
}

/**
 * @param {string[]} recipeIds
 * @param {number} port
 */
async function runRecipeChunk(recipeIds, port) {
  const prevPort = process.env.SNAPDOM_LOCAL_PORT
  if (Number.isFinite(port)) process.env.SNAPDOM_LOCAL_PORT = String(port)
  const { server, port: actualPort } = await startLocalServer()
  if (prevPort === undefined) delete process.env.SNAPDOM_LOCAL_PORT
  else process.env.SNAPDOM_LOCAL_PORT = prevPort
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  const qs = new URLSearchParams({ landmark })
  const url = `http://127.0.0.1:${actualPort}/__localtests__/fo-fix-lab.html?${qs}`
  console.log(`Chunk (${recipeIds.length} recipes) landmark=${landmark} dpr=${dpr}`)
  console.log(url)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => typeof window.snapdom === 'function', null, { timeout: 60_000 })

  const rows = await page.evaluate(
    async ({ recipeIds: ids, landmark: lm, dpr: probeDpr }) => {
      const runner = await import('./fo-fix-lab-runner.js')
      const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
      const { applyLandmarkInkMetricsToRow } = await import('./fo-landmark-layout-metrics.mjs')
      const root = document.getElementById('capture-target')
      /** @type {object[]} */
      const out = []
      for (const id of ids) {
        const recipe = getFoFixRecipe(id)
        if (!recipe) {
          out.push({ recipeId: id, error: `recipe not found: ${id}` })
          continue
        }
        try {
          const row = await runner.runFoFixProbe(recipe, { landmark: lm, root, dpr: probeDpr })
          const bitmapCanvasDelta =
            row.blackboxAlignedCanvasVsLivePx ??
            row.deltaTopCapModel ??
            row.liveVsCanvasTopPx ??
            row.deltaTopInBorder
          const bitmapSvgDelta = row.liveVsSvgTopPx ?? row.deltaSvgInBorder
          const canvasSlot = document.getElementById('view-canvas')
          const svgSlot = document.getElementById('svg-slot')
          canvasSlot.replaceChildren()
          svgSlot.replaceChildren()
          if (row.canvas) {
            row.canvas.classList.add('preview-canvas')
            canvasSlot.appendChild(row.canvas)
          }
          if (row.svgText) {
            const img = new Image()
            img.className = 'preview-svg'
            img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(row.svgText)}`
            svgSlot.appendChild(img)
            if (!img.complete) {
              await new Promise((res, rej) => {
                img.onload = () => res()
                img.onerror = () => rej(new Error('svg preview load failed'))
              })
            }
          }
          const el = runner.findLandmarkElement(root, lm)
          const displayEls = {
            svgImg: svgSlot.querySelector('img'),
            canvas: row.canvas,
          }
          if (el && row.canvas) {
            if (runner.syncProbeRowBlockAnchorCheck) {
              runner.syncProbeRowBlockAnchorCheck(row, root, el, displayEls)
            } else {
              runner.syncProbeRowInkFromDisplayedPreviews(row, root, el, displayEls)
            }
          }
          applyLandmarkInkMetricsToRow(row)
          row.bitmapCanvasDelta = bitmapCanvasDelta
          row.bitmapSvgDelta = bitmapSvgDelta
          out.push(row)
        } catch (e) {
          out.push({ recipeId: id, error: String(e?.message || e) })
        }
      }
      return out
    },
    { recipeIds, landmark, dpr },
  )

  await browser.close()
  server.close()
  return rows
}

/**
 * @param {object[]} rows
 */
function scoreRows(rows) {
  /** @type {object[]} */
  const scored = []
  for (const row of rows) {
    if (row.error) {
      scored.push({ recipeId: row.recipeId, error: row.error })
      continue
    }
    const m = computeLandmarkInkMetrics(row)
    const s = scoreRow(row, m)
    scored.push({
      id: row.recipeId,
      recipeId: row.recipeId,
      svgVsLive: s.svgDelta,
      canvasVsLive: s.canvasDelta,
      absSvgVsLive: s.absSvg,
      absCanvasVsLive: s.absCanvas,
      absSvgVsCanvas: s.absSvgCanvas,
      tripleScore: s.tripleScore,
      previewSvgVsLive: m.deltaSvgVsLive,
      previewCanvasVsLive: m.deltaCanvasVsLive,
      previewSvgVsCanvas: m.deltaSvgVsCanvas,
      svgVsCanvas: s.svgVsCanvas ?? row.svgVsCanvasTopPx,
      svgHigherPx: m.svgHigherPx,
      canvasHigherPx: m.canvasHigherPx,
    })
  }
  return scored
}

/**
 * @param {object[]} scored
 */
function printRanked(scored) {
  const ok = scored.filter((r) => !r.error)
  ok.sort((a, b) => {
    if (a.tripleScore !== b.tripleScore) return a.tripleScore - b.tripleScore
    if (a.absSvgVsCanvas !== b.absSvgVsCanvas) return a.absSvgVsCanvas - b.absSvgVsCanvas
    if (a.absCanvasVsLive !== b.absCanvasVsLive) return a.absCanvasVsLive - b.absCanvasVsLive
    return a.absSvgVsLive - b.absSvgVsLive
  })

  console.log('\nRanked (tripleScore = |svgΔ|+|canvasΔ|+|svg−canvas|, lower is better):\n')
  console.log(
    'recipe'.padEnd(44) +
      'triple'.padStart(8) +
      'svgΔ'.padStart(9) +
      'canΔ'.padStart(9) +
      's−c'.padStart(9),
  )
  console.log('-'.repeat(79))
  for (const r of ok) {
    console.log(
      r.recipeId.padEnd(44) +
        fmtInkPx(r.tripleScore).padStart(8) +
        fmtInkPx(r.svgVsLive).padStart(9) +
        fmtInkPx(r.canvasVsLive).padStart(9) +
        fmtInkPx(r.svgVsCanvas).padStart(9),
    )
  }
  for (const r of scored.filter((x) => x.error)) {
    console.log(`${r.recipeId}: ERROR ${r.error}`)
  }
  return ok
}

/**
 * @param {string[]} ids
 * @param {number} n
 */
function splitIds(ids, n) {
  /** @type {string[][]} */
  const out = Array.from({ length: n }, () => [])
  ids.forEach((id, i) => {
    out[i % n].push(id)
  })
  return out.filter((c) => c.length > 0)
}

/**
 * @param {number} chunkIndex
 * @param {number} port
 * @param {string[]} ids
 */
function spawnWorker(chunkIndex, port, ids) {
  return new Promise((resolve, reject) => {
    const outPath = path.join(SANDBOX, `fo-drift-batch3333-chunk-${chunkIndex}.json`)
    const childArgs = [
      fileURLToPath(import.meta.url),
      '--worker',
      '--worker-chunk',
      String(chunkIndex),
      '--worker-port',
      String(port),
      '--landmark',
      landmark,
      '--dpr',
      String(dpr),
      '--ids',
      ids.join(','),
      '--merge-out',
      outPath,
    ]
    const env = { ...process.env, SNAPDOM_LOCAL_PORT: String(port) }
    const child = spawn(process.execPath, childArgs, {
      cwd: REPO_ROOT,
      env,
      stdio: 'inherit',
    })
    child.on('error', reject)
    child.on('close', (code) => {
      if (code === 0) resolve(outPath)
      else reject(new Error(`worker chunk=${chunkIndex} exit ${code}`))
    })
  })
}

async function workerMain() {
  const ids = matrixIds.includes('product-baseline')
    ? matrixIds
    : ['product-baseline', ...matrixIds.filter((id) => id !== 'product-baseline')]
  const recipeIds = resolveFoFixMatrixRecipes({
    ids,
    excludeTextBypass: true,
    includeInactive: false,
    limit: 9999,
    offset: 0,
  }).map((r) => r.id)

  if (!recipeIds.length) {
    console.error('Worker: no recipes matched')
    process.exit(1)
  }

  const rows = await runRecipeChunk(recipeIds, workerPort ?? BASE_PORT)
  const scored = scoreRows(rows)
  const ranked = printRanked(scored)

  const outPath = mergeOutArg
    ? path.isAbsolute(mergeOutArg)
      ? mergeOutArg
      : path.join(REPO_ROOT, mergeOutArg)
    : path.join(SANDBOX, `fo-drift-batch3333-chunk-${workerChunk ?? 0}.json`)

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(
    outPath,
    `${JSON.stringify(
      {
        landmark,
        dpr,
        workerChunk,
        recipeIds,
        rankMetric: '|svgΔ|+|canvasΔ|+|svg−canvas|',
        ranked,
        errors: scored.filter((r) => r.error),
      },
      null,
      2,
    )}\n`,
  )
  console.log(`\nWrote ${outPath}`)
}

async function mainMain() {
  const ids = matrixIds.includes('product-baseline')
    ? matrixIds
    : ['product-baseline', ...matrixIds.filter((id) => id !== 'product-baseline')]
  const recipes = resolveFoFixMatrixRecipes({
    ids,
    excludeTextBypass: true,
    includeInactive: false,
    limit: 9999,
    offset: 0,
  })
  const recipeIds = recipes.map((r) => r.id)
  if (!recipeIds.length) {
    console.error('No drift-batch3333 recipes found — add recipes-drift-batch3333-triple.js shard')
    process.exit(1)
  }

  console.log(
    `Drift batch 3333 triple: ${recipeIds.length} recipes landmark=${landmark} parallel=${parallel}`,
  )

  /** @type {object[]} */
  let allScored = []

  if (parallel <= 1) {
    const rows = await runRecipeChunk(recipeIds, BASE_PORT)
    allScored = scoreRows(rows)
  } else {
    const chunks = splitIds(recipeIds, parallel)
    /** @type {Promise<string>[]} */
    const workers = []
    for (let i = 0; i < chunks.length; i++) {
      const port = BASE_PORT + i
      workers.push(spawnWorker(i, port, chunks[i]))
    }
    const chunkPaths = await Promise.all(workers)
    for (const p of chunkPaths) {
      if (!fs.existsSync(p)) {
        console.warn(`Missing chunk artifact ${p}`)
        continue
      }
      const data = JSON.parse(fs.readFileSync(p, 'utf8'))
      allScored.push(...(data.ranked ?? []), ...(data.errors ?? []))
    }
  }

  const ranked = printRanked(allScored)
  const baseline = ranked.find((r) => r.recipeId === 'product-baseline')
  const best = ranked.reduce(
    (a, b) => (b.tripleScore < a.tripleScore ? b : a),
    ranked[0] ?? null,
  )

  const reportPath = path.join(SANDBOX, 'fo-drift-batch3333-triple-matrix.json')
  fs.mkdirSync(SANDBOX, { recursive: true })
  fs.mkdirSync(ARTIFACTS, { recursive: true })
  const report = {
    landmark,
    dpr,
    parallel,
    matrixIds,
    recipeIds,
    rankMetric: '|svgΔ|+|canvasΔ|+|svg−canvas|',
    baselineTripleScore: baseline?.tripleScore ?? null,
    bestRecipeId: best?.recipeId ?? null,
    bestTripleScore: best?.tripleScore ?? null,
    ranked,
    errors: allScored.filter((r) => r.error),
  }
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
  fs.writeFileSync(
    path.join(ARTIFACTS, 'fo-drift-batch3333-triple-matrix.json'),
    `${JSON.stringify(report, null, 2)}\n`,
  )
  console.log(`\nWrote ${reportPath}`)
  if (best) {
    console.log(
      `Best tripleScore: ${best.recipeId} ${fmtInkPx(best.tripleScore)} (baseline ${fmtInkPx(baseline?.tripleScore ?? NaN)})`,
    )
  }
}

async function main() {
  if (workerMode) await workerMain()
  else await mainMain()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

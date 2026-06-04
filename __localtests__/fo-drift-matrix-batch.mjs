#!/usr/bin/env node
/**
 * Headed drift-wave matrix batches (Blocks landmark, preview ink via syncProbeRowBlockAnchorCheck).
 * Same recipe slice as fo-fix-lab --limit/--offset; one Chrome session, no full recipe dump.
 *
 *   node __localtests__/fo-drift-matrix-batch.mjs
 *   node __localtests__/fo-drift-matrix-batch.mjs --offset 30 --limit 30
 *   npm run debug:tc-fix-drift-matrix-batch -- --offset 30 --limit 30
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { computeLandmarkInkMetrics } from './fo-landmark-layout-metrics.mjs'
import { fmtInkPx } from './fo-ink-metric-format.mjs'
import { resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const ARTIFACTS = path.join(__dirname, 'artifacts')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const DEFAULT_LIMIT = 30
const DEFAULT_LANDMARK = 'Blocks'
const DEFAULT_IDS = ['product-baseline', 'tc-fix-drift-*']

const args = process.argv.slice(2)
const limitIdx = args.findIndex((a) => a === '--limit' || a === '--batch-size')
const offsetIdx = args.indexOf('--offset')
const landmarkIdx = args.findIndex((a) => a === '--landmark')
const idsIdx = args.indexOf('--ids')
const dprIdx = args.indexOf('--dpr')
const limit =
  limitIdx >= 0 && Number.isFinite(Number(args[limitIdx + 1]))
    ? Math.floor(Number(args[limitIdx + 1]))
    : DEFAULT_LIMIT
const offset =
  offsetIdx >= 0 && Number.isFinite(Number(args[offsetIdx + 1]))
    ? Math.floor(Number(args[offsetIdx + 1]))
    : 0
const landmark =
  landmarkIdx >= 0 && args[landmarkIdx + 1] ? String(args[landmarkIdx + 1]).trim() : DEFAULT_LANDMARK
const matrixIds = idsIdx >= 0 && args[idsIdx + 1]
  ? args[idsIdx + 1].split(',').map((s) => s.trim()).filter(Boolean)
  : DEFAULT_IDS
const dpr =
  dprIdx >= 0 && Number.isFinite(Number(args[dprIdx + 1])) ? Number(args[dprIdx + 1]) : 1
const includeInactive = args.includes('--include-inactive')
const sandboxHomeReport = args.includes('--sandbox-home')

/** @param {number | null | undefined} v */
function absPx(v) {
  return Number.isFinite(v) ? Math.abs(v) : Infinity
}

/** Blackbox gate uses cap-model canvas Δ (paint.canvas.vs-border.top), not preview block-anchor alone. */
function blackboxAlignedCanvasDelta(row) {
  return pickFinite(
    row.blackboxAlignedCanvasVsLivePx,
    row.deltaTopCapModel,
    row.bitmapCanvasDelta,
    row.liveVsCanvasTopPx,
  )
}

/** @param {number | null | undefined} v */
function pickFinite(...vals) {
  for (const v of vals) {
    if (Number.isFinite(v)) return v
  }
  return null
}

/** @param {ReturnType<typeof computeLandmarkInkMetrics>} m */
/** @param {object} row */
function rankKey(row, m) {
  const svgCanvas =
    Number.isFinite(row.svgVsCanvasTopPx) ? Math.abs(row.svgVsCanvasTopPx) : Infinity
  const canvasLive = absPx(blackboxAlignedCanvasDelta(row) ?? m.deltaCanvasVsLive)
  const svgHigher = Number.isFinite(m.svgHigherPx) ? m.svgHigherPx : 0
  const canvasHigher = Number.isFinite(m.canvasHigherPx) ? m.canvasHigherPx : 0
  return { svgCanvas, canvasLive, svgHigher, canvasHigher }
}

async function main() {
  const recipes = resolveFoFixMatrixRecipes({
    ids: matrixIds,
    excludeTextBypass: true,
    includeInactive,
    limit,
    offset,
  })
  if (!recipes.length) {
    console.error(`No drift recipes for offset=${offset} limit=${limit}`)
    process.exit(1)
  }

  const recipeIds = recipes.map((r) => r.id)
  fs.mkdirSync(ARTIFACTS, { recursive: true })

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  const qs = new URLSearchParams({ landmark })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${qs}`
  console.log(
    `Drift batch landmark=${landmark} offset=${offset} limit=${limit} (${recipeIds.length} recipes)`,
  )
  console.log(url)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => typeof window.snapdom === 'function', null, { timeout: 60_000 })

  const rows = await page.evaluate(
    async ({ recipeIds: ids, landmark, dpr }) => {
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
          const row = await runner.runFoFixProbe(recipe, { landmark, root, dpr })
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
          const el = runner.findLandmarkElement(root, landmark)
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

  /** @type {object[]} */
  const scored = []
  for (const row of rows) {
    if (row.error) {
      scored.push({ recipeId: row.recipeId, error: row.error })
      continue
    }
    const m = computeLandmarkInkMetrics(row)
    const capCanvasVsLive = blackboxAlignedCanvasDelta(row)
    const k = rankKey(row, m)
    scored.push({
      id: row.recipeId,
      recipeId: row.recipeId,
      canvasVsLive: capCanvasVsLive ?? m.deltaCanvasVsLive,
      capModelCanvasVsLive: capCanvasVsLive,
      svgVsLive: m.deltaSvgVsLive,
      svgVsCanvas: row.svgVsCanvasTopPx,
      svgVsCanvasPx: row.svgVsCanvasTopPx,
      absSvgCanvas: k.svgCanvas,
      absCanvasVsLive: absPx(capCanvasVsLive ?? m.deltaCanvasVsLive),
      previewCanvasVsLive: m.deltaCanvasVsLive,
      previewSvgVsLive: m.deltaSvgVsLive,
      svgHigherPx: m.svgHigherPx,
      canvasHigherPx: m.canvasHigherPx,
      bitmapCanvasVsLive: row.bitmapCanvasDelta,
      bitmapSvgVsLive: row.bitmapSvgDelta,
    })
  }

  const ok = scored.filter((r) => !r.error)
  ok.sort((a, b) => {
    if (a.absSvgCanvas !== b.absSvgCanvas) return a.absSvgCanvas - b.absSvgCanvas
    const aLive = absPx(a.previewCanvasVsLive)
    const bLive = absPx(b.previewCanvasVsLive)
    if (aLive !== bLive) return aLive - bLive
    const aHi = (a.svgHigherPx ?? 0) + (a.canvasHigherPx ?? 0)
    const bHi = (b.svgHigherPx ?? 0) + (b.canvasHigherPx ?? 0)
    return aHi - bHi
  })

  console.log('\nRanked (|svg−canvas| then |canvas−live|, lower stage-higher px preferred):\n')
  console.log(
    'recipe'.padEnd(44) +
      '|s−c|'.padStart(8) +
      'canΔ'.padStart(9) +
      'svgΔ'.padStart(9) +
      'svg↑px'.padStart(8) +
      'can↑px'.padStart(8),
  )
  console.log('-'.repeat(86))
  for (const r of ok) {
    console.log(
      r.recipeId.padEnd(44) +
        fmtInkPx(r.absSvgCanvas).padStart(8) +
        fmtInkPx(r.previewCanvasVsLive).padStart(9) +
        fmtInkPx(r.previewSvgVsLive).padStart(9) +
        fmtInkPx(r.svgHigherPx).padStart(8) +
        fmtInkPx(r.canvasHigherPx).padStart(8),
    )
  }
  for (const r of scored.filter((x) => x.error)) {
    console.log(`${r.recipeId}: ERROR ${r.error}`)
  }

  const baseline = ok.find((r) => r.recipeId === 'product-baseline')
  const baselineAbs = baseline?.absCanvasVsLive ?? Infinity
  const best = ok.reduce(
    (a, b) => (b.absCanvasVsLive < a.absCanvasVsLive ? b : a),
    ok[0] ?? null,
  )
  const beatsBaseline =
    best && baseline && best.recipeId !== 'product-baseline' && best.absCanvasVsLive < baselineAbs

  const reportDir = sandboxHomeReport ? SANDBOX : ARTIFACTS
  const reportBase = sandboxHomeReport
    ? `fo-drift-batch-${landmark.toLowerCase()}-o${offset}-l${limit}`
    : `fo-drift-matrix-batch-o${offset}-l${limit}`
  const reportPath = path.join(reportDir, `${reportBase}.json`)
  fs.mkdirSync(reportDir, { recursive: true })
  const report = {
    landmark,
    dpr,
    offset,
    limit,
    includeInactive,
    matrixIds,
    recipeIds,
    baselineAbsCanvasVsLive: baselineAbs,
    bestRecipeId: best?.recipeId ?? null,
    bestAbsCanvasVsLive: best?.absCanvasVsLive ?? null,
    beatsBaseline: !!beatsBaseline,
    rows: ok.map(({ id, canvasVsLive, svgVsLive, svgVsCanvas }) => ({
      id,
      canvasVsLive,
      svgVsLive,
      svgVsCanvas,
    })),
    ranked: ok,
    errors: scored.filter((r) => r.error),
  }
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`\nWrote ${reportPath}`)
  if (best) {
    console.log(
      `Best |canvas vs live|: ${best.recipeId} ${fmtInkPx(best.absCanvasVsLive)} (baseline ${fmtInkPx(baselineAbs)})`,
    )
  }
  const nextOffset = offset + limit
  const nextSlice = resolveFoFixMatrixRecipes({
    ids: matrixIds,
    excludeTextBypass: true,
    includeInactive,
    limit,
    offset: nextOffset,
  })
  if (nextSlice.length) {
    const idsFlag = matrixIds.join(',')
    console.log(
      `\nNext batch: SNAPDOM_LOCAL_PORT=8810 node __localtests__/fo-drift-matrix-batch.mjs --sandbox-home --landmark ${landmark} --dpr ${dpr} --ids '${idsFlag}' --limit ${limit} --offset ${nextOffset}`,
    )
  } else {
    console.log('\nNo more recipes in slice.')
  }

  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

#!/usr/bin/env node
/**
 * Headed block-fixture matrix (fo-fix-lab.html + fo-fix-lab-runner).
 *   node __localtests__/fo-block-fix-matrix-probe.mjs
 *   node __localtests__/fo-block-fix-matrix-probe.mjs --visual
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { computeLandmarkInkMetrics } from './fo-landmark-layout-metrics.mjs'
import { fmtInkPx } from './fo-ink-metric-format.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ARTIFACTS = path.join(__dirname, 'artifacts')

const RECIPES = [
  'product-baseline',
  'tc-fix-w7-rfork-fo-y-half-leading-meta',
  'tc-fix-w13-rfork-leaf-translate-y-half-leading',
  'tc-research-w1-leading-trim-both-edges',
]

const args = process.argv.slice(2)
const visual = args.includes('--visual')

function absCanvasDelta(m) {
  const d = m.deltaCanvasVsLive
  return Number.isFinite(d) ? Math.abs(d) : Infinity
}

async function main() {
  fs.mkdirSync(ARTIFACTS, { recursive: true })
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 520 })

  const qs = new URLSearchParams({ landmark: 'Blocks' })
  const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${qs}`
  console.log(`Fixture: ${url}`)
  await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
  await page.waitForFunction(() => typeof window.snapdom === 'function', null, { timeout: 60_000 })

  const rows = await page.evaluate(async (recipeIds) => {
    const runner = await import('./fo-fix-lab-runner.js')
    const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
    const { applyLandmarkInkMetricsToRow } = await import('./fo-landmark-layout-metrics.mjs')
    const root = document.getElementById('capture-target')
    const landmark = 'Blocks'
    /** @type {object[]} */
    const out = []
    for (const id of recipeIds) {
      const recipe = getFoFixRecipe(id)
      if (!recipe) {
        out.push({ recipeId: id, error: `recipe not found: ${id}` })
        continue
      }
      try {
        const row = await runner.runFoFixProbe(recipe, { landmark, root, dpr: 1 })
        const bitmapCanvasDelta = row.liveVsCanvasTopPx ?? row.deltaTopInBorder
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
  }, RECIPES)

  /** @type {{ recipeId: string, m: ReturnType<typeof computeLandmarkInkMetrics> }[]} */
  const ranked = []
  console.log('\nBlock fixture — layout-top / preview ink (Δ = stage − live, negative = higher):\n')
  console.log(
    'recipe'.padEnd(40) +
      'bmp svg'.padStart(9) +
      'bmp can'.padStart(9) +
      'prv svg'.padStart(9) +
      'prv can'.padStart(9) +
      'can↑'.padStart(6),
  )
  console.log('-'.repeat(82))
  for (const row of rows) {
    if (row.error) {
      console.log(`${String(row.recipeId).padEnd(40)} ERROR ${row.error}`)
      continue
    }
    const m = computeLandmarkInkMetrics(row)
    ranked.push({ recipeId: row.recipeId, m, row })
    const bmpSvg = row.bitmapSvgDelta
    const bmpCan = row.bitmapCanvasDelta
    console.log(
      row.recipeId.padEnd(40) +
        fmtInkPx(bmpSvg).padStart(9) +
        fmtInkPx(bmpCan).padStart(9) +
        fmtInkPx(m.deltaSvgVsLive).padStart(9) +
        fmtInkPx(m.deltaCanvasVsLive).padStart(9) +
        (m.canvasHigher ? 'yes' : 'no').padStart(6),
    )
  }
  ranked.sort((a, b) => {
    const aBmp = Number.isFinite(a.row.bitmapCanvasDelta)
      ? Math.abs(a.row.bitmapCanvasDelta)
      : absCanvasDelta(a.m)
    const bBmp = Number.isFinite(b.row.bitmapCanvasDelta)
      ? Math.abs(b.row.bitmapCanvasDelta)
      : absCanvasDelta(b.m)
    return aBmp - bBmp
  })
  const baseline = ranked.find((r) => r.recipeId === 'product-baseline')
  const baseBmp = baseline?.row?.bitmapCanvasDelta
  console.log('\nRanked by |bitmap canvas Δ| (closest to live first):')
  for (const r of ranked) {
    const bmp = r.row?.bitmapCanvasDelta
    const absBmp = Number.isFinite(bmp) ? Math.abs(bmp) : absCanvasDelta(r.m)
    const beat =
      baseline && r.recipeId !== 'product-baseline' && Number.isFinite(baseBmp) && Number.isFinite(bmp)
        ? absBmp < Math.abs(baseBmp) - 0.05
          ? 'IMPROVES'
          : absBmp > Math.abs(baseBmp) + 0.05
            ? 'REGRESSES'
            : 'TIE'
        : r.recipeId === 'product-baseline'
          ? 'BASELINE'
          : '—'
    console.log(
      `  ${r.recipeId}: bmp canvas=${fmtInkPx(bmp)} preview canvas=${fmtInkPx(r.m.deltaCanvasVsLive)} [${beat}]`,
    )
  }

  if (visual && ranked.length) {
    const top = ranked.slice(0, 3).map((r) => r.recipeId)
    for (const recipeId of top) {
      const shot = path.join(ARTIFACTS, `fo-block-visual-${recipeId}.png`)
      await page.evaluate(
        async (id) => {
          const runner = await import('./fo-fix-lab-runner.js')
          const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
          const root = document.getElementById('capture-target')
          const row = await runner.runFoFixProbe(getFoFixRecipe(id), {
            landmark: 'Blocks',
            root,
            dpr: 1,
          })
          const canvasSlot = document.getElementById('view-canvas')
          const svgSlot = document.getElementById('svg-slot')
          canvasSlot.replaceChildren()
          svgSlot.replaceChildren()
          if (row.canvas) canvasSlot.appendChild(row.canvas)
          document.getElementById('compare-stage').classList.remove('view-live', 'view-svg')
          document.getElementById('compare-stage').classList.add('view-canvas')
        },
        recipeId,
      )
      await page.waitForTimeout(400)
      const clip = await page.evaluate(() => {
        const el = document.getElementById('compare-stage')
        const r = el?.getBoundingClientRect()
        if (!r) return null
        return { x: r.x, y: r.y, width: r.width, height: r.height }
      })
      if (clip) await page.screenshot({ path: shot, clip })
      console.log(`  screenshot: ${shot}`)
    }
  }

  const reportPath = path.join(ARTIFACTS, 'fo-block-fix-matrix.json')
  fs.writeFileSync(
    reportPath,
    `${JSON.stringify({ recipes: RECIPES, rows: ranked }, null, 2)}\n`,
  )
  console.log(`\nWrote ${reportPath}`)

  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

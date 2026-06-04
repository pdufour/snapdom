#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from '../__localtests__/local-http-server.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.join(__dirname, '..')
const LOG_PATH = path.join(REPO_ROOT, '.sandbox-edit', 'text-leaf-b.log')
const SUMMARY_PATH = path.join(REPO_ROOT, '.sandbox-edit', 'text-leaf-summary.json')
const PORT = 8801

const MATRIX_IDS = [
  'product-baseline',
  'tc-text-w1-display-inline-leaf',
  'tc-text-w1-rfork-leading-trim-leaf',
  'tc-text-w1-rfork-lh-normal-leaf',
]
const SNAPDOM_FLAG_ID = 'experimentalFoTextLeafNormalize'

/** @param {unknown} v */
function round3(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(Number(v) * 1000) / 1000
}

/** @param {{ recipeId: string, liveVsCanvasTopPx?: number | null, liveVsSvgTopPx?: number | null, deltaTopInBorder?: number | null }} row */
function canvasDelta(row) {
  return row.liveVsCanvasTopPx ?? row.deltaTopInBorder ?? null
}

/** @param {{ liveVsSvgTopPx?: number | null }} row */
function svgDelta(row) {
  return row.liveVsSvgTopPx ?? null
}

function formatMatrixTable(rows) {
  const lines = []
  lines.push('FO fix matrix (text-leaf batch B, landmark Home):')
  lines.push(
    'recipe'.padEnd(36) + 'SVG Δ'.padStart(8) + 'canvas Δ'.padStart(10),
  )
  lines.push('-'.repeat(54))
  for (const row of rows) {
    const c = canvasDelta(row)
    const s = svgDelta(row)
    lines.push(
      String(row.recipeId).padEnd(36) +
        (s == null ? '—' : s.toFixed(3)).padStart(8) +
        (c == null ? '—' : c.toFixed(3)).padStart(10),
    )
  }
  return lines.join('\n')
}

/** @param {typeof rows} rows */
function pickBest(rows, metric) {
  let best = null
  for (const row of rows) {
    const v = metric(row)
    if (v == null || !Number.isFinite(v)) continue
    const abs = Math.abs(v)
    if (!best || abs < best.abs) {
      best = { recipeId: row.recipeId, delta: round3(v), abs: round3(abs) }
    }
  }
  return best
}

async function main() {
  process.env.SNAPDOM_LOCAL_PORT = String(PORT)
  const logChunks = []
  const log = (line = '') => {
    console.log(line)
    logChunks.push(line)
  }

  log(`Port ${PORT} — text-leaf matrix B (+ ${SNAPDOM_FLAG_ID} snapdom)`)
  log(`Recipes: ${MATRIX_IDS.join(', ')}`)
  log('')

  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 560, height: 720 })

  try {
    const qs = [
      'matrix=1',
      'auto=1',
      'view=canvas',
      'landmark=Home',
      `ids=${MATRIX_IDS.map(encodeURIComponent).join(',')}`,
    ]
    const url = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?${qs.join('&')}`
    log(`Lab URL: ${url}`)
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForFunction(
      () => window.__foFixLab?.done === true || window.__foFixMatrix?.length,
      null,
      { timeout: 300_000 },
    )
    const err = await page.evaluate(() => window.__foFixLab?.error || window.__foFixError)
    if (err) throw new Error(String(err))

    /** @type {any[]} */
    let rows = await page.evaluate(() => window.__foFixMatrix ?? [])
    log(formatMatrixTable(rows))
    log('')

    log(`Running snapdom product path: ${SNAPDOM_FLAG_ID}…`)
    const flagRow = await page.evaluate(async (flagId) => {
      const { getFoFixRecipe } = await import('./fo-fix-recipes.js')
      const { runFoFixProbe } = await import('./fo-fix-lab-runner.js')
      const base = getFoFixRecipe('product-baseline')
      const recipe = {
        ...base,
        id: flagId,
        label: `snapdom ${flagId}`,
        harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      }
      const result = await runFoFixProbe(recipe, { scale: 1, landmark: 'Home' })
      return {
        recipeId: recipe.id,
        path: 'snapdom',
        liveVsCanvasTopPx: result.liveVsCanvasTopPx ?? null,
        liveVsSvgTopPx: result.liveVsSvgTopPx ?? null,
        deltaTopInBorder: result.deltaTopInBorder ?? null,
        pass: result.pass ?? null,
      }
    }, SNAPDOM_FLAG_ID)

    rows = [...rows, flagRow]
    log(formatMatrixTable(rows))
    log('')

    const bestCanvas = pickBest(rows, canvasDelta)
    const bestSvg = pickBest(rows, svgDelta)
    log(`Best |canvasΔ|: ${bestCanvas?.recipeId ?? '—'} (${bestCanvas?.delta ?? '—'} px, |Δ|=${bestCanvas?.abs ?? '—'})`)
    log(`Best |svgΔ|:    ${bestSvg?.recipeId ?? '—'} (${bestSvg?.delta ?? '—'} px, |Δ|=${bestSvg?.abs ?? '—'})`)

    const summary = {
      port: PORT,
      landmark: 'Home',
      fixture: 'mini flex+text-leaf (fo-fix-lab)',
      matrixIds: MATRIX_IDS,
      snapdomFlag: SNAPDOM_FLAG_ID,
      rows: rows.map((row) => ({
        recipeId: row.recipeId,
        path: row.path ?? 'lab',
        svgDeltaPx: round3(svgDelta(row)),
        canvasDeltaPx: round3(canvasDelta(row)),
        absSvgDeltaPx: round3(Math.abs(svgDelta(row) ?? NaN)),
        absCanvasDeltaPx: round3(Math.abs(canvasDelta(row) ?? NaN)),
        pass: row.pass ?? null,
      })),
      bestCanvasDelta: bestCanvas,
      bestSvgDelta: bestSvg,
      generatedAt: new Date().toISOString(),
    }

    fs.writeFileSync(SUMMARY_PATH, `${JSON.stringify(summary, null, 2)}\n`)
    fs.writeFileSync(LOG_PATH, `${logChunks.join('\n')}\n`)
    log('')
    log(`Wrote ${path.relative(REPO_ROOT, LOG_PATH)}`)
    log(`Wrote ${path.relative(REPO_ROOT, SUMMARY_PATH)}`)
  } finally {
    await browser.close().catch(() => {})
    await new Promise((r) => server.close(r))
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

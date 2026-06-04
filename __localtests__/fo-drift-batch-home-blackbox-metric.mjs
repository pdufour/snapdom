#!/usr/bin/env node
/**
 * Score FO fix recipes on checkout structure-report (bounce-check metric).
 * paint.canvas.vs-border.top for Home + Products @ dpr=2 — not lab |canvasVsLive| @ dpr=1.
 *
 *   node __localtests__/fo-drift-batch-home-blackbox-metric.mjs --limit 30 --offset 0
 *   node __localtests__/fo-drift-batch-home-blackbox-metric.mjs --ids 'product-baseline,tc-fix-drift-039*' --limit 30
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { getFoFixRecipe, resolveFoFixMatrixRecipes } from './fo-fix-recipes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const SANDBOX = path.join(REPO_ROOT, '.sandbox-edit')
const DEFAULT_LIMIT = 30
const BASELINE_HOME = -0.91
const BASELINE_PRODUCTS = -0.91
const SECTION_TITLES = { Home: 'Nav: Home', Products: 'Nav: Products' }

const DEFAULT_IDS = [
  'product-baseline',
  'tc-fix-drift-039*',
  'tc-fix-w7-capture-parent-lh*',
  'tc-fix-w16-rfork-leaf-subpx*',
  'tc-blh-w1*',
  'fix321-decode-interval',
].join(',')

const args = process.argv.slice(2)

function argAfter(flag) {
  const i = args.indexOf(flag)
  return i >= 0 && args[i + 1] ? args[i + 1] : null
}

const limit = Math.floor(Number(argAfter('--limit') ?? argAfter('--batch-size') ?? DEFAULT_LIMIT))
const offset = Math.floor(Number(argAfter('--offset') ?? 0))
const includeInactive = args.includes('--include-inactive')
const matrixIds = (argAfter('--ids') ?? DEFAULT_IDS)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)
const sandboxReport = args.includes('--sandbox-home')
const dpr = Number(argAfter('--dpr') ?? 2)

/** @param {import('./fo-fix-recipes.js').FoFixRecipe | null | undefined} r */
export function checkoutQueryForRecipe(r) {
  if (!r) return ''
  const q = new URLSearchParams()
  const snap = r.harnessSnapdom ?? r.harnessProductToCanvas
  if (snap && typeof snap === 'object') {
    for (const [k, v] of Object.entries(snap)) {
      if (v) q.set(k, '1')
    }
  }
  const patch = r.labToCanvasOpts?.rasterOnlySvgPatch ?? r.rasterPatch
  if (patch && patch !== 'product-toCanvas' && patch !== 'none') {
    q.set('experimentalRasterSvgPatch', patch)
  }
  if (r.labToCanvasOpts?.disableGbcrFracNudge) {
    q.set('experimentalRasterDisableGbcrNudge', '1')
  }
  return q.toString()
}

/** @param {import('./fo-fix-recipes.js').FoFixRecipe | null | undefined} r */
export function recipeCheckoutUnsupported(r) {
  if (!r) return true
  const patch = r.labToCanvasOpts?.rasterOnlySvgPatch ?? r.rasterPatch
  const query = checkoutQueryForRecipe(r)
  const captureOnly =
    r.inject === 'capture' &&
    !(patch && patch !== 'product-toCanvas' && patch !== 'none') &&
    !query.includes('experimentalRasterSvgPatch')
  const snapKeys = r.harnessSnapdom ? Object.keys(r.harnessSnapdom) : []
  return (
    captureOnly &&
    snapKeys.some((k) => k !== 'experimentalFoTextLineHeightNormal') &&
    !query
  )
}

function roundPx(v) {
  return v == null || !Number.isFinite(v) ? null : Math.round(v * 1000) / 1000
}

/** @param {number | null} home @param {number | null} products */
function rankScore(home, products) {
  if (home == null || products == null) return Infinity
  const maxAbs = Math.max(Math.abs(home), Math.abs(products))
  const navSpread = Math.abs(home - products)
  const towardZeroPenalty =
    (Math.abs(home) >= Math.abs(BASELINE_HOME) ? 100 : 0) +
    (Math.abs(products) >= Math.abs(BASELINE_PRODUCTS) ? 100 : 0)
  return towardZeroPenalty * 1000 + maxAbs * 10 + navSpread
}

/** @param {number | null} home @param {number | null} products */
export function beatsBlackboxBaseline(home, products) {
  if (home == null || products == null) return false
  const towardZero = (v) => Math.abs(v) < Math.abs(BASELINE_HOME)
  const noHeavyRegress = (v) => v > -1.5
  return towardZero(home) && towardZero(products) && noHeavyRegress(home) && noHeavyRegress(products)
}

async function probeRecipe(page, port, recipeId) {
  const recipe = getFoFixRecipe(recipeId)
  if (!recipe) return { recipeId, error: `recipe not found: ${recipeId}` }
  if (recipeCheckoutUnsupported(recipe)) {
    return {
      recipeId,
      skipped: true,
      skipReason: 'capture inject / flags not wired on checkout-example.html',
      checkoutQuery: checkoutQueryForRecipe(recipe) || null,
    }
  }

  const qs = checkoutQueryForRecipe(recipe)
  const url = `http://127.0.0.1:${port}/__localtests__/checkout-example.html${qs ? `?${qs}` : ''}`

  try {
    await page.goto(url, { waitUntil: 'load', timeout: 120_000 })
    await page.evaluate(() => document.fonts?.ready)
    await page.locator('#btn-capture').click()
    await page.waitForSelector('#cap-content canvas', { timeout: 120_000 })
    await page.waitForSelector('#structure-host .structure-report', { timeout: 90_000 })
  } catch (err) {
    return { recipeId, error: String(err?.message || err), checkoutQuery: qs || null }
  }

  const metrics = await page.evaluate(({ sectionTitles }) => {
    function parseNum(cell) {
      if (!cell || cell === '—') return null
      const n = parseFloat(String(cell).replace(/px$/i, '').replace(/^\+/, ''))
      return Number.isFinite(n) ? n : null
    }
    function readCanvasTopDelta(sectionTitle) {
      const section = [...document.querySelectorAll('.structure-section')].find(
        (s) => s.querySelector('h3')?.textContent?.trim() === sectionTitle,
      )
      if (!section) return null
      for (const tr of section.querySelectorAll('tbody tr')) {
        const cells = [...tr.cells].map((td) => td.textContent.trim())
        if (cells[0] === 'paint.canvas.vs-border.top') {
          return parseNum(cells[3])
        }
      }
      return null
    }
    const home = readCanvasTopDelta(sectionTitles.Home)
    const products = readCanvasTopDelta(sectionTitles.Products)
    const navDelta =
      home != null && products != null ? Math.round((home - products) * 1000) / 1000 : null
    return { home, products, navDelta }
  }, { sectionTitles: SECTION_TITLES })

  return {
    recipeId,
    checkoutQuery: qs || null,
    homeCanvasVsBorderTop: roundPx(metrics.home),
    productsCanvasVsBorderTop: roundPx(metrics.products),
    navDeltaTopHomeProducts: metrics.navDelta,
    rankScore: rankScore(metrics.home, metrics.products),
    beatsBaseline: beatsBlackboxBaseline(metrics.home, metrics.products),
  }
}

async function main() {
  if (process.env.HEADLESS === '1') {
    console.warn('HEADLESS=1 — FO canvas ink unreliable; use headed Chrome.')
  }

  const recipes = resolveFoFixMatrixRecipes({
    ids: matrixIds,
    excludeTextBypass: true,
    includeInactive,
    limit,
    offset,
  })
  if (!recipes.length) {
    console.error(`No recipes for offset=${offset} limit=${limit}`)
    process.exit(1)
  }

  const recipeIds = recipes.map((r) => r.id)
  const { server, port } = await startLocalServer()
  const browser = await launchHeadedChrome()
  const context = await browser.newContext({
    viewport: { width: 1300, height: 900 },
    deviceScaleFactor: dpr,
  })
  const page = await context.newPage()

  console.log(
    `Blackbox-metric batch dpr=${dpr} offset=${offset} limit=${limit} (${recipeIds.length} recipes)`,
  )

  /** @type {object[]} */
  const rows = []
  for (const id of recipeIds) {
    const row = await probeRecipe(page, port, id)
    rows.push(row)
    if (row.skipped) {
      console.log(`${id}: SKIP ${row.skipReason}`)
    } else if (row.error) {
      console.log(`${id}: ERROR ${row.error}`)
    } else {
      console.log(
        `${id}: Home=${row.homeCanvasVsBorderTop}px Products=${row.productsCanvasVsBorderTop}px navΔ=${row.navDeltaTopHomeProducts}px`,
      )
    }
  }

  const scored = rows.filter((r) => !r.error && !r.skipped && r.homeCanvasVsBorderTop != null)
  scored.sort((a, b) => a.rankScore - b.rankScore)

  const baseline = rows.find((r) => r.recipeId === 'product-baseline')
  const reportDir = sandboxReport ? SANDBOX : path.join(__dirname, 'artifacts')
  const reportPath = path.join(
    reportDir,
    `fo-drift-batch-home-blackbox-o${offset}-l${limit}.json`,
  )

  const report = {
    metric: 'paint.canvas.vs-border.top',
    fixture: 'checkout-example.html',
    dpr,
    offset,
    limit,
    matrixIds,
    recipeIds,
    baseline: {
      home: baseline?.homeCanvasVsBorderTop ?? BASELINE_HOME,
      products: baseline?.productsCanvasVsBorderTop ?? BASELINE_PRODUCTS,
    },
    blackboxGate: {
      baselineHome: BASELINE_HOME,
      baselineProducts: BASELINE_PRODUCTS,
      note: 'Rank toward 0 from −0.91; do not promote fo-y-strut-range-meta / fo-y-half-leading-meta as product default.',
    },
    ranked: scored,
    skipped: rows.filter((r) => r.skipped),
    errors: rows.filter((r) => r.error),
    best: scored[0] ?? null,
    beatsBaseline: scored.filter((r) => r.beatsBaseline),
  }

  fs.mkdirSync(reportDir, { recursive: true })
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)
  console.log(`\nWrote ${reportPath}`)
  if (report.best) {
    console.log(
      `Best checkout metric: ${report.best.recipeId} Home=${report.best.homeCanvasVsBorderTop} Products=${report.best.productsCanvasVsBorderTop}`,
    )
  }

  await context.close()
  await browser.close()
  server.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

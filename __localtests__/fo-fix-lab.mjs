#!/usr/bin/env node
/**
 * FO fix recipe lab — headed Chrome matrix probe on mini flex+text-leaf fixture.
 * Main check: layout tops. LLM compare: optional (`debug:fo-llm-visual-compare`).
 * All recipe trials are harness-only (SVG string patch + lab raster in fo-fix-lab-runner);
 * product `src/` is not modified for experiments.
 *
 * Usage (headed Chrome by default; same as bounce-check / launchHeadedChrome):
 *   npm run debug:fo-fix-lab              # compile + local server
 *   npm run debug:fo-fix-lab -- --verify  # headed layout-top gate (product-baseline drift)
 *   npm run debug:fo-fix-lab -- --recipe margin-collapse-body
 *   node __localtests__/fo-fix-lab.mjs --matrix
 *
 * Full matrix runs active FO raster recipes (~10k; index-half + denylist, text-bypass excluded) by default; use --include-inactive for full ~33k corpus, --include-text-bypass for diagnostic bypass rows.
 * Batch runners should pass --active-only so SNAPDOM_FO_LAB_INCLUDE_INACTIVE in the shell cannot widen the matrix.
 * Smoke: node __localtests__/fo-fix-lab.mjs --matrix --limit 50
 *
 * Local server: http://127.0.0.1:8765 (override: SNAPDOM_LOCAL_PORT).
 * Manual lab URL: http://127.0.0.1:8765/__localtests__/fo-fix-lab-ink-v2.html?recipe=product-baseline&landmark=Home&auto=1
 * Optional keep browser open: --keep-open or ?keepOpen=1 (headed only; do not default).
 *   node __localtests__/fo-fix-lab.mjs --matrix --keep-open
 *   node __localtests__/fo-fix-lab.mjs --matrix --limit 25 --offset 20
 *   Drift batches (30 recipes, Blocks, FO raster only):
 *     node __localtests__/fo-drift-matrix-batch.mjs --limit 30 --offset 0
 *     node __localtests__/fo-fix-lab.mjs --matrix --open-browser --no-text-bypass --landmark Blocks \
 *       --ids 'product-baseline,tc-fix-drift-*' --include-inactive --limit 30 --offset 0
 *   node __localtests__/fo-fix-lab.mjs --matrix --ids fix301,fix302
 *   node __localtests__/fo-fix-lab.mjs --matrix --category flex --limit 10
 *   node __localtests__/fo-fix-lab.mjs --matrix --category extreme --limit 10
 *   node __localtests__/fo-fix-lab.mjs --matrix   # FO raster only (text-bypass excluded by default)
 *   node __localtests__/fo-fix-lab.mjs --matrix --active-only         # force active scope (overrides env)
 *   node __localtests__/fo-fix-lab.mjs --matrix --include-inactive   # all recipes including archived bottom half
 *   node __localtests__/fo-fix-lab.mjs --calibrate --limit 15
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products --limit 10
 *   node __localtests__/fo-fix-lab.mjs --matrix --fixture checkout --ids product-baseline,fix344 --landmarks Home
 *   node __localtests__/fo-fix-lab.mjs --ids tc-lab-001 --matrix --no-text-bypass --open-browser
 *   node __localtests__/fo-fix-lab.mjs --matrix --text-only --open-browser
 *     # text-only: tc-blh-w1-* + tc-text-w1-* + product-baseline; fork lh audit columns
 *   node __localtests__/fo-fix-lab.mjs --matrix --purge-bottom 0.75   # keep top 25% (deterministic, no ranking)
 *
 * Lab toCanvas forks (modify __localtests__/fo-fix-toCanvas*.js, not src/):
 *   lab-toCanvas: tc-lab-001..005 (recipes-tocanvas-lab-fork.js), tc-lab-cmp-* (composite)
 *   lab-toCanvas-decode: tc-lab-alt-001..010 (fo-fix-toCanvas-decode-experimental.js)
 *   lab-toCanvas-frac: tc-lab-alt-011..020, tc-lab-w5-d9-001..065 (fo-fix-toCanvas-frac-draw.js)
 *   lab-toCanvas-natural: tc-lab-w5-nat-001..055 (fo-fix-toCanvas-natural-dims.js)
 *   lab-wait-{N}ms: tc-lab-w5-int-001..080 (recipes-tocanvas-lab-wave5-interval.js)
 *   lab-toCanvas-round-all|wait-decode|bitmap-first: tc-lab-fk-001..030 (recipes-tocanvas-lab-plus-forks.js)
 *   Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-alt-*'
 *   Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-fk-*'
 *   Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-cmp-*'
 *   Manual UI: ?labToCanvas=1 forces lab fork when recipe has no other rasterPatch
 *
 * Opt-in headless only for non-ink smoke (not for parity): HEADLESS=1 node …
 *
 * Do not run multiple debug runners in parallel — each launch opens headed Playwright
 * Chrome. Kill orphans: pgrep -fl 'fo-fix-lab|playwright_chromiumdev_profile'
 */
import { execSync, spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { launchHeadedChrome, startLocalServer } from './local-http-server.mjs'
import { computeLandmarkInkMetrics } from './fo-landmark-layout-metrics.mjs'
import { FO_FIX_LAB_DEFAULT_PROBE_LANDMARK } from './fo-fix-lab-fixture.mjs'

function fmtY(v) {
  return v == null || !Number.isFinite(v) ? '—' : v.toFixed(3)
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
import {
  FO_FIX_RECIPES,
  FO_FIX_ACTIVE_COUNT,
  FO_FIX_INACTIVE_COUNT,
  REJECTED_HYPOTHESES,
  bestPromotableMatrixRow,
  matrixExcludesTextBypass,
  resolveFoFixMatrixRecipes,
} from './fo-fix-recipes.js'

const args = process.argv.slice(2)
const recipeArg = args.includes('--recipe') ? args[args.indexOf('--recipe') + 1] : null
const calibrate = args.includes('--calibrate')
const fixtureArg = args.includes('--fixture') ? args[args.indexOf('--fixture') + 1] : null
const fixtureCheckout = fixtureArg === 'checkout'
const matrix = args.includes('--matrix')
const serveOnly = args.includes('--serve')
const verify = args.includes('--verify')
const openBrowser =
  args.includes('--open-browser') || process.env.SNAPDOM_FO_LAB_OPEN_BROWSER === '1'
const checkoutHomeMatrix = fixtureCheckout && matrix && !calibrate
const effectiveCalibrate = calibrate
const keepOpenRequested = args.includes('--keep-open') || args.includes('--keepOpen')
const limitArg = args.includes('--limit') ? Number(args[args.indexOf('--limit') + 1]) : null
const offsetArg = args.includes('--offset') ? Number(args[args.indexOf('--offset') + 1]) : null
const idsArg = args.includes('--ids') ? args[args.indexOf('--ids') + 1] : null
const categoryArg = args.includes('--category') ? args[args.indexOf('--category') + 1] : null
const shardArg = args.includes('--shard') ? args[args.indexOf('--shard') + 1] : null
const shardIndexArg = args.includes('--shard-index')
  ? Number(args[args.indexOf('--shard-index') + 1])
  : null
const shardCountArg = args.includes('--shard-count')
  ? Number(args[args.indexOf('--shard-count') + 1])
  : null
/** Batch runners pass `--active-only` to override SNAPDOM_FO_LAB_INCLUDE_INACTIVE in the environment. */
const activeOnlyForced = args.includes('--active-only')
const includeInactive = activeOnlyForced
  ? false
  : args.includes('--include-inactive') || process.env.SNAPDOM_FO_LAB_INCLUDE_INACTIVE === '1'
const includeTextBypass =
  args.includes('--include-text-bypass') || process.env.SNAPDOM_FO_LAB_INCLUDE_TEXT_BYPASS === '1'
const excludeTextBypassExplicit =
  args.includes('--no-text-bypass') ||
  args.includes('--exclude-text-bypass') ||
  process.env.SNAPDOM_FO_LAB_EXCLUDE_TEXT_BYPASS === '1'
const textOnly =
  args.includes('--text-only') || process.env.SNAPDOM_FO_LAB_TEXT_ONLY === '1'
const debugLh =
  textOnly ||
  args.includes('--debug-lh') ||
  process.env.SNAPDOM_FO_LAB_DEBUG_LH === '1'
const purgeBottomFractionRaw = args.includes('--purge-bottom')
  ? args[args.indexOf('--purge-bottom') + 1]
  : args.includes('--purgeBottom')
    ? args[args.indexOf('--purgeBottom') + 1]
    : process.env.SNAPDOM_FO_LAB_PURGE_BOTTOM
const purgeBottomFraction =
  purgeBottomFractionRaw != null && purgeBottomFractionRaw !== ''
    ? Number(purgeBottomFractionRaw)
    : null
const landmarksArg = args.includes('--landmarks') ? args[args.indexOf('--landmarks') + 1] : null
const landmarkArg = args.includes('--landmark') ? args[args.indexOf('--landmark') + 1] : null
const dprArg = args.includes('--dpr') ? Number(args[args.indexOf('--dpr') + 1]) : null
const navPreviewTest = args.includes('--nav-preview-test')
const NAV_PREVIEW_RECIPES = [
  'product-baseline',
  'radical-fillText-replace',
  'impl-try-004-filltext-transparent',
]
const TEXT_ONLY_DEFAULT_IDS = 'product-baseline,tc-blh-w1-*,tc-text-w1-*'
const effectiveIdsArg =
  textOnly && !idsArg ? TEXT_ONLY_DEFAULT_IDS : idsArg
const matrixIds = effectiveIdsArg
  ? effectiveIdsArg.split(',').map((s) => s.trim()).filter(Boolean)
  : null
const calibrateLandmarks = landmarksArg
  ? landmarksArg.split(',').map((s) => s.trim()).filter(Boolean)
  : [FO_FIX_LAB_DEFAULT_PROBE_LANDMARK]
const headless = process.env.HEADLESS === '1'
const keepOpen = keepOpenRequested && !headless
/** @type {{ shardIndex: number | null, shardCount: number | null } | null} */
let shardResolved = null

/**
 * Sharding is for batch runners splitting matrix/ids deterministically.
 * - `--shard i/n` is 1-indexed (i=1..n) for CLI ergonomics.
 * - `--shard-index` / `--shard-count` and env `SHARD_INDEX` / `SHARD_COUNT` are 0-based.
 */
function resolveShardOpts() {
  /** @type {number | null} */
  let shardIndex = null
  /** @type {number | null} */
  let shardCount = null

  if (typeof shardArg === 'string' && shardArg.trim()) {
    const m = /^\s*(\d+)\s*\/\s*(\d+)\s*$/.exec(shardArg)
    if (!m) {
      throw new Error(`Invalid --shard "${shardArg}" (expected i/n, e.g. --shard 1/4)`)
    }
    const i = Number(m[1])
    const n = Number(m[2])
    if (!Number.isFinite(i) || !Number.isFinite(n) || n < 1 || i < 1 || i > n) {
      throw new Error(`Invalid --shard "${shardArg}" (expected 1 <= i <= n, n >= 1)`)
    }
    shardIndex = i - 1
    shardCount = n
    return { shardIndex, shardCount }
  }

  if (Number.isFinite(shardIndexArg) || Number.isFinite(shardCountArg)) {
    shardIndex = Number.isFinite(shardIndexArg) ? Math.floor(shardIndexArg) : null
    shardCount = Number.isFinite(shardCountArg) ? Math.floor(shardCountArg) : null
  } else if (process.env.SHARD_INDEX || process.env.SHARD_COUNT) {
    shardIndex = process.env.SHARD_INDEX != null ? Math.floor(Number(process.env.SHARD_INDEX)) : null
    shardCount = process.env.SHARD_COUNT != null ? Math.floor(Number(process.env.SHARD_COUNT)) : null
  }

  if (shardIndex == null && shardCount == null) return { shardIndex: null, shardCount: null }
  if (!(shardCount != null && Number.isFinite(shardCount) && shardCount >= 1)) {
    throw new Error(
      `Invalid shardCount=${String(shardCount)} (expected integer >= 1; set --shard i/n or --shard-count n)`,
    )
  }
  if (!(shardIndex != null && Number.isFinite(shardIndex) && shardIndex >= 0 && shardIndex < shardCount)) {
    throw new Error(
      `Invalid shardIndex=${String(shardIndex)} for shardCount=${shardCount} (expected 0..${shardCount - 1})`,
    )
  }
  return { shardIndex, shardCount }
}

/** @param {import('playwright').Browser} browser */
function waitForBrowserCloseOrInterrupt(browser) {
  return new Promise((resolve) => {
    const done = () => {
      browser.off('disconnected', onDisconnect)
      process.off('SIGINT', onSigint)
      process.off('SIGTERM', onSigterm)
      resolve()
    }
    const onDisconnect = () => done()
    const onSigint = () => done()
    const onSigterm = () => done()
    if (!browser.isConnected()) return resolve()
    browser.on('disconnected', onDisconnect)
    process.once('SIGINT', onSigint)
    process.once('SIGTERM', onSigterm)
  })
}

function printRejected() {
  console.log('\nRejected hypotheses (documented in fo-fix-recipes.js only):')
  for (const h of REJECTED_HYPOTHESES) {
    console.log(`  • ${h.id}: ${h.reason}`)
  }
}


/** @returns {number} recipes the page matrix will run (same slice rules as fo-fix-lab-runner) */
function resolveMatrixRecipeCount() {
  return resolveFoFixMatrixRecipes({
    category: categoryArg ?? undefined,
    ids: matrixIds ?? undefined,
    limit: limitArg ?? undefined,
    offset: offsetArg ?? undefined,
    excludeTextBypass: excludeTextBypassExplicit || undefined,
    includeTextBypass: includeTextBypass || undefined,
    includeInactive: activeOnlyForced ? false : includeInactive || undefined,
    purgeBottomFraction: purgeBottomFraction ?? undefined,
    shardIndex: shardResolved?.shardIndex ?? undefined,
    shardCount: shardResolved?.shardCount ?? undefined,
  }).length
}

/** @returns {number} candidates before limit/offset (same filters + shard/purge). */
function resolveMatrixCandidateCount() {
  return resolveFoFixMatrixRecipes({
    category: categoryArg ?? undefined,
    ids: matrixIds ?? undefined,
    excludeTextBypass: excludeTextBypassExplicit || undefined,
    includeTextBypass: includeTextBypass || undefined,
    includeInactive: activeOnlyForced ? false : includeInactive || undefined,
    purgeBottomFraction: purgeBottomFraction ?? undefined,
    shardIndex: shardResolved?.shardIndex ?? undefined,
    shardCount: shardResolved?.shardCount ?? undefined,
  }).length
}

const RECIPE_BOOT_MIN = 10

function assertRecipesLoaded() {
  const n = FO_FIX_RECIPES.length
  if (n >= RECIPE_BOOT_MIN) return
  console.error(
    `[fo-fix-lab] FO_FIX_RECIPES boot failure: expected hundreds of recipes, got ${n}.`,
  )
  process.exit(1)
}

async function main() {
  if (verify) {
    const passthrough = args.filter((a) => a !== '--verify' && a !== '--serve')
    const layoutTopPath = path.join(__dirname, 'fo-h-nav-layout-top-probe.mjs')
    console.log(
      '[fo-fix-lab] --verify: layout-top gate (svg/canvas vs live on product-baseline). LLM compare is optional — npm run debug:fo-llm-visual-compare',
    )
    const rLayout = spawnSync(process.execPath, [layoutTopPath, ...passthrough], {
      stdio: 'inherit',
      cwd: path.join(__dirname, '..'),
      env: process.env,
    })
    process.exit(rLayout.status ?? 1)
  }
  assertRecipesLoaded()
  shardResolved = resolveShardOpts()
  const wantsRun =
    matrix || effectiveCalibrate || recipeArg || checkoutHomeMatrix || navPreviewTest
  if (!wantsRun && !serveOnly) {
    console.error(
      'fo-fix-lab: pass --serve (static server only), or a run mode: --matrix, --calibrate, --recipe <id>.',
    )
    console.error('  Playwright browser: add --open-browser (or SNAPDOM_FO_LAB_OPEN_BROWSER=1).')
    process.exit(1)
  }
  const { server, port } = await startLocalServer()

  const qsParts = effectiveCalibrate
      ? ['matrix=1', 'auto=1', 'calibrate=1', `landmarks=${calibrateLandmarks.map(encodeURIComponent).join(',')}`]
      : matrix
        ? ['matrix=1', 'auto=1', 'view=canvas']
        : recipeArg
          ? [`recipe=${encodeURIComponent(recipeArg)}`, 'auto=1', 'view=canvas']
          : navPreviewTest
            ? [
                `recipe=${encodeURIComponent(NAV_PREVIEW_RECIPES[0])}`,
                'auto=1',
                'view=canvas',
              ]
            : checkoutHomeMatrix
              ? ['matrix=1', 'auto=1', 'view=canvas']
              : []
  if (fixtureCheckout) qsParts.push('fixture=checkout')
  if (Number.isFinite(limitArg) && limitArg > 0) qsParts.push(`limit=${limitArg}`)
  if (Number.isFinite(offsetArg) && offsetArg > 0) qsParts.push(`offset=${offsetArg}`)
  if (matrixIds?.length) qsParts.push(`ids=${matrixIds.map(encodeURIComponent).join(',')}`)
  if (categoryArg) qsParts.push(`category=${encodeURIComponent(categoryArg)}`)
  if (includeInactive) qsParts.push('includeInactive=1')
  if (includeTextBypass) qsParts.push('includeTextBypass=1')
  if (Number.isFinite(purgeBottomFraction) && purgeBottomFraction > 0) {
    qsParts.push(`purgeBottom=${encodeURIComponent(String(purgeBottomFraction))}`)
  }
  if ((matrix || effectiveCalibrate) && shardResolved?.shardCount != null) {
    qsParts.push(`shardCount=${encodeURIComponent(String(shardResolved.shardCount))}`)
    qsParts.push(`shardIndex=${encodeURIComponent(String(shardResolved.shardIndex))}`)
  }
  if (
    matrix &&
    matrixExcludesTextBypass({
      category: categoryArg ?? undefined,
      ids: matrixIds ?? undefined,
      excludeTextBypass: excludeTextBypassExplicit,
      includeTextBypass,
    })
  ) {
    qsParts.push('excludeTextBypass=1')
  }
  if (keepOpen) qsParts.push('keepOpen=1')
  if (debugLh) qsParts.push('debugLh=1')
  if (textOnly) qsParts.push('textOnly=1')
  if (Number.isFinite(dprArg) && dprArg > 0) qsParts.push(`dpr=${encodeURIComponent(String(dprArg))}`)
  const pagePath =
    checkoutHomeMatrix || (effectiveCalibrate && fixtureCheckout)
      ? '/__localtests__/checkout-example.html'
      : '/__localtests__/fo-fix-lab.html'
  if (checkoutHomeMatrix) {
    qsParts.push('landmark=Home')
  } else if (pagePath.endsWith('fo-fix-lab.html') && wantsRun) {
    qsParts.push(
      `landmark=${encodeURIComponent(landmarkArg?.trim() || FO_FIX_LAB_DEFAULT_PROBE_LANDMARK)}`,
    )
  }
  const labUrl = qsParts.length
    ? `http://127.0.0.1:${port}${pagePath}?${qsParts.join('&')}`
    : `http://127.0.0.1:${port}${pagePath}`

  if (serveOnly || !openBrowser) {
    const cacheBust = Date.now()
    const serveUrl = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab-ink-v2.html?_cb=${cacheBust}&recipe=product-baseline&landmark=Home&auto=1&view=live`
    console.log(`FO fix lab server: ${serveUrl}`)
    console.log(
      'Close ALL old fo-fix-lab tabs. Page MUST show green banner "canvas-svg-viewport-v7". Home: Live ~14.5, SVG ~14, Canvas ~13 (canvas above svg — canvas Y < svg Y). Hard refresh if you see SVG=13 Canvas=14 or "Canvas lower than SVG".',
    )
    if (qsParts.length) console.log(`Run URL (manual or --open-browser): ${labUrl}`)
    if (!openBrowser && wantsRun) {
      console.log('Browser not opened (pass --open-browser to run Playwright matrix/recipe).')
    }
    if (serveOnly && process.env.FO_FIX_LAB_OPEN !== '0') {
      try {
        execSync(`open "${serveUrl}"`, { stdio: 'ignore' })
      } catch {
        /* optional — headless CI */
      }
    }
    if (serveOnly || !openBrowser) {
      console.log('Ctrl+C to stop server.')
      await new Promise((resolve) => {
        process.once('SIGINT', resolve)
        process.once('SIGTERM', resolve)
      })
      server.close()
      return
    }
  }

  const browser = await launchHeadedChrome()
  const page = await browser.newPage()

  try {
    const url = labUrl
    if (matrix || effectiveCalibrate) {
      if (shardResolved?.shardCount != null) {
        const baseCandidates = resolveFoFixMatrixRecipes({
          category: categoryArg ?? undefined,
          ids: matrixIds ?? undefined,
          excludeTextBypass: excludeTextBypassExplicit || undefined,
          includeTextBypass: includeTextBypass || undefined,
          includeInactive: activeOnlyForced ? false : includeInactive || undefined,
          purgeBottomFraction: purgeBottomFraction ?? undefined,
        }).length
        const shardSelected = resolveFoFixMatrixRecipes({
          category: categoryArg ?? undefined,
          ids: matrixIds ?? undefined,
          excludeTextBypass: excludeTextBypassExplicit || undefined,
          includeTextBypass: includeTextBypass || undefined,
          includeInactive: activeOnlyForced ? false : includeInactive || undefined,
          purgeBottomFraction: purgeBottomFraction ?? undefined,
          shardIndex: shardResolved.shardIndex,
          shardCount: shardResolved.shardCount,
        }).length
        const i1 = shardResolved.shardIndex + 1
        console.log(
          `Shard: ${i1}/${shardResolved.shardCount} (index=${shardResolved.shardIndex}) — ${shardSelected}/${baseCandidates} candidates`,
        )
      }
      const n = resolveMatrixRecipeCount()
      const baseN =
        Number.isFinite(limitArg) || Number.isFinite(offsetArg)
          ? resolveMatrixCandidateCount()
          : null
      const scope = categoryArg ? `category=${categoryArg}` : matrixIds?.length ? `ids (${matrixIds.length})` : 'all recipes'
      const bypassNote = matrixExcludesTextBypass({
        category: categoryArg ?? undefined,
        ids: matrixIds ?? undefined,
        excludeTextBypass: excludeTextBypassExplicit,
        includeTextBypass,
      })
        ? ', FO raster only (text-bypass excluded)'
        : ''
      const purgeNote =
        Number.isFinite(purgeBottomFraction) && purgeBottomFraction > 0 && !matrixIds?.length
          ? `, purged bottom ${(purgeBottomFraction * 100).toFixed(0)}%`
          : ''
      const sliceNote = baseN != null ? `, ${n}/${baseN} selected` : ''
      console.log(
        `Matrix: ${n} recipe${n === 1 ? '' : 's'} (${scope}${bypassNote}${purgeNote}${sliceNote})`,
      )
      if (!limitArg && !categoryArg && !matrixIds?.length && n > 80) {
        console.log('Tip: full matrix is slow — try --limit 50 for a smoke run.')
      }
      if (
        !includeInactive &&
        !limitArg &&
        !categoryArg &&
        !matrixIds?.length
      ) {
        console.log(
          `Inactive recipes skipped (${FO_FIX_INACTIVE_COUNT} archived at index >= ${FO_FIX_ACTIVE_COUNT}) — add --include-inactive for full history.`,
        )
      }
      if (
        !includeTextBypass &&
        matrixExcludesTextBypass({
          category: categoryArg ?? undefined,
          ids: matrixIds ?? undefined,
          excludeTextBypass: excludeTextBypassExplicit,
          includeTextBypass,
        })
      ) {
        console.log(
          'Text-bypass recipes (svg-text / fillText / path text) skipped — add --include-text-bypass for diagnostic runs.',
        )
      }
    }
    console.log(`Opening ${url} (${headless ? 'HEADLESS=1 — layout lab unreliable' : 'headed Chrome'})`)
    if (keepOpenRequested && headless) {
      console.error('Note: --keep-open ignored in headless mode (HEADLESS=1).')
    }
    page.on('console', (msg) => {
      const t = msg.type()
      if (t === 'error') console.error('[page]', msg.text())
      else if (t === 'warning') console.warn('[page]', msg.text())
    })
    page.on('pageerror', (err) => console.error('[pageerror]', err.message))

    await page.goto(url, { waitUntil: 'load' })

    if (!effectiveCalibrate) {
      const minOptions = matrix ? 10 : 2
      const dropdownCount = await page
        .waitForFunction(
          (min) => {
            const sel = document.getElementById('recipe-select')
            return sel && sel.options.length >= min
          },
          minOptions,
          { timeout: matrix ? 120_000 : 15_000 },
        )
        .then(() =>
          page.evaluate(() => document.getElementById('recipe-select')?.options.length ?? 0),
        )
        .catch(async () => {
          const bootErr = await page
            .evaluate(() => document.getElementById('boot-error')?.textContent?.trim() || '')
            .catch(() => '')
          const n = await page
            .evaluate(() => document.getElementById('recipe-select')?.options.length ?? 0)
            .catch(() => 0)
          throw new Error(
            `Recipe dropdown has ${n} options (expected ≥${RECIPE_BOOT_MIN}).` +
              (bootErr ? ` Boot error: ${bootErr.slice(0, 200)}` : ''),
          )
        })
      const dropdownScope = includeInactive
        ? `${FO_FIX_RECIPES.length} total`
        : `${FO_FIX_ACTIVE_COUNT} active (${FO_FIX_INACTIVE_COUNT} archived hidden)`
      console.log(`Recipe dropdown: ${dropdownCount} options (${dropdownScope} in fo-fix-recipes.js)`)
      if (
        !includeInactive &&
        !matrixIds?.length &&
        dropdownCount > FO_FIX_ACTIVE_COUNT
      ) {
        throw new Error(
          `Recipe dropdown has ${dropdownCount} options but expected ≤${FO_FIX_ACTIVE_COUNT} active — inactive recipes should be hidden unless includeInactive=1`,
        )
      }
    }

    const progressTimer = setInterval(async () => {
      const p = await page.evaluate(() => {
        const lab = window.__foFixLab
        if (lab?.progress) return { text: lab.progress }
        const legacy = window.__foFixMatrixProgress
        if (legacy?.recipeId) return { text: `${legacy.done}/${legacy.total}: ${legacy.recipeId}` }
        return null
      }).catch(() => null)
      if (p?.text) console.log(`  progress: ${p.text}`)
    }, 3000)

    try {
      const matrixWaitMs =
        matrix || effectiveCalibrate
          ? Math.max(300_000, resolveMatrixRecipeCount() * 20_000)
          : 300_000
      await page.waitForFunction(
        () => window.__foFixLab?.done === true,
        null,
        { timeout: matrixWaitMs },
      )
    } finally {
      clearInterval(progressTimer)
    }

    const pageError = await page.evaluate(() => window.__foFixLab?.error || window.__foFixError)
    if (pageError) {
      throw new Error(pageError)
    }

    function printLayoutTopGlossary() {
      console.log(
        'Layout top (#capture-target px): live = landmark getBoundingClientRect().top; svg/canvas = preview-mapped top. "higher?" = stage above live (lower Y).',
      )
    }

    function layoutCells(row) {
      const m = computeLandmarkInkMetrics(row)
      return {
        liveY: fmtY(m.liveTop),
        svgY: fmtY(m.svgTop),
        canvasY: fmtY(m.canvasTop),
        svgHi: m.svgHigher ? 'yes' : 'no',
        canvasHi: m.canvasHigher ? 'yes' : 'no',
      }
    }

    if (effectiveCalibrate) {
      const rows = await page.evaluate(() => window.__foFixCalibrateMatrix)
      printLayoutTopGlossary()
      console.log(`\nFO fix calibrate (landmarks: ${calibrateLandmarks.join(', ')}):`)
      console.log(
        'recipe'.padEnd(28) +
          'landmark'.padStart(10) +
          'Live Y'.padStart(9) +
          'SVG Y'.padStart(9) +
          'Canvas Y'.padStart(10) +
          'svg hi?'.padStart(8) +
          'can hi?'.padStart(8),
      )
      console.log('-'.repeat(82))
      for (const row of rows) {
        for (const lm of row.landmarks) {
          const c = layoutCells(lm)
          console.log(
            row.recipeId.padEnd(28) +
              lm.landmark.padStart(10) +
              c.liveY.padStart(9) +
              c.svgY.padStart(9) +
              c.canvasY.padStart(10) +
              c.svgHi.padStart(8) +
              c.canvasHi.padStart(8),
          )
        }
      }
    } else if (matrix) {
      const rows = await page.evaluate(() => window.__foFixMatrix)
      printLayoutTopGlossary()
      console.log(
        `\nFO fix matrix (landmark ${landmarkArg?.trim() || FO_FIX_LAB_DEFAULT_PROBE_LANDMARK}):`,
      )
      console.log(
        'recipe'.padEnd(28) +
          'Live Y'.padStart(9) +
          'SVG Y'.padStart(9) +
          'Canvas Y'.padStart(10) +
          'svg hi?'.padStart(8) +
          'can hi?'.padStart(8),
      )
      console.log('-'.repeat(72))
      for (const row of rows) {
        const c = layoutCells(row)
        console.log(
          row.recipeId.padEnd(28) +
            c.liveY.padStart(9) +
            c.svgY.padStart(9) +
            c.canvasY.padStart(10) +
            c.svgHi.padStart(8) +
            c.canvasHi.padStart(8),
        )
        if (row.error) console.log(`  ↳ ${row.error.slice(0, 120)}`)
      }
      const baselineRow = rows.find((r) => r.recipeId === 'product-baseline')
      const best = bestPromotableMatrixRow(rows) ?? rows[0]
      if (best) {
        const b = layoutCells(best)
        console.log(
          `\nFirst promotable row: ${best.recipeId} — canvas higher? ${b.canvasHi} (Canvas Y ${b.canvasY}, Live Y ${b.liveY})`,
        )
        if (baselineRow) {
          const base = layoutCells(baselineRow)
          console.log(
            `product-baseline — canvas higher? ${base.canvasHi} (Canvas Y ${base.canvasY}, Live Y ${base.liveY})`,
          )
        }
      }
    } else if (navPreviewTest) {
      for (let i = 0; i < NAV_PREVIEW_RECIPES.length; i++) {
        const recipeId = NAV_PREVIEW_RECIPES[i]
        if (i > 0) {
          const testUrl = `http://127.0.0.1:${port}/__localtests__/fo-fix-lab.html?recipe=${encodeURIComponent(recipeId)}&auto=1&view=canvas`
          console.log(`\nNav preview test: ${recipeId}`)
          await page.goto(testUrl, { waitUntil: 'load' })
          await page.waitForFunction(
            () => window.__foFixLab?.done === true,
            null,
            { timeout: 120_000 },
          )
        } else {
          console.log(`\nNav preview test: ${recipeId}`)
        }
        const err = await page.evaluate(() => window.__foFixLab?.error || window.__foFixError)
        if (err) throw new Error(`${recipeId}: ${err}`)
        const hasCanvas = await page.evaluate(
          () => !!document.querySelector('#view-canvas canvas.preview-canvas'),
        )
        if (!hasCanvas) {
          throw new Error(`${recipeId}: expected canvas preview mounted`)
        }
        console.log(`  canvas preview mounted`)
        const dims = await page.evaluate(() => {
          const stage = document.getElementById('compare-stage')
          const canvas = document.querySelector('#view-canvas canvas.preview-canvas')
          const sr = stage?.getBoundingClientRect()
          const cr = canvas?.getBoundingClientRect()
          return {
            stageW: sr?.width ?? 0,
            stageH: sr?.height ?? 0,
            canvasW: cr?.width ?? 0,
            canvasH: cr?.height ?? 0,
          }
        })
        const dimTol = 0.5
        const expectedStageH = 48
        if (
          Math.abs(dims.stageW - 500) > dimTol ||
          Math.abs(dims.stageH - expectedStageH) > dimTol ||
          Math.abs(dims.canvasW - 500) > dimTol ||
          Math.abs(dims.canvasH - 48) > dimTol
        ) {
          throw new Error(
            `${recipeId}: canvas preview must display 500×48 CSS px in ${expectedStageH}px stage ` +
              `(stage ${dims.stageW}×${dims.stageH}, canvas ${dims.canvasW}×${dims.canvasH})`,
          )
        }
        console.log(
          `  canvas preview: ${dims.canvasW}×${dims.canvasH} CSS px in ${dims.stageW}×${dims.stageH} stage`,
        )
      }
      console.log(`\nNav preview test passed (${NAV_PREVIEW_RECIPES.join(', ')}).`)
    } else {
      const row = await page.evaluate(() => window.__foFixLastResult)
      console.log('\nSingle recipe result:')
      console.log(JSON.stringify(row, null, 2))
    }

    console.log(`\nRecipes available (${FO_FIX_RECIPES.length}):`)
    for (const r of FO_FIX_RECIPES) {
      console.log(`  ${r.id} — ${r.label}`)
    }
    printRejected()

    if (keepOpen) {
      console.error('\nBrowser kept open (--keep-open). Close the window or press Ctrl+C to exit.')
      await waitForBrowserCloseOrInterrupt(browser)
    }
  } finally {
    if (!keepOpen) await browser.close().catch(() => {})
    server.close()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

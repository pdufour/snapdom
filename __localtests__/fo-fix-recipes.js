/**
 * FO fix lab recipes — single entry: fo-recipes-shards/*.js (auto-loaded).
 * Add a shard file under fo-recipes-shards/ and restart the lab; no merge step.
 *
 * toCanvas flag waves: recipes-tocanvas-flags-wave{,2,3,4}.js (tc-flags-w1..w4)
 *   w1 → __localtests__/tocanvas-lab-flags-registry.js
 *   w3 → recipes-tocanvas-flags-wave3.js (tc-flags-w3-*)
 * src flag mirrors: recipes-experimental-src-mirror.js (src-mirror-experimental*)
 * toCanvas-only wave: recipes-tocanvas-only-wave1.js (tc-only-w1-*)
 * toCanvas fix wave-5: recipes-tocanvas-fix-wave5.js (tc-fix-w5-*)
 * toCanvas fix wave-6: recipes-tocanvas-fix-wave6.js (tc-fix-w6-*)
 * toCanvas fix wave-7: recipes-tocanvas-fix-wave7.js (tc-fix-w7-*)
 * toCanvas regression wave: recipes-tocanvas-regression-wave.js (tc-reg-lock-*)
 * toCanvas regression wave-2: recipes-tocanvas-regression-wave2.js (baseline-plateau-2797, w7-beats-baseline, fork-red-changes-canvas)
 * toCanvas fix wave-10: recipes-tocanvas-fix-wave10.js (tc-fix-w10-*)
 * toCanvas fix wave-11: recipes-tocanvas-fix-wave11.js (tc-fix-w11-*)
 * toCanvas fix wave-12: recipes-tocanvas-fix-wave12.js (tc-fix-w12-*)
 * toCanvas fix wave-13: recipes-tocanvas-fix-wave13.js (tc-fix-w13-*)
 * toCanvas fix wave-14: recipes-tocanvas-fix-wave14.js (tc-fix-w14-*)
 * toCanvas fix wave-15: recipes-tocanvas-fix-wave15.js (tc-fix-w15-*)
 * toCanvas fix wave-16: recipes-tocanvas-fix-wave16.js (tc-fix-w16-*)
 * toCanvas fix wave-17: recipes-tocanvas-fix-wave17.js (tc-fix-w17-*)
 * toCanvas fix wave-18: recipes-tocanvas-fix-wave18.js (tc-fix-w18-* — refine w7 −0.203)
 * toCanvas fix wave-19: recipes-tocanvas-fix-wave19.js (tc-fix-w19-* — w7 residual only)
 * toCanvas fix wave-20: recipes-tocanvas-fix-wave20.js (tc-fix-w20-* — w7 refine)
 * toCanvas fix wave-21: recipes-tocanvas-fix-wave21.js (tc-fix-w21-* — block combos)
 * Vertical drift wave: recipes-tocanvas-fix-wave-drift.js (tc-fix-drift-* legacy probes)
 * Drift proposals top-10: recipes-tocanvas-fix-drift-wave.js (tc-fix-drift-001..050 subset + w7 alias)
 * Drift batch 1: recipes-drift-batch1.js (drift-batch1-001..040)
 * Drift batch 2 triple: recipes-drift-batch2-triple.js (drift-batch2-001..040)
 * Drift batch 3 triple: recipes-drift-batch3-triple.js (drift-batch3-001..040)
 * Drift batch 4 triple: recipes-drift-batch4-triple.js (drift-batch4-001..040)
 * Drift batch 5 triple: recipes-drift-batch5-triple.js (drift-batch5-001..040)
 * Drift batch 0000 triple: recipes-drift-batch0000-triple.js (drift-batch0000-001..040)
 * Drift batch 222 triple: recipes-drift-batch222-triple.js (drift-batch222-001..040)
 * Drift batch 32222 triple: recipes-drift-batch32222-triple.js (drift-batch32222-001..040)
 * Drift batch 3333 triple: recipes-drift-batch3333-triple.js (drift-batch3333-001..040)
 * Drift batch 555 triple: recipes-drift-batch555-triple.js (drift-batch555-001..040)
 * Drift batch 66 triple: recipes-drift-batch66-triple.js (drift-batch66-001..040)
 * Drift batch 777 triple: recipes-drift-batch777-triple.js (drift-batch777-001..040)
 * Drift batch 3939 triple: recipes-drift-batch3939-triple.js (drift-batch3939-001..040)
 * Text-leaf wave-1: recipes-tocanvas-text-leaf-wave1.js (tc-text-w1-*)
 * Text baseline wave-1: recipes-tocanvas-text-baseline-wave1.js (tc-blh-w1-*)
 * Text baseline wave-2: recipes-tocanvas-text-baseline-wave2.js (tc-blh-w2-*)
 */

export { FO_BASELINE_CSS } from './fo-fix-recipes-constants.js'
export {
  REJECTED_HYPOTHESES,
  TEXT_BYPASS_RADICAL_PATCHES,
  isTextBypassRecipe,
  isMatrixNonStructuralRecipe,
} from './fo-fix-recipe-shared.js'

import { FO_BASELINE_CSS } from './fo-fix-recipes-constants.js'
import {
  isMatrixNonStructuralRecipe,
  isTextBypassRecipe,
} from './fo-fix-recipe-shared.js'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'

const isNode =
  typeof process !== 'undefined' && Boolean(process.versions?.node)

/** @returns {Promise<string[]>} */
async function listShardFilesForRuntime() {
  if (isNode) {
    const { listRecipeShardFiles } = await import('./fo-fix-recipes-shards.mjs')
    return listRecipeShardFiles()
  }
  const res = await fetch('/__localtests__/api/fo-recipe-shard-files')
  if (!res.ok) {
    throw new Error(
      `fo-recipe-shard-files: HTTP ${res.status} — serve the lab via local-http-server (npm run debug:fo-fix-lab)`,
    )
  }
  const data = await res.json()
  if (!Array.isArray(data.files)) {
    throw new Error('fo-recipe-shard-files: expected { files: string[] }')
  }
  return data.files
}

/** @returns {Promise<import('./fo-fix-recipe-shared.js').FoFixRecipe[]>} */
async function loadShardRecipes() {
  const files = await listShardFilesForRuntime()
  /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} */
  const merged = []
  for (const file of files) {
    let href = `/__localtests__/fo-recipes-shards/${file}`
    if (isNode) {
      const { dirname, join } = await import('node:path')
      const { fileURLToPath, pathToFileURL } = await import('node:url')
      const shardsDir = join(
        dirname(fileURLToPath(import.meta.url)),
        'fo-recipes-shards',
      )
      href = pathToFileURL(join(shardsDir, file)).href
    }
    const mod = await import(href)
    merged.push(...recipesFromShardModule(mod, file))
  }
  return merged
}

const _shardRecipes = await loadShardRecipes()

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} recipes */
function ensureProductBaselineFirst(recipes) {
  const idx = recipes.findIndex((r) => r.id === 'product-baseline')
  if (idx <= 0) return recipes
  const out = [...recipes]
  const [base] = out.splice(idx, 1)
  out.unshift(base)
  return out
}

/** Load optional id denylist from __localtests__/fo-fix-deactivated-ids.json (array or { ids: string[] }). */
async function loadFoFixDeactivatedIds() {
  /** @type {Set<string>} */
  const set = new Set()
  if (isNode) {
    const { existsSync, readFileSync } = await import('node:fs')
    const { dirname, join } = await import('node:path')
    const { fileURLToPath } = await import('node:url')
    const jsonPath = join(dirname(fileURLToPath(import.meta.url)), 'fo-fix-deactivated-ids.json')
    if (existsSync(jsonPath)) {
      try {
        const data = JSON.parse(readFileSync(jsonPath, 'utf8'))
        const ids = Array.isArray(data) ? data : data?.ids
        if (Array.isArray(ids)) for (const id of ids) if (id) set.add(String(id))
      } catch {
        /* ignore malformed denylist */
      }
    }
    return set
  }
  try {
    const res = await fetch('/__localtests__/fo-fix-deactivated-ids.json')
    if (res.ok) {
      const data = await res.json()
      const ids = Array.isArray(data) ? data : data?.ids
      if (Array.isArray(ids)) for (const id of ids) if (id) set.add(String(id))
    }
  } catch {
    /* ignore */
  }
  return set
}

const FO_FIX_DEACTIVATED_IDS = await loadFoFixDeactivatedIds()

/** @returns {ReadonlySet<string>} */
export function getFoFixDeactivatedIds() {
  return FO_FIX_DEACTIVATED_IDS
}

/** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES = ensureProductBaselineFirst(_shardRecipes)
// Optional: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes

/**
 * Recipes at index >= this threshold are inactive (preserved in shards, excluded from default matrix/lab).
 * Bottom half of merged shard order — use `--include-inactive` / `?includeInactive=1` to run all.
 */
export const FO_FIX_DEACTIVATED_FROM_INDEX = Math.floor(FO_FIX_RECIPES.length / 2)

/** Active recipe count (indices 0 .. FO_FIX_DEACTIVATED_FROM_INDEX - 1). */
export const FO_FIX_ACTIVE_COUNT = FO_FIX_DEACTIVATED_FROM_INDEX

/** Wave-2 tc-flags recipe ids (recipes-tocanvas-flags-wave2.js). */
export const TC_FLAGS_W2_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-flags-w2').map(
  (r) => r.id,
)

/** Wave-3 tc-flags recipe ids (recipes-tocanvas-flags-wave3.js). */
export const TC_FLAGS_W3_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-flags-w3').map(
  (r) => r.id,
)

/** Wave-4 tc-flags recipe ids (recipes-tocanvas-flags-wave4.js). */
export const TC_FLAGS_W4_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-flags-w4').map(
  (r) => r.id,
)

/** Wave-5 tc-fix recipe ids (recipes-tocanvas-fix-wave5.js). */
export const TC_FIX_W5_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-fix-w5').map(
  (r) => r.id,
)

/** Text-leaf wave-1 recipe ids (recipes-tocanvas-text-leaf-wave1.js). */
export const TC_TEXT_W1_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-text-w1').map(
  (r) => r.id,
)

/** Text baseline wave-1 recipe ids (recipes-tocanvas-text-baseline-wave1.js). */
export const TC_BLH_W1_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-blh-w1').map(
  (r) => r.id,
)

/** Wave-6 tc-fix recipe ids (recipes-tocanvas-fix-wave6.js). */
export const TC_FIX_W6_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-fix-w6').map(
  (r) => r.id,
)

/** Regression lock recipe ids (recipes-tocanvas-regression-wave.js). */
export const TC_REG_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-reg').map(
  (r) => r.id,
)

/** Regression wave-2 invariant ids (recipes-tocanvas-regression-wave2.js). */
export const TC_REG_W2_RECIPE_IDS = FO_FIX_RECIPES.filter((r) => r.category === 'tc-reg-w2').map(
  (r) => r.id,
)

/** Inactive recipe count (indices FO_FIX_DEACTIVATED_FROM_INDEX .. length - 1). */
export const FO_FIX_INACTIVE_COUNT = FO_FIX_RECIPES.length - FO_FIX_DEACTIVATED_FROM_INDEX

/**
 * Lab pins — visible in default dropdown / matrix despite bottom-half index archive.
 * w7 half-leading fork landed at merged index ~17060 (≥ FO_FIX_DEACTIVATED_FROM_INDEX ~16742);
 * archive is shard-order bookkeeping only — not a quality signal. Force-active keeps the
 * breakthrough recipe selectable without ?includeInactive=1.
 * Does not override `active: false` or `fo-fix-deactivated-ids.json`.
 */
export const FO_FIX_FORCE_ACTIVE_IDS = new Set([
  'product-baseline',
  'tc-fix-w7-rfork-fo-y-half-leading-meta',
  'tc-reg-lock-w7-half-leading-meta',
  'tc-reg-lock-src-mirror-w7',
  'src-mirror-experimentalRasterSvgPatchFoYHalfLeadingMeta',
  'baseline-plateau-2797',
  'w7-beats-baseline',
  'fork-red-changes-canvas',
])

/**
 * @param {FoFixRecipe | null | undefined} recipe
 * @param {{ includeInactive?: boolean }} [opts]
 */
export function isFoFixRecipeActive(recipe, opts = {}) {
  if (!recipe) return false
  if (opts.includeInactive) return true
  if (recipe.active === false) return false
  if (FO_FIX_DEACTIVATED_IDS.has(recipe.id)) return false
  if (recipe.category === 'tc-fix-drift-wave') return true
  if (recipe.category === 'drift-batch1') return true
  if (recipe.category === 'drift-batch2') return true
  if (recipe.category === 'drift-batch222') return true
  if (recipe.category === 'drift-batch32222') return true
  if (recipe.category === 'drift-batch0000') return true
  if (recipe.category === 'drift-batch3333') return true
  if (recipe.category === 'drift-batch3') return true
  if (recipe.category === 'drift-batch4') return true
  if (recipe.category === 'drift-batch555') return true
  if (recipe.category === 'drift-batch66') return true
  if (recipe.category === 'drift-batch777') return true
  if (recipe.category === 'drift-batch3939') return true
  if (recipe.category === 'drift-batch5') return true
  if (FO_FIX_FORCE_ACTIVE_IDS.has(recipe.id)) return true
  const idx = FO_FIX_RECIPES.indexOf(recipe)
  if (idx < 0) return false
  // Index threshold wins; per-recipe active:true does not resurrect archived bottom half.
  return idx < FO_FIX_DEACTIVATED_FROM_INDEX
}

/**
 * @param {FoFixRecipe[]} list
 * @param {{ includeInactive?: boolean, ids?: string[] }} opts
 */
function applyActiveRecipeFilter(list, opts = {}) {
  if (opts.includeInactive) return list
  return list.filter((r) => isFoFixRecipeActive(r))
}

/** @param {string} [id] */
export function getFoFixRecipe(id) {
  if (!id || id === 'product-baseline') {
    return FO_FIX_RECIPES.find((r) => r.id === 'product-baseline') ?? FO_FIX_RECIPES[0]
  }
  return FO_FIX_RECIPES.find((r) => r.id === id) ?? null
}

/** @returns {FoFixCategory[]} */
export function listFoFixCategories() {
  /** @type {Set<FoFixCategory>} */
  const set = new Set()
  for (const r of FO_FIX_RECIPES) {
    if (r.category) set.add(r.category)
  }
  return [...set].sort()
}

/**
 * Whether matrix runs should drop manual text-rendering bypass recipes (SVG `<text>`, fillText, path text).
 * Default: exclude on full matrix; keep when user picks explicit ids or diagnostic categories.
 * @param {{ category?: string, ids?: string[], excludeTextBypass?: boolean, includeTextBypass?: boolean }} opts
 */
export function matrixExcludesTextBypass(opts = {}) {
  if (opts.includeTextBypass) return false
  if (opts.excludeTextBypass) return true
  const cat = opts.category?.trim()
  if (cat === 'no-text-bypass') return true
  if (cat === 'rank' || cat === 'crazy') return false
  if (Array.isArray(opts.ids) && opts.ids.length > 0) return false
  if (cat) return false
  return true
}

/**
 * Filter recipes by category and/or explicit ids.
 * @param {{ category?: string, ids?: string[], excludeTextBypass?: boolean, includeInactive?: boolean }} [opts]
 * @returns {FoFixRecipe[]}
 */
/** @param {string} recipeId @param {string} pattern */
function foFixRecipeIdMatches(recipeId, pattern) {
  if (pattern.endsWith('*')) {
    return recipeId.startsWith(pattern.slice(0, -1))
  }
  return recipeId === pattern
}

/** @param {FoFixRecipe[]} list */
function prependProductBaselineToList(list) {
  const base = FO_FIX_RECIPES.find((r) => r.id === 'product-baseline')
  if (base && !list.some((r) => r.id === 'product-baseline')) {
    return [base, ...list]
  }
  return list
}

/**
 * Deterministically "purge bottom fraction" from a stable list order.
 * Intended for speeding up matrix runs without relying on performance ranking.
 *
 * Rules:
 * - Never applies when explicit ids are provided (caller responsibility).
 * - Always preserves `product-baseline` when present.
 * - Uses the current stable merged shard order (post category/bypass/active filters).
 *
 * @param {FoFixRecipe[]} list
 * @param {number | null | undefined} fraction bottom fraction to drop, 0..1
 */
function applyPurgeBottomFraction(list, fraction) {
  const f = typeof fraction === 'number' ? fraction : Number(fraction)
  if (!Number.isFinite(f) || f <= 0) return list
  if (f >= 1) {
    const base = list.find((r) => r.id === 'product-baseline')
    return base ? [base] : list.slice(0, 1)
  }

  const keepCount = Math.max(1, Math.ceil(list.length * (1 - f)))
  const kept = list.slice(0, keepCount)
  if (kept.some((r) => r.id === 'product-baseline')) return kept
  const base = list.find((r) => r.id === 'product-baseline')
  return base ? [base, ...kept] : kept
}

export function filterFoFixRecipes(opts = {}) {
  let list = FO_FIX_RECIPES
  const cat = opts.category?.trim()
  const idList = Array.isArray(opts.ids) && opts.ids.length > 0
    ? opts.ids.map((id) => String(id).trim()).filter(Boolean)
    : null
  const dropBypass =
    opts.excludeTextBypass === true || cat === 'no-text-bypass'

  if (cat === 'no-text-bypass') {
    list = list.filter((r) => !isMatrixNonStructuralRecipe(r))
    if (idList?.length) {
      list = list.filter((r) => idList.some((pat) => foFixRecipeIdMatches(r.id, pat)))
    }
  } else if (cat && idList?.length) {
    list = list.filter(
      (r) => r.category === cat || idList.some((pat) => foFixRecipeIdMatches(r.id, pat)),
    )
  } else if (cat === 'radical') {
    list = list.filter(
      (r) =>
        r.category === 'radical' ||
        (typeof r.category === 'string' && r.category.startsWith('radical-')) ||
        r.id.startsWith('radical-'),
    )
  } else if (cat) {
    list = list.filter((r) => r.category === cat)
  } else if (idList?.length) {
    list = list.filter((r) => idList.some((pat) => foFixRecipeIdMatches(r.id, pat)))
  }
  if (dropBypass && cat !== 'no-text-bypass') {
    list = list.filter((r) => !isMatrixNonStructuralRecipe(r))
  }
  if (
    cat === 'esoteric' ||
    cat === 'crazy' ||
    cat === 'extreme' ||
    cat === 'different' ||
    cat === 'orthogonal' ||
    cat === 'other' ||
    cat === 'rank-probe' ||
    cat === 'fo-try' ||
    cat === 'fo-try2' ||
    cat === 'fo-try3' ||
    cat === 'fo-try4' ||
    cat === 'retry2' ||
    cat === 'retry3' ||
    cat === 'fresh' ||
    cat === 'fresh2' ||
    cat === 'fresh3' ||
    cat === 'fresh4' ||
    cat === 'vary4' ||
    cat === 'vary5' ||
    cat === 'retry' ||
    cat === 'gen-par' ||
    cat === 'vary' ||
    cat === 'vary2' ||
    cat === 'vary3' ||
    cat === 'no-text-bypass' ||
    cat === 'tc-flags-w2' ||
    cat === 'tc-flags-w3' ||
    cat === 'tc-flags-w4' ||
    cat === 'experimental-src-mirror' ||
    cat === 'tc-fix-w5' ||
    cat === 'tc-fix-w6' ||
    cat === 'tc-text-w1' ||
    dropBypass
  ) {
    list = prependProductBaselineToList(list)
  }
  return applyActiveRecipeFilter(list, opts)
}

/**
 * Deterministically split a list into N shards by stable index (% shardCount).
 * @template T
 * @param {T[]} list
 * @param {{ shardIndex?: number, shardCount?: number, getKey?: (item: T) => string }} [opts]
 * @returns {T[]}
 */
function applyShardFilter(list, opts = {}) {
  const shardCount = Number.isFinite(opts.shardCount) ? Math.floor(opts.shardCount) : 0
  const shardIndex = Number.isFinite(opts.shardIndex) ? Math.floor(opts.shardIndex) : 0
  if (!shardCount || shardCount <= 1) return list
  if (shardIndex < 0 || shardIndex >= shardCount) {
    throw new Error(
      `Invalid shardIndex=${opts.shardIndex} for shardCount=${opts.shardCount} (expected 0..${shardCount - 1}).`,
    )
  }
  const getKey = typeof opts.getKey === 'function' ? opts.getKey : null
  const sorted = getKey
    ? [...list].sort((a, b) => String(getKey(a)).localeCompare(String(getKey(b))))
    : list
  /** @type {T[]} */
  const out = []
  for (let i = 0; i < sorted.length; i++) {
    if (i % shardCount === shardIndex) out.push(sorted[i])
  }
  return out
}

/**
 * Resolve recipe list for matrix/calibrate (category/ids, default text-bypass exclusion, limit/offset).
 * @param {{ limit?: number, offset?: number, ids?: string[], category?: string, excludeTextBypass?: boolean, includeTextBypass?: boolean, includeInactive?: boolean, shardIndex?: number, shardCount?: number, purgeBottomFraction?: number }} [opts]
 * @returns {FoFixRecipe[]}
 */
export function resolveFoFixMatrixRecipes(opts = {}) {
  const {
    limit,
    offset,
    ids,
    category,
    excludeTextBypass,
    includeTextBypass,
    includeInactive,
    shardIndex,
    shardCount,
    purgeBottomFraction,
  } = opts
  const idList = Array.isArray(ids) && ids.length > 0 ? ids : null
  const cat = category?.trim()
  const dropBypass = matrixExcludesTextBypass({
    category: cat,
    ids: idList ?? undefined,
    excludeTextBypass,
    includeTextBypass,
  })

  /** @type {FoFixRecipe[]} */
  let recipes
  if (cat || idList?.length) {
    recipes = filterFoFixRecipes({
      category: cat || undefined,
      ids: idList || undefined,
      excludeTextBypass: dropBypass,
      includeInactive,
    })
  } else {
    recipes = includeInactive
      ? [...FO_FIX_RECIPES]
      : FO_FIX_RECIPES.filter((r) => isFoFixRecipeActive(r))
    if (dropBypass) recipes = recipes.filter((r) => !isMatrixNonStructuralRecipe(r))
    if (dropBypass) recipes = prependProductBaselineToList(recipes)
  }
  // Purge bottom fraction is deterministic and only applies when ids are not explicitly selected.
  if (!idList?.length) {
    recipes = applyPurgeBottomFraction(recipes, purgeBottomFraction)
  }
  recipes = applyShardFilter(recipes, {
    shardIndex: Number.isFinite(shardIndex) ? shardIndex : undefined,
    shardCount: Number.isFinite(shardCount) ? shardCount : undefined,
    getKey: (r) => /** @type {any} */ (r)?.id ?? '',
  })
  const off = Number.isFinite(offset) && offset > 0 ? Math.floor(offset) : 0
  if (off > 0) recipes = recipes.slice(off)
  if (Number.isFinite(limit) && limit > 0) recipes = recipes.slice(0, limit)
  return recipes
}

/**
 * Best matrix row for promotion ranking — skips text-bypass leaders (svg-text / fillText / path text).
 * @param {Array<{ recipeId: string, liveVsCanvasTopPx?: number | null, deltaTopInBorder?: number | null }>} rows sorted by |canvas vs live|
 */
export function bestPromotableMatrixRow(rows) {
  if (!Array.isArray(rows) || !rows.length) return null
  for (const row of rows) {
    if (!isMatrixNonStructuralRecipe(getFoFixRecipe(row.recipeId))) return row
  }
  return rows[0] ?? null
}

/**
 * Merge baseline + recipe CSS for SVG inject.
 * @param {FoFixRecipe} recipe
 * @returns {string}
 */
export function recipeCaptureCss(recipe) {
  if (!recipe?.css) return FO_BASELINE_CSS
  if (recipe.css.includes('foreignObject{') || recipe.css.includes('foreignObject>')) {
    return recipe.css
  }
  return FO_BASELINE_CSS + recipe.css
}

/**
 * Wave-7 hooks — 50 recipes tc-lab-w7-hook-{001..050}.
 *
 * Each recipe selects one labHook from __localtests__/tocanvas-lab-hooks-registry.js,
 * and varies structural CSS injection (baseline vs h2).
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-hook-*'
 *
 * Dupes:
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'
import { LAB_W7_HOOK_IDS, getLabHook } from '../tocanvas-lab-hooks-registry.js'

/** @param {import('../fo-fix-recipe-shared.js').FoFixRecipe} r */
function recipeKey(r) {
  const mp = r.monkeypatch
  const mpStr = Array.isArray(mp) ? mp.join('|') : (mp ?? '')
  return [
    r.labHook ?? '',
    r.inject,
    r.rasterPatch ?? '',
    mpStr,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const RECIPES = []

const CSS = /** @type {const} */ ([
  { k: 'baseline', v: FO_BASELINE_CSS },
  { k: 'h2', v: H2_RASTER_NORMALIZE_CSS },
])

const seen = new Set()
let n = 1

/**
 * @param {string} hookId
 * @param {string} cssKey
 * @param {string} cssVal
 */
function add(hookId, cssKey, cssVal) {
  const def = getLabHook(hookId)
  if (!def) throw new Error(`recipes-tocanvas-lab-wave7-hooks.js: unknown hook: ${hookId}`)
  const id = String(n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const r = {
    id: `tc-lab-w7-hook-${id}`,
    label: `tc-lab-w7 hook #${n}: ${hookId} + ${cssKey}`,
    idea: `${def.idea}; CSS=${cssKey}`,
    notes: `wave7 hooks; labHook=${hookId}; FO raster only — no text bypass.`,
    category: 'tocanvas',
    inject: 'raster',
    active: true,
    rasterPatch: 'lab-toCanvas',
    labHook: hookId,
    css: cssVal,
  }
  const key = recipeKey(r)
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave7-hooks.js: duplicate key at ${r.id}`)
  }
  seen.add(key)
  RECIPES.push(r)
  n++
}

for (const hookId of LAB_W7_HOOK_IDS) {
  for (const c of CSS) add(hookId, c.k, c.v)
}

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-hooks.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}


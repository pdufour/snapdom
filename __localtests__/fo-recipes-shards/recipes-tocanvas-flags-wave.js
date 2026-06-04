/**
 * Wave-1 toCanvas lab flags — one recipe per tc-flags-w1 mechanism.
 * Flags: __localtests__/tocanvas-lab-flags-registry.js
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: npm run debug:tc-flags-matrix
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import { LAB_TC_FLAGS_W1, LAB_TC_FLAGS_W1_IDS } from '../tocanvas-lab-flags-registry.js'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = LAB_TC_FLAGS_W1_IDS.map((flagId) => {
  const def = LAB_TC_FLAGS_W1[flagId]
  return {
    id: flagId,
    label: `tc-flags w1: ${def.label}`,
    idea: def.idea,
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    labToCanvasFlag: flagId,
    labToCanvasOpts: def.labToCanvasOpts,
    labPreRaster: def.labPreRaster,
    notes: def.notes,
  }
})

if (RECIPES.length !== 6) {
  throw new Error(
    `recipes-tocanvas-flags-wave.js: expected 6 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = r.labToCanvasFlag ?? r.id
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-flags-wave.js: duplicate flag ${key}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

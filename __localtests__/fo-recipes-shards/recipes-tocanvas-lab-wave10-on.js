/**
 * Wave-10 active lab-toCanvas forks — tc-lab-w10-on-001..050.
 *
 * active:true so new ids stay off fo-fix-deactivated-ids.json (do not remove denylist entries).
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-on-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = Array.from({ length: 50 }, (_, i) => {
  const n = i + 1
  const num = String(n).padStart(3, '0')
  return {
    id: `tc-lab-w10-on-${num}`,
    label: `tc-lab-w10-on #${n}: lab-toCanvas baseline (active)`,
    idea: `Wave10 w10-on: active lab-toCanvas baseline fork #${n}.`,
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: 'Wave-10 lab toCanvas active set; FO raster only — no text bypass.',
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave10-on.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (r.active !== true) {
    throw new Error(`${r.id}: active must be true`)
  }
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Wave-21 — block-fixture combos (w7 + leaf translate + leading-trim).
 *
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Blocks \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w21-*' --open-browser
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w21-rfork-combo-w7-leaf-translate-half-leading',
    label: 'tc-fix-w21: w7 FO-y + leaf translateY',
    idea: 'Raster fork: fo-y-half-leading-meta + text-leaf-translate-y-half-leading-meta',
    notes: 'Dual structural nudge @ decode; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w21-rfork-combo-w7-leading-trim-both',
    label: 'tc-fix-w21: w7 FO-y + leading-trim both',
    idea: 'Raster fork: fo-y-half-leading-meta + leading-trim-text-box-leaf',
    notes: 'FO y meta + trim both edges on text leaves; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w13-rfork-leaf-translate-y-half-leading-meta',
    label: 'tc-fix-w13: leaf translateY (alias)',
    idea: 'Alias for tc-fix-w13-rfork-leaf-translate-y-half-leading',
    notes: 'Same patch id as w13 leaf translate; stable matrix id suffix.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta' },
  },
]

if (SPECS.length !== 3) {
  throw new Error(
    `recipes-tocanvas-fix-wave21.js: expected 3 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w21',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 3) {
  throw new Error('recipes-tocanvas-fix-wave21.js: duplicate recipe ids')
}

export const TC_FIX_W21_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

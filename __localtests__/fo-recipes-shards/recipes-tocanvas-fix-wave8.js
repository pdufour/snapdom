/**
 * Wave-8 FO-y half-leading refinement combos (structural, meta-derived).
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w8-*'
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w8-rfork-combo-y-half-leading-linebox',
    label: 'tc-fix-w8: y half-leading + linebox',
    idea: 'Raster fork: FO y −½(lh−fs) then height=linePx + overflow clip',
    notes: 'Avoid double offset vs draw inkAlign; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-linebox' },
  },
  {
    id: 'tc-fix-w8-rfork-combo-y-half-leading-box-overflow',
    label: 'tc-fix-w8: y half-leading + box overflow',
    idea: 'Raster fork: FO y −½(lh−fs) then height=linePx + box-sizing + overflow:hidden',
    notes: 'Line box clip without flex-start leaf CSS; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-box-overflow' },
  },
  {
    id: 'tc-fix-w8-rfork-combo-y-half-leading-overflow',
    label: 'tc-fix-w8: y half-leading + overflow',
    idea: 'Raster fork: FO y −½(lh−fs) then overflow:hidden (stretch height unchanged)',
    notes: 'Clip strut bleed without height attr; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-overflow' },
  },
  {
    id: 'tc-fix-w8-rfork-fo-y-half-leading-used',
    label: 'tc-fix-w8: FO y used half-leading',
    idea: 'Raster fork: FO y −½(lh−fontBoxH) with layout line box lh when available',
    notes: 'halfLeadingPxForLeaf from live DOM; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-used-meta' },
  },
  {
    id: 'tc-fix-w8-rfork-fo-y-half-leading-no-gbcr',
    label: 'tc-fix-w8: y half-leading no gbcr',
    idea: 'Raster fork FO y −½(lh−fs) + disable GBCR fractional blit nudge',
    notes: 'Isolate vdrift from FO y correction; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w8',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

export const TC_FIX_W8_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

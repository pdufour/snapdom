/**
 * Wave-9 Range strut FO-y probes (structural, meta from live getClientRects).
 *
 * Calibrate:
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w9-*'
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w9-rfork-fo-y-strut-range-meta',
    label: 'tc-fix-w9: FO y Range strut',
    idea: 'Raster fork: FO y −½(Range line height − fs) from live meta',
    notes: 'lhStrutRangeHalfLeadingPx from getClientRects; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-strut-range-meta' },
  },
  {
    id: 'tc-fix-w9-rfork-fo-y-strut-range-linebox-meta',
    label: 'tc-fix-w9: FO y Range−linebox',
    idea: 'Raster fork: FO y −(Range top − line box top) from live layout meta',
    notes: 'Strut offset within centered line box; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-strut-range-linebox-meta' },
  },
  {
    id: 'tc-fix-w9-rfork-fo-y-ink-offset-meta',
    label: 'tc-fix-w9: FO y ink offset',
    idea: 'Raster fork: FO y −(Range ink top − cap model top) in border box',
    notes: 'inkTopOffsetFromFoTop; small delta vs half-leading; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-ink-offset-meta' },
  },
  {
    id: 'tc-fix-w9-rfork-fo-y-strut-range-no-gbcr',
    label: 'tc-fix-w9: Range strut no GBCR',
    idea: 'FO y −(½(lh−fs) − Range subpixel frac) + disable GBCR fractional blit nudge',
    notes: 'lhStrutFoYAdjustPx; isolate blit from strut fork; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-strut-range-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w9-rfork-fo-y-half-leading-range-subpixel-draw',
    label: 'tc-fix-w9: FO y half-leading + Range subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) then draw dy += Range top subpixel fraction',
    notes: 'FO strut + blit subpixel from live Range; beats single combined FO y fork.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      strutRangeSubpixelDrawDy: true,
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
    category: 'tc-fix-w9',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

export const TC_FIX_W9_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

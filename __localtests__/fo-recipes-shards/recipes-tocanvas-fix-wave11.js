/**
 * Wave-11 decode combos — w7 half-leading + Range subpixel + viewBox + trim (meta-derived).
 *
 * Calibrate (mini fixture, headed, dpr=1):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --open-browser --no-text-bypass --dpr 1 --landmarks Home,Products --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w10-*,tc-fix-w11-*'
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w11-rfork-viewbox-y-fo-adjust-trim',
    label: 'tc-fix-w11: viewBox y fo-adjust + trim',
    idea: 'Raster fork: viewBox minY −lhStrutFoYAdjustPx + leading-trim/text-box-trim',
    notes: 'Range-aware viewBox paint origin + trim; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-viewbox-y-fo-adjust-trim-text-box' },
  },
  {
    id: 'tc-fix-w11-rfork-viewbox-y-half-leading-trim',
    label: 'tc-fix-w11: viewBox y half-leading + trim',
    idea: 'Raster fork: viewBox minY −½(lh−fs) + leading-trim/text-box-trim',
    notes: 'viewBox w7 strut + w7 trim combo; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-viewbox-y-half-leading-trim-text-box' },
  },
  {
    id: 'tc-fix-w11-rfork-strut-range-trim',
    label: 'tc-fix-w11: Range strut FO y + trim',
    idea: 'Raster fork: FO y −lhStrutFoYAdjustPx + leading-trim/text-box-trim',
    notes: 'Range subpixel FO y + leading-trim; beats w7 −0.203 target; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-strut-range-trim-text-box' },
  },
  {
    id: 'tc-fix-w11-rfork-strut-range-inline-block',
    label: 'tc-fix-w11: Range strut FO y + inline-block',
    idea: 'Raster fork: FO y −lhStrutFoYAdjustPx + inline-block line box on text leaves',
    notes: 'Range-aware FO y + leaf line box; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-strut-range-inline-block-leaf' },
  },
  {
    id: 'tc-fix-w11-rfork-viewbox-y-fo-adjust-linepx',
    label: 'tc-fix-w11: viewBox y fo-adjust + linePx',
    idea: 'Raster fork: viewBox minY −lhStrutFoYAdjustPx + FO height=linePx only',
    notes: 'viewBox strut + typographic line box height; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-viewbox-y-fo-adjust-linepx-height-only' },
  },
  {
    id: 'tc-fix-w11-rfork-strut-range-subpx-draw',
    label: 'tc-fix-w11: Range strut FO y + subpx draw',
    idea: 'Raster fork FO y −lhStrutFoYAdjustPx then draw dy += Range top subpixel',
    notes: 'Range FO y + blit subpixel; closes w7 residual; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-strut-range-meta',
      strutRangeSubpixelDrawDy: true,
    },
  },
  {
    id: 'tc-fix-w11-rfork-viewbox-y-fo-adjust-subpx-draw',
    label: 'tc-fix-w11: viewBox y fo-adjust + subpx draw',
    idea: 'Raster fork viewBox minY −lhStrutFoYAdjustPx + draw dy += Range subpixel',
    notes: 'viewBox Range strut + blit subpixel; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'viewbox-y-fo-adjust-meta',
      strutRangeSubpixelDrawDy: true,
    },
  },
  {
    id: 'tc-fix-w11-rfork-w7-y-trim-range-draw',
    label: 'tc-fix-w11: w7 y + trim + Range subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) + trim + draw dy += Range subpixel fraction',
    notes: 'Triple combo: w7 strut + leading-trim + blit subpixel; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box',
      strutRangeSubpixelDrawDy: true,
    },
  },
]

if (SPECS.length !== 8) {
  throw new Error(
    `recipes-tocanvas-fix-wave11.js: expected 8 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w11',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 8) {
  throw new Error('recipes-tocanvas-fix-wave11.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave11.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W11_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

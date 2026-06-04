/**
 * Wave-16 FO text @ canvas raster — w7 residual closure (Research Round 6/7).
 *
 * Focus: FO y + Range subpixel, leaf transform, viewBox subpixel slack — no lh-pin duplicates.
 *
 * Calibrate (headed):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w16-*' --open-browser
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w16-rfork-w7-leaf-subpx-positive',
    label: 'tc-fix-w16: w7 y + leaf +Range subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + text leaf translateY(+Range subpixel)',
    notes: 'Closes w7 −0.203 via leaf transform not FO y subtract; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-leaf-subpx-positive-only',
    label: 'tc-fix-w16: leaf +Range subpx only',
    idea: 'Raster fork: text leaf translateY(+lhStrutRangeSubpixelPx) without FO y attr',
    notes: 'Range subpixel on leaf only — baseline strut gap unchanged in FO attrs; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-range-subpixel-positive-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-w7-leaf-padding-subpx',
    label: 'tc-fix-w16: w7 y + leaf padding subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + padding-top:Range subpixel on text leaves',
    notes: 'Leaf box padding vs transform for h/p descender slack; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-padding-top-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-w7-viewbox-subpx',
    label: 'tc-fix-w16: w7 y + viewBox −Range subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + viewBox minY −Range subpixel fraction',
    notes: 'viewBox paint slack without full half-leading viewBox regression; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-viewbox-y-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-leaf-half-leading-minus-subpx',
    label: 'tc-fix-w16: leaf y −(½lh−subpx)',
    idea: 'Raster fork: text leaf translateY(−(½(lh−fs) − Range subpixel)) — w13 on leaf',
    notes: 'w13 FO-y-minus-range on leaf transform only; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-minus-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-viewbox-fo-adjust-inline-block',
    label: 'tc-fix-w16: viewBox fo-adjust + inline-block',
    idea: 'Raster fork: viewBox minY −lhStrutFoYAdjustPx + inline-block line box on leaves',
    notes: 'Range-aware viewBox + leaf line box; not raw viewBox half-leading; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-viewbox-y-fo-adjust-inline-block-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-w7-leaf-subpx-draw',
    label: 'tc-fix-w16: w7 leaf subpx + blit subpx',
    idea: 'Raster fork w7+leaf +Range subpx + draw dy += Range subpixel',
    notes: 'Decode blit + leaf transform double-check; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta',
      strutRangeSubpixelDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-leaf-half-leading-subpx-draw',
    label: 'tc-fix-w16: leaf −½lh + blit subpx',
    idea: 'Raster fork text leaf translateY(−½(lh−fs)) + draw dy += Range subpixel',
    notes: 'Leaf strut transform + meta blit; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta',
      strutRangeSubpixelDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-w7-overflow-visible',
    label: 'tc-fix-w16: w7 y + FO overflow visible',
    idea: 'Raster fork: FO y −½(lh−fs) + foreignObject overflow:visible',
    notes: 'Round-6 h/p FO bitmap clip hypothesis — paint slack on FO box; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-overflow-visible',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w16-rfork-viewbox-fo-adjust-trim',
    label: 'tc-fix-w16: viewBox fo-adjust + trim',
    idea: 'Raster fork: viewBox minY −lhStrutFoYAdjustPx + leading-trim/text-box-trim',
    notes: 'Range viewBox strut + trim combo from wave-11 retest; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-viewbox-y-fo-adjust-trim-text-box',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 10) {
  throw new Error(
    `recipes-tocanvas-fix-wave16.js: expected 10 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w16',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 10) {
  throw new Error('recipes-tocanvas-fix-wave16.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave16.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W16_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

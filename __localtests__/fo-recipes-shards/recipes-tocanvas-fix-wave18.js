/**
 * Wave-18 FO text @ canvas raster — refine w7 −0.203 px (Research Round 7).
 *
 * Calibrate (headed):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w18-*' --open-browser
 *   npm run debug:tc-fix-w18-matrix-calibrate
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w18-rfork-w7-height-unset-overflow-visible',
    label: 'tc-fix-w18: w7 + FO h unset + overflow',
    idea: 'Raster fork: FO y −½(lh−fs) + foreignObject height unset + overflow:visible',
    notes: 'Round-6 FO clip / stretch height hypothesis; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-height-unset-overflow-visible',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-rfork-y-w7-minus-range-subpixel',
    label: 'tc-fix-w18: FO y −(½lh−subpx)',
    idea: 'Raster fork: FO y −(½(lh−fs) − lhStrutRangeSubpixelPx) from meta',
    notes: 'Refined w7: subtract Range subpixel from half-leading FO y; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-w7-minus-range-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-rfork-leaf-relative-top-half-leading',
    label: 'tc-fix-w18: leaf top −½lh',
    idea: 'Raster fork: text leaf position:relative;top:−½(lh−fs) instead of FO y',
    notes: 'Decode CSS on text leaf, not foreignObject y attr; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-relative-top-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-rfork-leaf-relative-top-w7-minus-range',
    label: 'tc-fix-w18: leaf top −(½lh−subpx)',
    idea: 'Raster fork: text leaf top:−(½(lh−fs)−Range subpixel)',
    notes: 'w7-minus-range on leaf relative top; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-relative-top-w7-minus-range-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-rfork-split-decode-only-w7',
    label: 'tc-fix-w18: decode-only w7 fork',
    idea: 'Raster fork FO y −½(lh−fs) on decode URL only; SVG measure leg unpatchted',
    notes: 'rasterForkDecodeOnly audit — verify no double apply vs inline SVG measure; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      rasterForkDecodeOnly: true,
      debugForkTrace: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-rfork-w7-crisp-edges',
    label: 'tc-fix-w18: w7 + crispEdges',
    idea: 'Raster fork: FO y −½(lh−fs) + shape-rendering:crispEdges on FO subtree',
    notes: 'Text raster hint — integer device rows; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-crisp-edges',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-lab-display-ink-quarter-round-w7',
    label: 'tc-fix-w18: w7 + ¼px display scan',
    idea: 'Raster fork FO y −½(lh−fs) + lab displayInkQuarterRound (not promotion gate)',
    notes: 'Display metrics only — integer gate still uses raw ink scan; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      displayInkQuarterRound: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w18-rfork-w7-minus-range-height-unset-overflow',
    label: 'tc-fix-w18: ½lh−subpx + h unset',
    idea: 'Raster fork: FO y −(½(lh−fs)−subpx) + height unset + overflow:visible',
    notes: 'Meta FO y refine + FO box slack combo; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-w7-minus-range-height-unset-overflow-visible',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 8) {
  throw new Error(
    `recipes-tocanvas-fix-wave18.js: expected 8 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w18',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 8) {
  throw new Error('recipes-tocanvas-fix-wave18.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave18.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W18_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

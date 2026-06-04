/**
 * Wave-20 w7 refine — FO y minus-subpixel + root-only aliases (Research Round 8).
 *
 * Calibrate (headed):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w20-*' --open-browser
 *   npm run debug:tc-fix-w20-matrix-calibrate
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w20-rfork-y-half-minus-subpixel',
    label: 'tc-fix-w20: FO y −(½lh−subpx)',
    idea: 'Raster fork: FO y −(½(lh−fs) − lhStrutRangeSubpixelPx) — w7 refine id',
    notes: 'Alias patch fo-y-half-leading-minus-subpixel-meta; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-minus-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w20-rfork-y-half-root-only',
    label: 'tc-fix-w20: FO y root-only',
    idea: 'Raster fork: FO y −½(lh−fs) on first foreignObject only',
    notes: 'Alias patch fo-y-half-leading-root-only; A/B vs all-FO nudge; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-root-only',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w20-w7-integer-baseline',
    label: 'tc-fix-w20: w7 integer baseline',
    idea: 'Raster fork FO y −½(lh−fs) — explicit w7 reference row for wave-20',
    notes: 'Expected |canvasΔ| ≈ 0.203 px (Range subpixel vs integer scan); FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w20-rfork-createImageBitmap-minus-subpx',
    label: 'tc-fix-w20: CIB + minus-subpx',
    idea: 'createImageBitmap decode + FO y −(½(lh−fs) − Range subpixel)',
    notes: 'Decode path A/B — createImageBitmap vs Image.decode; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-minus-subpixel-meta',
      forceCreateImageBitmap: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w20-rfork-glyph-padding-w7',
    label: 'tc-fix-w20: w7 y + glyph pad',
    idea: 'FO y −½(lh−fs) + Range-subpixel padding-top on text leaves',
    notes: 'Meta-derived glyph padding (lhStrutRangeSubpixelPx); FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-glyph-padding-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w20-rfork-createImageBitmap-root-only',
    label: 'tc-fix-w20: CIB + root-only',
    idea: 'createImageBitmap decode + FO y −½(lh−fs) on first foreignObject only',
    notes: 'Decode path A/B with root-only FO scope; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-root-only',
      forceCreateImageBitmap: true,
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 6) {
  throw new Error(
    `recipes-tocanvas-fix-wave20.js: expected 6 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w20',
    active: true,
    labToCanvasOpts,
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-fix-wave20.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave20.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W20_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

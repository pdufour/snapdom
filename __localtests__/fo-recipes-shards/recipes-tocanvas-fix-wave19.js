/**
 * Wave-19 FO text @ canvas raster — close w7 −0.203 px residual (Research Round 7).
 *
 * Focus ONLY on Range subpixel vs integer ink scan — not lh-pin / decode matrix churn.
 *
 * Calibrate (headed):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w19-*' --open-browser
 *   npm run debug:tc-fix-w19-matrix-calibrate
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labInkScanMode?: 'integer' | 'fractional-threshold' | 'fractional-com', labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w19-rfork-y-half-minus-range-subpx',
    label: 'tc-fix-w19: FO y −(½lh−subpx)',
    idea: 'Raster fork: FO y −(½(lh−fs) − lhStrutRangeSubpixelPx) from meta',
    notes: 'Core w7 residual hypothesis — Range subpixel subtract from half-leading FO y; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-w7-minus-range-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w19-rfork-leaf-half-minus-range-subpx',
    label: 'tc-fix-w19: leaf −(½lh−subpx)',
    idea: 'Raster fork: text leaf translateY(−(½(lh−fs) − Range subpixel)) — w13 on leaf',
    notes: 'Same meta formula on leaf transform, not FO y attr; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-minus-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w19-rfork-combo-w7-leaf-subpx',
    label: 'tc-fix-w19: w7 y + leaf +subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + leaf translateY(+Range subpixel)',
    notes: 'Integer scan closure via leaf subpixel after w7 strut; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w19-w7-integer-baseline',
    label: 'tc-fix-w19: w7 integer baseline',
    idea: 'Raster fork FO y −½(lh−fs) — explicit w7 reference row for wave-19',
    notes: 'Expected |canvasΔ| ≈ 0.203 px (Range subpixel vs integer scan); FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w19-w7-fractional-com-scan',
    label: 'tc-fix-w19: w7 + fractional-com scan',
    idea: 'Raster fork FO y −½(lh−fs) + lab inkScanMode fractional-com (metric only)',
    notes: 'Lab gate on subpixel-aware ink row — does not change FO paint; FO raster only.',
    labInkScanMode: 'fractional-com',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w19-w7-fractional-threshold-scan',
    label: 'tc-fix-w19: w7 + frac-threshold scan',
    idea: 'Raster fork FO y −½(lh−fs) + lab inkScanMode fractional-threshold (metric only)',
    notes: 'Lab AA-ramp threshold scan — diagnostic metric path only; FO raster only.',
    labInkScanMode: 'fractional-threshold',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 6) {
  throw new Error(
    `recipes-tocanvas-fix-wave19.js: expected 6 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, labInkScanMode, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w19',
    active: true,
    labToCanvasOpts,
    ...(labInkScanMode ? { labInkScanMode } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-fix-wave19.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labInkScanMode ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave19.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W19_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

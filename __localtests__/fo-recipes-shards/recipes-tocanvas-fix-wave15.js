/**
 * Wave-15 FO text @ canvas raster — close w7 −0.203px residual (Research Round 7).
 *
 * Calibrate:
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w12-rfork-w7-y-range-subpx-draw,tc-fix-w15-*' --open-browser
 *   npm run debug:tc-fix-w15-matrix-calibrate
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, harnessSnapdom?: Record<string, unknown> }} */
const SPECS = [
  {
    id: 'tc-fix-w15-rfork-y-half-leading-plus-subpixel',
    label: 'tc-fix-w15: FO y −(½lh + subpx)',
    idea: 'Raster fork: FO y −(½(lh−fs) + lhStrutRangeSubpixelPx) from meta',
    notes: 'Opposite of w13 subtract-subpixel FO y; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-plus-range-subpixel-meta' },
  },
  {
    id: 'tc-fix-w15-rfork-leaf-translate-y-subpixel-positive',
    label: 'tc-fix-w15: leaf translateY +subpx',
    idea: 'Raster fork: text leaf translateY(+lhStrutRangeSubpixelPx) only',
    notes: 'Subpixel down on leaf transform, no FO y attr; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'text-leaf-translate-y-range-subpixel-positive-meta' },
  },
  {
    id: 'tc-fix-w15-rfork-combo-w7-leaf-translate-subpixel',
    label: 'tc-fix-w15: w7 y + leaf +subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + leaf translateY(+Range subpixel)',
    notes: 'Strut FO y + leaf subpixel combo; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-translate-y-subpixel-positive-meta',
    },
  },
  {
    id: 'tc-fix-w15-rfork-combo-w7-leaf-padding-subpixel',
    label: 'tc-fix-w15: w7 y + leaf padding subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + padding-top:Range subpixel on text leaf',
    notes: 'Box model subpixel on leaf, not FO y subtract; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-leaf-padding-top-subpixel-meta',
    },
  },
  {
    id: 'tc-fix-w15-rfork-combo-w7-viewbox-y-subpixel',
    label: 'tc-fix-w15: w7 y + viewBox −subpx',
    idea: 'Raster fork: FO y −½(lh−fs) + viewBox minY −lhStrutRangeSubpixelPx',
    notes: 'Subpixel viewBox slack after w7 FO y; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-fo-y-half-leading-viewbox-y-subpixel-meta',
    },
  },
  {
    id: 'tc-fix-w15-rfork-leaf-translate-w7-minus-subpixel',
    label: 'tc-fix-w15: leaf translate w7−subpx',
    idea: 'Raster fork: text leaf translateY(−(½(lh−fs) − Range subpixel))',
    notes: 'w13 FO adjust on leaf transform only; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-minus-subpixel-meta',
    },
  },
  {
    id: 'tc-fix-w15-w7-y-range-subpx-draw',
    label: 'tc-fix-w15: w7 y + Range subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) + draw dy += lhStrutRangeSubpixelPx',
    notes: 'Blit-only subpixel after w7 fork (re-calibrate w12 id); FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      strutRangeSubpixelDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w15-w7-y-range-subpx-half-draw',
    label: 'tc-fix-w15: w7 y + ½ subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) + draw dy += ½ lhStrutRangeSubpixelPx',
    notes: 'Partial meta subpixel blit; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      strutRangeSubpixelHalfDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w15-w7-y-meta-ink-frac-draw',
    label: 'tc-fix-w15: w7 y + ink frac draw',
    idea: 'Raster fork FO y −½(lh−fs) + metaInkTopFracDrawDy from capture ink meta',
    notes: 'Capture experimentalCaptureInkMeta + fractional blit; FO raster only.',
    harnessSnapdom: { experimentalCaptureInkMeta: true },
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      metaInkTopFracDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w15-w7-y-ink-align-subpixel-only',
    label: 'tc-fix-w15: w7 y + ink subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) + inkAlignSubpixelOnly draw dy',
    notes: 'Range subpixel blit without full inkAlign cap model; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      inkAlignSubpixelOnly: true,
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 10) {
  throw new Error(
    `recipes-tocanvas-fix-wave15.js: expected 10 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, harnessSnapdom, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w15',
    active: true,
    labToCanvasOpts,
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 10) {
  throw new Error('recipes-tocanvas-fix-wave15.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave15.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W15_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Wave-17 FO text @ canvas raster — novel decode/raster strut paths (Research Round 7).
 *
 * Calibrate (headed):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w17-*' --open-browser
 *   npm run debug:tc-fix-w17-matrix-calibrate
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, harnessSnapdom?: Record<string, unknown> }} */
const SPECS = [
  {
    id: 'tc-fix-w17-rfork-y-w7-minus-range-subpixel',
    label: 'tc-fix-w17: FO y ½lh−subpx',
    idea: 'Raster fork: FO y −(½(lh−fs) − lhStrutRangeSubpixelPx) single meta formula',
    notes: 'w7 + Range subpixel subtract on FO y attr; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-w7-minus-range-subpixel-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-y-half-leading-root-fo-only',
    label: 'tc-fix-w17: FO y root FO only',
    idea: 'Raster fork: FO y −½(lh−fs) on first foreignObject only (not nested)',
    notes: 'A/B vs all-FO nudge; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-root-fo-only-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-y-half-leading-each-fo',
    label: 'tc-fix-w17: FO y every foreignObject',
    idea: 'Raster fork: FO y −½(lh−fs) on every foreignObject (DOM walk)',
    notes: 'A/B vs root-only FO y; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-each-fo-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-flex-row-translate-y-half-leading',
    label: 'tc-fix-w17: flex row translateY',
    idea: 'Raster fork: inner flex row transform translate(0,−½(lh−fs)) at decode',
    notes: 'SVG/HTML transform on flex container, not FO y attr; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'flex-inner-row-translate-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-w7-dominant-baseline-alphabetic',
    label: 'tc-fix-w17: w7 y + dominant-baseline',
    idea: 'Raster fork: FO y −½(lh−fs) + dominant-baseline:alphabetic on text leaves',
    notes: 'Baseline model on text leaves with w7 FO y; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-w7-dominant-baseline-alphabetic-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-w7-text-box-edge-cap-alphabetic',
    label: 'tc-fix-w17: w7 y + text-box-edge',
    idea: 'Raster fork: FO y −½(lh−fs) + text-box-edge:cap alphabetic on text leaves',
    notes: 'CSS text-box-edge when supported at decode; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-w7-text-box-edge-cap-alphabetic-leaf',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-svg-decode-2x-downscale-w7',
    label: 'tc-fix-w17: 2× SVG decode + w7 y',
    idea: 'Raster fork: FO y −½(lh−fs) + SVG root 2× decode scale + 9-arg downscale draw',
    notes: 'Structural 2× supersample at decode; canvas backing uses caller dpr only; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-w7-svg-decode-supersample-2x-meta',
      dprScaledSvgRootDraw: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-w7-flex-inner-flex-start',
    label: 'tc-fix-w17: w7 y + flex-start rows',
    idea: 'Raster fork: FO y −½(lh−fs) + align-items:flex-start on inner flex rows',
    notes: 'Remove flex stretch on FO inner row at decode; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-w7-flex-inner-row-flex-start',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-capture-ink-align-w7-subpx-only',
    label: 'tc-fix-w17: w7 y + ink subpx blit',
    idea: 'Capture experimentalCaptureInkMeta + w7 FO y fork + inkAlignSubpixelOnly draw dy',
    notes: 'Ink-meta destY only with w7 fork — no double half-leading blit; FO raster only.',
    harnessSnapdom: { experimentalCaptureInkMeta: true },
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      inkAlignSubpixelOnly: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w17-rfork-w7-minus-range-flex-start',
    label: 'tc-fix-w17: ½lh−subpx + flex-start',
    idea: 'Raster fork: FO y −(½(lh−fs)−subpx) + inner flex row align-items:flex-start',
    notes: 'Meta formula + stretch removal combo; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'combo-w7-minus-range-flex-inner-flex-start',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 10) {
  throw new Error(
    `recipes-tocanvas-fix-wave17.js: expected 10 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, harnessSnapdom, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w17',
    active: true,
    labToCanvasOpts,
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 10) {
  throw new Error('recipes-tocanvas-fix-wave17.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave17.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W17_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

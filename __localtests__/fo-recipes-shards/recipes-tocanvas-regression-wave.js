/**
 * Regression lock recipes — frozen baseline / w7 / combo configs for headed probes.
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-reg-lock-*'
 * Probes:
 *   npm run debug:fo-w7-regression
 *   npm run debug:fo-ink-sanity
 */
import {
  FO_BASELINE_CSS,
} from '../fo-fix-recipes-constants.js'

/** Capture: inline-block line box on text leaf (w10 combo lock). */
const CAPTURE_INLINE_BLOCK_LINE_LEAF =
  'foreignObject :is(span,a,p,h1,h2,h3,label){display:inline-block!important;vertical-align:top!important;align-self:flex-start!important}'

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, rasterPatch?: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, harnessProductToCanvas?: Record<string, unknown> }} */
const SPECS = [
  {
    id: 'tc-reg-lock-baseline',
    label: 'regression lock: product baseline',
    idea: 'Frozen baseline control — expect canvasΔ ≈ +2.797 @ dpr=1 Home mini nav',
    notes: 'Regression guard; FO raster only — no text bypass.',
    inject: 'capture',
    css: '',
  },
  {
    id: 'tc-reg-lock-w7-half-leading-meta',
    label: 'regression lock: w7 FO y −½(lh−fs)',
    idea: 'Frozen w7 rfork — expect canvasΔ ≈ −0.203 @ dpr=1 Home mini nav',
    notes: 'labToCanvasOpts.rasterOnlySvgPatch fo-y-half-leading-meta; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    id: 'tc-reg-lock-src-mirror-w7',
    label: 'regression lock: src experimentalRasterSvgPatch w7',
    idea: 'Product toCanvas path with fo-y-half-leading-meta (src flag mirror)',
    notes: 'harnessProductToCanvas experimentalRasterSvgPatch; FO raster only.',
    inject: 'both',
    css: FO_BASELINE_CSS,
    rasterPatch: 'product-toCanvas',
    harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    id: 'tc-reg-lock-w7-plus-baseline-css',
    label: 'regression lock: w7 + baseline FO CSS',
    idea: 'w7 rfork with capture+raster FO normalize bundle',
    notes: 'Both inject + fo-y-half-leading-meta; FO raster only.',
    inject: 'both',
    css: FO_BASELINE_CSS,
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    id: 'tc-reg-lock-w7-disable-gbcr',
    label: 'regression lock: w7 + disable GBCR nudge',
    idea: 'w7 without fractional GBCR blit nudge — full strut class visible',
    notes: 'disableGbcrFracNudge + fo-y-half-leading-meta; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-reg-lock-w7-w10-inline-block',
    label: 'regression lock: w10 inline-block + w7 y',
    idea: 'Capture inline-block line box + w7 FO y nudge combo',
    notes: 'w10 capture layout + w7 rfork; FO raster only.',
    inject: 'capture',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINE_LEAF,
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta' },
  },
]

if (SPECS.length !== 6) {
  throw new Error(
    `recipes-tocanvas-regression-wave.js: expected 6 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const {
    labToCanvasOpts,
    harnessProductToCanvas,
    css,
    inject,
    rasterPatch,
    ...rest
  } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: rasterPatch ?? 'lab-toCanvas',
    category: 'tc-reg',
    active: true,
    labToCanvasOpts,
    ...(harnessProductToCanvas ? { harnessProductToCanvas } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-regression-wave.js: duplicate recipe ids')
}

export const TC_REG_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

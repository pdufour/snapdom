/**
 * Regression wave-2 — invariant lock recipes for headed probes.
 *
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'baseline-plateau-2797,w7-beats-baseline,fork-red-changes-canvas'
 *   npm run test:fo-three-way
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** Red FO background at decode — bitmap must differ from baseline (fork wiring). */
const FORK_RED_MARKER_CSS = 'foreignObject{background:rgba(255,0,0,0.35)!important}'

/** @type {{ id: string, label: string, idea: string, notes: string, css?: string, inject?: import('../fo-fix-recipe-shared.js').FoFixInjectScope, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, harnessProductToCanvas?: Record<string, unknown> }} */
const SPECS = [
  {
    id: 'baseline-plateau-2797',
    label: 'regression w2: baseline plateau 2.797',
    idea: 'Frozen baseline — expect |canvasΔ| ≈ 2.797 @ dpr=1 Home mini nav',
    notes: 'Alias of product-baseline capture path; FO raster only.',
    inject: 'capture',
    css: '',
  },
  {
    id: 'w7-beats-baseline',
    label: 'regression w2: w7 beats baseline',
    idea: 'w7 rfork — |canvasΔ| must be < baseline plateau (~0.203 vs 2.797)',
    notes: 'labToCanvasOpts fo-y-half-leading-meta; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    id: 'fork-red-changes-canvas',
    label: 'regression w2: red fork changes canvas',
    idea: 'Decode-time red FO marker — bitmap pixels must change vs baseline',
    notes: 'Raster CSS inject at decode; not a parity fix — fork reachability lock.',
    inject: 'raster',
    css: FO_BASELINE_CSS + FORK_RED_MARKER_CSS,
    rasterPatch: 'lab-toCanvas',
    labToCanvasOpts: { disableGbcrFracNudge: true },
  },
]

if (SPECS.length !== 3) {
  throw new Error(
    `recipes-tocanvas-regression-wave2.js: expected 3 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, harnessProductToCanvas, css, inject, rasterPatch, ...rest } = spec
  return {
    css: css ?? '',
    inject: inject ?? 'raster',
    rasterPatch: rasterPatch ?? 'lab-toCanvas',
    category: 'tc-reg-w2',
    active: true,
    labToCanvasOpts,
    ...(harnessProductToCanvas ? { harnessProductToCanvas } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 3) {
  throw new Error('recipes-tocanvas-regression-wave2.js: duplicate recipe ids')
}

export const TC_REG_W2_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

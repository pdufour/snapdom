/**
 * Lab toCanvas wave 3 — scale / DPR / width-height harness grid (tc-lab-w3-sc-001..060).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 *
 * ## Harness (fo-fix-lab-runner.js → resolveLabToCanvasHarness)
 *
 * 1. Capture builds `dims` `{ cssW, cssH, dpr }` from live root + caller export scale/dpr.
 * 2. `resolveRecipeRasterScale(recipe, callerScale)` → `rasterScale` (optional `radicalOptions.recipeScale`).
 * 3. `resolveLabToCanvasHarness(recipe, dims, rasterScale, meta)` merges `recipe.toCanvasHarness`:
 *    - `width` / `height`: `'dims'` → cssW/cssH; `'omit'` → natural decode size; number → explicit opt.
 *    - `scale` / `dpr`: override export scale / DPR when finite.
 *    - `meta.w0` / `meta.h0`: `'parsed' | 'target' | 'css' | 'omit' | number`.
 * 4. `labToCanvasOpts.dprSource: 'device'` uses `window.devicePixelRatio` instead of harness dpr.
 *
 * Grid: scale ∈ {0.5, 1, 1.5, 2} × dpr ∈ {1, 2, device} × 5 width/height permutations = 60 recipes.
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-sc-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe */

const SCALES = [0.5, 1, 1.5, 2]

/** @type {{ tag: string, harness: Record<string, unknown>, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').FoFixRecipe['labToCanvasOpts'] }[]} */
const DPR_MODES = [
  { tag: 'dpr1', harness: { dpr: 1 } },
  { tag: 'dpr2', harness: { dpr: 2 } },
  { tag: 'dpr-device', harness: {}, labToCanvasOpts: { dprSource: 'device' } },
]

/** @type {{ tag: string, width: 'dims' | 'omit', height: 'dims' | 'omit', meta?: { w0?: string, h0?: string } }[]} */
const DIM_PERMUTATIONS = [
  {
    tag: 'wh-dims-parsed',
    width: 'dims',
    height: 'dims',
    meta: { w0: 'parsed', h0: 'parsed' },
  },
  { tag: 'wh-natural', width: 'omit', height: 'omit' },
  {
    tag: 'w-dims-h-omit',
    width: 'dims',
    height: 'omit',
    meta: { w0: 'parsed', h0: 'parsed' },
  },
  {
    tag: 'w-omit-h-dims',
    width: 'omit',
    height: 'dims',
    meta: { w0: 'parsed', h0: 'parsed' },
  },
  {
    tag: 'wh-dims-meta-omit',
    width: 'dims',
    height: 'dims',
    meta: { w0: 'omit', h0: 'omit' },
  },
]

/** @type {{ n: number, slug: string, idea: string, scale: number, dpr: typeof DPR_MODES[number], dim: typeof DIM_PERMUTATIONS[number] }[]} */
const SPECS = []
{
  let n = 0
  for (const scale of SCALES) {
    for (const dpr of DPR_MODES) {
      for (const dim of DIM_PERMUTATIONS) {
        n += 1
        SPECS.push({
          n,
          slug: `scale ${scale} ${dpr.tag} ${dim.tag}`,
          idea:
            `lab-toCanvas toCanvasHarness scale=${scale} ${dpr.tag} — ` +
            `width=${dim.width} height=${dim.height}` +
            (dim.meta ? ` meta w0/h0 ${dim.meta.w0}/${dim.meta.h0}` : ''),
          scale,
          dpr,
          dim,
        })
      }
    }
  }
}

if (SPECS.length !== 60) {
  throw new Error(`recipes-tocanvas-lab-wave3-scale.js: expected 60 SPECS, got ${SPECS.length}`)
}

/** @type {FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {NonNullable<FoFixRecipe['toCanvasHarness']>} */
  const toCanvasHarness = {
    width: spec.dim.width,
    height: spec.dim.height,
    scale: spec.scale,
    ...spec.dpr.harness,
  }
  if (spec.dim.meta) toCanvasHarness.meta = spec.dim.meta

  /** @type {FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w3-sc-${num}`,
    label: `tc-lab-w3-sc #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS,
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    toCanvasHarness,
    notes: `Wave3 scale/DPR harness; ${spec.slug}; FO raster only — no text bypass.`,
  }
  if (spec.dpr.labToCanvasOpts) recipe.labToCanvasOpts = spec.dpr.labToCanvasOpts
  return recipe
})

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    JSON.stringify(r.toCanvasHarness ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-scale.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

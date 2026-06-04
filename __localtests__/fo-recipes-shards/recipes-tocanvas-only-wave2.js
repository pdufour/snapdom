/**
 * Wave-2 toCanvas-only probes — alternate decode paths (blob bitmap, iframe retry).
 *
 * Matrix:
 *   SNAPDOM_LOCAL_PORT=8789 node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass \
 *     --ids 'product-baseline,tc-only-w2-*'
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { LAB_DECODE_INTERVAL_MS } from '../fo-fix-toCanvas-load-pipeline.js'

/** @type {{ id: string, label: string, idea: string, notes: string, labLoadPipeline: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    id: 'tc-only-w2-image-bitmap-decode',
    label: 'tc-only-w2: blob createImageBitmap',
    idea:
      'Patched SVG data URL → blob → createImageBitmap(blob) → drawImage bitmap (no HTMLImageElement decode)',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labLoadPipeline: 'image-bitmap-decode',
    labToCanvasOpts: { decodeIntervalMs: LAB_DECODE_INTERVAL_MS },
  },
  {
    id: 'tc-only-w2-iframe-decode-retry',
    label: 'tc-only-w2: iframe bitmap retry',
    idea:
      'Serialized SVG in sandbox iframe → createImageBitmap(svg) with decode retry + backoff before drawImage',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labLoadPipeline: 'iframe-decode-retry',
    labToCanvasOpts: { decodeIntervalMs: LAB_DECODE_INTERVAL_MS },
  },
]

if (SPECS.length !== 2) {
  throw new Error(
    `recipes-tocanvas-only-wave2.js: expected 2 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labLoadPipeline, labToCanvasOpts, extra, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-only-w2',
    active: true,
    labLoadPipeline,
    labToCanvasOpts,
    ...rest,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 2) {
  throw new Error('recipes-tocanvas-only-wave2.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-only-wave2.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_ONLY_W2_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

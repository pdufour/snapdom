/**
 * Wave 6 active — systematic lab toCanvas grid after 75% prune.
 * 120 recipes: tc-lab-w6-on-001..120 = 8 rasterPatch × 5 svgRootRound × 3 decode-interval pipelines.
 *
 * Notes:
 * - All rows are lab-toCanvas paths (no src/ promotion).
 * - svgRootRound has 5 states by treating "unset" vs explicit null as distinct, both meaning "no rounding" in practice.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-on-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const RASTER_PATCHES = [
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
  'lab-toCanvas-round-all',
  'lab-toCanvas-wait-decode',
  'lab-toCanvas-bitmap-first',
  'lab-wait-16ms',
  'lab-wait-100ms',
]

/** @type {({ key: string, svgRootRound?: import('../fo-fix-recipe-shared.js').FoFixSvgRootRound | null })[]} */
const ROOT_ROUNDS = [
  { key: 'unset' },
  { key: 'null', svgRootRound: null },
  { key: 'integer-viewbox', svgRootRound: 'integer-viewbox' },
  { key: 'round-dims', svgRootRound: 'round-dims' },
  { key: 'int-floor', svgRootRound: 'int-floor' },
]

const LOAD_PIPELINES = ['no-decode-interval', 'default', 'decode-interval-raf']

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const rasterPatch of RASTER_PATCHES) {
  for (const rr of ROOT_ROUNDS) {
    for (const labLoadPipeline of LOAD_PIPELINES) {
      n += 1
      const num = String(n).padStart(3, '0')
      /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
      const r = {
        id: `tc-lab-w6-on-${num}`,
        label: `w6-on #${n}: ${rasterPatch} / ${rr.key} / ${labLoadPipeline}`,
        idea: `Active grid: ${rasterPatch} + svgRootRound=${rr.key} + labLoadPipeline=${labLoadPipeline}`,
        css: FO_BASELINE_CSS,
        inject: 'both',
        rasterPatch,
        category: 'tocanvas',
        active: true,
        notes: `Wave-6 active grid (post 75% prune); FO raster only — no text bypass.`,
        labLoadPipeline,
      }
      if (Object.prototype.hasOwnProperty.call(rr, 'svgRootRound')) {
        r.svgRootRound = rr.svgRootRound
      }
      RECIPES.push(r)
    }
  }
}

if (RECIPES.length !== 120) {
  throw new Error(`recipes-tocanvas-lab-wave6-active.js: expected 120 recipes, got ${RECIPES.length}`)
}

for (const r of RECIPES) {
  if (!String(r.rasterPatch ?? '').startsWith('lab-')) {
    throw new Error(`${r.id}: rasterPatch must be lab-*`)
  }
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    Object.prototype.hasOwnProperty.call(r, 'svgRootRound') ? `@${String(r.svgRootRound)}` : 'unset',
    r.labLoadPipeline ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-active.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Lab toCanvas wave4 — forked toCanvas modules (tc-lab-w4-fk-001..050).
 * Raster forks: smooth-off, desync, double-draw, wait-200, natural-dims.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-fk-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const PATCHES = /** @type {const} */ ([
  'lab-toCanvas-smooth-off',
  'lab-toCanvas-desync',
  'lab-toCanvas-double-draw',
  'lab-toCanvas-wait-200',
  'lab-toCanvas-natural-dims',
])

const ROUNDS = /** @type {const} */ ([undefined, 'integer-viewbox', 'round-dims', 'int-floor'])
const INJECTS = /** @type {const} */ (['both', 'raster'])
const MPS = /** @type {const} */ ([undefined, 'decode-interval-prototype', 'createImageBitmap-high'])
const CSS_VARIANTS = [
  FO_BASELINE_CSS,
  FO_BASELINE_CSS + 'svg{overflow:visible}',
  FO_BASELINE_CSS + 'foreignObject{overflow:visible}',
  FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important}',
  FO_BASELINE_CSS + 'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = Array.from({ length: 50 }, (_x, i) => {
  const n = i + 1
  const num = String(n).padStart(3, '0')
  const rasterPatch = PATCHES[i % PATCHES.length]
  const svgRootRound = ROUNDS[Math.floor(i / PATCHES.length) % ROUNDS.length]
  const inject = INJECTS[i % INJECTS.length]
  const monkeypatch = MPS[Math.floor(i / 10) % MPS.length]
  const css = CSS_VARIANTS[Math.floor(i / 5) % CSS_VARIANTS.length]

  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const r = {
    id: `tc-lab-w4-fk-${num}`,
    label: `tc-lab-w4-fk #${n}: ${rasterPatch}`,
    idea: `Wave4 toCanvas fork module — ${rasterPatch} (one customization), with light structural variations.`,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    rasterPatch,
    notes: `wave4 toCanvas fork: ${rasterPatch}; no text bypass.`,
  }
  if (svgRootRound) r.svgRootRound = svgRootRound
  if (monkeypatch) r.monkeypatch = monkeypatch
  return r
})

if (RECIPES.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-wave4-forks.js: expected 50 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.svgRootRound ?? '',
    Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : r.monkeypatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-forks.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


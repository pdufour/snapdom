/**
 * Wave-6 shadow lab-toCanvas recipes — tc-lab-w6sh-001..040.
 *
 * Focus:
 * - Canvas2D shadowBlur/shadowColor/shadowOffsetX/shadowOffsetY (if it impacts FO raster blit).
 * - SVG/FO filter pre-patch combos + CSS `filter: drop-shadow(...)`.
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6sh-*'
 * Merge:
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const FO = FO_BASELINE_CSS
const DROP = 'foreignObject *{filter:drop-shadow(0 1px 2px rgba(0,0,0,0.25))!important}'

/** @typedef {{ id: string, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} Spec */

/** @type {{ id: string, label: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SHADOW_VARIANTS = [
  { id: 'none', label: 'none', extra: {} },
  { id: 'soft', label: 'shadow soft', extra: { monkeypatch: 'tc-lab-w6-shadow-soft' } },
  { id: 'soft-red', label: 'shadow soft red', extra: { monkeypatch: 'tc-lab-w6-shadow-soft-red' } },
  { id: 'blur-1', label: 'shadow blur 1', extra: { monkeypatch: 'tc-lab-w6-shadow-blur-1' } },
  { id: 'blur-4', label: 'shadow blur 4', extra: { monkeypatch: 'tc-lab-w6-shadow-blur-4' } },
  { id: 'off-0-0', label: 'shadow offset 0,0', extra: { monkeypatch: 'tc-lab-w6-shadow-offset-0-0' } },
  { id: 'off-1-0', label: 'shadow offset 1,0', extra: { monkeypatch: 'tc-lab-w6-shadow-offset-1-0' } },
  { id: 'off-2-2', label: 'shadow offset 2,2', extra: { monkeypatch: 'tc-lab-w6-shadow-offset-2-2' } },
  { id: 'mp-rotate90', label: 'w6 rotate 90', extra: { monkeypatch: 'tc-lab-w6-rotate-90-center' } },
  { id: 'mp-aspect-fit', label: 'w6 aspect fit', extra: { monkeypatch: 'tc-lab-w6-aspect-matrix-fit' } },
]

/** @type {{ id: string, label: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SVG_VARIANTS = [
  { id: 'base', label: 'FO baseline', extra: { css: FO } },
  { id: 'drop', label: 'FO + drop-shadow css', extra: { css: FO + DROP } },
  { id: 'drop-empty', label: 'drop-shadow + filter-empty-nop', extra: { css: FO + DROP, foSvgPatch: 'filter-empty-nop' } },
  { id: 'drop-noop', label: 'drop-shadow + filter-noop-defs', extra: { css: FO + DROP, foSvgPatch: 'filter-noop-defs' } },
]

/** @type {Spec[]} */
const SPECS = []
let n = 1
for (const sh of SHADOW_VARIANTS) {
  for (const sv of SVG_VARIANTS) {
    SPECS.push({
      id: `${sh.id}-${sv.id}`,
      slug: `${sh.label} + ${sv.label}`,
      idea: `lab-toCanvas wave6 shadow: ${sh.label}; svg: ${sv.label}`,
      extra: {
        inject: 'raster',
        rasterPatch: 'lab-toCanvas',
        category: 'tocanvas',
        active: true,
        ...sv.extra,
        ...sh.extra,
      },
    })
    n++
  }
}

if (SPECS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-shadow.js: expected 40 specs, got ${SPECS.length}`,
  )
}

/** @param {import('../fo-fix-recipe-shared.js').FoFixRecipe} r */
function recipeKey(r) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join('|') : (r.monkeypatch ?? '')
  return [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
  ].join('\0')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, idx) => {
  const num = String(idx + 1).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6sh-${num}`,
    label: `tc-lab-w6sh #${idx + 1}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    rasterPatch: 'lab-toCanvas',
    notes: `Wave6 canvas shadow probes + SVG drop-shadow pre-patches; ${spec.slug}; no text bypass.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const key = recipeKey(r)
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-shadow.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


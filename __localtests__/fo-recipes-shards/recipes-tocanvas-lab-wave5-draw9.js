/**
 * Lab toCanvas wave5 — 9-arg drawImage + viewBox frac stash (tc-lab-w5-d9-001..065).
 * rasterPatch: lab-toCanvas-frac → fo-fix-toCanvas-frac-draw.js (labToCanvasOpts.draw9Frac).
 * Pre-raster: math-floor-viewbox-stash-frac / h2-fo-percent-int-viewbox (+ optional int-vb).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-d9-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'
import { LAB_DRAW9_FRAC_MODES } from '../fo-fix-toCanvas-draw-fit.js'

/** @type {{ key: string, label: string, css: string, radicalPatch?: string, svgRootRound?: string }} */
const STASH_STACKS = [
  {
    key: 'math-floor',
    label: 'math-floor-viewbox-stash-frac',
    css: '',
    radicalPatch: 'math-floor-viewbox-stash-frac',
  },
  {
    key: 'h2-percent',
    label: 'h2-fo-percent-int-viewbox',
    css: FO_BASELINE_CSS,
    radicalPatch: 'h2-fo-percent-int-viewbox',
  },
  {
    key: 'math-int-vb',
    label: 'math-floor stash + integer-viewbox',
    css: FO_BASELINE_CSS,
    radicalPatch: 'math-floor-viewbox-stash-frac',
    svgRootRound: 'integer-viewbox',
  },
  {
    key: 'percent-math',
    label: 'h2-percent + math-floor stash (half-leading composite)',
    css: H2_RASTER_NORMALIZE_CSS,
    radicalPatch: 'math-half-leading-with-floor-viewbox',
  },
  {
    key: 'math-h2',
    label: 'math-floor stash + H2 normalize CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    radicalPatch: 'math-floor-viewbox-stash-frac',
  },
]

if (LAB_DRAW9_FRAC_MODES.length * STASH_STACKS.length !== 65) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-draw9.js: expected 65 specs (${LAB_DRAW9_FRAC_MODES.length}×${STASH_STACKS.length}), got ${LAB_DRAW9_FRAC_MODES.length * STASH_STACKS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []
let n = 0
for (const stack of STASH_STACKS) {
  for (const draw9Frac of LAB_DRAW9_FRAC_MODES) {
    n += 1
    const num = String(n).padStart(3, '0')
    const slug = `${draw9Frac} / ${stack.key}`
    /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
    const recipe = {
      id: `tc-lab-w5-d9-${num}`,
      label: `tc-lab-w5-d9 #${n}: ${slug}`,
      idea: `lab-toCanvas-frac 9-arg draw9Frac=${draw9Frac} + ${stack.label} — fractional sx/sy/sw/sh and dest offsets from viewBox frac stash`,
      css: stack.css,
      inject: 'both',
      rasterPatch: 'lab-toCanvas-frac',
      category: 'tocanvas',
      active: true,
      labToCanvasOpts: { draw9Frac, useFracDraw: true },
      notes: `Wave5 draw9 probe; ${slug}; FO raster only — no text bypass.`,
    }
    if (stack.radicalPatch) recipe.radicalPatch = /** @type {import('../fo-fix-recipe-shared.js').FoFixRadicalPatch} */ (stack.radicalPatch)
    if (stack.svgRootRound) {
      recipe.svgRootRound = /** @type {import('../fo-fix-recipe-shared.js').FoFixSvgRootRound} */ (stack.svgRootRound)
    }
    RECIPES.push(recipe)
  }
}

if (RECIPES.length !== 65) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-draw9.js: expected 65 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas-frac') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas-frac`)
  }
  const key = [
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.css,
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-draw9.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

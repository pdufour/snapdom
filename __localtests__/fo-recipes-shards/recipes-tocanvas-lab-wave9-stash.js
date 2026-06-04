/**
 * Lab toCanvas wave9 — recipe meta stash for viewBox frac + measured dims passed runner→fork.
 * IDs: tc-lab-w9-stash-001..070
 *
 * Focus: lab-toCanvas-frac harness paths (viewBox frac stash via radicalPatch) combined with
 * toCanvasHarness meta/w/h overrides to validate runner→fork metadata plumbing.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-stash-*'
 *
 * FO raster only — no text bypass. No src/ promotion.
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'
import { LAB_DRAW_FIT_MODES } from '../fo-fix-toCanvas-draw-fit.js'

/** @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe */

/** Keep this wave narrow: one fit mode (fill) + stash/meta permutations. */
const DRAW_FIT = /** @type {import('../fo-fix-toCanvas-draw-fit.js').LabDrawFitMode} */ (
  LAB_DRAW_FIT_MODES.includes('fill') ? 'fill' : LAB_DRAW_FIT_MODES[0]
)

/** @type {{ key: string, label: string, css: string, radicalPatch: import('../fo-fix-recipe-shared.js').FoFixRadicalPatch, svgRootRound?: import('../fo-fix-recipe-shared.js').FoFixSvgRootRound }[]} */
const STASH_STACKS = [
  {
    key: 'math-floor',
    label: 'math-floor-viewbox-stash-frac (no extra CSS)',
    css: '',
    radicalPatch: 'math-floor-viewbox-stash-frac',
  },
  {
    key: 'math-floor-fo',
    label: 'math-floor-viewbox-stash-frac + FO_BASELINE_CSS',
    css: FO_BASELINE_CSS,
    radicalPatch: 'math-floor-viewbox-stash-frac',
  },
  {
    key: 'math-floor-h2',
    label: 'math-floor-viewbox-stash-frac + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    radicalPatch: 'math-floor-viewbox-stash-frac',
  },
  {
    key: 'math-int-vb',
    label: 'math-floor stash + integer-viewbox',
    css: FO_BASELINE_CSS,
    radicalPatch: 'math-floor-viewbox-stash-frac',
    svgRootRound: 'integer-viewbox',
  },
  {
    key: 'half-leading',
    label: 'math-half-leading-with-floor-viewbox (composite stash)',
    css: H2_RASTER_NORMALIZE_CSS,
    radicalPatch: 'math-half-leading-with-floor-viewbox',
  },
  {
    key: 'h2-percent',
    label: 'h2-fo-percent-int-viewbox (frac source without floor-stash)',
    css: FO_BASELINE_CSS,
    radicalPatch: 'h2-fo-percent-int-viewbox',
  },
  {
    key: 'h2-percent-int-vb',
    label: 'h2-percent + integer-viewbox',
    css: FO_BASELINE_CSS,
    radicalPatch: 'h2-fo-percent-int-viewbox',
    svgRootRound: 'integer-viewbox',
  },
]

/**
 * Harness variants: exercise which measured dims become optW/optH vs refW/refH.
 * The intent is to validate runner→fork meta plumbing (w0/h0, targetW/H).
 *
 * NOTE: viewBox frac stash is provided by the radicalPatch stack above; toCanvas uses
 * parseH2ViewBoxFrac(meta,url) (url data attrs) for the actual fractional shift.
 *
 * @type {{ key: string, label: string, harness: NonNullable<FoFixRecipe['toCanvasHarness']> }[]}
 */
const HARNESS = [
  {
    key: 'dims+parsed',
    label: 'optW/optH=dims; meta.w0/h0=parsed',
    harness: { width: 'dims', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
  },
  {
    key: 'dims+target',
    label: 'optW/optH=dims; meta.w0/h0=target',
    harness: { width: 'dims', height: 'dims', meta: { w0: 'target', h0: 'target' } },
  },
  {
    key: 'dims+css',
    label: 'optW/optH=dims; meta.w0/h0=css',
    harness: { width: 'dims', height: 'dims', meta: { w0: 'css', h0: 'css' } },
  },
  {
    key: 'omit+omit',
    label: 'optW/optH omitted; meta.w0/h0 omitted (natural ref)',
    harness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
  },
  {
    key: 'w-only+parsed',
    label: 'optW=dims; optH omitted; ref from parsed meta',
    harness: { width: 'dims', height: 'omit', meta: { w0: 'parsed', h0: 'parsed' } },
  },
  {
    key: 'h-only+parsed',
    label: 'optH=dims; optW omitted; ref from parsed meta',
    harness: { width: 'omit', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
  },
  {
    key: 'w-only+targetH',
    label: 'optW=dims; optH omitted; refH from targetH',
    harness: { width: 'dims', height: 'omit', meta: { w0: 'parsed', h0: 'target' } },
  },
  {
    key: 'h-only+targetW',
    label: 'optH=dims; optW omitted; refW from targetW',
    harness: { width: 'omit', height: 'dims', meta: { w0: 'target', h0: 'parsed' } },
  },
  {
    key: 'swap-dims',
    label: 'swapDims (probe width/height plumbing)',
    harness: {
      width: 'dims',
      height: 'dims',
      swapDims: true,
      meta: { w0: 'parsed', h0: 'parsed' },
    },
  },
  {
    key: 'swap-meta',
    label: 'swapMeta (probe w0/h0 plumbing)',
    harness: {
      width: 'dims',
      height: 'dims',
      swapMeta: true,
      meta: { w0: 'parsed', h0: 'parsed' },
    },
  },
]

if (STASH_STACKS.length * HARNESS.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-stash.js: expected 70 specs (${STASH_STACKS.length}×${HARNESS.length}), got ${STASH_STACKS.length * HARNESS.length}`,
  )
}

/** @type {FoFixRecipe[]} */
const RECIPES = []
let n = 0

for (const stack of STASH_STACKS) {
  for (const h of HARNESS) {
    n += 1
    const num = String(n).padStart(3, '0')
    const slug = `${stack.key} / ${h.key}`
    /** @type {FoFixRecipe} */
    const recipe = {
      id: `tc-lab-w9-stash-${num}`,
      label: `tc-lab-w9-stash #${n}: ${slug}`,
      idea:
        `lab-toCanvas-frac + ${stack.label}; ` +
        `${h.label}; ` +
        `viewBox frac from stash (data-h2-frac-*) and/or viewBox origin; measured dims/meta passed runner→fork.`,
      css: stack.css,
      inject: 'both',
      rasterPatch: 'lab-toCanvas-frac',
      category: 'tocanvas-custom',
      active: true,
      radicalPatch: stack.radicalPatch,
      toCanvasHarness: h.harness,
      labToCanvasOpts: { drawFit: DRAW_FIT, useFracDraw: true },
      notes: `Wave9 stash probe; ${slug}; FO raster only — no text bypass.`,
    }
    if (stack.svgRootRound) recipe.svgRootRound = stack.svgRootRound
    RECIPES.push(recipe)
  }
}

if (RECIPES.length !== 70) {
  throw new Error(`recipes-tocanvas-lab-wave9-stash.js: expected 70 recipes, got ${RECIPES.length}`)
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
    JSON.stringify(r.toCanvasHarness ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-stash.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Lab toCanvas wave-5 — recipeFlags sweep (runner → fo-fix-toCanvas.js).
 * 40 recipes: tc-lab-w5-flg-001..040 = 5 flag sets × 8 structural CSS combos.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-flg-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const COMBOS = [
  {
    slug: 'raster-only',
    idea: 'lab-toCanvas — raster inject only (no capture CSS patch)',
    extra: { inject: 'raster' },
  },
  {
    slug: 'FO baseline both',
    idea: 'FO_BASELINE_CSS at capture+raster (inject both)',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'integer-viewbox',
    idea: 'integer-viewbox snap before lab toCanvas draw',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'round-dims',
    idea: 'round-dims root width/height snap',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'round-dims' },
  },
  {
    slug: 'int-floor',
    idea: 'int-floor root dims before lab toCanvas',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'int-floor' },
  },
  {
    slug: 'H2 raster normalize',
    idea: 'H2_RASTER_NORMALIZE_CSS structural FO block',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'int-vb + H2 normalize',
    idea: 'integer-viewbox + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'Chromium copy',
    idea: 'FO baseline + Chromium font-kerning / smoothing copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },
]

if (COMBOS.length !== 8) {
  throw new Error(`recipes-tocanvas-lab-wave5-flags.js: expected 8 combos, got ${COMBOS.length}`)
}

/** @type {{ slug: string, idea: string, recipeFlags: import('../fo-fix-recipe-shared.js').RecipeFlags, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const FLAG_SETS = [
  {
    slug: 'smooth-off',
    idea: 'Force ctx.imageSmoothingEnabled = false',
    recipeFlags: { smooth: false },
  },
  {
    slug: 'alpha-099',
    idea: 'Force ctx.globalAlpha = 0.99',
    recipeFlags: { alpha: 0.99 },
  },
  {
    slug: 'wait-100ms',
    idea: 'Wait 100ms after decode before draw',
    recipeFlags: { waitMs: 100 },
  },
  {
    slug: 'round-draw',
    idea: 'Round drawImage dest width/height',
    recipeFlags: { roundDraw: true },
  },
  {
    slug: 'natural-dims',
    idea: 'Ignore harness width/height and use natural image dims',
    recipeFlags: { useNaturalDims: true },
  },
]

if (FLAG_SETS.length !== 5) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-flags.js: expected 5 flag sets, got ${FLAG_SETS.length}`,
  )
}

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe>, recipeFlags: import('../fo-fix-recipe-shared.js').RecipeFlags }[]} */
const SPECS = []
let n = 0
for (const fs of FLAG_SETS) {
  for (const combo of COMBOS) {
    n += 1
    SPECS.push({
      n,
      slug: `${fs.slug} ${combo.slug}`,
      idea: `${fs.idea} — ${combo.idea}`,
      css: combo.css,
      extra: combo.extra,
      recipeFlags: fs.recipeFlags,
    })
  }
}

if (SPECS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-flags.js: expected 40 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 40) {
  throw new Error('recipes-tocanvas-lab-wave5-flags.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra, recipeFlags } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w5-flg-${num}`,
    label: `tc-lab-w5-flg #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    recipeFlags,
    notes: `Wave-5 recipeFlags sweep; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-flags.js: expected 40 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.svgRootRound ?? '',
    r.radicalPatch ?? '',
    r.css,
    JSON.stringify(r.recipeFlags ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-flags.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Lab toCanvas wave-5 — decode wait sweep (drawImageInterval after decode).
 * 80 recipes: tc-lab-w5-int-001..080 = 10 waits × 8 structural CSS combos.
 * rasterPatch: lab-wait-{0,1,16,33,50,100,150,200,300,500}ms → fo-fix-toCanvas.js via runner.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-int-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const WAIT_MS = [0, 1, 16, 33, 50, 100, 150, 200, 300, 500]

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
  throw new Error(`recipes-tocanvas-lab-wave5-interval.js: expected 8 combos, got ${COMBOS.length}`)
}

/** @type {{ n: number, slug: string, idea: string, css?: string, rasterPatch: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const wait of WAIT_MS) {
  const rasterPatch = `lab-wait-${wait}ms`
  for (const combo of COMBOS) {
    n += 1
    SPECS.push({
      n,
      slug: `${rasterPatch} ${combo.slug}`,
      idea: `lab-toCanvas decode wait ${wait}ms after img.decode — ${combo.idea}`,
      css: combo.css,
      rasterPatch,
      extra: combo.extra,
    })
  }
}

if (SPECS.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-interval.js: expected 80 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 80) {
  throw new Error('recipes-tocanvas-lab-wave5-interval.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra, rasterPatch } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w5-int-${num}`,
    label: `tc-lab-w5-int #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave-5 decode wait sweep; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-interval.js: expected 80 recipes, got ${RECIPES.length}`,
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
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-interval.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

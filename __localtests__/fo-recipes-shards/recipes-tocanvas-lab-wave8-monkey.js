/**
 * Lab toCanvas wave 8 — monkeypatch probe matrix (tc-lab-w8-mky-001..090).
 * Each recipe: rasterPatch lab-toCanvas + exactly one tc-lab-w8-mp-* runtime patch.
 *
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-mky-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {readonly string[]} */
const W8_MP_IDS = [
  'tc-lab-w8-mp-draw-image-round-all',
  'tc-lab-w8-mp-draw-image-ceil-all',
  'tc-lab-w8-mp-draw-image-floor-dest-y',
  'tc-lab-w8-mp-draw-image-smoothing-off',
  'tc-lab-w8-mp-canvas-backing-ceil',
  'tc-lab-w8-mp-canvas-backing-floor',
  'tc-lab-w8-mp-canvas-backing-round',
  'tc-lab-w8-mp-decode-interval-delay',
  'tc-lab-w8-mp-decode-interval-prototype',
  'tc-lab-w8-mp-decode-wrap',
  'tc-lab-w8-mp-decode-safari-raf',
  'tc-lab-w8-mp-decode-twice',
  'tc-lab-w8-mp-ctx-transform-reset-draw',
  'tc-lab-w8-mp-measure-text-prime-draw',
  'tc-lab-w8-mp-create-image-bitmap-high',
  'tc-lab-w8-mp-ctx-copy',
  'tc-lab-w8-mp-ctx-copy-clear',
  'tc-lab-w8-mp-ctx-alpha-false',
  'tc-lab-w8-mp-ctx-alpha-false-copy',
  'tc-lab-w8-mp-ctx-premultiply-none',
  'tc-lab-w8-mp-ctx-premultiply-premultiply',
  'tc-lab-w8-mp-ctx-premultiply-none-alpha-false',
  'tc-lab-w8-mp-ctx-reset-transform-draw',
  'tc-lab-w8-mp-ctx-reset-transform-smooth-off',
  'tc-lab-w8-mp-getContext-will-read-proto',
  'tc-lab-w8-mp-w6-translate-half',
  'tc-lab-w8-mp-w6-translate-neg-half',
  'tc-lab-w8-mp-w6-aspect-matrix-fit',
  'tc-lab-w8-mp-w4-offscreen-transfer',
  'tc-lab-w8-mp-w4-bitmaprenderer-transfer',
]

/** @type {readonly { slug: string, css?: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const VARIANTS = [
  {
    slug: 'bare',
    css: '',
    extra: { inject: 'both' },
  },
  {
    slug: 'fo-baseline',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'integer-viewbox',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
]

/** @type {{ mp: string, mpLabel: string, variant: typeof VARIANTS[number], n: number }[]} */
const SPECS = []
let n = 0
for (const mp of W8_MP_IDS) {
  const mpLabel = mp.replace(/^tc-lab-w8-mp-/, '')
  for (const variant of VARIANTS) {
    n += 1
    SPECS.push({ mp, mpLabel, variant, n })
  }
}

if (SPECS.length !== 90) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-monkey.js: expected 90 specs, got ${SPECS.length}`,
  )
}

if (W8_MP_IDS.length !== 30) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-monkey.js: expected 30 monkeypatch ids, got ${W8_MP_IDS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { mp, mpLabel, variant } = spec
  const slug = `${mpLabel} ${variant.slug}`
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w8-mky-${num}`,
    label: `tc-lab-w8-mky #${spec.n}: ${slug}`,
    idea: `lab-toCanvas + monkeypatch ${mp} (${variant.slug})`,
    css: variant.css ?? '',
    inject: variant.extra?.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave-8 lab toCanvas MP probe; ${slug}; FO raster only — no text bypass.`,
    ...variant.extra,
    monkeypatch: mp,
  }
})

if (RECIPES.length !== 90) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-monkey.js: expected 90 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave8-monkey.js: duplicate id ${r.id}`)
  }
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const mp = r.monkeypatch ?? r.monkeyPatch
  if (!mp || !W8_MP_IDS.includes(String(mp))) {
    throw new Error(`${r.id}: must use exactly one tc-lab-w8-mp-* monkeypatch`)
  }
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch,
    r.monkeypatch ?? '',
    r.inject,
    r.svgRootRound ?? '',
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave8-monkey.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export { W8_MP_IDS }
export default FO_FIX_RECIPES_SHARD


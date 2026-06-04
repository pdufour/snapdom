/**
 * Lab toCanvas + tc-lab-mp-* monkeypatch matrix — tc-lab-pls-001..045.
 * Each recipe: rasterPatch lab-toCanvas + exactly one tc-lab-mp-* runtime patch.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-pls-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {readonly string[]} */
const LAB_MP_IDS = [
  'tc-lab-mp-draw-image-round-all',
  'tc-lab-mp-draw-image-ceil-all',
  'tc-lab-mp-draw-image-floor-dest-y',
  'tc-lab-mp-draw-image-smoothing-off',
  'tc-lab-mp-canvas-backing-ceil',
  'tc-lab-mp-canvas-backing-floor',
  'tc-lab-mp-canvas-backing-round',
  'tc-lab-mp-decode-interval-delay',
  'tc-lab-mp-decode-interval-prototype',
  'tc-lab-mp-decode-wrap',
  'tc-lab-mp-decode-safari-raf',
  'tc-lab-mp-decode-twice',
  'tc-lab-mp-ctx-transform-reset-draw',
  'tc-lab-mp-measure-text-prime-draw',
  'tc-lab-mp-create-image-bitmap-high',
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

/** @type {{ mp: string, mpLabel: string, variant: typeof VARIANTS[number] }[]} */
const SPECS = []
let n = 0
for (const mp of LAB_MP_IDS) {
  const mpLabel = mp.replace(/^tc-lab-mp-/, '')
  for (const variant of VARIANTS) {
    n += 1
    SPECS.push({ mp, mpLabel, variant, n })
  }
}

if (SPECS.length !== 45) {
  throw new Error(
    `recipes-tocanvas-lab-plus-monkeypatch.js: expected 45 specs, got ${SPECS.length}`,
  )
}

if (LAB_MP_IDS.length !== 15) {
  throw new Error(
    `recipes-tocanvas-lab-plus-monkeypatch.js: expected 15 monkeypatch ids, got ${LAB_MP_IDS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { mp, mpLabel, variant } = spec
  const slug = `${mpLabel} ${variant.slug}`
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-pls-${num}`,
    label: `tc-lab-pls #${spec.n}: ${slug}`,
    idea: `lab-toCanvas + monkeypatch ${mp} (${variant.slug})`,
    css: variant.css ?? '',
    inject: variant.extra?.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Lab toCanvas canvas MP probe; ${slug}; FO raster only — no text bypass.`,
    ...variant.extra,
    monkeypatch: mp,
  }
})

if (RECIPES.length !== 45) {
  throw new Error(
    `recipes-tocanvas-lab-plus-monkeypatch.js: expected 45 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-plus-monkeypatch.js: duplicate id ${r.id}`)
  }
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const mp = r.monkeypatch ?? r.monkeyPatch
  if (!mp || !LAB_MP_IDS.includes(String(mp))) {
    throw new Error(`${r.id}: must use exactly one tc-lab-mp-* monkeypatch`)
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
    throw new Error(`recipes-tocanvas-lab-plus-monkeypatch.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export { LAB_MP_IDS }
export default FO_FIX_RECIPES_SHARD

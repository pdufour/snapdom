/**
 * Lab toCanvas wave-5 monkeypatch matrix — tc-lab-w5m-001..060.
 * Each recipe: rasterPatch lab-toCanvas + exactly one tc-lab-w5-mp-* runtime patch.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5m-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {readonly string[]} */
export const LAB_W5_MP_IDS = [
  'tc-lab-w5-mp-draw-image-floor-all',
  'tc-lab-w5-mp-draw-image-round-dest-rect',
  'tc-lab-w5-mp-draw-image-ceil-dest-rect',
  'tc-lab-w5-mp-draw-image-floor-dest-rect',
  'tc-lab-w5-mp-draw-image-smoothing-high',
  'tc-lab-w5-mp-draw-image-alpha-one',
  'tc-lab-w5-mp-get-context-will-read',
  'tc-lab-w5-mp-fonts-ready-decode',
  'tc-lab-w5-mp-double-raf-decode',
  'tc-lab-w5-mp-decode-microtask-flush',
  'tc-lab-w5-mp-lab-two-stage',
  'tc-lab-w5-mp-lab-h2-frac-draw',
  'tc-lab-w5-mp-lab-device-grid-floor',
  'tc-lab-w5-mp-lab-create-image-bitmap',
  'tc-lab-w5-mp-lab-create-image-bitmap-pixelated',
  'tc-lab-w5-mp-lab-supersample-2x',
  'tc-lab-w5-mp-lab-ctx-smoothing-off',
  'tc-lab-w5-mp-lab-ctx-smoothing-high',
  'tc-lab-w5-mp-lab-ctx-reset-transform',
  'tc-lab-w5-mp-lab-ctx-will-read',
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

/** @type {{ mp: string, mpLabel: string, variant: (typeof VARIANTS)[number], n: number }[]} */
const SPECS = []
let n = 0
for (const mp of LAB_W5_MP_IDS) {
  const mpLabel = mp.replace(/^tc-lab-w5-mp-/, '')
  for (const variant of VARIANTS) {
    n += 1
    SPECS.push({ mp, mpLabel, variant, n })
  }
}

if (SPECS.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-monkey.js: expected 60 specs, got ${SPECS.length}`,
  )
}

if (LAB_W5_MP_IDS.length !== 20) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-monkey.js: expected 20 monkeypatch ids, got ${LAB_W5_MP_IDS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { mp, mpLabel, variant } = spec
  const slug = `${mpLabel} ${variant.slug}`
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w5m-${num}`,
    label: `tc-lab-w5m #${spec.n}: ${slug}`,
    idea: `lab-toCanvas + monkeypatch ${mp} (${variant.slug})`,
    css: variant.css ?? '',
    inject: variant.extra?.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    monkeypatch: mp,
    category: 'tocanvas',
    active: true,
    notes: `Wave5 lab toCanvas MP probe; ${slug}; FO raster only — no text bypass.`,
    ...variant.extra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-monkey.js: expected 60 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave5-monkey.js: duplicate id ${r.id}`)
  }
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const mp = r.monkeypatch ?? r.monkeyPatch
  if (!mp || !LAB_W5_MP_IDS.includes(String(mp))) {
    throw new Error(`${r.id}: must use exactly one tc-lab-w5-mp-* monkeypatch`)
  }
  if (Array.isArray(mp)) {
    throw new Error(`${r.id}: must not stack multiple monkeypatches`)
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
    throw new Error(`recipes-tocanvas-lab-wave5-monkey.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

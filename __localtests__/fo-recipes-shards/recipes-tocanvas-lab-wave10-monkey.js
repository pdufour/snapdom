/**
 * Wave 10 — lab-toCanvas monkeypatch sweep (tc-lab-w10-monkey-001..150).
 * 50 monkeypatch ids × 3 structural variants (bare / FO_BASELINE / integer-viewbox).
 *
 * rasterPatch: lab-toCanvas
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-monkey-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {readonly string[]} */
const W10_MP_IDS = Array.from({ length: 50 }, (_, i) => `tc-lab-w10-mp-${String(i + 1).padStart(3, '0')}`)

/** @type {readonly { slug: string, css: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const VARIANTS = [
  { slug: 'bare', css: '', extra: { inject: 'both' } },
  { slug: 'fo-baseline', css: FO_BASELINE_CSS, extra: { inject: 'both' } },
  { slug: 'integer-viewbox', css: FO_BASELINE_CSS, extra: { inject: 'both', svgRootRound: 'integer-viewbox' } },
]

/** @type {{ mp: string, variant: typeof VARIANTS[number], n: number }[]} */
const SPECS = []
let n = 0
for (const mp of W10_MP_IDS) {
  for (const variant of VARIANTS) {
    n += 1
    SPECS.push({ mp, variant, n })
  }
}

if (W10_MP_IDS.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-wave10-monkey.js: expected 50 monkeypatch ids, got ${W10_MP_IDS.length}`)
}
if (SPECS.length !== 150) {
  throw new Error(`recipes-tocanvas-lab-wave10-monkey.js: expected 150 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const mpLabel = spec.mp.replace(/^tc-lab-w10-mp-/, 'mp-')
  const slug = `${mpLabel} ${spec.variant.slug}`
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w10-monkey-${num}`,
    label: `tc-lab-w10-monkey #${spec.n}: ${slug}`,
    idea: `lab-toCanvas + ${spec.mp} (${spec.variant.slug})`,
    css: spec.variant.css,
    inject: spec.variant.extra?.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Wave10 monkeypatch sweep; ${slug}; FO raster only — no text bypass.`,
    monkeypatch: spec.mp,
    ...spec.variant.extra,
  }
})

if (RECIPES.length !== 150) {
  throw new Error(`recipes-tocanvas-lab-wave10-monkey.js: expected 150 recipes, got ${RECIPES.length}`)
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave10-monkey.js: duplicate id ${r.id}`)
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  const mp = r.monkeypatch ?? r.monkeyPatch
  if (!mp || !W10_MP_IDS.includes(String(mp))) {
    throw new Error(`${r.id}: monkeypatch must be one of tc-lab-w10-mp-001..050`)
  }
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [r.rasterPatch, r.monkeypatch ?? '', r.inject, r.svgRootRound ?? '', r.css].join('\0')
  if (seenKeys.has(key)) throw new Error(`recipes-tocanvas-lab-wave10-monkey.js: duplicate recipe key at ${r.id}`)
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export { W10_MP_IDS }
export default FO_FIX_RECIPES_SHARD


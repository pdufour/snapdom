/**
 * Wave 9 — lab-toCanvas + tc-lab-w9-mp-* monkeypatch matrix.
 * 40 monkeypatch ids × 3 inject/CSS variants = 120 recipes.
 *
 * IDs: tc-lab-w9-monkey-001..120
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-monkey-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {readonly string[]} */
const W9_MP_IDS = [
  'tc-lab-w9-mp-001',
  'tc-lab-w9-mp-002',
  'tc-lab-w9-mp-003',
  'tc-lab-w9-mp-004',
  'tc-lab-w9-mp-005',
  'tc-lab-w9-mp-006',
  'tc-lab-w9-mp-007',
  'tc-lab-w9-mp-008',
  'tc-lab-w9-mp-009',
  'tc-lab-w9-mp-010',
  'tc-lab-w9-mp-011',
  'tc-lab-w9-mp-012',
  'tc-lab-w9-mp-013',
  'tc-lab-w9-mp-014',
  'tc-lab-w9-mp-015',
  'tc-lab-w9-mp-016',
  'tc-lab-w9-mp-017',
  'tc-lab-w9-mp-018',
  'tc-lab-w9-mp-019',
  'tc-lab-w9-mp-020',
  'tc-lab-w9-mp-021',
  'tc-lab-w9-mp-022',
  'tc-lab-w9-mp-023',
  'tc-lab-w9-mp-024',
  'tc-lab-w9-mp-025',
  'tc-lab-w9-mp-026',
  'tc-lab-w9-mp-027',
  'tc-lab-w9-mp-028',
  'tc-lab-w9-mp-029',
  'tc-lab-w9-mp-030',
  'tc-lab-w9-mp-031',
  'tc-lab-w9-mp-032',
  'tc-lab-w9-mp-033',
  'tc-lab-w9-mp-034',
  'tc-lab-w9-mp-035',
  'tc-lab-w9-mp-036',
  'tc-lab-w9-mp-037',
  'tc-lab-w9-mp-038',
  'tc-lab-w9-mp-039',
  'tc-lab-w9-mp-040',
]

if (W9_MP_IDS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-monkey.js: expected 40 monkeypatch ids, got ${W9_MP_IDS.length}`,
  )
}

/** @type {readonly { slug: string, css: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const VARIANTS = [
  { slug: 'bare', css: '', extra: { inject: 'both' } },
  { slug: 'fo-baseline', css: FO_BASELINE_CSS, extra: { inject: 'both' } },
  { slug: 'integer-viewbox', css: FO_BASELINE_CSS, extra: { inject: 'both', svgRootRound: 'integer-viewbox' } },
]

/** @type {{ mp: string, mpLabel: string, variant: typeof VARIANTS[number], n: number }[]} */
const SPECS = []
let n = 0
for (const mp of W9_MP_IDS) {
  const mpLabel = mp.replace(/^tc-lab-w9-mp-/, 'mp-')
  for (const variant of VARIANTS) {
    n += 1
    SPECS.push({ mp, mpLabel, variant, n })
  }
}

if (SPECS.length !== 120) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-monkey.js: expected 120 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { mp, mpLabel, variant } = spec
  const slug = `${mpLabel} ${variant.slug}`
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w9-monkey-${num}`,
    label: `w9 monkey #${spec.n}: ${slug}`,
    idea: `lab-toCanvas + monkeypatch ${mp} (${variant.slug})`,
    css: variant.css,
    inject: variant.extra.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave 9 toCanvas monkeypatch matrix; ${slug}; FO raster only — no text bypass.`,
    ...variant.extra,
    monkeypatch: mp,
  }
})

if (RECIPES.length !== 120) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-monkey.js: expected 120 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave9-monkey.js: duplicate id ${r.id}`)
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  if (r.inject !== 'both') throw new Error(`${r.id}: inject must be 'both'`)
  if (!r.monkeypatch || !W9_MP_IDS.includes(String(r.monkeypatch))) {
    throw new Error(`${r.id}: must use exactly one tc-lab-w9-mp-* monkeypatch`)
  }
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [r.rasterPatch, r.monkeypatch ?? '', r.inject, r.svgRootRound ?? '', r.css].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-monkey.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export { W9_MP_IDS }
export default FO_FIX_RECIPES_SHARD


/**
 * Lab toCanvas wave-6 — CORS and image attribute matrix (tc-lab-w6-cors-001..045).
 * crossOrigin anonymous/use-credentials, referrerPolicy, decoding async/sync, fetchPriority.
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js reads recipe.labToCanvasOpts.* image attrs.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-cors-*'
 */

/** @type {{ referrerPolicy: ReferrerPolicy | 'unset', fetchPriority: 'high'|'low'|'auto'|'unset' }[]} */
const POLICY = [
  { referrerPolicy: 'unset', fetchPriority: 'unset' },
  { referrerPolicy: 'no-referrer', fetchPriority: 'unset' },
  { referrerPolicy: 'origin', fetchPriority: 'high' },
  { referrerPolicy: 'strict-origin-when-cross-origin', fetchPriority: 'low' },
  { referrerPolicy: 'unsafe-url', fetchPriority: 'auto' },
]

/** @type {('anonymous'|'use-credentials'|'unset')[]} */
const CROSS_ORIGIN = ['anonymous', 'use-credentials', 'unset']

/** @type {('sync'|'async'|'unset')[]} */
const DECODING = ['sync', 'async', 'unset']

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const co of CROSS_ORIGIN) {
  for (const dec of DECODING) {
    for (const pol of POLICY) {
      n += 1
      const slug = `co:${co} dec:${dec} rp:${pol.referrerPolicy} fp:${pol.fetchPriority}`
      SPECS.push({
        n,
        slug,
        idea: `Lab toCanvas image attrs — crossOrigin=${co}, decoding=${dec}, referrerPolicy=${pol.referrerPolicy}, fetchPriority=${pol.fetchPriority}`,
        extra: {
          inject: 'raster',
          rasterPatch: 'lab-toCanvas',
          labToCanvasOpts: {
            imageCrossOrigin: co,
            imageDecoding: dec,
            imageReferrerPolicy: pol.referrerPolicy,
            imageFetchPriority: pol.fetchPriority,
          },
        },
      })
    }
  }
}

if (SPECS.length !== 45) {
  throw new Error(`recipes-tocanvas-lab-wave6-cors.js: expected 45 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6-cors-${num}`,
    label: `tc-lab-w6-cors #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: '',
    inject: spec.extra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 CORS + img attribute sweep; ${spec.slug}; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 45) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-cors.js: expected 45 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave6-cors.js: duplicate id ${r.id}`)
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-cors.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


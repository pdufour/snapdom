/**
 * Lab toCanvas wave4 — multipass drawImage (tc-lab-w4-mp-001..060).
 * 2–5 drawImage passes, clearRect between, per-pass globalAlpha, destination-over.
 * rasterPatch: lab-toCanvas + monkeypatch tc-lab-mp-multipass (radicalOptions.labMultipass).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-mp-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const MP_PATCH = 'tc-lab-mp-multipass'

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 */
function alphaRamp(n, a, b) {
  if (n <= 1) return [a]
  return Array.from({ length: n }, (_, i) => a + ((b - a) * i) / (n - 1))
}

/**
 * @param {number} passes
 * @returns {readonly { slug: string, idea: string, labMultipass: import('../fo-fix-recipe-shared.js').LabMultipassOpts, css?: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]}
 */
function variantsForPasses(passes) {
  const fill = (/** @type {number} */ v) => Array.from({ length: passes }, () => v)
  const destFrom = passes >= 3 ? 3 : 2
  return [
    {
      slug: `${passes}p clear α1`,
      idea: `${passes} drawImage passes, clearRect between, globalAlpha 1`,
      labMultipass: { passes, clearBetween: true, alphas: fill(1) },
    },
    {
      slug: `${passes}p clear α0.5`,
      idea: `${passes} passes + clearRect between + globalAlpha 0.5 each`,
      labMultipass: { passes, clearBetween: true, alphas: fill(0.5) },
    },
    {
      slug: `${passes}p clear α↓1→0.25`,
      idea: `${passes} passes, clearRect between, globalAlpha ramp 1→0.25`,
      labMultipass: { passes, clearBetween: true, alphas: alphaRamp(passes, 1, 0.25) },
    },
    {
      slug: `${passes}p clear α↑0.25→1`,
      idea: `${passes} passes, clearRect between, globalAlpha ramp 0.25→1`,
      labMultipass: { passes, clearBetween: true, alphas: alphaRamp(passes, 0.25, 1) },
    },
    {
      slug: `${passes}p clear dest-over p2 α1`,
      idea: `${passes} passes, clearRect between, destination-over from pass 2, α=1`,
      labMultipass: { passes, clearBetween: true, destOverFrom: 2, alphas: fill(1) },
    },
    {
      slug: `${passes}p clear dest-over last α0.75`,
      idea: `${passes} passes, clearRect between, destination-over on last pass, α=0.75`,
      labMultipass: { passes, clearBetween: true, destOverFrom: 'last', alphas: fill(0.75) },
    },
    {
      slug: `${passes}p clear dest-over p2+ α1`,
      idea: `${passes} passes, clearRect between, destination-over all-but-first, α=1`,
      labMultipass: { passes, clearBetween: true, destOverFrom: 'all-but-first', alphas: fill(1) },
    },
    {
      slug: `${passes}p stack α0.5 no clear`,
      idea: `${passes} stacked drawImage passes, globalAlpha 0.5, no clearRect between`,
      labMultipass: { passes, clearBetween: false, alphas: fill(0.5) },
    },
    {
      slug: `${passes}p stack α⅓ no clear`,
      idea: `${passes} stacked passes, globalAlpha ⅓ each, no clearRect between`,
      labMultipass: { passes, clearBetween: false, alphas: fill(1 / 3) },
    },
    {
      slug: `${passes}p clear dest-over p2 α↓`,
      idea: `${passes} passes, clearRect between, destination-over from pass 2, α ramp down`,
      labMultipass: {
        passes,
        clearBetween: true,
        destOverFrom: 2,
        alphas: alphaRamp(passes, 1, 0.25),
      },
    },
    {
      slug: `${passes}p clear zebra α`,
      idea: `${passes} passes, clearRect between, alternating globalAlpha 1 / 0.5`,
      labMultipass: {
        passes,
        clearBetween: true,
        alphas: Array.from({ length: passes }, (_, i) => (i % 2 === 0 ? 1 : 0.5)),
      },
    },
    {
      slug: `${passes}p clear α1 FO baseline`,
      idea: `${passes} multipass + FO_BASELINE_CSS at capture`,
      labMultipass: { passes, clearBetween: true, alphas: fill(1) },
      css: FO_BASELINE_CSS,
      extra: { inject: 'both' },
    },
    {
      slug: `${passes}p clear α0.5 int-vb`,
      idea: `${passes} multipass + integer-viewbox + FO baseline`,
      labMultipass: { passes, clearBetween: true, alphas: fill(0.5) },
      css: FO_BASELINE_CSS,
      extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
    },
    {
      slug: `${passes}p clearFirst dest-over p2`,
      idea: `${passes} passes, clearRect before first + between, destination-over from pass 2`,
      labMultipass: { passes, clearBetween: true, clearFirst: true, destOverFrom: 2, alphas: fill(1) },
    },
    {
      slug: `${passes}p clear dest-over p${destFrom}+ pulse α`,
      idea: `${passes} passes, clearRect between, destination-over from pass ${destFrom}, pulsed globalAlpha`,
      labMultipass: {
        passes,
        clearBetween: true,
        destOverFrom: destFrom,
        alphas: alphaRamp(passes, 0.35, 1),
      },
    },
  ]
}

/** @type {{ n: number, passes: number, slug: string, idea: string, labMultipass: import('../fo-fix-recipe-shared.js').LabMultipassOpts, css?: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const passes of [2, 3, 4, 5]) {
  for (const v of variantsForPasses(passes)) {
    n += 1
    SPECS.push({ n, passes, ...v })
  }
}

if (SPECS.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-multipass.js: expected 60 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { labMultipass, css, extra, slug, idea, passes } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4-mp-${num}`,
    label: `tc-lab-w4-mp #${spec.n}: ${slug}`,
    idea,
    css: css ?? '',
    inject: extra?.inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    monkeypatch: MP_PATCH,
    radicalOptions: { labMultipass },
    notes: `Wave4 multipass ${passes}p; ${slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-multipass.js: expected 60 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave4-multipass.js: duplicate id ${r.id}`)
  }
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  if (r.monkeypatch !== MP_PATCH) {
    throw new Error(`${r.id}: monkeypatch must be ${MP_PATCH}`)
  }
  const mp = r.radicalOptions?.labMultipass
  if (!mp?.passes || mp.passes < 2 || mp.passes > 5) {
    throw new Error(`${r.id}: labMultipass.passes must be 2..5`)
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
    JSON.stringify(r.radicalOptions?.labMultipass ?? null),
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-multipass.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export { MP_PATCH, SPECS }
export default FO_FIX_RECIPES_SHARD

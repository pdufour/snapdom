/**
 * Lab toCanvas wave-5 — getContext('2d') attribute sweep (alpha, desynchronized, willReadFrequently, colorSpace).
 * 60 recipes: tc-lab-w5-ctx-001..060 = 15 ctx combos × 4 structural CSS combos.
 * rasterPatch: lab-toCanvas → fo-fix-toCanvas.js buildGetContextAttributes + optional ctx MPs.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-ctx-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/**
 * @typedef {import('../fo-fix-toCanvas.js').LabToCanvasOpts} LabToCanvasOpts
 * @typedef {import('../fo-fix-toCanvas.js').LabToCanvasCtxOptions} LabToCanvasCtxOptions
 */

/**
 * @param {LabToCanvasOpts} opts
 * @returns {{ labToCanvasOpts: LabToCanvasOpts }}
 */
function ctxOpts(opts) {
  return { labToCanvasOpts: opts }
}

/**
 * @param {LabToCanvasCtxOptions} labCtx
 * @returns {{ labToCanvasCtx: LabToCanvasCtxOptions }}
 */
function ctxViaLabCtx(labCtx) {
  return { labToCanvasCtx: labCtx }
}

/** @type {{ slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const CTX_VARIANTS = [
  {
    slug: 'ctx-default',
    idea: 'getContext(2d) browser defaults — no alpha/desync/willRead/colorSpace attrs',
    extra: { ...ctxOpts({}) },
  },
  {
    slug: 'alpha-false',
    idea: 'getContext(2d, { alpha: false }) via labToCanvasOpts',
    extra: { ...ctxOpts({ alpha: false }) },
  },
  {
    slug: 'alpha-true',
    idea: 'getContext(2d, { alpha: true }) explicit via labToCanvasOpts',
    extra: { ...ctxOpts({ alpha: true }) },
  },
  {
    slug: 'desync-true',
    idea: 'getContext(2d, { desynchronized: true })',
    extra: { ...ctxOpts({ desynchronized: true }) },
  },
  {
    slug: 'desync-if-supported',
    idea: "getContext(2d, { desynchronized: true }) when probe succeeds — if-supported",
    extra: { ...ctxOpts({ desynchronized: 'if-supported' }) },
  },
  {
    slug: 'willRead-opts',
    idea: 'getContext(2d, { willReadFrequently: true }) via labToCanvasOpts',
    extra: { ...ctxOpts({ willReadFrequently: true }) },
  },
  {
    slug: 'colorSpace-srgb',
    idea: "getContext(2d, { colorSpace: 'srgb' })",
    extra: { ...ctxOpts({ colorSpace: 'srgb' }) },
  },
  {
    slug: 'colorSpace-display-p3',
    idea: "getContext(2d, { colorSpace: 'display-p3' })",
    extra: { ...ctxOpts({ colorSpace: 'display-p3' }) },
  },
  {
    slug: 'alpha-false+desync',
    idea: 'getContext alpha:false + desynchronized:true',
    extra: { ...ctxOpts({ alpha: false, desynchronized: true }) },
  },
  {
    slug: 'alpha-false+willRead',
    idea: 'getContext alpha:false + willReadFrequently:true',
    extra: { ...ctxOpts({ alpha: false, willReadFrequently: true }) },
  },
  {
    slug: 'willRead+desync',
    idea: 'getContext willReadFrequently:true + desynchronized:true',
    extra: { ...ctxOpts({ willReadFrequently: true, desynchronized: true }) },
  },
  {
    slug: 'alpha-false+willRead+desync+p3',
    idea: 'getContext quad — alpha:false, willRead, desync, display-p3',
    extra: {
      ...ctxOpts({
        alpha: false,
        willReadFrequently: true,
        desynchronized: true,
        colorSpace: 'display-p3',
      }),
    },
  },
  {
    slug: 'contextAlpha-false-labCtx',
    idea: 'getContext alpha:false via recipe labToCanvasCtx.contextAlpha (lab fork path)',
    extra: { ...ctxViaLabCtx({ contextAlpha: false }) },
  },
  {
    slug: 'willRead-labCtx',
    idea: 'getContext willReadFrequently:true via recipe labToCanvasCtx',
    extra: { ...ctxViaLabCtx({ willReadFrequently: true }) },
  },
  {
    slug: 'mp-getContext-will-read-proto',
    idea: 'HTMLCanvasElement.getContext prototype patch — force willReadFrequently on every 2d ctx',
    extra: { monkeypatch: 'tc-ctx-getContext-will-read-proto' },
  },
]

/** @type {{ slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const STRUCTURAL = [
  {
    slug: 'baseline both',
    idea: 'FO_BASELINE_CSS capture+raster',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'integer-viewbox',
    idea: 'integer-viewbox snap before lab toCanvas',
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
    slug: 'Chromium copy',
    idea: 'FO baseline + Chromium font-kerning / smoothing copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },
]

if (CTX_VARIANTS.length !== 15) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-ctx.js: expected 15 ctx variants, got ${CTX_VARIANTS.length}`,
  )
}
if (STRUCTURAL.length !== 4) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-ctx.js: expected 4 structural combos, got ${STRUCTURAL.length}`,
  )
}

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const ctx of CTX_VARIANTS) {
  for (const struct of STRUCTURAL) {
    n += 1
    SPECS.push({
      n,
      slug: `${ctx.slug} · ${struct.slug}`,
      idea: `lab-toCanvas getContext sweep — ${ctx.idea}; ${struct.idea}`,
      css: struct.css,
      extra: { ...struct.extra, ...ctx.extra },
    })
  }
}

if (SPECS.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-ctx.js: expected 60 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 60) {
  throw new Error('recipes-tocanvas-lab-wave5-ctx.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w5-ctx-${num}`,
    label: `tc-lab-w5-ctx #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave-5 getContext(2d) attrs; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-ctx.js: expected 60 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch,
    mp,
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-ctx.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

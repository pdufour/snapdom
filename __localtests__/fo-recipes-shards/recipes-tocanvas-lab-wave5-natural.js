/**
 * Lab toCanvas natural-dims wave 5 — tc-lab-w5-nat-001..055.
 * rasterPatch: lab-toCanvas-natural → __localtests__/fo-fix-toCanvas-natural-dims.js
 * Forces outW/outH per axis from naturalWidth/Height vs meta.w0/h0 vs harness opt.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-nat-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @typedef {import('../fo-fix-recipe-shared.js').LabToCanvasOpts} LabToCanvasOpts */

/** @type {readonly ('natural' | 'meta' | 'opt')[]} */
const AXIS_SOURCES = ['natural', 'meta', 'opt']

/** @type {readonly ('harness-css' | 'harness-device' | 'natural')[]} */
const OPT_DIMS_MODES = ['harness-css', 'harness-device', 'natural']

/** @type {{ slug: string, idea: string, labToCanvasOpts: LabToCanvasOpts, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []

for (const optDims of OPT_DIMS_MODES) {
  for (const outWFrom of AXIS_SOURCES) {
    for (const outHFrom of AXIS_SOURCES) {
      SPECS.push({
        slug: `outW=${outWFrom} outH=${outHFrom} optDims=${optDims}`,
        idea: `Force outW from ${outWFrom}, outH from ${outHFrom}; optDims=${optDims}`,
        labToCanvasOpts: { outWFrom, outHFrom, optDims },
      })
    }
  }
}

/** Partial harness opt: one axis from opt, other forced. */
const PARTIAL_FORCES = /** @type {const} */ ([
  { slug: 'optW-only outH natural', suppressOptH: true, outWFrom: 'opt', outHFrom: 'natural' },
  { slug: 'optW-only outH meta', suppressOptH: true, outWFrom: 'opt', outHFrom: 'meta' },
  { slug: 'optW-only outH inherit', suppressOptH: true, outWFrom: 'opt', outHFrom: 'inherit' },
  { slug: 'optH-only outW natural', suppressOptW: true, outWFrom: 'natural', outHFrom: 'opt' },
  { slug: 'optH-only outW meta', suppressOptW: true, outWFrom: 'meta', outHFrom: 'opt' },
  { slug: 'optH-only outW inherit', suppressOptW: true, outWFrom: 'inherit', outHFrom: 'opt' },
  { slug: 'cross natural×meta', outWFrom: 'natural', outHFrom: 'meta' },
  { slug: 'cross meta×natural', outWFrom: 'meta', outHFrom: 'natural' },
  { slug: 'cross opt×natural optDims natural', outWFrom: 'opt', outHFrom: 'natural', optDims: 'natural' },
])

for (const p of PARTIAL_FORCES) {
  const { slug, optDims = 'harness-css', ...dimOpts } = p
  SPECS.push({
    slug,
    idea: `Partial/cross dim probe: ${slug}`,
    labToCanvasOpts: { optDims, ...dimOpts },
  })
}

/** Structural pre-raster + dim leaders (integer-viewbox often shifts meta vs natural). */
const STRUCTURAL = [
  {
    slug: 'FO baseline outW meta outH opt',
    css: FO_BASELINE_CSS,
    labToCanvasOpts: { outWFrom: 'meta', outHFrom: 'opt', optDims: 'harness-css' },
    extra: { inject: 'both' },
  },
  {
    slug: 'integer-viewbox out natural',
    labToCanvasOpts: { outWFrom: 'natural', outHFrom: 'natural', optDims: 'harness-css' },
    extra: { inject: 'raster', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'integer-viewbox out meta',
    labToCanvasOpts: { outWFrom: 'meta', outHFrom: 'meta', optDims: 'harness-css' },
    extra: { inject: 'raster', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'integer-viewbox out opt',
    labToCanvasOpts: { outWFrom: 'opt', outHFrom: 'opt', optDims: 'harness-css' },
    extra: { inject: 'raster', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'round-dims out inherit',
    labToCanvasOpts: { outWFrom: 'inherit', outHFrom: 'inherit', optDims: 'harness-css' },
    extra: { inject: 'raster', svgRootRound: 'round-dims' },
  },
  {
    slug: 'int-floor out meta×opt',
    labToCanvasOpts: { outWFrom: 'meta', outHFrom: 'opt', optDims: 'harness-device' },
    extra: { inject: 'raster', svgRootRound: 'int-floor' },
  },
  {
    slug: 'FO baseline inherit cascade',
    css: FO_BASELINE_CSS,
    labToCanvasOpts: { outWFrom: 'inherit', outHFrom: 'inherit', optDims: 'harness-css' },
    extra: { inject: 'both' },
  },
  {
    slug: 'h2-percent-vb out natural',
    labToCanvasOpts: { outWFrom: 'natural', outHFrom: 'natural', optDims: 'harness-css' },
    extra: { inject: 'raster', radicalPatch: 'h2-fo-percent-int-viewbox' },
  },
  {
    slug: 'h2-percent-vb out opt',
    labToCanvasOpts: { outWFrom: 'opt', outHFrom: 'opt', optDims: 'harness-css' },
    extra: { inject: 'raster', radicalPatch: 'h2-fo-percent-int-viewbox' },
  },
  {
    slug: 'math-floor-vb out meta',
    labToCanvasOpts: { outWFrom: 'meta', outHFrom: 'meta', optDims: 'harness-css' },
    extra: { inject: 'raster', radicalPatch: 'math-floor-viewbox-stash-frac' },
  },
  {
    slug: 'FO+int-vb outW opt outH natural',
    css: FO_BASELINE_CSS,
    labToCanvasOpts: { outWFrom: 'opt', outHFrom: 'natural', optDims: 'harness-css' },
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'FO+int-vb outW natural outH opt',
    css: FO_BASELINE_CSS,
    labToCanvasOpts: { outWFrom: 'natural', outHFrom: 'opt', optDims: 'harness-css' },
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
]

for (const s of STRUCTURAL) {
  const cssExtra = s.css ? { css: s.css } : {}
  SPECS.push({
    slug: s.slug,
    idea: `Structural SVG + forced dims: ${s.slug}`,
    labToCanvasOpts: s.labToCanvasOpts,
    extra: { ...(s.extra ?? {}), ...cssExtra },
  })
}

/** Backing / DPR / style pixel probes with dim forcing. */
const BACKING = [
  {
    slug: 'backing-ceil out opt',
    labToCanvasOpts: {
      outWFrom: 'opt',
      outHFrom: 'opt',
      optDims: 'harness-css',
      backingRound: 'ceil',
    },
  },
  {
    slug: 'backing-floor out meta',
    labToCanvasOpts: {
      outWFrom: 'meta',
      outHFrom: 'meta',
      optDims: 'harness-css',
      backingRound: 'floor',
    },
  },
  {
    slug: 'backing-round out natural',
    labToCanvasOpts: {
      outWFrom: 'natural',
      outHFrom: 'natural',
      optDims: 'harness-css',
      backingRound: 'round',
    },
  },
  {
    slug: 'dpr device out opt',
    labToCanvasOpts: {
      outWFrom: 'opt',
      outHFrom: 'opt',
      optDims: 'harness-device',
      dprSource: 'device',
    },
  },
  {
    slug: 'style device px out meta',
    labToCanvasOpts: {
      outWFrom: 'meta',
      outHFrom: 'meta',
      optDims: 'harness-css',
      stylePixels: 'device',
    },
  },
  {
    slug: 'no ctxScale out inherit',
    labToCanvasOpts: {
      outWFrom: 'inherit',
      outHFrom: 'inherit',
      optDims: 'harness-css',
      ctxScale: false,
    },
  },
  {
    slug: 'ceil+device out opt',
    labToCanvasOpts: {
      outWFrom: 'opt',
      outHFrom: 'opt',
      optDims: 'harness-device',
      backingRound: 'ceil',
      dprSource: 'device',
    },
  },
]

for (const s of BACKING) {
  SPECS.push({
    slug: s.slug,
    idea: `Backing/DPR/style probe: ${s.slug}`,
    labToCanvasOpts: s.labToCanvasOpts,
  })
}

if (SPECS.length !== 55) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-natural.js: expected 55 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { extra = {}, labToCanvasOpts, slug, idea } = spec
  const { css: extraCss, ...restExtra } = extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w5-nat-${num}`,
    label: `tc-lab-w5-nat #${i + 1}: ${slug}`,
    idea,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    rasterPatch: 'lab-toCanvas-natural',
    labToCanvasOpts,
    notes: `lab-toCanvas-natural dim probe; ${slug}; FO raster only — no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 55) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-natural.js: expected 55 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave5-natural.js: duplicate id ${r.id}`)
  }
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas-natural') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas-natural`)
  }
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch,
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.inject,
    r.svgRootRound ?? '',
    r.radicalPatch ?? '',
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-natural.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

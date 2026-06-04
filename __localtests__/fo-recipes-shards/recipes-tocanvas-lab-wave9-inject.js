/**
 * Lab toCanvas wave-9 — inject:'both' with H2_RASTER_NORMALIZE_CSS only.
 * 80 recipes: tc-lab-w9-inj-001..080 (labToCanvasOpts grid).
 *
 * Constraints:
 * - inject: 'both' always (no capture-only / raster-only split).
 * - css: H2_RASTER_NORMALIZE_CSS always (no extra capture-only CSS variants).
 * - rasterPatch: 'lab-toCanvas' only.
 * - category: 'tocanvas-inject'
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-inj-*'
 */
import { H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ slug: string, idea: string, opts: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }[]} */
const OPTS = [
  {
    slug: 'backing none',
    idea: 'No backing store rounding.',
    opts: { backingRound: 'none' },
  },
  {
    slug: 'backing floor',
    idea: 'Floor backing store width/height.',
    opts: { backingRound: 'floor' },
  },
  {
    slug: 'backing ceil',
    idea: 'Ceil backing store width/height.',
    opts: { backingRound: 'ceil' },
  },
  {
    slug: 'backing round',
    idea: 'Round backing store width/height.',
    opts: { backingRound: 'round' },
  },
  {
    slug: 'dpr harness',
    idea: 'Use harness DPR (default in lab).',
    opts: { dprSource: 'harness' },
  },
  {
    slug: 'dpr device',
    idea: 'Use window.devicePixelRatio as DPR source.',
    opts: { dprSource: 'device' },
  },
  {
    slug: 'style css px',
    idea: 'Canvas style width/height in CSS pixels.',
    opts: { stylePixels: 'css' },
  },
  {
    slug: 'style device px',
    idea: 'Canvas style width/height in device pixels.',
    opts: { stylePixels: 'device' },
  },
]

/** @type {{ slug: string, idea: string, opts: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }[]} */
const OPTS2 = [
  {
    slug: 'optDims harness-css',
    idea: 'DrawImage reference dims: harness CSS pixels.',
    opts: { optDims: 'harness-css' },
  },
  {
    slug: 'optDims harness-device',
    idea: 'DrawImage reference dims: harness CSS scaled to device pixels.',
    opts: { optDims: 'harness-device' },
  },
  {
    slug: 'optDims natural',
    idea: 'DrawImage reference dims: natural image size.',
    opts: { optDims: 'natural' },
  },
  {
    slug: 'ctxScale on',
    idea: 'Apply ctx.scale(dpr) before draw.',
    opts: { ctxScale: true },
  },
  {
    slug: 'ctxScale off',
    idea: 'Skip ctx.scale(dpr) (1:1 backing blit).',
    opts: { ctxScale: false },
  },
  {
    slug: 'willReadFrequently on',
    idea: 'Request willReadFrequently when creating 2D context.',
    opts: { willReadFrequently: true },
  },
  {
    slug: 'alpha true',
    idea: 'Force alpha: true for 2D context.',
    opts: { alpha: true },
  },
  {
    slug: 'alpha false',
    idea: 'Force alpha: false for 2D context.',
    opts: { alpha: false },
  },
  {
    slug: 'desync true',
    idea: 'Force desynchronized: true (where supported).',
    opts: { desynchronized: true },
  },
  {
    slug: 'desync if-supported',
    idea: 'Use desynchronized: if-supported (where supported).',
    opts: { desynchronized: 'if-supported' },
  },
]

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0

for (const a of OPTS) {
  for (const b of OPTS2) {
    n += 1
    const opts = { ...a.opts, ...b.opts }
    SPECS.push({
      n,
      slug: `${a.slug} + ${b.slug}`,
      idea: `lab-toCanvas + inject both + H2 normalize — ${a.idea} ${b.idea}`,
      extra: { labToCanvasOpts: opts },
    })
  }
}

if (SPECS.length !== 80) {
  throw new Error(`recipes-tocanvas-lab-wave9-inject.js: expected 80 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 80) {
  throw new Error('recipes-tocanvas-lab-wave9-inject.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w9-inj-${num}`,
    label: `tc-lab-w9-inj #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: H2_RASTER_NORMALIZE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas-inject',
    active: true,
    notes: `Wave-9 inject:'both' only; H2_RASTER_NORMALIZE_CSS only; lab-toCanvas only; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-inject.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.inject !== 'both') {
    throw new Error(`recipes-tocanvas-lab-wave9-inject.js: expected inject both, got ${r.inject}`)
  }
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(
      `recipes-tocanvas-lab-wave9-inject.js: expected lab-toCanvas only, got ${r.rasterPatch}`,
    )
  }
  if (r.css !== H2_RASTER_NORMALIZE_CSS) {
    throw new Error(`recipes-tocanvas-lab-wave9-inject.js: unexpected css variant at ${r.id}`)
  }
  const optsKey = JSON.stringify(r.labToCanvasOpts ?? null)
  const key = [r.inject, r.rasterPatch, r.category ?? '', r.css, optsKey].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-inject.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


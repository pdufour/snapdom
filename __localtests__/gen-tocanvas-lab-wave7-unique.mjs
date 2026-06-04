#!/usr/bin/env node
/**
 * Emit recipes-tocanvas-lab-wave7-unique.js — 60 tc-lab-w7-uni-* with knob hashes
 * not present in existing recipes-tocanvas-lab* shards.
 *
 *   node __localtests__/gen-tocanvas-lab-wave7-unique.mjs
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'
import { inventoryTcLabShards, knobHash, mpKey } from './inventory-tc-lab-shards.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'fo-recipes-shards', 'recipes-tocanvas-lab-wave7-unique.js')
const COUNT = 60

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @type {{ key: string, css: string }[]} */
const CSS_VARIANTS = [
  { key: 'bare', css: '' },
  { key: 'fo', css: FO_BASELINE_CSS },
  { key: 'h2', css: H2_RASTER_NORMALIZE_CSS },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF },
]

/** @type {import('./fo-fix-recipe-shared.js').FoFixRasterPatch[]} */
const RASTER = [
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
]

/** @type {(string|null)[]} */
const ROOT_ROUND = [null, 'integer-viewbox', 'round-dims', 'int-floor']

/** @type {(string|null)[]} */
const RADICAL = [
  null,
  'math-floor-viewbox-stash-frac',
  'h2-fo-percent-int-viewbox',
  'remove-fe-filters',
]

/** @type {(string|null)[]} */
const MARKUP = [null, 'base64-roundtrip', 'explicit-xmlns']

/** @type {(string|null)[]} */
const FO_SVG = [null, 'fe-color-matrix-identity', 'fo-shape-rendering-auto']

/** @type {(string|null)[]} */
const MONKEY = [
  null,
  'tc-canvas-backing-floor',
  'tc-ctx-smooth-off',
  'tc-ctx-global-alpha-099',
  'decode-interval-prototype',
]

/** @type {(Record<string, unknown>|null)[]} */
const LAB_OPTS = [
  null,
  { backingRound: 'floor', dprSource: 'device' },
  { backingRound: 'ceil', stylePixels: 'device' },
  { optDims: 'harness-device', ctxScale: true },
]

/**
 * @param {Record<string, unknown>} fields
 * @returns {import('./fo-fix-recipe-shared.js').FoFixRecipe}
 */
function recipeFromFields(fields) {
  const inject = /** @type {'both'|'raster'} */ (fields.inject ?? 'both')
  const css = /** @type {string} */ (fields.css ?? '')
  return {
    id: 'pending',
    label: 'pending',
    idea: 'pending',
    css: inject === 'both' && !css ? FO_BASELINE_CSS : css,
    inject,
    rasterPatch: /** @type {import('./fo-fix-recipe-shared.js').FoFixRasterPatch} */ (
      fields.rasterPatch
    ),
    category: 'tocanvas',
    active: true,
    notes: 'Wave-7 unique knob hash; FO raster only — no text bypass.',
    ...(fields.svgRootRound ? { svgRootRound: fields.svgRootRound } : {}),
    ...(fields.radicalPatch ? { radicalPatch: fields.radicalPatch } : {}),
    ...(fields.svgMarkupPatch ? { svgMarkupPatch: fields.svgMarkupPatch } : {}),
    ...(fields.foSvgPatch ? { foSvgPatch: fields.foSvgPatch } : {}),
    ...(fields.monkeypatch ? { monkeypatch: fields.monkeypatch } : {}),
    ...(fields.labToCanvasOpts ? { labToCanvasOpts: fields.labToCanvasOpts } : {}),
  }
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function slugFor(r) {
  const parts = [
    r.rasterPatch,
    r.svgRootRound ?? 'no-rr',
    r.radicalPatch ?? 'no-rad',
    r.svgMarkupPatch ?? 'no-mk',
    r.foSvgPatch ?? 'no-fosvg',
    mpKey(r.monkeypatch) || 'no-mp',
    r.labToCanvasOpts ? 'lab-opts' : 'no-opts',
    r.css ? (r.css === FO_BASELINE_CSS ? 'fo-css' : r.css === H2_RASTER_NORMALIZE_CSS ? 'h2-css' : 'css') : 'bare-css',
  ]
  return parts.join(' / ')
}

const inv = await inventoryTcLabShards()
const used = inv.knobHashSet

/** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} */
const picked = []
/** @type {Set<string>} */
const batchHashes = new Set()

let ri = 0
let rri = 0
let rad = 0
let mk = 0
let fs = 0
let mp = 0
let lo = 0
let ci = 0

outer: while (picked.length < COUNT) {
  const rp = RASTER[ri % RASTER.length]
  const rr = ROOT_ROUND[rri % ROOT_ROUND.length]
  const radical = RADICAL[rad % RADICAL.length]
  const markup = MARKUP[mk % MARKUP.length]
  const foSvg = FO_SVG[fs % FO_SVG.length]
  const monkey = MONKEY[mp % MONKEY.length]
  const labOpts = LAB_OPTS[lo % LAB_OPTS.length]
  const cv = CSS_VARIANTS[ci % CSS_VARIANTS.length]

  const inject =
    rp === 'lab-toCanvas-frac' && radical ? 'raster' : cv.key === 'bare' ? 'raster' : 'both'

  /** @type {Record<string, unknown>} */
  const fields = {
    rasterPatch: rp,
    inject,
    css: inject === 'both' && cv.css === '' ? '' : cv.css,
    svgRootRound: rr,
    radicalPatch: radical,
    svgMarkupPatch: markup,
    foSvgPatch: foSvg,
    monkeypatch: monkey,
    labToCanvasOpts: labOpts,
  }

  const r = recipeFromFields(fields)
  const h = knobHash(r)
  if (!used.has(h) && !batchHashes.has(h)) {
    batchHashes.add(h)
    used.add(h)
    picked.push(r)
  }

  ci++
  if (ci % CSS_VARIANTS.length === 0) {
    lo++
    if (lo % LAB_OPTS.length === 0) {
      mp++
      if (mp % MONKEY.length === 0) {
        fs++
        if (fs % FO_SVG.length === 0) {
          mk++
          if (mk % MARKUP.length === 0) {
            rad++
            if (rad % RADICAL.length === 0) {
              rri++
              if (rri % ROOT_ROUND.length === 0) {
                ri++
                if (ri > RASTER.length * 500) {
                  console.error('[wave7-unique] exhausted search space')
                  process.exit(1)
                }
              }
            }
          }
        }
      }
    }
  }
}

const specLines = picked
  .map((r, i) => {
    const n = i + 1
    const num = String(n).padStart(3, '0')
    r.id = `tc-lab-w7-uni-${num}`
    r.label = `w7-uni #${n}: ${slugFor(r)}`
    r.idea = `Wave-7 unique combo: ${slugFor(r)}`
    const extras = []
    if (r.svgRootRound) extras.push(`svgRootRound: ${JSON.stringify(r.svgRootRound)},`)
    if (r.radicalPatch) extras.push(`radicalPatch: ${JSON.stringify(r.radicalPatch)},`)
    if (r.svgMarkupPatch) extras.push(`svgMarkupPatch: ${JSON.stringify(r.svgMarkupPatch)},`)
    if (r.foSvgPatch) extras.push(`foSvgPatch: ${JSON.stringify(r.foSvgPatch)},`)
    if (r.monkeypatch) extras.push(`monkeypatch: ${JSON.stringify(r.monkeypatch)},`)
    if (r.labToCanvasOpts) {
      extras.push(`labToCanvasOpts: ${JSON.stringify(r.labToCanvasOpts)},`)
    }
    return `  {
    n: ${n},
    slug: ${JSON.stringify(slugFor(r))},
    idea: ${JSON.stringify(r.idea)},
    css: ${JSON.stringify(r.css)},
    inject: ${JSON.stringify(r.inject)},
    rasterPatch: ${JSON.stringify(r.rasterPatch)},
${extras.map((l) => `    ${l}`).join('\n')}
  },`
  })
  .join('\n')

const body = `/**
 * Lab toCanvas wave-7 unique knob hashes — 60 recipes tc-lab-w7-uni-001..060.
 * Each row has a globally unique knob hash vs all other recipes-tocanvas-lab* shards.
 *
 * Gen: node __localtests__/gen-tocanvas-lab-wave7-unique.mjs
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-uni-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', rasterPatch: string, svgRootRound?: string, radicalPatch?: string, svgMarkupPatch?: string, foSvgPatch?: string, monkeypatch?: string, labToCanvasOpts?: Record<string, unknown> }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${COUNT}) {
  throw new Error(\`recipes-tocanvas-lab-wave7-unique.js: expected ${COUNT} specs, got \${SPECS.length}\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { n, slug, idea, css, inject, rasterPatch, ...rest } = spec
  return {
    id: \`tc-lab-w7-uni-\${num}\`,
    label: \`w7-uni #\${n}: \${slug}\`,
    idea,
    css,
    inject,
    rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: 'Wave-7 unique knob hash; FO raster only — no text bypass.',
    ...rest,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`

writeFileSync(OUT, body)
console.log(`[wave7-unique] wrote ${OUT} (${COUNT} recipes)`)

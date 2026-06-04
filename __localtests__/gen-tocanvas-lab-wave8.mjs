#!/usr/bin/env node
/**
 * Wave-8 product vs lab toCanvas A/B shard — 40 pairs × 2 = 80 recipes.
 * IDs: tc-lab-w8-ab-001..080 (odd=product-toCanvas, even=lab-toCanvas).
 * Lab forks: pairs 1–20 active:true; pairs 21–40 omit active (denylist-safe).
 *
 *   node __localtests__/gen-tocanvas-lab-wave8.mjs
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')
const OUT_FILE = join(SHARDS_DIR, 'recipes-tocanvas-lab-wave8-ab.js')

const PAIR_COUNT = 40
const RECIPE_COUNT = PAIR_COUNT * 2

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ key: string, css: string, label: string }[]} */
const CSS_VARIANTS = [
  { key: 'baseline', css: FO_BASELINE_CSS, label: 'FO_BASELINE_CSS' },
  { key: 'h2', css: H2_RASTER_NORMALIZE_CSS, label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF, label: 'FO + flex leaf strut' },
  { key: 'chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY, label: 'FO + Chromium copies' },
  { key: 'empty', css: '', label: 'no extra CSS' },
]

/** @param {unknown} mp */
function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function tupleKey(r) {
  return JSON.stringify({
    inject: r.inject,
    rasterPatch: r.rasterPatch ?? null,
    css: r.css ?? '',
    svgRootRound: r.svgRootRound ?? null,
    monkeypatch: mpKey(r.monkeypatch),
    labPreRaster: r.labPreRaster ?? null,
    foSvgPatch: r.foSvgPatch ?? null,
    svgMarkupPatch: r.svgMarkupPatch ?? null,
    radicalPatch: r.radicalPatch ?? null,
    labToCanvasOpts: r.labToCanvasOpts ?? null,
    labLoadPipeline: r.labLoadPipeline ?? null,
  })
}

/** Knobs shared by A/B pair (rasterPatch set per arm). */
function knobsKey(k) {
  return JSON.stringify({
    inject: k.inject,
    css: k.css,
    svgRootRound: k.svgRootRound ?? null,
    monkeypatch: mpKey(k.monkeypatch),
    labPreRaster: k.labPreRaster ?? null,
    foSvgPatch: k.foSvgPatch ?? null,
    svgMarkupPatch: k.svgMarkupPatch ?? null,
    radicalPatch: k.radicalPatch ?? null,
    labToCanvasOpts: k.labToCanvasOpts ?? null,
    labLoadPipeline: k.labLoadPipeline ?? null,
  })
}

/** @returns {Promise<Set<string>>} */
async function scanExistingTupleKeys() {
  const files = readdirSync(SHARDS_DIR).filter(
    (f) => f.startsWith('recipes-tocanvas') && f.endsWith('.js') && f !== 'recipes-tocanvas-lab-wave8-ab.js',
  )
  const keys = new Set()
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        keys.add(tupleKey(r))
      }
    } catch (err) {
      console.warn(`[wave8] skip ${file}: ${/** @type {Error} */ (err).message}`)
    }
  }
  return keys
}

/**
 * @param {{ name: string, values: unknown[] }[]} pools
 * @returns {Record<string, unknown>[]}
 */
function cartesian(pools) {
  /** @type {Record<string, unknown>[]} */
  const out = []
  /** @param {number} depth @param {Record<string, unknown>} cur */
  function rec(depth, cur) {
    if (depth === pools.length) {
      out.push({ ...cur })
      return
    }
    for (const v of pools[depth].values) {
      cur[pools[depth].name] = v
      rec(depth + 1, cur)
    }
  }
  rec(0, {})
  return out
}

/** @param {Record<string, unknown>} c @param {typeof CSS_VARIANTS[0]} cv */
function comboToKnobs(c, cv) {
  const inject = /** @type {'both'|'raster'} */ (c.inj)
  const useBaseline = inject === 'both' && cv.css === ''
  /** @type {Record<string, unknown>} */
  const extra = { inject }
  if (c.rr) extra.svgRootRound = c.rr
  if (c.mp) extra.monkeypatch = c.mp
  if (c.lpr) extra.labPreRaster = c.lpr
  if (c.fsp) extra.foSvgPatch = c.fsp
  if (c.smp) extra.svgMarkupPatch = c.smp
  if (c.rad) extra.radicalPatch = c.rad
  if (c.ltc) extra.labToCanvasOpts = c.ltc
  if (c.llp) extra.labLoadPipeline = c.llp

  const parts = [
    c.rr ?? 'no-rr',
    c.mp ?? 'no-mp',
    c.lpr ?? 'no-lpr',
    c.fsp ?? 'no-fsp',
    c.smp ?? 'no-smp',
    c.rad ?? 'no-rad',
    c.ltc ? `ltc-${JSON.stringify(c.ltc)}` : 'no-ltc',
    c.llp ?? 'no-llp',
    cv.key,
    inject,
  ]

  return {
    inject,
    css: useBaseline ? FO_BASELINE_CSS : cv.css,
    extra,
    slug: parts.join(' / '),
    ideaBase: `${cv.label}${c.rr ? ` + ${c.rr}` : ''}${c.mp ? ` + mp ${c.mp}` : ''}${c.lpr ? ` + ${c.lpr}` : ''}${c.rad ? ` + ${c.rad}` : ''}`,
  }
}

const ROOT_ROUNDS = [null, 'integer-viewbox', 'round-dims', 'int-floor']
const MONKEYPATCHES = [
  null,
  'tc-draw-image-round-all',
  'tc-canvas-backing-ceil',
  'tc-canvas-backing-floor',
  'tc-decode-safari-raf',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap-pixelated',
  'tc-lab-draw-device-grid-floor',
]
const RADICALS = [
  null,
  'h2-pin-line-height-from-live',
  'h2-flex-stretch-leaf-from-live',
  'math-floor-viewbox-stash-frac',
  'integer-snap-all-rects',
]
const FO_SVG = [null, 'fe-color-matrix-identity', 'filter-noop-defs']
const SVG_MARKUP = [null, 'explicit-xmlns-strip-transforms', 'base64-roundtrip']
const LAB_PRE = [null, 'device-grid-floor']
const LAB_OPTS = [
  null,
  { backingRound: 'floor' },
  { backingRound: 'ceil' },
  { dprSource: 'device', backingRound: 'round' },
  { drawFit: 'contain-center' },
  { drawFit: 'cover-center-floor' },
]
const INJECTS = ['both', 'raster']

const grid = cartesian([
  { name: 'rr', values: ROOT_ROUNDS },
  { name: 'mp', values: MONKEYPATCHES },
  { name: 'rad', values: RADICALS },
  { name: 'fsp', values: FO_SVG },
  { name: 'smp', values: SVG_MARKUP },
  { name: 'lpr', values: LAB_PRE },
  { name: 'ltc', values: LAB_OPTS },
  { name: 'inj', values: INJECTS },
])

const existingKeys = await scanExistingTupleKeys()
const usedKnobs = new Set()

/** @type {{ slug: string, ideaBase: string, inject: 'both'|'raster', css: string, extra: Record<string, unknown> }[]} */
const pairs = []
let stride = Math.max(1, Math.floor(grid.length / (PAIR_COUNT * CSS_VARIANTS.length)))

outer: for (let attempt = 0; attempt < 12; attempt++) {
  pairs.length = 0
  usedKnobs.clear()
  for (let gi = 0; gi < grid.length && pairs.length < PAIR_COUNT; gi++) {
    const c = grid[(gi * stride + attempt) % grid.length]
    for (let ci = 0; ci < CSS_VARIANTS.length && pairs.length < PAIR_COUNT; ci++) {
      const cv = CSS_VARIANTS[(gi + ci + attempt) % CSS_VARIANTS.length]
      const fields = comboToKnobs(c, cv)
      const k = {
        inject: fields.inject,
        css: fields.css,
        monkeypatch: fields.extra.monkeypatch,
        svgRootRound: fields.extra.svgRootRound,
        labPreRaster: fields.extra.labPreRaster,
        foSvgPatch: fields.extra.foSvgPatch,
        svgMarkupPatch: fields.extra.svgMarkupPatch,
        radicalPatch: fields.extra.radicalPatch,
        labToCanvasOpts: fields.extra.labToCanvasOpts,
        labLoadPipeline: fields.extra.labLoadPipeline,
      }
      const kk = knobsKey(k)
      if (usedKnobs.has(kk)) continue
      usedKnobs.add(kk)
      pairs.push({ ...fields, knobs: k })
    }
  }
  if (pairs.length >= PAIR_COUNT) break outer
  stride = Math.max(1, stride - 1)
}

if (pairs.length < PAIR_COUNT) {
  throw new Error(`wave8: could not pick ${PAIR_COUNT} unique knob pairs (got ${pairs.length})`)
}

const picked = pairs.slice(0, PAIR_COUNT)

function renderShard() {
  const specLines = picked
    .map((p, i) => {
      const n = i + 1
      const fmtExtra = () => {
        const lines = Object.entries(p.extra).map(([k, v]) => {
          if (typeof v === 'object' && v !== null) {
            return `      ${k}: ${JSON.stringify(v)},`
          }
          return `      ${k}: ${JSON.stringify(v)},`
        })
        return `{\n${lines.join('\n')}\n    }`
      }
      return `  {
    pair: ${n},
    slug: ${JSON.stringify(p.slug)},
    ideaBase: ${JSON.stringify(p.ideaBase)},
    css: ${JSON.stringify(p.css)},
    inject: ${JSON.stringify(p.inject)},
    extra: ${fmtExtra()},
  },`
    })
    .join('\n')

  return `/**
 * Wave-8 product vs lab toCanvas A/B — tc-lab-w8-ab-001..080 (40 pairs).
 * Odd ids: product-toCanvas; even ids: lab-toCanvas (same knobs). Lab pairs 1–20 active:true.
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-ab-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ pair: number, slug: string, ideaBase: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${PAIR_COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave8-ab.js: expected ${PAIR_COUNT} pair specs, got \${SPECS.length}\`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

for (const spec of SPECS) {
  const prodNum = String(spec.pair * 2 - 1).padStart(3, '0')
  const labNum = String(spec.pair * 2).padStart(3, '0')
  const { css, inject, extra, slug, ideaBase } = spec
  const useBaseline = inject === 'both' && css === ''
  const shared = {
    css: useBaseline ? FO_BASELINE_CSS : css,
    inject,
    category: 'tocanvas',
    notes: 'Wave-8 product↔lab A/B; FO raster only — no text bypass.',
    ...extra,
  }

  RECIPES.push({
    id: \`tc-lab-w8-ab-\${prodNum}\`,
    label: \`w8-ab #\${spec.pair}A product: \${slug}\`,
    idea: \`\${ideaBase} — product-toCanvas (A/B pair \${spec.pair})\`,
    rasterPatch: 'product-toCanvas',
    ...shared,
  })

  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const lab = {
    id: \`tc-lab-w8-ab-\${labNum}\`,
    label: \`w8-ab #\${spec.pair}B lab: \${slug}\`,
    idea: \`\${ideaBase} — lab-toCanvas (A/B pair \${spec.pair})\`,
    rasterPatch: 'lab-toCanvas',
    ...shared,
  }
  if (spec.pair <= ${PAIR_COUNT / 2}) {
    lab.active = true
  }
  RECIPES.push(lab)
}

if (RECIPES.length !== ${RECIPE_COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave8-ab.js: expected ${RECIPE_COUNT} recipes, got \${RECIPES.length}\`,
  )
}

const mpK = (mp) => {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

const knobSeen = new Set()
const idSeen = new Set()
let labActive = 0
let labTotal = 0

for (const r of RECIPES) {
  if (idSeen.has(r.id)) {
    throw new Error(\`recipes-tocanvas-lab-wave8-ab.js: duplicate id \${r.id}\`)
  }
  idSeen.add(r.id)

  // A/B pairs intentionally reuse the same knobs; rasterPatch is the axis under test.
  // So the uniqueness key must include rasterPatch.
  const kk = [
    r.inject,
    r.rasterPatch ?? '',
    r.css,
    r.svgRootRound ?? '',
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    mpK(r.monkeypatch),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.labLoadPipeline ?? '',
  ].join('\\0')
  if (knobSeen.has(kk)) {
    throw new Error(\`recipes-tocanvas-lab-wave8-ab.js: duplicate knob tuple at \${r.id}\`)
  }
  knobSeen.add(kk)

  if (r.rasterPatch === 'lab-toCanvas') {
    labTotal++
    if (r.active === true) labActive++
  }
  if (r.rasterPatch === 'product-toCanvas' && r.active === true) {
    throw new Error(\`\${r.id}: product arm must not set active\`)
  }
}

if (labActive !== ${PAIR_COUNT / 2}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave8-ab.js: expected ${PAIR_COUNT / 2} active lab recipes, got \${labActive}\`,
  )
}
if (labTotal !== ${PAIR_COUNT}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave8-ab.js: expected ${PAIR_COUNT} lab recipes, got \${labTotal}\`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

writeFileSync(OUT_FILE, renderShard())
console.log(`wrote ${OUT_FILE} (${RECIPE_COUNT} recipes, ${PAIR_COUNT} A/B pairs)`)

// Warn if product/lab tuples already exist in other shards (informational)
let collide = 0
for (const r of /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} */ (
  (await import(pathToFileURL(OUT_FILE).href)).FO_FIX_RECIPES_SHARD
)) {
  if (existingKeys.has(tupleKey(r))) collide++
}
if (collide) {
  console.warn(`[wave8] ${collide} recipe tuple(s) also appear in other tocanvas shards (expected for A/B dupes)`)
}

#!/usr/bin/env node
/**
 * Wave-6 lab toCanvas combinatorial shards: 10 × 100 = 1000 recipes.
 * IDs: tc-lab-w6g-{a..j}-{001..100}
 * Files: fo-recipes-shards/recipes-tocanvas-lab-wave6-gen-{a..j}.js
 *
 * Run: node __localtests__/gen-tocanvas-lab-wave6.mjs
 * Then: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

const SHARD_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const RECIPES_PER_SHARD = 100
const TOTAL = SHARD_LETTERS.length * RECIPES_PER_SHARD

const LAB_RASTERS = ['lab-toCanvas', 'lab-toCanvas-decode', 'lab-toCanvas-frac']

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ key: string, css: string, label: string }[]} */
const CSS_VARIANTS = [
  { key: 'none', css: '', label: 'no extra CSS' },
  { key: 'fo', css: FO_BASELINE_CSS, label: 'FO_BASELINE_CSS' },
  { key: 'h2', css: H2_RASTER_NORMALIZE_CSS, label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF, label: 'FO + flex leaf strut' },
  { key: 'chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY, label: 'FO + Chromium copies' },
  { key: 'h2+chromium', css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY, label: 'H2 + Chromium' },
  { key: 'full', css: H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY, label: 'H2 + leaf + Chromium' },
]

const ROOT_ROUNDS = [null, 'integer-viewbox', 'round-dims', 'int-floor']

const RADICALS = [
  null,
  'h2-fo-percent-int-viewbox',
  'math-floor-viewbox-stash-frac',
  'h2-pin-line-height-from-live',
  'h2-flex-stretch-leaf-from-live',
  'integer-snap-all-rects',
  'remove-fe-filters',
  'lab-pin-normal-lh-from-probe',
  'lab-pin-half-leading-padding-top',
  'math-pin-fo-container-dims-from-live-root',
  'math-half-leading-with-floor-viewbox',
  'chrome-legacy-webkit-bundle',
  'h2-container-lang',
]

const TC_MONKEYPATCHES = [
  null,
  'tc-draw-image-round-all',
  'tc-canvas-backing-ceil',
  'tc-canvas-backing-floor',
  'tc-canvas-backing-round',
  'tc-decode-safari-raf',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap',
  'tc-lab-draw-create-image-bitmap-pixelated',
  'tc-lab-draw-device-grid-floor',
  'decode-interval-prototype',
  'image-decode-twice',
  'raf-before-draw',
  'drawImage-wrap',
]

const TC_LAB_MP = [
  null,
  'tc-lab-mp-draw-image-round-all',
  'tc-lab-mp-draw-image-ceil-all',
  'tc-lab-mp-draw-image-floor-dest-y',
  'tc-lab-mp-draw-image-smoothing-off',
  'tc-lab-mp-canvas-backing-ceil',
  'tc-lab-mp-canvas-backing-floor',
  'tc-lab-mp-canvas-backing-round',
  'tc-lab-mp-decode-interval-delay',
  'tc-lab-mp-decode-interval-prototype',
  'tc-lab-mp-decode-wrap',
  'tc-lab-mp-decode-safari-raf',
  'tc-lab-mp-decode-twice',
  'tc-lab-mp-ctx-transform-reset-draw',
  'tc-lab-mp-measure-text-prime-draw',
  'tc-lab-mp-create-image-bitmap-high',
]

const FO_ATTRS = [
  { v: null, label: 'no foAttrPatch' },
  { v: 'xy', patch: { x: '0.0001', y: '0.0001' }, label: 'FO x/y +0.0001' },
  { v: 'xywh', patch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' }, label: 'FO x/y/w/h +0.0001' },
]

const FO_SVG = [
  null,
  'fe-color-matrix-identity',
  'fo-shape-rendering-auto',
  'filter-empty-nop',
  'fe-morphology-identity',
  'fe-component-transfer-identity',
]

const SVG_MARKUP = [
  null,
  'explicit-xmlns-strip-transforms',
  'base64-roundtrip',
  'strip-xml-declaration',
  'strip-identity-transforms',
]

const LAB_PRE = [null, 'device-grid-floor']

const INJECTS = ['both', 'raster']

/** @type {{ key: string, opts: Record<string, unknown> | null, label: string }[]} */
const LAB_OPTS = [
  { key: 'none', opts: null, label: 'default labToCanvasOpts' },
  { key: 'backing-floor', opts: { backingRound: 'floor' }, label: 'backingRound floor' },
  { key: 'backing-ceil', opts: { backingRound: 'ceil' }, label: 'backingRound ceil' },
  { key: 'backing-round', opts: { backingRound: 'round' }, label: 'backingRound round' },
  { key: 'dpr-device', opts: { dprSource: 'device' }, label: 'dprSource device' },
  { key: 'style-device', opts: { stylePixels: 'device' }, label: 'stylePixels device' },
  { key: 'opt-harness-device', opts: { optDims: 'harness-device' }, label: 'optDims harness-device' },
  { key: 'ctx-scale', opts: { ctxScale: true }, label: 'ctxScale true' },
  {
    key: 'floor+device',
    opts: { backingRound: 'floor', dprSource: 'device', stylePixels: 'device' },
    label: 'backing floor + device dpr/style',
  },
]

/** @type {{ key: string, ctx: Record<string, unknown> | null, label: string }[]} */
const LAB_CTX = [
  { key: 'none', ctx: null, label: 'default labToCanvasCtx' },
  { key: 'smooth-off', ctx: { imageSmoothingEnabled: false }, label: 'imageSmoothingEnabled false' },
  { key: 'smooth-high', ctx: { imageSmoothingQuality: 'high' }, label: 'imageSmoothingQuality high' },
  { key: 'will-read', ctx: { willReadFrequently: true }, label: 'willReadFrequently true' },
  { key: 'reset-xform', ctx: { resetTransformBeforeDraw: true }, label: 'resetTransformBeforeDraw' },
  {
    key: 'smooth-off-high',
    ctx: { imageSmoothingEnabled: false, imageSmoothingQuality: 'high' },
    label: 'smoothing off + quality high',
  },
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
    foAttrPatch: r.foAttrPatch ?? null,
    labToCanvasOpts: r.labToCanvasOpts ?? null,
    labToCanvasCtx: r.labToCanvasCtx ?? null,
    svgRootPatch: r.svgRootPatch ?? null,
    radicalOptions: r.radicalOptions ?? null,
  })
}

/** @returns {Promise<Set<string>>} */
async function scanExistingTocanvasKeys() {
  const files = readdirSync(SHARDS_DIR).filter(
    (f) => f.startsWith('recipes-tocanvas') && f.endsWith('.js') && !f.includes('wave6-gen'),
  )
  const keys = new Set()
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        if (!String(r.rasterPatch ?? '').startsWith('lab-toCanvas')) continue
        keys.add(tupleKey(r))
      }
    } catch (err) {
      console.warn(`[gen-tocanvas-lab-wave6] skip ${file}: ${/** @type {Error} */ (err).message}`)
    }
  }
  return keys
}

/**
 * @param {{ name: string, values: unknown[] }[]} pools
 * @param {number} i
 * @param {number} salt
 * @returns {Record<string, unknown>}
 */
function pickCombo(pools, i, salt) {
  /** @type {Record<string, unknown>} */
  const c = {}
  // Use different multipliers per dimension to maximize churn.
  const multipliers = [1000003, 9176, 6361, 3343, 2063, 1487, 983, 647, 421, 277, 181, 101]
  for (let pi = 0; pi < pools.length; pi++) {
    const p = pools[pi]
    const vals = p.values
    const m = multipliers[pi % multipliers.length]
    const idx = Math.abs((i * m + salt + pi * 101) % vals.length)
    c[p.name] = vals[idx]
  }
  return c
}

/**
 * @param {Record<string, unknown>} c
 * @param {typeof CSS_VARIANTS[0]} cv
 */
function buildProbe(c, cv) {
  const inject = /** @type {'both'|'raster'} */ (c.inj)
  const useBaseline = inject === 'both' && cv.css === ''
  /** @type {import('./fo-fix-recipe-shared.js').FoFixRecipe} */
  const probe = {
    id: 'probe',
    label: 'probe',
    idea: 'probe',
    css: useBaseline ? FO_BASELINE_CSS : cv.css,
    inject,
    rasterPatch: /** @type {string} */ (c.rp),
  }
  if (c.rr) probe.svgRootRound = /** @type {import('./fo-fix-recipe-shared.js').FoFixSvgRootRound} */ (c.rr)
  if (c.rad) probe.radicalPatch = /** @type {import('./fo-fix-recipe-shared.js').FoFixRadicalPatch} */ (c.rad)
  if (c.mp) probe.monkeypatch = /** @type {import('./fo-fix-recipe-shared.js').FoFixMonkeyPatch} */ (c.mp)
  if (c.lpr) probe.labPreRaster = /** @type {'device-grid-floor'} */ (c.lpr)
  if (c.foAttr?.patch) probe.foAttrPatch = c.foAttr.patch
  if (c.fosvg) probe.foSvgPatch = /** @type {import('./fo-fix-recipe-shared.js').FoFixSvgFoPatch} */ (c.fosvg)
  if (c.markup) probe.svgMarkupPatch = /** @type {import('./fo-fix-recipe-shared.js').FoFixSvgMarkupPatch} */ (c.markup)
  if (c.lopts?.opts) probe.labToCanvasOpts = c.lopts.opts
  if (c.lctx?.ctx) probe.labToCanvasCtx = c.lctx.ctx
  if (c.radOpt) probe.radicalOptions = c.radOpt
  return probe
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} probe @param {typeof CSS_VARIANTS[0]} cv @param {Record<string, unknown>} c */
function specFromProbe(probe, cv, c) {
  const slugParts = [
    c.rp,
    cv.key,
    c.rr ?? 'no-rr',
    c.rad ?? 'no-rad',
    c.mp ?? 'no-mp',
    c.lpr ?? 'no-lpr',
    c.inj,
    c.foAttr?.v ?? 'no-attr',
    c.fosvg ?? 'no-fosvg',
    c.markup ?? 'no-markup',
    c.lopts?.key ?? 'no-lopts',
    c.lctx?.key ?? 'no-lctx',
  ]
  const ideaParts = [
    `${c.rp}`,
    cv.label,
    c.rr ? `svgRootRound ${c.rr}` : null,
    c.rad ? `radical ${c.rad}` : null,
    c.mp ? `mp ${c.mp}` : null,
    c.lpr ? `labPreRaster ${c.lpr}` : null,
    c.foAttr?.label ?? null,
    c.fosvg ? `foSvg ${c.fosvg}` : null,
    c.markup ? `markup ${c.markup}` : null,
    c.lopts?.label ?? null,
    c.lctx?.label ?? null,
  ].filter(Boolean)

  /** @type {Record<string, unknown>} */
  const extra = { rasterPatch: probe.rasterPatch, inject: probe.inject }
  if (probe.svgRootRound) extra.svgRootRound = probe.svgRootRound
  if (probe.radicalPatch) extra.radicalPatch = probe.radicalPatch
  if (probe.monkeypatch) extra.monkeypatch = probe.monkeypatch
  if (probe.labPreRaster) extra.labPreRaster = probe.labPreRaster
  if (probe.foAttrPatch) extra.foAttrPatch = probe.foAttrPatch
  if (probe.foSvgPatch) extra.foSvgPatch = probe.foSvgPatch
  if (probe.svgMarkupPatch) extra.svgMarkupPatch = probe.svgMarkupPatch
  if (probe.labToCanvasOpts) extra.labToCanvasOpts = probe.labToCanvasOpts
  if (probe.labToCanvasCtx) extra.labToCanvasCtx = probe.labToCanvasCtx
  if (probe.radicalOptions) extra.radicalOptions = probe.radicalOptions

  return {
    slug: slugParts.join(' / '),
    idea: ideaParts.join(' + '),
    css: probe.css,
    inject: probe.inject,
    extra,
  }
}

/**
 * @param {ReturnType<typeof specFromProbe>[]} items
 * @param {string} letter
 * @param {string} theme
 */
function renderShard(letter, theme, items) {
  const specLines = items
    .map((item, i) => {
      const n = i + 1
      const fmtExtra = () => {
        const lines = Object.entries(item.extra).map(([k, v]) => {
          if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
            const inner = Object.entries(v)
              .map(([ik, iv]) => `      ${ik}: ${JSON.stringify(iv)},`)
              .join('\n')
            return `      ${k}: {\n${inner}\n      },`
          }
          return `      ${k}: ${JSON.stringify(v)},`
        })
        return `{\n${lines.join('\n')}\n    }`
      }
      return `  {
    n: ${n},
    slug: ${JSON.stringify(item.slug)},
    idea: ${JSON.stringify(item.idea)},
    css: ${JSON.stringify(item.css)},
    inject: ${JSON.stringify(item.inject)},
    extra: ${fmtExtra()},
  },`
    })
    .join('\n')

  return `/**
 * Lab toCanvas wave-6 gen shard ${letter} — ${theme}.
 * 100 recipes: tc-lab-w6g-${letter}-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-${letter}-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== ${RECIPES_PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave6-gen-${letter}.js: expected ${RECIPES_PER_SHARD} specs, got \${SPECS.length}\`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== ${RECIPES_PER_SHARD}) {
  throw new Error(\`recipes-tocanvas-lab-wave6-gen-${letter}.js: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: \`tc-lab-w6g-${letter}-\${num}\`,
    label: \`w6g${letter} #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: \`Wave-6 lab toCanvas gen ${letter}; FO raster only — no text bypass.\`,
    ...extra,
  }
})

if (RECIPES.length !== ${RECIPES_PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave6-gen-${letter}.js: expected ${RECIPES_PER_SHARD} recipes, got \${RECIPES.length}\`,
  )
}

for (const r of RECIPES) {
  if (!String(r.rasterPatch ?? '').startsWith('lab-toCanvas')) {
    throw new Error(\`\${r.id}: rasterPatch must be lab-toCanvas*\`)
  }
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.foAttrPatch ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    mpKey(r.monkeypatch),
    r.css,
  ].join('\\0')
  if (seen.has(key)) {
    throw new Error(\`recipes-tocanvas-lab-wave6-gen-${letter}.js: duplicate recipe key at \${r.id}\`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

/** @type {{ letter: string, theme: string, pools: { name: string, values: unknown[] }[] }[]} */
const SHARD_POOLS = [
  {
    letter: 'a',
    theme: 'lab-toCanvas × svgRootRound × inject × CSS',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null] },
      { name: 'mp', values: [null] },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: [null] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: LAB_OPTS.slice(0, 4) },
      { name: 'lctx', values: [LAB_CTX[0]] },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'b',
    theme: 'lab-toCanvas-decode × monkeypatch × svgRootRound',
    pools: [
      { name: 'rp', values: ['lab-toCanvas-decode'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null, 'math-floor-viewbox-stash-frac'] },
      { name: 'mp', values: TC_MONKEYPATCHES },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: [null] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: [LAB_OPTS[0]] },
      { name: 'lctx', values: LAB_CTX },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'c',
    theme: 'lab-toCanvas-frac × radical × svgRootRound',
    pools: [
      { name: 'rp', values: ['lab-toCanvas-frac'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: RADICALS },
      { name: 'mp', values: [null, 'tc-lab-draw-h2-frac-draw', 'drawImage-wrap'] },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: [FO_ATTRS[0]] },
      { name: 'fosvg', values: [null] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: LAB_OPTS },
      { name: 'lctx', values: [LAB_CTX[0]] },
      { name: 'radOpt', values: [null, { scaleMultiplier: 2 }] },
    ],
  },
  {
    letter: 'd',
    theme: 'lab-toCanvas × tc-lab-mp-* runtime patches',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null] },
      { name: 'mp', values: TC_LAB_MP },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: ['both'] },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: [null] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: [LAB_OPTS[0], LAB_OPTS[1], LAB_OPTS[2]] },
      { name: 'lctx', values: LAB_CTX },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'e',
    theme: 'lab-toCanvas × labToCanvasOpts backing/dpr/style',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null, 'integer-snap-all-rects'] },
      { name: 'mp', values: [null, 'tc-canvas-backing-ceil', 'tc-draw-image-round-all'] },
      { name: 'lpr', values: [null, 'device-grid-floor'] },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: [FO_ATTRS[0]] },
      { name: 'fosvg', values: [null] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: LAB_OPTS },
      { name: 'lctx', values: [LAB_CTX[0]] },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'f',
    theme: 'lab-toCanvas × labToCanvasCtx draw knobs',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null] },
      { name: 'mp', values: [null, 'tc-lab-draw-create-image-bitmap', 'draw-image-pixelated'] },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: [null] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: [LAB_OPTS[0], LAB_OPTS[4], LAB_OPTS[7]] },
      { name: 'lctx', values: LAB_CTX },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'g',
    theme: 'all lab forks × foSvg × svgMarkup',
    pools: [
      { name: 'rp', values: LAB_RASTERS },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null] },
      { name: 'mp', values: [null] },
      { name: 'lpr', values: [null] },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: [FO_ATTRS[0]] },
      { name: 'fosvg', values: FO_SVG },
      { name: 'markup', values: SVG_MARKUP },
      { name: 'lopts', values: [LAB_OPTS[0]] },
      { name: 'lctx', values: [LAB_CTX[0]] },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'h',
    theme: 'lab-toCanvas × structural radicalPatch grid',
    pools: [
      { name: 'rp', values: ['lab-toCanvas'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: RADICALS },
      { name: 'mp', values: [null, 'tc-decode-safari-raf', 'raf-before-draw'] },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: [null, 'filter-empty-nop'] },
      { name: 'markup', values: [null] },
      { name: 'lopts', values: LAB_OPTS.slice(0, 5) },
      { name: 'lctx', values: [LAB_CTX[0], LAB_CTX[1]] },
      { name: 'radOpt', values: [null] },
    ],
  },
  {
    letter: 'i',
    theme: 'lab-toCanvas-decode+frac × labPreRaster × mp',
    pools: [
      { name: 'rp', values: ['lab-toCanvas-decode', 'lab-toCanvas-frac'] },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: [null, 'h2-fo-percent-int-viewbox', 'math-floor-viewbox-stash-frac'] },
      { name: 'mp', values: [...TC_MONKEYPATCHES.slice(0, 10), ...TC_LAB_MP.slice(1, 6)] },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: FO_SVG.slice(0, 3) },
      { name: 'markup', values: SVG_MARKUP.slice(0, 3) },
      { name: 'lopts', values: LAB_OPTS },
      { name: 'lctx', values: LAB_CTX },
      { name: 'radOpt', values: [null, { scaleMultiplier: 1.5 }, { scaleMultiplier: 2 }] },
    ],
  },
  {
    letter: 'j',
    theme: 'capstone — all lab forks × max cross-product',
    pools: [
      { name: 'rp', values: LAB_RASTERS },
      { name: 'rr', values: ROOT_ROUNDS },
      { name: 'rad', values: RADICALS },
      { name: 'mp', values: [...new Set([...TC_MONKEYPATCHES, ...TC_LAB_MP])] },
      { name: 'lpr', values: LAB_PRE },
      { name: 'inj', values: INJECTS },
      { name: 'foAttr', values: FO_ATTRS },
      { name: 'fosvg', values: FO_SVG },
      { name: 'markup', values: SVG_MARKUP },
      { name: 'lopts', values: LAB_OPTS },
      { name: 'lctx', values: LAB_CTX },
      { name: 'radOpt', values: [null, { scaleMultiplier: 2 }] },
    ],
  },
]

const usedKeys = await scanExistingTocanvasKeys()
console.log(`[gen-tocanvas-lab-wave6] existing lab-toCanvas tuple keys: ${usedKeys.size}`)

let written = 0
for (let si = 0; si < SHARD_POOLS.length; si++) {
  const { letter, theme, pools } = SHARD_POOLS[si]
  /** @type {ReturnType<typeof specFromProbe>[]} */
  const picked = []
  const salt = si * 17 + 3

  // Avoid materializing cartesian products (OOM risk); sample deterministically.
  outer: for (let attempt = 0; attempt < 40; attempt++) {
    picked.length = 0
    for (let gi = 0; picked.length < RECIPES_PER_SHARD && gi < RECIPES_PER_SHARD * 400; gi++) {
      const c = pickCombo(pools, gi + attempt * 10000, salt + attempt * 53)
      for (let ci = 0; ci < CSS_VARIANTS.length && picked.length < RECIPES_PER_SHARD; ci++) {
        const cv = CSS_VARIANTS[(gi + ci + salt + attempt) % CSS_VARIANTS.length]
        const probe = buildProbe(c, cv)
        const key = tupleKey(probe)
        if (usedKeys.has(key)) continue
        usedKeys.add(key)
        picked.push(specFromProbe(probe, cv, c))
      }
    }
    if (picked.length >= RECIPES_PER_SHARD) break outer
  }

  if (picked.length < RECIPES_PER_SHARD) {
    for (const rp of LAB_RASTERS) {
      for (const rr of ROOT_ROUNDS) {
        for (const mp of [...TC_MONKEYPATCHES, ...TC_LAB_MP]) {
          if (picked.length >= RECIPES_PER_SHARD) break
          for (const cv of CSS_VARIANTS) {
            if (picked.length >= RECIPES_PER_SHARD) break
            const c = {
              rp,
              rr,
              rad: null,
              mp,
              lpr: null,
              inj: 'both',
              foAttr: FO_ATTRS[0],
              fosvg: null,
              markup: null,
              lopts: LAB_OPTS[0],
              lctx: LAB_CTX[0],
              radOpt: null,
            }
            const probe = buildProbe(c, cv)
            const key = tupleKey(probe)
            if (usedKeys.has(key)) continue
            usedKeys.add(key)
            picked.push({
              ...specFromProbe(probe, cv, c),
              slug: `${specFromProbe(probe, cv, c).slug} fill`,
              idea: `${rp} fill — wave-6 ${theme}`,
            })
          }
        }
      }
    }
  }

  if (picked.length !== RECIPES_PER_SHARD) {
    throw new Error(
      `shard ${letter}: expected ${RECIPES_PER_SHARD} unique combos, got ${picked.length}`,
    )
  }

  const file = join(SHARDS_DIR, `recipes-tocanvas-lab-wave6-gen-${letter}.js`)
  writeFileSync(file, renderShard(letter, theme, picked.slice(0, RECIPES_PER_SHARD)))
  console.log(`wrote ${file} (${RECIPES_PER_SHARD} recipes)`)
  written += RECIPES_PER_SHARD
}

console.log(`\n[gen-tocanvas-lab-wave6] wrote ${written} recipes (${SHARD_LETTERS.length} shards × ${RECIPES_PER_SHARD})`)
if (written !== TOTAL) {
  throw new Error(`expected ${TOTAL} recipes, got ${written}`)
}
console.log(
  `[gen-tocanvas-lab-wave6] matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-*'`,
)

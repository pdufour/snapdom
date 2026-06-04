#!/usr/bin/env node
/**
 * Generate wave7 lab-toCanvas combinatorial shards (12 × 100 = 1200 recipes).
 *
 *   node __localtests__/gen-tocanvas-lab-wave7.mjs
 *
 * Output: fo-recipes-shards/recipes-tocanvas-lab-wave7-gen-{01..12}.js
 * IDs: tc-lab-w7g-{01-12}-{001-100}
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7g-*'
 */
import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'fo-recipes-shards')

const SHARDS = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const PER_SHARD = 100
const TOTAL = SHARDS.length * PER_SHARD

const RASTER_PATCHES = [
  { v: 'lab-toCanvas', label: 'lab-toCanvas fork' },
  { v: 'lab-toCanvas-decode', label: 'lab-toCanvas-decode fork' },
  { v: 'lab-toCanvas-frac', label: 'lab-toCanvas-frac fork' },
]

/** @type {{ key: string, label: string }[]} */
const CSS_KEYS = [
  { key: 'none', label: 'no extra CSS' },
  { key: 'baseline', label: 'FO_BASELINE_CSS' },
  { key: 'h2', label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'chromium', label: 'FO baseline + Chromium copy' },
  { key: 'leaf', label: 'FO baseline + flex leaf strut' },
  { key: 'baseline+leaf', label: 'FO baseline + leaf' },
  { key: 'h2+chromium', label: 'H2 normalize + Chromium' },
  { key: 'full', label: 'H2 normalize + leaf + Chromium' },
]

const ROOT_ROUNDS = [
  { v: null, label: 'no svgRootRound' },
  { v: 'integer-viewbox', label: 'integer-viewbox' },
  { v: 'round-dims', label: 'round-dims' },
  { v: 'int-floor', label: 'int-floor' },
]

const RADICALS = [
  { v: null, label: 'no radicalPatch' },
  { v: 'h2-fo-percent-int-viewbox', label: 'h2-fo-percent-int-viewbox' },
  { v: 'math-floor-viewbox-stash-frac', label: 'math-floor-viewbox-stash-frac' },
  { v: 'h2-pin-line-height-from-live', label: 'h2-pin-line-height-from-live' },
  { v: 'h2-flex-stretch-leaf-from-live', label: 'h2-flex-stretch-leaf-from-live' },
  { v: 'integer-snap-all-rects', label: 'integer-snap-all-rects' },
  { v: 'remove-fe-filters', label: 'remove-fe-filters' },
  { v: 'math-pin-fo-container-dims-from-live-root', label: 'math-pin-fo-container-dims-from-live-root' },
]

const MONKEYPATCHES = [
  { v: null, label: 'no monkeypatch' },
  { v: 'tc-draw-image-round-all', label: 'tc-draw-image-round-all' },
  { v: 'tc-canvas-backing-ceil', label: 'tc-canvas-backing-ceil' },
  { v: 'tc-canvas-backing-floor', label: 'tc-canvas-backing-floor' },
  { v: 'tc-decode-safari-raf', label: 'tc-decode-safari-raf' },
  { v: 'tc-lab-draw-h2-frac-draw', label: 'tc-lab-draw-h2-frac-draw' },
  { v: 'tc-lab-draw-two-stage', label: 'tc-lab-draw-two-stage' },
  { v: 'tc-lab-draw-supersample-downscale', label: 'tc-lab-draw-supersample-downscale' },
  { v: 'tc-lab-draw-create-image-bitmap', label: 'tc-lab-draw-create-image-bitmap' },
  { v: 'tc-lab-draw-create-image-bitmap-pixelated', label: 'tc-lab-draw-create-image-bitmap-pixelated' },
  { v: 'tc-lab-draw-device-grid-floor', label: 'tc-lab-draw-device-grid-floor' },
  { v: 'decode-interval', label: 'decode-interval' },
]

const FO_ATTRS = [
  { v: null, label: 'no foAttrPatch' },
  { v: 'xy', label: 'FO x/y +0.0001', patch: { x: '0.0001', y: '0.0001' } },
  { v: 'xywh', label: 'FO x/y/w/h +0.0001', patch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' } },
]

const FO_SVG = [
  { v: null, label: 'no foSvgPatch' },
  { v: 'fe-color-matrix-identity', label: 'fe-color-matrix-identity' },
  { v: 'fo-shape-rendering-auto', label: 'fo-shape-rendering-auto' },
  { v: 'filter-noop-defs', label: 'filter-noop-defs' },
]

const SVG_MARKUP = [
  { v: null, label: 'no svgMarkupPatch' },
  { v: 'explicit-xmlns-strip-transforms', label: 'explicit-xmlns-strip-transforms' },
  { v: 'base64-roundtrip', label: 'base64-roundtrip' },
  { v: 'strip-xml-declaration', label: 'strip-xml-declaration' },
]

/** @type {{ key: string, v: Record<string, unknown> | null, label: string }[]} */
const LAB_OPTS = [
  { key: 'default', v: null, label: 'default labToCanvasOpts' },
  { key: 'back-floor', v: { backingRound: 'floor' }, label: 'backingRound floor' },
  { key: 'back-ceil', v: { backingRound: 'ceil' }, label: 'backingRound ceil' },
  { key: 'back-round', v: { backingRound: 'round' }, label: 'backingRound round' },
  { key: 'dpr-device', v: { dprSource: 'device' }, label: 'dprSource device' },
  { key: 'style-device', v: { stylePixels: 'device' }, label: 'stylePixels device' },
  { key: 'opt-natural', v: { optDims: 'natural' }, label: 'optDims natural' },
  { key: 'opt-harness-device', v: { optDims: 'harness-device' }, label: 'optDims harness-device' },
  { key: 'no-ctx-scale', v: { ctxScale: false }, label: 'ctxScale false' },
  {
    key: 'floor-device',
    v: { backingRound: 'floor', dprSource: 'device' },
    label: 'floor backing + device dpr',
  },
  {
    key: 'ceil-style-device',
    v: { backingRound: 'ceil', stylePixels: 'device' },
    label: 'ceil backing + device style pixels',
  },
  {
    key: 'round-natural',
    v: { backingRound: 'round', optDims: 'natural' },
    label: 'round backing + natural dims',
  },
]

/** Timing via monkeypatch ids (fo-fix-monkeypatch LAB_W3_TIMING_HOOKS). */
const TIMING_PATCHES = [
  { v: null, label: 'no timing hooks' },
  { v: 'tc-lab-w3-decode-microtask', label: 'decode microtask' },
  { v: 'tc-lab-w3-decode-raf2', label: 'decode raf2' },
  { v: 'tc-lab-w3-decode-timeout16', label: 'decode timeout16' },
  { v: 'tc-lab-w3-decode-idle', label: 'decode idle' },
  { v: 'tc-lab-w3-draw-raf1', label: 'draw raf1' },
  { v: 'tc-lab-w3-draw-timeout100', label: 'draw timeout100' },
  { v: 'tc-lab-w3-decode-raf2-draw-raf1', label: 'decode raf2 + draw raf1' },
  { v: 'tc-lab-w3-decode-mt-draw-mt', label: 'decode mt + draw mt' },
  { v: 'tc-lab-w3-decode-t16-draw-t0', label: 'decode t16 + draw t0' },
  { v: 'tc-lab-w3-decode-raf3-draw-raf3', label: 'decode raf3 + draw raf3' },
  { v: 'tc-lab-w3-decode-idle-draw-idle', label: 'decode idle + draw idle' },
  { v: 'tc-lab-w3-decode-perf16-draw-perf1', label: 'decode perf16 + draw perf1' },
  { v: 'tc-lab-w3-decode-mt2-draw-t100', label: 'decode mt2 + draw t100' },
  { v: 'tc-lab-w3-decode-chain-raf-mt-t0', label: 'decode chain raf+mt+t0' },
  { v: 'tc-lab-w3-draw-chain-raf-mt-t16', label: 'draw chain raf+mt+t16' },
  { v: 'tc-lab-w3-full-chain-decode-draw', label: 'full decode+draw chain' },
]

/** @type {{ key: string, v: Record<string, unknown> | null, label: string }[]} */
const LAB_CTX = [
  { key: 'default', v: null, label: 'default labToCanvasCtx' },
  { key: 'smooth-off', v: { imageSmoothingEnabled: false }, label: 'imageSmoothing off' },
  { key: 'smooth-low', v: { imageSmoothingQuality: 'low' }, label: 'smoothing quality low' },
  { key: 'smooth-high', v: { imageSmoothingQuality: 'high' }, label: 'smoothing quality high' },
  { key: 'alpha-099', v: { globalAlpha: 0.99 }, label: 'globalAlpha 0.99' },
  { key: 'reset-transform', v: { resetTransformBeforeDraw: true }, label: 'resetTransform before draw' },
  {
    key: 'reset-smooth-off',
    v: { resetTransformBeforeDraw: true, imageSmoothingEnabled: false },
    label: 'reset transform + smooth off',
  },
  { key: 'will-read', v: { willReadFrequently: true }, label: 'willReadFrequently' },
]

/** @param {unknown} v */
function stable(v) {
  return v == null ? '' : typeof v === 'object' ? JSON.stringify(v) : String(v)
}

/** @param {Record<string, unknown>} c */
function tupleKey(c) {
  return [
    c.rasterPatch,
    c.cssKey,
    c.svgRootRound,
    c.radicalPatch,
    c.monkeypatch,
    c.foAttr,
    c.foSvgPatch,
    c.svgMarkupPatch,
    c.labOptsKey,
    c.timingPatch,
    c.labCtxKey,
  ]
    .map(stable)
    .join('|')
}

const DIM_SIZES = [
  RASTER_PATCHES.length,
  CSS_KEYS.length,
  ROOT_ROUNDS.length,
  RADICALS.length,
  MONKEYPATCHES.length,
  FO_ATTRS.length,
  FO_SVG.length,
  SVG_MARKUP.length,
  LAB_OPTS.length,
  TIMING_PATCHES.length,
  LAB_CTX.length,
]

const CARTESIAN_TOTAL = DIM_SIZES.reduce((a, b) => a * b, 1)

/** @param {number} flatIndex */
function comboAt(flatIndex) {
  let rem = flatIndex
  const idx = DIM_SIZES.map((size) => {
    const i = rem % size
    rem = Math.floor(rem / size)
    return i
  })
  const rp = RASTER_PATCHES[idx[0]]
  const css = CSS_KEYS[idx[1]]
  const rr = ROOT_ROUNDS[idx[2]]
  const rad = RADICALS[idx[3]]
  const mp = MONKEYPATCHES[idx[4]]
  const fa = FO_ATTRS[idx[5]]
  const fs = FO_SVG[idx[6]]
  const sm = SVG_MARKUP[idx[7]]
  const lo = LAB_OPTS[idx[8]]
  const tp = TIMING_PATCHES[idx[9]]
  const lc = LAB_CTX[idx[10]]
  return {
    rasterPatch: rp.v,
    rasterLabel: rp.label,
    cssKey: css.key,
    cssLabel: css.label,
    svgRootRound: rr.v,
    rootLabel: rr.label,
    radicalPatch: rad.v,
    radicalLabel: rad.label,
    monkeypatch: mp.v,
    mpLabel: mp.label,
    foAttr: fa.v,
    foAttrLabel: fa.label,
    foAttrPatch: fa.patch ?? null,
    foSvgPatch: fs.v,
    foSvgLabel: fs.label,
    svgMarkupPatch: sm.v,
    svgMarkupLabel: sm.label,
    labOptsKey: lo.key,
    labOptsLabel: lo.label,
    labToCanvasOpts: lo.v,
    timingPatch: tp.v,
    timingLabel: tp.label,
    labCtxKey: lc.key,
    labCtxLabel: lc.label,
    labToCanvasCtx: lc.v,
  }
}

/** @param {number} count */
function pickUniqueCombos(count) {
  const seen = new Set()
  /** @type {Record<string, unknown>[]} */
  const picked = []
  const stride = Math.max(1, Math.floor(CARTESIAN_TOTAL / count))
  const offset = Math.floor(CARTESIAN_TOTAL * 0.37)
  for (let i = 0; picked.length < count && i < CARTESIAN_TOTAL * 3; i++) {
    const c = comboAt((offset + i * stride) % CARTESIAN_TOTAL)
    const key = tupleKey(c)
    if (seen.has(key)) continue
    seen.add(key)
    picked.push(c)
  }
  if (picked.length < count) {
    for (let j = 0; picked.length < count && j < CARTESIAN_TOTAL; j++) {
      const c = comboAt(j)
      const key = tupleKey(c)
      if (seen.has(key)) continue
      seen.add(key)
      picked.push(c)
    }
  }
  if (picked.length !== count) {
    throw new Error(`need ${count} unique combos, got ${picked.length} from ${CARTESIAN_TOTAL} cartesian`)
  }
  return picked
}

/**
 * @param {string | null | undefined} mp
 * @param {string | null | undefined} timing
 */
function resolveMonkeypatch(mp, timing) {
  if (mp && timing) return [mp, timing]
  if (mp) return mp
  if (timing) return timing
  return null
}

/** @param {string} shard @param {Record<string, unknown>[]} specs */
function renderShard(shard, specs) {
  if (specs.length !== PER_SHARD) {
    throw new Error(`shard ${shard}: expected ${PER_SHARD} specs, got ${specs.length}`)
  }

  const specJson = JSON.stringify(
    specs.map((c, i) => ({
      n: i + 1,
      slug: [
        c.rasterPatch,
        c.cssKey,
        c.svgRootRound || 'root-none',
        c.radicalPatch || 'rad-none',
        c.monkeypatch || 'mp-none',
        c.foAttr || 'attr-none',
        c.foSvgPatch || 'fosvg-none',
        c.svgMarkupPatch || 'markup-none',
        c.labOptsKey,
        c.timingPatch || 'timing-none',
        c.labCtxKey,
      ].join(' / '),
      idea:
        `${c.rasterLabel} + ${c.cssLabel} + ${c.rootLabel}` +
        (c.radicalPatch ? ` + ${c.radicalLabel}` : '') +
        (c.monkeypatch ? ` + ${c.mpLabel}` : '') +
        (c.foAttr ? ` + ${c.foAttrLabel}` : '') +
        (c.foSvgPatch ? ` + ${c.foSvgLabel}` : '') +
        (c.svgMarkupPatch ? ` + ${c.svgMarkupLabel}` : '') +
        (c.labOptsKey !== 'default' ? ` + ${c.labOptsLabel}` : '') +
        (c.timingPatch ? ` + ${c.timingLabel}` : '') +
        (c.labCtxKey !== 'default' ? ` + ${c.labCtxLabel}` : ''),
      cssKey: c.cssKey,
      rasterPatch: c.rasterPatch,
      svgRootRound: c.svgRootRound,
      radicalPatch: c.radicalPatch,
      monkeypatch: resolveMonkeypatch(
        /** @type {string | null} */ (c.monkeypatch),
        /** @type {string | null} */ (c.timingPatch),
      ),
      foAttrPatch: c.foAttrPatch,
      foSvgPatch: c.foSvgPatch,
      svgMarkupPatch: c.svgMarkupPatch,
      labToCanvasOpts: c.labToCanvasOpts,
      labToCanvasCtx: c.labToCanvasCtx,
    })),
    null,
    2,
  )
    .replace(/"cssKey":/g, 'cssKey:')
    .replace(/"n":/g, 'n:')
    .replace(/"slug":/g, 'slug:')
    .replace(/"idea":/g, 'idea:')
    .replace(/"rasterPatch":/g, 'rasterPatch:')
    .replace(/"svgRootRound":/g, 'svgRootRound:')
    .replace(/"radicalPatch":/g, 'radicalPatch:')
    .replace(/"monkeypatch":/g, 'monkeypatch:')
    .replace(/"foAttrPatch":/g, 'foAttrPatch:')
    .replace(/"foSvgPatch":/g, 'foSvgPatch:')
    .replace(/"svgMarkupPatch":/g, 'svgMarkupPatch:')
    .replace(/"labToCanvasOpts":/g, 'labToCanvasOpts:')
    .replace(/"labToCanvasCtx":/g, 'labToCanvasCtx:')

  return `/**
 * Lab toCanvas wave7 generated shard (${shard}) — lab fork + opts/ctx/timing combinator.
 * 100 recipes: tc-lab-w7g-${shard}-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7g-${shard}-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @param {string} key */
function resolveCss(key) {
  switch (key) {
    case 'none':
      return ''
    case 'baseline':
      return FO_BASELINE_CSS
    case 'h2':
      return H2_RASTER_NORMALIZE_CSS
    case 'chromium':
      return FO_BASELINE_CSS + CHROMIUM_COPY
    case 'leaf':
      return FO_BASELINE_CSS + LEAF
    case 'baseline+leaf':
      return FO_BASELINE_CSS + LEAF
    case 'h2+chromium':
      return H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY
    case 'full':
      return H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY
    default:
      throw new Error(\`unknown cssKey: \${key}\`)
  }
}

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | string[] | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null, labToCanvasOpts?: Record<string, unknown> | null, labToCanvasCtx?: Record<string, unknown> | null }[]} */
const SPECS = ${specJson}

if (SPECS.length !== ${PER_SHARD}) {
  throw new Error(\`recipes-tocanvas-lab-wave7-gen-${shard}.js: expected ${PER_SHARD} specs, got \${SPECS.length}\`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(\`recipes-tocanvas-lab-wave7-gen-${shard}.js: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: \`tc-lab-w7g-${shard}-\${num}\`,
    label: \`tc-lab-w7g-${shard} #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: 'both',
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: \`Wave7 gen shard ${shard}; FO-raster lab-toCanvas combinator — no text bypass.\`,
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  if (spec.labToCanvasOpts) recipe.labToCanvasOpts = spec.labToCanvasOpts
  if (spec.labToCanvasCtx) recipe.labToCanvasCtx = spec.labToCanvasCtx
  return recipe
})

if (RECIPES.length !== ${PER_SHARD}) {
  throw new Error(
    \`recipes-tocanvas-lab-wave7-gen-${shard}.js: expected ${PER_SHARD} recipes, got \${RECIPES.length}\`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

console.log(`[gen-tocanvas-lab-wave7] cartesian space: ${CARTESIAN_TOTAL} combos`)
const picked = pickUniqueCombos(TOTAL)

/** @type {string[]} */
const written = []
for (let si = 0; si < SHARDS.length; si++) {
  const shard = SHARDS[si]
  const slice = picked.slice(si * PER_SHARD, (si + 1) * PER_SHARD)
  const path = join(OUT, `recipes-tocanvas-lab-wave7-gen-${shard}.js`)
  await writeFile(path, renderShard(shard, slice), 'utf8')
  written.push(path)
}

console.log(`[gen-tocanvas-lab-wave7] wrote ${written.length} shards × ${PER_SHARD} = ${TOTAL} recipes`)
for (const p of written) {
  console.log(`  ${p}`)
}
console.log(
  `[gen-tocanvas-lab-wave7] matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7g-*'`,
)
console.log(`[gen-tocanvas-lab-wave7] dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes`)

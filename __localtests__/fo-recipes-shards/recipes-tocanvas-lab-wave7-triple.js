/**
 * Wave-7 lab-toCanvas triples — tc-lab-w7-tri-001..100.
 * Triple combos of top-6 structural knobs (no text bypass).
 *
 * Merge:  node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-tri-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** Top-6 knobs */
const TOP6 = /** @type {const} */ ([
  {
    key: 'decode-interval',
    desc: 'rasterPatch decode-interval via labRasterUrl',
    apply(r) {
      r.labRasterUrl = 'decode-interval'
    },
  },
  {
    key: 'integer-viewbox',
    desc: 'svgRootRound integer-viewbox',
    apply(r) {
      r.svgRootRound = 'integer-viewbox'
    },
  },
  {
    key: 'h2-frac-draw',
    desc: 'rasterPatch h2-frac-draw via labRasterUrl',
    apply(r) {
      r.labRasterUrl = 'h2-frac-draw'
    },
  },
  {
    key: 'device-grid-floor',
    desc: 'labPreRaster device-grid-floor',
    apply(r) {
      r.labPreRaster = 'device-grid-floor'
    },
  },
  {
    key: 'blob-url-decode-interval',
    desc: 'rasterPatch blob-url-decode-interval via labRasterUrl',
    apply(r) {
      r.labRasterUrl = 'blob-url-decode-interval'
    },
  },
  {
    key: 'h2-css',
    desc: 'H2_RASTER_NORMALIZE_CSS (capture+raster)',
    apply(r) {
      r.css = H2_RASTER_NORMALIZE_CSS
      r.inject = 'both'
    },
  },
])

/**
 * @param {string[]} keys
 */
function slugFor(keys) {
  return keys.slice().sort().join(' + ')
}

/**
 * @param {string[]} keys
 */
function ideaFor(keys) {
  const parts = keys
    .slice()
    .sort()
    .map((k) => TOP6.find((x) => x.key === k)?.desc ?? k)
  return `lab-toCanvas + ${parts.join(' + ')}`
}

/**
 * @param {string[]} keys
 * @returns {import('../fo-fix-recipe-shared.js').FoFixRecipe}
 */
function buildRecipe(n, keys, rep) {
  const num = String(n).padStart(3, '0')
  const slug = slugFor(keys)
  const repWaitMs = /** @type {number} */ ([0, 16, 33, 50, 100][rep] ?? 0)
  const repMp = /** @type {(import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch | null)[]} */ ([
    null,
    'tc-draw-image-round-all',
    'tc-canvas-backing-ceil',
    'tc-decode-safari-raf',
    'drawImage-wrap',
  ])[rep] ?? null
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const r = {
    id: `tc-lab-w7-tri-${num}`,
    label: `tc-lab-w7-tri #${n}: ${slug}${repMp ? ` + ${repMp}` : ''}`,
    idea: `${ideaFor(keys)}${repMp ? ` + mp ${repMp}` : ''}`,
    css: FO_BASELINE_CSS + LEAF + CHROMIUM_COPY,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    ...(repMp ? { monkeypatch: repMp } : {}),
    notes: `Wave-7 triple combo (${slug})${repMp ? ` + mp ${repMp}` : ''}; FO raster only — no text bypass.`,
  }
  for (const k of keys) {
    const knob = TOP6.find((x) => x.key === k)
    if (!knob) throw new Error(`unknown knob key: ${k}`)
    knob.apply(r)
  }
  r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), decodeWaitMs: repWaitMs }
  return r
}

/** 20 unique combos × 5 reps = 100 recipes. */
const COMBOS = /** @type {readonly (readonly [string, string, string])[]} */ ([
  ['decode-interval', 'integer-viewbox', 'h2-frac-draw'],
  ['decode-interval', 'integer-viewbox', 'device-grid-floor'],
  ['decode-interval', 'integer-viewbox', 'blob-url-decode-interval'],
  ['decode-interval', 'integer-viewbox', 'h2-css'],
  ['decode-interval', 'h2-frac-draw', 'device-grid-floor'],
  ['decode-interval', 'h2-frac-draw', 'blob-url-decode-interval'],
  ['decode-interval', 'h2-frac-draw', 'h2-css'],
  ['decode-interval', 'device-grid-floor', 'blob-url-decode-interval'],
  ['decode-interval', 'device-grid-floor', 'h2-css'],
  ['decode-interval', 'blob-url-decode-interval', 'h2-css'],
  ['integer-viewbox', 'h2-frac-draw', 'device-grid-floor'],
  ['integer-viewbox', 'h2-frac-draw', 'blob-url-decode-interval'],
  ['integer-viewbox', 'h2-frac-draw', 'h2-css'],
  ['integer-viewbox', 'device-grid-floor', 'blob-url-decode-interval'],
  ['integer-viewbox', 'device-grid-floor', 'h2-css'],
  ['integer-viewbox', 'blob-url-decode-interval', 'h2-css'],
  ['h2-frac-draw', 'device-grid-floor', 'blob-url-decode-interval'],
  ['h2-frac-draw', 'device-grid-floor', 'h2-css'],
  ['h2-frac-draw', 'blob-url-decode-interval', 'h2-css'],
  ['device-grid-floor', 'blob-url-decode-interval', 'h2-css'],
])

const comboKeys = new Set(COMBOS.map((c) => slugFor([...c])))
if (comboKeys.size !== COMBOS.length) {
  throw new Error('recipes-tocanvas-lab-wave7-triple.js: duplicate combos')
}
if (COMBOS.length !== 20) {
  throw new Error(`recipes-tocanvas-lab-wave7-triple.js: expected 20 combos, got ${COMBOS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []
let n = 1
for (let rep = 0; rep < 5; rep++) {
  for (const combo of COMBOS) {
    RECIPES.push(buildRecipe(n, [...combo], rep))
    n++
  }
}

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-triple.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave7-triple.js: dup id ${r.id}`)
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}


export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


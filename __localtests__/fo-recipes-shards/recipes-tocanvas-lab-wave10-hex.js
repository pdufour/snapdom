/**
 * Wave 10 hex — 300 lab-toCanvas recipes: tc-lab-w10-hex-001..300.
 *
 * 6-knob combos from a fixed set of 15 “top knobs” (structural capture/raster toggles).
 * Each recipe enables exactly 6 knobs; knobs are designed to compose without per-label hacks.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-hex-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/**
 * @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe
 * @typedef {NonNullable<FoFixRecipe['labToCanvasOpts']>} LabToCanvasOpts
 * @typedef {NonNullable<FoFixRecipe['labToCanvasCtx']>} LabToCanvasCtx
 */

const COUNT = 300

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @param {string[]} parts */
function joinCss(parts) {
  const seen = new Set()
  const out = []
  for (const p of parts) {
    if (!p) continue
    if (seen.has(p)) continue
    seen.add(p)
    out.push(p)
  }
  return out.join('')
}

/** @param {unknown} mp */
function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

/** @param {FoFixRecipe} r */
function tupleKey(r) {
  return JSON.stringify({
    inject: r.inject,
    rasterPatch: r.rasterPatch ?? null,
    css: r.css ?? '',
    svgRootRound: r.svgRootRound ?? null,
    radicalPatch: r.radicalPatch ?? null,
    monkeypatch: mpKey(r.monkeypatch),
    labPreRaster: r.labPreRaster ?? null,
    svgMarkupPatch: r.svgMarkupPatch ?? null,
    foSvgPatch: r.foSvgPatch ?? null,
    foAttrPatch: r.foAttrPatch ?? null,
    labToCanvasOpts: r.labToCanvasOpts ?? null,
    labToCanvasCtx: r.labToCanvasCtx ?? null,
  })
}

/** @type {{ key: string, label: string, apply: (r: FoFixRecipe) => FoFixRecipe }[]} */
const TOP_KNOBS = [
  // CSS capture/raster normalization (composable; combined via concatenation).
  {
    key: 'css-fo-baseline',
    label: 'FO_BASELINE_CSS',
    apply: (r) => ({ ...r, css: joinCss([r.css ?? '', FO_BASELINE_CSS]) }),
  },
  {
    key: 'css-h2-normalize',
    label: 'H2_RASTER_NORMALIZE_CSS',
    apply: (r) => ({ ...r, css: joinCss([r.css ?? '', H2_RASTER_NORMALIZE_CSS]) }),
  },
  {
    key: 'css-leaf-strut',
    label: 'leaf strut',
    apply: (r) => ({ ...r, css: joinCss([r.css ?? '', LEAF]) }),
  },
  {
    key: 'css-chromium-copies',
    label: 'Chromium copies',
    apply: (r) => ({ ...r, css: joinCss([r.css ?? '', CHROMIUM_COPY]) }),
  },

  // SVG/FO structural patches.
  {
    key: 'root-round-integer-viewbox',
    label: 'svgRootRound integer-viewbox',
    apply: (r) => ({ ...r, svgRootRound: 'integer-viewbox' }),
  },
  {
    key: 'radical-math-floor-viewbox-stash-frac',
    label: 'radical math-floor-viewbox-stash-frac',
    apply: (r) => ({ ...r, radicalPatch: 'math-floor-viewbox-stash-frac' }),
  },
  {
    key: 'svg-markup-base64-roundtrip',
    label: 'svgMarkupPatch base64-roundtrip',
    apply: (r) => ({ ...r, svgMarkupPatch: 'base64-roundtrip' }),
  },
  {
    key: 'fo-svg-fe-color-matrix-identity',
    label: 'foSvgPatch fe-color-matrix-identity',
    apply: (r) => ({ ...r, foSvgPatch: 'fe-color-matrix-identity' }),
  },
  {
    key: 'fo-attr-xy',
    label: 'foAttrPatch xy',
    apply: (r) => ({ ...r, foAttrPatch: { x: '0.0001', y: '0.0001' } }),
  },

  // Pre-raster step + toCanvas knobs (layout-derived / API-derived only).
  {
    key: 'preraster-device-grid-floor',
    label: 'labPreRaster device-grid-floor',
    apply: (r) => ({ ...r, labPreRaster: 'device-grid-floor' }),
  },
  {
    key: 'opt-backing-ceil',
    label: 'labToCanvasOpts backingRound ceil',
    apply: (r) => ({
      ...r,
      labToCanvasOpts: /** @type {LabToCanvasOpts} */ ({
        ...(r.labToCanvasOpts ?? {}),
        backingRound: 'ceil',
      }),
    }),
  },
  {
    key: 'opt-dpr-device',
    label: 'labToCanvasOpts dprSource device',
    apply: (r) => ({
      ...r,
      labToCanvasOpts: /** @type {LabToCanvasOpts} */ ({
        ...(r.labToCanvasOpts ?? {}),
        dprSource: 'device',
      }),
    }),
  },
  {
    key: 'opt-opt-dims-natural',
    label: 'labToCanvasOpts optDims natural',
    apply: (r) => ({
      ...r,
      labToCanvasOpts: /** @type {LabToCanvasOpts} */ ({
        ...(r.labToCanvasOpts ?? {}),
        optDims: 'natural',
      }),
    }),
  },
  {
    key: 'ctx-image-smoothing-low',
    label: 'labToCanvasCtx imageSmoothingQuality low',
    apply: (r) => ({
      ...r,
      labToCanvasCtx: /** @type {LabToCanvasCtx} */ ({
        ...(r.labToCanvasCtx ?? {}),
        imageSmoothingQuality: 'low',
      }),
    }),
  },
  {
    key: 'mp-tc-draw-image-round-all',
    label: 'monkeypatch tc-draw-image-round-all',
    apply: (r) => ({
      ...r,
      monkeypatch: Array.isArray(r.monkeypatch)
        ? [...r.monkeypatch, 'tc-draw-image-round-all']
        : r.monkeypatch
          ? [r.monkeypatch, 'tc-draw-image-round-all']
          : 'tc-draw-image-round-all',
    }),
  },
]

if (TOP_KNOBS.length !== 15) {
  throw new Error(`recipes-tocanvas-lab-wave10-hex.js: expected 15 knobs, got ${TOP_KNOBS.length}`)
}

/**
 * Enumerate k-combinations of indices 0..(n-1), lexicographic.
 * @param {number} n
 * @param {number} k
 */
function* combos(n, k) {
  /** @type {number[]} */
  const c = Array.from({ length: k }, (_, i) => i)
  while (true) {
    yield [...c]
    let i = k - 1
    while (i >= 0 && c[i] === n - k + i) i--
    if (i < 0) return
    c[i]++
    for (let j = i + 1; j < k; j++) c[j] = c[j - 1] + 1
  }
}

/** @returns {number[][]} */
function pickHexIndexCombos() {
  const all = [...combos(15, 6)]
  const stride = Math.max(1, Math.floor(all.length / COUNT))
  /** @type {number[][]} */
  const picked = []
  const seen = new Set()
  for (let i = 0; picked.length < COUNT && i < all.length * 2; i++) {
    const idx = all[(i * stride) % all.length]
    const key = idx.join(',')
    if (seen.has(key)) continue
    seen.add(key)
    picked.push(idx)
  }
  if (picked.length !== COUNT) {
    throw new Error(`recipes-tocanvas-lab-wave10-hex.js: expected ${COUNT} combos, got ${picked.length}`)
  }
  return picked
}

/** @param {number[]} idx */
function applyKnobs(idx) {
  /** @type {FoFixRecipe} */
  let r = {
    id: 'probe',
    label: 'probe',
    idea: 'probe',
    category: 'tocanvas',
    active: true,
    rasterPatch: 'lab-toCanvas',
    inject: 'both',
    css: '',
  }
  for (const i of idx) {
    r = TOP_KNOBS[i].apply(r)
  }
  return r
}

/** @type {FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = pickHexIndexCombos().map((idx, i) => {
  const n = i + 1
  const num = String(n).padStart(3, '0')
  const base = applyKnobs(idx)
  const knobLabels = idx.map((k) => TOP_KNOBS[k].key).join(' + ')
  return {
    ...base,
    id: `tc-lab-w10-hex-${num}`,
    label: `w10 hex #${n}: ${knobLabels}`,
    idea: `Wave10 hex: 6-knob combo (${knobLabels})`,
    notes: 'Wave10 hex; 6 knobs from top-15 set; FO raster only — no text bypass.',
  }
})

if (FO_FIX_RECIPES_SHARD.length !== COUNT) {
  throw new Error(
    `recipes-tocanvas-lab-wave10-hex.js: expected ${COUNT} recipes, got ${FO_FIX_RECIPES_SHARD.length}`,
  )
}

const ids = new Set()
const keys = new Set()
for (const r of FO_FIX_RECIPES_SHARD) {
  if (r.active !== true) throw new Error(`${r.id}: active must be true`)
  if (r.rasterPatch !== 'lab-toCanvas') throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  if (ids.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave10-hex.js: duplicate id ${r.id}`)
  ids.add(r.id)
  const k = tupleKey(r)
  if (keys.has(k)) throw new Error(`recipes-tocanvas-lab-wave10-hex.js: duplicate recipe key at ${r.id}`)
  keys.add(k)
}

export default FO_FIX_RECIPES_SHARD


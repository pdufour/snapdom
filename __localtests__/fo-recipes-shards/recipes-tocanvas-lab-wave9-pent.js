/**
 * Lab toCanvas wave-9 pent — 5-knob combos from 12 top raster knobs.
 * 250 recipes: tc-lab-w9-pent-001..250
 *
 * Raster: lab-toCanvas only (FO raster; no text bypass).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-pent-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe */

/** @type {{ key: string, idea: string, apply: (r: FoFixRecipe) => void }[]} */
const TOP_RASTER_KNOBS = [
  {
    key: 'dpr=device',
    idea: 'Use device DPR instead of harness DPR.',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), dprSource: 'device' }
    },
  },
  {
    key: 'style=device',
    idea: 'Use device pixels when reading style dims.',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), stylePixels: 'device' }
    },
  },
  {
    key: 'ctxScale=false',
    idea: 'Disable ctxScale (draw without implicit dpr scale).',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), ctxScale: false }
    },
  },
  {
    key: 'willReadFrequently=true',
    idea: 'Set Canvas2D willReadFrequently on raster ctx.',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), willReadFrequently: true }
    },
  },
  {
    key: 'alpha=false',
    idea: 'GetContext alpha:false (opaque backing).',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), alpha: false }
    },
  },
  {
    key: 'desync=if-supported',
    idea: 'Enable desynchronized rendering (if supported).',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), desynchronized: 'if-supported' }
    },
  },
  {
    key: 'colorSpace=display-p3',
    idea: 'Request display-p3 internal raster colorSpace.',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), colorSpace: 'display-p3' }
    },
  },
  {
    key: 'canvasColorSpace=display-p3',
    idea: 'Request display-p3 canvasColorSpace (destination canvas).',
    apply: (r) => {
      r.labToCanvasOpts = { ...(r.labToCanvasOpts ?? {}), canvasColorSpace: 'display-p3' }
    },
  },
  {
    key: 'ctx:smooth-off',
    idea: 'Disable image smoothing before drawImage.',
    apply: (r) => {
      r.labToCanvasCtx = { ...(r.labToCanvasCtx ?? {}), imageSmoothingEnabled: false }
    },
  },
  {
    key: 'ctx:reset-transform',
    idea: 'Reset transform before drawImage.',
    apply: (r) => {
      r.labToCanvasCtx = { ...(r.labToCanvasCtx ?? {}), resetTransformBeforeDraw: true }
    },
  },
  {
    key: 'mp:two-stage',
    idea: 'Monkeypatch: two-stage draw (diagnostic).',
    apply: (r) => {
      const mp = r.monkeypatch
      const next = Array.isArray(mp) ? [...mp, 'tc-lab-draw-two-stage'] : mp ? [mp, 'tc-lab-draw-two-stage'] : ['tc-lab-draw-two-stage']
      r.monkeypatch = next
    },
  },
  {
    key: 'mp:createImageBitmap',
    idea: 'Monkeypatch: decode via createImageBitmap path.',
    apply: (r) => {
      const mp = r.monkeypatch
      const next = Array.isArray(mp)
        ? [...mp, 'tc-lab-draw-create-image-bitmap']
        : mp
          ? [mp, 'tc-lab-draw-create-image-bitmap']
          : ['tc-lab-draw-create-image-bitmap']
      r.monkeypatch = next
    },
  },
]

/** @param {number} k @param {number[]} prefix @param {number} start @param {number} n @param {number[][]} out */
function chooseK(k, prefix, start, n, out) {
  if (prefix.length === k) {
    out.push([...prefix])
    return
  }
  for (let i = start; i < n; i++) {
    prefix.push(i)
    chooseK(k, prefix, i + 1, n, out)
    prefix.pop()
  }
}

/** @returns {number[][]} */
function allFiveKnobCombos() {
  /** @type {number[][]} */
  const out = []
  chooseK(5, [], 0, TOP_RASTER_KNOBS.length, out)
  return out
}

/** @param {FoFixRecipe} r */
function normalizeMonkeypatch(r) {
  const mp = r.monkeypatch
  if (!mp) return
  if (!Array.isArray(mp)) return
  r.monkeypatch = [...new Set(mp)].sort()
}

const ALL = allFiveKnobCombos()
const COUNT = 250

if (TOP_RASTER_KNOBS.length !== 12) {
  throw new Error(`recipes-tocanvas-lab-wave9-pent.js: expected 12 raster knobs, got ${TOP_RASTER_KNOBS.length}`)
}

if (ALL.length < COUNT) {
  throw new Error(`recipes-tocanvas-lab-wave9-pent.js: need ${COUNT} combos, got ${ALL.length}`)
}

const stride = Math.max(1, Math.floor(ALL.length / COUNT))
/** @type {number[][]} */
const picked = []
for (let pass = 0; pass < stride && picked.length < COUNT; pass++) {
  for (let i = pass; i < ALL.length && picked.length < COUNT; i += stride) {
    picked.push(ALL[i])
  }
}

if (picked.length !== COUNT) {
  throw new Error(`recipes-tocanvas-lab-wave9-pent.js: expected ${COUNT} picked combos, got ${picked.length}`)
}

/** @type {FoFixRecipe[]} */
const RECIPES = picked.map((combo, idx) => {
  const n = idx + 1
  const num = String(n).padStart(3, '0')
  const knobs = combo.map((i) => TOP_RASTER_KNOBS[i].key)
  const slug = knobs.join(' + ')

  /** @type {FoFixRecipe} */
  const r = {
    id: `tc-lab-w9-pent-${num}`,
    label: `w9 pent #${n}: ${slug}`,
    idea: `Wave9 pent: lab-toCanvas + five raster knobs — ${knobs.join(', ')}`,
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave9 pent #${n}; 5-knob combo from 12 top raster knobs; FO raster only — no text bypass.`,
  }

  for (const knobIdx of combo) TOP_RASTER_KNOBS[knobIdx].apply(r)
  normalizeMonkeypatch(r)
  return r
})

if (RECIPES.length !== COUNT) {
  throw new Error(`recipes-tocanvas-lab-wave9-pent.js: expected ${COUNT} recipes, got ${RECIPES.length}`)
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave9-pent.js: duplicate recipe ids')
}

const labels = new Set(RECIPES.map((r) => r.label))
if (labels.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave9-pent.js: duplicate recipe labels')
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`recipes-tocanvas-lab-wave9-pent.js: expected lab-toCanvas only, got ${r.rasterPatch}`)
  }
  if (r.active !== true) {
    throw new Error(`${r.id}: active must be true`)
  }
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    JSON.stringify(r.monkeypatch ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-pent.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


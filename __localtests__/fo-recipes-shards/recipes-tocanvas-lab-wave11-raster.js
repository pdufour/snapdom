/**
 * Lab toCanvas wave11 — raster policy probes (tc-lab-w11-rp-001..048).
 *
 * Focus: canvas rasterization mechanics (backing-store rounding, fractional dest mapping,
 * decode/draw scheduling, bitmaprenderer transfer, createImageBitmap vs Image).
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w11-rp-*' --open-browser
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @returns {string} */
function q(s) {
  return String(s).replace(/\s+/g, ' ').trim()
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

/**
 * Push a recipe with uniqueness key enforcement.
 * @param {import('../fo-fix-recipe-shared.js').FoFixRecipe} r
 */
function pushRecipe(r) {
  RECIPES.push(r)
}

let n = 0
function nextId() {
  n++
  return { n, num: String(n).padStart(3, '0') }
}

// Group A: backing-store rounding policy (systematic: none/floor/ceil/round) + decode interval / raf.
for (const backingRound of /** @type {const} */ (['none', 'floor', 'ceil', 'round'])) {
  for (const decodeRaf of /** @type {const} */ ([false, true])) {
    const { n: idx, num } = nextId()
    const slug = q(`backing:${backingRound} / decodeRaf:${decodeRaf ? '2rAF' : 'off'} / decodeInterval:100`)
    pushRecipe({
      id: `tc-lab-w11-rp-${num}`,
      label: `tc-lab-w11-rp #${idx}: ${slug}`,
      idea:
        'Backing-store rounding policy (none/floor/ceil/round) with systematic decode RAF settle; no CSS/layout tweaks.',
      css: '',
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      category: 'tocanvas',
      active: true,
      notes: `Wave11 raster policy; ${slug}; FO raster only — no text bypass.`,
      labToCanvasOpts: {
        backingRound,
        decodeIntervalMs: 100,
        decodeRaf,
      },
    })
  }
}

// Group B: fractional draw destination mapping based on measured fractional GBCR in runner meta.
// Variants: backing rounding + ctxScale on/off (mapping differences), keep decode interval at 100ms.
for (const backingRound of /** @type {const} */ (['none', 'floor', 'ceil', 'round'])) {
  for (const ctxScale of /** @type {const} */ ([true, false])) {
    const { n: idx, num } = nextId()
    const slug = q(`measuredDest:gbcr-frac / backing:${backingRound} / ctxScale:${ctxScale ? 'on' : 'off'}`)
    pushRecipe({
      id: `tc-lab-w11-rp-${num}`,
      label: `tc-lab-w11-rp #${idx}: ${slug}`,
      idea:
        'Fractional destination mapping: drawImage dest offsets from measured fractional GBCR (meta.gbcrFracX/Y) with backing rounding + ctxScale knobs.',
      css: '',
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      category: 'tocanvas',
      active: true,
      notes: `Wave11 raster policy; ${slug}; FO raster only — no text bypass.`,
      labToCanvasOpts: {
        measuredDest: 'gbcr-frac',
        backingRound,
        ctxScale,
        decodeIntervalMs: 100,
      },
    })
  }
}

// Group C: blob-url decode vs data-url decode (pipeline only; keeps FO text in foreignObject).
for (const pipeline of /** @type {const} */ ([
  'decode-interval',
  'decode-via-blob-interval',
  'blob-decode-interval',
  'blob-then-double-raf',
])) {
  const { n: idx, num } = nextId()
  const slug = q(`loadPipeline:${pipeline} / backing:round`)
  pushRecipe({
    id: `tc-lab-w11-rp-${num}`,
    label: `tc-lab-w11-rp #${idx}: ${slug}`,
    idea:
      'Decode source pipeline selection (data URL vs blob URL) to probe SVG decode/raster differences without changing capture CSS.',
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave11 raster policy; ${slug}; FO raster only — no text bypass.`,
    labLoadPipeline: pipeline,
    labToCanvasOpts: {
      backingRound: 'round',
      decodeIntervalMs: 100,
      decodeRaf: false,
    },
  })
}

// Group D: bitmaprenderer transfer (ImageBitmap → bitmaprenderer context) via rasterSvgUrl patch.
// Keep variants minimal: baseline data URL vs blob-url decode-via-blob.
for (const patch of /** @type {const} */ (['bitmaprenderer-transfer', 'decode-via-blob'])) {
  const { n: idx, num } = nextId()
  const slug = q(`rasterPatch:${patch}`)
  pushRecipe({
    id: `tc-lab-w11-rp-${num}`,
    label: `tc-lab-w11-rp #${idx}: ${slug}`,
    idea:
      'BitmapRenderer transfer path (transferFromImageBitmap) as an alternate canvas presentation backend; probes image decoding + compositor handoff.',
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: patch,
    category: 'tocanvas',
    active: true,
    notes: `Wave11 raster policy; ${slug}; FO raster only — no text bypass.`,
  })
}

if (RECIPES.length !== 22) {
  throw new Error(`recipes-tocanvas-lab-wave11-raster.js: expected 22 recipes, got ${RECIPES.length}`)
}

// Enforce unique ids + deterministic unique "recipe key" so this shard never emits duplicate warnings.
const seenIds = new Set()
const seenKeys = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave11-raster.js: duplicate id ${r.id}`)
  }
  seenIds.add(r.id)
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labRasterPatches ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css ?? '',
    JSON.stringify(r.monkeypatch ?? null),
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave11-raster.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Wave 7 — parallel canvas pixel-alignment probes (tc-lab-w7-px-001..075).
 *
 * Focus: pixel alignment knobs only:
 * - backing store snap: floor/ceil/round (outW/outH × dpr)
 * - dpr source: harness dpr vs window.devicePixelRatio
 * - style pixels: css px vs device px
 * - optDims: harness-css vs harness-device
 * - ctxScale: on/off
 * - “even-dimension-ish” snaps: round-dims svgRootRound + device-grid-floor labPreRaster
 *
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-px-*'
 */

const BASE = {
  inject: 'raster',
  rasterPatch: 'lab-toCanvas',
  category: 'tocanvas',
  active: true,
}

/**
 * @typedef {'none' | 'floor' | 'ceil' | 'round'} BackingRound
 * @typedef {'harness' | 'device'} DprSource
 * @typedef {'css' | 'device'} StylePixels
 * @typedef {'harness-css' | 'harness-device'} OptDims
 */

/**
 * @param {object} spec
 * @param {number} spec.n
 * @param {BackingRound} spec.backingRound
 * @param {DprSource} spec.dprSource
 * @param {StylePixels} spec.stylePixels
 * @param {OptDims} spec.optDims
 * @param {boolean} spec.ctxScale
 * @param {string | null} [spec.svgRootRound]
 * @param {string | null} [spec.labPreRaster]
 * @returns {import('../fo-fix-recipe-shared.js').FoFixRecipe}
 */
function toRecipe(spec) {
  const num = String(spec.n).padStart(3, '0')
  const ctxScaleLabel = spec.ctxScale ? 'ctxScale' : 'no-ctxScale'
  const rootLabel = spec.svgRootRound ? `root:${spec.svgRootRound}` : 'root:none'
  const preLabel = spec.labPreRaster ? `pre:${spec.labPreRaster}` : 'pre:none'
  return {
    id: `tc-lab-w7-px-${num}`,
    label:
      `tc-lab-w7-px #${spec.n}: ` +
      `${spec.backingRound} backing × ${spec.dprSource} dpr × ${spec.stylePixels} style × ` +
      `${spec.optDims} × ${ctxScaleLabel} × ${rootLabel} × ${preLabel}`,
    idea:
      `Pixel alignment probe: backingRound=${spec.backingRound}; dprSource=${spec.dprSource}; ` +
      `stylePixels=${spec.stylePixels}; optDims=${spec.optDims}; ctxScale=${String(spec.ctxScale)}; ` +
      `svgRootRound=${spec.svgRootRound ?? 'none'}; labPreRaster=${spec.labPreRaster ?? 'none'}.`,
    notes:
      'Wave7 pixel grid: no text bypass; lab-toCanvas only; focus on outW/outH×dpr rounding and device dpr vs harness dpr.',
    ...BASE,
    ...(spec.svgRootRound ? { svgRootRound: spec.svgRootRound } : null),
    ...(spec.labPreRaster ? { labPreRaster: spec.labPreRaster } : null),
    labToCanvasOpts: {
      backingRound: spec.backingRound,
      dprSource: spec.dprSource,
      stylePixels: spec.stylePixels,
      optDims: spec.optDims,
      ctxScale: spec.ctxScale,
    },
  }
}

/** @type {Array<Parameters<typeof toRecipe>[0]>} */
const SPECS = []
let n = 0

const BACKING_ROUNDS = /** @type {const} */ (['none', 'floor', 'ceil', 'round'])
const DPR_SOURCES = /** @type {const} */ (['harness', 'device'])
const OPT_DIMS = /** @type {const} */ (['harness-css', 'harness-device'])
const CTX_SCALES = /** @type {const} */ ([true, false])

// 1) “CSS style pixels” grid (32): (backingRound × dprSource × optDims × ctxScale)
for (const backingRound of BACKING_ROUNDS) {
  for (const dprSource of DPR_SOURCES) {
    for (const optDims of OPT_DIMS) {
      for (const ctxScale of CTX_SCALES) {
        SPECS.push({
          n: ++n,
          backingRound,
          dprSource,
          stylePixels: 'css',
          optDims,
          ctxScale,
          svgRootRound: null,
          labPreRaster: null,
        })
      }
    }
  }
}

// 2) “Device style pixels” grid (32): same matrix, but stylePixels=device.
for (const backingRound of BACKING_ROUNDS) {
  for (const dprSource of DPR_SOURCES) {
    for (const optDims of OPT_DIMS) {
      for (const ctxScale of CTX_SCALES) {
        SPECS.push({
          n: ++n,
          backingRound,
          dprSource,
          stylePixels: 'device',
          optDims,
          ctxScale,
          svgRootRound: null,
          labPreRaster: null,
        })
      }
    }
  }
}

// 3) Extra 11: svgRootRound “round-dims” + device-grid-floor pre-snap spot checks.
for (const backingRound of BACKING_ROUNDS) {
  for (const dprSource of DPR_SOURCES) {
    if (SPECS.length >= 72) break
    SPECS.push({
      n: ++n,
      backingRound,
      dprSource,
      stylePixels: 'css',
      optDims: 'harness-css',
      ctxScale: true,
      svgRootRound: 'round-dims',
      labPreRaster: null,
    })
  }
}

for (const backingRound of /** @type {const} */ (['floor', 'ceil', 'round'])) {
  if (SPECS.length >= 75) break
  SPECS.push({
    n: ++n,
    backingRound,
    dprSource: 'device',
    stylePixels: 'css',
    optDims: 'harness-css',
    ctxScale: true,
    svgRootRound: 'round-dims',
    labPreRaster: 'device-grid-floor',
  })
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(toRecipe)

if (RECIPES.length !== 75) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-pixel.js: expected 75 recipes, got ${RECIPES.length}`,
  )
}

// check-dupes: keep the key aligned with the knobs this shard touches.
const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch,
    r.labPreRaster ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave7-pixel.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


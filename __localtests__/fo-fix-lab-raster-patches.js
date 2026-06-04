/**
 * Lab rasterPatch tokens → fo-fix-toCanvas.js flags (harness only; no src/).
 * Used by fo-fix-lab-runner rasterSvgUrl / lab-toCanvas paths and recipe shards.
 */

/** @type {readonly string[]} */
export const LAB_RASTER_PATCH_TOKENS = [
  'lab-decode-200ms',
  'lab-decode-100ms',
  'lab-decode-off',
  'lab-decode-double',
  'lab-decode-raf',
  'lab-draw-round',
  'lab-draw-frac',
  'lab-backing-floor',
  'lab-backing-ceil',
  'lab-ctx-smooth-off',
]

/** @type {ReadonlySet<string>} */
export const LAB_RASTER_PATCH_TOKEN_SET = new Set(LAB_RASTER_PATCH_TOKENS)

/**
 * @param {string | null | undefined} patch
 * @returns {boolean}
 */
export function isLabRasterPatchToken(patch) {
  return typeof patch === 'string' && LAB_RASTER_PATCH_TOKEN_SET.has(patch)
}

/**
 * @typedef {'base' | 'frac'} LabRasterFork
 * @typedef {import('./fo-fix-toCanvas.js').LabToCanvasCtxOptions} LabToCanvasCtxOptions
 * @typedef {import('./fo-fix-recipe-shared.js').LabToCanvasOpts} LabToCanvasOpts
 * @typedef {{
 *   fork: LabRasterFork,
 *   labToCanvasOpts: LabToCanvasOpts,
 *   labCtx: LabToCanvasCtxOptions,
 *   decodeIntervalMs?: number | false,
 *   decodeDouble?: boolean,
 *   decodeRaf?: boolean,
 *   roundDrawImage?: boolean,
 * }} LabRasterResolved
 */

/**
 * @param {string} token
 * @param {LabRasterResolved} acc
 */
function applyLabRasterToken(token, acc) {
  switch (token) {
    case 'lab-decode-200ms':
      acc.decodeIntervalMs = 200
      break
    case 'lab-decode-100ms':
      acc.decodeIntervalMs = 100
      break
    case 'lab-decode-off':
      acc.decodeIntervalMs = false
      break
    case 'lab-decode-double':
      acc.decodeDouble = true
      break
    case 'lab-decode-raf':
      acc.decodeRaf = true
      break
    case 'lab-draw-round':
      acc.roundDrawImage = true
      break
    case 'lab-draw-frac':
      acc.fork = 'frac'
      break
    case 'lab-backing-floor':
      acc.labToCanvasOpts.backingRound = 'floor'
      break
    case 'lab-backing-ceil':
      acc.labToCanvasOpts.backingRound = 'ceil'
      break
    case 'lab-ctx-smooth-off':
      acc.labCtx.imageSmoothingEnabled = false
      break
    default:
      break
  }
}

/**
 * Map lab rasterPatch token(s) + recipe opts to fo-fix-toCanvas call shape.
 * @param {string | string[]} patches — single token or ordered list (recipe.labRasterPatches)
 * @param {LabToCanvasOpts} [recipeLabOpts]
 * @returns {LabRasterResolved}
 */
export function resolveLabRasterOptions(patches, recipeLabOpts) {
  const list = Array.isArray(patches) ? patches : [patches]
  /** @type {LabRasterResolved} */
  const acc = {
    fork: 'base',
    labToCanvasOpts: { ...(recipeLabOpts ?? {}) },
    labCtx: {},
    decodeDouble: false,
    decodeRaf: false,
    roundDrawImage: false,
  }
  for (const token of list) {
    if (isLabRasterPatchToken(token)) applyLabRasterToken(token, acc)
  }
  return acc
}

/**
 * @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} recipe
 * @returns {LabRasterResolved | null}
 */
export function resolveLabRasterOptionsFromRecipe(recipe) {
  const rp = recipe.rasterPatch ?? 'none'
  const extra = recipe.labRasterPatches ?? []
  if (isLabRasterPatchToken(rp)) {
    return resolveLabRasterOptions([rp, ...extra], recipe.labToCanvasOpts)
  }
  if (rp === 'lab-toCanvas' && extra.length) {
    return resolveLabRasterOptions(extra, recipe.labToCanvasOpts)
  }
  return null
}

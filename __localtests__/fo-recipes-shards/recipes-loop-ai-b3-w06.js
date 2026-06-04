/**
 * Loop AI batch-3 FO recipe shard (worker 6) — offscreen / decode / viewBox raster paths.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w06-001',
    label: 'Loop AI b3 w06 #001: offscreen canvas blit',
    idea: 'OffscreenCanvas intermediate decode then blit to lab canvas',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'offscreen-canvas',
    notes: 'Loop AI b3 shard worker 06; offscreen-canvas only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w06-002',
    label: 'Loop AI b3 w06 #002: integer viewBox snap',
    idea: 'integer-viewbox rounding on capture svg — sub-pixel viewBox vs FO backing store',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b3 shard worker 06; integer-viewbox only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w06-003',
    label: 'Loop AI b3 w06 #003: decode-interval wait',
    idea: 'decode-interval raster — drawImageInterval flush before FO ink probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{shape-rendering:geometricPrecision!important;image-rendering:auto!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b3 shard worker 06; decode-interval only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w06-004',
    label: 'Loop AI b3 w06 #004: createImageBitmap decode',
    idea: 'create-image-bitmap raster path — ImageBitmap handoff before final draw',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'create-image-bitmap',
    notes: 'Loop AI b3 shard worker 06; create-image-bitmap only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

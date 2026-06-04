/**
 * Loop AI crazy FO recipe shard (worker 2) — transform / compositor theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w02-001',
    label: 'Loop AI w02 #001: matrix3d identity layer',
    idea: 'matrix3d identity + translateZ(0) — forced compositor layer on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)!important;will-change:transform!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w02-002',
    label: 'Loop AI w02 #002: skewX 0.02deg micro-shear',
    idea: 'skewX(0.02deg) sub-degree shear — glyph axis vs raster snap',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:skewX(0.02deg)!important;transform-origin:left center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w02-003',
    label: 'Loop AI w02 #003: scaleY 0.9998 vertical shrink',
    idea: 'scaleY(0.9998) vertical-only shrink before FO raster decode',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:scaleY(0.9998)!important;transform-origin:top center!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

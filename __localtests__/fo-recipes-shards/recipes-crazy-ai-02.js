/**
 * AI crazy FO recipe shard (worker 2) — 3D transform / subpixel raster theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w02-001',
    label: 'Crazy AI w02 #001: translate3d layer',
    idea: 'translate3d(0,0,0) + backface-visibility:hidden — compositor layer on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:translate3d(0,0,0)!important;backface-visibility:hidden!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w02-002',
    label: 'Crazy AI w02 #002: rotate 0.01deg micro-tilt',
    idea: 'rotate(0.01deg) sub-degree tilt — glyph snap vs axis alignment',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:rotate(0.01deg)!important;transform-origin:center center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w02-003',
    label: 'Crazy AI w02 #003: scale3d 0.9999 X shrink',
    idea: 'scale3d(0.9999,1,1) horizontal-only 3D shrink before raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:scale3d(0.9999,1,1)!important;transform-origin:top left!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'AI crazy shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w02-004',
    label: 'Crazy AI w02 #004: perspective + will-change',
    idea: 'perspective(800px) on FO + will-change:transform on * — 3D context probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject{perspective:800px!important}foreignObject *{will-change:transform!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w02-005',
    label: 'Crazy AI w02 #005: flip-y + int-floor viewBox',
    idea: 'FO baseline + flip-y raster mirror + integer floor viewBox snap',
    css: FO_BASELINE_CSS + 'foreignObject *{transform-style:preserve-3d!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'flip-y',
    svgRootRound: 'int-floor',
    notes: 'AI crazy shard worker 02 — transform theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

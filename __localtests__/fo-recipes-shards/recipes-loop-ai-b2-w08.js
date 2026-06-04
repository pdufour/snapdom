/**
 * Loop AI batch-2 crazy FO recipe shard (worker 8) — overflow / clip theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w08-001',
    label: 'Loop AI b2 w08 #001: overflow-y auto scrollport',
    idea: 'overflow-y:auto on FO — vertical scrollport without horizontal clip',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow-y:auto!important;overflow-x:visible!important;max-height:100%!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w08-002',
    label: 'Loop AI b2 w08 #002: contain strict FO',
    idea: 'contain:strict on FO root — size+layout+paint+style containment bundle',
    css:
      FO_BASELINE_CSS +
      'foreignObject{contain:strict!important;overflow:visible!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w08-003',
    label: 'Loop AI b2 w08 #003: mask-image none reset',
    idea: 'mask-image:none on FO * — cancel inherited mask before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mask-image:none!important;-webkit-mask-image:none!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w08-004',
    label: 'Loop AI b2 w08 #004: clip-path circle full',
    idea: 'clip-path:circle(100%) on FO — radial clip geometry vs inset baseline',
    css:
      FO_BASELINE_CSS +
      'foreignObject{clip-path:circle(100% at 50% 50%)!important;overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 08 — overflow theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

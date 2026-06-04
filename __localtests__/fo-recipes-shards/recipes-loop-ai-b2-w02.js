/**
 * Loop AI batch-2 FO recipe shard (worker 2) — flow / BFC / column wild layout.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w02-001',
    label: 'Loop AI b2 w02 #001: flow-root BFC on FO',
    idea: 'display:flow-root on foreignObject — block formatting context vs FO intrinsic box',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flow-root!important;overflow:visible!important;box-sizing:border-box!important}foreignObject *{min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b2 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w02-002',
    label: 'Loop AI b2 w02 #002: float left clear both',
    idea: 'float:left + clear:both on FO * — legacy float strut vs flex nav text leaves',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{float:left!important;clear:both!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b2 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w02-003',
    label: 'Loop AI b2 w02 #003: single-column multicol',
    idea: 'column-count:1 + column-gap:0 on FO — multicol engine with degenerate column split',
    css:
      FO_BASELINE_CSS +
      'foreignObject{column-count:1!important;column-gap:0!important;column-fill:auto!important}foreignObject *{break-inside:auto!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b2 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w02-004',
    label: 'Loop AI b2 w02 #004: sticky top zero layer',
    idea: 'position:sticky + top:0 on FO * — sticky containing block inside FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important;position:relative!important}foreignObject *{position:sticky!important;top:0!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raf',
    notes: 'Loop AI b2 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

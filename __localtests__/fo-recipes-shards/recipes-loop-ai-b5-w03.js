/**
 * Loop AI batch-5 FO recipe shard (worker 3) — unitless lh 1 vs normal / synthesis deep.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w03-001',
    label: 'Loop AI b5 w03 #001: line-height 1 unitless',
    idea: 'line-height:1 on FO * — unitless strut vs normal half-leading probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:1!important;vertical-align:baseline!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 03; lh:1 only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w03-002',
    label: 'Loop AI b5 w03 #002: line-height normal',
    idea: 'line-height:normal on FO * — browser normal strut vs unitless lh:1',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:normal!important;vertical-align:baseline!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 03; lh:normal only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w03-003',
    label: 'Loop AI b5 w03 #003: @layer lh 1 vs normal',
    idea: 'Ordered @layer low/high — line-height 1 vs normal override inside FO subtree',
    css:
      FO_BASELINE_CSS +
      '@layer fo-loop-b5-w03-low, fo-loop-b5-w03-high;' +
      '@layer fo-loop-b5-w03-low{foreignObject *{line-height:1!important}}' +
      '@layer fo-loop-b5-w03-high{foreignObject *{line-height:normal!important;' +
      'box-sizing:border-box!important;min-width:0!important}}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 03; lh 1 vs normal cascade; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w03-004',
    label: 'Loop AI b5 w03 #004: font-synthesis weight style none',
    idea: 'font-synthesis:none + weight/style none on FO — block faux bold/italic in FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-synthesis:none!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 03; font-synthesis deep only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

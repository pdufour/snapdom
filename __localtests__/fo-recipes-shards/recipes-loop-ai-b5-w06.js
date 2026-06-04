/**
 * Loop AI batch-5 FO recipe shard (worker 6) — text-fix: min-height 0 on flex text items (variants).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w06-001',
    label: 'Loop AI b5 w06 #001: min-height 0 flex items',
    idea: 'min-height:0!important on FO flex items — shrink-to-fit vs line box strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{min-height:0!important;min-width:0!important;flex-shrink:1!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 06; min-height 0 flex items; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w06-002',
    label: 'Loop AI b5 w06 #002: min-height 0 block-size auto',
    idea: 'min-height:0 + block-size:auto on FO * — flex/grid item shrink vs intrinsic line height',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{min-height:0!important;block-size:auto!important;min-width:0!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 06; min-height 0 block-size auto; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w06-003',
    label: 'Loop AI b5 w06 #003: min-height 0 flex column',
    idea: 'flex-direction:column + min-height:0 on FO * — vertical flex text stacks shrink',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{display:flex!important;flex-direction:column!important;' +
      'min-height:0!important;min-width:0!important;flex-shrink:1!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 06; min-height 0 flex column; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w06-004',
    label: 'Loop AI b5 w06 #004: min-height unset flex cascade',
    idea: 'min-height:unset on FO * inside flex — cascade reset vs author min-height on ancestors',
    css:
      FO_BASELINE_CSS +
      'foreignObject{min-height:1px!important}' +
      'foreignObject *{min-height:unset!important;min-width:0!important;flex-shrink:1!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 06; min-height unset flex cascade; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

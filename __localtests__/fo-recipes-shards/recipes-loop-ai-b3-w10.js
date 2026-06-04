/**
 * Loop AI batch-3 FO recipe shard (worker 10) — font-optical-sizing / color-mix / margin-trim / view-transition-name.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w10-001',
    label: 'Loop AI b3 w10 #001: font-optical-sizing auto',
    idea: 'font-optical-sizing:auto on FO * — optical size axis vs auto size-adjust metrics',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{font-optical-sizing:auto!important;font-size-adjust:none!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w10-002',
    label: 'Loop AI b3 w10 #002: color-mix oklch ink',
    idea: 'color-mix(in oklch, currentColor 99%, transparent) on FO * — relative color vs inherited ink',
    css:
      FO_BASELINE_CSS +
      'foreignObject{color-scheme:light dark!important}' +
      'foreignObject *{color:color-mix(in oklch, currentColor 99%, transparent)!important;' +
      'background-color:color-mix(in srgb, transparent, transparent)!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w10-003',
    label: 'Loop AI b3 w10 #003: margin-trim block-end',
    idea: 'margin-trim:block-end on FO * — trim trailing block margin vs FO line box strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{margin-trim:block-end!important;display:block!important;' +
      'margin-block-end:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w10-004',
    label: 'Loop AI b3 w10 #004: view-transition-name layer',
    idea: 'view-transition-name on FO root — named view-transition layer before FO raster decode',
    css:
      FO_BASELINE_CSS +
      'foreignObject{view-transition-name:fo-loop-b3-w10!important;contain:layout!important;' +
      'overflow:visible!important;position:relative!important}' +
      'foreignObject *{view-transition-name:none!important;min-width:0!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-7 FO recipe shard (worker 1) — outside-box: @property / calc-size / sibling-index / @scope.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w01-001',
    label: 'Loop AI b7 w01 #001: @property trim length',
    idea: '@property --fo-b7-trim registered length on FO * — typed custom prop vs anonymous var',
    css:
      FO_BASELINE_CSS +
      '@property --fo-b7-trim{syntax:"<length>";inherits:true;initial-value:0px}' +
      'foreignObject *{--fo-b7-trim:0.25px!important;padding-block-start:var(--fo-b7-trim)!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 01; @property registered custom props only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w01-002',
    label: 'Loop AI b7 w01 #002: calc-size max-content',
    idea: 'calc-size(max-content,size) width/height on FO * — intrinsic size keyword interpolation probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{width:calc-size(max-content,size)!important;height:calc-size(max-content,size)!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 01; calc-size() only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w01-003',
    label: 'Loop AI b7 w01 #003: sibling-index nudge',
    idea: 'sibling-index() in calc padding on FO * — per-sibling subpixel strut offset inside FO subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{padding-inline-start:calc((sibling-index() - 1) * 0.01px)!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 01; sibling-index() only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w01-004',
    label: 'Loop AI b7 w01 #004: @scope FO subtree',
    idea: '@scope (foreignObject) to (foreignObject *) — scoped cascade boundary on FO text leaves',
    css:
      FO_BASELINE_CSS +
      '@scope (foreignObject) to (foreignObject *){' +
      ':scope{overflow:visible!important}' +
      '*{box-sizing:border-box!important;min-width:0!important;line-height:normal!important}}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 01; @scope only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

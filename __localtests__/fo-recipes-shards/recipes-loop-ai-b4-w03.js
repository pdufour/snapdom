/**
 * Loop AI batch-4 FO recipe shard (worker 3) — min-height / aspect / object-fit / shape-margin.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w03-001',
    label: 'Loop AI b4 w03 #001: min-height 0 flex',
    idea: 'min-height:0 + block-size:auto on FO flex/grid items — shrink-to-fit vs line box',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:column!important;overflow:visible!important}' +
      'foreignObject *{min-height:0!important;block-size:auto!important;flex-shrink:1!important;' +
      'min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 03; min-height:0 only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w03-002',
    label: 'Loop AI b4 w03 #002: aspect-ratio shell',
    idea: 'aspect-ratio:5/2 on FO>div — intrinsic ratio clash with serialized FO dimensions',
    css:
      FO_BASELINE_CSS +
      'foreignObject>div{aspect-ratio:5/2!important;width:auto!important;height:auto!important;' +
      'box-sizing:border-box!important}foreignObject{overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 03; aspect-ratio only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w03-003',
    label: 'Loop AI b4 w03 #003: object-fit cover',
    idea: 'object-fit:cover + object-position:center on FO replaced elements',
    css:
      FO_BASELINE_CSS +
      'foreignObject img,foreignObject video,foreignObject svg{' +
      'object-fit:cover!important;object-position:center center!important;' +
      'max-width:100%!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 03; object-fit only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w03-004',
    label: 'Loop AI b4 w03 #004: shape-margin float',
    idea: 'shape-outside:margin-box + shape-margin on FO inline — float-adjacent wrap probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{' +
      'shape-outside:margin-box!important;shape-margin:0.25em!important;shape-image-threshold:0.5!important;' +
      'display:inline-block!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 03; shape-margin only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

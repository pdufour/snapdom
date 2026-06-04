/**
 * Loop AI batch-4 FO recipe shard (worker 2) — pointer / touch / logical inset / max-width.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w02-001',
    label: 'Loop AI b4 w02 #001: touch-action pan pinch',
    idea: 'touch-action:pan-x pan-y pinch-zoom on FO — gesture hit layer vs FO paint',
    css:
      FO_BASELINE_CSS +
      'foreignObject{touch-action:pan-x pan-y pinch-zoom!important;overflow:visible!important}' +
      'foreignObject *{touch-action:inherit!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 02; touch-action only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w02-002',
    label: 'Loop AI b4 w02 #002: pointer-events layout split',
    idea: 'pointer-events:none on FO root + auto on * — layout paint without root hit target',
    css:
      FO_BASELINE_CSS +
      'foreignObject{pointer-events:none!important;overflow:visible!important}' +
      'foreignObject *{pointer-events:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 02; pointer-events layout split; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w02-003',
    label: 'Loop AI b4 w02 #003: inset logical props',
    idea: 'inset-inline + inset-block logical anchors on FO * with position:absolute',
    css:
      FO_BASELINE_CSS +
      'foreignObject{position:relative!important;overflow:visible!important;writing-mode:horizontal-tb!important}' +
      'foreignObject *{position:absolute!important;inset-inline-start:0!important;inset-inline-end:0!important;' +
      'inset-block-start:0!important;inset-block-end:auto!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 02; logical inset only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w02-004',
    label: 'Loop AI b4 w02 #004: max-width none fit',
    idea: 'max-width:none + width:max-content on FO subtree — unconstrained inline max vs flex shrink',
    css:
      FO_BASELINE_CSS +
      'foreignObject{width:max-content!important;max-width:none!important;overflow:visible!important}' +
      'foreignObject *{max-width:none!important;width:max-content!important;min-width:0!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 02; max-width:none only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-3 crazy FO recipe shard (worker 8) — containment / flow / motion theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w08-001',
    label: 'Loop AI b3 w08 #001: contain strict size clamp',
    idea: 'contain:strict on FO root with inline-size/block-size 100% — full containment vs visible overflow',
    css:
      FO_BASELINE_CSS +
      'foreignObject{contain:strict!important;overflow:visible!important;box-sizing:border-box!important;inline-size:100%!important;block-size:100%!important;min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 08 — contain:strict; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w08-002',
    label: 'Loop AI b3 w08 #002: vertical then horizontal cascade',
    idea: 'writing-mode:vertical-rl on FO then horizontal-tb + text-orientation:mixed reset on all descendants',
    css:
      FO_BASELINE_CSS +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 08 — writing-mode cascade reset; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w08-003',
    label: 'Loop AI b3 w08 #003: animation none everywhere',
    idea: 'animation:none!important on foreignObject and every descendant — kill keyframes before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject,foreignObject *{animation:none!important;animation-name:none!important;animation-duration:0s!important;animation-delay:0s!important;animation-play-state:paused!important;transition:none!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 08 — animation none important; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w08-004',
    label: 'Loop AI b3 w08 #004: strict contain plus motion freeze',
    idea: 'contain:strict on FO * with animation:none on same subtree — containment + motion kill combo',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important;contain:none!important}foreignObject *{contain:strict!important;animation:none!important;transition:none!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 08 — strict contain + animation freeze; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

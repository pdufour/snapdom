/**
 * Loop AI batch-3 crazy FO recipe shard (worker 7) — box-tree / compositor theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w07-001',
    label: 'Loop AI b3 w07 #001: FO display contents flex rebox',
    idea: 'display:contents on FO root — descendants reboxed as flex column stretch',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:contents!important;overflow:visible!important}foreignObject *{display:flex!important;flex-direction:column!important;align-items:stretch!important;box-sizing:border-box!important;min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 07 — display:contents FO root; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w07-002',
    label: 'Loop AI b3 w07 #002: all unset grid rebox',
    idea: 'all:unset on FO subtree then explicit grid + border-box rebox on every node',
    css:
      FO_BASELINE_CSS +
      'foreignObject,foreignObject *{all:unset!important;display:grid!important;box-sizing:border-box!important;min-width:0!important;min-height:0!important;overflow:visible!important;font-kerning:normal!important;line-height:normal!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 07 — all:unset rebox; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w07-003',
    label: 'Loop AI b3 w07 #003: scale 0.999 compositor root',
    idea: 'transform:scale(0.999) on FO root + translateZ(0) — sub-pixel compositor snap without child scale',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform:scale(0.999)!important;transform-origin:0 0!important;transform-style:preserve-3d!important;will-change:transform!important;backface-visibility:hidden!important;overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 07 — scale(0.999) compositor; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w07-004',
    label: 'Loop AI b3 w07 #004: plus-lighter blend stack reset',
    idea: 'mix-blend-mode:plus-lighter on FO * then isolation:isolate + mix-blend-mode:normal on FO root',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important;mix-blend-mode:normal!important;position:relative!important;overflow:visible!important}foreignObject *{mix-blend-mode:plus-lighter!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-3 shard worker 07 — plus-lighter reset; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

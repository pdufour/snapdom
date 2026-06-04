/**
 * Loop AI batch-4 extreme FO recipe shard (worker 7) — 3D perspective-origin / preserve-3d / backface theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w07-001',
    label: 'Loop AI b4 w07 #001: perspective-origin top left',
    idea: 'perspective:500px + perspective-origin:top left on FO — corner vanish vs FO text ink',
    css:
      FO_BASELINE_CSS +
      'foreignObject{perspective:500px!important;perspective-origin:top left!important;' +
      'overflow:visible!important;box-sizing:border-box!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 07 — perspective-origin extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w07-002',
    label: 'Loop AI b4 w07 #002: preserve-3d shell flat direct child',
    idea: 'transform-style:preserve-3d on FO root then flat!important on FO>div — selective 3D flatten',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform-style:preserve-3d!important;perspective:1000px!important;' +
      'overflow:visible!important}foreignObject>div{transform-style:flat!important;' +
      'min-width:0!important;box-sizing:border-box!important}foreignObject *{min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 07 — preserve-3d extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w07-003',
    label: 'Loop AI b4 w07 #003: backface hidden subtree',
    idea: 'backface-visibility:hidden on FO and every descendant + will-change:transform — full layer stack',
    css:
      FO_BASELINE_CSS +
      'foreignObject,foreignObject *{backface-visibility:hidden!important;' +
      'will-change:transform!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 07 — backface-visibility extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w07-004',
    label: 'Loop AI b4 w07 #004: rotateX zero load-event',
    idea: 'rotateX(0deg) identity on FO * + load-event-interval raster — 3D reset before Image onload flush',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{transform:rotateX(0deg)!important;' +
      'transform-style:flat!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'load-event-interval',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI batch-4 shard worker 07 — rotateX(0) + load-event-interval; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

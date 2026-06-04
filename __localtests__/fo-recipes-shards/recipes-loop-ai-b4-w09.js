/**
 * Loop AI batch-4 extreme FO recipe shard (worker 9) — 3D subpixel / partial flatten / font prime theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w09-001',
    label: 'Loop AI b4 w09 #001: perspective-origin zero subpixel',
    idea: 'perspective:1px + perspective-origin:0 0 on FO — subpixel vanish origin vs FO ink bounds',
    css:
      FO_BASELINE_CSS +
      'foreignObject{perspective:1px!important;perspective-origin:0 0!important;' +
      'transform-style:preserve-3d!important;overflow:visible!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 09 — perspective-origin extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w09-002',
    label: 'Loop AI b4 w09 #002: preserve-3d partial flat purge',
    idea: 'preserve-3d + perspective on FO then flat on FO *:not(div) — partial 3D context collapse',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform-style:preserve-3d!important;perspective:1000px!important;' +
      'overflow:visible!important}foreignObject *:not(div){transform-style:flat!important;' +
      'min-width:0!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 09 — preserve-3d extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w09-003',
    label: 'Loop AI b4 w09 #003: backface hidden root only',
    idea: 'backface-visibility:hidden on FO root only + translateZ(0) on * — root layer vs flat subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject{backface-visibility:hidden!important;overflow:visible!important;' +
      'transform-style:preserve-3d!important}foreignObject *{transform:translateZ(0)!important;' +
      'backface-visibility:visible!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 09 — backface-visibility extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w09-004',
    label: 'Loop AI b4 w09 #004: rotateX zero phantom font',
    idea: 'rotateX(0deg) on FO>div only + phantom-font-prime raster — scoped 3D reset before font prime',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject>div{transform:rotateX(0deg)!important;' +
      'transform-origin:50% 50%!important;box-sizing:border-box!important;min-width:0!important}' +
      'foreignObject *{min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'phantom-font-prime',
    notes: 'Loop AI batch-4 shard worker 09 — rotateX(0) + phantom-font-prime; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-4 extreme FO recipe shard (worker 8) — 3D per-node / cascade / decode theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w08-001',
    label: 'Loop AI b4 w08 #001: perspective-origin bottom center',
    idea: 'perspective:800px + perspective-origin:50% 100% on FO — bottom-center vanish vs line boxes',
    css:
      FO_BASELINE_CSS +
      'foreignObject{perspective:800px!important;perspective-origin:50% 100%!important;' +
      'overflow:visible!important}foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 08 — perspective-origin extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w08-002',
    label: 'Loop AI b4 w08 #002: preserve-3d per-node grid',
    idea: 'transform-style:preserve-3d + translateZ(0) on every FO * — per-node 3D compositor grid',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform:none!important;overflow:visible!important;' +
      'perspective:600px!important}foreignObject *{transform-style:preserve-3d!important;' +
      'transform:translateZ(0)!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 08 — preserve-3d extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w08-003',
    label: 'Loop AI b4 w08 #003: backface visible cascade reset',
    idea: 'backface-visibility:hidden on FO root then visible!important on FO * — backface cascade purge',
    css:
      FO_BASELINE_CSS +
      'foreignObject{backface-visibility:hidden!important;overflow:visible!important;' +
      'transform:translateZ(0)!important}foreignObject *{backface-visibility:visible!important;' +
      'min-width:0!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-4 shard worker 08 — backface-visibility extreme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w08-004',
    label: 'Loop AI b4 w08 #004: rotateX zero microtask decode',
    idea: 'rotateX(0deg) + rotateY(0deg) identity on FO root + decode-microtask-twice raster flush',
    css:
      FO_BASELINE_CSS +
      'foreignObject{transform:rotateX(0deg) rotateY(0deg)!important;transform-style:preserve-3d!important;' +
      'overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-microtask-twice',
    svgRootRound: 'round-dims',
    notes: 'Loop AI batch-4 shard worker 08 — rotateX(0) + decode-microtask-twice; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

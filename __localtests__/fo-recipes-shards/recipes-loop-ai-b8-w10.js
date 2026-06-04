/**
 * Loop AI batch-8 FO recipe shard (worker 10) — text-fix: device-grid + from-font lh + text patch combo.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w10-001',
    label: 'Loop AI b8 w10 #001: device-grid + from-font lh',
    idea: 'device-grid-floor raster + line-height:from-font on FO * — font-metrics strut with grid snap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b8 w10; device-grid + from-font lh; one raster knob + text metric — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w10-002',
    label: 'Loop AI b8 w10 #002: device-grid + pin lh live',
    idea: 'device-grid-floor raster + h2-pin-line-height-from-live — live strut pin with grid floor snap',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b8 w10; device-grid + live lh pin; one raster + one text patch — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w10-003',
    label: 'Loop AI b8 w10 #003: device-grid + pin width from-font',
    idea: 'device-grid-floor + h2-pin-width-from-live + line-height:from-font on FO * text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b8 w10; device-grid + pin width + from-font lh; one raster + one text patch — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w10-004',
    label: 'Loop AI b8 w10 #004: device-grid + stretch leaf from-font',
    idea: 'device-grid-floor + h2-flex-stretch-leaf-from-live + line-height:from-font on FO * text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}' +
      'foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b8 w10; device-grid + stretch-leaf + from-font lh; one raster + one text patch — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

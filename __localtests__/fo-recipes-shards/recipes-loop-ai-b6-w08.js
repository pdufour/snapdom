/**
 * Loop AI batch-6 FO recipe shard (worker 8) — text-fix: h2 pin lh / stretch leaf / width / device-grid.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w08-001',
    label: 'Loop AI b6 w08 #001: h2 pin lh + Chromium rAF decode',
    idea: 'h2-pin-line-height-from-live measured strut + Chromium font copy + decode-interval-raf',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval-raf',
    notes: 'Loop AI b6 shard worker 08; pin lh + Chromium; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w08-002',
    label: 'Loop AI b6 w08 #002: FO>div lh normal + stretch leaf int VB',
    idea: 'FO>div line-height:normal + h2-flex-stretch-leaf-from-live + integer viewBox snap',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b6 shard worker 08; FO>div normal + stretch leaf; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w08-003',
    label: 'Loop AI b6 w08 #003: pin width live on text box int VB',
    idea: 'h2-pin-width-from-live width pin on FO text box + integer viewBox before decode-interval-raf',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-pin-width-from-live',
    rasterPatch: 'decode-interval-raf',
    notes: 'Loop AI b6 shard worker 08; pin width from live text box; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w08-004',
    label: 'Loop AI b6 w08 #004: device-grid + from-font lh',
    idea: 'device-grid-floor raster snap + line-height:from-font on FO * + Chromium font copy',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{line-height:from-font!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b6 shard worker 08; device-grid + from-font lh; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

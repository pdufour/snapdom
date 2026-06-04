/**
 * Loop AI batch-6 FO recipe shard (worker 9) — text-fix: h2 pin lh / stretch leaf / int VB / device-grid.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w09-001',
    label: 'Loop AI b6 w09 #001: h2 pin lh + Chromium fonts.ready',
    idea: 'h2-pin-line-height-from-live measured strut + Chromium font copy + fonts.ready-interval',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'fonts-ready-interval',
    notes: 'Loop AI b6 shard worker 09; pin lh + Chromium; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w09-002',
    label: 'Loop AI b6 w09 #002: FO>div lh normal + stretch leaf blob',
    idea: 'FO>div line-height:normal + h2-flex-stretch-leaf-from-live + blob-url decode wait',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    rasterPatch: 'blob-url-decode-interval',
    notes: 'Loop AI b6 shard worker 09; FO>div normal + stretch leaf; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w09-003',
    label: 'Loop AI b6 w09 #003: pin width live on text box fonts.ready',
    idea: 'h2-pin-width-from-live width pin on FO text box + integer viewBox + fonts.ready-interval',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-pin-width-from-live',
    rasterPatch: 'fonts-ready-interval',
    notes: 'Loop AI b6 shard worker 09; pin width from live text box; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w09-004',
    label: 'Loop AI b6 w09 #004: device-grid + from-font lh decode',
    idea: 'device-grid-floor raster + line-height:from-font on FO * + integer viewBox + decode-interval',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{line-height:from-font!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b6 shard worker 09; device-grid + from-font lh; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

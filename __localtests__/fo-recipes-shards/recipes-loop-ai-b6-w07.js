/**
 * Loop AI batch-6 FO recipe shard (worker 7) — text-fix: h2 pin lh / stretch leaf / width / int viewBox.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w07-001',
    label: 'Loop AI b6 w07 #001: h2 pin lh + Chromium decode',
    idea: 'h2-pin-line-height-from-live measured strut on FO text leaves + Chromium font copy',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b6 shard worker 07; pin lh + Chromium; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w07-002',
    label: 'Loop AI b6 w07 #002: FO>div lh normal + stretch leaf',
    idea: 'FO>div line-height:normal strut restore + h2-flex-stretch-leaf-from-live cross-axis pin',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b6 shard worker 07; FO>div normal + stretch leaf; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w07-003',
    label: 'Loop AI b6 w07 #003: pin width live on text box',
    idea: 'h2-pin-width-from-live — GBCR width pin on single-line FO text leaves before raster',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b6 shard worker 07; pin width from live text box; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w07-004',
    label: 'Loop AI b6 w07 #004: int viewBox + pin lh combo',
    idea: 'integer-viewbox snap + h2-pin-line-height-from-live + Chromium font copy + decode-interval',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b6 shard worker 07; int viewBox + pin lh combo; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

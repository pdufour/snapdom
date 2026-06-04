/**
 * Loop AI batch-6 FO recipe shard (worker 10) — text-fix synthesis (b5 + b6 combos).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w10-001',
    label: 'Loop AI b6 w10 #001: chromium pin-lh from-font',
    idea: 'b5 Chromium copy + h2-pin-line-height-from-live + line-height:from-font on FO *',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{line-height:from-font!important;vertical-align:baseline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b6 w10 synthesis; b5 pin-lh + from-font; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w10-002',
    label: 'Loop AI b6 w10 #002: stretch-leaf live fo-div normal',
    idea: 'b6 h2-flex-stretch-leaf-from-live + b5 stretch-leaf CSS + FO>div line-height:normal',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject>div{line-height:normal!important}' +
      'foreignObject *{align-self:flex-start!important;height:auto!important;' +
      'min-height:auto!important;max-height:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b6 w10 synthesis; b5/b6 stretch-leaf + wrapper lh; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w10-003',
    label: 'Loop AI b6 w10 #003: trim edge kern antialiased',
    idea: 'b6 leading-trim both + text-box-trim trim-both + b5 text-edge cap + kern features + antialiased',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important;' +
      'text-box-edge:cap alphabetic!important;text-edge:cap alphabetic!important;' +
      'font-feature-settings:"kern" 1!important;-webkit-font-smoothing:antialiased!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 w10 synthesis; b6 trim/edge + b5 cap alphabetic; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w10-004',
    label: 'Loop AI b6 w10 #004: flex nav baseline int decode',
    idea: 'b6 flex text nav (stretch anchors, gap 0, baseline row) + b5 chromium + int viewBox decode-interval',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'justify-content:center!important;align-items:baseline!important;gap:0!important;' +
      'overflow:visible!important}' +
      'foreignObject a{align-self:stretch!important;display:inline-block!important;' +
      'vertical-align:baseline!important;min-height:0!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b6 w10 synthesis; b6 flex nav + b5 chromium decode stack; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

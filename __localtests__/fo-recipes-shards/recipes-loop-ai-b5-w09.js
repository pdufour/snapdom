/**
 * Loop AI batch-5 FO recipe shard (worker 9) — text-fix: Chromium font copy + metric probes.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w09-001',
    label: 'Loop AI b5 w09 #001: Chromium + kerning normal star',
    idea: 'Chromium FO font copy + font-kerning:normal on FO * — kerning with decode-interval raster wait',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b5 shard worker 09; kerning metric + decode-interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w09-002',
    label: 'Loop AI b5 w09 #002: Chromium + synthesis none deep',
    idea: 'Chromium FO font copy + font-synthesis weight/style none — synthesis vs integer viewBox snap',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject{font-synthesis-weight:none!important;font-synthesis-style:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b5 shard worker 09; synthesis metric + integer-viewbox; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w09-003',
    label: 'Loop AI b5 w09 #003: Chromium + line-height from-font',
    idea: 'Chromium FO font copy + line-height:from-font on FO * — from-font strut with int viewBox',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{line-height:from-font!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b5 shard worker 09; from-font lh + integer-viewbox; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w09-004',
    label: 'Loop AI b5 w09 #004: Chromium + pin line-height from live',
    idea: 'Chromium FO font copy + h2-pin-line-height-from-live — live lh pin + integer viewBox only',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b5 shard worker 09; pin-lh + integer-viewbox; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

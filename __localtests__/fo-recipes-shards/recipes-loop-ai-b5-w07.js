/**
 * Loop AI batch-5 FO recipe shard (worker 7) — text-fix: Chromium font copy + metric probes.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w07-001',
    label: 'Loop AI b5 w07 #001: Chromium + kerning normal star',
    idea: 'Chromium FO font copy + font-kerning:normal on FO * — glyph kerning vs serialized FO text',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 07; kerning metric only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w07-002',
    label: 'Loop AI b5 w07 #002: Chromium + synthesis none deep',
    idea: 'Chromium FO font copy + font-synthesis weight/style none — block faux bold/italic in FO',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject{font-synthesis-weight:none!important;font-synthesis-style:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b5 shard worker 07; synthesis metric + decode-interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w07-003',
    label: 'Loop AI b5 w07 #003: Chromium + line-height from-font',
    idea: 'Chromium FO font copy + line-height:from-font on FO * — font-metrics strut vs FO line box',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{line-height:from-font!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b5 shard worker 07; from-font lh + integer-viewbox; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w07-004',
    label: 'Loop AI b5 w07 #004: Chromium + pin line-height from live',
    idea: 'Chromium FO font copy + h2-pin-line-height-from-live — measured strut px on FO text leaves',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    svgRootRound: 'integer-viewbox',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b5 shard worker 07; pin-lh + int viewBox + decode-interval; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

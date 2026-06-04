/**
 * Loop AI batch-5 FO recipe shard (worker 8) — text-fix: Chromium font copy + metric probes.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w08-001',
    label: 'Loop AI b5 w08 #001: Chromium + kerning normal star',
    idea: 'Chromium FO font copy + font-kerning:normal on FO * — kerning parity with int viewBox snap',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b5 shard worker 08; kerning metric + integer-viewbox; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w08-002',
    label: 'Loop AI b5 w08 #002: Chromium + synthesis none deep',
    idea: 'Chromium FO font copy + font-synthesis weight/style none — faux synthesis block in FO subtree',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject{font-synthesis-weight:none!important;font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 08; synthesis metric only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w08-003',
    label: 'Loop AI b5 w08 #003: Chromium + line-height from-font',
    idea: 'Chromium FO font copy + line-height:from-font on FO * — metrics lh before decode-interval draw',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{line-height:from-font!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b5 shard worker 08; from-font lh + decode-interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w08-004',
    label: 'Loop AI b5 w08 #004: Chromium + pin line-height from live',
    idea: 'Chromium FO font copy + h2-pin-line-height-from-live — live strut pin with decode-interval flush',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b5 shard worker 08; pin-lh + decode-interval; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

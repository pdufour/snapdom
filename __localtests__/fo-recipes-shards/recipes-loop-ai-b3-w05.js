/**
 * Loop AI batch-3 FO recipe shard (worker 5) — paint order / color interp / flip / bitmaprenderer.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w05-001',
    label: 'Loop AI b3 w05 #001: paint-order stroke fill',
    idea: 'paint-order:stroke fill on FO * — stroke vs fill paint sequence probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{paint-order:stroke fill!important;-webkit-text-stroke-width:0!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 05; paint-order only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w05-002',
    label: 'Loop AI b3 w05 #002: color-interpolation-filters sRGB',
    idea: 'color-interpolation-filters:sRGB on capture svg root before raster',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgRootPatch: { 'color-interpolation-filters': 'sRGB' },
    notes: 'Loop AI b3 shard worker 05; color-interpolation-filters only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w05-003',
    label: 'Loop AI b3 w05 #003: flip-y + int-floor dims',
    idea: 'flip-y raster mirror + int-floor width/height snap — axis flip with integer root dims',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'flip-y',
    svgRootRound: 'int-floor',
    notes: 'Loop AI b3 shard worker 05; flip-y + int-floor combo only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w05-004',
    label: 'Loop AI b3 w05 #004: bitmaprenderer transfer',
    idea: 'ImageBitmap → bitmaprenderer transferFromImageBitmap decode path',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'bitmaprenderer-transfer',
    notes: 'Loop AI b3 shard worker 05; bitmaprenderer-transfer only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * AI-authored crazy FO recipe shard (worker 10).
 * ONLY edit this file. Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w10-001',
    label: 'Crazy AI w10 #001: text-rendering optimizeLegibility',
    idea: 'text-rendering:optimizeLegibility on FO * — kerning/liga raster probe',
    css: FO_BASELINE_CSS + 'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w10-002',
    label: 'Crazy AI w10 #002: transparent hairline stroke',
    idea: '-webkit-text-stroke:0.01px transparent on FO * — subpixel stroke layer',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{-webkit-text-stroke:0.01px transparent!important;paint-order:stroke fill!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w10-003',
    label: 'Crazy AI w10 #003: liga off feature settings',
    idea: 'font-variant-ligatures:none + font-feature-settings "liga" 0 on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{font-variant-ligatures:none!important;font-feature-settings:"liga" 0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w10-004',
    label: 'Crazy AI w10 #004: bitmaprenderer transfer',
    idea: 'bitmaprenderer-transfer — ImageBitmap to bitmaprenderer canvas',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'bitmaprenderer-transfer',
    svgRootRound: 'round-dims',
    notes: 'AI crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w10-005',
    label: 'Crazy AI w10 #005: createImageBitmap pixelated',
    idea: 'create-image-bitmap-pixelated decode — crispEdges resample probe',
    css: FO_BASELINE_CSS + 'foreignObject *{image-rendering:pixelated!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'create-image-bitmap-pixelated',
    notes: 'AI crazy shard worker 10; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

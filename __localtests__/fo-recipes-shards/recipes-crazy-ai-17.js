/**
 * AI crazy FO recipe shard (worker 17).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w17-001',
    label: 'Crazy ai w17 #001: text-decoration-thickness',
    idea: 'text-decoration-thickness:from-font on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-decoration:underline!important;text-decoration-thickness:from-font!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 17; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w17-002',
    label: 'Crazy ai w17 #002: text-underline-offset',
    idea: 'text-underline-offset:0.12em on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{text-underline-offset:0.12em!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 17; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w17-003',
    label: 'Crazy ai w17 #003: letter-spacing hair',
    idea: 'letter-spacing:0.01em on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{letter-spacing:0.01em!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 17; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w17-004',
    label: 'Crazy ai w17 #004: blob-url decode interval',
    idea: 'blob-url-decode-interval raster path',
    css: FO_BASELINE_CSS + 'foreignObject{font-kerning:normal!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'blob-url-decode-interval',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 17; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w17-005',
    label: 'Crazy ai w17 #005: decode-interval-raf',
    idea: 'decode-interval-raf timing gate',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval-raf',
    svgRootRound: 'int-floor',
    notes: 'AI crazy shard worker 17; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

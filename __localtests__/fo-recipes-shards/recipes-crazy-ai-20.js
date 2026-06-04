/**
 * AI crazy FO recipe shard (worker 20).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w20-001',
    label: 'Crazy ai w20 #001: hyphens auto',
    idea: 'hyphens:auto on FO text leaves',
    css: FO_BASELINE_CSS + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 20; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w20-002',
    label: 'Crazy ai w20 #002: word-break break-word',
    idea: 'word-break:break-word on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{word-break:break-word!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 20; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w20-003',
    label: 'Crazy ai w20 #003: overflow-wrap anywhere',
    idea: 'overflow-wrap:anywhere on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 20; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w20-004',
    label: 'Crazy ai w20 #004: strip identity transforms',
    idea: 'strip-identity-transforms markup + decode-interval',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    svgMarkupPatch: 'strip-identity-transforms',
    notes: 'AI crazy shard worker 20; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w20-005',
    label: 'Crazy ai w20 #005: two-stage int viewbox',
    idea: 'integer-viewbox + two-stage raster pipeline',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important;line-height:normal!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'two-stage',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 20; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

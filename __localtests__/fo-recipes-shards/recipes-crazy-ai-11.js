/**
 * AI-authored crazy FO recipe shard (worker 11).
 * Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w11-001',
    label: 'Crazy AI w11 #001: writing-mode vertical-rl',
    idea: 'writing-mode:vertical-rl on FO — vertical typesetting stack probe',
    css: FO_BASELINE_CSS + 'foreignObject{writing-mode:vertical-rl!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 11; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w11-002',
    label: 'Crazy AI w11 #002: text-orientation upright',
    idea: 'text-orientation:upright on FO * — mixed orientation probe',
    css: FO_BASELINE_CSS + 'foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 11; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w11-003',
    label: 'Crazy AI w11 #003: ruby-position over',
    idea: 'ruby-position:over on FO ruby annotations',
    css: FO_BASELINE_CSS + 'foreignObject ruby{ruby-position:over!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 11; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w11-004',
    label: 'Crazy AI w11 #004: blob-url decode-interval',
    idea: 'blob-url-decode-interval raster wait on baseline FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'blob-url-decode-interval',
    notes: 'AI crazy shard worker 11; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w11-005',
    label: 'Crazy AI w11 #005: decode microtask twice',
    idea: 'decode-microtask-twice timing on FO raster path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-microtask-twice',
    notes: 'AI crazy shard worker 11; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

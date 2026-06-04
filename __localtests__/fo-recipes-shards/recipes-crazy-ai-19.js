/**
 * AI crazy FO recipe shard (worker 19).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w19-001',
    label: 'Crazy ai w19 #001: isolation isolate',
    idea: 'isolation:isolate on foreignObject stacking context',
    css: FO_BASELINE_CSS + 'foreignObject{isolation:isolate!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 19; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w19-002',
    label: 'Crazy ai w19 #002: backdrop-filter none',
    idea: 'backdrop-filter:none on foreignObject',
    css: FO_BASELINE_CSS + 'foreignObject{backdrop-filter:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 19; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w19-003',
    label: 'Crazy ai w19 #003: color-scheme light',
    idea: 'color-scheme:light on foreignObject',
    css: FO_BASELINE_CSS + 'foreignObject{color-scheme:light!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 19; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w19-004',
    label: 'Crazy ai w19 #004: create-image-bitmap',
    idea: 'create-image-bitmap raster decode path',
    css: FO_BASELINE_CSS + 'foreignObject *{image-rendering:auto!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'create-image-bitmap',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 19; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w19-005',
    label: 'Crazy ai w19 #005: fonts-ready-interval',
    idea: 'fonts-ready-interval before FO draw',
    css: FO_BASELINE_CSS + 'foreignObject{font-synthesis:none!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'fonts-ready-interval',
    svgRootRound: 'int-floor',
    notes: 'AI crazy shard worker 19; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

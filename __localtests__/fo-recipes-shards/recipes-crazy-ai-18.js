/**
 * AI crazy FO recipe shard (worker 18).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w18-001',
    label: 'Crazy ai w18 #001: flex gap zero',
    idea: 'display:flex + gap:0 on foreignObject descendants',
    css: FO_BASELINE_CSS + 'foreignObject *{display:flex!important;gap:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 18; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w18-002',
    label: 'Crazy ai w18 #002: grid place-items center',
    idea: 'display:grid + place-items:center on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{display:grid!important;place-items:center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 18; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w18-003',
    label: 'Crazy ai w18 #003: order negative one',
    idea: 'order:-1 on FO flex children',
    css: FO_BASELINE_CSS + 'foreignObject *{display:flex!important;order:-1!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 18; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w18-004',
    label: 'Crazy ai w18 #004: load-event-interval',
    idea: 'load-event-interval raster gate',
    css: FO_BASELINE_CSS + 'foreignObject{contain:layout!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'load-event-interval',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 18; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w18-005',
    label: 'Crazy ai w18 #005: offscreen-canvas raster',
    idea: 'offscreen-canvas decode blit path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'offscreen-canvas',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 18; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

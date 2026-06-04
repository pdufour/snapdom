/**
 * AI crazy FO recipe shard (worker 16).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w16-001',
    label: 'Crazy ai w16 #001: opacity 0.999 ink',
    idea: 'opacity:0.999 on FO * — subpixel ink bleed probe',
    css: FO_BASELINE_CSS + 'foreignObject *{opacity:0.999!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 16; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w16-002',
    label: 'Crazy ai w16 #002: filter blur zero',
    idea: 'filter:blur(0) on foreignObject — compositor layer hint',
    css: FO_BASELINE_CSS + 'foreignObject{filter:blur(0)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 16; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w16-003',
    label: 'Crazy ai w16 #003: translateZ layer',
    idea: 'transform:translateZ(0) on foreignObject',
    css: FO_BASELINE_CSS + 'foreignObject{transform:translateZ(0)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 16; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w16-004',
    label: 'Crazy ai w16 #004: clip-path inset',
    idea: 'clip-path:inset(0) on foreignObject',
    css: FO_BASELINE_CSS + 'foreignObject{clip-path:inset(0)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 16; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w16-005',
    label: 'Crazy ai w16 #005: device-grid-floor raster',
    idea: 'integer-viewbox + device-grid-floor raster alignment',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'device-grid-floor',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 16; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * AI-authored crazy FO recipe shard (worker 13).
 * Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w13-001',
    label: 'Crazy AI w13 #001: place-items center grid',
    idea: 'display:grid place-items:center on FO>div',
    css: FO_BASELINE_CSS + 'foreignObject>div{display:grid!important;place-items:center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 13; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w13-002',
    label: 'Crazy AI w13 #002: justify-items stretch',
    idea: 'grid justify-items:stretch on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{display:grid!important;justify-items:stretch!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 13; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w13-003',
    label: 'Crazy AI w13 #003: align-self baseline flex',
    idea: 'flex align-self:baseline on FO leaf nodes',
    css: FO_BASELINE_CSS + 'foreignObject *{display:flex!important;align-self:baseline!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 13; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w13-004',
    label: 'Crazy AI w13 #004: fonts-ready gate',
    idea: 'fonts-ready raster decode wait on baseline FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'fonts-ready',
    notes: 'AI crazy shard worker 13; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w13-005',
    label: 'Crazy AI w13 #005: decode-interval-raf',
    idea: 'decode-interval-raf timing on FO raster path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval-raf',
    notes: 'AI crazy shard worker 13; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

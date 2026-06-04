/**
 * AI-authored crazy FO recipe shard (worker 08).
 * ONLY edit this file. Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w08-001',
    label: 'Crazy AI w08 #001: scroll-timeline none',
    idea: 'scroll-timeline:none on FO — detach scroll-driven animations',
    css: FO_BASELINE_CSS + 'foreignObject{scroll-timeline:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w08-002',
    label: 'Crazy AI w08 #002: overflow-anchor none',
    idea: 'overflow-anchor:none on FO * — suppress scroll anchoring jitter',
    css: FO_BASELINE_CSS + 'foreignObject *{overflow-anchor:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w08-003',
    label: 'Crazy AI w08 #003: overscroll-behavior contain',
    idea: 'overscroll-behavior:contain on FO — scroll chaining block probe',
    css: FO_BASELINE_CSS + 'foreignObject{overscroll-behavior:contain!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w08-004',
    label: 'Crazy AI w08 #004: touch-action none',
    idea: 'touch-action:none on FO * — pointer hit-test paint isolation',
    css: FO_BASELINE_CSS + 'foreignObject *{touch-action:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w08-005',
    label: 'Crazy AI w08 #005: wait-fonts 500ms gate',
    idea: 'wait-fonts-500ms raster — fonts.ready + delay before decode',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'wait-fonts-500ms',
    svgRootRound: 'int-floor',
    notes: 'AI crazy shard worker 08; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

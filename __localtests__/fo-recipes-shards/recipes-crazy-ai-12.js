/**
 * AI-authored crazy FO recipe shard (worker 12).
 * Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w12-001',
    label: 'Crazy AI w12 #001: overscroll-behavior contain',
    idea: 'overscroll-behavior:contain on FO — scroll chaining probe',
    css: FO_BASELINE_CSS + 'foreignObject{overscroll-behavior:contain!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 12; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w12-002',
    label: 'Crazy AI w12 #002: scroll-snap mandatory',
    idea: 'scroll-snap-type:x mandatory on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{scroll-snap-type:x mandatory!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 12; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w12-003',
    label: 'Crazy AI w12 #003: backdrop-filter blur',
    idea: 'backdrop-filter:blur(2px) on FO>div — compositing probe',
    css: FO_BASELINE_CSS + 'foreignObject>div{backdrop-filter:blur(2px)!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'AI crazy shard worker 12; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w12-004',
    label: 'Crazy AI w12 #004: fe-color-matrix identity',
    idea: 'fe-color-matrix-identity on FO SVG subtree',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-color-matrix-identity',
    notes: 'AI crazy shard worker 12; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w12-005',
    label: 'Crazy AI w12 #005: double raster difference',
    idea: 'double-raster-difference blend diagnostic',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raster-difference',
    notes: 'AI crazy shard worker 12; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

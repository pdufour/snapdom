/**
 * AI-authored crazy FO recipe shard (worker 07).
 * ONLY edit this file. Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w07-001',
    label: 'Crazy AI w07 #001: mix-blend color-burn',
    idea: 'mix-blend-mode:color-burn on FO * — burn compositing probe',
    css: FO_BASELINE_CSS + 'foreignObject *{mix-blend-mode:color-burn!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w07-002',
    label: 'Crazy AI w07 #002: mix-blend exclusion',
    idea: 'mix-blend-mode:exclusion on FO * — invert-like blend probe',
    css: FO_BASELINE_CSS + 'foreignObject *{mix-blend-mode:exclusion!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w07-003',
    label: 'Crazy AI w07 #003: filter contrast 100%',
    idea: 'filter:contrast(100%) identity on FO root — filter stack no-op',
    css: FO_BASELINE_CSS + 'foreignObject{filter:contrast(100%)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w07-004',
    label: 'Crazy AI w07 #004: contain paint size',
    idea: 'contain:paint size on FO — paint+size containment vs overflow visible',
    css: FO_BASELINE_CSS + 'foreignObject{contain:paint size!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w07-005',
    label: 'Crazy AI w07 #005: webp roundtrip decode',
    idea: 'webp-roundtrip raster — encode/decode color space probe',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'webp-roundtrip',
    notes: 'AI crazy shard worker 07; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

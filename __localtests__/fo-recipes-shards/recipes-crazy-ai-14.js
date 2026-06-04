/**
 * AI-authored crazy FO recipe shard (worker 14).
 * Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w14-001',
    label: 'Crazy AI w14 #001: text-wrap balance',
    idea: 'text-wrap:balance on FO * — line breaking probe',
    css: FO_BASELINE_CSS + 'foreignObject *{text-wrap:balance!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 14; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w14-002',
    label: 'Crazy AI w14 #002: hyphens auto',
    idea: 'hyphens:auto on FO text nodes',
    css: FO_BASELINE_CSS + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 14; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w14-003',
    label: 'Crazy AI w14 #003: text-underline-offset',
    idea: 'text-underline-offset:2px on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{text-underline-offset:2px!important;text-decoration:underline!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 14; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w14-004',
    label: 'Crazy AI w14 #004: fe-morphology identity',
    idea: 'fe-morphology-identity primitive on FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-morphology-identity',
    notes: 'AI crazy shard worker 14; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w14-005',
    label: 'Crazy AI w14 #005: fe-component-transfer identity',
    idea: 'fe-component-transfer-identity on FO SVG subtree',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-component-transfer-identity',
    notes: 'AI crazy shard worker 14; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

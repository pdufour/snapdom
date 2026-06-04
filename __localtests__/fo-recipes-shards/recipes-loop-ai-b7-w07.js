/**
 * Loop AI batch-7 FO recipe shard (worker 7) — grid template-areas + named areas nav (not flex).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w07-001',
    label: 'Loop AI b7 w07 #001: grid areas home products',
    idea: 'grid-template-areas "nav-home nav-products" on nav — named areas for two-link mini nav row',
    css:
      FO_BASELINE_CSS +
      'foreignObject nav{display:grid!important;' +
      'grid-template-areas:"nav-home nav-products"!important;' +
      'grid-template-columns:max-content max-content!important;' +
      'grid-template-rows:1fr!important;column-gap:1rem!important;row-gap:0!important;' +
      'align-items:baseline!important;overflow:visible!important}' +
      'foreignObject nav a:nth-child(1){grid-area:nav-home!important}' +
      'foreignObject nav a:nth-child(2){grid-area:nav-products!important}' +
      'foreignObject nav a{display:inline-block!important;box-sizing:border-box!important;' +
      'min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 07; grid template-areas nav row only — no flex; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w07-002',
    label: 'Loop AI b7 w07 #002: grid areas stacked nav',
    idea: 'grid-template-areas stacked "nav-home" / "nav-products" — vertical named-area nav layout',
    css:
      FO_BASELINE_CSS +
      'foreignObject nav{display:grid!important;' +
      'grid-template-areas:"nav-home" "nav-products"!important;' +
      'grid-template-columns:1fr!important;grid-template-rows:auto auto!important;' +
      'row-gap:0.125rem!important;justify-items:start!important;overflow:visible!important}' +
      'foreignObject nav a:nth-child(1){grid-area:nav-home!important}' +
      'foreignObject nav a:nth-child(2){grid-area:nav-products!important}' +
      'foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 07; stacked grid areas only — no flex; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w07-003',
    label: 'Loop AI b7 w07 #003: grid areas nav-main span',
    idea: 'grid-template-areas "nav-main nav-main" with subgrid-like named cells on anchors',
    css:
      FO_BASELINE_CSS +
      'foreignObject nav{display:grid!important;' +
      'grid-template-areas:"nav-main nav-main"!important;' +
      'grid-template-columns:1fr 1fr!important;grid-auto-flow:column!important;' +
      'justify-content:space-between!important;align-content:baseline!important;' +
      'overflow:visible!important}' +
      'foreignObject nav a:nth-child(1){grid-area:nav-main!important;justify-self:start!important}' +
      'foreignObject nav a:nth-child(2){grid-area:nav-main!important;justify-self:end!important}' +
      'foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 07; spanning grid area nav-main only — no flex; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w07-004',
    label: 'Loop AI b7 w07 #004: grid dense named areas FO root',
    idea: 'display:grid on FO>div wrapper with template-areas "links links" + nav display:contents area assignment',
    css:
      FO_BASELINE_CSS +
      'foreignObject>div{display:grid!important;' +
      'grid-template-areas:"nav-links nav-links"!important;' +
      'grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto!important;' +
      'grid-auto-flow:dense!important;overflow:visible!important}' +
      'foreignObject nav{display:contents!important}' +
      'foreignObject nav a:nth-child(1){grid-area:nav-links!important;justify-self:start!important}' +
      'foreignObject nav a:nth-child(2){grid-area:nav-links!important;justify-self:end!important}' +
      'foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 07; FO wrapper grid areas + display:contents nav — no flex; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

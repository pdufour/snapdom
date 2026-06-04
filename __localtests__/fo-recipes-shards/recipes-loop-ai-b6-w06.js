/**
 * Loop AI batch-6 FO recipe shard (worker 6) — text-fix: FO>div wrapper lh / baseline / gap-0.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w06-001',
    label: 'Loop AI b6 w06 #001: FO>div stretch nav anchors',
    idea: 'align-self:stretch on FO>div anchors — wrapper-scoped flex cross stretch on nav text',
    css:
      FO_BASELINE_CSS +
      'foreignObject>div{display:flex!important;flex-direction:row!important;overflow:visible!important}' +
      'foreignObject>div a{align-self:stretch!important;display:inline-block!important;' +
      'min-height:0!important;box-sizing:border-box!important}' +
      'foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 06; FO>div stretch nav anchors; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w06-002',
    label: 'Loop AI b6 w06 #002: FO>div justify center flex row',
    idea: 'justify-content:center flex row on FO>div wrapper — main-axis center on inner text row',
    css:
      FO_BASELINE_CSS +
      'foreignObject>div{display:flex!important;flex-direction:row!important;' +
      'justify-content:center!important;align-items:center!important;overflow:visible!important}' +
      'foreignObject>div *{flex:0 1 auto!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 06; FO>div justify center; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w06-003',
    label: 'Loop AI b6 w06 #003: FO>div line-height calc(1em + 0px)',
    idea: 'line-height:calc(1em + 0px) on FO>div * — wrapper-scoped em lh vs FO-root calc',
    css:
      FO_BASELINE_CSS +
      'foreignObject>div *{line-height:calc(1em + 0px)!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 06; FO>div lh calc(1em + 0px); FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w06-004',
    label: 'Loop AI b6 w06 #004: FO>div gap 0 text nav',
    idea: 'gap/row-gap/column-gap:0 flex row on FO>div — wrapper-scoped collapsed text-nav rhythm',
    css:
      FO_BASELINE_CSS +
      'foreignObject>div{display:flex!important;flex-direction:row!important;' +
      'align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;' +
      'overflow:visible!important}' +
      'foreignObject>div *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 06; FO>div gap 0 text nav; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

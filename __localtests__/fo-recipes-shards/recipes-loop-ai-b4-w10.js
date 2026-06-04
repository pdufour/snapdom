/**
 * Loop AI batch-4 FO recipe shard (worker 10) — text-autospace / baseline-source / hanging-punctuation / text-emphasis.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w10-001',
    label: 'Loop AI b4 w10 #001: text-autospace space-all',
    idea: 'text-autospace:space-all on FO * — CJK/inline autospacing vs glyph advance metrics',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-autospace:space-all!important;text-spacing-trim:space-all!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w10-002',
    label: 'Loop AI b4 w10 #002: baseline-source first',
    idea: 'baseline-source:first on FO * — baseline alignment source vs inline strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{baseline-source:first!important;vertical-align:baseline!important;' +
      'line-height:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w10-003',
    label: 'Loop AI b4 w10 #003: hanging-punctuation force-end',
    idea: 'hanging-punctuation:allow-end force-end on FO * — punctuation hang vs FO line box edge',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{hanging-punctuation:allow-end force-end!important;text-align:start!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w10-004',
    label: 'Loop AI b4 w10 #004: text-emphasis filled sesame',
    idea: 'text-emphasis-style:filled sesame + position under left on FO * — emphasis ink vs FO text raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-emphasis-style:filled sesame!important;' +
      'text-emphasis-color:currentColor!important;text-emphasis-position:under left!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 10; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

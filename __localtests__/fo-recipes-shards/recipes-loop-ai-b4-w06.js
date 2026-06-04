/**
 * Loop AI batch-4 FO recipe shard (worker 6) — word-spacing reset extremes (FO text metrics).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w06-001',
    label: 'Loop AI b4 w06 #001: word-spacing normal reset',
    idea: 'word-spacing:normal!important on FO * — reset inherited em spacing vs live inter-word gaps',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{word-spacing:normal!important;letter-spacing:normal!important;' +
      'white-space:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 06; word-spacing reset; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w06-002',
    label: 'Loop AI b4 w06 #002: word-spacing zero forced',
    idea: 'word-spacing:0!important + text-spacing-trim:space-all — zero gap reset vs FO strut width',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{word-spacing:0!important;letter-spacing:0!important;' +
      'font-kerning:none!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 06; word-spacing zero reset; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w06-003',
    label: 'Loop AI b4 w06 #003: word-spacing unset cascade',
    idea: 'word-spacing:unset!important on FO * — cascade to initial vs author em on ancestors',
    css:
      FO_BASELINE_CSS +
      'foreignObject{word-spacing:0.12em!important}' +
      'foreignObject *{word-spacing:unset!important;letter-spacing:unset!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 06; word-spacing unset reset; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w06-004',
    label: 'Loop AI b4 w06 #004: word-spacing initial pre-wrap',
    idea: 'word-spacing:initial!important + white-space:pre-wrap — initial spacing with preserved runs',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{word-spacing:initial!important;white-space:pre-wrap!important;' +
      'text-transform:none!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 06; word-spacing initial reset; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

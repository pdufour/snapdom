/**
 * Loop AI batch-3 FO recipe shard (worker 2) — typography box / math / ruby / drop cap.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w02-001',
    label: 'Loop AI b3 w02 #001: text-box-trim trim-end',
    idea: 'text-box-trim:trim-end + text-box-edge:text on FO * — trailing half-leading trim probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-box-trim:trim-end!important;text-box-edge:text!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w02-002',
    label: 'Loop AI b3 w02 #002: math-depth add-to',
    idea: 'math-style:normal + math-depth:add-to on FO * — MathML depth vs inline text metrics',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{math-style:normal!important;math-depth:add-to!important;' +
      'font-variant-numeric:normal!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w02-003',
    label: 'Loop AI b3 w02 #003: ruby over + merge collapse',
    idea: 'display:ruby + ruby-position:over + ruby-merge:collapse on FO span — annotation layout probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject span{display:ruby!important;ruby-position:over!important;' +
      'ruby-merge:collapse!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w02-004',
    label: 'Loop AI b3 w02 #004: initial-letter block-start',
    idea: 'initial-letter:2 + initial-letter-align:block-start on FO * — drop-cap strut vs FO line box',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{initial-letter:2!important;initial-letter-align:block-start!important;' +
      'initial-letter-wrap:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 02; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

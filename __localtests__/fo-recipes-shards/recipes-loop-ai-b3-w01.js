/**
 * Loop AI batch-3 FO recipe shard (worker 1) — cascade / anchor / form sizing.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w01-001',
    label: 'Loop AI b3 w01 #001: @starting-style opacity entry',
    idea: '@starting-style opacity on FO * with micro transition — entry-style vs FO raster paint',
    css:
      FO_BASELINE_CSS +
      '@starting-style{foreignObject *{opacity:0.999!important}}' +
      'foreignObject *{transition:opacity 0.001s ease!important;opacity:1!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w01-002',
    label: 'Loop AI b3 w01 #002: anchor-name position-anchor',
    idea: 'CSS anchor positioning on FO root + position-anchor on descendants — vs static flex text leaves',
    css:
      FO_BASELINE_CSS +
      'foreignObject{anchor-name:--fo-loop-b3-w01!important;position:relative!important;overflow:visible!important}' +
      'foreignObject *{position-anchor:--fo-loop-b3-w01!important;position:absolute!important;' +
      'inset:anchor(inside)!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w01-003',
    label: 'Loop AI b3 w01 #003: @layer line-height cascade',
    idea: 'Ordered @layer low/high — line-height 1 vs from-font override inside FO subtree',
    css:
      FO_BASELINE_CSS +
      '@layer fo-loop-b3-w01-low, fo-loop-b3-w01-high;' +
      '@layer fo-loop-b3-w01-low{foreignObject *{line-height:1!important}}' +
      '@layer fo-loop-b3-w01-high{foreignObject *{line-height:from-font!important;' +
      'box-sizing:border-box!important;min-width:0!important}}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w01-004',
    label: 'Loop AI b3 w01 #004: field-sizing + interpolate-size',
    idea: 'field-sizing:content on FO form controls + interpolate-size allow-keywords on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject input,foreignObject textarea,foreignObject select{' +
      'field-sizing:content!important;box-sizing:border-box!important}' +
      'foreignObject *{interpolate-size:allow-keywords!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 01; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-5 FO recipe shard (worker 1) — line-height / text-box / baseline-source.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w01-001',
    label: 'Loop AI b5 w01 #001: line-height from-font',
    idea: 'line-height:from-font on FO * — font metrics strut vs serialized computed lh',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{line-height:from-font!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 01; from-font lh only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w01-002',
    label: 'Loop AI b5 w01 #002: pin line-height from live',
    idea: 'h2-pin-line-height-from-live — measured strut px on FO text leaves before raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b5 shard worker 01; live lh pin only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w01-003',
    label: 'Loop AI b5 w01 #003: text-box trim both cap',
    idea: 'text-box-trim:trim-both + text-box-edge:cap alphabetic on FO * — half-leading trim probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 01; text-box trim/edge only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w01-004',
    label: 'Loop AI b5 w01 #004: baseline-source alphabetic',
    idea: 'baseline-source:alphabetic on FO * — baseline alignment source vs inline strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{baseline-source:alphabetic!important;vertical-align:baseline!important;' +
      'line-height:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b5 shard worker 01; baseline-source only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-6 FO recipe shard (worker 1) — text-fix: leading-trim / text-box / math / nums.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b6-w01-001',
    label: 'Loop AI b6 w01 #001: leading-trim both-edges',
    idea: 'leading-trim:both-edges on FO * — half-leading trim via both-edges vs b5 leading-trim:both',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{leading-trim:both-edges!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 01; both-edges trim only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w01-002',
    label: 'Loop AI b6 w01 #002: text-box-trim trim-both',
    idea: 'text-box-trim:trim-both on FO * — line box trim without text-box-edge cap pairing (vs b5 w01)',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-box-trim:trim-both!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 01; trim-both only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w01-003',
    label: 'Loop AI b6 w01 #003: math-style normal text',
    idea: 'math-style:normal on FO text descendants — inline math style vs b3 math-depth:add-to stack',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{math-style:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 01; math-style normal only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b6-w01-004',
    label: 'Loop AI b6 w01 #004: tabular-nums variant',
    idea: 'font-variant-numeric:tabular-nums on FO * — figure width vs proportional nums in FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{font-variant-numeric:tabular-nums!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b6 shard worker 01; tabular-nums only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

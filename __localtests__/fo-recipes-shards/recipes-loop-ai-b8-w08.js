/**
 * Loop AI batch-8 FO recipe shard (worker 8) — text-fix: half-leading / intrinsic line box reset (no magic px).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w08-001',
    label: 'Loop AI b8 w08 #001: lh 1 + leading-trim both',
    idea: 'line-height:1 unitless + leading-trim:both on FO * — unitless strut with half-leading trim (no px)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1!important;leading-trim:both!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w08; lh:1 + leading-trim both half-leading reset; intrinsic line box — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w08-002',
    label: 'Loop AI b8 w08 #002: lh normal + text-box-trim both',
    idea: 'line-height:normal + text-box-trim:trim-both on FO * — normal strut with line box trim (no px)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:normal!important;text-box-trim:trim-both!important;' +
      'vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w08; lh normal + text-box-trim both; intrinsic line box — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w08-003',
    label: 'Loop AI b8 w08 #003: from-font + leading-trim none',
    idea: 'line-height:from-font + leading-trim:none on FO * — font-metrics strut without half-leading trim',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:from-font!important;leading-trim:none!important;' +
      'vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w08; from-font + leading-trim none; intrinsic line box — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w08-004',
    label: 'Loop AI b8 w08 #004: lh calc 1em baseline',
    idea: 'line-height:calc(1em) + vertical-align:baseline on FO * — em-based strut without fixed px half-leading',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w08; calc(1em) lh + baseline valign; intrinsic line box — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-8 FO recipe shard (worker 5) — text-fix: line-height from-font / normal / unset wrapper chain.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w05-001',
    label: 'Loop AI b8 w05 #001: FO>div from-font inherit',
    idea: 'FO>div line-height:from-font + FO * line-height:inherit — font-metrics cascade on wrapper chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}' +
      'foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w05; from-font wrapper + inherit cascade; lh wrapper chain — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w05-002',
    label: 'Loop AI b8 w05 #002: div normal inner from-font',
    idea: 'FO>div line-height:normal + FO>div>div line-height:from-font — nested wrapper strut chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}' +
      'foreignObject>div>div{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w05; normal outer + from-font inner wrapper; lh wrapper chain — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w05-003',
    label: 'Loop AI b8 w05 #003: FO>div unset star normal',
    idea: 'FO>div line-height:unset + FO * line-height:normal — cascade reset then normal strut on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:unset!important}' +
      'foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w05; unset wrapper + normal leaves; lh wrapper chain — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w05-004',
    label: 'Loop AI b8 w05 #004: div from-font span unset',
    idea: 'FO>div line-height:from-font + FO span line-height:unset + baseline valign on text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}' +
      'foreignObject span{line-height:unset!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w05; from-font div + unset span baseline; lh wrapper chain — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

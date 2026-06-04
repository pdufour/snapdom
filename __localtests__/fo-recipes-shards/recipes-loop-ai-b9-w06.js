/**
 * Loop AI batch-9 FO recipe shard (worker 6) — text-fix: h2 flex stretch leaf + wrapper line-height combos.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w06-001',
    label: 'Loop AI b9 w06 #001: stretch leaf + FO>div normal',
    idea: 'h2-flex-stretch-leaf-from-live cross-axis pin + foreignObject>div line-height:normal strut restore',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b9 w06; stretch-leaf live pin + FO>div normal; flex cross-axis text — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w06-002',
    label: 'Loop AI b9 w06 #002: stretch leaf + FO>div * unset',
    idea: 'h2-flex-stretch-leaf-from-live + line-height:unset on foreignObject>div * — wrapper lh reset vs stretch pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:unset!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b9 w06; stretch-leaf + FO>div * unset; flex cross-axis text — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w06-003',
    label: 'Loop AI b9 w06 #003: stretch leaf + FO>div * from-font',
    idea: 'h2-flex-stretch-leaf-from-live + line-height:from-font on foreignObject>div * before measured cross pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:from-font!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b9 w06; stretch-leaf + FO>div * from-font; flex cross-axis text — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w06-004',
    label: 'Loop AI b9 w06 #004: stretch leaf + div normal div* from-font',
    idea: 'h2-flex-stretch-leaf-from-live + FO>div normal wrapper + foreignObject>div * line-height:from-font combo',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}' +
      'foreignObject>div *{line-height:from-font!important;align-self:flex-start!important;' +
      'height:auto!important;min-height:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b9 w06; stretch-leaf + div normal + div* from-font; flex cross-axis text — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

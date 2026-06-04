/**
 * Loop AI batch-8 FO recipe shard (worker 2) — text-fix: stretch-leaf / flex cross-axis on text anchors.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w02-001',
    label: 'Loop AI b8 w02 #001: stretch leaf + FO>div normal',
    idea: 'h2-flex-stretch-leaf-from-live cross-axis pin + FO>div line-height:normal strut restore',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b8 w02; stretch-leaf live pin + wrapper normal; flex cross-axis text — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w02-002',
    label: 'Loop AI b8 w02 #002: stretch leaf + anchor flex-start',
    idea: 'h2-flex-stretch-leaf-from-live + align-self:flex-start on FO anchors — nav text cross-axis',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{align-self:flex-start!important;height:auto!important;' +
      'min-height:auto!important;max-height:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b8 w02; stretch-leaf + anchor flex-start; flex cross-axis text — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w02-003',
    label: 'Loop AI b8 w02 #003: stretch leaf + min-height auto',
    idea: 'h2-flex-stretch-leaf-from-live + min-height:auto on FO * — intrinsic height vs flex stretch pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{min-height:auto!important;height:auto!important;align-self:flex-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b8 w02; stretch-leaf + min-height auto leaves; flex cross-axis text — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w02-004',
    label: 'Loop AI b8 w02 #004: stretch leaf + span align-self stretch',
    idea: 'h2-flex-stretch-leaf-from-live + align-self:stretch on FO span text anchors in flex row',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;' +
      'overflow:visible!important}' +
      TEXT_LEAF +
      'foreignObject span{align-self:stretch!important;display:inline!important;' +
      'height:auto!important;min-height:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b8 w02; stretch-leaf + span align-self stretch; flex cross-axis text — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

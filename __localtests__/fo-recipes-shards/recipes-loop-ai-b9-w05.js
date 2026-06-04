/**
 * Loop AI batch-9 FO recipe shard (worker 5) — text-fix: h2 pin line-height from live (wrapper selector variants).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w05-001',
    label: 'Loop AI b9 w05 #001: pin lh + FO>div * normal',
    idea: 'h2-pin-line-height-from-live measured strut + line-height:normal on foreignObject>div * leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b9 w05; live lh pin + FO>div * normal strut; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w05-002',
    label: 'Loop AI b9 w05 #002: pin lh + FO anchor normal',
    idea: 'h2-pin-line-height-from-live on text leaves + line-height:normal on foreignObject a nav anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{line-height:normal!important;vertical-align:baseline!important;' +
      'display:inline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b9 w05; live lh pin + anchor normal/baseline; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w05-003',
    label: 'Loop AI b9 w05 #003: pin lh + FO span from-font',
    idea: 'h2-pin-line-height-from-live + line-height:from-font on foreignObject span text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{line-height:from-font!important;display:inline!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b9 w05; live lh pin + span from-font cascade; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w05-004',
    label: 'Loop AI b9 w05 #004: pin lh + FO>div * unset',
    idea: 'h2-pin-line-height-from-live + line-height:unset on foreignObject>div * — wrapper-scoped lh reset vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:unset!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b9 w05; live lh pin + FO>div * unset; text metric only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

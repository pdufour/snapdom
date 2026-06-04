/**
 * Loop AI batch-9 FO recipe shard (worker 2) — text-fix: text-orientation with horizontal-tb.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w02-001',
    label: 'Loop AI b9 w02 #001: mixed orientation horizontal-tb',
    idea: 'writing-mode:horizontal-tb + text-orientation:mixed on FO * — default glyph rotation in horizontal flow',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;' +
      'line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w02; mixed + horizontal-tb on leaves; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w02-002',
    label: 'Loop AI b9 w02 #002: upright orientation horizontal-tb',
    idea: 'writing-mode:horizontal-tb + text-orientation:upright on FO * — upright glyphs in horizontal line box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:upright!important;' +
      'inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w02; upright + horizontal-tb on leaves; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w02-003',
    label: 'Loop AI b9 w02 #003: sideways orientation horizontal-tb',
    idea: 'writing-mode:horizontal-tb + text-orientation:sideways on FO * — sideways glyph stack in horizontal flow',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:sideways!important;' +
      'inline-size:max-content!important;block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w02; sideways + horizontal-tb on leaves; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w02-004',
    label: 'Loop AI b9 w02 #004: mixed orientation on FO anchors',
    idea: 'writing-mode:horizontal-tb + text-orientation:mixed on FO a — nav anchor glyph axis vs inline strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;' +
      'vertical-align:baseline!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w02; mixed + horizontal-tb on anchors; text axis only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-9 FO recipe shard (worker 4) — text-fix: combine / ruby / emphasis on FO text.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w04-001',
    label: 'Loop AI b9 w04 #001: text-combine-upright all',
    idea: 'writing-mode:vertical-rl + text-combine-upright:all on FO * — combined upright digits in vertical flow',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-rl!important;text-combine-upright:all!important;' +
      'text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w04; text-combine-upright all; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w04-002',
    label: 'Loop AI b9 w04 #002: ruby-position over span',
    idea: 'display:ruby + ruby-position:over on FO span — ruby annotation above base text',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{display:ruby!important;ruby-position:over!important;' +
      'ruby-align:center!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w04; ruby-position over on spans; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w04-003',
    label: 'Loop AI b9 w04 #003: ruby-position under span',
    idea: 'display:ruby + ruby-position:under on FO span — ruby annotation below base text line',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{display:ruby!important;ruby-position:under!important;' +
      'ruby-merge:separate!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w04; ruby-position under on spans; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w04-004',
    label: 'Loop AI b9 w04 #004: text-emphasis-style none',
    idea: 'text-emphasis-style:none on FO * — strip emphasis marks so glyph metrics match DOM text',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-emphasis-color:transparent!important;' +
      'text-emphasis-position:over right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w04; text-emphasis-style none on leaves; text axis only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

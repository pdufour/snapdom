/**
 * Loop AI batch-8 FO recipe shard (worker 6) — text-fix: font-kerning + font-feature-settings + variant-ligatures.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w06-001',
    label: 'Loop AI b8 w06 #001: kerning normal + kern feature',
    idea: 'font-kerning:normal + font-feature-settings:"kern" 1 on FO * — explicit kern stack on text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-feature-settings:"kern" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w06; kerning normal + kern feature on leaves; font metrics — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w06-002',
    label: 'Loop AI b8 w06 #002: kerning auto ligatures none',
    idea: 'font-kerning:auto + font-variant-ligatures:none on FO * — UA kerning vs disabled ligatures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w06; kerning auto + ligatures none; font metrics — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w06-003',
    label: 'Loop AI b8 w06 #003: kerning none features off',
    idea: 'font-kerning:none + font-feature-settings:"liga" 0,"kern" 0 on FO * — disable all kerning/ligatures',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-feature-settings:"liga" 0,"kern" 0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w06; kerning none + features off; font metrics — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w06-004',
    label: 'Loop AI b8 w06 #004: kerning normal common ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:common-ligatures + font-feature-settings:"kern" 1,"liga" 1',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:common-ligatures!important;' +
      'font-feature-settings:"kern" 1,"liga" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w06; kerning + common ligatures enabled; font metrics — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

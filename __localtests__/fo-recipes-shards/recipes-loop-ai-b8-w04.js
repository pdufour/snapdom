/**
 * Loop AI batch-8 FO recipe shard (worker 4) — text-fix: leading-trim + text-box-trim edge stacks.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w04-001',
    label: 'Loop AI b8 w04 #001: leading both + trim both cap',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important;' +
      'text-box-edge:cap alphabetic!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w04; leading-trim both + cap alphabetic edge stack; half-leading trim — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w04-002',
    label: 'Loop AI b8 w04 #002: both-edges + leading edge',
    idea: 'leading-trim:both-edges + text-box-edge:leading alphabetic on FO * — leading edge trim stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both-edges!important;text-box-edge:leading alphabetic!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w04; both-edges + leading alphabetic edge; half-leading trim — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w04-003',
    label: 'Loop AI b8 w04 #003: trim-start + ex edge',
    idea: 'leading-trim:normal + text-box-trim:trim-start + text-box-edge:ex alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:normal!important;text-box-trim:trim-start!important;' +
      'text-box-edge:ex alphabetic!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w04; trim-start + ex alphabetic edge; half-leading trim — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w04-004',
    label: 'Loop AI b8 w04 #004: trim-end + text-edge cap',
    idea: 'leading-trim:both + text-box-trim:trim-end + text-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both!important;text-box-trim:trim-end!important;' +
      'text-edge:cap alphabetic!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w04; trim-end + cap text-edge stack; half-leading trim — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

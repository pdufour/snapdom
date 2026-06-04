/**
 * Loop AI batch-7 FO recipe shard (worker 2) — outside-box: aural CSS (speak / voice / rate / rest).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w02-001',
    label: 'Loop AI b7 w02 #001: speak-as spell-out',
    idea: 'speak-as:spell-out on FO * — aural speech rendering vs visual FO text raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{speak-as:spell-out!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 02; speak-as only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w02-002',
    label: 'Loop AI b7 w02 #002: voice-family male',
    idea: 'voice-family:male on FO * — aural voice selection cascade inside FO subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{voice-family:male!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 02; voice-family only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w02-003',
    label: 'Loop AI b7 w02 #003: speech-rate slow',
    idea: 'speech-rate:slow on FO * — aural timing property vs FO ink timing',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{speech-rate:slow!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 02; speech-rate only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w02-004',
    label: 'Loop AI b7 w02 #004: rest-before pause',
    idea: 'rest-before:50ms on FO * — aural pause before speech vs FO layout strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{rest-before:50ms!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 02; rest-before only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

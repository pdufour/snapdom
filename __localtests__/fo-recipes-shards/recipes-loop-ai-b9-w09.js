/**
 * Loop AI batch-9 FO recipe shard (worker 9) — text-fix: tracking reset / nowrap anchors / ws modes.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w09-001',
    label: 'Loop AI b9 w09 #001: letter word spacing normal',
    idea: 'letter-spacing:normal + word-spacing:normal on FO * — reset inherited em tracking gaps',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{letter-spacing:normal!important;word-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w09; spacing normal reset on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w09-002',
    label: 'Loop AI b9 w09 #002: spacing normal anchor nowrap',
    idea: 'letter/word-spacing:normal on FO * + text-wrap:nowrap on FO anchors — nav-like single line',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{letter-spacing:normal!important;word-spacing:normal!important}' +
      'foreignObject a{text-wrap:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w09; spacing reset + anchor nowrap; nav-like anchors only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w09-003',
    label: 'Loop AI b9 w09 #003: white-space nowrap leaves',
    idea: 'white-space:nowrap on FO * — single-line strut vs pre-wrap preserved runs (w09-004)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w09; nowrap on all leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w09-004',
    label: 'Loop AI b9 w09 #004: white-space pre-wrap leaves',
    idea: 'white-space:pre-wrap on FO * — preserved runs vs nowrap (w09-003) before FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w09; pre-wrap on all leaves; text metric only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

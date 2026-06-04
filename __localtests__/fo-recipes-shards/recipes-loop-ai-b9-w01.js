/**
 * Loop AI batch-9 FO recipe shard (worker 1) — text-fix: writing-mode axis on FO text leaves.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w01-001',
    label: 'Loop AI b9 w01 #001: vertical-rl on FO *',
    idea: 'writing-mode:vertical-rl + text-orientation:mixed on FO * — vertical inline axis vs FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:vertical-rl!important;text-orientation:mixed!important;' +
      'inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w01; vertical-rl on text leaves; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w01-002',
    label: 'Loop AI b9 w01 #002: horizontal-tb reset on FO *',
    idea: 'FO vertical-rl parent + writing-mode:horizontal-tb reset on FO * — cascade axis flip on DOM text',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important}' +
      'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w01; horizontal-tb reset on descendants; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w01-003',
    label: 'Loop AI b9 w01 #003: sideways-lr on FO anchors',
    idea: 'writing-mode:sideways-lr on FO a — sideways inline flow on nav text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{writing-mode:sideways-lr!important;text-orientation:mixed!important;' +
      'inline-size:max-content!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w01; sideways-lr on FO anchors; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w01-004',
    label: 'Loop AI b9 w01 #004: sideways-rl on FO *',
    idea: 'writing-mode:sideways-rl on FO * — opposite sideways block flow on all text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{writing-mode:sideways-rl!important;text-orientation:mixed!important;' +
      'block-size:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w01; sideways-rl on text leaves; text axis only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

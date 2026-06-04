/**
 * Loop AI batch-8 FO recipe shard (worker 3) — text-fix: pin width / inline-size from live text box.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w03-001',
    label: 'Loop AI b8 w03 #001: pin width live bare',
    idea: 'h2-pin-width-from-live — GBCR width pin on single-line FO text leaves before raster',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b8 w03; live width pin from text box; inline-size metric — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w03-002',
    label: 'Loop AI b8 w03 #002: pin width + nowrap leaves',
    idea: 'h2-pin-width-from-live + white-space:nowrap on FO * — single-line width pin vs wrap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b8 w03; live width pin + nowrap leaves; inline-size metric — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w03-003',
    label: 'Loop AI b8 w03 #003: pin width + max-content inline-size',
    idea: 'h2-pin-width-from-live + inline-size:max-content on FO anchors — intrinsic width vs pinned GBCR',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{display:inline-block!important;inline-size:max-content!important;width:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b8 w03; live width pin + max-content inline-size; inline-size metric — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w03-004',
    label: 'Loop AI b8 w03 #004: pin width + fit-content leaves',
    idea: 'h2-pin-width-from-live + width:fit-content on FO text leaves — shrink-to-fit vs live box pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b8 w03; live width pin + fit-content leaves; inline-size metric — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

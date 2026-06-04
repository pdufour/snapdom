/**
 * Loop AI batch-9 FO recipe shard (worker 7) — text-fix: h2 pin width from live + inline-block middle anchors.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w07-001',
    label: 'Loop AI b9 w07 #001: pin width live bare',
    idea: 'h2-pin-width-from-live — GBCR width pin on single-line FO text leaves before raster',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b9 w07; live width pin from text box; inline strut metric — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w07-002',
    label: 'Loop AI b9 w07 #002: pin width + FO a middle',
    idea: 'h2-pin-width-from-live + display:inline-block + vertical-align:middle on foreignObject a text anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{display:inline-block!important;vertical-align:middle!important;' +
      'line-height:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b9 w07; live width pin + anchor inline-block middle; inline strut metric — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w07-003',
    label: 'Loop AI b9 w07 #003: pin width + FO span middle',
    idea: 'h2-pin-width-from-live + display:inline-block + vertical-align:middle on foreignObject span leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{display:inline-block!important;vertical-align:middle!important;' +
      'line-height:normal!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b9 w07; live width pin + span inline-block middle; inline strut metric — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w07-004',
    label: 'Loop AI b9 w07 #004: pin width + FO>div a middle',
    idea: 'h2-pin-width-from-live + foreignObject>div a inline-block middle — wrapper-scoped anchor strut vs GBCR pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div a{display:inline-block!important;vertical-align:middle!important;' +
      'line-height:normal!important;box-sizing:border-box!important;min-height:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b9 w07; live width pin + FO>div a middle; inline strut metric — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-8 FO recipe shard (worker 7) — text-fix: vertical-align + align-items baseline flex text row.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w07-001',
    label: 'Loop AI b8 w07 #001: flex baseline inline text',
    idea: 'FO flex row align-items:baseline + inline text leaves vertical-align:baseline — flex vs inline strut',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;overflow:visible!important}' +
      TEXT_LEAF +
      'foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w07; flex baseline row + inline baseline leaves; vertical alignment — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w07-002',
    label: 'Loop AI b8 w07 #002: flex baseline anchor inline-block',
    idea: 'FO flex baseline row + anchor inline-block vertical-align:baseline on nav text anchors',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;overflow:visible!important}' +
      TEXT_LEAF +
      'foreignObject a{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w07; flex baseline + anchor inline-block baseline; vertical alignment — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w07-003',
    label: 'Loop AI b8 w07 #003: flex baseline span middle',
    idea: 'FO flex baseline row + span vertical-align:middle — cross-axis middle vs baseline on text row',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;overflow:visible!important}' +
      TEXT_LEAF +
      'foreignObject span{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w07; flex baseline + span middle valign; vertical alignment — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w07-004',
    label: 'Loop AI b8 w07 #004: flex baseline anchor align-self',
    idea: 'FO flex baseline row + anchor align-self:baseline + vertical-align:baseline on text anchors',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;overflow:visible!important}' +
      TEXT_LEAF +
      'foreignObject a{align-self:baseline!important;vertical-align:baseline!important;' +
      'display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w07; flex baseline + anchor align-self baseline; vertical alignment — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

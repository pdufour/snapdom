/**
 * Loop AI batch-9 FO recipe shard (worker 3) — text-fix: direction rtl + unicode-bidi on spans.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w03-001',
    label: 'Loop AI b9 w03 #001: rtl plaintext bidi span',
    idea: 'direction:rtl + unicode-bidi:plaintext on FO span — plaintext bidi vs DOM text order',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:plaintext!important;' +
      'writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w03; rtl+plaintext on spans; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w03-002',
    label: 'Loop AI b9 w03 #002: rtl isolate bidi span',
    idea: 'direction:rtl + unicode-bidi:isolate on FO span — isolated bidi embedding on inline text',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:isolate!important;' +
      'text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w03; rtl+isolate on spans; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w03-003',
    label: 'Loop AI b9 w03 #003: rtl embed bidi span',
    idea: 'direction:rtl + unicode-bidi:embed on FO span — embed bidi context on span text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:embed!important;' +
      'line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w03; rtl+embed on spans; text axis only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w03-004',
    label: 'Loop AI b9 w03 #004: rtl normal bidi span',
    idea: 'direction:rtl + unicode-bidi:normal on FO span — explicit bidi reset vs rtl inline axis',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{direction:rtl!important;unicode-bidi:normal!important;' +
      'inline-size:max-content!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w03; rtl+normal bidi on spans; text axis only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-9 FO recipe shard (worker 8) — text-fix: font optical / size-adjust / stretch / nums.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w08-001',
    label: 'Loop AI b9 w08 #001: font-optical-sizing auto',
    idea: 'font-optical-sizing:auto on FO * — optical size axis vs inherited auto metrics in FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-optical-sizing:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w08; optical-sizing auto on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w08-002',
    label: 'Loop AI b9 w08 #002: font-size-adjust from-font',
    idea: 'font-size-adjust:from-font on FO * — x-height metric from font vs author size-adjust drift',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-size-adjust:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w08; size-adjust from-font on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w08-003',
    label: 'Loop AI b9 w08 #003: font-stretch normal',
    idea: 'font-stretch:normal on FO * — reset condensed/expanded stretch vs live glyph width',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w08; font-stretch normal on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w08-004',
    label: 'Loop AI b9 w08 #004: proportional-nums variant',
    idea: 'font-variant-numeric:proportional-nums on FO * — figure width vs tabular-nums probes',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-variant-numeric:proportional-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w08; proportional-nums on leaves; text metric only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

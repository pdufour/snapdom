/**
 * Loop AI batch-2 crazy FO recipe shard (worker 10) — compositing / stacking theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w10-001',
    label: 'Loop AI b2 w10 #001: mix-blend-mode soft-light',
    idea: 'mix-blend-mode:soft-light on FO * — alternate blend compositor vs multiply baseline',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mix-blend-mode:soft-light!important;isolation:auto!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w10-002',
    label: 'Loop AI b2 w10 #002: plus-lighter isolate root',
    idea: 'isolation:isolate on FO + mix-blend-mode:plus-lighter on subtree — additive blend stack',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important;position:relative!important;overflow:visible!important}foreignObject *{mix-blend-mode:plus-lighter!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w10-003',
    label: 'Loop AI b2 w10 #003: brightness identity filter',
    idea: 'filter:brightness(1) + will-change:opacity on FO — identity brightness layer promotion',
    css:
      FO_BASELINE_CSS +
      'foreignObject{filter:brightness(1)!important;will-change:opacity!important}foreignObject *{filter:none!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w10-004',
    label: 'Loop AI b2 w10 #004: backdrop-filter blur zero',
    idea: 'backdrop-filter:blur(0) on FO — backdrop compositor hook with no visible blur',
    css:
      FO_BASELINE_CSS +
      'foreignObject{backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important;isolation:isolate!important;overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

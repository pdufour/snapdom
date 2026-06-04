/**
 * Loop AI crazy FO recipe shard (worker 10) — compositing / stacking theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w10-001',
    label: 'Loop AI w10 #001: isolation isolate FO root',
    idea: 'isolation:isolate on foreignObject — dedicated stacking context before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important;position:relative!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w10-002',
    label: 'Loop AI w10 #002: mix-blend-mode multiply',
    idea: 'mix-blend-mode:multiply on FO * — blend compositor vs text ink bounds',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mix-blend-mode:multiply!important;isolation:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w10-003',
    label: 'Loop AI w10 #003: micro-contrast filter + decode wait',
    idea: 'filter:contrast(1.0001) + will-change:filter — sub-unity filter layer + decode-interval',
    css:
      FO_BASELINE_CSS +
      'foreignObject{filter:contrast(1.0001)!important;will-change:filter!important}foreignObject *{box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI shard worker 10 — compositing theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

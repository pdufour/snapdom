/**
 * Loop AI crazy FO recipe shard (worker 7) — stacking / isolation theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w07-001',
    label: 'Loop AI w07 #001: isolation isolate FO',
    idea: 'isolation:isolate on FO root — new stacking context before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important;overflow:visible!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w07-002',
    label: 'Loop AI w07 #002: z-index 0 relative layer',
    idea: 'position:relative + z-index:0 on FO * — explicit layer without offset',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{position:relative!important;z-index:0!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w07-003',
    label: 'Loop AI w07 #003: mix-blend normal reset',
    idea: 'mix-blend-mode:normal on FO * — cancel inherited blend before decode',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mix-blend-mode:normal!important;isolation:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

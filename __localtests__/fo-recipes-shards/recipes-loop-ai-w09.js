/**
 * Loop AI crazy FO recipe shard (worker 9) — flex/grid alignment theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w09-001',
    label: 'Loop AI w09 #001: align-content center FO',
    idea: 'display:flex + align-content:center on FO — multi-line cross packing probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-wrap:wrap!important;align-content:center!important;min-height:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w09-002',
    label: 'Loop AI w09 #002: justify-items stretch grid',
    idea: 'display:grid + justify-items:stretch on FO — default stretch vs intrinsic text',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important;justify-items:stretch!important;align-items:baseline!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w09-003',
    label: 'Loop AI w09 #003: gap zero flex children',
    idea: 'gap:0 + row-gap/column-gap explicit on FO flex — collapse inter-item rhythm',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;gap:0!important;row-gap:0!important;column-gap:0!important}foreignObject *{min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

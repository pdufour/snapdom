/**
 * Loop AI batch-2 crazy FO recipe shard (worker 9) — flex/grid alignment theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w09-001',
    label: 'Loop AI b2 w09 #001: align-self baseline flex',
    idea: 'align-self:baseline on FO flex children — per-item cross-axis probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;align-items:stretch!important}foreignObject *{align-self:baseline!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w09-002',
    label: 'Loop AI b2 w09 #002: place-items center grid',
    idea: 'display:grid + place-items:center on FO — two-axis center packing',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important;place-items:center!important;min-height:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w09-003',
    label: 'Loop AI b2 w09 #003: flex column-reverse',
    idea: 'flex-direction:column-reverse on FO — main-axis flip vs capture order',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:column-reverse!important;align-items:stretch!important}foreignObject *{min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w09-004',
    label: 'Loop AI b2 w09 #004: justify space-evenly',
    idea: 'justify-content:space-evenly on FO flex row — even main-axis distribution',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:flex!important;flex-direction:row!important;justify-content:space-evenly!important;align-items:center!important}foreignObject *{flex:0 1 auto!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 09 — alignment theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

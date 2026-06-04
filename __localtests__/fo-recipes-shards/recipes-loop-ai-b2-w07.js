/**
 * Loop AI batch-2 crazy FO recipe shard (worker 7) — stacking / compositing theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w07-001',
    label: 'Loop AI b2 w07 #001: translateZ layer hint',
    idea: 'transform:translateZ(0) on FO * — GPU layer without geometric shift',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{transform:translateZ(0)!important;backface-visibility:hidden!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w07-002',
    label: 'Loop AI b2 w07 #002: will-change transform',
    idea: 'will-change:transform on FO root — compositor promotion before decode',
    css:
      FO_BASELINE_CSS +
      'foreignObject{will-change:transform!important;transform:translateZ(0)!important;overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w07-003',
    label: 'Loop AI b2 w07 #003: opacity filter identity',
    idea: 'filter:opacity(100%) on FO — identity filter stack vs none',
    css:
      FO_BASELINE_CSS +
      'foreignObject{filter:opacity(100%)!important;isolation:isolate!important}foreignObject *{filter:none!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w07-004',
    label: 'Loop AI b2 w07 #004: contain paint subtree',
    idea: 'contain:paint on FO * — paint containment vs visible overflow',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{contain:paint!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI batch-2 shard worker 07 — stacking theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI crazy FO recipe shard (worker 1) — layout / intrinsic sizing theme.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w01-001',
    label: 'Loop AI w01 #001: inline-flex FO shell',
    idea: 'foreignObject as inline-flex — cross-axis baseline vs block FO box',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:inline-flex!important;align-items:baseline!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w01-002',
    label: 'Loop AI w01 #002: subgrid rows on FO *',
    idea: 'grid-template-rows:subgrid span 2 — nested row alignment probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:grid!important;grid-template-rows:repeat(2,auto)!important}foreignObject *{display:grid!important;grid-row:span 2!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w01-003',
    label: 'Loop AI w01 #003: writing-mode vertical-rl',
    idea: 'writing-mode:vertical-rl on FO subtree — inline/block axis flip',
    css:
      FO_BASELINE_CSS +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important}foreignObject *{min-width:0!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Loop AI shard worker 01 — layout theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

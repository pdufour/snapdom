/**
 * Loop AI batch-7 FO recipe shard (worker 3) — outside-box: counters / @counter-style / symbols().
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w03-001',
    label: 'Loop AI b7 w03 #001: counter reset increment style',
    idea: 'counter-reset on FO root + counter-increment/counter-style on FO * — named counter cascade',
    css:
      FO_BASELINE_CSS +
      'foreignObject{counter-reset:fo-b7-section 0!important}' +
      'foreignObject *{counter-increment:fo-b7-section!important;counter-style:decimal!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 03; counter-reset/increment/style only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w03-002',
    label: 'Loop AI b7 w03 #002: @counter-style cyclic dash',
    idea: '@counter-style fo-b7-dash cyclic symbols — custom list marker style on FO lists',
    css:
      FO_BASELINE_CSS +
      '@counter-style fo-b7-dash{system:cyclic;symbols:"—" "•";suffix:" "}' +
      'foreignObject ul,foreignObject ol{list-style-type:fo-b7-dash!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 03; @counter-style only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b7-w03-003',
    label: 'Loop AI b7 w03 #003: symbols() list markers',
    idea: 'list-style-type:symbols() on FO lists — inline symbol function vs @counter-style rule',
    css:
      FO_BASELINE_CSS +
      'foreignObject ul,foreignObject ol{list-style-type:symbols("▲" "▼" "◆")!important}' +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'outside-box',
    active: true,
    notes: 'Loop AI b7 shard worker 03; list-style-type symbols() only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

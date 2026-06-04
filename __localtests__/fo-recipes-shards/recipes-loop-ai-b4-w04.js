/**
 * Loop AI batch-4 FO recipe shard (worker 4) — table layout / list-style / caption-side / border-collapse.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b4-w04-001',
    label: 'Loop AI b4 w04 #001: table-layout fixed 100%',
    idea: 'table-layout:fixed + width:100% on FO tables — fixed column grid vs auto intrinsic measure',
    css:
      FO_BASELINE_CSS +
      'foreignObject table{table-layout:fixed!important;width:100%!important;max-width:100%!important;' +
      'border-spacing:0!important}' +
      'foreignObject td,foreignObject th{width:1%!important;overflow:hidden!important;' +
      'text-overflow:ellipsis!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 04; table-layout only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w04-002',
    label: 'Loop AI b4 w04 #002: list-style roman outside',
    idea: 'list-style-type:lower-roman + position:outside + image:none on FO * — marker box vs content',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{list-style-type:lower-roman!important;list-style-position:outside!important;' +
      'list-style-image:none!important;display:list-item!important;' +
      'box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 04; list-style only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w04-003',
    label: 'Loop AI b4 w04 #003: caption-side bottom',
    idea: 'caption-side:bottom on FO table + caption display:table-caption — caption below grid',
    css:
      FO_BASELINE_CSS +
      'foreignObject table{caption-side:bottom!important;border-collapse:collapse!important}' +
      'foreignObject caption{caption-side:bottom!important;display:table-caption!important;' +
      'text-align:start!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 04; caption-side only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b4-w04-004',
    label: 'Loop AI b4 w04 #004: border-collapse separate gap',
    idea: 'border-collapse:separate + border-spacing:3px on FO tables — double border model vs collapse',
    css:
      FO_BASELINE_CSS +
      'foreignObject table{border-collapse:separate!important;border-spacing:3px!important;' +
      'empty-cells:show!important;background-clip:padding-box!important}' +
      'foreignObject td,foreignObject th{border:1px solid currentColor!important;' +
      'box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b4 shard worker 04; border-collapse only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

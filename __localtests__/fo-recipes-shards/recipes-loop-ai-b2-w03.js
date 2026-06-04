/**
 * Loop AI batch-2 FO recipe shard (worker 3) — decode path / SVG filter wild raster.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w03-001',
    label: 'Loop AI b2 w03 #001: load-event decode wait',
    idea: 'load-event-interval raster + integer-viewbox — Image onload flush before drawImage',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'load-event-interval',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b2 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w03-002',
    label: 'Loop AI b2 w03 #002: offscreen canvas transfer',
    idea: 'offscreen-canvas raster + fe-component-transfer-identity — bitmap handoff vs FO filter noop',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important;isolation:isolate!important}foreignObject *{min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'offscreen-canvas',
    foSvgPatch: 'fe-component-transfer-identity',
    notes: 'Loop AI b2 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w03-003',
    label: 'Loop AI b2 w03 #003: double SVG dataurl encode',
    idea: 'svg-dataurl-double-encode raster — re-encode serialized SVG before Image decode',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{shape-rendering:geometricPrecision!important;image-rendering:auto!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'svg-dataurl-double-encode',
    notes: 'Loop AI b2 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w03-004',
    label: 'Loop AI b2 w03 #004: microtask double decode',
    idea: 'decode-microtask-twice + round-dims viewBox — microtask queue flush between decodes',
    css:
      FO_BASELINE_CSS +
      'foreignObject{overflow:visible!important}foreignObject *{box-sizing:border-box!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-microtask-twice',
    svgRootRound: 'round-dims',
    notes: 'Loop AI b2 shard worker 03; global FO; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

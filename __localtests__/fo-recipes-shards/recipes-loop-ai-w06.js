/**
 * Loop AI FO recipe shard (worker 6) — SVG filter patches / device grid raster.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-w06-001',
    label: 'Loop AI w06 #001: fe morphology identity',
    idea: 'fe-morphology-identity SVG filter noop on each foreignObject',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-morphology-identity',
    notes: 'Loop AI shard worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w06-002',
    label: 'Loop AI w06 #002: filter empty nop defs',
    idea: 'filter-empty-nop defs + isolation:isolate on FO — stacking vs filter',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important;filter:none!important}foreignObject *{isolation:auto!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'filter-empty-nop',
    notes: 'Loop AI shard worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-w06-003',
    label: 'Loop AI w06 #003: shape-rendering device-grid',
    idea: 'fo-shape-rendering-auto attr + device-grid-floor raster snap',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{shape-rendering:auto!important;image-rendering:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fo-shape-rendering-auto',
    rasterPatch: 'device-grid-floor',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI shard worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

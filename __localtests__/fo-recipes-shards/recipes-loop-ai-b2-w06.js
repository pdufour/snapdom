/**
 * Loop AI batch-2 FO recipe shard (worker 6) — SVG filter patches / device grid raster.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b2-w06-001',
    label: 'Loop AI b2 w06 #001: fe-color-matrix identity',
    idea: 'fe-color-matrix-identity SVG filter noop on each foreignObject',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-color-matrix-identity',
    notes: 'Loop AI batch-2 worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w06-002',
    label: 'Loop AI b2 w06 #002: fe-component-transfer identity',
    idea: 'fe-component-transfer-identity filter chain — transfer table no-op',
    css:
      FO_BASELINE_CSS +
      'foreignObject{filter:none!important}foreignObject *{filter:none!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-component-transfer-identity',
    notes: 'Loop AI batch-2 worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w06-003',
    label: 'Loop AI b2 w06 #003: fe-merge empty',
    idea: 'fe-merge-empty defs — merge node with no inputs probe',
    css: FO_BASELINE_CSS + 'foreignObject{isolation:isolate!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-merge-empty',
    notes: 'Loop AI batch-2 worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b2-w06-004',
    label: 'Loop AI b2 w06 #004: filter-noop-defs device-grid',
    idea: 'filter-noop-defs + device-grid-floor raster snap on FO subtree',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{shape-rendering:geometricPrecision!important;image-rendering:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    foSvgPatch: 'filter-noop-defs',
    rasterPatch: 'device-grid-floor',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI batch-2 worker 06; SVG filter theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

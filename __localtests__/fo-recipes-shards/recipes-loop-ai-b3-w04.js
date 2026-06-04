/**
 * Loop AI batch-3 FO recipe shard (worker 4) — SVG filter / root geometry / stroke / baseline.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b3-w04-001',
    label: 'Loop AI b3 w04 #001: feDisplacementMap scale 0',
    idea: 'fe-displacement-map-identity on each foreignObject — scale 0 noop displacement',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-displacement-map-identity',
    notes: 'Loop AI b3 shard worker 04; feDisplacementMap noop only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w04-002',
    label: 'Loop AI b3 w04 #002: preserveAspectRatio slice',
    idea: 'Patch capture svg preserveAspectRatio xMinYMin slice before FO raster',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgRootPatch: { preserveAspectRatio: 'xMinYMin slice' },
    notes: 'Loop AI b3 shard worker 04; preserveAspectRatio slice only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w04-003',
    label: 'Loop AI b3 w04 #003: non-scaling-stroke',
    idea: 'vector-effect:non-scaling-stroke on FO nested svg — stroke vs FO scale split',
    css:
      FO_BASELINE_CSS +
      'foreignObject svg{vector-effect:non-scaling-stroke!important;overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 04; vector-effect non-scaling-stroke only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b3-w04-004',
    label: 'Loop AI b3 w04 #004: dominant-baseline central',
    idea: 'dominant-baseline:central on FO * — SVG text metric vs inline line box',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{dominant-baseline:central!important;alignment-baseline:auto!important;' +
      'text-anchor:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop AI b3 shard worker 04; dominant-baseline only; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

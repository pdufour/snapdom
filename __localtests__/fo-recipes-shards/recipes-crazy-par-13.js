/**
 * Parallel crazy FO recipe shard (worker 13).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w13-001',
    label: 'Crazy par w13 #001: content-visibility auto',
    idea: 'content-visibility:auto on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{content-visibility:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 13; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w13-002',
    label: 'Crazy par w13 #002: contain-intrinsic-size 0',
    idea: 'contain-intrinsic-size:0 0 on FO',
    css: FO_BASELINE_CSS + 'foreignObject{contain-intrinsic-size:0px 0px!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 13; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w13-003',
    label: 'Crazy par w13 #003: container-type inline-size',
    idea: 'container-type:inline-size on FO>div',
    css: FO_BASELINE_CSS + 'foreignObject>div{container-type:inline-size!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 13; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w13-004',
    label: 'Crazy par w13 #004: pre-decode-dom',
    idea: 'pre-decode-dom raster + baseline',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'pre-decode-dom',
    svgRootRound: 'integer-viewbox',
    notes: 'Parallel crazy shard worker 13; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w13-005',
    label: 'Crazy par w13 #005: load-event-interval',
    idea: 'load-event-interval decode wait',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'load-event-interval',
    notes: 'Parallel crazy shard worker 13; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

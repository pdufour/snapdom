/**
 * Parallel crazy FO recipe shard (worker 10).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w10-001',
    label: 'Crazy par w10 #001: direction rtl bidi',
    idea: 'direction:rtl on FO * — bidi reorder probe',
    css: FO_BASELINE_CSS + 'foreignObject *{direction:rtl!important;unicode-bidi:embed!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w10-002',
    label: 'Crazy par w10 #002: unicode-bidi isolate',
    idea: 'unicode-bidi:isolate on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w10-003',
    label: 'Crazy par w10 #003: text-orientation upright',
    idea: 'text-orientation:upright with vertical writing',
    css: FO_BASELINE_CSS + 'foreignObject *{writing-mode:vertical-lr!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w10-004',
    label: 'Crazy par w10 #004: device-grid-floor',
    idea: 'device-grid-floor + round-dims',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'device-grid-floor',
    svgRootRound: 'round-dims',
    notes: 'Parallel crazy shard worker 10; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w10-005',
    label: 'Crazy par w10 #005: blob-url decode interval',
    idea: 'blob-url-decode-interval timing path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'blob-url-decode-interval',
    notes: 'Parallel crazy shard worker 10; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

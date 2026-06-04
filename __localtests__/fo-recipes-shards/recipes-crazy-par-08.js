/**
 * Parallel crazy FO recipe shard (worker 8).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w08-001',
    label: 'Crazy par w08 #001: translateZ 0.001px',
    idea: 'translateZ(0.001px) on FO * — layer snap without magic Y',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:translateZ(0.001px)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w08-002',
    label: 'Crazy par w08 #002: rotate 0.01deg',
    idea: 'rotate(0.01deg) sub-degree on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:rotate(0.01deg)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w08-003',
    label: 'Crazy par w08 #003: skewX 0.1deg micro',
    idea: 'skewX(0.1deg) micro-skew on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:skewX(0.1deg)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w08-004',
    label: 'Crazy par w08 #004: two-stage raster',
    idea: 'two-stage decode with int viewBox',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'two-stage',
    svgRootRound: 'integer-viewbox',
    notes: 'Parallel crazy shard worker 08; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w08-005',
    label: 'Crazy par w08 #005: raf before draw',
    idea: 'raf-before-draw timing + baseline FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'raf-before-draw',
    notes: 'Parallel crazy shard worker 08; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

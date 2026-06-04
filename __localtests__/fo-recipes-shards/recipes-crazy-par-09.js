/**
 * Parallel crazy FO recipe shard (worker 9).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w09-001',
    label: 'Crazy par w09 #001: overflow clip on FO',
    idea: 'overflow:clip on FO vs visible children',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:clip!important}foreignObject *{overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w09-002',
    label: 'Crazy par w09 #002: overscroll-behavior none',
    idea: 'overscroll-behavior:none on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{overscroll-behavior:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w09-003',
    label: 'Crazy par w09 #003: scroll-snap strict',
    idea: 'scroll-snap-type:y mandatory on FO',
    css: FO_BASELINE_CSS + 'foreignObject{scroll-snap-type:y mandatory!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w09-004',
    label: 'Crazy par w09 #004: explicit xmlns strip transforms',
    idea: 'svgMarkupPatch explicit-xmlns-strip-transforms',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    notes: 'Parallel crazy shard worker 09; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w09-005',
    label: 'Crazy par w09 #005: strip identity transforms',
    idea: 'strip-identity-transforms before raster',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    svgMarkupPatch: 'strip-identity-transforms',
    notes: 'Parallel crazy shard worker 09; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Parallel crazy FO recipe shard (worker 11).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w11-001',
    label: 'Crazy par w11 #001: place-content center grid',
    idea: 'display:grid place-content:center on FO>div',
    css: FO_BASELINE_CSS + 'foreignObject>div{display:grid!important;place-content:center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 11; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w11-002',
    label: 'Crazy par w11 #002: align-content stretch flex',
    idea: 'flex align-content:stretch on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{display:flex!important;align-content:stretch!important;align-items:stretch!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 11; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w11-003',
    label: 'Crazy par w11 #003: gap 0 important flex',
    idea: 'gap:0 !important on flex FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{display:flex!important;gap:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 11; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w11-004',
    label: 'Crazy par w11 #004: createImageBitmap path',
    idea: 'createImageBitmap raster decode',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'create-image-bitmap',
    notes: 'Parallel crazy shard worker 11; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w11-005',
    label: 'Crazy par w11 #005: bitmap premultiply',
    idea: 'create-image-bitmap-premultiply alpha path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'create-image-bitmap-premultiply',
    notes: 'Parallel crazy shard worker 11; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

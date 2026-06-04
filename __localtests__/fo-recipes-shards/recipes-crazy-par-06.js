/**
 * Parallel crazy FO recipe shard (worker 6).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w06-001',
    label: 'Crazy par w06 #001: opacity 0.9999 subunity',
    idea: 'opacity:0.9999 on FO — alpha premultiply probe',
    css: FO_BASELINE_CSS + 'foreignObject{opacity:0.9999!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w06-002',
    label: 'Crazy par w06 #002: mix-blend plus darken',
    idea: 'mix-blend-mode:plus-darker on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{mix-blend-mode:plus-darker!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w06-003',
    label: 'Crazy par w06 #003: background-clip text',
    idea: 'background-clip:text on FO * (radical paint)',
    css: FO_BASELINE_CSS + 'foreignObject *{-webkit-background-clip:text!important;background-clip:text!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w06-004',
    label: 'Crazy par w06 #004: mask-image linear fade',
    idea: 'mask-image linear-gradient on FO root',
    css: FO_BASELINE_CSS + 'foreignObject{-webkit-mask-image:linear-gradient(#000,#000)!important;mask-image:linear-gradient(#000,#000)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w06-005',
    label: 'Crazy par w06 #005: decode microtask twice',
    idea: 'decode-microtask-twice raster flush',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-microtask-twice',
    svgRootRound: 'integer-viewbox',
    notes: 'Parallel crazy shard worker 06; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

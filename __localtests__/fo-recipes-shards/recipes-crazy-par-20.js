/**
 * Parallel crazy FO recipe shard (worker 20).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w20-001',
    label: 'Crazy par w20 #001: writing-mode sideways-lr',
    idea: 'writing-mode sideways-lr radical typesetting',
    css: FO_BASELINE_CSS + 'foreignObject *{writing-mode:sideways-lr!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 20; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w20-002',
    label: 'Crazy par w20 #002: text-combine-upright',
    idea: 'text-combine-upright:all with vertical mode',
    css: FO_BASELINE_CSS + 'foreignObject *{writing-mode:vertical-rl!important;text-combine-upright:all!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 20; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w20-003',
    label: 'Crazy par w20 #003: ruby-position over',
    idea: 'display:ruby + ruby-position:over on FO span probe',
    css: FO_BASELINE_CSS + 'foreignObject span{display:ruby!important;ruby-position:over!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 20; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w20-004',
    label: 'Crazy par w20 #004: strip xml declaration',
    idea: 'strip-xml-declaration markup + decode-interval',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    svgMarkupPatch: 'strip-xml-declaration',
    notes: 'Parallel crazy shard worker 20; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w20-005',
    label: 'Crazy par w20 #005: integer-viewbox direct',
    idea: 'integer-viewbox + direct raster draw',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important;line-height:normal!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'direct',
    svgRootRound: 'integer-viewbox',
    notes: 'Parallel crazy shard worker 20; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

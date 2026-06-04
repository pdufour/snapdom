/**
 * Loop batch 001 shard (worker 6) — SVG structural patches (no text bypass).
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-b001-w06-001',
    label: 'Loop b001 w06 #001: fo-explicit-xhtml-xmlns',
    idea: 'Explicit XHTML xmlns on FO wrapper — serialization namespace probe',
    css: FO_BASELINE_CSS + 'foreignObject *{box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    radicalPatch: 'fo-explicit-xhtml-xmlns',
    notes: 'Loop batch 001 worker 06; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w06-002',
    label: 'Loop b001 w06 #002: fo-wrap-in-switch + decode',
    idea: 'fo-wrap-in-switch SVG surgery + decode-interval raster',
    css: FO_BASELINE_CSS,
    inject: 'both',
    category: 'crazy',
    active: true,
    radicalPatch: 'fo-wrap-in-switch',
    rasterPatch: 'decode-interval',
    notes: 'Loop batch 001 worker 06; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w06-003',
    label: 'Loop b001 w06 #003: svg-purge-whitespace',
    idea: 'svg-purge-whitespace radical + capture inject FO baseline',
    css:
      FO_BASELINE_CSS +
      'foreignObject{display:block!important}foreignObject *{min-width:0!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    radicalPatch: 'svg-purge-whitespace',
    notes: 'Loop batch 001 worker 06; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w06-004',
    label: 'Loop b001 w06 #004: integer-snap-all-rects + composite',
    idea: 'integer-snap-all-rects + composite-copy raster pass',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    category: 'crazy',
    active: true,
    radicalPatch: 'integer-snap-all-rects',
    rasterPatch: 'composite-copy',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop batch 001 worker 06; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w06-005',
    label: 'Loop b001 w06 #005: remove-fe-filters + triple-raf',
    idea: 'Strip SVG fe filters + triple-raf-flush decode timing',
    css:
      FO_BASELINE_CSS +
      'foreignObject{filter:none!important}foreignObject *{filter:none!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    radicalPatch: 'remove-fe-filters',
    rasterPatch: 'triple-raf-flush',
    notes: 'Loop batch 001 worker 06; global FO; FO-raster only.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

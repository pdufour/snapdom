/**
 * Parallel crazy FO recipe shard (worker 5).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w05-001',
    label: 'Crazy par w05 #001: text-rendering geometric',
    idea: 'text-rendering:geometricPrecision on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 05; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w05-002',
    label: 'Crazy par w05 #002: font-kerning none vs normal',
    idea: 'font-kerning:none on FO * (contrast chromium normal)',
    css: FO_BASELINE_CSS + 'foreignObject *{font-kerning:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 05; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w05-003',
    label: 'Crazy par w05 #003: hyphens auto everywhere',
    idea: 'hyphens:auto on FO * — line break probe',
    css: FO_BASELINE_CSS + 'foreignObject *{hyphens:auto!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 05; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w05-004',
    label: 'Crazy par w05 #004: double decode extreme',
    idea: 'FO baseline + double-decode raster timing',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-decode',
    svgRootRound: 'int-floor',
    notes: 'Parallel crazy shard worker 05; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w05-005',
    label: 'Crazy par w05 #005: triple decode extreme',
    idea: 'Triple PNG round-trip after FO paint',
    css: FO_BASELINE_CSS + 'foreignObject *{image-rendering:pixelated!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'triple-decode',
    notes: 'Parallel crazy shard worker 05; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

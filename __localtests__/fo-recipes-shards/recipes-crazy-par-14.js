/**
 * Parallel crazy FO recipe shard (worker 14).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w14-001',
    label: 'Crazy par w14 #001: outline 1px invert',
    idea: 'outline:1px solid invert on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{outline:1px solid invert!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 14; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w14-002',
    label: 'Crazy par w14 #002: box-decoration-break clone',
    idea: 'box-decoration-break:clone on FO inline',
    css: FO_BASELINE_CSS + 'foreignObject *{box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 14; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w14-003',
    label: 'Crazy par w14 #003: break-inside avoid',
    idea: 'break-inside:avoid on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{break-inside:avoid!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 14; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w14-004',
    label: 'Crazy par w14 #004: filter-empty-nop',
    idea: 'filter-empty-nop foSvgPatch',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'filter-empty-nop',
    notes: 'Parallel crazy shard worker 14; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w14-005',
    label: 'Crazy par w14 #005: fe-merge-empty',
    idea: 'fe-merge-empty primitive on FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-merge-empty',
    notes: 'Parallel crazy shard worker 14; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Parallel crazy FO recipe shard (worker 12).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w12-001',
    label: 'Crazy par w12 #001: print-color-adjust exact',
    idea: 'print-color-adjust:exact on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 12; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w12-002',
    label: 'Crazy par w12 #002: forced-color-adjust none',
    idea: 'forced-color-adjust:none on FO',
    css: FO_BASELINE_CSS + 'foreignObject{forced-color-adjust:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 12; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w12-003',
    label: 'Crazy par w12 #003: accent-color hotpink',
    idea: 'accent-color on FO form controls',
    css: FO_BASELINE_CSS + 'foreignObject input,foreignObject button{accent-color:hotpink!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 12; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w12-004',
    label: 'Crazy par w12 #004: canvas-filter invert FO',
    idea: 'invert filter on FO then canvas invert patch',
    css: FO_BASELINE_CSS + 'foreignObject *{filter:invert(1)!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'canvas-filter-invert',
    notes: 'Parallel crazy shard worker 12; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w12-005',
    label: 'Crazy par w12 #005: double raster average',
    idea: 'double-raster-average blend diagnostic',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raster-average',
    notes: 'Parallel crazy shard worker 12; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

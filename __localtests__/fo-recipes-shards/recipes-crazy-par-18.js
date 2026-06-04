/**
 * Parallel crazy FO recipe shard (worker 18).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w18-001',
    label: 'Crazy par w18 #001: flex-basis 0 min',
    idea: 'flex:1 1 0 + min-width:0 on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{display:flex!important;flex:1 1 0!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 18; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w18-002',
    label: 'Crazy par w18 #002: align-self stretch all',
    idea: 'align-self:stretch on every FO child',
    css: FO_BASELINE_CSS + 'foreignObject *{align-self:stretch!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 18; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w18-003',
    label: 'Crazy par w18 #003: justify-self center grid',
    idea: 'justify-self:center on grid FO items',
    css: FO_BASELINE_CSS + 'foreignObject *{display:grid!important;justify-self:center!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 18; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w18-004',
    label: 'Crazy par w18 #004: double-raf',
    idea: 'double-raf raster timing',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raf',
    svgRootRound: 'int-floor',
    notes: 'Parallel crazy shard worker 18; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w18-005',
    label: 'Crazy par w18 #005: fonts-ready',
    idea: 'fonts-ready gate before draw',
    css: FO_BASELINE_CSS + 'foreignObject{font-synthesis:none!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'fonts-ready',
    notes: 'Parallel crazy shard worker 18; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

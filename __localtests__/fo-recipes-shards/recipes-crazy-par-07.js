/**
 * Parallel crazy FO recipe shard (worker 7).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w07-001',
    label: 'Crazy par w07 #001: position fixed inside FO',
    idea: 'position:fixed on FO * — containing block chaos',
    css: FO_BASELINE_CSS + 'foreignObject *{position:fixed!important;top:0!important;left:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w07-002',
    label: 'Crazy par w07 #002: float left on inline',
    idea: 'float:left on FO * — float/FO interaction',
    css: FO_BASELINE_CSS + 'foreignObject *{float:left!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w07-003',
    label: 'Crazy par w07 #003: clear both hammer',
    idea: 'clear:both on FO * after float probe',
    css: FO_BASELINE_CSS + 'foreignObject *{clear:both!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w07-004',
    label: 'Crazy par w07 #004: filter empty nop defs',
    idea: 'filter-noop-defs SVG patch on capture',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'filter-noop-defs',
    notes: 'Parallel crazy shard worker 07; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w07-005',
    label: 'Crazy par w07 #005: fe morphology identity',
    idea: 'feMorphology zero-radius identity on FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-morphology-identity',
    notes: 'Parallel crazy shard worker 07; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

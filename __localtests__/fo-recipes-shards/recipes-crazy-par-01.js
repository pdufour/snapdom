/**
 * Parallel crazy FO recipe shard (worker 1).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w01-001',
    label: 'Crazy par w01 #001: display:contents rebox',
    idea: 'FO display:contents then block rebox on descendants',
    css: FO_BASELINE_CSS + 'foreignObject{display:contents!important}foreignObject *{display:block!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 01; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w01-002',
    label: 'Crazy par w01 #002: scale 0.999 micro-shrink',
    idea: 'Sub-pixel scale(0.999) on FO subtree — raster snap probe',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:scale(0.999)!important;transform-origin:top left!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Parallel crazy shard worker 01; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w01-003',
    label: 'Crazy par w01 #003: filter none hammer',
    idea: 'filter:none !important kills inherited SVG/CSS filters in FO',
    css: FO_BASELINE_CSS + 'foreignObject,foreignObject *{filter:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 01; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w01-004',
    label: 'Crazy par w01 #004: mix-blend multiply stack',
    idea: 'mix-blend-mode multiply on FO * — compositing stack probe',
    css: FO_BASELINE_CSS + 'foreignObject *{mix-blend-mode:multiply!important;isolation:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 01; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w01-005',
    label: 'Crazy par w01 #005: contain strict paint',
    idea: 'contain:strict on FO — layout/paint containment clash',
    css: FO_BASELINE_CSS + 'foreignObject{contain:strict!important}foreignObject *{contain:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 01; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

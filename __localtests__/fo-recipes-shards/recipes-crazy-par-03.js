/**
 * Parallel crazy FO recipe shard (worker 3).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w03-001',
    label: 'Crazy par w03 #001: color-scheme light only',
    idea: 'color-scheme:light on FO — form control paint probe',
    css: FO_BASELINE_CSS + 'foreignObject{color-scheme:light!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 03; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w03-002',
    label: 'Crazy par w03 #002: object-fit cover stretch',
    idea: 'object-fit:cover on FO img/svg descendants',
    css: FO_BASELINE_CSS + 'foreignObject img,foreignObject svg{object-fit:cover!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 03; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w03-003',
    label: 'Crazy par w03 #003: aspect-ratio 16/9 force',
    idea: 'aspect-ratio 16/9 on FO direct div children',
    css: FO_BASELINE_CSS + 'foreignObject>div{aspect-ratio:16/9!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 03; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w03-004',
    label: 'Crazy par w03 #004: grid subgrid attempt',
    idea: 'display:grid + subgrid on FO * (Chromium probe)',
    css: FO_BASELINE_CSS + 'foreignObject *{display:grid!important;grid-template-rows:subgrid!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 03; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w03-005',
    label: 'Crazy par w03 #005: flip-y raster',
    idea: 'Baseline FO + flip-y decode — axis mirror probe',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'flip-y',
    svgRootRound: 'integer-viewbox',
    notes: 'Parallel crazy shard worker 03; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

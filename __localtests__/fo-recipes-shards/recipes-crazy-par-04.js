/**
 * Parallel crazy FO recipe shard (worker 4).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w04-001',
    label: 'Crazy par w04 #001: all unset rebox lite',
    idea: 'all:revert on FO>div only then box-sizing border-box *',
    css: FO_BASELINE_CSS + 'foreignObject>div{all:revert!important}foreignObject *{box-sizing:border-box!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 04; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w04-002',
    label: 'Crazy par w04 #002: backface-visibility hidden',
    idea: 'backface-visibility:hidden on FO * — layer promotion',
    css: FO_BASELINE_CSS + 'foreignObject *{backface-visibility:hidden!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 04; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w04-003',
    label: 'Crazy par w04 #003: will-change transform',
    idea: 'will-change:transform on FO — compositor hint',
    css: FO_BASELINE_CSS + 'foreignObject{will-change:transform!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval-raf',
    notes: 'Parallel crazy shard worker 04; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w04-004',
    label: 'Crazy par w04 #004: fe identity color matrix',
    idea: 'feColorMatrix identity filter patch per FO',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-color-matrix-identity',
    notes: 'Parallel crazy shard worker 04; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w04-005',
    label: 'Crazy par w04 #005: shape-rendering crisp',
    idea: 'fo-shape-rendering-auto SVG attr on each foreignObject',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fo-shape-rendering-auto',
    notes: 'Parallel crazy shard worker 04; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

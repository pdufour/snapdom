/**
 * Parallel crazy FO recipe shard (worker 17).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w17-001',
    label: 'Crazy par w17 #001: inset box-shadow spread',
    idea: 'inset box-shadow on FO * — ink bounds probe',
    css: FO_BASELINE_CSS + 'foreignObject *{box-shadow:inset 0 0 0 1px rgba(0,0,0,0.01)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 17; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w17-002',
    label: 'Crazy par w17 #002: border double 1px',
    idea: 'border-style:double 1px on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{border:1px double currentColor!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 17; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w17-003',
    label: 'Crazy par w17 #003: outline-offset 1px',
    idea: 'outline-offset:1px on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{outline:1px solid transparent!important;outline-offset:1px!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 17; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w17-004',
    label: 'Crazy par w17 #004: scale-down-up raster',
    idea: 'scale-down-up raster patch path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'scale-down-up',
    notes: 'Parallel crazy shard worker 17; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w17-005',
    label: 'Crazy par w17 #005: composite-copy',
    idea: 'composite-copy raster blit',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'composite-copy',
    notes: 'Parallel crazy shard worker 17; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

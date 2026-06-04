/**
 * Parallel crazy FO recipe shard (worker 15).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w15-001',
    label: 'Crazy par w15 #001: scale 1.001 micro-grow',
    idea: 'scale(1.001) micro-grow transform-origin top left',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:scale(1.001)!important;transform-origin:top left!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Parallel crazy shard worker 15; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w15-002',
    label: 'Crazy par w15 #002: matrix 1 0 0 1 0 0',
    idea: 'Explicit matrix(1,0,0,1,0,0) on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:matrix(1,0,0,1,0,0)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 15; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w15-003',
    label: 'Crazy par w15 #003: scaleX 0.9999',
    idea: 'scaleX(0.9999) horizontal-only shrink',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:scaleX(0.9999)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 15; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w15-004',
    label: 'Crazy par w15 #004: offscreen canvas blit',
    idea: 'offscreen-canvas transfer path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'offscreen-canvas',
    notes: 'Parallel crazy shard worker 15; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w15-005',
    label: 'Crazy par w15 #005: double-raf flush',
    idea: 'triple-raf-flush timing extreme',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'triple-raf-flush',
    notes: 'Parallel crazy shard worker 15; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

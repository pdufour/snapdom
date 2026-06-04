/**
 * Parallel crazy FO recipe shard (worker 16).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w16-001',
    label: 'Crazy par w16 #001: visibility visible important',
    idea: 'visibility:visible !important on hidden descendants',
    css: FO_BASELINE_CSS + 'foreignObject *{visibility:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 16; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w16-002',
    label: 'Crazy par w16 #002: pointer-events none paint',
    idea: 'pointer-events:none on FO — paint-only probe',
    css: FO_BASELINE_CSS + 'foreignObject{pointer-events:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 16; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w16-003',
    label: 'Crazy par w16 #003: user-select all',
    idea: 'user-select:all on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{user-select:all!important;-webkit-user-select:all!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 16; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w16-004',
    label: 'Crazy par w16 #004: base64 roundtrip markup',
    idea: 'base64-roundtrip svg markup patch',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgMarkupPatch: 'base64-roundtrip',
    notes: 'Parallel crazy shard worker 16; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w16-005',
    label: 'Crazy par w16 #005: explicit xmlns',
    idea: 'explicit-xmlns on serialized SVG',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-interval',
    svgMarkupPatch: 'explicit-xmlns',
    notes: 'Parallel crazy shard worker 16; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

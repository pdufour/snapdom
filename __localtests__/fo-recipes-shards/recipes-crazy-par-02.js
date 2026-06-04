/**
 * Parallel crazy FO recipe shard (worker 2).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w02-001',
    label: 'Crazy par w02 #001: writing-mode vertical-rl',
    idea: 'writing-mode vertical-rl flip on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{writing-mode:vertical-rl!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 02; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w02-002',
    label: 'Crazy par w02 #002: isolation isolate layer',
    idea: 'isolation:isolate on FO root + auto on children',
    css: FO_BASELINE_CSS + 'foreignObject{isolation:isolate!important}foreignObject *{isolation:auto!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 02; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w02-003',
    label: 'Crazy par w02 #003: perspective 1px',
    idea: 'perspective:1px on FO — sublayer flatten probe',
    css: FO_BASELINE_CSS + 'foreignObject{perspective:1px!important;transform-style:preserve-3d!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 02; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w02-004',
    label: 'Crazy par w02 #004: clip vs overflow war',
    idea: 'clip-path inset vs overflow:visible conflict on FO',
    css: FO_BASELINE_CSS + 'foreignObject{overflow:visible!important;clip-path:inset(0)!important}foreignObject *{overflow:visible!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 02; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w02-005',
    label: 'Crazy par w02 #005: animation none freeze',
    idea: 'animation:none !important on all FO nodes',
    css: FO_BASELINE_CSS + 'foreignObject,foreignObject *{animation:none!important;transition:none!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    rasterPatch: 'fonts-ready-interval',
    notes: 'Parallel crazy shard worker 02; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

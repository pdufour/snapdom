/**
 * Parallel crazy FO recipe shard (worker 19).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-par-w19-001',
    label: 'Crazy par w19 #001: mix-blend screen',
    idea: 'mix-blend-mode:screen on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{mix-blend-mode:screen!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 19; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w19-002',
    label: 'Crazy par w19 #002: mix-blend difference',
    idea: 'mix-blend-mode:difference on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{mix-blend-mode:difference!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 19; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w19-003',
    label: 'Crazy par w19 #003: background-blend multiply',
    idea: 'background-blend-mode:multiply on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{background-blend-mode:multiply!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Parallel crazy shard worker 19; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w19-004',
    label: 'Crazy par w19 #004: canvas pixelated',
    idea: 'canvas-pixelated imageSmoothing after decode',
    css: FO_BASELINE_CSS + 'foreignObject *{image-rendering:-webkit-optimize-contrast!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'canvas-pixelated',
    notes: 'Parallel crazy shard worker 19; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-par-w19-005',
    label: 'Crazy par w19 #005: will-read-frequently',
    idea: 'will-read-frequently canvas context hint',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'will-read-frequently',
    notes: 'Parallel crazy shard worker 19; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

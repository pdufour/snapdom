/**
 * AI-authored crazy FO recipe shard (worker 15).
 * Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w15-001',
    label: 'Crazy AI w15 #001: isolation isolate',
    idea: 'isolation:isolate on FO — stacking context probe',
    css: FO_BASELINE_CSS + 'foreignObject{isolation:isolate!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 15; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w15-002',
    label: 'Crazy AI w15 #002: translateZ will-change',
    idea: 'translateZ(0) + will-change:transform on FO *',
    css: FO_BASELINE_CSS + 'foreignObject *{transform:translateZ(0)!important;will-change:transform!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raf',
    notes: 'AI crazy shard worker 15; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w15-003',
    label: 'Crazy AI w15 #003: perspective 1px',
    idea: 'perspective:1px on FO — 3d flatten probe',
    css: FO_BASELINE_CSS + 'foreignObject{perspective:1px!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 15; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w15-004',
    label: 'Crazy AI w15 #004: bitmaprenderer transfer',
    idea: 'bitmaprenderer-transfer raster path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'bitmaprenderer-transfer',
    notes: 'AI crazy shard worker 15; global foreignObject; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w15-005',
    label: 'Crazy AI w15 #005: phantom font prime',
    idea: 'phantom-font-prime before FO decode',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'phantom-font-prime',
    notes: 'AI crazy shard worker 15; global foreignObject; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

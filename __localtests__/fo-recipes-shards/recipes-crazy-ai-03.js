/**
 * AI crazy FO recipe shard (worker 3) — compositing / isolation / color theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w03-001',
    label: 'Crazy AI w03 #001: isolation isolate stack',
    idea: 'isolation:isolate on FO + auto on * — stacking context sandwich',
    css:
      FO_BASELINE_CSS +
      'foreignObject{isolation:isolate!important}foreignObject *{isolation:auto!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 03 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w03-002',
    label: 'Crazy AI w03 #002: mix-blend screen',
    idea: 'mix-blend-mode:screen on FO * — lightening compositor path',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{mix-blend-mode:screen!important;background-blend-mode:normal!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 03 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w03-003',
    label: 'Crazy AI w03 #003: backdrop-filter blur',
    idea: 'backdrop-filter:blur(2px) on FO — FO raster vs live backdrop mismatch',
    css:
      FO_BASELINE_CSS +
      'foreignObject{backdrop-filter:blur(2px)!important;-webkit-backdrop-filter:blur(2px)!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 03 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w03-004',
    label: 'Crazy AI w03 #004: opacity 0.999 stack',
    idea: 'opacity:0.999 on FO * — sub-unity alpha without hiding text',
    css: FO_BASELINE_CSS + 'foreignObject *{opacity:0.999!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 03 — compositing theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w03-005',
    label: 'Crazy AI w03 #005: double-raster-difference',
    idea: 'FO color-scheme only light + double-raster-difference ink probe path',
    css:
      FO_BASELINE_CSS +
      'foreignObject{color-scheme:only light!important}foreignObject *{color-scheme:only light!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raster-difference',
    notes: 'AI crazy shard worker 03 — compositing theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

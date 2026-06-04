/**
 * AI crazy FO recipe shard (worker 4) — decode / blob / timing raster theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w04-001',
    label: 'Crazy AI w04 #001: blob-url sync decode',
    idea: 'Baseline FO + blob-url objectURL sync decode path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'blob-url',
    notes: 'AI crazy shard worker 04 — decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w04-002',
    label: 'Crazy AI w04 #002: blob-url early revoke',
    idea: 'Revoke objectURL immediately after assign — timing race probe',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'blob-url-early-revoke',
    notes: 'AI crazy shard worker 04 — decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w04-003',
    label: 'Crazy AI w04 #003: decode-via-blob',
    idea: 'SVG string → Blob → Image decode-via-blob pipeline',
    css: FO_BASELINE_CSS + 'foreignObject *{image-rendering:auto!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'decode-via-blob',
    notes: 'AI crazy shard worker 04 — decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w04-004',
    label: 'Crazy AI w04 #004: bitmaprenderer transfer',
    idea: 'ImageBitmap → bitmaprenderer transferFromImageBitmap path',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'bitmaprenderer-transfer',
    notes: 'AI crazy shard worker 04 — decode theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w04-005',
    label: 'Crazy AI w04 #005: img srcset 1x + decode-interval',
    idea: 'img-srcset-1x raster knob with decode-interval wait on FO baseline',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{-webkit-font-smoothing:antialiased!important;font-smooth:always!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'img-srcset-1x',
    notes: 'AI crazy shard worker 04 — decode theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

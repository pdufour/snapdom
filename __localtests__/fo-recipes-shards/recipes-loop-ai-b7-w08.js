/**
 * Loop AI batch-7 FO recipe shard (worker 8) — raster path only (no capture CSS inject).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b7-w08-001',
    label: 'Loop AI b7 w08 #001: webp roundtrip raster',
    idea: 'webp-roundtrip raster path only — lossy encode/decode color space before drawImage',
    css: '',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    rasterPatch: 'webp-roundtrip',
    notes: 'Loop AI b7 shard worker 08; raster-only webp-roundtrip — no capture CSS inject; no text bypass.',
  },
  {
    id: 'loop-ai-b7-w08-002',
    label: 'Loop AI b7 w08 #002: svg dataurl double encode',
    idea: 'svg-dataurl-double-encode raster path only — re-serialize SVG data URL before Image decode',
    css: '',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    rasterPatch: 'svg-dataurl-double-encode',
    notes: 'Loop AI b7 shard worker 08; raster-only double-encode — no capture CSS inject; no text bypass.',
  },
  {
    id: 'loop-ai-b7-w08-003',
    label: 'Loop AI b7 w08 #003: composite copy raster',
    idea: 'composite-copy raster path only — bitmap composite blit after decode',
    css: '',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    rasterPatch: 'composite-copy',
    notes: 'Loop AI b7 shard worker 08; raster-only composite-copy — no capture CSS inject; no text bypass.',
  },
  {
    id: 'loop-ai-b7-w08-004',
    label: 'Loop AI b7 w08 #004: context alpha false desync',
    idea: 'context-alpha-false-desync raster path only — 2d context alpha:false vs premultiplied decode',
    css: '',
    inject: 'raster',
    category: 'outside-box',
    active: true,
    rasterPatch: 'context-alpha-false-desync',
    notes: 'Loop AI b7 shard worker 08; raster-only context-alpha-false — no capture CSS inject; no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

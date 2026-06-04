/**
 * Wave-5 rasterPatch gap-fill — tc-lab-w5-gap-001..050.
 * Targets zero-count and count≤1 rasterPatch values among tc-lab* / tc-only* inventory.
 * Harness raster paths only — no text bypass. No src/ edits.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-gap-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** Zero-count rasterPatch values in tc-lab and tc-only inventory (37). */
const ZERO_COUNT_PATCHES = [
  'none',
  'canvas-pixelated',
  'fonts-ready',
  'offscreen-canvas',
  'will-read-frequently',
  'direct',
  'blob-url-early-revoke',
  'blob-url-fetch-revoke',
  'create-image-bitmap-premultiply',
  'svg-dataurl-double-encode',
  'v2-double-svg-encode',
  'bitmap-close',
  'load-event-interval',
  'pre-decode-dom',
  'flip-y',
  'double-raster-average',
  'double-raster-difference',
  'canvas-filter-invert',
  'supersample-downscale',
  'h2-supersample-dpr-lt2',
  'canvas-from-live',
  'no-fo-capture',
  'composite-copy',
  'phantom-font-prime',
  'context-alpha-false-desync',
  'scale-down-up',
  'html-to-canvas-direct',
  'html2canvas-live-draw',
  'bitmaprenderer-transfer',
  'img-srcset-1x',
  'webp-roundtrip',
  'triple-raf-flush',
  'canvas-putImageData-live-snapshot',
  'element-capture-bitmap',
  'wait-fonts-500ms',
  'iframe-serialized-svg-decode',
  'node-layer-datauri-blob',
]

/** Count=1 rasterPatch values — structural variants (13). */
const RARE_VARIANTS = [
  {
    rasterPatch: 'device-grid-floor',
    slug: 'device-grid-floor + int-vb',
    idea: 'device-grid-floor SVG snap + integer-viewbox before raster',
    extra: { svgRootRound: 'integer-viewbox' },
  },
  {
    rasterPatch: 'decode-interval-raf',
    slug: 'decode-interval-raf + H2 normalize',
    idea: 'decode-interval-raf + H2_RASTER_NORMALIZE structural CSS',
    extra: { inject: 'both', css: H2_RASTER_NORMALIZE_CSS },
  },
  {
    rasterPatch: 'double-decode',
    slug: 'double-decode + round-dims',
    idea: 'PNG double-decode path + round-dims on SVG root',
    extra: { svgRootRound: 'round-dims' },
  },
  {
    rasterPatch: 'triple-decode',
    slug: 'triple-decode + FO baseline',
    idea: 'Triple img.decode + FO_BASELINE_CSS at pre-raster inject',
    extra: { inject: 'both', css: FO_BASELINE_CSS },
  },
  {
    rasterPatch: 'blob-url-decode-interval',
    slug: 'blob-url-decode-interval + int-floor',
    idea: 'Blob URL + decode-interval wait + int-floor root dims',
    extra: { svgRootRound: 'int-floor' },
  },
  {
    rasterPatch: 'fonts-ready-interval',
    slug: 'fonts-ready-interval + leaf strut',
    idea: 'document.fonts.ready + decode-interval + FO flex leaf strut CSS',
    extra: { inject: 'both', css: FO_BASELINE_CSS + LEAF },
  },
  {
    rasterPatch: 'decode-microtask-twice',
    slug: 'decode-microtask-twice + int-vb',
    idea: 'decode + microtask + second decode + integer-viewbox',
    extra: { svgRootRound: 'integer-viewbox' },
  },
  {
    rasterPatch: 'load-event',
    slug: 'load-event + H2 normalize',
    idea: 'img onload wait + H2_RASTER_NORMALIZE at inject both',
    extra: { inject: 'both', css: H2_RASTER_NORMALIZE_CSS },
  },
  {
    rasterPatch: 'double-raf',
    slug: 'double-raf + FO baseline',
    idea: 'Offscreen img + double-RAF + FO_BASELINE_CSS',
    extra: { inject: 'both', css: FO_BASELINE_CSS },
  },
  {
    rasterPatch: 'raf-before-draw',
    slug: 'raf-before-draw + round-dims',
    idea: 'Single RAF after decode + round-dims root snap',
    extra: { svgRootRound: 'round-dims' },
  },
  {
    rasterPatch: 'create-image-bitmap',
    slug: 'create-image-bitmap + int-vb',
    idea: 'createImageBitmap draw path + integer-viewbox',
    extra: { svgRootRound: 'integer-viewbox' },
  },
  {
    rasterPatch: 'create-image-bitmap-pixelated',
    slug: 'create-image-bitmap-pixelated + leaf',
    idea: 'createImageBitmap pixelated + FO leaf strut CSS',
    extra: { inject: 'both', css: FO_BASELINE_CSS + LEAF },
  },
  {
    rasterPatch: 'blob-url',
    slug: 'blob-url + int-floor',
    idea: 'Object URL raster src + int-floor root width/height',
    extra: { svgRootRound: 'int-floor' },
  },
]

if (ZERO_COUNT_PATCHES.length + RARE_VARIANTS.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-gapfill.js: expected 50 specs, got ${ZERO_COUNT_PATCHES.length + RARE_VARIANTS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const rasterPatch of ZERO_COUNT_PATCHES) {
  n += 1
  const num = String(n).padStart(3, '0')
  RECIPES.push({
    id: `tc-lab-w5-gap-${num}`,
    label: `tc-lab-w5-gap #${n}: ${rasterPatch} bare`,
    idea: `Gap-fill zero-count rasterPatch ${rasterPatch} — harness raster inject, no extra CSS`,
    css: '',
    inject: 'raster',
    rasterPatch,
    category: 'gap',
    active: true,
    notes: `Wave5 gap-fill; inventory zero-count patch ${rasterPatch}.`,
  })
}

for (const spec of RARE_VARIANTS) {
  n += 1
  const num = String(n).padStart(3, '0')
  const { css: extraCss, inject, ...rest } = spec.extra ?? {}
  RECIPES.push({
    id: `tc-lab-w5-gap-${num}`,
    label: `tc-lab-w5-gap #${n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: inject ?? 'raster',
    rasterPatch: spec.rasterPatch,
    category: 'gap',
    active: true,
    notes: `Wave5 gap-fill; rare rasterPatch ${spec.rasterPatch} structural variant.`,
    ...rest,
  })
}

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave5-gapfill.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

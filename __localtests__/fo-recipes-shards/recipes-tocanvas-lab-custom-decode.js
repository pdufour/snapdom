/**
 * Lab toCanvas load / decode / preload pipeline — tc-lab-pre-001..050.
 * Forks: lab-toCanvas (fo-fix-toCanvas.js), lab-toCanvas-decode (fo-fix-toCanvas-decode-experimental.js)
 * Pipeline: fo-fix-toCanvas-load-pipeline.js via recipe labLoadPipeline
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-pre-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const FO = FO_BASELINE_CSS
const H2 = H2_RASTER_NORMALIZE_CSS

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab-toCanvas load-event',
    idea: 'lab-toCanvas + load-event pipeline (onload gate, not decode-only)',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'load-event' },
  },
  {
    n: 2,
    slug: 'lab-toCanvas img-loading-lazy',
    idea: 'lab-toCanvas + img.loading lazy before FO SVG raster',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'img-loading-lazy' },
  },
  {
    n: 3,
    slug: 'lab-toCanvas img-decoding-async',
    idea: 'lab-toCanvas + img.decoding async',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'img-decoding-async' },
  },
  {
    n: 4,
    slug: 'lab-toCanvas lazy-async',
    idea: 'lab-toCanvas + lazy loading + async decoding combo',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'lazy-async-decode' },
  },
  {
    n: 5,
    slug: 'lab-toCanvas pre-decode-dom',
    idea: 'lab-toCanvas + hidden DOM img before decode',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'pre-decode-dom' },
  },
  {
    n: 6,
    slug: 'lab-toCanvas fonts-ready',
    idea: 'lab-toCanvas + document.fonts.ready before image decode',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'fonts-ready' },
  },
  {
    n: 7,
    slug: 'lab-toCanvas double-decode',
    idea: 'lab-toCanvas + await img.decode() twice',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'double-decode' },
  },
  {
    n: 8,
    slug: 'lab-toCanvas load-event-interval',
    idea: 'lab-toCanvas + load event + 100ms drawImageInterval wait',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'load-event-interval' },
  },
  {
    n: 9,
    slug: 'lab-toCanvas decode-via-blob',
    idea: 'lab-toCanvas + data URL → blob object URL handoff',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'decode-via-blob' },
  },
  {
    n: 10,
    slug: 'lab-toCanvas create-image-bitmap',
    idea: 'lab-toCanvas + createImageBitmap high-quality handoff',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'create-image-bitmap' },
  },
  {
    n: 11,
    slug: 'lab-toCanvas triple-raf-flush',
    idea: 'lab-toCanvas + triple RAF flush after decode',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'triple-raf-flush' },
  },
  {
    n: 12,
    slug: 'lab-toCanvas MP decode-wrap',
    idea: 'lab-toCanvas default load + decode-wrap monkeypatch on Image.decode',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', monkeypatch: 'decode-wrap' },
  },
  {
    n: 13,
    slug: 'lab-toCanvas MP image-decode-twice',
    idea: 'lab-toCanvas + image-decode-twice monkeypatch',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', monkeypatch: 'image-decode-twice' },
  },
  {
    n: 14,
    slug: 'lab-toCanvas backing ceil',
    idea: 'lab-toCanvas + labToCanvasOpts backingRound ceil (no custom pipeline)',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { backingRound: 'ceil' },
    },
  },
  {
    n: 15,
    slug: 'lab-toCanvas bitmap-decode-interval',
    idea: 'lab-toCanvas + createImageBitmap after decode-interval wait',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas', labLoadPipeline: 'bitmap-decode-interval' },
  },
  {
    n: 16,
    slug: 'decode fork baseline',
    idea: 'lab-toCanvas-decode fork default pipeline (decode + 100ms interval)',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode' },
  },
  {
    n: 17,
    slug: 'decode no-interval',
    idea: 'lab-toCanvas-decode + no-decode-interval (decode only, no wait)',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'no-decode-interval' },
  },
  {
    n: 18,
    slug: 'decode-interval-raf',
    idea: 'lab-toCanvas-decode + decode-interval-raf (100ms + double RAF)',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'decode-interval-raf' },
  },
  {
    n: 19,
    slug: 'decode double-decode',
    idea: 'lab-toCanvas-decode + double-decode passes',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'double-decode' },
  },
  {
    n: 20,
    slug: 'decode triple-decode',
    idea: 'lab-toCanvas-decode + triple-decode passes',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'triple-decode' },
  },
  {
    n: 21,
    slug: 'decode microtask-twice',
    idea: 'lab-toCanvas-decode + decode-microtask-twice',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'decode-microtask-twice' },
  },
  {
    n: 22,
    slug: 'decode load-event',
    idea: 'lab-toCanvas-decode + load-event gate',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'load-event' },
  },
  {
    n: 23,
    slug: 'decode load-event-interval',
    idea: 'lab-toCanvas-decode + load-event-interval',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'load-event-interval' },
  },
  {
    n: 24,
    slug: 'decode pre-decode-dom',
    idea: 'lab-toCanvas-decode + pre-decode-dom hidden img',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'pre-decode-dom' },
  },
  {
    n: 25,
    slug: 'decode double-raf',
    idea: 'lab-toCanvas-decode + double-raf offscreen flush',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'double-raf' },
  },
  {
    n: 26,
    slug: 'decode raf-before-draw',
    idea: 'lab-toCanvas-decode + single RAF before drawImage',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'raf-before-draw' },
  },
  {
    n: 27,
    slug: 'decode triple-raf-flush',
    idea: 'lab-toCanvas-decode + triple-raf-flush',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'triple-raf-flush' },
  },
  {
    n: 28,
    slug: 'decode via-blob',
    idea: 'lab-toCanvas-decode + decode-via-blob object URL',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'decode-via-blob' },
  },
  {
    n: 29,
    slug: 'decode blob-early-revoke',
    idea: 'lab-toCanvas-decode + blob-early-revoke after src assign',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'blob-early-revoke' },
  },
  {
    n: 30,
    slug: 'decode blob-decode-interval',
    idea: 'lab-toCanvas-decode + blob handoff + decode-interval',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'blob-decode-interval' },
  },
  {
    n: 31,
    slug: 'decode create-image-bitmap',
    idea: 'lab-toCanvas-decode + createImageBitmap raster source',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'create-image-bitmap' },
  },
  {
    n: 32,
    slug: 'decode bitmap-pixelated',
    idea: 'lab-toCanvas-decode + createImageBitmap resizeQuality pixelated',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'create-image-bitmap-pixelated',
    },
  },
  {
    n: 33,
    slug: 'decode bitmap-premultiply',
    idea: 'lab-toCanvas-decode + createImageBitmap premultiplyAlpha',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'create-image-bitmap-premultiply',
    },
  },
  {
    n: 34,
    slug: 'decode bitmap-close',
    idea: 'lab-toCanvas-decode + bitmap-close probe (close then reload)',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'bitmap-close' },
  },
  {
    n: 35,
    slug: 'decode fonts-ready-interval',
    idea: 'lab-toCanvas-decode + fonts.ready + decode-interval',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'fonts-ready-interval' },
  },
  {
    n: 36,
    slug: 'decode blob-then-double-decode',
    idea: 'lab-toCanvas-decode + blob URL + double decode',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'blob-then-double-decode' },
  },
  {
    n: 37,
    slug: 'decode bitmap-decode-interval',
    idea: 'lab-toCanvas-decode + bitmap after decode-interval',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'bitmap-decode-interval' },
  },
  {
    n: 38,
    slug: 'decode bitmap-interval-raf',
    idea: 'lab-toCanvas-decode + bitmap-decode-interval-raf combo',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'bitmap-decode-interval-raf' },
  },
  {
    n: 39,
    slug: 'decode-then-interval',
    idea: 'lab-toCanvas-decode + decode then 100ms wait (explicit ordering)',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'decode-then-interval' },
  },
  {
    n: 40,
    slug: 'decode blob-then-interval',
    idea: 'lab-toCanvas-decode + blob handoff then interval wait',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'blob-then-interval' },
  },
  {
    n: 41,
    slug: 'decode load-then-raf',
    idea: 'lab-toCanvas-decode + load event then double RAF',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'load-then-raf' },
  },
  {
    n: 42,
    slug: 'decode via-blob-interval',
    idea: 'lab-toCanvas-decode + decode-via-blob-interval',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'decode-via-blob-interval' },
  },
  {
    n: 43,
    slug: 'decode fonts-ready-bitmap',
    idea: 'lab-toCanvas-decode + fonts.ready + createImageBitmap',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'fonts-ready-bitmap' },
  },
  {
    n: 44,
    slug: 'decode interval-then-bitmap',
    idea: 'lab-toCanvas-decode + interval wait before createImageBitmap',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'interval-then-bitmap' },
  },
  {
    n: 45,
    slug: 'decode blob-then-double-raf',
    idea: 'lab-toCanvas-decode + blob URL + double RAF offscreen',
    extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-decode', labLoadPipeline: 'blob-then-double-raf' },
  },
  {
    n: 46,
    slug: 'decode int-vb FO blob-interval',
    idea: 'integer-viewbox + FO baseline + lab-toCanvas-decode blob-decode-interval',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'blob-decode-interval',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { optDims: 'natural' },
      css: FO,
    },
  },
  {
    n: 47,
    slug: 'decode int-vb bitmap',
    idea: 'integer-viewbox + lab-toCanvas-decode create-image-bitmap',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'create-image-bitmap',
      svgRootRound: 'integer-viewbox',
      css: FO,
    },
  },
  {
    n: 48,
    slug: 'decode H2 interval-raf',
    idea: 'H2 normalize + lab-toCanvas-decode decode-interval-raf',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'decode-interval-raf',
      css: H2,
    },
  },
  {
    n: 49,
    slug: 'decode MP safari-raf round',
    idea: 'tc-decode-safari-raf MP + lab-toCanvas-decode + roundDrawImage',
    extra: {
      inject: 'raster',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'decode-interval',
      monkeypatch: ['tc-decode-safari-raf', 'tc-draw-image-round-all'],
    },
  },
  {
    n: 50,
    slug: 'decode lazy FO H2 blob',
    idea: 'lazy-async + FO + H2 + lab-toCanvas-decode blob-decode-interval stack',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas-decode',
      labLoadPipeline: 'blob-decode-interval',
      css: FO + H2,
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-pre-${num}`,
    label: `tc-lab-pre #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? FO,
    inject: restExtra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    notes: `Load/decode/preload lab pipeline; ${spec.slug}; FO-raster only — no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-custom-decode.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject ?? '',
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    r.monkeypatch ?? '',
    r.svgRootRound ?? '',
    r.css,
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-custom-decode.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

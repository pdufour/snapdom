/**
 * Lab toCanvas decode-loop sweep — tc-lab-loop-001..060.
 * Focus: lab-toCanvas load/decode timing loops (no capture.js / text bypass).
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-loop-*'
 *
 * Check dupes:
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  // Baselines
  { n: 1, slug: 'baseline', idea: 'lab-toCanvas baseline decode+draw', extra: { inject: 'raster' } },
  {
    n: 2,
    slug: 'FO baseline css',
    idea: 'FO_BASELINE_CSS + lab-toCanvas',
    extra: { inject: 'both', css: FO_BASELINE_CSS },
  },

  // drawImageInterval variants (explicit waits)
  {
    n: 3,
    slug: 'drawImageInterval 50ms',
    idea: 'Wait 50ms after decode before drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { decodeWaitMs: 50 } },
  },
  {
    n: 4,
    slug: 'drawImageInterval 100ms',
    idea: 'Wait 100ms after decode before drawImage (modern-screenshot default)',
    extra: { inject: 'raster', labToCanvasOpts: { decodeWaitMs: 100 } },
  },
  {
    n: 5,
    slug: 'drawImageInterval 200ms',
    idea: 'Wait 200ms after decode before drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { decodeWaitMs: 200 } },
  },

  // fixSvgXmlDecode-ish decode loops (via lab load pipeline)
  { n: 6, slug: 'no-decode-interval', idea: 'No post-decode wait', extra: { inject: 'raster', labLoadPipeline: 'no-decode-interval' } },
  { n: 7, slug: 'decode-interval', idea: 'Post-decode 100ms wait (default decode interval)', extra: { inject: 'raster', labLoadPipeline: 'decode-interval' } },
  { n: 8, slug: 'decode-interval-raf', idea: 'Decode interval + double RAF', extra: { inject: 'raster', labLoadPipeline: 'decode-interval-raf' } },
  { n: 9, slug: 'double-decode', idea: 'Two consecutive img.decode() calls', extra: { inject: 'raster', labLoadPipeline: 'double-decode' } },
  { n: 10, slug: 'triple-decode', idea: 'Three consecutive img.decode() calls', extra: { inject: 'raster', labLoadPipeline: 'triple-decode' } },
  { n: 11, slug: 'double-decode-interval', idea: 'Double decode + interval', extra: { inject: 'raster', labLoadPipeline: 'double-decode-interval' } },
  { n: 12, slug: 'triple-decode-interval', idea: 'Triple decode + interval', extra: { inject: 'raster', labLoadPipeline: 'triple-decode-interval' } },
  { n: 13, slug: 'decode-microtask-twice', idea: 'decode + microtask + decode', extra: { inject: 'raster', labLoadPipeline: 'decode-microtask-twice' } },
  { n: 14, slug: 'raf-before-draw', idea: 'One RAF before drawImage', extra: { inject: 'raster', labLoadPipeline: 'raf-before-draw' } },
  { n: 15, slug: 'double-raf', idea: 'Double RAF before drawImage', extra: { inject: 'raster', labLoadPipeline: 'double-raf' } },
  { n: 16, slug: 'triple-raf-flush', idea: 'Triple RAF flush', extra: { inject: 'raster', labLoadPipeline: 'triple-raf-flush' } },
  { n: 17, slug: 'load-event', idea: 'Wait onload instead of decode', extra: { inject: 'raster', labLoadPipeline: 'load-event' } },
  { n: 18, slug: 'load-event-interval', idea: 'load event + interval', extra: { inject: 'raster', labLoadPipeline: 'load-event-interval' } },
  { n: 19, slug: 'pre-decode-dom', idea: 'Attach <img> to hidden DOM before decode', extra: { inject: 'raster', labLoadPipeline: 'pre-decode-dom' } },
  { n: 20, slug: 'pre-decode-dom-interval', idea: 'pre-decode-dom + interval', extra: { inject: 'raster', labLoadPipeline: 'pre-decode-dom-interval' } },
  { n: 21, slug: 'pre-decode-dom-interval-raf', idea: 'pre-decode-dom + interval + RAF', extra: { inject: 'raster', labLoadPipeline: 'pre-decode-dom-interval-raf' } },

  // Bitmap pipeline variants
  { n: 22, slug: 'create-image-bitmap', idea: 'createImageBitmap after decode', extra: { inject: 'raster', labLoadPipeline: 'create-image-bitmap' } },
  { n: 23, slug: 'create-image-bitmap-pixelated', idea: 'createImageBitmap pixelated resizeQuality', extra: { inject: 'raster', labLoadPipeline: 'create-image-bitmap-pixelated' } },
  { n: 24, slug: 'create-image-bitmap-premultiply', idea: 'createImageBitmap premultiplyAlpha', extra: { inject: 'raster', labLoadPipeline: 'create-image-bitmap-premultiply' } },
  { n: 25, slug: 'bitmap-decode-interval', idea: 'Bitmap path + interval', extra: { inject: 'raster', labLoadPipeline: 'bitmap-decode-interval' } },
  { n: 26, slug: 'bitmap-decode-interval-raf', idea: 'Bitmap path + interval + RAF', extra: { inject: 'raster', labLoadPipeline: 'bitmap-decode-interval-raf' } },
  { n: 27, slug: 'interval-then-bitmap', idea: 'Interval then createImageBitmap', extra: { inject: 'raster', labLoadPipeline: 'interval-then-bitmap' } },

  // Fonts gates
  { n: 28, slug: 'fonts-ready', idea: 'Await document.fonts.ready before decode', extra: { inject: 'raster', labLoadPipeline: 'fonts-ready' } },
  { n: 29, slug: 'fonts-ready-interval', idea: 'fonts.ready + interval', extra: { inject: 'raster', labLoadPipeline: 'fonts-ready-interval' } },
  { n: 30, slug: 'fonts-ready-bitmap', idea: 'fonts.ready + createImageBitmap', extra: { inject: 'raster', labLoadPipeline: 'fonts-ready-bitmap' } },

  // Blob loops (explicit blob URL raster + pipeline on blob)
  { n: 31, slug: 'blob-url baseline', idea: 'Blob URL raster source (no extra waits)', extra: { inject: 'raster', labRasterUrl: 'blob-url' } },
  { n: 32, slug: 'blob-early-revoke', idea: 'Revoke blob URL before decode completes', extra: { inject: 'raster', labRasterUrl: 'blob-url', labLoadPipeline: 'blob-early-revoke' } },
  { n: 33, slug: 'blob-fetch-revoke', idea: 'Fetch blob URL then revoke original', extra: { inject: 'raster', labRasterUrl: 'blob-url', labLoadPipeline: 'blob-fetch-revoke' } },
  { n: 34, slug: 'blob-decode-interval', idea: 'Data URL → blob URL, then interval', extra: { inject: 'raster', labLoadPipeline: 'blob-decode-interval' } },
  { n: 35, slug: 'decode-via-blob', idea: 'Data URL → blob URL before decode', extra: { inject: 'raster', labLoadPipeline: 'decode-via-blob' } },
  { n: 36, slug: 'decode-via-blob-interval', idea: 'Data URL → blob URL + interval', extra: { inject: 'raster', labLoadPipeline: 'decode-via-blob-interval' } },
  { n: 37, slug: 'blob-then-interval', idea: 'Blob decode then interval (explicit second wait)', extra: { inject: 'raster', labLoadPipeline: 'blob-then-interval' } },
  { n: 38, slug: 'blob-then-double-decode', idea: 'Blob decode then double decode', extra: { inject: 'raster', labLoadPipeline: 'blob-then-double-decode' } },
  { n: 39, slug: 'blob-then-double-raf', idea: 'Blob decode then double RAF', extra: { inject: 'raster', labLoadPipeline: 'blob-then-double-raf' } },
  { n: 40, slug: 'load-then-blob-decode', idea: 'Wait onload then blob decode', extra: { inject: 'raster', labLoadPipeline: 'load-then-blob-decode' } },

  // “Wait-for-stable” style settle probes (dedicated fork)
  { n: 41, slug: 'wait-decode x1', idea: 'Settling probe: 1 decode pass + interval + RAFs', extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-wait-decode', decodePasses: 1 } },
  { n: 42, slug: 'wait-decode x2', idea: 'Settling probe: 2 decode passes + interval + RAFs', extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-wait-decode', decodePasses: 2 } },
  { n: 43, slug: 'wait-decode x3', idea: 'Settling probe: 3 decode passes + interval + RAFs', extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-wait-decode', decodePasses: 3 } },
  { n: 44, slug: 'wait-decode x2 blob-url', idea: 'Settling probe on blob-url raster', extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-wait-decode', labRasterUrl: 'blob-url', decodePasses: 2 } },
  { n: 45, slug: 'wait-decode x3 blob-url', idea: 'Settling probe on blob-url raster', extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-wait-decode', labRasterUrl: 'blob-url', decodePasses: 3 } },

  // Interval + explicit wait overrides (pipeline + extra decodeWaitMs)
  { n: 46, slug: 'decode-interval + extra 50ms', idea: 'Pipeline decode-interval plus extra 50ms wait', extra: { inject: 'raster', labLoadPipeline: 'decode-interval', labToCanvasOpts: { decodeWaitMs: 50 } } },
  { n: 47, slug: 'decode-interval + extra 200ms', idea: 'Pipeline decode-interval plus extra 200ms wait', extra: { inject: 'raster', labLoadPipeline: 'decode-interval', labToCanvasOpts: { decodeWaitMs: 200 } } },
  { n: 48, slug: 'decode-interval-raf + extra 50ms', idea: 'decode-interval-raf plus extra 50ms wait', extra: { inject: 'raster', labLoadPipeline: 'decode-interval-raf', labToCanvasOpts: { decodeWaitMs: 50 } } },
  { n: 49, slug: 'triple-decode-interval + extra 50ms', idea: 'triple-decode-interval plus extra 50ms wait', extra: { inject: 'raster', labLoadPipeline: 'triple-decode-interval', labToCanvasOpts: { decodeWaitMs: 50 } } },
  { n: 50, slug: 'blob-decode-interval + extra 50ms', idea: 'blob-decode-interval plus extra 50ms wait', extra: { inject: 'raster', labLoadPipeline: 'blob-decode-interval', labToCanvasOpts: { decodeWaitMs: 50 } } },

  // Image loading/decoding knobs
  { n: 51, slug: 'img loading lazy', idea: 'img.loading=lazy', extra: { inject: 'raster', labLoadPipeline: 'img-loading-lazy' } },
  { n: 52, slug: 'img decoding async', idea: 'img.decoding=async', extra: { inject: 'raster', labLoadPipeline: 'img-decoding-async' } },
  { n: 53, slug: 'lazy + async decode', idea: 'img.loading=lazy + img.decoding=async', extra: { inject: 'raster', labLoadPipeline: 'lazy-async-decode' } },

  // Edge combinations to reach 60
  { n: 54, slug: 'decode-then-interval', idea: 'decode then interval wait (explicit)', extra: { inject: 'raster', labLoadPipeline: 'decode-then-interval' } },
  { n: 55, slug: 'interval-raf-before-draw', idea: 'interval then RAF before drawImage', extra: { inject: 'raster', labLoadPipeline: 'interval-raf-before-draw' } },
  { n: 56, slug: 'load-then-raf', idea: 'Wait onload then double RAF', extra: { inject: 'raster', labLoadPipeline: 'load-then-raf' } },
  { n: 57, slug: 'blob-url + blob-fetch-revoke + double-decode', idea: 'Blob URL + fetch/revoke pipeline + double decode pass', extra: { inject: 'both', css: FO_BASELINE_CSS, labRasterUrl: 'blob-url', labLoadPipeline: 'blob-fetch-revoke', decodePasses: 2 } },
  { n: 58, slug: 'blob-url + load-event-interval', idea: 'Blob URL raster + load-event-interval', extra: { inject: 'raster', labRasterUrl: 'blob-url', labLoadPipeline: 'load-event-interval' } },
  { n: 59, slug: 'decode-via-blob + interval + extra 200ms', idea: 'decode-via-blob-interval plus extra wait', extra: { inject: 'raster', labLoadPipeline: 'decode-via-blob-interval', labToCanvasOpts: { decodeWaitMs: 200 } } },
  { n: 60, slug: 'wait-decode x2 + extra 200ms', idea: 'Settling probe + additional wait', extra: { inject: 'raster', rasterPatch: 'lab-toCanvas-wait-decode', decodePasses: 2, labToCanvasOpts: { decodeWaitMs: 200 } } },
]

if (SPECS.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-plus-decode-loop.js: expected 60 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { extra } = spec
  const { css: extraCss, ...restExtra } = extra
  const inject = restExtra.inject ?? 'raster'
  const rasterPatch = restExtra.rasterPatch ?? 'lab-toCanvas'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-loop-${num}`,
    label: `tc-lab-loop #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject,
    rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas decode-loop sweep; ${spec.slug}; FO raster only — no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-plus-decode-loop.js: expected 60 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    r.labRasterUrl ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.decodePasses ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    console.warn(`[recipes-tocanvas-lab-plus-decode-loop] duplicate recipe key at ${r.id}`)
    continue
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


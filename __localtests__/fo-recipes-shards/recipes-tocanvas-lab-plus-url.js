/**
 * Lab toCanvas URL + load pipeline matrix — tc-lab-url-001..060.
 * All recipes: rasterPatch 'lab-toCanvas' → __localtests__/fo-fix-toCanvas.js
 *
 * Varies:
 * - Raster URL source: data URL (default) vs object URL (blob-url) vs decode-via-blob, etc.
 * - Load pipeline: decode-via-blob, revoke timing, img.loading/img.decoding modes,
 *   fetch+blob handoff, and interval/RAF sequencing.
 *
 * No text bypass. No src/ edits.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-url-*'
 */

import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  // Data URL (default url) pipelines
  { n: 1, slug: 'data default', idea: 'Data URL + default decode-interval pipeline', extra: { labLoadPipeline: 'default' } },
  { n: 2, slug: 'data no-decode-interval', idea: 'Data URL + no-decode-interval', extra: { labLoadPipeline: 'no-decode-interval' } },
  { n: 3, slug: 'data decode-then-interval', idea: 'Data URL + decode then explicit interval wait', extra: { labLoadPipeline: 'decode-then-interval' } },
  { n: 4, slug: 'data decode-interval-raf', idea: 'Data URL + decode interval + double-RAF flush', extra: { labLoadPipeline: 'decode-interval-raf' } },
  { n: 5, slug: 'data raf-before-draw', idea: 'Data URL + RAF before draw', extra: { labLoadPipeline: 'raf-before-draw' } },
  { n: 6, slug: 'data interval-raf-before-draw', idea: 'Data URL + interval then RAF before draw', extra: { labLoadPipeline: 'interval-raf-before-draw' } },
  { n: 7, slug: 'data double-raf', idea: 'Data URL + double-RAF after decode', extra: { labLoadPipeline: 'double-raf' } },
  { n: 8, slug: 'data triple-raf-flush', idea: 'Data URL + triple RAF flush', extra: { labLoadPipeline: 'triple-raf-flush' } },
  { n: 9, slug: 'data load-event', idea: 'Data URL + load event instead of decode', extra: { labLoadPipeline: 'load-event' } },
  { n: 10, slug: 'data load-event-interval', idea: 'Data URL + load event + decode interval wait', extra: { labLoadPipeline: 'load-event-interval' } },
  { n: 11, slug: 'data pre-decode-dom', idea: 'Data URL + pre-decode DOM attach', extra: { labLoadPipeline: 'pre-decode-dom' } },
  { n: 12, slug: 'data pre-decode-dom-interval', idea: 'Data URL + pre-decode DOM + interval wait', extra: { labLoadPipeline: 'pre-decode-dom-interval' } },
  { n: 13, slug: 'data pre-decode-dom-interval-raf', idea: 'Data URL + pre-decode DOM + interval + RAF flush', extra: { labLoadPipeline: 'pre-decode-dom-interval-raf' } },
  { n: 14, slug: 'data decode-microtask-twice', idea: 'Data URL + microtask then second decode', extra: { labLoadPipeline: 'decode-microtask-twice' } },
  { n: 15, slug: 'data double-decode', idea: 'Data URL + double decode', extra: { labLoadPipeline: 'double-decode' } },
  { n: 16, slug: 'data double-decode-interval', idea: 'Data URL + double decode + interval wait', extra: { labLoadPipeline: 'double-decode-interval' } },
  { n: 17, slug: 'data triple-decode', idea: 'Data URL + triple decode', extra: { labLoadPipeline: 'triple-decode' } },
  { n: 18, slug: 'data triple-decode-interval', idea: 'Data URL + triple decode + interval wait', extra: { labLoadPipeline: 'triple-decode-interval' } },
  { n: 19, slug: 'data fonts-ready', idea: 'Data URL + document.fonts.ready gate', extra: { labLoadPipeline: 'fonts-ready' } },
  { n: 20, slug: 'data fonts-ready-interval', idea: 'Data URL + fonts.ready + interval wait', extra: { labLoadPipeline: 'fonts-ready-interval' } },

  // Data URL → blob/object URL via pipeline
  { n: 21, slug: 'data decode-via-blob', idea: 'Data URL fetched to blob URL before decode', extra: { labLoadPipeline: 'decode-via-blob' } },
  { n: 22, slug: 'data decode-via-blob-interval', idea: 'decode-via-blob + interval wait', extra: { labLoadPipeline: 'decode-via-blob-interval' } },
  { n: 23, slug: 'data blob-decode-interval', idea: 'Blob URL roundtrip + decode interval', extra: { labLoadPipeline: 'blob-decode-interval' } },
  { n: 24, slug: 'data blob-then-interval', idea: 'Blob URL roundtrip then interval wait', extra: { labLoadPipeline: 'blob-then-interval' } },
  { n: 25, slug: 'data blob-then-double-decode', idea: 'Blob URL roundtrip then double decode', extra: { labLoadPipeline: 'blob-then-double-decode' } },
  { n: 26, slug: 'data blob-then-double-raf', idea: 'Blob URL roundtrip then double RAF', extra: { labLoadPipeline: 'blob-then-double-raf' } },
  { n: 27, slug: 'data load-then-blob-decode', idea: 'Load event then blob decode handoff', extra: { labLoadPipeline: 'load-then-blob-decode' } },

  // Image element knobs (loading/decoding)
  { n: 28, slug: 'data img-decoding-async', idea: 'img.decoding=async', extra: { labLoadPipeline: 'img-decoding-async' } },
  { n: 29, slug: 'data img-loading-lazy', idea: 'img.loading=lazy', extra: { labLoadPipeline: 'img-loading-lazy' } },
  { n: 30, slug: 'data lazy-async-decode', idea: 'img.loading=lazy + img.decoding=async', extra: { labLoadPipeline: 'lazy-async-decode' } },

  // Bitmap paths (createImageBitmap variants)
  { n: 31, slug: 'data create-image-bitmap', idea: 'createImageBitmap from decoded img', extra: { labLoadPipeline: 'create-image-bitmap' } },
  { n: 32, slug: 'data create-image-bitmap-pixelated', idea: 'createImageBitmap pixelated quality', extra: { labLoadPipeline: 'create-image-bitmap-pixelated' } },
  { n: 33, slug: 'data create-image-bitmap-premultiply', idea: 'createImageBitmap premultiplyAlpha', extra: { labLoadPipeline: 'create-image-bitmap-premultiply' } },
  { n: 34, slug: 'data bitmap-decode-interval', idea: 'Bitmap path with decode interval', extra: { labLoadPipeline: 'bitmap-decode-interval' } },
  { n: 35, slug: 'data bitmap-decode-interval-raf', idea: 'Bitmap path + interval + RAF', extra: { labLoadPipeline: 'bitmap-decode-interval-raf' } },
  { n: 36, slug: 'data interval-then-bitmap', idea: 'Interval wait then createImageBitmap', extra: { labLoadPipeline: 'interval-then-bitmap' } },

  // Object URL (blob-url) — labRasterUrl controls the URL type.
  { n: 37, slug: 'blob-url default', idea: 'Object URL (blob-url) + default pipeline', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'default' } },
  { n: 38, slug: 'blob-url no-decode-interval', idea: 'blob-url + no-decode-interval', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'no-decode-interval' } },
  { n: 39, slug: 'blob-url decode-interval-raf', idea: 'blob-url + decode interval + RAF', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'decode-interval-raf' } },
  { n: 40, slug: 'blob-url pre-decode-dom-interval', idea: 'blob-url + pre-decode DOM + interval', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'pre-decode-dom-interval' } },
  { n: 41, slug: 'blob-url fonts-ready-interval', idea: 'blob-url + fonts.ready + interval', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'fonts-ready-interval' } },

  // Revoke timing probes (object URL only, via pipeline).
  { n: 42, slug: 'blob-url blob-early-revoke', idea: 'blob-url + revoke immediately after src set', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'blob-early-revoke' } },
  { n: 43, slug: 'blob-url blob-fetch-revoke', idea: 'blob-url + fetch blob then revoke original', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'blob-fetch-revoke' } },

  // Decode-via-blob URL mode (data url → fetch → blob url at raster URL stage)
  { n: 44, slug: 'decode-via-blob default', idea: 'Raster URL decode-via-blob + default pipeline', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'default' } },
  { n: 45, slug: 'decode-via-blob interval', idea: 'Raster URL decode-via-blob + decode interval', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'decode-interval' } },
  { n: 46, slug: 'decode-via-blob-interval pipeline', idea: 'decode-via-blob URL mode + decode-via-blob-interval pipeline', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'decode-via-blob-interval' } },
  { n: 47, slug: 'decode-via-blob pre-decode-dom', idea: 'decode-via-blob URL + pre-decode DOM', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'pre-decode-dom' } },
  { n: 48, slug: 'decode-via-blob lazy-async', idea: 'decode-via-blob URL + lazy + async decode', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'lazy-async-decode' } },

  // blob-url-decode-interval as URL mode (forces blob URL + interval-style harness path)
  { n: 49, slug: 'blob-url-decode-interval default', idea: 'blob-url-decode-interval URL mode + default pipeline', extra: { labRasterUrl: 'blob-url-decode-interval', labLoadPipeline: 'default' } },
  { n: 50, slug: 'blob-url-decode-interval no-decode-interval', idea: 'blob-url-decode-interval URL mode + no-decode-interval', extra: { labRasterUrl: 'blob-url-decode-interval', labLoadPipeline: 'no-decode-interval' } },
  { n: 51, slug: 'blob-url-decode-interval decode-interval-raf', idea: 'blob-url-decode-interval URL mode + interval + RAF', extra: { labRasterUrl: 'blob-url-decode-interval', labLoadPipeline: 'decode-interval-raf' } },

  // blob-url-fetch-revoke URL mode (fetch/revoke handoff at URL stage; plus pipeline variants)
  { n: 52, slug: 'blob-url-fetch-revoke default', idea: 'blob-url-fetch-revoke URL mode + default pipeline', extra: { labRasterUrl: 'blob-url-fetch-revoke', labLoadPipeline: 'default' } },
  { n: 53, slug: 'blob-url-fetch-revoke decode-interval', idea: 'blob-url-fetch-revoke URL mode + decode interval', extra: { labRasterUrl: 'blob-url-fetch-revoke', labLoadPipeline: 'decode-interval' } },
  { n: 54, slug: 'blob-url-fetch-revoke pre-decode-dom', idea: 'blob-url-fetch-revoke URL mode + pre-decode DOM', extra: { labRasterUrl: 'blob-url-fetch-revoke', labLoadPipeline: 'pre-decode-dom' } },

  // blob-url-early-revoke URL mode (revoke shortly after src assignment in harness; plus pipeline variants)
  { n: 55, slug: 'blob-url-early-revoke default', idea: 'blob-url-early-revoke URL mode + default pipeline', extra: { labRasterUrl: 'blob-url-early-revoke', labLoadPipeline: 'default' } },
  { n: 56, slug: 'blob-url-early-revoke load-event', idea: 'blob-url-early-revoke URL mode + load event', extra: { labRasterUrl: 'blob-url-early-revoke', labLoadPipeline: 'load-event' } },

  // Extra “mix” rows: pipeline-only behaviors combined with explicit blob URL mode.
  { n: 57, slug: 'blob-url load-then-blob-decode', idea: 'blob-url + load event then blob decode handoff', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'load-then-blob-decode' } },
  { n: 58, slug: 'blob-url blob-then-double-raf', idea: 'blob-url + blob roundtrip then double RAF', extra: { labRasterUrl: 'blob-url', labLoadPipeline: 'blob-then-double-raf' } },
  { n: 59, slug: 'decode-via-blob create-image-bitmap', idea: 'decode-via-blob URL + createImageBitmap', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'create-image-bitmap' } },
  { n: 60, slug: 'decode-via-blob bitmap-decode-interval-raf', idea: 'decode-via-blob URL + bitmap interval + RAF', extra: { labRasterUrl: 'decode-via-blob', labLoadPipeline: 'bitmap-decode-interval-raf' } },
]

if (SPECS.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-plus-url.js: expected 60 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 60) {
  throw new Error('recipes-tocanvas-lab-plus-url.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-url-${num}`,
    label: `tc-lab-url #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS,
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas-plus',
    active: true,
    notes: `Lab toCanvas URL + load pipeline probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-plus-url.js: expected 60 recipes, got ${RECIPES.length}`,
  )
}

const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-plus-url.js: duplicate id ${r.id}`)
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [
    r.rasterPatch,
    r.labRasterUrl ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    r.inject,
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-plus-url.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


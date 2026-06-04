/**
 * Lab toCanvas wave4 — ImageData post-draw probes (tc-lab-w4-id-001..050).
 * rasterPatch: lab-toCanvas → fo-fix-toCanvas.js `labToCanvasOpts.imageDataPost`
 * putImageData / getImageData roundtrip / createImageData / measured pixel rows only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-id-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipe-shared.js').LabToCanvasOpts['imageDataPost'][]} */
const IMAGE_DATA_MODES = [
  'putImageData-full-snapshot',
  'putImageData-full-dirty-rect',
  'getImageData-roundtrip',
  'getImageData-roundtrip-twice',
  'createImageData-copy-full',
  'createImageData-copy-half-w',
  'createImageData-empty',
  'pixel-row-backing-0',
  'pixel-row-backing-mid',
  'pixel-row-backing-last',
  'pixel-row-css-mid',
]

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = []

let n = 0
const next = (slug, idea, extra, css = FO_BASELINE_CSS) => {
  n += 1
  SPECS.push({ n, slug, idea, css, extra })
}

for (let i = 0; i < IMAGE_DATA_MODES.length; i++) {
  const mode = IMAGE_DATA_MODES[i]
  next(
    `${mode} willRead`,
    `${mode} after drawImage — labToCanvasOpts.willReadFrequently for getImageData path`,
    {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { imageDataPost: mode, willReadFrequently: true },
    },
  )
}

for (let i = 0; i < IMAGE_DATA_MODES.length; i++) {
  const mode = IMAGE_DATA_MODES[i]
  next(
    `${mode} backing-floor`,
    `${mode} + backingRound floor on canvas.width/height`,
    {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { imageDataPost: mode, backingRound: 'floor', willReadFrequently: true },
    },
  )
}

for (let i = 0; i < IMAGE_DATA_MODES.length; i++) {
  const mode = IMAGE_DATA_MODES[i]
  next(
    `${mode} integer-viewbox`,
    `${mode} + svgRootRound integer-viewbox pre-raster`,
    {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { imageDataPost: mode, willReadFrequently: true },
    },
  )
}

for (let i = 0; i < 7; i++) {
  const mode = IMAGE_DATA_MODES[i]
  next(
    `${mode} H2 backing-ceil`,
    `${mode} + H2_RASTER_NORMALIZE + backingRound ceil`,
    {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        imageDataPost: mode,
        backingRound: 'ceil',
        willReadFrequently: true,
      },
    },
    H2_RASTER_NORMALIZE_CSS,
  )
}

for (let i = 0; i < 7; i++) {
  const mode = IMAGE_DATA_MODES[i]
  next(
    `${mode} H2 int-floor mp-will-read`,
    `${mode} + H2 normalize + int-floor + tc-ctx-will-read-frequently monkeypatch`,
    {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      svgRootRound: 'int-floor',
      monkeypatch: 'tc-ctx-will-read-frequently',
      labToCanvasOpts: { imageDataPost: mode, willReadFrequently: true },
    },
    H2_RASTER_NORMALIZE_CSS,
  )
}

next(
  'roundtrip-twice device-dpr',
  'getImageData-roundtrip-twice + dprSource device — structural devicePixelRatio',
  {
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    labToCanvasOpts: {
      imageDataPost: 'getImageData-roundtrip-twice',
      dprSource: 'device',
      willReadFrequently: true,
    },
  },
)

next(
  'createImageData-empty ctxScale-off',
  'createImageData-empty + ctxScale false — full-device backing without ctx.scale',
  {
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    labToCanvasOpts: {
      imageDataPost: 'createImageData-empty',
      ctxScale: false,
      willReadFrequently: true,
    },
  },
)

next(
  'copy-half-w natural optDims',
  'createImageData-copy-half-w + optDims natural — half width from floor(canvas.width/2)',
  {
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    labToCanvasOpts: {
      imageDataPost: 'createImageData-copy-half-w',
      optDims: 'natural',
      willReadFrequently: true,
    },
  },
)

if (SPECS.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-imagedata.js: expected 50 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4-id-${num}`,
    label: `tc-lab-w4-id #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: spec.css ?? FO_BASELINE_CSS,
    inject: spec.extra.inject ?? 'both',
    category: 'tocanvas',
    active: true,
    notes: `wave4 ImageData lab-toCanvas; ${spec.slug}; FO raster only.`,
    ...spec.extra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.svgRootRound ?? '',
    r.monkeypatch ?? '',
    r.labPreRaster ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-imagedata.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

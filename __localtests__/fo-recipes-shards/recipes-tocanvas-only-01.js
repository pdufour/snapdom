/**
 * toCanvas-stage-only FO lab recipes — tc-only-001..040.
 * Mechanisms: rasterPatch, pre-raster SVG patch (markup/root/foSvg), inject:'both' structural CSS,
 * raster-scoped monkeypatch, h2/math pre-raster radicalPatch. No capture.js / styles.js edits.
 * No text bypass. Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-only-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const SPECS = [
  {
    n: 1,
    slug: 'product-toCanvas bare',
    idea: 'Harness product-toCanvas raster path — mirrors src/exporters/toCanvas.js draw',
    extra: { inject: 'raster', rasterPatch: 'product-toCanvas' },
  },
  {
    n: 2,
    slug: 'product-toCanvas integer-viewbox',
    idea: 'product-toCanvas + integer-viewBox floor on SVG root',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 3,
    slug: 'product-toCanvas round-dims',
    idea: 'product-toCanvas + round root width/height to device grid',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 4,
    slug: 'product-toCanvas int-floor',
    idea: 'product-toCanvas + int-floor root dims',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 5,
    slug: 'product-toCanvas device-grid-floor',
    idea: 'product-toCanvas + device-grid-floor SVG snap before raster',
    extra: {
      inject: 'raster',
      rasterPatch: 'device-grid-floor',
    },
  },
  {
    n: 6,
    slug: 'product-toCanvas xmlns strip transforms',
    idea: 'product-toCanvas + explicit-xmlns-strip-transforms markup',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 7,
    slug: 'product-toCanvas base64 roundtrip',
    idea: 'product-toCanvas + base64-roundtrip SVG reserialize',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      svgMarkupPatch: 'base64-roundtrip',
    },
  },
  {
    n: 8,
    slug: 'product-toCanvas filter-noop-defs',
    idea: 'product-toCanvas + filter-noop-defs on FO',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 9,
    slug: 'decode-interval bare',
    idea: 'modern-screenshot drawImageInterval wait after decode (100ms)',
    extra: { inject: 'raster', rasterPatch: 'decode-interval' },
  },
  {
    n: 10,
    slug: 'decode-interval-raf',
    idea: 'decode-interval + double-RAF after decode',
    extra: { inject: 'raster', rasterPatch: 'decode-interval-raf' },
  },
  {
    n: 11,
    slug: 'double-decode',
    idea: 'PNG round-trip double decode before final draw',
    extra: { inject: 'raster', rasterPatch: 'double-decode' },
  },
  {
    n: 12,
    slug: 'triple-decode',
    idea: 'Triple img.decode before raster draw',
    extra: { inject: 'raster', rasterPatch: 'triple-decode' },
  },
  {
    n: 13,
    slug: 'blob-url-decode-interval',
    idea: 'Blob URL src + decode-interval wait',
    extra: { inject: 'raster', rasterPatch: 'blob-url-decode-interval' },
  },
  {
    n: 14,
    slug: 'fonts-ready-interval',
    idea: 'document.fonts.ready + decode-interval',
    extra: { inject: 'raster', rasterPatch: 'fonts-ready-interval' },
  },
  {
    n: 15,
    slug: 'decode-microtask-twice',
    idea: 'decode + microtask + second decode',
    extra: { inject: 'raster', rasterPatch: 'decode-microtask-twice' },
  },
  {
    n: 16,
    slug: 'load-event',
    idea: 'Wait img onload instead of decode() only',
    extra: { inject: 'raster', rasterPatch: 'load-event' },
  },
  {
    n: 17,
    slug: 'double-raf',
    idea: 'Offscreen img + double-RAF before draw',
    extra: { inject: 'raster', rasterPatch: 'double-raf' },
  },
  {
    n: 18,
    slug: 'raf-before-draw',
    idea: 'Single RAF after decode before drawImage',
    extra: { inject: 'raster', rasterPatch: 'raf-before-draw' },
  },
  {
    n: 19,
    slug: 'create-image-bitmap',
    idea: 'createImageBitmap path then drawImage bitmap',
    extra: { inject: 'raster', rasterPatch: 'create-image-bitmap' },
  },
  {
    n: 20,
    slug: 'create-image-bitmap pixelated MP high',
    idea: 'create-image-bitmap-pixelated + tc createImageBitmap resizeQuality high',
    extra: {
      inject: 'raster',
      rasterPatch: 'create-image-bitmap-pixelated',
      monkeypatch: 'createImageBitmap-high',
    },
  },
  {
    n: 21,
    slug: 'blob-url',
    idea: 'Object URL raster src (no interval wait)',
    extra: { inject: 'raster', rasterPatch: 'blob-url' },
  },
  {
    n: 22,
    slug: 'decode-via-blob',
    idea: 'Fetch data URL to blob URL before decode',
    extra: { inject: 'raster', rasterPatch: 'decode-via-blob' },
  },
  {
    n: 23,
    slug: 'two-stage',
    idea: 'Intermediate canvas stage then final draw',
    extra: { inject: 'raster', rasterPatch: 'two-stage' },
  },
  {
    n: 24,
    slug: 'MP tc canvas backing ceil decode-interval',
    idea: 'tc-canvas-backing-ceil on canvas width/height + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      monkeypatch: 'tc-canvas-backing-ceil',
    },
  },
  {
    n: 25,
    slug: 'integer-viewbox decode-interval',
    idea: 'integer-viewbox + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 26,
    slug: 'int-floor decode-interval',
    idea: 'int-floor root dims + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 27,
    slug: 'round-dims decode-interval',
    idea: 'round-dims + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 28,
    slug: 'fe-color-matrix decode-interval',
    idea: 'fe-color-matrix-identity on FO + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 29,
    slug: 'fe-morphology decode-interval',
    idea: 'fe-morphology-identity on FO + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 30,
    slug: 'fo-shape-rendering decode-interval',
    idea: 'fo-shape-rendering-auto + decode-interval',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 31,
    slug: 'h2-percent-vb h2-frac-draw',
    idea: 'h2-fo-percent-int-viewbox pre-raster + h2-frac-draw fractional drawImage',
    extra: {
      inject: 'raster',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      rasterPatch: 'h2-frac-draw',
    },
  },
  {
    n: 32,
    slug: 'math-floor-vb h2-frac-draw',
    idea: 'math-floor-viewbox-stash-frac + h2-frac-draw',
    extra: {
      inject: 'raster',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      rasterPatch: 'h2-frac-draw',
    },
  },
  {
    n: 33,
    slug: 'h2-percent-vb product-toCanvas',
    idea: 'h2-fo-percent-int-viewbox + product-toCanvas path',
    extra: {
      inject: 'raster',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      rasterPatch: 'product-toCanvas',
    },
  },
  {
    n: 34,
    slug: 'remove-fe decode-interval',
    idea: 'remove-fe-filters pre-raster + decode-interval',
    extra: {
      inject: 'raster',
      radicalPatch: 'remove-fe-filters',
      rasterPatch: 'decode-interval',
    },
  },
  {
    n: 35,
    slug: 'h2 raster normalize product-toCanvas',
    idea: 'H2_RASTER_NORMALIZE structural CSS at pre-raster inject + product-toCanvas',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      rasterPatch: 'product-toCanvas',
    },
  },
  {
    n: 36,
    slug: 'leaf flex strut decode-interval',
    idea: 'FO * min-width/min-height + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + LEAF,
      rasterPatch: 'decode-interval',
    },
  },
  {
    n: 37,
    slug: 'chromium copy decode-interval',
    idea: 'Chromium font-kerning/smoothing copy block + decode-interval',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      rasterPatch: 'decode-interval',
    },
  },
  {
    n: 38,
    slug: 'MP decode-interval prototype',
    idea: 'Image.decode prototype interval + decode-interval raster',
    extra: {
      inject: 'raster',
      rasterPatch: 'decode-interval',
      monkeypatch: 'decode-interval-prototype',
    },
  },
  {
    n: 39,
    slug: 'MP tc drawImage round all product-toCanvas',
    idea: 'tc-draw-image-round-all on all drawImage coords + product-toCanvas',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      monkeypatch: 'tc-draw-image-round-all',
    },
  },
  {
    n: 40,
    slug: 'MP tc safari raf product-toCanvas',
    idea: 'tc-decode-safari-raf after decode + product-toCanvas draw',
    extra: {
      inject: 'raster',
      rasterPatch: 'product-toCanvas',
      monkeypatch: 'tc-decode-safari-raf',
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-only-${num}`,
    label: `tc-only #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    notes: `toCanvas-stage only; ${spec.slug}; no capture.js / text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-tocanvas-only-01.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.monkeypatch ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-only-01.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

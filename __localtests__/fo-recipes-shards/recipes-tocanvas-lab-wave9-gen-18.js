/**
 * Lab toCanvas wave-9 gen shard 18 — lab-toCanvas combinatorial mechanisms.
 * 100 recipes: tc-lab-w9g18-001..100 — FO raster only, no text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9g18-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @param {string} key */
function resolveCss(key) {
  switch (key) {
    case 'none':
      return ''
    case 'baseline':
      return FO_BASELINE_CSS
    case 'h2':
      return H2_RASTER_NORMALIZE_CSS
    case 'chromium':
      return FO_BASELINE_CSS + CHROMIUM_COPY
    case 'leaf':
      return FO_BASELINE_CSS + LEAF
    case 'baseline+leaf':
      return FO_BASELINE_CSS + LEAF
    case 'h2+chromium':
      return H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY
    case 'full':
      return H2_RASTER_NORMALIZE_CSS + LEAF + CHROMIUM_COPY
    default:
      throw new Error(`unknown cssKey: ${key}`)
  }
}

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, labRasterPatches?: string[] | null, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null, labPreRaster?: string | null }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas-bitmap-first / lrp-none / none / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap / xy / fe-color-matrix-identity / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 2,
    slug: "lab-toCanvas-bitmap-first / lrp-none / none / int-floor / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap / xy / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 3,
    slug: "lab-toCanvas-bitmap-first / lrp-none / none / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / xywh / fosvg-none / strip-identity-transforms / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 4,
    slug: "lab-toCanvas-bitmap-first / lrp-none / none / int-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap / xywh / fe-color-matrix-identity / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 5,
    slug: "lab-toCanvas-bitmap-first / lrp-none / none / int-floor / remove-fe-filters / tc-lab-draw-create-image-bitmap / xywh / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 6,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 7,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 8,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 9,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 10,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 11,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 12,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 13,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 14,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 15,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 16,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 17,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 18,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 19,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 20,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 21,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 22,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 23,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 24,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 25,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 26,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 27,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 28,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 29,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 30,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 31,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 32,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 33,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 34,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 35,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 36,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 37,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 38,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 39,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 40,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 41,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 42,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 43,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2 / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 44,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 45,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 46,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 47,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 48,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 49,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 50,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 51,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 52,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 53,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 54,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 55,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 56,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 57,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 58,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 59,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 60,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 61,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 62,
    slug: "lab-toCanvas-bitmap-first / lrp-none / chromium / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 63,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 64,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 65,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 66,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 67,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 68,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 69,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 70,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 71,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 72,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 73,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 74,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 75,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 76,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 77,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 78,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 79,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 80,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 81,
    slug: "lab-toCanvas-bitmap-first / lrp-none / leaf / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 82,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 83,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 84,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 85,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 86,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 87,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 88,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 89,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 90,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 91,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 92,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 93,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 94,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 95,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 96,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 97,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 98,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 99,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 100,
    slug: "lab-toCanvas-bitmap-first / lrp-none / baseline+leaf / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g18: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-bitmap-first",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  }
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-gen-18.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave9-gen-18.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = (() => {
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
  const out = []
  const seenKeys = new Set()
  for (const spec of SPECS) {
    const num = String(spec.n).padStart(3, '0')
    /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
    const recipe = {
      id: `tc-lab-w9g18-${num}`,
      label: `w9g18 #${spec.n}: ${spec.slug}`,
      idea: spec.idea,
      css: resolveCss(spec.cssKey),
      inject: 'both',
      rasterPatch: spec.rasterPatch,
      category: 'tocanvas',
      active: true,
      notes: `Wave-9 lab toCanvas gen 18; FO raster only — no text bypass.`,
    }
    if (spec.labRasterPatches) recipe.labRasterPatches = spec.labRasterPatches
    if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
    if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
    if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
    if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
    if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
    if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
    if (spec.labPreRaster) recipe.labPreRaster = spec.labPreRaster

    const rp = recipe.rasterPatch ?? ''
    if (!rp.startsWith('lab-toCanvas')) {
      throw new Error(`${recipe.id}: rasterPatch must be lab-toCanvas family, got ${rp}`)
    }
    const key = [
      recipe.inject,
      recipe.rasterPatch,
      JSON.stringify(recipe.labRasterPatches ?? null),
      recipe.labPreRaster ?? '',
      recipe.radicalPatch ?? '',
      recipe.svgRootRound ?? '',
      recipe.svgMarkupPatch ?? '',
      recipe.foSvgPatch ?? '',
      JSON.stringify(recipe.foAttrPatch ?? null),
      recipe.monkeypatch ?? '',
      recipe.css,
    ].join('\0')

    // Some generated specs are semantically equivalent after normalization (e.g. cssKey aliases).
    // Keep the first instance deterministically; drop later duplicates to avoid unstable keys.
    if (seenKeys.has(key)) continue
    seenKeys.add(key)
    out.push(recipe)
  }
  return out
})()

if (!RECIPES.length) {
  throw new Error(`recipes-tocanvas-lab-wave9-gen-18.js: expected >= 1 recipe, got 0`)
}

for (const r of RECIPES) {
  const rp = r.rasterPatch ?? ''
  if (!rp.startsWith('lab-toCanvas')) {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas family, got ${rp}`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

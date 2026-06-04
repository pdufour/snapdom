/**
 * Lab toCanvas wave-9 gen shard 19 — lab-toCanvas combinatorial mechanisms.
 * 100 recipes: tc-lab-w9g19-001..100 — FO raster only, no text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9g19-*'
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
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 2,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 3,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 4,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 5,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "h2+chromium",
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
    n: 6,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 7,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 8,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 9,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 10,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 11,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 12,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 13,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 14,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 15,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 16,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 17,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 18,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 19,
    slug: "lab-toCanvas-bitmap-first / lrp-none / h2+chromium / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 20,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / rad-none / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 21,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 22,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 23,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 24,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 4 structural knobs",
    cssKey: "full",
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
    n: 25,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 26,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / root-none / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 27,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / integer-viewbox / rad-none / tc-lab-draw-two-stage / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 28,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 29,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / integer-viewbox / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 30,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / integer-viewbox / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 31,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 32,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / round-dims / math-floor-viewbox-stash-frac / raf-before-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 33,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 34,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 35,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / int-floor / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 36,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 37,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 38,
    slug: "lab-toCanvas-bitmap-first / lrp-none / full / int-floor / remove-fe-filters / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-bitmap-first lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 39,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / rad-none / tc-lab-draw-two-stage / xywh / fosvg-none / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 40,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / h2-fo-percent-int-viewbox / raf-before-draw / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 41,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / math-floor-viewbox-stash-frac / decode-interval-prototype / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 42,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / h2-pin-line-height-from-live / tc-canvas-backing-ceil / xywh / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 43,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / h2-flex-stretch-leaf-from-live / mp-none / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 3 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 44,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 45,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / integer-snap-all-rects / raf-before-draw / xywh / filter-noop-defs / strip-identity-transforms / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 46,
    slug: "lab-toCanvas-round-all / lrp-none / none / root-none / remove-fe-filters / decode-wrap / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 47,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / rad-none / tc-canvas-backing-floor / xywh / fosvg-none / strip-identity-transforms / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-canvas-backing-floor",
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
    n: 48,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / h2-fo-percent-int-viewbox / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 49,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / base64-roundtrip / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 50,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / h2-pin-line-height-from-live / tc-draw-image-round-all / attr-none / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 51,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / attr-none / filter-noop-defs / explicit-xmlns-strip-transforms / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 52,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / integer-snap-all-rects / tc-draw-image-round-all / xy / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 53,
    slug: "lab-toCanvas-round-all / lrp-none / none / integer-viewbox / remove-fe-filters / tc-draw-image-round-all / xy / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 54,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / rad-none / tc-draw-image-round-all / xy / fo-shape-rendering-auto / strip-identity-transforms / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 55,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / rad-none / tc-lab-draw-create-image-bitmap / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
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
    n: 56,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / xywh / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
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
    n: 57,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap / xywh / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 58,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 59,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / attr-none / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 60,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / integer-snap-all-rects / tc-lab-draw-device-grid-floor / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 61,
    slug: "lab-toCanvas-round-all / lrp-none / none / round-dims / remove-fe-filters / tc-lab-draw-device-grid-floor / attr-none / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 62,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / rad-none / tc-lab-draw-two-stage / xywh / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 63,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 64,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 65,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / h2-pin-line-height-from-live / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 66,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 67,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / filter-noop-defs / strip-identity-transforms / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 68,
    slug: "lab-toCanvas-round-all / lrp-none / none / int-floor / remove-fe-filters / tc-lab-draw-two-stage / xy / fosvg-none / strip-identity-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 69,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 70,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 71,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 72,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 73,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 74,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 75,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
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
    labPreRaster: "device-grid-floor"
  },
  {
    n: 76,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 77,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 78,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 79,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 80,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
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
    n: 81,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 82,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-canvas-backing-floor",
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
    n: 83,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 84,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 85,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 86,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 87,
    slug: "lab-toCanvas-round-all / lrp-none / baseline / int-floor / remove-fe-filters / decode-wrap / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "decode-wrap",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 88,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 89,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 90,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 91,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 92,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 93,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 94,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: null,
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
    labPreRaster: "device-grid-floor"
  },
  {
    n: 95,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 96,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 97,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 98,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 99,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
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
    n: 100,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g19: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-round-all",
    labRasterPatches: null,
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  }
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-gen-19.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave9-gen-19.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w9g19-${num}`,
    label: `w9g19 #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: 'both',
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave-9 lab toCanvas gen 19; FO raster only — no text bypass.`,
  }
  if (spec.labRasterPatches) recipe.labRasterPatches = spec.labRasterPatches
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  if (spec.labPreRaster) recipe.labPreRaster = spec.labPreRaster
  return recipe
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-gen-19.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

const seenKeys = new Set()
for (const r of RECIPES) {
  const rp = r.rasterPatch ?? ''
  if (!rp.startsWith('lab-toCanvas')) {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas family, got ${rp}`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    JSON.stringify(r.labRasterPatches ?? null),
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.foAttrPatch ?? null),
    r.monkeypatch ?? '',
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-gen-19.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

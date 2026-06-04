/**
 * Lab toCanvas wave-9 gen shard 20 — lab-toCanvas combinatorial mechanisms.
 * 100 recipes: tc-lab-w9g20-001..100 — FO raster only, no text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9g20-*'
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
    slug: "lab-toCanvas-round-all / lrp-none / h2 / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
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
    n: 2,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
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
    n: 3,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
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
    n: 4,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
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
    n: 5,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
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
    n: 6,
    slug: "lab-toCanvas-round-all / lrp-none / h2 / int-floor / remove-fe-filters / decode-wrap / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2",
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
    n: 7,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "chromium",
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
    n: 8,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 9,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
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
    n: 10,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 11,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 12,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 13,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 14,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 15,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 16,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 17,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
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
    n: 18,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "chromium",
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
    n: 19,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 20,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 21,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 22,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 23,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 24,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 25,
    slug: "lab-toCanvas-round-all / lrp-none / chromium / int-floor / remove-fe-filters / decode-wrap / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "chromium",
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
    n: 26,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "leaf",
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
    n: 27,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 28,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
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
    n: 29,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 30,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 31,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 32,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 33,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 34,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 35,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 36,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
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
    n: 37,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "leaf",
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
    n: 38,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 39,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 40,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 41,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 42,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 43,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 44,
    slug: "lab-toCanvas-round-all / lrp-none / leaf / int-floor / remove-fe-filters / decode-wrap / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "leaf",
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
    n: 45,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 46,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 47,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 48,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 49,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 50,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 51,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 52,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 53,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 54,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 55,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 56,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 57,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 58,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 59,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 60,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 61,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 62,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 63,
    slug: "lab-toCanvas-round-all / lrp-none / baseline+leaf / int-floor / remove-fe-filters / decode-wrap / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "baseline+leaf",
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
    n: 64,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "h2+chromium",
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
    n: 65,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 66,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 67,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 68,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 69,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 70,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 71,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 72,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 73,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 74,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 75,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "h2+chromium",
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
    n: 76,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 77,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 78,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 79,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 80,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 81,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 82,
    slug: "lab-toCanvas-round-all / lrp-none / h2+chromium / int-floor / remove-fe-filters / decode-wrap / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "h2+chromium",
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
    n: 83,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / rad-none / raf-before-draw / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 4 structural knobs",
    cssKey: "full",
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
    n: 84,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / h2-fo-percent-int-viewbox / image-decode-twice / attr-none / fo-shape-rendering-auto / explicit-xmlns / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 85,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / math-floor-viewbox-stash-frac / image-decode-twice / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 86,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / h2-pin-line-height-from-live / image-decode-twice / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 87,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 88,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / integer-snap-all-rects / image-decode-twice / xy / fo-shape-rendering-auto / base64-roundtrip / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 89,
    slug: "lab-toCanvas-round-all / lrp-none / full / root-none / remove-fe-filters / image-decode-twice / xywh / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 90,
    slug: "lab-toCanvas-round-all / lrp-none / full / integer-viewbox / rad-none / image-decode-twice / xywh / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 91,
    slug: "lab-toCanvas-round-all / lrp-none / full / integer-viewbox / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 92,
    slug: "lab-toCanvas-round-all / lrp-none / full / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 93,
    slug: "lab-toCanvas-round-all / lrp-none / full / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 94,
    slug: "lab-toCanvas-round-all / lrp-none / full / round-dims / rad-none / raf-before-draw / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 5 structural knobs",
    cssKey: "full",
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
    n: 95,
    slug: "lab-toCanvas-round-all / lrp-none / full / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 96,
    slug: "lab-toCanvas-round-all / lrp-none / full / round-dims / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 97,
    slug: "lab-toCanvas-round-all / lrp-none / full / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 98,
    slug: "lab-toCanvas-round-all / lrp-none / full / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 99,
    slug: "lab-toCanvas-round-all / lrp-none / full / int-floor / math-floor-viewbox-stash-frac / decode-interval-prototype / attr-none / fe-color-matrix-identity / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
    n: 100,
    slug: "lab-toCanvas-round-all / lrp-none / full / int-floor / h2-flex-stretch-leaf-from-live / decode-interval-prototype / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave9 w9g20: lab-toCanvas-round-all lab-toCanvas + 6 structural knobs",
    cssKey: "full",
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
  }
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-gen-20.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave9-gen-20.js: duplicate slugs in SPECS`)
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
      id: `tc-lab-w9g20-${num}`,
      label: `w9g20 #${spec.n}: ${spec.slug}`,
      idea: spec.idea,
      css: resolveCss(spec.cssKey),
      inject: 'both',
      rasterPatch: spec.rasterPatch,
      category: 'tocanvas',
      active: true,
      notes: `Wave-9 lab toCanvas gen 20; FO raster only — no text bypass.`,
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
  throw new Error(`recipes-tocanvas-lab-wave9-gen-20.js: expected >= 1 recipe, got 0`)
}

/** Additional targeted canvas-only raster probes (not part of gen-20 combinatorics). */
const EXTRA_RECIPES = /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */ ([
  {
    id: 'tc-lab-w9g20-rasterint-001',
    label: 'w9g20 extra: outDims ceil + backing ceil (integer policy)',
    idea: 'Explicit integer outW/outH via ceil, with matching canvas backing-store ceil.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: integer out dims + backing store rounding. No CSS changes, no text bypass.',
    labToCanvasOpts: { outDimsRound: 'ceil', backingRound: 'ceil' },
  },
  {
    id: 'tc-lab-w9g20-rasterint-002',
    label: 'w9g20 extra: outDims round + backing round (integer policy)',
    idea: 'Explicit integer outW/outH via round, with matching canvas backing-store round.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: integer out dims + backing store rounding. No CSS changes, no text bypass.',
    labToCanvasOpts: { outDimsRound: 'round', backingRound: 'round' },
  },
  {
    id: 'tc-lab-w9g20-rasterint-003',
    label: 'w9g20 extra: outDims ceil + backing ceil + round drawImage dest',
    idea: 'Ceil integer outW/outH + backing ceil, plus rounding drawImage dest rect.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: integer out dims + backing store + integer draw rect. No CSS changes, no text bypass.',
    labToCanvasOpts: { outDimsRound: 'ceil', backingRound: 'ceil', roundDrawImage: true },
  },
  {
    id: 'tc-lab-w9g20-ibmp-001',
    label: 'w9g20 extra: createImageBitmap resizeQuality low',
    idea: 'Force createImageBitmap resizeQuality=low for decode/resize path.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: ImageBitmap resize options. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-createImageBitmap-resize-low',
  },
  {
    id: 'tc-lab-w9g20-ibmp-002',
    label: 'w9g20 extra: createImageBitmap resizeQuality medium',
    idea: 'Force createImageBitmap resizeQuality=medium for decode/resize path.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: ImageBitmap resize options. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-createImageBitmap-resize-medium',
  },
  {
    id: 'tc-lab-w9g20-ibmp-003',
    label: 'w9g20 extra: createImageBitmap resizeQuality pixelated',
    idea: 'Force createImageBitmap resizeQuality=pixelated for decode/resize path.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: ImageBitmap resize options. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-createImageBitmap-resize-pixelated',
  },
  {
    id: 'tc-lab-w9g20-ibmp-004',
    label: 'w9g20 extra: createImageBitmap premultiplyAlpha none',
    idea: 'Force createImageBitmap premultiplyAlpha=none for bitmap decode.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: ImageBitmap premultiplyAlpha. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-createImageBitmap-premul-none',
  },
  {
    id: 'tc-lab-w9g20-ibmp-005',
    label: 'w9g20 extra: createImageBitmap premultiplyAlpha premultiply',
    idea: 'Force createImageBitmap premultiplyAlpha=premultiply for bitmap decode.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: ImageBitmap premultiplyAlpha. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-createImageBitmap-premul-premultiply',
  },
  {
    id: 'tc-lab-w9g20-ibmp-006',
    label: 'w9g20 extra: createImageBitmap high + premultiplyAlpha none',
    idea: 'Force createImageBitmap resizeQuality=high and premultiplyAlpha=none.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: ImageBitmap resize+premul combo. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-createImageBitmap-high-premul-none',
  },
  {
    id: 'tc-lab-w9g20-br-001',
    label: 'w9g20 extra: bitmaprenderer transferFromImageBitmap',
    idea: 'Transfer path via bitmaprenderer staging canvas (transferFromImageBitmap) after decode.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: BitmapRenderer transfer path. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-w4-bitmaprenderer-transfer',
  },
  {
    id: 'tc-lab-w9g20-br-002',
    label: 'w9g20 extra: bitmaprenderer transfer then 2d draw',
    idea: 'BitmapRenderer transferFromImageBitmap then draw via 2d to preserve downstream composite behavior.',
    css: resolveCss('none'),
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: 'Canvas-only raster: BitmapRenderer transfer path. No CSS changes, no text bypass.',
    monkeypatch: 'tc-lab-w4-bitmaprenderer-then-canvas-2d',
  },
])

for (const r of RECIPES) {
  const rp = r.rasterPatch ?? ''
  if (!rp.startsWith('lab-toCanvas')) {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas family, got ${rp}`)
  }
}

for (const r of EXTRA_RECIPES) {
  const rp = r.rasterPatch ?? ''
  if (!rp.startsWith('lab-toCanvas')) {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas family, got ${rp}`)
  }
}

export const FO_FIX_RECIPES_SHARD = [...RECIPES, ...EXTRA_RECIPES]
export default FO_FIX_RECIPES_SHARD

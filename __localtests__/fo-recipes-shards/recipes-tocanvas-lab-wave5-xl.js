/**
 * Wave-5 XL lab-toCanvas leader combos — tc-lab-w5-xl-001..100.
 * Each row: 3–5 knobs from prior tc-lab / tc-only matrix leaders (CSS, viewBox, radical, MP, markup).
 * rasterPatch: lab-toCanvas | lab-toCanvas-decode | lab-toCanvas-frac.
 * active:true — FO raster only, no text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5-xl-*'
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

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null, labPreRaster?: string | null }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas / none / root-none / rad-none / mp-none / attr-none / fe-color-matrix-identity / strip-xml-declaration / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 3 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 2,
    slug: "lab-toCanvas / none / root-none / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 3,
    slug: "lab-toCanvas / none / root-none / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / attr-none / filter-noop-defs / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 4,
    slug: "lab-toCanvas / none / root-none / remove-fe-filters / image-decode-twice / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
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
    n: 5,
    slug: "lab-toCanvas / none / integer-viewbox / math-floor-viewbox-stash-frac / decode-wrap / xywh / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
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
    n: 6,
    slug: "lab-toCanvas / none / integer-viewbox / remove-fe-filters / tc-lab-draw-device-grid-floor / attr-none / filter-noop-defs / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 7,
    slug: "lab-toCanvas / none / round-dims / h2-pin-line-height-from-live / decode-interval-prototype / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 8,
    slug: "lab-toCanvas / none / int-floor / rad-none / decode-interval-prototype / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "decode-interval-prototype",
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
    n: 9,
    slug: "lab-toCanvas / none / int-floor / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / attr-none / fo-shape-rendering-auto / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 10,
    slug: "lab-toCanvas / baseline / root-none / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / base64-roundtrip / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 11,
    slug: "lab-toCanvas / baseline / root-none / integer-snap-all-rects / tc-draw-image-round-all / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 12,
    slug: "lab-toCanvas / baseline / round-dims / rad-none / mp-none / xy / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 13,
    slug: "lab-toCanvas / baseline / int-floor / h2-flex-stretch-leaf-from-live / image-decode-twice / attr-none / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 14,
    slug: "lab-toCanvas / h2 / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 15,
    slug: "lab-toCanvas / h2 / integer-viewbox / rad-none / tc-canvas-backing-ceil / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 16,
    slug: "lab-toCanvas / h2 / round-dims / integer-snap-all-rects / tc-canvas-backing-ceil / xy / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 17,
    slug: "lab-toCanvas / chromium / root-none / rad-none / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 4 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 18,
    slug: "lab-toCanvas / chromium / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 19,
    slug: "lab-toCanvas / chromium / integer-viewbox / remove-fe-filters / mp-none / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 20,
    slug: "lab-toCanvas / chromium / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-decode-safari-raf",
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
    slug: "lab-toCanvas / leaf / root-none / math-floor-viewbox-stash-frac / decode-wrap / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-wrap",
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
    n: 22,
    slug: "lab-toCanvas / leaf / root-none / remove-fe-filters / tc-lab-draw-device-grid-floor / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 4 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 23,
    slug: "lab-toCanvas / leaf / round-dims / h2-flex-stretch-leaf-from-live / mp-none / xywh / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 24,
    slug: "lab-toCanvas / baseline+leaf / root-none / rad-none / raf-before-draw / attr-none / fosvg-none / explicit-xmlns / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 4 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 25,
    slug: "lab-toCanvas / baseline+leaf / root-none / h2-flex-stretch-leaf-from-live / image-decode-twice / xywh / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "image-decode-twice",
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
    n: 26,
    slug: "lab-toCanvas / baseline+leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / xy / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 27,
    slug: "lab-toCanvas / baseline+leaf / int-floor / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 28,
    slug: "lab-toCanvas / h2+chromium / root-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 29,
    slug: "lab-toCanvas / h2+chromium / root-none / remove-fe-filters / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 30,
    slug: "lab-toCanvas / h2+chromium / round-dims / h2-pin-line-height-from-live / mp-none / attr-none / fo-shape-rendering-auto / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 31,
    slug: "lab-toCanvas / full / root-none / rad-none / decode-interval-prototype / xywh / filter-noop-defs / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 32,
    slug: "lab-toCanvas / full / root-none / h2-flex-stretch-leaf-from-live / tc-canvas-backing-floor / attr-none / filter-noop-defs / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 33,
    slug: "lab-toCanvas / full / integer-viewbox / h2-pin-line-height-from-live / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 34,
    slug: "lab-toCanvas / full / int-floor / h2-fo-percent-int-viewbox / mp-none / xywh / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
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
    n: 35,
    slug: "lab-toCanvas-decode / none / root-none / h2-fo-percent-int-viewbox / tc-decode-safari-raf / xy / filter-noop-defs / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 36,
    slug: "lab-toCanvas-decode / none / root-none / h2-pin-line-height-from-live / image-decode-twice / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "image-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 37,
    slug: "lab-toCanvas-decode / none / root-none / integer-snap-all-rects / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / explicit-xmlns / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 38,
    slug: "lab-toCanvas-decode / none / integer-viewbox / h2-fo-percent-int-viewbox / mp-none / attr-none / fo-shape-rendering-auto / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 39,
    slug: "lab-toCanvas-decode / none / integer-viewbox / integer-snap-all-rects / decode-interval-prototype / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "decode-interval-prototype",
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
    n: 40,
    slug: "lab-toCanvas-decode / none / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / xy / fosvg-none / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 41,
    slug: "lab-toCanvas-decode / none / round-dims / remove-fe-filters / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 42,
    slug: "lab-toCanvas-decode / none / int-floor / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / xywh / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
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
    n: 43,
    slug: "lab-toCanvas-decode / baseline / root-none / rad-none / tc-draw-image-round-all / xy / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 44,
    slug: "lab-toCanvas-decode / baseline / root-none / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 45,
    slug: "lab-toCanvas-decode / baseline / integer-viewbox / h2-fo-percent-int-viewbox / tc-decode-safari-raf / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 46,
    slug: "lab-toCanvas-decode / baseline / int-floor / rad-none / decode-interval-prototype / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 47,
    slug: "lab-toCanvas-decode / h2 / root-none / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 48,
    slug: "lab-toCanvas-decode / h2 / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 49,
    slug: "lab-toCanvas-decode / h2 / round-dims / rad-none / raf-before-draw / attr-none / fo-shape-rendering-auto / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 50,
    slug: "lab-toCanvas-decode / h2 / int-floor / remove-fe-filters / tc-lab-draw-two-stage / attr-none / fosvg-none / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 51,
    slug: "lab-toCanvas-decode / chromium / root-none / h2-pin-line-height-from-live / tc-decode-safari-raf / xy / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 52,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 53,
    slug: "lab-toCanvas-decode / chromium / int-floor / rad-none / tc-draw-image-round-all / attr-none / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 54,
    slug: "lab-toCanvas-decode / leaf / root-none / h2-fo-percent-int-viewbox / mp-none / attr-none / fe-color-matrix-identity / strip-identity-transforms / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 55,
    slug: "lab-toCanvas-decode / leaf / root-none / integer-snap-all-rects / decode-interval-prototype / xywh / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "decode-interval-prototype",
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
    n: 56,
    slug: "lab-toCanvas-decode / leaf / round-dims / rad-none / tc-decode-safari-raf / attr-none / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 3 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 57,
    slug: "lab-toCanvas-decode / leaf / int-floor / integer-snap-all-rects / raf-before-draw / attr-none / fosvg-none / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 58,
    slug: "lab-toCanvas-decode / baseline+leaf / root-none / h2-pin-line-height-from-live / mp-none / xy / filter-noop-defs / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 59,
    slug: "lab-toCanvas-decode / baseline+leaf / integer-viewbox / rad-none / decode-wrap / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "decode-wrap",
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
    n: 60,
    slug: "lab-toCanvas-decode / baseline+leaf / round-dims / remove-fe-filters / tc-canvas-backing-floor / xywh / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-floor",
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
    n: 61,
    slug: "lab-toCanvas-decode / h2+chromium / root-none / rad-none / tc-lab-draw-create-image-bitmap / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 3 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 62,
    slug: "lab-toCanvas-decode / h2+chromium / root-none / integer-snap-all-rects / tc-draw-image-round-all / attr-none / fo-shape-rendering-auto / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 63,
    slug: "lab-toCanvas-decode / h2+chromium / round-dims / rad-none / mp-none / attr-none / filter-noop-defs / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 64,
    slug: "lab-toCanvas-decode / h2+chromium / int-floor / h2-flex-stretch-leaf-from-live / decode-wrap / attr-none / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "decode-wrap",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 65,
    slug: "lab-toCanvas-decode / full / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-decode + 4 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 66,
    slug: "lab-toCanvas-decode / full / integer-viewbox / rad-none / tc-canvas-backing-ceil / attr-none / filter-noop-defs / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 67,
    slug: "lab-toCanvas-decode / full / round-dims / integer-snap-all-rects / tc-draw-image-round-all / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-decode + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 68,
    slug: "lab-toCanvas-frac / none / root-none / rad-none / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / strip-identity-transforms / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 3 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 69,
    slug: "lab-toCanvas-frac / none / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / attr-none / filter-noop-defs / explicit-xmlns / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 70,
    slug: "lab-toCanvas-frac / none / root-none / integer-snap-all-rects / mp-none / xy / fe-color-matrix-identity / base64-roundtrip / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 71,
    slug: "lab-toCanvas-frac / none / integer-viewbox / rad-none / tc-canvas-backing-floor / xy / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 72,
    slug: "lab-toCanvas-frac / none / integer-viewbox / h2-pin-line-height-from-live / tc-lab-draw-device-grid-floor / attr-none / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 73,
    slug: "lab-toCanvas-frac / none / round-dims / rad-none / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-h2-frac-draw",
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
    n: 74,
    slug: "lab-toCanvas-frac / none / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xy / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  },
  {
    n: 75,
    slug: "lab-toCanvas-frac / none / int-floor / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 76,
    slug: "lab-toCanvas-frac / none / int-floor / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / xywh / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "none",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
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
    n: 77,
    slug: "lab-toCanvas-frac / baseline / root-none / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / filter-noop-defs / strip-identity-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-identity-transforms",
    labPreRaster: null
  },
  {
    n: 78,
    slug: "lab-toCanvas-frac / baseline / root-none / remove-fe-filters / raf-before-draw / attr-none / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 79,
    slug: "lab-toCanvas-frac / baseline / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 80,
    slug: "lab-toCanvas-frac / h2 / root-none / rad-none / decode-interval-prototype / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: null,
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
    n: 81,
    slug: "lab-toCanvas-frac / h2 / root-none / h2-flex-stretch-leaf-from-live / tc-canvas-backing-ceil / xy / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 82,
    slug: "lab-toCanvas-frac / h2 / integer-viewbox / h2-pin-line-height-from-live / raf-before-draw / attr-none / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 83,
    slug: "lab-toCanvas-frac / h2 / int-floor / h2-fo-percent-int-viewbox / mp-none / attr-none / fosvg-none / explicit-xmlns / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns",
    labPreRaster: null
  },
  {
    n: 84,
    slug: "lab-toCanvas-frac / chromium / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 85,
    slug: "lab-toCanvas-frac / chromium / root-none / remove-fe-filters / tc-canvas-backing-floor / xy / filter-noop-defs / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 86,
    slug: "lab-toCanvas-frac / chromium / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-two-stage / attr-none / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 87,
    slug: "lab-toCanvas-frac / leaf / root-none / rad-none / tc-canvas-backing-floor / xy / fosvg-none / explicit-xmlns-strip-transforms / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labPreRaster: null
  },
  {
    n: 88,
    slug: "lab-toCanvas-frac / leaf / root-none / h2-pin-line-height-from-live / tc-lab-draw-device-grid-floor / attr-none / fo-shape-rendering-auto / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 89,
    slug: "lab-toCanvas-frac / leaf / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / xy / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 90,
    slug: "lab-toCanvas-frac / leaf / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: "device-grid-floor"
  },
  {
    n: 91,
    slug: "lab-toCanvas-frac / baseline+leaf / root-none / h2-fo-percent-int-viewbox / image-decode-twice / xywh / fosvg-none / markup-none / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "image-decode-twice",
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
    n: 92,
    slug: "lab-toCanvas-frac / baseline+leaf / root-none / remove-fe-filters / mp-none / attr-none / fo-shape-rendering-auto / strip-xml-declaration / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 93,
    slug: "lab-toCanvas-frac / baseline+leaf / round-dims / rad-none / tc-lab-draw-create-image-bitmap / xy / fosvg-none / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "baseline+leaf",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 94,
    slug: "lab-toCanvas-frac / h2+chromium / root-none / rad-none / tc-draw-image-round-all / attr-none / filter-noop-defs / base64-roundtrip / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 95,
    slug: "lab-toCanvas-frac / h2+chromium / root-none / h2-pin-line-height-from-live / raf-before-draw / xywh / fe-color-matrix-identity / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "raf-before-draw",
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
    n: 96,
    slug: "lab-toCanvas-frac / h2+chromium / integer-viewbox / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / attr-none / fo-shape-rendering-auto / markup-none / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labPreRaster: null
  },
  {
    n: 97,
    slug: "lab-toCanvas-frac / h2+chromium / int-floor / rad-none / decode-interval-prototype / attr-none / fosvg-none / base64-roundtrip / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "h2+chromium",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 98,
    slug: "lab-toCanvas-frac / full / root-none / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / attr-none / fo-shape-rendering-auto / strip-xml-declaration / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: null
  },
  {
    n: 99,
    slug: "lab-toCanvas-frac / full / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fosvg-none / strip-xml-declaration / device-grid-floor",
    idea: "Wave5 XL: lab-toCanvas-frac + 5 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labPreRaster: "device-grid-floor"
  },
  {
    n: 100,
    slug: "lab-toCanvas-frac / full / round-dims / rad-none / raf-before-draw / attr-none / fosvg-none / base64-roundtrip / preraster-none",
    idea: "Wave5 XL: lab-toCanvas-frac + 4 structural knobs from tc-lab leaders",
    cssKey: "full",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "raf-before-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labPreRaster: null
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave5-xl.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error('recipes-tocanvas-lab-wave5-xl.js: duplicate slugs in SPECS')
}

/** @param {typeof SPECS[number]} spec */
function specKnobCount(spec) {
  let n = 0
  if (spec.cssKey !== 'none') n++
  if (spec.svgRootRound) n++
  if (spec.radicalPatch) n++
  if (spec.monkeypatch) n++
  if (spec.foAttrPatch) n++
  if (spec.foSvgPatch) n++
  if (spec.svgMarkupPatch) n++
  if (spec.labPreRaster) n++
  return n
}

for (const spec of SPECS) {
  const k = specKnobCount(spec)
  if (k < 3 || k > 5) {
    throw new Error(`recipes-tocanvas-lab-wave5-xl.js: spec #${spec.n} has ${k} knobs (need 3–5)`)
  }
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.monkeypatch || spec.labPreRaster === 'device-grid-floor' ? 'both' : 'both'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w5-xl-${num}`,
    label: `tc-lab-w5-xl #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave5 XL; ${specKnobCount(spec)} knobs; FO raster only — no text bypass.`,
  }
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
    `recipes-tocanvas-lab-wave5-xl.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

const seenKeys = new Set()
for (const r of RECIPES) {
  if (r.active !== true) {
    throw new Error(`${r.id}: active must be true`)
  }
  const rp = r.rasterPatch
  if (rp !== 'lab-toCanvas' && rp !== 'lab-toCanvas-decode' && rp !== 'lab-toCanvas-frac') {
    throw new Error(`${r.id}: invalid rasterPatch ${rp}`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
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
    throw new Error(`recipes-tocanvas-lab-wave5-xl.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

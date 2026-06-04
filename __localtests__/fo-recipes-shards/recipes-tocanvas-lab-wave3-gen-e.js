/**
 * Lab toCanvas wave3 generated shard (e) — combinatorial lab forks + structural knobs.
 * 100 recipes: tc-lab-w3g-e-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3g-e-*'
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

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas / none / root-none / rad-none / mp-none / attr-none / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + no svgRootRound",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 2,
    slug: "lab-toCanvas / none / root-none / h2-fo-percent-int-viewbox / tc-decode-safari-raf / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + no svgRootRound + h2-fo-percent-int-viewbox + tc-decode-safari-raf + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 3,
    slug: "lab-toCanvas / none / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 4,
    slug: "lab-toCanvas / none / root-none / h2-flex-stretch-leaf-from-live / mp-none / attr-none / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + no svgRootRound + h2-flex-stretch-leaf-from-live + fo-shape-rendering-auto",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 5,
    slug: "lab-toCanvas / none / root-none / integer-snap-all-rects / tc-decode-safari-raf / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + no svgRootRound + integer-snap-all-rects + tc-decode-safari-raf + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 6,
    slug: "lab-toCanvas / none / root-none / remove-fe-filters / tc-lab-draw-create-image-bitmap / attr-none / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + no svgRootRound + remove-fe-filters + tc-lab-draw-create-image-bitmap + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 7,
    slug: "lab-toCanvas / none / integer-viewbox / h2-fo-percent-int-viewbox / mp-none / xy / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + integer-viewbox + h2-fo-percent-int-viewbox + FO x/y +0.0001 + fe-color-matrix-identity",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 8,
    slug: "lab-toCanvas / none / integer-viewbox / math-floor-viewbox-stash-frac / tc-decode-safari-raf / xywh / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + integer-viewbox + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO x/y/w/h +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 9,
    slug: "lab-toCanvas / none / integer-viewbox / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + integer-viewbox + h2-pin-line-height-from-live + tc-lab-draw-create-image-bitmap + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 10,
    slug: "lab-toCanvas / none / integer-viewbox / integer-snap-all-rects / mp-none / xywh / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + integer-viewbox + integer-snap-all-rects + FO x/y/w/h +0.0001",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 11,
    slug: "lab-toCanvas / none / integer-viewbox / remove-fe-filters / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + integer-viewbox + remove-fe-filters + tc-lab-draw-h2-frac-draw + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 12,
    slug: "lab-toCanvas / none / round-dims / rad-none / tc-lab-draw-create-image-bitmap / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + round-dims + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 13,
    slug: "lab-toCanvas / none / round-dims / math-floor-viewbox-stash-frac / mp-none / xywh / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + round-dims + math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + fo-shape-rendering-auto",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 14,
    slug: "lab-toCanvas / none / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / attr-none / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + round-dims + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 15,
    slug: "lab-toCanvas / none / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / xywh / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 16,
    slug: "lab-toCanvas / none / round-dims / remove-fe-filters / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + round-dims + remove-fe-filters + tc-draw-image-round-all + fe-color-matrix-identity",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 17,
    slug: "lab-toCanvas / none / int-floor / rad-none / tc-lab-draw-h2-frac-draw / xy / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + int-floor + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 18,
    slug: "lab-toCanvas / none / int-floor / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + int-floor + h2-fo-percent-int-viewbox + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 19,
    slug: "lab-toCanvas / none / int-floor / h2-pin-line-height-from-live / tc-draw-image-round-all / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + no extra CSS + int-floor + h2-pin-line-height-from-live + tc-draw-image-round-all + FO x/y +0.0001",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 20,
    slug: "lab-toCanvas / none / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + no extra CSS + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + base64-roundtrip",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 21,
    slug: "lab-toCanvas / none / int-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + no extra CSS + int-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "none",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 22,
    slug: "lab-toCanvas / baseline / root-none / rad-none / tc-draw-image-round-all / xy / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + no svgRootRound + tc-draw-image-round-all + FO x/y +0.0001 + fo-shape-rendering-auto",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 23,
    slug: "lab-toCanvas / baseline / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xywh / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 24,
    slug: "lab-toCanvas / baseline / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 25,
    slug: "lab-toCanvas / baseline / root-none / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fe-color-matrix-identity",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 26,
    slug: "lab-toCanvas / baseline / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + no svgRootRound + integer-snap-all-rects + tc-lab-draw-two-stage + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 27,
    slug: "lab-toCanvas / baseline / root-none / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + no svgRootRound + remove-fe-filters + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 28,
    slug: "lab-toCanvas / baseline / integer-viewbox / h2-fo-percent-int-viewbox / tc-canvas-backing-ceil / attr-none / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + integer-viewbox + h2-fo-percent-int-viewbox + tc-canvas-backing-ceil",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 29,
    slug: "lab-toCanvas / baseline / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + integer-viewbox + math-floor-viewbox-stash-frac + tc-lab-draw-two-stage + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 30,
    slug: "lab-toCanvas / baseline / integer-viewbox / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap-pixelated / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + integer-viewbox + h2-pin-line-height-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 31,
    slug: "lab-toCanvas / baseline / integer-viewbox / integer-snap-all-rects / tc-canvas-backing-ceil / attr-none / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + integer-viewbox + integer-snap-all-rects + tc-canvas-backing-ceil + fo-shape-rendering-auto",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 32,
    slug: "lab-toCanvas / baseline / integer-viewbox / remove-fe-filters / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + integer-viewbox + remove-fe-filters + tc-lab-draw-two-stage + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 33,
    slug: "lab-toCanvas / baseline / round-dims / rad-none / tc-lab-draw-device-grid-floor / attr-none / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + round-dims + tc-lab-draw-device-grid-floor + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 34,
    slug: "lab-toCanvas / baseline / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + round-dims + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fe-color-matrix-identity",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 35,
    slug: "lab-toCanvas / baseline / round-dims / h2-pin-line-height-from-live / tc-lab-draw-two-stage / xywh / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + round-dims + h2-pin-line-height-from-live + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 36,
    slug: "lab-toCanvas / baseline / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-device-grid-floor + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 37,
    slug: "lab-toCanvas / baseline / round-dims / remove-fe-filters / tc-canvas-backing-ceil / xywh / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + round-dims + remove-fe-filters + tc-canvas-backing-ceil + FO x/y/w/h +0.0001",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 38,
    slug: "lab-toCanvas / baseline / int-floor / rad-none / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + int-floor + tc-lab-draw-supersample-downscale + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 39,
    slug: "lab-toCanvas / baseline / int-floor / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + int-floor + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 40,
    slug: "lab-toCanvas / baseline / int-floor / h2-pin-line-height-from-live / tc-canvas-backing-ceil / xywh / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + int-floor + h2-pin-line-height-from-live + tc-canvas-backing-ceil + FO x/y/w/h +0.0001 + fo-shape-rendering-auto",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 41,
    slug: "lab-toCanvas / baseline / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 42,
    slug: "lab-toCanvas / baseline / int-floor / integer-snap-all-rects / tc-lab-draw-device-grid-floor / xywh / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO_BASELINE_CSS + int-floor + integer-snap-all-rects + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "baseline",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 43,
    slug: "lab-toCanvas / h2 / root-none / rad-none / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + no svgRootRound + tc-decode-safari-raf + fe-color-matrix-identity",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 44,
    slug: "lab-toCanvas / h2 / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-supersample-downscale / xy / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-supersample-downscale + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 45,
    slug: "lab-toCanvas / h2 / root-none / math-floor-viewbox-stash-frac / tc-lab-draw-device-grid-floor / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 46,
    slug: "lab-toCanvas / h2 / root-none / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-decode-safari-raf + FO x/y +0.0001",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 47,
    slug: "lab-toCanvas / h2 / root-none / integer-snap-all-rects / tc-lab-draw-supersample-downscale / xywh / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + no svgRootRound + integer-snap-all-rects + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 48,
    slug: "lab-toCanvas / h2 / integer-viewbox / rad-none / mp-none / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + integer-viewbox + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 49,
    slug: "lab-toCanvas / h2 / integer-viewbox / h2-fo-percent-int-viewbox / tc-decode-safari-raf / xy / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + integer-viewbox + h2-fo-percent-int-viewbox + tc-decode-safari-raf + FO x/y +0.0001 + fo-shape-rendering-auto",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 50,
    slug: "lab-toCanvas / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / xywh / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + integer-viewbox + math-floor-viewbox-stash-frac + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 51,
    slug: "lab-toCanvas / h2 / integer-viewbox / h2-flex-stretch-leaf-from-live / mp-none / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + integer-viewbox + h2-flex-stretch-leaf-from-live + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 52,
    slug: "lab-toCanvas / h2 / integer-viewbox / integer-snap-all-rects / tc-decode-safari-raf / xywh / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + integer-viewbox + integer-snap-all-rects + tc-decode-safari-raf + FO x/y/w/h +0.0001 + fe-color-matrix-identity",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 53,
    slug: "lab-toCanvas / h2 / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + integer-viewbox + remove-fe-filters + tc-lab-draw-create-image-bitmap + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 54,
    slug: "lab-toCanvas / h2 / round-dims / h2-fo-percent-int-viewbox / mp-none / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + round-dims + h2-fo-percent-int-viewbox + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 55,
    slug: "lab-toCanvas / h2 / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + round-dims + math-floor-viewbox-stash-frac + tc-lab-draw-h2-frac-draw",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 56,
    slug: "lab-toCanvas / h2 / round-dims / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + round-dims + h2-pin-line-height-from-live + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 57,
    slug: "lab-toCanvas / h2 / round-dims / integer-snap-all-rects / mp-none / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + round-dims + integer-snap-all-rects + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 58,
    slug: "lab-toCanvas / h2 / round-dims / remove-fe-filters / tc-lab-draw-h2-frac-draw / attr-none / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + round-dims + remove-fe-filters + tc-lab-draw-h2-frac-draw + fo-shape-rendering-auto",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 59,
    slug: "lab-toCanvas / h2 / int-floor / rad-none / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + int-floor + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 60,
    slug: "lab-toCanvas / h2 / int-floor / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + int-floor + math-floor-viewbox-stash-frac + tc-draw-image-round-all + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 61,
    slug: "lab-toCanvas / h2 / int-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xy / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + int-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + fe-color-matrix-identity",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 62,
    slug: "lab-toCanvas / h2 / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / xywh / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 63,
    slug: "lab-toCanvas / h2 / int-floor / remove-fe-filters / tc-draw-image-round-all / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + int-floor + remove-fe-filters + tc-draw-image-round-all + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 64,
    slug: "lab-toCanvas / chromium / root-none / rad-none / tc-lab-draw-h2-frac-draw / xywh / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 65,
    slug: "lab-toCanvas / chromium / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-create-image-bitmap-pixelated + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 66,
    slug: "lab-toCanvas / chromium / root-none / h2-pin-line-height-from-live / tc-draw-image-round-all / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-pin-line-height-from-live + tc-draw-image-round-all + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 67,
    slug: "lab-toCanvas / chromium / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / xywh / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + fo-shape-rendering-auto",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 68,
    slug: "lab-toCanvas / chromium / root-none / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 69,
    slug: "lab-toCanvas / chromium / integer-viewbox / rad-none / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + tc-draw-image-round-all + FO x/y/w/h +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 70,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-fo-percent-int-viewbox / tc-lab-draw-two-stage / attr-none / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + h2-fo-percent-int-viewbox + tc-lab-draw-two-stage + fe-color-matrix-identity",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 71,
    slug: "lab-toCanvas / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + math-floor-viewbox-stash-frac + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 72,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-draw-image-round-all / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 73,
    slug: "lab-toCanvas / chromium / integer-viewbox / integer-snap-all-rects / tc-lab-draw-two-stage / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + integer-snap-all-rects + tc-lab-draw-two-stage + FO x/y +0.0001",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 74,
    slug: "lab-toCanvas / chromium / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / xywh / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + remove-fe-filters + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 75,
    slug: "lab-toCanvas / chromium / round-dims / h2-fo-percent-int-viewbox / tc-canvas-backing-ceil / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-fo-percent-int-viewbox + tc-canvas-backing-ceil + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 76,
    slug: "lab-toCanvas / chromium / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / xy / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + math-floor-viewbox-stash-frac + tc-lab-draw-two-stage + FO x/y +0.0001 + fo-shape-rendering-auto",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 77,
    slug: "lab-toCanvas / chromium / round-dims / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap-pixelated / xywh / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-pin-line-height-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 78,
    slug: "lab-toCanvas / chromium / round-dims / integer-snap-all-rects / tc-canvas-backing-ceil / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + integer-snap-all-rects + tc-canvas-backing-ceil + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 79,
    slug: "lab-toCanvas / chromium / round-dims / remove-fe-filters / tc-lab-draw-two-stage / xywh / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + remove-fe-filters + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + fe-color-matrix-identity",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 80,
    slug: "lab-toCanvas / chromium / int-floor / rad-none / tc-lab-draw-device-grid-floor / attr-none / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + tc-lab-draw-device-grid-floor + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 81,
    slug: "lab-toCanvas / chromium / int-floor / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 82,
    slug: "lab-toCanvas / chromium / int-floor / h2-pin-line-height-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-pin-line-height-from-live + tc-lab-draw-supersample-downscale",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 83,
    slug: "lab-toCanvas / chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 84,
    slug: "lab-toCanvas / chromium / int-floor / remove-fe-filters / tc-canvas-backing-ceil / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + remove-fe-filters + tc-canvas-backing-ceil + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 85,
    slug: "lab-toCanvas / leaf / root-none / rad-none / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + no svgRootRound + tc-lab-draw-supersample-downscale + fo-shape-rendering-auto",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 86,
    slug: "lab-toCanvas / leaf / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 87,
    slug: "lab-toCanvas / leaf / root-none / h2-pin-line-height-from-live / tc-decode-safari-raf / attr-none / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + no svgRootRound + h2-pin-line-height-from-live + tc-decode-safari-raf + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 88,
    slug: "lab-toCanvas / leaf / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xy / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y +0.0001 + fe-color-matrix-identity",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 89,
    slug: "lab-toCanvas / leaf / root-none / integer-snap-all-rects / tc-lab-draw-device-grid-floor / xywh / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + no svgRootRound + integer-snap-all-rects + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 90,
    slug: "lab-toCanvas / leaf / integer-viewbox / rad-none / tc-decode-safari-raf / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + integer-viewbox + tc-decode-safari-raf + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 91,
    slug: "lab-toCanvas / leaf / integer-viewbox / h2-fo-percent-int-viewbox / tc-lab-draw-supersample-downscale / xywh / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + integer-viewbox + h2-fo-percent-int-viewbox + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 92,
    slug: "lab-toCanvas / leaf / integer-viewbox / h2-pin-line-height-from-live / mp-none / attr-none / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + integer-viewbox + h2-pin-line-height-from-live + base64-roundtrip",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 93,
    slug: "lab-toCanvas / leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-decode-safari-raf + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 94,
    slug: "lab-toCanvas / leaf / integer-viewbox / integer-snap-all-rects / tc-lab-draw-supersample-downscale / xywh / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + integer-viewbox + integer-snap-all-rects + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fo-shape-rendering-auto",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 95,
    slug: "lab-toCanvas / leaf / round-dims / rad-none / mp-none / attr-none / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + round-dims + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 96,
    slug: "lab-toCanvas / leaf / round-dims / h2-fo-percent-int-viewbox / tc-decode-safari-raf / xywh / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + round-dims + h2-fo-percent-int-viewbox + tc-decode-safari-raf + FO x/y/w/h +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 97,
    slug: "lab-toCanvas / leaf / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap / attr-none / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + round-dims + math-floor-viewbox-stash-frac + tc-lab-draw-create-image-bitmap + fe-color-matrix-identity",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 98,
    slug: "lab-toCanvas / leaf / round-dims / h2-flex-stretch-leaf-from-live / mp-none / xy / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + round-dims + h2-flex-stretch-leaf-from-live + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 99,
    slug: "lab-toCanvas / leaf / round-dims / integer-snap-all-rects / tc-decode-safari-raf / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + round-dims + integer-snap-all-rects + tc-decode-safari-raf + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 100,
    slug: "lab-toCanvas / leaf / round-dims / remove-fe-filters / tc-lab-draw-create-image-bitmap / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + round-dims + remove-fe-filters + tc-lab-draw-create-image-bitmap + FO x/y +0.0001",
    cssKey: "leaf",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave3-gen-e.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave3-gen-e.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.monkeypatch ? 'both' : 'both'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w3g-e-${num}`,
    label: `tc-lab-w3g-e #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave3 gen shard e; FO-raster lab-toCanvas combinator — no text bypass.`,
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  return recipe
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-gen-e.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

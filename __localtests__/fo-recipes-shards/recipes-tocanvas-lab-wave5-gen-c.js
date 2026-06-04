/**
 * Lab toCanvas wave5 generated shard (c) — combinatorial lab forks + structural knobs.
 * 100 recipes: tc-lab-w5g-c-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5g-c-*'
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

/** @type {{ n: number, slug: string, idea: string, cssKey: string, inject: string, rasterPatch: string, svgRootRound?: string | null, labPreRaster?: string | null, radicalPatch?: string | null, monkeypatch?: string | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas / baseline+leaf / raster / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xy / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 2,
    slug: "lab-toCanvas / h2+chromium / both / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 3,
    slug: "lab-toCanvas / h2+chromium / both / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / w-h / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO width/height +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 4,
    slug: "lab-toCanvas / h2+chromium / both / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / xy / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 5,
    slug: "lab-toCanvas / h2+chromium / both / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-create-image-bitmap / attr-none / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-create-image-bitmap + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 6,
    slug: "lab-toCanvas / h2+chromium / both / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / xywh / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO x/y/w/h +0.0001 + fe-morphology-identity",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 7,
    slug: "lab-toCanvas / h2+chromium / both / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / xy / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 8,
    slug: "lab-toCanvas / h2+chromium / both / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-two-stage / w-h / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-two-stage + FO width/height +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 9,
    slug: "lab-toCanvas / h2+chromium / both / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / xywh / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 10,
    slug: "lab-toCanvas / h2+chromium / both / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / attr-none / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 11,
    slug: "lab-toCanvas / h2+chromium / both / round-dims / pre-none / h2-pin-width-from-live / tc-lab-draw-h2-frac-draw / w-h / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + round-dims + h2-pin-width-from-live + tc-lab-draw-h2-frac-draw + FO width/height +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 12,
    slug: "lab-toCanvas / h2+chromium / both / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xy / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 13,
    slug: "lab-toCanvas / h2+chromium / both / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-safari-raf / attr-none / filter-empty-nop / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-safari-raf + filter-empty-nop",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 14,
    slug: "lab-toCanvas / h2+chromium / both / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / w-h / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + int-floor + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO width/height +0.0001 + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 15,
    slug: "lab-toCanvas / h2+chromium / both / int-floor / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / xy / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + int-floor + remove-fe-filters + tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 16,
    slug: "lab-toCanvas / h2+chromium / both / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-wrap / attr-none / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-wrap + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 17,
    slug: "lab-toCanvas / h2+chromium / both / int-floor / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject both + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO x/y/w/h +0.0001 + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 18,
    slug: "lab-toCanvas / h2+chromium / raster / root-none / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / xy / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + no svgRootRound + h2-fo-percent-int-viewbox + draw-image-pixelated + FO x/y +0.0001 + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 19,
    slug: "lab-toCanvas / h2+chromium / raster / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-delay / w-h / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + no svgRootRound + integer-snap-all-rects + tc-lab-mp-decode-interval-delay + FO width/height +0.0001 + fe-morphology-identity + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 20,
    slug: "lab-toCanvas / h2+chromium / raster / root-none / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / xywh / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fo-shape-rendering-auto",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-draw-image-round-all",
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
    n: 21,
    slug: "lab-toCanvas / h2+chromium / raster / root-none / device-grid-floor / integer-snap-all-rects / drawImage-wrap / attr-none / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + fe-merge-empty + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 22,
    slug: "lab-toCanvas / h2+chromium / raster / integer-viewbox / pre-none / rad-none / tc-lab-mp-canvas-backing-round / w-h / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + integer-viewbox + tc-lab-mp-canvas-backing-round + FO width/height +0.0001 + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 23,
    slug: "lab-toCanvas / h2+chromium / raster / integer-viewbox / pre-none / integer-snap-all-rects / mp-none / xy / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + integer-viewbox + integer-snap-all-rects + FO x/y +0.0001 + fe-merge-empty + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 24,
    slug: "lab-toCanvas / h2+chromium / raster / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-device-grid-floor / attr-none / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-device-grid-floor + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 25,
    slug: "lab-toCanvas / h2+chromium / raster / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-floor / w-h / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-floor + FO width/height +0.0001 + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 26,
    slug: "lab-toCanvas / h2+chromium / raster / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xy / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y +0.0001 + filter-empty-nop + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 27,
    slug: "lab-toCanvas / h2+chromium / raster / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + fe-color-matrix-identity",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 28,
    slug: "lab-toCanvas / h2+chromium / raster / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / xywh / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + round-dims + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO x/y/w/h +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 29,
    slug: "lab-toCanvas / h2+chromium / raster / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / xy / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 30,
    slug: "lab-toCanvas / h2+chromium / raster / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-supersample-downscale / w-h / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-supersample-downscale + FO width/height +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 31,
    slug: "lab-toCanvas / h2+chromium / raster / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
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
    n: 32,
    slug: "lab-toCanvas / h2+chromium / raster / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / attr-none / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + int-floor + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + fe-merge-empty + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 33,
    slug: "lab-toCanvas / h2+chromium / raster / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-two-stage / w-h / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-two-stage + FO width/height +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 34,
    slug: "lab-toCanvas / h2+chromium / raster / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / xywh / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
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
    n: 35,
    slug: "lab-toCanvas / full / both / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / attr-none / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + filter-empty-nop + base64-roundtrip",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 36,
    slug: "lab-toCanvas / full / both / root-none / pre-none / h2-pin-width-from-live / tc-lab-draw-h2-frac-draw / w-h / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + h2-pin-width-from-live + tc-lab-draw-h2-frac-draw + FO width/height +0.0001 + explicit-xmlns",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 37,
    slug: "lab-toCanvas / full / both / root-none / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xy / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + filter-empty-nop + strip-all-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 38,
    slug: "lab-toCanvas / full / both / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-safari-raf / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-safari-raf + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 39,
    slug: "lab-toCanvas / full / both / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / xywh / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 40,
    slug: "lab-toCanvas / full / both / integer-viewbox / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / xy / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + remove-fe-filters + tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 41,
    slug: "lab-toCanvas / full / both / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-prototype / w-h / fe-merge-empty / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-prototype + FO width/height +0.0001 + fe-merge-empty",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 42,
    slug: "lab-toCanvas / full / both / integer-viewbox / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / xywh / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
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
    n: 43,
    slug: "lab-toCanvas / full / both / round-dims / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / attr-none / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + round-dims + h2-fo-percent-int-viewbox + draw-image-pixelated + fe-merge-empty + explicit-xmlns",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 44,
    slug: "lab-toCanvas / full / both / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-delay / w-h / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + round-dims + integer-snap-all-rects + tc-lab-mp-decode-interval-delay + FO width/height +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 45,
    slug: "lab-toCanvas / full / both / round-dims / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / xywh / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + round-dims + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO x/y/w/h +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
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
    n: 46,
    slug: "lab-toCanvas / full / both / round-dims / device-grid-floor / integer-snap-all-rects / drawImage-wrap / attr-none / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + filter-empty-nop + strip-xml-declaration",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 47,
    slug: "lab-toCanvas / full / both / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-round / w-h / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + int-floor + tc-lab-mp-canvas-backing-round + FO width/height +0.0001 + strip-identity-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 48,
    slug: "lab-toCanvas / full / both / int-floor / pre-none / integer-snap-all-rects / mp-none / xy / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + int-floor + integer-snap-all-rects + FO x/y +0.0001 + fe-morphology-identity",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 49,
    slug: "lab-toCanvas / full / both / int-floor / device-grid-floor / rad-none / tc-lab-draw-device-grid-floor / attr-none / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + int-floor + labPreRaster device-grid-floor + tc-lab-draw-device-grid-floor + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 50,
    slug: "lab-toCanvas / full / both / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-floor / xywh / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-floor + FO x/y/w/h +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 51,
    slug: "lab-toCanvas / full / both / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xy / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject both + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y +0.0001 + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 52,
    slug: "lab-toCanvas / full / raster / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / w-h / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + FO width/height +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 53,
    slug: "lab-toCanvas / full / raster / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / xywh / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 54,
    slug: "lab-toCanvas / full / raster / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / attr-none / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + fe-merge-empty + strip-identity-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 55,
    slug: "lab-toCanvas / full / raster / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-supersample-downscale / w-h / filter-empty-nop / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-supersample-downscale + FO width/height +0.0001 + filter-empty-nop",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 56,
    slug: "lab-toCanvas / full / raster / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / xywh / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO x/y/w/h +0.0001 + base64-roundtrip",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
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
    n: 57,
    slug: "lab-toCanvas / full / raster / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / attr-none / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + filter-empty-nop + explicit-xmlns",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 58,
    slug: "lab-toCanvas / full / raster / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-two-stage / w-h / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-two-stage + FO width/height +0.0001 + strip-all-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 59,
    slug: "lab-toCanvas / full / raster / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / xy / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y +0.0001 + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 60,
    slug: "lab-toCanvas / full / raster / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / attr-none / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 61,
    slug: "lab-toCanvas / full / raster / round-dims / pre-none / h2-pin-width-from-live / tc-lab-draw-h2-frac-draw / xywh / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + round-dims + h2-pin-width-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-identity-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 62,
    slug: "lab-toCanvas / full / raster / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xy / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + fo-shape-rendering-auto",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 63,
    slug: "lab-toCanvas / full / raster / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-wrap / w-h / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-wrap + FO width/height +0.0001 + fe-merge-empty + base64-roundtrip",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 64,
    slug: "lab-toCanvas / full / raster / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / xywh / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + int-floor + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 65,
    slug: "lab-toCanvas / full / raster / int-floor / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / attr-none / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + int-floor + remove-fe-filters + tc-lab-mp-draw-image-round-all + fe-merge-empty + strip-all-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 66,
    slug: "lab-toCanvas / full / raster / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-prototype / w-h / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-prototype + FO width/height +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 67,
    slug: "lab-toCanvas / full / raster / int-floor / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / xywh / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO x/y/w/h +0.0001 + strip-xml-declaration",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 68,
    slug: "lab-toCanvas-decode / none / both / root-none / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / attr-none / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + no svgRootRound + h2-fo-percent-int-viewbox + draw-image-pixelated + filter-empty-nop + strip-identity-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 69,
    slug: "lab-toCanvas-decode / none / both / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-delay / w-h / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + no svgRootRound + integer-snap-all-rects + tc-lab-mp-decode-interval-delay + FO width/height +0.0001 + fe-color-matrix-identity",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 70,
    slug: "lab-toCanvas-decode / none / both / root-none / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / xy / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO x/y +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 71,
    slug: "lab-toCanvas-decode / none / both / root-none / device-grid-floor / integer-snap-all-rects / drawImage-wrap / attr-none / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 72,
    slug: "lab-toCanvas-decode / none / both / integer-viewbox / pre-none / rad-none / tc-lab-mp-canvas-backing-round / xywh / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + integer-viewbox + tc-lab-mp-canvas-backing-round + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 73,
    slug: "lab-toCanvas-decode / none / both / integer-viewbox / pre-none / integer-snap-all-rects / mp-none / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + integer-viewbox + integer-snap-all-rects + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 74,
    slug: "lab-toCanvas-decode / none / both / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap-pixelated / w-h / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap-pixelated + FO width/height +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 75,
    slug: "lab-toCanvas-decode / none / both / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-floor / xywh / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-floor + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 76,
    slug: "lab-toCanvas-decode / none / both / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y +0.0001",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 77,
    slug: "lab-toCanvas-decode / none / both / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / w-h / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + FO width/height +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 78,
    slug: "lab-toCanvas-decode / none / both / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / xywh / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + round-dims + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO x/y/w/h +0.0001 + explicit-xmlns",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 79,
    slug: "lab-toCanvas-decode / none / both / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / attr-none / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + filter-empty-nop + strip-all-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 80,
    slug: "lab-toCanvas-decode / none / both / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-supersample-downscale / w-h / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-supersample-downscale + FO width/height +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 81,
    slug: "lab-toCanvas-decode / none / both / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / xy / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO x/y +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 82,
    slug: "lab-toCanvas-decode / none / both / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / attr-none / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + int-floor + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 83,
    slug: "lab-toCanvas-decode / none / both / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-two-stage / xywh / fe-merge-empty / markup-none",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + fe-merge-empty",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 84,
    slug: "lab-toCanvas-decode / none / both / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "none",
    inject: "both",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 85,
    slug: "lab-toCanvas-decode / none / raster / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-safari-raf / w-h / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-safari-raf + FO width/height +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 86,
    slug: "lab-toCanvas-decode / none / raster / root-none / pre-none / h2-pin-width-from-live / tc-lab-draw-h2-frac-draw / xywh / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + no svgRootRound + h2-pin-width-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 87,
    slug: "lab-toCanvas-decode / none / raster / root-none / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 88,
    slug: "lab-toCanvas-decode / none / raster / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-wrap / w-h / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-wrap + FO width/height +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 89,
    slug: "lab-toCanvas-decode / none / raster / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / xywh / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + integer-viewbox + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO x/y/w/h +0.0001 + strip-identity-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 90,
    slug: "lab-toCanvas-decode / none / raster / integer-viewbox / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / attr-none / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + integer-viewbox + remove-fe-filters + tc-lab-mp-draw-image-round-all + fe-morphology-identity",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 91,
    slug: "lab-toCanvas-decode / none / raster / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-prototype / w-h / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-prototype + FO width/height +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 92,
    slug: "lab-toCanvas-decode / none / raster / integer-viewbox / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / xy / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO x/y +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 93,
    slug: "lab-toCanvas-decode / none / raster / round-dims / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / attr-none / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + round-dims + h2-fo-percent-int-viewbox + draw-image-pixelated + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 94,
    slug: "lab-toCanvas-decode / none / raster / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-delay / xywh / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + round-dims + integer-snap-all-rects + tc-lab-mp-decode-interval-delay + FO x/y/w/h +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 95,
    slug: "lab-toCanvas-decode / none / raster / round-dims / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / xy / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + round-dims + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO x/y +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 96,
    slug: "lab-toCanvas-decode / none / raster / round-dims / device-grid-floor / integer-snap-all-rects / tc-lab-draw-device-grid-floor / w-h / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-device-grid-floor + FO width/height +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 97,
    slug: "lab-toCanvas-decode / none / raster / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-round / xywh / filter-empty-nop / markup-none",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + int-floor + tc-lab-mp-canvas-backing-round + FO x/y/w/h +0.0001 + filter-empty-nop",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 98,
    slug: "lab-toCanvas-decode / none / raster / int-floor / pre-none / integer-snap-all-rects / mp-none / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + int-floor + integer-snap-all-rects + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 99,
    slug: "lab-toCanvas-decode / none / raster / int-floor / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap-pixelated / w-h / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + int-floor + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap-pixelated + FO width/height +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 100,
    slug: "lab-toCanvas-decode / none / raster / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-floor / xywh / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas-decode fork + no extra CSS + inject raster + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-floor + FO x/y/w/h +0.0001 + strip-all-transforms",
    cssKey: "none",
    inject: "raster",
    rasterPatch: "lab-toCanvas-decode",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-c.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-c.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w5g-c-${num}`,
    label: `tc-lab-w5g-c #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: spec.inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave5 gen shard c; FO-raster lab-toCanvas combinator — no text bypass.`,
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.labPreRaster) recipe.labPreRaster = spec.labPreRaster
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  return recipe
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave5-gen-c.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

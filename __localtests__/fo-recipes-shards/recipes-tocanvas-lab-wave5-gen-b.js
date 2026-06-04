/**
 * Lab toCanvas wave5 generated shard (b) — combinatorial lab forks + structural knobs.
 * 100 recipes: tc-lab-w5g-b-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5g-b-*'
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
    slug: "lab-toCanvas / h2 / raster / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / w-h / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + H2_RASTER_NORMALIZE_CSS + inject raster + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO width/height +0.0001 + fe-color-matrix-identity",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 2,
    slug: "lab-toCanvas / chromium / both / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 3,
    slug: "lab-toCanvas / chromium / both / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-floor / attr-none / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-floor + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 4,
    slug: "lab-toCanvas / chromium / both / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / xywh / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
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
    n: 5,
    slug: "lab-toCanvas / chromium / both / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 6,
    slug: "lab-toCanvas / chromium / both / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / w-h / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO width/height +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 7,
    slug: "lab-toCanvas / chromium / both / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / xywh / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
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
    n: 8,
    slug: "lab-toCanvas / chromium / both / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-supersample-downscale / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-supersample-downscale + FO x/y +0.0001",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 9,
    slug: "lab-toCanvas / chromium / both / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / w-h / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO width/height +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 10,
    slug: "lab-toCanvas / chromium / both / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / xywh / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + FO x/y/w/h +0.0001 + explicit-xmlns",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
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
    n: 11,
    slug: "lab-toCanvas / chromium / both / round-dims / pre-none / h2-pin-width-from-live / tc-lab-draw-two-stage / attr-none / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + round-dims + h2-pin-width-from-live + tc-lab-draw-two-stage + filter-empty-nop + strip-all-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 12,
    slug: "lab-toCanvas / chromium / both / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / w-h / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO width/height +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 13,
    slug: "lab-toCanvas / chromium / both / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-safari-raf / xy / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-safari-raf + FO x/y +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 14,
    slug: "lab-toCanvas / chromium / both / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / attr-none / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + int-floor + math-floor-viewbox-stash-frac + tc-lab-draw-h2-frac-draw + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 15,
    slug: "lab-toCanvas / chromium / both / int-floor / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / xywh / fe-merge-empty / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + int-floor + remove-fe-filters + tc-lab-mp-draw-image-round-all + FO x/y/w/h +0.0001 + fe-merge-empty",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
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
    n: 16,
    slug: "lab-toCanvas / chromium / both / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-wrap / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-wrap + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 17,
    slug: "lab-toCanvas / chromium / both / int-floor / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / w-h / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject both + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO width/height +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 18,
    slug: "lab-toCanvas / chromium / raster / root-none / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / xywh / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + no svgRootRound + h2-fo-percent-int-viewbox + draw-image-pixelated + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
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
    n: 19,
    slug: "lab-toCanvas / chromium / raster / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-prototype / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + no svgRootRound + integer-snap-all-rects + tc-lab-mp-decode-interval-prototype + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 20,
    slug: "lab-toCanvas / chromium / raster / root-none / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / w-h / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO width/height +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 21,
    slug: "lab-toCanvas / chromium / raster / root-none / device-grid-floor / integer-snap-all-rects / drawImage-wrap / xywh / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + FO x/y/w/h +0.0001 + strip-identity-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
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
    n: 22,
    slug: "lab-toCanvas / chromium / raster / integer-viewbox / pre-none / rad-none / tc-lab-mp-decode-interval-delay / attr-none / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + integer-viewbox + tc-lab-mp-decode-interval-delay + fe-morphology-identity",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 23,
    slug: "lab-toCanvas / chromium / raster / integer-viewbox / pre-none / integer-snap-all-rects / mp-none / w-h / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + integer-viewbox + integer-snap-all-rects + FO width/height +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 24,
    slug: "lab-toCanvas / chromium / raster / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-device-grid-floor / xy / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 25,
    slug: "lab-toCanvas / chromium / raster / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-round / attr-none / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-round + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 26,
    slug: "lab-toCanvas / chromium / raster / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xywh / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y/w/h +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
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
    n: 27,
    slug: "lab-toCanvas / chromium / raster / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 28,
    slug: "lab-toCanvas / chromium / raster / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / w-h / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + round-dims + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO width/height +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 29,
    slug: "lab-toCanvas / chromium / raster / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / xywh / filter-empty-nop / markup-none",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y/w/h +0.0001 + filter-empty-nop",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
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
    n: 30,
    slug: "lab-toCanvas / chromium / raster / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-create-image-bitmap / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 31,
    slug: "lab-toCanvas / chromium / raster / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / w-h / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO width/height +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 32,
    slug: "lab-toCanvas / chromium / raster / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / xywh / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + int-floor + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + FO x/y/w/h +0.0001 + strip-all-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 33,
    slug: "lab-toCanvas / chromium / raster / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-supersample-downscale / attr-none / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-supersample-downscale + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 34,
    slug: "lab-toCanvas / chromium / raster / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / w-h / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO width/height +0.0001 + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 35,
    slug: "lab-toCanvas / leaf / both / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / xy / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + FO x/y +0.0001 + fe-morphology-identity + strip-identity-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 36,
    slug: "lab-toCanvas / leaf / both / root-none / pre-none / h2-pin-width-from-live / tc-lab-draw-two-stage / attr-none / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + no svgRootRound + h2-pin-width-from-live + tc-lab-draw-two-stage + fo-shape-rendering-auto",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 37,
    slug: "lab-toCanvas / leaf / both / root-none / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xywh / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y/w/h +0.0001 + fe-merge-empty + base64-roundtrip",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 38,
    slug: "lab-toCanvas / leaf / both / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-safari-raf / xy / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-safari-raf + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 39,
    slug: "lab-toCanvas / leaf / both / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / w-h / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + integer-viewbox + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO width/height +0.0001 + fe-merge-empty + strip-all-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 40,
    slug: "lab-toCanvas / leaf / both / integer-viewbox / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / xywh / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + integer-viewbox + remove-fe-filters + tc-lab-mp-draw-image-round-all + FO x/y/w/h +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 41,
    slug: "lab-toCanvas / leaf / both / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-wrap / xy / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-wrap + FO x/y +0.0001 + strip-xml-declaration",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 42,
    slug: "lab-toCanvas / leaf / both / integer-viewbox / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / w-h / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO width/height +0.0001 + filter-empty-nop + strip-identity-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 43,
    slug: "lab-toCanvas / leaf / both / round-dims / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / xywh / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + round-dims + h2-fo-percent-int-viewbox + draw-image-pixelated + FO x/y/w/h +0.0001 + fe-color-matrix-identity",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
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
    n: 44,
    slug: "lab-toCanvas / leaf / both / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-prototype / attr-none / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + round-dims + integer-snap-all-rects + tc-lab-mp-decode-interval-prototype + fe-morphology-identity + base64-roundtrip",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 45,
    slug: "lab-toCanvas / leaf / both / round-dims / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / w-h / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + round-dims + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO width/height +0.0001 + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 46,
    slug: "lab-toCanvas / leaf / both / round-dims / device-grid-floor / integer-snap-all-rects / drawImage-wrap / xy / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + FO x/y +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 47,
    slug: "lab-toCanvas / leaf / both / int-floor / pre-none / rad-none / tc-lab-mp-decode-interval-delay / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + int-floor + tc-lab-mp-decode-interval-delay + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 48,
    slug: "lab-toCanvas / leaf / both / int-floor / pre-none / integer-snap-all-rects / mp-none / xywh / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + int-floor + integer-snap-all-rects + FO x/y/w/h +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 49,
    slug: "lab-toCanvas / leaf / both / int-floor / device-grid-floor / rad-none / tc-lab-draw-device-grid-floor / xy / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + int-floor + labPreRaster device-grid-floor + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 50,
    slug: "lab-toCanvas / leaf / both / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-round / attr-none / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-round",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 51,
    slug: "lab-toCanvas / leaf / both / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xywh / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject both + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y/w/h +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 52,
    slug: "lab-toCanvas / leaf / raster / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + explicit-xmlns",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 53,
    slug: "lab-toCanvas / leaf / raster / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / w-h / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO width/height +0.0001 + filter-empty-nop + strip-all-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 54,
    slug: "lab-toCanvas / leaf / raster / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
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
    n: 55,
    slug: "lab-toCanvas / leaf / raster / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-create-image-bitmap / attr-none / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-create-image-bitmap + fe-morphology-identity + strip-xml-declaration",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 56,
    slug: "lab-toCanvas / leaf / raster / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / w-h / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO width/height +0.0001 + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 57,
    slug: "lab-toCanvas / leaf / raster / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / xy / fe-merge-empty / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + FO x/y +0.0001 + fe-merge-empty",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 58,
    slug: "lab-toCanvas / leaf / raster / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-supersample-downscale / attr-none / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-supersample-downscale + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 59,
    slug: "lab-toCanvas / leaf / raster / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / xywh / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "leaf",
    inject: "raster",
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
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 60,
    slug: "lab-toCanvas / leaf / raster / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / xy / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + FO x/y +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 61,
    slug: "lab-toCanvas / leaf / raster / round-dims / pre-none / h2-pin-width-from-live / tc-lab-draw-two-stage / attr-none / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + round-dims + h2-pin-width-from-live + tc-lab-draw-two-stage + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 62,
    slug: "lab-toCanvas / leaf / raster / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xywh / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y/w/h +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 63,
    slug: "lab-toCanvas / leaf / raster / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-safari-raf / xy / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-safari-raf + FO x/y +0.0001 + strip-identity-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 64,
    slug: "lab-toCanvas / leaf / raster / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / w-h / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + int-floor + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO width/height +0.0001 + fe-morphology-identity",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 65,
    slug: "lab-toCanvas / leaf / raster / int-floor / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / xywh / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + int-floor + remove-fe-filters + tc-lab-mp-draw-image-round-all + FO x/y/w/h +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
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
    n: 66,
    slug: "lab-toCanvas / leaf / raster / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-wrap / attr-none / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-wrap + fe-morphology-identity + explicit-xmlns",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 67,
    slug: "lab-toCanvas / leaf / raster / int-floor / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / w-h / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + flex leaf strut + inject raster + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO width/height +0.0001 + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 68,
    slug: "lab-toCanvas / baseline+leaf / both / root-none / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / xy / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + no svgRootRound + h2-fo-percent-int-viewbox + draw-image-pixelated + FO x/y +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 69,
    slug: "lab-toCanvas / baseline+leaf / both / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-prototype / attr-none / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + no svgRootRound + integer-snap-all-rects + tc-lab-mp-decode-interval-prototype + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 70,
    slug: "lab-toCanvas / baseline+leaf / both / root-none / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / xywh / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
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
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 71,
    slug: "lab-toCanvas / baseline+leaf / both / root-none / device-grid-floor / integer-snap-all-rects / drawImage-wrap / xy / filter-empty-nop / markup-none",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + FO x/y +0.0001 + filter-empty-nop",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 72,
    slug: "lab-toCanvas / baseline+leaf / both / integer-viewbox / pre-none / rad-none / tc-lab-mp-decode-interval-delay / attr-none / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + integer-viewbox + tc-lab-mp-decode-interval-delay + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 73,
    slug: "lab-toCanvas / baseline+leaf / both / integer-viewbox / pre-none / integer-snap-all-rects / mp-none / xywh / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + integer-viewbox + integer-snap-all-rects + FO x/y/w/h +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 74,
    slug: "lab-toCanvas / baseline+leaf / both / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-device-grid-floor / xy / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 75,
    slug: "lab-toCanvas / baseline+leaf / both / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-floor / w-h / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-floor + FO width/height +0.0001 + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 76,
    slug: "lab-toCanvas / baseline+leaf / both / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-create-image-bitmap-high / xywh / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-create-image-bitmap-high + FO x/y/w/h +0.0001 + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 77,
    slug: "lab-toCanvas / baseline+leaf / both / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + fe-morphology-identity + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 78,
    slug: "lab-toCanvas / baseline+leaf / both / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-canvas-backing-ceil / w-h / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + round-dims + parse-svg-dom-reserialize + tc-lab-mp-canvas-backing-ceil + FO width/height +0.0001 + fo-shape-rendering-auto",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 79,
    slug: "lab-toCanvas / baseline+leaf / both / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-measure-text-prime-draw / xy / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y +0.0001 + fe-merge-empty + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 80,
    slug: "lab-toCanvas / baseline+leaf / both / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-create-image-bitmap + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 81,
    slug: "lab-toCanvas / baseline+leaf / both / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-smoothing-off / xywh / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-smoothing-off + FO x/y/w/h +0.0001 + fe-merge-empty + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
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
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 82,
    slug: "lab-toCanvas / baseline+leaf / both / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-ctx-transform-reset-draw / xy / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + int-floor + h2-pin-width-from-live + tc-lab-mp-ctx-transform-reset-draw + FO x/y +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 83,
    slug: "lab-toCanvas / baseline+leaf / both / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-supersample-downscale / attr-none / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-supersample-downscale + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 84,
    slug: "lab-toCanvas / baseline+leaf / both / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-floor-dest-y / xywh / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + filter-empty-nop + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
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
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 85,
    slug: "lab-toCanvas / baseline+leaf / raster / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-twice / xy / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-twice + FO x/y +0.0001 + fe-color-matrix-identity",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 86,
    slug: "lab-toCanvas / baseline+leaf / raster / root-none / pre-none / h2-pin-width-from-live / tc-lab-draw-h2-frac-draw / w-h / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + no svgRootRound + h2-pin-width-from-live + tc-lab-draw-h2-frac-draw + FO width/height +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 87,
    slug: "lab-toCanvas / baseline+leaf / raster / root-none / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-ceil-all / xywh / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-ceil-all + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 88,
    slug: "lab-toCanvas / baseline+leaf / raster / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-safari-raf / attr-none / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-safari-raf + fe-morphology-identity + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 89,
    slug: "lab-toCanvas / baseline+leaf / raster / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-decode-safari-raf / w-h / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + integer-viewbox + math-floor-viewbox-stash-frac + tc-decode-safari-raf + FO width/height +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 90,
    slug: "lab-toCanvas / baseline+leaf / raster / integer-viewbox / pre-none / remove-fe-filters / tc-lab-mp-draw-image-round-all / xy / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + integer-viewbox + remove-fe-filters + tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 91,
    slug: "lab-toCanvas / baseline+leaf / raster / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-wrap / attr-none / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-wrap + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 92,
    slug: "lab-toCanvas / baseline+leaf / raster / integer-viewbox / device-grid-floor / remove-fe-filters / tc-canvas-backing-ceil / w-h / fosvg-none / markup-none",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-canvas-backing-ceil + FO width/height +0.0001",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 93,
    slug: "lab-toCanvas / baseline+leaf / raster / round-dims / pre-none / h2-fo-percent-int-viewbox / draw-image-pixelated / xy / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + round-dims + h2-fo-percent-int-viewbox + draw-image-pixelated + FO x/y +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 94,
    slug: "lab-toCanvas / baseline+leaf / raster / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-decode-interval-prototype / attr-none / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + round-dims + integer-snap-all-rects + tc-lab-mp-decode-interval-prototype + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 95,
    slug: "lab-toCanvas / baseline+leaf / raster / round-dims / device-grid-floor / h2-fo-percent-int-viewbox / tc-draw-image-round-all / xywh / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + round-dims + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-draw-image-round-all + FO x/y/w/h +0.0001 + filter-empty-nop + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
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
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 96,
    slug: "lab-toCanvas / baseline+leaf / raster / round-dims / device-grid-floor / integer-snap-all-rects / drawImage-wrap / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + drawImage-wrap + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 97,
    slug: "lab-toCanvas / baseline+leaf / raster / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-round / w-h / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + int-floor + tc-lab-mp-canvas-backing-round + FO width/height +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 98,
    slug: "lab-toCanvas / baseline+leaf / raster / int-floor / pre-none / integer-snap-all-rects / mp-none / xywh / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + int-floor + integer-snap-all-rects + FO x/y/w/h +0.0001 + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 99,
    slug: "lab-toCanvas / baseline+leaf / raster / int-floor / device-grid-floor / rad-none / tc-lab-draw-device-grid-floor / attr-none / fe-merge-empty / markup-none",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + int-floor + labPreRaster device-grid-floor + tc-lab-draw-device-grid-floor + fe-merge-empty",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 100,
    slug: "lab-toCanvas / baseline+leaf / raster / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-floor / w-h / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas fork + FO baseline + leaf + inject raster + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-floor + FO width/height +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-b.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-b.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w5g-b-${num}`,
    label: `tc-lab-w5g-b #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: spec.inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave5 gen shard b; FO-raster lab-toCanvas combinator — no text bypass.`,
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
    `recipes-tocanvas-lab-wave5-gen-b.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

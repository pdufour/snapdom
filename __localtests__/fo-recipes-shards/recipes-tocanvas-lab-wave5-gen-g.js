/**
 * Lab toCanvas wave5 generated shard (g) — combinatorial lab forks + structural knobs.
 * 100 recipes: tc-lab-w5g-g-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5g-g-*'
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
    slug: "lab-toCanvas-frac / baseline / raster / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-measure-text-prime-draw / attr-none / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO_BASELINE_CSS + inject raster + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-measure-text-prime-draw + fe-merge-empty + strip-all-transforms",
    cssKey: "baseline",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 2,
    slug: "lab-toCanvas-frac / h2 / both / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / w-h / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO width/height +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 3,
    slug: "lab-toCanvas-frac / h2 / both / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / xywh / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + FO x/y/w/h +0.0001 + strip-xml-declaration",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
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
    n: 4,
    slug: "lab-toCanvas-frac / h2 / both / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-ctx-transform-reset-draw / attr-none / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-ctx-transform-reset-draw + filter-empty-nop + strip-identity-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 5,
    slug: "lab-toCanvas-frac / h2 / both / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / w-h / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO width/height +0.0001 + fe-color-matrix-identity",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 6,
    slug: "lab-toCanvas-frac / h2 / both / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-floor-dest-y / xy / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 7,
    slug: "lab-toCanvas-frac / h2 / both / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-twice / attr-none / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-decode-twice + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 8,
    slug: "lab-toCanvas-frac / h2 / both / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
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
    n: 9,
    slug: "lab-toCanvas-frac / h2 / both / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-ceil-all / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 10,
    slug: "lab-toCanvas-frac / h2 / both / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / w-h / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO width/height +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 11,
    slug: "lab-toCanvas-frac / h2 / both / round-dims / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / xywh / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + round-dims + h2-pin-width-from-live + tc-decode-safari-raf + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
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
    n: 12,
    slug: "lab-toCanvas-frac / h2 / both / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-round-all + FO x/y +0.0001",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 13,
    slug: "lab-toCanvas-frac / h2 / both / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / w-h / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO width/height +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 14,
    slug: "lab-toCanvas-frac / h2 / both / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xywh / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + int-floor + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y/w/h +0.0001 + explicit-xmlns",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
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
    n: 15,
    slug: "lab-toCanvas-frac / h2 / both / int-floor / pre-none / remove-fe-filters / draw-image-pixelated / attr-none / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + int-floor + remove-fe-filters + draw-image-pixelated + filter-empty-nop + strip-all-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 16,
    slug: "lab-toCanvas-frac / h2 / both / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / w-h / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO width/height +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 17,
    slug: "lab-toCanvas-frac / h2 / both / int-floor / device-grid-floor / remove-fe-filters / tc-draw-image-round-all / xy / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject both + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-draw-image-round-all + FO x/y +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "h2",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 18,
    slug: "lab-toCanvas-frac / h2 / raster / root-none / pre-none / h2-fo-percent-int-viewbox / drawImage-wrap / attr-none / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + no svgRootRound + h2-fo-percent-int-viewbox + drawImage-wrap + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 19,
    slug: "lab-toCanvas-frac / h2 / raster / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / xywh / fe-merge-empty / markup-none",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + no svgRootRound + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + FO x/y/w/h +0.0001 + fe-merge-empty",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
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
    n: 20,
    slug: "lab-toCanvas-frac / h2 / raster / root-none / device-grid-floor / h2-fo-percent-int-viewbox / mp-none / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 21,
    slug: "lab-toCanvas-frac / h2 / raster / root-none / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / w-h / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO width/height +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 22,
    slug: "lab-toCanvas-frac / h2 / raster / integer-viewbox / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / xywh / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + integer-viewbox + tc-lab-mp-canvas-backing-floor + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
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
    n: 23,
    slug: "lab-toCanvas-frac / h2 / raster / integer-viewbox / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-create-image-bitmap-high / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-mp-create-image-bitmap-high + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 24,
    slug: "lab-toCanvas-frac / h2 / raster / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / w-h / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO width/height +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 25,
    slug: "lab-toCanvas-frac / h2 / raster / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / xywh / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + FO x/y/w/h +0.0001 + strip-identity-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
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
    n: 26,
    slug: "lab-toCanvas-frac / h2 / raster / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-measure-text-prime-draw / attr-none / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-measure-text-prime-draw + fe-morphology-identity",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 27,
    slug: "lab-toCanvas-frac / h2 / raster / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / w-h / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO width/height +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 28,
    slug: "lab-toCanvas-frac / h2 / raster / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / xy / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + round-dims + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + FO x/y +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 29,
    slug: "lab-toCanvas-frac / h2 / raster / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-ctx-transform-reset-draw / attr-none / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-ctx-transform-reset-draw + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 30,
    slug: "lab-toCanvas-frac / h2 / raster / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xywh / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
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
    n: 31,
    slug: "lab-toCanvas-frac / h2 / raster / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-floor-dest-y / xy / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 32,
    slug: "lab-toCanvas-frac / h2 / raster / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / w-h / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + int-floor + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO width/height +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 33,
    slug: "lab-toCanvas-frac / h2 / raster / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / filter-empty-nop / markup-none",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + filter-empty-nop",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
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
    n: 34,
    slug: "lab-toCanvas-frac / h2 / raster / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-ceil-all / xy / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2_RASTER_NORMALIZE_CSS + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + base64-roundtrip",
    cssKey: "h2",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 35,
    slug: "lab-toCanvas-frac / chromium / both / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / w-h / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO width/height +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 36,
    slug: "lab-toCanvas-frac / chromium / both / root-none / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / xywh / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + no svgRootRound + h2-pin-width-from-live + tc-decode-safari-raf + FO x/y/w/h +0.0001 + strip-all-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
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
    n: 37,
    slug: "lab-toCanvas-frac / chromium / both / root-none / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / attr-none / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-round-all + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 38,
    slug: "lab-toCanvas-frac / chromium / both / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / w-h / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO width/height +0.0001 + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 39,
    slug: "lab-toCanvas-frac / chromium / both / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + integer-viewbox + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fe-morphology-identity + strip-identity-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 40,
    slug: "lab-toCanvas-frac / chromium / both / integer-viewbox / pre-none / remove-fe-filters / draw-image-pixelated / attr-none / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + integer-viewbox + remove-fe-filters + draw-image-pixelated + fo-shape-rendering-auto",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 41,
    slug: "lab-toCanvas-frac / chromium / both / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xywh / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y/w/h +0.0001 + fe-merge-empty + base64-roundtrip",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
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
    n: 42,
    slug: "lab-toCanvas-frac / chromium / both / integer-viewbox / device-grid-floor / remove-fe-filters / tc-draw-image-round-all / xy / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-draw-image-round-all + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 43,
    slug: "lab-toCanvas-frac / chromium / both / round-dims / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / w-h / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + round-dims + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO width/height +0.0001 + fe-merge-empty + strip-all-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 44,
    slug: "lab-toCanvas-frac / chromium / both / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / xywh / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + round-dims + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + FO x/y/w/h +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
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
    n: 45,
    slug: "lab-toCanvas-frac / chromium / both / round-dims / device-grid-floor / h2-fo-percent-int-viewbox / mp-none / xy / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + round-dims + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + FO x/y +0.0001 + strip-xml-declaration",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 46,
    slug: "lab-toCanvas-frac / chromium / both / round-dims / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / w-h / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO width/height +0.0001 + filter-empty-nop + strip-identity-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 47,
    slug: "lab-toCanvas-frac / chromium / both / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / xywh / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + int-floor + tc-lab-mp-canvas-backing-floor + FO x/y/w/h +0.0001 + fe-color-matrix-identity",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
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
    n: 48,
    slug: "lab-toCanvas-frac / chromium / both / int-floor / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-create-image-bitmap-high / attr-none / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-create-image-bitmap-high + fe-morphology-identity + base64-roundtrip",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 49,
    slug: "lab-toCanvas-frac / chromium / both / int-floor / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / w-h / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + int-floor + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO width/height +0.0001 + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 50,
    slug: "lab-toCanvas-frac / chromium / both / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / xy / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + FO x/y +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 51,
    slug: "lab-toCanvas-frac / chromium / both / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-measure-text-prime-draw / attr-none / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject both + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-measure-text-prime-draw + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 52,
    slug: "lab-toCanvas-frac / chromium / raster / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
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
    n: 53,
    slug: "lab-toCanvas-frac / chromium / raster / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / xy / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + FO x/y +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 54,
    slug: "lab-toCanvas-frac / chromium / raster / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-ctx-transform-reset-draw / attr-none / fosvg-none / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-ctx-transform-reset-draw",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 55,
    slug: "lab-toCanvas-frac / chromium / raster / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xywh / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
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
    n: 56,
    slug: "lab-toCanvas-frac / chromium / raster / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-floor-dest-y / xy / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-floor-dest-y + FO x/y +0.0001 + explicit-xmlns",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 57,
    slug: "lab-toCanvas-frac / chromium / raster / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / w-h / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO width/height +0.0001 + filter-empty-nop + strip-all-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 58,
    slug: "lab-toCanvas-frac / chromium / raster / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
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
    n: 59,
    slug: "lab-toCanvas-frac / chromium / raster / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-ceil-all / attr-none / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-ceil-all + fe-morphology-identity + strip-xml-declaration",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 60,
    slug: "lab-toCanvas-frac / chromium / raster / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / w-h / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO width/height +0.0001 + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 61,
    slug: "lab-toCanvas-frac / chromium / raster / round-dims / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / xy / fe-merge-empty / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + round-dims + h2-pin-width-from-live + tc-decode-safari-raf + FO x/y +0.0001 + fe-merge-empty",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 62,
    slug: "lab-toCanvas-frac / chromium / raster / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / attr-none / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-round-all + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 63,
    slug: "lab-toCanvas-frac / chromium / raster / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / xywh / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO x/y/w/h +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
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
    n: 64,
    slug: "lab-toCanvas-frac / chromium / raster / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + int-floor + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 65,
    slug: "lab-toCanvas-frac / chromium / raster / int-floor / pre-none / remove-fe-filters / draw-image-pixelated / attr-none / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + int-floor + remove-fe-filters + draw-image-pixelated + explicit-xmlns-strip-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 66,
    slug: "lab-toCanvas-frac / chromium / raster / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xywh / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y/w/h +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
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
    n: 67,
    slug: "lab-toCanvas-frac / chromium / raster / int-floor / device-grid-floor / remove-fe-filters / tc-draw-image-round-all / xy / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + Chromium copy + inject raster + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-draw-image-round-all + FO x/y +0.0001 + strip-identity-transforms",
    cssKey: "chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 68,
    slug: "lab-toCanvas-frac / leaf / both / root-none / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / w-h / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO width/height +0.0001 + fe-morphology-identity",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 69,
    slug: "lab-toCanvas-frac / leaf / both / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / xywh / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + no svgRootRound + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + FO x/y/w/h +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
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
    n: 70,
    slug: "lab-toCanvas-frac / leaf / both / root-none / device-grid-floor / h2-fo-percent-int-viewbox / mp-none / attr-none / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + fe-morphology-identity + explicit-xmlns",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 71,
    slug: "lab-toCanvas-frac / leaf / both / root-none / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / w-h / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO width/height +0.0001 + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 72,
    slug: "lab-toCanvas-frac / leaf / both / integer-viewbox / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / xy / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + integer-viewbox + tc-lab-mp-canvas-backing-floor + FO x/y +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 73,
    slug: "lab-toCanvas-frac / leaf / both / integer-viewbox / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-create-image-bitmap-high / attr-none / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-mp-create-image-bitmap-high + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 74,
    slug: "lab-toCanvas-frac / leaf / both / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / xywh / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
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
    n: 75,
    slug: "lab-toCanvas-frac / leaf / both / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / xy / filter-empty-nop / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + FO x/y +0.0001 + filter-empty-nop",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 76,
    slug: "lab-toCanvas-frac / leaf / both / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-measure-text-prime-draw / attr-none / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-measure-text-prime-draw + base64-roundtrip",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 77,
    slug: "lab-toCanvas-frac / leaf / both / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
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
    n: 78,
    slug: "lab-toCanvas-frac / leaf / both / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / xy / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + round-dims + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + FO x/y +0.0001 + strip-all-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 79,
    slug: "lab-toCanvas-frac / leaf / both / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / w-h / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-decode-twice + FO width/height +0.0001 + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 80,
    slug: "lab-toCanvas-frac / leaf / both / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xywh / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
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
    n: 81,
    slug: "lab-toCanvas-frac / leaf / both / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-floor-dest-y / attr-none / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-floor-dest-y + fe-morphology-identity + strip-identity-transforms",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 82,
    slug: "lab-toCanvas-frac / leaf / both / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / w-h / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + int-floor + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO width/height +0.0001 + fo-shape-rendering-auto",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 83,
    slug: "lab-toCanvas-frac / leaf / both / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xy / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + fe-merge-empty + base64-roundtrip",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 84,
    slug: "lab-toCanvas-frac / leaf / both / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-ceil-all / attr-none / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-ceil-all + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 85,
    slug: "lab-toCanvas-frac / leaf / raster / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / xywh / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO x/y/w/h +0.0001 + fe-merge-empty + strip-all-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
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
    n: 86,
    slug: "lab-toCanvas-frac / leaf / raster / root-none / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / xy / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + h2-pin-width-from-live + tc-decode-safari-raf + FO x/y +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 87,
    slug: "lab-toCanvas-frac / leaf / raster / root-none / device-grid-floor / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / attr-none / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + tc-lab-mp-draw-image-round-all + strip-xml-declaration",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 88,
    slug: "lab-toCanvas-frac / leaf / raster / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / xywh / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO x/y/w/h +0.0001 + filter-empty-nop + strip-identity-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
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
    n: 89,
    slug: "lab-toCanvas-frac / leaf / raster / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fe-color-matrix-identity",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
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
    n: 90,
    slug: "lab-toCanvas-frac / leaf / raster / integer-viewbox / pre-none / remove-fe-filters / drawImage-wrap / w-h / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + remove-fe-filters + drawImage-wrap + FO width/height +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 91,
    slug: "lab-toCanvas-frac / leaf / raster / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xywh / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
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
    n: 92,
    slug: "lab-toCanvas-frac / leaf / raster / integer-viewbox / device-grid-floor / remove-fe-filters / tc-draw-image-round-all / attr-none / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-draw-image-round-all + fe-morphology-identity + strip-all-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 93,
    slug: "lab-toCanvas-frac / leaf / raster / round-dims / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / w-h / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + round-dims + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO width/height +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 94,
    slug: "lab-toCanvas-frac / leaf / raster / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / xy / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + round-dims + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + FO x/y +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 95,
    slug: "lab-toCanvas-frac / leaf / raster / round-dims / device-grid-floor / h2-fo-percent-int-viewbox / mp-none / attr-none / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + round-dims + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 96,
    slug: "lab-toCanvas-frac / leaf / raster / round-dims / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / w-h / fosvg-none / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO width/height +0.0001",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 97,
    slug: "lab-toCanvas-frac / leaf / raster / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / xy / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + int-floor + tc-lab-mp-canvas-backing-floor + FO x/y +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 98,
    slug: "lab-toCanvas-frac / leaf / raster / int-floor / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-create-image-bitmap-high / attr-none / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-create-image-bitmap-high + explicit-xmlns",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 99,
    slug: "lab-toCanvas-frac / leaf / raster / int-floor / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / xywh / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + int-floor + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + filter-empty-nop + strip-all-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
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
    n: 100,
    slug: "lab-toCanvas-frac / leaf / raster / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / xy / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-g.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-g.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w5g-g-${num}`,
    label: `tc-lab-w5g-g #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: spec.inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave5 gen shard g; FO-raster lab-toCanvas combinator — no text bypass.`,
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
    `recipes-tocanvas-lab-wave5-gen-g.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Lab toCanvas wave5 generated shard (h) — combinatorial lab forks + structural knobs.
 * 100 recipes: tc-lab-w5g-h-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w5g-h-*'
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
    slug: "lab-toCanvas-frac / leaf / raster / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-ctx-transform-reset-draw / w-h / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + flex leaf strut + inject raster + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-ctx-transform-reset-draw + FO width/height +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 2,
    slug: "lab-toCanvas-frac / baseline+leaf / both / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
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
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 3,
    slug: "lab-toCanvas-frac / baseline+leaf / both / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / attr-none / fe-merge-empty / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + fe-merge-empty",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 4,
    slug: "lab-toCanvas-frac / baseline+leaf / both / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / w-h / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-decode-twice + FO width/height +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 5,
    slug: "lab-toCanvas-frac / baseline+leaf / both / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xy / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 6,
    slug: "lab-toCanvas-frac / baseline+leaf / both / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-floor-dest-y / attr-none / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-floor-dest-y + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 7,
    slug: "lab-toCanvas-frac / baseline+leaf / both / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / w-h / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO width/height +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 8,
    slug: "lab-toCanvas-frac / baseline+leaf / both / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xy / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 9,
    slug: "lab-toCanvas-frac / baseline+leaf / both / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-ceil-all / attr-none / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-ceil-all + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 10,
    slug: "lab-toCanvas-frac / baseline+leaf / both / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / xywh / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO x/y/w/h +0.0001 + fe-morphology-identity",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
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
    n: 11,
    slug: "lab-toCanvas-frac / baseline+leaf / both / round-dims / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / xy / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + round-dims + h2-pin-width-from-live + tc-decode-safari-raf + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 12,
    slug: "lab-toCanvas-frac / baseline+leaf / both / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / draw-image-pixelated / w-h / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + draw-image-pixelated + FO width/height +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 13,
    slug: "lab-toCanvas-frac / baseline+leaf / both / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / xywh / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO x/y/w/h +0.0001 + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
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
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 14,
    slug: "lab-toCanvas-frac / baseline+leaf / both / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / attr-none / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + int-floor + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 15,
    slug: "lab-toCanvas-frac / baseline+leaf / both / int-floor / pre-none / remove-fe-filters / drawImage-wrap / w-h / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + int-floor + remove-fe-filters + drawImage-wrap + FO width/height +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 16,
    slug: "lab-toCanvas-frac / baseline+leaf / both / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xy / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 17,
    slug: "lab-toCanvas-frac / baseline+leaf / both / int-floor / device-grid-floor / remove-fe-filters / tc-draw-image-round-all / attr-none / filter-empty-nop / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject both + int-floor + labPreRaster device-grid-floor + remove-fe-filters + tc-draw-image-round-all + filter-empty-nop",
    cssKey: "baseline+leaf",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 18,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / root-none / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / w-h / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO width/height +0.0001 + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 19,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / xy / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + no svgRootRound + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + FO x/y +0.0001 + filter-empty-nop + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 20,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / root-none / device-grid-floor / h2-fo-percent-int-viewbox / mp-none / attr-none / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: null,
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 21,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / root-none / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
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
    n: 22,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / integer-viewbox / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / xy / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + integer-viewbox + tc-lab-mp-canvas-backing-floor + FO x/y +0.0001 + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 23,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / integer-viewbox / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-measure-text-prime-draw / w-h / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-mp-measure-text-prime-draw + FO width/height +0.0001 + fe-morphology-identity + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 24,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / xywh / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + fo-shape-rendering-auto",
    cssKey: "baseline+leaf",
    inject: "raster",
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
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 25,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / attr-none / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + fe-merge-empty + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 26,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-ctx-transform-reset-draw / w-h / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-ctx-transform-reset-draw + FO width/height +0.0001 + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 27,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xy / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y +0.0001 + fe-merge-empty + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 28,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / attr-none / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + round-dims + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 29,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / w-h / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-decode-twice + FO width/height +0.0001 + strip-xml-declaration",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-decode-twice",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 30,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xy / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y +0.0001 + filter-empty-nop + strip-identity-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 31,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-floor-dest-y / attr-none / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-floor-dest-y + fe-color-matrix-identity",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 32,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / xywh / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + int-floor + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO x/y/w/h +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
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
    n: 33,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / xy / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 34,
    slug: "lab-toCanvas-frac / baseline+leaf / raster / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-round-all / w-h / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + FO baseline + leaf + inject raster + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-round-all + FO width/height +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "baseline+leaf",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 35,
    slug: "lab-toCanvas-frac / h2+chromium / both / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / xywh / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "both",
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
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 36,
    slug: "lab-toCanvas-frac / h2+chromium / both / root-none / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / attr-none / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + no svgRootRound + h2-pin-width-from-live + tc-decode-safari-raf + fe-merge-empty + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 37,
    slug: "lab-toCanvas-frac / h2+chromium / both / root-none / device-grid-floor / math-floor-viewbox-stash-frac / draw-image-pixelated / w-h / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + draw-image-pixelated + FO width/height +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 38,
    slug: "lab-toCanvas-frac / h2+chromium / both / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / xywh / fosvg-none / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO x/y/w/h +0.0001",
    cssKey: "h2+chromium",
    inject: "both",
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
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 39,
    slug: "lab-toCanvas-frac / h2+chromium / both / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / attr-none / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + integer-viewbox + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + filter-empty-nop + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 40,
    slug: "lab-toCanvas-frac / h2+chromium / both / integer-viewbox / pre-none / remove-fe-filters / drawImage-wrap / w-h / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + integer-viewbox + remove-fe-filters + drawImage-wrap + FO width/height +0.0001 + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "drawImage-wrap",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 41,
    slug: "lab-toCanvas-frac / h2+chromium / both / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xy / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y +0.0001 + filter-empty-nop + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 42,
    slug: "lab-toCanvas-frac / h2+chromium / both / integer-viewbox / device-grid-floor / remove-fe-filters / tc-draw-image-round-all / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + tc-draw-image-round-all + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 43,
    slug: "lab-toCanvas-frac / h2+chromium / both / round-dims / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / xywh / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + round-dims + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
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
    n: 44,
    slug: "lab-toCanvas-frac / h2+chromium / both / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / xy / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + round-dims + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + FO x/y +0.0001 + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 45,
    slug: "lab-toCanvas-frac / h2+chromium / both / round-dims / device-grid-floor / rad-none / tc-lab-mp-create-image-bitmap-high / w-h / fe-merge-empty / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + round-dims + labPreRaster device-grid-floor + tc-lab-mp-create-image-bitmap-high + FO width/height +0.0001 + fe-merge-empty",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: null
  },
  {
    n: 46,
    slug: "lab-toCanvas-frac / h2+chromium / both / round-dims / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / xywh / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
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
    n: 47,
    slug: "lab-toCanvas-frac / h2+chromium / both / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / attr-none / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + int-floor + tc-lab-mp-canvas-backing-floor + fe-merge-empty + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 48,
    slug: "lab-toCanvas-frac / h2+chromium / both / int-floor / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-measure-text-prime-draw / w-h / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-measure-text-prime-draw + FO width/height +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 49,
    slug: "lab-toCanvas-frac / h2+chromium / both / int-floor / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / xywh / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + int-floor + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "both",
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
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 50,
    slug: "lab-toCanvas-frac / h2+chromium / both / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / attr-none / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + filter-empty-nop + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 51,
    slug: "lab-toCanvas-frac / h2+chromium / both / int-floor / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-ctx-transform-reset-draw / w-h / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject both + int-floor + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-ctx-transform-reset-draw + FO width/height +0.0001 + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 52,
    slug: "lab-toCanvas-frac / h2+chromium / raster / root-none / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xy / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y +0.0001 + fe-morphology-identity",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 53,
    slug: "lab-toCanvas-frac / h2+chromium / raster / root-none / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-smoothing-off / attr-none / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + no svgRootRound + parse-svg-dom-reserialize + tc-lab-mp-draw-image-smoothing-off + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 54,
    slug: "lab-toCanvas-frac / h2+chromium / raster / root-none / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / xywh / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-decode-twice + FO x/y/w/h +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-decode-twice",
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
    n: 55,
    slug: "lab-toCanvas-frac / h2+chromium / raster / root-none / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xy / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y +0.0001 + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 56,
    slug: "lab-toCanvas-frac / h2+chromium / raster / integer-viewbox / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-ceil-all / w-h / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + integer-viewbox + h2-pin-line-height-from-live + tc-lab-mp-draw-image-ceil-all + FO width/height +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 57,
    slug: "lab-toCanvas-frac / h2+chromium / raster / integer-viewbox / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / xywh / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + integer-viewbox + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
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
    n: 58,
    slug: "lab-toCanvas-frac / h2+chromium / raster / integer-viewbox / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / attr-none / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + fe-merge-empty + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 59,
    slug: "lab-toCanvas-frac / h2+chromium / raster / integer-viewbox / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-round-all / w-h / filter-empty-nop / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-round-all + FO width/height +0.0001 + filter-empty-nop",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: null
  },
  {
    n: 60,
    slug: "lab-toCanvas-frac / h2+chromium / raster / round-dims / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / xywh / fosvg-none / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + round-dims + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO x/y/w/h +0.0001 + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
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
    n: 61,
    slug: "lab-toCanvas-frac / h2+chromium / raster / round-dims / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / attr-none / filter-empty-nop / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + round-dims + h2-pin-width-from-live + tc-decode-safari-raf + filter-empty-nop + explicit-xmlns",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 62,
    slug: "lab-toCanvas-frac / h2+chromium / raster / round-dims / device-grid-floor / math-floor-viewbox-stash-frac / draw-image-pixelated / w-h / fosvg-none / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + draw-image-pixelated + FO width/height +0.0001 + strip-all-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "draw-image-pixelated",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 63,
    slug: "lab-toCanvas-frac / h2+chromium / raster / round-dims / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / xy / fe-morphology-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO x/y +0.0001 + fe-morphology-identity + explicit-xmlns-strip-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 64,
    slug: "lab-toCanvas-frac / h2+chromium / raster / int-floor / pre-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / attr-none / fe-color-matrix-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + int-floor + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + fe-color-matrix-identity + strip-xml-declaration",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 65,
    slug: "lab-toCanvas-frac / h2+chromium / raster / int-floor / pre-none / remove-fe-filters / drawImage-wrap / xywh / fe-morphology-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + int-floor + remove-fe-filters + drawImage-wrap + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-identity-transforms",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "drawImage-wrap",
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
    n: 66,
    slug: "lab-toCanvas-frac / h2+chromium / raster / int-floor / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xy / fo-shape-rendering-auto / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y +0.0001 + fo-shape-rendering-auto",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null
  },
  {
    n: 67,
    slug: "lab-toCanvas-frac / h2+chromium / raster / int-floor / device-grid-floor / remove-fe-filters / mp-none / w-h / fe-merge-empty / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + remove-fe-filters + FO width/height +0.0001 + fe-merge-empty + base64-roundtrip",
    cssKey: "h2+chromium",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: null,
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 68,
    slug: "lab-toCanvas-frac / full / both / root-none / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / xywh / fo-shape-rendering-auto / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + explicit-xmlns",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
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
    n: 69,
    slug: "lab-toCanvas-frac / full / both / root-none / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / attr-none / fe-merge-empty / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + fe-merge-empty + strip-all-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: null,
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 70,
    slug: "lab-toCanvas-frac / full / both / root-none / device-grid-floor / rad-none / tc-lab-mp-create-image-bitmap-high / w-h / filter-empty-nop / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + tc-lab-mp-create-image-bitmap-high + FO width/height +0.0001 + filter-empty-nop + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 71,
    slug: "lab-toCanvas-frac / full / both / root-none / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / xywh / fosvg-none / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + no svgRootRound + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + strip-xml-declaration",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
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
    n: 72,
    slug: "lab-toCanvas-frac / full / both / integer-viewbox / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / attr-none / filter-empty-nop / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + tc-lab-mp-canvas-backing-floor + filter-empty-nop + strip-identity-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 73,
    slug: "lab-toCanvas-frac / full / both / integer-viewbox / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-measure-text-prime-draw / w-h / fe-color-matrix-identity / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-mp-measure-text-prime-draw + FO width/height +0.0001 + fe-color-matrix-identity",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null
  },
  {
    n: 74,
    slug: "lab-toCanvas-frac / full / both / integer-viewbox / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / xy / fe-morphology-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fe-morphology-identity + base64-roundtrip",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 75,
    slug: "lab-toCanvas-frac / full / both / integer-viewbox / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-canvas-backing-ceil / attr-none / fe-color-matrix-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-canvas-backing-ceil + fe-color-matrix-identity + explicit-xmlns",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 76,
    slug: "lab-toCanvas-frac / full / both / integer-viewbox / device-grid-floor / parse-svg-dom-reserialize / tc-lab-mp-ctx-transform-reset-draw / xywh / fe-morphology-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + integer-viewbox + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-mp-ctx-transform-reset-draw + FO x/y/w/h +0.0001 + fe-morphology-identity + strip-all-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
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
    n: 77,
    slug: "lab-toCanvas-frac / full / both / round-dims / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-supersample-downscale",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 78,
    slug: "lab-toCanvas-frac / full / both / round-dims / pre-none / parse-svg-dom-reserialize / tc-lab-mp-draw-image-floor-dest-y / w-h / fe-merge-empty / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + round-dims + parse-svg-dom-reserialize + tc-lab-mp-draw-image-floor-dest-y + FO width/height +0.0001 + fe-merge-empty + strip-xml-declaration",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 79,
    slug: "lab-toCanvas-frac / full / both / round-dims / device-grid-floor / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / xywh / fo-shape-rendering-auto / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + round-dims + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-mp-decode-twice + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-identity-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-decode-twice",
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
    n: 80,
    slug: "lab-toCanvas-frac / full / both / round-dims / device-grid-floor / parse-svg-dom-reserialize / tc-lab-draw-two-stage / xy / fosvg-none / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + round-dims + labPreRaster device-grid-floor + parse-svg-dom-reserialize + tc-lab-draw-two-stage + FO x/y +0.0001",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "parse-svg-dom-reserialize",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null
  },
  {
    n: 81,
    slug: "lab-toCanvas-frac / full / both / int-floor / pre-none / h2-pin-line-height-from-live / tc-lab-mp-draw-image-ceil-all / w-h / filter-empty-nop / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + int-floor + h2-pin-line-height-from-live + tc-lab-mp-draw-image-ceil-all + FO width/height +0.0001 + filter-empty-nop + base64-roundtrip",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 82,
    slug: "lab-toCanvas-frac / full / both / int-floor / pre-none / h2-pin-width-from-live / tc-lab-mp-decode-safari-raf / xywh / fosvg-none / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + int-floor + h2-pin-width-from-live + tc-lab-mp-decode-safari-raf + FO x/y/w/h +0.0001 + explicit-xmlns",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-decode-safari-raf",
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
    n: 83,
    slug: "lab-toCanvas-frac / full / both / int-floor / device-grid-floor / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / attr-none / filter-empty-nop / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-line-height-from-live + tc-lab-draw-h2-frac-draw + filter-empty-nop + strip-all-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-draw-h2-frac-draw",
    foAttrPatch: null,
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 84,
    slug: "lab-toCanvas-frac / full / both / int-floor / device-grid-floor / h2-pin-width-from-live / tc-lab-mp-draw-image-round-all / w-h / fe-color-matrix-identity / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject both + int-floor + labPreRaster device-grid-floor + h2-pin-width-from-live + tc-lab-mp-draw-image-round-all + FO width/height +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "both",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-lab-mp-draw-image-round-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 85,
    slug: "lab-toCanvas-frac / full / raster / root-none / pre-none / math-floor-viewbox-stash-frac / tc-lab-mp-decode-wrap / xy / fe-morphology-identity / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + math-floor-viewbox-stash-frac + tc-lab-mp-decode-wrap + FO x/y +0.0001 + fe-morphology-identity + strip-xml-declaration",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-mp-decode-wrap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 86,
    slug: "lab-toCanvas-frac / full / raster / root-none / pre-none / h2-pin-width-from-live / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + h2-pin-width-from-live + tc-decode-safari-raf + fe-color-matrix-identity + strip-identity-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: null,
    radicalPatch: "h2-pin-width-from-live",
    monkeypatch: "tc-decode-safari-raf",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-identity-transforms"
  },
  {
    n: 87,
    slug: "lab-toCanvas-frac / full / raster / root-none / device-grid-floor / math-floor-viewbox-stash-frac / draw-image-pixelated / xywh / fe-merge-empty / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + math-floor-viewbox-stash-frac + draw-image-pixelated + FO x/y/w/h +0.0001 + fe-merge-empty",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "draw-image-pixelated",
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
    n: 88,
    slug: "lab-toCanvas-frac / full / raster / root-none / device-grid-floor / remove-fe-filters / tc-lab-mp-decode-interval-prototype / xy / fo-shape-rendering-auto / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + no svgRootRound + labPreRaster device-grid-floor + remove-fe-filters + tc-lab-mp-decode-interval-prototype + FO x/y +0.0001 + fo-shape-rendering-auto + base64-roundtrip",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: null,
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-mp-decode-interval-prototype",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 89,
    slug: "lab-toCanvas-frac / full / raster / integer-viewbox / pre-none / math-floor-viewbox-stash-frac / tc-draw-image-round-all / w-h / fe-merge-empty / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + math-floor-viewbox-stash-frac + tc-draw-image-round-all + FO width/height +0.0001 + fe-merge-empty + explicit-xmlns",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 90,
    slug: "lab-toCanvas-frac / full / raster / integer-viewbox / pre-none / remove-fe-filters / drawImage-wrap / xywh / fo-shape-rendering-auto / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + remove-fe-filters + drawImage-wrap + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-all-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "drawImage-wrap",
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
    n: 91,
    slug: "lab-toCanvas-frac / full / raster / integer-viewbox / device-grid-floor / h2-fo-percent-int-viewbox / tc-lab-mp-decode-interval-delay / xy / fosvg-none / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + h2-fo-percent-int-viewbox + tc-lab-mp-decode-interval-delay + FO x/y +0.0001 + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-mp-decode-interval-delay",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms"
  },
  {
    n: 92,
    slug: "lab-toCanvas-frac / full / raster / integer-viewbox / device-grid-floor / remove-fe-filters / mp-none / w-h / filter-empty-nop / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + integer-viewbox + labPreRaster device-grid-floor + remove-fe-filters + FO width/height +0.0001 + filter-empty-nop + strip-xml-declaration",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "integer-viewbox",
    labPreRaster: "device-grid-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: null,
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-empty-nop",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 93,
    slug: "lab-toCanvas-frac / full / raster / round-dims / pre-none / h2-fo-percent-int-viewbox / tc-lab-draw-device-grid-floor / xywh / fosvg-none / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + round-dims + h2-fo-percent-int-viewbox + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + strip-identity-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: "tc-lab-draw-device-grid-floor",
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
    n: 94,
    slug: "lab-toCanvas-frac / full / raster / round-dims / pre-none / integer-snap-all-rects / tc-lab-mp-canvas-backing-round / attr-none / fe-morphology-identity / markup-none",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + round-dims + integer-snap-all-rects + tc-lab-mp-canvas-backing-round + fe-morphology-identity",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-mp-canvas-backing-round",
    foAttrPatch: null,
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: null
  },
  {
    n: 95,
    slug: "lab-toCanvas-frac / full / raster / round-dims / device-grid-floor / rad-none / tc-lab-mp-create-image-bitmap-high / w-h / fe-color-matrix-identity / base64-roundtrip",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + tc-lab-mp-create-image-bitmap-high + FO width/height +0.0001 + fe-color-matrix-identity + base64-roundtrip",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip"
  },
  {
    n: 96,
    slug: "lab-toCanvas-frac / full / raster / round-dims / device-grid-floor / integer-snap-all-rects / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-morphology-identity / explicit-xmlns",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + round-dims + labPreRaster device-grid-floor + integer-snap-all-rects + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-morphology-identity + explicit-xmlns",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "round-dims",
    labPreRaster: "device-grid-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-morphology-identity",
    svgMarkupPatch: "explicit-xmlns"
  },
  {
    n: 97,
    slug: "lab-toCanvas-frac / full / raster / int-floor / pre-none / rad-none / tc-lab-mp-canvas-backing-floor / attr-none / fe-color-matrix-identity / strip-all-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + int-floor + tc-lab-mp-canvas-backing-floor + fe-color-matrix-identity + strip-all-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: null,
    monkeypatch: "tc-lab-mp-canvas-backing-floor",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-all-transforms"
  },
  {
    n: 98,
    slug: "lab-toCanvas-frac / full / raster / int-floor / pre-none / h2-flex-stretch-leaf-from-live / tc-lab-mp-measure-text-prime-draw / xywh / fe-merge-empty / explicit-xmlns-strip-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-measure-text-prime-draw + FO x/y/w/h +0.0001 + fe-merge-empty + explicit-xmlns-strip-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-measure-text-prime-draw",
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
    n: 99,
    slug: "lab-toCanvas-frac / full / raster / int-floor / device-grid-floor / rad-none / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / strip-xml-declaration",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + strip-xml-declaration",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration"
  },
  {
    n: 100,
    slug: "lab-toCanvas-frac / full / raster / int-floor / device-grid-floor / h2-flex-stretch-leaf-from-live / tc-lab-mp-draw-image-smoothing-off / w-h / fe-merge-empty / strip-identity-transforms",
    idea: "lab-toCanvas-frac fork + H2 normalize + leaf + Chromium + inject raster + int-floor + labPreRaster device-grid-floor + h2-flex-stretch-leaf-from-live + tc-lab-mp-draw-image-smoothing-off + FO width/height +0.0001 + fe-merge-empty + strip-identity-transforms",
    cssKey: "full",
    inject: "raster",
    rasterPatch: "lab-toCanvas-frac",
    svgRootRound: "int-floor",
    labPreRaster: "device-grid-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    foAttrPatch: {
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-merge-empty",
    svgMarkupPatch: "strip-identity-transforms"
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-h.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave5-gen-h.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w5g-h-${num}`,
    label: `tc-lab-w5g-h #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: spec.inject,
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave5 gen shard h; FO-raster lab-toCanvas combinator — no text bypass.`,
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
    `recipes-tocanvas-lab-wave5-gen-h.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

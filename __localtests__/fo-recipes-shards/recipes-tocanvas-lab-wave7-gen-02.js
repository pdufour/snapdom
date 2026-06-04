/**
 * Lab toCanvas wave7 generated shard (02) — lab fork + opts/ctx/timing combinator.
 * 100 recipes: tc-lab-w7g-02-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7g-02-*'
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

/** @type {{ n: number, slug: string, idea: string, cssKey: string, rasterPatch: string, svgRootRound?: string | null, radicalPatch?: string | null, monkeypatch?: string | string[] | null, foAttrPatch?: Record<string, string> | null, foSvgPatch?: string | null, svgMarkupPatch?: string | null, labToCanvasOpts?: Record<string, unknown> | null, labToCanvasCtx?: Record<string, unknown> | null }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas / full / root-none / remove-fe-filters / tc-canvas-backing-floor / xy / fe-color-matrix-identity / strip-xml-declaration / opt-harness-device / tc-lab-w3-decode-raf3-draw-raf3 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + remove-fe-filters + tc-canvas-backing-floor + FO x/y +0.0001 + fe-color-matrix-identity + strip-xml-declaration + optDims harness-device + decode raf3 + draw raf3 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-decode-raf3-draw-raf3"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 2,
    slug: "lab-toCanvas / chromium / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-supersample-downscale / attr-none / filter-noop-defs / markup-none / floor-device / tc-lab-w3-decode-raf3-draw-raf3 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-supersample-downscale + filter-noop-defs + floor backing + device dpr + decode raf3 + draw raf3 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-decode-raf3-draw-raf3"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 3,
    slug: "lab-toCanvas / full / int-floor / h2-pin-line-height-from-live / tc-lab-draw-device-grid-floor / xywh / fosvg-none / base64-roundtrip / ceil-style-device / tc-lab-w3-decode-raf3-draw-raf3 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + h2-pin-line-height-from-live + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + base64-roundtrip + ceil backing + device style pixels + decode raf3 + draw raf3 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-raf3-draw-raf3"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 4,
    slug: "lab-toCanvas / chromium / int-floor / remove-fe-filters / tc-draw-image-round-all / xywh / fo-shape-rendering-auto / strip-xml-declaration / round-natural / tc-lab-w3-decode-raf3-draw-raf3 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + remove-fe-filters + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-xml-declaration + round backing + natural dims + decode raf3 + draw raf3 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-decode-raf3-draw-raf3"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 5,
    slug: "lab-toCanvas / full / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xy / fosvg-none / explicit-xmlns-strip-transforms / back-floor / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + explicit-xmlns-strip-transforms + backingRound floor + decode idle + draw idle + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 6,
    slug: "lab-toCanvas / chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / base64-roundtrip / back-ceil / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + fo-shape-rendering-auto + base64-roundtrip + backingRound ceil + decode idle + draw idle + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 7,
    slug: "lab-toCanvas / full / integer-viewbox / math-pin-fo-container-dims-from-live-root / decode-interval / xywh / filter-noop-defs / strip-xml-declaration / back-round / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + math-pin-fo-container-dims-from-live-root + decode-interval + FO x/y/w/h +0.0001 + filter-noop-defs + strip-xml-declaration + backingRound round + decode idle + draw idle + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 8,
    slug: "lab-toCanvas / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / style-device / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + math-floor-viewbox-stash-frac + tc-canvas-backing-floor + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms + stylePixels device + decode idle + draw idle + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 9,
    slug: "lab-toCanvas / full / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / xy / filter-noop-defs / base64-roundtrip / opt-natural / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + integer-snap-all-rects + tc-lab-draw-two-stage + FO x/y +0.0001 + filter-noop-defs + base64-roundtrip + optDims natural + decode idle + draw idle + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 10,
    slug: "lab-toCanvas / chromium / root-none / rad-none / tc-lab-draw-device-grid-floor / attr-none / fe-color-matrix-identity / markup-none / no-ctx-scale / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + tc-lab-draw-device-grid-floor + fe-color-matrix-identity + ctxScale false + decode idle + draw idle + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 11,
    slug: "lab-toCanvas / full / int-floor / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / filter-noop-defs / explicit-xmlns-strip-transforms / floor-device / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + math-floor-viewbox-stash-frac + tc-draw-image-round-all + filter-noop-defs + explicit-xmlns-strip-transforms + floor backing + device dpr + decode idle + draw idle + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 12,
    slug: "lab-toCanvas / chromium / int-floor / integer-snap-all-rects / tc-decode-safari-raf / xywh / fosvg-none / strip-xml-declaration / ceil-style-device / tc-lab-w3-decode-idle-draw-idle / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + integer-snap-all-rects + tc-decode-safari-raf + FO x/y/w/h +0.0001 + strip-xml-declaration + ceil backing + device style pixels + decode idle + draw idle + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-decode-idle-draw-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 13,
    slug: "lab-toCanvas / full / round-dims / rad-none / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / markup-none / default / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 14,
    slug: "lab-toCanvas / chromium / round-dims / h2-pin-line-height-from-live / decode-interval / attr-none / fosvg-none / base64-roundtrip / back-floor / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-pin-line-height-from-live + decode-interval + base64-roundtrip + backingRound floor + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 15,
    slug: "lab-toCanvas / full / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / fo-shape-rendering-auto / strip-xml-declaration / back-ceil / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + remove-fe-filters + tc-canvas-backing-ceil + fo-shape-rendering-auto + strip-xml-declaration + backingRound ceil + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 16,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-fo-percent-int-viewbox / tc-lab-draw-two-stage / xywh / filter-noop-defs / markup-none / dpr-device / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + h2-fo-percent-int-viewbox + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + filter-noop-defs + dprSource device + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 17,
    slug: "lab-toCanvas / full / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-color-matrix-identity / base64-roundtrip / style-device / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip + stylePixels device + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 18,
    slug: "lab-toCanvas / chromium / root-none / math-pin-fo-container-dims-from-live-root / mp-none / xy / filter-noop-defs / strip-xml-declaration / opt-natural / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + math-pin-fo-container-dims-from-live-root + FO x/y +0.0001 + filter-noop-defs + strip-xml-declaration + optDims natural + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: "tc-lab-w3-decode-perf16-draw-perf1",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 19,
    slug: "lab-toCanvas / full / int-floor / h2-fo-percent-int-viewbox / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / no-ctx-scale / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + h2-fo-percent-int-viewbox + tc-decode-safari-raf + fe-color-matrix-identity + explicit-xmlns-strip-transforms + ctxScale false + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 20,
    slug: "lab-toCanvas / chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / fo-shape-rendering-auto / base64-roundtrip / floor-device / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip + floor backing + device dpr + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 21,
    slug: "lab-toCanvas / full / round-dims / math-pin-fo-container-dims-from-live-root / tc-lab-draw-device-grid-floor / xy / fosvg-none / markup-none / round-natural / tc-lab-w3-decode-perf16-draw-perf1 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + math-pin-fo-container-dims-from-live-root + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + round backing + natural dims + decode perf16 + draw perf1 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-perf16-draw-perf1"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 22,
    slug: "lab-toCanvas / chromium / round-dims / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / default / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 23,
    slug: "lab-toCanvas / full / integer-viewbox / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / strip-xml-declaration / back-floor / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + integer-snap-all-rects + tc-lab-draw-h2-frac-draw + strip-xml-declaration + backingRound floor + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 24,
    slug: "lab-toCanvas / chromium / integer-viewbox / rad-none / tc-lab-draw-create-image-bitmap-pixelated / xywh / fe-color-matrix-identity / markup-none / back-round / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fe-color-matrix-identity + backingRound round + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 25,
    slug: "lab-toCanvas / full / root-none / h2-pin-line-height-from-live / mp-none / xywh / filter-noop-defs / explicit-xmlns-strip-transforms / dpr-device / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + h2-pin-line-height-from-live + FO x/y/w/h +0.0001 + filter-noop-defs + explicit-xmlns-strip-transforms + dprSource device + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-w3-decode-mt2-draw-t100",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 26,
    slug: "lab-toCanvas / chromium / root-none / remove-fe-filters / tc-canvas-backing-floor / xy / fe-color-matrix-identity / strip-xml-declaration / style-device / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + remove-fe-filters + tc-canvas-backing-floor + FO x/y +0.0001 + fe-color-matrix-identity + strip-xml-declaration + stylePixels device + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 27,
    slug: "lab-toCanvas / full / int-floor / rad-none / tc-lab-draw-supersample-downscale / attr-none / filter-noop-defs / markup-none / opt-harness-device / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + tc-lab-draw-supersample-downscale + filter-noop-defs + optDims harness-device + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 28,
    slug: "lab-toCanvas / chromium / int-floor / h2-pin-line-height-from-live / tc-lab-draw-device-grid-floor / xywh / fosvg-none / base64-roundtrip / no-ctx-scale / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-pin-line-height-from-live + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + base64-roundtrip + ctxScale false + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 29,
    slug: "lab-toCanvas / full / round-dims / remove-fe-filters / tc-draw-image-round-all / xywh / fo-shape-rendering-auto / strip-xml-declaration / floor-device / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + remove-fe-filters + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-xml-declaration + floor backing + device dpr + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 30,
    slug: "lab-toCanvas / chromium / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xy / fosvg-none / explicit-xmlns-strip-transforms / round-natural / tc-lab-w3-decode-mt2-draw-t100 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + explicit-xmlns-strip-transforms + round backing + natural dims + decode mt2 + draw t100 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-decode-mt2-draw-t100"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 31,
    slug: "lab-toCanvas / full / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / base64-roundtrip / default / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + fo-shape-rendering-auto + base64-roundtrip + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 32,
    slug: "lab-toCanvas / chromium / integer-viewbox / math-pin-fo-container-dims-from-live-root / decode-interval / xywh / filter-noop-defs / strip-xml-declaration / back-floor / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + math-pin-fo-container-dims-from-live-root + decode-interval + FO x/y/w/h +0.0001 + filter-noop-defs + strip-xml-declaration + backingRound floor + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 33,
    slug: "lab-toCanvas / full / root-none / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / back-round / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + math-floor-viewbox-stash-frac + tc-canvas-backing-floor + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms + backingRound round + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 34,
    slug: "lab-toCanvas / chromium / root-none / integer-snap-all-rects / tc-lab-draw-two-stage / xy / filter-noop-defs / base64-roundtrip / dpr-device / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + integer-snap-all-rects + tc-lab-draw-two-stage + FO x/y +0.0001 + filter-noop-defs + base64-roundtrip + dprSource device + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 35,
    slug: "lab-toCanvas / full / int-floor / math-pin-fo-container-dims-from-live-root / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fe-color-matrix-identity / markup-none / opt-natural / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + math-pin-fo-container-dims-from-live-root + tc-lab-draw-create-image-bitmap-pixelated + fe-color-matrix-identity + optDims natural + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 36,
    slug: "lab-toCanvas / chromium / int-floor / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / filter-noop-defs / explicit-xmlns-strip-transforms / opt-harness-device / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + math-floor-viewbox-stash-frac + tc-draw-image-round-all + filter-noop-defs + explicit-xmlns-strip-transforms + optDims harness-device + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 37,
    slug: "lab-toCanvas / full / round-dims / integer-snap-all-rects / tc-decode-safari-raf / xywh / fosvg-none / strip-xml-declaration / no-ctx-scale / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + integer-snap-all-rects + tc-decode-safari-raf + FO x/y/w/h +0.0001 + strip-xml-declaration + ctxScale false + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 38,
    slug: "lab-toCanvas / chromium / round-dims / rad-none / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / markup-none / ceil-style-device / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + ceil backing + device style pixels + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 39,
    slug: "lab-toCanvas / full / integer-viewbox / h2-pin-line-height-from-live / decode-interval / attr-none / fosvg-none / base64-roundtrip / round-natural / tc-lab-w3-decode-chain-raf-mt-t0 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + h2-pin-line-height-from-live + decode-interval + base64-roundtrip + round backing + natural dims + decode chain raf+mt+t0 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-decode-chain-raf-mt-t0"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 40,
    slug: "lab-toCanvas / chromium / integer-viewbox / remove-fe-filters / tc-canvas-backing-ceil / attr-none / fo-shape-rendering-auto / strip-xml-declaration / default / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + remove-fe-filters + tc-canvas-backing-ceil + fo-shape-rendering-auto + strip-xml-declaration + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 41,
    slug: "lab-toCanvas / full / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-two-stage / xywh / filter-noop-defs / markup-none / back-ceil / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + filter-noop-defs + backingRound ceil + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 42,
    slug: "lab-toCanvas / chromium / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-color-matrix-identity / base64-roundtrip / back-round / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip + backingRound round + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 43,
    slug: "lab-toCanvas / full / int-floor / remove-fe-filters / mp-none / xy / filter-noop-defs / strip-xml-declaration / dpr-device / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + remove-fe-filters + FO x/y +0.0001 + filter-noop-defs + strip-xml-declaration + dprSource device + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-w3-draw-chain-raf-mt-t16",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 44,
    slug: "lab-toCanvas / chromium / int-floor / h2-fo-percent-int-viewbox / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-natural / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-fo-percent-int-viewbox + tc-decode-safari-raf + fe-color-matrix-identity + explicit-xmlns-strip-transforms + optDims natural + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 45,
    slug: "lab-toCanvas / full / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip + optDims harness-device + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 46,
    slug: "lab-toCanvas / chromium / round-dims / math-pin-fo-container-dims-from-live-root / tc-lab-draw-device-grid-floor / xy / fosvg-none / markup-none / floor-device / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + math-pin-fo-container-dims-from-live-root + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + floor backing + device dpr + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 47,
    slug: "lab-toCanvas / full / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / ceil-style-device / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms + ceil backing + device style pixels + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 48,
    slug: "lab-toCanvas / chromium / integer-viewbox / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / strip-xml-declaration / round-natural / tc-lab-w3-draw-chain-raf-mt-t16 / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + integer-snap-all-rects + tc-lab-draw-h2-frac-draw + strip-xml-declaration + round backing + natural dims + draw chain raf+mt+t16 + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-draw-chain-raf-mt-t16"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 49,
    slug: "lab-toCanvas / full / root-none / rad-none / tc-lab-draw-create-image-bitmap-pixelated / xywh / fe-color-matrix-identity / markup-none / back-floor / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fe-color-matrix-identity + backingRound floor + full decode+draw chain + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 50,
    slug: "lab-toCanvas / chromium / root-none / h2-pin-line-height-from-live / mp-none / xywh / filter-noop-defs / explicit-xmlns-strip-transforms / back-ceil / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-pin-line-height-from-live + FO x/y/w/h +0.0001 + filter-noop-defs + explicit-xmlns-strip-transforms + backingRound ceil + full decode+draw chain + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "tc-lab-w3-full-chain-decode-draw",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 51,
    slug: "lab-toCanvas / full / int-floor / integer-snap-all-rects / tc-canvas-backing-floor / xy / fe-color-matrix-identity / strip-xml-declaration / back-round / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + integer-snap-all-rects + tc-canvas-backing-floor + FO x/y +0.0001 + fe-color-matrix-identity + strip-xml-declaration + backingRound round + full decode+draw chain + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 52,
    slug: "lab-toCanvas / chromium / int-floor / rad-none / tc-lab-draw-supersample-downscale / attr-none / filter-noop-defs / markup-none / style-device / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + tc-lab-draw-supersample-downscale + filter-noop-defs + stylePixels device + full decode+draw chain + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 53,
    slug: "lab-toCanvas / full / round-dims / h2-pin-line-height-from-live / tc-lab-draw-device-grid-floor / xywh / fosvg-none / base64-roundtrip / opt-natural / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + h2-pin-line-height-from-live + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + base64-roundtrip + optDims natural + full decode+draw chain + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 54,
    slug: "lab-toCanvas / chromium / round-dims / remove-fe-filters / tc-draw-image-round-all / xywh / fo-shape-rendering-auto / strip-xml-declaration / opt-harness-device / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + remove-fe-filters + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-xml-declaration + optDims harness-device + full decode+draw chain + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 55,
    slug: "lab-toCanvas / full / integer-viewbox / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xy / fosvg-none / explicit-xmlns-strip-transforms / floor-device / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + explicit-xmlns-strip-transforms + floor backing + device dpr + full decode+draw chain + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 56,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / base64-roundtrip / ceil-style-device / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + fo-shape-rendering-auto + base64-roundtrip + ceil backing + device style pixels + full decode+draw chain + smoothing quality high",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 57,
    slug: "lab-toCanvas / full / root-none / math-pin-fo-container-dims-from-live-root / decode-interval / xywh / filter-noop-defs / strip-xml-declaration / round-natural / tc-lab-w3-full-chain-decode-draw / smooth-high",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + math-pin-fo-container-dims-from-live-root + decode-interval + FO x/y/w/h +0.0001 + filter-noop-defs + strip-xml-declaration + round backing + natural dims + full decode+draw chain + smoothing quality high",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-full-chain-decode-draw"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "imageSmoothingQuality": "high"
    }
  },
  {
    n: 58,
    slug: "lab-toCanvas / chromium / root-none / math-floor-viewbox-stash-frac / tc-canvas-backing-floor / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / back-floor / timing-none / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + math-floor-viewbox-stash-frac + tc-canvas-backing-floor + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms + backingRound floor + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-canvas-backing-floor",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 59,
    slug: "lab-toCanvas / full / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / xy / filter-noop-defs / base64-roundtrip / back-ceil / timing-none / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-two-stage + FO x/y +0.0001 + filter-noop-defs + base64-roundtrip + backingRound ceil + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: "tc-lab-draw-two-stage",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 60,
    slug: "lab-toCanvas / chromium / int-floor / math-pin-fo-container-dims-from-live-root / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fe-color-matrix-identity / markup-none / dpr-device / timing-none / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + math-pin-fo-container-dims-from-live-root + tc-lab-draw-create-image-bitmap-pixelated + fe-color-matrix-identity + dprSource device + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 61,
    slug: "lab-toCanvas / full / round-dims / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / filter-noop-defs / explicit-xmlns-strip-transforms / style-device / timing-none / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + math-floor-viewbox-stash-frac + tc-draw-image-round-all + filter-noop-defs + explicit-xmlns-strip-transforms + stylePixels device + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-draw-image-round-all",
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 62,
    slug: "lab-toCanvas / chromium / round-dims / integer-snap-all-rects / tc-decode-safari-raf / xywh / fosvg-none / strip-xml-declaration / opt-natural / timing-none / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + integer-snap-all-rects + tc-decode-safari-raf + FO x/y/w/h +0.0001 + strip-xml-declaration + optDims natural + globalAlpha 0.99",
    cssKey: "chromium",
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
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 63,
    slug: "lab-toCanvas / full / integer-viewbox / rad-none / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / markup-none / no-ctx-scale / timing-none / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + ctxScale false + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: "tc-lab-draw-create-image-bitmap",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 64,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-pin-line-height-from-live / decode-interval / attr-none / fosvg-none / base64-roundtrip / floor-device / timing-none / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + h2-pin-line-height-from-live + decode-interval + base64-roundtrip + floor backing + device dpr + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: "decode-interval",
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 65,
    slug: "lab-toCanvas / full / root-none / remove-fe-filters / tc-canvas-backing-ceil / attr-none / fo-shape-rendering-auto / strip-xml-declaration / ceil-style-device / timing-none / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + remove-fe-filters + tc-canvas-backing-ceil + fo-shape-rendering-auto + strip-xml-declaration + ceil backing + device style pixels + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-canvas-backing-ceil",
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 66,
    slug: "lab-toCanvas / chromium / root-none / h2-fo-percent-int-viewbox / tc-lab-draw-two-stage / xywh / filter-noop-defs / markup-none / default / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + h2-fo-percent-int-viewbox + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + filter-noop-defs + decode microtask + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 67,
    slug: "lab-toCanvas / full / int-floor / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-color-matrix-identity / base64-roundtrip / back-floor / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + h2-pin-line-height-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip + backingRound floor + decode microtask + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 68,
    slug: "lab-toCanvas / chromium / int-floor / remove-fe-filters / mp-none / xy / filter-noop-defs / strip-xml-declaration / back-ceil / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + remove-fe-filters + FO x/y +0.0001 + filter-noop-defs + strip-xml-declaration + backingRound ceil + decode microtask + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-w3-decode-microtask",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 69,
    slug: "lab-toCanvas / full / round-dims / h2-fo-percent-int-viewbox / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / dpr-device / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + h2-fo-percent-int-viewbox + tc-decode-safari-raf + fe-color-matrix-identity + explicit-xmlns-strip-transforms + dprSource device + decode microtask + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 70,
    slug: "lab-toCanvas / chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / fo-shape-rendering-auto / base64-roundtrip / style-device / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip + stylePixels device + decode microtask + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 71,
    slug: "lab-toCanvas / full / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-draw-device-grid-floor / xy / fosvg-none / markup-none / opt-harness-device / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + math-pin-fo-container-dims-from-live-root + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + optDims harness-device + decode microtask + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 72,
    slug: "lab-toCanvas / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / no-ctx-scale / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms + ctxScale false + decode microtask + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 73,
    slug: "lab-toCanvas / full / root-none / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / strip-xml-declaration / floor-device / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + integer-snap-all-rects + tc-lab-draw-h2-frac-draw + strip-xml-declaration + floor backing + device dpr + decode microtask + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 74,
    slug: "lab-toCanvas / chromium / root-none / rad-none / tc-lab-draw-create-image-bitmap-pixelated / xywh / fe-color-matrix-identity / markup-none / round-natural / tc-lab-w3-decode-microtask / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + fe-color-matrix-identity + round backing + natural dims + decode microtask + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-microtask"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 75,
    slug: "lab-toCanvas / full / int-floor / math-floor-viewbox-stash-frac / mp-none / xywh / filter-noop-defs / explicit-xmlns-strip-transforms / default / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + filter-noop-defs + explicit-xmlns-strip-transforms + decode raf2 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-w3-decode-raf2",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 76,
    slug: "lab-toCanvas / chromium / int-floor / integer-snap-all-rects / tc-canvas-backing-floor / xy / fe-color-matrix-identity / strip-xml-declaration / back-floor / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + integer-snap-all-rects + tc-canvas-backing-floor + FO x/y +0.0001 + fe-color-matrix-identity + strip-xml-declaration + backingRound floor + decode raf2 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "floor"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 77,
    slug: "lab-toCanvas / full / round-dims / rad-none / tc-lab-draw-supersample-downscale / attr-none / filter-noop-defs / markup-none / back-round / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + tc-lab-draw-supersample-downscale + filter-noop-defs + backingRound round + decode raf2 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 78,
    slug: "lab-toCanvas / chromium / round-dims / h2-pin-line-height-from-live / tc-lab-draw-device-grid-floor / xywh / fosvg-none / base64-roundtrip / dpr-device / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-pin-line-height-from-live + tc-lab-draw-device-grid-floor + FO x/y/w/h +0.0001 + base64-roundtrip + dprSource device + decode raf2 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 79,
    slug: "lab-toCanvas / full / integer-viewbox / remove-fe-filters / tc-draw-image-round-all / xywh / fo-shape-rendering-auto / strip-xml-declaration / style-device / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + remove-fe-filters + tc-draw-image-round-all + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + strip-xml-declaration + stylePixels device + decode raf2 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 80,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / xy / fosvg-none / explicit-xmlns-strip-transforms / opt-harness-device / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + explicit-xmlns-strip-transforms + optDims harness-device + decode raf2 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 81,
    slug: "lab-toCanvas / full / root-none / h2-flex-stretch-leaf-from-live / tc-lab-draw-create-image-bitmap / attr-none / fo-shape-rendering-auto / base64-roundtrip / no-ctx-scale / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + h2-flex-stretch-leaf-from-live + tc-lab-draw-create-image-bitmap + fo-shape-rendering-auto + base64-roundtrip + ctxScale false + decode raf2 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 82,
    slug: "lab-toCanvas / chromium / root-none / math-pin-fo-container-dims-from-live-root / decode-interval / xywh / filter-noop-defs / strip-xml-declaration / floor-device / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + math-pin-fo-container-dims-from-live-root + decode-interval + FO x/y/w/h +0.0001 + filter-noop-defs + strip-xml-declaration + floor backing + device dpr + decode raf2 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 83,
    slug: "lab-toCanvas / full / int-floor / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / round-natural / tc-lab-w3-decode-raf2 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + h2-fo-percent-int-viewbox + tc-canvas-backing-floor + FO x/y/w/h +0.0001 + fe-color-matrix-identity + explicit-xmlns-strip-transforms + round backing + natural dims + decode raf2 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-canvas-backing-floor",
      "tc-lab-w3-decode-raf2"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 84,
    slug: "lab-toCanvas / chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-lab-draw-two-stage / xy / filter-noop-defs / base64-roundtrip / default / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-flex-stretch-leaf-from-live + tc-lab-draw-two-stage + FO x/y +0.0001 + filter-noop-defs + base64-roundtrip + decode timeout16 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 85,
    slug: "lab-toCanvas / full / round-dims / math-pin-fo-container-dims-from-live-root / tc-lab-draw-create-image-bitmap-pixelated / attr-none / fe-color-matrix-identity / markup-none / back-ceil / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + math-pin-fo-container-dims-from-live-root + tc-lab-draw-create-image-bitmap-pixelated + fe-color-matrix-identity + backingRound ceil + decode timeout16 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 86,
    slug: "lab-toCanvas / chromium / round-dims / math-floor-viewbox-stash-frac / tc-draw-image-round-all / attr-none / filter-noop-defs / explicit-xmlns-strip-transforms / back-round / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + math-floor-viewbox-stash-frac + tc-draw-image-round-all + filter-noop-defs + explicit-xmlns-strip-transforms + backingRound round + decode timeout16 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-draw-image-round-all",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: null,
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 87,
    slug: "lab-toCanvas / full / integer-viewbox / integer-snap-all-rects / tc-decode-safari-raf / xywh / fosvg-none / strip-xml-declaration / dpr-device / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + integer-snap-all-rects + tc-decode-safari-raf + FO x/y/w/h +0.0001 + strip-xml-declaration + dprSource device + decode timeout16 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 88,
    slug: "lab-toCanvas / chromium / integer-viewbox / rad-none / tc-lab-draw-create-image-bitmap / xy / fo-shape-rendering-auto / markup-none / opt-natural / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + fo-shape-rendering-auto + optDims natural + decode timeout16 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 89,
    slug: "lab-toCanvas / full / root-none / h2-pin-line-height-from-live / decode-interval / attr-none / fosvg-none / base64-roundtrip / opt-harness-device / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + h2-pin-line-height-from-live + decode-interval + base64-roundtrip + optDims harness-device + decode timeout16 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "decode-interval",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 90,
    slug: "lab-toCanvas / chromium / root-none / remove-fe-filters / tc-canvas-backing-ceil / attr-none / fo-shape-rendering-auto / strip-xml-declaration / no-ctx-scale / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + remove-fe-filters + tc-canvas-backing-ceil + fo-shape-rendering-auto + strip-xml-declaration + ctxScale false + decode timeout16 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "remove-fe-filters",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: null,
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "ctxScale": false
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 91,
    slug: "lab-toCanvas / full / int-floor / rad-none / tc-lab-draw-two-stage / xywh / filter-noop-defs / markup-none / ceil-style-device / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + filter-noop-defs + ceil backing + device style pixels + decode timeout16 + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: null,
    monkeypatch: [
      "tc-lab-draw-two-stage",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 92,
    slug: "lab-toCanvas / chromium / int-floor / h2-pin-line-height-from-live / tc-lab-draw-create-image-bitmap-pixelated / xy / fe-color-matrix-identity / base64-roundtrip / round-natural / tc-lab-w3-decode-timeout16 / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + h2-pin-line-height-from-live + tc-lab-draw-create-image-bitmap-pixelated + FO x/y +0.0001 + fe-color-matrix-identity + base64-roundtrip + round backing + natural dims + decode timeout16 + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "h2-pin-line-height-from-live",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap-pixelated",
      "tc-lab-w3-decode-timeout16"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "round",
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 93,
    slug: "lab-toCanvas / full / round-dims / remove-fe-filters / mp-none / xy / filter-noop-defs / strip-xml-declaration / default / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + round-dims + remove-fe-filters + FO x/y +0.0001 + filter-noop-defs + strip-xml-declaration + decode idle + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "remove-fe-filters",
    monkeypatch: "tc-lab-w3-decode-idle",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: null,
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 94,
    slug: "lab-toCanvas / chromium / round-dims / h2-fo-percent-int-viewbox / tc-decode-safari-raf / attr-none / fe-color-matrix-identity / explicit-xmlns-strip-transforms / back-ceil / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + round-dims + h2-fo-percent-int-viewbox + tc-decode-safari-raf + fe-color-matrix-identity + explicit-xmlns-strip-transforms + backingRound ceil + decode idle + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "round-dims",
    radicalPatch: "h2-fo-percent-int-viewbox",
    monkeypatch: [
      "tc-decode-safari-raf",
      "tc-lab-w3-decode-idle"
    ],
    foAttrPatch: null,
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "ceil"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 95,
    slug: "lab-toCanvas / full / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-supersample-downscale / xywh / fo-shape-rendering-auto / base64-roundtrip / back-round / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + integer-viewbox + h2-flex-stretch-leaf-from-live + tc-lab-draw-supersample-downscale + FO x/y/w/h +0.0001 + fo-shape-rendering-auto + base64-roundtrip + backingRound round + decode idle + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "h2-flex-stretch-leaf-from-live",
    monkeypatch: [
      "tc-lab-draw-supersample-downscale",
      "tc-lab-w3-decode-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "base64-roundtrip",
    labToCanvasOpts: {
      "backingRound": "round"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 96,
    slug: "lab-toCanvas / chromium / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-draw-device-grid-floor / xy / fosvg-none / markup-none / style-device / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + integer-viewbox + math-pin-fo-container-dims-from-live-root + tc-lab-draw-device-grid-floor + FO x/y +0.0001 + stylePixels device + decode idle + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "integer-viewbox",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-device-grid-floor",
      "tc-lab-w3-decode-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: null,
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 97,
    slug: "lab-toCanvas / full / root-none / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / xy / fo-shape-rendering-auto / explicit-xmlns-strip-transforms / opt-natural / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + no svgRootRound + math-floor-viewbox-stash-frac + tc-canvas-backing-ceil + FO x/y +0.0001 + fo-shape-rendering-auto + explicit-xmlns-strip-transforms + optDims natural + decode idle + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: [
      "tc-canvas-backing-ceil",
      "tc-lab-w3-decode-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001"
    },
    foSvgPatch: "fo-shape-rendering-auto",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "optDims": "natural"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 98,
    slug: "lab-toCanvas / chromium / root-none / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / attr-none / fosvg-none / strip-xml-declaration / opt-harness-device / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + no svgRootRound + integer-snap-all-rects + tc-lab-draw-h2-frac-draw + strip-xml-declaration + optDims harness-device + decode idle + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: null,
    radicalPatch: "integer-snap-all-rects",
    monkeypatch: [
      "tc-lab-draw-h2-frac-draw",
      "tc-lab-w3-decode-idle"
    ],
    foAttrPatch: null,
    foSvgPatch: null,
    svgMarkupPatch: "strip-xml-declaration",
    labToCanvasOpts: {
      "optDims": "harness-device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 99,
    slug: "lab-toCanvas / full / int-floor / math-pin-fo-container-dims-from-live-root / tc-lab-draw-create-image-bitmap / xywh / fe-color-matrix-identity / markup-none / floor-device / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + H2 normalize + leaf + Chromium + int-floor + math-pin-fo-container-dims-from-live-root + tc-lab-draw-create-image-bitmap + FO x/y/w/h +0.0001 + fe-color-matrix-identity + floor backing + device dpr + decode idle + globalAlpha 0.99",
    cssKey: "full",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-pin-fo-container-dims-from-live-root",
    monkeypatch: [
      "tc-lab-draw-create-image-bitmap",
      "tc-lab-w3-decode-idle"
    ],
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "fe-color-matrix-identity",
    svgMarkupPatch: null,
    labToCanvasOpts: {
      "backingRound": "floor",
      "dprSource": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  },
  {
    n: 100,
    slug: "lab-toCanvas / chromium / int-floor / math-floor-viewbox-stash-frac / mp-none / xywh / filter-noop-defs / explicit-xmlns-strip-transforms / ceil-style-device / tc-lab-w3-decode-idle / alpha-099",
    idea: "lab-toCanvas fork + FO baseline + Chromium copy + int-floor + math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + filter-noop-defs + explicit-xmlns-strip-transforms + ceil backing + device style pixels + decode idle + globalAlpha 0.99",
    cssKey: "chromium",
    rasterPatch: "lab-toCanvas",
    svgRootRound: "int-floor",
    radicalPatch: "math-floor-viewbox-stash-frac",
    monkeypatch: "tc-lab-w3-decode-idle",
    foAttrPatch: {
      "x": "0.0001",
      "y": "0.0001",
      "width": "0.0001",
      "height": "0.0001"
    },
    foSvgPatch: "filter-noop-defs",
    svgMarkupPatch: "explicit-xmlns-strip-transforms",
    labToCanvasOpts: {
      "backingRound": "ceil",
      "stylePixels": "device"
    },
    labToCanvasCtx: {
      "globalAlpha": 0.99
    }
  }
]

if (SPECS.length !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave7-gen-02.js: expected 100 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== SPECS.length) {
  throw new Error(`recipes-tocanvas-lab-wave7-gen-02.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id: `tc-lab-w7g-02-${num}`,
    label: `tc-lab-w7g-02 #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: resolveCss(spec.cssKey),
    inject: 'both',
    rasterPatch: spec.rasterPatch,
    category: 'tocanvas',
    active: true,
    notes: `Wave7 gen shard 02; FO-raster lab-toCanvas combinator — no text bypass.`,
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  if (spec.foAttrPatch) recipe.foAttrPatch = spec.foAttrPatch
  if (spec.foSvgPatch) recipe.foSvgPatch = spec.foSvgPatch
  if (spec.svgMarkupPatch) recipe.svgMarkupPatch = spec.svgMarkupPatch
  if (spec.labToCanvasOpts) recipe.labToCanvasOpts = spec.labToCanvasOpts
  if (spec.labToCanvasCtx) recipe.labToCanvasCtx = spec.labToCanvasCtx
  return recipe
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-gen-02.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

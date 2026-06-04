/**
 * Lab toCanvas wave-6 gen shard c — lab-toCanvas-frac × radical × svgRootRound.
 * 100 recipes: tc-lab-w6g-c-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-c-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @param {unknown} mp */
function mpKey(mp) {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas-frac / h2 / round-dims / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical integer-snap-all-rects + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas-frac / leaf / round-dims / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical integer-snap-all-rects + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas-frac / chromium / round-dims / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical integer-snap-all-rects + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical integer-snap-all-rects + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas-frac / full / round-dims / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical integer-snap-all-rects + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas-frac / none / round-dims / integer-snap-all-rects / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical integer-snap-all-rects + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas-frac / leaf / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas-frac / chromium / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas-frac / full / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas-frac / none / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas-frac / fo / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas-frac / h2 / round-dims / math-pin-fo-container-dims-from-live-root / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + mp drawImage-wrap + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas-frac / chromium / round-dims / no-rad / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / no-rad / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas-frac / full / round-dims / no-rad / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas-frac / none / round-dims / no-rad / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas-frac / h2 / round-dims / no-rad / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas-frac / leaf / round-dims / no-rad / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas-frac / full / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas-frac / none / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas-frac / fo / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas-frac / h2 / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas-frac / leaf / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas-frac / chromium / round-dims / h2-flex-stretch-leaf-from-live / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas-frac / full / round-dims / lab-pin-half-leading-padding-top / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical lab-pin-half-leading-padding-top + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas-frac / none / round-dims / lab-pin-half-leading-padding-top / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical lab-pin-half-leading-padding-top + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas-frac / h2 / round-dims / lab-pin-half-leading-padding-top / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical lab-pin-half-leading-padding-top + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas-frac / leaf / round-dims / lab-pin-half-leading-padding-top / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical lab-pin-half-leading-padding-top + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas-frac / chromium / round-dims / lab-pin-half-leading-padding-top / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical lab-pin-half-leading-padding-top + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / lab-pin-half-leading-padding-top / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical lab-pin-half-leading-padding-top + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas-frac / none / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas-frac / fo / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas-frac / h2 / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas-frac / leaf / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas-frac / chromium / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas-frac / full / round-dims / h2-container-lang / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical h2-container-lang + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "h2-container-lang",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas-frac / fo / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical h2-pin-line-height-from-live + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas-frac / h2 / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical h2-pin-line-height-from-live + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas-frac / leaf / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical h2-pin-line-height-from-live + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas-frac / chromium / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical h2-pin-line-height-from-live + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical h2-pin-line-height-from-live + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas-frac / full / round-dims / h2-pin-line-height-from-live / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical h2-pin-line-height-from-live + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas-frac / h2 / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas-frac / leaf / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas-frac / chromium / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas-frac / full / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas-frac / none / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas-frac / fo / round-dims / lab-pin-normal-lh-from-probe / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical lab-pin-normal-lh-from-probe + mp drawImage-wrap + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas-frac / leaf / round-dims / chrome-legacy-webkit-bundle / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical chrome-legacy-webkit-bundle + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "chrome-legacy-webkit-bundle",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas-frac / chromium / round-dims / chrome-legacy-webkit-bundle / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical chrome-legacy-webkit-bundle + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "chrome-legacy-webkit-bundle",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / chrome-legacy-webkit-bundle / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical chrome-legacy-webkit-bundle + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "chrome-legacy-webkit-bundle",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas-frac / full / round-dims / chrome-legacy-webkit-bundle / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical chrome-legacy-webkit-bundle + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "chrome-legacy-webkit-bundle",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas-frac / none / round-dims / chrome-legacy-webkit-bundle / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical chrome-legacy-webkit-bundle + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "chrome-legacy-webkit-bundle",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas-frac / h2 / round-dims / chrome-legacy-webkit-bundle / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical chrome-legacy-webkit-bundle + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "chrome-legacy-webkit-bundle",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas-frac / chromium / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas-frac / full / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas-frac / none / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas-frac / fo / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas-frac / h2 / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas-frac / leaf / round-dims / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / remove-fe-filters / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical remove-fe-filters + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas-frac / full / round-dims / remove-fe-filters / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical remove-fe-filters + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas-frac / none / round-dims / remove-fe-filters / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical remove-fe-filters + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas-frac / h2 / round-dims / remove-fe-filters / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical remove-fe-filters + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas-frac / leaf / round-dims / remove-fe-filters / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical remove-fe-filters + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas-frac / chromium / round-dims / remove-fe-filters / drawImage-wrap / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical remove-fe-filters + mp drawImage-wrap + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "drawImage-wrap",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas-frac / full / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas-frac / none / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas-frac / fo / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas-frac / h2 / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas-frac / leaf / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas-frac / chromium / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / math-half-leading-with-floor-viewbox / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical math-half-leading-with-floor-viewbox + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas-frac / none / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas-frac / h2 / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas-frac / leaf / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas-frac / chromium / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas-frac / full / round-dims / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas-frac / fo / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas-frac / h2 / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas-frac / leaf / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas-frac / chromium / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas-frac / full / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas-frac / none / round-dims / integer-snap-all-rects / drawImage-wrap / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical integer-snap-all-rects + mp drawImage-wrap + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "drawImage-wrap",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas-frac / h2 / round-dims / math-pin-fo-container-dims-from-live-root / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas-frac / leaf / round-dims / math-pin-fo-container-dims-from-live-root / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas-frac / chromium / round-dims / math-pin-fo-container-dims-from-live-root / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / math-pin-fo-container-dims-from-live-root / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas-frac / full / round-dims / math-pin-fo-container-dims-from-live-root / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas-frac / none / round-dims / math-pin-fo-container-dims-from-live-root / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound round-dims + radical math-pin-fo-container-dims-from-live-root + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas-frac / leaf / round-dims / no-rad / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound round-dims + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas-frac / chromium / round-dims / no-rad / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound round-dims + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas-frac / h2+chromium / round-dims / no-rad / tc-lab-draw-h2-frac-draw / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound round-dims + mp tc-lab-draw-h2-frac-draw + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-c.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-c.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-c-${num}`,
    label: `w6gc #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen c; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-c.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (!String(r.rasterPatch ?? '').startsWith('lab-toCanvas')) {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas*`)
  }
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.foAttrPatch ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    mpKey(r.monkeypatch),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-gen-c.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

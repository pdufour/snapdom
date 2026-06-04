/**
 * Lab toCanvas wave-6 gen shard e — lab-toCanvas × labToCanvasOpts backing/dpr/style.
 * 100 recipes: tc-lab-w6g-e-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-e-*'
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
    slug: "lab-toCanvas / fo / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + H2 + Chromium + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas / full / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas / fo / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2 + Chromium + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas / none / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + no extra CSS + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas / fo / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-draw-image-round-all + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas / none / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + no extra CSS + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas / fo / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + H2 + Chromium + mp tc-canvas-backing-ceil + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + H2 + Chromium + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas / none / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + no extra CSS + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas / fo / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / floor+device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + no foAttrPatch + backing floor + device dpr/style + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / opt-harness-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + optDims harness-device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + Chromium + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas / none / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + no extra CSS + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas / fo / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-canvas-backing-ceil + no foAttrPatch + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / tc-draw-image-round-all / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + mp tc-draw-image-round-all + labPreRaster device-grid-floor + no foAttrPatch + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + H2 + Chromium + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas / full / no-rr / no-rad / no-mp / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas / fo / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / no-fosvg / no-markup / ctx-scale / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      ctxScale: true,
      },
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + H2 + Chromium + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas / none / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + no extra CSS + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas / fo / no-rr / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / style-device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-draw-image-round-all + no foAttrPatch + stylePixels device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
      labToCanvasOpts: {
      stylePixels: "device",
      },
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas / leaf / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas + FO + flex leaf strut + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas / chromium / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas + FO + Chromium copies + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas / h2+chromium / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas + H2 + Chromium + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas / full / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas / none / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas + no extra CSS + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas / h2 / no-rr / integer-snap-all-rects / no-mp / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + radical integer-snap-all-rects + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-canvas-backing-ceil + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + Chromium + mp tc-canvas-backing-ceil + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / raster / no-attr / no-fosvg / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + mp tc-canvas-backing-ceil + no foAttrPatch + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-e.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-e.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-e-${num}`,
    label: `w6ge #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen e; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-e.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave6-gen-e.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

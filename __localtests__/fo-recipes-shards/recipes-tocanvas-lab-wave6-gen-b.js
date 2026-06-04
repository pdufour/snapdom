/**
 * Lab toCanvas wave-6 gen shard b — lab-toCanvas-decode × monkeypatch × svgRootRound.
 * 100 recipes: tc-lab-w6g-b-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-b-*'
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
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / tc-canvas-backing-floor / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp tc-canvas-backing-floor + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-ceil + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-ceil",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-ceil + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-ceil",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-ceil + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-ceil",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-ceil + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-ceil",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-ceil + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-ceil",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-ceil / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-ceil + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-ceil",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp tc-draw-image-round-all + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / no-mp / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / no-mp / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / no-mp / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / no-mp / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / no-mp / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / no-mp / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / drawImage-wrap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp drawImage-wrap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp raf-before-draw + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "raf-before-draw",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp raf-before-draw + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "raf-before-draw",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp raf-before-draw + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "raf-before-draw",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp raf-before-draw + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "raf-before-draw",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp raf-before-draw + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "raf-before-draw",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp raf-before-draw + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "raf-before-draw",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / image-decode-twice / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp image-decode-twice + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / tc-lab-draw-device-grid-floor / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-lab-draw-device-grid-floor + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-create-image-bitmap-pixelated + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / raster / xy / no-fosvg / no-markup / none / smooth-high",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-lab-draw-create-image-bitmap + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-supersample-downscale + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-supersample-downscale + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-supersample-downscale + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-supersample-downscale + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-supersample-downscale + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / will-read",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-supersample-downscale + no foAttrPatch + default labToCanvasOpts + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / tc-lab-draw-two-stage / no-lpr / raster / xywh / no-fosvg / no-markup / none / reset-xform",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-lab-draw-two-stage + FO x/y/w/h +0.0001 + default labToCanvasOpts + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-floor-viewbox-stash-frac / tc-lab-draw-h2-frac-draw / no-lpr / both / xy / no-fosvg / no-markup / none / smooth-off-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-h2-frac-draw + FO x/y +0.0001 + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas-decode / full / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas-decode / none / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / no-fosvg / no-markup / none / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + mp tc-decode-safari-raf + no foAttrPatch + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / both / xywh / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y/w/h +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-b.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-b.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-b-${num}`,
    label: `w6gb #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen b; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-b.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave6-gen-b.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

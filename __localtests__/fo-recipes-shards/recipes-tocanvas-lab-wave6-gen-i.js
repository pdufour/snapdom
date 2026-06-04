/**
 * Lab toCanvas wave-6 gen shard i — lab-toCanvas-decode+frac × labPreRaster × mp.
 * 100 recipes: tc-lab-w6g-i-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-i-*'
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
    slug: "lab-toCanvas-frac / full / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas-frac / none / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-frac + no extra CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas-frac / h2 / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas-frac / leaf / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas-frac / chromium / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-frac + FO + Chromium copies + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-frac + H2 + Chromium + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas-decode / none / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + no extra CSS + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas-decode / fo / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas-decode / h2 / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas-decode / leaf / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas-decode / chromium / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + H2 + Chromium + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas-decode / full / no-rr / no-rad / tc-decode-safari-raf / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / reset-xform",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + mp tc-decode-safari-raf + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas-frac / fo / no-rr / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-off-high",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + radical h2-fo-percent-int-viewbox + mp tc-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas-frac / h2 / no-rr / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-off-high",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + radical h2-fo-percent-int-viewbox + mp tc-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas-frac / leaf / no-rr / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-off-high",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + radical h2-fo-percent-int-viewbox + mp tc-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas-frac / chromium / no-rr / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-off-high",
    idea: "lab-toCanvas-frac + FO + Chromium copies + radical h2-fo-percent-int-viewbox + mp tc-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-off-high",
    idea: "lab-toCanvas-frac + H2 + Chromium + radical h2-fo-percent-int-viewbox + mp tc-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas-frac / full / no-rr / h2-fo-percent-int-viewbox / tc-canvas-backing-floor / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-off-high",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + radical h2-fo-percent-int-viewbox + mp tc-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas-decode / h2 / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas-decode / leaf / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas-decode / chromium / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas-decode / full / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas-decode / none / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + no extra CSS + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas-decode / fo / no-rr / math-floor-viewbox-stash-frac / tc-draw-image-round-all / no-lpr / raster / xy / no-fosvg / base64-roundtrip / ctx-scale / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + radical math-floor-viewbox-stash-frac + mp tc-draw-image-round-all + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas-frac / leaf / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / style-device / smooth-off",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas-frac / chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / style-device / smooth-off",
    idea: "lab-toCanvas-frac + FO + Chromium copies + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / style-device / smooth-off",
    idea: "lab-toCanvas-frac + H2 + Chromium + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas-frac / full / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / style-device / smooth-off",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas-frac / none / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / style-device / smooth-off",
    idea: "lab-toCanvas-frac + no extra CSS + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas-frac / h2 / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / style-device / smooth-off",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas-decode / chromium / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas-decode / full / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas-decode / none / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + no extra CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas-decode / fo / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas-decode / h2 / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas-decode / leaf / no-rr / h2-fo-percent-int-viewbox / tc-lab-mp-draw-image-floor-dest-y / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + radical h2-fo-percent-int-viewbox + mp tc-lab-mp-draw-image-floor-dest-y + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / backing-floor / will-read",
    idea: "lab-toCanvas-frac + H2 + Chromium + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas-frac / full / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / backing-floor / will-read",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas-frac / none / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / backing-floor / will-read",
    idea: "lab-toCanvas-frac + no extra CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas-frac / h2 / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / backing-floor / will-read",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas-frac / leaf / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / backing-floor / will-read",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas-frac / chromium / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / backing-floor / will-read",
    idea: "lab-toCanvas-frac + FO + Chromium copies + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas-decode / full / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas-decode / none / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + no extra CSS + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas-decode / fo / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas-decode / h2 / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas-decode / leaf / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas-decode / chromium / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / floor+device / reset-xform",
    idea: "lab-toCanvas-decode + H2 + Chromium + mp tc-lab-draw-supersample-downscale + no foAttrPatch + foSvg fo-shape-rendering-auto + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-draw-supersample-downscale",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas-frac / none / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas-frac + no extra CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas-frac / h2 / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas-frac / leaf / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas-frac / chromium / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas-frac + FO + Chromium copies + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas-frac + H2 + Chromium + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas-frac / full / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-h2-frac-draw / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-h2-frac-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas-decode / fo / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas-decode / h2 / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas-decode / leaf / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas-decode / chromium / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas-decode / full / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas-decode / none / no-rr / math-floor-viewbox-stash-frac / tc-canvas-backing-round / no-lpr / raster / xy / no-fosvg / base64-roundtrip / dpr-device / none",
    idea: "lab-toCanvas-decode + no extra CSS + radical math-floor-viewbox-stash-frac + mp tc-canvas-backing-round + FO x/y +0.0001 + markup base64-roundtrip + dprSource device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-canvas-backing-round",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas-frac / h2 / no-rr / no-rad / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas-frac / leaf / no-rr / no-rad / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas-frac / chromium / no-rr / no-rad / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + FO + Chromium copies + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / no-rad / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + H2 + Chromium + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas-frac / full / no-rr / no-rad / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas-frac / none / no-rr / no-rad / tc-canvas-backing-ceil / device-grid-floor / both / no-attr / fo-shape-rendering-auto / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + no extra CSS + mp tc-canvas-backing-ceil + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas-decode / leaf / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas-decode / chromium / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + FO + Chromium copies + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + H2 + Chromium + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas-decode / full / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas-decode / none / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + no extra CSS + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas-decode / fo / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas-decode / h2 / no-rr / h2-fo-percent-int-viewbox / no-mp / no-lpr / raster / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / none / smooth-high",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + radical h2-fo-percent-int-viewbox + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas-frac / chromium / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-smoothing-off / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / ctx-scale / will-read",
    idea: "lab-toCanvas-frac + FO + Chromium copies + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-smoothing-off + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-smoothing-off / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / ctx-scale / will-read",
    idea: "lab-toCanvas-frac + H2 + Chromium + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-smoothing-off + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas-frac / full / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-smoothing-off / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / ctx-scale / will-read",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-smoothing-off + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas-frac / none / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-smoothing-off / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / ctx-scale / will-read",
    idea: "lab-toCanvas-frac + no extra CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-smoothing-off + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas-frac / h2 / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-smoothing-off / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / ctx-scale / will-read",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-smoothing-off + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas-frac / leaf / no-rr / math-floor-viewbox-stash-frac / tc-lab-mp-draw-image-smoothing-off / device-grid-floor / both / xy / no-fosvg / base64-roundtrip / ctx-scale / will-read",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + radical math-floor-viewbox-stash-frac + mp tc-lab-mp-draw-image-smoothing-off + labPreRaster device-grid-floor + FO x/y +0.0001 + markup base64-roundtrip + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas-decode / h2+chromium / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + H2 + Chromium + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas-decode / full / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas-decode / none / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + no extra CSS + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas-decode / fo / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas-decode / h2 / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas-decode / leaf / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas-decode / chromium / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / no-attr / fo-shape-rendering-auto / no-markup / style-device / reset-xform",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-lab-mp-draw-image-ceil-all + no foAttrPatch + foSvg fo-shape-rendering-auto + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foSvgPatch: "fo-shape-rendering-auto",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas-frac / full / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-off-high",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-create-image-bitmap + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas-frac / none / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-off-high",
    idea: "lab-toCanvas-frac + no extra CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-create-image-bitmap + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas-frac / h2 / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-off-high",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-create-image-bitmap + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas-frac / leaf / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-off-high",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-create-image-bitmap + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas-frac / chromium / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-off-high",
    idea: "lab-toCanvas-frac + FO + Chromium copies + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-create-image-bitmap + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas-frac / h2+chromium / no-rr / h2-fo-percent-int-viewbox / tc-lab-draw-create-image-bitmap / device-grid-floor / both / xywh / fe-color-matrix-identity / explicit-xmlns-strip-transforms / backing-round / smooth-off-high",
    idea: "lab-toCanvas-frac + H2 + Chromium + radical h2-fo-percent-int-viewbox + mp tc-lab-draw-create-image-bitmap + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup explicit-xmlns-strip-transforms + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas-decode / none / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / no-lpr / raster / xy / no-fosvg / base64-roundtrip / backing-floor / none",
    idea: "lab-toCanvas-decode + no extra CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas-decode / fo / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / no-lpr / raster / xy / no-fosvg / base64-roundtrip / backing-floor / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas-decode / h2 / no-rr / math-floor-viewbox-stash-frac / tc-lab-draw-two-stage / no-lpr / raster / xy / no-fosvg / base64-roundtrip / backing-floor / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + radical math-floor-viewbox-stash-frac + mp tc-lab-draw-two-stage + FO x/y +0.0001 + markup base64-roundtrip + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "tc-lab-draw-two-stage",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-i.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-i.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-i-${num}`,
    label: `w6gi #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen i; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-i.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave6-gen-i.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

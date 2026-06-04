/**
 * Lab toCanvas wave-4 gen shard d — lab-toCanvas × monkeypatch × svgRootRound (draw probes).
 * 100 recipes: tc-lab-w4gd-001..100 — combinatorial lab-toCanvas mechanisms.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4gd-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp createImageBitmap-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp createImageBitmap-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp createImageBitmap-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp createImageBitmap-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp decode-interval-prototype — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp decode-interval-prototype — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp decode-interval-prototype — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp decode-interval-prototype — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp decode-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp decode-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr baseline raster",
    idea: "lab-toCanvas + inject baseline CSS + mp decode-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp decode-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp decode-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp draw-image-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp draw-image-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp draw-image-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp draw-image-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp drawImage-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp drawImage-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp drawImage-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp drawImage-wrap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp image-decode-twice — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp image-decode-twice — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp image-decode-twice — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp image-decode-twice — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr baseline raster",
    idea: "lab-toCanvas + inject baseline CSS + mp image-decode-twice — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp raf-before-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp raf-before-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp raf-before-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr baseline raster",
    idea: "lab-toCanvas + inject baseline CSS + mp raf-before-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp raf-before-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-canvas-backing-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-canvas-backing-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-canvas-backing-round — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-canvas-backing-round — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-getContext-will-read-proto — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-getContext-will-read-proto — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-getContext-will-read-proto — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-getContext-will-read-proto — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-global-alpha-099 — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-global-alpha-099 — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-global-alpha-099 — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-global-alpha-099 — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-global-alpha-half — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-global-alpha-half — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-global-alpha-half — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-global-alpha-half — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-reset-transform-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-reset-transform-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-reset-transform-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-reset-transform-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-reset-transform-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-reset-transform-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-reset-transform-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-reset-transform-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-smooth-off — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-smooth-quality-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-smooth-quality-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-smooth-quality-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-smooth-quality-high — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-smooth-quality-low — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-smooth-quality-low — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-smooth-quality-low — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-smooth-quality-low — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-smooth-quality-medium — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-smooth-quality-medium — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-smooth-quality-medium — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-smooth-quality-medium — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-ctx-will-read-frequently — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-will-read-frequently — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-ctx-will-read-frequently — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-ctx-will-read-frequently — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas no-rr tc-decode-safari-raf no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-decode-safari-raf — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas no-rr tc-decode-safari-raf no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-decode-safari-raf — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas no-rr tc-decode-safari-raf no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-decode-safari-raf — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-lab-draw-create-image-bitmap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-lab-draw-create-image-bitmap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-lab-draw-create-image-bitmap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-lab-draw-create-image-bitmap — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-lab-draw-create-image-bitmap-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-lab-draw-create-image-bitmap-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-lab-draw-create-image-bitmap-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-lab-draw-create-image-bitmap-pixelated — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr fo raster",
    idea: "lab-toCanvas + FO_BASELINE_CSS + mp tc-lab-draw-device-grid-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-lab-draw-device-grid-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-lab-draw-device-grid-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr chromium raster",
    idea: "lab-toCanvas + FO + Chromium copies + mp tc-lab-draw-device-grid-floor — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas no-rr tc-lab-draw-h2-frac-draw no-lpr h2 raster",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + mp tc-lab-draw-h2-frac-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas no-rr tc-lab-draw-h2-frac-draw no-lpr leaf raster",
    idea: "lab-toCanvas + FO + flex leaf strut + mp tc-lab-draw-h2-frac-draw — wave-4 lab-toCanvas × monkeypatch × svgRootRound (draw probes)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-gen-d.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave4-gen-d.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4gd-${num}`,
    label: `w4gd #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-4 lab toCanvas gen d; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-gen-d.js: expected 100 recipes, got ${RECIPES.length}`,
  )
}

const mpKey = (mp) => {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
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
    mpKey(r.monkeypatch),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-gen-d.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

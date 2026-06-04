/**
 * Lab toCanvas wave-4 gen shard e — lab-toCanvas × labPreRaster device-grid × svgRootRound.
 * 100 recipes: tc-lab-w4ge-001..100 — combinatorial lab-toCanvas mechanisms.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4ge-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas no-rr createImageBitmap-high no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas no-rr decode-interval-prototype no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas no-rr decode-wrap no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas no-rr draw-image-pixelated no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas no-rr drawImage-wrap no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas no-rr image-decode-twice no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas no-rr raf-before-draw no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas no-rr tc-canvas-backing-floor no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas no-rr tc-canvas-backing-round no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas no-rr tc-ctx-full-smooth-off-will-read no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas no-rr tc-ctx-getContext-will-read-proto no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-getContext-will-read-proto",
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-099 no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-099",
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas no-rr tc-ctx-global-alpha-half no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-global-alpha-half",
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-draw no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-draw",
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas no-rr tc-ctx-reset-transform-smooth-off no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-reset-transform-smooth-off",
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-off no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-off",
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-high no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-high",
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-low no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-low",
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas no-rr tc-ctx-smooth-quality-medium no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-smooth-quality-medium",
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas no-rr tc-ctx-will-read-frequently no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-ctx-will-read-frequently",
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas no-rr tc-decode-safari-raf no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas no-rr tc-decode-safari-raf no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas no-rr tc-decode-safari-raf no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas no-rr tc-lab-draw-create-image-bitmap-pixelated no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas no-rr tc-lab-draw-device-grid-floor no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas no-rr tc-lab-draw-h2-frac-draw no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas no-rr tc-lab-draw-h2-frac-draw no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas no-rr tc-lab-draw-h2-frac-draw no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas no-rr tc-lab-draw-supersample-downscale no-lpr baseline both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas no-rr tc-lab-draw-supersample-downscale no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas no-rr tc-lab-draw-supersample-downscale no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas no-rr tc-lab-draw-supersample-downscale no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas no-rr tc-lab-draw-two-stage no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas no-rr tc-lab-mp-canvas-backing-ceil no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas no-rr tc-lab-mp-canvas-backing-ceil no-lpr leaf both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas no-rr tc-lab-mp-canvas-backing-ceil no-lpr chromium both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas no-rr tc-lab-mp-canvas-backing-floor no-lpr h2 both fill",
    idea: "lab-toCanvas fill combo — wave-4 lab-toCanvas × labPreRaster device-grid × svgRootRound",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-gen-e.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave4-gen-e.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4ge-${num}`,
    label: `w4ge #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-4 lab toCanvas gen e; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-gen-e.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave4-gen-e.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

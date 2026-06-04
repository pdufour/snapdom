/**
 * Lab toCanvas wave-4 gen shard b — lab-toCanvas-decode × svgRootRound × monkeypatch.
 * 100 recipes: tc-lab-w4gb-001..100 — combinatorial lab-toCanvas mechanisms.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4gb-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas-decode no-rr no-mp no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas-decode no-rr no-mp no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas-decode no-rr no-mp no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas-decode no-rr no-mp no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas-decode no-rr no-mp no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas-decode no-rr no-mp no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas-decode no-rr createImageBitmap-high no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp createImageBitmap-high — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas-decode no-rr decode-interval-prototype no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp decode-interval-prototype — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr fo both",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas-decode no-rr decode-wrap no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp decode-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas-decode no-rr draw-image-pixelated no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp draw-image-pixelated — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas-decode no-rr drawImage-wrap no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp drawImage-wrap — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas-decode no-rr image-decode-twice no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp image-decode-twice — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas-decode no-rr raf-before-draw no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp raf-before-draw — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr fo both",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-ceil no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-canvas-backing-ceil — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-floor no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-canvas-backing-floor — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr fo raster",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr h2 raster",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr chromium raster",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas-decode no-rr tc-canvas-backing-round no-lpr baseline raster",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp tc-canvas-backing-round — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas-decode no-rr tc-ctx-full-smooth-off-will-read no-lpr h2 both",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas-decode no-rr tc-ctx-full-smooth-off-will-read no-lpr leaf both",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas-decode no-rr tc-ctx-full-smooth-off-will-read no-lpr chromium both",
    idea: "lab-toCanvas-decode + FO + Chromium copies + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas-decode no-rr tc-ctx-full-smooth-off-will-read no-lpr baseline both",
    idea: "lab-toCanvas-decode + inject baseline CSS + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas-decode no-rr tc-ctx-full-smooth-off-will-read no-lpr leaf raster",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + mp tc-ctx-full-smooth-off-will-read — wave-4 lab-toCanvas-decode × svgRootRound × monkeypatch",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas-decode",
      monkeypatch: "tc-ctx-full-smooth-off-will-read",
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-gen-b.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave4-gen-b.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4gb-${num}`,
    label: `w4gb #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-4 lab toCanvas gen b; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-gen-b.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave4-gen-b.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

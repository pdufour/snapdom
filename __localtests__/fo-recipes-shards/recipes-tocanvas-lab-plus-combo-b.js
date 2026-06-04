/**
 * Lab toCanvas plus combo B — tc-lab-cb-001..080.
 * 3 knobs: capture CSS variant + svgRootRound + tc monkeypatch on lab-toCanvas
 * Each recipe: rasterPatch lab-toCanvas + 2–3 knobs (svgRootRound / monkeypatch).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-cb-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, useBaseline?: boolean, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "baseline integer-viewbox decode-interval-wrap",
    idea: "lab-toCanvas + baseline CSS + integer-viewbox + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 2,
    slug: "baseline integer-viewbox createImageBitmap-high",
    idea: "lab-toCanvas + baseline CSS + integer-viewbox + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 3,
    slug: "baseline integer-viewbox tc-lab-draw-create-image-bitmap rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + baseline CSS + integer-viewbox + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 4,
    slug: "baseline integer-viewbox snapdom-post-fo-css",
    idea: "lab-toCanvas + baseline CSS + integer-viewbox + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 5,
    slug: "baseline round-dims tc-decode-safari-raf",
    idea: "lab-toCanvas + baseline CSS + round-dims + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 6,
    slug: "baseline round-dims decode-interval-wrap",
    idea: "lab-toCanvas + baseline CSS + round-dims + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 7,
    slug: "baseline round-dims createImageBitmap-high rr-integer-viewbox",
    idea: "lab-toCanvas + baseline CSS + round-dims + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 8,
    slug: "baseline round-dims tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + baseline CSS + round-dims + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 9,
    slug: "baseline round-dims snapdom-post-fo-css",
    idea: "lab-toCanvas + baseline CSS + round-dims + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 10,
    slug: "baseline int-floor tc-decode-safari-raf",
    idea: "lab-toCanvas + baseline CSS + int-floor + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 11,
    slug: "baseline int-floor decode-interval-wrap",
    idea: "lab-toCanvas + baseline CSS + int-floor + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 12,
    slug: "baseline int-floor createImageBitmap-high",
    idea: "lab-toCanvas + baseline CSS + int-floor + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 13,
    slug: "baseline int-floor tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + baseline CSS + int-floor + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 14,
    slug: "baseline int-floor snapdom-post-fo-css",
    idea: "lab-toCanvas + baseline CSS + int-floor + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 15,
    slug: "bare integer-viewbox tc-decode-safari-raf rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both rr-round-dims",
    idea: "lab-toCanvas + bare CSS + integer-viewbox + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 16,
    slug: "bare integer-viewbox decode-interval-wrap",
    idea: "lab-toCanvas + bare CSS + integer-viewbox + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 17,
    slug: "bare integer-viewbox createImageBitmap-high",
    idea: "lab-toCanvas + bare CSS + integer-viewbox + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 18,
    slug: "bare integer-viewbox tc-lab-draw-create-image-bitmap rr-integer-viewbox inj-both mp-draw-image-pixelated inj-raster rr-round-dims",
    idea: "lab-toCanvas + bare CSS + integer-viewbox + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 19,
    slug: "bare integer-viewbox snapdom-post-fo-css",
    idea: "lab-toCanvas + bare CSS + integer-viewbox + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 20,
    slug: "bare round-dims tc-decode-safari-raf",
    idea: "lab-toCanvas + bare CSS + round-dims + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 21,
    slug: "bare round-dims decode-interval-wrap rr-integer-viewbox",
    idea: "lab-toCanvas + bare CSS + round-dims + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 22,
    slug: "bare round-dims createImageBitmap-high",
    idea: "lab-toCanvas + bare CSS + round-dims + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 23,
    slug: "bare round-dims tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + bare CSS + round-dims + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 24,
    slug: "bare round-dims snapdom-post-fo-css",
    idea: "lab-toCanvas + bare CSS + round-dims + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 25,
    slug: "bare int-floor tc-decode-safari-raf",
    idea: "lab-toCanvas + bare CSS + int-floor + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 26,
    slug: "bare int-floor decode-interval-wrap",
    idea: "lab-toCanvas + bare CSS + int-floor + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 27,
    slug: "bare int-floor createImageBitmap-high rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + bare CSS + int-floor + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 28,
    slug: "bare int-floor tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + bare CSS + int-floor + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 29,
    slug: "bare int-floor snapdom-post-fo-css",
    idea: "lab-toCanvas + bare CSS + int-floor + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 30,
    slug: "chromium integer-viewbox tc-decode-safari-raf",
    idea: "lab-toCanvas + chromium CSS + integer-viewbox + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 31,
    slug: "chromium integer-viewbox decode-interval-wrap rr-integer-viewbox inj-raster mp-draw-image-pixelated",
    idea: "lab-toCanvas + chromium CSS + integer-viewbox + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 32,
    slug: "chromium integer-viewbox createImageBitmap-high",
    idea: "lab-toCanvas + chromium CSS + integer-viewbox + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 33,
    slug: "chromium integer-viewbox tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + chromium CSS + integer-viewbox + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 34,
    slug: "chromium integer-viewbox snapdom-post-fo-css rr-integer-viewbox inj-both mp-draw-image-pixelated",
    idea: "lab-toCanvas + chromium CSS + integer-viewbox + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 35,
    slug: "chromium round-dims tc-decode-safari-raf",
    idea: "lab-toCanvas + chromium CSS + round-dims + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 36,
    slug: "chromium round-dims decode-interval-wrap",
    idea: "lab-toCanvas + chromium CSS + round-dims + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 37,
    slug: "chromium round-dims createImageBitmap-high rr-integer-viewbox",
    idea: "lab-toCanvas + chromium CSS + round-dims + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 38,
    slug: "chromium round-dims tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + chromium CSS + round-dims + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 39,
    slug: "chromium round-dims snapdom-post-fo-css",
    idea: "lab-toCanvas + chromium CSS + round-dims + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 40,
    slug: "chromium int-floor tc-decode-safari-raf",
    idea: "lab-toCanvas + chromium CSS + int-floor + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 41,
    slug: "chromium int-floor decode-interval-wrap",
    idea: "lab-toCanvas + chromium CSS + int-floor + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 42,
    slug: "chromium int-floor createImageBitmap-high",
    idea: "lab-toCanvas + chromium CSS + int-floor + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 43,
    slug: "chromium int-floor tc-lab-draw-create-image-bitmap rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + chromium CSS + int-floor + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 44,
    slug: "chromium int-floor snapdom-post-fo-css",
    idea: "lab-toCanvas + chromium CSS + int-floor + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 45,
    slug: "h2-normalize integer-viewbox tc-decode-safari-raf rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both",
    idea: "lab-toCanvas + h2-normalize CSS + integer-viewbox + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 46,
    slug: "h2-normalize integer-viewbox decode-interval-wrap",
    idea: "lab-toCanvas + h2-normalize CSS + integer-viewbox + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 47,
    slug: "h2-normalize integer-viewbox createImageBitmap-high rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both rr-round-dims inj-raster",
    idea: "lab-toCanvas + h2-normalize CSS + integer-viewbox + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 48,
    slug: "h2-normalize integer-viewbox tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + h2-normalize CSS + integer-viewbox + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 49,
    slug: "h2-normalize integer-viewbox snapdom-post-fo-css",
    idea: "lab-toCanvas + h2-normalize CSS + integer-viewbox + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 50,
    slug: "h2-normalize round-dims tc-decode-safari-raf",
    idea: "lab-toCanvas + h2-normalize CSS + round-dims + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 51,
    slug: "h2-normalize round-dims decode-interval-wrap",
    idea: "lab-toCanvas + h2-normalize CSS + round-dims + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 52,
    slug: "h2-normalize round-dims createImageBitmap-high",
    idea: "lab-toCanvas + h2-normalize CSS + round-dims + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 53,
    slug: "h2-normalize round-dims tc-lab-draw-create-image-bitmap rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both rr-round-dims inj-raster mp-tc-lab-draw-two-stage",
    idea: "lab-toCanvas + h2-normalize CSS + round-dims + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 54,
    slug: "h2-normalize round-dims snapdom-post-fo-css",
    idea: "lab-toCanvas + h2-normalize CSS + round-dims + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 55,
    slug: "h2-normalize int-floor tc-decode-safari-raf",
    idea: "lab-toCanvas + h2-normalize CSS + int-floor + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 56,
    slug: "h2-normalize int-floor decode-interval-wrap",
    idea: "lab-toCanvas + h2-normalize CSS + int-floor + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 57,
    slug: "h2-normalize int-floor createImageBitmap-high rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both rr-round-dims inj-raster mp-tc-lab-draw-two-stage inj-both",
    idea: "lab-toCanvas + h2-normalize CSS + int-floor + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 58,
    slug: "h2-normalize int-floor tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + h2-normalize CSS + int-floor + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 59,
    slug: "h2-normalize int-floor snapdom-post-fo-css rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + h2-normalize CSS + int-floor + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 60,
    slug: "leaf integer-viewbox tc-decode-safari-raf",
    idea: "lab-toCanvas + leaf CSS + integer-viewbox + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 61,
    slug: "leaf integer-viewbox decode-interval-wrap",
    idea: "lab-toCanvas + leaf CSS + integer-viewbox + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 62,
    slug: "leaf integer-viewbox createImageBitmap-high",
    idea: "lab-toCanvas + leaf CSS + integer-viewbox + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 63,
    slug: "leaf integer-viewbox tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + leaf CSS + integer-viewbox + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 64,
    slug: "leaf integer-viewbox snapdom-post-fo-css",
    idea: "lab-toCanvas + leaf CSS + integer-viewbox + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 65,
    slug: "leaf round-dims tc-decode-safari-raf rr-integer-viewbox",
    idea: "lab-toCanvas + leaf CSS + round-dims + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 66,
    slug: "leaf round-dims decode-interval-wrap",
    idea: "lab-toCanvas + leaf CSS + round-dims + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 67,
    slug: "leaf round-dims createImageBitmap-high",
    idea: "lab-toCanvas + leaf CSS + round-dims + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 68,
    slug: "leaf round-dims tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + leaf CSS + round-dims + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 69,
    slug: "leaf round-dims snapdom-post-fo-css",
    idea: "lab-toCanvas + leaf CSS + round-dims + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 70,
    slug: "leaf int-floor tc-decode-safari-raf",
    idea: "lab-toCanvas + leaf CSS + int-floor + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 71,
    slug: "leaf int-floor decode-interval-wrap",
    idea: "lab-toCanvas + leaf CSS + int-floor + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 72,
    slug: "leaf int-floor createImageBitmap-high",
    idea: "lab-toCanvas + leaf CSS + int-floor + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 73,
    slug: "leaf int-floor tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + leaf CSS + int-floor + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 74,
    slug: "leaf int-floor snapdom-post-fo-css",
    idea: "lab-toCanvas + leaf CSS + int-floor + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 75,
    slug: "baseline+chromium integer-viewbox tc-decode-safari-raf",
    idea: "lab-toCanvas + baseline+chromium CSS + integer-viewbox + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 76,
    slug: "baseline+chromium integer-viewbox decode-interval-wrap rr-integer-viewbox inj-both mp-draw-image-pixelated inj-raster rr-round-dims",
    idea: "lab-toCanvas + baseline+chromium CSS + integer-viewbox + decode-interval-wrap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 77,
    slug: "baseline+chromium integer-viewbox createImageBitmap-high rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both rr-round-dims",
    idea: "lab-toCanvas + baseline+chromium CSS + integer-viewbox + createImageBitmap-high — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 78,
    slug: "baseline+chromium integer-viewbox tc-lab-draw-create-image-bitmap rr-integer-viewbox inj-both mp-draw-image-pixelated inj-raster rr-round-dims inj-both mp-tc-lab-draw-two-stage",
    idea: "lab-toCanvas + baseline+chromium CSS + integer-viewbox + tc-lab-draw-create-image-bitmap — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 79,
    slug: "baseline+chromium integer-viewbox snapdom-post-fo-css rr-integer-viewbox inj-raster mp-draw-image-pixelated inj-both rr-round-dims inj-raster mp-tc-lab-draw-two-stage",
    idea: "lab-toCanvas + baseline+chromium CSS + integer-viewbox + snapdom-post-fo-css — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 80,
    slug: "baseline+chromium round-dims tc-decode-safari-raf",
    idea: "lab-toCanvas + baseline+chromium CSS + round-dims + tc-decode-safari-raf — structural FO CSS + root snap + draw hook",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
]

if (SPECS.length !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-b.js: expected 80 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-b.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.extra.inject ?? 'both'
  const useBaseline = inject === 'both' && spec.useBaseline === true
  return {
    id: `tc-lab-cb-${num}`,
    label: `tc-lab-cb #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: useBaseline ? FO_BASELINE_CSS : (spec.css ?? ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Lab toCanvas plus combo B; CSS × svgRootRound × monkeypatch; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-plus-combo-b.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

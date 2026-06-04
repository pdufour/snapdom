/**
 * Lab toCanvas plus combo D — tc-lab-cd-001..080.
 * 3 knobs: inject scope + svgRootRound + dual monkeypatch on lab-toCanvas
 * Each recipe: rasterPatch lab-toCanvas + 2–3 knobs (svgRootRound / monkeypatch).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-cd-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, useBaseline?: boolean, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "both integer-viewbox tc-draw-image-round-all+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-draw-image-round-all, tc-lab-draw-supersample-downscale] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 2,
    slug: "both integer-viewbox tc-decode-safari-raf+measureText-prime",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-decode-safari-raf, measureText-prime] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-decode-safari-raf", "measureText-prime"],
    },
  },
  {
    n: 3,
    slug: "both integer-viewbox tc-canvas-backing-ceil+decode-interval-wrap",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-canvas-backing-ceil, decode-interval-wrap] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-canvas-backing-ceil", "decode-interval-wrap"],
    },
  },
  {
    n: 4,
    slug: "both integer-viewbox tc-canvas-backing-ceil+fonts-ready-delay",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-canvas-backing-ceil, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-canvas-backing-ceil", "fonts-ready-delay"],
    },
  },
  {
    n: 5,
    slug: "both integer-viewbox decode-interval-prototype+snapdom-post-fo-css",
    idea: "lab-toCanvas inject:both + integer-viewbox + [decode-interval-prototype, snapdom-post-fo-css] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-prototype", "snapdom-post-fo-css"],
    },
  },
  {
    n: 6,
    slug: "both integer-viewbox decode-wrap+snapdom-post-fo-baseline",
    idea: "lab-toCanvas inject:both + integer-viewbox + [decode-wrap, snapdom-post-fo-baseline] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-wrap", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 7,
    slug: "both integer-viewbox decode-interval-wrap+snapdom-post-fo-baseline",
    idea: "lab-toCanvas inject:both + integer-viewbox + [decode-interval-wrap, snapdom-post-fo-baseline] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-wrap", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 8,
    slug: "both integer-viewbox raf-before-draw+snapdom-post-fo-css",
    idea: "lab-toCanvas inject:both + integer-viewbox + [raf-before-draw, snapdom-post-fo-css] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["raf-before-draw", "snapdom-post-fo-css"],
    },
  },
  {
    n: 9,
    slug: "both integer-viewbox draw-image-pixelated+fonts-ready-delay",
    idea: "lab-toCanvas inject:both + integer-viewbox + [draw-image-pixelated, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["draw-image-pixelated", "fonts-ready-delay"],
    },
  },
  {
    n: 10,
    slug: "both integer-viewbox createImageBitmap-high+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas inject:both + integer-viewbox + [createImageBitmap-high, tc-lab-draw-supersample-downscale] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["createImageBitmap-high", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 11,
    slug: "both integer-viewbox tc-lab-draw-h2-frac-draw+snapdom-post-fo-css",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-lab-draw-h2-frac-draw, snapdom-post-fo-css] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "snapdom-post-fo-css"],
    },
  },
  {
    n: 12,
    slug: "both integer-viewbox tc-lab-draw-supersample-downscale+snapdom-post-fo-baseline",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-lab-draw-supersample-downscale, snapdom-post-fo-baseline] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-supersample-downscale", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 13,
    slug: "both integer-viewbox tc-lab-draw-create-image-bitmap-pixelated+fonts-ready-delay",
    idea: "lab-toCanvas inject:both + integer-viewbox + [tc-lab-draw-create-image-bitmap-pixelated, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-create-image-bitmap-pixelated", "fonts-ready-delay"],
    },
  },
  {
    n: 14,
    slug: "both round-dims tc-draw-image-round-all+decode-wrap",
    idea: "lab-toCanvas inject:both + round-dims + [tc-draw-image-round-all, decode-wrap] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-draw-image-round-all", "decode-wrap"],
    },
  },
  {
    n: 15,
    slug: "both round-dims tc-draw-image-round-all+image-decode-twice rr-integer-viewbox",
    idea: "lab-toCanvas inject:both + round-dims + [tc-draw-image-round-all, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "image-decode-twice"],
    },
  },
  {
    n: 16,
    slug: "both round-dims tc-decode-safari-raf+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:both + round-dims + [tc-decode-safari-raf, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-decode-safari-raf", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 17,
    slug: "both round-dims tc-canvas-backing-ceil+tc-lab-draw-two-stage",
    idea: "lab-toCanvas inject:both + round-dims + [tc-canvas-backing-ceil, tc-lab-draw-two-stage] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-canvas-backing-ceil", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 18,
    slug: "both round-dims decode-interval-prototype+createImageBitmap-high",
    idea: "lab-toCanvas inject:both + round-dims + [decode-interval-prototype, createImageBitmap-high] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-prototype", "createImageBitmap-high"],
    },
  },
  {
    n: 19,
    slug: "both round-dims decode-wrap+measureText-prime",
    idea: "lab-toCanvas inject:both + round-dims + [decode-wrap, measureText-prime] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-wrap", "measureText-prime"],
    },
  },
  {
    n: 20,
    slug: "both round-dims decode-interval-wrap+measureText-prime",
    idea: "lab-toCanvas inject:both + round-dims + [decode-interval-wrap, measureText-prime] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-wrap", "measureText-prime"],
    },
  },
  {
    n: 21,
    slug: "both round-dims raf-before-draw+createImageBitmap-high rr-integer-viewbox",
    idea: "lab-toCanvas inject:both + round-dims + [raf-before-draw, createImageBitmap-high] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["raf-before-draw", "createImageBitmap-high"],
    },
  },
  {
    n: 22,
    slug: "both round-dims draw-image-pixelated+tc-lab-draw-two-stage",
    idea: "lab-toCanvas inject:both + round-dims + [draw-image-pixelated, tc-lab-draw-two-stage] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["draw-image-pixelated", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 23,
    slug: "both round-dims measureText-prime+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:both + round-dims + [measureText-prime, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["measureText-prime", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 24,
    slug: "both round-dims createImageBitmap-high+image-decode-twice",
    idea: "lab-toCanvas inject:both + round-dims + [createImageBitmap-high, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["createImageBitmap-high", "image-decode-twice"],
    },
  },
  {
    n: 25,
    slug: "both round-dims tc-lab-draw-two-stage+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:both + round-dims + [tc-lab-draw-two-stage, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-two-stage", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 26,
    slug: "both round-dims tc-lab-draw-create-image-bitmap+snapdom-post-fo-baseline",
    idea: "lab-toCanvas inject:both + round-dims + [tc-lab-draw-create-image-bitmap, snapdom-post-fo-baseline] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-create-image-bitmap", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 27,
    slug: "both round-dims snapdom-post-fo-baseline+image-decode-twice rr-integer-viewbox",
    idea: "lab-toCanvas inject:both + round-dims + [snapdom-post-fo-baseline, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["snapdom-post-fo-baseline", "image-decode-twice"],
    },
  },
  {
    n: 28,
    slug: "both int-floor tc-draw-image-round-all+tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas inject:both + int-floor + [tc-draw-image-round-all, tc-lab-draw-h2-frac-draw] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-draw-image-round-all", "tc-lab-draw-h2-frac-draw"],
    },
  },
  {
    n: 29,
    slug: "both int-floor tc-decode-safari-raf+raf-before-draw",
    idea: "lab-toCanvas inject:both + int-floor + [tc-decode-safari-raf, raf-before-draw] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-decode-safari-raf", "raf-before-draw"],
    },
  },
  {
    n: 30,
    slug: "both int-floor tc-canvas-backing-ceil+decode-interval-prototype",
    idea: "lab-toCanvas inject:both + int-floor + [tc-canvas-backing-ceil, decode-interval-prototype] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-canvas-backing-ceil", "decode-interval-prototype"],
    },
  },
  {
    n: 31,
    slug: "both int-floor tc-canvas-backing-ceil+snapdom-post-fo-css",
    idea: "lab-toCanvas inject:both + int-floor + [tc-canvas-backing-ceil, snapdom-post-fo-css] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-canvas-backing-ceil", "snapdom-post-fo-css"],
    },
  },
  {
    n: 32,
    slug: "both int-floor decode-interval-prototype+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:both + int-floor + [decode-interval-prototype, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-prototype", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 33,
    slug: "both int-floor decode-wrap+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:both + int-floor + [decode-wrap, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-wrap", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 34,
    slug: "both int-floor decode-interval-wrap+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:both + int-floor + [decode-interval-wrap, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-wrap", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 35,
    slug: "both int-floor raf-before-draw+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:both + int-floor + [raf-before-draw, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["raf-before-draw", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 36,
    slug: "both int-floor draw-image-pixelated+snapdom-post-fo-css",
    idea: "lab-toCanvas inject:both + int-floor + [draw-image-pixelated, snapdom-post-fo-css] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["draw-image-pixelated", "snapdom-post-fo-css"],
    },
  },
  {
    n: 37,
    slug: "both int-floor createImageBitmap-high+tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas inject:both + int-floor + [createImageBitmap-high, tc-lab-draw-h2-frac-draw] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["createImageBitmap-high", "tc-lab-draw-h2-frac-draw"],
    },
  },
  {
    n: 38,
    slug: "both int-floor tc-lab-draw-h2-frac-draw+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:both + int-floor + [tc-lab-draw-h2-frac-draw, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 39,
    slug: "both int-floor tc-lab-draw-supersample-downscale+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:both + int-floor + [tc-lab-draw-supersample-downscale, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-supersample-downscale", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 40,
    slug: "both int-floor tc-lab-draw-create-image-bitmap-pixelated+snapdom-post-fo-css",
    idea: "lab-toCanvas inject:both + int-floor + [tc-lab-draw-create-image-bitmap-pixelated, snapdom-post-fo-css] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-create-image-bitmap-pixelated", "snapdom-post-fo-css"],
    },
  },
  {
    n: 41,
    slug: "raster integer-viewbox tc-draw-image-round-all+tc-canvas-backing-ceil rr-integer-viewbox mp2-alt",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-draw-image-round-all, tc-canvas-backing-ceil] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 42,
    slug: "raster integer-viewbox tc-draw-image-round-all+snapdom-post-fo-baseline",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-draw-image-round-all, snapdom-post-fo-baseline] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 43,
    slug: "raster integer-viewbox tc-decode-safari-raf+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-decode-safari-raf, tc-lab-draw-supersample-downscale] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-decode-safari-raf", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 44,
    slug: "raster integer-viewbox tc-canvas-backing-ceil+createImageBitmap-high rr-integer-viewbox mp2-alt",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-canvas-backing-ceil, createImageBitmap-high] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-canvas-backing-ceil", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 45,
    slug: "raster integer-viewbox decode-interval-prototype+draw-image-pixelated",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [decode-interval-prototype, draw-image-pixelated] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-prototype", "draw-image-pixelated"],
    },
  },
  {
    n: 46,
    slug: "raster integer-viewbox decode-wrap+raf-before-draw",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [decode-wrap, raf-before-draw] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-wrap", "raf-before-draw"],
    },
  },
  {
    n: 47,
    slug: "raster integer-viewbox decode-interval-wrap+raf-before-draw rr-integer-viewbox mp2-alt",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [decode-interval-wrap, raf-before-draw] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-wrap", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 48,
    slug: "raster integer-viewbox raf-before-draw+draw-image-pixelated",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [raf-before-draw, draw-image-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["raf-before-draw", "draw-image-pixelated"],
    },
  },
  {
    n: 49,
    slug: "raster integer-viewbox draw-image-pixelated+createImageBitmap-high",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [draw-image-pixelated, createImageBitmap-high] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["draw-image-pixelated", "createImageBitmap-high"],
    },
  },
  {
    n: 50,
    slug: "raster integer-viewbox measureText-prime+tc-lab-draw-supersample-downscale rr-integer-viewbox mp2-alt mp-draw-image-pixelated inj-both rr-round-dims inj-raster mp-tc-lab-draw-two-stage inj-both rr-int-floor",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [measureText-prime, tc-lab-draw-supersample-downscale] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 51,
    slug: "raster integer-viewbox createImageBitmap-high+snapdom-post-fo-baseline",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [createImageBitmap-high, snapdom-post-fo-baseline] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["createImageBitmap-high", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 52,
    slug: "raster integer-viewbox tc-lab-draw-two-stage+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-lab-draw-two-stage, tc-lab-draw-create-image-bitmap] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-two-stage", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 53,
    slug: "raster integer-viewbox tc-lab-draw-create-image-bitmap+tc-lab-draw-create-image-bitmap-pixelated rr-integer-viewbox mp2-alt",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-lab-draw-create-image-bitmap, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-create-image-bitmap", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 54,
    slug: "raster integer-viewbox tc-lab-draw-device-grid-floor+fonts-ready-delay",
    idea: "lab-toCanvas inject:raster + integer-viewbox + [tc-lab-draw-device-grid-floor, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-device-grid-floor", "fonts-ready-delay"],
    },
  },
  {
    n: 55,
    slug: "raster round-dims tc-draw-image-round-all+measureText-prime",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-draw-image-round-all, measureText-prime] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-draw-image-round-all", "measureText-prime"],
    },
  },
  {
    n: 56,
    slug: "raster round-dims tc-decode-safari-raf+decode-wrap",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-decode-safari-raf, decode-wrap] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-decode-safari-raf", "decode-wrap"],
    },
  },
  {
    n: 57,
    slug: "raster round-dims tc-decode-safari-raf+image-decode-twice",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-decode-safari-raf, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-decode-safari-raf", "image-decode-twice"],
    },
  },
  {
    n: 58,
    slug: "raster round-dims tc-canvas-backing-ceil+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-canvas-backing-ceil, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-canvas-backing-ceil", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 59,
    slug: "raster round-dims decode-interval-prototype+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas inject:raster + round-dims + [decode-interval-prototype, tc-lab-draw-create-image-bitmap] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-prototype", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 60,
    slug: "raster round-dims decode-wrap+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas inject:raster + round-dims + [decode-wrap, tc-lab-draw-supersample-downscale] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-wrap", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 61,
    slug: "raster round-dims decode-interval-wrap+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas inject:raster + round-dims + [decode-interval-wrap, tc-lab-draw-supersample-downscale] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-wrap", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 62,
    slug: "raster round-dims raf-before-draw+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas inject:raster + round-dims + [raf-before-draw, tc-lab-draw-create-image-bitmap] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["raf-before-draw", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 63,
    slug: "raster round-dims draw-image-pixelated+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:raster + round-dims + [draw-image-pixelated, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["draw-image-pixelated", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 64,
    slug: "raster round-dims measureText-prime+image-decode-twice",
    idea: "lab-toCanvas inject:raster + round-dims + [measureText-prime, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["measureText-prime", "image-decode-twice"],
    },
  },
  {
    n: 65,
    slug: "raster round-dims tc-lab-draw-h2-frac-draw+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-lab-draw-h2-frac-draw, tc-lab-draw-create-image-bitmap] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 66,
    slug: "raster round-dims tc-lab-draw-two-stage+fonts-ready-delay",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-lab-draw-two-stage, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-two-stage", "fonts-ready-delay"],
    },
  },
  {
    n: 67,
    slug: "raster round-dims tc-lab-draw-create-image-bitmap-pixelated+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas inject:raster + round-dims + [tc-lab-draw-create-image-bitmap-pixelated, tc-lab-draw-device-grid-floor] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-create-image-bitmap-pixelated", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 68,
    slug: "raster round-dims image-decode-twice+fonts-ready-delay",
    idea: "lab-toCanvas inject:raster + round-dims + [image-decode-twice, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["image-decode-twice", "fonts-ready-delay"],
    },
  },
  {
    n: 69,
    slug: "raster int-floor tc-draw-image-round-all+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:raster + int-floor + [tc-draw-image-round-all, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-draw-image-round-all", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 70,
    slug: "raster int-floor tc-decode-safari-raf+tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas inject:raster + int-floor + [tc-decode-safari-raf, tc-lab-draw-h2-frac-draw] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-decode-safari-raf", "tc-lab-draw-h2-frac-draw"],
    },
  },
  {
    n: 71,
    slug: "raster int-floor tc-canvas-backing-ceil+draw-image-pixelated",
    idea: "lab-toCanvas inject:raster + int-floor + [tc-canvas-backing-ceil, draw-image-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-canvas-backing-ceil", "draw-image-pixelated"],
    },
  },
  {
    n: 72,
    slug: "raster int-floor decode-interval-prototype+decode-interval-wrap",
    idea: "lab-toCanvas inject:raster + int-floor + [decode-interval-prototype, decode-interval-wrap] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-prototype", "decode-interval-wrap"],
    },
  },
  {
    n: 73,
    slug: "raster int-floor decode-interval-prototype+fonts-ready-delay",
    idea: "lab-toCanvas inject:raster + int-floor + [decode-interval-prototype, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-prototype", "fonts-ready-delay"],
    },
  },
  {
    n: 74,
    slug: "raster int-floor decode-wrap+image-decode-twice",
    idea: "lab-toCanvas inject:raster + int-floor + [decode-wrap, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-wrap", "image-decode-twice"],
    },
  },
  {
    n: 75,
    slug: "raster int-floor decode-interval-wrap+image-decode-twice",
    idea: "lab-toCanvas inject:raster + int-floor + [decode-interval-wrap, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-wrap", "image-decode-twice"],
    },
  },
  {
    n: 76,
    slug: "raster int-floor raf-before-draw+fonts-ready-delay",
    idea: "lab-toCanvas inject:raster + int-floor + [raf-before-draw, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["raf-before-draw", "fonts-ready-delay"],
    },
  },
  {
    n: 77,
    slug: "raster int-floor measureText-prime+tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas inject:raster + int-floor + [measureText-prime, tc-lab-draw-h2-frac-draw] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["measureText-prime", "tc-lab-draw-h2-frac-draw"],
    },
  },
  {
    n: 78,
    slug: "raster int-floor createImageBitmap-high+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas inject:raster + int-floor + [createImageBitmap-high, tc-lab-draw-create-image-bitmap-pixelated] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["createImageBitmap-high", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 79,
    slug: "raster int-floor tc-lab-draw-h2-frac-draw+fonts-ready-delay",
    idea: "lab-toCanvas inject:raster + int-floor + [tc-lab-draw-h2-frac-draw, fonts-ready-delay] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "fonts-ready-delay"],
    },
  },
  {
    n: 80,
    slug: "raster int-floor tc-lab-draw-supersample-downscale+image-decode-twice",
    idea: "lab-toCanvas inject:raster + int-floor + [tc-lab-draw-supersample-downscale, image-decode-twice] — capture/raster scope × root snap × dual hooks",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-supersample-downscale", "image-decode-twice"],
    },
  },
]

if (SPECS.length !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-d.js: expected 80 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-d.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.extra.inject ?? 'both'
  const useBaseline = inject === 'both' && spec.useBaseline === true
  return {
    id: `tc-lab-cd-${num}`,
    label: `tc-lab-cd #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: useBaseline ? FO_BASELINE_CSS : (spec.css ?? ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Lab toCanvas plus combo D; inject × dual monkeypatch × svgRootRound; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-plus-combo-d.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

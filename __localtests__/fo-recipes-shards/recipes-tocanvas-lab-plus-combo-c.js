/**
 * Lab toCanvas plus combo C — tc-lab-cc-001..080.
 * 3 knobs: paired tc draw/decode hooks + svgRootRound on lab-toCanvas
 * Each recipe: rasterPatch lab-toCanvas + 2–3 knobs (svgRootRound / monkeypatch).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-cc-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, useBaseline?: boolean, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "integer-viewbox tc-draw-image-round-all+tc-canvas-backing-ceil",
    idea: "lab-toCanvas + integer-viewbox + [tc-draw-image-round-all, tc-canvas-backing-ceil] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "tc-canvas-backing-ceil"],
    },
  },
  {
    n: 2,
    slug: "round-dims tc-draw-image-round-all+decode-wrap",
    idea: "lab-toCanvas + round-dims + [tc-draw-image-round-all, decode-wrap] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-draw-image-round-all", "decode-wrap"],
    },
  },
  {
    n: 3,
    slug: "int-floor tc-draw-image-round-all+raf-before-draw",
    idea: "lab-toCanvas + int-floor + [tc-draw-image-round-all, raf-before-draw] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-draw-image-round-all", "raf-before-draw"],
    },
  },
  {
    n: 4,
    slug: "integer-viewbox tc-draw-image-round-all+createImageBitmap-high",
    idea: "lab-toCanvas + integer-viewbox + [tc-draw-image-round-all, createImageBitmap-high] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "createImageBitmap-high"],
    },
  },
  {
    n: 5,
    slug: "round-dims tc-draw-image-round-all+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + round-dims + [tc-draw-image-round-all, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-draw-image-round-all", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 6,
    slug: "int-floor tc-draw-image-round-all+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + int-floor + [tc-draw-image-round-all, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-draw-image-round-all", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 7,
    slug: "integer-viewbox tc-draw-image-round-all+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + integer-viewbox + [tc-draw-image-round-all, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-draw-image-round-all", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 8,
    slug: "round-dims tc-draw-image-round-all+image-decode-twice",
    idea: "lab-toCanvas + round-dims + [tc-draw-image-round-all, image-decode-twice] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-draw-image-round-all", "image-decode-twice"],
    },
  },
  {
    n: 9,
    slug: "int-floor tc-decode-safari-raf+tc-canvas-backing-ceil",
    idea: "lab-toCanvas + int-floor + [tc-decode-safari-raf, tc-canvas-backing-ceil] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-decode-safari-raf", "tc-canvas-backing-ceil"],
    },
  },
  {
    n: 10,
    slug: "integer-viewbox tc-decode-safari-raf+decode-interval-wrap",
    idea: "lab-toCanvas + integer-viewbox + [tc-decode-safari-raf, decode-interval-wrap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-decode-safari-raf", "decode-interval-wrap"],
    },
  },
  {
    n: 11,
    slug: "round-dims tc-decode-safari-raf+draw-image-pixelated",
    idea: "lab-toCanvas + round-dims + [tc-decode-safari-raf, draw-image-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-decode-safari-raf", "draw-image-pixelated"],
    },
  },
  {
    n: 12,
    slug: "int-floor tc-decode-safari-raf+createImageBitmap-high",
    idea: "lab-toCanvas + int-floor + [tc-decode-safari-raf, createImageBitmap-high] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-decode-safari-raf", "createImageBitmap-high"],
    },
  },
  {
    n: 13,
    slug: "integer-viewbox tc-decode-safari-raf+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas + integer-viewbox + [tc-decode-safari-raf, tc-lab-draw-supersample-downscale] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-decode-safari-raf", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 14,
    slug: "round-dims tc-decode-safari-raf+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + round-dims + [tc-decode-safari-raf, tc-lab-draw-create-image-bitmap-pixelated] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-decode-safari-raf", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 15,
    slug: "int-floor tc-decode-safari-raf+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + int-floor + [tc-decode-safari-raf, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-decode-safari-raf", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 16,
    slug: "integer-viewbox tc-decode-safari-raf+fonts-ready-delay",
    idea: "lab-toCanvas + integer-viewbox + [tc-decode-safari-raf, fonts-ready-delay] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-decode-safari-raf", "fonts-ready-delay"],
    },
  },
  {
    n: 17,
    slug: "round-dims tc-canvas-backing-ceil+decode-wrap",
    idea: "lab-toCanvas + round-dims + [tc-canvas-backing-ceil, decode-wrap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-canvas-backing-ceil", "decode-wrap"],
    },
  },
  {
    n: 18,
    slug: "int-floor tc-canvas-backing-ceil+raf-before-draw",
    idea: "lab-toCanvas + int-floor + [tc-canvas-backing-ceil, raf-before-draw] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-canvas-backing-ceil", "raf-before-draw"],
    },
  },
  {
    n: 19,
    slug: "integer-viewbox tc-canvas-backing-ceil+createImageBitmap-high",
    idea: "lab-toCanvas + integer-viewbox + [tc-canvas-backing-ceil, createImageBitmap-high] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-canvas-backing-ceil", "createImageBitmap-high"],
    },
  },
  {
    n: 20,
    slug: "round-dims tc-canvas-backing-ceil+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + round-dims + [tc-canvas-backing-ceil, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-canvas-backing-ceil", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 21,
    slug: "int-floor tc-canvas-backing-ceil+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + int-floor + [tc-canvas-backing-ceil, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-canvas-backing-ceil", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 22,
    slug: "integer-viewbox tc-canvas-backing-ceil+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + integer-viewbox + [tc-canvas-backing-ceil, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-canvas-backing-ceil", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 23,
    slug: "round-dims tc-canvas-backing-ceil+image-decode-twice",
    idea: "lab-toCanvas + round-dims + [tc-canvas-backing-ceil, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-canvas-backing-ceil", "image-decode-twice"],
    },
  },
  {
    n: 24,
    slug: "int-floor decode-interval-prototype+decode-wrap",
    idea: "lab-toCanvas + int-floor + [decode-interval-prototype, decode-wrap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-prototype", "decode-wrap"],
    },
  },
  {
    n: 25,
    slug: "integer-viewbox decode-interval-prototype+draw-image-pixelated",
    idea: "lab-toCanvas + integer-viewbox + [decode-interval-prototype, draw-image-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-prototype", "draw-image-pixelated"],
    },
  },
  {
    n: 26,
    slug: "round-dims decode-interval-prototype+createImageBitmap-high",
    idea: "lab-toCanvas + round-dims + [decode-interval-prototype, createImageBitmap-high] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-prototype", "createImageBitmap-high"],
    },
  },
  {
    n: 27,
    slug: "int-floor decode-interval-prototype+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + int-floor + [decode-interval-prototype, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-prototype", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 28,
    slug: "integer-viewbox decode-interval-prototype+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + integer-viewbox + [decode-interval-prototype, tc-lab-draw-create-image-bitmap-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-prototype", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 29,
    slug: "round-dims decode-interval-prototype+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + round-dims + [decode-interval-prototype, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-prototype", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 30,
    slug: "int-floor decode-interval-prototype+image-decode-twice",
    idea: "lab-toCanvas + int-floor + [decode-interval-prototype, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-prototype", "image-decode-twice"],
    },
  },
  {
    n: 31,
    slug: "integer-viewbox decode-wrap+raf-before-draw",
    idea: "lab-toCanvas + integer-viewbox + [decode-wrap, raf-before-draw] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-wrap", "raf-before-draw"],
    },
  },
  {
    n: 32,
    slug: "round-dims decode-wrap+measureText-prime",
    idea: "lab-toCanvas + round-dims + [decode-wrap, measureText-prime] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-wrap", "measureText-prime"],
    },
  },
  {
    n: 33,
    slug: "int-floor decode-wrap+tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas + int-floor + [decode-wrap, tc-lab-draw-h2-frac-draw] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-wrap", "tc-lab-draw-h2-frac-draw"],
    },
  },
  {
    n: 34,
    slug: "integer-viewbox decode-wrap+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + integer-viewbox + [decode-wrap, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-wrap", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 35,
    slug: "round-dims decode-wrap+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas + round-dims + [decode-wrap, tc-lab-draw-device-grid-floor] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-wrap", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 36,
    slug: "int-floor decode-wrap+snapdom-post-fo-css",
    idea: "lab-toCanvas + int-floor + [decode-wrap, snapdom-post-fo-css] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-wrap", "snapdom-post-fo-css"],
    },
  },
  {
    n: 37,
    slug: "integer-viewbox decode-interval-wrap+raf-before-draw",
    idea: "lab-toCanvas + integer-viewbox + [decode-interval-wrap, raf-before-draw] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-wrap", "raf-before-draw"],
    },
  },
  {
    n: 38,
    slug: "round-dims decode-interval-wrap+measureText-prime",
    idea: "lab-toCanvas + round-dims + [decode-interval-wrap, measureText-prime] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-wrap", "measureText-prime"],
    },
  },
  {
    n: 39,
    slug: "int-floor decode-interval-wrap+tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas + int-floor + [decode-interval-wrap, tc-lab-draw-h2-frac-draw] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-wrap", "tc-lab-draw-h2-frac-draw"],
    },
  },
  {
    n: 40,
    slug: "integer-viewbox decode-interval-wrap+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + integer-viewbox + [decode-interval-wrap, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["decode-interval-wrap", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 41,
    slug: "round-dims decode-interval-wrap+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas + round-dims + [decode-interval-wrap, tc-lab-draw-device-grid-floor] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["decode-interval-wrap", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 42,
    slug: "int-floor decode-interval-wrap+snapdom-post-fo-css",
    idea: "lab-toCanvas + int-floor + [decode-interval-wrap, snapdom-post-fo-css] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["decode-interval-wrap", "snapdom-post-fo-css"],
    },
  },
  {
    n: 43,
    slug: "integer-viewbox raf-before-draw+draw-image-pixelated",
    idea: "lab-toCanvas + integer-viewbox + [raf-before-draw, draw-image-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["raf-before-draw", "draw-image-pixelated"],
    },
  },
  {
    n: 44,
    slug: "round-dims raf-before-draw+createImageBitmap-high",
    idea: "lab-toCanvas + round-dims + [raf-before-draw, createImageBitmap-high] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["raf-before-draw", "createImageBitmap-high"],
    },
  },
  {
    n: 45,
    slug: "int-floor raf-before-draw+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + int-floor + [raf-before-draw, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["raf-before-draw", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 46,
    slug: "integer-viewbox raf-before-draw+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + integer-viewbox + [raf-before-draw, tc-lab-draw-create-image-bitmap-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["raf-before-draw", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 47,
    slug: "round-dims raf-before-draw+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + round-dims + [raf-before-draw, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["raf-before-draw", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 48,
    slug: "int-floor raf-before-draw+image-decode-twice",
    idea: "lab-toCanvas + int-floor + [raf-before-draw, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["raf-before-draw", "image-decode-twice"],
    },
  },
  {
    n: 49,
    slug: "integer-viewbox draw-image-pixelated+createImageBitmap-high",
    idea: "lab-toCanvas + integer-viewbox + [draw-image-pixelated, createImageBitmap-high] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["draw-image-pixelated", "createImageBitmap-high"],
    },
  },
  {
    n: 50,
    slug: "round-dims draw-image-pixelated+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + round-dims + [draw-image-pixelated, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["draw-image-pixelated", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 51,
    slug: "int-floor draw-image-pixelated+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + int-floor + [draw-image-pixelated, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["draw-image-pixelated", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 52,
    slug: "integer-viewbox draw-image-pixelated+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + integer-viewbox + [draw-image-pixelated, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["draw-image-pixelated", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 53,
    slug: "round-dims draw-image-pixelated+image-decode-twice",
    idea: "lab-toCanvas + round-dims + [draw-image-pixelated, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["draw-image-pixelated", "image-decode-twice"],
    },
  },
  {
    n: 54,
    slug: "int-floor measureText-prime+createImageBitmap-high",
    idea: "lab-toCanvas + int-floor + [measureText-prime, createImageBitmap-high] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["measureText-prime", "createImageBitmap-high"],
    },
  },
  {
    n: 55,
    slug: "integer-viewbox measureText-prime+tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas + integer-viewbox + [measureText-prime, tc-lab-draw-supersample-downscale] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["measureText-prime", "tc-lab-draw-supersample-downscale"],
    },
  },
  {
    n: 56,
    slug: "round-dims measureText-prime+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + round-dims + [measureText-prime, tc-lab-draw-create-image-bitmap-pixelated] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["measureText-prime", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 57,
    slug: "int-floor measureText-prime+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + int-floor + [measureText-prime, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["measureText-prime", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 58,
    slug: "integer-viewbox measureText-prime+fonts-ready-delay",
    idea: "lab-toCanvas + integer-viewbox + [measureText-prime, fonts-ready-delay] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["measureText-prime", "fonts-ready-delay"],
    },
  },
  {
    n: 59,
    slug: "round-dims createImageBitmap-high+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + round-dims + [createImageBitmap-high, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["createImageBitmap-high", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 60,
    slug: "int-floor createImageBitmap-high+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + int-floor + [createImageBitmap-high, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["createImageBitmap-high", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 61,
    slug: "integer-viewbox createImageBitmap-high+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + integer-viewbox + [createImageBitmap-high, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["createImageBitmap-high", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 62,
    slug: "round-dims createImageBitmap-high+image-decode-twice",
    idea: "lab-toCanvas + round-dims + [createImageBitmap-high, image-decode-twice] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["createImageBitmap-high", "image-decode-twice"],
    },
  },
  {
    n: 63,
    slug: "int-floor tc-lab-draw-h2-frac-draw+tc-lab-draw-two-stage",
    idea: "lab-toCanvas + int-floor + [tc-lab-draw-h2-frac-draw, tc-lab-draw-two-stage] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "tc-lab-draw-two-stage"],
    },
  },
  {
    n: 64,
    slug: "integer-viewbox tc-lab-draw-h2-frac-draw+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + integer-viewbox + [tc-lab-draw-h2-frac-draw, tc-lab-draw-create-image-bitmap-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 65,
    slug: "round-dims tc-lab-draw-h2-frac-draw+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + round-dims + [tc-lab-draw-h2-frac-draw, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 66,
    slug: "int-floor tc-lab-draw-h2-frac-draw+image-decode-twice",
    idea: "lab-toCanvas + int-floor + [tc-lab-draw-h2-frac-draw, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-h2-frac-draw", "image-decode-twice"],
    },
  },
  {
    n: 67,
    slug: "integer-viewbox tc-lab-draw-two-stage+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + integer-viewbox + [tc-lab-draw-two-stage, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-two-stage", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 68,
    slug: "round-dims tc-lab-draw-two-stage+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas + round-dims + [tc-lab-draw-two-stage, tc-lab-draw-device-grid-floor] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-two-stage", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 69,
    slug: "int-floor tc-lab-draw-two-stage+snapdom-post-fo-css",
    idea: "lab-toCanvas + int-floor + [tc-lab-draw-two-stage, snapdom-post-fo-css] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-two-stage", "snapdom-post-fo-css"],
    },
  },
  {
    n: 70,
    slug: "integer-viewbox tc-lab-draw-supersample-downscale+tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + integer-viewbox + [tc-lab-draw-supersample-downscale, tc-lab-draw-create-image-bitmap] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-supersample-downscale", "tc-lab-draw-create-image-bitmap"],
    },
  },
  {
    n: 71,
    slug: "round-dims tc-lab-draw-supersample-downscale+tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas + round-dims + [tc-lab-draw-supersample-downscale, tc-lab-draw-device-grid-floor] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-supersample-downscale", "tc-lab-draw-device-grid-floor"],
    },
  },
  {
    n: 72,
    slug: "int-floor tc-lab-draw-supersample-downscale+snapdom-post-fo-css",
    idea: "lab-toCanvas + int-floor + [tc-lab-draw-supersample-downscale, snapdom-post-fo-css] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-supersample-downscale", "snapdom-post-fo-css"],
    },
  },
  {
    n: 73,
    slug: "integer-viewbox tc-lab-draw-create-image-bitmap+tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + integer-viewbox + [tc-lab-draw-create-image-bitmap, tc-lab-draw-create-image-bitmap-pixelated] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-create-image-bitmap", "tc-lab-draw-create-image-bitmap-pixelated"],
    },
  },
  {
    n: 74,
    slug: "round-dims tc-lab-draw-create-image-bitmap+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + round-dims + [tc-lab-draw-create-image-bitmap, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-create-image-bitmap", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 75,
    slug: "int-floor tc-lab-draw-create-image-bitmap+image-decode-twice",
    idea: "lab-toCanvas + int-floor + [tc-lab-draw-create-image-bitmap, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-create-image-bitmap", "image-decode-twice"],
    },
  },
  {
    n: 76,
    slug: "integer-viewbox tc-lab-draw-create-image-bitmap-pixelated+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + integer-viewbox + [tc-lab-draw-create-image-bitmap-pixelated, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-create-image-bitmap-pixelated", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 77,
    slug: "round-dims tc-lab-draw-create-image-bitmap-pixelated+image-decode-twice",
    idea: "lab-toCanvas + round-dims + [tc-lab-draw-create-image-bitmap-pixelated, image-decode-twice] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["tc-lab-draw-create-image-bitmap-pixelated", "image-decode-twice"],
    },
  },
  {
    n: 78,
    slug: "int-floor tc-lab-draw-device-grid-floor+snapdom-post-fo-baseline",
    idea: "lab-toCanvas + int-floor + [tc-lab-draw-device-grid-floor, snapdom-post-fo-baseline] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: ["tc-lab-draw-device-grid-floor", "snapdom-post-fo-baseline"],
    },
  },
  {
    n: 79,
    slug: "integer-viewbox tc-lab-draw-device-grid-floor+fonts-ready-delay",
    idea: "lab-toCanvas + integer-viewbox + [tc-lab-draw-device-grid-floor, fonts-ready-delay] — stacked draw/decode monkeypatches",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: ["tc-lab-draw-device-grid-floor", "fonts-ready-delay"],
    },
  },
  {
    n: 80,
    slug: "round-dims snapdom-post-fo-baseline+image-decode-twice",
    idea: "lab-toCanvas + round-dims + [snapdom-post-fo-baseline, image-decode-twice] — stacked draw/decode monkeypatches",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: ["snapdom-post-fo-baseline", "image-decode-twice"],
    },
  },
]

if (SPECS.length !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-c.js: expected 80 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-c.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.extra.inject ?? 'both'
  const useBaseline = inject === 'both' && spec.useBaseline === true
  return {
    id: `tc-lab-cc-${num}`,
    label: `tc-lab-cc #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: useBaseline ? FO_BASELINE_CSS : (spec.css ?? ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Lab toCanvas plus combo C; dual monkeypatch + svgRootRound; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-plus-combo-c.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

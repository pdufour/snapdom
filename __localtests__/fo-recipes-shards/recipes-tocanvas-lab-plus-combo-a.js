/**
 * Lab toCanvas plus combo A — tc-lab-ca-001..080.
 * 2 knobs: integer/round/int-floor viewBox snap + tc-* draw/decode monkeypatch
 * Each recipe: rasterPatch lab-toCanvas + 2–3 knobs (svgRootRound / monkeypatch).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-ca-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, useBaseline?: boolean, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "integer-viewbox + tc-decode-safari-raf",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-decode-safari-raf — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 2,
    slug: "integer-viewbox + tc-canvas-backing-ceil",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-canvas-backing-ceil — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 3,
    slug: "integer-viewbox + decode-interval-prototype",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch decode-interval-prototype — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 4,
    slug: "integer-viewbox + decode-wrap",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch decode-wrap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 5,
    slug: "integer-viewbox + decode-interval-wrap",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch decode-interval-wrap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 6,
    slug: "integer-viewbox + raf-before-draw",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch raf-before-draw — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 7,
    slug: "integer-viewbox + draw-image-pixelated",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch draw-image-pixelated — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 8,
    slug: "integer-viewbox + measureText-prime",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch measureText-prime — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 9,
    slug: "integer-viewbox + createImageBitmap-high",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch createImageBitmap-high — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 10,
    slug: "integer-viewbox + tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-h2-frac-draw — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 11,
    slug: "integer-viewbox + tc-lab-draw-two-stage",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-two-stage — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 12,
    slug: "integer-viewbox + tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-supersample-downscale — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 13,
    slug: "integer-viewbox + tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-create-image-bitmap — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 14,
    slug: "integer-viewbox + tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-create-image-bitmap-pixelated — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 15,
    slug: "integer-viewbox + tc-lab-draw-device-grid-floor rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-device-grid-floor — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 16,
    slug: "integer-viewbox + snapdom-post-fo-baseline",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch snapdom-post-fo-baseline — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 17,
    slug: "integer-viewbox + snapdom-post-fo-css",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch snapdom-post-fo-css — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 18,
    slug: "integer-viewbox + image-decode-twice",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch image-decode-twice — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 19,
    slug: "integer-viewbox + fonts-ready-delay",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch fonts-ready-delay — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 20,
    slug: "round-dims + tc-draw-image-round-all",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-draw-image-round-all — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 21,
    slug: "round-dims + tc-decode-safari-raf rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-decode-safari-raf — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 22,
    slug: "round-dims + tc-canvas-backing-ceil",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-canvas-backing-ceil — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 23,
    slug: "round-dims + decode-interval-prototype",
    idea: "lab-toCanvas + round-dims + monkeypatch decode-interval-prototype — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 24,
    slug: "round-dims + decode-wrap",
    idea: "lab-toCanvas + round-dims + monkeypatch decode-wrap — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 25,
    slug: "round-dims + decode-interval-wrap",
    idea: "lab-toCanvas + round-dims + monkeypatch decode-interval-wrap — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 26,
    slug: "round-dims + raf-before-draw",
    idea: "lab-toCanvas + round-dims + monkeypatch raf-before-draw — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 27,
    slug: "round-dims + draw-image-pixelated",
    idea: "lab-toCanvas + round-dims + monkeypatch draw-image-pixelated — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 28,
    slug: "round-dims + measureText-prime",
    idea: "lab-toCanvas + round-dims + monkeypatch measureText-prime — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 29,
    slug: "round-dims + createImageBitmap-high",
    idea: "lab-toCanvas + round-dims + monkeypatch createImageBitmap-high — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 30,
    slug: "round-dims + tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-lab-draw-h2-frac-draw — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 31,
    slug: "round-dims + tc-lab-draw-two-stage",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-lab-draw-two-stage — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 32,
    slug: "round-dims + tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-lab-draw-supersample-downscale — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 33,
    slug: "round-dims + tc-lab-draw-create-image-bitmap rr-integer-viewbox",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-lab-draw-create-image-bitmap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 34,
    slug: "round-dims + tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-lab-draw-create-image-bitmap-pixelated — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 35,
    slug: "round-dims + tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-lab-draw-device-grid-floor — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 36,
    slug: "round-dims + snapdom-post-fo-baseline",
    idea: "lab-toCanvas + round-dims + monkeypatch snapdom-post-fo-baseline — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 37,
    slug: "round-dims + snapdom-post-fo-css",
    idea: "lab-toCanvas + round-dims + monkeypatch snapdom-post-fo-css — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 38,
    slug: "round-dims + image-decode-twice",
    idea: "lab-toCanvas + round-dims + monkeypatch image-decode-twice — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 39,
    slug: "round-dims + fonts-ready-delay",
    idea: "lab-toCanvas + round-dims + monkeypatch fonts-ready-delay — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 40,
    slug: "int-floor + tc-draw-image-round-all rr-integer-viewbox",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-draw-image-round-all — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 41,
    slug: "int-floor + tc-decode-safari-raf",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-decode-safari-raf — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 42,
    slug: "int-floor + tc-canvas-backing-ceil rr-integer-viewbox",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-canvas-backing-ceil — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 43,
    slug: "int-floor + decode-interval-prototype",
    idea: "lab-toCanvas + int-floor + monkeypatch decode-interval-prototype — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 44,
    slug: "int-floor + decode-wrap",
    idea: "lab-toCanvas + int-floor + monkeypatch decode-wrap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 45,
    slug: "int-floor + decode-interval-wrap",
    idea: "lab-toCanvas + int-floor + monkeypatch decode-interval-wrap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 46,
    slug: "int-floor + raf-before-draw",
    idea: "lab-toCanvas + int-floor + monkeypatch raf-before-draw — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 47,
    slug: "int-floor + draw-image-pixelated",
    idea: "lab-toCanvas + int-floor + monkeypatch draw-image-pixelated — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 48,
    slug: "int-floor + measureText-prime",
    idea: "lab-toCanvas + int-floor + monkeypatch measureText-prime — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 49,
    slug: "int-floor + createImageBitmap-high",
    idea: "lab-toCanvas + int-floor + monkeypatch createImageBitmap-high — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 50,
    slug: "int-floor + tc-lab-draw-h2-frac-draw",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-lab-draw-h2-frac-draw — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 51,
    slug: "int-floor + tc-lab-draw-two-stage",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-lab-draw-two-stage — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 52,
    slug: "int-floor + tc-lab-draw-supersample-downscale",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-lab-draw-supersample-downscale — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 53,
    slug: "int-floor + tc-lab-draw-create-image-bitmap",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-lab-draw-create-image-bitmap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 54,
    slug: "int-floor + tc-lab-draw-create-image-bitmap-pixelated",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-lab-draw-create-image-bitmap-pixelated — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 55,
    slug: "int-floor + tc-lab-draw-device-grid-floor",
    idea: "lab-toCanvas + int-floor + monkeypatch tc-lab-draw-device-grid-floor — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 56,
    slug: "int-floor + snapdom-post-fo-baseline",
    idea: "lab-toCanvas + int-floor + monkeypatch snapdom-post-fo-baseline — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 57,
    slug: "int-floor + snapdom-post-fo-css",
    idea: "lab-toCanvas + int-floor + monkeypatch snapdom-post-fo-css — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 58,
    slug: "int-floor + image-decode-twice",
    idea: "lab-toCanvas + int-floor + monkeypatch image-decode-twice — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 59,
    slug: "int-floor + fonts-ready-delay",
    idea: "lab-toCanvas + int-floor + monkeypatch fonts-ready-delay — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 60,
    slug: "integer-viewbox + tc-draw-image-round-all",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-draw-image-round-all — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 61,
    slug: "integer-viewbox + tc-decode-safari-raf rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-decode-safari-raf — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 62,
    slug: "integer-viewbox + tc-canvas-backing-ceil rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-canvas-backing-ceil — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 63,
    slug: "integer-viewbox + decode-interval-prototype rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch decode-interval-prototype — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 64,
    slug: "integer-viewbox + decode-wrap rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch decode-wrap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-wrap",
    },
  },
  {
    n: 65,
    slug: "integer-viewbox + decode-interval-wrap rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch decode-interval-wrap — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "decode-interval-wrap",
    },
  },
  {
    n: 66,
    slug: "integer-viewbox + raf-before-draw rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch raf-before-draw — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 67,
    slug: "integer-viewbox + draw-image-pixelated rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch draw-image-pixelated — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 68,
    slug: "integer-viewbox + measureText-prime rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch measureText-prime — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "measureText-prime",
    },
  },
  {
    n: 69,
    slug: "integer-viewbox + createImageBitmap-high rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch createImageBitmap-high — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    n: 70,
    slug: "integer-viewbox + tc-lab-draw-h2-frac-draw rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-h2-frac-draw — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 71,
    slug: "integer-viewbox + tc-lab-draw-two-stage rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-two-stage — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 72,
    slug: "integer-viewbox + tc-lab-draw-supersample-downscale rr-integer-viewbox inj-both mp-draw-image-pixelated",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-supersample-downscale — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 73,
    slug: "integer-viewbox + tc-lab-draw-create-image-bitmap rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-create-image-bitmap — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 74,
    slug: "integer-viewbox + tc-lab-draw-create-image-bitmap-pixelated rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-create-image-bitmap-pixelated — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 75,
    slug: "integer-viewbox + tc-lab-draw-device-grid-floor rr-integer-viewbox inj-raster mp-draw-image-pixelated",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch tc-lab-draw-device-grid-floor — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "draw-image-pixelated",
    },
  },
  {
    n: 76,
    slug: "integer-viewbox + snapdom-post-fo-baseline rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch snapdom-post-fo-baseline — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-baseline",
    },
  },
  {
    n: 77,
    slug: "integer-viewbox + snapdom-post-fo-css rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch snapdom-post-fo-css — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "snapdom-post-fo-css",
    },
  },
  {
    n: 78,
    slug: "integer-viewbox + image-decode-twice rr-integer-viewbox inj-both",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch image-decode-twice — FO root snap before lab draw",
    useBaseline: true,
    extra: {
      inject: "both",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 79,
    slug: "integer-viewbox + fonts-ready-delay rr-integer-viewbox inj-raster",
    idea: "lab-toCanvas + integer-viewbox + monkeypatch fonts-ready-delay — FO root snap before lab draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "fonts-ready-delay",
    },
  },
  {
    n: 80,
    slug: "round-dims + tc-draw-image-round-all rr-integer-viewbox",
    idea: "lab-toCanvas + round-dims + monkeypatch tc-draw-image-round-all — FO root snap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    extra: {
      inject: "raster",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
]

if (SPECS.length !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-a.js: expected 80 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 80) {
  throw new Error(`recipes-tocanvas-lab-plus-combo-a.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.extra.inject ?? 'both'
  const useBaseline = inject === 'both' && spec.useBaseline === true
  return {
    id: `tc-lab-ca-${num}`,
    label: `tc-lab-ca #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: useBaseline ? FO_BASELINE_CSS : (spec.css ?? ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Lab toCanvas plus combo A; svgRootRound × monkeypatch; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-plus-combo-a.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

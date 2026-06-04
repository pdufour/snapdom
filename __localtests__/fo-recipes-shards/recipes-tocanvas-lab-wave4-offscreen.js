/**
 * Lab toCanvas wave-4 offscreen — tc-lab-w4-off-001..055.
 * OffscreenCanvas, transferToImageBitmap, bitmaprenderer, worker-less main-thread lab draw hooks.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w4-off-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
  {
    n: 1,
    slug: "offscreen-transfer",
    idea: "OffscreenCanvas full backing transferToImageBitmap → drawImage on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-transfer",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 2,
    slug: "offscreen-transfer-pixelated",
    idea: "Offscreen blit with imageSmoothingEnabled false on offscreen ctx on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-transfer-pixelated",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 3,
    slug: "offscreen-transfer-reset-transform",
    idea: "Offscreen transfer after identity setTransform on dest ctx on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-transfer-reset-transform",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 4,
    slug: "offscreen-dom-two-stage",
    idea: "Offscreen transfer → DOM canvas stage → final drawImage on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-dom-two-stage",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 5,
    slug: "bitmaprenderer-transfer",
    idea: "createImageBitmap + bitmaprenderer transferFromImageBitmap (main thread) on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-bitmaprenderer-transfer",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 6,
    slug: "bitmaprenderer-then-canvas-2d",
    idea: "bitmaprenderer handoff then 2d drawImage 5-arg blit on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-bitmaprenderer-then-canvas-2d",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 7,
    slug: "offscreen-create-image-bitmap",
    idea: "OffscreenCanvas decode + createImageBitmap before lab draw on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-create-image-bitmap",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 8,
    slug: "offscreen-fallback-dom-canvas",
    idea: "DOM canvas fallback when OffscreenCanvas missing (worker-less) on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-fallback-dom-canvas",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 9,
    slug: "offscreen-transfer-will-read",
    idea: "OffscreenCanvas 2d context willReadFrequently during blit on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-transfer-will-read",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 10,
    slug: "offscreen-backing-floor",
    idea: "Floor offscreen backing store width/height before transfer on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-backing-floor",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 11,
    slug: "offscreen-backing-ceil",
    idea: "Ceil offscreen backing store width/height before transfer on lab-toCanvas drawImage",
    css: "",
    inject: "raster",
    extra: {
      inject: "raster",
      monkeypatch: "tc-lab-w4-offscreen-backing-ceil",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 12,
    slug: "FO offscreen-transfer",
    idea: "OffscreenCanvas full backing transferToImageBitmap → drawImage + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 13,
    slug: "FO offscreen-transfer-pixelated",
    idea: "Offscreen blit with imageSmoothingEnabled false on offscreen ctx + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-pixelated",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 14,
    slug: "FO offscreen-transfer-reset-transform",
    idea: "Offscreen transfer after identity setTransform on dest ctx + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-reset-transform",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 15,
    slug: "FO offscreen-dom-two-stage",
    idea: "Offscreen transfer → DOM canvas stage → final drawImage + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-dom-two-stage",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 16,
    slug: "FO bitmaprenderer-transfer",
    idea: "createImageBitmap + bitmaprenderer transferFromImageBitmap (main thread) + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-bitmaprenderer-transfer",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 17,
    slug: "FO bitmaprenderer-then-canvas-2d",
    idea: "bitmaprenderer handoff then 2d drawImage 5-arg blit + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-bitmaprenderer-then-canvas-2d",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 18,
    slug: "FO offscreen-create-image-bitmap",
    idea: "OffscreenCanvas decode + createImageBitmap before lab draw + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-create-image-bitmap",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 19,
    slug: "FO offscreen-fallback-dom-canvas",
    idea: "DOM canvas fallback when OffscreenCanvas missing (worker-less) + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-fallback-dom-canvas",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 20,
    slug: "FO offscreen-transfer-will-read",
    idea: "OffscreenCanvas 2d context willReadFrequently during blit + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-will-read",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 21,
    slug: "FO offscreen-backing-floor",
    idea: "Floor offscreen backing store width/height before transfer + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-backing-floor",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 22,
    slug: "FO offscreen-backing-ceil",
    idea: "Ceil offscreen backing store width/height before transfer + FO_BASELINE_CSS inject both",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-backing-ceil",
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 23,
    slug: "int-vb H2 offscreen-transfer",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-transfer lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "int-vb H2 offscreen-transfer-pixelated",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-transfer-pixelated lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-pixelated",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 25,
    slug: "int-vb H2 offscreen-transfer-reset-transform",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-transfer-reset-transform lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-reset-transform",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 26,
    slug: "int-vb H2 offscreen-dom-two-stage",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-dom-two-stage lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-dom-two-stage",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 27,
    slug: "int-vb H2 bitmaprenderer-transfer",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-bitmaprenderer-transfer lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-bitmaprenderer-transfer",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 28,
    slug: "int-vb H2 bitmaprenderer-then-canvas-2d",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-bitmaprenderer-then-canvas-2d lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-bitmaprenderer-then-canvas-2d",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 29,
    slug: "int-vb H2 offscreen-create-image-bitmap",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-create-image-bitmap lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-create-image-bitmap",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 30,
    slug: "int-vb H2 offscreen-fallback-dom-canvas",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-fallback-dom-canvas lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-fallback-dom-canvas",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 31,
    slug: "int-vb H2 offscreen-transfer-will-read",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-transfer-will-read lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-will-read",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 32,
    slug: "int-vb H2 offscreen-backing-floor",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-backing-floor lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-backing-floor",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 33,
    slug: "int-vb H2 offscreen-backing-ceil",
    idea: "integer-viewbox + H2 normalize + tc-lab-w4-offscreen-backing-ceil lab fork",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-backing-ceil",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 34,
    slug: "round-dims leaf offscreen-transfer",
    idea: "round-dims + leaf + OffscreenCanvas full backing transferToImageBitmap → drawImage",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 35,
    slug: "round-dims chromium offscreen-transfer-pixelated",
    idea: "round-dims + chromium + Offscreen blit with imageSmoothingEnabled false on offscreen ctx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-pixelated",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 36,
    slug: "round-dims H2-leaf offscreen-transfer-reset-transform",
    idea: "round-dims + H2-leaf + Offscreen transfer after identity setTransform on dest ctx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-reset-transform",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 37,
    slug: "round-dims leaf offscreen-dom-two-stage",
    idea: "round-dims + leaf + Offscreen transfer → DOM canvas stage → final drawImage",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-dom-two-stage",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 38,
    slug: "round-dims chromium bitmaprenderer-transfer",
    idea: "round-dims + chromium + createImageBitmap + bitmaprenderer transferFromImageBitmap (main thread)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-bitmaprenderer-transfer",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 39,
    slug: "round-dims H2-leaf bitmaprenderer-then-canvas-2d",
    idea: "round-dims + H2-leaf + bitmaprenderer handoff then 2d drawImage 5-arg blit",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-bitmaprenderer-then-canvas-2d",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 40,
    slug: "round-dims leaf offscreen-create-image-bitmap",
    idea: "round-dims + leaf + OffscreenCanvas decode + createImageBitmap before lab draw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-create-image-bitmap",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 41,
    slug: "round-dims chromium offscreen-fallback-dom-canvas",
    idea: "round-dims + chromium + DOM canvas fallback when OffscreenCanvas missing (worker-less)",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-fallback-dom-canvas",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 42,
    slug: "round-dims H2-leaf offscreen-transfer-will-read",
    idea: "round-dims + H2-leaf + OffscreenCanvas 2d context willReadFrequently during blit",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-transfer-will-read",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 43,
    slug: "round-dims leaf offscreen-backing-floor",
    idea: "round-dims + leaf + Floor offscreen backing store width/height before transfer",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-backing-floor",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 44,
    slug: "round-dims chromium offscreen-backing-ceil",
    idea: "round-dims + chromium + Ceil offscreen backing store width/height before transfer",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-lab-w4-offscreen-backing-ceil",
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 45,
    slug: "int-vb round-all offscreen",
    idea: "Capstone: tc-lab-w4-offscreen-transfer + tc-draw-image-round-all on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-transfer","tc-draw-image-round-all"],
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 46,
    slug: "pixelated offscreen ctx-smooth-off",
    idea: "Capstone: tc-lab-w4-offscreen-transfer-pixelated + tc-ctx-smooth-off on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-transfer-pixelated","tc-ctx-smooth-off"],
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 47,
    slug: "bitmaprenderer backing-ceil",
    idea: "Capstone: tc-lab-w4-bitmaprenderer-transfer + tc-lab-mp-canvas-backing-ceil on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-bitmaprenderer-transfer","tc-lab-mp-canvas-backing-ceil"],
      rasterPatch: "lab-toCanvas",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 48,
    slug: "dom-two-stage decode-safari-raf",
    idea: "Capstone: tc-lab-w4-offscreen-dom-two-stage + tc-lab-mp-decode-safari-raf on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-dom-two-stage","tc-lab-mp-decode-safari-raf"],
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 49,
    slug: "offscreen CIB + createImageBitmap-high",
    idea: "Capstone: tc-lab-w4-offscreen-create-image-bitmap + createImageBitmap-high on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-create-image-bitmap","createImageBitmap-high"],
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 50,
    slug: "dom-fallback ctx-reset",
    idea: "Capstone: tc-lab-w4-offscreen-fallback-dom-canvas + tc-lab-mp-ctx-transform-reset-draw on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-fallback-dom-canvas","tc-lab-mp-ctx-transform-reset-draw"],
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 51,
    slug: "offscreen will-read + ctx will-read",
    idea: "Capstone: tc-lab-w4-offscreen-transfer-will-read + tc-ctx-will-read-frequently on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-transfer-will-read","tc-ctx-will-read-frequently"],
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 52,
    slug: "backing-floor + device-grid-floor capture",
    idea: "Capstone: tc-lab-w4-offscreen-backing-floor + tc-lab-draw-device-grid-floor on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-backing-floor","tc-lab-draw-device-grid-floor"],
      rasterPatch: "lab-toCanvas",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 53,
    slug: "backing-ceil offscreen + canvas backing ceil",
    idea: "Capstone: tc-lab-w4-offscreen-backing-ceil + tc-canvas-backing-ceil on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-backing-ceil","tc-canvas-backing-ceil"],
      rasterPatch: "lab-toCanvas",
    },
  },
  {
    n: 54,
    slug: "bitmaprenderer-then-2d floor-dest-y",
    idea: "Capstone: tc-lab-w4-bitmaprenderer-then-canvas-2d + tc-lab-mp-draw-image-floor-dest-y on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-bitmaprenderer-then-canvas-2d","tc-lab-mp-draw-image-floor-dest-y"],
      rasterPatch: "lab-toCanvas",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 55,
    slug: "reset-transform + w3 draw microtask (no w3 dup tuple)",
    idea: "Capstone: tc-lab-w4-offscreen-transfer-reset-transform + tc-lab-w3-draw-microtask on lab-toCanvas",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: ["tc-lab-w4-offscreen-transfer-reset-transform","tc-lab-w3-draw-microtask"],
      rasterPatch: "lab-toCanvas",
    },
  },
]

if (SPECS.length !== 55) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-offscreen.js: expected 55 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 55) {
  throw new Error('recipes-tocanvas-lab-wave4-offscreen.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, inject, extra } = spec
  const useBaseline = inject === 'both' && specCss === ''
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w4-off-${num}`,
    label: `tc-lab-w4-off #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-4 offscreen lab-toCanvas; ${spec.slug}; FO raster only — no text bypass.`,
    rasterPatch: 'lab-toCanvas',
    ...extra,
  }
})

if (RECIPES.length !== 55) {
  throw new Error(
    `recipes-tocanvas-lab-wave4-offscreen.js: expected 55 recipes, got ${RECIPES.length}`,
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
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave4-offscreen.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

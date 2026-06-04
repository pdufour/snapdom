/**
 * Lab toCanvas wave-6 gen shard a — lab-toCanvas × svgRootRound × inject × CSS.
 * 100 recipes: tc-lab-w6g-a-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-a-*'
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
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-canvas-backing-ceil / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-canvas-backing-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-canvas-backing-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-canvas-backing-floor",
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-canvas-backing-round",
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-decode-safari-raf",
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-draw-h2-frac-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-draw-h2-frac-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-draw-h2-frac-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-draw-two-stage / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-draw-two-stage / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-two-stage",
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-draw-supersample-downscale / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-supersample-downscale",
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-draw-create-image-bitmap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-create-image-bitmap",
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-draw-create-image-bitmap-pixelated / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-draw-device-grid-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-draw-device-grid-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-draw-device-grid-floor",
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas / full / no-rr / no-rad / decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / image-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas / full / no-rr / no-rad / image-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "image-decode-twice",
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas / full / no-rr / no-rad / raf-before-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / drawImage-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas / full / no-rr / no-rad / drawImage-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-draw-image-ceil-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-draw-image-floor-dest-y / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-draw-image-floor-dest-y / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-draw-image-floor-dest-y / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-draw-image-floor-dest-y / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-draw-image-floor-dest-y / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-floor-dest-y",
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-draw-image-smoothing-off / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-draw-image-smoothing-off / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-draw-image-smoothing-off / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-draw-image-smoothing-off / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-draw-image-smoothing-off / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-draw-image-smoothing-off",
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-canvas-backing-ceil / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-canvas-backing-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-canvas-backing-floor / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-canvas-backing-round / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-decode-interval-delay / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-delay",
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-decode-interval-delay / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-delay",
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-prototype",
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-prototype",
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-prototype",
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-prototype",
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-decode-interval-prototype / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-interval-prototype",
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-decode-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-wrap",
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-decode-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-wrap",
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-decode-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-wrap",
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-decode-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-wrap",
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-decode-wrap / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-wrap",
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-decode-safari-raf / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-twice",
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-twice",
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-twice",
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-twice",
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-decode-twice / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-decode-twice",
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-ctx-transform-reset-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-ctx-transform-reset-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-ctx-transform-reset-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-ctx-transform-reset-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-ctx-transform-reset-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-ctx-transform-reset-draw",
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-measure-text-prime-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-measure-text-prime-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-measure-text-prime-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-measure-text-prime-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-measure-text-prime-draw / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-measure-text-prime-draw",
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas / h2 / no-rr / no-rad / tc-lab-mp-create-image-bitmap-high / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas / leaf / no-rr / no-rad / tc-lab-mp-create-image-bitmap-high / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas / chromium / no-rr / no-rad / tc-lab-mp-create-image-bitmap-high / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas / h2+chromium / no-rr / no-rad / tc-lab-mp-create-image-bitmap-high / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas / full / no-rr / no-rad / tc-lab-mp-create-image-bitmap-high / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      monkeypatch: "tc-lab-mp-create-image-bitmap-high",
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas / leaf / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas / chromium / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas / h2+chromium / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas / full / integer-viewbox / no-rad / tc-draw-image-round-all / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas / none / integer-viewbox / no-rad / tc-canvas-backing-ceil / no-lpr / both / no-attr / no-fosvg / no-markup / none / none fill",
    idea: "lab-toCanvas fill — wave-6 lab-toCanvas × svgRootRound × inject × CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-a.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-a.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-a-${num}`,
    label: `w6ga #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen a; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-a.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave6-gen-a.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Wave-8 product vs lab toCanvas A/B — tc-lab-w8-ab-001..080 (40 pairs).
 * Odd ids: product-toCanvas; even ids: lab-toCanvas (same knobs). Lab pairs 1–20 active:true.
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-ab-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ pair: number, slug: string, ideaBase: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    pair: 1,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / baseline / both",
    ideaBase: "FO_BASELINE_CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
    },
  },
  {
    pair: 2,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
    },
  },
  {
    pair: 3,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
    },
  },
  {
    pair: 4,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
    },
  },
  {
    pair: 5,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 6,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 7,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 8,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 9,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 10,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 11,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 12,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 13,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 14,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 15,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 16,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 17,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 18,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 19,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 20,
    slug: "no-rr / no-mp / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 21,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / baseline / both",
    ideaBase: "FO_BASELINE_CSS + mp tc-draw-image-round-all",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    pair: 22,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    pair: 23,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + mp tc-draw-image-round-all",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    pair: 24,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / no-rad / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + mp tc-draw-image-round-all",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    pair: 25,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 26,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + mp tc-draw-image-round-all + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 27,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + mp tc-draw-image-round-all + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 28,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-pin-line-height-from-live / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + mp tc-draw-image-round-all + h2-pin-line-height-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-pin-line-height-from-live",
    },
  },
  {
    pair: 29,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + mp tc-draw-image-round-all + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 30,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + mp tc-draw-image-round-all + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 31,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + mp tc-draw-image-round-all + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 32,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / h2-flex-stretch-leaf-from-live / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + h2-flex-stretch-leaf-from-live",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
    },
  },
  {
    pair: 33,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + mp tc-draw-image-round-all + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 34,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + mp tc-draw-image-round-all + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 35,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 36,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / math-floor-viewbox-stash-frac / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + mp tc-draw-image-round-all + math-floor-viewbox-stash-frac",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    pair: 37,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / empty / both",
    ideaBase: "no extra CSS + mp tc-draw-image-round-all + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 38,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / h2 / both",
    ideaBase: "H2_RASTER_NORMALIZE_CSS + mp tc-draw-image-round-all + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 39,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / leaf / both",
    ideaBase: "FO + flex leaf strut + mp tc-draw-image-round-all + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "integer-snap-all-rects",
    },
  },
  {
    pair: 40,
    slug: "no-rr / tc-draw-image-round-all / no-lpr / no-fsp / no-smp / integer-snap-all-rects / no-ltc / no-llp / chromium / both",
    ideaBase: "FO + Chromium copies + mp tc-draw-image-round-all + integer-snap-all-rects",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      inject: "both",
      monkeypatch: "tc-draw-image-round-all",
      radicalPatch: "integer-snap-all-rects",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-ab.js: expected 40 pair specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

for (const spec of SPECS) {
  const prodNum = String(spec.pair * 2 - 1).padStart(3, '0')
  const labNum = String(spec.pair * 2).padStart(3, '0')
  const { css, inject, extra, slug, ideaBase } = spec
  const useBaseline = inject === 'both' && css === ''
  const shared = {
    css: useBaseline ? FO_BASELINE_CSS : css,
    inject,
    category: 'tocanvas',
    notes: 'Wave-8 product↔lab A/B; FO raster only — no text bypass.',
    ...extra,
  }

  RECIPES.push({
    id: `tc-lab-w8-ab-${prodNum}`,
    label: `w8-ab #${spec.pair}A product: ${slug}`,
    idea: `${ideaBase} — product-toCanvas (A/B pair ${spec.pair})`,
    rasterPatch: 'product-toCanvas',
    ...shared,
  })

  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const lab = {
    id: `tc-lab-w8-ab-${labNum}`,
    label: `w8-ab #${spec.pair}B lab: ${slug}`,
    idea: `${ideaBase} — lab-toCanvas (A/B pair ${spec.pair})`,
    rasterPatch: 'lab-toCanvas',
    ...shared,
  }
  if (spec.pair <= 20) {
    lab.active = true
  }
  RECIPES.push(lab)
}

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-ab.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

const mpK = (mp) => {
  if (mp == null) return ''
  if (Array.isArray(mp)) return [...mp].sort().join(',')
  return String(mp)
}

const knobSeen = new Set()
const idSeen = new Set()
let labActive = 0
let labTotal = 0

for (const r of RECIPES) {
  if (idSeen.has(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave8-ab.js: duplicate id ${r.id}`)
  }
  idSeen.add(r.id)

  // A/B pairs intentionally reuse the same knobs; rasterPatch is the axis under test.
  // So the uniqueness key must include rasterPatch.
  const kk = [
    r.inject,
    r.rasterPatch ?? '',
    r.css,
    r.svgRootRound ?? '',
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    mpK(r.monkeypatch),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.labLoadPipeline ?? '',
  ].join('\0')
  if (knobSeen.has(kk)) {
    throw new Error(`recipes-tocanvas-lab-wave8-ab.js: duplicate knob tuple at ${r.id}`)
  }
  knobSeen.add(kk)

  if (r.rasterPatch === 'lab-toCanvas') {
    labTotal++
    if (r.active === true) labActive++
  }
  if (r.rasterPatch === 'product-toCanvas' && r.active === true) {
    throw new Error(`${r.id}: product arm must not set active`)
  }
}

if (labActive !== 20) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-ab.js: expected 20 active lab recipes, got ${labActive}`,
  )
}
if (labTotal !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-ab.js: expected 40 lab recipes, got ${labTotal}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

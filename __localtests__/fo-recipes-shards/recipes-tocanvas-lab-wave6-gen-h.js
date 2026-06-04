/**
 * Lab toCanvas wave-6 gen shard h — lab-toCanvas × structural radicalPatch grid.
 * 100 recipes: tc-lab-w6g-h-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-h-*'
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
    slug: "lab-toCanvas / leaf / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas / chromium / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas / h2+chromium / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas / full / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas / none / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas / fo / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas / h2 / int-floor / h2-container-lang / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical h2-container-lang + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas / chromium / int-floor / h2-pin-line-height-from-live / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical h2-pin-line-height-from-live + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas / h2+chromium / int-floor / h2-pin-line-height-from-live / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical h2-pin-line-height-from-live + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas / full / int-floor / h2-pin-line-height-from-live / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical h2-pin-line-height-from-live + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas / none / int-floor / h2-pin-line-height-from-live / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical h2-pin-line-height-from-live + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas / h2 / int-floor / h2-pin-line-height-from-live / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical h2-pin-line-height-from-live + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas / leaf / int-floor / h2-pin-line-height-from-live / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical h2-pin-line-height-from-live + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas / h2+chromium / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas / full / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas / none / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas / fo / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas / h2 / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas / leaf / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas / chromium / int-floor / lab-pin-normal-lh-from-probe / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas / full / int-floor / chrome-legacy-webkit-bundle / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical chrome-legacy-webkit-bundle + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas / none / int-floor / chrome-legacy-webkit-bundle / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical chrome-legacy-webkit-bundle + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas / h2 / int-floor / chrome-legacy-webkit-bundle / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical chrome-legacy-webkit-bundle + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas / leaf / int-floor / chrome-legacy-webkit-bundle / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical chrome-legacy-webkit-bundle + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas / chromium / int-floor / chrome-legacy-webkit-bundle / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical chrome-legacy-webkit-bundle + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas / h2+chromium / int-floor / chrome-legacy-webkit-bundle / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical chrome-legacy-webkit-bundle + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas / none / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas / fo / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas / h2 / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas / leaf / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas / chromium / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas / h2+chromium / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas / full / int-floor / math-floor-viewbox-stash-frac / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical math-floor-viewbox-stash-frac + FO x/y +0.0001 + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas / fo / int-floor / remove-fe-filters / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical remove-fe-filters + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas / h2 / int-floor / remove-fe-filters / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical remove-fe-filters + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas / leaf / int-floor / remove-fe-filters / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical remove-fe-filters + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas / chromium / int-floor / remove-fe-filters / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical remove-fe-filters + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas / h2+chromium / int-floor / remove-fe-filters / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical remove-fe-filters + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas / full / int-floor / remove-fe-filters / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical remove-fe-filters + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas / h2 / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas / leaf / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas / chromium / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas / h2+chromium / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas / full / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas / none / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas / fo / int-floor / math-half-leading-with-floor-viewbox / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / backing-round / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical math-half-leading-with-floor-viewbox + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + backingRound round + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "round",
      },
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas / leaf / int-floor / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas / chromium / int-floor / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas / h2+chromium / int-floor / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas / full / int-floor / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas / none / int-floor / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas / h2 / int-floor / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / none / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + default labToCanvasOpts + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas / chromium / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas / h2+chromium / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas / full / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas / none / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas / fo / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas / h2 / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas / leaf / int-floor / integer-snap-all-rects / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / backing-ceil / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical integer-snap-all-rects + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + backingRound ceil + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas / h2+chromium / int-floor / math-pin-fo-container-dims-from-live-root / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / dpr-device / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical math-pin-fo-container-dims-from-live-root + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + dprSource device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas / full / int-floor / math-pin-fo-container-dims-from-live-root / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / dpr-device / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical math-pin-fo-container-dims-from-live-root + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + dprSource device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas / none / int-floor / math-pin-fo-container-dims-from-live-root / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / dpr-device / smooth-off",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical math-pin-fo-container-dims-from-live-root + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + dprSource device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas / h2 / int-floor / math-pin-fo-container-dims-from-live-root / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / dpr-device / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical math-pin-fo-container-dims-from-live-root + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + dprSource device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas / leaf / int-floor / math-pin-fo-container-dims-from-live-root / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / dpr-device / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical math-pin-fo-container-dims-from-live-root + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + dprSource device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas / chromium / int-floor / math-pin-fo-container-dims-from-live-root / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / dpr-device / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical math-pin-fo-container-dims-from-live-root + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + dprSource device + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas / full / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas / none / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas / fo / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas / h2 / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas / leaf / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas / chromium / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas / h2+chromium / int-floor / no-rad / no-mp / no-lpr / raster / xy / filter-empty-nop / no-markup / backing-floor / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + FO x/y +0.0001 + foSvg filter-empty-nop + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      backingRound: "floor",
      },
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas / none / int-floor / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical h2-flex-stretch-leaf-from-live + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas / h2 / int-floor / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical h2-flex-stretch-leaf-from-live + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas / leaf / int-floor / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical h2-flex-stretch-leaf-from-live + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas / chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical h2-flex-stretch-leaf-from-live + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas / h2+chromium / int-floor / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical h2-flex-stretch-leaf-from-live + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas / full / int-floor / h2-flex-stretch-leaf-from-live / tc-decode-safari-raf / device-grid-floor / both / no-attr / no-fosvg / no-markup / backing-round / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical h2-flex-stretch-leaf-from-live + mp tc-decode-safari-raf + labPreRaster device-grid-floor + no foAttrPatch + backingRound round + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-decode-safari-raf",
      labPreRaster: "device-grid-floor",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas / fo / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas / h2 / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas / leaf / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas / chromium / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas / h2+chromium / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas / full / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas / none / int-floor / lab-pin-half-leading-padding-top / raf-before-draw / no-lpr / raster / xywh / filter-empty-nop / no-markup / none / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical lab-pin-half-leading-padding-top + mp raf-before-draw + FO x/y/w/h +0.0001 + foSvg filter-empty-nop + default labToCanvasOpts + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "raf-before-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas / h2 / int-floor / h2-container-lang / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical h2-container-lang + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas / leaf / int-floor / h2-container-lang / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical h2-container-lang + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas / chromium / int-floor / h2-container-lang / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical h2-container-lang + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas / h2+chromium / int-floor / h2-container-lang / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical h2-container-lang + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas / full / int-floor / h2-container-lang / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical h2-container-lang + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas / none / int-floor / h2-container-lang / no-mp / device-grid-floor / both / xy / no-fosvg / no-markup / backing-ceil / smooth-off",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical h2-container-lang + labPreRaster device-grid-floor + FO x/y +0.0001 + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-container-lang",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas / leaf / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas / chromium / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas / h2+chromium / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas / full / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas / none / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + no extra CSS + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas / fo / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas / h2 / int-floor / h2-pin-line-height-from-live / tc-decode-safari-raf / no-lpr / raster / no-attr / filter-empty-nop / no-markup / dpr-device / none",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound int-floor + radical h2-pin-line-height-from-live + mp tc-decode-safari-raf + no foAttrPatch + foSvg filter-empty-nop + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "int-floor",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-decode-safari-raf",
      foSvgPatch: "filter-empty-nop",
      labToCanvasOpts: {
      dprSource: "device",
      },
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas / chromium / int-floor / lab-pin-normal-lh-from-probe / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas / h2+chromium / int-floor / lab-pin-normal-lh-from-probe / raf-before-draw / device-grid-floor / both / xywh / no-fosvg / no-markup / backing-floor / smooth-off",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound int-floor + radical lab-pin-normal-lh-from-probe + mp raf-before-draw + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + backingRound floor + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "raf-before-draw",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-h.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-h.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-h-${num}`,
    label: `w6gh #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen h; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-h.js: expected 100 recipes, got ${RECIPES.length}`,
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
    throw new Error(`recipes-tocanvas-lab-wave6-gen-h.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

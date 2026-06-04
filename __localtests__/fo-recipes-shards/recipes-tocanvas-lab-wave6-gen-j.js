/**
 * Lab toCanvas wave-6 gen shard j — capstone — all lab forks × max cross-product.
 * 100 recipes: tc-lab-w6g-j-001..100 — combinatorial lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6g-j-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, inject: 'both'|'raster', extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { rasterPatch: string } }[]} */
const SPECS = [
  {
    n: 1,
    slug: "lab-toCanvas / h2 / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 2,
    slug: "lab-toCanvas / leaf / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 3,
    slug: "lab-toCanvas / chromium / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 4,
    slug: "lab-toCanvas / h2+chromium / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 5,
    slug: "lab-toCanvas / full / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 6,
    slug: "lab-toCanvas / none / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + no extra CSS + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 7,
    slug: "lab-toCanvas / fo / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-decode-wrap / no-lpr / raster / no-attr / fe-component-transfer-identity / strip-identity-transforms / backing-round / smooth-high",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-decode-wrap + no foAttrPatch + foSvg fe-component-transfer-identity + markup strip-identity-transforms + backingRound round + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-decode-wrap",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 8,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / xywh / fe-morphology-identity / no-markup / backing-floor / will-read",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 9,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / xywh / fe-morphology-identity / no-markup / backing-floor / will-read",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 10,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / xywh / fe-morphology-identity / no-markup / backing-floor / will-read",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 11,
    slug: "lab-toCanvas-decode / full / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / xywh / fe-morphology-identity / no-markup / backing-floor / will-read",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 12,
    slug: "lab-toCanvas-decode / none / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / xywh / fe-morphology-identity / no-markup / backing-floor / will-read",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 13,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-canvas-backing-ceil / device-grid-floor / both / xywh / fe-morphology-identity / no-markup / backing-floor / will-read",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-canvas-backing-ceil + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + backingRound floor + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-canvas-backing-ceil",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 14,
    slug: "lab-toCanvas-frac / chromium / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 15,
    slug: "lab-toCanvas-frac / h2+chromium / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 16,
    slug: "lab-toCanvas-frac / full / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 17,
    slug: "lab-toCanvas-frac / none / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 18,
    slug: "lab-toCanvas-frac / fo / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 19,
    slug: "lab-toCanvas-frac / h2 / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 20,
    slug: "lab-toCanvas-frac / leaf / integer-viewbox / math-floor-viewbox-stash-frac / drawImage-wrap / no-lpr / raster / xy / filter-empty-nop / explicit-xmlns-strip-transforms / floor+device / reset-xform",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp drawImage-wrap + FO x/y +0.0001 + foSvg filter-empty-nop + markup explicit-xmlns-strip-transforms + backing floor + device dpr/style + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "drawImage-wrap",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 21,
    slug: "lab-toCanvas / h2+chromium / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / device-grid-floor / both / no-attr / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound integer-viewbox + radical remove-fe-filters + mp tc-lab-draw-create-image-bitmap-pixelated + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup base64-roundtrip + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 22,
    slug: "lab-toCanvas / full / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / device-grid-floor / both / no-attr / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical remove-fe-filters + mp tc-lab-draw-create-image-bitmap-pixelated + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup base64-roundtrip + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 23,
    slug: "lab-toCanvas / none / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / device-grid-floor / both / no-attr / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas + no extra CSS + svgRootRound integer-viewbox + radical remove-fe-filters + mp tc-lab-draw-create-image-bitmap-pixelated + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup base64-roundtrip + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 24,
    slug: "lab-toCanvas / h2 / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / device-grid-floor / both / no-attr / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical remove-fe-filters + mp tc-lab-draw-create-image-bitmap-pixelated + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup base64-roundtrip + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 25,
    slug: "lab-toCanvas / leaf / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / device-grid-floor / both / no-attr / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound integer-viewbox + radical remove-fe-filters + mp tc-lab-draw-create-image-bitmap-pixelated + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup base64-roundtrip + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 26,
    slug: "lab-toCanvas / chromium / integer-viewbox / remove-fe-filters / tc-lab-draw-create-image-bitmap-pixelated / device-grid-floor / both / no-attr / fo-shape-rendering-auto / base64-roundtrip / opt-harness-device / smooth-off-high",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound integer-viewbox + radical remove-fe-filters + mp tc-lab-draw-create-image-bitmap-pixelated + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup base64-roundtrip + optDims harness-device + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "remove-fe-filters",
      monkeypatch: "tc-lab-draw-create-image-bitmap-pixelated",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 27,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 28,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 29,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 30,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 31,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 32,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 33,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-half-leading-with-floor-viewbox / tc-decode-safari-raf / no-lpr / raster / xywh / fe-color-matrix-identity / strip-xml-declaration / dpr-device / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-half-leading-with-floor-viewbox + mp tc-decode-safari-raf + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-xml-declaration + dprSource device + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-half-leading-with-floor-viewbox",
      monkeypatch: "tc-decode-safari-raf",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      dprSource: "device",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 34,
    slug: "lab-toCanvas-frac / none / integer-viewbox / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / strip-identity-transforms / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound integer-viewbox + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + markup strip-identity-transforms + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 35,
    slug: "lab-toCanvas-frac / h2 / integer-viewbox / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / strip-identity-transforms / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + markup strip-identity-transforms + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 36,
    slug: "lab-toCanvas-frac / leaf / integer-viewbox / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / strip-identity-transforms / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound integer-viewbox + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + markup strip-identity-transforms + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 37,
    slug: "lab-toCanvas-frac / chromium / integer-viewbox / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / strip-identity-transforms / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound integer-viewbox + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + markup strip-identity-transforms + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 38,
    slug: "lab-toCanvas-frac / h2+chromium / integer-viewbox / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / strip-identity-transforms / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound integer-viewbox + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + markup strip-identity-transforms + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 39,
    slug: "lab-toCanvas-frac / full / integer-viewbox / h2-fo-percent-int-viewbox / no-mp / device-grid-floor / both / xy / no-fosvg / strip-identity-transforms / backing-ceil / smooth-off",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical h2-fo-percent-int-viewbox + labPreRaster device-grid-floor + FO x/y +0.0001 + markup strip-identity-transforms + backingRound ceil + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 40,
    slug: "lab-toCanvas / fo / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 41,
    slug: "lab-toCanvas / h2 / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 42,
    slug: "lab-toCanvas / leaf / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 43,
    slug: "lab-toCanvas / chromium / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 44,
    slug: "lab-toCanvas / h2+chromium / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 45,
    slug: "lab-toCanvas / full / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 46,
    slug: "lab-toCanvas / none / integer-viewbox / integer-snap-all-rects / tc-lab-mp-decode-safari-raf / no-lpr / raster / no-attr / fe-component-transfer-identity / no-markup / none / smooth-high",
    idea: "lab-toCanvas + no extra CSS + svgRootRound integer-viewbox + radical integer-snap-all-rects + mp tc-lab-mp-decode-safari-raf + no foAttrPatch + foSvg fe-component-transfer-identity + default labToCanvasOpts + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "integer-snap-all-rects",
      monkeypatch: "tc-lab-mp-decode-safari-raf",
      foSvgPatch: "fe-component-transfer-identity",
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 47,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-mp-canvas-backing-floor / device-grid-floor / both / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms / ctx-scale / will-read",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical math-pin-fo-container-dims-from-live-root + mp tc-lab-mp-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup explicit-xmlns-strip-transforms + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 48,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-mp-canvas-backing-floor / device-grid-floor / both / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms / ctx-scale / will-read",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-pin-fo-container-dims-from-live-root + mp tc-lab-mp-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup explicit-xmlns-strip-transforms + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 49,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-mp-canvas-backing-floor / device-grid-floor / both / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms / ctx-scale / will-read",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical math-pin-fo-container-dims-from-live-root + mp tc-lab-mp-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup explicit-xmlns-strip-transforms + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 50,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-mp-canvas-backing-floor / device-grid-floor / both / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms / ctx-scale / will-read",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical math-pin-fo-container-dims-from-live-root + mp tc-lab-mp-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup explicit-xmlns-strip-transforms + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 51,
    slug: "lab-toCanvas-decode / full / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-mp-canvas-backing-floor / device-grid-floor / both / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms / ctx-scale / will-read",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical math-pin-fo-container-dims-from-live-root + mp tc-lab-mp-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup explicit-xmlns-strip-transforms + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 52,
    slug: "lab-toCanvas-decode / none / integer-viewbox / math-pin-fo-container-dims-from-live-root / tc-lab-mp-canvas-backing-floor / device-grid-floor / both / xywh / fe-morphology-identity / explicit-xmlns-strip-transforms / ctx-scale / will-read",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical math-pin-fo-container-dims-from-live-root + mp tc-lab-mp-canvas-backing-floor + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup explicit-xmlns-strip-transforms + ctxScale true + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-pin-fo-container-dims-from-live-root",
      monkeypatch: "tc-lab-mp-canvas-backing-floor",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      ctxScale: true,
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 53,
    slug: "lab-toCanvas-frac / leaf / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 54,
    slug: "lab-toCanvas-frac / chromium / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 55,
    slug: "lab-toCanvas-frac / h2+chromium / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 56,
    slug: "lab-toCanvas-frac / full / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 57,
    slug: "lab-toCanvas-frac / none / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 58,
    slug: "lab-toCanvas-frac / fo / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 59,
    slug: "lab-toCanvas-frac / h2 / integer-viewbox / no-rad / tc-lab-mp-draw-image-round-all / no-lpr / raster / xy / filter-empty-nop / base64-roundtrip / style-device / reset-xform",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + mp tc-lab-mp-draw-image-round-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup base64-roundtrip + stylePixels device + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      monkeypatch: "tc-lab-mp-draw-image-round-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      stylePixels: "device",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 60,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-xml-declaration / backing-round / smooth-off-high",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound integer-viewbox + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-device-grid-floor + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-xml-declaration + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-device-grid-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 61,
    slug: "lab-toCanvas / h2+chromium / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-xml-declaration / backing-round / smooth-off-high",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound integer-viewbox + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-device-grid-floor + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-xml-declaration + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-device-grid-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 62,
    slug: "lab-toCanvas / full / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-xml-declaration / backing-round / smooth-off-high",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-device-grid-floor + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-xml-declaration + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-device-grid-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 63,
    slug: "lab-toCanvas / none / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-xml-declaration / backing-round / smooth-off-high",
    idea: "lab-toCanvas + no extra CSS + svgRootRound integer-viewbox + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-device-grid-floor + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-xml-declaration + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-device-grid-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 64,
    slug: "lab-toCanvas / h2 / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-xml-declaration / backing-round / smooth-off-high",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-device-grid-floor + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-xml-declaration + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-device-grid-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 65,
    slug: "lab-toCanvas / leaf / integer-viewbox / h2-flex-stretch-leaf-from-live / tc-lab-draw-device-grid-floor / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-xml-declaration / backing-round / smooth-off-high",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound integer-viewbox + radical h2-flex-stretch-leaf-from-live + mp tc-lab-draw-device-grid-floor + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-xml-declaration + backingRound round + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-flex-stretch-leaf-from-live",
      monkeypatch: "tc-lab-draw-device-grid-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "round",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 66,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 67,
    slug: "lab-toCanvas-decode / full / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 68,
    slug: "lab-toCanvas-decode / none / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + no extra CSS + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 69,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 70,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 71,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 72,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / lab-pin-half-leading-padding-top / tc-lab-draw-h2-frac-draw / no-lpr / raster / xywh / fe-color-matrix-identity / strip-identity-transforms / backing-floor / none",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical lab-pin-half-leading-padding-top + mp tc-lab-draw-h2-frac-draw + FO x/y/w/h +0.0001 + foSvg fe-color-matrix-identity + markup strip-identity-transforms + backingRound floor + default labToCanvasCtx",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-half-leading-padding-top",
      monkeypatch: "tc-lab-draw-h2-frac-draw",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-color-matrix-identity",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasOpts: {
      backingRound: "floor",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 73,
    slug: "lab-toCanvas-frac / full / integer-viewbox / h2-container-lang / tc-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / no-markup / floor+device / smooth-off",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical h2-container-lang + mp tc-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + backing floor + device dpr/style + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-container-lang",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 74,
    slug: "lab-toCanvas-frac / none / integer-viewbox / h2-container-lang / tc-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / no-markup / floor+device / smooth-off",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound integer-viewbox + radical h2-container-lang + mp tc-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + backing floor + device dpr/style + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-container-lang",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 75,
    slug: "lab-toCanvas-frac / h2 / integer-viewbox / h2-container-lang / tc-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / no-markup / floor+device / smooth-off",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical h2-container-lang + mp tc-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + backing floor + device dpr/style + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-container-lang",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 76,
    slug: "lab-toCanvas-frac / leaf / integer-viewbox / h2-container-lang / tc-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / no-markup / floor+device / smooth-off",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound integer-viewbox + radical h2-container-lang + mp tc-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + backing floor + device dpr/style + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-container-lang",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 77,
    slug: "lab-toCanvas-frac / chromium / integer-viewbox / h2-container-lang / tc-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / no-markup / floor+device / smooth-off",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound integer-viewbox + radical h2-container-lang + mp tc-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + backing floor + device dpr/style + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-container-lang",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 78,
    slug: "lab-toCanvas-frac / h2+chromium / integer-viewbox / h2-container-lang / tc-draw-image-round-all / device-grid-floor / both / xy / no-fosvg / no-markup / floor+device / smooth-off",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound integer-viewbox + radical h2-container-lang + mp tc-draw-image-round-all + labPreRaster device-grid-floor + FO x/y +0.0001 + backing floor + device dpr/style + imageSmoothingEnabled false",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-container-lang",
      monkeypatch: "tc-draw-image-round-all",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      labToCanvasOpts: {
      backingRound: "floor",
      dprSource: "device",
      stylePixels: "device",
      },
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      },
    },
  },
  {
    n: 79,
    slug: "lab-toCanvas / none / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + no extra CSS + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 80,
    slug: "lab-toCanvas / fo / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 81,
    slug: "lab-toCanvas / h2 / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 82,
    slug: "lab-toCanvas / leaf / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 83,
    slug: "lab-toCanvas / chromium / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 84,
    slug: "lab-toCanvas / h2+chromium / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + H2 + Chromium + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 85,
    slug: "lab-toCanvas / full / integer-viewbox / h2-pin-line-height-from-live / tc-lab-mp-decode-twice / no-lpr / raster / no-attr / fe-component-transfer-identity / explicit-xmlns-strip-transforms / opt-harness-device / smooth-high",
    idea: "lab-toCanvas + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical h2-pin-line-height-from-live + mp tc-lab-mp-decode-twice + no foAttrPatch + foSvg fe-component-transfer-identity + markup explicit-xmlns-strip-transforms + optDims harness-device + imageSmoothingQuality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "h2-pin-line-height-from-live",
      monkeypatch: "tc-lab-mp-decode-twice",
      foSvgPatch: "fe-component-transfer-identity",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
      labToCanvasOpts: {
      optDims: "harness-device",
      },
      labToCanvasCtx: {
      imageSmoothingQuality: "high",
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 86,
    slug: "lab-toCanvas-decode / fo / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-canvas-backing-round / device-grid-floor / both / xywh / fe-morphology-identity / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-decode + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-canvas-backing-round + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 87,
    slug: "lab-toCanvas-decode / h2 / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-canvas-backing-round / device-grid-floor / both / xywh / fe-morphology-identity / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-decode + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-canvas-backing-round + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 88,
    slug: "lab-toCanvas-decode / leaf / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-canvas-backing-round / device-grid-floor / both / xywh / fe-morphology-identity / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-decode + FO + flex leaf strut + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-canvas-backing-round + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 89,
    slug: "lab-toCanvas-decode / chromium / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-canvas-backing-round / device-grid-floor / both / xywh / fe-morphology-identity / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-decode + FO + Chromium copies + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-canvas-backing-round + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 90,
    slug: "lab-toCanvas-decode / h2+chromium / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-canvas-backing-round / device-grid-floor / both / xywh / fe-morphology-identity / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-decode + H2 + Chromium + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-canvas-backing-round + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 91,
    slug: "lab-toCanvas-decode / full / integer-viewbox / lab-pin-normal-lh-from-probe / tc-lab-mp-canvas-backing-round / device-grid-floor / both / xywh / fe-morphology-identity / base64-roundtrip / dpr-device / will-read",
    idea: "lab-toCanvas-decode + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical lab-pin-normal-lh-from-probe + mp tc-lab-mp-canvas-backing-round + labPreRaster device-grid-floor + FO x/y/w/h +0.0001 + foSvg fe-morphology-identity + markup base64-roundtrip + dprSource device + willReadFrequently true",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas-decode",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "lab-pin-normal-lh-from-probe",
      monkeypatch: "tc-lab-mp-canvas-backing-round",
      labPreRaster: "device-grid-floor",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      width: "0.0001",
      height: "0.0001",
      },
      foSvgPatch: "fe-morphology-identity",
      svgMarkupPatch: "base64-roundtrip",
      labToCanvasOpts: {
      dprSource: "device",
      },
      labToCanvasCtx: {
      willReadFrequently: true,
      },
    },
  },
  {
    n: 92,
    slug: "lab-toCanvas-frac / h2 / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + H2_RASTER_NORMALIZE_CSS + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 93,
    slug: "lab-toCanvas-frac / leaf / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + FO + flex leaf strut + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 94,
    slug: "lab-toCanvas-frac / chromium / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + FO + Chromium copies + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 95,
    slug: "lab-toCanvas-frac / h2+chromium / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + H2 + Chromium + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 96,
    slug: "lab-toCanvas-frac / full / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + H2 + leaf + Chromium + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 97,
    slug: "lab-toCanvas-frac / none / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + no extra CSS + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 98,
    slug: "lab-toCanvas-frac / fo / integer-viewbox / chrome-legacy-webkit-bundle / tc-lab-mp-draw-image-ceil-all / no-lpr / raster / xy / filter-empty-nop / strip-xml-declaration / backing-ceil / reset-xform",
    idea: "lab-toCanvas-frac + FO_BASELINE_CSS + svgRootRound integer-viewbox + radical chrome-legacy-webkit-bundle + mp tc-lab-mp-draw-image-ceil-all + FO x/y +0.0001 + foSvg filter-empty-nop + markup strip-xml-declaration + backingRound ceil + resetTransformBeforeDraw",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
    inject: "raster",
    extra: {
      rasterPatch: "lab-toCanvas-frac",
      inject: "raster",
      svgRootRound: "integer-viewbox",
      radicalPatch: "chrome-legacy-webkit-bundle",
      monkeypatch: "tc-lab-mp-draw-image-ceil-all",
      foAttrPatch: {
      x: "0.0001",
      y: "0.0001",
      },
      foSvgPatch: "filter-empty-nop",
      svgMarkupPatch: "strip-xml-declaration",
      labToCanvasOpts: {
      backingRound: "ceil",
      },
      labToCanvasCtx: {
      resetTransformBeforeDraw: true,
      },
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 99,
    slug: "lab-toCanvas / leaf / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-identity-transforms / none / smooth-off-high",
    idea: "lab-toCanvas + FO + flex leaf strut + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-identity-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
  {
    n: 100,
    slug: "lab-toCanvas / chromium / integer-viewbox / math-floor-viewbox-stash-frac / decode-interval-prototype / device-grid-floor / both / no-attr / fo-shape-rendering-auto / strip-identity-transforms / none / smooth-off-high",
    idea: "lab-toCanvas + FO + Chromium copies + svgRootRound integer-viewbox + radical math-floor-viewbox-stash-frac + mp decode-interval-prototype + labPreRaster device-grid-floor + no foAttrPatch + foSvg fo-shape-rendering-auto + markup strip-identity-transforms + default labToCanvasOpts + smoothing off + quality high",
    css: "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;text-rendering:geometricPrecision!important}foreignObject *{font-kerning:normal!important}",
    inject: "both",
    extra: {
      rasterPatch: "lab-toCanvas",
      inject: "both",
      svgRootRound: "integer-viewbox",
      radicalPatch: "math-floor-viewbox-stash-frac",
      monkeypatch: "decode-interval-prototype",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fo-shape-rendering-auto",
      svgMarkupPatch: "strip-identity-transforms",
      labToCanvasCtx: {
      imageSmoothingEnabled: false,
      imageSmoothingQuality: "high",
      },
    },
  },
]

if (SPECS.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-j.js: expected 100 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 100) {
  throw new Error(`recipes-tocanvas-lab-wave6-gen-j.js: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css, inject, extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6g-j-${num}`,
    label: `w6gj #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    notes: `Wave-6 lab toCanvas gen j; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-gen-j.js: expected 100 recipes, got ${RECIPES.length}`,
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
    JSON.stringify(r.monkeypatch ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-gen-j.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Drift batch 66 — product path + triple stack alignment (drift-batch66-001..040).
 * Lane theme: product-toCanvas base + decode stacks + mp combos + tc-fix-drift rforks.
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch66-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch66-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important;' +
  'text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}' +
  'foreignObject *{box-sizing:border-box!important}'

const CAPTURE_RECIPE_CSS =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR_ROOT = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'product-settle-w7',
    label: 'product + decode-settle + w7 meta',
    idea: 'product-toCanvas decodeSettle + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-settle-w7-dpr',
    label: 'product + decode-settle + w7 dpr root',
    idea: 'product decodeSettle + fo-y-half-leading-dpr-root-meta + dprScaledSvgRootDraw',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'product-interval-w7',
    label: 'product + decode-interval + w7 meta',
    idea: 'product-toCanvas + decode-interval load + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-interval-dpr-root',
    label: 'product + decode-interval + dpr root meta',
    idea: 'product decode-interval + fo-y-half-leading-dpr-root-meta harness fork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'product-fonts-w7',
    label: 'product + fonts-ready + w7 meta',
    idea: 'product-toCanvas + fonts.ready pre-raster + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-fonts-intv-half-leading',
    label: 'product + fonts-ready-interval + half-leading dpr',
    idea: 'product fonts-ready-interval + fo-y-half-leading-dpr-root-meta harness',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'fonts-ready-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'product-settle-drift004',
    label: 'product + decode-settle + tc-drift-004 leaf translate',
    idea: 'product decodeSettle + text-leaf-translate-y-half-leading-meta rfork (drift-004)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "text-leaf-translate-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-interval-drift006',
    label: 'product + decode-interval + tc-drift-006 trim rfork',
    idea: 'product decode-interval + leading-trim-text-box-leaf rfork (drift-006)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "leading-trim-text-box-leaf",
      },
    },
  },
  {
    lane: 'product-settle-drift008',
    label: 'product + decode-settle + tc-drift-008 inline-block rfork',
    idea: 'product decodeSettle + text-leaf-inline-block-linebox rfork (drift-008)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "text-leaf-inline-block-linebox",
      },
    },
  },
  {
    lane: 'product-interval-drift010',
    label: 'product + decode-interval + tc-drift-010 overflow rfork',
    idea: 'product decode-interval + fo-overflow-hidden-linebox rfork (drift-010)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-overflow-hidden-linebox",
      },
    },
  },
  {
    lane: 'mp-h2-product-settle-w7',
    label: 'mp h2 + product + decode-settle + w7',
    idea: 'h2-fo-normalize-full mp + product decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: "h2-fo-normalize-full",
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'mp-googlefonts-product-interval-w7',
    label: 'mp googlefonts + product + decode-interval + w7',
    idea: 'googlefonts embed mp + product decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: "googlefonts-embed-capture",
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: {"embedFonts":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'mp-h2-googlefonts-product-settle',
    label: 'mp h2 + googlefonts + product decode-settle',
    idea: 'h2 normalize + googlefonts embed + product decodeSettle + w7 meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ["h2-fo-normalize-full","googlefonts-embed-capture"],
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: {"embedFonts":true},
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'mp-capture-recipe-w7-settle',
    label: 'mp capture-recipe-css + product + w7 + decode-settle',
    idea: 'capture-recipe-css mp + product decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_RECIPE_CSS,
      monkeypatch: "capture-recipe-css",
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'mp-capture-recipe-dpr-interval',
    label: 'mp capture-recipe-css + product + dpr root + decode-interval',
    idea: 'capture-recipe-css mp + product decode-interval + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_RECIPE_CSS,
      monkeypatch: "capture-recipe-css",
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'radical-pin-inline-product-settle',
    label: 'pin-inline radical + product decode-settle',
    idea: 'lab-pin-inline-box-height-from-clientrects + product decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
      },
    },
  },
  {
    lane: 'radical-pin-ink-product-interval',
    label: 'pin-ink radical + product decode-interval',
    idea: 'lab-pin-ink-top-in-border-padding + product decode-interval load',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
    },
  },
  {
    lane: 'product-trim-settle-w7',
    label: 'product + leading-trim capture + decode-settle + w7',
    idea: 'experimentalFoLeadingTrim + product decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: {"experimentalFoLeadingTrim":true},
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-inline-interval-w7',
    label: 'product + inline-block capture + decode-interval + w7',
    idea: 'inline-block linebox capture + product decode-interval + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: {"experimentalFoTextLeafNormalize":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-flex-fonts-w7',
    label: 'product + flex-start capture + fonts-ready + w7',
    idea: 'experimentalFoFlexTextLeafAlignStart + product fonts-ready + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessSnapdom: {"experimentalFoFlexTextLeafAlignStart":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-chromium-settle-w7-dpr',
    label: 'product + chromium text + decode-settle + w7 dpr',
    idea: 'experimentalFoChromiumText + product decodeSettle + w7 dpr root',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: {"experimentalFoChromiumText":true},
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'product-textlayout-interval-w7',
    label: 'product + text layout + decode-interval + w7',
    idea: 'experimentalFoTextLayout + product decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: {"experimentalFoTextLayout":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-drift017-strut-range',
    label: 'product + tc-drift-017 strut-range + settle',
    idea: 'product decodeSettle + fo-y-strut-range-meta rfork (drift-017)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-strut-range-meta",
      },
    },
  },
  {
    lane: 'product-drift018-viewbox-y',
    label: 'product + tc-drift-018 viewbox-y + interval',
    idea: 'product decode-interval + viewbox-y-half-leading-meta rfork (drift-018)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "viewbox-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'product-drift019-combo-linebox',
    label: 'product + tc-drift-019 combo-linebox + settle',
    idea: 'product decodeSettle + combo-fo-y-half-leading-linebox rfork (drift-019)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "combo-fo-y-half-leading-linebox",
      },
    },
  },
  {
    lane: 'radical-pin-ink-product-settle-trim',
    label: 'pin-ink radical + product settle + trim rfork',
    idea: 'pin-ink radical + product decodeSettle + leading-trim-text-box-leaf rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "leading-trim-text-box-leaf",
      },
    },
  },
  {
    lane: 'product-drift024-double-fo',
    label: 'product + tc-drift-024 double-fo + decode-interval',
    idea: 'product decode-interval + double-fo-outer-inner-linebox rfork (drift-024)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "double-fo-outer-inner-linebox",
      },
    },
  },
  {
    lane: 'product-drift022-clip-inset',
    label: 'product + tc-drift-022 clip-inset + decode-interval',
    idea: 'product decode-interval + fo-clip-inset-zero-linebox rfork (drift-022)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-clip-inset-zero-linebox",
      },
    },
  },
  {
    lane: 'product-drift026-remove-flex',
    label: 'product + tc-drift-026 remove-flex + decode-settle',
    idea: 'product decodeSettle + remove-flex-display-a-decode rfork (drift-026)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "remove-flex-display-a-decode",
      },
    },
  },
  {
    lane: 'product-chromium-interval-w7',
    label: 'product + chromium text + decode-interval + w7',
    idea: 'experimentalFoChromiumText + product decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: { experimentalFoChromiumText: true },
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'wf-031-batch1-029-product-settle-w7',
    label: 'wf batch1-029: product dpr + decode-settle + w7',
    idea: 'drift-batch1-029 rfork: product dpr root + decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDprScaledSvgRootDraw: true,
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'wf-032-batch1-029-product-interval',
    label: 'wf batch1-029: product dpr + decode-interval',
    idea: 'drift-batch1-029 rfork: product dpr root + decode-interval pipeline',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'wf-033-batch1-030-h2-product-interval-w7-dpr',
    label: 'wf batch1-030: h2 + product interval + w7 dpr',
    idea: 'drift-batch1-030 rfork: h2 capture + product decode-interval + w7 dpr meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: "h2-fo-normalize-full",
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'wf-034-batch1-030-h2-product-settle',
    label: 'wf batch1-030: h2 capture + product decode-settle + w7',
    idea: 'drift-batch1-030 rfork: h2 foNormalize + product decodeSettle + w7 meta + fonts-ready',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: "h2-fo-normalize-full",
      rasterPatch: 'product-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'wf-035-tc-drift-039-product-settle-w7',
    label: 'wf tc-fix-drift-039: lh-normal + product settle + w7',
    idea: 'tc-fix-drift-039 rfork: lh normal capture + product decodeSettle + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: {"experimentalFoTextLineHeightNormal":true},
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'wf-036-tc-drift-039-product-interval-w7-dpr',
    label: 'wf tc-fix-drift-039: lh-normal + product interval + w7 dpr',
    idea: 'tc-fix-drift-039 rfork: lh normal + product decode-interval + w7 dpr root',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: {"experimentalFoTextLineHeightNormal":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'wf-037-batch2-036-googlefonts-product-interval-w7-dpr',
    label: 'wf batch2-036: googlefonts + product interval + w7 dpr',
    idea: 'drift-batch2-036 rfork: googlefonts embed + product decode-interval + w7 dpr meta',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: "googlefonts-embed-capture",
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: {"embedFonts":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'wf-038-batch2-036-googlefonts-product-settle-dpr',
    label: 'wf batch2-036: googlefonts + product settle + dpr w7',
    idea: 'drift-batch2-036 rfork: googlefonts + product decodeSettle + w7 meta + dpr root',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: "googlefonts-embed-capture",
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: {"embedFonts":true},
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'wf-039-batch1-040-product-full-settle',
    label: 'wf batch1-040: product full stack + decode-settle',
    idea: 'drift-batch1-040 rfork: h2+googlefonts + product decodeSettle + w7 dpr root',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ["h2-fo-normalize-full","googlefonts-embed-capture"],
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: {"embedFonts":true},
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'wf-040-batch1-040-product-full-interval',
    label: 'wf batch1-040: product full stack + decode-interval',
    idea: 'drift-batch1-040 rfork: h2+googlefonts + product decode-interval + w7 dpr',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ["h2-fo-normalize-full","googlefonts-embed-capture"],
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessSnapdom: {"embedFonts":true},
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
        experimentalRasterDprScaledSvgRootDraw: true,
        experimentalRasterDecodeSettle: true,
      },
    },
  }
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch66-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch66-012',
  'drift-batch66-013',
  'drift-batch66-014',
  'drift-batch66-015',
  'drift-batch66-016',
  'drift-batch66-017',
  'drift-batch66-018',
  'drift-batch66-020',
  'drift-batch66-021',
  'drift-batch66-022',
  'drift-batch66-023',
  'drift-batch66-024',
  'drift-batch66-025',
  'drift-batch66-026',
  'drift-batch66-027',
  'drift-batch66-028',
  'drift-batch66-029',
  'drift-batch66-030',
  'drift-batch66-031',
  'drift-batch66-032',
  'drift-batch66-033',
  'drift-batch66-034',
  'drift-batch66-035',
  'drift-batch66-036',
  'drift-batch66-037',
  'drift-batch66-038',
  'drift-batch66-039',
  'drift-batch66-040',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch66-${num}`,
    label: `drift-batch66 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch66',
    active: DRIFT_BATCH_KEEP_ACTIVE.size === 0 || DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch66-${num}`),
    notes: `Drift batch 66 lane=${spec.lane}; product path triple-alignment; FO raster only.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    (r.labRasterPatches ?? []).join(','),
    r.labPreRaster ?? '',
    r.labLoadPipeline ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) throw new Error(`recipes-drift-batch66-triple: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const DRIFT_BATCH66_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

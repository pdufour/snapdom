/**
 * Drift batch 2 — 40 triple-alignment probes (drift-batch2-001..040).
 * Every recipe stacks decode timing/path + FO normalize (w7 half-leading or capture CSS).
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch2-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch2-triple
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

const W7_LEAF_TRANSLATE = {
  rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'decode-settle-w7-meta',
    label: 'decode-settle + fo-y-half-leading-meta',
    idea: 'Lab toCanvas decodeSettle + w7 fo-y-half-leading-meta rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'decode-interval-w7-dpr',
    label: 'decode-interval + fo-y-half-leading-dpr-root',
    idea: 'decode-interval raster + w7 dpr-root meta fork + caller dpr SVG root scale',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'double-decode-leaf-translate',
    label: 'double-decode + text-leaf-translate-y-half-leading',
    idea: 'double-decode raster + text-leaf translateY half-leading meta at decode',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...W7_LEAF_TRANSLATE },
    },
  },
  {
    lane: 'blob-interval-product-nudge-off',
    label: 'blob-url-decode-interval + product nudge-off',
    idea: 'Blob URL decode-interval load + product toCanvas disableGbcrFracNudge + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'blob-url-decode-interval',
      harnessProductToCanvas: {
        experimentalRasterDisableGbcrNudge: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'fonts-ready-w7-meta',
    label: 'fonts-ready-interval + fo-y-half-leading-meta',
    idea: 'fonts.ready + drawImageInterval decode + w7 fo-y-half-leading-meta rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-decode-interval-prototype-w7',
    label: 'mp decode-interval-prototype + w7 meta',
    idea: 'Monkeypatch decode-interval-prototype + labToCanvas fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-normalize-decode-settle',
    label: 'mp h2-fo-normalize-full + decode-settle',
    idea: 'h2-fo-normalize-full monkeypatch + product decodeSettle raster path + w7 meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'mp-capture-recipe-css-w7-dpr',
    label: 'mp capture-recipe-css + w7 dpr root',
    idea: 'capture-recipe-css monkeypatch + fo-y-half-leading-dpr-root-meta + dpr root scale',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-googlefonts-decode-settle-w7',
    label: 'mp googlefonts + decode-settle + w7',
    idea: 'Google Fonts embed monkeypatch + decodeSettle + fo-y-half-leading-meta on product path',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'product-toCanvas',
      harnessSnapdom: { embedFonts: true },
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'leading-trim-decode-interval-w7',
    label: 'leading-trim capture + decode-interval + w7',
    idea: 'experimentalFoLeadingTrim capture CSS + decode-interval + w7 half-leading decode',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'inline-block-decode-settle-w7',
    label: 'inline-block leaf + decode-settle + w7',
    idea: 'experimentalFoTextLeafNormalize + inline-block linebox capture + decodeSettle + w7',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'fo-text-layout-decode-interval-w7',
    label: 'experimentalFoTextLayout + decode-interval + w7',
    idea: 'experimentalFoTextLayout capture + decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoTextLayout: true },
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'fo-box-linepx-decode-settle',
    label: 'fo-box-linepx-overflow + decode-settle',
    idea: 'fo-box-linepx-overflow rfork + product decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-box-linepx-overflow',
      },
    },
  },
  {
    lane: 'flex-start-dpr-decode-interval',
    label: 'flex-start leaf + dpr root + decode-interval',
    idea: 'experimentalFoFlexTextLeafAlignStart capture + dpr root scale + decode-interval + w7 dpr meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'lh-normal-decode-settle-w7',
    label: 'lh-normal capture + decode-settle + w7',
    idea: 'line-height:normal capture CSS + decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'chromium-decode-interval-w7',
    label: 'chromium copy + decode-interval + w7',
    idea: 'experimentalFoChromiumText capture + decode-interval + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      harnessSnapdom: { experimentalFoChromiumText: true },
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'double-raf-intvb-w7',
    label: 'double-raf + integer-viewbox + w7',
    idea: 'double-raf compositing flush + integer viewBox snap + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-raf',
      svgRootRound: 'integer-viewbox',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'device-grid-decode-settle-w7-dpr',
    label: 'device-grid-floor + decode-settle + w7 dpr',
    idea: 'device-grid-floor backing snap + decodeSettle + w7 dpr-root meta fork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'device-grid-floor',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta',
      },
      labToCanvasOpts: { dprScaledSvgRootDraw: true, disableGbcrFracNudge: true },
    },
  },
  {
    lane: 'offscreen-w7-meta',
    label: 'offscreen-canvas + fo-y-half-leading-meta',
    idea: 'offscreen-canvas blit path + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'offscreen-canvas',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'decode-200ms-w7-dpr',
    label: 'decode-200ms + fo-y-half-leading-dpr-root',
    idea: 'lab-decode-200ms raster + fo-y-half-leading-dpr-root-meta + caller dpr root',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-decode-200ms',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'h2-raster-decode-settle-w7',
    label: 'H2_RASTER_NORMALIZE + decode-settle + w7',
    idea: 'H2 raster normalize CSS + decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'capture-recipe-decode-settle-inline',
    label: 'capture-recipe-css + decode-settle + inline-block decode',
    idea: 'capture-recipe-css monkeypatch + decodeSettle + text-leaf-inline-block-linebox rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'text-leaf-inline-block-linebox',
      },
    },
  },
  {
    lane: 'h2-googlefonts-decode-interval-w7',
    label: 'h2 normalize + googlefonts + decode-interval + w7',
    idea: 'h2-fo-normalize-full + googlefonts embed + decode-interval + w7 meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'],
      rasterPatch: 'decode-interval',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'leading-trim-inline-decode-settle-w7',
    label: 'leading-trim + inline-block + decode-settle + w7',
    idea: 'leading-trim + inline-block capture CSS + decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css:
        FO_BASELINE_CSS +
        CAPTURE_LEADING_TRIM_BOTH_EDGES +
        CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      harnessSnapdom: {
        experimentalFoLeadingTrim: true,
        experimentalFoTextLeafNormalize: true,
      },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'flex-minwidth-dpr-decode-interval-w7',
    label: 'flex min-width + dpr root + decode-interval + w7',
    idea: 'experimentalFoTextLayout min-width:0 + dpr root + decode-interval + w7 dpr meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoTextLayout: true },
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'dpr-decode-settle-fonts-w7',
    label: 'dpr root + decode-settle + fonts-ready + w7',
    idea: 'Caller dpr SVG root + decodeSettle + fonts-ready pre-raster + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labPreRaster: 'fonts-ready',
      labToCanvasOpts: {
        ...W7_META,
        dprScaledSvgRootDraw: true,
        decodeSettle: true,
      },
    },
  },
  {
    lane: 'double-raf-decode-interval-w7-dpr',
    label: 'double-raf + decode-interval + w7 dpr',
    idea: 'double-raf flush + decode-interval + fo-y-half-leading-dpr-root-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labRasterPatches: ['lab-decode-raf'],
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'capture-recipe-w7-dpr-decode-settle',
    label: 'capture-recipe-css + w7 dpr + decode-settle',
    idea: 'capture-recipe-css monkeypatch + fo-y-half-leading-dpr-root + decodeSettle',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        ...W7_DPR_ROOT,
        decodeSettle: true,
      },
    },
  },
  {
    lane: 'full-h2-decode-w7-dpr-fonts',
    label: 'full: h2 + decode-settle + w7 + dpr + fonts',
    idea: 'h2 normalize mp + decodeSettle + w7 meta + dpr root + fonts-ready pre-raster',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'lab-toCanvas',
      labPreRaster: 'fonts-ready',
      labToCanvasOpts: {
        ...W7_META,
        dprScaledSvgRootDraw: true,
        decodeSettle: true,
      },
    },
  },
  {
    lane: 'full-capture-google-decode-w7-dpr',
    label: 'full: capture-recipe + googlefonts + decode-interval + w7 dpr',
    idea: 'capture-recipe-css + googlefonts embed + decode-interval + w7 dpr-root meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: ['capture-recipe-css', 'googlefonts-embed-capture'],
      rasterPatch: 'decode-interval',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'product-decode-settle-fo-text-layout',
    label: 'product + decode-settle + experimentalFoTextLayout',
    idea: 'product toCanvas decodeSettle + experimentalFoTextLayout capture + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoTextLayout: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'product-decode-interval-leading-trim',
    label: 'product + decode-interval + leading-trim',
    idea: 'product toCanvas + decode-interval load + leading-trim capture + w7 meta on product harness',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
        experimentalRasterDisableGbcrNudge: true,
      },
      labLoadPipeline: 'decode-interval',
    },
  },
  {
    lane: 'decode-raf-chromium-w7',
    label: 'lab-decode-raf + chromium-font-render + w7',
    idea: 'lab-decode-raf + chromium-font-render-leaf rfork + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-raf'],
      labToCanvasOpts: {
        ...W7_META,
        rasterOnlySvgPatch: 'chromium-font-render-leaf',
      },
    },
  },
  {
    lane: 'decode-100ms-inline-w7',
    label: 'lab-decode-100ms + inline-block + w7 decode',
    idea: 'lab-decode-100ms + inline-block linebox capture + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-capture-decode-settle',
    label: 'mp h2 + mp capture-recipe-css + decode-settle',
    idea: 'h2-fo-normalize-full + capture-recipe-css + product decodeSettle + w7 meta',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: ['h2-fo-normalize-full', 'capture-recipe-css'],
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'mp-googlefonts-dpr-w7',
    label: 'mp googlefonts + dpr root + w7 meta',
    idea: 'googlefonts embed + caller dpr SVG root + fo-y-half-leading-meta + decode-interval',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: {
        ...W7_META,
        dprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'triple-decode-w7',
    label: 'triple decode: settle + double + interval',
    idea: 'decodeSettle + lab-decode-double + decode-interval-prototype mp + w7 meta',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-double'],
      labToCanvasOpts: {
        ...W7_META,
        decodeSettle: true,
        decodeIntervalMs: 100,
      },
    },
  },
  {
    lane: 'triple-normalize-w7',
    label: 'triple normalize: h2 + inline-block + leading-trim + w7',
    idea: 'h2 normalize mp + inline-block + leading-trim capture CSS + decode-interval + w7',
    extra: {
      inject: 'both',
      css:
        H2_RASTER_NORMALIZE_CSS +
        CAPTURE_INLINE_BLOCK_LINEBOX_LEAF +
        CAPTURE_LEADING_TRIM_BOTH_EDGES,
      monkeypatch: 'h2-fo-normalize-full',
      harnessSnapdom: {
        experimentalFoLeadingTrim: true,
        experimentalFoTextLeafNormalize: true,
      },
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'triple-stack-capture-decode-w7',
    label: 'triple stack: capture-recipe + decode-settle + w7 dpr + fonts + chromium',
    idea: 'capture-recipe-css + decodeSettle + w7 dpr root + fonts-ready + chromium capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'lab-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessSnapdom: { experimentalFoChromiumText: true },
      labToCanvasOpts: {
        ...W7_DPR_ROOT,
        decodeSettle: true,
      },
    },
  },
  {
    lane: 'max-stack-all-layers',
    label: 'max stack: h2 + googlefonts + capture + settle + w7 dpr + trim + fonts',
    idea: 'Max combo: h2 mp + googlefonts + capture-recipe-css + decodeSettle + w7 dpr + leading-trim + fonts-ready',
    extra: {
      inject: 'both',
      css:
        H2_RASTER_NORMALIZE_CSS +
        CAPTURE_LEADING_TRIM_BOTH_EDGES +
        CHROMIUM_COPY,
      monkeypatch: [
        'h2-fo-normalize-full',
        'googlefonts-embed-capture',
        'capture-recipe-css',
      ],
      rasterPatch: 'lab-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessSnapdom: { embedFonts: true, experimentalFoLeadingTrim: true },
      labToCanvasOpts: {
        ...W7_DPR_ROOT,
        decodeSettle: true,
      },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch2-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch2-001',
  'drift-batch2-002',
  'drift-batch2-003',
  'drift-batch2-004',
  'drift-batch2-005',
  'drift-batch2-006',
  'drift-batch2-007',
  'drift-batch2-008',
  'drift-batch2-009',
  'drift-batch2-010',
  'drift-batch2-012',
  'drift-batch2-013',
  'drift-batch2-014',
  'drift-batch2-016',
  'drift-batch2-017',
  'drift-batch2-018',
  'drift-batch2-019',
  'drift-batch2-020',
  'drift-batch2-021',
  'drift-batch2-023',
  'drift-batch2-025',
  'drift-batch2-026',
  'drift-batch2-027',
  'drift-batch2-028',
  'drift-batch2-029',
  'drift-batch2-030',
  'drift-batch2-031',
  'drift-batch2-032',
  'drift-batch2-033',
  'drift-batch2-035',
  'drift-batch2-036',
  'drift-batch2-037',
  'drift-batch2-038',
  'drift-batch2-039',
  'drift-batch2-040',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch2-${num}`,
    label: `drift-batch2 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch2',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch2-${num}`),
    notes: `Drift batch 2 lane=${spec.lane}; FO raster only — triple-alignment probe.`,
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
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-drift-batch2-triple: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const DRIFT_BATCH2_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

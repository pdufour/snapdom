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

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR_ROOT = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'base-settle',
    label: 'base product settle',
    idea: 'product-toCanvas base lane settle',
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
    lane: 'base-dpr',
    label: 'base product dpr',
    idea: 'product-toCanvas base lane dpr',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDprScaledSvgRootDraw: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
      },
    },
  },
  {
    lane: 'base-interval',
    label: 'base product interval',
    idea: 'product-toCanvas base lane interval',
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
    lane: 'base-interval-dpr',
    label: 'base product interval-dpr',
    idea: 'product-toCanvas base lane interval-dpr',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'base-fonts',
    label: 'base product fonts',
    idea: 'product-toCanvas base lane fonts',
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
    lane: 'base-fonts-half',
    label: 'base product fonts-half',
    idea: 'product-toCanvas base lane fonts-half',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labPreRaster: 'fonts-ready-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-drift004',
    label: 'base product drift004',
    idea: 'product-toCanvas base lane drift004',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "box-sizing-border-box-decode",
      },
    },
  },
  {
    lane: 'base-drift006',
    label: 'base product drift006',
    idea: 'product-toCanvas base lane drift006',
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
    lane: 'base-drift008',
    label: 'base product drift008',
    idea: 'product-toCanvas base lane drift008',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "combo-fo-y-linebox-height",
      },
    },
  },
  {
    lane: 'base-drift010',
    label: 'base product drift010',
    idea: 'product-toCanvas base lane drift010',
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
    lane: 'base-mp-h2',
    label: 'base product mp-h2',
    idea: 'product-toCanvas base lane mp-h2',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: "h2-fo-normalize-full",
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-mp-gf-int',
    label: 'base product mp-gf-int',
    idea: 'product-toCanvas base lane mp-gf-int',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: "googlefonts-embed-capture",
      harnessSnapdom: {"embedFonts":true},
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-mp-h2-gf',
    label: 'base product mp-h2-gf',
    idea: 'product-toCanvas base lane mp-h2-gf',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: ["h2-fo-normalize-full","googlefonts-embed-capture"],
      harnessSnapdom: {"embedFonts":true},
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
      },
    },
  },
  {
    lane: 'base-mp-cap',
    label: 'base product mp-cap',
    idea: 'product-toCanvas base lane mp-cap',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: "capture-recipe-css",
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-mp-cap-dpr',
    label: 'base product mp-cap-dpr',
    idea: 'product-toCanvas base lane mp-cap-dpr',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: "capture-recipe-css",
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterDprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'base-rad-inline',
    label: 'base product rad-inline',
    idea: 'product-toCanvas base lane rad-inline',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-rad-ink',
    label: 'base product rad-ink',
    idea: 'product-toCanvas base lane rad-ink',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-rad-inline-fonts',
    label: 'base product rad-inline-fonts',
    idea: 'product-toCanvas base lane rad-inline-fonts',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      rasterPatch: 'product-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
      },
    },
  },
  {
    lane: 'base-rad-ink-trim',
    label: 'base product rad-ink-trim',
    idea: 'product-toCanvas base lane rad-ink-trim',
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
    lane: 'base-rad-drift016',
    label: 'base product rad-drift016',
    idea: 'product-toCanvas base lane rad-drift016',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "strut-translate-y-meta",
      },
    },
  },
  {
    lane: 'base-trim',
    label: 'base product trim',
    idea: 'product-toCanvas base lane trim',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      harnessSnapdom: {"experimentalFoLeadingTrim":true},
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-inline',
    label: 'base product inline',
    idea: 'product-toCanvas base lane inline',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      harnessSnapdom: {"experimentalFoTextLeafNormalize":true},
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-flex',
    label: 'base product flex',
    idea: 'product-toCanvas base lane flex',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: {"experimentalFoFlexTextLeafAlignStart":true},
      rasterPatch: 'product-toCanvas',
      labPreRaster: 'fonts-ready',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-chromium',
    label: 'base product chromium',
    idea: 'product-toCanvas base lane chromium',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      harnessSnapdom: {"experimentalFoChromiumText":true},
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterDprScaledSvgRootDraw: true,
        experimentalRasterSvgPatch: "fo-y-half-leading-dpr-root-meta",
      },
    },
  },
  {
    lane: 'base-textlayout',
    label: 'base product textlayout',
    idea: 'product-toCanvas base lane textlayout',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: {"experimentalFoTextLayout":true},
      rasterPatch: 'product-toCanvas',
      labLoadPipeline: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: "fo-y-half-leading-meta",
      },
    },
  },
  {
    lane: 'base-drift017',
    label: 'base product drift017',
    idea: 'product-toCanvas base lane drift017',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "fo-height-unset-overflow-visible",
      },
    },
  },
  {
    lane: 'base-drift018',
    label: 'base product drift018',
    idea: 'product-toCanvas base lane drift018',
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
    lane: 'base-drift019',
    label: 'base product drift019',
    idea: 'product-toCanvas base lane drift019',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: "combo-fo-y-linebox-height",
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
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch66-${num}`),
    notes: `Drift batch 66 lane=${spec.lane}; product path triple-alignment; FO raster only.`,
    ...restExtra,
  }
})


export const DRIFT_BATCH66_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

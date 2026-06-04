/**
 * Drift batch 222 — 40 triple-alignment probes (drift-batch222-001..040).
 * Lane theme: raster fork combos (labToCanvas rfork × decode × dpr/nudge) + product-toCanvas mix.
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch222-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch222-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
} from '../fo-fix-recipes-constants.js'

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

const RFORK_TRIM = {
  rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
  disableGbcrFracNudge: true,
}

const RFORK_INLINE = {
  rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
  disableGbcrFracNudge: true,
}

const RFORK_BOX = {
  rasterOnlySvgPatch: 'fo-box-linepx-overflow',
  disableGbcrFracNudge: true,
}

const RFORK_FLEX = {
  rasterOnlySvgPatch: 'flex-container-flex-start',
  disableGbcrFracNudge: true,
}

const RFORK_LH = {
  rasterOnlySvgPatch: 'lh-normal-leaf',
  disableGbcrFracNudge: true,
}

const RFORK_CHROMIUM = {
  rasterOnlySvgPatch: 'chromium-font-render-leaf',
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'product-trim-settle',
    label: 'product + leading-trim rfork + decode-settle',
    idea: 'product-toCanvas decodeSettle + leading-trim-text-box-leaf rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'leading-trim-text-box-leaf',
      },
    },
  },
  {
    lane: 'product-inline-interval',
    label: 'product + inline-block rfork + decode-interval',
    idea: 'decode-interval product path + text-leaf-inline-block-linebox rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'text-leaf-inline-block-linebox',
      },
    },
  },
  {
    lane: 'product-box-double',
    label: 'product + fo-box rfork + double-decode',
    idea: 'double-decode raster + fo-box-linepx-overflow on product harness',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-box-linepx-overflow',
      },
    },
  },
  {
    lane: 'product-flex-fonts',
    label: 'product + flex-start rfork + fonts-ready-interval',
    idea: 'fonts-ready-interval raster + flex-container-flex-start rfork via product',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'flex-container-flex-start',
      },
    },
  },
  {
    lane: 'product-lh-settle-nudge-off',
    label: 'product + lh-normal rfork + decode-settle + nudge off',
    idea: 'product decodeSettle + lh-normal-leaf rfork + disableGbcrFracNudge',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'lh-normal-leaf',
        experimentalRasterDisableGbcrNudge: true,
      },
    },
  },
  {
    lane: 'product-chromium-interval',
    label: 'product + chromium-font-render + decode-interval',
    idea: 'decode-interval + chromium-font-render-leaf rfork on product path',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'chromium-font-render-leaf',
      },
    },
  },
  {
    lane: 'lab-meta-settle',
    label: 'lab meta + decode-settle',
    idea: 'lab-toCanvas decodeSettle + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'lab-meta-interval',
    label: 'lab meta + decode-interval',
    idea: 'decode-interval + fo-y-half-leading-meta at lab decode',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'lab-meta-double',
    label: 'lab meta + double-decode',
    idea: 'double-decode + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'lab-meta-fonts-interval',
    label: 'lab meta + fonts-ready-interval',
    idea: 'fonts-ready-interval raster + fo-y-half-leading-meta rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'lab-dpr-settle',
    label: 'lab dpr root + decode-settle',
    idea: 'decodeSettle + fo-y-half-leading-dpr-root-meta + dprScaledSvgRootDraw',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
  {
    lane: 'lab-dpr-interval',
    label: 'lab dpr root + decode-interval',
    idea: 'decode-interval + dpr root meta fork + caller dpr SVG root scale',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'lab-dpr-double',
    label: 'lab dpr root + double-decode',
    idea: 'double-decode + fo-y-half-leading-dpr-root-meta + dpr root draw',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'lab-dpr-fonts-pre',
    label: 'lab dpr root + fonts-ready pre-raster',
    idea: 'fonts.ready pre-raster + dpr root meta fork + lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labPreRaster: 'fonts-ready',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'lab-leaf-tx-settle',
    label: 'lab leaf translate + decode-settle',
    idea: 'decodeSettle + text-leaf-translate-y-half-leading-meta rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_LEAF_TRANSLATE, decodeSettle: true },
    },
  },
  {
    lane: 'lab-leaf-tx-interval',
    label: 'lab leaf translate + decode-interval',
    idea: 'decode-interval + text-leaf translateY half-leading meta',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_LEAF_TRANSLATE },
    },
  },
  {
    lane: 'lab-leaf-tx-double',
    label: 'lab leaf translate + double-decode',
    idea: 'double-decode + text-leaf-translate-y-half-leading-meta',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...W7_LEAF_TRANSLATE },
    },
  },
  {
    lane: 'lab-trim-settle',
    label: 'lab leading-trim rfork + decode-settle',
    idea: 'decodeSettle + leading-trim-text-box-leaf rfork at decode',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_TRIM, decodeSettle: true },
    },
  },
  {
    lane: 'lab-trim-interval',
    label: 'lab leading-trim rfork + decode-interval',
    idea: 'decode-interval + leading-trim-text-box-leaf rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_TRIM },
    },
  },
  {
    lane: 'lab-trim-double',
    label: 'lab leading-trim rfork + double-decode',
    idea: 'double-decode + leading-trim-text-box-leaf on FO text leaves',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...RFORK_TRIM },
    },
  },
  {
    lane: 'lab-inline-settle',
    label: 'lab inline-block rfork + decode-settle',
    idea: 'decodeSettle + text-leaf-inline-block-linebox rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_INLINE, decodeSettle: true },
    },
  },
  {
    lane: 'lab-inline-interval',
    label: 'lab inline-block rfork + decode-interval',
    idea: 'decode-interval + inline-block linebox rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_INLINE },
    },
  },
  {
    lane: 'lab-box-settle',
    label: 'lab fo-box rfork + decode-settle',
    idea: 'decodeSettle + fo-box-linepx-overflow rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_BOX, decodeSettle: true },
    },
  },
  {
    lane: 'lab-box-dpr-interval',
    label: 'lab fo-box + dpr root + decode-interval',
    idea: 'decode-interval + fo-box-linepx-overflow + dpr root meta fork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: {
        ...RFORK_BOX,
        dprScaledSvgRootDraw: true,
      },
    },
  },
  {
    lane: 'lab-flex-settle',
    label: 'lab flex-start rfork + decode-settle',
    idea: 'decodeSettle + flex-container-flex-start rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_FLEX, decodeSettle: true },
    },
  },
  {
    lane: 'lab-flex-interval',
    label: 'lab flex-start rfork + decode-interval',
    idea: 'decode-interval + flex-container-flex-start on FO flex containers',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_FLEX },
    },
  },
  {
    lane: 'lab-lh-settle',
    label: 'lab lh-normal rfork + decode-settle',
    idea: 'decodeSettle + lh-normal-leaf rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_LH, decodeSettle: true },
    },
  },
  {
    lane: 'lab-lh-double',
    label: 'lab lh-normal rfork + double-decode',
    idea: 'double-decode + lh-normal-leaf rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...RFORK_LH },
    },
  },
  {
    lane: 'lab-chromium-settle',
    label: 'lab chromium render rfork + decode-settle',
    idea: 'decodeSettle + chromium-font-render-leaf rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_CHROMIUM, decodeSettle: true },
    },
  },
  {
    lane: 'lab-chromium-interval',
    label: 'lab chromium render rfork + decode-interval',
    idea: 'decode-interval + chromium-font-render-leaf rfork',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_CHROMIUM },
    },
  },
  {
    lane: 'product-meta-100ms',
    label: 'product meta rfork + lab-decode-100ms',
    idea: 'product-toCanvas + fo-y-half-leading-meta + lab-decode-100ms raster patch',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'product-toCanvas',
      labRasterPatches: ['lab-decode-100ms'],
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'product-dpr-blob-interval',
    label: 'product dpr rfork + blob-url-decode-interval',
    idea: 'blob-url-decode-interval load + fo-y-half-leading-dpr-root-meta on product',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'blob-url-decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta',
        experimentalRasterDprScaledSvgRoot: true,
      },
    },
  },
  {
    lane: 'meta-raf-nudge-off',
    label: 'meta + lab-decode-raf + nudge off',
    idea: 'lab-decode-raf + fo-y-half-leading-meta + disableGbcrFracNudge only',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-raf'],
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'product-trim-capture-settle',
    label: 'capture trim + product trim rfork + settle',
    idea: 'experimentalFoLeadingTrim capture + product decodeSettle + leading-trim rfork',
    extra: {
      inject: 'both',
      css:
        FO_BASELINE_CSS +
        'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'leading-trim-text-box-leaf',
      },
    },
  },
  {
    lane: 'product-inline-capture-interval',
    label: 'capture inline-block + product inline rfork + interval',
    idea: 'experimentalFoTextLeafNormalize + decode-interval + inline-block rfork',
    extra: {
      inject: 'both',
      css:
        FO_BASELINE_CSS +
        FO_TEXT_LEAF_SINGLE_LINE +
        '{display:inline-block!important;vertical-align:baseline!important}',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      rasterPatch: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'text-leaf-inline-block-linebox',
      },
    },
  },
  {
    lane: 'product-box-fonts-harness',
    label: 'product fo-box + fonts-ready-interval + nudge off',
    idea: 'fonts-ready-interval + fo-box-linepx-overflow + experimentalRasterDisableGbcrNudge',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      rasterPatch: 'fonts-ready-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-box-linepx-overflow',
        experimentalRasterDisableGbcrNudge: true,
      },
    },
  },
  {
    lane: 'flex-dpr-settle',
    label: 'flex rfork + dpr root + decode-settle',
    idea: 'flex-container-flex-start + dpr root meta + decodeSettle',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'flex-container-flex-start',
        dprScaledSvgRootDraw: true,
        decodeSettle: true,
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    lane: 'lh-dpr-interval',
    label: 'lh-normal + dpr root + decode-interval',
    idea: 'lh-normal-leaf + fo-y-half-leading-dpr-root-meta stack via dpr draw + decode-interval',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'decode-interval',
      labToCanvasOpts: {
        ...W7_DPR_ROOT,
        rasterOnlySvgPatch: 'lh-normal-leaf',
      },
    },
  },
  {
    lane: 'product-chromium-leaf-tx',
    label: 'product leaf-tx + chromium capture + settle',
    idea: 'experimentalFoChromiumText capture + product decodeSettle + text-leaf-translate rfork',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoChromiumText: true },
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'text-leaf-translate-y-half-leading-meta',
      },
    },
  },
  {
    lane: 'meta-trim-triple-decode',
    label: 'meta + trim rfork + settle + double + 100ms',
    idea: 'fo-y-half-leading-meta + leading-trim rfork + decodeSettle + lab-decode-double + 100ms wait',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: 'lab-toCanvas',
      labRasterPatches: ['lab-decode-double', 'lab-decode-100ms'],
      labToCanvasOpts: {
        ...W7_META,
        decodeSettle: true,
        rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
      },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch222-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch222-003',
  'drift-batch222-004',
  'drift-batch222-007',
  'drift-batch222-008',
  'drift-batch222-011',
  'drift-batch222-012',
  'drift-batch222-015',
  'drift-batch222-016',
  'drift-batch222-019',
  'drift-batch222-020',
  'drift-batch222-023',
  'drift-batch222-024',
  'drift-batch222-027',
  'drift-batch222-028',
  'drift-batch222-031',
  'drift-batch222-032',
  'drift-batch222-036',
  'drift-batch222-039',
  'drift-batch222-040',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch222-${num}`,
    label: `drift-batch222 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch222',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch222-${num}`),
    notes: `Drift batch 222 lane=${spec.lane}; FO raster only — raster fork combo probe.`,
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
    throw new Error(`recipes-drift-batch222-triple: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const DRIFT_BATCH222_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

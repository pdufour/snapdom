/**
 * Drift batch 3939 — 40 triple-align h2 normalize / mp bundle probes (drift-batch3939-001..040).
 * Theme: h2-fo normalize monkeypatches × decode × w7 or capture flags (orthogonal to batch3333).
 * FO raster only; no text bypass.
 *
 *   npm run debug:fo-drift-batch3939-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

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

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'mp-h2-full-settle-w7',
    label: 'h2-fo-normalize-full + decodeSettle + w7',
    idea: 'h2-fo-normalize-full mp + decodeSettle + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-raster-interval-dpr',
    label: 'h2-raster-normalize + decode-interval + dpr root',
    idea: 'h2-raster-normalize-capture mp + decode-interval + w7 dpr root',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-raster-normalize-capture',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-h2-internal-star-trim',
    label: 'h2-internal-star + leading-trim capture',
    idea: 'h2-fo-internal-star-capture mp + leading-trim + w7 meta',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-internal-star-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-container-inline',
    label: 'h2-container-reset + inline-block capture',
    idea: 'h2-container-reset-capture mp + inline-block linebox + decodeSettle',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-container-reset-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-full-container-fonts',
    label: 'h2-full-plus-container + fonts-ready-interval',
    idea: 'h2-full-plus-container-capture mp + fonts-ready-interval + w7 meta',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-full-plus-container-capture',
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-capture-css-double-decode',
    label: 'capture-recipe-css + double-decode + w7',
    idea: 'capture-recipe-css mp + double-decode + fo-y-half-leading-meta',
    extra: {
      inject: 'both',
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-googlefonts-settle-dpr',
    label: 'googlefonts-embed + decodeSettle + dpr root',
    idea: 'googlefonts-embed-capture mp + decodeSettle + w7 dpr root',
    extra: {
      inject: 'both',
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
  {
    lane: 'mp-decode-proto-trim',
    label: 'decode-interval-prototype + leading-trim',
    idea: 'decode-interval-prototype mp + leading-trim capture + w7 meta',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-fonts-delay-flex',
    label: 'fonts-ready-delay + flex layout',
    idea: 'fonts-ready-delay mp + experimentalFoTextLayout + decode-interval',
    extra: {
      inject: 'both',
      monkeypatch: 'fonts-ready-delay',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoTextLayout: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-draw-pixelated-w7',
    label: 'draw-image-pixelated + w7 meta',
    idea: 'draw-image-pixelated mp + fo-y-half-leading-meta + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'draw-image-pixelated',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-full-inline-interval',
    label: 'h2-full + inline-block + decode-interval',
    idea: 'h2-fo-normalize-full mp + inline-block capture + decode-interval',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-raster-lh-pin',
    label: 'h2-raster + lh pin capture',
    idea: 'h2-raster-normalize mp + experimentalFoPinLineHeightOnTextLeaf + fonts-ready',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-raster-normalize-capture',
      rasterPatch: 'fonts-ready',
      harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-internal-flex-start',
    label: 'h2-internal-star + flex-start leaf',
    idea: 'h2-fo-internal-star mp + experimentalFoFlexTextLeafAlignStart + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-internal-star-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-container-chromium',
    label: 'h2-container + chromium text flag',
    idea: 'h2-container-reset mp + experimentalFoChromiumText + decode-interval',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-container-reset-capture',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoChromiumText: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-full-container-trim-w7',
    label: 'h2-full-container + trim + w7 dpr',
    idea: 'h2-full-plus-container mp + leading-trim + w7 dpr root',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-full-plus-container-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-capture-css-blob-dpr',
    label: 'capture-recipe-css + blob-interval + dpr',
    idea: 'capture-recipe-css mp + blob-url-decode-interval + w7 dpr root',
    extra: {
      inject: 'both',
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'blob-url-decode-interval',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-googlefonts-inline-settle',
    label: 'googlefonts + inline-block + settle',
    idea: 'googlefonts-embed mp + inline-block capture + decodeSettle',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { embedFonts: true, experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-decode-proto-double-w7',
    label: 'decode-prototype + double-decode + w7',
    idea: 'decode-interval-prototype mp + double-decode raster + w7 meta',
    extra: {
      inject: 'both',
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-fonts-delay-trim-interval',
    label: 'fonts-delay + trim + decode-interval',
    idea: 'fonts-ready-delay mp + leading-trim + decode-interval + w7 meta',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'fonts-ready-delay',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-draw-pixelated-inline-dpr',
    label: 'draw-pixelated + inline + dpr root',
    idea: 'draw-image-pixelated mp + inline-block capture + w7 dpr root',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      monkeypatch: 'draw-image-pixelated',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-h2-full-radical-clientrects',
    label: 'h2-full + clientrects pin + settle',
    idea: 'h2-fo-normalize-full mp + lab-pin-inline-box-height-from-clientrects + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-raster-radical-ink',
    label: 'h2-raster + ink padding pin + interval',
    idea: 'h2-raster-normalize mp + lab-pin-ink-top-in-border-padding + decode-interval',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-raster-normalize-capture',
      rasterPatch: 'decode-interval',
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-h2-internal-product-w7',
    label: 'h2-internal + product + w7 harness',
    idea: 'h2-fo-internal-star mp + product-toCanvas + w7 harness patch',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-internal-star-capture',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-y-half-leading-meta',
        experimentalRasterDisableGbcrNudge: true,
      },
    },
  },
  {
    lane: 'mp-h2-container-product-settle',
    label: 'h2-container + product decodeSettle',
    idea: 'h2-container-reset mp + product decodeSettle harness',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-container-reset-capture',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: { experimentalRasterDecodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-full-container-triple-decode',
    label: 'h2-full-container + triple-decode',
    idea: 'h2-full-plus-container mp + triple-decode + w7 meta',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-full-plus-container-capture',
      rasterPatch: 'triple-decode',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-capture-css-lab-decode-100',
    label: 'capture-css + lab-decode-100ms',
    idea: 'capture-recipe-css mp + lab-decode-100ms + w7 dpr root',
    extra: {
      inject: 'both',
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'lab-decode-100ms',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-googlefonts-lab-decode-200',
    label: 'googlefonts + lab-decode-200ms + trim',
    idea: 'googlefonts-embed mp + lab-decode-200ms + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'lab-decode-200ms',
      harnessSnapdom: { embedFonts: true, experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-decode-proto-decode-raf',
    label: 'decode-prototype + decode-interval-raf',
    idea: 'decode-interval-prototype mp + decode-interval-raf + w7 meta',
    extra: {
      inject: 'both',
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'decode-interval-raf',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-fonts-delay-offscreen',
    label: 'fonts-delay + offscreen-canvas',
    idea: 'fonts-ready-delay mp + offscreen-canvas + w7 dpr root',
    extra: {
      inject: 'both',
      monkeypatch: 'fonts-ready-delay',
      rasterPatch: 'offscreen-canvas',
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-draw-pixelated-flex-cross',
    label: 'draw-pixelated + flex-cross radical',
    idea: 'draw-image-pixelated mp + lab-pin-flex-cross-size-from-anchor + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'draw-image-pixelated',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-full-chromium-render',
    label: 'h2-full + chromium render rfork',
    idea: 'h2-fo-normalize-full mp + chromium-font-render-leaf rfork + decode-interval',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'chromium-font-render-leaf',
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    lane: 'mp-h2-raster-lh-meta-rfork',
    label: 'h2-raster + lh-meta rfork',
    idea: 'h2-raster-normalize mp + lh-meta-leaf rfork + fonts-ready-interval',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-raster-normalize-capture',
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'lh-meta-leaf',
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    lane: 'mp-h2-internal-leaf-translate',
    label: 'h2-internal + leaf translate rfork',
    idea: 'h2-fo-internal-star mp + text-leaf-translate-y-half-leading-meta + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-internal-star-capture',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta',
        disableGbcrFracNudge: true,
        decodeSettle: true,
      },
    },
  },
  {
    lane: 'mp-h2-container-box-overflow',
    label: 'h2-container + fo-box rfork',
    idea: 'h2-container-reset mp + fo-box-linepx-overflow rfork + decode-interval',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-container-reset-capture',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: {
        rasterOnlySvgPatch: 'fo-box-linepx-overflow',
        disableGbcrFracNudge: true,
      },
    },
  },
  {
    lane: 'mp-h2-full-container-flex-cross',
    label: 'h2-full-container + flex-cross pin',
    idea: 'h2-full-plus-container mp + lab-pin-flex-cross-size-from-anchor + decode-interval',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-full-plus-container-capture',
      rasterPatch: 'decode-interval',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'mp-capture-css-mp-decode-wrap',
    label: 'capture-css + decode-wrap mp stack',
    idea: 'capture-recipe-css + decode-wrap mp + w7 meta + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: ['capture-recipe-css', 'decode-wrap'],
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-googlefonts-measureText-prime',
    label: 'googlefonts + measureText-prime',
    idea: 'googlefonts-embed + measureText-prime mp + decode-interval + w7 dpr',
    extra: {
      inject: 'both',
      monkeypatch: ['googlefonts-embed-capture', 'measureText-prime'],
      rasterPatch: 'decode-interval',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: { ...W7_DPR_ROOT },
    },
  },
  {
    lane: 'mp-h2-full-snapdom-post-fo',
    label: 'h2-full + snapdom-post-fo-baseline',
    idea: 'h2-fo-normalize-full + snapdom-post-fo-baseline mp + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: ['h2-fo-normalize-full', 'snapdom-post-fo-baseline'],
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...W7_META, decodeSettle: true },
    },
  },
  {
    lane: 'mp-h2-raster-tc-draw-round',
    label: 'h2-raster + tc-draw-image-round-all',
    idea: 'h2-raster-normalize + tc-draw-image-round-all mp + fonts-ready-interval',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      monkeypatch: ['h2-raster-normalize-capture', 'tc-draw-image-round-all'],
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    lane: 'max-h2-mp-stack',
    label: 'h2-full-container + trim+inline + clientrects + w7 dpr settle',
    idea: 'h2-full-plus-container mp + trim+inline capture + clientrects pin + decodeSettle + w7 dpr',
    css:
      FO_BASELINE_CSS +
      CAPTURE_LEADING_TRIM_BOTH_EDGES +
      CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-full-plus-container-capture',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      harnessSnapdom: {
        experimentalFoLeadingTrim: true,
        experimentalFoTextLeafNormalize: true,
      },
      labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch3939-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([

])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch3939-${num}`,
    label: `drift-batch3939 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch3939',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch3939-${num}`),
    notes: `Drift batch 3939 lane=${spec.lane}; h2/mp bundles; FO raster only.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-drift-batch3939-triple: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const DRIFT_BATCH3939_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

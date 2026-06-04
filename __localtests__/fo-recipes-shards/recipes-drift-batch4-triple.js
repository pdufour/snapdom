/**
 * Drift batch 4 — 40 triple-align combos (live + svg + canvas ink tops).
 * Theme: evolved tc-fix-drift combo rforks + loop decode paths not yet in prior drift batches.
 * FO raster only; no text bypass.
 *
 *   npm run debug:fo-drift-batch4-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
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

const RFORK_LINEbox = {
  rasterOnlySvgPatch: 'combo-fo-y-half-leading-linebox',
  disableGbcrFracNudge: true,
}

const RFORK_CLIP = {
  rasterOnlySvgPatch: 'combo-fo-y-half-leading-clip-inset-zero',
  disableGbcrFracNudge: true,
}

const RFORK_HEIGHT_UNSET = {
  rasterOnlySvgPatch: 'combo-fo-y-half-leading-height-unset-overflow-visible',
  disableGbcrFracNudge: true,
}

const RFORK_BOX_OVERFLOW = {
  rasterOnlySvgPatch: 'combo-fo-y-half-leading-box-overflow',
  disableGbcrFracNudge: true,
}

const RFORK_FONTBOX = {
  rasterOnlySvgPatch: 'fo-y-half-leading-fontbox-meta',
  disableGbcrFracNudge: true,
}

const RFORK_USED = {
  rasterOnlySvgPatch: 'fo-y-half-leading-used-meta',
  disableGbcrFracNudge: true,
}

const RFORK_ROOT_ONLY = {
  rasterOnlySvgPatch: 'fo-y-half-leading-root-fo-only-meta',
  disableGbcrFracNudge: true,
}

const RFORK_LH_META = {
  rasterOnlySvgPatch: 'lh-meta-leaf',
  disableGbcrFracNudge: true,
}

/** @type {{ n: number, slug: string, idea: string, css?: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'combo-linebox-settle-w7',
    idea: 'tc-fix-drift-019 combo linebox rfork + decodeSettle + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_LINEbox, decodeSettle: true },
    },
  },
  {
    n: 2,
    slug: 'combo-linebox-interval-dpr',
    idea: 'tc-fix-drift-019 combo linebox + decode-interval + w7 dpr root',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_LINEbox, ...W7_DPR_ROOT },
    },
  },
  {
    n: 3,
    slug: 'combo-clip-settle-w7',
    idea: 'tc-fix-drift-022 clip inset zero combo + decodeSettle + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_CLIP, ...W7_META, decodeSettle: true },
    },
  },
  {
    n: 4,
    slug: 'combo-clip-fonts-interval',
    idea: 'tc-fix-drift-022 clip combo + fonts-ready-interval + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: { ...RFORK_CLIP, ...W7_META },
    },
  },
  {
    n: 5,
    slug: 'combo-height-unset-double-dpr',
    idea: 'tc-fix-drift-035 height unset combo + double-decode + w7 dpr root',
    extra: {
      inject: 'both',
      rasterPatch: 'double-decode',
      labToCanvasOpts: { ...RFORK_HEIGHT_UNSET, ...W7_DPR_ROOT },
    },
  },
  {
    n: 6,
    slug: 'combo-box-overflow-interval-w7',
    idea: 'tc-fix-drift-036 box overflow combo + decode-interval + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_BOX_OVERFLOW, ...W7_META },
    },
  },
  {
    n: 7,
    slug: 'fontbox-settle-trim-capture',
    idea: 'tc-fix-drift-041 fontbox meta + decodeSettle + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...RFORK_FONTBOX, decodeSettle: true },
    },
  },
  {
    n: 8,
    slug: 'used-meta-interval-inline',
    idea: 'tc-fix-drift-042 used lh meta + decode-interval + inline-block capture',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...RFORK_USED },
    },
  },
  {
    n: 9,
    slug: 'root-only-fonts-lh-normal',
    idea: 'tc-fix-drift-045 root FO only + fonts-ready + lh normal capture',
    css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
    extra: {
      inject: 'both',
      rasterPatch: 'fonts-ready',
      harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
      labToCanvasOpts: { ...RFORK_ROOT_ONLY },
    },
  },
  {
    n: 10,
    slug: 'lh-meta-settle-flex-layout',
    idea: 'tc-fix-drift-014 lh-meta-leaf + decodeSettle + experimentalFoTextLayout',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoTextLayout: true },
      labToCanvasOpts: { ...RFORK_LH_META, decodeSettle: true },
    },
  },
  {
    n: 11,
    slug: 'flex-cross-linebox-settle',
    idea: 'tc-fix-drift-049 flex-cross anchor radical + combo linebox + decodeSettle',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      labToCanvasOpts: { ...RFORK_LINEbox, decodeSettle: true },
    },
  },
  {
    n: 12,
    slug: 'flex-cross-w7-load-event',
    idea: 'tc-fix-drift-049 flex-cross anchor + w7 meta + load-event raster',
    extra: {
      inject: 'both',
      rasterPatch: 'load-event',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      labToCanvasOpts: { ...W7_META },
    },
  },
  {
    n: 13,
    slug: 'combo-linebox-pre-decode-w7',
    idea: 'tc-fix-drift-019 linebox combo + pre-decode-dom + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'pre-decode-dom',
      labToCanvasOpts: { ...RFORK_LINEbox, ...W7_META },
    },
  },
  {
    n: 14,
    slug: 'combo-clip-two-stage-dpr',
    idea: 'tc-fix-drift-022 clip combo + two-stage decode + w7 dpr root',
    extra: {
      inject: 'both',
      rasterPatch: 'two-stage',
      labToCanvasOpts: { ...RFORK_CLIP, ...W7_DPR_ROOT },
    },
  },
  {
    n: 15,
    slug: 'fontbox-load-interval-chromium',
    idea: 'tc-fix-drift-041 fontbox + load-event-interval + chromium copy CSS',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: {
      inject: 'both',
      rasterPatch: 'load-event-interval',
      labToCanvasOpts: { ...RFORK_FONTBOX },
    },
  },
  {
    n: 16,
    slug: 'used-meta-microtask-inline',
    idea: 'tc-fix-drift-042 used meta + decode-microtask-twice + inline-block capture',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-microtask-twice',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { ...RFORK_USED },
    },
  },
  {
    n: 17,
    slug: 'root-only-offscreen-trim',
    idea: 'tc-fix-drift-045 root FO only + offscreen-canvas + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'offscreen-canvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...RFORK_ROOT_ONLY },
    },
  },
  {
    n: 18,
    slug: 'lh-meta-will-read-w7',
    idea: 'tc-fix-drift-014 lh-meta + will-read-frequently + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'will-read-frequently',
      labToCanvasOpts: { ...RFORK_LH_META, ...W7_META },
    },
  },
  {
    n: 19,
    slug: 'combo-box-bitmap-dpr',
    idea: 'tc-fix-drift-036 box overflow combo + create-image-bitmap + w7 dpr root',
    extra: {
      inject: 'both',
      rasterPatch: 'create-image-bitmap',
      labToCanvasOpts: { ...RFORK_BOX_OVERFLOW, ...W7_DPR_ROOT },
    },
  },
  {
    n: 20,
    slug: 'combo-height-raf-lh-pin',
    idea: 'tc-fix-drift-035 height unset combo + raf-before-draw + lh pin capture',
    extra: {
      inject: 'both',
      rasterPatch: 'raf-before-draw',
      harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
      labToCanvasOpts: { ...RFORK_HEIGHT_UNSET },
    },
  },
  {
    n: 21,
    slug: 'combo-linebox-decode-raf-flex-start',
    idea: 'tc-fix-drift-019 linebox + decode-interval-raf + flex-start capture',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval-raf',
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
      labToCanvasOpts: { ...RFORK_LINEbox },
    },
  },
  {
    n: 22,
    slug: 'combo-clip-triple-decode-w7',
    idea: 'tc-fix-drift-022 clip combo + triple-decode + w7 meta',
    extra: {
      inject: 'both',
      rasterPatch: 'triple-decode',
      labToCanvasOpts: { ...RFORK_CLIP, ...W7_META },
    },
  },
  {
    n: 23,
    slug: 'fontbox-blob-trim',
    idea: 'tc-fix-drift-041 fontbox + blob-url-decode-interval + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'blob-url-decode-interval',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...RFORK_FONTBOX },
    },
  },
  {
    n: 24,
    slug: 'used-meta-raf-inline-rfork',
    idea: 'tc-fix-drift-042 used meta + decode-interval-raf + inline-block rfork at decode',
    css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval-raf',
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: {
        ...RFORK_USED,
        rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
      },
    },
  },
  {
    n: 25,
    slug: 'root-only-decode-100-flex',
    idea: 'tc-fix-drift-045 root only + lab-decode-100ms + flex layout capture',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-decode-100ms',
      harnessSnapdom: { experimentalFoTextLayout: true },
      labToCanvasOpts: { ...RFORK_ROOT_ONLY },
    },
  },
  {
    n: 26,
    slug: 'lh-meta-decode-200-lh-normal',
    idea: 'tc-fix-drift-014 lh-meta + lab-decode-200ms + lh normal capture',
    css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-decode-200ms',
      harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
      labToCanvasOpts: { ...RFORK_LH_META },
    },
  },
  {
    n: 27,
    slug: 'flex-cross-box-settle',
    idea: 'tc-fix-drift-049 flex-cross + combo box overflow + decodeSettle',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      labToCanvasOpts: { ...RFORK_BOX_OVERFLOW, decodeSettle: true },
    },
  },
  {
    n: 28,
    slug: 'flex-cross-linebox-interval',
    idea: 'tc-fix-drift-049 flex-cross + combo linebox + decode-interval',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      labToCanvasOpts: { ...RFORK_LINEbox },
    },
  },
  {
    n: 29,
    slug: 'mp-h2-clip-settle',
    idea: 'h2-fo-normalize-full mp + combo clip rfork + decodeSettle',
    extra: {
      inject: 'both',
      monkeypatch: 'h2-fo-normalize-full',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_CLIP, decodeSettle: true },
    },
  },
  {
    n: 30,
    slug: 'mp-decode-proto-fontbox-w7',
    idea: 'decode-interval-prototype mp + fontbox meta + w7 meta',
    extra: {
      inject: 'both',
      monkeypatch: 'decode-interval-prototype',
      rasterPatch: 'lab-toCanvas',
      labToCanvasOpts: { ...RFORK_FONTBOX, ...W7_META },
    },
  },
  {
    n: 31,
    slug: 'mp-fonts-delay-used-trim',
    idea: 'fonts-ready-delay mp + used meta + leading-trim capture',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      monkeypatch: 'fonts-ready-delay',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...RFORK_USED },
    },
  },
  {
    n: 32,
    slug: 'mp-capture-css-height-interval',
    idea: 'capture-recipe-css mp + height unset combo + decode-interval',
    extra: {
      inject: 'both',
      monkeypatch: 'capture-recipe-css',
      rasterPatch: 'decode-interval',
      labToCanvasOpts: { ...RFORK_HEIGHT_UNSET },
    },
  },
  {
    n: 33,
    slug: 'product-linebox-settle',
    idea: 'product-toCanvas + combo linebox rfork + decodeSettle harness',
    extra: {
      inject: 'both',
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: {
        experimentalRasterDecodeSettle: true,
        experimentalRasterSvgPatch: 'combo-fo-y-half-leading-linebox',
      },
    },
  },
  {
    n: 34,
    slug: 'product-root-interval',
    idea: 'product-toCanvas + root FO only rfork + decode-interval harness',
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      harnessProductToCanvas: {
        experimentalRasterSvgPatch: 'fo-y-half-leading-root-fo-only-meta',
      },
    },
  },
  {
    n: 35,
    slug: 'mp-googlefonts-lh-meta-dpr',
    idea: 'googlefonts-embed mp + lh-meta rfork + w7 dpr root',
    extra: {
      inject: 'both',
      monkeypatch: 'googlefonts-embed-capture',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { embedFonts: true },
      labToCanvasOpts: { ...RFORK_LH_META, ...W7_DPR_ROOT },
    },
  },
  {
    n: 36,
    slug: 'combo-linebox-trim-capture-w7',
    idea: 'combo linebox rfork + leading-trim capture + decodeSettle + w7 meta',
    css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      harnessSnapdom: { experimentalFoLeadingTrim: true },
      labToCanvasOpts: { ...RFORK_LINEbox, ...W7_META, decodeSettle: true },
    },
  },
  {
    n: 37,
    slug: 'clientrects-fontbox-load-event',
    idea: 'lab-pin-inline-box-height-from-clientrects + fontbox meta + load-event',
    extra: {
      inject: 'both',
      rasterPatch: 'load-event',
      radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
      labToCanvasOpts: { ...RFORK_FONTBOX },
    },
  },
  {
    n: 38,
    slug: 'ink-padding-clip-two-stage',
    idea: 'lab-pin-ink-top-in-border-padding + clip combo + two-stage decode',
    extra: {
      inject: 'both',
      rasterPatch: 'two-stage',
      radicalPatch: 'lab-pin-ink-top-in-border-padding',
      labToCanvasOpts: { ...RFORK_CLIP },
    },
  },
  {
    n: 39,
    slug: 'mp-h2-raster-used-fonts-interval',
    idea: 'h2-raster-normalize mp + used meta + fonts-ready-interval',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: {
      inject: 'both',
      monkeypatch: 'h2-raster-normalize-capture',
      rasterPatch: 'fonts-ready-interval',
      labToCanvasOpts: { ...RFORK_USED },
    },
  },
  {
    n: 40,
    slug: 'max-evolved-flex-linebox-dpr',
    idea: 'flex-cross anchor + combo linebox + trim+inline capture + decodeSettle + w7 dpr root',
    css:
      FO_BASELINE_CSS +
      CAPTURE_LEADING_TRIM_BOTH_EDGES +
      CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
      harnessSnapdom: {
        experimentalFoLeadingTrim: true,
        experimentalFoTextLeafNormalize: true,
      },
      labToCanvasOpts: { ...RFORK_LINEbox, ...W7_DPR_ROOT, decodeSettle: true },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch4-triple: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-drift-batch4-triple: duplicate slugs in SPECS')
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([

])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const fullCss = css ?? FO_BASELINE_CSS
  const rasterPatch =
    extra.rasterPatch ?? (extra.labToCanvasOpts || extra.radicalPatch ? 'lab-toCanvas' : undefined)
  return {
    id: `drift-batch4-${num}`,
    label: `drift-batch4 #${n}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'drift-batch4',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch4-${num}`),
    notes: 'drift-batch4 triple-align; evolved tc-fix-drift + loop decode; FO raster only.',
    ...(rasterPatch ? { rasterPatch } : {}),
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-drift-batch4-triple: expected 40 recipes, got ${RECIPES.length}`)
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 40) {
  throw new Error('recipes-drift-batch4-triple: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.svgRootRound ?? '',
    r.radicalPatch ?? '',
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-drift-batch4-triple: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const DRIFT_BATCH4_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

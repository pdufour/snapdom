/**
 * Lab toCanvas flags wave-3 — eight structural probes (distinct from wave-1 / wave-2).
 *
 * Matrix: npm run debug:tc-flags-w3-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import { LAB_DECODE_INTERVAL_MS } from '../fo-fix-toCanvas-load-pipeline.js'

/** modern-screenshot Chromium FO text block (wave-2 slice). */
const CHROMIUM_TEXT_BLOCK_CSS =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const VERTICAL_ALIGN_MIDDLE_CSS =
  'foreignObject span,foreignObject a,foreignObject label,foreignObject strong,foreignObject em,' +
  'foreignObject small,foreignObject code,foreignObject li' +
  '{vertical-align:middle!important}'

/** Flex-row links as block — structural (not nav/checkout selectors). */
const FLEX_CHILD_LINK_BLOCK_CSS =
  'foreignObject div[style*="display:flex"] a,foreignObject div[style*="display: flex"] a,' +
  'foreignObject div[style*="display:inline-flex"] a,foreignObject div[style*="display: inline-flex"] a,' +
  'foreignObject [data-snapdom-flex-center] a{display:block!important}'

const FO_TEXT_LEAF_SELECTORS =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,' +
  'foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** line-height:1 — unitless 1.0 ratio (line box = font-size). */
const CONTENT_BOX_LH_CSS = `${FO_TEXT_LEAF_SELECTORS}{line-height:1!important}`

const ISOLATION_ISOLATE_CSS = 'foreignObject{isolation:isolate!important}'

/** All experimentalFo* capture flags in src/context.js (lab harnessSnapdom). */
const EXPERIMENTAL_FO_CAPTURE_ALL = {
  experimentalFoTextLayout: true,
  experimentalFoLeadingTrim: true,
  experimentalFoTextBoxEdgeAuto: true,
  experimentalFoPinLineHeightFromLive: true,
  experimentalFoFlexRowAlignCenter: true,
  experimentalFoChromiumText: true,
  experimentalFoFlexRowCenter: true,
  experimentalCaptureIntViewBox: true,
  experimentalFoTextGeometric: true,
}

/** All experimentalRaster* flags in src/toCanvas.js (lab harnessProductToCanvas). */
const EXPERIMENTAL_RASTER_ALL = {
  experimentalRasterDecodeSettle: true,
  experimentalRasterBackingCeil: true,
  experimentalRasterDoubleDecode: true,
  experimentalRasterCtxNoScale: true,
  experimentalRasterPreDecodeRaf: true,
}

/** @type {{ id: string, label: string, idea: string, notes: string, css: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    id: 'tc-flags-w3-vertical-align-middle',
    label: 'tc-flags-w3: vertical-align middle',
    idea: 'FO CSS vertical-align:middle on inline / inline-block text leaves inside foreignObject',
    notes: 'Wave-3 FO raster only — no text bypass; distinct from flex baseline / pin-lh.',
    css: FO_BASELINE_CSS + VERTICAL_ALIGN_MIDDLE_CSS,
  },
  {
    id: 'tc-flags-w3-anchor-display-block',
    label: 'tc-flags-w3: flex child links block',
    idea: 'FO inject display:block on anchor children of flex containers (structural flex+link pattern)',
    notes: 'Wave-3 FO raster only — attribute-selector flex rows, not checkout/nav ids.',
    css: FO_BASELINE_CSS + FLEX_CHILD_LINK_BLOCK_CSS,
  },
  {
    id: 'tc-flags-w3-content-box-lh',
    label: 'tc-flags-w3: content lh 1.0',
    idea: 'line-height:1 (unitless) on FO text leaves — line box height equals font-size',
    notes: 'Wave-3 FO raster only — typography strut probe, not magic dy.',
    css: FO_BASELINE_CSS + CONTENT_BOX_LH_CSS,
  },
  {
    id: 'tc-flags-w3-isolation-isolate',
    label: 'tc-flags-w3: isolation isolate',
    idea: 'isolation:isolate on foreignObject root wrapper — stacking context probe',
    notes: 'Wave-3 FO raster only — global FO rule, no text bypass.',
    css: FO_BASELINE_CSS + ISOLATION_ISOLATE_CSS,
  },
  {
    id: 'tc-flags-w3-combine-chromium-pin-lh',
    label: 'tc-flags-w3: Chromium + pin lh',
    idea: 'Merge wave-2 Chromium text block CSS + wave-1 pin-content-lh live SVG patch',
    notes:
      'labToCanvasFlag tc-flags-w1-pin-content-lh + Chromium FO CSS; FO raster only.',
    css: FO_BASELINE_CSS + CHROMIUM_TEXT_BLOCK_CSS,
    extra: { labToCanvasFlag: 'tc-flags-w1-pin-content-lh' },
  },
  {
    id: 'tc-flags-w3-combine-decode-ceil',
    label: 'tc-flags-w3: decode + backing ceil',
    idea: `Merge wave-1 decode-fonts bundle (${LAB_DECODE_INTERVAL_MS}ms + fonts.ready) + backing ceil + device-grid floor`,
    notes: 'labToCanvasFlags decode-fonts + backing-ceil-grid; FO raster only.',
    css: FO_BASELINE_CSS,
    extra: {
      labToCanvasFlags: ['tc-flags-w1-decode-fonts-bundle', 'tc-flags-w1-backing-ceil-grid'],
    },
  },
  {
    id: 'tc-flags-w3-experimental-capture-all',
    label: 'tc-flags-w3: experimentalFo* all',
    idea: 'Harness enables every experimentalFo* snapdom capture flag from src/context.js',
    notes: 'harnessSnapdom — product capture path; lab-toCanvas raster; FO text not bypassed.',
    css: FO_BASELINE_CSS,
    extra: { harnessSnapdom: EXPERIMENTAL_FO_CAPTURE_ALL },
  },
  {
    id: 'tc-flags-w3-experimental-raster-all',
    label: 'tc-flags-w3: experimentalRaster* all',
    idea: 'Harness enables every experimentalRaster* flag on product src/exporters/toCanvas.js',
    notes: 'harnessProductToCanvas + rasterPatch product-toCanvas; FO raster only.',
    css: FO_BASELINE_CSS,
    extra: {
      rasterPatch: 'product-toCanvas',
      harnessProductToCanvas: EXPERIMENTAL_RASTER_ALL,
    },
  },
]

if (SPECS.length !== 8) {
  throw new Error(`recipes-tocanvas-flags-wave3.js: expected 8 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { css, extra, ...rest } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-flags-w3',
    active: true,
    css,
    ...rest,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 8) {
  throw new Error('recipes-tocanvas-flags-wave3.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labPreRaster ?? '',
    r.labHook ?? '',
    r.labToCanvasFlag ?? '',
    (r.labToCanvasFlags ?? []).join(','),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-flags-wave3.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FLAGS_W3_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

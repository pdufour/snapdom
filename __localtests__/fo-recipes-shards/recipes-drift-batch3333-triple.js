/**
 * Drift batch 3333 — normalize-first triple alignment (live + svg + canvas ink tops).
 * Heavy capture/FO structural normalize + one minimal decode (settle | interval | fonts-ready).
 * FO raster only; no text bypass; no magic px offsets.
 *
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass \
 *     --ids 'product-baseline,drift-batch3333-*' --landmark Home
 *   npm run debug:fo-drift-batch3333-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important;' +
  'text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CAPTURE_RECIPE_CSS =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

/** @type {{ slug: string, rasterPatch: string, decodeSettle?: boolean }} */
const DECODE_VARIANTS = [
  { slug: 'decode-settle', rasterPatch: 'lab-toCanvas', decodeSettle: true },
  { slug: 'decode-interval', rasterPatch: 'decode-interval' },
  { slug: 'fonts-ready', rasterPatch: 'fonts-ready' },
]

/**
 * @type {{ slug: string, lane: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }}[]
 */
const NORMALIZE_SPECS = [
  {
    slug: 'mp-h2-normalize-full',
    lane: 'h2-mp',
    idea: 'mp h2-fo-normalize-full capture normalize',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'h2-fo-normalize-full',
    },
  },
  {
    slug: 'mp-h2-raster-normalize',
    lane: 'h2-mp',
    idea: 'mp h2-raster-normalize-capture normalize',
    extra: {
      inject: 'both',
      css: H2_RASTER_NORMALIZE_CSS,
      monkeypatch: 'h2-raster-normalize-capture',
    },
  },
  {
    slug: 'mp-capture-recipe-css',
    lane: 'capture-mp',
    idea: 'mp capture-recipe-css FO box-sizing + min-width normalize',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS + CAPTURE_RECIPE_CSS,
      monkeypatch: 'capture-recipe-css',
    },
  },
  {
    slug: 'mp-googlefonts-embed',
    lane: 'capture-mp',
    idea: 'mp googlefonts-embed-capture + embedFonts normalize',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: 'googlefonts-embed-capture',
      harnessSnapdom: { embedFonts: true },
    },
  },
  {
    slug: 'leading-trim-capture',
    lane: 'leading-trim',
    idea: 'leading-trim both-edges capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    },
  },
  {
    slug: 'inline-block-capture',
    lane: 'inline-block',
    idea: 'inline-block linebox leaf capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
    },
  },
  {
    slug: 'flex-min-width',
    lane: 'flex-min-width',
    idea: 'experimentalFoTextLayout flex min-width:0 normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoTextLayout: true },
    },
  },
  {
    slug: 'lh-normal-capture',
    lane: 'lh-normal',
    idea: 'line-height:normal!important on text leaves capture normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT,
      harnessSnapdom: { experimentalFoPinLineHeightOnTextLeaf: true },
    },
  },
  {
    slug: 'chromium-copy',
    lane: 'chromium-copy',
    idea: 'Chromium FO style copies at capture+raster normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
    },
  },
  {
    slug: 'flex-start-capture',
    lane: 'flex-start',
    idea: 'experimentalFoFlexTextLeafAlignStart normalize',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      harnessSnapdom: { experimentalFoFlexTextLeafAlignStart: true },
    },
  },
  {
    slug: 'mp-h2-full-container',
    lane: 'h2-mp',
    idea: 'mp h2-full-plus-container-capture normalize',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      monkeypatch: 'h2-full-plus-container-capture',
    },
  },
  {
    slug: 'mp-h2-internal-star',
    lane: 'h2-mp',
    idea: 'mp h2-fo-internal-star-capture normalize',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS,
      monkeypatch: 'h2-fo-internal-star-capture',
    },
  },
  {
    slug: 'mp-h2-plus-capture-css',
    lane: 'mp-stack',
    idea: 'mp stack h2-fo-normalize-full + capture-recipe-css',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS + CAPTURE_RECIPE_CSS,
      monkeypatch: ['h2-fo-normalize-full', 'capture-recipe-css'],
    },
  },
  {
    slug: 'mp-googlefonts-plus-capture-css',
    lane: 'mp-stack',
    idea: 'mp stack googlefonts-embed-capture + capture-recipe-css',
    extra: {
      inject: 'capture',
      css: FO_BASELINE_CSS + CAPTURE_RECIPE_CSS,
      monkeypatch: ['googlefonts-embed-capture', 'capture-recipe-css'],
      harnessSnapdom: { embedFonts: true },
    },
  },
]

/** @type {{ n: number, slug: string, lane: string, idea: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = []
for (let i = 0; i < 40; i++) {
  const decode = DECODE_VARIANTS[i % 3]
  const norm = NORMALIZE_SPECS[Math.floor(i / 3)]
  const slug = `${norm.slug}-${decode.slug}`
  /** @type {Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe>} */
  const extra = {
    ...norm.extra,
    rasterPatch: decode.rasterPatch,
  }
  if (decode.decodeSettle) {
    extra.labToCanvasOpts = {
      ...(extra.labToCanvasOpts ?? {}),
      decodeSettle: true,
    }
  }
  if (norm.extra.inject === 'capture') {
    extra.inject = 'both'
  }
  SPECS.push({
    n: i + 1,
    slug,
    lane: norm.lane,
    idea: `${norm.idea} + ${decode.slug} (normalize-first triple close)`,
    extra,
  })
}

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch3333-triple: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-drift-batch3333-triple: duplicate slugs')
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch3333-001',
  'drift-batch3333-002',
  'drift-batch3333-003',
  'drift-batch3333-004',
  'drift-batch3333-005',
  'drift-batch3333-006',
  'drift-batch3333-007',
  'drift-batch3333-008',
  'drift-batch3333-009',
  'drift-batch3333-010',
  'drift-batch3333-011',
  'drift-batch3333-012',
  'drift-batch3333-013',
  'drift-batch3333-014',
  'drift-batch3333-015',
  'drift-batch3333-019',
  'drift-batch3333-020',
  'drift-batch3333-021',
  'drift-batch3333-022',
  'drift-batch3333-023',
  'drift-batch3333-024',
  'drift-batch3333-025',
  'drift-batch3333-026',
  'drift-batch3333-027',
  'drift-batch3333-028',
  'drift-batch3333-029',
  'drift-batch3333-030',
  'drift-batch3333-031',
  'drift-batch3333-032',
  'drift-batch3333-033',
  'drift-batch3333-034',
  'drift-batch3333-035',
  'drift-batch3333-036',
  'drift-batch3333-037',
  'drift-batch3333-038',
  'drift-batch3333-039',
  'drift-batch3333-040',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, lane, idea, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const baseCss = extra.css ?? FO_BASELINE_CSS
  const rasterPatch =
    extra.rasterPatch ?? (extra.labToCanvasOpts ? 'lab-toCanvas' : 'product-toCanvas')
  return {
    id: `drift-batch3333-${num}`,
    label: `Drift batch3333 #${num}: ${slug}`,
    idea,
    css: baseCss,
    inject,
    rasterPatch,
    category: 'drift-batch3333',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch3333-${num}`),
    notes: `drift-batch3333 lane=${lane}; normalize-first triple ink alignment; FO raster only.`,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 40) {
  throw new Error('recipes-drift-batch3333-triple: duplicate recipe ids')
}

export const DRIFT_BATCH3333_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

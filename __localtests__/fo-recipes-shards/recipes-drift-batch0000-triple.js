/**
 * Drift batch 0000 — decode-first triple alignment (live + svg + canvas ink tops).
 * Heavy decode timing variants + one minimal normalize (w7 meta | dpr root | leading-trim | inline-block).
 * FO raster only; no text bypass; no magic px offsets.
 *
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass \
 *     --ids 'product-baseline,drift-batch0000-*' --landmark Home
 *   npm run debug:fo-drift-batch0000-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
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

/** @type {{ slug: string, rasterPatch: string, decodeSettle?: boolean, labRaster?: string }} */
const DECODE_VARIANTS = [
  { slug: 'decode-settle', rasterPatch: 'lab-toCanvas', decodeSettle: true },
  { slug: 'decode-interval', rasterPatch: 'decode-interval' },
  { slug: 'double-decode', rasterPatch: 'double-decode' },
  { slug: 'blob-url', rasterPatch: 'blob-url-decode-interval' },
  { slug: 'fonts-ready', rasterPatch: 'fonts-ready' },
  { slug: 'decode-raf', rasterPatch: 'decode-interval-raf' },
  { slug: 'lab-decode-100ms', rasterPatch: 'lab-decode-100ms' },
  { slug: 'lab-decode-200ms', rasterPatch: 'lab-decode-200ms' },
  { slug: 'fonts-ready-interval', rasterPatch: 'fonts-ready-interval' },
  { slug: 'triple-decode', rasterPatch: 'triple-decode' },
]

/** @type {{ slug: string, lane: string, ideaSuffix: string, build: (decode: typeof DECODE_VARIANTS[0]) => Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const NORMALIZE_VARIANTS = [
  {
    slug: 'w7-meta',
    lane: 'w7-meta',
    ideaSuffix: 'w7 half-leading meta at decode',
    build: () => ({ labToCanvasOpts: { ...W7_META } }),
  },
  {
    slug: 'dpr-root',
    lane: 'dpr-root',
    ideaSuffix: 'w7 dpr-scaled SVG root meta at decode',
    build: () => ({ labToCanvasOpts: { ...W7_DPR_ROOT } }),
  },
  {
    slug: 'leading-trim',
    lane: 'leading-trim',
    ideaSuffix: 'leading-trim both-edges capture normalize',
    build: () => ({
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_LEADING_TRIM_BOTH_EDGES,
      harnessSnapdom: { experimentalFoLeadingTrim: true },
    }),
  },
  {
    slug: 'inline-block',
    lane: 'inline-block',
    ideaSuffix: 'inline-block linebox leaf capture normalize',
    build: () => ({
      inject: 'both',
      css: FO_BASELINE_CSS + CAPTURE_INLINE_BLOCK_LINEBOX_LEAF,
      harnessSnapdom: { experimentalFoTextLeafNormalize: true },
      labToCanvasOpts: { rasterOnlySvgPatch: 'text-leaf-inline-block-linebox' },
    }),
  },
]

/** @type {{ n: number, slug: string, lane: string, idea: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = []
let n = 1
for (const decode of DECODE_VARIANTS) {
  for (const norm of NORMALIZE_VARIANTS) {
    const slug = `${decode.slug}-${norm.slug}`
    /** @type {Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe>} */
    const extra = {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      rasterPatch: decode.rasterPatch,
      ...norm.build(decode),
    }
    if (decode.decodeSettle) {
      extra.labToCanvasOpts = {
        ...(extra.labToCanvasOpts ?? {}),
        decodeSettle: true,
      }
    }
    if (norm.slug === 'leading-trim' || norm.slug === 'inline-block') {
      // capture normalize already set inject/css/harness above
    } else if (extra.labToCanvasOpts) {
      extra.rasterPatch = decode.rasterPatch === 'lab-toCanvas' ? 'lab-toCanvas' : decode.rasterPatch
    }
    SPECS.push({
      n: n++,
      slug,
      lane: norm.lane,
      idea: `${decode.slug} decode + ${norm.ideaSuffix} (decode-first triple close)`,
      extra,
    })
  }
}

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch0000-triple: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-drift-batch0000-triple: duplicate slugs')
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([
  'drift-batch0000-001',
  'drift-batch0000-002',
  'drift-batch0000-003',
  'drift-batch0000-005',
  'drift-batch0000-006',
  'drift-batch0000-007',
  'drift-batch0000-009',
  'drift-batch0000-010',
  'drift-batch0000-011',
  'drift-batch0000-013',
  'drift-batch0000-014',
  'drift-batch0000-015',
  'drift-batch0000-017',
  'drift-batch0000-018',
  'drift-batch0000-019',
  'drift-batch0000-021',
  'drift-batch0000-022',
  'drift-batch0000-023',
  'drift-batch0000-025',
  'drift-batch0000-026',
  'drift-batch0000-027',
  'drift-batch0000-029',
  'drift-batch0000-030',
  'drift-batch0000-031',
  'drift-batch0000-033',
  'drift-batch0000-034',
  'drift-batch0000-035',
  'drift-batch0000-037',
  'drift-batch0000-038',
  'drift-batch0000-039',
])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n: num, slug, lane, idea, extra = {} }) => {
  const idNum = String(num).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const baseCss = extra.css ?? FO_BASELINE_CSS
  const rasterPatch =
    extra.rasterPatch ?? (extra.labToCanvasOpts ? 'lab-toCanvas' : 'product-toCanvas')
  return {
    id: `drift-batch0000-${idNum}`,
    label: `Drift batch0000 #${idNum}: ${slug}`,
    idea,
    css: baseCss,
    inject,
    rasterPatch,
    category: 'drift-batch0000',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch0000-${idNum}`),
    notes: `drift-batch0000 lane=${lane}; decode-first triple ink alignment; FO raster only.`,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 40) {
  throw new Error('recipes-drift-batch0000-triple: duplicate recipe ids')
}

export const DRIFT_BATCH0000_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

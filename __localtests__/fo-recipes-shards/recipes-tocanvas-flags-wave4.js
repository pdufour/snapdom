/**
 * Lab toCanvas flags wave-4 — six radical structural FO probes (non-bypass).
 *
 * Wave-1/2 cover baseline, pin-lh, leading-trim, decode/backing, Chromium text,
 * flex center, viewBox floor, ctx scale, pre-decode RAF, geometric text.
 * Wave-4: table wrapper on flex item, flex-start cross-axis, normal lh !important,
 * svg root font-size from capture root, anchor inline-block (not flex), double foNormalize.
 *
 * Matrix: npm run debug:tc-flags-w4-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

/** FO inner wrapper display:table on flex-item wrapper (structural, not nav-specific). */
const FO_WRAPPER_DISPLAY_TABLE_CSS =
  'foreignObject>div{display:table!important;width:100%!important}'

/** Counter cross-axis stretch — flex-start on all FO flex descendants. */
const ALIGN_SELF_FLEX_START_CSS = 'foreignObject *{align-self:flex-start!important}'

const LINE_HEIGHT_NORMAL_IMPORTANT_CSS = 'foreignObject *{line-height:normal!important}'

/** Nav-like flex links → inline-block (tag-agnostic: any FO anchor, no href selector). */
const REMOVE_FLEX_ON_ANCHOR_CSS = 'foreignObject a{display:inline-block!important}'

/** Duplicate baseline + extended foNormalize bundle (lab extended raster inject). */
const DOUBLE_FO_NORMALIZE_CSS =
  FO_BASELINE_CSS + H2_RASTER_NORMALIZE_CSS + FO_BASELINE_CSS + H2_RASTER_NORMALIZE_CSS

/** @type {{ id: string, label: string, idea: string, notes: string, css: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    id: 'tc-flags-w4-fo-wrapper-display-table',
    label: 'tc-flags-w4: FO wrapper table',
    idea: 'FO inner wrapper display:table on flex-item >div — table formatting vs flex item box',
    notes:
      'Wave-4 flag w4-fo-wrapper-display-table; FO raster only — no text bypass; distinct from w2 flex-row-center.',
    css: FO_BASELINE_CSS + FO_WRAPPER_DISPLAY_TABLE_CSS,
  },
  {
    id: 'tc-flags-w4-align-self-flex-start',
    label: 'tc-flags-w4: align-self flex-start',
    idea: 'align-self:flex-start on all FO flex children — structural counter to cross-axis stretch',
    notes:
      'Wave-4 flag w4-align-self-flex-start; FO raster only — no text bypass; distinct from w1 flex-baseline.',
    css: FO_BASELINE_CSS + ALIGN_SELF_FLEX_START_CSS,
  },
  {
    id: 'tc-flags-w4-line-height-normal-important',
    label: 'tc-flags-w4: lh normal !important',
    idea: 'line-height:normal!important on foreignObject * — reset serialized lh in FO raster',
    notes:
      'Wave-4 flag w4-line-height-normal-important; FO raster only — no text bypass; distinct from w1 pin-content-lh.',
    css: FO_BASELINE_CSS + LINE_HEIGHT_NORMAL_IMPORTANT_CSS,
  },
  {
    id: 'tc-flags-w4-font-size-root-match',
    label: 'tc-flags-w4: svg root font-size',
    idea: 'Pin capture SVG <svg> root font-size from live capture root computed font-size',
    notes:
      'Wave-4 radicalPatch lab-svg-root-font-size-from-live; rem/em root in FO — no text bypass.',
    css: FO_BASELINE_CSS,
    extra: { radicalPatch: 'lab-svg-root-font-size-from-live' },
  },
  {
    id: 'tc-flags-w4-remove-flex-on-anchor',
    label: 'tc-flags-w4: anchor inline-block',
    idea: 'FO CSS: foreignObject a display:inline-block — flex→inline-block on any anchor (no href selector)',
    notes:
      'Wave-4 flag w4-remove-flex-on-anchor; FO raster only — no text bypass; structural not checkout nav.',
    css: FO_BASELINE_CSS + REMOVE_FLEX_ON_ANCHOR_CSS,
  },
  {
    id: 'tc-flags-w4-double-fo-normalize',
    label: 'tc-flags-w4: double foNormalize',
    idea: 'Duplicate FO_BASELINE + H2_RASTER_NORMALIZE inject blocks (extended foNormalize twice)',
    notes:
      'Wave-4 flag w4-double-fo-normalize; FO raster only — no text bypass; distinct from w2 Chromium-only slice.',
    css: DOUBLE_FO_NORMALIZE_CSS,
  },
]

if (SPECS.length !== 6) {
  throw new Error(`recipes-tocanvas-flags-wave4.js: expected 6 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { css, extra, ...rest } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-flags-w4',
    active: true,
    css,
    ...rest,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-flags-wave4.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.radicalPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-flags-wave4.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FLAGS_W4_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

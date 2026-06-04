/**
 * Lab toCanvas flags wave-2 — six structural probes (distinct from wave-1).
 *
 * Wave-1 covers: baseline, pin-lh, leading-trim, decode-fonts, backing-ceil-grid, draw-from-backing.
 * Wave-2: Chromium text block, flex row center, int-floor viewBox, ctx no-scale,
 * double-raf pre-decode attach, text geometric smoothing.
 *
 * Matrix: npm run debug:tc-flags-w2-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** modern-screenshot / copy-css-styles Chromium FO text block (no geometricPrecision here). */
const CHROMIUM_TEXT_BLOCK_CSS =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** Counter flex-row cross-stretch — align-items:center on FO flex containers. */
const FLEX_ROW_CENTER_CSS =
  'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important}' +
  'foreignObject *{display:flex!important;align-items:center!important}'

const TEXT_GEOMETRIC_CSS =
  'foreignObject *{text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}'

/** @type {{ id: string, label: string, idea: string, notes: string, css: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    id: 'tc-flags-w2-chromium-text-block',
    label: 'tc-flags-w2: Chromium text block',
    idea:
      'FO CSS inject: font-kerning:normal, font-synthesis:none, box-sizing:border-box, min-width:0 on FO descendants (modern-screenshot set)',
    notes:
      'Wave-2 flag w2-chromium-text-block; FO raster only — no text bypass; distinct from wave-1 pin-lh / decode-fonts.',
    css: FO_BASELINE_CSS + CHROMIUM_TEXT_BLOCK_CSS,
  },
  {
    id: 'tc-flags-w2-flex-row-center',
    label: 'tc-flags-w2: flex row center',
    idea: 'FO CSS: flex containers align-items:center — structural counter to cross-axis stretch in FO flex rows',
    notes:
      'Wave-2 flag w2-flex-row-center; FO raster only — no text bypass; distinct from wave-1 flex-baseline / pin-content-lh.',
    css: FO_BASELINE_CSS + FLEX_ROW_CENTER_CSS,
  },
  {
    id: 'tc-flags-w2-int-viewbox-floor',
    label: 'tc-flags-w2: int-floor viewBox',
    idea: 'labPreRaster int-viewbox-floor — floor viewBox components only before lab toCanvas (no decode bundle)',
    notes:
      'Wave-2 flag w2-int-viewbox-floor; pre-raster viewBox snap only; FO raster only — no text bypass.',
    css: FO_BASELINE_CSS,
    extra: { labPreRaster: 'int-viewbox-floor', labHook: 'w2-int-viewbox-floor' },
  },
  {
    id: 'tc-flags-w2-ctx-no-scale',
    label: 'tc-flags-w2: ctx scale off',
    idea: 'labToCanvas ctxScale:false — draw in backing-store device pixels (skip ctx.scale(dpr))',
    notes:
      'Wave-2 flag w2-ctx-no-scale; FO raster only — no text bypass; distinct from wave-1 draw-from-backing.',
    css: FO_BASELINE_CSS,
    extra: {
      labHook: 'w2-ctx-no-scale',
      labToCanvasOpts: { ctxScale: false },
    },
  },
  {
    id: 'tc-flags-w2-double-raf-predecode',
    label: 'tc-flags-w2: attach + 2× rAF pre-decode',
    idea: 'Attach decoded img offscreen + double requestAnimationFrame before img.decode() (all browsers, default lab path)',
    notes:
      'Wave-2 flag w2-double-raf-predecode; FO raster only — no text bypass; distinct from wave-1 decode-fonts bundle.',
    css: FO_BASELINE_CSS,
    extra: {
      labHook: 'w2-double-raf-predecode',
      labToCanvasOpts: { preDecodeAttach: true, preDecodeRaf: true },
    },
  },
  {
    id: 'tc-flags-w2-text-geometric',
    label: 'tc-flags-w2: text geometric',
    idea: 'FO CSS text-rendering:geometricPrecision and -webkit-font-smoothing:antialiased on FO descendants',
    notes:
      'Wave-2 flag w2-text-geometric; FO raster only — no text bypass; distinct from wave-1 leading-trim.',
    css: FO_BASELINE_CSS + TEXT_GEOMETRIC_CSS,
  },
]

if (SPECS.length !== 6) {
  throw new Error(`recipes-tocanvas-flags-wave2.js: expected 6 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { css, extra, ...rest } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-flags-w2',
    active: true,
    css,
    ...rest,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 6) {
  throw new Error('recipes-tocanvas-flags-wave2.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labPreRaster ?? '',
    r.labHook ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-flags-wave2.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FLAGS_W2_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Lab toCanvas wave-10 — Canvas2D ctx knobs (tc-lab-w10-ctx-001..070).
 *
 * Focus:
 * - ctx.filter (via `labToCanvasOpts.ctxFilter`)
 * - globalCompositeOperation full enum sweep
 * - shadow* (via monkeypatch helpers)
 * - imageSmoothingQuality low/medium/high
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-ctx-*'
 * Dupes:
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe */

/** @type {{ n: number, slug: string, idea: string, extra: Partial<FoFixRecipe> & { css?: string } }[]} */
const SPECS = []
let n = 0

// 1) ctx.filter sweep (via labToCanvasOpts.ctxFilter)
const CTX_FILTERS = [
  'none',
  'blur(0.25px)',
  'blur(0.5px)',
  'blur(1px)',
  'contrast(100%)',
  'contrast(110%)',
  'brightness(100%)',
  'brightness(110%)',
  'saturate(100%)',
  'saturate(110%)',
  'grayscale(0%)',
  'sepia(0%)',
  'opacity(100%)',
  'invert(0%)',
  'hue-rotate(0deg)',
  'drop-shadow(0 1px 1px rgba(0,0,0,0.35))',
]

for (const f of CTX_FILTERS) {
  n += 1
  SPECS.push({
    n,
    slug: `ctxFilter ${f}`,
    idea: `Canvas2D ctx.filter = ${f} during FO bitmap blit (labToCanvasOpts.ctxFilter)`,
    extra: { labToCanvasOpts: { ctxFilter: f } },
  })
}

// 2) globalCompositeOperation full enum sweep (Canvas2D)
const GLOBAL_COMPOSITES = [
  'source-over',
  'source-in',
  'source-out',
  'source-atop',
  'destination-over',
  'destination-in',
  'destination-out',
  'destination-atop',
  'lighter',
  'copy',
  'xor',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
]

for (const op of GLOBAL_COMPOSITES) {
  n += 1
  SPECS.push({
    n,
    slug: `globalCompositeOperation ${op}`,
    idea: `Canvas2D globalCompositeOperation = ${op} for drawImage blit`,
    extra: { labToCanvasCtx: { globalCompositeOperation: op } },
  })
}

// 3) imageSmoothingQuality sweep (Canvas2D)
const SMOOTH_QUALS = /** @type {const} */ (['low', 'medium', 'high'])
for (const q of SMOOTH_QUALS) {
  n += 1
  SPECS.push({
    n,
    slug: `imageSmoothingQuality ${q}`,
    idea: `Canvas2D imageSmoothingQuality = ${q} before drawImage`,
    extra: { labToCanvasCtx: { imageSmoothingQuality: q } },
  })
}

// 4) shadow* sweep (via monkeypatch helpers in fo-fix-monkeypatch.js)
const SHADOW_VARIANTS = [
  { slug: 'shadow none', monkeypatch: null },
  { slug: 'shadow soft', monkeypatch: 'tc-lab-w6-shadow-soft' },
  { slug: 'shadow soft red', monkeypatch: 'tc-lab-w6-shadow-soft-red' },
  { slug: 'shadow blur 1', monkeypatch: 'tc-lab-w6-shadow-blur-1' },
  { slug: 'shadow blur 4', monkeypatch: 'tc-lab-w6-shadow-blur-4' },
  { slug: 'shadow offset 0,0', monkeypatch: 'tc-lab-w6-shadow-offset-0-0' },
  { slug: 'shadow offset 1,0', monkeypatch: 'tc-lab-w6-shadow-offset-1-0' },
  { slug: 'shadow offset 2,2', monkeypatch: 'tc-lab-w6-shadow-offset-2-2' },
  // extra probe: ensure we include one non-shadow transform MP for interaction coverage
  { slug: 'rotate 90 center (mp)', monkeypatch: 'tc-lab-w6-rotate-90-center' },
]

for (const sh of SHADOW_VARIANTS) {
  n += 1
  SPECS.push({
    n,
    slug: sh.slug,
    idea: `Canvas2D pre-draw monkeypatch: ${sh.slug}`,
    extra: sh.monkeypatch ? { monkeypatch: sh.monkeypatch } : {},
  })
}

// 5) shadow* × imageSmoothingQuality low/high interaction probes
for (const sh of SHADOW_VARIANTS) {
  if (!sh.monkeypatch) continue
  for (const q of /** @type {const} */ (['low', 'high'])) {
    n += 1
    SPECS.push({
      n,
      slug: `${sh.slug} + imageSmoothingQuality ${q}`,
      idea: `Monkeypatch: ${sh.slug}; plus Canvas2D imageSmoothingQuality=${q}`,
      extra: {
        monkeypatch: sh.monkeypatch,
        labToCanvasCtx: { imageSmoothingQuality: q },
      },
    })
  }
}

if (SPECS.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave10-ctx.js: expected 70 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 70) {
  throw new Error('recipes-tocanvas-lab-wave10-ctx.js: duplicate slugs in SPECS')
}

/** @param {FoFixRecipe} r */
function recipeKey(r) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join('|') : (r.monkeypatch ?? '')
  return [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
  ].join('\0')
}

/** @type {FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  const inject = restExtra.inject ?? 'both'
  const useBaseline = inject === 'both' && extraCss === undefined
  /** @type {FoFixRecipe} */
  return {
    id: `tc-lab-w10-ctx-${num}`,
    label: `tc-lab-w10-ctx #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: restExtra.rasterPatch ?? 'lab-toCanvas',
    category: restExtra.category ?? 'tocanvas',
    active: restExtra.active ?? true,
    notes: `Wave-10 ctx knobs sweep; ${spec.slug}; FO raster only — no text bypass.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const key = recipeKey(r)
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave10-ctx.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Wave 6 — lab-toCanvas transform probes (tc-lab-w6-tr-001..070).
 *
 * Transform focus:
 * - ctx.save/restore wrappers
 * - translate/scale/rotate before drawImage
 * - resetTransform / setTransform identity
 * - setTransform aspect-matrix from drawImage destination box (structural)
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w6-tr-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const BASES = [
  {
    slug: 'base',
    idea: 'lab-toCanvas baseline (no extra CSS)',
    extra: { inject: 'both' },
  },
  {
    slug: 'FO baseline',
    idea: 'FO_BASELINE_CSS at capture + lab-toCanvas raster',
    extra: { inject: 'both', css: FO_BASELINE_CSS },
  },
  {
    slug: 'int-vb + FO',
    idea: 'integer-viewbox + FO_BASELINE_CSS (structural SVG root snap)',
    extra: { inject: 'both', css: FO_BASELINE_CSS, svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'H2 raster normalize',
    idea: 'H2_RASTER_NORMALIZE_CSS (structural FO normalize) + lab-toCanvas',
    extra: { inject: 'both', css: H2_RASTER_NORMALIZE_CSS },
  },
  {
    slug: 'Chromium copy + FO',
    idea: 'Chromium font-kerning copies + FO_BASELINE_CSS + lab-toCanvas',
    extra: { inject: 'both', css: FO_BASELINE_CSS + CHROMIUM_COPY },
  },
]

/** @type {{ slug: string, idea: string, monkeypatch: import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch }[]} */
const TRANSFORMS = [
  { slug: 'save/restore', idea: 'Wrap drawImage in ctx.save/restore', monkeypatch: 'tc-lab-w6-save-restore-draw' },
  { slug: 'translate +0.5', idea: 'ctx.translate(0.5, 0.5) before drawImage', monkeypatch: 'tc-lab-w6-translate-half' },
  { slug: 'translate -0.5', idea: 'ctx.translate(-0.5, -0.5) before drawImage', monkeypatch: 'tc-lab-w6-translate-neg-half' },
  { slug: 'translate +0.25', idea: 'ctx.translate(0.25, 0.25) before drawImage', monkeypatch: 'tc-lab-w6-translate-quarter' },
  { slug: 'scale(1,1)', idea: 'ctx.scale(1, 1) before drawImage', monkeypatch: 'tc-lab-w6-scale-unity' },
  {
    slug: 'scale dpr-compensate',
    idea: 'Scale by inverse current transform scale (structural getTransform-derived)',
    monkeypatch: 'tc-lab-w6-scale-dpr-compensate',
  },
  { slug: 'rotate(0)', idea: 'ctx.rotate(0) before drawImage', monkeypatch: 'tc-lab-w6-rotate-identity' },
  { slug: 'rotate 180° center', idea: 'Rotate π around destination box center', monkeypatch: 'tc-lab-w6-rotate-180-center' },
  { slug: 'rotate 90° center', idea: 'Rotate π/2 around destination box center', monkeypatch: 'tc-lab-w6-rotate-90-center' },
  {
    slug: 'resetTransform',
    idea: 'Call ctx.resetTransform() (or setTransform identity) right before drawImage',
    monkeypatch: 'tc-lab-w6-resetTransform-before-draw',
  },
  { slug: 'setTransform identity', idea: 'ctx.setTransform(1,0,0,1,0,0) before drawImage', monkeypatch: 'tc-lab-w6-setTransform-identity' },
  { slug: 'reset then identity', idea: 'resetTransform then setTransform identity', monkeypatch: 'tc-lab-w6-reset-then-identity' },
  {
    slug: 'aspect matrix fit',
    idea: 'setTransform(sx,0,0,sy,tx,ty) from dest box; preserve aspect (contain)',
    monkeypatch: 'tc-lab-w6-aspect-matrix-fit',
  },
  {
    slug: 'aspect matrix fill',
    idea: 'setTransform(sx,0,0,sy,tx,ty) from dest box; preserve aspect (cover)',
    monkeypatch: 'tc-lab-w6-aspect-matrix-fill',
  },
]

/** @type {{ n: number, base: (typeof BASES)[number], tf: (typeof TRANSFORMS)[number] }[]} */
const SPECS = []
let n = 0
for (const base of BASES) {
  for (const tf of TRANSFORMS) {
    n++
    SPECS.push({ n, base, tf })
  }
}

if (SPECS.length !== 70) {
  throw new Error(`recipes-tocanvas-lab-wave6-transform.js: expected 70 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.base.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w6-tr-${num}`,
    label: `tc-lab-w6-tr #${spec.n}: ${spec.base.slug} + ${spec.tf.slug}`,
    idea: `${spec.base.idea}; ${spec.tf.idea}.`,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'both',
    category: 'tocanvas-custom',
    active: true,
    rasterPatch: 'lab-toCanvas',
    monkeypatch: spec.tf.monkeypatch,
    notes: `Wave 6 lab-toCanvas transform probe; ${spec.base.slug} + ${spec.tf.slug}; no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave6-transform.js: expected 70 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.radicalOptions ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave6-transform.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


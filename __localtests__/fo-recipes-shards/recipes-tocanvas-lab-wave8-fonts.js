/**
 * Wave-8 toCanvas fonts-ready matrix — tc-lab-w8-001..060.
 *
 * Focus: font readiness gates inside the lab-toCanvas fork:
 * - document.fonts.ready before raster load/decode
 * - optional decode-interval waits before drawImage
 * - bitmap-vs-image source variants
 *
 * rasterPatch: lab-toCanvas only (no src/ edits). No text bypass.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'
 
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'
 
const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
 
/** @type {{ key: string, label: string, idea: string, labLoadPipeline?: string }[]} */
const PIPELINES = [
  {
    key: 'default',
    label: 'default pipeline',
    idea: 'baseline: no explicit fonts.ready gate (loadLabRasterSource default path)',
    labLoadPipeline: 'default',
  },
  {
    key: 'fonts-ready',
    label: 'fonts.ready before decode',
    idea: 'await document.fonts.ready before image load/decode (no interval wait)',
    labLoadPipeline: 'fonts-ready',
  },
  {
    key: 'fonts-ready-interval',
    label: 'fonts.ready + decode interval',
    idea: 'await document.fonts.ready then decode + interval wait (drawImageInterval-style)',
    labLoadPipeline: 'fonts-ready-interval',
  },
  {
    key: 'fonts-ready-decode',
    label: 'fonts.ready + decode only',
    idea: 'await document.fonts.ready then decode (no decode-interval wait)',
    labLoadPipeline: 'fonts-ready-decode',
  },
  {
    key: 'fonts-ready-bitmap',
    label: 'fonts.ready + createImageBitmap',
    idea: 'await document.fonts.ready then createImageBitmap draw source',
    labLoadPipeline: 'fonts-ready-bitmap',
  },
  {
    key: 'interval-then-bitmap',
    label: 'interval then bitmap',
    idea: 'decode interval wait, then createImageBitmap draw source (no fonts gate)',
    labLoadPipeline: 'interval-then-bitmap',
  },
]
 
/** @type {{ slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const COMBOS = [
  {
    slug: 'raster-only',
    idea: 'raster inject only (no capture CSS patch)',
    extra: { inject: 'raster' },
  },
  {
    slug: 'FO baseline both',
    idea: 'FO_BASELINE_CSS at capture+raster (inject both)',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'H2 normalize both',
    idea: 'H2_RASTER_NORMALIZE_CSS at capture+raster (inject both)',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'FO + Chromium copies',
    idea: 'FO baseline + Chromium font-kerning / smoothing copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },
  {
    slug: 'H2 + Chromium copies',
    idea: 'H2 normalize + Chromium font-kerning / smoothing copies',
    css: H2_RASTER_NORMALIZE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },
  {
    slug: 'FO + leaf strut',
    idea: 'FO baseline + flex/grid leaf min-size strut',
    css: FO_BASELINE_CSS + LEAF,
    extra: { inject: 'both' },
  },
  {
    slug: 'integer-viewbox',
    idea: 'integer-viewbox snap before lab-toCanvas draw',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'round-dims',
    idea: 'round-dims root width/height snap before raster',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'round-dims' },
  },
  {
    slug: 'int-floor',
    idea: 'int-floor root dims before raster',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'int-floor' },
  },
  {
    slug: 'int-vb + H2 normalize',
    idea: 'integer-viewbox + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
]
 
if (PIPELINES.length !== 6) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-fonts.js: expected 6 pipelines, got ${PIPELINES.length}`,
  )
}
if (COMBOS.length !== 10) {
  throw new Error(`recipes-tocanvas-lab-wave8-fonts.js: expected 10 combos, got ${COMBOS.length}`)
}
 
/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const pipe of PIPELINES) {
  for (const combo of COMBOS) {
    n += 1
    SPECS.push({
      n,
      slug: `${pipe.key} — ${combo.slug}`,
      idea: `${pipe.idea}; ${combo.idea}`,
      css: combo.css,
      extra: {
        rasterPatch: 'lab-toCanvas',
        labLoadPipeline: pipe.labLoadPipeline,
        ...combo.extra,
      },
    })
  }
}
 
if (SPECS.length !== 60) {
  throw new Error(`recipes-tocanvas-lab-wave8-fonts.js: expected 60 specs, got ${SPECS.length}`)
}
 
const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 60) {
  throw new Error('recipes-tocanvas-lab-wave8-fonts.js: duplicate slugs in SPECS')
}
 
/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w8-${num}`,
    label: `tc-lab-w8 #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave-8 fonts-ready toCanvas probes; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})
 
if (RECIPES.length !== 60) {
  throw new Error(`recipes-tocanvas-lab-wave8-fonts.js: expected 60 recipes, got ${RECIPES.length}`)
}
 
const seenIds = new Set()
for (const r of RECIPES) {
  if (seenIds.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave8-fonts.js: duplicate id ${r.id}`)
  seenIds.add(r.id)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  if (r.textBypass) {
    throw new Error(`${r.id}: must not enable textBypass in wave8 fonts recipes`)
  }
}
 
const seenKeys = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    JSON.stringify(r.labToCanvasTiming ?? null),
    r.svgRootRound ?? '',
    r.radicalPatch ?? '',
    r.css,
  ].join('\0')
  if (seenKeys.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave8-fonts.js: duplicate recipe key at ${r.id}`)
  }
  seenKeys.add(key)
}
 
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


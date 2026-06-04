/**
 * Lab toCanvas wave-9 — parallel canvas microtask/macrotask scheduling probes.
 * 80 recipes: tc-lab-w9-{001..080} = 10 timing hooks × 8 structural CSS combos.
 *
 * Hooks: queueMicrotask, Promise.resolve, setTimeout(0), scheduler.postTask (if available).
 * Apply before drawImage only via labToCanvasOpts.drawBefore; rasterPatch stays lab-toCanvas
 * (FO raster; no text bypass).
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const COMBOS = [
  {
    slug: 'raster-only',
    idea: 'lab-toCanvas — raster inject only (no capture CSS patch)',
    extra: { inject: 'raster' },
  },
  {
    slug: 'FO baseline both',
    idea: 'FO_BASELINE_CSS at capture+raster (inject both)',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'integer-viewbox',
    idea: 'integer-viewbox snap before lab toCanvas draw',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'round-dims',
    idea: 'round-dims root width/height snap',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'round-dims' },
  },
  {
    slug: 'int-floor',
    idea: 'int-floor root dims before lab toCanvas',
    css: FO_BASELINE_CSS,
    extra: { inject: 'both', svgRootRound: 'int-floor' },
  },
  {
    slug: 'H2 raster normalize',
    idea: 'H2_RASTER_NORMALIZE_CSS structural FO block',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both' },
  },
  {
    slug: 'int-vb + H2 normalize',
    idea: 'integer-viewbox + H2_RASTER_NORMALIZE_CSS',
    css: H2_RASTER_NORMALIZE_CSS,
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    slug: 'Chromium copy',
    idea: 'FO baseline + Chromium font-kerning / smoothing copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },
]

if (COMBOS.length !== 8) {
  throw new Error(`recipes-tocanvas-lab-wave9-micro.js: expected 8 combos, got ${COMBOS.length}`)
}

/** @type {readonly { steps: (import('../fo-fix-toCanvas.js').LabToCanvasDrawBeforeStep | import('../fo-fix-toCanvas.js').LabToCanvasDrawBeforeStep[]), label: string, idea: string }[]} */
const TIMING = [
  { steps: 'microtask', label: 'microtask', idea: 'queueMicrotask before drawImage' },
  { steps: 'microtask2', label: 'microtask2', idea: 'two microtasks before drawImage' },
  { steps: 'promise0', label: 'promise0', idea: 'Promise.resolve() before drawImage' },
  { steps: 'promise2', label: 'promise2', idea: 'two Promise.resolve turns before drawImage' },
  { steps: 'timeout0', label: 'timeout0', idea: 'setTimeout(0) before drawImage' },
  { steps: 'postTask', label: 'postTask', idea: 'scheduler.postTask(background) before drawImage (fallback timeout0)' },
  { steps: 'postTaskUser', label: 'postTaskUser', idea: 'scheduler.postTask(user-visible) before drawImage (fallback timeout0)' },
  { steps: ['promise0', 'microtask'], label: 'promise+mt', idea: 'Promise.resolve then microtask before drawImage' },
  { steps: ['microtask', 'timeout0'], label: 'mt+timeout0', idea: 'microtask then timeout0 before drawImage' },
  { steps: ['postTask', 'microtask'], label: 'postTask+mt', idea: 'postTask then microtask before drawImage (fallback timeout0)' },
]

if (TIMING.length !== 10) {
  throw new Error(`recipes-tocanvas-lab-wave9-micro.js: expected 10 timing hooks, got ${TIMING.length}`)
}

/** @type {{ n: number, slug: string, idea: string, css?: string, monkeypatch: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const t of TIMING) {
  for (const combo of COMBOS) {
    n += 1
    SPECS.push({
      n,
      slug: `draw ${t.label} / ${combo.slug}`,
      idea: `${t.idea} — ${combo.idea}`,
      css: combo.css,
      drawBefore: t.steps,
      extra: combo.extra,
    })
  }
}

if (SPECS.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-micro.js: expected 80 specs, got ${SPECS.length}`,
  )
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 80) {
  throw new Error('recipes-tocanvas-lab-wave9-micro.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra, drawBefore } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w9-${num}`,
    label: `tc-lab-w9 #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    labToCanvasOpts: { drawBefore },
    category: 'tocanvas',
    active: true,
    notes: `Wave-9 parallel canvas timing; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave9-micro.js: expected 80 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (!/^tc-lab-w9-/.test(r.id)) {
    throw new Error(`recipes-tocanvas-lab-wave9-micro.js: invalid id ${r.id}`)
  }
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts?.drawBefore ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave9-micro.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

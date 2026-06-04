/**
 * Lab toCanvas wave 10 — idle/tick timing probes (tc-lab-w10-idle-001..070).
 * drawBefore: requestIdleCallback, setTimeout chains, scheduler.yield, MessageChannel tick.
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
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
    slug: 'Chromium copy',
    idea: 'FO baseline + Chromium font-kerning / smoothing copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    extra: { inject: 'both' },
  },
]

if (COMBOS.length !== 7) {
  throw new Error(`recipes-tocanvas-lab-wave10-idle.js: expected 7 combos, got ${COMBOS.length}`)
}

/** @type {{ slug: string, idea: string, timing: import('../fo-fix-toCanvas.js').LabToCanvasTimingHooks }[]} */
const TIMINGS = [
  { slug: 'idle', idea: 'requestIdleCallback (fallback rAF1)', timing: { drawBefore: ['idle'] } },
  { slug: 'timeout0', idea: 'setTimeout(0)', timing: { drawBefore: ['timeout0'] } },
  { slug: 'timeout16', idea: 'setTimeout(16)', timing: { drawBefore: ['timeout16'] } },
  { slug: 'timeout0x2', idea: 'setTimeout(0) chain ×2', timing: { drawBefore: ['timeout0', 'timeout0'] } },
  {
    slug: 'idle+timeout0',
    idea: 'idle then setTimeout(0)',
    timing: { drawBefore: ['idle', 'timeout0'] },
  },
  {
    slug: 'microtask2+idle',
    idea: 'queueMicrotask chain ×2 then idle',
    timing: { drawBefore: ['microtask2', 'idle'] },
  },
  {
    slug: 'msgchan',
    idea: 'MessageChannel tick',
    timing: { drawBefore: ['messageChannel'] },
  },
  {
    slug: 'msgchan+idle',
    idea: 'MessageChannel tick then idle',
    timing: { drawBefore: ['messageChannel', 'idle'] },
  },
  {
    slug: 'schedYield',
    idea: 'scheduler.yield (fallback microtask)',
    timing: { drawBefore: ['schedulerYield'] },
  },
  {
    slug: 'schedYield+idle',
    idea: 'scheduler.yield then idle',
    timing: { drawBefore: ['schedulerYield', 'idle'] },
  },
]

if (TIMINGS.length !== 10) {
  throw new Error(
    `recipes-tocanvas-lab-wave10-idle.js: expected 10 timings, got ${TIMINGS.length}`,
  )
}

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = []
let n = 0
for (const t of TIMINGS) {
  for (const combo of COMBOS) {
    n += 1
    SPECS.push({
      n,
      slug: `${t.slug} ${combo.slug}`,
      idea: `lab-toCanvas drawBefore=${t.slug} — ${combo.idea}`,
      css: combo.css,
      extra: { ...combo.extra, labToCanvasTiming: t.timing, rasterPatch: 'lab-toCanvas' },
    })
  }
}

if (SPECS.length !== 70) {
  throw new Error(`recipes-tocanvas-lab-wave10-idle.js: expected 70 specs, got ${SPECS.length}`)
}

const slugSet = new Set(SPECS.map((s) => s.slug))
if (slugSet.size !== 70) {
  throw new Error('recipes-tocanvas-lab-wave10-idle.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w10-idle-${num}`,
    label: `tc-lab-w10-idle #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    category: 'tocanvas',
    active: true,
    notes:
      `Wave-10 idle/tick draw timing probes; ${spec.slug}; ` +
      'FO raster only — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave10-idle.js: expected 70 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.svgRootRound ?? '',
    r.labPreRaster ?? '',
    JSON.stringify(r.labToCanvasTiming ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave10-idle.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


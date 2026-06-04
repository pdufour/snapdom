/**
 * Lab toCanvas wave3 — SVG/CSS filter vs ctx.filter vs composite probes (tc-lab-w3-flt-001..050).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js reads recipe.labToCanvasOpts.ctxFilter
 * and recipe.labToCanvasCtx.filter / globalCompositeOperation.
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-flt-*'
 * Merge:
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'baseline (no filter)',
    idea: 'lab-toCanvas baseline (no svg filter, no ctx.filter)',
    extra: { inject: 'both' },
  },

  // SVG/CSS filter only (raster inject).
  {
    n: 2,
    slug: 'svg filter blur(1px)',
    idea: 'Apply CSS filter blur(1px) on SVG root only (raster inject)',
    css: `${FO_BASELINE_CSS}svg{filter:blur(1px)!important}`,
    extra: { inject: 'raster' },
  },
  {
    n: 3,
    slug: 'svg filter contrast(1.25)',
    idea: 'Apply CSS filter contrast(1.25) on SVG root only (raster inject)',
    css: `${FO_BASELINE_CSS}svg{filter:contrast(1.25)!important}`,
    extra: { inject: 'raster' },
  },
  {
    n: 4,
    slug: 'svg filter grayscale(1)',
    idea: 'Apply CSS filter grayscale(1) on SVG root only (raster inject)',
    css: `${FO_BASELINE_CSS}svg{filter:grayscale(1)!important}`,
    extra: { inject: 'raster' },
  },
  {
    n: 5,
    slug: 'svg filter saturate(1.5)',
    idea: 'Apply CSS filter saturate(1.5) on SVG root only (raster inject)',
    css: `${FO_BASELINE_CSS}svg{filter:saturate(1.5)!important}`,
    extra: { inject: 'raster' },
  },
  {
    n: 6,
    slug: 'svg filter hue-rotate(90deg)',
    idea: 'Apply CSS filter hue-rotate(90deg) on SVG root only (raster inject)',
    css: `${FO_BASELINE_CSS}svg{filter:hue-rotate(90deg)!important}`,
    extra: { inject: 'raster' },
  },
  {
    n: 7,
    slug: 'svg filter drop-shadow',
    idea: 'Apply CSS filter drop-shadow on SVG root only (raster inject)',
    css: `${FO_BASELINE_CSS}svg{filter:drop-shadow(2px 2px 0 rgba(0,0,0,0.35))!important}`,
    extra: { inject: 'raster' },
  },

  // ctx.filter only (canvas pipeline).
  {
    n: 8,
    slug: 'ctx.filter blur(1px)',
    idea: 'Set ctx.filter = blur(1px) during drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'blur(1px)' } },
  },
  {
    n: 9,
    slug: 'ctx.filter contrast(1.25)',
    idea: 'Set ctx.filter = contrast(1.25) during drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'contrast(1.25)' } },
  },
  {
    n: 10,
    slug: 'ctx.filter grayscale(1)',
    idea: 'Set ctx.filter = grayscale(1) during drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'grayscale(1)' } },
  },
  {
    n: 11,
    slug: 'ctx.filter saturate(1.5)',
    idea: 'Set ctx.filter = saturate(1.5) during drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'saturate(1.5)' } },
  },
  {
    n: 12,
    slug: 'ctx.filter hue-rotate(90deg)',
    idea: 'Set ctx.filter = hue-rotate(90deg) during drawImage',
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'hue-rotate(90deg)' } },
  },
  {
    n: 13,
    slug: 'ctx.filter drop-shadow',
    idea: 'Set ctx.filter = drop-shadow(...) during drawImage',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { ctxFilter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.35))' },
    },
  },

  // globalCompositeOperation variants (ctx only).
  { n: 14, slug: 'gco copy', idea: 'Draw with globalCompositeOperation=copy', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'copy' } } },
  { n: 15, slug: 'gco source-over', idea: 'Draw with globalCompositeOperation=source-over', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'source-over' } } },
  { n: 16, slug: 'gco source-in', idea: 'Draw with globalCompositeOperation=source-in', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'source-in' } } },
  { n: 17, slug: 'gco source-atop', idea: 'Draw with globalCompositeOperation=source-atop', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'source-atop' } } },
  { n: 18, slug: 'gco destination-in', idea: 'Draw with globalCompositeOperation=destination-in', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'destination-in' } } },
  { n: 19, slug: 'gco destination-atop', idea: 'Draw with globalCompositeOperation=destination-atop', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'destination-atop' } } },
  { n: 20, slug: 'gco xor', idea: 'Draw with globalCompositeOperation=xor', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'xor' } } },
  { n: 21, slug: 'gco lighter', idea: 'Draw with globalCompositeOperation=lighter', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'lighter' } } },
  { n: 22, slug: 'gco screen', idea: 'Draw with globalCompositeOperation=screen', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'screen' } } },
  { n: 23, slug: 'gco multiply', idea: 'Draw with globalCompositeOperation=multiply', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'multiply' } } },
  { n: 24, slug: 'gco difference', idea: 'Draw with globalCompositeOperation=difference', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'difference' } } },

  // Combination rows: svg filter + ctx.filter + composite.
  {
    n: 25,
    slug: 'svg blur + ctx blur',
    idea: 'SVG CSS filter blur + ctx.filter blur during draw',
    css: `${FO_BASELINE_CSS}svg{filter:blur(1px)!important}`,
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'blur(1px)' } },
  },
  {
    n: 26,
    slug: 'svg grayscale + ctx contrast',
    idea: 'SVG CSS filter grayscale + ctx.filter contrast during draw',
    css: `${FO_BASELINE_CSS}svg{filter:grayscale(1)!important}`,
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'contrast(1.25)' } },
  },
  {
    n: 27,
    slug: 'svg saturate + ctx hue-rotate',
    idea: 'SVG CSS filter saturate + ctx.filter hue-rotate during draw',
    css: `${FO_BASELINE_CSS}svg{filter:saturate(1.5)!important}`,
    extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'hue-rotate(90deg)' } },
  },
  {
    n: 28,
    slug: 'svg drop-shadow + ctx drop-shadow',
    idea: 'SVG CSS filter drop-shadow + ctx.filter drop-shadow during draw',
    css: `${FO_BASELINE_CSS}svg{filter:drop-shadow(2px 2px 0 rgba(0,0,0,0.35))!important}`,
    extra: {
      inject: 'raster',
      labToCanvasOpts: { ctxFilter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.35))' },
    },
  },
  {
    n: 29,
    slug: 'ctx blur + gco copy',
    idea: 'ctx.filter blur + globalCompositeOperation copy',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { ctxFilter: 'blur(1px)' },
      labToCanvasCtx: { globalCompositeOperation: 'copy' },
    },
  },
  {
    n: 30,
    slug: 'ctx grayscale + gco difference',
    idea: 'ctx.filter grayscale + globalCompositeOperation difference',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { ctxFilter: 'grayscale(1)' },
      labToCanvasCtx: { globalCompositeOperation: 'difference' },
    },
  },
  {
    n: 31,
    slug: 'svg blur + gco multiply',
    idea: 'SVG CSS filter blur + globalCompositeOperation multiply',
    css: `${FO_BASELINE_CSS}svg{filter:blur(1px)!important}`,
    extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'multiply' } },
  },
  {
    n: 32,
    slug: 'svg hue-rotate + gco screen',
    idea: 'SVG CSS filter hue-rotate + globalCompositeOperation screen',
    css: `${FO_BASELINE_CSS}svg{filter:hue-rotate(90deg)!important}`,
    extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'screen' } },
  },

  // Clip + filter combined (exercises clipAfterBg).
  {
    n: 33,
    slug: 'clip diamond + ctx blur',
    idea: 'Clip diamond + ctx.filter blur during draw',
    extra: { inject: 'raster', labToCanvasOpts: { clip: 'path-diamond', ctxFilter: 'blur(1px)' } },
  },
  {
    n: 34,
    slug: 'clip circle + ctx contrast after bg',
    idea: 'Clip circle after bg + ctx.filter contrast during draw',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { clip: 'circle-center', clipAfterBg: true, ctxFilter: 'contrast(1.25)' },
    },
  },
  {
    n: 35,
    slug: 'clip inset + gco source-in',
    idea: 'Inset clip + globalCompositeOperation source-in',
    extra: {
      inject: 'raster',
      labToCanvasOpts: { clip: 'rect-inset-2pct' },
      labToCanvasCtx: { globalCompositeOperation: 'source-in' },
    },
  },

  // Fill the remaining rows with small structural variations.
  { n: 36, slug: 'ctx invert-ish (contrast+saturate)', idea: 'ctx.filter contrast + saturate chain', extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'contrast(1.25) saturate(1.5)' } } },
  { n: 37, slug: 'ctx blur then contrast', idea: 'ctx.filter blur then contrast chain', extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'blur(1px) contrast(1.25)' } } },
  { n: 38, slug: 'ctx grayscale then blur', idea: 'ctx.filter grayscale then blur chain', extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'grayscale(1) blur(1px)' } } },
  { n: 39, slug: 'svg contrast + ctx contrast', idea: 'SVG contrast + ctx contrast', css: `${FO_BASELINE_CSS}svg{filter:contrast(1.25)!important}`, extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'contrast(1.25)' } } },
  { n: 40, slug: 'svg grayscale + ctx grayscale', idea: 'SVG grayscale + ctx grayscale', css: `${FO_BASELINE_CSS}svg{filter:grayscale(1)!important}`, extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'grayscale(1)' } } },
  { n: 41, slug: 'gco overlay', idea: 'Draw with globalCompositeOperation=overlay', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'overlay' } } },
  { n: 42, slug: 'gco darken', idea: 'Draw with globalCompositeOperation=darken', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'darken' } } },
  { n: 43, slug: 'gco lighten', idea: 'Draw with globalCompositeOperation=lighten', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'lighten' } } },
  { n: 44, slug: 'gco hard-light', idea: 'Draw with globalCompositeOperation=hard-light', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'hard-light' } } },
  { n: 45, slug: 'gco soft-light', idea: 'Draw with globalCompositeOperation=soft-light', extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'soft-light' } } },
  { n: 46, slug: 'ctx blur + gco overlay', idea: 'ctx.filter blur + globalCompositeOperation overlay', extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'blur(1px)' }, labToCanvasCtx: { globalCompositeOperation: 'overlay' } } },
  { n: 47, slug: 'ctx saturate + gco screen', idea: 'ctx.filter saturate + globalCompositeOperation screen', extra: { inject: 'raster', labToCanvasOpts: { ctxFilter: 'saturate(1.5)' }, labToCanvasCtx: { globalCompositeOperation: 'screen' } } },
  { n: 48, slug: 'svg blur + gco overlay', idea: 'SVG blur + globalCompositeOperation overlay', css: `${FO_BASELINE_CSS}svg{filter:blur(1px)!important}`, extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'overlay' } } },
  { n: 49, slug: 'svg drop-shadow + gco multiply', idea: 'SVG drop-shadow + globalCompositeOperation multiply', css: `${FO_BASELINE_CSS}svg{filter:drop-shadow(2px 2px 0 rgba(0,0,0,0.35))!important}`, extra: { inject: 'raster', labToCanvasCtx: { globalCompositeOperation: 'multiply' } } },
  { n: 50, slug: 'clip round-8 + svg grayscale', idea: 'Clip round-8 + SVG grayscale (clip after bg)', css: `${FO_BASELINE_CSS}svg{filter:grayscale(1)!important}`, extra: { inject: 'raster', labToCanvasOpts: { clip: 'round-8', clipAfterBg: true } } },
]

if (SPECS.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-wave3-filter.js: expected 50 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 50) {
  throw new Error('recipes-tocanvas-lab-wave3-filter.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-flt-${num}`,
    label: `tc-lab-w3-flt #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: spec.css ?? FO_BASELINE_CSS,
    inject: spec.extra.inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab filter/composite probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-filter.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


/**
 * Lab toCanvas wave3 — CanvasRenderingContext2D.clip() probes (tc-lab-w3-clip-001..050).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js reads recipe.labToCanvasOpts.clip.
 *
 * Matrix:
 *   node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-clip-*'
 * Merge:
 *   node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  { n: 1, slug: 'rect-full before bg', idea: 'Clip full rect before background and draw', extra: { labToCanvasOpts: { clip: 'rect-full', clipAfterBg: false } } },
  { n: 2, slug: 'rect-full after bg', idea: 'Clip full rect after background, before draw', extra: { labToCanvasOpts: { clip: 'rect-full', clipAfterBg: true } } },
  { n: 3, slug: 'inset 1px before bg', idea: 'Inset clip (1px) before background and draw', extra: { labToCanvasOpts: { clip: 'rect-inset-1px', clipAfterBg: false } } },
  { n: 4, slug: 'inset 2px before bg', idea: 'Inset clip (2px) before background and draw', extra: { labToCanvasOpts: { clip: 'rect-inset-2px', clipAfterBg: false } } },
  { n: 5, slug: 'inset 1pct before bg', idea: 'Inset clip (1%) before background and draw', extra: { labToCanvasOpts: { clip: 'rect-inset-1pct', clipAfterBg: false } } },
  { n: 6, slug: 'inset 2pct before bg', idea: 'Inset clip (2%) before background and draw', extra: { labToCanvasOpts: { clip: 'rect-inset-2pct', clipAfterBg: false } } },
  { n: 7, slug: 'inset 5pct before bg', idea: 'Inset clip (5%) before background and draw', extra: { labToCanvasOpts: { clip: 'rect-inset-5pct', clipAfterBg: false } } },
  { n: 8, slug: 'top-half', idea: 'Clip top half only', extra: { labToCanvasOpts: { clip: 'rect-top-half' } } },
  { n: 9, slug: 'bottom-half', idea: 'Clip bottom half only', extra: { labToCanvasOpts: { clip: 'rect-bottom-half' } } },
  { n: 10, slug: 'left-half', idea: 'Clip left half only', extra: { labToCanvasOpts: { clip: 'rect-left-half' } } },
  { n: 11, slug: 'right-half', idea: 'Clip right half only', extra: { labToCanvasOpts: { clip: 'rect-right-half' } } },
  { n: 12, slug: 'center-25', idea: 'Clip centered box (25% margin)', extra: { labToCanvasOpts: { clip: 'rect-center-25' } } },
  { n: 13, slug: 'center-50', idea: 'Clip centered box (50% width/height)', extra: { labToCanvasOpts: { clip: 'rect-center-50' } } },
  { n: 14, slug: 'center-75', idea: 'Clip centered box (12.5% margin)', extra: { labToCanvasOpts: { clip: 'rect-center-75' } } },
  { n: 15, slug: 'center-90', idea: 'Clip centered box (5% margin)', extra: { labToCanvasOpts: { clip: 'rect-center-90' } } },
  { n: 16, slug: 'round-2', idea: 'Clip rounded rect r=2', extra: { labToCanvasOpts: { clip: 'round-2' } } },
  { n: 17, slug: 'round-4', idea: 'Clip rounded rect r=4', extra: { labToCanvasOpts: { clip: 'round-4' } } },
  { n: 18, slug: 'round-8', idea: 'Clip rounded rect r=8', extra: { labToCanvasOpts: { clip: 'round-8' } } },
  { n: 19, slug: 'round-12', idea: 'Clip rounded rect r=12', extra: { labToCanvasOpts: { clip: 'round-12' } } },
  { n: 20, slug: 'round-16', idea: 'Clip rounded rect r=16', extra: { labToCanvasOpts: { clip: 'round-16' } } },
  { n: 21, slug: 'round-max', idea: 'Clip rounded rect r=max (pill/circle fallback)', extra: { labToCanvasOpts: { clip: 'round-max' } } },
  { n: 22, slug: 'circle-center', idea: 'Clip centered circle', extra: { labToCanvasOpts: { clip: 'circle-center' } } },
  { n: 23, slug: 'ellipse-center', idea: 'Clip centered ellipse (full bounds)', extra: { labToCanvasOpts: { clip: 'ellipse-center' } } },
  { n: 24, slug: 'ellipse-wide', idea: 'Clip centered ellipse (wide)', extra: { labToCanvasOpts: { clip: 'ellipse-wide' } } },
  { n: 25, slug: 'ellipse-tall', idea: 'Clip centered ellipse (tall)', extra: { labToCanvasOpts: { clip: 'ellipse-tall' } } },
  { n: 26, slug: 'tri-top', idea: 'Clip triangle (apex top)', extra: { labToCanvasOpts: { clip: 'path-triangle-top' } } },
  { n: 27, slug: 'tri-bottom', idea: 'Clip triangle (apex bottom)', extra: { labToCanvasOpts: { clip: 'path-triangle-bottom' } } },
  { n: 28, slug: 'diamond', idea: 'Clip diamond path', extra: { labToCanvasOpts: { clip: 'path-diamond' } } },
  { n: 29, slug: 'hexagon', idea: 'Clip hexagon path', extra: { labToCanvasOpts: { clip: 'path-hexagon' } } },
  { n: 30, slug: 'star-5', idea: 'Clip 5-point star path', extra: { labToCanvasOpts: { clip: 'path-star-5' } } },
  { n: 31, slug: 'wave-top', idea: 'Clip wave top edge path', extra: { labToCanvasOpts: { clip: 'path-wave-top' } } },
  { n: 32, slug: 'evenodd hole 25', idea: 'Clip with centered hole (25% margin) using evenodd', extra: { labToCanvasOpts: { clip: 'evenodd-hole-25' } } },
  { n: 33, slug: 'evenodd hole 50', idea: 'Clip with centered hole (12.5% margin) using evenodd', extra: { labToCanvasOpts: { clip: 'evenodd-hole-50' } } },
  { n: 34, slug: 'chamfer-8', idea: 'Clip chamfered rectangle (8px)', extra: { labToCanvasOpts: { clip: 'rect-chamfer-8' } } },
  { n: 35, slug: 'chamfer-16', idea: 'Clip chamfered rectangle (16px)', extra: { labToCanvasOpts: { clip: 'rect-chamfer-16' } } },

  // Repeat key shapes but toggle clipAfterBg for background interaction (kept structural; no magic numbers).
  { n: 36, slug: 'inset 1px after bg', idea: 'Inset clip (1px) after background, before draw', extra: { labToCanvasOpts: { clip: 'rect-inset-1px', clipAfterBg: true } } },
  { n: 37, slug: 'inset 2px after bg', idea: 'Inset clip (2px) after background, before draw', extra: { labToCanvasOpts: { clip: 'rect-inset-2px', clipAfterBg: true } } },
  { n: 38, slug: 'round-8 after bg', idea: 'Rounded clip (8) after background, before draw', extra: { labToCanvasOpts: { clip: 'round-8', clipAfterBg: true } } },
  { n: 39, slug: 'circle after bg', idea: 'Circle clip after background, before draw', extra: { labToCanvasOpts: { clip: 'circle-center', clipAfterBg: true } } },
  { n: 40, slug: 'diamond after bg', idea: 'Diamond clip after background, before draw', extra: { labToCanvasOpts: { clip: 'path-diamond', clipAfterBg: true } } },

  // Composite + clip interactions (no src/ promotion; lab-only knobs).
  { n: 41, slug: 'clip inset + copy', idea: 'Inset clip + globalCompositeOperation copy', extra: { labToCanvasOpts: { clip: 'rect-inset-2pct' }, labToCanvasCtx: { globalCompositeOperation: 'copy' } } },
  { n: 42, slug: 'clip inset + source-in', idea: 'Inset clip + globalCompositeOperation source-in', extra: { labToCanvasOpts: { clip: 'rect-inset-2pct' }, labToCanvasCtx: { globalCompositeOperation: 'source-in' } } },
  { n: 43, slug: 'clip inset + destination-in', idea: 'Inset clip + globalCompositeOperation destination-in', extra: { labToCanvasOpts: { clip: 'rect-inset-2pct' }, labToCanvasCtx: { globalCompositeOperation: 'destination-in' } } },
  { n: 44, slug: 'clip inset + xor', idea: 'Inset clip + globalCompositeOperation xor', extra: { labToCanvasOpts: { clip: 'rect-inset-2pct' }, labToCanvasCtx: { globalCompositeOperation: 'xor' } } },

  // Canvas filter + clip interactions.
  { n: 45, slug: 'clip + blur', idea: 'Clip diamond + ctx.filter blur(1px)', extra: { labToCanvasOpts: { clip: 'path-diamond', ctxFilter: 'blur(1px)' } } },
  { n: 46, slug: 'clip + contrast', idea: 'Clip ellipse + ctx.filter contrast(1.25)', extra: { labToCanvasOpts: { clip: 'ellipse-center', ctxFilter: 'contrast(1.25)' } } },
  { n: 47, slug: 'clip + grayscale', idea: 'Clip round-8 + ctx.filter grayscale(1)', extra: { labToCanvasOpts: { clip: 'round-8', ctxFilter: 'grayscale(1)' } } },
  { n: 48, slug: 'clip + saturate', idea: 'Clip circle + ctx.filter saturate(1.5)', extra: { labToCanvasOpts: { clip: 'circle-center', ctxFilter: 'saturate(1.5)' } } },
  { n: 49, slug: 'clip + hue-rotate', idea: 'Clip wave-top + ctx.filter hue-rotate(90deg)', extra: { labToCanvasOpts: { clip: 'path-wave-top', ctxFilter: 'hue-rotate(90deg)' } } },
  { n: 50, slug: 'clip + drop-shadow', idea: 'Clip chamfer-8 + ctx.filter drop-shadow', extra: { labToCanvasOpts: { clip: 'rect-chamfer-8', ctxFilter: 'drop-shadow(2px 2px 0 rgba(0,0,0,0.35))' } } },
]

if (SPECS.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-wave3-clip.js: expected 50 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 50) {
  throw new Error('recipes-tocanvas-lab-wave3-clip.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { extra } = spec
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-clip-${num}`,
    label: `tc-lab-w3-clip #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extra.css ?? FO_BASELINE_CSS,
    inject: extra.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas clip probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
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
    r.labPreRaster ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasCtx ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-clip.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


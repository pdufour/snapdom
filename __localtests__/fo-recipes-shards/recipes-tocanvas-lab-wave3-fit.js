/**
 * Lab toCanvas wave3 — drawImage fit/contain/cover (natural vs outW/outH ratios only).
 * tc-lab-w3-fit-001..030 → lab-toCanvas; 031..060 → lab-toCanvas-frac (+ viewBox frac origin).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-fit-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import { LAB_DRAW_FIT_MODES } from '../fo-fix-toCanvas-draw-fit.js'

/** @type {import('../fo-fix-toCanvas-draw-fit.js').LabDrawFitMode} */
const FIT_MODES = [...LAB_DRAW_FIT_MODES]

if (FIT_MODES.length !== 30) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-fit.js: expected 30 drawFit modes, got ${FIT_MODES.length}`,
  )
}

/** @type {{ n: number, drawFit: import('../fo-fix-toCanvas-draw-fit.js').LabDrawFitMode, frac: boolean, slug: string, idea: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = FIT_MODES.flatMap((drawFit, i) => {
  const nBase = i + 1
  const slug = drawFit.replace(/-/g, ' ')
  const ideaContain =
    drawFit.startsWith('contain') || drawFit.startsWith('width-fit') || drawFit.startsWith('height-fit')
      ? 'letterbox via min(nat/out) scale — aspect preserved in dest'
      : drawFit.startsWith('cover')
        ? 'center-crop via max(nat/out) scale — aspect preserved in source'
        : drawFit === 'native-center'
          ? 'natural px size centered in out box — no scale'
          : drawFit === 'fill'
            ? 'stretch full outW×outH — no aspect preserve'
            : `${drawFit} — structural ratio from natural vs harness out dims`

  return [
    {
      n: nBase,
      drawFit,
      frac: false,
      slug: `lab-tc ${slug}`,
      idea: `lab-toCanvas drawFit=${drawFit}; ${ideaContain}`,
    },
    {
      n: nBase + 30,
      drawFit,
      frac: true,
      slug: `lab-tc-frac ${slug}`,
      idea: `lab-toCanvas-frac drawFit=${drawFit} + h2 viewBox frac origin; ${ideaContain}`,
      extra: { radicalPatch: 'math-floor-viewbox-stash-frac' },
    },
  ]
})

if (SPECS.length !== 60) {
  throw new Error(`recipes-tocanvas-lab-wave3-fit.js: expected 60 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 60) {
  throw new Error('recipes-tocanvas-lab-wave3-fit.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const rasterPatch = spec.frac ? 'lab-toCanvas-frac' : 'lab-toCanvas'
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-fit-${num}`,
    label: `tc-lab-w3-fit #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch,
    category: 'tocanvas',
    active: true,
    labToCanvasOpts: { drawFit: spec.drawFit },
    notes: `Wave3 fit probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-fit.js: expected 60 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas' && r.rasterPatch !== 'lab-toCanvas-frac') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas or lab-toCanvas-frac`)
  }
  const key = [
    r.rasterPatch,
    r.labToCanvasOpts?.drawFit ?? '',
    r.radicalPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-fit.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Lab toCanvas wave7 — drawImage argument variants (tc-lab-w7-draw-001..090).
 *
 * Focus: drawImage variants (mirror flips, partial src, dest smaller than canvas, structural centering).
 * Raster: lab-toCanvas-frac → __localtests__/fo-fix-toCanvas-frac-draw.js
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-draw-*'
 */

import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ key: string, label: string, labToCanvasOpts: Record<string, unknown> }} */
const BASES = [
  { key: 'fit-fill', label: 'drawFit fill', labToCanvasOpts: { drawFit: 'fill', useFracDraw: true } },
  { key: 'fit-contain-center', label: 'drawFit contain-center', labToCanvasOpts: { drawFit: 'contain-center', useFracDraw: true } },
  { key: 'fit-cover-center', label: 'drawFit cover-center', labToCanvasOpts: { drawFit: 'cover-center', useFracDraw: true } },
  { key: 'fit-cover-top-left', label: 'drawFit cover-top-left', labToCanvasOpts: { drawFit: 'cover-top-left', useFracDraw: true } },
  { key: 'fit-native-center', label: 'drawFit native-center', labToCanvasOpts: { drawFit: 'native-center', useFracDraw: true } },
  { key: 'd9-src-min', label: 'draw9Frac d9-src-min', labToCanvasOpts: { draw9Frac: 'd9-src-min', useFracDraw: true } },
  { key: 'd9-src-xy-out', label: 'draw9Frac d9-src-xy-out', labToCanvasOpts: { draw9Frac: 'd9-src-xy-out', useFracDraw: true } },
  { key: 'd9-dest-xy', label: 'draw9Frac d9-dest-xy', labToCanvasOpts: { draw9Frac: 'd9-dest-xy', useFracDraw: true } },
  { key: 'd9-grid', label: 'draw9Frac d9-grid', labToCanvasOpts: { draw9Frac: 'd9-grid', useFracDraw: true } },
]

/** @type {{ key: string, label: string, idea: string, monkeypatch?: import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch | import('../fo-fix-recipe-shared.js').FoFixMonkeyPatch[] }} */
const VARIANTS = [
  {
    key: 'baseline',
    label: 'baseline drawImage',
    idea: 'No drawImage monkeypatch; reference for wave7 variants.',
  },
  {
    key: 'flip-x',
    label: 'mirror flip X (scale -1)',
    idea: 'Mirror horizontally by applying scale(-1,1) around the draw box.',
    monkeypatch: 'tc-lab-w6-flip-x-center',
  },
  {
    key: 'flip-y',
    label: 'mirror flip Y (scale -1)',
    idea: 'Mirror vertically by applying scale(1,-1) around the draw box.',
    monkeypatch: 'tc-lab-w6-flip-y-center',
  },
  {
    key: 'flip-xy',
    label: 'mirror flip X+Y (scale -1)',
    idea: 'Mirror both axes by applying flip-x then flip-y around the draw box.',
    monkeypatch: ['tc-lab-w6-flip-x-center', 'tc-lab-w6-flip-y-center'],
  },
  {
    key: 'src-inset-25',
    label: 'partial src inset 25%',
    idea: 'Crop the source rect to the centered 50% region (structural 25% inset).',
    monkeypatch: 'tc-lab-w7-draw-src-inset-25',
  },
  {
    key: 'src-left-half',
    label: 'partial src left half',
    idea: 'Crop the source rect to the left 50% region (structural half).',
    monkeypatch: 'tc-lab-w7-draw-src-left-half',
  },
  {
    key: 'dest-90-center',
    label: 'dest 90% centered',
    idea: 'Shrink the destination rect to 90% and recenter via (origDw-newDw)/2 offsets.',
    monkeypatch: 'tc-lab-w7-draw-dest-shrink-90-center',
  },
  {
    key: 'dest-75-center',
    label: 'dest 75% centered',
    idea: 'Shrink the destination rect to 75% and recenter via (origDw-newDw)/2 offsets.',
    monkeypatch: 'tc-lab-w7-draw-dest-shrink-75-center',
  },
  {
    key: 'dest-half-center',
    label: 'dest 50% centered',
    idea: 'Shrink the destination rect to 50% and recenter via (origDw-newDw)/2 offsets.',
    monkeypatch: 'tc-lab-w7-draw-dest-half-center',
  },
  {
    key: 'src-inset+dest-90',
    label: 'partial src inset + dest 90%',
    idea: 'Combine partial source crop with a smaller centered destination rect.',
    monkeypatch: ['tc-lab-w7-draw-src-inset-25', 'tc-lab-w7-draw-dest-shrink-90-center'],
  },
]

if (BASES.length * VARIANTS.length !== 90) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-draw.js: expected 90 specs (${BASES.length}×${VARIANTS.length}), got ${BASES.length * VARIANTS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []
let n = 0
for (const base of BASES) {
  for (const v of VARIANTS) {
    n += 1
    const num = String(n).padStart(3, '0')
    const slug = `${v.key} / ${base.key}`
    /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
    const recipe = {
      id: `tc-lab-w7-draw-${num}`,
      label: `tc-lab-w7-draw #${n}: ${slug}`,
      idea: `lab-toCanvas-frac + ${base.label} + ${v.label} — ${v.idea}`,
      css: FO_BASELINE_CSS,
      inject: 'both',
      rasterPatch: 'lab-toCanvas-frac',
      category: 'tocanvas',
      active: true,
      labToCanvasOpts: base.labToCanvasOpts,
      notes: `Wave7 drawImage variants; ${slug}; FO raster only — no text bypass.`,
    }
    if (v.monkeypatch) recipe.monkeypatch = v.monkeypatch
    RECIPES.push(recipe)
  }
}

if (RECIPES.length !== 90) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-draw.js: expected 90 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas-frac') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas-frac`)
  }
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave7-draw.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


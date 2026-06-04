/**
 * Lab toCanvas fork — drawImage customization batch (tc-lab-di-001..060).
 * Raster: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Draw variants selected by monkeypatch tc-lab-di-NNN (see fo-fix-toCanvas-custom-draw.js).
 *
 * Merge:  node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-di-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'
import {
  drawKindForTcLabDiRecipe,
  preRasterExtraForTcLabDiRecipe,
  tcLabDiPatchId,
} from '../fo-fix-toCanvas-custom-draw.js'

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = Array.from({ length: 60 }, (_v, i) => {
  const n = i + 1
  const num = String(n).padStart(3, '0')
  const kind = drawKindForTcLabDiRecipe(n)
  const extra = preRasterExtraForTcLabDiRecipe(n)

  const inject = extra.inject ?? 'raster'
  const css = inject === 'both' ? FO_BASELINE_CSS : ''

  return {
    id: `tc-lab-di-${num}`,
    label: `tc-lab-di #${num}: ${kind}`,
    idea:
      `Lab toCanvas drawImage variant: ${kind} (custom draw hook); ` +
      `plus structural pre-raster tier ${Math.floor((n - 1) / 12) + 1}`,
    css,
    inject,
    category: 'tocanvas',
    active: true,
    rasterPatch: 'lab-toCanvas',
    monkeypatch: tcLabDiPatchId(n),
    notes: 'Custom drawImage batch; no text bypass; lab-toCanvas only.',
    ...extra,
  }
})

if (RECIPES.length !== 60) {
  throw new Error(
    `recipes-tocanvas-lab-custom-draw.js: expected 60 recipes, got ${RECIPES.length}`,
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
    throw new Error(
      `recipes-tocanvas-lab-custom-draw.js: duplicate recipe key ${r.id}`,
    )
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


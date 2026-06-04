/**
 * Wave-12 FO text @ canvas raster — strut paint origin, decode fork, drawImage meta.
 *
 * Calibrate (headed):
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w12-*' --open-browser
 *
 * NOT_FIXED @ 0.06 px integer ink gate (2026-06-02 headed calibrate @ dpr=1):
 *   baseline |canvasΔ|=2.797 · w7=−0.203 · best w12 ties w7 (overflow-visible / leaf translateY / trim / dpr-inverse).
 *   Range-only FO y → 0.797 · viewBox y → 5.797 · double-FO linebox → 2.797 · createImageBitmap+w7 → null ink.
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labLoadPipeline?: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w12-rfork-y-strut-range-preserve',
    label: 'tc-fix-w12: Range strut FO y preserve height',
    idea: 'Raster fork: FO y −lhStrutFoYAdjustPx (Range meta) without height/clip change',
    notes: 'Layout-derived Range subpixel strut; preserve stretch FO box; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-strut-range-preserve-height' },
  },
  {
    id: 'tc-fix-w12-rfork-y-half-leading-overflow-visible',
    label: 'tc-fix-w12: w7 y + overflow visible',
    idea: 'Raster fork: FO y −½(lh−fs) + foreignObject overflow:visible',
    notes: 'Strut nudge without clip side-effects; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-overflow-visible' },
  },
  {
    id: 'tc-fix-w12-rfork-viewbox-y-half-leading',
    label: 'tc-fix-w12: viewBox y half-leading',
    idea: 'Raster fork: viewBox minY −½(lh−fs) instead of foreignObject y attr',
    notes: 'Chromium paint-origin via viewBox; FO height unchanged; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'viewbox-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w12-rfork-leaf-translate-y-half-leading',
    label: 'tc-fix-w12: leaf translateY half-leading',
    idea: 'Raster fork: text leaf translateY(−½(lh−fs)) inside FO (not FO y attr)',
    notes: 'Decode CSS inject on text leaves from meta; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w12-bitmap-w7-y',
    label: 'tc-fix-w12: createImageBitmap + w7 y',
    idea: 'createImageBitmap decode (high) + raster fork FO y −½(lh−fs)',
    notes: 'Decode path A/B vs img.decode; FO strut fork on same SVG; FO raster only.',
    labLoadPipeline: 'create-image-bitmap',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w12-bitmap-premultiply-w7-y',
    label: 'tc-fix-w12: bitmap premultiply + w7 y',
    idea: 'createImageBitmap premultiplyAlpha + raster fork FO y −½(lh−fs)',
    notes: 'Bitmap decode options vs default img path; FO raster only.',
    labLoadPipeline: 'create-image-bitmap-premultiply',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w12-rfork-w7-y-meta-ink-frac-draw',
    label: 'tc-fix-w12: w7 y + ink frac draw',
    idea: 'Raster fork FO y −½(lh−fs) + drawImage dy from inkTopFrac fractional part',
    notes: 'Meta ink fraction blit (experimental); not gate-tuned px; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      metaInkTopFracDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w12-rfork-y-half-leading-trim',
    label: 'tc-fix-w12: w7 y + leading-trim',
    idea: 'Raster fork: FO y −½(lh−fs) + leading-trim/text-box-trim on text leaves',
    notes: 'w7 strut + decode-only trim combo; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box' },
  },
  {
    id: 'tc-fix-w12-rfork-double-fo-inner-linebox',
    label: 'tc-fix-w12: double FO inner linebox',
    idea: 'Raster fork: outer FO full stretch + inner FO height=linePx around text leaf',
    notes: 'Nested FO line box without inner y nudge; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'double-fo-outer-full-inner-linebox' },
  },
  {
    id: 'tc-fix-w12-rfork-y-half-leading-dpr-inverse',
    label: 'tc-fix-w12: FO y halfLeading/dpr',
    idea: 'Raster fork: FO y −½(lh−fs)/exportDpr for HiDPI SVG root scale',
    notes: 'dpr-aware strut on FO y at decode; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-dpr-inverse-meta' },
  },
  {
    id: 'tc-fix-w12-rfork-leaf-translate-y-strut-range',
    label: 'tc-fix-w12: leaf translateY Range strut',
    idea: 'Raster fork: text leaf translateY(−lhStrutFoYAdjustPx) from Range meta',
    notes: 'Range subpixel on leaf transform not FO attr; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'leaf-translate-y-strut-range-meta' },
  },
  {
    id: 'tc-fix-w12-rfork-w7-y-range-subpx-draw',
    label: 'tc-fix-w12: w7 y + Range subpx draw',
    idea: 'Raster fork FO y −½(lh−fs) + draw dy += lhStrutRangeSubpixelPx',
    notes: 'Closes w7 −0.203 residual via meta subpixel blit; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      strutRangeSubpixelDrawDy: true,
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 12) {
  throw new Error(
    `recipes-tocanvas-fix-wave12.js: expected 12 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, labLoadPipeline, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w12',
    active: true,
    labToCanvasOpts,
    ...(labLoadPipeline ? { labLoadPipeline } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 12) {
  throw new Error('recipes-tocanvas-fix-wave12.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave12.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W12_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

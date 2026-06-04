/**
 * Wave-13 FO text @ canvas raster — decode/raster strut fixes (Research Round 5).
 *
 * Calibrate:
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w12-*,tc-fix-w13-*' --open-browser
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labLoadPipeline?: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts }} */
const SPECS = [
  {
    id: 'tc-fix-w13-rfork-y-w7-minus-range-subpixel',
    label: 'tc-fix-w13: w7 y − Range subpx',
    idea: 'Raster fork: FO y −(½(lh−fs) − lhStrutRangeSubpixelPx) from meta',
    notes: 'w7 half-leading with Range subpixel subtracted from nudge; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-w7-minus-range-subpixel-meta' },
  },
  {
    id: 'tc-fix-w13-rfork-viewbox-y-half-leading',
    label: 'tc-fix-w13: viewBox y half-leading',
    idea: 'Raster fork: viewBox minY −½(lh−fs) instead of foreignObject y attr',
    notes: 'Chromium paint-origin via viewBox translateY; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'viewbox-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w13-rfork-y-half-leading-each-fo',
    label: 'tc-fix-w13: FO y each foreignObject',
    idea: 'Raster fork: FO y −½(lh−fs) on every foreignObject in tree (DOM walk)',
    notes: 'Nested/multi FO strut nudge; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-each-fo-meta' },
  },
  {
    id: 'tc-fix-w13-rfork-leaf-translate-y-half-leading',
    label: 'tc-fix-w13: leaf translateY half-leading',
    idea: 'Raster fork: text leaf translateY(−½(lh−fs)) at decode CSS',
    notes: 'Inner text leaf transform, not FO y attr; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w13-bitmap-w7-y',
    label: 'tc-fix-w13: createImageBitmap + w7 y',
    idea: 'forceCreateImageBitmap in fo-fix-toCanvas + raster fork FO y −½(lh−fs)',
    notes: 'Decode path A/B vs img.decode with w7 fork; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      forceCreateImageBitmap: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w13-settle100-w7-y',
    label: 'tc-fix-w13: decode settle 100ms + w7 y',
    idea: 'decodeSettle + decodeWaitMs 100 + raster fork FO y −½(lh−fs)',
    notes: 'Round-5 timing probe — expect 0 if decode settle ruled out; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      decodeSettle: true,
      decodeWaitMs: 100,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w13-rfork-fo-clip-path-linebox',
    label: 'tc-fix-w13: FO clip-path linebox',
    idea: 'Raster fork: clip-path inset to typographic line box (no height attr)',
    notes: 'Line box clip without FO height shrink; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-clip-path-linebox-meta' },
  },
  {
    id: 'tc-fix-w13-rfork-fo-root-fs-lh-meta',
    label: 'tc-fix-w13: FO root fs/lh meta px',
    idea: 'Raster fork: font-size + line-height on FO root from live meta px',
    notes: 'Not 1.35 ratio — explicit lh/fs from probe; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-root-fs-lh-meta-px' },
  },
  {
    id: 'tc-fix-w13-rfork-y-half-leading-dpr-root',
    label: 'tc-fix-w13: w7 y + dpr SVG root',
    idea: 'Raster fork FO y −½(lh−fs) + SVG root width/height × dpr + 9-arg draw',
    notes: 'HiDPI SVG root scale with matching canvas blit; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
      dprScaledSvgRootDraw: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w13-rfork-y-partial-90-half-leading',
    label: 'tc-fix-w13: FO y 0.9× halfLeading',
    idea: 'Raster fork: FO y −0.9×½(lh−fs) from live meta (structural ratio)',
    notes: 'Partial strut fraction — not gate-tuned px; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-partial-90-half-leading-meta' },
  },
  {
    id: 'tc-fix-w13-rfork-combo-w7-clip-linebox',
    label: 'tc-fix-w13: w7 y + clip linebox',
    idea: 'Raster fork: FO y −½(lh−fs) + clip-path inset to line box',
    notes: 'Strut nudge + line box clip combo; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-clip-linebox' },
  },
  {
    id: 'tc-fix-w13-bitmap-premultiply-w7-y',
    label: 'tc-fix-w13: bitmap premultiply + w7 y',
    idea: 'createImageBitmap premultiplyAlpha + raster fork FO y −½(lh−fs)',
    notes: 'Bitmap decode options vs default img path; FO raster only.',
    labLoadPipeline: 'create-image-bitmap-premultiply',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
]

if (SPECS.length !== 12) {
  throw new Error(
    `recipes-tocanvas-fix-wave13.js: expected 12 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, labLoadPipeline, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w13',
    active: true,
    labToCanvasOpts,
    ...(labLoadPipeline ? { labLoadPipeline } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 12) {
  throw new Error('recipes-tocanvas-fix-wave13.js: duplicate recipe ids')
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
    throw new Error(`recipes-tocanvas-fix-wave13.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W13_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

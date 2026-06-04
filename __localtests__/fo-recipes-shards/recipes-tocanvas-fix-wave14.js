/**
 * Wave-14 FO text @ canvas raster — decode/raster strut fixes (Research Round 5/6).
 *
 * Calibrate:
 *   node __localtests__/fo-fix-lab.mjs --calibrate --landmarks Home,Products \
 *     --ids 'product-baseline,tc-fix-w7-rfork-fo-y-half-leading-meta,tc-fix-w13-*,tc-fix-w14-*' --open-browser
 */
/** @type {{ id: string, label: string, idea: string, notes: string, labLoadPipeline?: string, labToCanvasOpts?: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, labToCanvasCtx?: import('../fo-fix-toCanvas.js').LabToCanvasCtxOptions, harnessSnapdom?: Record<string, unknown>, labFixtureProbeCss?: { cssW?: number, cssH?: number } }} */
const SPECS = [
  {
    id: 'tc-fix-w14-rfork-glyph-padding-w7-y',
    label: 'tc-fix-w14: w7 y + glyph padding',
    idea: 'Raster fork: FO y −½(lh−fs) + padding-top:0.1em on text leaves at decode',
    notes: 'Glyph box padding probe on text leaf; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-glyph-padding-leaf' },
  },
  {
    id: 'tc-fix-w14-rfork-y-linepx-height-only',
    label: 'tc-fix-w14: w7 y + FO height linePx',
    idea: 'Raster fork: FO y −½(lh−fs) + FO height=live line px (no overflow CSS)',
    notes: 'Typographic line box height attr + strut nudge; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-linepx-height-only' },
  },
  {
    id: 'tc-fix-w14-rfork-anchor-parent-lh1-translate-y',
    label: 'tc-fix-w14: div lh1 + anchor translateY',
    idea: 'Raster fork: parent div line-height:1 + translateY(−½(lh−fs)) on <a> only',
    notes: 'Inner wrapper strut on anchor leaf; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'anchor-parent-lh1-translate-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w14-rfork-svg-root-overflow-w7-y',
    label: 'tc-fix-w14: SVG root overflow + w7 y',
    idea: 'Raster fork: FO y −½(lh−fs) + SVG root style overflow:visible',
    notes: 'Paint slack on SVG root vs FO clip; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-svg-root-overflow-visible' },
  },
  {
    id: 'tc-fix-w14-rfork-nested-fo-y-w7-y',
    label: 'tc-fix-w14: nested FO y w7',
    idea: 'Raster fork: FO y −½(lh−fs) on every foreignObject in tree (DOM walk)',
    notes: 'Multiple FO y nudge on nested FO elements; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-nested-fo-y-meta' },
  },
  {
    id: 'tc-fix-w14-bitmap-w7-y',
    label: 'tc-fix-w14: createImageBitmap + w7 y',
    idea: 'forceCreateImageBitmap + raster fork FO y −½(lh−fs)',
    notes: 'Decode path A/B vs img.decode with w7 fork; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      forceCreateImageBitmap: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w14-smooth-off-w7-y',
    label: 'tc-fix-w14: smooth off + w7 y',
    idea: 'drawImage imageSmoothingEnabled false + raster fork FO y −½(lh−fs)',
    notes: 'Canvas decode blit without smoothing; FO raster only.',
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
    labToCanvasCtx: { imageSmoothingEnabled: false },
  },
  {
    id: 'tc-fix-w14-rfork-clip-inset-zero-w7-y',
    label: 'tc-fix-w14: clip inset(0) + w7 y',
    idea: 'Raster fork: FO y −½(lh−fs) + clip-path:inset(0) on FO',
    notes: 'Full-box clip vs linebox inset; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-clip-inset-zero' },
  },
  {
    id: 'tc-fix-w14-rfork-y-range-subpixel-only',
    label: 'tc-fix-w14: FO y Range subpx only',
    idea: 'Raster fork: FO y −lhStrutRangeSubpixelPx only (no full half-leading)',
    notes: 'Range subpixel-only nudge from meta; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-range-subpixel-only-meta' },
  },
  {
    id: 'tc-fix-w14-rfork-viewbox-y-half-leading',
    label: 'tc-fix-w14: viewBox y half-leading',
    idea: 'Raster fork: viewBox minY −½(lh−fs) instead of foreignObject y attr',
    notes: 'Chromium paint-origin via viewBox translateY; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'viewbox-y-half-leading-meta' },
  },
  {
    id: 'tc-fix-w14-capture-ink-align-w7-fork',
    label: 'tc-fix-w14: ink meta + w7 subpx blit',
    idea: 'Capture experimentalCaptureInkMeta + w7 FO y fork + inkAlignSubpixelOnly draw dy',
    notes: 'No double half-leading blit — w7 fork + Range subpixel only; FO raster only.',
    harnessSnapdom: { experimentalCaptureInkMeta: true },
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      inkAlignSubpixelOnly: true,
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w14-display-probe-w7-y',
    label: 'tc-fix-w14: display probe 500×56 + w7',
    idea: 'Lab fixture override 500×56 capture + raster fork FO y −½(lh−fs)',
    notes: 'Larger fixture slack (display stage height) — lab-only probeCss; FO raster only.',
    labFixtureProbeCss: { cssW: 500, cssH: 56 },
    labToCanvasOpts: {
      rasterOnlySvgPatch: 'fo-y-half-leading-meta',
      disableGbcrFracNudge: true,
    },
  },
  {
    id: 'tc-fix-w14-rfork-w7-y-overflow-visible',
    label: 'tc-fix-w14: w7 y + FO overflow visible',
    idea: 'Raster fork: FO y −½(lh−fs) + foreignObject overflow:visible',
    notes: 'Round-5 overflow combo distinct from SVG root overflow; FO raster only.',
    labToCanvasOpts: { rasterOnlySvgPatch: 'combo-fo-y-half-leading-overflow-visible' },
  },
]

if (SPECS.length !== 13) {
  throw new Error(
    `recipes-tocanvas-fix-wave14.js: expected 13 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const {
    labToCanvasOpts,
    labLoadPipeline,
    labToCanvasCtx,
    harnessSnapdom,
    labFixtureProbeCss,
    ...rest
  } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-fix-w14',
    active: true,
    labToCanvasOpts,
    ...(labLoadPipeline ? { labLoadPipeline } : {}),
    ...(labToCanvasCtx ? { labToCanvasCtx } : {}),
    ...(harnessSnapdom ? { harnessSnapdom } : {}),
    ...(labFixtureProbeCss ? { labFixtureProbeCss } : {}),
    ...rest,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 13) {
  throw new Error('recipes-tocanvas-fix-wave14.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasCtx ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.labFixtureProbeCss ?? null),
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-fix-wave14.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_FIX_W14_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

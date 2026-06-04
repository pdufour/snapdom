/**
 * One lab recipe per experimental* flag in src/ (capture → harnessSnapdom, raster → product toCanvas).
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'src-mirror-experimental-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {readonly { flag: string, kind: 'capture' | 'raster', label: string, idea: string }[]} */
const SRC_EXPERIMENTAL_FLAGS = [
  {
    flag: 'experimentalFoTextLayout',
    kind: 'capture',
    label: 'src mirror: experimentalFoTextLayout',
    idea: 'Product capture: Chromium copy-css block + flex min-width:0 + baseline on FO *',
  },
  {
    flag: 'experimentalFoLeadingTrim',
    kind: 'capture',
    label: 'src mirror: experimentalFoLeadingTrim',
    idea: 'Product capture: leading-trim:both on foreignObject *',
  },
  {
    flag: 'experimentalFoTextBoxEdgeAuto',
    kind: 'capture',
    label: 'src mirror: experimentalFoTextBoxEdgeAuto',
    idea: 'Product capture: text-box-edge:auto on FO text leaves',
  },
  {
    flag: 'experimentalFoPinLineHeightFromLive',
    kind: 'capture',
    label: 'src mirror: experimentalFoPinLineHeightFromLive',
    idea: 'Product capture: pin text-leaf line-height from live layout when stretch-inflated',
  },
  {
    flag: 'experimentalFoPinLineHeightOnTextLeaf',
    kind: 'capture',
    label: 'src mirror: experimentalFoPinLineHeightOnTextLeaf',
    idea: 'Product capture: alias for pin text-leaf line-height from live getComputedStyle used px',
  },
  {
    flag: 'experimentalFoTextLeafNormalize',
    kind: 'capture',
    label: 'src mirror: experimentalFoTextLeafNormalize',
    idea: 'Product capture: pin text-leaf line-height, vertical-align, display from live getComputedStyle',
  },
  {
    flag: 'experimentalFoTextLineHeightNormal',
    kind: 'capture',
    label: 'src mirror: experimentalFoTextLineHeightNormal',
    idea: 'Product capture: line-height:normal on FO text leaves at serialize',
  },
  {
    flag: 'experimentalFoTextBaselineFix',
    kind: 'capture',
    label: 'src mirror: experimentalFoTextBaselineFix',
    idea: 'Product capture: text-leaf vertical-align:baseline, display:inline, lh pin at serialize + FO CSS',
  },
  {
    flag: 'experimentalFoFlexTextLeafAlignStart',
    kind: 'capture',
    label: 'src mirror: experimentalFoFlexTextLeafAlignStart',
    idea: 'Product capture: align-self:flex-start on flex/grid text leaves at serialize',
  },
  {
    flag: 'experimentalFoFlexRowAlignCenter',
    kind: 'capture',
    label: 'src mirror: experimentalFoFlexRowAlignCenter',
    idea: 'Product capture: reinforce align-items:center on FO flex containers',
  },
  {
    flag: 'experimentalFoChromiumText',
    kind: 'capture',
    label: 'src mirror: experimentalFoChromiumText',
    idea: 'Product capture: Chromium FO text block (kerning, synthesis, box-sizing, min-width:0)',
  },
  {
    flag: 'experimentalFoFlexRowCenter',
    kind: 'capture',
    label: 'src mirror: experimentalFoFlexRowCenter',
    idea: 'Product capture: global FO flex row align-items:center bundle',
  },
  {
    flag: 'experimentalCaptureIntViewBox',
    kind: 'capture',
    label: 'src mirror: experimentalCaptureIntViewBox',
    idea: 'Product capture: floor SVG viewBox components before raster',
  },
  {
    flag: 'experimentalFoTextGeometric',
    kind: 'capture',
    label: 'src mirror: experimentalFoTextGeometric',
    idea: 'Product capture: text-rendering geometricPrecision + antialiased on FO *',
  },
  {
    flag: 'experimentalRasterDecodeSettle',
    kind: 'raster',
    label: 'src mirror: experimentalRasterDecodeSettle',
    idea: 'Product toCanvas: fonts.ready + decode settle interval before drawImage',
  },
  {
    flag: 'experimentalRasterBackingCeil',
    kind: 'raster',
    label: 'src mirror: experimentalRasterBackingCeil',
    idea: 'Product toCanvas: Math.ceil(out×dpr) backing store dimensions',
  },
  {
    flag: 'experimentalRasterDoubleDecode',
    kind: 'raster',
    label: 'src mirror: experimentalRasterDoubleDecode',
    idea: 'Product toCanvas: second img.decode() after 100ms interval',
  },
  {
    flag: 'experimentalRasterCtxNoScale',
    kind: 'raster',
    label: 'src mirror: experimentalRasterCtxNoScale',
    idea: 'Product toCanvas: skip ctx.scale(dpr); draw in backing pixels',
  },
  {
    flag: 'experimentalRasterPreDecodeRaf',
    kind: 'raster',
    label: 'src mirror: experimentalRasterPreDecodeRaf',
    idea: 'Product toCanvas: offscreen attach + 2× rAF before decode',
  },
  {
    flag: 'experimentalRasterNaturalDims',
    kind: 'raster',
    label: 'src mirror: experimentalRasterNaturalDims',
    idea: 'Product toCanvas: drawImage at natural dimensions (aspect contain)',
  },
  {
    flag: 'experimentalRasterDisableGbcrNudge',
    kind: 'raster',
    label: 'src mirror: experimentalRasterDisableGbcrNudge',
    idea: 'Product toCanvas: skip fractional GBCR drawImage dest nudge',
  },
  {
    flag: 'experimentalCaptureInkMeta',
    kind: 'capture',
    label: 'src mirror: experimentalCaptureInkMeta',
    idea: 'Product capture: store Range ink topInBorder fraction in meta',
  },
  {
    flag: 'experimentalRasterInkAlign',
    kind: 'raster',
    label: 'src mirror: experimentalRasterInkAlign',
    idea: 'Product toCanvas: adjust drawImage dest dy from capture ink meta',
    captureFlags: { experimentalCaptureInkMeta: true },
  },
  {
    flag: 'experimentalRasterMetaInkAlign',
    kind: 'raster',
    label: 'src mirror: experimentalRasterMetaInkAlign',
    idea: 'Product: capture Range ink meta + raster drawImage dy align bundle',
    harnessValue: { experimentalRasterMetaInkAlign: true },
    captureFlags: { experimentalRasterMetaInkAlign: true },
  },
  {
    flag: 'experimentalRasterSvgPatch',
    kind: 'raster',
    label: 'src mirror: experimentalRasterSvgPatch pin-lh-leaf',
    idea: 'Product toCanvas: raster fork pin-lh-leaf on text leaves before decode',
    harnessValue: { experimentalRasterSvgPatch: 'pin-lh-leaf' },
  },
  {
    flag: 'experimentalRasterSvgPatchFoHeightLinebox',
    kind: 'raster',
    label: 'src mirror: experimentalRasterSvgPatch fo-height-linebox',
    idea: 'Product toCanvas: shrink FO to typographic line box height before decode',
    harnessValue: { experimentalRasterSvgPatch: 'fo-height-linebox' },
  },
  {
    flag: 'experimentalRasterSvgPatchFoYHalfLeadingMeta',
    kind: 'raster',
    label: 'src mirror: experimentalRasterSvgPatch fo-y-half-leading-meta',
    idea: 'Product toCanvas: FO y -= live half-leading (lhStrutHalfLeadingPx) before decode',
    harnessValue: { experimentalRasterSvgPatch: 'fo-y-half-leading-meta' },
  },
  {
    flag: 'experimentalRasterSvgPatchComboLhFlexstart',
    kind: 'raster',
    label: 'src mirror: experimentalRasterSvgPatch combo-lh-flexstart',
    idea: 'Product toCanvas: meta lh + FO flex-start + linebox shrink at decode',
    harnessValue: { experimentalRasterSvgPatch: 'combo-lh-flexstart' },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SRC_EXPERIMENTAL_FLAGS.map((def) => {
  const id = `src-mirror-${def.flag}`
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  const recipe = {
    id,
    label: def.label,
    idea: def.idea,
    css: FO_BASELINE_CSS,
    inject: 'both',
    category: 'experimental-src-mirror',
    active: true,
    notes: `Single src flag ${def.flag}; FO raster only — no text bypass.`,
    rasterPatch: def.kind === 'raster' ? 'product-toCanvas' : 'lab-toCanvas',
  }
  if (def.kind === 'capture') {
    recipe.harnessSnapdom = { [def.flag]: true }
  } else if (def.harnessValue) {
    recipe.harnessProductToCanvas = def.harnessValue
    if (def.captureFlags) recipe.harnessSnapdom = def.captureFlags
  } else {
    recipe.harnessProductToCanvas = { [def.flag]: true }
    if (def.captureFlags) recipe.harnessSnapdom = def.captureFlags
  }
  return recipe
})

if (RECIPES.length !== SRC_EXPERIMENTAL_FLAGS.length) {
  throw new Error(
    `recipes-experimental-src-mirror.js: expected ${SRC_EXPERIMENTAL_FLAGS.length} recipes, got ${RECIPES.length}`,
  )
}

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== RECIPES.length) {
  throw new Error('recipes-experimental-src-mirror.js: duplicate recipe ids')
}

export const SRC_MIRROR_EXPERIMENTAL_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

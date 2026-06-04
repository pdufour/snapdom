/**
 * Wave-1 lab toCanvas flags — six distinct FO/raster mechanisms (lab-only).
 * Recipes: `labToCanvasFlag: 'tc-flags-w1-…'` or `labToCanvasFlags: ['…']`.
 * Matrix: `node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-flags-w1-*'`
 */
import { LAB_DECODE_INTERVAL_MS } from './fo-fix-toCanvas-load-pipeline.js'

/** @typedef {import('./fo-fix-recipe-shared.js').LabToCanvasOpts} LabToCanvasOpts */
/** @typedef {import('./fo-fix-recipe-shared.js').FoFixRecipe} FoFixRecipe */

/**
 * @typedef {{
 *   label: string,
 *   idea: string,
 *   notes: string,
 *   rasterCss?: string,
 *   liveSvgPatch?: 'pin-content-lh',
 *   labToCanvasOpts?: LabToCanvasOpts,
 *   labPreRaster?: 'device-grid-floor',
 * }} LabToCanvasFlagDefinition
 */

/** @type {Record<string, LabToCanvasFlagDefinition>} */
export const LAB_TC_FLAGS_W1 = {
  'tc-flags-w1-flex-baseline': {
    label: 'FO flex children align-self:baseline',
    idea: 'Raster inject: foreignObject flex descendants use align-self:baseline (structural cross-axis).',
    notes:
      'FO CSS inject at raster (foNormalize-style global selector, not nav/checkout). ' +
      'Does not bypass FO text raster.',
    rasterCss: 'foreignObject *{align-self:baseline!important}',
  },
  'tc-flags-w1-pin-content-lh': {
    label: 'Pin content line-height from live',
    idea:
      'Inline pin on FO text leaves: content line box / normal probe — not flex-stretched border-box height.',
    notes:
      'Live DOM → serialized FO inline styles before raster. Stretch leaves use normal probe; ' +
      'others use content line box. FO raster only — no text bypass.',
    liveSvgPatch: 'pin-content-lh',
  },
  'tc-flags-w1-leading-trim': {
    label: 'FO leading-trim: both',
    idea: 'Raster inject leading-trim:both on foreignObject * (typography trim probe).',
    notes:
      'Global FO * rule in captured SVG <style> (same inject path as foNormalize bundles). ' +
      'No magic dy / no text bypass.',
    rasterCss: 'foreignObject *{leading-trim:both!important}',
  },
  'tc-flags-w1-decode-fonts-bundle': {
    label: 'decode interval 100ms + fonts.ready',
    idea: `post-decode wait ${LAB_DECODE_INTERVAL_MS}ms then document.fonts.ready before drawImage.`,
    notes:
      'labToCanvas fork only: modern-screenshot decodeInterval + fonts.ready gate. ' +
      'Structural timing — not a raster nudge.',
    labToCanvasOpts: {
      decodeIntervalMs: LAB_DECODE_INTERVAL_MS,
      waitFontsReady: true,
    },
  },
  'tc-flags-w1-backing-ceil-grid': {
    label: 'backing ceil + device-grid floor',
    idea: 'ceil canvas backing store from out×dpr; floor SVG root width/height to device grid pre-raster.',
    notes:
      'labToCanvasOpts.backingRound=ceil plus labPreRaster device-grid-floor on capture SVG. ' +
      'Reconciles HiDPI backing vs root attrs — no fractional drawImage dy fudge.',
    labToCanvasOpts: { backingRound: 'ceil' },
    labPreRaster: 'device-grid-floor',
  },
  'tc-flags-w1-draw-from-backing': {
    label: 'draw dest = backing/dpr',
    idea: 'drawImage dest width/height = canvas.width/dpr and canvas.height/dpr (backing÷dpr reconcile).',
    notes:
      'Uses actual backing store dimensions after snapBackingPx, not pre-round paintW from harness outH. ' +
      'No vDriftFix / no magic translateY.',
    labToCanvasOpts: { drawDest: 'backing-over-dpr' },
  },
}

export const LAB_TC_FLAGS_W1_IDS = /** @type {(keyof typeof LAB_TC_FLAGS_W1)[]} */ (
  Object.keys(LAB_TC_FLAGS_W1)
)

if (LAB_TC_FLAGS_W1_IDS.length !== 6) {
  throw new Error(
    `tocanvas-lab-flags-registry.js: expected 6 tc-flags-w1 flags, got ${LAB_TC_FLAGS_W1_IDS.length}`,
  )
}

/**
 * @param {string} flagId
 * @returns {LabToCanvasFlagDefinition | null}
 */
export function getLabToCanvasFlag(flagId) {
  if (!flagId) return null
  return LAB_TC_FLAGS_W1[flagId] ?? null
}

/**
 * @param {FoFixRecipe | null | undefined} recipe
 * @returns {string[]}
 */
export function listRecipeLabToCanvasFlags(recipe) {
  if (!recipe) return []
  /** @type {string[]} */
  const out = []
  if (recipe.labToCanvasFlag) out.push(recipe.labToCanvasFlag)
  if (Array.isArray(recipe.labToCanvasFlags)) out.push(...recipe.labToCanvasFlags)
  return [...new Set(out.filter(Boolean))]
}

/**
 * Merge flag definitions for a recipe (stable order: single flag, then array extras).
 * @param {FoFixRecipe | null | undefined} recipe
 */
export function resolveLabToCanvasFlags(recipe) {
  const ids = listRecipeLabToCanvasFlags(recipe)
  /** @type {string[]} */
  const rasterCssParts = []
  /** @type {Set<'pin-content-lh'>} */
  const liveSvgPatches = new Set()
  /** @type {LabToCanvasOpts} */
  let labToCanvasOpts = {}
  /** @type {'device-grid-floor' | undefined} */
  let labPreRaster

  for (const id of ids) {
    const def = getLabToCanvasFlag(id)
    if (!def) {
      throw new Error(`resolveLabToCanvasFlags: unknown labToCanvasFlag ${id}`)
    }
    if (def.rasterCss) rasterCssParts.push(def.rasterCss)
    if (def.liveSvgPatch) liveSvgPatches.add(def.liveSvgPatch)
    if (def.labToCanvasOpts) {
      labToCanvasOpts = { ...labToCanvasOpts, ...def.labToCanvasOpts }
    }
    if (def.labPreRaster) labPreRaster = def.labPreRaster
  }

  return {
    flagIds: ids,
    rasterCss: rasterCssParts.length ? rasterCssParts.join('') : '',
    liveSvgPatches: [...liveSvgPatches],
    labToCanvasOpts: Object.keys(labToCanvasOpts).length ? labToCanvasOpts : undefined,
    labPreRaster,
  }
}

/** @type {Readonly<Record<string, unknown>>} */
export const TOCANVAS_LAB_FLAGS_CATALOG = {
  w1FlagIds: LAB_TC_FLAGS_W1_IDS,
}

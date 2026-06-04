/**
 * Wave-1 toCanvas-only probes — lab-toCanvas raster knobs (no capture FO CSS inject).
 *
 * Matrix: npm run debug:tc-only-matrix
 * Dupes: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { LAB_DECODE_INTERVAL_MS } from '../fo-fix-toCanvas-load-pipeline.js'

/** @type {{ id: string, label: string, idea: string, notes: string, labToCanvasOpts: import('../fo-fix-recipe-shared.js').LabToCanvasOpts, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    id: 'tc-only-w1-decode-interval-100',
    label: 'tc-only-w1: decode interval 100ms',
    idea: `post-decode wait ${LAB_DECODE_INTERVAL_MS}ms (modern-screenshot drawImageInterval) before drawImage`,
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: { decodeIntervalMs: LAB_DECODE_INTERVAL_MS },
  },
  {
    id: 'tc-only-w1-decode-triple',
    label: 'tc-only-w1: triple decode + interval',
    idea: 'Three consecutive img.decode() passes + post-decode interval before drawImage',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: {
      decodePasses: 3,
      decodeIntervalMs: LAB_DECODE_INTERVAL_MS,
    },
  },
  {
    id: 'tc-only-w1-backing-ceil',
    label: 'tc-only-w1: backing ceil',
    idea: 'ceil canvas backing store from out×dpr (snapBackingPx ceil)',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: { backingRound: 'ceil' },
  },
  {
    id: 'tc-only-w1-backing-floor',
    label: 'tc-only-w1: backing floor',
    idea: 'floor canvas backing store from out×dpr (snapBackingPx floor)',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: { backingRound: 'floor' },
  },
  {
    id: 'tc-only-w1-draw-natural-dims',
    label: 'tc-only-w1: draw natural dims',
    idea: 'drawImage dest width/height = naturalWidth/Height — no stretch to harness outW/outH',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: { drawDest: 'natural-dims' },
  },
  {
    id: 'tc-only-w1-ctx-no-scale',
    label: 'tc-only-w1: ctx scale off',
    idea: 'labToCanvas ctxScale:false — draw in backing-store device pixels (skip ctx.scale(dpr))',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: { ctxScale: false },
  },
  {
    id: 'tc-only-w1-no-gbcr-frac',
    label: 'tc-only-w1: no gbcr frac nudge',
    idea: 'disableGbcrFracNudge — skip vDriftFix / measuredDest gbcr-frac drawImage dy offsets',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: { disableGbcrFracNudge: true },
  },
  {
    id: 'tc-only-w1-combo-ceil-decode',
    label: 'tc-only-w1: ceil + decode + fonts',
    idea: 'backingRound ceil + decode interval + document.fonts.ready before drawImage',
    notes: 'lab-toCanvas only — no capture inject; FO raster only — no text bypass.',
    labToCanvasOpts: {
      backingRound: 'ceil',
      decodeIntervalMs: LAB_DECODE_INTERVAL_MS,
      waitFontsReady: true,
    },
  },
]

if (SPECS.length !== 8) {
  throw new Error(
    `recipes-tocanvas-only-wave1.js: expected 8 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const { labToCanvasOpts, extra, ...rest } = spec
  return {
    css: '',
    inject: 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tc-only-w1',
    active: true,
    labToCanvasOpts,
    ...rest,
    ...extra,
  }
})

const ids = new Set(RECIPES.map((r) => r.id))
if (ids.size !== 8) {
  throw new Error('recipes-tocanvas-only-wave1.js: duplicate recipe ids')
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.id,
    r.inject,
    r.rasterPatch ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-only-wave1.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const TC_ONLY_W1_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

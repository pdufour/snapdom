/**
 * Wave-9 rasterPatch enumeration — tc-lab-w9-en-001..070.
 *
 * Goal: ensure every runner-supported rasterPatch token/value has at least one
 * recipe row we can matrix / probe (especially lab-toCanvas token forks).
 *
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w9-en-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** Keep stable: mirrors fo-fix-lab-runner SANDBOX_RASTER_PATCHES. */
const RUNNER_RASTER_PATCHES = [
  'none',
  'decode-interval',
  'decode-interval-raf',
  'double-decode',
  'triple-decode',
  'fonts-ready',
  'fonts-ready-interval',
  'double-raf',
  'raf-before-draw',
  'wait-fonts-500ms',
  'direct',
  'blob-url',
  'blob-url-decode-interval',
  'blob-url-fetch-revoke',
  'decode-via-blob',
  'create-image-bitmap',
  'create-image-bitmap-pixelated',
  'device-grid-floor',
  'canvas-pixelated',
  'two-stage',
  'load-event',
  'load-event-interval',
  'pre-decode-dom',
  'offscreen-canvas',
  'will-read-frequently',
  'supersample-downscale',
  'product-toCanvas',
  'lab-toCanvas',
  'lab-toCanvas-decode',
  'lab-toCanvas-frac',
]

/** Keep stable: mirrors fo-fix-lab-raster-patches LAB_RASTER_PATCH_TOKENS. */
const LAB_RASTER_PATCH_TOKENS = [
  'lab-decode-200ms',
  'lab-decode-100ms',
  'lab-decode-off',
  'lab-decode-double',
  'lab-decode-raf',
  'lab-draw-round',
  'lab-draw-frac',
  'lab-backing-floor',
  'lab-backing-ceil',
  'lab-ctx-smooth-off',
]

/** Keep stable: mirrors fo-fix-recipe-shared FoFixRasterPatch lab-wait-* values. */
const LAB_WAIT_PATCHES = [
  'lab-wait-0ms',
  'lab-wait-1ms',
  'lab-wait-16ms',
  'lab-wait-33ms',
  'lab-wait-50ms',
  'lab-wait-100ms',
  'lab-wait-150ms',
  'lab-wait-200ms',
  'lab-wait-300ms',
  'lab-wait-500ms',
]

/** @type {{ slug: string, idea: string, rasterPatch: string, extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const ROWS = [
  ...RUNNER_RASTER_PATCHES.map((rp) => ({
    slug: `runner rasterPatch=${rp}`,
    idea: `Enumerate runner rasterPatch '${rp}'.`,
    rasterPatch: rp,
    extra: { inject: 'raster', css: FO_BASELINE_CSS },
  })),

  ...LAB_RASTER_PATCH_TOKENS.map((rp) => ({
    slug: `lab token rasterPatch=${rp}`,
    idea: `Enumerate lab-toCanvas patch token '${rp}' (runner token fork).`,
    rasterPatch: rp,
    extra: { inject: 'raster', css: FO_BASELINE_CSS },
  })),

  ...LAB_WAIT_PATCHES.map((rp) => ({
    slug: `lab wait rasterPatch=${rp}`,
    idea: `Enumerate lab-toCanvas wait fork '${rp}' (decodeWaitMs).`,
    rasterPatch: rp,
    extra: { inject: 'raster', css: FO_BASELINE_CSS },
  })),

  // Extra coverage: ordered token combos (must keep lab-toCanvas base fork).
  {
    slug: 'lab-toCanvas + decode-100ms + draw-round',
    idea: 'Lab toCanvas base fork with extra decode interval + rounded drawImage args.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-decode-100ms', 'lab-draw-round'],
    },
  },
  {
    slug: 'lab-toCanvas + decode-200ms + draw-round',
    idea: 'Lab toCanvas base fork with longer decode interval + rounded drawImage args.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-decode-200ms', 'lab-draw-round'],
    },
  },
  {
    slug: 'lab-toCanvas + decode-double + draw-round',
    idea: 'Lab toCanvas base fork with decode twice + rounded drawImage args.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-decode-double', 'lab-draw-round'],
    },
  },
  {
    slug: 'lab-toCanvas + decode-raf + draw-round',
    idea: 'Lab toCanvas base fork with rAF before decode + rounded drawImage args.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-decode-raf', 'lab-draw-round'],
    },
  },
  {
    slug: 'lab-toCanvas + backing-floor + ctx-smooth-off',
    idea: 'Lab toCanvas base fork with floor backing store + imageSmoothingEnabled=false.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-backing-floor', 'lab-ctx-smooth-off'],
    },
  },
  {
    slug: 'lab-toCanvas + backing-ceil + ctx-smooth-off',
    idea: 'Lab toCanvas base fork with ceil backing store + imageSmoothingEnabled=false.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-backing-ceil', 'lab-ctx-smooth-off'],
    },
  },
  {
    slug: 'lab-toCanvas + draw-frac + decode-100ms',
    idea: 'Lab toCanvas frac draw fork with extra decode interval.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-draw-frac', 'lab-decode-100ms'],
    },
  },
  {
    slug: 'lab-toCanvas + draw-frac + decode-off',
    idea: 'Lab toCanvas frac draw fork with decode wait disabled.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-draw-frac', 'lab-decode-off'],
    },
  },
  {
    slug: 'lab-toCanvas + draw-round + ctx-smooth-off',
    idea: 'Lab toCanvas base fork with rounded drawImage args + imageSmoothingEnabled=false.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-draw-round', 'lab-ctx-smooth-off'],
    },
  },
  {
    slug: 'lab-toCanvas + decode-double + ctx-smooth-off',
    idea: 'Lab toCanvas base fork with decode twice + imageSmoothingEnabled=false.',
    rasterPatch: 'lab-toCanvas',
    extra: {
      inject: 'raster',
      css: FO_BASELINE_CSS,
      labRasterPatches: ['lab-decode-double', 'lab-ctx-smooth-off'],
    },
  },
]

/** @param {number} n */
function id(n) {
  return `tc-lab-w9-en-${String(n).padStart(3, '0')}`
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = ROWS.map((row, i) => ({
  id: id(i + 1),
  label: row.slug,
  idea: row.idea,
  css: row.extra?.css ?? FO_BASELINE_CSS,
  inject: row.extra?.inject ?? 'raster',
  category: 'tocanvas',
  rasterPatch: row.rasterPatch,
  ...row.extra,
}))

if (FO_FIX_RECIPES_SHARD.length < 60) {
  throw new Error(`wave9 enum expected 60+ recipes, got ${FO_FIX_RECIPES_SHARD.length}`)
}

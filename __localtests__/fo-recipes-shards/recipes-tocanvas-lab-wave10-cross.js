/**
 * Lab toCanvas wave-10 cross product — 150 recipes tc-lab-w10-x-001..150.
 *
 * Cross: each lab-toCanvas fork rasterPatch × top-8 lab rasterPatch tokens.
 * Expanded with a small set of structural FO capture CSS variants to reach 150 rows.
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w10-x-*'
 */
import {
  FO_BASELINE_CSS,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'
const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ key: string, css: string, label: string }[]} */
const CSS_VARIANTS = [
  { key: 'fo', css: FO_BASELINE_CSS, label: 'FO_BASELINE_CSS' },
  { key: 'h2', css: H2_RASTER_NORMALIZE_CSS, label: 'H2_RASTER_NORMALIZE_CSS' },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF, label: 'FO + flex leaf strut' },
  { key: 'chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY, label: 'FO + Chromium copies' },
]

/** Every lab toCanvas fork rasterPatch. */
const FORKS = [
  { key: 'base', rp: 'lab-toCanvas' },
  { key: 'decode', rp: 'lab-toCanvas-decode' },
  { key: 'frac', rp: 'lab-toCanvas-frac' },
  { key: 'roundAll', rp: 'lab-toCanvas-round-all' },
  { key: 'waitDecode', rp: 'lab-toCanvas-wait-decode' },
  { key: 'bitmapFirst', rp: 'lab-toCanvas-bitmap-first' },
]

/**
 * Top-8 lab rasterPatch tokens (from fo-fix-lab-raster-patches.js).
 * These are applied via recipe.labRasterPatches to keep the fork rasterPatch stable.
 */
const TOKENS = [
  'lab-decode-200ms',
  'lab-decode-100ms',
  'lab-decode-off',
  'lab-decode-double',
  'lab-decode-raf',
  'lab-draw-round',
  'lab-draw-frac',
  'lab-backing-floor',
]

/** @param {string} s */
function js(s) {
  return JSON.stringify(s)
}

/** @returns {string} */
function specKey(rp, token, css) {
  return [rp, token, css].join('\0')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []
const seen = new Set()

// 6 forks × 8 tokens × 3 CSS = 144
for (const fork of FORKS) {
  for (const token of TOKENS) {
    for (const cv of CSS_VARIANTS.slice(0, 3)) {
      const key = specKey(fork.rp, token, cv.key)
      if (seen.has(key)) continue
      seen.add(key)
      RECIPES.push({
        id: 'pending',
        label: `w10-x pending: ${fork.rp} + ${token} + ${cv.key}`,
        idea: `Wave-10 cross: ${fork.rp} × ${token} + ${cv.label}.`,
        css: cv.css,
        inject: 'both',
        rasterPatch: fork.rp,
        labRasterPatches: [token],
        category: 'tocanvas',
        active: true,
        notes: 'Wave-10 cross product; FO raster only — no text bypass.',
      })
    }
  }
}

// Add 6 more (chromium CSS) to reach 150.
for (let i = 0; i < FORKS.length && RECIPES.length < 150; i++) {
  const fork = FORKS[i]
  const token = TOKENS[i % TOKENS.length]
  const cv = CSS_VARIANTS[3]
  const key = specKey(fork.rp, token, cv.key)
  if (seen.has(key)) continue
  seen.add(key)
  RECIPES.push({
    id: 'pending',
    label: `w10-x pending: ${fork.rp} + ${token} + ${cv.key}`,
    idea: `Wave-10 cross: ${fork.rp} × ${token} + ${cv.label}.`,
    css: cv.css,
    inject: 'both',
    rasterPatch: fork.rp,
    labRasterPatches: [token],
    category: 'tocanvas',
    active: true,
    notes: 'Wave-10 cross product; FO raster only — no text bypass.',
  })
}

if (RECIPES.length !== 150) {
  throw new Error(`recipes-tocanvas-lab-wave10-cross: expected 150 recipes, got ${RECIPES.length}`)
}

for (let i = 0; i < RECIPES.length; i++) {
  const n = i + 1
  const num = String(n).padStart(3, '0')
  const r = RECIPES[i]
  const fork = r.rasterPatch
  const token = (r.labRasterPatches?.[0] ?? '').trim()
  const cssKey =
    r.css === FO_BASELINE_CSS
      ? 'fo'
      : r.css === H2_RASTER_NORMALIZE_CSS
        ? 'h2'
        : r.css === FO_BASELINE_CSS + LEAF
          ? 'leaf'
          : r.css === FO_BASELINE_CSS + CHROMIUM_COPY
            ? 'chromium'
            : 'css'

  r.id = `tc-lab-w10-x-${num}`
  r.label = `w10-x #${n}: ${fork} + ${token} + ${cssKey}`
}

// In-file dup check (merge script also runs a full repo check).
const ids = new Set()
for (const r of RECIPES) {
  if (ids.has(r.id)) throw new Error(`recipes-tocanvas-lab-wave10-cross: duplicate id ${r.id}`)
  ids.add(r.id)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


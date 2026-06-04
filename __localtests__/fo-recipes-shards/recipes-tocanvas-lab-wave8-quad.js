/**
 * Wave-8 quad raster-knob combos — tc-lab-w8-quad-001..200.
 * 200 recipes: tc-lab-w8-quad-{001..200} — 4-knob combos from top 10 raster knobs.
 * active:true. Raster: lab-toCanvas only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w8-quad-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const COUNT = 200

/**
 * “Top 10 raster knobs” (draw/decode/backing) — all defined in fo-fix-monkeypatch.js.
 * Kept as monkeypatch keys so the runner can apply them consistently.
 */
const TOP10_RASTER_KNOBS = [
  'tc-draw-image-round-all',
  'tc-canvas-backing-ceil',
  'tc-canvas-backing-floor',
  'tc-decode-safari-raf',
  'decode-wrap',
  'image-decode-twice',
  'raf-before-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap',
]

/** @param {number} n */
function pad3(n) {
  return String(n).padStart(3, '0')
}

/**
 * @param {string[]} knobs
 * @returns {string}
 */
function knobsKey(knobs) {
  return knobs.join('|')
}

/**
 * @param {string[]} knobs
 * @returns {string}
 */
function knobsSlug(knobs) {
  return knobs.join(' + ')
}

/**
 * @param {string} a
 * @param {string} b
 */
function cmp(a, b) {
  return a < b ? -1 : a > b ? 1 : 0
}

/**
 * Choose-4 combos from the 10 knobs, deterministic order.
 * @returns {string[][]}
 */
function allQuadCombos() {
  /** @type {string[][]} */
  const out = []
  const ks = [...TOP10_RASTER_KNOBS].sort(cmp)
  for (let i = 0; i < ks.length; i++) {
    for (let j = i + 1; j < ks.length; j++) {
      for (let k = j + 1; k < ks.length; k++) {
        for (let m = k + 1; m < ks.length; m++) {
          out.push([ks[i], ks[j], ks[k], ks[m]])
        }
      }
    }
  }
  return out
}

const QUADS = allQuadCombos()

if (QUADS.length < COUNT) {
  throw new Error(`recipes-tocanvas-lab-wave8-quad.js: need >=${COUNT} combos, got ${QUADS.length}`)
}

const picked = QUADS.slice(0, COUNT)

const slugSet = new Set(picked.map((k) => knobsSlug(k)))
if (slugSet.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave8-quad.js: duplicate slugs in picked combos')
}

const keySet = new Set(picked.map((k) => knobsKey(k)))
if (keySet.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave8-quad.js: duplicate knob keys in picked combos')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = picked.map((knobs, i) => {
  const n = i + 1
  const num = pad3(n)
  const slug = knobsSlug(knobs)
  return {
    id: `tc-lab-w8-quad-${num}`,
    label: `w8-quad #${n}: ${slug}`,
    idea: `Wave8 quad: lab-toCanvas + 4 raster knobs (${n}/${COUNT})`,
    css: FO_BASELINE_CSS,
    inject: 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    monkeypatch: knobs,
    notes: 'Wave-8 quad combos from top 10 raster knobs; FO raster only — no text bypass.',
  }
})

if (FO_FIX_RECIPES_SHARD.length !== COUNT) {
  throw new Error(
    `recipes-tocanvas-lab-wave8-quad.js: expected ${COUNT} recipes, got ${FO_FIX_RECIPES_SHARD.length}`,
  )
}

const ids = new Set(FO_FIX_RECIPES_SHARD.map((r) => r.id))
if (ids.size !== COUNT) {
  throw new Error('recipes-tocanvas-lab-wave8-quad.js: duplicate ids')
}

export default FO_FIX_RECIPES_SHARD

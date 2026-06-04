/**
 * Loop AI batch-12 FO recipe shard (worker 40) — text-fix: capstone 5 lab live patches × 8 combos.
 * PRIMARY: radicalPatch lab-pin-* (all five runner live pins) × 8 invisible FO * CSS combos each
 * 40 recipes: loop-ai-b12-w40-001..040 (5 patches × 8 combos). NO text-emphasis.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ patch: string, short: string, label: string }[]} */
const PATCHES = [
  {
    patch: 'lab-pin-text-ascent-descent-from-range',
    short: 'text-ascent-descent',
    label: 'Range ascent/descent lh pin',
  },
  {
    patch: 'lab-pin-font-size-from-live',
    short: 'font-size',
    label: 'live font-size pin',
  },
  {
    patch: 'lab-pin-letter-spacing-from-live',
    short: 'letter-spacing',
    label: 'live letter-spacing pin',
  },
  {
    patch: 'lab-pin-inline-box-height-from-clientrects',
    short: 'inline-box-height',
    label: 'clientRects height pin',
  },
  {
    patch: 'lab-pin-flex-cross-size-from-anchor',
    short: 'flex-cross-size',
    label: 'flex cross-size anchor pin',
  },
]

/** @type {{ prop: string, slug: string, knob: string, idea: string }[]} */
const COMBOS = [
  {
    prop: 'line-height:normal',
    slug: 'lh-normal',
    knob: 'lh normal',
    idea: 'line-height:normal',
  },
  {
    prop: 'line-height:from-font',
    slug: 'lh-from-font',
    knob: 'lh from-font',
    idea: 'line-height:from-font',
  },
  {
    prop: 'line-height:unset',
    slug: 'lh-unset',
    knob: 'lh unset',
    idea: 'line-height:unset',
  },
  {
    prop: 'font-kerning:normal',
    slug: 'kerning-normal',
    knob: 'font-kerning normal',
    idea: 'font-kerning:normal',
  },
  {
    prop: 'text-rendering:geometricPrecision',
    slug: 'text-rendering-geometric',
    knob: 'geometricPrecision',
    idea: 'text-rendering:geometricPrecision',
  },
  {
    prop: 'vertical-align:baseline',
    slug: 'vertical-align-baseline',
    knob: 'vertical-align baseline',
    idea: 'vertical-align:baseline',
  },
  {
    prop: 'text-box-trim:trim-both',
    slug: 'text-box-trim-both',
    knob: 'text-box-trim both',
    idea: 'text-box-trim:trim-both',
  },
  {
    prop: 'leading-trim:both',
    slug: 'leading-trim-both',
    knob: 'leading-trim both',
    idea: 'leading-trim:both',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const { patch, short, label } of PATCHES) {
  for (const { prop, slug, knob, idea } of COMBOS) {
    n += 1
    const num = String(n).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b12-w40-${num}`,
      label: `Loop AI b12 w40 #${num}: ${short} + ${knob}`,
      idea: `capstone live pin: ${patch} + ${idea} vs ${label} on FO *`,
      css: `${FO_BASELINE_CSS}${TEXT_LEAF}foreignObject *{${prop}!important}`,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      radicalPatch: patch,
      notes: `Loop AI b12 w40; capstone ${patch}|foStar|${slug}; deactivate-ready; FO-raster — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w40: expected 40 recipes, got ${RECIPES.length}`)
}

const seenPair = new Set()
for (const r of RECIPES) {
  const key = `${r.radicalPatch}\0${r.css}`
  if (seenPair.has(key)) {
    throw new Error(`recipes-loop-ai-b12-w40: duplicate patch+css pair ${r.id}`)
  }
  seenPair.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

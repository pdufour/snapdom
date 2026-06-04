/**
 * Loop AI batch-12 FO recipe shard (worker 29) — text-fix: font-optical-sizing + font-size-adjust (invisible).
 * 40 recipes: loop-ai-b12-w29-001..040 (5 optical targets × 8 font-size-adjust values)
 * No -webkit/text-size-adjust in recipe CSS — font-size-adjust metric probes only (invisible autosizer pin).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ token: string, label: string, idea: string }[]} */
const SIZE_ADJUST = [
  { token: 'none', label: 'none', idea: 'font-size-adjust:none — disable metric scaling in FO subtree' },
  {
    token: 'from-font',
    label: 'from-font',
    idea: 'font-size-adjust:from-font — x-height metric from font vs author drift',
  },
  { token: '0.5', label: '0.5', idea: 'font-size-adjust:0.5 — half x-height metric ratio probe' },
  { token: '0.58', label: '0.58', idea: 'font-size-adjust:0.58 — common x-height ratio probe' },
  { token: 'cap', label: 'cap', idea: 'font-size-adjust:cap — cap-height metric axis probe' },
  { token: 'ch', label: 'ch', idea: 'font-size-adjust:ch — ch unit metric axis probe' },
  { token: 'ex', label: 'ex', idea: 'font-size-adjust:ex — ex unit metric axis probe' },
  { token: 'ic', label: 'ic', idea: 'font-size-adjust:ic — ic unit metric axis probe' },
]

/** @type {{ suffix: string, label: string, idea: string, css: (adj: string) => string }[]} */
const OPTICAL_TARGETS = [
  {
    suffix: 'star-auto',
    label: 'optical auto on FO *',
    idea: 'font-optical-sizing:auto on FO * with font-size-adjust on same leaves (no text-size-adjust pin)',
    css: (adj) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject *{font-optical-sizing:auto!important;font-size-adjust:${adj}!important}`,
  },
  {
    suffix: 'star-none',
    label: 'optical none on FO *',
    idea: 'font-optical-sizing:none on FO * with font-size-adjust on same leaves (no text-size-adjust pin)',
    css: (adj) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject *{font-optical-sizing:none!important;font-size-adjust:${adj}!important}`,
  },
  {
    suffix: 'fo-auto',
    label: 'optical auto on FO root',
    idea: 'font-optical-sizing:auto on foreignObject root + font-size-adjust on FO * (no text-size-adjust pin)',
    css: (adj) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject{font-optical-sizing:auto!important;overflow:visible!important}` +
      `foreignObject *{font-size-adjust:${adj}!important}`,
  },
  {
    suffix: 'fo-none',
    label: 'optical none on FO root',
    idea: 'font-optical-sizing:none on foreignObject root + font-size-adjust on FO * (no text-size-adjust pin)',
    css: (adj) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject{font-optical-sizing:none!important;overflow:visible!important}` +
      `foreignObject *{font-size-adjust:${adj}!important}`,
  },
  {
    suffix: 'div-cascade',
    label: 'optical auto on FO>div',
    idea: 'font-optical-sizing:auto on FO>div + inherit optical + font-size-adjust on FO * (no text-size-adjust pin)',
    css: (adj) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-optical-sizing:auto!important}' +
      `foreignObject *{font-optical-sizing:inherit!important;font-size-adjust:${adj}!important}`,
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const target of OPTICAL_TARGETS) {
  for (const adj of SIZE_ADJUST) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b12-w29-${num}`,
      label: `Loop AI b12 w29 #${num}: ${adj.label} ${target.label}`,
      idea: `${target.idea}; ${adj.idea}`,
      css: target.css(adj.token),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w29; optical/size-adjust invisible (${target.suffix}+${adj.token}); no text-size-adjust pin — FO-raster only, no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w29.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

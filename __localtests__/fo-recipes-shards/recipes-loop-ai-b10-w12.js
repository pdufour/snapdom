/**
 * Loop AI batch-10 FO recipe shard (worker 12) — text-fix: line-height normal/unset/inherit
 * matrix on foreignObject>div *, a, span (wrapper + leaf selector grid).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const LH = ['normal', 'unset', 'inherit']

/** @param {string} lh */
function divStarRule(lh) {
  return (
    `foreignObject>div *{line-height:${lh}!important;vertical-align:baseline!important}`
  )
}

/** @param {string} lh */
function anchorRule(lh) {
  return (
    `foreignObject a{line-height:${lh}!important;vertical-align:baseline!important;` +
    'display:inline!important;box-sizing:border-box!important}'
  )
}

/** @param {string} lh */
function spanRule(lh) {
  return (
    `foreignObject span{line-height:${lh}!important;vertical-align:baseline!important;` +
    'display:inline!important;box-sizing:border-box!important;min-width:0!important}'
  )
}

/** @param {string} lh */
function divWrapperRule(lh) {
  return `foreignObject>div{line-height:${lh}!important;overflow:visible!important}`
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
/** @param {string} suffix */
function pad(suffix) {
  n += 1
  return String(n).padStart(3, '0') + suffix
}

// 001–009: single-selector lh matrix (FO>div *, a, span)
for (const lh of LH) {
  RECIPES.push({
    id: `loop-ai-b10-w12-${pad('')}`,
    label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: FO>div * lh ${lh}`,
    idea: `line-height:${lh} on foreignObject>div * only — wrapper-scoped strut on all div descendants`,
    css: FO_BASELINE_CSS + TEXT_LEAF + divStarRule(lh) + '}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w12; FO>div * line-height ${lh}; lh matrix — no text bypass.`,
  })
}
for (const lh of LH) {
  RECIPES.push({
    id: `loop-ai-b10-w12-${pad('')}`,
    label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: FO anchor lh ${lh}`,
    idea: `line-height:${lh} on foreignObject a only — nav anchor strut vs flex cross-axis`,
    css: FO_BASELINE_CSS + TEXT_LEAF + anchorRule(lh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w12; FO a line-height ${lh}; lh matrix — no text bypass.`,
  })
}
for (const lh of LH) {
  RECIPES.push({
    id: `loop-ai-b10-w12-${pad('')}`,
    label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: FO span lh ${lh}`,
    idea: `line-height:${lh} on foreignObject span only — inline text leaf strut cascade`,
    css: FO_BASELINE_CSS + TEXT_LEAF + spanRule(lh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w12; FO span line-height ${lh}; lh matrix — no text bypass.`,
  })
}

// 010–018: FO>div wrapper × FO>div * lh grid (3×3)
for (const divLh of LH) {
  for (const starLh of LH) {
    RECIPES.push({
      id: `loop-ai-b10-w12-${pad('')}`,
      label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: div ${divLh} star ${starLh}`,
      idea: `FO>div line-height:${divLh} + FO>div * line-height:${starLh} — wrapper vs descendant strut matrix`,
      css:
        FO_BASELINE_CSS +
        TEXT_LEAF +
        divWrapperRule(divLh) +
        divStarRule(starLh) +
        '}',
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b10 w12; FO>div ${divLh} + FO>div * ${starLh}; lh matrix — no text bypass.`,
    })
  }
}

// 019–027: FO>div * × FO a lh grid (3×3)
for (const starLh of LH) {
  for (const aLh of LH) {
    RECIPES.push({
      id: `loop-ai-b10-w12-${pad('')}`,
      label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: star ${starLh} anchor ${aLh}`,
      idea: `FO>div * line-height:${starLh} + FO a line-height:${aLh} — wrapper leaves vs nav anchor strut`,
      css: FO_BASELINE_CSS + TEXT_LEAF + divStarRule(starLh) + '}' + anchorRule(aLh),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b10 w12; FO>div * ${starLh} + FO a ${aLh}; lh matrix — no text bypass.`,
    })
  }
}

// 028–036: FO>div * × FO span lh grid (3×3)
for (const starLh of LH) {
  for (const spanLh of LH) {
    RECIPES.push({
      id: `loop-ai-b10-w12-${pad('')}`,
      label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: star ${starLh} span ${spanLh}`,
      idea: `FO>div * line-height:${starLh} + FO span line-height:${spanLh} — wrapper leaves vs inline span strut`,
      css: FO_BASELINE_CSS + TEXT_LEAF + divStarRule(starLh) + '}' + spanRule(spanLh),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b10 w12; FO>div * ${starLh} + FO span ${spanLh}; lh matrix — no text bypass.`,
    })
  }
}

// 037–040: full-chain triple + chromium copy variants
const tripleCorners = [
  ['normal', 'normal', 'normal'],
  ['unset', 'unset', 'unset'],
  ['inherit', 'inherit', 'inherit'],
  ['normal', 'unset', 'inherit'],
]
for (const [starLh, aLh, spanLh] of tripleCorners) {
  RECIPES.push({
    id: `loop-ai-b10-w12-${pad('')}`,
    label: `Loop AI b10 w12 #${String(n).padStart(3, '0')}: triple ${starLh}/${aLh}/${spanLh}`,
    idea: `FO>div *:${starLh} + FO a:${aLh} + FO span:${spanLh} + FO>div wrapper inherit — full lh matrix corner`,
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      TEXT_LEAF +
      divWrapperRule('inherit') +
      divStarRule(starLh) +
      '}' +
      anchorRule(aLh) +
      spanRule(spanLh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w12; triple lh ${starLh}/${aLh}/${spanLh} + div inherit; no text bypass.`,
  })
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b10-w12: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

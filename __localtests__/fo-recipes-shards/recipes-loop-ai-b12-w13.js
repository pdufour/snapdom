/**
 * Loop AI batch-12 FO recipe shard (worker 13) — text-fix: line-height normal/unset/inherit
 * matrix + identity transform matrix(1,0,0,1,0,0) (invisible compositor probe).
 * 40 recipes: loop-ai-b12-w13-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const LH = ['normal', 'unset', 'inherit']

const MATRIX_STAR =
  'foreignObject *{transform:matrix(1,0,0,1,0,0)!important;transform-origin:50% 50%!important}'
const MATRIX_DIV =
  'foreignObject>div{transform:matrix(1,0,0,1,0,0)!important;transform-origin:50% 50%!important}'
const MATRIX_ANCHOR =
  'foreignObject a{transform:matrix(1,0,0,1,0,0)!important;transform-origin:50% 50%!important}'
const MATRIX_SPAN =
  'foreignObject span{transform:matrix(1,0,0,1,0,0)!important;transform-origin:50% 50%!important}'
const MATRIX_FO =
  'foreignObject{transform:matrix(1,0,0,1,0,0)!important;transform-origin:50% 50%!important}'

/** @param {string} lh */
function divStarRule(lh) {
  return `foreignObject>div *{line-height:${lh}!important;vertical-align:baseline!important}`
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

// 001–009: single-selector lh matrix + scoped identity matrix
for (const lh of LH) {
  RECIPES.push({
    id: `loop-ai-b12-w13-${pad('')}`,
    label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix* div* lh ${lh}`,
    idea: `identity matrix on FO * + line-height:${lh} on FO>div * — invisible transform vs strut cascade`,
    css: FO_BASELINE_CSS + TEXT_LEAF + MATRIX_STAR + divStarRule(lh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b12 w13; matrix* + FO>div * lh ${lh}; lh matrix invisible — no text bypass.`,
  })
}
for (const lh of LH) {
  RECIPES.push({
    id: `loop-ai-b12-w13-${pad('')}`,
    label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix-a anchor lh ${lh}`,
    idea: `identity matrix on FO a + line-height:${lh} on anchors — nav strut vs flex cross-axis`,
    css: FO_BASELINE_CSS + TEXT_LEAF + MATRIX_ANCHOR + anchorRule(lh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b12 w13; matrix-a + FO a lh ${lh}; lh matrix invisible — no text bypass.`,
  })
}
for (const lh of LH) {
  RECIPES.push({
    id: `loop-ai-b12-w13-${pad('')}`,
    label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix-span lh ${lh}`,
    idea: `identity matrix on FO span + line-height:${lh} on span — inline leaf strut cascade`,
    css: FO_BASELINE_CSS + TEXT_LEAF + MATRIX_SPAN + spanRule(lh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b12 w13; matrix-span + FO span lh ${lh}; lh matrix invisible — no text bypass.`,
  })
}

// 010–018: FO>div wrapper × FO>div * lh grid (3×3) + matrix on FO>div
for (const divLh of LH) {
  for (const starLh of LH) {
    RECIPES.push({
      id: `loop-ai-b12-w13-${pad('')}`,
      label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix-div ${divLh}/${starLh}`,
      idea: `matrix(1,0,0,1,0,0) on FO>div + FO>div lh:${divLh} + FO>div * lh:${starLh} — wrapper strut matrix`,
      css:
        FO_BASELINE_CSS +
        TEXT_LEAF +
        MATRIX_DIV +
        divWrapperRule(divLh) +
        divStarRule(starLh),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w13; matrix-div + FO>div ${divLh} + FO>div * ${starLh}; lh matrix invisible — no text bypass.`,
    })
  }
}

// 019–027: FO>div * × FO a lh grid (3×3) + matrix on FO *
for (const starLh of LH) {
  for (const aLh of LH) {
    RECIPES.push({
      id: `loop-ai-b12-w13-${pad('')}`,
      label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix* ${starLh}/${aLh}`,
      idea: `identity matrix on FO * + FO>div * lh:${starLh} + FO a lh:${aLh} — leaves vs nav anchor`,
      css: FO_BASELINE_CSS + TEXT_LEAF + MATRIX_STAR + divStarRule(starLh) + anchorRule(aLh),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w13; matrix* + FO>div * ${starLh} + FO a ${aLh}; lh matrix invisible — no text bypass.`,
    })
  }
}

// 028–036: FO>div * × FO span lh grid (3×3) + matrix on FO *
for (const starLh of LH) {
  for (const spanLh of LH) {
    RECIPES.push({
      id: `loop-ai-b12-w13-${pad('')}`,
      label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix* ${starLh}/${spanLh}`,
      idea: `identity matrix on FO * + FO>div * lh:${starLh} + FO span lh:${spanLh} — leaves vs inline span`,
      css: FO_BASELINE_CSS + TEXT_LEAF + MATRIX_STAR + divStarRule(starLh) + spanRule(spanLh),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w13; matrix* + FO>div * ${starLh} + FO span ${spanLh}; lh matrix invisible — no text bypass.`,
    })
  }
}

// 037–040: full-chain triple + chromium copy + matrix on FO root
const tripleCorners = [
  ['normal', 'normal', 'normal'],
  ['unset', 'unset', 'unset'],
  ['inherit', 'inherit', 'inherit'],
  ['normal', 'unset', 'inherit'],
]
for (const [starLh, aLh, spanLh] of tripleCorners) {
  RECIPES.push({
    id: `loop-ai-b12-w13-${pad('')}`,
    label: `Loop AI b12 w13 #${String(n).padStart(3, '0')}: matrix-fo ${starLh}/${aLh}/${spanLh}`,
    idea: `matrix on FO root + triple lh corner ${starLh}/${aLh}/${spanLh} + div inherit wrapper`,
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      TEXT_LEAF +
      MATRIX_FO +
      divWrapperRule('inherit') +
      divStarRule(starLh) +
      anchorRule(aLh) +
      spanRule(spanLh),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b12 w13; matrix-fo + triple lh ${starLh}/${aLh}/${spanLh}; lh matrix invisible — no text bypass.`,
  })
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w13: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

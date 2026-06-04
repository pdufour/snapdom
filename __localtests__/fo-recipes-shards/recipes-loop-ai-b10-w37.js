/**
 * Loop AI batch-10 FO recipe shard (worker 37) — text-fix: text-align + text-align-last
 * matrix on foreignObject text wrappers (>div, >div *, a, span, label, nav).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TA = ['start', 'end', 'left', 'right', 'center', 'justify']
const TAL = ['auto', 'start', 'end', 'left', 'right', 'center', 'justify']
const TA3 = ['start', 'end', 'center']
const TAL3 = ['auto', 'start', 'end']

/** @param {string} sel @param {string} ta @param {string} tal */
function alignRule(sel, ta, tal) {
  return (
    `${sel}{text-align:${ta}!important;text-align-last:${tal}!important;` +
    'box-sizing:border-box!important;min-width:0!important}'
  )
}

/** @param {string} ta @param {string} tal */
function divWrapperRule(ta, tal) {
  return (
    `foreignObject>div{text-align:${ta}!important;text-align-last:${tal}!important;` +
    'overflow:visible!important;box-sizing:border-box!important}'
  )
}

/** @param {string} ta @param {string} tal */
function divStarRule(ta, tal) {
  return alignRule('foreignObject>div *', ta, tal)
}

/** @param {string} ta @param {string} tal */
function divAnchorRule(ta, tal) {
  return (
    `foreignObject>div a{text-align:${ta}!important;text-align-last:${tal}!important;` +
    'display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}'
  )
}

/** @param {string} ta @param {string} tal */
function anchorRule(ta, tal) {
  return (
    `foreignObject a{text-align:${ta}!important;text-align-last:${tal}!important;` +
    'display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}'
  )
}

/** @param {string} ta @param {string} tal */
function spanRule(ta, tal) {
  return (
    `foreignObject span{text-align:${ta}!important;text-align-last:${tal}!important;` +
    'display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}'
  )
}

/** @param {string} ta @param {string} tal */
function labelRule(ta, tal) {
  return alignRule('foreignObject label', ta, tal)
}

/** @param {string} ta @param {string} tal */
function navAnchorRule(ta, tal) {
  return (
    `foreignObject nav a{text-align:${ta}!important;text-align-last:${tal}!important;` +
    'display:inline!important;box-sizing:border-box!important}'
  )
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
/** @param {string} [suffix] */
function pad(suffix = '') {
  n += 1
  return String(n).padStart(3, '0') + suffix
}

// 001–006: FO>div wrapper — each text-align with text-align-last:auto
for (const ta of TA) {
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: FO>div ${ta} last auto`,
    idea: `text-align:${ta} + text-align-last:auto on foreignObject>div — root text wrapper alignment`,
    css: FO_BASELINE_CSS + TEXT_LEAF + divWrapperRule(ta, 'auto'),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; FO>div ${ta}/last auto; align matrix — no text bypass.`,
  })
}

// 007–013: FO>div * — text-align-last sweep with text-align:start
for (const tal of TAL) {
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: FO>div * start last ${tal}`,
    idea: `text-align:start + text-align-last:${tal} on foreignObject>div * — descendant wrapper leaves`,
    css: FO_BASELINE_CSS + TEXT_LEAF + divStarRule('start', tal),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; FO>div * start/last ${tal}; align matrix — no text bypass.`,
  })
}

// 014–019: FO>div a — text-align sweep with text-align-last:end
for (const ta of TA) {
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: FO>div a ${ta} last end`,
    idea: `text-align:${ta} + text-align-last:end on foreignObject>div a — nav anchor in wrapper`,
    css: FO_BASELINE_CSS + TEXT_LEAF + divAnchorRule(ta, 'end'),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; FO>div a ${ta}/last end; align matrix — no text bypass.`,
  })
}

// 020–025: FO a — text-align sweep with text-align-last:center
for (const ta of TA) {
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: FO anchor ${ta} last center`,
    idea: `text-align:${ta} + text-align-last:center on foreignObject a — direct anchor alignment`,
    css: FO_BASELINE_CSS + TEXT_LEAF + anchorRule(ta, 'center'),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; FO a ${ta}/last center; align matrix — no text bypass.`,
  })
}

// 026–031: FO span — mismatch pairs (justify + varied last-line)
const spanPairs = [
  ['justify', 'auto'],
  ['justify', 'start'],
  ['justify', 'end'],
  ['center', 'justify'],
  ['left', 'right'],
  ['right', 'left'],
]
for (const [ta, tal] of spanPairs) {
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: FO span ${ta} last ${tal}`,
    idea: `text-align:${ta} + text-align-last:${tal} on foreignObject span — inline leaf last-line vs block align`,
    css: FO_BASELINE_CSS + TEXT_LEAF + spanRule(ta, tal),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; FO span ${ta}/last ${tal}; align matrix — no text bypass.`,
  })
}

// 032–037: FO label + FO>div label — logical vs physical last-line
const labelPairs = [
  ['foreignObject label', 'start', 'auto'],
  ['foreignObject label', 'end', 'end'],
  ['foreignObject label', 'match-parent', 'auto'],
  ['foreignObject>div label', 'start', 'start'],
  ['foreignObject>div label', 'justify', 'justify'],
  ['foreignObject>div label', 'center', 'auto'],
]
for (const [sel, ta, tal] of labelPairs) {
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: label ${ta} last ${tal}`,
    idea: `text-align:${ta} + text-align-last:${tal} on ${sel} — form label wrapper alignment`,
    css: FO_BASELINE_CSS + TEXT_LEAF + alignRule(sel, ta, tal),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; ${sel} ${ta}/last ${tal}; align matrix — no text bypass.`,
  })
}

// 038–040: FO>div × FO>div * align grid corners + nav anchor
for (const ta of TA3) {
  for (const tal of TAL3) {
    if (RECIPES.length >= 37) break
    RECIPES.push({
      id: `loop-ai-b10-w37-${pad('')}`,
      label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: div ${ta} star ${tal}`,
      idea: `FO>div text-align:${ta} + FO>div * text-align-last:${tal} — wrapper vs descendant last-line grid`,
      css:
        FO_BASELINE_CSS +
        TEXT_LEAF +
        divWrapperRule(ta, 'auto') +
        divStarRule('inherit', tal),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b10 w37; FO>div ${ta} + FO>div * last ${tal}; align matrix — no text bypass.`,
    })
  }
  if (RECIPES.length >= 37) break
}

while (RECIPES.length < 40) {
  const idx = RECIPES.length - 36
  const corners = [
    ['start', 'auto', 'end'],
    ['justify', 'justify', 'start'],
    ['center', 'end', 'center'],
  ]
  const [navTa, navTal, starTal] = corners[idx] ?? corners[0]
  RECIPES.push({
    id: `loop-ai-b10-w37-${pad('')}`,
    label: `Loop AI b10 w37 #${String(n).padStart(3, '0')}: nav ${navTa} triple`,
    idea: `FO nav a ${navTa}/${navTal} + FO>div * last ${starTal} — nav wrapper + leaf last-line combo`,
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      navAnchorRule(navTa, navTal) +
      divStarRule('inherit', starTal),
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b10 w37; nav ${navTa}/last ${navTal} + div* last ${starTal}; no text bypass.`,
  })
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b10-w37: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

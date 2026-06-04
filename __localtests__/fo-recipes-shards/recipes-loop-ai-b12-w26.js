/**
 * Loop AI batch-12 FO recipe shard (worker 26) — text-fix: align-self stretch/flex-start on nav a (invisible).
 * 40 recipes: loop-ai-b12-w26-001..040 (5 nav flex × 2 align-self × 4 invisible countermeasures)
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const NAV_BASE =
  'foreignObject nav{display:flex!important;gap:0!important;row-gap:0!important;' +
  'column-gap:0!important;overflow:visible!important}'

/** @type {{ key: string, label: string, idea: string, nav: string }[]} */
const NAV_VARIANTS = [
  {
    key: 'row-stretch',
    label: 'nav row stretch',
    idea: 'nav flex row align-items:stretch — cross-axis stretch container for nav a align-self probe',
    nav:
      NAV_BASE +
      'foreignObject nav{flex-direction:row!important;align-items:stretch!important}',
  },
  {
    key: 'row-center',
    label: 'nav row center',
    idea: 'nav flex row align-items:center — centered cross-axis vs stretch/flex-start on nav a',
    nav:
      NAV_BASE +
      'foreignObject nav{flex-direction:row!important;align-items:center!important}',
  },
  {
    key: 'row-baseline',
    label: 'nav row baseline',
    idea: 'nav flex row align-items:baseline — baseline cross-axis vs nav a align-self stretch/flex-start',
    nav:
      NAV_BASE +
      'foreignObject nav{flex-direction:row!important;align-items:baseline!important}',
  },
  {
    key: 'row-flex-start',
    label: 'nav row flex-start',
    idea: 'nav flex row align-items:flex-start — start cross-axis vs nav a align-self override',
    nav:
      NAV_BASE +
      'foreignObject nav{flex-direction:row!important;align-items:flex-start!important}',
  },
  {
    key: 'col-stretch',
    label: 'nav column stretch',
    idea: 'nav flex column align-items:stretch — column cross-axis vs nav a align-self stretch/flex-start',
    nav:
      NAV_BASE +
      'foreignObject nav{flex-direction:column!important;align-items:stretch!important}',
  },
]

/** @type {{ key: string, label: string, idea: string, align: string }[]} */
const ALIGN_SELF = [
  {
    key: 'stretch',
    label: 'nav a stretch',
    idea: 'align-self:stretch on FO nav a — flex cross stretch on nav text leaves (invisible ink probe)',
    align: 'align-self:stretch!important',
  },
  {
    key: 'flex-start',
    label: 'nav a flex-start',
    idea: 'align-self:flex-start on FO nav a — cross-axis start vs stretch collapse (invisible ink probe)',
    align:
      'align-self:flex-start!important;height:auto!important;min-height:auto!important;max-height:none!important',
  },
]

/** @type {{ key: string, label: string, idea: string, extra: string }[]} */
const INVISIBLE_FIX = [
  {
    key: 'min-h0-auto',
    label: 'min-h0 height auto',
    idea: 'min-height:0 + height:auto on nav a — flex shrink floor vs zero-height stretch collapse',
    extra: 'min-height:0!important;height:auto!important;max-height:none!important',
  },
  {
    key: 'opacity-visible',
    label: 'opacity visible',
    idea: 'opacity:1 visibility:visible on nav a — alpha/hidden cascade does not zero nav ink',
    extra: 'opacity:1!important;visibility:visible!important',
  },
  {
    key: 'lh-normal-baseline',
    label: 'lh normal baseline',
    idea: 'line-height:normal + vertical-align:baseline on nav a — strut restore under align-self stretch/flex-start',
    extra:
      'line-height:normal!important;vertical-align:baseline!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important',
  },
  {
    key: 'flex-shrink0',
    label: 'flex-shrink 0',
    idea: 'flex-shrink:0 flex-grow:0 on nav a — prevent flex squeeze that drops nav text ink',
    extra: 'flex-shrink:0!important;flex-grow:0!important;flex-basis:auto!important',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const nav of NAV_VARIANTS) {
  for (const align of ALIGN_SELF) {
    for (const fix of INVISIBLE_FIX) {
      index += 1
      const num = String(index).padStart(3, '0')
      RECIPES.push({
        id: `loop-ai-b12-w26-${num}`,
        label: `Loop AI b12 w26 #${num}: ${nav.label} ${align.label} ${fix.label}`,
        idea: `${nav.idea}; ${align.idea}; ${fix.idea}`,
        css:
          FO_BASELINE_CSS +
          TEXT_LEAF +
          nav.nav +
          'foreignObject nav a{box-sizing:border-box!important;min-width:0!important;display:inline-block!important;' +
          `${align.align};${fix.extra}}`,
        inject: 'capture',
        category: 'text-fix',
        active: true,
        notes: `Loop AI b12 w26; ${nav.key}×${align.key}×${fix.key}; align-self nav a invisible — no text bypass.`,
      })
    }
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w26: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-12 FO recipe shard (worker 01) — text-fix: h2-pin-line-height wrapper matrix C.
 * PRIMARY: h2-pin-line-height-from-live × 40 wrapper selector combos.
 * 40 recipes: loop-ai-b12-w01-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const PIN_LH = 'h2-pin-line-height-from-live'

/** @type {{ key: string; label: string; idea: string; css: string }[]} */
const WRAPPERS = [
  {
    key: 'div-normal-ta',
    label: 'div-normal-ta',
    idea: 'FO>div line-height:normal + text-size-adjust 100%',
    css:
      'foreignObject>div{line-height:normal!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
  },
  {
    key: 'div-star-unset',
    label: 'div-star-unset',
    idea: 'line-height:unset on FO>div *',
    css: 'foreignObject>div *{line-height:unset!important;min-width:0!important}',
  },
  {
    key: 'div-star-from-font',
    label: 'div-star-from-font',
    idea: 'line-height:from-font + vertical-align:baseline on FO>div *',
    css:
      'foreignObject>div *{line-height:from-font!important;vertical-align:baseline!important}',
  },
  {
    key: 'div-contents',
    label: 'div-contents',
    idea: 'display:contents on FO>div — flat wrapper tree',
    css: 'foreignObject>div{display:contents!important}',
  },
]

/** @type {{ key: string; label: string; idea: string; css: string }[]} */
const LEAVES = [
  {
    key: 'star-baseline',
    label: 'star-baseline',
    idea: 'vertical-align:baseline on FO *',
    css: 'foreignObject *{vertical-align:baseline!important}',
  },
  {
    key: 'anchor-normal',
    label: 'anchor-normal',
    idea: 'line-height:normal on FO a',
    css:
      'foreignObject a{line-height:normal!important;vertical-align:baseline!important;display:inline!important}',
  },
  {
    key: 'span-from-font',
    label: 'span-from-font',
    idea: 'line-height:from-font on FO span',
    css: 'foreignObject span{line-height:from-font!important;display:inline!important}',
  },
  {
    key: 'label-unset',
    label: 'label-unset',
    idea: 'line-height:unset on FO label',
    css: 'foreignObject label{line-height:unset!important}',
  },
  {
    key: 'divstar-normal',
    label: 'divstar-normal',
    idea: 'FO>div * line-height:normal',
    css: 'foreignObject>div *{line-height:normal!important}',
  },
  {
    key: 'star-inherit',
    label: 'star-inherit',
    idea: 'line-height:inherit on FO *',
    css: 'foreignObject *{line-height:inherit!important}',
  },
  {
    key: 'p-unset',
    label: 'p-unset',
    idea: 'line-height:unset on FO p',
    css: 'foreignObject p{line-height:unset!important}',
  },
  {
    key: 'button-lh1',
    label: 'button-lh1',
    idea: 'line-height:1 on FO button',
    css: 'foreignObject button{line-height:1!important}',
  },
  {
    key: 'nav-a-normal',
    label: 'nav-a-normal',
    idea: 'line-height:normal on FO nav a — metric only, no nav layout shift',
    css:
      'foreignObject nav a{line-height:normal!important;vertical-align:baseline!important;display:inline!important;box-sizing:border-box!important}',
  },
  {
    key: 'star-text-edge',
    label: 'star-text-edge',
    idea: 'text-box-edge:normal + line-height:normal on FO *',
    css: 'foreignObject *{text-box-edge:normal!important;line-height:normal!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const wrap of WRAPPERS) {
  for (const leaf of LEAVES) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b12-w01-${num}`,
      label: `Loop AI b12 w01 #${num}: ${wrap.label} + ${leaf.label}`,
      idea: `h2-pin-line-height wrapper matrix C: ${wrap.idea}; ${leaf.idea}`,
      css: FO_BASELINE_CSS + TEXT_LEAF + wrap.css + leaf.css,
      inject: 'both',
      category: 'text-fix',
      active: true,
      radicalPatch: PIN_LH,
      notes: `Loop AI b12 w01; ${wrap.key}×${leaf.key}; h2-pin-line-height wrapper matrix C — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w01.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

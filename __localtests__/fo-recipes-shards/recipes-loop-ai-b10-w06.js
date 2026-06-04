/**
 * Loop AI batch-10 FO recipe shard (worker 6) — text-fix: h2-flex-stretch-leaf-from-live × wrapper/anchor CSS grid (40).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const RADICAL = 'h2-flex-stretch-leaf-from-live'

/** @type {{ slug: string, label: string, idea: string, css: string }[]} */
const WRAPPER_VARIANTS = [
  {
    slug: 'div-normal-ta',
    label: 'FO>div normal strut',
    idea: 'FO>div line-height:normal + text-size-adjust on wrapper before stretch-leaf cross pin',
    css:
      'foreignObject>div{line-height:normal!important;' +
      '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
  },
  {
    slug: 'div-star-unset',
    label: 'FO>div * unset lh',
    idea: 'line-height:unset on foreignObject>div * — wrapper-scoped lh reset vs stretch-leaf pin',
    css:
      'foreignObject>div *{line-height:unset!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
  },
  {
    slug: 'div-star-from-font',
    label: 'FO>div * from-font',
    idea: 'line-height:from-font on foreignObject>div * before measured stretch-leaf cross pin',
    css:
      'foreignObject>div *{line-height:from-font!important;vertical-align:baseline!important}',
  },
  {
    slug: 'div-normal-star-from-font',
    label: 'div normal div* from-font',
    idea: 'FO>div normal wrapper + foreignObject>div * line-height:from-font + flex-start on leaves',
    css:
      'foreignObject>div{line-height:normal!important}' +
      'foreignObject>div *{line-height:from-font!important;align-self:flex-start!important;' +
      'height:auto!important;min-height:auto!important}',
  },
  {
    slug: 'div-flex-gap0',
    label: 'FO>div flex gap 0',
    idea: 'flex row gap:0 on FO>div wrapper — collapsed text-nav rhythm under stretch-leaf pin',
    css:
      'foreignObject>div{display:flex!important;flex-direction:row!important;' +
      'align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;' +
      'overflow:visible!important}',
  },
  {
    slug: 'div-flex-justify-center',
    label: 'FO>div justify center',
    idea: 'justify-content:center flex row on FO>div — main-axis center on inner text row',
    css:
      'foreignObject>div{display:flex!important;flex-direction:row!important;' +
      'justify-content:center!important;align-items:center!important;overflow:visible!important}' +
      'foreignObject>div *{flex:0 1 auto!important;min-width:0!important}',
  },
  {
    slug: 'div-star-calc-em',
    label: 'FO>div * calc(1em)',
    idea: 'line-height:calc(1em + 0px) on FO>div * — wrapper-scoped em lh vs stretch-leaf pin',
    css:
      'foreignObject>div *{line-height:calc(1em + 0px)!important;box-sizing:border-box!important;' +
      'min-width:0!important;min-height:0!important}',
  },
  {
    slug: 'div-flex-stretch-a',
    label: 'FO>div stretch anchors',
    idea: 'align-self:stretch on FO>div a — wrapper-scoped flex cross stretch on nav text',
    css:
      'foreignObject>div{display:flex!important;flex-direction:row!important;overflow:visible!important}' +
      'foreignObject>div a{align-self:stretch!important;display:inline-block!important;min-height:0!important}',
  },
  {
    slug: 'div-from-font-inherit',
    label: 'FO>div from-font inherit',
    idea: 'FO>div line-height:from-font + FO * line-height:inherit — font-metrics cascade on wrapper chain',
    css:
      'foreignObject>div{line-height:from-font!important}' +
      'foreignObject *{line-height:inherit!important}',
  },
  {
    slug: 'div-unset-star-normal',
    label: 'FO>div unset * normal',
    idea: 'FO>div line-height:unset + FO * line-height:normal — cascade reset then normal strut on leaves',
    css:
      'foreignObject>div{line-height:unset!important}' +
      'foreignObject *{line-height:normal!important}',
  },
]

/** @type {{ slug: string, label: string, idea: string, css: string }[]} */
const ANCHOR_VARIANTS = [
  {
    slug: 'anchor-flex-start',
    label: 'anchor flex-start',
    idea: 'align-self:flex-start on FO a — nav text cross-axis vs stretch-leaf measured pin',
    css:
      'foreignObject a{align-self:flex-start!important;height:auto!important;' +
      'min-height:auto!important;max-height:none!important}',
  },
  {
    slug: 'anchor-inline-baseline',
    label: 'anchor inline baseline',
    idea: 'display:inline-block + vertical-align:baseline on FO a — inline strut vs flex cross-axis',
    css:
      'foreignObject a{display:inline-block!important;vertical-align:baseline!important;' +
      'box-sizing:border-box!important}',
  },
  {
    slug: 'anchor-normal-baseline',
    label: 'anchor normal baseline',
    idea: 'line-height:normal + vertical-align:baseline on FO a nav anchors',
    css:
      'foreignObject a{line-height:normal!important;vertical-align:baseline!important;' +
      'display:inline!important;box-sizing:border-box!important}',
  },
  {
    slug: 'span-stretch-row',
    label: 'span align-self stretch',
    idea: 'FO flex row align-items:stretch + span align-self:stretch on text anchors in flex row',
    css:
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;' +
      'overflow:visible!important}' +
      'foreignObject span{align-self:stretch!important;display:inline!important;' +
      'height:auto!important;min-height:auto!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = WRAPPER_VARIANTS.flatMap((wrapper, wi) =>
  ANCHOR_VARIANTS.map((anchor, ai) => {
    const n = wi * ANCHOR_VARIANTS.length + ai + 1
    const id = `loop-ai-b10-w06-${String(n).padStart(3, '0')}`
    return {
      id,
      label: `Loop AI b10 w06 #${String(n).padStart(3, '0')}: stretch leaf ${wrapper.label} + ${anchor.label}`,
      idea: `h2-flex-stretch-leaf-from-live + ${wrapper.idea}; ${anchor.idea}`,
      css: FO_BASELINE_CSS + TEXT_LEAF + wrapper.css + anchor.css,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      radicalPatch: RADICAL,
      notes: `Loop AI b10 w06 ${wrapper.slug}×${anchor.slug}; stretch-leaf live pin + wrapper/anchor CSS — no text bypass.`,
    }
  }),
)

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

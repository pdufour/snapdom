/**
 * Loop AI batch-10 FO recipe shard (worker 23) — text-fix: flex align-items baseline/center/flex-end on text row.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @param {'baseline'|'center'|'flex-end'} align */
const flexRow = (align, extra = '') =>
  `foreignObject{display:flex!important;flex-direction:row!important;` +
  `align-items:${align}!important;overflow:visible!important${extra}}`

/** @param {'baseline'|'center'|'flex-end'} align */
const inlineFlexRow = (align, extra = '') =>
  `foreignObject{display:inline-flex!important;flex-direction:row!important;` +
  `align-items:${align}!important;overflow:visible!important${extra}}`

const NAV_FLEX = (align) =>
  `foreignObject nav{display:flex!important;flex-direction:row!important;` +
  `align-items:${align}!important;gap:0!important;overflow:visible!important}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'flex row baseline FO root',
    idea: 'display:flex row + align-items:baseline on FO — text row cross-axis baseline vs inline strut',
    css: flexRow('baseline'),
  },
  {
    n: 2,
    slug: 'inline-flex baseline FO root',
    idea: 'display:inline-flex row + align-items:baseline on FO — shrink-to-fit flex text row baseline',
    css: inlineFlexRow('baseline'),
  },
  {
    n: 3,
    slug: 'nav flex baseline text row',
    idea: 'nav display:flex row align-items:baseline — scoped mini-nav text row cross-axis',
    css: NAV_FLEX('baseline') + 'foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
  },
  {
    n: 4,
    slug: 'baseline row inline valign baseline',
    idea: 'FO flex baseline row + inline leaves vertical-align:baseline — flex vs inline strut',
    css:
      flexRow('baseline') +
      'foreignObject *{display:inline!important;vertical-align:baseline!important}',
  },
  {
    n: 5,
    slug: 'baseline row anchor inline-block',
    idea: 'FO flex baseline row + anchor inline-block vertical-align:baseline on nav text',
    css:
      flexRow('baseline') +
      'foreignObject a{display:inline-block!important;vertical-align:baseline!important}',
  },
  {
    n: 6,
    slug: 'baseline row span middle',
    idea: 'FO flex baseline row + span vertical-align:middle — cross-axis middle vs baseline on text row',
    css:
      flexRow('baseline') +
      'foreignObject span{display:inline!important;vertical-align:middle!important}',
  },
  {
    n: 7,
    slug: 'baseline row align-self baseline',
    idea: 'FO flex baseline row + align-self:baseline on FO * — per-item cross-axis baseline',
    css: flexRow('baseline') + 'foreignObject *{align-self:baseline!important}',
  },
  {
    n: 8,
    slug: 'baseline row gap zero',
    idea: 'FO flex baseline row + gap/row-gap/column-gap:0 — collapsed inter-item rhythm on text nav',
    css:
      flexRow('baseline', ';gap:0!important;row-gap:0!important;column-gap:0!important'),
  },
  {
    n: 9,
    slug: 'baseline row justify space-between',
    idea: 'FO flex baseline row + justify-content:space-between — main-axis spread with baseline cross-axis',
    css: flexRow('baseline', ';justify-content:space-between!important'),
  },
  {
    n: 10,
    slug: 'baseline row nowrap',
    idea: 'FO flex baseline row + flex-wrap:nowrap — single-line text row baseline lock',
    css: flexRow('baseline', ';flex-wrap:nowrap!important'),
  },
  {
    n: 11,
    slug: 'baseline row min-height zero',
    idea: 'FO flex baseline row + min-height:0 on FO * — flex item shrink vs text line box',
    css: flexRow('baseline') + 'foreignObject *{min-height:0!important}',
  },
  {
    n: 12,
    slug: 'baseline row anchor lh normal',
    idea: 'FO flex baseline row + line-height:normal on anchors — lh vs baseline cross-axis on text row',
    css: flexRow('baseline') + 'foreignObject a{line-height:normal!important;display:inline!important}',
  },
  {
    n: 13,
    slug: 'baseline row anchor align-self',
    idea: 'FO flex baseline row + anchor align-self:baseline + justify-content:flex-start on text nav',
    css:
      flexRow('baseline', ';justify-content:flex-start!important') +
      'foreignObject a{align-self:baseline!important;display:inline-block!important;' +
      'vertical-align:baseline!important}',
  },
  {
    n: 14,
    slug: 'nav baseline anchor align-self',
    idea: 'nav flex baseline row + nav a align-self:baseline — scoped nav text cross-axis baseline',
    css:
      NAV_FLEX('baseline') +
      'foreignObject nav a{align-self:baseline!important;display:inline-block!important}',
  },
  {
    n: 15,
    slug: 'flex row center FO root',
    idea: 'display:flex row + align-items:center on FO — text row cross-axis center vs line box',
    css: flexRow('center'),
  },
  {
    n: 16,
    slug: 'inline-flex center FO root',
    idea: 'display:inline-flex row + align-items:center on FO — shrink-to-fit flex text row center',
    css: inlineFlexRow('center'),
  },
  {
    n: 17,
    slug: 'nav flex center text row',
    idea: 'nav display:flex row align-items:center — scoped mini-nav text row cross-axis center',
    css: NAV_FLEX('center') + 'foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
  },
  {
    n: 18,
    slug: 'center row valign middle',
    idea: 'FO flex center row + vertical-align:middle on FO * — flex cross-axis vs inline middle strut',
    css: flexRow('center') + 'foreignObject *{vertical-align:middle!important}',
  },
  {
    n: 19,
    slug: 'center row valign text-top',
    idea: 'FO flex center row + vertical-align:text-top on FO * — flex cross-axis vs text-top strut',
    css: flexRow('center') + 'foreignObject *{vertical-align:text-top!important}',
  },
  {
    n: 20,
    slug: 'center row anchor inline-block',
    idea: 'FO flex center row + anchor inline-block — nav text block centering in flex row',
    css: flexRow('center') + 'foreignObject a{display:inline-block!important}',
  },
  {
    n: 21,
    slug: 'center row anchor align-self',
    idea: 'FO flex center row + anchor align-self:center — per-anchor cross-axis center on text row',
    css: flexRow('center') + 'foreignObject a{align-self:center!important;display:inline-block!important}',
  },
  {
    n: 22,
    slug: 'center row gap zero',
    idea: 'FO flex center row + gap/row-gap/column-gap:0 — collapsed rhythm with center cross-axis',
    css: flexRow('center', ';gap:0!important;row-gap:0!important;column-gap:0!important'),
  },
  {
    n: 23,
    slug: 'center row justify center',
    idea: 'FO flex center row + justify-content:center — centered main-axis with center cross-axis text',
    css: flexRow('center', ';justify-content:center!important'),
  },
  {
    n: 24,
    slug: 'center row justify space-around',
    idea: 'FO flex center row + justify-content:space-around — distributed main-axis with center cross-axis',
    css: flexRow('center', ';justify-content:space-around!important'),
  },
  {
    n: 25,
    slug: 'flex-end row valign bottom',
    idea: 'FO flex flex-end row + vertical-align:bottom on FO * — flex cross-axis vs inline bottom strut',
    css: flexRow('flex-end') + 'foreignObject *{vertical-align:bottom!important}',
  },
  {
    n: 26,
    slug: 'flex-end row anchor align-self',
    idea: 'FO flex flex-end row + anchor align-self:flex-end — per-anchor cross-axis flex-end on text row',
    css:
      flexRow('flex-end') +
      'foreignObject a{align-self:flex-end!important;display:inline-block!important}',
  },
  {
    n: 27,
    slug: 'flex-end row justify flex-end',
    idea: 'FO flex flex-end row + justify-content:flex-end — trailing main-axis with flex-end cross-axis',
    css: flexRow('flex-end', ';justify-content:flex-end!important'),
  },
  {
    n: 28,
    slug: 'flex row flex-end FO root',
    idea: 'display:flex row + align-items:flex-end on FO — text row cross-axis flex-end vs line box',
    css: flexRow('flex-end'),
  },
  {
    n: 29,
    slug: 'inline-flex flex-end FO root',
    idea: 'display:inline-flex row + align-items:flex-end on FO — shrink-to-fit flex text row flex-end',
    css: inlineFlexRow('flex-end'),
  },
  {
    n: 30,
    slug: 'nav flex flex-end text row',
    idea: 'nav display:flex row align-items:flex-end — scoped mini-nav text row cross-axis flex-end',
    css: NAV_FLEX('flex-end') + 'foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
  },
  {
    n: 31,
    slug: 'pin lh baseline flex row',
    idea: 'h2-pin-line-height-from-live + FO flex baseline row — pinned lh with baseline cross-axis text row',
    css: flexRow('baseline', ';gap:0!important'),
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 32,
    slug: 'pin lh center flex row',
    idea: 'h2-pin-line-height-from-live + FO flex center row — pinned lh with center cross-axis text row',
    css: flexRow('center', ';gap:0!important'),
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 33,
    slug: 'pin lh flex-end flex row',
    idea: 'h2-pin-line-height-from-live + FO flex flex-end row — pinned lh with flex-end cross-axis text row',
    css: flexRow('flex-end', ';gap:0!important'),
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 34,
    slug: 'stretch leaf baseline flex row',
    idea: 'h2-flex-stretch-leaf-from-live + FO flex baseline row + align-self:flex-start on FO *',
    css:
      flexRow('baseline') +
      'foreignObject *{align-self:flex-start!important;height:auto!important;min-height:auto!important}',
    extra: { inject: 'capture', radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 35,
    slug: 'stretch leaf center flex row',
    idea: 'h2-flex-stretch-leaf-from-live + FO flex center row + anchor align-self:center',
    css:
      flexRow('center') +
      'foreignObject a{align-self:center!important;height:auto!important;display:inline-block!important}',
    extra: { inject: 'capture', radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 36,
    slug: 'stretch leaf flex-end nav row',
    idea: 'h2-flex-stretch-leaf-from-live + nav flex flex-end row + nav a align-self:flex-end',
    css:
      NAV_FLEX('flex-end') +
      'foreignObject nav a{align-self:flex-end!important;height:auto!important;display:inline-block!important}',
    extra: { inject: 'capture', radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 37,
    slug: 'pin width baseline nav flex',
    idea: 'h2-pin-width-from-live + nav flex baseline row — pinned width with baseline text row cross-axis',
    css: NAV_FLEX('baseline'),
    extra: { inject: 'both', radicalPatch: 'h2-pin-width-from-live' },
  },
  {
    n: 38,
    slug: 'pin lh baseline nav gap zero',
    idea: 'h2-pin-line-height-from-live + nav flex baseline gap:0 — pinned lh on scoped nav text row',
    css:
      'foreignObject nav{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;' +
      'overflow:visible!important}',
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 39,
    slug: 'stretch leaf flex-end justify end',
    idea: 'h2-flex-stretch-leaf-from-live + FO flex flex-end + justify-content:flex-end on text row',
    css:
      flexRow('flex-end', ';justify-content:flex-end!important') +
      'foreignObject *{align-self:flex-start!important;height:auto!important}',
    extra: { inject: 'capture', radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 40,
    slug: 'flex-end row anchor baseline hybrid',
    idea: 'h2-pin-line-height-from-live + FO flex flex-end row + anchor align-self:baseline + from-font lh',
    css:
      flexRow('flex-end', ';justify-content:flex-start!important') +
      'foreignObject a{align-self:baseline!important;line-height:from-font!important;' +
      'display:inline!important;vertical-align:baseline!important}',
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w23-${num}`,
    label: `Loop AI b10 w23 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b10 w23; flex align-items baseline/center/flex-end text row; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

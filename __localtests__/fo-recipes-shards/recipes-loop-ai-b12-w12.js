/**
 * Loop AI batch-12 FO recipe shard (worker 12) — text-fix: line-height from-font cascade
 * invisible on FO>div wrapper chains; capture CSS reinjection only (no radicalPatch).
 * 40 recipes: loop-ai-b12-w12-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code,' +
  'foreignObject nav a'

const DIV_FF =
  'foreignObject>div{line-height:from-font!important;overflow:visible!important}'

/** @type {{ slug: string; idea: string; css: string }[]} */
const VARIANTS = [
  {
    slug: 'div-ff divstar-inherit',
    idea: 'FO>div from-font + FO>div * inherit — reassert font-metrics cascade through wrapper chain',
    css: DIV_FF + 'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff divstar-ff',
    idea: 'FO>div from-font + FO>div * from-font — duplicate from-font at each wrapper depth (cascade visibility)',
    css: DIV_FF + 'foreignObject>div *{line-height:from-font!important}',
  },
  {
    slug: 'div-normal divstar-ff',
    idea: 'FO>div normal + FO>div * from-font — normal outer strut vs from-font on descendants',
    css:
      'foreignObject>div{line-height:normal!important;overflow:visible!important}' +
      'foreignObject>div *{line-height:from-font!important}',
  },
  {
    slug: 'div-unset star-ff',
    idea: 'FO>div unset + FO * from-font — reset wrapper then from-font on all descendants',
    css:
      'foreignObject>div{line-height:unset!important}' +
      'foreignObject *{line-height:from-font!important}',
  },
  {
    slug: 'div-revert divstar-ff',
    idea: 'FO>div revert + FO>div * from-font — UA revert wrapper then from-font on div subtree',
    css:
      'foreignObject>div{line-height:revert!important}' +
      'foreignObject>div *{line-height:from-font!important}',
  },
  {
    slug: 'div-ff div>div-ff divstar-inherit',
    idea: 'FO>div from-font + FO>div>div from-font + FO>div>div * inherit — nested wrapper chain',
    css:
      DIV_FF +
      'foreignObject>div>div{line-height:from-font!important}' +
      'foreignObject>div>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-normal div>div-ff divstar-inherit',
    idea: 'FO>div normal + FO>div>div from-font + FO>div>div * inherit — two-level wrapper strut',
    css:
      'foreignObject>div{line-height:normal!important}' +
      'foreignObject>div>div{line-height:from-font!important}' +
      'foreignObject>div>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-unset div>div-ff divstar-unset',
    idea: 'FO>div unset + FO>div>div from-font + FO>div>div * unset — nested reset then from-font hub',
    css:
      'foreignObject>div{line-height:unset!important}' +
      'foreignObject>div>div{line-height:from-font!important}' +
      'foreignObject>div>div *{line-height:unset!important}',
  },
  {
    slug: 'div-ff div>div-inherit span-ff',
    idea: 'FO>div from-font + FO>div>div inherit + FO span from-font — mid-chain inherit + leaf from-font',
    css:
      DIV_FF +
      'foreignObject>div>div{line-height:inherit!important}' +
      'foreignObject span{line-height:from-font!important;display:inline!important}',
  },
  {
    slug: 'div-ff span-inherit',
    idea: 'FO>div from-font + FO span inherit — wrapper from-font with inline leaf inherit only',
    css:
      DIV_FF +
      'foreignObject span{line-height:inherit!important;display:inline!important;vertical-align:baseline!important}',
  },
  {
    slug: 'div-ff anchor-inherit',
    idea: 'FO>div from-font + FO a inherit baseline — nav anchor inherits invisible div from-font strut',
    css:
      DIV_FF +
      'foreignObject a{line-height:inherit!important;vertical-align:baseline!important;display:inline!important}',
  },
  {
    slug: 'div-ff label-ff',
    idea: 'FO>div from-font + FO label from-font — form label reasserts from-font (not inherit)',
    css:
      DIV_FF +
      'foreignObject label{line-height:from-font!important;display:inline-block!important}',
  },
  {
    slug: 'div-ff chain-inherit',
    idea: 'FO>div from-font + TEXT_CHAIN inherit — typography leaves inherit wrapper from-font',
    css: DIV_FF + `${TEXT_CHAIN}{line-height:inherit!important}`,
  },
  {
    slug: 'div-ff chain-ff',
    idea: 'FO>div from-font + TEXT_CHAIN from-font — explicit from-font on text leaves under FO>div',
    css: DIV_FF + `${TEXT_CHAIN}{line-height:from-font!important}`,
  },
  {
    slug: 'div-ff divstar-inherit baseline',
    idea: 'FO>div from-font + FO>div * inherit + vertical-align baseline — strut + baseline on wrapper leaves',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;vertical-align:baseline!important}',
  },
  {
    slug: 'div-ff divstar-inherit text-edge',
    idea: 'FO>div from-font + FO>div * inherit + text-box-edge normal — edge model with from-font cascade',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;text-box-edge:normal!important}',
  },
  {
    slug: 'div-ff divstar-inherit cap-edge',
    idea: 'FO>div from-font + FO>div * inherit + text-box-edge cap alphabetic — cap edge + from-font chain',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;text-box-edge:cap alphabetic!important}',
  },
  {
    slug: 'div-ff divstar-inherit font-size',
    idea: 'FO>div from-font + FO>div * inherit + font-size inherit — font-size cascade with from-font lh',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;font-size:inherit!important}',
  },
  {
    slug: 'div-ff block divstar-inherit',
    idea: 'FO>div from-font display block + FO>div * inherit — block wrapper BFC for strut visibility',
    css:
      'foreignObject>div{line-height:from-font!important;display:block!important;overflow:visible!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff iblock divstar-inherit',
    idea: 'FO>div from-font inline-block + FO>div * inherit — inline-block wrapper vs invisible strut',
    css:
      'foreignObject>div{line-height:from-font!important;display:inline-block!important;overflow:visible!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-contents divstar-ff',
    idea: 'FO>div display contents + FO>div * from-font — skip anonymous wrapper box; from-font on descendants',
    css:
      'foreignObject>div{display:contents!important}' +
      'foreignObject>div *{line-height:from-font!important}',
  },
  {
    slug: 'div-ff contain-none divstar-inherit',
    idea: 'FO>div from-font contain none + FO>div * inherit — drop paint containment on wrapper chain',
    css:
      'foreignObject>div{line-height:from-font!important;contain:none!important;overflow:visible!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff h-auto divstar-inherit',
    idea: 'FO>div from-font height auto + FO>div * inherit — auto block height with from-font strut cascade',
    css:
      'foreignObject>div{line-height:from-font!important;height:auto!important;min-height:0!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff wm-tb divstar-inherit',
    idea: 'FO>div from-font horizontal-tb + FO>div * inherit — writing-mode on wrapper before lh cascade',
    css:
      'foreignObject>div{line-height:from-font!important;writing-mode:horizontal-tb!important}' +
      'foreignObject>div *{line-height:inherit!important;writing-mode:horizontal-tb!important}',
  },
  {
    slug: 'div-ff ta-100 divstar-inherit',
    idea: 'FO>div from-font text-size-adjust 100% + FO>div * inherit — size-adjust with from-font wrapper',
    css:
      'foreignObject>div{line-height:from-font!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'chromium div-ff divstar-inherit',
    idea: 'Chromium font copy + FO>div from-font + FO>div * inherit — kerning/synthesis + from-font chain',
    css: CHROMIUM_COPY + DIV_FF + 'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff nav-ff navstar-inherit',
    idea: 'FO>div from-font + FO>div nav from-font + nav * inherit — nav subtree under FO>div wrapper',
    css:
      DIV_FF +
      'foreignObject>div nav{line-height:from-font!important;display:flex!important;align-items:baseline!important}' +
      'foreignObject>div nav *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff header-ff headerstar-inherit',
    idea: 'FO>div from-font + FO>div header from-font + header * inherit — header block under FO>div',
    css:
      DIV_FF +
      'foreignObject>div header{line-height:from-font!important}' +
      'foreignObject>div header *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff main-ff mainstar-inherit',
    idea: 'FO>div from-font + FO>div main from-font + main * inherit — main landmark wrapper chain',
    css:
      DIV_FF +
      'foreignObject>div main{line-height:from-font!important}' +
      'foreignObject>div main *{line-height:inherit!important;vertical-align:baseline!important}',
  },
  {
    slug: 'div-ff flex-col divstar-inherit',
    idea: 'FO>div from-font flex column + FO>div * inherit — flex wrapper with from-font strut on chain',
    css:
      'foreignObject>div{line-height:from-font!important;display:flex!important;flex-direction:column!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff flex-row baseline divstar-inherit',
    idea: 'FO>div from-font flex row baseline + FO>div * inherit — row flex cross-axis vs from-font lh',
    css:
      'foreignObject>div{line-height:from-font!important;display:flex!important;flex-direction:row!important;align-items:baseline!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff grid divstar-inherit',
    idea: 'FO>div from-font display grid + FO>div * inherit — grid wrapper with from-font line box',
    css:
      'foreignObject>div{line-height:from-font!important;display:grid!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff divstar-inherit trim-none',
    idea: 'FO>div from-font + FO>div * inherit + text-box-trim none — trim off with from-font cascade',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;text-box-trim:none!important}',
  },
  {
    slug: 'div-ff divstar-inherit leading-trim',
    idea: 'FO>div from-font + FO>div * inherit + leading-trim both — leading-trim with wrapper from-font',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;leading-trim:both!important}',
  },
  {
    slug: 'div-ff divstar-inherit baseline-source',
    idea: 'FO>div from-font + FO>div * inherit + baseline-source auto — baseline source + from-font chain',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;baseline-source:auto!important}',
  },
  {
    slug: 'div-ff star-inherit',
    idea: 'FO>div from-font + FO * inherit — whole FO subtree inherits wrapper from-font (not only div*)',
    css: DIV_FF + 'foreignObject *{line-height:inherit!important}',
  },
  {
    slug: 'div-ff star-ff',
    idea: 'FO>div from-font + FO * from-font — blanket from-font under FO>div (cascade redundancy)',
    css: DIV_FF + 'foreignObject *{line-height:from-font!important}',
  },
  {
    slug: 'div-ff divstar-inherit synthesis',
    idea: 'FO>div from-font + FO>div * inherit + font-synthesis none — synthesis off on leaves with cascade',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;font-synthesis:none!important}',
  },
  {
    slug: 'div-ff divstar-inherit geometric',
    idea: 'FO>div from-font + FO>div * inherit + text-rendering geometricPrecision — render mode + cascade',
    css:
      DIV_FF +
      'foreignObject>div *{line-height:inherit!important;text-rendering:geometricPrecision!important}',
  },
  {
    slug: 'div-initial divstar-inherit',
    idea: 'FO>div initial + FO>div * inherit — initial wrapper lh then inherit from-font intent on leaves',
    css:
      'foreignObject>div{line-height:initial!important}' +
      'foreignObject>div *{line-height:inherit!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = VARIANTS.map((v, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b12-w12-${n}`,
    label: `Loop AI b12 w12 #${n}: ${v.slug}`,
    idea: `from-font cascade invisible on FO>div chains: ${v.idea}`,
    css: FO_BASELINE_CSS + TEXT_LEAF + v.css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: `Loop AI b12 w12; ${v.slug}; from-font FO>div cascade visibility — capture only, no text bypass.`,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w12: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-12 FO recipe shard (worker 30) — text-fix: h2-pin-line-height-from-live +
 * decode-interval on every row (inject both: capture CSS + raster flush).
 * PRIMARY: radicalPatch h2-pin-line-height-from-live × line-height wrapper chains × decode-interval
 * 40 recipes: loop-ai-b12-w30-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const PIN_LH = 'h2-pin-line-height-from-live'
const DECODE = 'decode-interval'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'pin lh FO>div normal',
    idea: 'h2-pin-line-height-from-live + FO>div line-height:normal + decode-interval raster flush after live strut pin',
    css: 'foreignObject>div{line-height:normal!important}',
  },
  {
    n: 2,
    slug: 'pin lh FO>div unset',
    idea: 'h2-pin-line-height-from-live + FO>div line-height:unset cascade reset + decode-interval before FO draw',
    css: 'foreignObject>div{line-height:unset!important}',
  },
  {
    n: 3,
    slug: 'pin lh FO>div from-font',
    idea: 'h2-pin-line-height-from-live + FO>div line-height:from-font font-metrics strut + decode-interval',
    css: 'foreignObject>div{line-height:from-font!important}',
  },
  {
    n: 4,
    slug: 'pin lh FO>div* normal',
    idea: 'h2-pin-line-height-from-live + FO>div * line-height:normal on wrapper subtree + decode-interval',
    css: 'foreignObject>div *{line-height:normal!important}',
  },
  {
    n: 5,
    slug: 'pin lh FO>div* unset',
    idea: 'h2-pin-line-height-from-live + FO>div * line-height:unset scoped reset + decode-interval raster wait',
    css: 'foreignObject>div *{line-height:unset!important}',
  },
  {
    n: 6,
    slug: 'pin lh FO>div* from-font',
    idea: 'h2-pin-line-height-from-live + FO>div * line-height:from-font on wrapper leaves + decode-interval',
    css: 'foreignObject>div *{line-height:from-font!important}',
  },
  {
    n: 7,
    slug: 'pin lh FO span normal',
    idea: 'h2-pin-line-height-from-live + FO span line-height:normal inline strut + decode-interval',
    css: 'foreignObject span{line-height:normal!important;display:inline!important}',
  },
  {
    n: 8,
    slug: 'pin lh FO span unset',
    idea: 'h2-pin-line-height-from-live + FO span line-height:unset inline reset + decode-interval',
    css: 'foreignObject span{line-height:unset!important;display:inline!important}',
  },
  {
    n: 9,
    slug: 'pin lh FO span from-font',
    idea: 'h2-pin-line-height-from-live + FO span line-height:from-font inline metrics + decode-interval',
    css: 'foreignObject span{line-height:from-font!important;display:inline!important}',
  },
  {
    n: 10,
    slug: 'pin lh FO* normal',
    idea: 'h2-pin-line-height-from-live + FO * line-height:normal global leaf strut + decode-interval',
    css: 'foreignObject *{line-height:normal!important}',
  },
  {
    n: 11,
    slug: 'pin lh FO* unset',
    idea: 'h2-pin-line-height-from-live + FO * line-height:unset global cascade + decode-interval',
    css: 'foreignObject *{line-height:unset!important}',
  },
  {
    n: 12,
    slug: 'pin lh FO* from-font',
    idea: 'h2-pin-line-height-from-live + FO * line-height:from-font global font-metrics + decode-interval',
    css: 'foreignObject *{line-height:from-font!important}',
  },
  {
    n: 13,
    slug: 'pin lh div normal inner from-font',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO>div>div from-font nested chain + decode-interval',
    css:
      'foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:from-font!important}',
  },
  {
    n: 14,
    slug: 'pin lh div from-font inner normal',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO>div>div normal inverted chain + decode-interval',
    css:
      'foreignObject>div{line-height:from-font!important}foreignObject>div>div{line-height:normal!important}',
  },
  {
    n: 15,
    slug: 'pin lh div unset star normal',
    idea: 'h2-pin-line-height-from-live + FO>div unset + FO * normal reset-then-normal + decode-interval',
    css:
      'foreignObject>div{line-height:unset!important}foreignObject *{line-height:normal!important}',
  },
  {
    n: 16,
    slug: 'pin lh div from-font star inherit',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO * inherit metrics cascade + decode-interval',
    css:
      'foreignObject>div{line-height:from-font!important}foreignObject *{line-height:inherit!important}',
  },
  {
    n: 17,
    slug: 'pin lh div normal span unset',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO span unset baseline valign + decode-interval',
    css:
      'foreignObject>div{line-height:normal!important}foreignObject span{line-height:unset!important;vertical-align:baseline!important}',
  },
  {
    n: 18,
    slug: 'pin lh div from-font span normal',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO span normal inline restore + decode-interval',
    css:
      'foreignObject>div{line-height:from-font!important}foreignObject span{line-height:normal!important;vertical-align:baseline!important}',
  },
  {
    n: 19,
    slug: 'pin lh deep div>div>div',
    idea: 'h2-pin-line-height-from-live + FO>div>div normal + FO>div>div>div from-font deep wrappers + decode-interval',
    css:
      'foreignObject>div>div{line-height:normal!important}foreignObject>div>div>div{line-height:from-font!important}',
  },
  {
    n: 20,
    slug: 'pin lh div normal div* from-font',
    idea: 'h2-pin-line-height-from-live + FO>div normal outer + FO>div * from-font inner + decode-interval',
    css:
      'foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}',
  },
  {
    n: 21,
    slug: 'pin lh div unset div* normal',
    idea: 'h2-pin-line-height-from-live + FO>div unset outer + FO>div * normal inner + decode-interval',
    css:
      'foreignObject>div{line-height:unset!important}foreignObject>div *{line-height:normal!important}',
  },
  {
    n: 22,
    slug: 'pin lh FO nav normal',
    idea: 'h2-pin-line-height-from-live + FO nav line-height:normal flex nav wrapper + decode-interval',
    css: 'foreignObject nav{line-height:normal!important;overflow:visible!important}',
  },
  {
    n: 23,
    slug: 'pin lh FO nav a normal',
    idea: 'h2-pin-line-height-from-live + FO nav a line-height:normal nav anchors + decode-interval',
    css: 'foreignObject nav a{line-height:normal!important;box-sizing:border-box!important}',
  },
  {
    n: 24,
    slug: 'pin lh FO nav a from-font',
    idea: 'h2-pin-line-height-from-live + FO nav a line-height:from-font nav anchors + decode-interval',
    css: 'foreignObject nav a{line-height:from-font!important;box-sizing:border-box!important}',
  },
  {
    n: 25,
    slug: 'pin lh FO nav a unset',
    idea: 'h2-pin-line-height-from-live + FO nav a line-height:unset nav anchors + decode-interval',
    css: 'foreignObject nav a{line-height:unset!important;box-sizing:border-box!important}',
  },
  {
    n: 26,
    slug: 'pin lh FO a normal baseline',
    idea: 'h2-pin-line-height-from-live + FO a line-height:normal vertical-align:baseline + decode-interval',
    css:
      'foreignObject a{line-height:normal!important;vertical-align:baseline!important;display:inline!important}',
  },
  {
    n: 27,
    slug: 'pin lh FO a from-font baseline',
    idea: 'h2-pin-line-height-from-live + FO a line-height:from-font vertical-align:baseline + decode-interval',
    css:
      'foreignObject a{line-height:from-font!important;vertical-align:baseline!important;display:inline!important}',
  },
  {
    n: 28,
    slug: 'pin lh FO a unset baseline',
    idea: 'h2-pin-line-height-from-live + FO a line-height:unset vertical-align:baseline + decode-interval',
    css:
      'foreignObject a{line-height:unset!important;vertical-align:baseline!important;display:inline!important}',
  },
  {
    n: 29,
    slug: 'pin lh div>nav normal nav a from-font',
    idea: 'h2-pin-line-height-from-live + FO>div>nav normal + FO nav a from-font two-level nav + decode-interval',
    css:
      'foreignObject>div>nav{line-height:normal!important}foreignObject nav a{line-height:from-font!important}',
  },
  {
    n: 30,
    slug: 'pin lh div>nav from-font nav a normal',
    idea: 'h2-pin-line-height-from-live + FO>div>nav from-font + FO nav a normal inverted nav + decode-interval',
    css:
      'foreignObject>div>nav{line-height:from-font!important}foreignObject nav a{line-height:normal!important}',
  },
  {
    n: 31,
    slug: 'pin lh div>nav unset nav a unset',
    idea: 'h2-pin-line-height-from-live + FO>div>nav unset + FO nav a unset full nav lh reset + decode-interval',
    css:
      'foreignObject>div>nav{line-height:unset!important}foreignObject nav a{line-height:unset!important}',
  },
  {
    n: 32,
    slug: 'pin lh FO p normal',
    idea: 'h2-pin-line-height-from-live + FO p line-height:normal paragraph blocks + decode-interval',
    css: 'foreignObject p{line-height:normal!important;display:block!important}',
  },
  {
    n: 33,
    slug: 'pin lh FO label from-font',
    idea: 'h2-pin-line-height-from-live + FO label line-height:from-font form labels + decode-interval',
    css: 'foreignObject label{line-height:from-font!important;display:inline-block!important}',
  },
  {
    n: 34,
    slug: 'pin lh FO button normal',
    idea: 'h2-pin-line-height-from-live + FO button line-height:normal button text + decode-interval',
    css: 'foreignObject button{line-height:normal!important;box-sizing:border-box!important}',
  },
  {
    n: 35,
    slug: 'pin lh FO li unset',
    idea: 'h2-pin-line-height-from-live + FO li line-height:unset list items + decode-interval',
    css: 'foreignObject li{line-height:unset!important;display:list-item!important}',
  },
  {
    n: 36,
    slug: 'pin lh div normal star baseline',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO * normal vertical-align:baseline + decode-interval',
    css:
      'foreignObject>div{line-height:normal!important}foreignObject *{line-height:normal!important;vertical-align:baseline!important}',
  },
  {
    n: 37,
    slug: 'pin lh div from-font size-adjust',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + text-size-adjust 100% wrapper + decode-interval',
    css:
      'foreignObject>div{line-height:from-font!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
  },
  {
    n: 38,
    slug: 'pin lh triple div span chain',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO>div>div unset + FO span from-font triple chain + decode-interval',
    css:
      'foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:unset!important}foreignObject span{line-height:from-font!important}',
  },
  {
    n: 39,
    slug: 'pin lh triple div* chain',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO>div>div unset + FO>div * from-font triple leaves + decode-interval',
    css:
      'foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:unset!important}foreignObject>div *{line-height:from-font!important}',
  },
  {
    n: 40,
    slug: 'pin lh bare decode',
    idea: 'h2-pin-line-height-from-live bare TEXT_LEAF only — baseline pin timing vs decode-interval flush',
    css: '',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b12-w30-${num}`,
    label: `Loop AI b12 w30 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: PIN_LH,
    rasterPatch: DECODE,
    notes:
      'Loop AI b12 w30; h2-pin-line-height-from-live + decode-interval (capture+raster both); FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w30: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

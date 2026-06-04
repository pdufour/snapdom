/**
 * Loop AI batch-12 FO recipe shard (worker 25) — text-fix: text-box-edge cap alphabetic
 * invisible trim stack (leading-trim + text-box-trim + cap edge). No text-emphasis probes.
 * 40 recipes: loop-ai-b12-w25-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

/** Full stack trimming invisible half-leading; cap alphabetic edge model. */
const INVISIBLE_TRIM_BOTH =
  'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important'

const INVISIBLE_TRIM_BOTH_EDGES =
  'leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject small,foreignObject code,foreignObject nav a,foreignObject td,foreignObject th'

/** @param {string} inner */
const foStar = (inner) => `foreignObject *{${inner}}`

/** @type {{ n: number; slug: string; idea: string; css: string; extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'invisible trim stack FO star',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO * — invisible half-leading trim stack',
    css: foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 2,
    slug: 'invisible trim both-edges FO star',
    idea: 'leading-trim:both-edges + trim-both + cap alphabetic on FO * — both-edges invisible trim stack',
    css: foStar(INVISIBLE_TRIM_BOTH_EDGES),
  },
  {
    n: 3,
    slug: 'invisible trim start FO star',
    idea: 'leading-trim:start + text-box-trim:trim-start + cap alphabetic on FO * — over-edge invisible trim stack',
    css: foStar(
      'leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 4,
    slug: 'invisible trim end FO star',
    idea: 'leading-trim:end + text-box-trim:trim-end + cap alphabetic on FO * — under-edge invisible trim stack',
    css: foStar(
      'leading-trim:end!important;text-box-trim:trim-end!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 5,
    slug: 'invisible trim none vs both FO star',
    idea: 'leading-trim:none + text-box-trim:trim-both + cap alphabetic on FO * — conflicting trim directives',
    css: foStar(
      'leading-trim:none!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 6,
    slug: 'text-box shorthand invisible trim',
    idea: 'leading-trim:both + text-box:trim-both cap alphabetic shorthand on FO * — unified invisible trim stack',
    css: foStar(
      'leading-trim:both!important;text-box:trim-both cap alphabetic!important',
    ),
  },
  {
    n: 7,
    slug: 'legacy text-edge invisible trim',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-edge:cap alphabetic on FO * — legacy Chromium edge stack',
    css: foStar(
      'leading-trim:both!important;text-box-trim:trim-both!important;text-edge:cap alphabetic!important',
    ),
  },
  {
    n: 8,
    slug: 'invisible trim FO>div',
    idea: 'full invisible trim stack on foreignObject>div wrapper only',
    css: `foreignObject>div{${INVISIBLE_TRIM_BOTH}}`,
  },
  {
    n: 9,
    slug: 'invisible trim FO>div star',
    idea: 'full invisible trim stack on foreignObject>div * — wrapper-scoped trim',
    css: `foreignObject>div *{${INVISIBLE_TRIM_BOTH}}`,
  },
  {
    n: 10,
    slug: 'invisible trim FO anchor',
    idea: 'invisible trim stack on foreignObject a — nav anchor cap edge trim',
    css: `foreignObject a{${INVISIBLE_TRIM_BOTH};display:inline-block!important}`,
  },
  {
    n: 11,
    slug: 'invisible trim nav anchor',
    idea: 'invisible trim stack on foreignObject nav a — scoped nav link trim',
    css: `foreignObject nav a{${INVISIBLE_TRIM_BOTH}}`,
  },
  {
    n: 12,
    slug: 'invisible trim FO>div anchor',
    idea: 'invisible trim stack on foreignObject>div a — wrapper-scoped anchor trim',
    css: `foreignObject>div a{${INVISIBLE_TRIM_BOTH};display:inline-block!important}`,
  },
  {
    n: 13,
    slug: 'invisible trim text chain',
    idea: 'both-edges invisible trim stack on inline text chain only (no strong/em selectors)',
    css: `${TEXT_CHAIN}{${INVISIBLE_TRIM_BOTH_EDGES}}`,
  },
  {
    n: 14,
    slug: 'invisible trim FO span',
    idea: 'invisible trim stack on foreignObject span leaves only',
    css: `foreignObject span{${INVISIBLE_TRIM_BOTH};display:inline!important}`,
  },
  {
    n: 15,
    slug: 'invisible trim FO label',
    idea: 'invisible trim stack on foreignObject label leaves only',
    css: `foreignObject label{${INVISIBLE_TRIM_BOTH}}`,
  },
  {
    n: 16,
    slug: 'invisible trim FO h2',
    idea: 'invisible trim stack on foreignObject h2 only — heading line box trim',
    css: `foreignObject h2{${INVISIBLE_TRIM_BOTH}}`,
  },
  {
    n: 17,
    slug: 'invisible trim overflow visible',
    idea: 'FO overflow:visible + invisible trim stack on FO * — clip vs trim interaction',
    css:
      'foreignObject{overflow:visible!important}' + foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 18,
    slug: 'invisible trim overflow hidden',
    idea: 'FO overflow:hidden + invisible trim stack on FO * — hidden overflow with cap trim',
    css:
      'foreignObject{overflow:hidden!important}' + foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 19,
    slug: 'invisible trim lh 1 baseline',
    idea: 'line-height:1 + vertical-align:baseline + invisible trim stack on FO *',
    css: foStar(
      `${INVISIBLE_TRIM_BOTH};line-height:1!important;vertical-align:baseline!important`,
    ),
  },
  {
    n: 20,
    slug: 'invisible trim lh normal',
    idea: 'line-height:normal + invisible trim stack on FO * — normal strut with half-leading trim',
    css: foStar(`${INVISIBLE_TRIM_BOTH};line-height:normal!important`),
  },
  {
    n: 21,
    slug: 'invisible trim lh from-font',
    idea: 'line-height:from-font + invisible trim stack on FO * — font-metrics strut + trim',
    css: foStar(`${INVISIBLE_TRIM_BOTH};line-height:from-font!important`),
  },
  {
    n: 22,
    slug: 'invisible trim geometricPrecision',
    idea: 'text-rendering:geometricPrecision + invisible trim stack on FO *',
    css: foStar(
      `${INVISIBLE_TRIM_BOTH};text-rendering:geometricPrecision!important`,
    ),
  },
  {
    n: 23,
    slug: 'invisible trim antialiased chain',
    idea: 'invisible trim stack on FO * + -webkit-font-smoothing:antialiased on text chain only',
    css:
      foStar(INVISIBLE_TRIM_BOTH) +
      `${TEXT_CHAIN}{-webkit-font-smoothing:antialiased!important}`,
  },
  {
    n: 24,
    slug: 'invisible trim chromium copy',
    idea: 'Chromium font-kerning copy + invisible trim stack on FO *',
    css: CHROMIUM_COPY + foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 25,
    slug: 'invisible trim flex center',
    idea: 'FO flex row align-items:center + invisible trim stack on FO *',
    css:
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}' +
      foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 26,
    slug: 'invisible trim flex baseline',
    idea: 'FO flex row align-items:baseline + invisible trim stack on FO *',
    css:
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' +
      foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 27,
    slug: 'invisible trim FO>div contents',
    idea: 'display:contents on FO>div + invisible trim stack on FO * — wrapper flatten vs trim',
    css:
      'foreignObject>div{display:contents!important}' + foStar(INVISIBLE_TRIM_BOTH),
  },
  {
    n: 28,
    slug: 'invisible trim nav contents',
    idea: 'display:contents on FO nav + invisible trim stack on nav a',
    css:
      'foreignObject nav{display:contents!important}foreignObject nav a{' +
      INVISIBLE_TRIM_BOTH +
      '}',
  },
  {
    n: 29,
    slug: 'invisible trim div wrapper star',
    idea: 'FO>div both-edges trim + FO>div * both trim — wrapper vs descendant invisible stacks',
    css:
      `foreignObject>div{${INVISIBLE_TRIM_BOTH_EDGES}}foreignObject>div *{${INVISIBLE_TRIM_BOTH}}`,
  },
  {
    n: 30,
    slug: 'invisible trim normal leading',
    idea: 'leading-trim:normal + trim-both + cap alphabetic on FO * — default leading trim keyword',
    css: foStar(
      'leading-trim:normal!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 31,
    slug: 'invisible trim start both-edges',
    idea: 'leading-trim:both-edges + trim-start + cap alphabetic on FO * — mixed edge trim keywords',
    css: foStar(
      'leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 32,
    slug: 'invisible trim end both-edges',
    idea: 'leading-trim:both-edges + trim-end + cap alphabetic on FO * — end-only text-box-trim',
    css: foStar(
      'leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 33,
    slug: 'invisible trim trim none',
    idea: 'leading-trim:both + text-box-trim:none + cap alphabetic on FO * — disable text-box-trim only',
    css: foStar(
      'leading-trim:both!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 34,
    slug: 'invisible trim edge normal',
    idea: 'leading-trim:both + trim-both + text-box-edge:normal on FO * — cap edge disabled baseline',
    css: foStar(
      'leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:normal!important',
    ),
  },
  {
    n: 35,
    slug: 'invisible trim size-adjust none',
    idea: 'invisible trim stack on FO * + text-size-adjust:none on FO>div',
    css:
      foStar(INVISIBLE_TRIM_BOTH) +
      'foreignObject>div{-webkit-text-size-adjust:none!important;text-size-adjust:none!important}',
  },
  {
    n: 36,
    slug: 'invisible trim font-smooth never',
    idea: 'invisible trim stack on FO * + font-smooth:never on text chain',
    css:
      foStar(INVISIBLE_TRIM_BOTH) +
      `${TEXT_CHAIN}{font-smooth:never!important}`,
  },
  {
    n: 37,
    slug: 'invisible trim decode-interval',
    idea: 'invisible trim stack + decode-interval raster flush on FO *',
    css: foStar(INVISIBLE_TRIM_BOTH),
    extra: { inject: 'both', rasterPatch: 'decode-interval' },
  },
  {
    n: 38,
    slug: 'invisible trim int decode',
    idea: 'both-edges invisible trim + integer-viewbox + decode-interval',
    css: foStar(INVISIBLE_TRIM_BOTH_EDGES),
    extra: {
      inject: 'both',
      rasterPatch: 'decode-interval',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 39,
    slug: 'invisible trim chain lh normal',
    idea: 'invisible trim stack + line-height:normal on text chain only',
    css:
      `${TEXT_CHAIN}{${INVISIBLE_TRIM_BOTH};line-height:normal!important}`,
  },
  {
    n: 40,
    slug: 'invisible trim chain calc 1em',
    idea: 'invisible trim stack + line-height:calc(1em) on text chain only',
    css:
      `${TEXT_CHAIN}{${INVISIBLE_TRIM_BOTH};line-height:calc(1em)!important}`,
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b12-w25-${num}`,
    label: `Loop AI b12 w25 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b12 w25; cap alphabetic invisible trim stack; no text-emphasis — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(
    `recipes-loop-ai-b12-w25: expected 40 recipes, got ${RECIPES.length}`,
  )
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

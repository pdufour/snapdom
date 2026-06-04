/**
 * Loop AI batch-10 FO recipe shard (worker 19) — text-fix: word-spacing variants on FO text.
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
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const FO_DIV_NORMAL = 'foreignObject>div{line-height:normal!important}'

/** @param {string} inner — declarations without trailing brace */
const wsStar = (inner) => `foreignObject *{${inner}}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'word-spacing normal reset',
    idea: 'word-spacing:normal!important on FO * — reset inherited em inter-word gaps vs live metrics',
    css: wsStar('word-spacing:normal!important'),
  },
  {
    n: 2,
    slug: 'word-spacing zero forced',
    idea: 'word-spacing:0!important on FO * — zero gap vs normal/author em spacing in FO raster',
    css: wsStar('word-spacing:0!important'),
  },
  {
    n: 3,
    slug: 'word-spacing initial keyword',
    idea: 'word-spacing:initial!important on FO * — initial spacing vs cascade normal/zero probes',
    css: wsStar('word-spacing:initial!important'),
  },
  {
    n: 4,
    slug: 'word-spacing unset cascade',
    idea: 'FO root word-spacing:0.12em + unset on FO * — cascade unset vs author em on ancestors',
    css:
      'foreignObject{word-spacing:0.12em!important}' +
      wsStar('word-spacing:unset!important'),
  },
  {
    n: 5,
    slug: 'word-spacing revert keyword',
    idea: 'word-spacing:revert!important on FO * — UA revert vs normal/initial reset stack',
    css: wsStar('word-spacing:revert!important'),
  },
  {
    n: 6,
    slug: 'word-spacing inherit root em',
    idea: 'FO root word-spacing:0.08em + inherit on FO * — inherited em gap on all text leaves',
    css:
      'foreignObject{word-spacing:0.08em!important}' +
      wsStar('word-spacing:inherit!important'),
  },
  {
    n: 7,
    slug: 'word-spacing 0.01em micro',
    idea: 'word-spacing:0.01em!important on FO * — micro em gap vs zero/normal FO strut width',
    css: wsStar('word-spacing:0.01em!important'),
  },
  {
    n: 8,
    slug: 'word-spacing 0.02em fine',
    idea: 'word-spacing:0.02em!important on FO * — fine em tracking between words before raster',
    css: wsStar('word-spacing:0.02em!important'),
  },
  {
    n: 9,
    slug: 'word-spacing 0.03em fine plus',
    idea: 'word-spacing:0.03em!important on FO * — between 0.02em and 0.05em vary2 em probes',
    css: wsStar('word-spacing:0.03em!important'),
  },
  {
    n: 10,
    slug: 'word-spacing 0.05em vary2',
    idea: 'word-spacing:0.05em!important on FO * — explicit em gap vs fix339 normal / type-zero',
    css: wsStar('word-spacing:0.05em!important'),
  },
  {
    n: 11,
    slug: 'word-spacing 0.08em mid',
    idea: 'word-spacing:0.08em!important on FO * — mid em inter-word gap vs inherit-root probe',
    css: wsStar('word-spacing:0.08em!important'),
  },
  {
    n: 12,
    slug: 'word-spacing 0.1em deci',
    idea: 'word-spacing:0.1em!important on FO * — deci em spacing vs unset-root 0.12em cascade',
    css: wsStar('word-spacing:0.1em!important'),
  },
  {
    n: 13,
    slug: 'word-spacing 0.12em author',
    idea: 'word-spacing:0.12em!important on FO * — author-scale em gap matching b4-w06 root author',
    css: wsStar('word-spacing:0.12em!important'),
  },
  {
    n: 14,
    slug: 'word-spacing 0.15em wide',
    idea: 'word-spacing:0.15em!important on FO * — wide em gap vs 0.1em/0.2em bracket',
    css: wsStar('word-spacing:0.15em!important'),
  },
  {
    n: 15,
    slug: 'word-spacing 0.2em wide',
    idea: 'word-spacing:0.2em!important on FO * — wide em spacing vs 0.25em capstone',
    css: wsStar('word-spacing:0.2em!important'),
  },
  {
    n: 16,
    slug: 'word-spacing 0.25em max em',
    idea: 'word-spacing:0.25em!important on FO * — large em inter-word gap before FO raster',
    css: wsStar('word-spacing:0.25em!important'),
  },
  {
    n: 17,
    slug: 'word-spacing 1px absolute',
    idea: 'word-spacing:1px!important on FO * — px gap vs em/ch/ex unit probes',
    css: wsStar('word-spacing:1px!important'),
  },
  {
    n: 18,
    slug: 'word-spacing 2px absolute',
    idea: 'word-spacing:2px!important on FO * — absolute px inter-word gap vs 1px/3px',
    css: wsStar('word-spacing:2px!important'),
  },
  {
    n: 19,
    slug: 'word-spacing 3px absolute',
    idea: 'word-spacing:3px!important on FO * — larger px gap vs em-normalized metrics',
    css: wsStar('word-spacing:3px!important'),
  },
  {
    n: 20,
    slug: 'word-spacing 0.5ch ch unit',
    idea: 'word-spacing:0.5ch!important on FO * — ch-unit gap vs em/px word-spacing probes',
    css: wsStar('word-spacing:0.5ch!important'),
  },
  {
    n: 21,
    slug: 'word-spacing 0.25ex ex unit',
    idea: 'word-spacing:0.25ex!important on FO * — ex-unit inter-word gap vs ch/em units',
    css: wsStar('word-spacing:0.25ex!important'),
  },
  {
    n: 22,
    slug: 'word-spacing -0.05em tight',
    idea: 'word-spacing:-0.05em!important on FO * — negative em tightening vs zero/normal reset',
    css: wsStar('word-spacing:-0.05em!important'),
  },
  {
    n: 23,
    slug: 'normal plus letter-spacing normal',
    idea: 'word-spacing:normal + letter-spacing:normal on FO * — dual spacing reset before raster',
    css: wsStar('word-spacing:normal!important;letter-spacing:normal!important'),
  },
  {
    n: 24,
    slug: 'zero plus text-spacing-trim',
    idea: 'word-spacing:0 + text-spacing-trim:space-all on FO * — zero gap + trim trailing space',
    css: wsStar('word-spacing:0!important;text-spacing-trim:space-all!important'),
  },
  {
    n: 25,
    slug: 'normal plus pre-wrap',
    idea: 'word-spacing:normal + white-space:pre-wrap on FO * — normal gaps with preserved runs',
    css: wsStar('word-spacing:normal!important;white-space:pre-wrap!important'),
  },
  {
    n: 26,
    slug: '0.05em plus nowrap',
    idea: 'word-spacing:0.05em + white-space:nowrap on FO * — em gap on single-line strut',
    css: wsStar('word-spacing:0.05em!important;white-space:nowrap!important'),
  },
  {
    n: 27,
    slug: 'normal on text chain',
    idea: 'word-spacing:normal on inline text chain selectors only — vs FO * star reset',
    css: `${TEXT_CHAIN}{word-spacing:normal!important}`,
  },
  {
    n: 28,
    slug: 'zero on anchors only',
    idea: 'word-spacing:0 on FO a only — nav anchor zero gap vs body star normal',
    css: 'foreignObject a{word-spacing:0!important}',
  },
  {
    n: 29,
    slug: '0.1em on paragraphs only',
    idea: 'word-spacing:0.1em on FO p only — block paragraph em gap vs inline span leaves',
    css: 'foreignObject p{word-spacing:0.1em!important}',
  },
  {
    n: 30,
    slug: 'root 0.1em star inherit',
    idea: 'FO root word-spacing:0.1em + inherit on FO * — root model + inherited gap on leaves',
    css:
      'foreignObject{word-spacing:0.1em!important}' +
      wsStar('word-spacing:inherit!important'),
  },
  {
    n: 31,
    slug: 'normal plus font-kerning none',
    idea: 'word-spacing:normal + font-kerning:none on FO * — spacing reset without kern synthesis',
    css: wsStar('word-spacing:normal!important;font-kerning:none!important'),
  },
  {
    n: 32,
    slug: 'chromium copy plus normal',
    idea: 'Chromium FO font copy + word-spacing:normal on FO * — kerning copy + gap reset',
    css: CHROMIUM_COPY + wsStar('word-spacing:normal!important'),
  },
  {
    n: 33,
    slug: '0.05em plus text-align justify',
    idea: 'word-spacing:0.05em + text-align:justify on FO * — em gap under justified lines',
    css: wsStar('word-spacing:0.05em!important;text-align:justify!important'),
  },
  {
    n: 34,
    slug: 'normal plus tab-size 8',
    idea: 'word-spacing:normal + tab-size:8 on FO * — normal gaps with explicit tab stops',
    css: wsStar('word-spacing:normal!important;tab-size:8!important'),
  },
  {
    n: 35,
    slug: 'unset plus letter-spacing em',
    idea: 'word-spacing:unset + letter-spacing:0.02em on FO * — unset words + em glyph tracking',
    css: wsStar('word-spacing:unset!important;letter-spacing:0.02em!important'),
  },
  {
    n: 36,
    slug: 'zero plus overflow-wrap anywhere',
    idea: 'word-spacing:0 + overflow-wrap:anywhere on FO * — zero gap with break-anywhere wraps',
    css: wsStar('word-spacing:0!important;overflow-wrap:anywhere!important'),
  },
  {
    n: 37,
    slug: '0.1em plus word-break break-word',
    idea: 'word-spacing:0.1em + word-break:break-word on FO * — em gap with break-word policy',
    css: wsStar('word-spacing:0.1em!important;word-break:break-word!important'),
  },
  {
    n: 38,
    slug: 'normal plus text-wrap balance',
    idea: 'word-spacing:normal + text-wrap:balance on FO * — normal gaps with balanced line lengths',
    css: wsStar('word-spacing:normal!important;text-wrap:balance!important'),
  },
  {
    n: 39,
    slug: 'per-selector span em anchor normal',
    idea: 'word-spacing:0.05em on FO span + normal on FO a — inline vs anchor gap contrast',
    css:
      'foreignObject span{word-spacing:0.05em!important}' +
      'foreignObject a{word-spacing:normal!important}',
  },
  {
    n: 40,
    slug: 'tour normal lh chromium pre-wrap',
    idea: 'FO>div normal lh + Chromium copy + word-spacing:normal + letter-spacing:normal + pre-wrap',
    css:
      FO_DIV_NORMAL +
      CHROMIUM_COPY +
      wsStar(
        'word-spacing:normal!important;letter-spacing:normal!important;white-space:pre-wrap!important',
      ),
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w19-${num}`,
    label: `Loop AI b10 w19 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w19; word-spacing variant; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

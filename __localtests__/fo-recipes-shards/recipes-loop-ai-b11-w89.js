/**
 * Loop AI batch-11 FO recipe shard (worker 89) — text-fix: pin-lh + stretch-leaf pairs (50 unique)
 * 50 recipes: loop-ai-b11-w89-001..050
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'
const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'
const flexRow = (align) =>
  'foreignObject{display:flex!important;flex-direction:row!important;' +
  `align-items:${align}!important;overflow:visible!important}`
const navFlex = (align) =>
  'foreignObject nav{display:flex!important;flex-direction:row!important;' +
  `align-items:${align}!important;gap:0!important;overflow:visible!important}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'pin-lh stretch lh-from-font',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + line-height:from-font on FO *',
    css: 'foreignObject *{line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 2,
    slug: 'pin-lh stretch lh-normal',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + line-height:normal on FO *',
    css: 'foreignObject *{line-height:normal!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 3,
    slug: 'pin-lh stretch lh-unset',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + line-height:unset on FO *',
    css: 'foreignObject *{line-height:unset!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 4,
    slug: 'pin-lh stretch lh-1',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + line-height:1 on FO *',
    css: 'foreignObject *{line-height:1!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 5,
    slug: 'pin-lh stretch fo-div-normal',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + FO>div normal wrapper',
    css: 'foreignObject>div{line-height:normal!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 6,
    slug: 'pin-lh stretch fo-div-unset',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + FO>div * unset',
    css: 'foreignObject>div *{line-height:unset!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 7,
    slug: 'pin-lh stretch align-self-start',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + align-self:flex-start on FO *',
    css: 'foreignObject *{align-self:flex-start!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 8,
    slug: 'pin-lh stretch height-auto',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + height:auto on FO *',
    css: 'foreignObject *{height:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 9,
    slug: 'pin-lh stretch min-height-auto',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + min-height:auto on FO *',
    css: 'foreignObject *{min-height:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 10,
    slug: 'pin-lh stretch min-height-0',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + min-height:0 on FO *',
    css: 'foreignObject *{min-height:0!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 11,
    slug: 'pin-lh stretch flex-shrink-1',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + flex-shrink:1 on FO *',
    css: 'foreignObject *{flex-shrink:1!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 12,
    slug: 'pin-lh stretch flex-shrink-0',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + flex-shrink:0 on FO *',
    css: 'foreignObject *{flex-shrink:0!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 13,
    slug: 'pin-lh stretch vertical-align-baseline',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + vertical-align:baseline on FO a',
    css: 'foreignObject *{vertical-align:baseline!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 14,
    slug: 'pin-lh stretch display-inline-block-a',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + inline-block on FO a',
    css: 'foreignObject a{display:inline-block!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 15,
    slug: 'pin-lh stretch nav-flex-start',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + nav align-items:flex-start',
    css: 'foreignObject nav{align-items:flex-start!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 16,
    slug: 'pin-lh stretch nav-baseline',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + nav align-items:baseline',
    css: 'foreignObject nav{align-items:baseline!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 17,
    slug: 'pin-lh stretch flex-baseline-row',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + FO flex baseline row',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{align-self:flex-start!important;height:auto!important;min-height:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 18,
    slug: 'pin-lh stretch flex-center-row',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + FO flex center row',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{align-self:flex-start!important;height:auto!important;min-height:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 19,
    slug: 'pin-lh stretch flex-stretch-row',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + FO flex stretch row',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{align-self:flex-start!important;height:auto!important;min-height:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 20,
    slug: 'pin-lh stretch text-box-trim-none',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + text-box-trim:none on FO *',
    css: 'foreignObject *{text-box-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 21,
    slug: 'pin-lh stretch leading-trim-none',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + leading-trim:none on FO *',
    css: 'foreignObject *{leading-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 22,
    slug: 'pin-lh stretch text-box-edge-cap',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + text-box-edge:cap alphabetic',
    css: 'foreignObject *{text-box-edge:cap alphabetic!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 23,
    slug: 'pin-lh stretch font-kerning-normal',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + font-kerning:normal on FO root',
    css: 'foreignObject *{font-kerning:normal!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 24,
    slug: 'pin-lh stretch text-rendering-geo',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + text-rendering:geometricPrecision',
    css: 'foreignObject *{text-rendering:geometricPrecision!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 25,
    slug: 'pin-lh stretch text-rendering-speed',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + text-rendering:optimizeSpeed',
    css: 'foreignObject *{text-rendering:optimizeSpeed!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 26,
    slug: 'pin-lh stretch white-space-nowrap',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + white-space:nowrap on FO *',
    css: 'foreignObject *{white-space:nowrap!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 27,
    slug: 'pin-lh stretch overflow-wrap-anywhere',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + overflow-wrap:anywhere',
    css: 'foreignObject *{overflow-wrap:anywhere!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 28,
    slug: 'pin-lh stretch word-break-normal',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + word-break:normal',
    css: 'foreignObject *{word-break:normal!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 29,
    slug: 'pin-lh stretch text-transform-none',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + text-transform:none',
    css: 'foreignObject *{text-transform:none!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 30,
    slug: 'pin-lh stretch box-sizing-border',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + box-sizing:border-box on FO *',
    css: 'foreignObject *{box-sizing:border-box!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 31,
    slug: 'pin-lh stretch max-width-none',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + max-width:none',
    css: 'foreignObject *{max-width:none!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 32,
    slug: 'pin-lh stretch width-auto',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + width:auto on FO *',
    css: 'foreignObject *{width:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 33,
    slug: 'pin-lh stretch inline-size-auto',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + inline-size:auto',
    css: 'foreignObject *{inline-size:auto!important;width:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 34,
    slug: 'pin-lh stretch overflow-visible',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + overflow:visible on FO *',
    css: 'foreignObject *{overflow:visible!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 35,
    slug: 'pin-lh stretch gap-zero-nav',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + nav gap zero',
    css: 'foreignObject nav{gap:0!important;row-gap:0!important;column-gap:0!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 36,
    slug: 'pin-lh stretch anchor-nowrap',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + anchor nowrap',
    css: 'foreignObject a{white-space:nowrap!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 37,
    slug: 'pin-lh stretch span-inline',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + span inline inherit lh',
    css: 'foreignObject span{display:inline!important;line-height:inherit!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 38,
    slug: 'pin-lh stretch from-font-span',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + span from-font lh',
    css: 'foreignObject span{line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 39,
    slug: 'pin-lh stretch unset-span',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + span unset lh',
    css: 'foreignObject span{line-height:unset!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 40,
    slug: 'pin-lh stretch normal-span',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + span normal lh',
    css: 'foreignObject span{line-height:normal!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 41,
    slug: 'pin-lh stretch chromium-star',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + Chromium + from-font *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 42,
    slug: 'pin-lh stretch decode-interval',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + from-font + decode-interval',
    css: 'foreignObject *{line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both","rasterPatch":"decode-interval"}
  },
  {
    n: 43,
    slug: 'pin-lh stretch integer-viewbox',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + normal lh + integer-viewbox',
    css: 'foreignObject *{line-height:normal!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both","svgRootRound":"integer-viewbox"}
  },
  {
    n: 44,
    slug: 'pin-lh stretch fonts-ready',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + unset lh + fonts-ready',
    css: 'foreignObject *{line-height:unset!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both","rasterPatch":"fonts-ready-interval"}
  },
  {
    n: 45,
    slug: 'pin-lh stretch device-grid',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + min-height:0 + device-grid-floor',
    css: 'foreignObject *{min-height:0!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both","rasterPatch":"device-grid-floor"}
  },
  {
    n: 46,
    slug: 'pin-lh stretch nav-a-flex-start',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + nav a flex-start',
    css: 'foreignObject nav a{align-self:flex-start!important;height:auto!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 47,
    slug: 'pin-lh stretch stretch-anchor-block',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + anchor block flex-start',
    css: 'foreignObject a{display:inline-block!important;align-self:flex-start!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 48,
    slug: 'pin-lh stretch stretch-span-baseline',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + span baseline vertical-align',
    css: 'foreignObject span{vertical-align:baseline!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 49,
    slug: 'pin-lh stretch stretch-trim-both',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + trim-both stack',
    css: 'foreignObject *{text-box-trim:trim-both!important;leading-trim:both!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  },
  {
    n: 50,
    slug: 'pin-lh stretch stretch-half-leading',
    idea: 'h2-pin-lh-flex-stretch-leaf-from-live + lh1 + trim none half-leading',
    css: 'foreignObject *{line-height:1!important;text-box-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","inject":"both"}
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 50) {
    throw new Error(`recipes-loop-ai-b11-w89: expected 50 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w89-${num}`,
    label: `Loop AI b11 w89 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w89; pin-lh + stretch-leaf pairs (50 unique); FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

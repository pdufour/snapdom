/**
 * Loop AI batch-11 FO recipe shard (worker 90) — text-fix: pin-width + pin-lh pairs (50 unique)
 * 50 recipes: loop-ai-b11-w90-001..050
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'
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
    slug: 'pin width lh lh-from-font',
    idea: 'h2-pin-width-line-height-from-live + line-height:from-font on FO *',
    css: 'foreignObject *{line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 2,
    slug: 'pin width lh lh-normal',
    idea: 'h2-pin-width-line-height-from-live + line-height:normal on FO *',
    css: 'foreignObject *{line-height:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 3,
    slug: 'pin width lh lh-unset',
    idea: 'h2-pin-width-line-height-from-live + line-height:unset on FO *',
    css: 'foreignObject *{line-height:unset!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 4,
    slug: 'pin width lh lh-1',
    idea: 'h2-pin-width-line-height-from-live + line-height:1 on FO *',
    css: 'foreignObject *{line-height:1!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 5,
    slug: 'pin width lh fo-div-normal',
    idea: 'h2-pin-width-line-height-from-live + FO>div normal',
    css: 'foreignObject>div{line-height:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 6,
    slug: 'pin width lh fo-div-from-font',
    idea: 'h2-pin-width-line-height-from-live + FO>div from-font',
    css: 'foreignObject>div{line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 7,
    slug: 'pin width lh max-inline-fit',
    idea: 'h2-pin-width-line-height-from-live + max-inline-size:fit-content',
    css: 'foreignObject *{max-inline-size:fit-content!important;width:auto!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 8,
    slug: 'pin width lh width-fit',
    idea: 'h2-pin-width-line-height-from-live + width:fit-content',
    css: 'foreignObject *{width:fit-content!important;max-width:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 9,
    slug: 'pin width lh inline-fit',
    idea: 'h2-pin-width-line-height-from-live + inline-size:fit-content',
    css: 'foreignObject *{inline-size:fit-content!important;width:auto!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 10,
    slug: 'pin width lh max-width-none',
    idea: 'h2-pin-width-line-height-from-live + max-width:none',
    css: 'foreignObject *{max-width:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 11,
    slug: 'pin width lh width-auto',
    idea: 'h2-pin-width-line-height-from-live + width:auto',
    css: 'foreignObject *{width:auto!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 12,
    slug: 'pin width lh min-width-0',
    idea: 'h2-pin-width-line-height-from-live + min-width:0',
    css: 'foreignObject *{min-width:0!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 13,
    slug: 'pin width lh white-space-nowrap',
    idea: 'h2-pin-width-line-height-from-live + white-space:nowrap',
    css: 'foreignObject *{white-space:nowrap!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 14,
    slug: 'pin width lh overflow-wrap-anywhere',
    idea: 'h2-pin-width-line-height-from-live + overflow-wrap:anywhere',
    css: 'foreignObject *{overflow-wrap:anywhere!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 15,
    slug: 'pin width lh word-break-normal',
    idea: 'h2-pin-width-line-height-from-live + word-break:normal',
    css: 'foreignObject *{word-break:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 16,
    slug: 'pin width lh text-overflow-clip',
    idea: 'h2-pin-width-line-height-from-live + text-overflow:clip',
    css: 'foreignObject *{text-overflow:clip!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 17,
    slug: 'pin width lh text-indent-zero',
    idea: 'h2-pin-width-line-height-from-live + text-indent:0',
    css: 'foreignObject *{text-indent:0!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 18,
    slug: 'pin width lh text-align-start',
    idea: 'h2-pin-width-line-height-from-live + text-align:start',
    css: 'foreignObject *{text-align:start!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 19,
    slug: 'pin width lh direction-ltr',
    idea: 'h2-pin-width-line-height-from-live + direction:ltr',
    css: 'foreignObject *{direction:ltr!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 20,
    slug: 'pin width lh unicode-bidi-isolate',
    idea: 'h2-pin-width-line-height-from-live + unicode-bidi:isolate',
    css: 'foreignObject *{unicode-bidi:isolate!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 21,
    slug: 'pin width lh font-size-adjust-none',
    idea: 'h2-pin-width-line-height-from-live + font-size-adjust:none',
    css: 'foreignObject *{font-size-adjust:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 22,
    slug: 'pin width lh text-transform-none',
    idea: 'h2-pin-width-line-height-from-live + text-transform:none',
    css: 'foreignObject *{text-transform:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 23,
    slug: 'pin width lh text-rendering-geo',
    idea: 'h2-pin-width-line-height-from-live + text-rendering:geometricPrecision',
    css: 'foreignObject *{text-rendering:geometricPrecision!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 24,
    slug: 'pin width lh font-kerning-normal',
    idea: 'h2-pin-width-line-height-from-live + font-kerning:normal root',
    css: 'foreignObject *{font-kerning:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 25,
    slug: 'pin width lh display-inline-block-a',
    idea: 'h2-pin-width-line-height-from-live + anchor inline-block',
    css: 'foreignObject a{display:inline-block!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 26,
    slug: 'pin width lh anchor-nowrap',
    idea: 'h2-pin-width-line-height-from-live + anchor nowrap',
    css: 'foreignObject a{white-space:nowrap!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 27,
    slug: 'pin width lh span-inline',
    idea: 'h2-pin-width-line-height-from-live + span inline',
    css: 'foreignObject span{display:inline!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 28,
    slug: 'pin width lh nav-gap-zero',
    idea: 'h2-pin-width-line-height-from-live + nav gap zero',
    css: 'foreignObject nav{gap:0!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 29,
    slug: 'pin width lh flex-baseline-row',
    idea: 'h2-pin-width-line-height-from-live + flex baseline row',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{width:auto!important;max-width:none!important;min-width:0!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 30,
    slug: 'pin width lh flex-center-row',
    idea: 'h2-pin-width-line-height-from-live + flex center row',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{width:auto!important;max-width:none!important;min-width:0!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 31,
    slug: 'pin width lh text-box-trim-none',
    idea: 'h2-pin-width-line-height-from-live + text-box-trim:none',
    css: 'foreignObject *{text-box-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 32,
    slug: 'pin width lh leading-trim-none',
    idea: 'h2-pin-width-line-height-from-live + leading-trim:none',
    css: 'foreignObject *{leading-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 33,
    slug: 'pin width lh text-box-edge-cap',
    idea: 'h2-pin-width-line-height-from-live + text-box-edge cap',
    css: 'foreignObject *{text-box-edge:cap alphabetic!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 34,
    slug: 'pin width lh overflow-visible',
    idea: 'h2-pin-width-line-height-from-live + overflow visible',
    css: 'foreignObject *{overflow:visible!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 35,
    slug: 'pin width lh box-sizing-border',
    idea: 'h2-pin-width-line-height-from-live + box-sizing border-box',
    css: 'foreignObject *{box-sizing:border-box!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 36,
    slug: 'pin width lh vertical-align-baseline',
    idea: 'h2-pin-width-line-height-from-live + vertical-align baseline on a',
    css: 'foreignObject *{vertical-align:baseline!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 37,
    slug: 'pin width lh letter-spacing-normal',
    idea: 'h2-pin-width-line-height-from-live + letter-spacing normal',
    css: 'foreignObject *{letter-spacing:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 38,
    slug: 'pin width lh word-spacing-normal',
    idea: 'h2-pin-width-line-height-from-live + word-spacing normal',
    css: 'foreignObject *{word-spacing:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 39,
    slug: 'pin width lh font-variant-caps-normal',
    idea: 'h2-pin-width-line-height-from-live + font-variant-caps normal',
    css: 'foreignObject *{font-variant-caps:normal!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 40,
    slug: 'pin width lh tab-size-8',
    idea: 'h2-pin-width-line-height-from-live + tab-size 8',
    css: 'foreignObject *{tab-size:8!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 41,
    slug: 'pin width lh chromium-fit',
    idea: 'h2-pin-width-line-height-from-live + Chromium + fit-content',
    css: 'foreignObject{font-kerning:normal!important}foreignObject *{max-inline-size:fit-content!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 42,
    slug: 'pin width lh decode-interval',
    idea: 'h2-pin-width-line-height-from-live + width auto + decode-interval',
    css: 'foreignObject *{width:auto!important;line-height:from-font!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both","rasterPatch":"decode-interval"}
  },
  {
    n: 43,
    slug: 'pin width lh integer-viewbox',
    idea: 'h2-pin-width-line-height-from-live + integer-viewbox snap',
    css: 'foreignObject *{line-height:normal!important;max-width:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both","svgRootRound":"integer-viewbox"}
  },
  {
    n: 44,
    slug: 'pin width lh fonts-ready',
    idea: 'h2-pin-width-line-height-from-live + fonts-ready-interval',
    css: 'foreignObject *{line-height:unset!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both","rasterPatch":"fonts-ready-interval"}
  },
  {
    n: 45,
    slug: 'pin width lh device-grid',
    idea: 'h2-pin-width-line-height-from-live + device-grid-floor',
    css: 'foreignObject *{min-width:0!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both","rasterPatch":"device-grid-floor"}
  },
  {
    n: 46,
    slug: 'pin width lh fit-div-normal',
    idea: 'h2-pin-width-line-height-from-live + fit-content + FO>div normal',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{width:fit-content!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 47,
    slug: 'pin width lh fit-nowrap',
    idea: 'h2-pin-width-line-height-from-live + fit-content + nowrap',
    css: 'foreignObject *{width:fit-content!important;white-space:nowrap!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 48,
    slug: 'pin width lh fit-anchor',
    idea: 'h2-pin-width-line-height-from-live + fit-content on anchor',
    css: 'foreignObject a{width:fit-content!important;display:inline-block!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 49,
    slug: 'pin width lh pin-lh-trim-none',
    idea: 'h2-pin-width-line-height-from-live + from-font + trim none',
    css: 'foreignObject *{line-height:from-font!important;text-box-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  },
  {
    n: 50,
    slug: 'pin width lh pin-lh-half-leading',
    idea: 'h2-pin-width-line-height-from-live + lh1 trim none half-leading',
    css: 'foreignObject *{line-height:1!important;text-box-trim:none!important}',
    extra: {"radicalPatch":"h2-pin-width-line-height-from-live","inject":"both"}
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 50) {
    throw new Error(`recipes-loop-ai-b11-w90: expected 50 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w90-${num}`,
    label: `Loop AI b11 w90 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w90; pin-width + pin-lh pairs (50 unique); FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

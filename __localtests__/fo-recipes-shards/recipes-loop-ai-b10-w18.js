/**
 * Loop AI batch-10 FO recipe shard (worker 18) — text-fix: letter-spacing normal/0/em/percent tokens.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    "n": 1,
    "slug": "letter-spacing normal star",
    "idea": "letter-spacing:normal on FO * — reset inherited tracking vs live glyph advances",
    "css": "foreignObject *{letter-spacing:normal!important}"
  },
  {
    "n": 2,
    "slug": "letter-spacing zero star",
    "idea": "letter-spacing:0 on FO * — zero tracking token vs normal/em inheritance",
    "css": "foreignObject *{letter-spacing:0!important}"
  },
  {
    "n": 3,
    "slug": "letter-spacing initial star",
    "idea": "letter-spacing:initial on FO * — cascade to initial tracking before FO raster",
    "css": "foreignObject *{letter-spacing:initial!important}"
  },
  {
    "n": 4,
    "slug": "letter-spacing unset star",
    "idea": "letter-spacing:unset on FO * — unset inherited em tracking on text leaves",
    "css": "foreignObject *{letter-spacing:unset!important}"
  },
  {
    "n": 5,
    "slug": "letter-spacing revert star",
    "idea": "letter-spacing:revert on FO * — UA revert tracking vs author em on ancestors",
    "css": "foreignObject *{letter-spacing:revert!important}"
  },
  {
    "n": 6,
    "slug": "FO -0.02em star inherit",
    "idea": "FO root -0.02em + * letter-spacing:inherit — inherit checkout-like root tracking",
    "css": "foreignObject{letter-spacing:-0.02em!important}foreignObject *{letter-spacing:inherit!important}"
  },
  {
    "n": 7,
    "slug": "FO -0.02em star normal reset",
    "idea": "FO root -0.02em + * letter-spacing:normal — reset negative em tracking on leaves",
    "css": "foreignObject{letter-spacing:-0.02em!important}foreignObject *{letter-spacing:normal!important}"
  },
  {
    "n": 8,
    "slug": "FO 0.02em star zero",
    "idea": "FO root 0.02em + * letter-spacing:0 — positive root em vs zero leaf tracking",
    "css": "foreignObject{letter-spacing:0.02em!important}foreignObject *{letter-spacing:0!important}"
  },
  {
    "n": 9,
    "slug": "FO 0.05em star unset",
    "idea": "FO root 0.05em + * letter-spacing:unset — wide root tracking vs unset cascade",
    "css": "foreignObject{letter-spacing:0.05em!important}foreignObject *{letter-spacing:unset!important}"
  },
  {
    "n": 10,
    "slug": "letter-spacing 0.01em star",
    "idea": "letter-spacing:0.01em on FO * — hairline positive em tracking probe",
    "css": "foreignObject *{letter-spacing:0.01em!important}"
  },
  {
    "n": 11,
    "slug": "letter-spacing 0.02em star",
    "idea": "letter-spacing:0.02em on FO * — small positive em tracking vs live metrics",
    "css": "foreignObject *{letter-spacing:0.02em!important}"
  },
  {
    "n": 12,
    "slug": "letter-spacing 0.03em star",
    "idea": "letter-spacing:0.03em on FO * — mid positive em tracking on all text leaves",
    "css": "foreignObject *{letter-spacing:0.03em!important}"
  },
  {
    "n": 13,
    "slug": "letter-spacing 0.05em star",
    "idea": "letter-spacing:0.05em on FO * — loose em tracking before FO raster",
    "css": "foreignObject *{letter-spacing:0.05em!important}"
  },
  {
    "n": 14,
    "slug": "letter-spacing 0.1em star",
    "idea": "letter-spacing:0.1em on FO * — wide em tracking stress on glyph advances",
    "css": "foreignObject *{letter-spacing:0.1em!important}"
  },
  {
    "n": 15,
    "slug": "letter-spacing -0.01em star",
    "idea": "letter-spacing:-0.01em on FO * — slight negative em tightening probe",
    "css": "foreignObject *{letter-spacing:-0.01em!important}"
  },
  {
    "n": 16,
    "slug": "letter-spacing -0.02em star",
    "idea": "letter-spacing:-0.02em on FO * — checkout-logo-scale negative em tracking",
    "css": "foreignObject *{letter-spacing:-0.02em!important}"
  },
  {
    "n": 17,
    "slug": "letter-spacing -0.05em star",
    "idea": "letter-spacing:-0.05em on FO * — strong negative em tracking on leaves",
    "css": "foreignObject *{letter-spacing:-0.05em!important}"
  },
  {
    "n": 18,
    "slug": "letter-spacing 0.005em star",
    "idea": "letter-spacing:0.005em on FO * — sub-hair em tracking vs zero/normal",
    "css": "foreignObject *{letter-spacing:0.005em!important}"
  },
  {
    "n": 19,
    "slug": "letter-spacing -0.03em star",
    "idea": "letter-spacing:-0.03em on FO * — between -0.02em and -0.05em negative em band",
    "css": "foreignObject *{letter-spacing:-0.03em!important}"
  },
  {
    "n": 20,
    "slug": "letter-spacing 0 percent star",
    "idea": "letter-spacing:0% on FO * — zero percent tracking token vs em lengths",
    "css": "foreignObject *{letter-spacing:0%!important}"
  },
  {
    "n": 21,
    "slug": "letter-spacing 1 percent star",
    "idea": "letter-spacing:1% on FO * — positive percent tracking relative to font size",
    "css": "foreignObject *{letter-spacing:1%!important}"
  },
  {
    "n": 22,
    "slug": "letter-spacing 2 percent star",
    "idea": "letter-spacing:2% on FO * — percent tracking band vs em tokens",
    "css": "foreignObject *{letter-spacing:2%!important}"
  },
  {
    "n": 23,
    "slug": "letter-spacing 3 percent star",
    "idea": "letter-spacing:3% on FO * — wider percent tracking on FO text leaves",
    "css": "foreignObject *{letter-spacing:3%!important}"
  },
  {
    "n": 24,
    "slug": "letter-spacing -1 percent star",
    "idea": "letter-spacing:-1% on FO * — negative percent tightening probe",
    "css": "foreignObject *{letter-spacing:-1%!important}"
  },
  {
    "n": 25,
    "slug": "letter-spacing -2 percent star",
    "idea": "letter-spacing:-2% on FO * — negative percent tracking vs -0.02em",
    "css": "foreignObject *{letter-spacing:-2%!important}"
  },
  {
    "n": 26,
    "slug": "letter-spacing -0.5 percent star",
    "idea": "letter-spacing:-0.5% on FO * — fractional negative percent tracking",
    "css": "foreignObject *{letter-spacing:-0.5%!important}"
  },
  {
    "n": 27,
    "slug": "FO div normal div star inherit",
    "idea": "FO>div letter-spacing:normal + div* inherit — wrapper normal vs inherited tracking",
    "css": "foreignObject>div{letter-spacing:normal!important}foreignObject>div *{letter-spacing:inherit!important}"
  },
  {
    "n": 28,
    "slug": "FO div -0.02em div star zero",
    "idea": "FO>div -0.02em + div* letter-spacing:0 — wrapper negative em vs zero leaves",
    "css": "foreignObject>div{letter-spacing:-0.02em!important}foreignObject>div *{letter-spacing:0!important}"
  },
  {
    "n": 29,
    "slug": "span normal inline",
    "idea": "letter-spacing:normal on FO span inline — inline text tracking reset",
    "css": "foreignObject span{letter-spacing:normal!important;display:inline!important}"
  },
  {
    "n": 30,
    "slug": "anchor zero nowrap baseline",
    "idea": "letter-spacing:0 on FO a + nowrap — nav-like anchor tracking vs single line",
    "css": "foreignObject a{letter-spacing:0!important;white-space:nowrap!important;text-wrap:nowrap!important;vertical-align:baseline!important;display:inline!important}"
  },
  {
    "n": 31,
    "slug": "label 0.01em",
    "idea": "letter-spacing:0.01em on FO label — form label em tracking vs live box",
    "css": "foreignObject label{letter-spacing:0.01em!important}"
  },
  {
    "n": 32,
    "slug": "strong 0.02em",
    "idea": "letter-spacing:0.02em on FO strong — emphasis inline em tracking probe",
    "css": "foreignObject strong{letter-spacing:0.02em!important;font-weight:inherit!important}"
  },
  {
    "n": 33,
    "slug": "first-line 0.02em",
    "idea": "::first-line letter-spacing:0.02em on FO * — first-line pseudo tracking vs DOM text",
    "css": "foreignObject *::first-line{letter-spacing:0.02em!important;color:inherit!important}foreignObject *{letter-spacing:normal!important}"
  },
  {
    "n": 34,
    "slug": "first-letter normal",
    "idea": "::first-letter letter-spacing:normal on FO * — drop-cap pseudo tracking reset",
    "css": "foreignObject *::first-letter{letter-spacing:normal!important;float:left!important;font-size:1.1em!important;margin-right:0.05em!important}"
  },
  {
    "n": 35,
    "slug": "normal plus word-spacing normal",
    "idea": "letter-spacing:normal + word-spacing:normal on FO * — dual spacing reset",
    "css": "foreignObject *{letter-spacing:normal!important;word-spacing:normal!important}"
  },
  {
    "n": 36,
    "slug": "zero plus font-kerning normal",
    "idea": "letter-spacing:0 + font-kerning:normal on FO * — zero tracking with explicit kerning",
    "css": "foreignObject *{letter-spacing:0!important;font-kerning:normal!important}"
  },
  {
    "n": 37,
    "slug": "normal plus nowrap",
    "idea": "letter-spacing:normal + white-space:nowrap on FO * — tracking reset on single-line leaves",
    "css": "foreignObject *{letter-spacing:normal!important;white-space:nowrap!important}"
  },
  {
    "n": 38,
    "slug": "-0.02em plus text-transform none",
    "idea": "letter-spacing:-0.02em + text-transform:none on FO * — tracking with transform reset",
    "css": "foreignObject *{letter-spacing:-0.02em!important;text-transform:none!important}"
  },
  {
    "n": 39,
    "slug": "trim space-all plus normal",
    "idea": "text-spacing-trim:space-all + letter-spacing:normal on FO * — trim stack with tracking reset",
    "css": "foreignObject *{text-spacing-trim:space-all!important;letter-spacing:normal!important}"
  },
  {
    "n": 40,
    "slug": "pin lh plus normal star",
    "idea": "pin lh + letter-spacing:normal on FO * — live line-height pin with tracking reset",
    "css": "foreignObject *{letter-spacing:normal!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b10-w18-${num}`,
    label: `Loop AI b10 w18 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b10 w18; letter-spacing normal/0/em/percent tokens; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 8) — text-fix: leading-trim all valid values/stacks.
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

/** @param {string} inner — declarations without trailing brace */
const edgeBlock = (inner) => `foreignObject *{${inner}}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  { n: 1, slug: 'leading-trim none solo', idea: 'leading-trim:none on FO * — disable half-leading trim baseline', css: edgeBlock('leading-trim:none!important') },
  { n: 2, slug: 'leading-trim normal solo', idea: 'leading-trim:normal on FO * — engine default trim vs explicit none/both', css: edgeBlock('leading-trim:normal!important') },
  { n: 3, slug: 'leading-trim start solo', idea: 'leading-trim:start on FO * — over-edge half-leading trim keyword', css: edgeBlock('leading-trim:start!important') },
  { n: 4, slug: 'leading-trim end solo', idea: 'leading-trim:end on FO * — under-edge half-leading trim keyword', css: edgeBlock('leading-trim:end!important') },
  { n: 5, slug: 'leading-trim both solo', idea: 'leading-trim:both on FO * — dual half-leading trim (Chromium alias)', css: edgeBlock('leading-trim:both!important') },
  { n: 6, slug: 'leading-trim both-edges solo', idea: 'leading-trim:both-edges on FO * — both-edges vs both keyword parity', css: edgeBlock('leading-trim:both-edges!important') },
  { n: 7, slug: 'none + trim-both', idea: 'leading-trim:none + text-box-trim:trim-both — conflicting trim directives on FO *', css: edgeBlock('leading-trim:none!important;text-box-trim:trim-both!important') },
  { n: 8, slug: 'normal + trim-start', idea: 'leading-trim:normal + text-box-trim:trim-start on FO * — start-edge line box trim stack', css: edgeBlock('leading-trim:normal!important;text-box-trim:trim-start!important') },
  { n: 9, slug: 'start + trim-start', idea: 'leading-trim:start + text-box-trim:trim-start on FO * — aligned over-edge trim stack', css: edgeBlock('leading-trim:start!important;text-box-trim:trim-start!important') },
  { n: 10, slug: 'end + trim-end', idea: 'leading-trim:end + text-box-trim:trim-end on FO * — aligned under-edge trim stack', css: edgeBlock('leading-trim:end!important;text-box-trim:trim-end!important') },
  { n: 11, slug: 'both + trim-both cap', idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *', css: edgeBlock('leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important') },
  { n: 12, slug: 'both-edges + trim-both cap', idea: 'leading-trim:both-edges + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *', css: edgeBlock('leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important') },
  { n: 13, slug: 'both + ex alphabetic', idea: 'leading-trim:both + text-box-edge:ex alphabetic on FO * — x-height edge trim without text-box-trim', css: edgeBlock('leading-trim:both!important;text-box-edge:ex alphabetic!important') },
  { n: 14, slug: 'both + text alphabetic', idea: 'leading-trim:both + text-box-edge:text alphabetic on FO * — text metric edge pairing', css: edgeBlock('leading-trim:both!important;text-box-edge:text alphabetic!important') },
  { n: 15, slug: 'both + text text edge', idea: 'leading-trim:both + text-box-edge:text text on FO * — symmetric text edge trim', css: edgeBlock('leading-trim:both!important;text-box-edge:text text!important') },
  { n: 16, slug: 'both-edges + leading edge', idea: 'leading-trim:both-edges + text-box-edge:leading alphabetic on FO * — leading metric edge stack', css: edgeBlock('leading-trim:both-edges!important;text-box-edge:leading alphabetic!important') },
  { n: 17, slug: 'normal + edge normal', idea: 'leading-trim:normal + text-box-edge:normal on FO * — default edge + default trim keyword', css: edgeBlock('leading-trim:normal!important;text-box-edge:normal!important') },
  { n: 18, slug: 'start + cap text edge', idea: 'leading-trim:start + text-box-edge:cap text on FO * — cap over + text under edge', css: edgeBlock('leading-trim:start!important;text-box-edge:cap text!important') },
  { n: 19, slug: 'end + ex alphabetic', idea: 'leading-trim:end + text-box-edge:ex alphabetic on FO * — ex-height start edge with alphabetic end', css: edgeBlock('leading-trim:end!important;text-box-edge:ex alphabetic!important') },
  { n: 20, slug: 'both-edges + edge normal', idea: 'leading-trim:both-edges + text-box-edge:normal on FO * — both-edges with normal edge baseline', css: edgeBlock('leading-trim:both-edges!important;text-box-edge:normal!important') },
  { n: 21, slug: 'both + text-edge cap', idea: 'leading-trim:both + text-edge:cap alphabetic on FO * — legacy Chromium text-edge stack', css: edgeBlock('leading-trim:both!important;text-edge:cap alphabetic!important') },
  { n: 22, slug: 'both-edges + text-edge cap', idea: 'leading-trim:both-edges + text-edge:cap alphabetic on FO * — both-edges with legacy text-edge', css: edgeBlock('leading-trim:both-edges!important;text-edge:cap alphabetic!important') },
  { n: 23, slug: 'start + text-edge cap', idea: 'leading-trim:start + text-edge:cap alphabetic on FO * — start trim + cap text-edge', css: edgeBlock('leading-trim:start!important;text-edge:cap alphabetic!important') },
  { n: 24, slug: 'end + text-edge cap', idea: 'leading-trim:end + text-edge:cap alphabetic on FO * — end trim + cap text-edge', css: edgeBlock('leading-trim:end!important;text-edge:cap alphabetic!important') },
  { n: 25, slug: 'both + lh 1 baseline', idea: 'leading-trim:both + line-height:1 + vertical-align:baseline on FO * — unitless strut + trim', css: edgeBlock('leading-trim:both!important;line-height:1!important;vertical-align:baseline!important') },
  { n: 26, slug: 'both + lh normal', idea: 'leading-trim:both + line-height:normal on FO * — normal strut with half-leading trim', css: edgeBlock('leading-trim:both!important;line-height:normal!important') },
  { n: 27, slug: 'none + lh from-font', idea: 'leading-trim:none + line-height:from-font on FO * — font metrics strut without trim', css: edgeBlock('leading-trim:none!important;line-height:from-font!important') },
  { n: 28, slug: 'both-edges + from-font', idea: 'leading-trim:both-edges + line-height:from-font on FO * — font-metrics strut with both-edges trim', css: edgeBlock('leading-trim:both-edges!important;line-height:from-font!important') },
  { n: 29, slug: 'both + lh calc 1em', idea: 'leading-trim:both + line-height:calc(1em) on FO * — em strut with trim (no px)', css: edgeBlock('leading-trim:both!important;line-height:calc(1em)!important') },
  { n: 30, slug: 'normal + calc 1em baseline', idea: 'leading-trim:normal + line-height:calc(1em) + vertical-align:baseline on FO *', css: edgeBlock('leading-trim:normal!important;line-height:calc(1em)!important;vertical-align:baseline!important') },
  { n: 31, slug: 'both + trim-both kerning', idea: 'leading-trim:both + text-box-trim:trim-both + font-kerning:normal on FO * — trim stack + kerning', css: edgeBlock('leading-trim:both!important;text-box-trim:trim-both!important;font-kerning:normal!important') },
  { n: 32, slug: 'both-edges + geometricPrecision', idea: 'leading-trim:both-edges + text-rendering:geometricPrecision on FO * — trim keyword + render hint', css: edgeBlock('leading-trim:both-edges!important;text-rendering:geometricPrecision!important') },
  { n: 33, slug: 'both trim stack antialiased', idea: 'leading-trim:both + trim-both + cap edge + -webkit-font-smoothing:antialiased on FO *', css: edgeBlock('leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important;-webkit-font-smoothing:antialiased!important') },
  { n: 34, slug: 'both text-box shorthand', idea: 'leading-trim:both + text-box:trim-both cap alphabetic shorthand on FO * — unified text-box property', css: edgeBlock('leading-trim:both!important;text-box:trim-both cap alphabetic!important') },
  { n: 35, slug: 'both-edges + trim-end ex', idea: 'leading-trim:both-edges + text-box-trim:trim-end + text-box-edge:ex alphabetic on FO *', css: edgeBlock('leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:ex alphabetic!important') },
  { n: 36, slug: 'start trim-start leading edge', idea: 'leading-trim:start + text-box-trim:trim-start + text-box-edge:leading alphabetic on FO *', css: edgeBlock('leading-trim:start!important;text-box-trim:trim-start!important;text-box-edge:leading alphabetic!important') },
  { n: 37, slug: 'both + decode-interval', idea: 'leading-trim:both + text-box-trim:trim-both + cap edge + decode-interval raster flush', css: edgeBlock('leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important'), extra: { inject: 'both', rasterPatch: 'decode-interval' } },
  { n: 38, slug: 'both-edges int decode', idea: 'leading-trim:both-edges + trim-both + cap edge + integer-viewbox + decode-interval', css: edgeBlock('leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important'), extra: { inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox' } },
  {
    n: 39,
    slug: 'both chromium copy stack',
    idea: 'Chromium font copy + leading-trim:both + text-box-trim:trim-both + text-edge cap alphabetic on FO *',
    css:
      CHROMIUM_COPY +
      edgeBlock('leading-trim:both!important;text-box-trim:trim-both!important;text-edge:cap alphabetic!important'),
  },
  {
    n: 40,
    slug: 'both-edges text chain only',
    idea: 'leading-trim:both-edges + trim-both + cap edge on text chain only (not all FO *)',
    css:
      TEXT_CHAIN +
      '{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w08-${num}`,
    label: `Loop AI b10 w08 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w08; leading-trim values/stacks; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

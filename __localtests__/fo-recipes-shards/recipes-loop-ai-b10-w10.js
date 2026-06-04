/**
 * Loop AI batch-10 FO recipe shard (worker 10) — text-fix: text-box-edge cap/leading/ex/alphabetic combos.
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
const edgeBlock = (inner) => `foreignObject *{${inner}}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'cap alphabetic trim both',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 2,
    slug: 'leading alphabetic both-edges',
    idea: 'leading-trim:both-edges + text-box-edge:leading alphabetic on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-edge:leading alphabetic!important',
    ),
  },
  {
    n: 3,
    slug: 'ex alphabetic trim-start',
    idea: 'leading-trim:normal + text-box-trim:trim-start + text-box-edge:ex alphabetic on FO *',
    css: edgeBlock(
      'leading-trim:normal!important;text-box-trim:trim-start!important;' +
        'text-box-edge:ex alphabetic!important',
    ),
  },
  {
    n: 4,
    slug: 'text alphabetic trim-end',
    idea: 'leading-trim:both + text-box-trim:trim-end + text-box-edge:text alphabetic on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-end!important;' +
        'text-box-edge:text alphabetic!important',
    ),
  },
  {
    n: 5,
    slug: 'cap edge + text-edge cap',
    idea: 'text-box-edge:cap alphabetic + text-edge:cap alphabetic + trim-both on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:cap alphabetic!important;text-edge:cap alphabetic!important',
    ),
  },
  {
    n: 6,
    slug: 'leading edge + text-edge leading',
    idea: 'text-box-edge:leading alphabetic + text-edge:leading alphabetic + both-edges trim on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
        'text-box-edge:leading alphabetic!important;text-edge:leading alphabetic!important',
    ),
  },
  {
    n: 7,
    slug: 'ex edge + text-edge ex',
    idea: 'text-box-edge:ex alphabetic + text-edge:ex alphabetic + trim-start on FO *',
    css: edgeBlock(
      'leading-trim:normal!important;text-box-trim:trim-start!important;' +
        'text-box-edge:ex alphabetic!important;text-edge:ex alphabetic!important',
    ),
  },
  {
    n: 8,
    slug: 'text edge + text-edge text',
    idea: 'text-box-edge:text alphabetic + text-edge:text alphabetic + trim-end on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-end!important;' +
        'text-box-edge:text alphabetic!important;text-edge:text alphabetic!important',
    ),
  },
  {
    n: 9,
    slug: 'cap text mixed edge',
    idea: 'text-box-edge:cap text + trim-both — over-cap / under-text edge pairing on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:cap text!important',
    ),
  },
  {
    n: 10,
    slug: 'leading ex mixed edge',
    idea: 'text-box-edge:leading ex + both-edges leading-trim on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
        'text-box-edge:leading ex!important',
    ),
  },
  {
    n: 11,
    slug: 'ex cap inverted edge',
    idea: 'text-box-edge:ex cap + trim-start — x-height over / cap under pairing on FO *',
    css: edgeBlock(
      'leading-trim:normal!important;text-box-trim:trim-start!important;' +
        'text-box-edge:ex cap!important',
    ),
  },
  {
    n: 12,
    slug: 'text leading mixed edge',
    idea: 'text-box-edge:text leading + trim-end on FO * — text over / leading under',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-end!important;' +
        'text-box-edge:text leading!important',
    ),
  },
  {
    n: 13,
    slug: 'cap alphabetic + lh normal',
    idea: 'text-box-edge:cap alphabetic + trim-both + line-height:normal on FO *',
    css:
      edgeBlock(
        'leading-trim:both!important;text-box-trim:trim-both!important;' +
          'text-box-edge:cap alphabetic!important;line-height:normal!important',
      ),
  },
  {
    n: 14,
    slug: 'leading alphabetic + from-font',
    idea: 'text-box-edge:leading alphabetic + both-edges + line-height:from-font on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
        'text-box-edge:leading alphabetic!important;line-height:from-font!important',
    ),
  },
  {
    n: 15,
    slug: 'ex alphabetic + fo-div normal',
    idea: 'text-box-edge:ex alphabetic + trim-start + FO>div line-height:normal strut restore',
    css:
      FO_DIV_NORMAL +
      edgeBlock(
        'leading-trim:normal!important;text-box-trim:trim-start!important;' +
          'text-box-edge:ex alphabetic!important',
      ),
  },
  {
    n: 16,
    slug: 'text alphabetic + pin lh live',
    idea: 'text-box-edge:text alphabetic + trim-end + h2-pin-line-height-from-live measured strut',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-end!important;' +
        'text-box-edge:text alphabetic!important',
    ),
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 17,
    slug: 'cap alphabetic + geometricPrecision',
    idea: 'text-box-edge:cap alphabetic + trim-both + text-rendering:geometricPrecision on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:cap alphabetic!important;text-rendering:geometricPrecision!important',
    ),
  },
  {
    n: 18,
    slug: 'leading alphabetic + antialiased',
    idea: 'text-box-edge:leading alphabetic + both-edges + -webkit-font-smoothing:antialiased on text chain',
    css:
      edgeBlock(
        'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
          'text-box-edge:leading alphabetic!important',
      ) +
      TEXT_CHAIN +
      '{-webkit-font-smoothing:antialiased!important}',
  },
  {
    n: 19,
    slug: 'ex alphabetic + optimizeLegibility',
    idea: 'text-box-edge:ex alphabetic + trim-start + text-rendering:optimizeLegibility on FO *',
    css: edgeBlock(
      'leading-trim:normal!important;text-box-trim:trim-start!important;' +
        'text-box-edge:ex alphabetic!important;text-rendering:optimizeLegibility!important',
    ),
  },
  {
    n: 20,
    slug: 'text alphabetic + chromium kern',
    idea: 'text-box-edge:text alphabetic + trim-end + Chromium font-kerning copy on FO root',
    css:
      CHROMIUM_COPY +
      edgeBlock(
        'leading-trim:both!important;text-box-trim:trim-end!important;' +
          'text-box-edge:text alphabetic!important',
      ),
  },
  {
    n: 21,
    slug: 'cap alphabetic trim none',
    idea: 'text-box-edge:cap alphabetic + text-box-trim:none — edge model without trim on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:none!important;' +
        'text-box-edge:cap alphabetic!important',
    ),
  },
  {
    n: 22,
    slug: 'leading alphabetic trim none',
    idea: 'text-box-edge:leading alphabetic + text-box-trim:none on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:none!important;' +
        'text-box-edge:leading alphabetic!important',
    ),
  },
  {
    n: 23,
    slug: 'ex alphabetic edge only',
    idea: 'text-box-edge:ex alphabetic only — no leading-trim or text-box-trim companion on FO *',
    css: edgeBlock('text-box-edge:ex alphabetic!important'),
  },
  {
    n: 24,
    slug: 'text alphabetic edge only',
    idea: 'text-box-edge:text alphabetic only on FO * — bare text edge probe',
    css: edgeBlock('text-box-edge:text alphabetic!important'),
  },
  {
    n: 25,
    slug: 'edge normal + trim both',
    idea: 'text-box-edge:normal + text-box-trim:trim-both + leading-trim:both on FO *',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:normal!important',
    ),
  },
  {
    n: 26,
    slug: 'edge auto + pin lh',
    idea: 'text-box-edge:auto + h2-pin-line-height-from-live — auto edge with measured strut pin',
    css: edgeBlock('text-box-edge:auto!important'),
    extra: { inject: 'both', radicalPatch: 'h2-pin-line-height-from-live' },
  },
  {
    n: 27,
    slug: 'edge leading single value',
    idea: 'text-box-edge:leading single-value + trim-both on FO * — vs leading alphabetic pair',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:leading!important',
    ),
  },
  {
    n: 28,
    slug: 'edge text single + trim both',
    idea: 'text-box-edge:text single-value + trim-both on FO * — vs text alphabetic pair',
    css: edgeBlock(
      'leading-trim:both!important;text-box-trim:trim-both!important;' +
        'text-box-edge:text!important',
    ),
  },
  {
    n: 29,
    slug: 'cap both-edges full trim',
    idea: 'text-box-edge:cap alphabetic + leading-trim:both-edges + trim-both + text-edge cap on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
        'text-box-edge:cap alphabetic!important;text-edge:cap alphabetic!important',
    ),
  },
  {
    n: 30,
    slug: 'leading both-edges trim-start',
    idea: 'text-box-edge:leading alphabetic + both-edges + trim-start on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-start!important;' +
        'text-box-edge:leading alphabetic!important',
    ),
  },
  {
    n: 31,
    slug: 'ex both-edges trim-end',
    idea: 'text-box-edge:ex alphabetic + both-edges + trim-end on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-end!important;' +
        'text-box-edge:ex alphabetic!important',
    ),
  },
  {
    n: 32,
    slug: 'cap both-edges dual edge props',
    idea: 'cap alphabetic text-box-edge + cap text-edge + both-edges + trim-both on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
        'text-box-edge:cap alphabetic!important;text-edge:cap alphabetic!important;' +
        'text-rendering:geometricPrecision!important',
    ),
  },
  {
    n: 33,
    slug: 'cap edge + stretch leaf',
    idea: 'text-box-edge:cap alphabetic + trim-both + h2-flex-stretch-leaf-from-live + FO>div normal',
    css:
      FO_DIV_NORMAL +
      edgeBlock(
        'leading-trim:both!important;text-box-trim:trim-both!important;' +
          'text-box-edge:cap alphabetic!important;align-self:flex-start!important;' +
          'height:auto!important;min-height:auto!important;max-height:none!important',
      ),
    extra: { inject: 'both', radicalPatch: 'h2-flex-stretch-leaf-from-live' },
  },
  {
    n: 34,
    slug: 'leading edge + pin width',
    idea: 'text-box-edge:leading alphabetic + both-edges + h2-pin-width-from-live on text leaves',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
        'text-box-edge:leading alphabetic!important',
    ),
    extra: { inject: 'both', radicalPatch: 'h2-pin-width-from-live' },
  },
  {
    n: 35,
    slug: 'ex edge + int decode',
    idea: 'text-box-edge:ex alphabetic + trim-start + integer-viewbox + decode-interval raster',
    css: edgeBlock(
      'leading-trim:normal!important;text-box-trim:trim-start!important;' +
        'text-box-edge:ex alphabetic!important',
    ),
    extra: { inject: 'both', svgRootRound: 'integer-viewbox', rasterPatch: 'decode-interval' },
  },
  {
    n: 36,
    slug: 'text edge + flex baseline row',
    idea: 'text-box-edge:text alphabetic + trim-end on flex baseline row FO root with cap text-edge on chain',
    css:
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;gap:0!important;overflow:visible!important}' +
      edgeBlock(
        'leading-trim:both!important;text-box-trim:trim-end!important;' +
          'text-box-edge:text alphabetic!important',
      ) +
      TEXT_CHAIN +
      '{text-box-edge:cap alphabetic!important;vertical-align:baseline!important}',
  },
  {
    n: 37,
    slug: 'cap full render stack',
    idea: 'cap alphabetic edge + trim both + lh normal + geometricPrecision + antialiased text chain',
    css:
      edgeBlock(
        'leading-trim:both!important;text-box-trim:trim-both!important;' +
          'text-box-edge:cap alphabetic!important;line-height:normal!important;' +
          'text-rendering:geometricPrecision!important',
      ) +
      TEXT_CHAIN +
      '{-webkit-font-smoothing:antialiased!important}',
  },
  {
    n: 38,
    slug: 'leading full from-font stack',
    idea: 'leading alphabetic edge + both-edges + trim-start + from-font lh + antialiased on FO *',
    css: edgeBlock(
      'leading-trim:both-edges!important;text-box-trim:trim-start!important;' +
        'text-box-edge:leading alphabetic!important;line-height:from-font!important;' +
        '-webkit-font-smoothing:antialiased!important',
    ),
  },
  {
    n: 39,
    slug: 'ex full text-edge stack',
    idea: 'ex alphabetic edge + trim-end + text-edge ex + FO>div normal + font-feature kern on FO *',
    css:
      FO_DIV_NORMAL +
      edgeBlock(
        'leading-trim:both!important;text-box-trim:trim-end!important;' +
          'text-box-edge:ex alphabetic!important;text-edge:ex alphabetic!important;' +
          'font-feature-settings:"kern" 1!important',
      ),
  },
  {
    n: 40,
    slug: 'quad edge text chain tour',
    idea: 'Per-selector text-box-edge cap/leading/ex/text on inline text chain + trim-both on FO *',
    css:
      edgeBlock('leading-trim:both!important;text-box-trim:trim-both!important') +
      'foreignObject a{text-box-edge:cap alphabetic!important}' +
      'foreignObject span{text-box-edge:leading alphabetic!important}' +
      'foreignObject label{text-box-edge:ex alphabetic!important}' +
      'foreignObject button{text-box-edge:text alphabetic!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w10-${num}`,
    label: `Loop AI b10 w10 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b10 w10; text-box-edge cap/leading/ex/alphabetic combo; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

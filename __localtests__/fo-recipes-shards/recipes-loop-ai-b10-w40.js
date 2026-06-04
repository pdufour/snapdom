/**
 * Loop AI batch-10 FO recipe shard (worker 40) — text-fix: unique h2 patch + one text CSS knob pairings.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const PIN_LH = 'h2-pin-line-height-from-live'
const STRETCH = 'h2-flex-stretch-leaf-from-live'
const PIN_WIDTH = 'h2-pin-width-from-live'

/** @param {string} decls */
const foStar = (decls) => `foreignObject *{${decls}}`

/** @param {string} sel @param {string} decls */
const foSel = (sel, decls) => `${sel}{${decls}}`

/**
 * 40 unique (radicalPatch, knob) pairs — one h2 patch + one text CSS knob each.
 * @type {{ n: number, patch: string, slug: string, knob: string, idea: string, css: string, inject?: 'capture' | 'both' }[]}
 */
const SPECS = [
  {
    n: 1,
    patch: PIN_LH,
    knob: 'lh-from-font-star',
    slug: 'pin lh + from-font *',
    idea: 'h2-pin-line-height-from-live + line-height:from-font on FO * — live strut pin vs font-metrics lh',
    css: foStar('line-height:from-font!important'),
    inject: 'both',
  },
  {
    n: 2,
    patch: PIN_LH,
    knob: 'lh-normal-star',
    slug: 'pin lh + normal *',
    idea: 'h2-pin-line-height-from-live + line-height:normal on FO * — measured pin vs normal strut',
    css: foStar('line-height:normal!important'),
    inject: 'both',
  },
  {
    n: 3,
    patch: PIN_LH,
    knob: 'lh-unset-star',
    slug: 'pin lh + unset *',
    idea: 'h2-pin-line-height-from-live + line-height:unset on FO * — cascade reset before live lh pin',
    css: foStar('line-height:unset!important'),
    inject: 'both',
  },
  {
    n: 4,
    patch: PIN_LH,
    knob: 'lh-unitless-1-star',
    slug: 'pin lh + lh 1 *',
    idea: 'h2-pin-line-height-from-live + line-height:1 on FO * — unitless strut vs measured pin',
    css: foStar('line-height:1!important'),
    inject: 'both',
  },
  {
    n: 5,
    patch: PIN_LH,
    knob: 'fo-div-normal',
    slug: 'pin lh + FO>div normal',
    idea: 'h2-pin-line-height-from-live + foreignObject>div line-height:normal — wrapper strut restore',
    css: 'foreignObject>div{line-height:normal!important}',
    inject: 'both',
  },
  {
    n: 6,
    patch: PIN_LH,
    knob: 'fo-div-star-from-font',
    slug: 'pin lh + FO>div * from-font',
    idea: 'h2-pin-line-height-from-live + line-height:from-font on foreignObject>div * only',
    css: 'foreignObject>div *{line-height:from-font!important}',
    inject: 'both',
  },
  {
    n: 7,
    patch: PIN_LH,
    knob: 'font-kerning-normal',
    slug: 'pin lh + font-kerning normal',
    idea: 'h2-pin-line-height-from-live + font-kerning:normal on FO root — Chromium kerning copy vs strut pin',
    css: 'foreignObject{font-kerning:normal!important}',
    inject: 'both',
  },
  {
    n: 8,
    patch: PIN_LH,
    knob: 'text-rendering-geometric',
    slug: 'pin lh + geometricPrecision',
    idea: 'h2-pin-line-height-from-live + text-rendering:geometricPrecision on FO *',
    css: foStar('text-rendering:geometricPrecision!important'),
    inject: 'both',
  },
  {
    n: 9,
    patch: PIN_LH,
    knob: 'text-rendering-optimize-speed',
    slug: 'pin lh + optimizeSpeed',
    idea: 'h2-pin-line-height-from-live + text-rendering:optimizeSpeed on FO *',
    css: foStar('text-rendering:optimizeSpeed!important'),
    inject: 'both',
  },
  {
    n: 10,
    patch: PIN_LH,
    knob: 'webkit-font-smoothing-antialiased',
    slug: 'pin lh + antialiased',
    idea: 'h2-pin-line-height-from-live + -webkit-font-smoothing:antialiased on FO *',
    css: foStar('-webkit-font-smoothing:antialiased!important'),
    inject: 'both',
  },
  {
    n: 11,
    patch: PIN_LH,
    knob: 'leading-trim-both',
    slug: 'pin lh + leading-trim both',
    idea: 'h2-pin-line-height-from-live + leading-trim:both on FO * — trim vs measured line box pin',
    css: foStar('leading-trim:both!important'),
    inject: 'both',
  },
  {
    n: 12,
    patch: PIN_LH,
    knob: 'text-box-trim-both',
    slug: 'pin lh + text-box-trim both',
    idea: 'h2-pin-line-height-from-live + text-box-trim:trim-both on FO *',
    css: foStar('text-box-trim:trim-both!important'),
    inject: 'both',
  },
  {
    n: 13,
    patch: PIN_LH,
    knob: 'anchor-baseline',
    slug: 'pin lh + anchor baseline',
    idea: 'h2-pin-line-height-from-live + vertical-align:baseline on FO a — inline baseline vs strut pin',
    css: foSel(
      'foreignObject a',
      'vertical-align:baseline!important;display:inline-block!important',
    ),
    inject: 'both',
  },
  {
    n: 14,
    patch: PIN_LH,
    knob: 'tabular-nums',
    slug: 'pin lh + tabular-nums',
    idea: 'h2-pin-line-height-from-live + font-variant-numeric:tabular-nums on FO *',
    css: foStar('font-variant-numeric:tabular-nums!important'),
    inject: 'both',
  },
  {
    n: 15,
    patch: STRETCH,
    knob: 'align-self-flex-start',
    slug: 'stretch leaf + flex-start *',
    idea: 'h2-flex-stretch-leaf-from-live + align-self:flex-start on FO * — cross-axis vs flex stretch pin',
    css: foStar('align-self:flex-start!important'),
  },
  {
    n: 16,
    patch: STRETCH,
    knob: 'height-auto',
    slug: 'stretch leaf + height auto *',
    idea: 'h2-flex-stretch-leaf-from-live + height:auto on FO * — intrinsic height vs stretch pin',
    css: foStar('height:auto!important'),
  },
  {
    n: 17,
    patch: STRETCH,
    knob: 'min-height-auto',
    slug: 'stretch leaf + min-height auto',
    idea: 'h2-flex-stretch-leaf-from-live + min-height:auto on FO *',
    css: foStar('min-height:auto!important'),
  },
  {
    n: 18,
    patch: STRETCH,
    knob: 'fo-div-normal-stretch',
    slug: 'stretch leaf + FO>div normal',
    idea: 'h2-flex-stretch-leaf-from-live + foreignObject>div line-height:normal strut restore',
    css: 'foreignObject>div{line-height:normal!important}',
  },
  {
    n: 19,
    patch: STRETCH,
    knob: 'fo-div-star-unset',
    slug: 'stretch leaf + FO>div * unset',
    idea: 'h2-flex-stretch-leaf-from-live + line-height:unset on foreignObject>div *',
    css: 'foreignObject>div *{line-height:unset!important}',
  },
  {
    n: 20,
    patch: STRETCH,
    knob: 'anchor-inline-block',
    slug: 'stretch leaf + anchor inline-block',
    idea: 'h2-flex-stretch-leaf-from-live + display:inline-block on FO a',
    css: foSel('foreignObject a', 'display:inline-block!important'),
  },
  {
    n: 21,
    patch: STRETCH,
    knob: 'vertical-align-middle',
    slug: 'stretch leaf + middle *',
    idea: 'h2-flex-stretch-leaf-from-live + vertical-align:middle on FO *',
    css: foStar('vertical-align:middle!important'),
  },
  {
    n: 22,
    patch: STRETCH,
    knob: 'nav-align-items-start',
    slug: 'stretch leaf + nav flex-start',
    idea: 'h2-flex-stretch-leaf-from-live + align-items:flex-start on FO nav',
    css: foSel('foreignObject nav', 'align-items:flex-start!important'),
  },
  {
    n: 23,
    patch: STRETCH,
    knob: 'text-box-edge-cap',
    slug: 'stretch leaf + cap edge',
    idea: 'h2-flex-stretch-leaf-from-live + text-box-edge:cap alphabetic on FO *',
    css: foStar('text-box-edge:cap alphabetic!important'),
  },
  {
    n: 24,
    patch: STRETCH,
    knob: 'anchor-nowrap',
    slug: 'stretch leaf + anchor nowrap',
    idea: 'h2-flex-stretch-leaf-from-live + white-space:nowrap on FO a',
    css: foSel('foreignObject a', 'white-space:nowrap!important'),
  },
  {
    n: 25,
    patch: STRETCH,
    knob: 'flex-shrink-0',
    slug: 'stretch leaf + flex-shrink 0',
    idea: 'h2-flex-stretch-leaf-from-live + flex-shrink:0 on FO *',
    css: foStar('flex-shrink:0!important'),
  },
  {
    n: 26,
    patch: STRETCH,
    knob: 'overflow-visible',
    slug: 'stretch leaf + overflow visible',
    idea: 'h2-flex-stretch-leaf-from-live + overflow:visible on FO *',
    css: foStar('overflow:visible!important'),
  },
  {
    n: 27,
    patch: STRETCH,
    knob: 'text-transform-none',
    slug: 'stretch leaf + transform none',
    idea: 'h2-flex-stretch-leaf-from-live + text-transform:none on FO *',
    css: foStar('text-transform:none!important'),
  },
  {
    n: 28,
    patch: PIN_WIDTH,
    knob: 'max-width-none',
    slug: 'pin width + max-width none',
    idea: 'h2-pin-width-from-live + max-width:none on FO * — width pin vs max-width clamp',
    css: foStar('max-width:none!important'),
  },
  {
    n: 29,
    patch: PIN_WIDTH,
    knob: 'anchor-width-max-content',
    slug: 'pin width + anchor max-content',
    idea: 'h2-pin-width-from-live + width:max-content on FO a',
    css: foSel('foreignObject a', 'width:max-content!important'),
  },
  {
    n: 30,
    patch: PIN_WIDTH,
    knob: 'inline-size-max-content',
    slug: 'pin width + inline-size max',
    idea: 'h2-pin-width-from-live + inline-size:max-content on FO *',
    css: foStar('inline-size:max-content!important'),
  },
  {
    n: 31,
    patch: PIN_WIDTH,
    knob: 'letter-spacing-normal',
    slug: 'pin width + letter-spacing normal',
    idea: 'h2-pin-width-from-live + letter-spacing:normal on FO *',
    css: foStar('letter-spacing:normal!important'),
  },
  {
    n: 32,
    patch: PIN_WIDTH,
    knob: 'word-spacing-normal',
    slug: 'pin width + word-spacing normal',
    idea: 'h2-pin-width-from-live + word-spacing:normal on FO *',
    css: foStar('word-spacing:normal!important'),
  },
  {
    n: 33,
    patch: PIN_WIDTH,
    knob: 'font-size-adjust-none',
    slug: 'pin width + size-adjust none',
    idea: 'h2-pin-width-from-live + font-size-adjust:none on FO *',
    css: foStar('font-size-adjust:none!important'),
  },
  {
    n: 34,
    patch: PIN_WIDTH,
    knob: 'text-indent-zero',
    slug: 'pin width + text-indent 0',
    idea: 'h2-pin-width-from-live + text-indent:0 on FO *',
    css: foStar('text-indent:0!important'),
  },
  {
    n: 35,
    patch: PIN_WIDTH,
    knob: 'overflow-wrap-anywhere',
    slug: 'pin width + wrap anywhere',
    idea: 'h2-pin-width-from-live + overflow-wrap:anywhere on FO *',
    css: foStar('overflow-wrap:anywhere!important'),
  },
  {
    n: 36,
    patch: PIN_WIDTH,
    knob: 'word-break-normal',
    slug: 'pin width + word-break normal',
    idea: 'h2-pin-width-from-live + word-break:normal on FO *',
    css: foStar('word-break:normal!important'),
  },
  {
    n: 37,
    patch: PIN_WIDTH,
    knob: 'text-overflow-clip',
    slug: 'pin width + text-overflow clip',
    idea: 'h2-pin-width-from-live + text-overflow:clip on FO *',
    css: foStar('text-overflow:clip!important'),
  },
  {
    n: 38,
    patch: PIN_WIDTH,
    knob: 'direction-ltr',
    slug: 'pin width + direction ltr',
    idea: 'h2-pin-width-from-live + direction:ltr on FO *',
    css: foStar('direction:ltr!important'),
  },
  {
    n: 39,
    patch: PIN_WIDTH,
    knob: 'unicode-bidi-isolate',
    slug: 'pin width + bidi isolate',
    idea: 'h2-pin-width-from-live + unicode-bidi:isolate on FO *',
    css: foStar('unicode-bidi:isolate!important'),
  },
  {
    n: 40,
    patch: PIN_WIDTH,
    knob: 'text-align-start',
    slug: 'pin width + text-align start',
    idea: 'h2-pin-width-from-live + text-align:start on FO *',
    css: foStar('text-align:start!important'),
  },
]

if (typeof process !== 'undefined' && process.versions?.node) {
  const pairKeys = new Set()
  for (const s of SPECS) {
    const key = `${s.patch}|${s.knob}`
    if (pairKeys.has(key)) {
      throw new Error(`recipes-loop-ai-b10-w40: duplicate h2+knob pair ${key}`)
    }
    pairKeys.add(key)
  }
  if (SPECS.length !== 40) {
    throw new Error(`recipes-loop-ai-b10-w40: expected 40 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, patch, slug, knob, idea, css, inject = 'capture' }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w40-${num}`,
    label: `Loop AI b10 w40 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    radicalPatch: patch,
    notes: `Loop AI b10 w40; ${patch} + ${knob}; one h2 patch + one text knob — no text bypass.`,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

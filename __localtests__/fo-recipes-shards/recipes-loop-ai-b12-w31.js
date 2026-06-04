/**
 * Loop AI batch-12 FO recipe shard (worker 31) — text-fix: integer-viewbox + stretch-leaf pairs.
 * PRIMARY: svgRootRound integer-viewbox × radicalPatch h2-flex-stretch-leaf-from-live × 40 FO CSS knobs
 * 40 recipes: loop-ai-b12-w31-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

const STRETCH = 'h2-flex-stretch-leaf-from-live'

/** @param {string} decls */
const foStar = (decls) => `foreignObject *{${decls}}`

/** @param {string} sel @param {string} decls */
const foSel = (sel, decls) => `${sel}{${decls}}`

/**
 * 40 unique (stretch-leaf + integer-viewbox) × one FO CSS / raster knob each.
 * @type {{ n: number, slug: string, knob: string, idea: string, css: string, rasterPatch?: string }[]}
 */
const SPECS = [
  {
    n: 1,
    slug: 'stretch int vb + flex-start *',
    knob: 'align-self-flex-start',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + align-self:flex-start on FO *',
    css: foStar('align-self:flex-start!important'),
  },
  {
    n: 2,
    slug: 'stretch int vb + height auto *',
    knob: 'height-auto',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + height:auto on FO *',
    css: foStar('height:auto!important'),
  },
  {
    n: 3,
    slug: 'stretch int vb + min-height auto',
    knob: 'min-height-auto',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + min-height:auto on FO *',
    css: foStar('min-height:auto!important'),
  },
  {
    n: 4,
    slug: 'stretch int vb + FO>div normal',
    knob: 'fo-div-normal',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + foreignObject>div line-height:normal',
    css: 'foreignObject>div{line-height:normal!important}',
  },
  {
    n: 5,
    slug: 'stretch int vb + FO>div * unset',
    knob: 'fo-div-star-unset',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:unset on foreignObject>div *',
    css: 'foreignObject>div *{line-height:unset!important}',
  },
  {
    n: 6,
    slug: 'stretch int vb + anchor inline-block',
    knob: 'anchor-inline-block',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + display:inline-block on FO a',
    css: foSel('foreignObject a', 'display:inline-block!important'),
  },
  {
    n: 7,
    slug: 'stretch int vb + middle *',
    knob: 'vertical-align-middle',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + vertical-align:middle on FO *',
    css: foStar('vertical-align:middle!important'),
  },
  {
    n: 8,
    slug: 'stretch int vb + nav flex-start',
    knob: 'nav-align-items-start',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + align-items:flex-start on FO nav',
    css: foSel('foreignObject nav', 'align-items:flex-start!important'),
  },
  {
    n: 9,
    slug: 'stretch int vb + cap edge',
    knob: 'text-box-edge-cap',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + text-box-edge:cap alphabetic on FO *',
    css: foStar('text-box-edge:cap alphabetic!important'),
  },
  {
    n: 10,
    slug: 'stretch int vb + anchor nowrap',
    knob: 'anchor-nowrap',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + white-space:nowrap on FO a',
    css: foSel('foreignObject a', 'white-space:nowrap!important'),
  },
  {
    n: 11,
    slug: 'stretch int vb + flex-shrink 0',
    knob: 'flex-shrink-0',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + flex-shrink:0 on FO *',
    css: foStar('flex-shrink:0!important'),
  },
  {
    n: 12,
    slug: 'stretch int vb + overflow visible',
    knob: 'overflow-visible',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + overflow:visible on FO *',
    css: foStar('overflow:visible!important'),
  },
  {
    n: 13,
    slug: 'stretch int vb + transform none',
    knob: 'text-transform-none',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + text-transform:none on FO *',
    css: foStar('text-transform:none!important'),
  },
  {
    n: 14,
    slug: 'stretch int vb + from-font *',
    knob: 'lh-from-font-star',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:from-font on FO *',
    css: foStar('line-height:from-font!important'),
  },
  {
    n: 15,
    slug: 'stretch int vb + normal *',
    knob: 'lh-normal-star',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:normal on FO *',
    css: foStar('line-height:normal!important'),
  },
  {
    n: 16,
    slug: 'stretch int vb + unset *',
    knob: 'lh-unset-star',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:unset on FO *',
    css: foStar('line-height:unset!important'),
  },
  {
    n: 17,
    slug: 'stretch int vb + lh 1 *',
    knob: 'lh-unitless-1-star',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:1 on FO *',
    css: foStar('line-height:1!important'),
  },
  {
    n: 18,
    slug: 'stretch int vb + inherit *',
    knob: 'lh-inherit-star',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:inherit on FO *',
    css: foStar('line-height:inherit!important'),
  },
  {
    n: 19,
    slug: 'stretch int vb + chromium copy',
    knob: 'chromium-copy',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + Chromium font copy on FO root',
    css: CHROMIUM_COPY,
  },
  {
    n: 20,
    slug: 'stretch int vb + span from-font',
    knob: 'span-from-font',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:from-font on FO span',
    css: foSel('foreignObject span', 'line-height:from-font!important;display:inline!important'),
  },
  {
    n: 21,
    slug: 'stretch int vb + span inherit',
    knob: 'span-inherit',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + line-height:inherit on FO span',
    css: foSel('foreignObject span', 'line-height:inherit!important;display:inline!important'),
  },
  {
    n: 22,
    slug: 'stretch int vb + nav a flex-start',
    knob: 'nav-a-flex-start',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + nav a align-self:flex-start height:auto',
    css: foSel(
      'foreignObject nav a',
      'align-self:flex-start!important;height:auto!important;display:inline-block!important',
    ),
  },
  {
    n: 23,
    slug: 'stretch int vb + nav gap zero',
    knob: 'nav-gap-zero',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + gap:0 on FO nav',
    css: foSel(
      'foreignObject nav',
      'gap:0!important;row-gap:0!important;column-gap:0!important',
    ),
  },
  {
    n: 24,
    slug: 'stretch int vb + div from-font * normal',
    knob: 'fo-div-from-font-star-normal',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + FO>div from-font + FO * normal lh',
    css:
      'foreignObject>div{line-height:from-font!important}' +
      foStar('line-height:normal!important'),
  },
  {
    n: 25,
    slug: 'stretch int vb + leading-trim both',
    knob: 'leading-trim-both',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + leading-trim:both on FO *',
    css: foStar('leading-trim:both!important'),
  },
  {
    n: 26,
    slug: 'stretch int vb + trim-both',
    knob: 'text-box-trim-both',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + text-box-trim:trim-both on FO *',
    css: foStar('text-box-trim:trim-both!important'),
  },
  {
    n: 27,
    slug: 'stretch int vb + kerning normal',
    knob: 'font-kerning-normal',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + font-kerning:normal on FO root',
    css: 'foreignObject{font-kerning:normal!important}',
  },
  {
    n: 28,
    slug: 'stretch int vb + antialiased',
    knob: 'webkit-font-smoothing-antialiased',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + -webkit-font-smoothing:antialiased on FO *',
    css: foStar('-webkit-font-smoothing:antialiased!important'),
  },
  {
    n: 29,
    slug: 'stretch int vb + geometricPrecision',
    knob: 'text-rendering-geometric',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + text-rendering:geometricPrecision on FO *',
    css: foStar('text-rendering:geometricPrecision!important'),
  },
  {
    n: 30,
    slug: 'stretch int vb + decode-interval',
    knob: 'decode-interval',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + decode-interval raster flush',
    css: foStar('line-height:normal!important'),
    rasterPatch: 'decode-interval',
  },
  {
    n: 31,
    slug: 'stretch int vb + fonts-ready',
    knob: 'fonts-ready-interval',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + fonts-ready-interval before decode',
    css: foStar('line-height:from-font!important'),
    rasterPatch: 'fonts-ready-interval',
  },
  {
    n: 32,
    slug: 'stretch int vb + decode rAF',
    knob: 'decode-interval-raf',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + decode-interval-raf raster flush',
    css: CHROMIUM_COPY + 'foreignObject>div{line-height:normal!important}',
    rasterPatch: 'decode-interval-raf',
  },
  {
    n: 33,
    slug: 'stretch int vb + device-grid',
    knob: 'device-grid-floor',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + device-grid-floor raster snap',
    css: foStar('line-height:from-font!important'),
    rasterPatch: 'device-grid-floor',
  },
  {
    n: 34,
    slug: 'stretch int vb + flex baseline row',
    knob: 'flex-row-baseline',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + flex row baseline + stretch anchors',
    css:
      'foreignObject{display:flex!important;flex-direction:row!important;' +
      'align-items:baseline!important;gap:0!important;overflow:visible!important}' +
      foSel(
        'foreignObject a',
        'align-self:stretch!important;display:inline-block!important;vertical-align:baseline!important',
      ),
  },
  {
    n: 35,
    slug: 'stretch int vb + anchor stretch',
    knob: 'anchor-align-self-stretch',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + align-self:stretch on FO a (contrast)',
    css: foSel(
      'foreignObject a',
      'align-self:stretch!important;display:inline-block!important;min-height:0!important',
    ),
  },
  {
    n: 36,
    slug: 'stretch int vb + min dims explicit',
    knob: 'min-dims-explicit',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + explicit min-width/min-height:0 on FO *',
    css: foStar('min-width:0!important;min-height:0!important'),
  },
  {
    n: 37,
    slug: 'stretch int vb + anchor baseline inline',
    knob: 'anchor-baseline-inline',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + inline anchor baseline vertical-align',
    css: foSel(
      'foreignObject a',
      'display:inline!important;vertical-align:baseline!important;line-height:inherit!important',
    ),
  },
  {
    n: 38,
    slug: 'stretch int vb + wrap anywhere',
    knob: 'overflow-wrap-anywhere',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + overflow-wrap:anywhere on FO *',
    css: foStar('overflow-wrap:anywhere!important'),
  },
  {
    n: 39,
    slug: 'stretch int vb + nowrap star',
    knob: 'nowrap-star',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + white-space:nowrap on FO *',
    css: foStar('white-space:nowrap!important'),
  },
  {
    n: 40,
    slug: 'stretch int vb + div star from-font chromium',
    knob: 'fo-div-star-from-font-chromium',
    idea: 'h2-flex-stretch-leaf-from-live + integer-viewbox + FO>div * from-font + Chromium copy',
    css: CHROMIUM_COPY + 'foreignObject>div *{line-height:from-font!important}',
  },
]

if (typeof process !== 'undefined' && process.versions?.node) {
  const pairKeys = new Set()
  for (const s of SPECS) {
    const key = `${s.knob}|${s.rasterPatch ?? 'none'}`
    if (pairKeys.has(key)) {
      throw new Error(`recipes-loop-ai-b12-w31: duplicate stretch+intVB pair ${key}`)
    }
    pairKeys.add(key)
  }
  if (SPECS.length !== 40) {
    throw new Error(`recipes-loop-ai-b12-w31: expected 40 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, knob, idea, css, rasterPatch }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b12-w31-${num}`,
    label: `Loop AI b12 w31 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: STRETCH,
    svgRootRound: 'integer-viewbox',
    ...(rasterPatch ? { rasterPatch } : {}),
    notes: `Loop AI b12 w31; ${STRETCH} + integer-viewbox + ${knob}; FO-raster — no text bypass.`,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 29) — text-fix: text-size-adjust 100%/none on text chain.
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

const ADJ100 =
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important'

const ADJNONE =
  '-webkit-text-size-adjust:none!important;text-size-adjust:none!important'

/** @param {string} decls */
const chainBlock = (decls) => `${TEXT_CHAIN}{${decls}}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'text chain 100%',
    idea: 'Pin -webkit/text-size-adjust:100% on inline text chain only — WebKit autosizer vs live glyph metrics',
    css: chainBlock(ADJ100),
  },
  {
    n: 2,
    slug: 'text chain none',
    idea: 'Disable text-size-adjust on inline text chain — contrast mobile shrink vs FO>div baseline 100%',
    css: chainBlock(ADJNONE),
  },
  {
    n: 3,
    slug: 'FO star 100%',
    idea: 'text-size-adjust:100% on all FO descendants — extend autosizer guard beyond FO>div wrapper',
    css: `foreignObject *{${ADJ100}}`,
  },
  {
    n: 4,
    slug: 'FO star none',
    idea: 'text-size-adjust:none on all FO descendants — disable autosizing inside entire FO subtree',
    css: `foreignObject *{${ADJNONE}}`,
  },
  {
    n: 5,
    slug: 'FO root + chain 100%',
    idea: 'FO root and text chain both 100% — double-pin autosizer at container + inline leaves',
    css: `foreignObject{${ADJ100}}` + chainBlock(ADJ100),
  },
  {
    n: 6,
    slug: 'FO root + chain none',
    idea: 'FO root and text chain both none — full autosizer off at root and inline chain',
    css: `foreignObject{${ADJNONE}}` + chainBlock(ADJNONE),
  },
  {
    n: 7,
    slug: 'FO>div none + chain 100%',
    idea: 'FO>div none with text chain 100% — wrapper off vs inline chain on (layered autosizer)',
    css: `foreignObject>div{${ADJNONE}}` + chainBlock(ADJ100),
  },
  {
    n: 8,
    slug: 'FO>div 100% + chain none',
    idea: 'FO>div 100% with text chain none — baseline wrapper on vs inline chain off',
    css: `foreignObject>div{${ADJ100}}` + chainBlock(ADJNONE),
  },
  {
    n: 9,
    slug: 'FO>div unset + chain 100%',
    idea: 'FO>div line-height unset + text chain 100% — reset wrapper strut then pin autosizer on chain',
    css:
      'foreignObject>div{line-height:unset!important}' + chainBlock(ADJ100),
  },
  {
    n: 10,
    slug: 'FO>div revert + chain none',
    idea: 'FO>div revert + text chain none — UA revert on wrapper with autosizer disabled on chain',
    css: `foreignObject>div{line-height:revert!important;${ADJNONE}}` + chainBlock(ADJNONE),
  },
  {
    n: 11,
    slug: 'FO>div initial + chain 100%',
    idea: 'FO>div initial + text chain 100% — cascade reset wrapper then 100% on inline text chain',
    css: `foreignObject>div{${ADJ100}}` + chainBlock(ADJ100),
  },
  {
    n: 12,
    slug: 'span chain 100%',
    idea: 'text-size-adjust:100% on foreignObject span only — narrow autosizer pin on inline spans',
    css: `foreignObject span{${ADJ100};display:inline!important}`,
  },
  {
    n: 13,
    slug: 'anchor chain 100% baseline',
    idea: 'text-size-adjust:100% on foreignObject a + vertical-align:baseline — nav link autosizer vs strut',
    css:
      `foreignObject a{${ADJ100};vertical-align:baseline!important;display:inline!important}`,
  },
  {
    n: 14,
    slug: 'label chain 100%',
    idea: 'text-size-adjust:100% on foreignObject label — form label autosizer vs FO wrapper',
    css:
      `foreignObject label{${ADJ100};display:inline-block!important}`,
  },
  {
    n: 15,
    slug: 'nav anchor chain 100%',
    idea: 'text-size-adjust:100% on foreignObject nav a — flex nav link autosizer guard',
    css:
      'foreignObject nav{display:flex!important;align-items:baseline!important}' +
      `foreignObject nav a{${ADJ100};display:inline!important;vertical-align:baseline!important}`,
  },
  {
    n: 16,
    slug: 'heading chain 100%',
    idea: 'text-size-adjust:100% on h1–h3 text chain — heading autosizer vs body-sized FO metrics',
    css:
      'foreignObject h1,foreignObject h2,foreignObject h3{' + ADJ100 + '}',
  },
  {
    n: 17,
    slug: 'p span chain 100%',
    idea: 'text-size-adjust:100% on p and span only — block/inline pair autosizer pin',
    css: `foreignObject p,foreignObject span{${ADJ100}}`,
  },
  {
    n: 18,
    slug: 'nested div star 100%',
    idea: 'text-size-adjust:100% on foreignObject>div>div * — nested wrapper descendant autosizer',
    css: `foreignObject>div>div *{${ADJ100}}`,
  },
  {
    n: 19,
    slug: 'header star 100%',
    idea: 'text-size-adjust:100% on foreignObject header * — header subtree autosizer vs main',
    css: `foreignObject header *{${ADJ100}}`,
  },
  {
    n: 20,
    slug: 'nav star none',
    idea: 'text-size-adjust:none on foreignObject nav * — disable autosizer in flex nav row only',
    css:
      'foreignObject nav{display:flex!important;align-items:baseline!important}' +
      `foreignObject nav *{${ADJNONE}}`,
  },
  {
    n: 21,
    slug: 'main chain 100% lh normal',
    idea: 'main text chain 100% + line-height:normal — autosizer pin with normal strut on main leaves',
    css:
      'foreignObject main{line-height:normal!important}' +
      'foreignObject main p,foreignObject main span,foreignObject main a,foreignObject main label{' +
      ADJ100 +
      '}',
  },
  {
    n: 22,
    slug: 'form label chain 100%',
    idea: 'text-size-adjust:100% on foreignObject form label — checkout label autosizer vs flex row',
    css:
      'foreignObject form{line-height:normal!important}' +
      `foreignObject form label{${ADJ100};display:inline-block!important}`,
  },
  {
    n: 23,
    slug: 'ul li chain none',
    idea: 'text-size-adjust:none on foreignObject ul li — list item autosizer off vs FO>div 100%',
    css:
      'foreignObject ul{list-style:none!important;padding:0!important;margin:0!important}' +
      `foreignObject ul li{${ADJNONE}}`,
  },
  {
    n: 24,
    slug: 'contents wrapper chain 100%',
    idea: 'FO>div display:contents + div * 100% — skip wrapper box, autosizer on flattened descendants',
    css:
      'foreignObject>div{display:contents!important}' +
      `foreignObject>div *{${ADJ100}}`,
  },
  {
    n: 25,
    slug: 'star 100% chain none override',
    idea: 'FO * 100% then text chain none — descendant pin with inline chain override to none',
    css: `foreignObject *{${ADJ100}}` + chainBlock(ADJNONE),
  },
  {
    n: 26,
    slug: 'chain 100% kerning normal',
    idea: 'text chain 100% + font-kerning:normal on chain — autosizer + Chromium kerning copy on leaves',
    css:
      CHROMIUM_COPY +
      chainBlock(ADJ100 + ';font-kerning:normal!important'),
  },
  {
    n: 27,
    slug: 'chain none lh normal',
    idea: 'text chain none + line-height:normal on chain — autosizer off with normal line strut',
    css: chainBlock(ADJNONE + ';line-height:normal!important'),
  },
  {
    n: 28,
    slug: 'chain 100% geometricPrecision',
    idea: 'text chain 100% + text-rendering:geometricPrecision on chain — autosizer + render hint',
    css: chainBlock(ADJ100 + ';text-rendering:geometricPrecision!important'),
  },
  {
    n: 29,
    slug: 'FO>div 100% strong em none',
    idea: 'FO>div 100% with strong/em none — wrapper on, emphasis nodes autosizer off',
    css:
      `foreignObject>div{${ADJ100}}` +
      `foreignObject strong,foreignObject em{${ADJNONE}}`,
  },
  {
    n: 30,
    slug: 'FO>div 100% chain inherit',
    idea: 'FO>div 100% + text chain inherit — cascade autosizer from wrapper through inline chain',
    css:
      `foreignObject>div{${ADJ100}}` +
      chainBlock(
        '-webkit-text-size-adjust:inherit!important;text-size-adjust:inherit!important',
      ),
  },
  {
    n: 31,
    slug: 'pin lh FO>div chain 100%',
    idea: 'h2-pin-line-height-from-live + FO>div and text chain 100% — live strut pin + autosizer on chain',
    css: `foreignObject>div{${ADJ100}}` + chainBlock(ADJ100),
    extra: {
      inject: 'both',
      radicalPatch: 'h2-pin-line-height-from-live',
    },
  },
  {
    n: 32,
    slug: 'pin lh chain none',
    idea: 'h2-pin-line-height-from-live + text chain none — live lh pin with autosizer disabled on chain',
    css: chainBlock(ADJNONE),
    extra: {
      inject: 'both',
      radicalPatch: 'h2-pin-line-height-from-live',
    },
  },
  {
    n: 33,
    slug: 'pin lh div none chain 100%',
    idea: 'h2-pin-line-height-from-live + FO>div none + chain 100% — wrapper off, chain on under live pin',
    css: `foreignObject>div{${ADJNONE}}` + chainBlock(ADJ100),
    extra: {
      inject: 'both',
      radicalPatch: 'h2-pin-line-height-from-live',
    },
  },
  {
    n: 34,
    slug: 'stretch leaf chain 100%',
    idea: 'h2-flex-stretch-leaf-from-live + text chain 100% — stretch leaf pin + autosizer on inline chain',
    css:
      chainBlock(ADJ100) +
      'foreignObject *{align-self:flex-start!important;height:auto!important}',
    extra: {
      radicalPatch: 'h2-flex-stretch-leaf-from-live',
    },
  },
  {
    n: 35,
    slug: 'stretch leaf nav none',
    idea: 'h2-flex-stretch-leaf-from-live + nav * none — stretch pin with nav subtree autosizer off',
    css:
      'foreignObject nav{display:flex!important;align-items:stretch!important}' +
      `foreignObject nav *{${ADJNONE};align-self:flex-start!important}`,
    extra: {
      radicalPatch: 'h2-flex-stretch-leaf-from-live',
    },
  },
  {
    n: 36,
    slug: 'stretch leaf anchor chain 100%',
    idea: 'h2-flex-stretch-leaf-from-live + FO>div 100% + nav a chain 100% — stretch + nav link autosizer',
    css:
      `foreignObject>div{${ADJ100}}` +
      'foreignObject nav a{' +
      ADJ100 +
      ';display:inline!important;vertical-align:baseline!important}',
    extra: {
      radicalPatch: 'h2-flex-stretch-leaf-from-live',
    },
  },
  {
    n: 37,
    slug: 'pin width chain 100%',
    idea: 'h2-pin-width-from-live + text chain 100% — live width pin + autosizer on inline text chain',
    css: chainBlock(ADJ100),
    extra: {
      radicalPatch: 'h2-pin-width-from-live',
    },
  },
  {
    n: 38,
    slug: 'pin lh revert div chain 100%',
    idea: 'h2-pin-line-height-from-live + FO>div revert + text chain 100% — revert wrapper + chain autosizer',
    css:
      `foreignObject>div{line-height:revert!important;${ADJ100}}` + chainBlock(ADJ100),
    extra: {
      inject: 'both',
      radicalPatch: 'h2-pin-line-height-from-live',
    },
  },
  {
    n: 39,
    slug: 'pin lh contents chain none',
    idea: 'h2-pin-line-height-from-live + display:contents wrapper + text chain none — flat tree, chain off',
    css:
      'foreignObject>div{display:contents!important}' + chainBlock(ADJNONE),
    extra: {
      inject: 'both',
      radicalPatch: 'h2-pin-line-height-from-live',
    },
  },
  {
    n: 40,
    slug: 'chromium copy root chain 100%',
    idea: 'Chromium font copy + FO root and text chain 100% — kerning bundle + full autosizer pin',
    css:
      CHROMIUM_COPY +
      `foreignObject{${ADJ100}}` +
      chainBlock(ADJ100 + ';font-kerning:normal!important'),
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b10-w29-${num}`,
    label: `Loop AI b10 w29 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes:
      'Loop AI b10 w29; text-size-adjust 100%/none on text chain; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

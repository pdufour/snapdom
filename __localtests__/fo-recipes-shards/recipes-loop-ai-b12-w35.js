/**
 * Loop AI batch-12 FO recipe shard (worker 35) — text-fix: line-height 1 + trim none half-leading reset invisible.
 * 40 recipes: loop-ai-b12-w35-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CORE = 'line-height:1!important;text-box-trim:none!important'

/** @type {{ key: string, label: string, scope: string, css: (extra: string) => string }[]} */
const TARGETS = [
  {
    key: 'lh-star',
    label: 'lh1 trim-none FO star',
    scope: 'line-height:1 + text-box-trim:none on FO *',
    css: (extra) => `foreignObject *{${CORE};${extra}}`,
  },
  {
    key: 'lh-div',
    label: 'lh1 trim-none FO>div star',
    scope: 'line-height:1 + text-box-trim:none on FO>div *',
    css: (extra) => `foreignObject>div *{${CORE};${extra}}`,
  },
  {
    key: 'lh-chain',
    label: 'lh1 trim-none text chain',
    scope: 'line-height:1 + text-box-trim:none on inline text chain',
    css: (extra) => `${TEXT_CHAIN}{${CORE};${extra}}`,
  },
  {
    key: 'lh-anchor',
    label: 'lh1 trim-none FO anchor',
    scope: 'line-height:1 + text-box-trim:none on FO a',
    css: (extra) =>
      `foreignObject a{${CORE};${extra};display:inline-block!important;vertical-align:baseline!important}`,
  },
]

/** @type {{ key: string, label: string, extra: string, idea: string, css?: string }[]} */
const VARIANTS = [
  {
    key: 'baseline',
    label: 'baseline half-leading strut',
    extra: 'vertical-align:baseline!important',
    idea: 'unitless lh:1 + trim:none + baseline valign — strut half-leading probe',
  },
  {
    key: 'leading-none',
    label: 'leading-trim none reset',
    extra: 'leading-trim:none!important;vertical-align:baseline!important',
    idea: 'leading-trim:none half-leading reset with lh:1 + text-box-trim:none',
  },
  {
    key: 'invisible-hidden',
    label: 'invisible overflow hidden',
    extra:
      'leading-trim:none!important;overflow:hidden!important;vertical-align:baseline!important',
    idea: 'overflow:hidden clips invisible half-leading bleed outside line box',
  },
  {
    key: 'invisible-clip',
    label: 'invisible overflow clip',
    extra: 'leading-trim:none!important;overflow:clip!important;vertical-align:baseline!important',
    idea: 'overflow:clip — invisible half-leading strut clip vs hidden',
  },
  {
    key: 'edge-cap',
    label: 'cap alphabetic edge',
    extra:
      'leading-trim:none!important;text-box-edge:cap alphabetic!important;vertical-align:baseline!important',
    idea: 'text-box-edge:cap alphabetic with trim:none — edge model half-leading reset',
  },
  {
    key: 'edge-leading',
    label: 'leading alphabetic edge',
    extra:
      'leading-trim:none!important;text-box-edge:leading alphabetic!important;vertical-align:baseline!important',
    idea: 'text-box-edge:leading alphabetic with lh:1 + trim:none',
  },
  {
    key: 'contrast-normal',
    label: 'FO star lh normal contrast',
    extra: 'leading-trim:none!important;vertical-align:baseline!important',
    idea: 'lh:1 + trim:none on target scope; line-height:normal contrast on FO *',
    css: (targetCss) =>
      targetCss('leading-trim:none!important;vertical-align:baseline!important') +
      'foreignObject *{line-height:normal!important}',
  },
  {
    key: 'contrast-from-font',
    label: 'FO star from-font contrast',
    extra: 'leading-trim:none!important;vertical-align:baseline!important',
    idea: 'lh:1 + trim:none on target; line-height:from-font contrast on FO *',
    css: (targetCss) =>
      targetCss('leading-trim:none!important;vertical-align:baseline!important') +
      'foreignObject *{line-height:from-font!important}',
  },
  {
    key: 'invisible-overflow-star',
    label: 'invisible overflow on FO star',
    extra: 'leading-trim:none!important;vertical-align:baseline!important',
    idea: 'lh:1 + trim:none on target; overflow:hidden on FO * clips invisible half-leading',
    css: (targetCss) =>
      targetCss('leading-trim:none!important;vertical-align:baseline!important') +
      'foreignObject *{overflow:hidden!important}',
  },
  {
    key: 'chromium',
    label: 'Chromium kerning stack',
    extra: 'leading-trim:none!important;vertical-align:baseline!important',
    idea: 'font-kerning:normal on FO + lh:1 trim:none half-leading reset on target scope',
    css: (targetCss) =>
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
      targetCss('leading-trim:none!important;vertical-align:baseline!important'),
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const target of TARGETS) {
  for (const variant of VARIANTS) {
    index += 1
    const num = String(index).padStart(3, '0')
    const cssBody = variant.css
      ? variant.css((extra) => target.css(extra))
      : target.css(variant.extra)
    RECIPES.push({
      id: `loop-ai-b12-w35-${num}`,
      label: `Loop AI b12 w35 #${num}: ${target.key} ${variant.key}`,
      idea: `${target.scope}; ${variant.idea}`,
      css: FO_BASELINE_CSS + TEXT_LEAF + cssBody,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w35; ${target.key}×${variant.key}; lh:1 + trim:none half-leading reset invisible — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w35: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-12 FO recipe shard (worker 22) — text-fix: text-rendering geometricPrecision
 * invisible on text chain (parent scope only; chain gets structural metric, not geo).
 * 40 recipes: loop-ai-b12-w22-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code,' +
  'foreignObject nav a,foreignObject td,foreignObject th'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

/** @type {{ scopeLabel: string; geo: string }[]} */
const GEO_SCOPES = [
  {
    scopeLabel: 'FO star',
    geo: 'foreignObject *{text-rendering:geometricPrecision!important}',
  },
  {
    scopeLabel: 'FO root',
    geo: 'foreignObject{text-rendering:geometricPrecision!important;overflow:visible!important}',
  },
  {
    scopeLabel: 'FO>div',
    geo: 'foreignObject>div{text-rendering:geometricPrecision!important}',
  },
  {
    scopeLabel: 'FO>div star',
    geo: 'foreignObject>div *{text-rendering:geometricPrecision!important}',
  },
]

/** @type {{ slug: string; idea: string; extra: string }[]} */
const CHAIN_MODS = [
  {
    slug: 'inherit-only',
    idea: 'geometricPrecision on parent scope only — text chain inherits, no explicit chain rule',
    extra: '',
  },
  {
    slug: 'chain-auto',
    idea: 'parent geometricPrecision + text-rendering:auto on text chain — geo invisible on chain',
    extra: TEXT_CHAIN + '{text-rendering:auto!important}',
  },
  {
    slug: 'chain-leg',
    idea: 'parent geometricPrecision + optimizeLegibility on text chain — geo overridden on chain',
    extra: TEXT_CHAIN + '{text-rendering:optimizeLegibility!important}',
  },
  {
    slug: 'chain-antialiased',
    idea: 'parent geometricPrecision + antialiased on text chain only — smoothing without chain geo',
    extra: TEXT_CHAIN + '{-webkit-font-smoothing:antialiased!important}',
  },
  {
    slug: 'chain-subpixel',
    idea: 'parent geometricPrecision + subpixel-antialiased on text chain only',
    extra: TEXT_CHAIN + '{-webkit-font-smoothing:subpixel-antialiased!important}',
  },
  {
    slug: 'chain-lh-normal',
    idea: 'parent geometricPrecision + line-height:normal on text chain',
    extra: TEXT_CHAIN + '{line-height:normal!important}',
  },
  {
    slug: 'chain-from-font-lh',
    idea: 'parent geometricPrecision + line-height:from-font on text chain',
    extra: TEXT_CHAIN + '{line-height:from-font!important}',
  },
  {
    slug: 'chain-trim-stack',
    idea: 'parent geometricPrecision + leading-trim/text-box-trim cap stack on text chain',
    extra:
      TEXT_CHAIN +
      '{leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',
  },
  {
    slug: 'flex-center',
    idea: 'parent geometricPrecision + FO flex center row — layout probe, geo not on chain',
    extra:
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}',
  },
  {
    slug: 'chromium-size-adjust',
    idea: 'parent geometricPrecision + Chromium copy + text-size-adjust:100% on FO>div',
    extra:
      CHROMIUM +
      'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const { scopeLabel, geo } of GEO_SCOPES) {
  for (const { slug, idea, extra } of CHAIN_MODS) {
    n += 1
    const id = `loop-ai-b12-w22-${String(n).padStart(3, '0')}`
    RECIPES.push({
      id,
      label: `Loop AI b12 w22 #${String(n).padStart(3, '0')}: ${scopeLabel} geo ${slug}`,
      idea: `${idea} (${scopeLabel})`,
      css: FO_BASELINE_CSS + TEXT_LEAF + geo + extra,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w22; ${scopeLabel} geometricPrecision invisible on chain; FO-raster only — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w22: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

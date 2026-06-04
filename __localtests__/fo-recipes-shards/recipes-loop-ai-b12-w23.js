/**
 * Loop AI batch-12 FO recipe shard (worker 23) — text-fix: -webkit-font-smoothing antialiased chain only invisible.
 * PRIMARY: antialiased on inline text chain only; opposite smoothing on FO * / root (invisible on text via chain override).
 * 40 recipes: loop-ai-b12-w23-001..040
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

const TRIM_STACK =
  'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}'

/** @param {string} extraChainDecls */
const chainAntialiased = (extraChainDecls = '') =>
  `${TEXT_CHAIN}{-webkit-font-smoothing:antialiased!important${extraChainDecls ? `;${extraChainDecls}` : ''}}`

/** @type {{ suffix: string, label: string, idea: string, css: string }[]} */
const INVISIBLE = [
  {
    suffix: 'plain',
    label: 'plain invisible',
    idea: 'antialiased on text chain only — no FO * / root smoothing (invisible elsewhere)',
    css: '',
  },
  {
    suffix: 'star-subpixel',
    label: 'star subpixel invisible',
    idea: 'subpixel-antialiased on FO * + antialiased on text chain only (chain overrides invisible star)',
    css: 'foreignObject *{-webkit-font-smoothing:subpixel-antialiased!important}',
  },
  {
    suffix: 'star-none',
    label: 'star none invisible',
    idea: 'none on FO * + antialiased on text chain only (chain overrides invisible star)',
    css: 'foreignObject *{-webkit-font-smoothing:none!important}',
  },
  {
    suffix: 'star-auto',
    label: 'star auto invisible',
    idea: 'auto on FO * + antialiased on text chain only (chain overrides invisible star)',
    css: 'foreignObject *{-webkit-font-smoothing:auto!important}',
  },
  {
    suffix: 'star-unset',
    label: 'star unset invisible',
    idea: 'unset on FO * + antialiased on text chain only (chain overrides invisible star)',
    css: 'foreignObject *{-webkit-font-smoothing:unset!important}',
  },
  {
    suffix: 'root-subpixel',
    label: 'root subpixel invisible',
    idea: 'subpixel-antialiased on FO root + antialiased on text chain only (chain overrides invisible root)',
    css: 'foreignObject{-webkit-font-smoothing:subpixel-antialiased!important}',
  },
  {
    suffix: 'root-none',
    label: 'root none invisible',
    idea: 'none on FO root + antialiased on text chain only (chain overrides invisible root)',
    css: 'foreignObject{-webkit-font-smoothing:none!important}',
  },
  {
    suffix: 'root-auto',
    label: 'root auto invisible',
    idea: 'auto on FO root + antialiased on text chain only (chain overrides invisible root)',
    css: 'foreignObject{-webkit-font-smoothing:auto!important}',
  },
]

/** @type {{ suffix: string, label: string, idea: string, extraCss: string, extraChain?: string, extra?: object }[]} */
const COMBOS = [
  {
    suffix: 'plain',
    label: 'plain chain',
    idea: 'chain antialiased only — baseline invisible smoothing probe',
    extraCss: '',
  },
  {
    suffix: 'geo-star',
    label: 'geo star',
    idea: 'geometricPrecision on FO * + chain antialiased only',
    extraCss: 'foreignObject *{text-rendering:geometricPrecision!important}',
  },
  {
    suffix: 'font-smooth-always',
    label: 'font-smooth always',
    idea: 'font-smooth:always on text chain + antialiased chain only',
    extraCss: '',
    extraChain: 'font-smooth:always!important',
  },
  {
    suffix: 'osx-grayscale',
    label: 'osx grayscale',
    idea: '-moz-osx-font-smoothing:grayscale on text chain + antialiased chain only',
    extraCss: '',
    extraChain: '-moz-osx-font-smoothing:grayscale!important',
  },
  {
    suffix: 'trim-stack',
    label: 'trim stack',
    idea: 'trim cap stack on FO * + antialiased on text chain only',
    extraCss: TRIM_STACK,
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const inv of INVISIBLE) {
  for (const combo of COMBOS) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b12-w23-${num}`,
      label: `Loop AI b12 w23 #${num}: ${inv.label} ${combo.label}`,
      idea: `${inv.idea}; ${combo.idea}`,
      css:
        FO_BASELINE_CSS +
        TEXT_LEAF +
        inv.css +
        combo.extraCss +
        chainAntialiased(combo.extraChain ?? ''),
      inject: combo.extra?.inject ?? 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w23; ${inv.suffix}×${combo.suffix}; antialiased chain only invisible — no text bypass.`,
      ...combo.extra,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w23: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

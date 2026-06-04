/**
 * Loop AI batch-12 FO recipe shard (worker 17) — text-fix: vertical-align baseline/middle on FO anchors.
 * PRIMARY: foreignObject a / nav a / wrapper chains — invisible structural (no emphasis/ruby/axis).
 * 40 recipes: loop-ai-b12-w17-001..040 (5 anchor selectors × 2 valign × 4 display/strut combos)
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ sel: string; slug: string; idea: string }[]} */
const ANCHOR_SELECTORS = [
  { sel: 'foreignObject a', slug: 'a', idea: 'vertical-align on FO a — global anchor strut' },
  { sel: 'foreignObject nav a', slug: 'nav-a', idea: 'vertical-align on FO nav a — mini-nav link strut' },
  { sel: 'foreignObject>div a', slug: 'div-a', idea: 'vertical-align on FO>div a — wrapper-scoped anchor' },
  { sel: 'foreignObject>div nav a', slug: 'div-nav-a', idea: 'vertical-align on FO>div nav a — nested nav anchor' },
  {
    sel: 'foreignObject nav.mini-nav a',
    slug: 'mini-nav-a',
    idea: 'vertical-align on FO nav.mini-nav a — checkout nav anchor strut',
  },
]

/** @type {{ va: string; slug: string }[]} */
const VALIGNS = [
  { va: 'baseline', slug: 'baseline' },
  { va: 'middle', slug: 'middle' },
]

/** @type {{ display: string; extra: string; slug: string; idea: string }[]} */
const STRUT_VARIANTS = [
  {
    display: 'inline',
    extra: '',
    slug: 'inline',
    idea: 'display:inline on anchor — alphabetic inline strut',
  },
  {
    display: 'inline-block',
    extra: 'line-height:normal!important;',
    slug: 'block-lh-normal',
    idea: 'inline-block + line-height:normal — blockified strut vs valign',
  },
  {
    display: 'inline-block',
    extra: 'line-height:from-font!important;',
    slug: 'block-lh-from-font',
    idea: 'inline-block + line-height:from-font — font-metric strut',
  },
  {
    display: 'inline',
    extra: 'white-space:nowrap!important;text-wrap:nowrap!important;',
    slug: 'inline-nowrap',
    idea: 'display:inline + nowrap — nav label single-line strut',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const { sel, slug: selSlug, idea: selIdea } of ANCHOR_SELECTORS) {
  for (const { va, slug: vaSlug } of VALIGNS) {
    for (const { display, extra, slug: varSlug, idea: varIdea } of STRUT_VARIANTS) {
      index += 1
      const num = String(index).padStart(3, '0')
      const extraCss = extra ? extra : ''
      RECIPES.push({
        id: `loop-ai-b12-w17-${num}`,
        label: `Loop AI b12 w17 #${num}: ${selSlug} ${vaSlug} ${varSlug}`,
        idea: `${selIdea}; vertical-align:${va}; ${varIdea}`,
        css:
          FO_BASELINE_CSS +
          TEXT_LEAF +
          `${sel}{display:${display}!important;vertical-align:${va}!important;${extraCss}}`,
        inject: 'capture',
        category: 'text-fix',
        active: true,
        notes: `Loop AI b12 w17; anchor vertical-align:${va} invisible; FO-raster — no text bypass.`,
      })
    }
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w17.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

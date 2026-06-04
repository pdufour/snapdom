/**
 * Loop AI batch-12 FO recipe shard (worker 06) — text-fix: live letter-spacing pin + metric CSS.
 * PRIMARY: radicalPatch lab-pin-letter-spacing-from-live × 40 selector/metric combos (invisible)
 * 40 recipes: loop-ai-b12-w06-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const PATCH = 'lab-pin-letter-spacing-from-live'

/** @type {{ slug: string, label: string, decl: string, idea: string }[]} */
const VARIANTS = [
  {
    slug: 'lh-normal',
    label: 'lh normal',
    decl: 'line-height:normal!important',
    idea: 'line-height:normal vs live letter-spacing pin',
  },
  {
    slug: 'lh-from-font',
    label: 'lh from-font',
    decl: 'line-height:from-font!important',
    idea: 'line-height:from-font vs live letter-spacing pin',
  },
  {
    slug: 'word-spacing-normal',
    label: 'word-spacing normal',
    decl: 'word-spacing:normal!important',
    idea: 'word-spacing:normal vs live letter-spacing pin',
  },
  {
    slug: 'text-rendering-geometric',
    label: 'text-rendering geometric',
    decl: 'text-rendering:geometricPrecision!important',
    idea: 'text-rendering:geometricPrecision vs live letter-spacing pin',
  },
  {
    slug: 'font-synthesis-none',
    label: 'font-synthesis none',
    decl: 'font-synthesis:none!important',
    idea: 'font-synthesis:none vs live letter-spacing pin',
  },
  {
    slug: 'font-variant-normal',
    label: 'font-variant normal',
    decl: 'font-variant:normal!important',
    idea: 'font-variant:normal vs live letter-spacing pin',
  },
  {
    slug: 'va-baseline',
    label: 'va baseline',
    decl: 'vertical-align:baseline!important',
    idea: 'vertical-align:baseline vs live letter-spacing pin',
  },
  {
    slug: 'overflow-visible',
    label: 'overflow visible',
    decl: 'overflow:visible!important',
    idea: 'overflow:visible vs live letter-spacing pin',
  },
  {
    slug: 'text-wrap-wrap',
    label: 'text-wrap wrap',
    decl: 'text-wrap:wrap!important',
    idea: 'text-wrap:wrap vs live letter-spacing pin',
  },
  {
    slug: 'unicode-bidi-normal',
    label: 'unicode-bidi normal',
    decl: 'unicode-bidi:normal!important',
    idea: 'unicode-bidi:normal vs live letter-spacing pin',
  },
]

/** @type {{ slug: string, label: string, selector: string }[]} */
const TARGETS = [
  { slug: 'foStar', label: 'FO *', selector: 'foreignObject *' },
  { slug: 'foDiv', label: 'FO>div', selector: 'foreignObject>div' },
  { slug: 'foA', label: 'FO a', selector: 'foreignObject a' },
  { slug: 'foNavA', label: 'FO nav a', selector: 'foreignObject nav a' },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const target of TARGETS) {
  for (const variant of VARIANTS) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b12-w06-${num}`,
      label: `Loop AI b12 w06 #${num}: ${target.label} ${variant.label}`,
      idea: `${PATCH} + ${variant.idea} on ${target.label}`,
      css: FO_BASELINE_CSS + TEXT_LEAF + `${target.selector}{${variant.decl}}`,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      radicalPatch: PATCH,
      notes: `Loop AI b12 w06; ${PATCH} + ${target.slug}|${variant.slug}; runner patch + CSS — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w06.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

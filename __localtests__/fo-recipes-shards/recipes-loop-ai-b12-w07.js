/**
 * Loop AI batch-12 FO recipe shard (worker 07) — text-fix: lab clientRects inline height pin × 40
 * 40 recipes: loop-ai-b12-w07-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const PATCH = 'lab-pin-inline-box-height-from-clientrects'

/** @type {{ sel: string, key: string, label: string }[]} */
const TARGETS = [
  { sel: 'foreignObject button', key: 'foButton', label: 'FO button' },
  { sel: 'foreignObject p', key: 'foP', label: 'FO p' },
  { sel: 'foreignObject em', key: 'foEm', label: 'FO em' },
  { sel: 'foreignObject small', key: 'foSmall', label: 'FO small' },
]

/** @type {{ prop: string, slug: string, idea: string }[]} */
const KNOBS = [
  { prop: 'line-height:normal', slug: 'lh-normal', idea: 'line-height:normal' },
  { prop: 'min-height:auto', slug: 'min-height-auto', idea: 'min-height:auto' },
  { prop: 'max-height:none', slug: 'max-height-none', idea: 'max-height:none' },
  { prop: 'box-sizing:border-box', slug: 'box-sizing-border-box', idea: 'box-sizing:border-box' },
  { prop: 'display:inline-block', slug: 'display-inline-block', idea: 'display:inline-block' },
  { prop: 'vertical-align:baseline', slug: 'vertical-align-baseline', idea: 'vertical-align:baseline' },
  { prop: 'overflow:visible', slug: 'overflow-visible', idea: 'overflow:visible' },
  { prop: 'align-self:flex-start', slug: 'align-self-flex-start', idea: 'align-self:flex-start' },
  { prop: 'text-box-trim:none', slug: 'text-box-trim-none', idea: 'text-box-trim:none' },
  { prop: 'block-size:auto', slug: 'block-size-auto', idea: 'block-size:auto' },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const { sel, key, label } of TARGETS) {
  for (const { prop, slug, idea } of KNOBS) {
    n += 1
    const id = `loop-ai-b12-w07-${String(n).padStart(3, '0')}`
    RECIPES.push({
      id,
      label: `Loop AI b12 w07 #${String(n).padStart(3, '0')}: ${label} ${slug}`,
      idea: `${PATCH} + ${idea} vs clientRects height pin on ${label}`,
      css: `${FO_BASELINE_CSS}${TEXT_LEAF}${sel}{${prop}!important}`,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      radicalPatch: PATCH,
      notes: `Loop AI b12 w07; ${PATCH} + ${key}|${slug}; runner patch + CSS — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w07: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

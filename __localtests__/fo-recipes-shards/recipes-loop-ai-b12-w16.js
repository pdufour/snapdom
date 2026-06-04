/**
 * Loop AI batch-12 FO recipe shard (worker 16) — text-fix: flex align-items baseline gap0 nav invisible layout.
 * 40 recipes: loop-ai-b12-w16-001..040 (4 flex targets × 10 invisible nav layout knobs)
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @param {string} [extra] */
const flexFoBaseline = (extra = '') =>
  `foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important${extra}}`

const flexInlineFoBaseline = () =>
  `foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}`

const flexNavBaseline = () =>
  `foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}`

const flexFoDivBaseline = () =>
  `foreignObject>div{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}`

/** @type {{ token: string, label: string, idea: string, base: string }[]} */
const FLEX_TARGETS = [
  {
    token: 'fo-flex',
    label: 'FO flex baseline gap0',
    idea: 'FO flex row align-items baseline gap0 before nav layout knobs',
    base: flexFoBaseline(),
  },
  {
    token: 'inline-flex',
    label: 'inline-flex baseline gap0',
    idea: 'FO inline-flex row baseline gap0 — shrink-to-fit flex formatting context',
    base: flexInlineFoBaseline(),
  },
  {
    token: 'nav-flex',
    label: 'nav flex baseline gap0',
    idea: 'nav-only flex row baseline gap0 — checkout nav row cross-axis probe',
    base: flexNavBaseline(),
  },
  {
    token: 'fo-div-flex',
    label: 'FO>div flex baseline gap0',
    idea: 'FO>div wrapper flex baseline gap0 — scoped nav row inside capture wrapper',
    base: flexFoDivBaseline(),
  },
]

/** @type {{ token: string, label: string, idea: string, navCss: string }[]} */
const NAV_LAYOUT = [
  {
    token: 'plain',
    label: 'plain nav',
    idea: 'no extra nav layout CSS beyond flex baseline gap0',
    navCss: '',
  },
  {
    token: 'vis-visible',
    label: 'nav visibility visible',
    idea: 'visibility:visible on nav + nav a — layout paint unlock without decoration',
    navCss: 'foreignObject nav,foreignObject nav a{visibility:visible!important}',
  },
  {
    token: 'content-vis-visible',
    label: 'nav content-visibility visible',
    idea: 'content-visibility:visible on nav row — skip-paint off for nav flex baseline',
    navCss: 'foreignObject nav{content-visibility:visible!important}',
  },
  {
    token: 'min-size-0',
    label: 'nav min-size 0',
    idea: 'min-height:0 min-width:0 on nav + nav a — flex shrink strut without visual change',
    navCss:
      'foreignObject nav,foreignObject nav a{min-height:0!important;min-width:0!important}',
  },
  {
    token: 'anchor-align-self-baseline',
    label: 'nav a align-self baseline',
    idea: 'align-self:baseline on nav anchors inside baseline flex row',
    navCss: 'foreignObject nav a{align-self:baseline!important;box-sizing:border-box!important}',
  },
  {
    token: 'anchor-lh-normal',
    label: 'nav a lh normal',
    idea: 'line-height:normal on nav anchors — strut reset inside baseline flex',
    navCss:
      'foreignObject nav a{line-height:normal!important;display:inline!important;box-sizing:border-box!important}',
  },
  {
    token: 'anchor-inline-baseline',
    label: 'nav a inline baseline',
    idea: 'display:inline + vertical-align:baseline on nav anchors',
    navCss:
      'foreignObject nav a{display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}',
  },
  {
    token: 'anchor-flex-shrink-0',
    label: 'nav a flex-shrink 0',
    idea: 'flex-shrink:0 on nav anchors — prevent flex squeeze without visible decoration',
    navCss: 'foreignObject nav a{flex-shrink:0!important;box-sizing:border-box!important}',
  },
  {
    token: 'nav-opacity-1',
    label: 'nav opacity 1',
    idea: 'opacity:1 + visibility:visible on nav — alpha wrapper does not hide flex strut',
    navCss:
      'foreignObject nav{opacity:1!important;visibility:visible!important}foreignObject nav a{opacity:1!important}',
  },
  {
    token: 'nav-nowrap-gap0',
    label: 'nav nowrap gap0',
    idea: 'flex-wrap:nowrap + gap:0 reaffirm on nav — row layout lock for Home/Products',
    navCss:
      'foreignObject nav{flex-wrap:nowrap!important;gap:0!important;row-gap:0!important;column-gap:0!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const flex of FLEX_TARGETS) {
  for (const nav of NAV_LAYOUT) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b12-w16-${num}`,
      label: `Loop AI b12 w16 #${num}: ${flex.label} ${nav.label}`,
      idea: `${flex.idea}; ${nav.idea}`,
      css: FO_BASELINE_CSS + TEXT_LEAF + flex.base + nav.navCss,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w16; ${flex.token}+${nav.token}; flex baseline gap0 nav invisible layout — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w16.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

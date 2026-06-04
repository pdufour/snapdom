/**
 * Loop AI batch-12 FO recipe shard (worker 27) — text-fix: min-height 0 flex text shrink (invisible).
 * 40 recipes: loop-ai-b12-w27-001..040 (4 shrink modes × 10 FO targets)
 * No radicalPatch / text-size-adjust pin — structural FO CSS only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN_SEL =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {{ key: string, idea: string, decl: string, rootPrefix?: boolean }[]} */
const SHRINK_MODES = [
  {
    key: 'shrink-items',
    idea: 'min-height:0 flex-shrink:1 on flex items',
    decl:
      'min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important',
  },
  {
    key: 'block-auto',
    idea: 'min-height:0 + block-size:auto shrink',
    decl:
      'min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important',
  },
  {
    key: 'flex-col',
    idea: 'flex column + min-height:0 shrink',
    decl:
      'display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important',
  },
  {
    key: 'unset-cascade',
    idea: 'min-height:unset vs root 1px floor',
    decl: 'min-height:unset!important;min-width:0!important;flex-shrink:1!important',
    rootPrefix: true,
  },
]

/** @type {{ key: string, label: string, css: (decl: string) => string }[]} */
const TARGETS = [
  {
    key: 'star',
    label: 'FO *',
    css: (d) => `foreignObject *{${d}}`,
  },
  {
    key: 'fo-div',
    label: 'FO>div',
    css: (d) => `foreignObject>div{${d}}`,
  },
  {
    key: 'fo-div-star',
    label: 'FO>div *',
    css: (d) => `foreignObject>div *{${d}}`,
  },
  {
    key: 'anchor',
    label: 'FO a',
    css: (d) =>
      `foreignObject a{${d};display:inline-block!important}`,
  },
  {
    key: 'span',
    label: 'FO span',
    css: (d) => `foreignObject span{${d};display:inline!important}`,
  },
  {
    key: 'text-chain',
    label: 'text chain',
    css: (d) => `${TEXT_CHAIN_SEL}{${d}}`,
  },
  {
    key: 'nav-a',
    label: 'nav a',
    css: (d) => `foreignObject nav a{${d}}`,
  },
  {
    key: 'div-a',
    label: 'FO>div a',
    css: (d) => `foreignObject>div a{${d}}`,
  },
  {
    key: 'flex-stretch-root',
    label: 'flex stretch root + *',
    css: (d) =>
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}' +
      `foreignObject *{${d}}`,
  },
  {
    key: 'flex-baseline-root',
    label: 'flex baseline root + *',
    css: (d) =>
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' +
      `foreignObject *{${d}}`,
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const mode of SHRINK_MODES) {
  for (const target of TARGETS) {
    index += 1
    const num = String(index).padStart(3, '0')
    const root = mode.rootPrefix ? 'foreignObject{min-height:1px!important}' : ''
    RECIPES.push({
      id: `loop-ai-b12-w27-${num}`,
      label: `Loop AI b12 w27 #${num}: ${mode.key} ${target.label}`,
      idea: `${mode.idea}; scoped ${target.label}`,
      css: FO_BASELINE_CSS + TEXT_LEAF + root + target.css(mode.decl),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w27; min-height 0 flex text shrink invisible (${mode.key}+${target.key}); no radicalPatch — FO-raster only, no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w27.js: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

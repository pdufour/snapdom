/**
 * Loop AI batch-10 FO recipe shard (worker 1) — text-fix: writing-mode axis on FO text leaves.
 * 40 recipes: loop-ai-b10-w01-001..040
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

/** @type {{ token: string, label: string, idea: string }[]} */
const WRITING_MODES = [
  {
    token: 'horizontal-tb',
    label: 'horizontal-tb',
    idea: 'writing-mode:horizontal-tb — default inline/block flow axis in FO raster',
  },
  {
    token: 'vertical-rl',
    label: 'vertical-rl',
    idea: 'writing-mode:vertical-rl — vertical inline axis, right-to-left block flow',
  },
  {
    token: 'vertical-lr',
    label: 'vertical-lr',
    idea: 'writing-mode:vertical-lr — vertical inline axis, left-to-right block flow',
  },
  {
    token: 'sideways-rl',
    label: 'sideways-rl',
    idea: 'writing-mode:sideways-rl — sideways inline progression in FO text leaves',
  },
  {
    token: 'sideways-lr',
    label: 'sideways-lr',
    idea: 'writing-mode:sideways-lr — opposite sideways inline axis on FO text leaves',
  },
]

/** @param {string} wm */
function cascadeResetCss(wm) {
  if (wm === 'horizontal-tb') {
    return (
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important}' +
      'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}'
    )
  }
  return (
    FO_BASELINE_CSS +
    TEXT_LEAF +
    `foreignObject{writing-mode:${wm}!important;text-orientation:mixed!important;overflow:visible!important}` +
    'foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}'
  )
}

/** @type {{ suffix: string, label: string, idea: string, css: (wm: string) => string }[]} */
const PATTERNS = [
  {
    suffix: 'leaves',
    label: 'on FO * leaves',
    idea: 'writing-mode on all FO descendants — global text-axis pin on FO subtree',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject *{writing-mode:${wm}!important;text-orientation:mixed!important}`,
  },
  {
    suffix: 'fo-root',
    label: 'on FO root',
    idea: 'writing-mode pinned on foreignObject root before descendant cascade',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject{writing-mode:${wm}!important;text-orientation:mixed!important;overflow:visible!important}`,
  },
  {
    suffix: 'anchors',
    label: 'on FO anchors',
    idea: 'writing-mode on FO a — nav anchor inline axis vs FO box measure',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject a{writing-mode:${wm}!important;text-orientation:mixed!important;` +
      'display:inline-block!important;vertical-align:baseline!important}',
  },
  {
    suffix: 'span',
    label: 'on FO span',
    idea: 'writing-mode on FO span inline text leaves',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject span{writing-mode:${wm}!important;text-orientation:mixed!important;` +
      'display:inline!important}',
  },
  {
    suffix: 'nav-a',
    label: 'on FO nav anchors',
    idea: 'writing-mode on FO nav a — mini-nav link glyph axis vs flex row',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject nav a{writing-mode:${wm}!important;text-orientation:mixed!important;` +
      'box-sizing:border-box!important}',
  },
  {
    suffix: 'axis-reset',
    label: 'parent/child axis reset',
    idea: 'FO parent writing-mode vs horizontal-tb reset on FO * — cascade axis flip on DOM text',
    css: (wm) => cascadeResetCss(wm),
  },
  {
    suffix: 'text-chain',
    label: 'on text chain',
    idea: 'writing-mode limited to inline text chain selectors inside FO',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `${TEXT_CHAIN}{writing-mode:${wm}!important;text-orientation:mixed!important}`,
  },
  {
    suffix: 'strut-bundle',
    label: 'strut + max-content',
    idea: 'writing-mode on FO * with line-height:normal + inline-size:max-content strut bundle',
    css: (wm) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject *{writing-mode:${wm}!important;text-orientation:mixed!important;` +
      'line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const pat of PATTERNS) {
  for (const mode of WRITING_MODES) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b10-w01-${num}`,
      label: `Loop AI b10 w01 #${num}: ${mode.label} ${pat.label}`,
      idea: `${pat.idea}; ${mode.idea}`,
      css: pat.css(mode.token),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b10 w01; ${mode.token} (${pat.suffix}); text axis only — no text bypass.`,
    })
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

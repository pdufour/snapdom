/**
 * Loop AI batch-10 FO recipe shard (worker 2) — text-fix: text-orientation + horizontal-tb.
 * 40 recipes: loop-ai-b10-w02-001..040
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
const ORIENTATIONS = [
  {
    token: 'mixed',
    label: 'mixed',
    idea: 'text-orientation:mixed — default rotated glyphs in horizontal-tb flow',
  },
  {
    token: 'upright',
    label: 'upright',
    idea: 'text-orientation:upright — upright glyphs in horizontal-tb line box',
  },
  {
    token: 'sideways',
    label: 'sideways',
    idea: 'text-orientation:sideways — sideways glyph stack in horizontal-tb flow',
  },
  {
    token: 'sideways-right',
    label: 'sideways-right',
    idea: 'text-orientation:sideways-right — logical sideways-right axis in horizontal-tb',
  },
  {
    token: 'sideways-left',
    label: 'sideways-left',
    idea: 'text-orientation:sideways-left — logical sideways-left axis in horizontal-tb',
  },
]

/** @type {{ suffix: string, label: string, idea: string, css: (o: string) => string }[]} */
const PATTERNS = [
  {
    suffix: 'leaves',
    label: 'on FO * leaves',
    idea: 'writing-mode:horizontal-tb + orientation on all FO descendants',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject *{writing-mode:horizontal-tb!important;text-orientation:${o}!important}`,
  },
  {
    suffix: 'fo-root',
    label: 'on FO root',
    idea: 'horizontal-tb + orientation pinned on foreignObject root before descendant cascade',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject{writing-mode:horizontal-tb!important;text-orientation:${o}!important;overflow:visible!important}`,
  },
  {
    suffix: 'anchors',
    label: 'on FO anchors',
    idea: 'horizontal-tb + orientation on FO a — nav anchor glyph axis vs inline strut',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject a{writing-mode:horizontal-tb!important;text-orientation:${o}!important;` +
      'display:inline-block!important;vertical-align:baseline!important}',
  },
  {
    suffix: 'span',
    label: 'on FO span',
    idea: 'horizontal-tb + orientation on FO span inline text leaves',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject span{writing-mode:horizontal-tb!important;text-orientation:${o}!important;` +
      'display:inline!important}',
  },
  {
    suffix: 'nav-a',
    label: 'on FO nav anchors',
    idea: 'horizontal-tb + orientation on FO nav a — mini-nav link glyph axis',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject nav a{writing-mode:horizontal-tb!important;text-orientation:${o}!important;` +
      'box-sizing:border-box!important}',
  },
  {
    suffix: 'vrl-reset',
    label: 'vertical-rl FO reset',
    idea: 'FO vertical-rl parent + horizontal-tb + orientation reset on FO * descendants',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject{writing-mode:vertical-rl!important;text-orientation:${o}!important;overflow:visible!important}` +
      `foreignObject *{writing-mode:horizontal-tb!important;text-orientation:${o}!important;unicode-bidi:normal!important}`,
  },
  {
    suffix: 'text-chain',
    label: 'on text chain',
    idea: 'horizontal-tb + orientation limited to inline text chain selectors inside FO',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `${TEXT_CHAIN}{writing-mode:horizontal-tb!important;text-orientation:${o}!important}`,
  },
  {
    suffix: 'strut-bundle',
    label: 'strut + max-content',
    idea: 'horizontal-tb + orientation on FO * with line-height:normal + inline-size:max-content strut bundle',
    css: (o) =>
      FO_BASELINE_CSS +
      TEXT_LEAF +
      `foreignObject *{writing-mode:horizontal-tb!important;text-orientation:${o}!important;` +
      'line-height:normal!important;inline-size:max-content!important;block-size:auto!important}',
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const pat of PATTERNS) {
  for (const ori of ORIENTATIONS) {
    index += 1
    const num = String(index).padStart(3, '0')
    RECIPES.push({
      id: `loop-ai-b10-w02-${num}`,
      label: `Loop AI b10 w02 #${num}: ${ori.label} ${pat.label}`,
      idea: `${pat.idea}; ${ori.idea}`,
      css: pat.css(ori.token),
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b10 w02; ${ori.token} + horizontal-tb (${pat.suffix}); text axis only — no text bypass.`,
    })
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

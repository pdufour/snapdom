/**
 * Loop AI batch-5 FO recipe shard (worker 10) — text-fix: stretch-leaf / line-height / baseline / text-edge.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b5-w10-001',
    label: 'Loop AI b5 w10 #001: h2 stretch-leaf pin nav text',
    idea: 'h2 isFlexCrossStretchTextLeaf stand-in — flex-start + auto heights on FO * for flex text leaves',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{align-self:flex-start!important;height:auto!important;' +
      'min-height:auto!important;max-height:none!important}',
    inject: 'capture',
    category: 'no-text-bypass',
    active: true,
    notes: 'Loop AI b5 shard worker 10; h2 stretch-leaf pin; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w10-002',
    label: 'Loop AI b5 w10 #002: FO>div line-height normal',
    idea: 'Counter h2 line-height:0 wrapper — restore normal strut on FO root div only',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject>div{line-height:normal!important}',
    inject: 'capture',
    category: 'no-text-bypass',
    active: true,
    notes: 'Loop AI b5 shard worker 10; FO>div line-height normal; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w10-003',
    label: 'Loop AI b5 w10 #003: inline-block baseline anchors',
    idea: 'display:inline-block + vertical-align:baseline on FO anchors — inline strut vs flex cross-axis',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject a{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'no-text-bypass',
    active: true,
    notes: 'Loop AI b5 shard worker 10; anchor baseline-align; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b5-w10-004',
    label: 'Loop AI b5 w10 #004: text-edge cap alphabetic',
    idea: 'Chromium leading-trim/text-edge cap alphabetic on FO * — typography edge vs FO line box',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{leading-trim:both!important;text-edge:cap alphabetic!important}',
    inject: 'capture',
    category: 'no-text-bypass',
    active: true,
    notes: 'Loop AI b5 shard worker 10; text-edge cap/alphabetic; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

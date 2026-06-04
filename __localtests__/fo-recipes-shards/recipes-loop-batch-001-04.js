/**
 * Loop batch 001 shard (worker 4) — typography / line metrics (no text-transform).
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-variant-ligatures:normal!important}' +
  'foreignObject *{-webkit-font-smoothing:antialiased!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-b001-w04-001',
    label: 'Loop b001 w04 #001: tabular-nums variant',
    idea: 'font-variant-numeric:tabular-nums on FO text leaves',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 04; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w04-002',
    label: 'Loop b001 w04 #002: letter-spacing em',
    idea: 'letter-spacing:0.01em on FO * — glyph advance probe',
    css: FO_BASELINE_CSS + 'foreignObject *{letter-spacing:0.01em!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 04; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w04-003',
    label: 'Loop b001 w04 #003: word-spacing em',
    idea: 'word-spacing:0.05em — inter-word gap vs FO line box',
    css: FO_BASELINE_CSS + 'foreignObject *{word-spacing:0.05em!important;white-space:pre-wrap!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 04; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w04-004',
    label: 'Loop b001 w04 #004: subpixel text-indent',
    idea: 'text-indent:0.01px on block FO children — micro horizontal shift',
    css: FO_BASELINE_CSS + 'foreignObject *{text-indent:0.01px!important;display:block!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    svgRootRound: 'int-floor',
    notes: 'Loop batch 001 worker 04; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w04-005',
    label: 'Loop b001 w04 #005: hanging-punctuation',
    idea: 'hanging-punctuation:first last on FO * — punctuation hang probe',
    css: FO_BASELINE_CSS + 'foreignObject *{hanging-punctuation:first last!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'Loop batch 001 worker 04; global FO; FO-raster only.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

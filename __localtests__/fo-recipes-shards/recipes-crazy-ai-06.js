/**
 * AI-authored crazy FO recipe shard (worker 06).
 * ONLY edit this file. Merge later: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w06-001',
    label: 'Crazy AI w06 #001: east-asian proportional-width',
    idea: 'font-variant-east-asian:proportional-width on FO * — CJK width probe',
    css: FO_BASELINE_CSS + 'foreignObject *{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w06-002',
    label: 'Crazy AI w06 #002: underline skip-ink none',
    idea: 'text-decoration-skip-ink:none + underline-position under on FO *',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-position:under!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w06-003',
    label: 'Crazy AI w06 #003: text-spacing-trim space-all',
    idea: 'text-spacing-trim:space-all on FO * — trim trailing glyph space',
    css: FO_BASELINE_CSS + 'foreignObject *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w06-004',
    label: 'Crazy AI w06 #004: font-synthesis all none',
    idea: 'font-synthesis:none + font-synthesis-weight:none on FO — no faux bold',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-synthesis:none!important;font-synthesis-weight:none!important;font-synthesis-style:none!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    notes: 'AI crazy shard worker 06; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w06-005',
    label: 'Crazy AI w06 #005: fe-component-transfer identity',
    idea: 'fe-component-transfer-identity SVG filter noop on FO raster',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    foSvgPatch: 'fe-component-transfer-identity',
    notes: 'AI crazy shard worker 06; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-8 FO recipe shard (worker 9) — text-fix: text-rendering + font-smoothing on text leaves only.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b8-w09-001',
    label: 'Loop AI b8 w09 #001: legibility + subpixel smooth',
    idea: 'text-rendering:optimizeLegibility + -webkit-font-smoothing:subpixel-antialiased on FO * text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-rendering:optimizeLegibility!important;' +
      '-webkit-font-smoothing:subpixel-antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w09; legibility + subpixel antialiased on leaves; glyph rendering — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w09-002',
    label: 'Loop AI b8 w09 #002: geometricPrecision + font-smooth always',
    idea: 'text-rendering:geometricPrecision + font-smooth:always on FO * — grid snap vs forced smoothing',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-rendering:geometricPrecision!important;font-smooth:always!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w09; geometricPrecision + font-smooth always on leaves; glyph rendering — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w09-003',
    label: 'Loop AI b8 w09 #003: optimizeSpeed + antialiased',
    idea: 'text-rendering:optimizeSpeed + -webkit-font-smoothing:antialiased on FO * text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-rendering:optimizeSpeed!important;-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w09; optimizeSpeed + antialiased on leaves; glyph rendering — no text bypass.',
  },
  {
    id: 'loop-ai-b8-w09-004',
    label: 'Loop AI b8 w09 #004: auto rendering + osx grayscale',
    idea: 'text-rendering:auto + -moz-osx-font-smoothing:grayscale on FO * — UA default vs macOS grayscale',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-rendering:auto!important;-moz-osx-font-smoothing:grayscale!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b8 w09; auto rendering + osx grayscale on leaves; glyph rendering — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

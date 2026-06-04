/**
 * Loop AI batch-9 FO recipe shard (worker 10) — text-fix: trim stack / geometricPrecision / smoothing chain.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TRIM_STACK =
  'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important;' +
  'text-box-edge:cap alphabetic!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b9-w10-001',
    label: 'Loop AI b9 w10 #001: leading trim cap edge',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css: FO_BASELINE_CSS + TEXT_LEAF + TRIM_STACK,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w10; trim + cap alphabetic edge on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w10-002',
    label: 'Loop AI b9 w10 #002: trim stack geometricPrecision',
    idea: 'trim cap stack on FO * + text-rendering:geometricPrecision on leaves only (no FO root)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TRIM_STACK +
      'foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w10; trim stack + geometricPrecision on *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b9-w10-003',
    label: 'Loop AI b9 w10 #003: trim stack antialiased chain',
    idea: 'trim cap stack + geometricPrecision on FO * + -webkit-font-smoothing:antialiased on text chain only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TRIM_STACK +
      'foreignObject *{text-rendering:geometricPrecision!important}' +
      TEXT_CHAIN +
      '{-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w10; trim + geometricPrecision + antialiased text chain; no text bypass.',
  },
  {
    id: 'loop-ai-b9-w10-004',
    label: 'Loop AI b9 w10 #004: trim render smooth bundle',
    idea: 'full trim cap stack + geometricPrecision on * + antialiased limited to inline text chain selectors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;' +
      'text-box-edge:cap alphabetic!important;text-rendering:geometricPrecision!important}' +
      TEXT_CHAIN +
      '{-webkit-font-smoothing:antialiased!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b9 w10; both-edges trim bundle + render + chain smoothing; no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

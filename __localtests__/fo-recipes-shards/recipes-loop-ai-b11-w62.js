/**
 * Loop AI batch-11 FO recipe shard (worker 62) — text-fix: word-break keep-all/break-word.
 * 100 recipes: loop-ai-b11-w62-001..100
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


/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w62-001',
    label: 'Loop AI b11 w62 #001: normal + ow normal *',
    idea: 'word-break:normal + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-002',
    label: 'Loop AI b11 w62 #002: normal + ow break-word *',
    idea: 'word-break:normal + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-003',
    label: 'Loop AI b11 w62 #003: normal + ow anywhere *',
    idea: 'word-break:normal + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-004',
    label: 'Loop AI b11 w62 #004: normal + ow inherit *',
    idea: 'word-break:normal + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-005',
    label: 'Loop AI b11 w62 #005: normal + ow unset *',
    idea: 'word-break:normal + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-006',
    label: 'Loop AI b11 w62 #006: keep-all + ow normal *',
    idea: 'word-break:keep-all + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-007',
    label: 'Loop AI b11 w62 #007: keep-all + ow break-word *',
    idea: 'word-break:keep-all + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-008',
    label: 'Loop AI b11 w62 #008: keep-all + ow anywhere *',
    idea: 'word-break:keep-all + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-009',
    label: 'Loop AI b11 w62 #009: keep-all + ow inherit *',
    idea: 'word-break:keep-all + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-010',
    label: 'Loop AI b11 w62 #010: keep-all + ow unset *',
    idea: 'word-break:keep-all + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-011',
    label: 'Loop AI b11 w62 #011: break-word + ow normal *',
    idea: 'word-break:break-word + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-012',
    label: 'Loop AI b11 w62 #012: break-word + ow break-word *',
    idea: 'word-break:break-word + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-013',
    label: 'Loop AI b11 w62 #013: break-word + ow anywhere *',
    idea: 'word-break:break-word + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-014',
    label: 'Loop AI b11 w62 #014: break-word + ow inherit *',
    idea: 'word-break:break-word + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-015',
    label: 'Loop AI b11 w62 #015: break-word + ow unset *',
    idea: 'word-break:break-word + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-016',
    label: 'Loop AI b11 w62 #016: break-all + ow normal *',
    idea: 'word-break:break-all + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-017',
    label: 'Loop AI b11 w62 #017: break-all + ow break-word *',
    idea: 'word-break:break-all + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-018',
    label: 'Loop AI b11 w62 #018: break-all + ow anywhere *',
    idea: 'word-break:break-all + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-019',
    label: 'Loop AI b11 w62 #019: break-all + ow inherit *',
    idea: 'word-break:break-all + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-020',
    label: 'Loop AI b11 w62 #020: break-all + ow unset *',
    idea: 'word-break:break-all + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-021',
    label: 'Loop AI b11 w62 #021: inherit + ow normal *',
    idea: 'word-break:inherit + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-022',
    label: 'Loop AI b11 w62 #022: inherit + ow break-word *',
    idea: 'word-break:inherit + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-023',
    label: 'Loop AI b11 w62 #023: inherit + ow anywhere *',
    idea: 'word-break:inherit + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-024',
    label: 'Loop AI b11 w62 #024: inherit + ow inherit *',
    idea: 'word-break:inherit + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-025',
    label: 'Loop AI b11 w62 #025: inherit + ow unset *',
    idea: 'word-break:inherit + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-026',
    label: 'Loop AI b11 w62 #026: unset + ow normal *',
    idea: 'word-break:unset + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-027',
    label: 'Loop AI b11 w62 #027: unset + ow break-word *',
    idea: 'word-break:unset + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-028',
    label: 'Loop AI b11 w62 #028: unset + ow anywhere *',
    idea: 'word-break:unset + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-029',
    label: 'Loop AI b11 w62 #029: unset + ow inherit *',
    idea: 'word-break:unset + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-030',
    label: 'Loop AI b11 w62 #030: unset + ow unset *',
    idea: 'word-break:unset + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-031',
    label: 'Loop AI b11 w62 #031: initial + ow normal *',
    idea: 'word-break:initial + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-032',
    label: 'Loop AI b11 w62 #032: initial + ow break-word *',
    idea: 'word-break:initial + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-033',
    label: 'Loop AI b11 w62 #033: initial + ow anywhere *',
    idea: 'word-break:initial + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-034',
    label: 'Loop AI b11 w62 #034: initial + ow inherit *',
    idea: 'word-break:initial + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-035',
    label: 'Loop AI b11 w62 #035: initial + ow unset *',
    idea: 'word-break:initial + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-036',
    label: 'Loop AI b11 w62 #036: revert + ow normal *',
    idea: 'word-break:revert + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert + ow normal *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-037',
    label: 'Loop AI b11 w62 #037: revert + ow break-word *',
    idea: 'word-break:revert + overflow-wrap:break-word on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert + ow break-word *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-038',
    label: 'Loop AI b11 w62 #038: revert + ow anywhere *',
    idea: 'word-break:revert + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert + ow anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-039',
    label: 'Loop AI b11 w62 #039: revert + ow inherit *',
    idea: 'word-break:revert + overflow-wrap:inherit on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert + ow inherit *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-040',
    label: 'Loop AI b11 w62 #040: revert + ow unset *',
    idea: 'word-break:revert + overflow-wrap:unset on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert + ow unset *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-041',
    label: 'Loop AI b11 w62 #041: normal on a',
    idea: 'word-break:normal on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:normal!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-042',
    label: 'Loop AI b11 w62 #042: normal on nav a',
    idea: 'word-break:normal on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:normal!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-043',
    label: 'Loop AI b11 w62 #043: normal on span',
    idea: 'word-break:normal on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:normal!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-044',
    label: 'Loop AI b11 w62 #044: normal on label',
    idea: 'word-break:normal on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:normal!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; normal on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-045',
    label: 'Loop AI b11 w62 #045: keep-all on a',
    idea: 'word-break:keep-all on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:keep-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-046',
    label: 'Loop AI b11 w62 #046: keep-all on nav a',
    idea: 'word-break:keep-all on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:keep-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-047',
    label: 'Loop AI b11 w62 #047: keep-all on span',
    idea: 'word-break:keep-all on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:keep-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-048',
    label: 'Loop AI b11 w62 #048: keep-all on label',
    idea: 'word-break:keep-all on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:keep-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-049',
    label: 'Loop AI b11 w62 #049: break-word on a',
    idea: 'word-break:break-word on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:break-word!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-050',
    label: 'Loop AI b11 w62 #050: break-word on nav a',
    idea: 'word-break:break-word on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:break-word!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-051',
    label: 'Loop AI b11 w62 #051: break-word on span',
    idea: 'word-break:break-word on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:break-word!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-052',
    label: 'Loop AI b11 w62 #052: break-word on label',
    idea: 'word-break:break-word on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:break-word!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-053',
    label: 'Loop AI b11 w62 #053: break-all on a',
    idea: 'word-break:break-all on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:break-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-054',
    label: 'Loop AI b11 w62 #054: break-all on nav a',
    idea: 'word-break:break-all on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:break-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-055',
    label: 'Loop AI b11 w62 #055: break-all on span',
    idea: 'word-break:break-all on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:break-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-056',
    label: 'Loop AI b11 w62 #056: break-all on label',
    idea: 'word-break:break-all on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:break-all!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-all on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-057',
    label: 'Loop AI b11 w62 #057: inherit on a',
    idea: 'word-break:inherit on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-058',
    label: 'Loop AI b11 w62 #058: inherit on nav a',
    idea: 'word-break:inherit on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-059',
    label: 'Loop AI b11 w62 #059: inherit on span',
    idea: 'word-break:inherit on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-060',
    label: 'Loop AI b11 w62 #060: inherit on label',
    idea: 'word-break:inherit on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; inherit on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-061',
    label: 'Loop AI b11 w62 #061: unset on a',
    idea: 'word-break:unset on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:unset!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-062',
    label: 'Loop AI b11 w62 #062: unset on nav a',
    idea: 'word-break:unset on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:unset!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-063',
    label: 'Loop AI b11 w62 #063: unset on span',
    idea: 'word-break:unset on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:unset!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-064',
    label: 'Loop AI b11 w62 #064: unset on label',
    idea: 'word-break:unset on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:unset!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; unset on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-065',
    label: 'Loop AI b11 w62 #065: initial on a',
    idea: 'word-break:initial on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-066',
    label: 'Loop AI b11 w62 #066: initial on nav a',
    idea: 'word-break:initial on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-067',
    label: 'Loop AI b11 w62 #067: initial on span',
    idea: 'word-break:initial on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-068',
    label: 'Loop AI b11 w62 #068: initial on label',
    idea: 'word-break:initial on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; initial on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-069',
    label: 'Loop AI b11 w62 #069: revert on a',
    idea: 'word-break:revert on a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{word-break:revert!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert on a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-070',
    label: 'Loop AI b11 w62 #070: revert on nav a',
    idea: 'word-break:revert on nav a — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:revert!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert on nav a; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-071',
    label: 'Loop AI b11 w62 #071: revert on span',
    idea: 'word-break:revert on span — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{word-break:revert!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert on span; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-072',
    label: 'Loop AI b11 w62 #072: revert on label',
    idea: 'word-break:revert on label — CJK/nowrap word-break probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{word-break:revert!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; revert on label; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-073',
    label: 'Loop AI b11 w62 #073: keep-all nowrap nav',
    idea: 'nav a keep-all + nowrap — nav single-line without break-all',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{word-break:keep-all!important;white-space:nowrap!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; keep-all nowrap nav; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-074',
    label: 'Loop AI b11 w62 #074: break-word anywhere *',
    idea: 'word-break:break-word + overflow-wrap:anywhere on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; break-word anywhere *; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-075',
    label: 'Loop AI b11 w62 #075: FO root keep-all',
    idea: 'FO root keep-all + * inherit — parent word-break cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{word-break:keep-all!important}foreignObject *{word-break:inherit!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; FO root keep-all; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-076',
    label: 'Loop AI b11 w62 #076: fill break-all normal',
    idea: 'word-break:break-all + overflow-wrap:normal matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-all normal; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-077',
    label: 'Loop AI b11 w62 #077: fill inherit anywhere',
    idea: 'word-break:inherit + overflow-wrap:anywhere matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill inherit anywhere; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-078',
    label: 'Loop AI b11 w62 #078: fill unset unset',
    idea: 'word-break:unset + overflow-wrap:unset matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill unset unset; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-079',
    label: 'Loop AI b11 w62 #079: fill initial break-word',
    idea: 'word-break:initial + overflow-wrap:break-word matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill initial break-word; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-080',
    label: 'Loop AI b11 w62 #080: fill revert inherit',
    idea: 'word-break:revert + overflow-wrap:inherit matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill revert inherit; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-081',
    label: 'Loop AI b11 w62 #081: fill normal normal',
    idea: 'word-break:normal + overflow-wrap:normal matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill normal normal; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-082',
    label: 'Loop AI b11 w62 #082: fill keep-all anywhere',
    idea: 'word-break:keep-all + overflow-wrap:anywhere matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill keep-all anywhere; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-083',
    label: 'Loop AI b11 w62 #083: fill break-word unset',
    idea: 'word-break:break-word + overflow-wrap:unset matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-word unset; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-084',
    label: 'Loop AI b11 w62 #084: fill break-all break-word',
    idea: 'word-break:break-all + overflow-wrap:break-word matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-all break-word; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-085',
    label: 'Loop AI b11 w62 #085: fill inherit inherit',
    idea: 'word-break:inherit + overflow-wrap:inherit matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill inherit inherit; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-086',
    label: 'Loop AI b11 w62 #086: fill unset normal',
    idea: 'word-break:unset + overflow-wrap:normal matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill unset normal; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-087',
    label: 'Loop AI b11 w62 #087: fill initial anywhere',
    idea: 'word-break:initial + overflow-wrap:anywhere matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill initial anywhere; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-088',
    label: 'Loop AI b11 w62 #088: fill revert unset',
    idea: 'word-break:revert + overflow-wrap:unset matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill revert unset; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-089',
    label: 'Loop AI b11 w62 #089: fill normal break-word',
    idea: 'word-break:normal + overflow-wrap:break-word matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill normal break-word; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-090',
    label: 'Loop AI b11 w62 #090: fill keep-all inherit',
    idea: 'word-break:keep-all + overflow-wrap:inherit matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill keep-all inherit; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-091',
    label: 'Loop AI b11 w62 #091: fill break-word normal',
    idea: 'word-break:break-word + overflow-wrap:normal matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-word normal; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-092',
    label: 'Loop AI b11 w62 #092: fill break-all anywhere',
    idea: 'word-break:break-all + overflow-wrap:anywhere matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-all anywhere; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-093',
    label: 'Loop AI b11 w62 #093: fill inherit unset',
    idea: 'word-break:inherit + overflow-wrap:unset matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill inherit unset; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-094',
    label: 'Loop AI b11 w62 #094: fill unset break-word',
    idea: 'word-break:unset + overflow-wrap:break-word matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:unset!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill unset break-word; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-095',
    label: 'Loop AI b11 w62 #095: fill initial inherit',
    idea: 'word-break:initial + overflow-wrap:inherit matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:initial!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill initial inherit; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-096',
    label: 'Loop AI b11 w62 #096: fill revert normal',
    idea: 'word-break:revert + overflow-wrap:normal matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:revert!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill revert normal; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-097',
    label: 'Loop AI b11 w62 #097: fill normal anywhere',
    idea: 'word-break:normal + overflow-wrap:anywhere matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:normal!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill normal anywhere; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-098',
    label: 'Loop AI b11 w62 #098: fill keep-all unset',
    idea: 'word-break:keep-all + overflow-wrap:unset matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:keep-all!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill keep-all unset; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-099',
    label: 'Loop AI b11 w62 #099: fill break-word break-word',
    idea: 'word-break:break-word + overflow-wrap:break-word matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-word!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-word break-word; word-break keep-all/break-word — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w62-100',
    label: 'Loop AI b11 w62 #100: fill break-all inherit',
    idea: 'word-break:break-all + overflow-wrap:inherit matrix fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{word-break:break-all!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w62; fill break-all inherit; word-break keep-all/break-word — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w62: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

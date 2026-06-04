/**
 * Loop AI batch-11 FO recipe shard (worker 64) — text-fix: text-decoration-skip-ink.
 * 100 recipes: loop-ai-b11-w64-001..100
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
    id: 'loop-ai-b11-w64-001',
    label: 'Loop AI b11 w64 #001: skip auto underline *',
    idea: 'text-decoration-skip-ink:auto + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-002',
    label: 'Loop AI b11 w64 #002: skip auto underline a',
    idea: 'text-decoration-skip-ink:auto + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-003',
    label: 'Loop AI b11 w64 #003: skip auto underline nav a',
    idea: 'text-decoration-skip-ink:auto + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-004',
    label: 'Loop AI b11 w64 #004: skip auto underline span',
    idea: 'text-decoration-skip-ink:auto + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-005',
    label: 'Loop AI b11 w64 #005: skip auto underline label',
    idea: 'text-decoration-skip-ink:auto + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-006',
    label: 'Loop AI b11 w64 #006: skip auto underline p',
    idea: 'text-decoration-skip-ink:auto + underline on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-007',
    label: 'Loop AI b11 w64 #007: skip auto underline line-through *',
    idea: 'text-decoration-skip-ink:auto + underline line-through on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline line-through *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-008',
    label: 'Loop AI b11 w64 #008: skip auto underline line-through a',
    idea: 'text-decoration-skip-ink:auto + underline line-through on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline line-through a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-009',
    label: 'Loop AI b11 w64 #009: skip auto underline line-through nav a',
    idea: 'text-decoration-skip-ink:auto + underline line-through on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline line-through nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-010',
    label: 'Loop AI b11 w64 #010: skip auto underline line-through span',
    idea: 'text-decoration-skip-ink:auto + underline line-through on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline line-through span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-011',
    label: 'Loop AI b11 w64 #011: skip auto underline line-through label',
    idea: 'text-decoration-skip-ink:auto + underline line-through on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline line-through label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-012',
    label: 'Loop AI b11 w64 #012: skip auto underline line-through p',
    idea: 'text-decoration-skip-ink:auto + underline line-through on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:underline line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto underline line-through p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-013',
    label: 'Loop AI b11 w64 #013: skip auto line-through *',
    idea: 'text-decoration-skip-ink:auto + line-through on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto line-through *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-014',
    label: 'Loop AI b11 w64 #014: skip auto line-through a',
    idea: 'text-decoration-skip-ink:auto + line-through on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto line-through a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-015',
    label: 'Loop AI b11 w64 #015: skip auto line-through nav a',
    idea: 'text-decoration-skip-ink:auto + line-through on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto line-through nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-016',
    label: 'Loop AI b11 w64 #016: skip auto line-through span',
    idea: 'text-decoration-skip-ink:auto + line-through on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto line-through span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-017',
    label: 'Loop AI b11 w64 #017: skip auto line-through label',
    idea: 'text-decoration-skip-ink:auto + line-through on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto line-through label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-018',
    label: 'Loop AI b11 w64 #018: skip auto line-through p',
    idea: 'text-decoration-skip-ink:auto + line-through on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:line-through!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto line-through p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-019',
    label: 'Loop AI b11 w64 #019: skip none underline *',
    idea: 'text-decoration-skip-ink:none + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-020',
    label: 'Loop AI b11 w64 #020: skip none underline a',
    idea: 'text-decoration-skip-ink:none + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-021',
    label: 'Loop AI b11 w64 #021: skip none underline nav a',
    idea: 'text-decoration-skip-ink:none + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-022',
    label: 'Loop AI b11 w64 #022: skip none underline span',
    idea: 'text-decoration-skip-ink:none + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-023',
    label: 'Loop AI b11 w64 #023: skip none underline label',
    idea: 'text-decoration-skip-ink:none + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-024',
    label: 'Loop AI b11 w64 #024: skip none underline p',
    idea: 'text-decoration-skip-ink:none + underline on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-025',
    label: 'Loop AI b11 w64 #025: skip none underline line-through *',
    idea: 'text-decoration-skip-ink:none + underline line-through on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline line-through *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-026',
    label: 'Loop AI b11 w64 #026: skip none underline line-through a',
    idea: 'text-decoration-skip-ink:none + underline line-through on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline line-through a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-027',
    label: 'Loop AI b11 w64 #027: skip none underline line-through nav a',
    idea: 'text-decoration-skip-ink:none + underline line-through on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline line-through nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-028',
    label: 'Loop AI b11 w64 #028: skip none underline line-through span',
    idea: 'text-decoration-skip-ink:none + underline line-through on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline line-through span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-029',
    label: 'Loop AI b11 w64 #029: skip none underline line-through label',
    idea: 'text-decoration-skip-ink:none + underline line-through on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline line-through label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-030',
    label: 'Loop AI b11 w64 #030: skip none underline line-through p',
    idea: 'text-decoration-skip-ink:none + underline line-through on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:underline line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none underline line-through p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-031',
    label: 'Loop AI b11 w64 #031: skip none line-through *',
    idea: 'text-decoration-skip-ink:none + line-through on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none line-through *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-032',
    label: 'Loop AI b11 w64 #032: skip none line-through a',
    idea: 'text-decoration-skip-ink:none + line-through on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none line-through a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-033',
    label: 'Loop AI b11 w64 #033: skip none line-through nav a',
    idea: 'text-decoration-skip-ink:none + line-through on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none line-through nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-034',
    label: 'Loop AI b11 w64 #034: skip none line-through span',
    idea: 'text-decoration-skip-ink:none + line-through on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none line-through span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-035',
    label: 'Loop AI b11 w64 #035: skip none line-through label',
    idea: 'text-decoration-skip-ink:none + line-through on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none line-through label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-036',
    label: 'Loop AI b11 w64 #036: skip none line-through p',
    idea: 'text-decoration-skip-ink:none + line-through on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:line-through!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none line-through p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-037',
    label: 'Loop AI b11 w64 #037: skip all underline *',
    idea: 'text-decoration-skip-ink:all + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-038',
    label: 'Loop AI b11 w64 #038: skip all underline a',
    idea: 'text-decoration-skip-ink:all + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-039',
    label: 'Loop AI b11 w64 #039: skip all underline nav a',
    idea: 'text-decoration-skip-ink:all + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-040',
    label: 'Loop AI b11 w64 #040: skip all underline span',
    idea: 'text-decoration-skip-ink:all + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-041',
    label: 'Loop AI b11 w64 #041: skip all underline label',
    idea: 'text-decoration-skip-ink:all + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-042',
    label: 'Loop AI b11 w64 #042: skip all underline p',
    idea: 'text-decoration-skip-ink:all + underline on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-043',
    label: 'Loop AI b11 w64 #043: skip all underline line-through *',
    idea: 'text-decoration-skip-ink:all + underline line-through on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline line-through *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-044',
    label: 'Loop AI b11 w64 #044: skip all underline line-through a',
    idea: 'text-decoration-skip-ink:all + underline line-through on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline line-through a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-045',
    label: 'Loop AI b11 w64 #045: skip all underline line-through nav a',
    idea: 'text-decoration-skip-ink:all + underline line-through on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline line-through nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-046',
    label: 'Loop AI b11 w64 #046: skip all underline line-through span',
    idea: 'text-decoration-skip-ink:all + underline line-through on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline line-through span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-047',
    label: 'Loop AI b11 w64 #047: skip all underline line-through label',
    idea: 'text-decoration-skip-ink:all + underline line-through on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline line-through label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-048',
    label: 'Loop AI b11 w64 #048: skip all underline line-through p',
    idea: 'text-decoration-skip-ink:all + underline line-through on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:underline line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all underline line-through p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-049',
    label: 'Loop AI b11 w64 #049: skip all line-through *',
    idea: 'text-decoration-skip-ink:all + line-through on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all line-through *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-050',
    label: 'Loop AI b11 w64 #050: skip all line-through a',
    idea: 'text-decoration-skip-ink:all + line-through on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all line-through a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-051',
    label: 'Loop AI b11 w64 #051: skip all line-through nav a',
    idea: 'text-decoration-skip-ink:all + line-through on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all line-through nav a; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-052',
    label: 'Loop AI b11 w64 #052: skip all line-through span',
    idea: 'text-decoration-skip-ink:all + line-through on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all line-through span; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-053',
    label: 'Loop AI b11 w64 #053: skip all line-through label',
    idea: 'text-decoration-skip-ink:all + line-through on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all line-through label; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-054',
    label: 'Loop AI b11 w64 #054: skip all line-through p',
    idea: 'text-decoration-skip-ink:all + line-through on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-decoration:line-through!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all line-through p; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-055',
    label: 'Loop AI b11 w64 #055: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-056',
    label: 'Loop AI b11 w64 #056: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-057',
    label: 'Loop AI b11 w64 #057: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-058',
    label: 'Loop AI b11 w64 #058: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-059',
    label: 'Loop AI b11 w64 #059: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-060',
    label: 'Loop AI b11 w64 #060: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-061',
    label: 'Loop AI b11 w64 #061: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-062',
    label: 'Loop AI b11 w64 #062: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-063',
    label: 'Loop AI b11 w64 #063: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-064',
    label: 'Loop AI b11 w64 #064: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-065',
    label: 'Loop AI b11 w64 #065: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-066',
    label: 'Loop AI b11 w64 #066: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-067',
    label: 'Loop AI b11 w64 #067: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-068',
    label: 'Loop AI b11 w64 #068: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-069',
    label: 'Loop AI b11 w64 #069: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-070',
    label: 'Loop AI b11 w64 #070: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-071',
    label: 'Loop AI b11 w64 #071: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-072',
    label: 'Loop AI b11 w64 #072: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-073',
    label: 'Loop AI b11 w64 #073: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-074',
    label: 'Loop AI b11 w64 #074: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-075',
    label: 'Loop AI b11 w64 #075: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-076',
    label: 'Loop AI b11 w64 #076: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-077',
    label: 'Loop AI b11 w64 #077: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-078',
    label: 'Loop AI b11 w64 #078: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-079',
    label: 'Loop AI b11 w64 #079: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-080',
    label: 'Loop AI b11 w64 #080: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-081',
    label: 'Loop AI b11 w64 #081: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-082',
    label: 'Loop AI b11 w64 #082: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-083',
    label: 'Loop AI b11 w64 #083: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-084',
    label: 'Loop AI b11 w64 #084: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-085',
    label: 'Loop AI b11 w64 #085: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-086',
    label: 'Loop AI b11 w64 #086: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-087',
    label: 'Loop AI b11 w64 #087: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-088',
    label: 'Loop AI b11 w64 #088: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-089',
    label: 'Loop AI b11 w64 #089: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-090',
    label: 'Loop AI b11 w64 #090: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-091',
    label: 'Loop AI b11 w64 #091: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-092',
    label: 'Loop AI b11 w64 #092: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-093',
    label: 'Loop AI b11 w64 #093: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-094',
    label: 'Loop AI b11 w64 #094: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-095',
    label: 'Loop AI b11 w64 #095: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-096',
    label: 'Loop AI b11 w64 #096: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-097',
    label: 'Loop AI b11 w64 #097: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-098',
    label: 'Loop AI b11 w64 #098: skip none fill *',
    idea: 'text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:none!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip none fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-099',
    label: 'Loop AI b11 w64 #099: skip all fill *',
    idea: 'text-decoration-skip-ink:all on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:all!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip all fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w64-100',
    label: 'Loop AI b11 w64 #100: skip auto fill *',
    idea: 'text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-decoration-skip-ink:auto!important;text-underline-offset:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w64; skip auto fill *; text-decoration-skip-ink — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w64: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

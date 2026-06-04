/**
 * Loop AI batch-11 FO recipe shard (worker 66) — text-fix: font-stretch percentage 50-200.
 * 100 recipes: loop-ai-b11-w66-001..100
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
    id: 'loop-ai-b11-w66-001',
    label: 'Loop AI b11 w66 #001: stretch 50% *',
    idea: 'font-stretch:50% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-002',
    label: 'Loop AI b11 w66 #002: stretch 50% a',
    idea: 'font-stretch:50% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-003',
    label: 'Loop AI b11 w66 #003: stretch 50% nav a',
    idea: 'font-stretch:50% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-004',
    label: 'Loop AI b11 w66 #004: stretch 50% span',
    idea: 'font-stretch:50% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-005',
    label: 'Loop AI b11 w66 #005: stretch 50% label',
    idea: 'font-stretch:50% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-006',
    label: 'Loop AI b11 w66 #006: stretch 50% FO>div',
    idea: 'font-stretch:50% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-007',
    label: 'Loop AI b11 w66 #007: stretch 50% FO>div *',
    idea: 'font-stretch:50% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-008',
    label: 'Loop AI b11 w66 #008: stretch 50% header *',
    idea: 'font-stretch:50% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:50%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 50% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-009',
    label: 'Loop AI b11 w66 #009: stretch 62.5% *',
    idea: 'font-stretch:62.5% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-010',
    label: 'Loop AI b11 w66 #010: stretch 62.5% a',
    idea: 'font-stretch:62.5% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-011',
    label: 'Loop AI b11 w66 #011: stretch 62.5% nav a',
    idea: 'font-stretch:62.5% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-012',
    label: 'Loop AI b11 w66 #012: stretch 62.5% span',
    idea: 'font-stretch:62.5% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-013',
    label: 'Loop AI b11 w66 #013: stretch 62.5% label',
    idea: 'font-stretch:62.5% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-014',
    label: 'Loop AI b11 w66 #014: stretch 62.5% FO>div',
    idea: 'font-stretch:62.5% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-015',
    label: 'Loop AI b11 w66 #015: stretch 62.5% FO>div *',
    idea: 'font-stretch:62.5% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-016',
    label: 'Loop AI b11 w66 #016: stretch 62.5% header *',
    idea: 'font-stretch:62.5% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:62.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 62.5% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-017',
    label: 'Loop AI b11 w66 #017: stretch 75% *',
    idea: 'font-stretch:75% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-018',
    label: 'Loop AI b11 w66 #018: stretch 75% a',
    idea: 'font-stretch:75% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-019',
    label: 'Loop AI b11 w66 #019: stretch 75% nav a',
    idea: 'font-stretch:75% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-020',
    label: 'Loop AI b11 w66 #020: stretch 75% span',
    idea: 'font-stretch:75% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-021',
    label: 'Loop AI b11 w66 #021: stretch 75% label',
    idea: 'font-stretch:75% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-022',
    label: 'Loop AI b11 w66 #022: stretch 75% FO>div',
    idea: 'font-stretch:75% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-023',
    label: 'Loop AI b11 w66 #023: stretch 75% FO>div *',
    idea: 'font-stretch:75% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-024',
    label: 'Loop AI b11 w66 #024: stretch 75% header *',
    idea: 'font-stretch:75% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:75%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 75% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-025',
    label: 'Loop AI b11 w66 #025: stretch 80% *',
    idea: 'font-stretch:80% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-026',
    label: 'Loop AI b11 w66 #026: stretch 80% a',
    idea: 'font-stretch:80% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-027',
    label: 'Loop AI b11 w66 #027: stretch 80% nav a',
    idea: 'font-stretch:80% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-028',
    label: 'Loop AI b11 w66 #028: stretch 80% span',
    idea: 'font-stretch:80% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-029',
    label: 'Loop AI b11 w66 #029: stretch 80% label',
    idea: 'font-stretch:80% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-030',
    label: 'Loop AI b11 w66 #030: stretch 80% FO>div',
    idea: 'font-stretch:80% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-031',
    label: 'Loop AI b11 w66 #031: stretch 80% FO>div *',
    idea: 'font-stretch:80% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-032',
    label: 'Loop AI b11 w66 #032: stretch 80% header *',
    idea: 'font-stretch:80% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:80%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 80% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-033',
    label: 'Loop AI b11 w66 #033: stretch 87.5% *',
    idea: 'font-stretch:87.5% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-034',
    label: 'Loop AI b11 w66 #034: stretch 87.5% a',
    idea: 'font-stretch:87.5% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-035',
    label: 'Loop AI b11 w66 #035: stretch 87.5% nav a',
    idea: 'font-stretch:87.5% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-036',
    label: 'Loop AI b11 w66 #036: stretch 87.5% span',
    idea: 'font-stretch:87.5% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-037',
    label: 'Loop AI b11 w66 #037: stretch 87.5% label',
    idea: 'font-stretch:87.5% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-038',
    label: 'Loop AI b11 w66 #038: stretch 87.5% FO>div',
    idea: 'font-stretch:87.5% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-039',
    label: 'Loop AI b11 w66 #039: stretch 87.5% FO>div *',
    idea: 'font-stretch:87.5% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-040',
    label: 'Loop AI b11 w66 #040: stretch 87.5% header *',
    idea: 'font-stretch:87.5% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:87.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 87.5% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-041',
    label: 'Loop AI b11 w66 #041: stretch 90% *',
    idea: 'font-stretch:90% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-042',
    label: 'Loop AI b11 w66 #042: stretch 90% a',
    idea: 'font-stretch:90% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-043',
    label: 'Loop AI b11 w66 #043: stretch 90% nav a',
    idea: 'font-stretch:90% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-044',
    label: 'Loop AI b11 w66 #044: stretch 90% span',
    idea: 'font-stretch:90% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-045',
    label: 'Loop AI b11 w66 #045: stretch 90% label',
    idea: 'font-stretch:90% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-046',
    label: 'Loop AI b11 w66 #046: stretch 90% FO>div',
    idea: 'font-stretch:90% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-047',
    label: 'Loop AI b11 w66 #047: stretch 90% FO>div *',
    idea: 'font-stretch:90% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-048',
    label: 'Loop AI b11 w66 #048: stretch 90% header *',
    idea: 'font-stretch:90% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:90%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 90% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-049',
    label: 'Loop AI b11 w66 #049: stretch 100% *',
    idea: 'font-stretch:100% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-050',
    label: 'Loop AI b11 w66 #050: stretch 100% a',
    idea: 'font-stretch:100% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-051',
    label: 'Loop AI b11 w66 #051: stretch 100% nav a',
    idea: 'font-stretch:100% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-052',
    label: 'Loop AI b11 w66 #052: stretch 100% span',
    idea: 'font-stretch:100% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-053',
    label: 'Loop AI b11 w66 #053: stretch 100% label',
    idea: 'font-stretch:100% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-054',
    label: 'Loop AI b11 w66 #054: stretch 100% FO>div',
    idea: 'font-stretch:100% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-055',
    label: 'Loop AI b11 w66 #055: stretch 100% FO>div *',
    idea: 'font-stretch:100% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-056',
    label: 'Loop AI b11 w66 #056: stretch 100% header *',
    idea: 'font-stretch:100% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:100%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 100% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-057',
    label: 'Loop AI b11 w66 #057: stretch 110% *',
    idea: 'font-stretch:110% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-058',
    label: 'Loop AI b11 w66 #058: stretch 110% a',
    idea: 'font-stretch:110% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-059',
    label: 'Loop AI b11 w66 #059: stretch 110% nav a',
    idea: 'font-stretch:110% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-060',
    label: 'Loop AI b11 w66 #060: stretch 110% span',
    idea: 'font-stretch:110% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-061',
    label: 'Loop AI b11 w66 #061: stretch 110% label',
    idea: 'font-stretch:110% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-062',
    label: 'Loop AI b11 w66 #062: stretch 110% FO>div',
    idea: 'font-stretch:110% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-063',
    label: 'Loop AI b11 w66 #063: stretch 110% FO>div *',
    idea: 'font-stretch:110% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-064',
    label: 'Loop AI b11 w66 #064: stretch 110% header *',
    idea: 'font-stretch:110% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:110%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 110% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-065',
    label: 'Loop AI b11 w66 #065: stretch 112.5% *',
    idea: 'font-stretch:112.5% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-066',
    label: 'Loop AI b11 w66 #066: stretch 112.5% a',
    idea: 'font-stretch:112.5% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-067',
    label: 'Loop AI b11 w66 #067: stretch 112.5% nav a',
    idea: 'font-stretch:112.5% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-068',
    label: 'Loop AI b11 w66 #068: stretch 112.5% span',
    idea: 'font-stretch:112.5% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-069',
    label: 'Loop AI b11 w66 #069: stretch 112.5% label',
    idea: 'font-stretch:112.5% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-070',
    label: 'Loop AI b11 w66 #070: stretch 112.5% FO>div',
    idea: 'font-stretch:112.5% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-071',
    label: 'Loop AI b11 w66 #071: stretch 112.5% FO>div *',
    idea: 'font-stretch:112.5% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-072',
    label: 'Loop AI b11 w66 #072: stretch 112.5% header *',
    idea: 'font-stretch:112.5% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:112.5%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 112.5% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-073',
    label: 'Loop AI b11 w66 #073: stretch 125% *',
    idea: 'font-stretch:125% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-074',
    label: 'Loop AI b11 w66 #074: stretch 125% a',
    idea: 'font-stretch:125% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-075',
    label: 'Loop AI b11 w66 #075: stretch 125% nav a',
    idea: 'font-stretch:125% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-076',
    label: 'Loop AI b11 w66 #076: stretch 125% span',
    idea: 'font-stretch:125% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-077',
    label: 'Loop AI b11 w66 #077: stretch 125% label',
    idea: 'font-stretch:125% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-078',
    label: 'Loop AI b11 w66 #078: stretch 125% FO>div',
    idea: 'font-stretch:125% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-079',
    label: 'Loop AI b11 w66 #079: stretch 125% FO>div *',
    idea: 'font-stretch:125% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-080',
    label: 'Loop AI b11 w66 #080: stretch 125% header *',
    idea: 'font-stretch:125% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:125%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 125% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-081',
    label: 'Loop AI b11 w66 #081: stretch 150% *',
    idea: 'font-stretch:150% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-082',
    label: 'Loop AI b11 w66 #082: stretch 150% a',
    idea: 'font-stretch:150% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-083',
    label: 'Loop AI b11 w66 #083: stretch 150% nav a',
    idea: 'font-stretch:150% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-084',
    label: 'Loop AI b11 w66 #084: stretch 150% span',
    idea: 'font-stretch:150% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-085',
    label: 'Loop AI b11 w66 #085: stretch 150% label',
    idea: 'font-stretch:150% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-086',
    label: 'Loop AI b11 w66 #086: stretch 150% FO>div',
    idea: 'font-stretch:150% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-087',
    label: 'Loop AI b11 w66 #087: stretch 150% FO>div *',
    idea: 'font-stretch:150% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-088',
    label: 'Loop AI b11 w66 #088: stretch 150% header *',
    idea: 'font-stretch:150% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:150%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 150% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-089',
    label: 'Loop AI b11 w66 #089: stretch 175% *',
    idea: 'font-stretch:175% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-090',
    label: 'Loop AI b11 w66 #090: stretch 175% a',
    idea: 'font-stretch:175% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-091',
    label: 'Loop AI b11 w66 #091: stretch 175% nav a',
    idea: 'font-stretch:175% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-092',
    label: 'Loop AI b11 w66 #092: stretch 175% span',
    idea: 'font-stretch:175% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-093',
    label: 'Loop AI b11 w66 #093: stretch 175% label',
    idea: 'font-stretch:175% on label — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% label; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-094',
    label: 'Loop AI b11 w66 #094: stretch 175% FO>div',
    idea: 'font-stretch:175% on FO>div — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% FO>div; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-095',
    label: 'Loop AI b11 w66 #095: stretch 175% FO>div *',
    idea: 'font-stretch:175% on FO>div * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% FO>div *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-096',
    label: 'Loop AI b11 w66 #096: stretch 175% header *',
    idea: 'font-stretch:175% on header * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:175%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 175% header *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-097',
    label: 'Loop AI b11 w66 #097: stretch 200% *',
    idea: 'font-stretch:200% on * — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:200%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 200% *; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-098',
    label: 'Loop AI b11 w66 #098: stretch 200% a',
    idea: 'font-stretch:200% on a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:200%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 200% a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-099',
    label: 'Loop AI b11 w66 #099: stretch 200% nav a',
    idea: 'font-stretch:200% on nav a — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:200%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 200% nav a; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w66-100',
    label: 'Loop AI b11 w66 #100: stretch 200% span',
    idea: 'font-stretch:200% on span — percentage width axis 50–200',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:200%!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w66; stretch 200% span; font-stretch percentage 50-200 — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w66: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

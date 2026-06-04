/**
 * Loop AI batch-11 FO recipe shard (worker 65) — text-fix: font-stretch condensed/expanded.
 * 100 recipes: loop-ai-b11-w65-001..100
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
    id: 'loop-ai-b11-w65-001',
    label: 'Loop AI b11 w65 #001: stretch ultra-condensed *',
    idea: 'font-stretch:ultra-condensed on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-002',
    label: 'Loop AI b11 w65 #002: stretch ultra-condensed a',
    idea: 'font-stretch:ultra-condensed on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-003',
    label: 'Loop AI b11 w65 #003: stretch ultra-condensed nav a',
    idea: 'font-stretch:ultra-condensed on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-004',
    label: 'Loop AI b11 w65 #004: stretch ultra-condensed span',
    idea: 'font-stretch:ultra-condensed on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-005',
    label: 'Loop AI b11 w65 #005: stretch ultra-condensed label',
    idea: 'font-stretch:ultra-condensed on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-006',
    label: 'Loop AI b11 w65 #006: stretch ultra-condensed FO>div *',
    idea: 'font-stretch:ultra-condensed on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-007',
    label: 'Loop AI b11 w65 #007: stretch ultra-condensed header *',
    idea: 'font-stretch:ultra-condensed on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:ultra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-008',
    label: 'Loop AI b11 w65 #008: stretch extra-condensed *',
    idea: 'font-stretch:extra-condensed on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-009',
    label: 'Loop AI b11 w65 #009: stretch extra-condensed a',
    idea: 'font-stretch:extra-condensed on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-010',
    label: 'Loop AI b11 w65 #010: stretch extra-condensed nav a',
    idea: 'font-stretch:extra-condensed on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-011',
    label: 'Loop AI b11 w65 #011: stretch extra-condensed span',
    idea: 'font-stretch:extra-condensed on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-012',
    label: 'Loop AI b11 w65 #012: stretch extra-condensed label',
    idea: 'font-stretch:extra-condensed on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-013',
    label: 'Loop AI b11 w65 #013: stretch extra-condensed FO>div *',
    idea: 'font-stretch:extra-condensed on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-014',
    label: 'Loop AI b11 w65 #014: stretch extra-condensed header *',
    idea: 'font-stretch:extra-condensed on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:extra-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-015',
    label: 'Loop AI b11 w65 #015: stretch condensed *',
    idea: 'font-stretch:condensed on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-016',
    label: 'Loop AI b11 w65 #016: stretch condensed a',
    idea: 'font-stretch:condensed on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-017',
    label: 'Loop AI b11 w65 #017: stretch condensed nav a',
    idea: 'font-stretch:condensed on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-018',
    label: 'Loop AI b11 w65 #018: stretch condensed span',
    idea: 'font-stretch:condensed on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-019',
    label: 'Loop AI b11 w65 #019: stretch condensed label',
    idea: 'font-stretch:condensed on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-020',
    label: 'Loop AI b11 w65 #020: stretch condensed FO>div *',
    idea: 'font-stretch:condensed on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-021',
    label: 'Loop AI b11 w65 #021: stretch condensed header *',
    idea: 'font-stretch:condensed on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-022',
    label: 'Loop AI b11 w65 #022: stretch semi-condensed *',
    idea: 'font-stretch:semi-condensed on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-023',
    label: 'Loop AI b11 w65 #023: stretch semi-condensed a',
    idea: 'font-stretch:semi-condensed on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-024',
    label: 'Loop AI b11 w65 #024: stretch semi-condensed nav a',
    idea: 'font-stretch:semi-condensed on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-025',
    label: 'Loop AI b11 w65 #025: stretch semi-condensed span',
    idea: 'font-stretch:semi-condensed on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-026',
    label: 'Loop AI b11 w65 #026: stretch semi-condensed label',
    idea: 'font-stretch:semi-condensed on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-027',
    label: 'Loop AI b11 w65 #027: stretch semi-condensed FO>div *',
    idea: 'font-stretch:semi-condensed on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-028',
    label: 'Loop AI b11 w65 #028: stretch semi-condensed header *',
    idea: 'font-stretch:semi-condensed on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:semi-condensed!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-029',
    label: 'Loop AI b11 w65 #029: stretch normal *',
    idea: 'font-stretch:normal on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-030',
    label: 'Loop AI b11 w65 #030: stretch normal a',
    idea: 'font-stretch:normal on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-031',
    label: 'Loop AI b11 w65 #031: stretch normal nav a',
    idea: 'font-stretch:normal on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-032',
    label: 'Loop AI b11 w65 #032: stretch normal span',
    idea: 'font-stretch:normal on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-033',
    label: 'Loop AI b11 w65 #033: stretch normal label',
    idea: 'font-stretch:normal on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-034',
    label: 'Loop AI b11 w65 #034: stretch normal FO>div *',
    idea: 'font-stretch:normal on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-035',
    label: 'Loop AI b11 w65 #035: stretch normal header *',
    idea: 'font-stretch:normal on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-036',
    label: 'Loop AI b11 w65 #036: stretch semi-expanded *',
    idea: 'font-stretch:semi-expanded on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-037',
    label: 'Loop AI b11 w65 #037: stretch semi-expanded a',
    idea: 'font-stretch:semi-expanded on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-038',
    label: 'Loop AI b11 w65 #038: stretch semi-expanded nav a',
    idea: 'font-stretch:semi-expanded on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-039',
    label: 'Loop AI b11 w65 #039: stretch semi-expanded span',
    idea: 'font-stretch:semi-expanded on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-040',
    label: 'Loop AI b11 w65 #040: stretch semi-expanded label',
    idea: 'font-stretch:semi-expanded on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-041',
    label: 'Loop AI b11 w65 #041: stretch semi-expanded FO>div *',
    idea: 'font-stretch:semi-expanded on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-042',
    label: 'Loop AI b11 w65 #042: stretch semi-expanded header *',
    idea: 'font-stretch:semi-expanded on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:semi-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-043',
    label: 'Loop AI b11 w65 #043: stretch expanded *',
    idea: 'font-stretch:expanded on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-044',
    label: 'Loop AI b11 w65 #044: stretch expanded a',
    idea: 'font-stretch:expanded on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-045',
    label: 'Loop AI b11 w65 #045: stretch expanded nav a',
    idea: 'font-stretch:expanded on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-046',
    label: 'Loop AI b11 w65 #046: stretch expanded span',
    idea: 'font-stretch:expanded on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-047',
    label: 'Loop AI b11 w65 #047: stretch expanded label',
    idea: 'font-stretch:expanded on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-048',
    label: 'Loop AI b11 w65 #048: stretch expanded FO>div *',
    idea: 'font-stretch:expanded on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-049',
    label: 'Loop AI b11 w65 #049: stretch expanded header *',
    idea: 'font-stretch:expanded on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-050',
    label: 'Loop AI b11 w65 #050: stretch extra-expanded *',
    idea: 'font-stretch:extra-expanded on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-051',
    label: 'Loop AI b11 w65 #051: stretch extra-expanded a',
    idea: 'font-stretch:extra-expanded on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-052',
    label: 'Loop AI b11 w65 #052: stretch extra-expanded nav a',
    idea: 'font-stretch:extra-expanded on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-053',
    label: 'Loop AI b11 w65 #053: stretch extra-expanded span',
    idea: 'font-stretch:extra-expanded on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-054',
    label: 'Loop AI b11 w65 #054: stretch extra-expanded label',
    idea: 'font-stretch:extra-expanded on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-055',
    label: 'Loop AI b11 w65 #055: stretch extra-expanded FO>div *',
    idea: 'font-stretch:extra-expanded on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-056',
    label: 'Loop AI b11 w65 #056: stretch extra-expanded header *',
    idea: 'font-stretch:extra-expanded on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:extra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-057',
    label: 'Loop AI b11 w65 #057: stretch ultra-expanded *',
    idea: 'font-stretch:ultra-expanded on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-058',
    label: 'Loop AI b11 w65 #058: stretch ultra-expanded a',
    idea: 'font-stretch:ultra-expanded on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-059',
    label: 'Loop AI b11 w65 #059: stretch ultra-expanded nav a',
    idea: 'font-stretch:ultra-expanded on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-060',
    label: 'Loop AI b11 w65 #060: stretch ultra-expanded span',
    idea: 'font-stretch:ultra-expanded on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-061',
    label: 'Loop AI b11 w65 #061: stretch ultra-expanded label',
    idea: 'font-stretch:ultra-expanded on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-062',
    label: 'Loop AI b11 w65 #062: stretch ultra-expanded FO>div *',
    idea: 'font-stretch:ultra-expanded on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-063',
    label: 'Loop AI b11 w65 #063: stretch ultra-expanded header *',
    idea: 'font-stretch:ultra-expanded on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:ultra-expanded!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-064',
    label: 'Loop AI b11 w65 #064: stretch inherit *',
    idea: 'font-stretch:inherit on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-065',
    label: 'Loop AI b11 w65 #065: stretch inherit a',
    idea: 'font-stretch:inherit on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-066',
    label: 'Loop AI b11 w65 #066: stretch inherit nav a',
    idea: 'font-stretch:inherit on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-067',
    label: 'Loop AI b11 w65 #067: stretch inherit span',
    idea: 'font-stretch:inherit on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-068',
    label: 'Loop AI b11 w65 #068: stretch inherit label',
    idea: 'font-stretch:inherit on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-069',
    label: 'Loop AI b11 w65 #069: stretch inherit FO>div *',
    idea: 'font-stretch:inherit on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-070',
    label: 'Loop AI b11 w65 #070: stretch inherit header *',
    idea: 'font-stretch:inherit on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch inherit header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-071',
    label: 'Loop AI b11 w65 #071: stretch unset *',
    idea: 'font-stretch:unset on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-072',
    label: 'Loop AI b11 w65 #072: stretch unset a',
    idea: 'font-stretch:unset on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-073',
    label: 'Loop AI b11 w65 #073: stretch unset nav a',
    idea: 'font-stretch:unset on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-074',
    label: 'Loop AI b11 w65 #074: stretch unset span',
    idea: 'font-stretch:unset on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-075',
    label: 'Loop AI b11 w65 #075: stretch unset label',
    idea: 'font-stretch:unset on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-076',
    label: 'Loop AI b11 w65 #076: stretch unset FO>div *',
    idea: 'font-stretch:unset on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-077',
    label: 'Loop AI b11 w65 #077: stretch unset header *',
    idea: 'font-stretch:unset on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch unset header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-078',
    label: 'Loop AI b11 w65 #078: stretch initial *',
    idea: 'font-stretch:initial on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-079',
    label: 'Loop AI b11 w65 #079: stretch initial a',
    idea: 'font-stretch:initial on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-080',
    label: 'Loop AI b11 w65 #080: stretch initial nav a',
    idea: 'font-stretch:initial on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-081',
    label: 'Loop AI b11 w65 #081: stretch initial span',
    idea: 'font-stretch:initial on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-082',
    label: 'Loop AI b11 w65 #082: stretch initial label',
    idea: 'font-stretch:initial on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-083',
    label: 'Loop AI b11 w65 #083: stretch initial FO>div *',
    idea: 'font-stretch:initial on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-084',
    label: 'Loop AI b11 w65 #084: stretch initial header *',
    idea: 'font-stretch:initial on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch initial header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-085',
    label: 'Loop AI b11 w65 #085: stretch revert *',
    idea: 'font-stretch:revert on * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-086',
    label: 'Loop AI b11 w65 #086: stretch revert a',
    idea: 'font-stretch:revert on a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-087',
    label: 'Loop AI b11 w65 #087: stretch revert nav a',
    idea: 'font-stretch:revert on nav a — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert nav a; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-088',
    label: 'Loop AI b11 w65 #088: stretch revert span',
    idea: 'font-stretch:revert on span — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert span; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-089',
    label: 'Loop AI b11 w65 #089: stretch revert label',
    idea: 'font-stretch:revert on label — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert label; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-090',
    label: 'Loop AI b11 w65 #090: stretch revert FO>div *',
    idea: 'font-stretch:revert on FO>div * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert FO>div *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-091',
    label: 'Loop AI b11 w65 #091: stretch revert header *',
    idea: 'font-stretch:revert on header * — keyword condensed/expanded matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{font-stretch:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch revert header *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-092',
    label: 'Loop AI b11 w65 #092: stretch ultra-condensed fill *',
    idea: 'font-stretch:ultra-condensed on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:ultra-condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-condensed fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-093',
    label: 'Loop AI b11 w65 #093: stretch extra-condensed fill *',
    idea: 'font-stretch:extra-condensed on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:extra-condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-condensed fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-094',
    label: 'Loop AI b11 w65 #094: stretch condensed fill *',
    idea: 'font-stretch:condensed on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch condensed fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-095',
    label: 'Loop AI b11 w65 #095: stretch semi-condensed fill *',
    idea: 'font-stretch:semi-condensed on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:semi-condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-condensed fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-096',
    label: 'Loop AI b11 w65 #096: stretch normal fill *',
    idea: 'font-stretch:normal on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch normal fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-097',
    label: 'Loop AI b11 w65 #097: stretch semi-expanded fill *',
    idea: 'font-stretch:semi-expanded on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:semi-expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch semi-expanded fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-098',
    label: 'Loop AI b11 w65 #098: stretch expanded fill *',
    idea: 'font-stretch:expanded on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch expanded fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-099',
    label: 'Loop AI b11 w65 #099: stretch extra-expanded fill *',
    idea: 'font-stretch:extra-expanded on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:extra-expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch extra-expanded fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w65-100',
    label: 'Loop AI b11 w65 #100: stretch ultra-expanded fill *',
    idea: 'font-stretch:ultra-expanded on FO * fill',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:ultra-expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w65; stretch ultra-expanded fill *; font-stretch condensed/expanded — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w65: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

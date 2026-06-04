/**
 * Loop AI batch-11 FO recipe shard (worker 80) — text-fix: display:contents text cascade through flattened FO wrapper boxes
 * 100 recipes: loop-ai-b11-w80-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'


/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w80-001',
    label: 'Loop AI b11 w80 #001: * lh inherit FO>div contents',
    idea: 'display:contents on FO>div wrapper; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-002',
    label: 'Loop AI b11 w80 #002: a baseline FO>div contents',
    idea: 'display:contents on FO>div wrapper; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-003',
    label: 'Loop AI b11 w80 #003: nav a box FO>div contents',
    idea: 'display:contents on FO>div wrapper; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-004',
    label: 'Loop AI b11 w80 #004: span inline FO>div contents',
    idea: 'display:contents on FO>div wrapper; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-005',
    label: 'Loop AI b11 w80 #005: chain lh normal FO>div contents',
    idea: 'display:contents on FO>div wrapper; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-006',
    label: 'Loop AI b11 w80 #006: emphasis none FO>div contents',
    idea: 'display:contents on FO>div wrapper; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-007',
    label: 'Loop AI b11 w80 #007: from-font lh FO>div contents',
    idea: 'display:contents on FO>div wrapper; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-008',
    label: 'Loop AI b11 w80 #008: trim normal FO>div contents',
    idea: 'display:contents on FO>div wrapper; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-009',
    label: 'Loop AI b11 w80 #009: baseline first FO>div contents',
    idea: 'display:contents on FO>div wrapper; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-010',
    label: 'Loop AI b11 w80 #010: math normal FO>div contents',
    idea: 'display:contents on FO>div wrapper; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-div); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-011',
    label: 'Loop AI b11 w80 #011: * lh inherit FO nav contents',
    idea: 'display:contents on FO nav; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-012',
    label: 'Loop AI b11 w80 #012: a baseline FO nav contents',
    idea: 'display:contents on FO nav; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-013',
    label: 'Loop AI b11 w80 #013: nav a box FO nav contents',
    idea: 'display:contents on FO nav; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-014',
    label: 'Loop AI b11 w80 #014: span inline FO nav contents',
    idea: 'display:contents on FO nav; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-015',
    label: 'Loop AI b11 w80 #015: chain lh normal FO nav contents',
    idea: 'display:contents on FO nav; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-016',
    label: 'Loop AI b11 w80 #016: emphasis none FO nav contents',
    idea: 'display:contents on FO nav; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-017',
    label: 'Loop AI b11 w80 #017: from-font lh FO nav contents',
    idea: 'display:contents on FO nav; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-018',
    label: 'Loop AI b11 w80 #018: trim normal FO nav contents',
    idea: 'display:contents on FO nav; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-019',
    label: 'Loop AI b11 w80 #019: baseline first FO nav contents',
    idea: 'display:contents on FO nav; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-020',
    label: 'Loop AI b11 w80 #020: math normal FO nav contents',
    idea: 'display:contents on FO nav; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-021',
    label: 'Loop AI b11 w80 #021: * lh inherit FO header contents',
    idea: 'display:contents on FO header; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-022',
    label: 'Loop AI b11 w80 #022: a baseline FO header contents',
    idea: 'display:contents on FO header; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-023',
    label: 'Loop AI b11 w80 #023: nav a box FO header contents',
    idea: 'display:contents on FO header; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-024',
    label: 'Loop AI b11 w80 #024: span inline FO header contents',
    idea: 'display:contents on FO header; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-025',
    label: 'Loop AI b11 w80 #025: chain lh normal FO header contents',
    idea: 'display:contents on FO header; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-026',
    label: 'Loop AI b11 w80 #026: emphasis none FO header contents',
    idea: 'display:contents on FO header; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-027',
    label: 'Loop AI b11 w80 #027: from-font lh FO header contents',
    idea: 'display:contents on FO header; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-028',
    label: 'Loop AI b11 w80 #028: trim normal FO header contents',
    idea: 'display:contents on FO header; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-029',
    label: 'Loop AI b11 w80 #029: baseline first FO header contents',
    idea: 'display:contents on FO header; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-030',
    label: 'Loop AI b11 w80 #030: math normal FO header contents',
    idea: 'display:contents on FO header; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-header); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-031',
    label: 'Loop AI b11 w80 #031: * lh inherit FO section contents',
    idea: 'display:contents on FO section; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-032',
    label: 'Loop AI b11 w80 #032: a baseline FO section contents',
    idea: 'display:contents on FO section; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-033',
    label: 'Loop AI b11 w80 #033: nav a box FO section contents',
    idea: 'display:contents on FO section; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-034',
    label: 'Loop AI b11 w80 #034: span inline FO section contents',
    idea: 'display:contents on FO section; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-035',
    label: 'Loop AI b11 w80 #035: chain lh normal FO section contents',
    idea: 'display:contents on FO section; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-036',
    label: 'Loop AI b11 w80 #036: emphasis none FO section contents',
    idea: 'display:contents on FO section; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-037',
    label: 'Loop AI b11 w80 #037: from-font lh FO section contents',
    idea: 'display:contents on FO section; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-038',
    label: 'Loop AI b11 w80 #038: trim normal FO section contents',
    idea: 'display:contents on FO section; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-039',
    label: 'Loop AI b11 w80 #039: baseline first FO section contents',
    idea: 'display:contents on FO section; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-040',
    label: 'Loop AI b11 w80 #040: math normal FO section contents',
    idea: 'display:contents on FO section; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-section); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-041',
    label: 'Loop AI b11 w80 #041: * lh inherit FO article contents',
    idea: 'display:contents on FO article; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-042',
    label: 'Loop AI b11 w80 #042: a baseline FO article contents',
    idea: 'display:contents on FO article; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-043',
    label: 'Loop AI b11 w80 #043: nav a box FO article contents',
    idea: 'display:contents on FO article; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-044',
    label: 'Loop AI b11 w80 #044: span inline FO article contents',
    idea: 'display:contents on FO article; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-045',
    label: 'Loop AI b11 w80 #045: chain lh normal FO article contents',
    idea: 'display:contents on FO article; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-046',
    label: 'Loop AI b11 w80 #046: emphasis none FO article contents',
    idea: 'display:contents on FO article; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-047',
    label: 'Loop AI b11 w80 #047: from-font lh FO article contents',
    idea: 'display:contents on FO article; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-048',
    label: 'Loop AI b11 w80 #048: trim normal FO article contents',
    idea: 'display:contents on FO article; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-049',
    label: 'Loop AI b11 w80 #049: baseline first FO article contents',
    idea: 'display:contents on FO article; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-050',
    label: 'Loop AI b11 w80 #050: math normal FO article contents',
    idea: 'display:contents on FO article; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject article{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-article); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-051',
    label: 'Loop AI b11 w80 #051: * lh inherit FO main contents',
    idea: 'display:contents on FO main; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-052',
    label: 'Loop AI b11 w80 #052: a baseline FO main contents',
    idea: 'display:contents on FO main; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-053',
    label: 'Loop AI b11 w80 #053: nav a box FO main contents',
    idea: 'display:contents on FO main; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-054',
    label: 'Loop AI b11 w80 #054: span inline FO main contents',
    idea: 'display:contents on FO main; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-055',
    label: 'Loop AI b11 w80 #055: chain lh normal FO main contents',
    idea: 'display:contents on FO main; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-056',
    label: 'Loop AI b11 w80 #056: emphasis none FO main contents',
    idea: 'display:contents on FO main; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-057',
    label: 'Loop AI b11 w80 #057: from-font lh FO main contents',
    idea: 'display:contents on FO main; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-058',
    label: 'Loop AI b11 w80 #058: trim normal FO main contents',
    idea: 'display:contents on FO main; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-059',
    label: 'Loop AI b11 w80 #059: baseline first FO main contents',
    idea: 'display:contents on FO main; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-060',
    label: 'Loop AI b11 w80 #060: math normal FO main contents',
    idea: 'display:contents on FO main; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-main); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-061',
    label: 'Loop AI b11 w80 #061: * lh inherit FO ul contents',
    idea: 'display:contents on FO ul; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-062',
    label: 'Loop AI b11 w80 #062: a baseline FO ul contents',
    idea: 'display:contents on FO ul; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-063',
    label: 'Loop AI b11 w80 #063: nav a box FO ul contents',
    idea: 'display:contents on FO ul; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-064',
    label: 'Loop AI b11 w80 #064: span inline FO ul contents',
    idea: 'display:contents on FO ul; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-065',
    label: 'Loop AI b11 w80 #065: chain lh normal FO ul contents',
    idea: 'display:contents on FO ul; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-066',
    label: 'Loop AI b11 w80 #066: emphasis none FO ul contents',
    idea: 'display:contents on FO ul; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-067',
    label: 'Loop AI b11 w80 #067: from-font lh FO ul contents',
    idea: 'display:contents on FO ul; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-068',
    label: 'Loop AI b11 w80 #068: trim normal FO ul contents',
    idea: 'display:contents on FO ul; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-069',
    label: 'Loop AI b11 w80 #069: baseline first FO ul contents',
    idea: 'display:contents on FO ul; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-070',
    label: 'Loop AI b11 w80 #070: math normal FO ul contents',
    idea: 'display:contents on FO ul; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ul{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-ul); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-071',
    label: 'Loop AI b11 w80 #071: * lh inherit FO div+nav contents',
    idea: 'display:contents on FO>div and nav; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-072',
    label: 'Loop AI b11 w80 #072: a baseline FO div+nav contents',
    idea: 'display:contents on FO>div and nav; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-073',
    label: 'Loop AI b11 w80 #073: nav a box FO div+nav contents',
    idea: 'display:contents on FO>div and nav; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-074',
    label: 'Loop AI b11 w80 #074: span inline FO div+nav contents',
    idea: 'display:contents on FO>div and nav; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-075',
    label: 'Loop AI b11 w80 #075: chain lh normal FO div+nav contents',
    idea: 'display:contents on FO>div and nav; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-076',
    label: 'Loop AI b11 w80 #076: emphasis none FO div+nav contents',
    idea: 'display:contents on FO>div and nav; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-077',
    label: 'Loop AI b11 w80 #077: from-font lh FO div+nav contents',
    idea: 'display:contents on FO>div and nav; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-078',
    label: 'Loop AI b11 w80 #078: trim normal FO div+nav contents',
    idea: 'display:contents on FO>div and nav; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-079',
    label: 'Loop AI b11 w80 #079: baseline first FO div+nav contents',
    idea: 'display:contents on FO>div and nav; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-080',
    label: 'Loop AI b11 w80 #080: math normal FO div+nav contents',
    idea: 'display:contents on FO>div and nav; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div,foreignObject nav{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-div-nav); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-081',
    label: 'Loop AI b11 w80 #081: * lh inherit FO li contents',
    idea: 'display:contents on FO li; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-082',
    label: 'Loop AI b11 w80 #082: a baseline FO li contents',
    idea: 'display:contents on FO li; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-083',
    label: 'Loop AI b11 w80 #083: nav a box FO li contents',
    idea: 'display:contents on FO li; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-084',
    label: 'Loop AI b11 w80 #084: span inline FO li contents',
    idea: 'display:contents on FO li; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-085',
    label: 'Loop AI b11 w80 #085: chain lh normal FO li contents',
    idea: 'display:contents on FO li; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-086',
    label: 'Loop AI b11 w80 #086: emphasis none FO li contents',
    idea: 'display:contents on FO li; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-087',
    label: 'Loop AI b11 w80 #087: from-font lh FO li contents',
    idea: 'display:contents on FO li; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-088',
    label: 'Loop AI b11 w80 #088: trim normal FO li contents',
    idea: 'display:contents on FO li; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-089',
    label: 'Loop AI b11 w80 #089: baseline first FO li contents',
    idea: 'display:contents on FO li; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-090',
    label: 'Loop AI b11 w80 #090: math normal FO li contents',
    idea: 'display:contents on FO li; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject li{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-list-item); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-091',
    label: 'Loop AI b11 w80 #091: * lh inherit FO footer contents',
    idea: 'display:contents on FO footer; FO * line-height inherit after contents flatten',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; star-inherit (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-092',
    label: 'Loop AI b11 w80 #092: a baseline FO footer contents',
    idea: 'display:contents on FO footer; anchor inline baseline after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; a-baseline (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-093',
    label: 'Loop AI b11 w80 #093: nav a box FO footer contents',
    idea: 'display:contents on FO footer; nav anchor box sizing after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; nav-a-box (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-094',
    label: 'Loop AI b11 w80 #094: span inline FO footer contents',
    idea: 'display:contents on FO footer; span inline display after contents',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; span-inline (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-095',
    label: 'Loop AI b11 w80 #095: chain lh normal FO footer contents',
    idea: 'display:contents on FO footer; text chain line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; chain-normal-lh (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-096',
    label: 'Loop AI b11 w80 #096: emphasis none FO footer contents',
    idea: 'display:contents on FO footer; strip text-emphasis on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; emphasis-none (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-097',
    label: 'Loop AI b11 w80 #097: from-font lh FO footer contents',
    idea: 'display:contents on FO footer; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; from-font-lh (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-098',
    label: 'Loop AI b11 w80 #098: trim normal FO footer contents',
    idea: 'display:contents on FO footer; text-spacing-trim normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; trim-normal (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-099',
    label: 'Loop AI b11 w80 #099: baseline first FO footer contents',
    idea: 'display:contents on FO footer; baseline-source first on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{baseline-source:first!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; baseline-source-first (fo-footer); display:contents — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w80-100',
    label: 'Loop AI b11 w80 #100: math normal FO footer contents',
    idea: 'display:contents on FO footer; math-style normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject footer{display:contents!important}foreignObject *{math-style:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w80; math-normal (fo-footer); display:contents — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


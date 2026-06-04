/**
 * Loop AI batch-11 FO recipe shard (worker 71) — text-fix: font-variant-east-asian normal/jis78/jis83 and east-asian variant tokens
 * 100 recipes: loop-ai-b11-w71-001..100
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
    id: 'loop-ai-b11-w71-001',
    label: 'Loop AI b11 w71 #001: east-asian normal on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-002',
    label: 'Loop AI b11 w71 #002: east-asian jis78 on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-003',
    label: 'Loop AI b11 w71 #003: east-asian jis83 on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-004',
    label: 'Loop AI b11 w71 #004: east-asian jis04 on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis04!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-005',
    label: 'Loop AI b11 w71 #005: east-asian jis90 on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis90!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-006',
    label: 'Loop AI b11 w71 #006: east-asian simplified on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:simplified!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-007',
    label: 'Loop AI b11 w71 #007: east-asian traditional on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:traditional!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-008',
    label: 'Loop AI b11 w71 #008: east-asian full-width on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:full-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-009',
    label: 'Loop AI b11 w71 #009: east-asian proportional-width on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-010',
    label: 'Loop AI b11 w71 #010: east-asian ruby on FO *',
    idea: 'east-asian variant on all FO descendants; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-011',
    label: 'Loop AI b11 w71 #011: east-asian normal on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-012',
    label: 'Loop AI b11 w71 #012: east-asian jis78 on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:jis78!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-013',
    label: 'Loop AI b11 w71 #013: east-asian jis83 on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:jis83!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-014',
    label: 'Loop AI b11 w71 #014: east-asian jis04 on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:jis04!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-015',
    label: 'Loop AI b11 w71 #015: east-asian jis90 on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:jis90!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-016',
    label: 'Loop AI b11 w71 #016: east-asian simplified on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:simplified!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-017',
    label: 'Loop AI b11 w71 #017: east-asian traditional on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:traditional!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-018',
    label: 'Loop AI b11 w71 #018: east-asian full-width on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:full-width!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-019',
    label: 'Loop AI b11 w71 #019: east-asian proportional-width on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:proportional-width!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-020',
    label: 'Loop AI b11 w71 #020: east-asian ruby on FO root',
    idea: 'east-asian variant on foreignObject root; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:ruby!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (root); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-021',
    label: 'Loop AI b11 w71 #021: east-asian normal on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-022',
    label: 'Loop AI b11 w71 #022: east-asian jis78 on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-023',
    label: 'Loop AI b11 w71 #023: east-asian jis83 on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-024',
    label: 'Loop AI b11 w71 #024: east-asian jis04 on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis04!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-025',
    label: 'Loop AI b11 w71 #025: east-asian jis90 on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis90!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-026',
    label: 'Loop AI b11 w71 #026: east-asian simplified on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:simplified!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-027',
    label: 'Loop AI b11 w71 #027: east-asian traditional on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:traditional!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-028',
    label: 'Loop AI b11 w71 #028: east-asian full-width on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:full-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-029',
    label: 'Loop AI b11 w71 #029: east-asian proportional-width on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-030',
    label: 'Loop AI b11 w71 #030: east-asian ruby on FO>div',
    idea: 'east-asian variant on FO wrapper div; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (fo-div); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-031',
    label: 'Loop AI b11 w71 #031: east-asian normal on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-032',
    label: 'Loop AI b11 w71 #032: east-asian jis78 on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-033',
    label: 'Loop AI b11 w71 #033: east-asian jis83 on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-034',
    label: 'Loop AI b11 w71 #034: east-asian jis04 on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:jis04!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-035',
    label: 'Loop AI b11 w71 #035: east-asian jis90 on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:jis90!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-036',
    label: 'Loop AI b11 w71 #036: east-asian simplified on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:simplified!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-037',
    label: 'Loop AI b11 w71 #037: east-asian traditional on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:traditional!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-038',
    label: 'Loop AI b11 w71 #038: east-asian full-width on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:full-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-039',
    label: 'Loop AI b11 w71 #039: east-asian proportional-width on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-040',
    label: 'Loop AI b11 w71 #040: east-asian ruby on FO>div *',
    idea: 'east-asian variant on wrapper descendants; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{font-variant-east-asian:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (fo-div-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-041',
    label: 'Loop AI b11 w71 #041: east-asian normal on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-042',
    label: 'Loop AI b11 w71 #042: east-asian jis78 on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-043',
    label: 'Loop AI b11 w71 #043: east-asian jis83 on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-044',
    label: 'Loop AI b11 w71 #044: east-asian jis04 on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:jis04!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-045',
    label: 'Loop AI b11 w71 #045: east-asian jis90 on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:jis90!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-046',
    label: 'Loop AI b11 w71 #046: east-asian simplified on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:simplified!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-047',
    label: 'Loop AI b11 w71 #047: east-asian traditional on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:traditional!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-048',
    label: 'Loop AI b11 w71 #048: east-asian full-width on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:full-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-049',
    label: 'Loop AI b11 w71 #049: east-asian proportional-width on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-050',
    label: 'Loop AI b11 w71 #050: east-asian ruby on text chain',
    idea: 'east-asian variant limited to text chain; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (text-chain); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-051',
    label: 'Loop AI b11 w71 #051: east-asian normal on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:normal!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-052',
    label: 'Loop AI b11 w71 #052: east-asian jis78 on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:jis78!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-053',
    label: 'Loop AI b11 w71 #053: east-asian jis83 on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:jis83!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-054',
    label: 'Loop AI b11 w71 #054: east-asian jis04 on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:jis04!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-055',
    label: 'Loop AI b11 w71 #055: east-asian jis90 on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:jis90!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-056',
    label: 'Loop AI b11 w71 #056: east-asian simplified on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:simplified!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-057',
    label: 'Loop AI b11 w71 #057: east-asian traditional on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:traditional!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-058',
    label: 'Loop AI b11 w71 #058: east-asian full-width on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:full-width!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-059',
    label: 'Loop AI b11 w71 #059: east-asian proportional-width on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:proportional-width!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-060',
    label: 'Loop AI b11 w71 #060: east-asian ruby on FO anchors',
    idea: 'east-asian variant on FO a; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{font-variant-east-asian:ruby!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (anchors); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-061',
    label: 'Loop AI b11 w71 #061: east-asian normal on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-062',
    label: 'Loop AI b11 w71 #062: east-asian jis78 on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:jis78!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-063',
    label: 'Loop AI b11 w71 #063: east-asian jis83 on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:jis83!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-064',
    label: 'Loop AI b11 w71 #064: east-asian jis04 on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:jis04!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-065',
    label: 'Loop AI b11 w71 #065: east-asian jis90 on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:jis90!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-066',
    label: 'Loop AI b11 w71 #066: east-asian simplified on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:simplified!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-067',
    label: 'Loop AI b11 w71 #067: east-asian traditional on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:traditional!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-068',
    label: 'Loop AI b11 w71 #068: east-asian full-width on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:full-width!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-069',
    label: 'Loop AI b11 w71 #069: east-asian proportional-width on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:proportional-width!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-070',
    label: 'Loop AI b11 w71 #070: east-asian ruby on FO nav a',
    idea: 'east-asian variant on nav anchors; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:ruby!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (nav-a); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-071',
    label: 'Loop AI b11 w71 #071: east-asian normal on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-072',
    label: 'Loop AI b11 w71 #072: east-asian jis78 on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:jis78!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-073',
    label: 'Loop AI b11 w71 #073: east-asian jis83 on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:jis83!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-074',
    label: 'Loop AI b11 w71 #074: east-asian jis04 on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:jis04!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-075',
    label: 'Loop AI b11 w71 #075: east-asian jis90 on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:jis90!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-076',
    label: 'Loop AI b11 w71 #076: east-asian simplified on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:simplified!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-077',
    label: 'Loop AI b11 w71 #077: east-asian traditional on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:traditional!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-078',
    label: 'Loop AI b11 w71 #078: east-asian full-width on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:full-width!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-079',
    label: 'Loop AI b11 w71 #079: east-asian proportional-width on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:proportional-width!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-080',
    label: 'Loop AI b11 w71 #080: east-asian ruby on FO span',
    idea: 'east-asian variant on FO span; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:ruby!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (span); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-081',
    label: 'Loop AI b11 w71 #081: east-asian normal Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; normal (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-082',
    label: 'Loop AI b11 w71 #082: east-asian jis78 Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis78 (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-083',
    label: 'Loop AI b11 w71 #083: east-asian jis83 Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis83 (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-084',
    label: 'Loop AI b11 w71 #084: east-asian jis04 Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis04!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis04 (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-085',
    label: 'Loop AI b11 w71 #085: east-asian jis90 Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis90!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; jis90 (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-086',
    label: 'Loop AI b11 w71 #086: east-asian simplified Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:simplified!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; simplified (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-087',
    label: 'Loop AI b11 w71 #087: east-asian traditional Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:traditional!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; traditional (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-088',
    label: 'Loop AI b11 w71 #088: east-asian full-width Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:full-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; full-width (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-089',
    label: 'Loop AI b11 w71 #089: east-asian proportional-width Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; proportional-width (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-090',
    label: 'Loop AI b11 w71 #090: east-asian ruby Chromium + FO *',
    idea: 'Chromium kerning copy plus east-asian on FO *; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w71; ruby (chromium-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-091',
    label: 'Loop AI b11 w71 #091: east-asian normal stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; normal (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-092',
    label: 'Loop AI b11 w71 #092: east-asian jis78 stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:jis78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; jis78 (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-093',
    label: 'Loop AI b11 w71 #093: east-asian jis83 stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:jis83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; jis83 (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-094',
    label: 'Loop AI b11 w71 #094: east-asian jis04 stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:jis04',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis04!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; jis04 (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-095',
    label: 'Loop AI b11 w71 #095: east-asian jis90 stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:jis90',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis90!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; jis90 (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-096',
    label: 'Loop AI b11 w71 #096: east-asian simplified stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:simplified',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:simplified!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; simplified (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-097',
    label: 'Loop AI b11 w71 #097: east-asian traditional stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:traditional',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:traditional!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; traditional (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-098',
    label: 'Loop AI b11 w71 #098: east-asian full-width stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:full-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:full-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; full-width (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-099',
    label: 'Loop AI b11 w71 #099: east-asian proportional-width stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:proportional-width',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:proportional-width!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; proportional-width (stretch-star); font-variant-east-asian — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w71-100',
    label: 'Loop AI b11 w71 #100: east-asian ruby stretch + FO *',
    idea: 'stretch leaf plus east-asian on FO *; font-variant-east-asian:ruby',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w71; ruby (stretch-star); font-variant-east-asian — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


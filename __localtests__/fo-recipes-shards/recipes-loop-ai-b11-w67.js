/**
 * Loop AI batch-11 FO recipe shard (worker 67) — text-fix: hanging-punctuation.
 * 100 recipes: loop-ai-b11-w67-001..100
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
    id: 'loop-ai-b11-w67-001',
    label: 'Loop AI b11 w67 #001: none *',
    idea: 'hanging-punctuation:none on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-002',
    label: 'Loop AI b11 w67 #002: none a',
    idea: 'hanging-punctuation:none on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-003',
    label: 'Loop AI b11 w67 #003: none nav a',
    idea: 'hanging-punctuation:none on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-004',
    label: 'Loop AI b11 w67 #004: none span',
    idea: 'hanging-punctuation:none on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-005',
    label: 'Loop AI b11 w67 #005: none p',
    idea: 'hanging-punctuation:none on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-006',
    label: 'Loop AI b11 w67 #006: none blockquote',
    idea: 'hanging-punctuation:none on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-007',
    label: 'Loop AI b11 w67 #007: none FO>div',
    idea: 'hanging-punctuation:none on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-008',
    label: 'Loop AI b11 w67 #008: none FO>div *',
    idea: 'hanging-punctuation:none on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-009',
    label: 'Loop AI b11 w67 #009: none label',
    idea: 'hanging-punctuation:none on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-010',
    label: 'Loop AI b11 w67 #010: none header *',
    idea: 'hanging-punctuation:none on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:none!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; none header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-011',
    label: 'Loop AI b11 w67 #011: allow-start *',
    idea: 'hanging-punctuation:allow-start on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-012',
    label: 'Loop AI b11 w67 #012: allow-start a',
    idea: 'hanging-punctuation:allow-start on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-013',
    label: 'Loop AI b11 w67 #013: allow-start nav a',
    idea: 'hanging-punctuation:allow-start on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-014',
    label: 'Loop AI b11 w67 #014: allow-start span',
    idea: 'hanging-punctuation:allow-start on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-015',
    label: 'Loop AI b11 w67 #015: allow-start p',
    idea: 'hanging-punctuation:allow-start on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-016',
    label: 'Loop AI b11 w67 #016: allow-start blockquote',
    idea: 'hanging-punctuation:allow-start on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-017',
    label: 'Loop AI b11 w67 #017: allow-start FO>div',
    idea: 'hanging-punctuation:allow-start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-018',
    label: 'Loop AI b11 w67 #018: allow-start FO>div *',
    idea: 'hanging-punctuation:allow-start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-019',
    label: 'Loop AI b11 w67 #019: allow-start label',
    idea: 'hanging-punctuation:allow-start on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-020',
    label: 'Loop AI b11 w67 #020: allow-start header *',
    idea: 'hanging-punctuation:allow-start on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:allow-start!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-021',
    label: 'Loop AI b11 w67 #021: allow-end *',
    idea: 'hanging-punctuation:allow-end on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-022',
    label: 'Loop AI b11 w67 #022: allow-end a',
    idea: 'hanging-punctuation:allow-end on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-023',
    label: 'Loop AI b11 w67 #023: allow-end nav a',
    idea: 'hanging-punctuation:allow-end on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-024',
    label: 'Loop AI b11 w67 #024: allow-end span',
    idea: 'hanging-punctuation:allow-end on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-025',
    label: 'Loop AI b11 w67 #025: allow-end p',
    idea: 'hanging-punctuation:allow-end on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-026',
    label: 'Loop AI b11 w67 #026: allow-end blockquote',
    idea: 'hanging-punctuation:allow-end on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-027',
    label: 'Loop AI b11 w67 #027: allow-end FO>div',
    idea: 'hanging-punctuation:allow-end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-028',
    label: 'Loop AI b11 w67 #028: allow-end FO>div *',
    idea: 'hanging-punctuation:allow-end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-029',
    label: 'Loop AI b11 w67 #029: allow-end label',
    idea: 'hanging-punctuation:allow-end on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-030',
    label: 'Loop AI b11 w67 #030: allow-end header *',
    idea: 'hanging-punctuation:allow-end on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-031',
    label: 'Loop AI b11 w67 #031: force-end *',
    idea: 'hanging-punctuation:force-end on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-032',
    label: 'Loop AI b11 w67 #032: force-end a',
    idea: 'hanging-punctuation:force-end on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-033',
    label: 'Loop AI b11 w67 #033: force-end nav a',
    idea: 'hanging-punctuation:force-end on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-034',
    label: 'Loop AI b11 w67 #034: force-end span',
    idea: 'hanging-punctuation:force-end on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-035',
    label: 'Loop AI b11 w67 #035: force-end p',
    idea: 'hanging-punctuation:force-end on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-036',
    label: 'Loop AI b11 w67 #036: force-end blockquote',
    idea: 'hanging-punctuation:force-end on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-037',
    label: 'Loop AI b11 w67 #037: force-end FO>div',
    idea: 'hanging-punctuation:force-end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-038',
    label: 'Loop AI b11 w67 #038: force-end FO>div *',
    idea: 'hanging-punctuation:force-end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-039',
    label: 'Loop AI b11 w67 #039: force-end label',
    idea: 'hanging-punctuation:force-end on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-040',
    label: 'Loop AI b11 w67 #040: force-end header *',
    idea: 'hanging-punctuation:force-end on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; force-end header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-041',
    label: 'Loop AI b11 w67 #041: first *',
    idea: 'hanging-punctuation:first on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-042',
    label: 'Loop AI b11 w67 #042: first a',
    idea: 'hanging-punctuation:first on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-043',
    label: 'Loop AI b11 w67 #043: first nav a',
    idea: 'hanging-punctuation:first on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-044',
    label: 'Loop AI b11 w67 #044: first span',
    idea: 'hanging-punctuation:first on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-045',
    label: 'Loop AI b11 w67 #045: first p',
    idea: 'hanging-punctuation:first on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-046',
    label: 'Loop AI b11 w67 #046: first blockquote',
    idea: 'hanging-punctuation:first on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-047',
    label: 'Loop AI b11 w67 #047: first FO>div',
    idea: 'hanging-punctuation:first on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-048',
    label: 'Loop AI b11 w67 #048: first FO>div *',
    idea: 'hanging-punctuation:first on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-049',
    label: 'Loop AI b11 w67 #049: first label',
    idea: 'hanging-punctuation:first on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-050',
    label: 'Loop AI b11 w67 #050: first header *',
    idea: 'hanging-punctuation:first on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:first!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-051',
    label: 'Loop AI b11 w67 #051: last *',
    idea: 'hanging-punctuation:last on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-052',
    label: 'Loop AI b11 w67 #052: last a',
    idea: 'hanging-punctuation:last on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-053',
    label: 'Loop AI b11 w67 #053: last nav a',
    idea: 'hanging-punctuation:last on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-054',
    label: 'Loop AI b11 w67 #054: last span',
    idea: 'hanging-punctuation:last on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-055',
    label: 'Loop AI b11 w67 #055: last p',
    idea: 'hanging-punctuation:last on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-056',
    label: 'Loop AI b11 w67 #056: last blockquote',
    idea: 'hanging-punctuation:last on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-057',
    label: 'Loop AI b11 w67 #057: last FO>div',
    idea: 'hanging-punctuation:last on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-058',
    label: 'Loop AI b11 w67 #058: last FO>div *',
    idea: 'hanging-punctuation:last on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-059',
    label: 'Loop AI b11 w67 #059: last label',
    idea: 'hanging-punctuation:last on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-060',
    label: 'Loop AI b11 w67 #060: last header *',
    idea: 'hanging-punctuation:last on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; last header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-061',
    label: 'Loop AI b11 w67 #061: first allow-end *',
    idea: 'hanging-punctuation:first allow-end on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-062',
    label: 'Loop AI b11 w67 #062: first allow-end a',
    idea: 'hanging-punctuation:first allow-end on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-063',
    label: 'Loop AI b11 w67 #063: first allow-end nav a',
    idea: 'hanging-punctuation:first allow-end on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-064',
    label: 'Loop AI b11 w67 #064: first allow-end span',
    idea: 'hanging-punctuation:first allow-end on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-065',
    label: 'Loop AI b11 w67 #065: first allow-end p',
    idea: 'hanging-punctuation:first allow-end on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-066',
    label: 'Loop AI b11 w67 #066: first allow-end blockquote',
    idea: 'hanging-punctuation:first allow-end on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-067',
    label: 'Loop AI b11 w67 #067: first allow-end FO>div',
    idea: 'hanging-punctuation:first allow-end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-068',
    label: 'Loop AI b11 w67 #068: first allow-end FO>div *',
    idea: 'hanging-punctuation:first allow-end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-069',
    label: 'Loop AI b11 w67 #069: first allow-end label',
    idea: 'hanging-punctuation:first allow-end on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-070',
    label: 'Loop AI b11 w67 #070: first allow-end header *',
    idea: 'hanging-punctuation:first allow-end on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:first allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first allow-end header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-071',
    label: 'Loop AI b11 w67 #071: allow-end force-end *',
    idea: 'hanging-punctuation:allow-end force-end on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-072',
    label: 'Loop AI b11 w67 #072: allow-end force-end a',
    idea: 'hanging-punctuation:allow-end force-end on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-073',
    label: 'Loop AI b11 w67 #073: allow-end force-end nav a',
    idea: 'hanging-punctuation:allow-end force-end on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-074',
    label: 'Loop AI b11 w67 #074: allow-end force-end span',
    idea: 'hanging-punctuation:allow-end force-end on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-075',
    label: 'Loop AI b11 w67 #075: allow-end force-end p',
    idea: 'hanging-punctuation:allow-end force-end on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-076',
    label: 'Loop AI b11 w67 #076: allow-end force-end blockquote',
    idea: 'hanging-punctuation:allow-end force-end on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-077',
    label: 'Loop AI b11 w67 #077: allow-end force-end FO>div',
    idea: 'hanging-punctuation:allow-end force-end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-078',
    label: 'Loop AI b11 w67 #078: allow-end force-end FO>div *',
    idea: 'hanging-punctuation:allow-end force-end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-079',
    label: 'Loop AI b11 w67 #079: allow-end force-end label',
    idea: 'hanging-punctuation:allow-end force-end on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-080',
    label: 'Loop AI b11 w67 #080: allow-end force-end header *',
    idea: 'hanging-punctuation:allow-end force-end on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:allow-end force-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-end force-end header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-081',
    label: 'Loop AI b11 w67 #081: first last *',
    idea: 'hanging-punctuation:first last on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-082',
    label: 'Loop AI b11 w67 #082: first last a',
    idea: 'hanging-punctuation:first last on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-083',
    label: 'Loop AI b11 w67 #083: first last nav a',
    idea: 'hanging-punctuation:first last on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-084',
    label: 'Loop AI b11 w67 #084: first last span',
    idea: 'hanging-punctuation:first last on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-085',
    label: 'Loop AI b11 w67 #085: first last p',
    idea: 'hanging-punctuation:first last on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-086',
    label: 'Loop AI b11 w67 #086: first last blockquote',
    idea: 'hanging-punctuation:first last on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-087',
    label: 'Loop AI b11 w67 #087: first last FO>div',
    idea: 'hanging-punctuation:first last on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-088',
    label: 'Loop AI b11 w67 #088: first last FO>div *',
    idea: 'hanging-punctuation:first last on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-089',
    label: 'Loop AI b11 w67 #089: first last label',
    idea: 'hanging-punctuation:first last on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-090',
    label: 'Loop AI b11 w67 #090: first last header *',
    idea: 'hanging-punctuation:first last on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:first last!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; first last header *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-091',
    label: 'Loop AI b11 w67 #091: allow-start allow-end *',
    idea: 'hanging-punctuation:allow-start allow-end on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-092',
    label: 'Loop AI b11 w67 #092: allow-start allow-end a',
    idea: 'hanging-punctuation:allow-start allow-end on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-093',
    label: 'Loop AI b11 w67 #093: allow-start allow-end nav a',
    idea: 'hanging-punctuation:allow-start allow-end on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end nav a; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-094',
    label: 'Loop AI b11 w67 #094: allow-start allow-end span',
    idea: 'hanging-punctuation:allow-start allow-end on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end span; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-095',
    label: 'Loop AI b11 w67 #095: allow-start allow-end p',
    idea: 'hanging-punctuation:allow-start allow-end on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end p; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-096',
    label: 'Loop AI b11 w67 #096: allow-start allow-end blockquote',
    idea: 'hanging-punctuation:allow-start allow-end on blockquote',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject blockquote{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end blockquote; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-097',
    label: 'Loop AI b11 w67 #097: allow-start allow-end FO>div',
    idea: 'hanging-punctuation:allow-start allow-end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end FO>div; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-098',
    label: 'Loop AI b11 w67 #098: allow-start allow-end FO>div *',
    idea: 'hanging-punctuation:allow-start allow-end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end FO>div *; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-099',
    label: 'Loop AI b11 w67 #099: allow-start allow-end label',
    idea: 'hanging-punctuation:allow-start allow-end on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end label; hanging-punctuation — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w67-100',
    label: 'Loop AI b11 w67 #100: allow-start allow-end header *',
    idea: 'hanging-punctuation:allow-start allow-end on header *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{hanging-punctuation:allow-start allow-end!important;text-align:start!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w67; allow-start allow-end header *; hanging-punctuation — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w67: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

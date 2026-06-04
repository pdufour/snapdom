/**
 * Loop AI batch-11 FO recipe shard (worker 70) — text-fix: text-indent reset matrix.
 * 100 recipes: loop-ai-b11-w70-001..100
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
    id: 'loop-ai-b11-w70-001',
    label: 'Loop AI b11 w70 #001: indent 0 *',
    idea: 'text-indent:0 reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-002',
    label: 'Loop AI b11 w70 #002: indent 0 FO>div',
    idea: 'text-indent:0 reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-003',
    label: 'Loop AI b11 w70 #003: indent 0 FO>div *',
    idea: 'text-indent:0 reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-004',
    label: 'Loop AI b11 w70 #004: indent 0 p',
    idea: 'text-indent:0 reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-005',
    label: 'Loop AI b11 w70 #005: indent 0 a',
    idea: 'text-indent:0 reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-006',
    label: 'Loop AI b11 w70 #006: indent 0 nav a',
    idea: 'text-indent:0 reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-007',
    label: 'Loop AI b11 w70 #007: indent 0 span',
    idea: 'text-indent:0 reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-008',
    label: 'Loop AI b11 w70 #008: indent 0 label',
    idea: 'text-indent:0 reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0 label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-009',
    label: 'Loop AI b11 w70 #009: indent 1em *',
    idea: 'text-indent:1em reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-010',
    label: 'Loop AI b11 w70 #010: indent 1em FO>div',
    idea: 'text-indent:1em reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-011',
    label: 'Loop AI b11 w70 #011: indent 1em FO>div *',
    idea: 'text-indent:1em reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-012',
    label: 'Loop AI b11 w70 #012: indent 1em p',
    idea: 'text-indent:1em reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-013',
    label: 'Loop AI b11 w70 #013: indent 1em a',
    idea: 'text-indent:1em reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-014',
    label: 'Loop AI b11 w70 #014: indent 1em nav a',
    idea: 'text-indent:1em reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-015',
    label: 'Loop AI b11 w70 #015: indent 1em span',
    idea: 'text-indent:1em reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-016',
    label: 'Loop AI b11 w70 #016: indent 1em label',
    idea: 'text-indent:1em reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1em label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-017',
    label: 'Loop AI b11 w70 #017: indent 2em *',
    idea: 'text-indent:2em reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-018',
    label: 'Loop AI b11 w70 #018: indent 2em FO>div',
    idea: 'text-indent:2em reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-019',
    label: 'Loop AI b11 w70 #019: indent 2em FO>div *',
    idea: 'text-indent:2em reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-020',
    label: 'Loop AI b11 w70 #020: indent 2em p',
    idea: 'text-indent:2em reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-021',
    label: 'Loop AI b11 w70 #021: indent 2em a',
    idea: 'text-indent:2em reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-022',
    label: 'Loop AI b11 w70 #022: indent 2em nav a',
    idea: 'text-indent:2em reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-023',
    label: 'Loop AI b11 w70 #023: indent 2em span',
    idea: 'text-indent:2em reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-024',
    label: 'Loop AI b11 w70 #024: indent 2em label',
    idea: 'text-indent:2em reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:2em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 2em label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-025',
    label: 'Loop AI b11 w70 #025: indent -1em *',
    idea: 'text-indent:-1em reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-026',
    label: 'Loop AI b11 w70 #026: indent -1em FO>div',
    idea: 'text-indent:-1em reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-027',
    label: 'Loop AI b11 w70 #027: indent -1em FO>div *',
    idea: 'text-indent:-1em reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-028',
    label: 'Loop AI b11 w70 #028: indent -1em p',
    idea: 'text-indent:-1em reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-029',
    label: 'Loop AI b11 w70 #029: indent -1em a',
    idea: 'text-indent:-1em reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-030',
    label: 'Loop AI b11 w70 #030: indent -1em nav a',
    idea: 'text-indent:-1em reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-031',
    label: 'Loop AI b11 w70 #031: indent -1em span',
    idea: 'text-indent:-1em reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-032',
    label: 'Loop AI b11 w70 #032: indent -1em label',
    idea: 'text-indent:-1em reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:-1em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent -1em label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-033',
    label: 'Loop AI b11 w70 #033: indent 3em *',
    idea: 'text-indent:3em reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-034',
    label: 'Loop AI b11 w70 #034: indent 3em FO>div',
    idea: 'text-indent:3em reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-035',
    label: 'Loop AI b11 w70 #035: indent 3em FO>div *',
    idea: 'text-indent:3em reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-036',
    label: 'Loop AI b11 w70 #036: indent 3em p',
    idea: 'text-indent:3em reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-037',
    label: 'Loop AI b11 w70 #037: indent 3em a',
    idea: 'text-indent:3em reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-038',
    label: 'Loop AI b11 w70 #038: indent 3em nav a',
    idea: 'text-indent:3em reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-039',
    label: 'Loop AI b11 w70 #039: indent 3em span',
    idea: 'text-indent:3em reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-040',
    label: 'Loop AI b11 w70 #040: indent 3em label',
    idea: 'text-indent:3em reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:3em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 3em label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-041',
    label: 'Loop AI b11 w70 #041: indent 1.5em *',
    idea: 'text-indent:1.5em reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-042',
    label: 'Loop AI b11 w70 #042: indent 1.5em FO>div',
    idea: 'text-indent:1.5em reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-043',
    label: 'Loop AI b11 w70 #043: indent 1.5em FO>div *',
    idea: 'text-indent:1.5em reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-044',
    label: 'Loop AI b11 w70 #044: indent 1.5em p',
    idea: 'text-indent:1.5em reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-045',
    label: 'Loop AI b11 w70 #045: indent 1.5em a',
    idea: 'text-indent:1.5em reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-046',
    label: 'Loop AI b11 w70 #046: indent 1.5em nav a',
    idea: 'text-indent:1.5em reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-047',
    label: 'Loop AI b11 w70 #047: indent 1.5em span',
    idea: 'text-indent:1.5em reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-048',
    label: 'Loop AI b11 w70 #048: indent 1.5em label',
    idea: 'text-indent:1.5em reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:1.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 1.5em label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-049',
    label: 'Loop AI b11 w70 #049: indent 0.5em *',
    idea: 'text-indent:0.5em reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-050',
    label: 'Loop AI b11 w70 #050: indent 0.5em FO>div',
    idea: 'text-indent:0.5em reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-051',
    label: 'Loop AI b11 w70 #051: indent 0.5em FO>div *',
    idea: 'text-indent:0.5em reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-052',
    label: 'Loop AI b11 w70 #052: indent 0.5em p',
    idea: 'text-indent:0.5em reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-053',
    label: 'Loop AI b11 w70 #053: indent 0.5em a',
    idea: 'text-indent:0.5em reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-054',
    label: 'Loop AI b11 w70 #054: indent 0.5em nav a',
    idea: 'text-indent:0.5em reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-055',
    label: 'Loop AI b11 w70 #055: indent 0.5em span',
    idea: 'text-indent:0.5em reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-056',
    label: 'Loop AI b11 w70 #056: indent 0.5em label',
    idea: 'text-indent:0.5em reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:0.5em!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent 0.5em label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-057',
    label: 'Loop AI b11 w70 #057: indent hanging *',
    idea: 'text-indent:hanging reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-058',
    label: 'Loop AI b11 w70 #058: indent hanging FO>div',
    idea: 'text-indent:hanging reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-059',
    label: 'Loop AI b11 w70 #059: indent hanging FO>div *',
    idea: 'text-indent:hanging reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-060',
    label: 'Loop AI b11 w70 #060: indent hanging p',
    idea: 'text-indent:hanging reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-061',
    label: 'Loop AI b11 w70 #061: indent hanging a',
    idea: 'text-indent:hanging reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-062',
    label: 'Loop AI b11 w70 #062: indent hanging nav a',
    idea: 'text-indent:hanging reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-063',
    label: 'Loop AI b11 w70 #063: indent hanging span',
    idea: 'text-indent:hanging reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-064',
    label: 'Loop AI b11 w70 #064: indent hanging label',
    idea: 'text-indent:hanging reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:hanging!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent hanging label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-065',
    label: 'Loop AI b11 w70 #065: indent each-line *',
    idea: 'text-indent:each-line reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-066',
    label: 'Loop AI b11 w70 #066: indent each-line FO>div',
    idea: 'text-indent:each-line reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-067',
    label: 'Loop AI b11 w70 #067: indent each-line FO>div *',
    idea: 'text-indent:each-line reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-068',
    label: 'Loop AI b11 w70 #068: indent each-line p',
    idea: 'text-indent:each-line reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-069',
    label: 'Loop AI b11 w70 #069: indent each-line a',
    idea: 'text-indent:each-line reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-070',
    label: 'Loop AI b11 w70 #070: indent each-line nav a',
    idea: 'text-indent:each-line reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-071',
    label: 'Loop AI b11 w70 #071: indent each-line span',
    idea: 'text-indent:each-line reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-072',
    label: 'Loop AI b11 w70 #072: indent each-line label',
    idea: 'text-indent:each-line reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:each-line!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent each-line label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-073',
    label: 'Loop AI b11 w70 #073: indent inherit *',
    idea: 'text-indent:inherit reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-074',
    label: 'Loop AI b11 w70 #074: indent inherit FO>div',
    idea: 'text-indent:inherit reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-075',
    label: 'Loop AI b11 w70 #075: indent inherit FO>div *',
    idea: 'text-indent:inherit reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-076',
    label: 'Loop AI b11 w70 #076: indent inherit p',
    idea: 'text-indent:inherit reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-077',
    label: 'Loop AI b11 w70 #077: indent inherit a',
    idea: 'text-indent:inherit reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-078',
    label: 'Loop AI b11 w70 #078: indent inherit nav a',
    idea: 'text-indent:inherit reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-079',
    label: 'Loop AI b11 w70 #079: indent inherit span',
    idea: 'text-indent:inherit reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-080',
    label: 'Loop AI b11 w70 #080: indent inherit label',
    idea: 'text-indent:inherit reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:inherit!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent inherit label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-081',
    label: 'Loop AI b11 w70 #081: indent unset *',
    idea: 'text-indent:unset reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-082',
    label: 'Loop AI b11 w70 #082: indent unset FO>div',
    idea: 'text-indent:unset reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-083',
    label: 'Loop AI b11 w70 #083: indent unset FO>div *',
    idea: 'text-indent:unset reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-084',
    label: 'Loop AI b11 w70 #084: indent unset p',
    idea: 'text-indent:unset reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-085',
    label: 'Loop AI b11 w70 #085: indent unset a',
    idea: 'text-indent:unset reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-086',
    label: 'Loop AI b11 w70 #086: indent unset nav a',
    idea: 'text-indent:unset reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-087',
    label: 'Loop AI b11 w70 #087: indent unset span',
    idea: 'text-indent:unset reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-088',
    label: 'Loop AI b11 w70 #088: indent unset label',
    idea: 'text-indent:unset reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:unset!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent unset label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-089',
    label: 'Loop AI b11 w70 #089: indent initial *',
    idea: 'text-indent:initial reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-090',
    label: 'Loop AI b11 w70 #090: indent initial FO>div',
    idea: 'text-indent:initial reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-091',
    label: 'Loop AI b11 w70 #091: indent initial FO>div *',
    idea: 'text-indent:initial reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-092',
    label: 'Loop AI b11 w70 #092: indent initial p',
    idea: 'text-indent:initial reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial p; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-093',
    label: 'Loop AI b11 w70 #093: indent initial a',
    idea: 'text-indent:initial reset on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-094',
    label: 'Loop AI b11 w70 #094: indent initial nav a',
    idea: 'text-indent:initial reset on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial nav a; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-095',
    label: 'Loop AI b11 w70 #095: indent initial span',
    idea: 'text-indent:initial reset on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial span; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-096',
    label: 'Loop AI b11 w70 #096: indent initial label',
    idea: 'text-indent:initial reset on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-indent:initial!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent initial label; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-097',
    label: 'Loop AI b11 w70 #097: indent revert *',
    idea: 'text-indent:revert reset on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-indent:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent revert *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-098',
    label: 'Loop AI b11 w70 #098: indent revert FO>div',
    idea: 'text-indent:revert reset on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent revert FO>div; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-099',
    label: 'Loop AI b11 w70 #099: indent revert FO>div *',
    idea: 'text-indent:revert reset on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-indent:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent revert FO>div *; text-indent reset matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w70-100',
    label: 'Loop AI b11 w70 #100: indent revert p',
    idea: 'text-indent:revert reset on p',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-indent:revert!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w70; indent revert p; text-indent reset matrix — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w70: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

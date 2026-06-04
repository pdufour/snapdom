/**
 * Loop AI batch-11 FO recipe shard (worker 68) — text-fix: text-align + text-align-last.
 * 100 recipes: loop-ai-b11-w68-001..100
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
    id: 'loop-ai-b11-w68-001',
    label: 'Loop AI b11 w68 #001: FO>div start last auto',
    idea: 'text-align:start + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-002',
    label: 'Loop AI b11 w68 #002: FO>div start last start',
    idea: 'text-align:start + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-003',
    label: 'Loop AI b11 w68 #003: FO>div start last end',
    idea: 'text-align:start + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-004',
    label: 'Loop AI b11 w68 #004: FO>div start last left',
    idea: 'text-align:start + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-005',
    label: 'Loop AI b11 w68 #005: FO>div start last right',
    idea: 'text-align:start + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-006',
    label: 'Loop AI b11 w68 #006: FO>div start last center',
    idea: 'text-align:start + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-007',
    label: 'Loop AI b11 w68 #007: FO>div start last justify',
    idea: 'text-align:start + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:start!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div start last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-008',
    label: 'Loop AI b11 w68 #008: FO>div end last auto',
    idea: 'text-align:end + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-009',
    label: 'Loop AI b11 w68 #009: FO>div end last start',
    idea: 'text-align:end + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-010',
    label: 'Loop AI b11 w68 #010: FO>div end last end',
    idea: 'text-align:end + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-011',
    label: 'Loop AI b11 w68 #011: FO>div end last left',
    idea: 'text-align:end + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-012',
    label: 'Loop AI b11 w68 #012: FO>div end last right',
    idea: 'text-align:end + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-013',
    label: 'Loop AI b11 w68 #013: FO>div end last center',
    idea: 'text-align:end + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-014',
    label: 'Loop AI b11 w68 #014: FO>div end last justify',
    idea: 'text-align:end + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:end!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div end last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-015',
    label: 'Loop AI b11 w68 #015: FO>div left last auto',
    idea: 'text-align:left + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-016',
    label: 'Loop AI b11 w68 #016: FO>div left last start',
    idea: 'text-align:left + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-017',
    label: 'Loop AI b11 w68 #017: FO>div left last end',
    idea: 'text-align:left + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-018',
    label: 'Loop AI b11 w68 #018: FO>div left last left',
    idea: 'text-align:left + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-019',
    label: 'Loop AI b11 w68 #019: FO>div left last right',
    idea: 'text-align:left + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-020',
    label: 'Loop AI b11 w68 #020: FO>div left last center',
    idea: 'text-align:left + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-021',
    label: 'Loop AI b11 w68 #021: FO>div left last justify',
    idea: 'text-align:left + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:left!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div left last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-022',
    label: 'Loop AI b11 w68 #022: FO>div right last auto',
    idea: 'text-align:right + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-023',
    label: 'Loop AI b11 w68 #023: FO>div right last start',
    idea: 'text-align:right + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-024',
    label: 'Loop AI b11 w68 #024: FO>div right last end',
    idea: 'text-align:right + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-025',
    label: 'Loop AI b11 w68 #025: FO>div right last left',
    idea: 'text-align:right + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-026',
    label: 'Loop AI b11 w68 #026: FO>div right last right',
    idea: 'text-align:right + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-027',
    label: 'Loop AI b11 w68 #027: FO>div right last center',
    idea: 'text-align:right + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-028',
    label: 'Loop AI b11 w68 #028: FO>div right last justify',
    idea: 'text-align:right + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:right!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div right last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-029',
    label: 'Loop AI b11 w68 #029: FO>div center last auto',
    idea: 'text-align:center + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-030',
    label: 'Loop AI b11 w68 #030: FO>div center last start',
    idea: 'text-align:center + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-031',
    label: 'Loop AI b11 w68 #031: FO>div center last end',
    idea: 'text-align:center + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-032',
    label: 'Loop AI b11 w68 #032: FO>div center last left',
    idea: 'text-align:center + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-033',
    label: 'Loop AI b11 w68 #033: FO>div center last right',
    idea: 'text-align:center + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-034',
    label: 'Loop AI b11 w68 #034: FO>div center last center',
    idea: 'text-align:center + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-035',
    label: 'Loop AI b11 w68 #035: FO>div center last justify',
    idea: 'text-align:center + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:center!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div center last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-036',
    label: 'Loop AI b11 w68 #036: FO>div justify last auto',
    idea: 'text-align:justify + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-037',
    label: 'Loop AI b11 w68 #037: FO>div justify last start',
    idea: 'text-align:justify + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-038',
    label: 'Loop AI b11 w68 #038: FO>div justify last end',
    idea: 'text-align:justify + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-039',
    label: 'Loop AI b11 w68 #039: FO>div justify last left',
    idea: 'text-align:justify + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-040',
    label: 'Loop AI b11 w68 #040: FO>div justify last right',
    idea: 'text-align:justify + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-041',
    label: 'Loop AI b11 w68 #041: FO>div justify last center',
    idea: 'text-align:justify + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-042',
    label: 'Loop AI b11 w68 #042: FO>div justify last justify',
    idea: 'text-align:justify + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:justify!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div justify last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-043',
    label: 'Loop AI b11 w68 #043: FO>div match-parent last auto',
    idea: 'text-align:match-parent + text-align-last:auto on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-044',
    label: 'Loop AI b11 w68 #044: FO>div match-parent last start',
    idea: 'text-align:match-parent + text-align-last:start on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-045',
    label: 'Loop AI b11 w68 #045: FO>div match-parent last end',
    idea: 'text-align:match-parent + text-align-last:end on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-046',
    label: 'Loop AI b11 w68 #046: FO>div match-parent last left',
    idea: 'text-align:match-parent + text-align-last:left on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-047',
    label: 'Loop AI b11 w68 #047: FO>div match-parent last right',
    idea: 'text-align:match-parent + text-align-last:right on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-048',
    label: 'Loop AI b11 w68 #048: FO>div match-parent last center',
    idea: 'text-align:match-parent + text-align-last:center on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-049',
    label: 'Loop AI b11 w68 #049: FO>div match-parent last justify',
    idea: 'text-align:match-parent + text-align-last:justify on FO>div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-align:match-parent!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div match-parent last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-050',
    label: 'Loop AI b11 w68 #050: FO>div * start last auto',
    idea: 'text-align:start + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-051',
    label: 'Loop AI b11 w68 #051: FO>div * start last start',
    idea: 'text-align:start + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-052',
    label: 'Loop AI b11 w68 #052: FO>div * start last end',
    idea: 'text-align:start + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-053',
    label: 'Loop AI b11 w68 #053: FO>div * start last left',
    idea: 'text-align:start + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-054',
    label: 'Loop AI b11 w68 #054: FO>div * start last right',
    idea: 'text-align:start + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-055',
    label: 'Loop AI b11 w68 #055: FO>div * start last center',
    idea: 'text-align:start + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-056',
    label: 'Loop AI b11 w68 #056: FO>div * start last justify',
    idea: 'text-align:start + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:start!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * start last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-057',
    label: 'Loop AI b11 w68 #057: FO>div * end last auto',
    idea: 'text-align:end + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-058',
    label: 'Loop AI b11 w68 #058: FO>div * end last start',
    idea: 'text-align:end + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-059',
    label: 'Loop AI b11 w68 #059: FO>div * end last end',
    idea: 'text-align:end + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-060',
    label: 'Loop AI b11 w68 #060: FO>div * end last left',
    idea: 'text-align:end + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-061',
    label: 'Loop AI b11 w68 #061: FO>div * end last right',
    idea: 'text-align:end + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-062',
    label: 'Loop AI b11 w68 #062: FO>div * end last center',
    idea: 'text-align:end + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-063',
    label: 'Loop AI b11 w68 #063: FO>div * end last justify',
    idea: 'text-align:end + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:end!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * end last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-064',
    label: 'Loop AI b11 w68 #064: FO>div * left last auto',
    idea: 'text-align:left + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-065',
    label: 'Loop AI b11 w68 #065: FO>div * left last start',
    idea: 'text-align:left + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-066',
    label: 'Loop AI b11 w68 #066: FO>div * left last end',
    idea: 'text-align:left + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-067',
    label: 'Loop AI b11 w68 #067: FO>div * left last left',
    idea: 'text-align:left + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-068',
    label: 'Loop AI b11 w68 #068: FO>div * left last right',
    idea: 'text-align:left + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-069',
    label: 'Loop AI b11 w68 #069: FO>div * left last center',
    idea: 'text-align:left + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-070',
    label: 'Loop AI b11 w68 #070: FO>div * left last justify',
    idea: 'text-align:left + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:left!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * left last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-071',
    label: 'Loop AI b11 w68 #071: FO>div * right last auto',
    idea: 'text-align:right + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-072',
    label: 'Loop AI b11 w68 #072: FO>div * right last start',
    idea: 'text-align:right + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-073',
    label: 'Loop AI b11 w68 #073: FO>div * right last end',
    idea: 'text-align:right + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-074',
    label: 'Loop AI b11 w68 #074: FO>div * right last left',
    idea: 'text-align:right + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-075',
    label: 'Loop AI b11 w68 #075: FO>div * right last right',
    idea: 'text-align:right + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-076',
    label: 'Loop AI b11 w68 #076: FO>div * right last center',
    idea: 'text-align:right + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-077',
    label: 'Loop AI b11 w68 #077: FO>div * right last justify',
    idea: 'text-align:right + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:right!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * right last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-078',
    label: 'Loop AI b11 w68 #078: FO>div * center last auto',
    idea: 'text-align:center + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-079',
    label: 'Loop AI b11 w68 #079: FO>div * center last start',
    idea: 'text-align:center + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-080',
    label: 'Loop AI b11 w68 #080: FO>div * center last end',
    idea: 'text-align:center + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-081',
    label: 'Loop AI b11 w68 #081: FO>div * center last left',
    idea: 'text-align:center + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-082',
    label: 'Loop AI b11 w68 #082: FO>div * center last right',
    idea: 'text-align:center + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-083',
    label: 'Loop AI b11 w68 #083: FO>div * center last center',
    idea: 'text-align:center + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-084',
    label: 'Loop AI b11 w68 #084: FO>div * center last justify',
    idea: 'text-align:center + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:center!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * center last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-085',
    label: 'Loop AI b11 w68 #085: FO>div * justify last auto',
    idea: 'text-align:justify + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-086',
    label: 'Loop AI b11 w68 #086: FO>div * justify last start',
    idea: 'text-align:justify + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-087',
    label: 'Loop AI b11 w68 #087: FO>div * justify last end',
    idea: 'text-align:justify + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-088',
    label: 'Loop AI b11 w68 #088: FO>div * justify last left',
    idea: 'text-align:justify + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-089',
    label: 'Loop AI b11 w68 #089: FO>div * justify last right',
    idea: 'text-align:justify + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-090',
    label: 'Loop AI b11 w68 #090: FO>div * justify last center',
    idea: 'text-align:justify + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-091',
    label: 'Loop AI b11 w68 #091: FO>div * justify last justify',
    idea: 'text-align:justify + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:justify!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * justify last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-092',
    label: 'Loop AI b11 w68 #092: FO>div * match-parent last auto',
    idea: 'text-align:match-parent + text-align-last:auto on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-093',
    label: 'Loop AI b11 w68 #093: FO>div * match-parent last start',
    idea: 'text-align:match-parent + text-align-last:start on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last start; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-094',
    label: 'Loop AI b11 w68 #094: FO>div * match-parent last end',
    idea: 'text-align:match-parent + text-align-last:end on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last end; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-095',
    label: 'Loop AI b11 w68 #095: FO>div * match-parent last left',
    idea: 'text-align:match-parent + text-align-last:left on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last left; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-096',
    label: 'Loop AI b11 w68 #096: FO>div * match-parent last right',
    idea: 'text-align:match-parent + text-align-last:right on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last right; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-097',
    label: 'Loop AI b11 w68 #097: FO>div * match-parent last center',
    idea: 'text-align:match-parent + text-align-last:center on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last center; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-098',
    label: 'Loop AI b11 w68 #098: FO>div * match-parent last justify',
    idea: 'text-align:match-parent + text-align-last:justify on FO>div *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{text-align:match-parent!important;text-align-last:justify!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO>div * match-parent last justify; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-099',
    label: 'Loop AI b11 w68 #099: FO a start last auto',
    idea: 'text-align:start + text-align-last:auto on FO a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-align:start!important;text-align-last:auto!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO a start last auto; text-align + text-align-last — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w68-100',
    label: 'Loop AI b11 w68 #100: FO a start last start',
    idea: 'text-align:start + text-align-last:start on FO a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-align:start!important;text-align-last:start!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w68; FO a start last start; text-align + text-align-last — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w68: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-11 FO recipe shard (worker 61) — text-fix: hyphens + overflow-wrap matrix.
 * 100 recipes: loop-ai-b11-w61-001..100
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
    id: 'loop-ai-b11-w61-001',
    label: 'Loop AI b11 w61 #001: none + normal *',
    idea: 'hyphens:none + overflow-wrap:normal on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + normal *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-002',
    label: 'Loop AI b11 w61 #002: none + break-word *',
    idea: 'hyphens:none + overflow-wrap:break-word on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + break-word *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-003',
    label: 'Loop AI b11 w61 #003: none + anywhere *',
    idea: 'hyphens:none + overflow-wrap:anywhere on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + anywhere *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-004',
    label: 'Loop AI b11 w61 #004: none + inherit *',
    idea: 'hyphens:none + overflow-wrap:inherit on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + inherit *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-005',
    label: 'Loop AI b11 w61 #005: none + unset *',
    idea: 'hyphens:none + overflow-wrap:unset on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + unset *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-006',
    label: 'Loop AI b11 w61 #006: manual + normal *',
    idea: 'hyphens:manual + overflow-wrap:normal on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + normal *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-007',
    label: 'Loop AI b11 w61 #007: manual + break-word *',
    idea: 'hyphens:manual + overflow-wrap:break-word on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + break-word *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-008',
    label: 'Loop AI b11 w61 #008: manual + anywhere *',
    idea: 'hyphens:manual + overflow-wrap:anywhere on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + anywhere *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-009',
    label: 'Loop AI b11 w61 #009: manual + inherit *',
    idea: 'hyphens:manual + overflow-wrap:inherit on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + inherit *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-010',
    label: 'Loop AI b11 w61 #010: manual + unset *',
    idea: 'hyphens:manual + overflow-wrap:unset on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + unset *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-011',
    label: 'Loop AI b11 w61 #011: auto + normal *',
    idea: 'hyphens:auto + overflow-wrap:normal on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + normal *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-012',
    label: 'Loop AI b11 w61 #012: auto + break-word *',
    idea: 'hyphens:auto + overflow-wrap:break-word on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + break-word *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-013',
    label: 'Loop AI b11 w61 #013: auto + anywhere *',
    idea: 'hyphens:auto + overflow-wrap:anywhere on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + anywhere *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-014',
    label: 'Loop AI b11 w61 #014: auto + inherit *',
    idea: 'hyphens:auto + overflow-wrap:inherit on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + inherit *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-015',
    label: 'Loop AI b11 w61 #015: auto + unset *',
    idea: 'hyphens:auto + overflow-wrap:unset on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + unset *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-016',
    label: 'Loop AI b11 w61 #016: inherit + normal *',
    idea: 'hyphens:inherit + overflow-wrap:normal on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + normal *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-017',
    label: 'Loop AI b11 w61 #017: inherit + break-word *',
    idea: 'hyphens:inherit + overflow-wrap:break-word on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + break-word *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-018',
    label: 'Loop AI b11 w61 #018: inherit + anywhere *',
    idea: 'hyphens:inherit + overflow-wrap:anywhere on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + anywhere *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-019',
    label: 'Loop AI b11 w61 #019: inherit + inherit *',
    idea: 'hyphens:inherit + overflow-wrap:inherit on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + inherit *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-020',
    label: 'Loop AI b11 w61 #020: inherit + unset *',
    idea: 'hyphens:inherit + overflow-wrap:unset on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + unset *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-021',
    label: 'Loop AI b11 w61 #021: initial + normal *',
    idea: 'hyphens:initial + overflow-wrap:normal on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + normal *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-022',
    label: 'Loop AI b11 w61 #022: initial + break-word *',
    idea: 'hyphens:initial + overflow-wrap:break-word on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + break-word *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-023',
    label: 'Loop AI b11 w61 #023: initial + anywhere *',
    idea: 'hyphens:initial + overflow-wrap:anywhere on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + anywhere *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-024',
    label: 'Loop AI b11 w61 #024: initial + inherit *',
    idea: 'hyphens:initial + overflow-wrap:inherit on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + inherit *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-025',
    label: 'Loop AI b11 w61 #025: initial + unset *',
    idea: 'hyphens:initial + overflow-wrap:unset on FO * — global wrap/hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + unset *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-026',
    label: 'Loop AI b11 w61 #026: none + normal FO a',
    idea: 'hyphens:none + overflow-wrap:normal on FO a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + normal FO a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-027',
    label: 'Loop AI b11 w61 #027: none + normal nav a',
    idea: 'hyphens:none + overflow-wrap:normal on nav a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + normal nav a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-028',
    label: 'Loop AI b11 w61 #028: none + normal span',
    idea: 'hyphens:none + overflow-wrap:normal on span — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; none + normal span; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-029',
    label: 'Loop AI b11 w61 #029: manual + normal FO a',
    idea: 'hyphens:manual + overflow-wrap:normal on FO a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + normal FO a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-030',
    label: 'Loop AI b11 w61 #030: manual + normal nav a',
    idea: 'hyphens:manual + overflow-wrap:normal on nav a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + normal nav a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-031',
    label: 'Loop AI b11 w61 #031: manual + normal span',
    idea: 'hyphens:manual + overflow-wrap:normal on span — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; manual + normal span; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-032',
    label: 'Loop AI b11 w61 #032: auto + normal FO a',
    idea: 'hyphens:auto + overflow-wrap:normal on FO a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + normal FO a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-033',
    label: 'Loop AI b11 w61 #033: auto + normal nav a',
    idea: 'hyphens:auto + overflow-wrap:normal on nav a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + normal nav a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-034',
    label: 'Loop AI b11 w61 #034: auto + normal span',
    idea: 'hyphens:auto + overflow-wrap:normal on span — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; auto + normal span; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-035',
    label: 'Loop AI b11 w61 #035: inherit + normal FO a',
    idea: 'hyphens:inherit + overflow-wrap:normal on FO a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + normal FO a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-036',
    label: 'Loop AI b11 w61 #036: inherit + normal nav a',
    idea: 'hyphens:inherit + overflow-wrap:normal on nav a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + normal nav a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-037',
    label: 'Loop AI b11 w61 #037: inherit + normal span',
    idea: 'hyphens:inherit + overflow-wrap:normal on span — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; inherit + normal span; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-038',
    label: 'Loop AI b11 w61 #038: initial + normal FO a',
    idea: 'hyphens:initial + overflow-wrap:normal on FO a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + normal FO a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-039',
    label: 'Loop AI b11 w61 #039: initial + normal nav a',
    idea: 'hyphens:initial + overflow-wrap:normal on nav a — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + normal nav a; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-040',
    label: 'Loop AI b11 w61 #040: initial + normal span',
    idea: 'hyphens:initial + overflow-wrap:normal on span — scoped hyphen matrix',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; initial + normal span; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-041',
    label: 'Loop AI b11 w61 #041: unset revert *',
    idea: 'hyphens/overflow-wrap unset+revert cascade on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:unset!important;-webkit-hyphens:unset!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; unset revert *; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-042',
    label: 'Loop AI b11 w61 #042: FO root auto inherit',
    idea: 'FO root hyphens:auto + * inherit/normal — parent/child hyphen cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{hyphens:auto!important;-webkit-hyphens:auto!important}foreignObject *{hyphens:inherit!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; FO root auto inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-043',
    label: 'Loop AI b11 w61 #043: nowrap nav none',
    idea: 'nav a nowrap + hyphens:none — single-line nav without hyphen breaks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{white-space:nowrap!important;hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; nowrap nav none; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-044',
    label: 'Loop AI b11 w61 #044: pin lh none normal',
    idea: 'h2 pin lh + hyphens:none + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; pin lh none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.',
    radicalPatch: 'h2-pin-line-height-from-live'
  },
  {
    id: 'loop-ai-b11-w61-045',
    label: 'Loop AI b11 w61 #045: stretch auto anywhere',
    idea: 'h2 stretch leaf + hyphens:auto + overflow-wrap:anywhere',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;align-self:flex-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; stretch auto anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.',
    radicalPatch: 'h2-flex-stretch-leaf-from-live'
  },
  {
    id: 'loop-ai-b11-w61-046',
    label: 'Loop AI b11 w61 #046: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-047',
    label: 'Loop AI b11 w61 #047: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-048',
    label: 'Loop AI b11 w61 #048: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-049',
    label: 'Loop AI b11 w61 #049: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-050',
    label: 'Loop AI b11 w61 #050: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-051',
    label: 'Loop AI b11 w61 #051: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-052',
    label: 'Loop AI b11 w61 #052: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-053',
    label: 'Loop AI b11 w61 #053: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-054',
    label: 'Loop AI b11 w61 #054: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-055',
    label: 'Loop AI b11 w61 #055: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-056',
    label: 'Loop AI b11 w61 #056: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-057',
    label: 'Loop AI b11 w61 #057: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-058',
    label: 'Loop AI b11 w61 #058: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-059',
    label: 'Loop AI b11 w61 #059: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-060',
    label: 'Loop AI b11 w61 #060: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-061',
    label: 'Loop AI b11 w61 #061: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-062',
    label: 'Loop AI b11 w61 #062: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-063',
    label: 'Loop AI b11 w61 #063: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-064',
    label: 'Loop AI b11 w61 #064: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-065',
    label: 'Loop AI b11 w61 #065: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-066',
    label: 'Loop AI b11 w61 #066: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-067',
    label: 'Loop AI b11 w61 #067: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-068',
    label: 'Loop AI b11 w61 #068: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-069',
    label: 'Loop AI b11 w61 #069: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-070',
    label: 'Loop AI b11 w61 #070: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-071',
    label: 'Loop AI b11 w61 #071: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-072',
    label: 'Loop AI b11 w61 #072: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-073',
    label: 'Loop AI b11 w61 #073: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-074',
    label: 'Loop AI b11 w61 #074: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-075',
    label: 'Loop AI b11 w61 #075: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-076',
    label: 'Loop AI b11 w61 #076: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-077',
    label: 'Loop AI b11 w61 #077: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-078',
    label: 'Loop AI b11 w61 #078: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-079',
    label: 'Loop AI b11 w61 #079: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-080',
    label: 'Loop AI b11 w61 #080: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-081',
    label: 'Loop AI b11 w61 #081: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-082',
    label: 'Loop AI b11 w61 #082: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-083',
    label: 'Loop AI b11 w61 #083: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-084',
    label: 'Loop AI b11 w61 #084: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-085',
    label: 'Loop AI b11 w61 #085: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-086',
    label: 'Loop AI b11 w61 #086: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-087',
    label: 'Loop AI b11 w61 #087: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-088',
    label: 'Loop AI b11 w61 #088: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-089',
    label: 'Loop AI b11 w61 #089: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-090',
    label: 'Loop AI b11 w61 #090: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-091',
    label: 'Loop AI b11 w61 #091: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-092',
    label: 'Loop AI b11 w61 #092: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-093',
    label: 'Loop AI b11 w61 #093: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-094',
    label: 'Loop AI b11 w61 #094: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-095',
    label: 'Loop AI b11 w61 #095: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-096',
    label: 'Loop AI b11 w61 #096: fill none normal',
    idea: 'hyphens:none + overflow-wrap:normal fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill none normal; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-097',
    label: 'Loop AI b11 w61 #097: fill manual inherit',
    idea: 'hyphens:manual + overflow-wrap:inherit fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:manual!important;-webkit-hyphens:manual!important;overflow-wrap:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill manual inherit; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-098',
    label: 'Loop AI b11 w61 #098: fill auto break-word',
    idea: 'hyphens:auto + overflow-wrap:break-word fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill auto break-word; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-099',
    label: 'Loop AI b11 w61 #099: fill inherit unset',
    idea: 'hyphens:inherit + overflow-wrap:unset fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:inherit!important;-webkit-hyphens:inherit!important;overflow-wrap:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill inherit unset; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w61-100',
    label: 'Loop AI b11 w61 #100: fill initial anywhere',
    idea: 'hyphens:initial + overflow-wrap:anywhere fill — matrix extension',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hyphens:initial!important;-webkit-hyphens:initial!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w61; fill initial anywhere; hyphens + overflow-wrap matrix — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w61: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 14) — text-fix: font-kerning + font-variant-ligatures combos (40).
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
    id: 'loop-ai-b10-w14-001',
    label: 'Loop AI b10 w14 #001: kerning auto ligatures none',
    idea: 'font-kerning:auto + font-variant-ligatures:none on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-002',
    label: 'Loop AI b10 w14 #002: kerning auto ligatures normal',
    idea: 'font-kerning:auto + font-variant-ligatures:normal on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-003',
    label: 'Loop AI b10 w14 #003: kerning auto ligatures common-ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:common-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-004',
    label: 'Loop AI b10 w14 #004: kerning auto ligatures discretionary-ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:discretionary-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:discretionary-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-005',
    label: 'Loop AI b10 w14 #005: kerning auto ligatures historical-ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:historical-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:historical-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-006',
    label: 'Loop AI b10 w14 #006: kerning auto ligatures contextual',
    idea: 'font-kerning:auto + font-variant-ligatures:contextual on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:contextual!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-007',
    label: 'Loop AI b10 w14 #007: kerning auto ligatures no-common-ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:no-common-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:no-common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-008',
    label: 'Loop AI b10 w14 #008: kerning auto ligatures no-discretionary-ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:no-discretionary-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:no-discretionary-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-009',
    label: 'Loop AI b10 w14 #009: kerning auto ligatures no-historical-ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:no-historical-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:no-historical-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-010',
    label: 'Loop AI b10 w14 #010: kerning auto ligatures no-contextual',
    idea: 'font-kerning:auto + font-variant-ligatures:no-contextual on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:auto!important;font-variant-ligatures:no-contextual!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-011',
    label: 'Loop AI b10 w14 #011: kerning normal ligatures none',
    idea: 'font-kerning:normal + font-variant-ligatures:none on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-012',
    label: 'Loop AI b10 w14 #012: kerning normal ligatures normal',
    idea: 'font-kerning:normal + font-variant-ligatures:normal on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-013',
    label: 'Loop AI b10 w14 #013: kerning normal ligatures common-ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:common-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-014',
    label: 'Loop AI b10 w14 #014: kerning normal ligatures discretionary-ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:discretionary-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:discretionary-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-015',
    label: 'Loop AI b10 w14 #015: kerning normal ligatures historical-ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:historical-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:historical-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-016',
    label: 'Loop AI b10 w14 #016: kerning normal ligatures contextual',
    idea: 'font-kerning:normal + font-variant-ligatures:contextual on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:contextual!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-017',
    label: 'Loop AI b10 w14 #017: kerning normal ligatures no-common-ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:no-common-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:no-common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-018',
    label: 'Loop AI b10 w14 #018: kerning normal ligatures no-discretionary-ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:no-discretionary-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:no-discretionary-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-019',
    label: 'Loop AI b10 w14 #019: kerning normal ligatures no-historical-ligatures',
    idea: 'font-kerning:normal + font-variant-ligatures:no-historical-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:no-historical-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-020',
    label: 'Loop AI b10 w14 #020: kerning normal ligatures no-contextual',
    idea: 'font-kerning:normal + font-variant-ligatures:no-contextual on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:no-contextual!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-021',
    label: 'Loop AI b10 w14 #021: kerning none ligatures none',
    idea: 'font-kerning:none + font-variant-ligatures:none on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-022',
    label: 'Loop AI b10 w14 #022: kerning none ligatures normal',
    idea: 'font-kerning:none + font-variant-ligatures:normal on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-023',
    label: 'Loop AI b10 w14 #023: kerning none ligatures common-ligatures',
    idea: 'font-kerning:none + font-variant-ligatures:common-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-024',
    label: 'Loop AI b10 w14 #024: kerning none ligatures discretionary-ligatures',
    idea: 'font-kerning:none + font-variant-ligatures:discretionary-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:discretionary-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-025',
    label: 'Loop AI b10 w14 #025: kerning none ligatures historical-ligatures',
    idea: 'font-kerning:none + font-variant-ligatures:historical-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:historical-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-026',
    label: 'Loop AI b10 w14 #026: kerning none ligatures contextual',
    idea: 'font-kerning:none + font-variant-ligatures:contextual on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:contextual!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-027',
    label: 'Loop AI b10 w14 #027: kerning none ligatures no-common-ligatures',
    idea: 'font-kerning:none + font-variant-ligatures:no-common-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:no-common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-028',
    label: 'Loop AI b10 w14 #028: kerning none ligatures no-discretionary-ligatures',
    idea: 'font-kerning:none + font-variant-ligatures:no-discretionary-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:no-discretionary-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-029',
    label: 'Loop AI b10 w14 #029: kerning none ligatures no-historical-ligatures',
    idea: 'font-kerning:none + font-variant-ligatures:no-historical-ligatures on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:no-historical-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-030',
    label: 'Loop AI b10 w14 #030: kerning none ligatures no-contextual',
    idea: 'font-kerning:none + font-variant-ligatures:no-contextual on FO * — kerning/ligature combo grid',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:no-contextual!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-031',
    label: 'Loop AI b10 w14 #031: FO root kerning normal ligatures none',
    idea: 'font-kerning:normal + font-variant-ligatures:none on FO root only — root vs * cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-032',
    label: 'Loop AI b10 w14 #032: split root normal leaves common ligatures',
    idea: 'FO root font-kerning:normal + FO * font-variant-ligatures:common-ligatures — split kerning/ligature targets',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important}' +
      'foreignObject *{font-variant-ligatures:common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-033',
    label: 'Loop AI b10 w14 #033: split root auto leaves ligatures none',
    idea: 'FO root font-kerning:auto + FO * font-variant-ligatures:none — UA kerning at root, ligatures off on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:auto!important}' +
      'foreignObject *{font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-034',
    label: 'Loop AI b10 w14 #034: kern feature on leaves ligatures normal',
    idea: 'font-kerning:normal + font-variant-ligatures:normal + font-feature-settings:"kern" 1 on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:normal!important;font-feature-settings:"kern" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-035',
    label: 'Loop AI b10 w14 #035: liga off features kerning normal',
    idea: 'font-kerning:normal + font-variant-ligatures:none + font-feature-settings:"liga" 0,"kern" 1',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:none!important;font-feature-settings:"liga" 0,"kern" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-036',
    label: 'Loop AI b10 w14 #036: kern off features ligatures common',
    idea: 'font-kerning:none + font-variant-ligatures:common-ligatures + font-feature-settings:"kern" 0,"liga" 1',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-kerning:none!important;font-variant-ligatures:common-ligatures!important;font-feature-settings:"kern" 0,"liga" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-037',
    label: 'Loop AI b10 w14 #037: Chromium root copy leaves ligatures none',
    idea: 'FO root font-kerning:normal + font-synthesis:none + * font-variant-ligatures:none',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
      'foreignObject *{font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-038',
    label: 'Loop AI b10 w14 #038: text chain kerning normal ligatures none',
    idea: 'font-kerning:normal + font-variant-ligatures:none on inline text chain only (not all FO *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{font-kerning:normal!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-039',
    label: 'Loop AI b10 w14 #039: text chain auto common ligatures',
    idea: 'font-kerning:auto + font-variant-ligatures:common-ligatures on text chain selectors only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{font-kerning:auto!important;font-variant-ligatures:common-ligatures!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w14-040',
    label: 'Loop AI b10 w14 #040: root and leaves full normal stack',
    idea: 'font-kerning:normal + font-variant-ligatures:normal on FO root and FO * — explicit double-target Chromium copy',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-variant-ligatures:normal!important}' +
      'foreignObject *{font-kerning:normal!important;font-variant-ligatures:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w14; kerning/ligatures combo; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-11 FO recipe shard (worker 63) — text-fix: text-underline-offset variants.
 * 100 recipes: loop-ai-b11-w63-001..100
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
    id: 'loop-ai-b11-w63-001',
    label: 'Loop AI b11 w63 #001: offset auto *',
    idea: 'text-underline-offset:auto + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset auto *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-002',
    label: 'Loop AI b11 w63 #002: offset auto a',
    idea: 'text-underline-offset:auto + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset auto a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-003',
    label: 'Loop AI b11 w63 #003: offset auto nav a',
    idea: 'text-underline-offset:auto + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset auto nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-004',
    label: 'Loop AI b11 w63 #004: offset auto span',
    idea: 'text-underline-offset:auto + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset auto span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-005',
    label: 'Loop AI b11 w63 #005: offset auto label',
    idea: 'text-underline-offset:auto + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset auto label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-006',
    label: 'Loop AI b11 w63 #006: offset from-font *',
    idea: 'text-underline-offset:from-font + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset from-font *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-007',
    label: 'Loop AI b11 w63 #007: offset from-font a',
    idea: 'text-underline-offset:from-font + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset from-font a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-008',
    label: 'Loop AI b11 w63 #008: offset from-font nav a',
    idea: 'text-underline-offset:from-font + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset from-font nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-009',
    label: 'Loop AI b11 w63 #009: offset from-font span',
    idea: 'text-underline-offset:from-font + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset from-font span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-010',
    label: 'Loop AI b11 w63 #010: offset from-font label',
    idea: 'text-underline-offset:from-font + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset from-font label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-011',
    label: 'Loop AI b11 w63 #011: offset 0 *',
    idea: 'text-underline-offset:0 + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0 *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-012',
    label: 'Loop AI b11 w63 #012: offset 0 a',
    idea: 'text-underline-offset:0 + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0 a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-013',
    label: 'Loop AI b11 w63 #013: offset 0 nav a',
    idea: 'text-underline-offset:0 + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0 nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-014',
    label: 'Loop AI b11 w63 #014: offset 0 span',
    idea: 'text-underline-offset:0 + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0 span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-015',
    label: 'Loop AI b11 w63 #015: offset 0 label',
    idea: 'text-underline-offset:0 + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0 label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-016',
    label: 'Loop AI b11 w63 #016: offset 0.05em *',
    idea: 'text-underline-offset:0.05em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.05em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-017',
    label: 'Loop AI b11 w63 #017: offset 0.05em a',
    idea: 'text-underline-offset:0.05em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.05em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-018',
    label: 'Loop AI b11 w63 #018: offset 0.05em nav a',
    idea: 'text-underline-offset:0.05em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.05em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-019',
    label: 'Loop AI b11 w63 #019: offset 0.05em span',
    idea: 'text-underline-offset:0.05em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.05em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-020',
    label: 'Loop AI b11 w63 #020: offset 0.05em label',
    idea: 'text-underline-offset:0.05em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.05em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-021',
    label: 'Loop AI b11 w63 #021: offset 0.1em *',
    idea: 'text-underline-offset:0.1em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.1em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-022',
    label: 'Loop AI b11 w63 #022: offset 0.1em a',
    idea: 'text-underline-offset:0.1em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.1em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-023',
    label: 'Loop AI b11 w63 #023: offset 0.1em nav a',
    idea: 'text-underline-offset:0.1em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.1em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-024',
    label: 'Loop AI b11 w63 #024: offset 0.1em span',
    idea: 'text-underline-offset:0.1em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.1em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-025',
    label: 'Loop AI b11 w63 #025: offset 0.1em label',
    idea: 'text-underline-offset:0.1em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.1em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-026',
    label: 'Loop AI b11 w63 #026: offset 0.15em *',
    idea: 'text-underline-offset:0.15em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.15em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-027',
    label: 'Loop AI b11 w63 #027: offset 0.15em a',
    idea: 'text-underline-offset:0.15em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.15em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-028',
    label: 'Loop AI b11 w63 #028: offset 0.15em nav a',
    idea: 'text-underline-offset:0.15em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.15em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-029',
    label: 'Loop AI b11 w63 #029: offset 0.15em span',
    idea: 'text-underline-offset:0.15em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.15em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-030',
    label: 'Loop AI b11 w63 #030: offset 0.15em label',
    idea: 'text-underline-offset:0.15em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.15em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-031',
    label: 'Loop AI b11 w63 #031: offset 0.2em *',
    idea: 'text-underline-offset:0.2em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.2em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.2em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-032',
    label: 'Loop AI b11 w63 #032: offset 0.2em a',
    idea: 'text-underline-offset:0.2em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.2em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.2em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-033',
    label: 'Loop AI b11 w63 #033: offset 0.2em nav a',
    idea: 'text-underline-offset:0.2em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.2em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.2em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-034',
    label: 'Loop AI b11 w63 #034: offset 0.2em span',
    idea: 'text-underline-offset:0.2em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.2em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.2em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-035',
    label: 'Loop AI b11 w63 #035: offset 0.2em label',
    idea: 'text-underline-offset:0.2em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.2em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.2em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-036',
    label: 'Loop AI b11 w63 #036: offset 0.25em *',
    idea: 'text-underline-offset:0.25em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.25em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.25em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-037',
    label: 'Loop AI b11 w63 #037: offset 0.25em a',
    idea: 'text-underline-offset:0.25em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.25em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.25em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-038',
    label: 'Loop AI b11 w63 #038: offset 0.25em nav a',
    idea: 'text-underline-offset:0.25em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.25em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.25em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-039',
    label: 'Loop AI b11 w63 #039: offset 0.25em span',
    idea: 'text-underline-offset:0.25em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.25em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.25em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-040',
    label: 'Loop AI b11 w63 #040: offset 0.25em label',
    idea: 'text-underline-offset:0.25em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.25em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.25em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-041',
    label: 'Loop AI b11 w63 #041: offset 1px *',
    idea: 'text-underline-offset:1px + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1px *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-042',
    label: 'Loop AI b11 w63 #042: offset 1px a',
    idea: 'text-underline-offset:1px + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1px a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-043',
    label: 'Loop AI b11 w63 #043: offset 1px nav a',
    idea: 'text-underline-offset:1px + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1px nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-044',
    label: 'Loop AI b11 w63 #044: offset 1px span',
    idea: 'text-underline-offset:1px + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1px span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-045',
    label: 'Loop AI b11 w63 #045: offset 1px label',
    idea: 'text-underline-offset:1px + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1px label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-046',
    label: 'Loop AI b11 w63 #046: offset 2px *',
    idea: 'text-underline-offset:2px + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 2px *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-047',
    label: 'Loop AI b11 w63 #047: offset 2px a',
    idea: 'text-underline-offset:2px + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 2px a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-048',
    label: 'Loop AI b11 w63 #048: offset 2px nav a',
    idea: 'text-underline-offset:2px + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 2px nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-049',
    label: 'Loop AI b11 w63 #049: offset 2px span',
    idea: 'text-underline-offset:2px + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 2px span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-050',
    label: 'Loop AI b11 w63 #050: offset 2px label',
    idea: 'text-underline-offset:2px + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 2px label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-051',
    label: 'Loop AI b11 w63 #051: offset 3px *',
    idea: 'text-underline-offset:3px + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 3px *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-052',
    label: 'Loop AI b11 w63 #052: offset 3px a',
    idea: 'text-underline-offset:3px + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 3px a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-053',
    label: 'Loop AI b11 w63 #053: offset 3px nav a',
    idea: 'text-underline-offset:3px + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 3px nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-054',
    label: 'Loop AI b11 w63 #054: offset 3px span',
    idea: 'text-underline-offset:3px + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 3px span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-055',
    label: 'Loop AI b11 w63 #055: offset 3px label',
    idea: 'text-underline-offset:3px + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 3px label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-056',
    label: 'Loop AI b11 w63 #056: offset 4px *',
    idea: 'text-underline-offset:4px + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 4px *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-057',
    label: 'Loop AI b11 w63 #057: offset 4px a',
    idea: 'text-underline-offset:4px + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 4px a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-058',
    label: 'Loop AI b11 w63 #058: offset 4px nav a',
    idea: 'text-underline-offset:4px + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 4px nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-059',
    label: 'Loop AI b11 w63 #059: offset 4px span',
    idea: 'text-underline-offset:4px + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 4px span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-060',
    label: 'Loop AI b11 w63 #060: offset 4px label',
    idea: 'text-underline-offset:4px + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 4px label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-061',
    label: 'Loop AI b11 w63 #061: offset 5px *',
    idea: 'text-underline-offset:5px + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:5px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 5px *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-062',
    label: 'Loop AI b11 w63 #062: offset 5px a',
    idea: 'text-underline-offset:5px + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:5px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 5px a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-063',
    label: 'Loop AI b11 w63 #063: offset 5px nav a',
    idea: 'text-underline-offset:5px + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:5px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 5px nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-064',
    label: 'Loop AI b11 w63 #064: offset 5px span',
    idea: 'text-underline-offset:5px + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:5px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 5px span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-065',
    label: 'Loop AI b11 w63 #065: offset 5px label',
    idea: 'text-underline-offset:5px + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:5px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 5px label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-066',
    label: 'Loop AI b11 w63 #066: offset -1px *',
    idea: 'text-underline-offset:-1px + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:-1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset -1px *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-067',
    label: 'Loop AI b11 w63 #067: offset -1px a',
    idea: 'text-underline-offset:-1px + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:-1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset -1px a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-068',
    label: 'Loop AI b11 w63 #068: offset -1px nav a',
    idea: 'text-underline-offset:-1px + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:-1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset -1px nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-069',
    label: 'Loop AI b11 w63 #069: offset -1px span',
    idea: 'text-underline-offset:-1px + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:-1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset -1px span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-070',
    label: 'Loop AI b11 w63 #070: offset -1px label',
    idea: 'text-underline-offset:-1px + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:-1px!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset -1px label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-071',
    label: 'Loop AI b11 w63 #071: offset 10% *',
    idea: 'text-underline-offset:10% + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:10%!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 10% *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-072',
    label: 'Loop AI b11 w63 #072: offset 10% a',
    idea: 'text-underline-offset:10% + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:10%!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 10% a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-073',
    label: 'Loop AI b11 w63 #073: offset 10% nav a',
    idea: 'text-underline-offset:10% + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:10%!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 10% nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-074',
    label: 'Loop AI b11 w63 #074: offset 10% span',
    idea: 'text-underline-offset:10% + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:10%!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 10% span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-075',
    label: 'Loop AI b11 w63 #075: offset 10% label',
    idea: 'text-underline-offset:10% + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:10%!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 10% label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-076',
    label: 'Loop AI b11 w63 #076: offset 0.5em *',
    idea: 'text-underline-offset:0.5em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.5em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.5em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-077',
    label: 'Loop AI b11 w63 #077: offset 0.5em a',
    idea: 'text-underline-offset:0.5em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.5em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.5em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-078',
    label: 'Loop AI b11 w63 #078: offset 0.5em nav a',
    idea: 'text-underline-offset:0.5em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.5em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.5em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-079',
    label: 'Loop AI b11 w63 #079: offset 0.5em span',
    idea: 'text-underline-offset:0.5em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.5em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.5em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-080',
    label: 'Loop AI b11 w63 #080: offset 0.5em label',
    idea: 'text-underline-offset:0.5em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.5em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.5em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-081',
    label: 'Loop AI b11 w63 #081: offset 0.75em *',
    idea: 'text-underline-offset:0.75em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.75em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.75em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-082',
    label: 'Loop AI b11 w63 #082: offset 0.75em a',
    idea: 'text-underline-offset:0.75em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:0.75em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.75em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-083',
    label: 'Loop AI b11 w63 #083: offset 0.75em nav a',
    idea: 'text-underline-offset:0.75em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:0.75em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.75em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-084',
    label: 'Loop AI b11 w63 #084: offset 0.75em span',
    idea: 'text-underline-offset:0.75em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:0.75em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.75em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-085',
    label: 'Loop AI b11 w63 #085: offset 0.75em label',
    idea: 'text-underline-offset:0.75em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:0.75em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 0.75em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-086',
    label: 'Loop AI b11 w63 #086: offset 1em *',
    idea: 'text-underline-offset:1em + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1em *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-087',
    label: 'Loop AI b11 w63 #087: offset 1em a',
    idea: 'text-underline-offset:1em + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1em a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-088',
    label: 'Loop AI b11 w63 #088: offset 1em nav a',
    idea: 'text-underline-offset:1em + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1em nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-089',
    label: 'Loop AI b11 w63 #089: offset 1em span',
    idea: 'text-underline-offset:1em + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1em span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-090',
    label: 'Loop AI b11 w63 #090: offset 1em label',
    idea: 'text-underline-offset:1em + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:1em!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset 1em label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-091',
    label: 'Loop AI b11 w63 #091: offset inherit *',
    idea: 'text-underline-offset:inherit + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:inherit!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset inherit *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-092',
    label: 'Loop AI b11 w63 #092: offset inherit a',
    idea: 'text-underline-offset:inherit + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:inherit!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset inherit a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-093',
    label: 'Loop AI b11 w63 #093: offset inherit nav a',
    idea: 'text-underline-offset:inherit + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:inherit!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset inherit nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-094',
    label: 'Loop AI b11 w63 #094: offset inherit span',
    idea: 'text-underline-offset:inherit + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:inherit!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset inherit span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-095',
    label: 'Loop AI b11 w63 #095: offset inherit label',
    idea: 'text-underline-offset:inherit + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:inherit!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset inherit label; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-096',
    label: 'Loop AI b11 w63 #096: offset unset *',
    idea: 'text-underline-offset:unset + underline on *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:unset!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset unset *; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-097',
    label: 'Loop AI b11 w63 #097: offset unset a',
    idea: 'text-underline-offset:unset + underline on a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-decoration:underline!important;text-underline-offset:unset!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset unset a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-098',
    label: 'Loop AI b11 w63 #098: offset unset nav a',
    idea: 'text-underline-offset:unset + underline on nav a',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-decoration:underline!important;text-underline-offset:unset!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset unset nav a; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-099',
    label: 'Loop AI b11 w63 #099: offset unset span',
    idea: 'text-underline-offset:unset + underline on span',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-decoration:underline!important;text-underline-offset:unset!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset unset span; text-underline-offset variants — FO-raster only, no text bypass.'
  },
  {
    id: 'loop-ai-b11-w63-100',
    label: 'Loop AI b11 w63 #100: offset unset label',
    idea: 'text-underline-offset:unset + underline on label',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-decoration:underline!important;text-underline-offset:unset!important;text-decoration-skip-ink:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w63; offset unset label; text-underline-offset variants — FO-raster only, no text bypass.'
  }
]

if (RECIPES.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w63: expected 100 recipes, got ' + RECIPES.length)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

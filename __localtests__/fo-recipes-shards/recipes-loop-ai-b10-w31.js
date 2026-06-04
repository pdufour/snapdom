/**
 * Loop AI batch-10 FO recipe shard (worker 31) — text-fix: text-underline-offset × text-decoration-skip-ink auto/none (40 recipes).
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
    id: 'loop-ai-b10-w31-001',
    label: 'Loop AI b10 w31 #001: offset auto skip auto',
    idea: 'text-underline-offset:auto + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset auto skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-002',
    label: 'Loop AI b10 w31 #002: offset auto skip none',
    idea: 'text-underline-offset:auto + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset auto skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-003',
    label: 'Loop AI b10 w31 #003: offset from-font skip auto',
    idea: 'text-underline-offset:from-font + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset from-font skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-004',
    label: 'Loop AI b10 w31 #004: offset from-font skip none',
    idea: 'text-underline-offset:from-font + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset from-font skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-005',
    label: 'Loop AI b10 w31 #005: offset 0 skip auto',
    idea: 'text-underline-offset:0 + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0 skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-006',
    label: 'Loop AI b10 w31 #006: offset 0 skip none',
    idea: 'text-underline-offset:0 + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0 skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-007',
    label: 'Loop AI b10 w31 #007: offset 1px skip auto',
    idea: 'text-underline-offset:1px + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 1px skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-008',
    label: 'Loop AI b10 w31 #008: offset 1px skip none',
    idea: 'text-underline-offset:1px + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:1px!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 1px skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-009',
    label: 'Loop AI b10 w31 #009: offset 2px skip auto',
    idea: 'text-underline-offset:2px + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 2px skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-010',
    label: 'Loop AI b10 w31 #010: offset 2px skip none',
    idea: 'text-underline-offset:2px + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 2px skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-011',
    label: 'Loop AI b10 w31 #011: offset 3px skip auto',
    idea: 'text-underline-offset:3px + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 3px skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-012',
    label: 'Loop AI b10 w31 #012: offset 3px skip none',
    idea: 'text-underline-offset:3px + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:3px!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 3px skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-013',
    label: 'Loop AI b10 w31 #013: offset 4px skip auto',
    idea: 'text-underline-offset:4px + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 4px skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-014',
    label: 'Loop AI b10 w31 #014: offset 4px skip none',
    idea: 'text-underline-offset:4px + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:4px!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 4px skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-015',
    label: 'Loop AI b10 w31 #015: offset 0.05em skip auto',
    idea: 'text-underline-offset:0.05em + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.05em skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-016',
    label: 'Loop AI b10 w31 #016: offset 0.05em skip none',
    idea: 'text-underline-offset:0.05em + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.05em!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.05em skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-017',
    label: 'Loop AI b10 w31 #017: offset 0.08em skip auto',
    idea: 'text-underline-offset:0.08em + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.08em!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.08em skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-018',
    label: 'Loop AI b10 w31 #018: offset 0.08em skip none',
    idea: 'text-underline-offset:0.08em + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.08em!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.08em skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-019',
    label: 'Loop AI b10 w31 #019: offset 0.1em skip auto',
    idea: 'text-underline-offset:0.1em + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.1em skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-020',
    label: 'Loop AI b10 w31 #020: offset 0.1em skip none',
    idea: 'text-underline-offset:0.1em + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.1em!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.1em skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-021',
    label: 'Loop AI b10 w31 #021: offset 0.12em skip auto',
    idea: 'text-underline-offset:0.12em + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.12em!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.12em skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-022',
    label: 'Loop AI b10 w31 #022: offset 0.12em skip none',
    idea: 'text-underline-offset:0.12em + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.12em!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.12em skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-023',
    label: 'Loop AI b10 w31 #023: offset 0.15em skip auto',
    idea: 'text-underline-offset:0.15em + text-decoration-skip-ink:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.15em skip auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-024',
    label: 'Loop AI b10 w31 #024: offset 0.15em skip none',
    idea: 'text-underline-offset:0.15em + text-decoration-skip-ink:none on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.15em!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; offset 0.15em skip none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-025',
    label: 'Loop AI b10 w31 #025: auto auto position under',
    idea: 'offset auto + skip auto + text-underline-position:under on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;text-underline-position:under!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; auto auto position under; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-026',
    label: 'Loop AI b10 w31 #026: auto none position under',
    idea: 'offset auto + skip none + text-underline-position:under on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:none!important;text-underline-position:under!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; auto none position under; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-027',
    label: 'Loop AI b10 w31 #027: from-font auto position from-font',
    idea: 'offset from-font + skip auto + text-underline-position:from-font on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;text-underline-position:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; from-font auto position from-font; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-028',
    label: 'Loop AI b10 w31 #028: from-font none position from-font',
    idea: 'offset from-font + skip none + text-underline-position:from-font on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:none!important;text-underline-position:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; from-font none position from-font; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-029',
    label: 'Loop AI b10 w31 #029: 2px auto position under',
    idea: 'offset 2px + skip auto + text-underline-position:under on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:auto!important;text-underline-position:under!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; 2px auto position under; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-030',
    label: 'Loop AI b10 w31 #030: 2px none position under',
    idea: 'offset 2px + skip none + text-underline-position:under on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:none!important;text-underline-position:under!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; 2px none position under; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-031',
    label: 'Loop AI b10 w31 #031: auto auto thickness from-font',
    idea: 'offset auto + skip auto + text-decoration-thickness:from-font on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important;text-decoration-thickness:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; auto auto thickness from-font; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-032',
    label: 'Loop AI b10 w31 #032: auto none thickness from-font',
    idea: 'offset auto + skip none + text-decoration-thickness:from-font on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:none!important;text-decoration-thickness:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; auto none thickness from-font; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-033',
    label: 'Loop AI b10 w31 #033: from-font auto thickness auto',
    idea: 'offset from-font + skip auto + text-decoration-thickness:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important;text-decoration-thickness:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; from-font auto thickness auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-034',
    label: 'Loop AI b10 w31 #034: 2px none thickness 1px',
    idea: 'offset 2px + skip none + text-decoration-thickness:1px on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:none!important;text-decoration-thickness:1px!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; 2px none thickness 1px; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-035',
    label: 'Loop AI b10 w31 #035: 0.12em auto thickness auto',
    idea: 'offset 0.12em + skip auto + text-decoration-thickness:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.12em!important;text-decoration-skip-ink:auto!important;text-decoration-thickness:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; 0.12em auto thickness auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-036',
    label: 'Loop AI b10 w31 #036: 0.12em none thickness auto',
    idea: 'offset 0.12em + skip none + text-decoration-thickness:auto on underlined FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important;text-underline-offset:0.12em!important;text-decoration-skip-ink:none!important;text-decoration-thickness:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; 0.12em none thickness auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-037',
    label: 'Loop AI b10 w31 #037: chain auto auto',
    idea: 'offset auto + skip auto on inline text chain only (not all FO *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important}' +
      TEXT_CHAIN +
      '{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; chain auto auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-038',
    label: 'Loop AI b10 w31 #038: chain auto none',
    idea: 'offset auto + skip none on inline text chain only (not all FO *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important}' +
      TEXT_CHAIN +
      '{text-decoration:underline!important;text-underline-offset:auto!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; chain auto none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-039',
    label: 'Loop AI b10 w31 #039: chain from-font auto',
    idea: 'offset from-font + skip auto on inline text chain only (not all FO *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important}' +
      TEXT_CHAIN +
      '{text-decoration:underline!important;text-underline-offset:from-font!important;text-decoration-skip-ink:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; chain from-font auto; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
  {
    id: 'loop-ai-b10-w31-040',
    label: 'Loop AI b10 w31 #040: chain 2px none',
    idea: 'offset 2px + skip none on inline text chain only (not all FO *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-decoration:underline!important}' +
      TEXT_CHAIN +
      '{text-decoration:underline!important;text-underline-offset:2px!important;text-decoration-skip-ink:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w31; chain 2px none; underline offset + skip-ink — FO-raster only, no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

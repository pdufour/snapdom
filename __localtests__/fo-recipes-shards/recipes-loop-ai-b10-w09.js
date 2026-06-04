/**
 * Loop AI batch-10 FO recipe shard (worker 9) — text-fix: text-box-trim / edge / leading-trim variants.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w09-001',
    label: 'Loop AI b10 w09 #001: trim-both only',
    idea: 'text-box-trim:trim-both on FO * — line box trim without edge pairing',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-002',
    label: 'Loop AI b10 w09 #002: trim-start only',
    idea: 'text-box-trim:trim-start on FO * — leading half-leading trim only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-start!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-start only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-003',
    label: 'Loop AI b10 w09 #003: trim-end only',
    idea: 'text-box-trim:trim-end on FO * — trailing half-leading trim only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-end!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-end only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-004',
    label: 'Loop AI b10 w09 #004: trim none explicit',
    idea: 'text-box-trim:none on FO * — disable trim vs trim-both probes',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:none!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim none explicit; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-005',
    label: 'Loop AI b10 w09 #005: trim-both cap edge',
    idea: 'text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both cap edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-006',
    label: 'Loop AI b10 w09 #006: trim-both ex edge',
    idea: 'text-box-trim:trim-both + text-box-edge:ex alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both ex edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-007',
    label: 'Loop AI b10 w09 #007: trim-both text alphabetic',
    idea: 'text-box-trim:trim-both + text-box-edge:text alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:text alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both text alphabetic; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-008',
    label: 'Loop AI b10 w09 #008: trim-both text edge',
    idea: 'text-box-trim:trim-both + text-box-edge:text on FO * — text edge without alphabetic keyword',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:text!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both text edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-009',
    label: 'Loop AI b10 w09 #009: trim-both leading edge',
    idea: 'text-box-trim:trim-both + text-box-edge:leading alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both leading edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-010',
    label: 'Loop AI b10 w09 #010: trim-both edge auto',
    idea: 'text-box-trim:trim-both + text-box-edge:auto on FO * — UA edge auto vs cap pairing',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:auto!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both edge auto; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-011',
    label: 'Loop AI b10 w09 #011: trim-both edge normal',
    idea: 'text-box-trim:trim-both + text-box-edge:normal on FO * — normal edge box vs auto',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:normal!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both edge normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-012',
    label: 'Loop AI b10 w09 #012: trim-start cap edge',
    idea: 'text-box-trim:trim-start + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-start!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-start cap edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-013',
    label: 'Loop AI b10 w09 #013: trim-start text edge',
    idea: 'text-box-trim:trim-start + text-box-edge:text on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-start!important;text-box-edge:text!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-start text edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-014',
    label: 'Loop AI b10 w09 #014: trim-end cap edge',
    idea: 'text-box-trim:trim-end + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-end!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-end cap edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-015',
    label: 'Loop AI b10 w09 #015: trim-end ex edge',
    idea: 'text-box-trim:trim-end + text-box-edge:ex alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-end!important;text-box-edge:ex alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-end ex edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-016',
    label: 'Loop AI b10 w09 #016: trim-end text alphabetic',
    idea: 'text-box-trim:trim-end + text-box-edge:text alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-end!important;text-box-edge:text alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-end text alphabetic; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-017',
    label: 'Loop AI b10 w09 #017: leading both trim-both',
    idea: 'leading-trim:both + text-box-trim:trim-both on FO * — half-leading trim without edge cap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant leading both trim-both; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-018',
    label: 'Loop AI b10 w09 #018: both-edges trim-both',
    idea: 'leading-trim:both-edges + text-box-trim:trim-both on FO * — dual-edge leading trim stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant both-edges trim-both; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-019',
    label: 'Loop AI b10 w09 #019: leading both trim cap',
    idea: 'leading-trim:both + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant leading both trim cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-020',
    label: 'Loop AI b10 w09 #020: both-edges trim cap',
    idea: 'leading-trim:both-edges + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant both-edges trim cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-021',
    label: 'Loop AI b10 w09 #021: leading normal trim-start ex',
    idea: 'leading-trim:normal + text-box-trim:trim-start + text-box-edge:ex alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:normal!important;text-box-trim:trim-start!important;text-box-edge:ex alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant leading normal trim-start ex; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-022',
    label: 'Loop AI b10 w09 #022: leading both trim-end text-edge',
    idea: 'leading-trim:both + text-box-trim:trim-end + text-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both!important;text-box-trim:trim-end!important;text-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant leading both trim-end text-edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-023',
    label: 'Loop AI b10 w09 #023: leading none trim-both cap',
    idea: 'leading-trim:none + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:none!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant leading none trim-both cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-024',
    label: 'Loop AI b10 w09 #024: both-edges trim-start',
    idea: 'leading-trim:both-edges + text-box-trim:trim-start on FO * — start trim with dual leading edges',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant both-edges trim-start; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-025',
    label: 'Loop AI b10 w09 #025: trim-both text-edge cap',
    idea: 'text-box-trim:trim-both + text-edge:cap alphabetic on FO * — text-edge companion without text-box-edge',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both text-edge cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-026',
    label: 'Loop AI b10 w09 #026: trim-both text-edge text',
    idea: 'text-box-trim:trim-both + text-edge:text alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-edge:text alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both text-edge text; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-027',
    label: 'Loop AI b10 w09 #027: trim-start text-edge cap',
    idea: 'text-box-trim:trim-start + text-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-start!important;text-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-start text-edge cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-028',
    label: 'Loop AI b10 w09 #028: trim-end text-edge text',
    idea: 'text-box-trim:trim-end + text-edge:text alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-end!important;text-edge:text alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-end text-edge text; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-029',
    label: 'Loop AI b10 w09 #029: trim-none cap edge',
    idea: 'text-box-trim:none + text-box-edge:cap alphabetic on FO * — edge cap with trim disabled',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:none!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-none cap edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-030',
    label: 'Loop AI b10 w09 #030: trim-none text edge',
    idea: 'text-box-trim:none + text-box-edge:text on FO * — text edge with trim disabled',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:none!important;text-box-edge:text!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-none text edge; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-031',
    label: 'Loop AI b10 w09 #031: trim-both text-edge auto cap',
    idea: 'text-box-trim:trim-both + text-edge:auto + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-edge:auto!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both text-edge auto cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-032',
    label: 'Loop AI b10 w09 #032: trim-both dual cap edges',
    idea: 'text-box-trim:trim-both + text-edge:cap alphabetic + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-edge:cap alphabetic!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant trim-both dual cap edges; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-033',
    label: 'Loop AI b10 w09 #033: lh normal trim-both',
    idea: 'line-height:normal + text-box-trim:trim-both on FO * — normal strut with line box trim',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:normal!important;text-box-trim:trim-both!important;vertical-align:baseline!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant lh normal trim-both; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-034',
    label: 'Loop AI b10 w09 #034: from-font trim-both cap',
    idea: 'line-height:from-font + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:from-font!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant from-font trim-both cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-035',
    label: 'Loop AI b10 w09 #035: lh1 leading both trim-both',
    idea: 'line-height:1 + leading-trim:both + text-box-trim:trim-both on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1!important;leading-trim:both!important;text-box-trim:trim-both!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant lh1 leading both trim-both; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-036',
    label: 'Loop AI b10 w09 #036: baseline trim-both cap',
    idea: 'vertical-align:baseline + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{vertical-align:baseline!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant baseline trim-both cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-037',
    label: 'Loop AI b10 w09 #037: FO div normal trim cap',
    idea: 'FO>div line-height:normal + * text-box-trim:trim-both + cap edge — wrapper strut vs leaf trim',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; text-box-trim variant FO div normal trim cap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-038',
    label: 'Loop AI b10 w09 #038: text chain trim cap',
    idea: 'text-box-trim:trim-both + text-box-edge:cap alphabetic on inline text chain only (not all FO *)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w09; trim cap on inline text chain only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-039',
    label: 'Loop AI b10 w09 #039: pin lh trim-both cap',
    idea: 'h2-pin-line-height-from-live + text-box-trim:trim-both + text-box-edge:cap alphabetic on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w09; pin lh + trim-both cap edge stack; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w09-040',
    label: 'Loop AI b10 w09 #040: trim cap decode-interval',
    idea: 'text-box-trim:trim-both + text-box-edge:cap alphabetic + decode-interval before drawImage',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}',

    inject: 'capture',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w09; trim cap stack + decode-interval raster; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

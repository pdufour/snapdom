/**
 * Loop AI batch-10 FO recipe shard (worker 36) — text-fix: hanging-punctuation allow-end / first / last.
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

const TRIM =
  'foreignObject *{leading-trim:both!important;text-box-trim:trim-both!important;' +
  'text-box-edge:cap alphabetic!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w36-001',
    label: 'Loop AI b10 w36 #001: allow-end global',
    idea: 'hanging-punctuation:allow-end on FO * — end-quote hang vs line box edge',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end global; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-002',
    label: 'Loop AI b10 w36 #002: force-end global',
    idea: 'hanging-punctuation:force-end on FO * — force end punctuation outside line box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:force-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; force-end global; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-003',
    label: 'Loop AI b10 w36 #003: first global',
    idea: 'hanging-punctuation:first on FO * — opening punctuation hang at line start',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first global; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-004',
    label: 'Loop AI b10 w36 #004: last global',
    idea: 'hanging-punctuation:last on FO * — closing punctuation hang at line end',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:last!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last global; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-005',
    label: 'Loop AI b10 w36 #005: first last global',
    idea: 'hanging-punctuation:first last on FO * — both edge hangs on FO text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first last!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first last global; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-006',
    label: 'Loop AI b10 w36 #006: allow-end force-end start',
    idea: 'allow-end force-end + text-align:start — hang pair with start alignment',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end force-end!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end force-end start; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-007',
    label: 'Loop AI b10 w36 #007: first allow-end',
    idea: 'first allow-end on FO * — opening hang plus allowed end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first allow-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first allow-end; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-008',
    label: 'Loop AI b10 w36 #008: last allow-end',
    idea: 'last allow-end on FO * — closing hang plus allowed end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:last allow-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last allow-end; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-009',
    label: 'Loop AI b10 w36 #009: first force-end',
    idea: 'first force-end on FO * — opening + forced end punctuation hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first force-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first force-end; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-010',
    label: 'Loop AI b10 w36 #010: last force-end',
    idea: 'last force-end on FO * — closing + forced end punctuation hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:last force-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last force-end; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-011',
    label: 'Loop AI b10 w36 #011: none reset',
    idea: 'hanging-punctuation:none on FO * — disable hang vs live punctuation metrics',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; none reset; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-012',
    label: 'Loop AI b10 w36 #012: allow-end text-align end',
    idea: 'allow-end + text-align:end — end-aligned hang probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important;text-align:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end text-align end; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-013',
    label: 'Loop AI b10 w36 #013: allow-end text-align center',
    idea: 'allow-end + text-align:center — centered lines with end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important;text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end text-align center; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-014',
    label: 'Loop AI b10 w36 #014: first text-align start',
    idea: 'first + text-align:start — start hang with explicit start alignment',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first!important;text-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first text-align start; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-015',
    label: 'Loop AI b10 w36 #015: last text-indent',
    idea: 'last + text-indent:0 — block indent zero with closing hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:last!important;text-indent:0!important;display:block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last text-indent; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-016',
    label: 'Loop AI b10 w36 #016: first last padding-inline',
    idea: 'first last + padding-inline-start:0 — hang with zero inline padding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first last!important;padding-inline-start:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first last padding-inline; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-017',
    label: 'Loop AI b10 w36 #017: allow-end force-end chain',
    idea: 'allow-end force-end on inline text chain only (not FO root)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + TEXT_CHAIN + '{hanging-punctuation:allow-end force-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end force-end chain; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-018',
    label: 'Loop AI b10 w36 #018: first chain',
    idea: 'hanging-punctuation:first on inline text chain selectors only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + TEXT_CHAIN + '{hanging-punctuation:first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first chain; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-019',
    label: 'Loop AI b10 w36 #019: last nav anchors',
    idea: 'hanging-punctuation:last on nav anchors only — link text end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject nav a{hanging-punctuation:last!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last nav anchors; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-020',
    label: 'Loop AI b10 w36 #020: allow-end from-font lh',
    idea: 'allow-end + line-height:from-font — hang with font-metric strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end from-font lh; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-021',
    label: 'Loop AI b10 w36 #021: first last normal lh',
    idea: 'first last + line-height:normal — hang with normal strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first last!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first last normal lh; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-022',
    label: 'Loop AI b10 w36 #022: allow-end text-wrap balance',
    idea: 'allow-end + text-wrap:balance — balanced wrap with end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important;text-wrap:balance!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end text-wrap balance; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-023',
    label: 'Loop AI b10 w36 #023: first text-wrap pretty',
    idea: 'first + text-wrap:pretty — pretty wrap with opening hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first!important;text-wrap:pretty!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first text-wrap pretty; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-024',
    label: 'Loop AI b10 w36 #024: allow-end force-end chromium',
    idea: 'allow-end force-end + Chromium font-kerning copy on FO',
    css:
      FO_BASELINE_CSS +
      CHROMIUM + TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end force-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end force-end chromium; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-025',
    label: 'Loop AI b10 w36 #025: first geometricPrecision',
    idea: 'first + text-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first geometricPrecision; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-026',
    label: 'Loop AI b10 w36 #026: last trim cap stack',
    idea: 'last + leading-trim/text-box-trim cap stack on FO *',
    css:
      FO_BASELINE_CSS +
      TRIM + TEXT_LEAF + 'foreignObject *{hanging-punctuation:last!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last trim cap stack; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-027',
    label: 'Loop AI b10 w36 #027: allow-end device-grid',
    idea: 'allow-end + device-grid-floor raster snap with FO hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'device-grid-floor',
    notes: 'Loop AI b10 w36; allow-end device-grid; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-028',
    label: 'Loop AI b10 w36 #028: first last pin lh live',
    idea: 'first last + h2-pin-line-height-from-live radical patch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first last!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w36; first last pin lh live; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-029',
    label: 'Loop AI b10 w36 #029: allow-end fo-div wrapper',
    idea: 'allow-end force-end on FO>div wrapper + inherit on descendants',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject>div{hanging-punctuation:allow-end force-end!important}foreignObject *{hanging-punctuation:allow-end force-end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end fo-div wrapper; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-030',
    label: 'Loop AI b10 w36 #030: first last baseline valign',
    idea: 'first last + vertical-align:baseline on inline text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first last!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first last baseline valign; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-031',
    label: 'Loop AI b10 w36 #031: allow-end unicode-bidi',
    idea: 'allow-end + unicode-bidi:isolate on FO * — bidi isolate with end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end unicode-bidi; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-032',
    label: 'Loop AI b10 w36 #032: first text-align-last start',
    idea: 'first + text-align-last:start — last-line start with opening hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first!important;text-align-last:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first text-align-last start; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-033',
    label: 'Loop AI b10 w36 #033: last text-align-last end',
    idea: 'last + text-align-last:end — last-line end with closing hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:last!important;text-align-last:end!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last text-align-last end; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-034',
    label: 'Loop AI b10 w36 #034: allow-end force-end hyphens',
    idea: 'allow-end force-end + hyphens:auto — hyphenation with forced end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end force-end!important;hyphens:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end force-end hyphens; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-035',
    label: 'Loop AI b10 w36 #035: first last word-break',
    idea: 'first last + word-break:keep-all — CJK keep-all with both hangs',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:first last!important;word-break:keep-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first last word-break; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-036',
    label: 'Loop AI b10 w36 #036: allow-end letter-spacing',
    idea: 'allow-end + letter-spacing:normal — normalized tracking with end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end letter-spacing; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-037',
    label: 'Loop AI b10 w36 #037: force-end kerning normal',
    idea: 'force-end + font-kerning:normal on FO * leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:force-end!important;font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; force-end kerning normal; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-038',
    label: 'Loop AI b10 w36 #038: first inline span a',
    idea: 'hanging-punctuation:first on span and anchor inline leaves only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject span,foreignObject a{hanging-punctuation:first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; first inline span a; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-039',
    label: 'Loop AI b10 w36 #039: last block p label',
    idea: 'hanging-punctuation:last on block p/label/h* leaves only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject p,foreignObject label,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{hanging-punctuation:last!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; last block p label; hanging-punctuation probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w36-040',
    label: 'Loop AI b10 w36 #040: allow-end force-end text-edge',
    idea: 'allow-end force-end + text-edge:cap alphabetic — edge model + end hang',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF + 'foreignObject *{hanging-punctuation:allow-end force-end!important;text-edge:cap alphabetic!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w36; allow-end force-end text-edge; hanging-punctuation probe — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

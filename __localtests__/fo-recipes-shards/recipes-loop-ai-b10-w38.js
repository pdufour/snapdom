/**
 * Loop AI batch-10 FO recipe shard (worker 38) — text-fix: font-variant-east-asian normal/jis78/jis83.
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
    id: 'loop-ai-b10-w38-001',
    label: 'Loop AI b10 w38 #001: FO root east-asian normal',
    idea: 'font-variant-east-asian:normal on FO root — reset east-asian variant at FO subtree root',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO root east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-002',
    label: 'Loop AI b10 w38 #002: FO * east-asian normal',
    idea: 'font-variant-east-asian:normal on FO * — reset east-asian variant on all FO leaves',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO * east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-003',
    label: 'Loop AI b10 w38 #003: FO root east-asian jis78',
    idea: 'font-variant-east-asian:jis78 on FO root — JIS78 glyph forms at FO subtree root',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO root east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-004',
    label: 'Loop AI b10 w38 #004: FO * east-asian jis78',
    idea: 'font-variant-east-asian:jis78 on FO * — JIS78 glyph forms on all FO leaves',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO * east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-005',
    label: 'Loop AI b10 w38 #005: FO root east-asian jis83',
    idea: 'font-variant-east-asian:jis83 on FO root — JIS83 glyph forms at FO subtree root',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO root east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-006',
    label: 'Loop AI b10 w38 #006: FO * east-asian jis83',
    idea: 'font-variant-east-asian:jis83 on FO * — JIS83 glyph forms on all FO leaves',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO * east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-007',
    label: 'Loop AI b10 w38 #007: FO>div normal + * inherit',
    idea: 'FO>div east-asian normal + * inherit — root normal cascade through FO wrapper chain',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:normal!important}foreignObject *{font-variant-east-asian:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO>div normal + * inherit; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-008',
    label: 'Loop AI b10 w38 #008: FO>div jis78 + * inherit',
    idea: 'FO>div jis78 + * inherit — JIS78 at wrapper with inherit on descendants',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis78!important}foreignObject *{font-variant-east-asian:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO>div jis78 + * inherit; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-009',
    label: 'Loop AI b10 w38 #009: FO>div jis83 + * inherit',
    idea: 'FO>div jis83 + * inherit — JIS83 at wrapper with inherit on descendants',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis83!important}foreignObject *{font-variant-east-asian:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO>div jis83 + * inherit; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-010',
    label: 'Loop AI b10 w38 #010: FO>div normal + div* normal',
    idea: 'FO>div normal + div* normal — explicit normal on wrapper and inner divs',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:normal!important}foreignObject>div *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO>div normal + div* normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-011',
    label: 'Loop AI b10 w38 #011: FO>div jis78 + div* jis78',
    idea: 'FO>div jis78 + div* jis78 — JIS78 on wrapper and inner div subtree',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis78!important}foreignObject>div *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO>div jis78 + div* jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-012',
    label: 'Loop AI b10 w38 #012: FO>div jis83 + div* jis83',
    idea: 'FO>div jis83 + div* jis83 — JIS83 on wrapper and inner div subtree',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis83!important}foreignObject>div *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO>div jis83 + div* jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-013',
    label: 'Loop AI b10 w38 #013: text chain east-asian normal',
    idea: 'font-variant-east-asian:normal on inline text chain only — leaves without FO root override',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; text chain east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-014',
    label: 'Loop AI b10 w38 #014: text chain east-asian jis78',
    idea: 'font-variant-east-asian:jis78 on inline text chain only — JIS78 on p/span/a/label chain',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; text chain east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-015',
    label: 'Loop AI b10 w38 #015: text chain east-asian jis83',
    idea: 'font-variant-east-asian:jis83 on inline text chain only — JIS83 on p/span/a/label chain',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; text chain east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-016',
    label: 'Loop AI b10 w38 #016: FO nav * east-asian normal',
    idea: 'font-variant-east-asian:normal on FO nav * — nav flex subtree normal reset',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO nav * east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-017',
    label: 'Loop AI b10 w38 #017: FO nav * east-asian jis78',
    idea: 'font-variant-east-asian:jis78 on FO nav * — JIS78 inside nav flex row',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO nav * east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-018',
    label: 'Loop AI b10 w38 #018: FO nav a east-asian jis83',
    idea: 'font-variant-east-asian:jis83 on FO nav a — JIS83 on nav anchor text leaves',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{font-variant-east-asian:jis83!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO nav a east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-019',
    label: 'Loop AI b10 w38 #019: FO nav normal + nav a jis78',
    idea: 'FO nav normal + nav a jis78 — nav container normal, anchors JIS78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{font-variant-east-asian:normal!important}foreignObject nav a{font-variant-east-asian:jis78!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO nav normal + nav a jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-020',
    label: 'Loop AI b10 w38 #020: FO span east-asian normal',
    idea: 'font-variant-east-asian:normal on FO span — inline span normal reset',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO span east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-021',
    label: 'Loop AI b10 w38 #021: FO span east-asian jis78',
    idea: 'font-variant-east-asian:jis78 on FO span — inline span JIS78 probe',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:jis78!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO span east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-022',
    label: 'Loop AI b10 w38 #022: FO span east-asian jis83',
    idea: 'font-variant-east-asian:jis83 on FO span — inline span JIS83 probe',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{font-variant-east-asian:jis83!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO span east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-023',
    label: 'Loop AI b10 w38 #023: FO header * east-asian normal',
    idea: 'font-variant-east-asian:normal on FO header * — header subtree normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject header *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO header * east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-024',
    label: 'Loop AI b10 w38 #024: FO main * east-asian jis78',
    idea: 'font-variant-east-asian:jis78 on FO main * — main content JIS78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject main *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO main * east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-025',
    label: 'Loop AI b10 w38 #025: FO section * east-asian jis83',
    idea: 'font-variant-east-asian:jis83 on FO section * — section subtree JIS83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject section *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; FO section * east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-026',
    label: 'Loop AI b10 w38 #026: kerning + FO * east-asian normal',
    idea: 'Chromium font-kerning:normal + font-variant-east-asian:normal on FO * — kerning + east-asian reset',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; kerning + FO * east-asian normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-027',
    label: 'Loop AI b10 w38 #027: kerning + FO * east-asian jis78',
    idea: 'Chromium font-kerning:normal + font-variant-east-asian:jis78 on FO * — kerning + JIS78',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; kerning + FO * east-asian jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-028',
    label: 'Loop AI b10 w38 #028: kerning + FO * east-asian jis83',
    idea: 'Chromium font-kerning:normal + font-variant-east-asian:jis83 on FO * — kerning + JIS83',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis83!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; kerning + FO * east-asian jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-029',
    label: 'Loop AI b10 w38 #029: contents div + * jis78',
    idea: 'FO>div display:contents + * jis78 — skip wrapper box, JIS78 on flattened leaves',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject>div *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; contents div + * jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-030',
    label: 'Loop AI b10 w38 #030: div normal div jis83 span inherit',
    idea: 'FO>div normal + div>div jis83 + span inherit — layered east-asian cascade',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:normal!important}foreignObject>div>div{font-variant-east-asian:jis83!important}foreignObject span{font-variant-east-asian:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; div normal div jis83 span inherit; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-031',
    label: 'Loop AI b10 w38 #031: div jis78 + a normal',
    idea: 'FO>div jis78 + FO a normal — wrapper JIS78, anchors explicit normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis78!important}foreignObject a{font-variant-east-asian:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; div jis78 + a normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-032',
    label: 'Loop AI b10 w38 #032: div normal span jis83 inherit',
    idea: 'FO>div normal + span jis83 + span * inherit — span subtree JIS83 chain',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:normal!important}foreignObject span{font-variant-east-asian:jis83!important;display:inline!important}foreignObject span *{font-variant-east-asian:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,

    notes: 'Loop AI b10 w38; div normal span jis83 inherit; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-033',
    label: 'Loop AI b10 w38 #033: pin lh + FO * normal',
    idea: 'h2-pin-line-height-from-live + font-variant-east-asian:normal on FO * — strut pin + normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w38; pin lh + FO * normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-034',
    label: 'Loop AI b10 w38 #034: pin lh + FO * jis78',
    idea: 'h2-pin-line-height-from-live + font-variant-east-asian:jis78 on FO * — strut pin + JIS78',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w38; pin lh + FO * jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-035',
    label: 'Loop AI b10 w38 #035: pin lh + FO * jis83',
    idea: 'h2-pin-line-height-from-live + font-variant-east-asian:jis83 on FO * — strut pin + JIS83',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis83!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w38; pin lh + FO * jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-036',
    label: 'Loop AI b10 w38 #036: stretch leaf + nav jis78',
    idea: 'h2-flex-stretch-leaf-from-live + FO nav * jis78 — cross-axis pin + nav JIS78',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav *{font-variant-east-asian:jis78!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w38; stretch leaf + nav jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-037',
    label: 'Loop AI b10 w38 #037: stretch leaf + div normal a jis83',
    idea: 'h2-flex-stretch-leaf-from-live + FO>div normal + FO a jis83 — stretch + anchor JIS83',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:normal!important}foreignObject a{font-variant-east-asian:jis83!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w38; stretch leaf + div normal a jis83; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-038',
    label: 'Loop AI b10 w38 #038: pin width + FO * normal',
    idea: 'h2-pin-width-from-live + font-variant-east-asian:normal on FO * — width pin + normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b10 w38; pin width + FO * normal; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-039',
    label: 'Loop AI b10 w38 #039: decode-interval + FO * jis78',
    idea: 'decode-interval raster + font-variant-east-asian:jis78 on FO * — decode timing + JIS78',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{font-variant-east-asian:jis78!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w38; decode-interval + FO * jis78; font-variant-east-asian probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w38-040',
    label: 'Loop AI b10 w38 #040: pin lh + div jis83 span normal',
    idea: 'h2-pin-line-height-from-live + FO>div jis83 + span normal — pin + layered east-asian',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{font-variant-east-asian:jis83!important}foreignObject span{font-variant-east-asian:normal!important;display:inline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w38; pin lh + div jis83 span normal; font-variant-east-asian probe — no text bypass.',
  }
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

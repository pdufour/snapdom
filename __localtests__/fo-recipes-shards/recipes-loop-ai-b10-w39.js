/**
 * Loop AI batch-10 FO recipe shard (worker 39) — text-fix: text-justify auto/inter-word + text-indent 0.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w39-001',
    label: 'Loop AI b10 w39 #001: inter-word + indent 0 on *',
    idea: 'text-justify:inter-word + text-indent:0 on FO * — justification policy + first-line indent reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; inter-word + indent 0 on *; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-002',
    label: 'Loop AI b10 w39 #002: auto justify + indent 0 on *',
    idea: 'text-justify:auto + text-indent:0 on FO * — engine default justification vs explicit inter-word',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:auto!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; auto justify + indent 0 on *; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-003',
    label: 'Loop AI b10 w39 #003: FO root auto + * inter-word indent 0',
    idea: 'text-justify:auto on FO root + inter-word + indent 0 on descendants — root vs leaf policy split',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{text-justify:auto!important}' +
      'foreignObject *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; FO root auto + * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-004',
    label: 'Loop AI b10 w39 #004: FO root inter-word + * auto indent 0',
    idea: 'text-justify:inter-word on FO root + auto + indent 0 on FO * — inverted root/leaf justify cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{text-justify:inter-word!important}' +
      'foreignObject *{text-justify:auto!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; FO root inter-word + * auto indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-005',
    label: 'Loop AI b10 w39 #005: inter-character + indent 0',
    idea: 'text-justify:inter-character + text-indent:0 on FO * — CJK/inter-char justification vs inter-word',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-character!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; inter-character + indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-006',
    label: 'Loop AI b10 w39 #006: justify none + indent 0',
    idea: 'text-justify:none + text-indent:0 on FO * — disable justification expansion in FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:none!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; justify none + indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-007',
    label: 'Loop AI b10 w39 #007: inter-word + indent 0%',
    idea: 'text-justify:inter-word + text-indent:0% on FO * — percentage indent reset vs px zero',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-word!important;text-indent:0%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; inter-word + indent 0%; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-008',
    label: 'Loop AI b10 w39 #008: auto justify + indent initial',
    idea: 'text-justify:auto + text-indent:initial on FO * — UA initial indent vs explicit zero',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:auto!important;text-indent:initial!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; auto justify + indent initial; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-009',
    label: 'Loop AI b10 w39 #009: inter-word + indent unset',
    idea: 'text-justify:inter-word + text-indent:unset on FO * — inherited indent cleared via unset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-word!important;text-indent:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; inter-word + indent unset; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-010',
    label: 'Loop AI b10 w39 #010: auto justify + indent revert',
    idea: 'text-justify:auto + text-indent:revert on FO * — cascade revert on first-line indent',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:auto!important;text-indent:revert!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; auto justify + indent revert; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-011',
    label: 'Loop AI b10 w39 #011: FO>div indent 0 + * inter-word',
    idea: 'text-indent:0 on FO>div + text-justify:inter-word on FO>div * — wrapper indent reset then leaf justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:0!important}' +
      'foreignObject>div *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; FO>div indent 0 + * inter-word; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-012',
    label: 'Loop AI b10 w39 #012: FO>div auto + div* indent 0',
    idea: 'text-justify:auto on FO>div + text-indent:0 on FO>div * — wrapper justify policy on div chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-justify:auto!important}' +
      'foreignObject>div *{text-indent:0!important;text-justify:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; FO>div auto + div* indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-013',
    label: 'Loop AI b10 w39 #013: span inter-word + indent 0',
    idea: 'text-justify:inter-word + text-indent:0 on FO span only — inline text leaf justify/indent',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-justify:inter-word!important;text-indent:0!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; span inter-word + indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-014',
    label: 'Loop AI b10 w39 #014: anchor auto + indent 0 baseline',
    idea: 'text-justify:auto + text-indent:0 on FO a with baseline valign — nav anchor justify probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{text-justify:auto!important;text-indent:0!important;' +
      'vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; anchor auto + indent 0 baseline; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-015',
    label: 'Loop AI b10 w39 #015: p inter-word + indent 0 margin 0',
    idea: 'text-justify:inter-word + text-indent:0 on FO p with margin 0 — block paragraph first-line',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{text-justify:inter-word!important;text-indent:0!important;margin:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; p inter-word + indent 0 margin 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-016',
    label: 'Loop AI b10 w39 #016: label auto + indent 0',
    idea: 'text-justify:auto + text-indent:0 on FO label — form label first-line indent vs justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{text-justify:auto!important;text-indent:0!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; label auto + indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-017',
    label: 'Loop AI b10 w39 #017: nav * inter-word indent 0 flex',
    idea: 'text-justify:inter-word + text-indent:0 on FO nav * with flex baseline — nav row justify probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav{display:flex!important;align-items:baseline!important}' +
      'foreignObject nav *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; nav * inter-word indent 0 flex; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-018',
    label: 'Loop AI b10 w39 #018: nested div indent 0 + * inter-word',
    idea: 'text-indent:0 on FO>div>div + inter-word on descendants — nested wrapper indent chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>div{text-indent:0!important}' +
      'foreignObject>div>div *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; nested div indent 0 + * inter-word; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-019',
    label: 'Loop AI b10 w39 #019: text-align justify + inter-word indent 0',
    idea: 'text-align:justify + text-justify:inter-word + text-indent:0 on FO * — aligned justify stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-align:justify!important;text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; text-align justify + inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-020',
    label: 'Loop AI b10 w39 #020: text-align start + auto justify indent 0',
    idea: 'text-align:start + text-justify:auto + text-indent:0 on FO * — start alignment vs justify policy',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-align:start!important;text-justify:auto!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; text-align start + auto justify indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-021',
    label: 'Loop AI b10 w39 #021: text-align-last auto + inter-word indent 0',
    idea: 'text-align-last:auto + text-justify:inter-word + text-indent:0 on FO * — last line vs body justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-align-last:auto!important;text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; text-align-last auto + inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-022',
    label: 'Loop AI b10 w39 #022: hanging-punctuation + inter-word indent 0',
    idea: 'hanging-punctuation:allow-end + text-justify:inter-word + text-indent:0 on FO * — punctuation hang vs indent',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{hanging-punctuation:allow-end!important;text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; hanging-punctuation + inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-023',
    label: 'Loop AI b10 w39 #023: Chromium kerning + inter-word indent 0',
    idea: 'font-kerning:normal on FO + text-justify:inter-word + text-indent:0 on FO * — Chromium copy + justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
      'foreignObject *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; Chromium kerning + inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-024',
    label: 'Loop AI b10 w39 #024: FO>div indent 0 + span auto justify',
    idea: 'text-indent:0 on FO>div + text-justify:auto on FO span — wrapper indent + inline auto justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:0!important}' +
      'foreignObject span{text-justify:auto!important;text-indent:0!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; FO>div indent 0 + span auto justify; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-025',
    label: 'Loop AI b10 w39 #025: header * inter-word indent 0',
    idea: 'text-justify:inter-word + text-indent:0 on FO header * — header text justify/indent cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; header * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-026',
    label: 'Loop AI b10 w39 #026: main * auto justify indent 0',
    idea: 'text-justify:auto + text-indent:0 on FO main * — main content justify policy',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject main *{text-justify:auto!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; main * auto justify indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-027',
    label: 'Loop AI b10 w39 #027: section * inter-word indent 0',
    idea: 'text-justify:inter-word + text-indent:0 on FO section * — section block justify probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject section *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; section * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-028',
    label: 'Loop AI b10 w39 #028: article p inter-word indent 0',
    idea: 'text-justify:inter-word + text-indent:0 on FO article p — article paragraph first-line',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject article p{text-justify:inter-word!important;text-indent:0!important;margin:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; article p inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-029',
    label: 'Loop AI b10 w39 #029: form label auto indent 0',
    idea: 'text-justify:auto + text-indent:0 on FO form label — form field label justify probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject form label{text-justify:auto!important;text-indent:0!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; form label auto indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-030',
    label: 'Loop AI b10 w39 #030: FO>div contents + * inter-word indent 0',
    idea: 'FO>div display:contents + text-justify:inter-word + text-indent:0 on FO>div * — flat wrapper justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{display:contents!important}' +
      'foreignObject>div *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w39; FO>div contents + * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-031',
    label: 'Loop AI b10 w39 #031: pin lh + * inter-word indent 0',
    idea: 'h2 pin line-height + text-justify:inter-word + text-indent:0 on FO * — pinned lh with justify reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w39; pin lh + * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-032',
    label: 'Loop AI b10 w39 #032: pin lh + * auto justify indent 0',
    idea: 'h2 pin line-height + text-justify:auto + text-indent:0 on FO * — pinned lh with auto justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:auto!important;text-indent:0!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w39; pin lh + * auto justify indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-033',
    label: 'Loop AI b10 w39 #033: stretch leaf + * inter-word indent 0',
    idea: 'h2 stretch leaf + text-justify:inter-word + text-indent:0 on FO * — flex stretch with justify reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-word!important;text-indent:0!important;' +
      'align-self:flex-start!important;height:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w39; stretch leaf + * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-034',
    label: 'Loop AI b10 w39 #034: stretch leaf + nav a auto indent 0',
    idea: 'h2 stretch leaf + text-justify:auto + text-indent:0 on FO nav a — nav anchor justify under stretch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{text-justify:auto!important;text-indent:0!important;' +
      'display:inline!important;vertical-align:baseline!important;align-self:flex-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w39; stretch leaf + nav a auto indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-035',
    label: 'Loop AI b10 w39 #035: pin width + * inter-word indent 0',
    idea: 'h2 pin width + text-justify:inter-word + text-indent:0 on FO * — width pin with justify/indent',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b10 w39; pin width + * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-036',
    label: 'Loop AI b10 w39 #036: pin lh + FO>div indent 0 * inter-word',
    idea: 'h2 pin lh + text-indent:0 on FO>div + inter-word on FO>div * — wrapper indent under pin lh',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-indent:0!important}' +
      'foreignObject>div *{text-justify:inter-word!important;text-indent:0!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w39; pin lh + FO>div indent 0 * inter-word; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-037',
    label: 'Loop AI b10 w39 #037: stretch + FO>div auto div* indent 0',
    idea: 'h2 stretch leaf + text-justify:auto on FO>div + text-indent:0 on FO>div * — stretch wrapper justify',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{text-justify:auto!important;align-self:flex-start!important}' +
      'foreignObject>div *{text-indent:0!important;text-justify:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w39; stretch + FO>div auto div* indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-038',
    label: 'Loop AI b10 w39 #038: pin lh + span inter-word indent 0',
    idea: 'h2 pin lh + text-justify:inter-word + text-indent:0 on FO span — inline span justify under pin lh',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{text-justify:inter-word!important;text-indent:0!important;display:inline!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w39; pin lh + span inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-039',
    label: 'Loop AI b10 w39 #039: stretch + header * inter-word indent 0',
    idea: 'h2 stretch leaf + text-justify:inter-word + text-indent:0 on FO header * — header justify under stretch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject header *{text-justify:inter-word!important;text-indent:0!important;' +
      'align-self:flex-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w39; stretch + header * inter-word indent 0; justify/indent probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w39-040',
    label: 'Loop AI b10 w39 #040: pin lh + inter-character indent 0 text-box',
    idea: 'h2 pin lh + text-justify:inter-character + text-indent:0 + text-box-edge on FO * — full justify stack',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-justify:inter-character!important;text-indent:0!important;' +
      'text-box-edge:cap alphabetic!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w39; pin lh + inter-character indent 0 text-box; justify/indent probe — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

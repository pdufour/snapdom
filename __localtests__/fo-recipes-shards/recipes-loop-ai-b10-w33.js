/**
 * Loop AI batch-10 FO recipe shard (worker 33) — text-fix: ruby-position over/under + ruby-align.
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
    id: 'loop-ai-b10-w33-001',
    label: 'Loop AI b10 w33 #001: * ruby-position over align start',
    idea: 'ruby-position:over + ruby-align:start on FO * — global ruby annotation stack above base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * over + align start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-002',
    label: 'Loop AI b10 w33 #002: * ruby-position over align center',
    idea: 'ruby-position:over + ruby-align:center on FO * — global ruby annotation stack above base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * over + align center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-003',
    label: 'Loop AI b10 w33 #003: * ruby-position over align space-between',
    idea: 'ruby-position:over + ruby-align:space-between on FO * — global ruby annotation stack above base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * over + align space-between; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-004',
    label: 'Loop AI b10 w33 #004: * ruby-position over align space-around',
    idea: 'ruby-position:over + ruby-align:space-around on FO * — global ruby annotation stack above base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * over + align space-around; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-005',
    label: 'Loop AI b10 w33 #005: * ruby-position over align distribute-letter',
    idea: 'ruby-position:over + ruby-align:distribute-letter on FO * — global ruby annotation stack above base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * over + align distribute-letter; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-006',
    label: 'Loop AI b10 w33 #006: * ruby-position over align distribute-space',
    idea: 'ruby-position:over + ruby-align:distribute-space on FO * — global ruby annotation stack above base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * over + align distribute-space; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-007',
    label: 'Loop AI b10 w33 #007: * ruby-position under align start',
    idea: 'ruby-position:under + ruby-align:start on FO * — global ruby annotation stack below base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * under + align start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-008',
    label: 'Loop AI b10 w33 #008: * ruby-position under align center',
    idea: 'ruby-position:under + ruby-align:center on FO * — global ruby annotation stack below base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * under + align center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-009',
    label: 'Loop AI b10 w33 #009: * ruby-position under align space-between',
    idea: 'ruby-position:under + ruby-align:space-between on FO * — global ruby annotation stack below base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * under + align space-between; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-010',
    label: 'Loop AI b10 w33 #010: * ruby-position under align space-around',
    idea: 'ruby-position:under + ruby-align:space-around on FO * — global ruby annotation stack below base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * under + align space-around; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-011',
    label: 'Loop AI b10 w33 #011: * ruby-position under align distribute-letter',
    idea: 'ruby-position:under + ruby-align:distribute-letter on FO * — global ruby annotation stack below base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * under + align distribute-letter; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-012',
    label: 'Loop AI b10 w33 #012: * ruby-position under align distribute-space',
    idea: 'ruby-position:under + ruby-align:distribute-space on FO * — global ruby annotation stack below base text',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; * under + align distribute-space; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-013',
    label: 'Loop AI b10 w33 #013: span ruby over center collapse',
    idea: 'display:ruby + ruby-position:over + ruby-align:center + ruby-merge:collapse on FO span',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:center!important;ruby-merge:collapse!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; span over center collapse; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-014',
    label: 'Loop AI b10 w33 #014: span ruby under start separate',
    idea: 'display:ruby + ruby-position:under + ruby-align:start + ruby-merge:separate on FO span',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:under!important;ruby-align:start!important;ruby-merge:separate!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; span under start separate; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-015',
    label: 'Loop AI b10 w33 #015: ruby element over space-between',
    idea: 'ruby-position:over + ruby-align:space-between on FO ruby elements',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:space-between!important;display:ruby!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; ruby element over space-between; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-016',
    label: 'Loop AI b10 w33 #016: ruby element under distribute-letter',
    idea: 'ruby-position:under + ruby-align:distribute-letter on FO ruby elements',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:under!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; ruby element under distribute-letter; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-017',
    label: 'Loop AI b10 w33 #017: rt over center',
    idea: 'ruby-position:over + ruby-align:center on FO rt annotation boxes',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:center!important;font-size:0.65em!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; rt over center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-018',
    label: 'Loop AI b10 w33 #018: rb under start',
    idea: 'ruby-position:under + ruby-align:start on FO rb base containers',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; rb under start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-019',
    label: 'Loop AI b10 w33 #019: p display ruby over space-around',
    idea: 'display:ruby on FO p + ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject p{display:ruby!important;ruby-position:over!important;ruby-align:space-around!important;margin:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; p ruby over space-around; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-020',
    label: 'Loop AI b10 w33 #020: a display ruby under distribute-space',
    idea: 'display:ruby on FO anchors + ruby-position:under + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:ruby!important;ruby-position:under!important;ruby-align:distribute-space!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; a ruby under distribute-space; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-021',
    label: 'Loop AI b10 w33 #021: text chain ruby over start',
    idea: 'display:ruby + ruby-position:over + ruby-align:start on FO inline text chain only',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{display:ruby!important;ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; text chain over start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-022',
    label: 'Loop AI b10 w33 #022: text chain ruby under center',
    idea: 'display:ruby + ruby-position:under + ruby-align:center on FO inline text chain only',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{display:ruby!important;ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; text chain under center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-023',
    label: 'Loop AI b10 w33 #023: span vertical-rl ruby over center',
    idea: 'writing-mode:vertical-rl + display:ruby + ruby-position:over + ruby-align:center on FO span',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{writing-mode:vertical-rl!important;display:ruby!important;ruby-position:over!important;ruby-align:center!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; span vertical-rl over center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-024',
    label: 'Loop AI b10 w33 #024: span vertical-rl ruby under start',
    idea: 'writing-mode:vertical-rl + display:ruby + ruby-position:under + ruby-align:start on FO span',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{writing-mode:vertical-rl!important;display:ruby!important;ruby-position:under!important;ruby-align:start!important;text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; span vertical-rl under start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-025',
    label: 'Loop AI b10 w33 #025: span inter-character ruby center',
    idea: 'ruby-position:inter-character + ruby-align:center on FO span in vertical flow',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{writing-mode:vertical-rl!important;display:ruby!important;ruby-position:inter-character!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; span inter-character center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-026',
    label: 'Loop AI b10 w33 #026: ruby-base over center',
    idea: 'display:ruby-base + ruby-position:over + ruby-align:center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:ruby-base!important;ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; ruby-base over center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-027',
    label: 'Loop AI b10 w33 #027: ruby-text under space-between',
    idea: 'display:ruby-text + ruby-position:under + ruby-align:space-between on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{display:ruby-text!important;ruby-position:under!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; ruby-text under space-between; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-028',
    label: 'Loop AI b10 w33 #028: FO>div * ruby over distribute-letter',
    idea: 'FO>div wrapper + ruby-position:over + ruby-align:distribute-letter on descendant leaves',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{ruby-position:over!important;ruby-align:center!important}foreignObject>div *{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; FO>div * over distribute-letter; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-029',
    label: 'Loop AI b10 w33 #029: span ruby over + line-height normal',
    idea: 'display:ruby + ruby-position:over + ruby-align:center + line-height:normal on FO span',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:center!important;ruby-merge:separate!important;writing-mode:horizontal-tb!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; span over center + lh normal; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-030',
    label: 'Loop AI b10 w33 #030: display contents span ruby under',
    idea: 'FO>div display:contents + span display:ruby + ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{display:contents!important}foreignObject span{display:ruby!important;ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w33; display contents span under start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-031',
    label: 'Loop AI b10 w33 #031: pin lh + span ruby over center',
    idea: 'h2-pin-line-height-from-live + display:ruby span ruby-position:over ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:center!important;ruby-merge:collapse!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w33; pin lh + span ruby over center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-032',
    label: 'Loop AI b10 w33 #032: pin lh + * ruby under start',
    idea: 'h2-pin-line-height-from-live + ruby-position:under + ruby-align:start on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:start!important;line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w33; pin lh + * ruby under start; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-033',
    label: 'Loop AI b10 w33 #033: pin lh + span ruby under distribute-space',
    idea: 'h2-pin-line-height-from-live + span ruby under distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:under!important;ruby-align:distribute-space!important;ruby-merge:separate!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w33; pin lh + span ruby under distribute-space; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-034',
    label: 'Loop AI b10 w33 #034: stretch leaf + span ruby over center',
    idea: 'h2-flex-stretch-leaf-from-live + span display:ruby over center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:center!important;ruby-merge:separate!important;writing-mode:horizontal-tb!important;align-self:flex-start!important;height:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w33; stretch leaf + span ruby over center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-035',
    label: 'Loop AI b10 w33 #035: stretch leaf + * ruby under center',
    idea: 'h2-flex-stretch-leaf-from-live + ruby-position:under ruby-align:center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:center!important;align-self:flex-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w33; stretch leaf + * ruby under center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-036',
    label: 'Loop AI b10 w33 #036: stretch leaf + text chain ruby over',
    idea: 'h2-flex-stretch-leaf-from-live + text chain display:ruby over start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{display:ruby!important;ruby-position:over!important;ruby-align:start!important;align-self:flex-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w33; stretch leaf + text chain ruby over; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-037',
    label: 'Loop AI b10 w33 #037: pin width + span ruby over center',
    idea: 'h2-pin-width-from-live + span display:ruby over center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:center!important;ruby-merge:collapse!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b10 w33; pin width + span ruby over center; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-038',
    label: 'Loop AI b10 w33 #038: pin lh + a ruby under space-between',
    idea: 'h2-pin-line-height-from-live + anchor display:ruby under space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{display:ruby!important;ruby-position:under!important;ruby-align:space-between!important;line-height:inherit!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w33; pin lh + a ruby under space-between; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-039',
    label: 'Loop AI b10 w33 #039: stretch leaf + ruby element over distribute-letter',
    idea: 'h2-flex-stretch-leaf-from-live + FO ruby over distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w33; stretch leaf + ruby element over distribute-letter; ruby-position/align FO text — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w33-040',
    label: 'Loop AI b10 w33 #040: pin lh + * ruby over center text-box',
    idea: 'h2-pin-line-height-from-live + * ruby over center + text-box-edge cap alphabetic',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:center!important;text-box-edge:cap alphabetic!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w33; pin lh + * ruby over center text-box; ruby-position/align FO text — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 11) — text-fix: line-height from-font cascade on wrapper chains.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w11-001',
    label: 'Loop AI b10 w11 #001: FO>div from-font + * inherit',
    idea: 'FO>div from-font + * inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + * inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-002',
    label: 'Loop AI b10 w11 #002: FO>div from-font + div* inherit',
    idea: 'FO>div from-font + div* inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div* inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-003',
    label: 'Loop AI b10 w11 #003: FO>div normal + div* from-font',
    idea: 'FO>div normal + div* from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div normal + div* from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-004',
    label: 'Loop AI b10 w11 #004: FO>div unset + * from-font',
    idea: 'FO>div unset + * from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:unset!important}foreignObject *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div unset + * from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-005',
    label: 'Loop AI b10 w11 #005: FO>div revert + div* from-font',
    idea: 'FO>div revert + div* from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:revert!important}foreignObject>div *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div revert + div* from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-006',
    label: 'Loop AI b10 w11 #006: FO>div initial + * inherit',
    idea: 'FO>div initial + * inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:initial!important}foreignObject *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div initial + * inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-007',
    label: 'Loop AI b10 w11 #007: FO>div from-font + span inherit',
    idea: 'FO>div from-font + span inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject span{line-height:inherit!important;display:inline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + span inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-008',
    label: 'Loop AI b10 w11 #008: FO>div from-font + a inherit baseline',
    idea: 'FO>div from-font + a inherit baseline — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject a{line-height:inherit!important;vertical-align:baseline!important;display:inline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + a inherit baseline; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-009',
    label: 'Loop AI b10 w11 #009: FO>div from-font + label inherit',
    idea: 'FO>div from-font + label inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject label{line-height:inherit!important;display:inline-block!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + label inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-010',
    label: 'Loop AI b10 w11 #010: FO>div from-font + p inherit',
    idea: 'FO>div from-font + p inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject p{line-height:inherit!important;margin:0!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + p inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-011',
    label: 'Loop AI b10 w11 #011: FO>div normal + div>div from-font',
    idea: 'FO>div normal + div>div from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div normal + div>div from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-012',
    label: 'Loop AI b10 w11 #012: FO>div from-font + div>div inherit',
    idea: 'FO>div from-font + div>div inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div>div{line-height:inherit!important}foreignObject>div>div *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>div inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-013',
    label: 'Loop AI b10 w11 #013: FO>div from-font + div>div normal + span from-font',
    idea: 'FO>div from-font + div>div normal + span from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div>div{line-height:normal!important}foreignObject span{line-height:from-font!important;display:inline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>div normal + span from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-014',
    label: 'Loop AI b10 w11 #014: FO>div unset + div>div from-font + * unset',
    idea: 'FO>div unset + div>div from-font + * unset — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:unset!important}foreignObject>div>div{line-height:from-font!important}foreignObject>div>div *{line-height:unset!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div unset + div>div from-font + * unset; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-015',
    label: 'Loop AI b10 w11 #015: FO>div from-font + div>div>span inherit',
    idea: 'FO>div from-font + div>div>span inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div>div{line-height:inherit!important}foreignObject>div>div span{line-height:inherit!important;display:inline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>div>span inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-016',
    label: 'Loop AI b10 w11 #016: FO>div from-font + div>nav from-font',
    idea: 'FO>div from-font + div>nav from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div nav{line-height:from-font!important;display:flex!important;align-items:baseline!important}foreignObject>div nav *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>nav from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-017',
    label: 'Loop AI b10 w11 #017: FO>div normal + div>header from-font',
    idea: 'FO>div normal + div>header from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:normal!important}foreignObject>div header{line-height:from-font!important}foreignObject>div header *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div normal + div>header from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-018',
    label: 'Loop AI b10 w11 #018: FO>div from-font + div>main from-font',
    idea: 'FO>div from-font + div>main from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div main{line-height:from-font!important}foreignObject>div main *{line-height:inherit!important;vertical-align:baseline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>main from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-019',
    label: 'Loop AI b10 w11 #019: FO>div from-font + div>section from-font',
    idea: 'FO>div from-font + div>section from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div section{line-height:from-font!important}foreignObject>div section *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>section from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-020',
    label: 'Loop AI b10 w11 #020: FO>div from-font + div>footer inherit chain',
    idea: 'FO>div from-font + div>footer inherit chain — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div footer{line-height:inherit!important}foreignObject>div footer *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div from-font + div>footer inherit chain; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-021',
    label: 'Loop AI b10 w11 #021: FO nav from-font + nav * inherit',
    idea: 'FO nav from-font + nav * inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject nav{line-height:from-font!important;display:flex!important;align-items:baseline!important}foreignObject nav *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO nav from-font + nav * inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-022',
    label: 'Loop AI b10 w11 #022: FO nav normal + nav a from-font',
    idea: 'FO nav normal + nav a from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject nav{line-height:normal!important}foreignObject nav a{line-height:from-font!important;display:inline!important;vertical-align:baseline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO nav normal + nav a from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-023',
    label: 'Loop AI b10 w11 #023: FO header from-font + header * inherit',
    idea: 'FO header from-font + header * inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject header{line-height:from-font!important}foreignObject header *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO header from-font + header * inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-024',
    label: 'Loop AI b10 w11 #024: FO main from-font + main * from-font',
    idea: 'FO main from-font + main * from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject main{line-height:from-font!important}foreignObject main *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO main from-font + main * from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-025',
    label: 'Loop AI b10 w11 #025: FO section unset + section * from-font',
    idea: 'FO section unset + section * from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject section{line-height:unset!important}foreignObject section *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO section unset + section * from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-026',
    label: 'Loop AI b10 w11 #026: FO article from-font + article p inherit',
    idea: 'FO article from-font + article p inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject article{line-height:from-font!important}foreignObject article p{line-height:inherit!important;margin:0!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO article from-font + article p inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-027',
    label: 'Loop AI b10 w11 #027: FO aside from-font + aside span inherit',
    idea: 'FO aside from-font + aside span inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject aside{line-height:from-font!important}foreignObject aside span{line-height:inherit!important;display:inline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO aside from-font + aside span inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-028',
    label: 'Loop AI b10 w11 #028: FO form from-font + form label inherit',
    idea: 'FO form from-font + form label inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject form{line-height:from-font!important}foreignObject form label{line-height:inherit!important;display:inline-block!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO form from-font + form label inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-029',
    label: 'Loop AI b10 w11 #029: FO ul from-font + ul li inherit',
    idea: 'FO ul from-font + ul li inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject ul{line-height:from-font!important;list-style:none!important;padding:0!important;margin:0!important}foreignObject ul li{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO ul from-font + ul li inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-030',
    label: 'Loop AI b10 w11 #030: FO>div display contents + div* from-font',
    idea: 'FO>div display contents + div* from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{display:contents!important}foreignObject>div *{line-height:from-font!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w11; FO>div display contents + div* from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-031',
    label: 'Loop AI b10 w11 #031: pin lh + FO>div from-font div* inherit',
    idea: 'pin lh + FO>div from-font div* inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:inherit!important}",
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w11; pin lh + FO>div from-font div* inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-032',
    label: 'Loop AI b10 w11 #032: pin lh + FO>div normal div* from-font',
    idea: 'pin lh + FO>div normal div* from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}",
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w11; pin lh + FO>div normal div* from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-033',
    label: 'Loop AI b10 w11 #033: pin lh + FO>div from-font span unset',
    idea: 'pin lh + FO>div from-font span unset — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject span{line-height:unset!important;display:inline!important}",
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w11; pin lh + FO>div from-font span unset; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-034',
    label: 'Loop AI b10 w11 #034: stretch leaf + FO>div from-font div* inherit',
    idea: 'stretch leaf + FO>div from-font div* inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:inherit!important;align-self:flex-start!important;height:auto!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w11; stretch leaf + FO>div from-font div* inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-035',
    label: 'Loop AI b10 w11 #035: stretch leaf + FO>div normal div* from-font',
    idea: 'stretch leaf + FO>div normal div* from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important;vertical-align:baseline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w11; stretch leaf + FO>div normal div* from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-036',
    label: 'Loop AI b10 w11 #036: stretch leaf + FO nav from-font nav* inherit',
    idea: 'stretch leaf + FO nav from-font nav* inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject nav{line-height:from-font!important;display:flex!important;align-items:stretch!important}foreignObject nav *{line-height:inherit!important;align-self:flex-start!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w11; stretch leaf + FO nav from-font nav* inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-037',
    label: 'Loop AI b10 w11 #037: pin width + FO>div from-font * inherit',
    idea: 'pin width + FO>div from-font * inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject *{line-height:inherit!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b10 w11; pin width + FO>div from-font * inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-038',
    label: 'Loop AI b10 w11 #038: pin lh + FO>div>div from-font + span inherit',
    idea: 'pin lh + FO>div>div from-font + span inherit — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject>div>div{line-height:from-font!important}foreignObject span{line-height:inherit!important;display:inline!important}",
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w11; pin lh + FO>div>div from-font + span inherit; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-039',
    label: 'Loop AI b10 w11 #039: stretch leaf + FO>div from-font + a from-font',
    idea: 'stretch leaf + FO>div from-font + a from-font — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:from-font!important}foreignObject a{line-height:from-font!important;display:inline!important;vertical-align:baseline!important}",
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b10 w11; stretch leaf + FO>div from-font + a from-font; lh from-font wrapper cascade — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w11-040',
    label: 'Loop AI b10 w11 #040: pin lh + FO>div revert div* from-font text-box',
    idea: 'pin lh + FO>div revert div* from-font text-box — font-metrics line-height cascade through FO wrapper chain before raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      "foreignObject>div{line-height:revert!important}foreignObject>div *{line-height:from-font!important;text-box-edge:normal!important}",
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w11; pin lh + FO>div revert div* from-font text-box; lh from-font wrapper cascade — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

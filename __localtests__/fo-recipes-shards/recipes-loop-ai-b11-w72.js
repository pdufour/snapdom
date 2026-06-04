/**
 * Loop AI batch-11 FO recipe shard (worker 72) — text-fix: ruby-position over/under/inter-character paired with ruby-align keywords
 * 100 recipes: loop-ai-b11-w72-001..100
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
    id: 'loop-ai-b11-w72-001',
    label: 'Loop AI b11 w72 #001: ruby over start on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-002',
    label: 'Loop AI b11 w72 #002: ruby over center on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-003',
    label: 'Loop AI b11 w72 #003: ruby over space-between on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-004',
    label: 'Loop AI b11 w72 #004: ruby over space-around on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-005',
    label: 'Loop AI b11 w72 #005: ruby over distribute-letter on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-006',
    label: 'Loop AI b11 w72 #006: ruby over distribute-space on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-007',
    label: 'Loop AI b11 w72 #007: ruby under start on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-008',
    label: 'Loop AI b11 w72 #008: ruby under center on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-009',
    label: 'Loop AI b11 w72 #009: ruby under space-around on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-010',
    label: 'Loop AI b11 w72 #010: ruby inter-character start on FO *',
    idea: 'ruby position/align on all FO descendants; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-011',
    label: 'Loop AI b11 w72 #011: ruby over start on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:over!important;ruby-align:start!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-012',
    label: 'Loop AI b11 w72 #012: ruby over center on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:over!important;ruby-align:center!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-013',
    label: 'Loop AI b11 w72 #013: ruby over space-between on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:over!important;ruby-align:space-between!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-014',
    label: 'Loop AI b11 w72 #014: ruby over space-around on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:over!important;ruby-align:space-around!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-015',
    label: 'Loop AI b11 w72 #015: ruby over distribute-letter on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:over!important;ruby-align:distribute-letter!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-016',
    label: 'Loop AI b11 w72 #016: ruby over distribute-space on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:over!important;ruby-align:distribute-space!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-017',
    label: 'Loop AI b11 w72 #017: ruby under start on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:under!important;ruby-align:start!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-018',
    label: 'Loop AI b11 w72 #018: ruby under center on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:under!important;ruby-align:center!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-019',
    label: 'Loop AI b11 w72 #019: ruby under space-around on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:under!important;ruby-align:space-around!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-020',
    label: 'Loop AI b11 w72 #020: ruby inter-character start on FO root',
    idea: 'ruby position/align on foreignObject root; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{ruby-position:inter-character!important;ruby-align:start!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (root); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-021',
    label: 'Loop AI b11 w72 #021: ruby over start display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:start!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-022',
    label: 'Loop AI b11 w72 #022: ruby over center display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:center!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-023',
    label: 'Loop AI b11 w72 #023: ruby over space-between display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:space-between!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-024',
    label: 'Loop AI b11 w72 #024: ruby over space-around display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:space-around!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-025',
    label: 'Loop AI b11 w72 #025: ruby over distribute-letter display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:distribute-letter!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-026',
    label: 'Loop AI b11 w72 #026: ruby over distribute-space display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:over!important;ruby-align:distribute-space!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-027',
    label: 'Loop AI b11 w72 #027: ruby under start display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:under!important;ruby-align:start!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-028',
    label: 'Loop AI b11 w72 #028: ruby under center display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:under!important;ruby-align:center!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-029',
    label: 'Loop AI b11 w72 #029: ruby under space-around display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:under!important;ruby-align:space-around!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-030',
    label: 'Loop AI b11 w72 #030: ruby inter-character start display ruby span',
    idea: 'display:ruby on FO span with ruby position/align; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{display:ruby!important;ruby-position:inter-character!important;ruby-align:start!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (span-ruby); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-031',
    label: 'Loop AI b11 w72 #031: ruby over start on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-032',
    label: 'Loop AI b11 w72 #032: ruby over center on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-033',
    label: 'Loop AI b11 w72 #033: ruby over space-between on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-034',
    label: 'Loop AI b11 w72 #034: ruby over space-around on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-035',
    label: 'Loop AI b11 w72 #035: ruby over distribute-letter on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-036',
    label: 'Loop AI b11 w72 #036: ruby over distribute-space on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-037',
    label: 'Loop AI b11 w72 #037: ruby under start on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-038',
    label: 'Loop AI b11 w72 #038: ruby under center on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-039',
    label: 'Loop AI b11 w72 #039: ruby under space-around on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-040',
    label: 'Loop AI b11 w72 #040: ruby inter-character start on FO rt',
    idea: 'ruby position/align on FO rt; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rt{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (rt); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-041',
    label: 'Loop AI b11 w72 #041: ruby over start on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-042',
    label: 'Loop AI b11 w72 #042: ruby over center on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-043',
    label: 'Loop AI b11 w72 #043: ruby over space-between on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-044',
    label: 'Loop AI b11 w72 #044: ruby over space-around on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-045',
    label: 'Loop AI b11 w72 #045: ruby over distribute-letter on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-046',
    label: 'Loop AI b11 w72 #046: ruby over distribute-space on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-047',
    label: 'Loop AI b11 w72 #047: ruby under start on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-048',
    label: 'Loop AI b11 w72 #048: ruby under center on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-049',
    label: 'Loop AI b11 w72 #049: ruby under space-around on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-050',
    label: 'Loop AI b11 w72 #050: ruby inter-character start on FO rb',
    idea: 'ruby position/align on FO rb; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject rb{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (rb); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-051',
    label: 'Loop AI b11 w72 #051: ruby over start on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-052',
    label: 'Loop AI b11 w72 #052: ruby over center on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-053',
    label: 'Loop AI b11 w72 #053: ruby over space-between on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-054',
    label: 'Loop AI b11 w72 #054: ruby over space-around on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-055',
    label: 'Loop AI b11 w72 #055: ruby over distribute-letter on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-056',
    label: 'Loop AI b11 w72 #056: ruby over distribute-space on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-057',
    label: 'Loop AI b11 w72 #057: ruby under start on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-058',
    label: 'Loop AI b11 w72 #058: ruby under center on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-059',
    label: 'Loop AI b11 w72 #059: ruby under space-around on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-060',
    label: 'Loop AI b11 w72 #060: ruby inter-character start on FO ruby',
    idea: 'ruby position/align on FO ruby element; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject ruby{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (ruby-el); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-061',
    label: 'Loop AI b11 w72 #061: ruby over start on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:over!important;ruby-align:start!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-062',
    label: 'Loop AI b11 w72 #062: ruby over center on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:over!important;ruby-align:center!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-063',
    label: 'Loop AI b11 w72 #063: ruby over space-between on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:over!important;ruby-align:space-between!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-064',
    label: 'Loop AI b11 w72 #064: ruby over space-around on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:over!important;ruby-align:space-around!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-065',
    label: 'Loop AI b11 w72 #065: ruby over distribute-letter on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:over!important;ruby-align:distribute-letter!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-066',
    label: 'Loop AI b11 w72 #066: ruby over distribute-space on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:over!important;ruby-align:distribute-space!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-067',
    label: 'Loop AI b11 w72 #067: ruby under start on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:under!important;ruby-align:start!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-068',
    label: 'Loop AI b11 w72 #068: ruby under center on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:under!important;ruby-align:center!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-069',
    label: 'Loop AI b11 w72 #069: ruby under space-around on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:under!important;ruby-align:space-around!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-070',
    label: 'Loop AI b11 w72 #070: ruby inter-character start on FO nav a',
    idea: 'ruby position/align on nav anchors; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{ruby-position:inter-character!important;ruby-align:start!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (nav-a); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-071',
    label: 'Loop AI b11 w72 #071: ruby over start on text chain',
    idea: 'ruby position/align on text chain; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-072',
    label: 'Loop AI b11 w72 #072: ruby over center on text chain',
    idea: 'ruby position/align on text chain; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-073',
    label: 'Loop AI b11 w72 #073: ruby over space-between on text chain',
    idea: 'ruby position/align on text chain; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-074',
    label: 'Loop AI b11 w72 #074: ruby over space-around on text chain',
    idea: 'ruby position/align on text chain; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-075',
    label: 'Loop AI b11 w72 #075: ruby over distribute-letter on text chain',
    idea: 'ruby position/align on text chain; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-076',
    label: 'Loop AI b11 w72 #076: ruby over distribute-space on text chain',
    idea: 'ruby position/align on text chain; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-077',
    label: 'Loop AI b11 w72 #077: ruby under start on text chain',
    idea: 'ruby position/align on text chain; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-078',
    label: 'Loop AI b11 w72 #078: ruby under center on text chain',
    idea: 'ruby position/align on text chain; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-079',
    label: 'Loop AI b11 w72 #079: ruby under space-around on text chain',
    idea: 'ruby position/align on text chain; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-080',
    label: 'Loop AI b11 w72 #080: ruby inter-character start on text chain',
    idea: 'ruby position/align on text chain; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (text-chain); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-081',
    label: 'Loop AI b11 w72 #081: ruby over start on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-start (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-082',
    label: 'Loop AI b11 w72 #082: ruby over center on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-center (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-083',
    label: 'Loop AI b11 w72 #083: ruby over space-between on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-between (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-084',
    label: 'Loop AI b11 w72 #084: ruby over space-around on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-space-around (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-085',
    label: 'Loop AI b11 w72 #085: ruby over distribute-letter on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-letter (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-086',
    label: 'Loop AI b11 w72 #086: ruby over distribute-space on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; over-distribute-space (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-087',
    label: 'Loop AI b11 w72 #087: ruby under start on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-start (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-088',
    label: 'Loop AI b11 w72 #088: ruby under center on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-center (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-089',
    label: 'Loop AI b11 w72 #089: ruby under space-around on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; under-space-around (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-090',
    label: 'Loop AI b11 w72 #090: ruby inter-character start on FO>div *',
    idea: 'ruby position/align on wrapper descendants; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w72; interchar-start (fo-div-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-091',
    label: 'Loop AI b11 w72 #091: ruby over start stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:over + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; over-start (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-092',
    label: 'Loop AI b11 w72 #092: ruby over center stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:over + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; over-center (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-093',
    label: 'Loop AI b11 w72 #093: ruby over space-between stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:over + ruby-align:space-between',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:space-between!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; over-space-between (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-094',
    label: 'Loop AI b11 w72 #094: ruby over space-around stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:over + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; over-space-around (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-095',
    label: 'Loop AI b11 w72 #095: ruby over distribute-letter stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:over + ruby-align:distribute-letter',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:distribute-letter!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; over-distribute-letter (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-096',
    label: 'Loop AI b11 w72 #096: ruby over distribute-space stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:over + ruby-align:distribute-space',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:over!important;ruby-align:distribute-space!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; over-distribute-space (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-097',
    label: 'Loop AI b11 w72 #097: ruby under start stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:under + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; under-start (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-098',
    label: 'Loop AI b11 w72 #098: ruby under center stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:under + ruby-align:center',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; under-center (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-099',
    label: 'Loop AI b11 w72 #099: ruby under space-around stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:under + ruby-align:space-around',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:under!important;ruby-align:space-around!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; under-space-around (stretch-star); ruby-position/align — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w72-100',
    label: 'Loop AI b11 w72 #100: ruby inter-character start stretch + FO *',
    idea: 'stretch leaf plus ruby position/align on FO *; ruby-position:inter-character + ruby-align:start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{ruby-position:inter-character!important;ruby-align:start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w72; interchar-start (stretch-star); ruby-position/align — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


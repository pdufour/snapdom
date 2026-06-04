/**
 * Loop AI batch-11 FO recipe shard (worker 73) — text-fix: text-combine-upright none/all/digits and digit-width limits
 * 100 recipes: loop-ai-b11-w73-001..100
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
    id: 'loop-ai-b11-w73-001',
    label: 'Loop AI b11 w73 #001: combine none on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:none!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-002',
    label: 'Loop AI b11 w73 #002: combine all on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:all!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-003',
    label: 'Loop AI b11 w73 #003: combine digits on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-004',
    label: 'Loop AI b11 w73 #004: combine digits 2 on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-005',
    label: 'Loop AI b11 w73 #005: combine digits 3 on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-006',
    label: 'Loop AI b11 w73 #006: combine digits 4 on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-007',
    label: 'Loop AI b11 w73 #007: combine digits 6 on FO *',
    idea: 'combine upright on all FO descendants; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-008',
    label: 'Loop AI b11 w73 #008: combine all vertical-rl on FO *',
    idea: 'combine upright on all FO descendants; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-009',
    label: 'Loop AI b11 w73 #009: combine none vertical-rl on FO *',
    idea: 'combine upright on all FO descendants; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-010',
    label: 'Loop AI b11 w73 #010: combine digits vertical-lr on FO *',
    idea: 'combine upright on all FO descendants; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-011',
    label: 'Loop AI b11 w73 #011: combine none on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:none!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-012',
    label: 'Loop AI b11 w73 #012: combine all on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:all!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-013',
    label: 'Loop AI b11 w73 #013: combine digits on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:digits!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-014',
    label: 'Loop AI b11 w73 #014: combine digits 2 on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-015',
    label: 'Loop AI b11 w73 #015: combine digits 3 on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-016',
    label: 'Loop AI b11 w73 #016: combine digits 4 on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-017',
    label: 'Loop AI b11 w73 #017: combine digits 6 on FO root',
    idea: 'combine upright on foreignObject root; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-018',
    label: 'Loop AI b11 w73 #018: combine all vertical-rl on FO root',
    idea: 'combine upright on foreignObject root; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-019',
    label: 'Loop AI b11 w73 #019: combine none vertical-rl on FO root',
    idea: 'combine upright on foreignObject root; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-020',
    label: 'Loop AI b11 w73 #020: combine digits vertical-lr on FO root',
    idea: 'combine upright on foreignObject root; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (root); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-021',
    label: 'Loop AI b11 w73 #021: combine none on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:none!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-022',
    label: 'Loop AI b11 w73 #022: combine all on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:all!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-023',
    label: 'Loop AI b11 w73 #023: combine digits on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:digits!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-024',
    label: 'Loop AI b11 w73 #024: combine digits 2 on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-025',
    label: 'Loop AI b11 w73 #025: combine digits 3 on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-026',
    label: 'Loop AI b11 w73 #026: combine digits 4 on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-027',
    label: 'Loop AI b11 w73 #027: combine digits 6 on FO>div',
    idea: 'combine upright on FO wrapper; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-028',
    label: 'Loop AI b11 w73 #028: combine all vertical-rl on FO>div',
    idea: 'combine upright on FO wrapper; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-029',
    label: 'Loop AI b11 w73 #029: combine none vertical-rl on FO>div',
    idea: 'combine upright on FO wrapper; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-030',
    label: 'Loop AI b11 w73 #030: combine digits vertical-lr on FO>div',
    idea: 'combine upright on FO wrapper; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (fo-div); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-031',
    label: 'Loop AI b11 w73 #031: combine none on FO span',
    idea: 'combine upright on FO span; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:none!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-032',
    label: 'Loop AI b11 w73 #032: combine all on FO span',
    idea: 'combine upright on FO span; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:all!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-033',
    label: 'Loop AI b11 w73 #033: combine digits on FO span',
    idea: 'combine upright on FO span; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:digits!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-034',
    label: 'Loop AI b11 w73 #034: combine digits 2 on FO span',
    idea: 'combine upright on FO span; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-035',
    label: 'Loop AI b11 w73 #035: combine digits 3 on FO span',
    idea: 'combine upright on FO span; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-036',
    label: 'Loop AI b11 w73 #036: combine digits 4 on FO span',
    idea: 'combine upright on FO span; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-037',
    label: 'Loop AI b11 w73 #037: combine digits 6 on FO span',
    idea: 'combine upright on FO span; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-038',
    label: 'Loop AI b11 w73 #038: combine all vertical-rl on FO span',
    idea: 'combine upright on FO span; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-039',
    label: 'Loop AI b11 w73 #039: combine none vertical-rl on FO span',
    idea: 'combine upright on FO span; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-040',
    label: 'Loop AI b11 w73 #040: combine digits vertical-lr on FO span',
    idea: 'combine upright on FO span; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject span{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (span); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-041',
    label: 'Loop AI b11 w73 #041: combine none on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:none!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-042',
    label: 'Loop AI b11 w73 #042: combine all on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:all!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-043',
    label: 'Loop AI b11 w73 #043: combine digits on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:digits!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-044',
    label: 'Loop AI b11 w73 #044: combine digits 2 on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-045',
    label: 'Loop AI b11 w73 #045: combine digits 3 on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-046',
    label: 'Loop AI b11 w73 #046: combine digits 4 on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-047',
    label: 'Loop AI b11 w73 #047: combine digits 6 on FO a',
    idea: 'combine upright on FO anchors; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-048',
    label: 'Loop AI b11 w73 #048: combine all vertical-rl on FO a',
    idea: 'combine upright on FO anchors; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-049',
    label: 'Loop AI b11 w73 #049: combine none vertical-rl on FO a',
    idea: 'combine upright on FO anchors; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-050',
    label: 'Loop AI b11 w73 #050: combine digits vertical-lr on FO a',
    idea: 'combine upright on FO anchors; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (anchors); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-051',
    label: 'Loop AI b11 w73 #051: combine none on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:none!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-052',
    label: 'Loop AI b11 w73 #052: combine all on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:all!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-053',
    label: 'Loop AI b11 w73 #053: combine digits on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:digits!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-054',
    label: 'Loop AI b11 w73 #054: combine digits 2 on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-055',
    label: 'Loop AI b11 w73 #055: combine digits 3 on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-056',
    label: 'Loop AI b11 w73 #056: combine digits 4 on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-057',
    label: 'Loop AI b11 w73 #057: combine digits 6 on FO nav a',
    idea: 'combine upright on nav anchors; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-058',
    label: 'Loop AI b11 w73 #058: combine all vertical-rl on FO nav a',
    idea: 'combine upright on nav anchors; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-059',
    label: 'Loop AI b11 w73 #059: combine none vertical-rl on FO nav a',
    idea: 'combine upright on nav anchors; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-060',
    label: 'Loop AI b11 w73 #060: combine digits vertical-lr on FO nav a',
    idea: 'combine upright on nav anchors; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (nav-a); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-061',
    label: 'Loop AI b11 w73 #061: combine none on text chain',
    idea: 'combine upright on text chain; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:none!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-062',
    label: 'Loop AI b11 w73 #062: combine all on text chain',
    idea: 'combine upright on text chain; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:all!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-063',
    label: 'Loop AI b11 w73 #063: combine digits on text chain',
    idea: 'combine upright on text chain; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:digits!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-064',
    label: 'Loop AI b11 w73 #064: combine digits 2 on text chain',
    idea: 'combine upright on text chain; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-065',
    label: 'Loop AI b11 w73 #065: combine digits 3 on text chain',
    idea: 'combine upright on text chain; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-066',
    label: 'Loop AI b11 w73 #066: combine digits 4 on text chain',
    idea: 'combine upright on text chain; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-067',
    label: 'Loop AI b11 w73 #067: combine digits 6 on text chain',
    idea: 'combine upright on text chain; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-068',
    label: 'Loop AI b11 w73 #068: combine all vertical-rl on text chain',
    idea: 'combine upright on text chain; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-069',
    label: 'Loop AI b11 w73 #069: combine none vertical-rl on text chain',
    idea: 'combine upright on text chain; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-070',
    label: 'Loop AI b11 w73 #070: combine digits vertical-lr on text chain',
    idea: 'combine upright on text chain; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (text-chain); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-071',
    label: 'Loop AI b11 w73 #071: combine none on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:none!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-072',
    label: 'Loop AI b11 w73 #072: combine all on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:all!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-073',
    label: 'Loop AI b11 w73 #073: combine digits on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:digits!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-074',
    label: 'Loop AI b11 w73 #074: combine digits 2 on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-075',
    label: 'Loop AI b11 w73 #075: combine digits 3 on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-076',
    label: 'Loop AI b11 w73 #076: combine digits 4 on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-077',
    label: 'Loop AI b11 w73 #077: combine digits 6 on FO>div *',
    idea: 'combine upright on wrapper descendants; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-078',
    label: 'Loop AI b11 w73 #078: combine all vertical-rl on FO>div *',
    idea: 'combine upright on wrapper descendants; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-079',
    label: 'Loop AI b11 w73 #079: combine none vertical-rl on FO>div *',
    idea: 'combine upright on wrapper descendants; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-080',
    label: 'Loop AI b11 w73 #080: combine digits vertical-lr on FO>div *',
    idea: 'combine upright on wrapper descendants; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (fo-div-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-081',
    label: 'Loop AI b11 w73 #081: combine none on FO label',
    idea: 'combine upright on form labels; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:none!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-082',
    label: 'Loop AI b11 w73 #082: combine all on FO label',
    idea: 'combine upright on form labels; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:all!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-083',
    label: 'Loop AI b11 w73 #083: combine digits on FO label',
    idea: 'combine upright on form labels; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:digits!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-084',
    label: 'Loop AI b11 w73 #084: combine digits 2 on FO label',
    idea: 'combine upright on form labels; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-2 (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-085',
    label: 'Loop AI b11 w73 #085: combine digits 3 on FO label',
    idea: 'combine upright on form labels; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-3 (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-086',
    label: 'Loop AI b11 w73 #086: combine digits 4 on FO label',
    idea: 'combine upright on form labels; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-4 (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-087',
    label: 'Loop AI b11 w73 #087: combine digits 6 on FO label',
    idea: 'combine upright on form labels; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-6 (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-088',
    label: 'Loop AI b11 w73 #088: combine all vertical-rl on FO label',
    idea: 'combine upright on form labels; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; all-vrl (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-089',
    label: 'Loop AI b11 w73 #089: combine none vertical-rl on FO label',
    idea: 'combine upright on form labels; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; none-vrl (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-090',
    label: 'Loop AI b11 w73 #090: combine digits vertical-lr on FO label',
    idea: 'combine upright on form labels; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w73; digits-vlr (label); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-091',
    label: 'Loop AI b11 w73 #091: combine none pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:none',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:none!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; none (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-092',
    label: 'Loop AI b11 w73 #092: combine all pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:all!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; all (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-093',
    label: 'Loop AI b11 w73 #093: combine digits pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:digits',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; digits (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-094',
    label: 'Loop AI b11 w73 #094: combine digits 2 pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:digits 2',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 2!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; digits-2 (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-095',
    label: 'Loop AI b11 w73 #095: combine digits 3 pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:digits 3',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 3!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; digits-3 (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-096',
    label: 'Loop AI b11 w73 #096: combine digits 4 pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:digits 4',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 4!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; digits-4 (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-097',
    label: 'Loop AI b11 w73 #097: combine digits 6 pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; text-combine-upright:digits 6',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-combine-upright:digits 6!important;writing-mode:horizontal-tb!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; digits-6 (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-098',
    label: 'Loop AI b11 w73 #098: combine all vertical-rl pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; vertical-rl with combine all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{writing-mode:vertical-rl!important;text-combine-upright:all!important;text-orientation:mixed!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; all-vrl (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-099',
    label: 'Loop AI b11 w73 #099: combine none vertical-rl pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; vertical-rl without combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{writing-mode:vertical-rl!important;text-combine-upright:none!important;text-orientation:mixed!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; none-vrl (pin-lh-star); text-combine-upright — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w73-100',
    label: 'Loop AI b11 w73 #100: combine digits vertical-lr pin lh + FO *',
    idea: 'pin line-height with combine upright on FO *; vertical-lr digit combine',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{writing-mode:vertical-lr!important;text-combine-upright:digits!important;text-orientation:mixed!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w73; digits-vlr (pin-lh-star); text-combine-upright — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


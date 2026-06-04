/**
 * Loop AI batch-10 FO recipe shard (worker 5) — text-fix: h2-pin-line-height-from-live +
 * line-height normal / unset / from-font on wrapper chains (40 variants).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w05-001',
    label: 'Loop AI b10 w05 #001: pin lh FO>div normal',
    idea: 'h2-pin-line-height-from-live + FO>div line-height:normal wrapper restore before live strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-002',
    label: 'Loop AI b10 w05 #002: pin lh FO>div unset',
    idea: 'h2-pin-line-height-from-live + FO>div line-height:unset — cascade reset on root FO wrapper vs pinned strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-003',
    label: 'Loop AI b10 w05 #003: pin lh FO>div from-font',
    idea: 'h2-pin-line-height-from-live + FO>div line-height:from-font — font-metrics strut on root wrapper vs live pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-004',
    label: 'Loop AI b10 w05 #004: pin lh FO>div* normal',
    idea: 'h2-pin-line-height-from-live + FO>div * line-height:normal on all descendant leaves under FO root div',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-005',
    label: 'Loop AI b10 w05 #005: pin lh FO>div* unset',
    idea: 'h2-pin-line-height-from-live + FO>div * line-height:unset — scoped reset on wrapper subtree vs measured pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-006',
    label: 'Loop AI b10 w05 #006: pin lh FO>div* from-font',
    idea: 'h2-pin-line-height-from-live + FO>div * line-height:from-font on wrapper subtree leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-007',
    label: 'Loop AI b10 w05 #007: pin lh FO span normal',
    idea: 'h2-pin-line-height-from-live + FO span line-height:normal on inline text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-008',
    label: 'Loop AI b10 w05 #008: pin lh FO span unset',
    idea: 'h2-pin-line-height-from-live + FO span line-height:unset on inline text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{line-height:unset!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-009',
    label: 'Loop AI b10 w05 #009: pin lh FO span from-font',
    idea: 'h2-pin-line-height-from-live + FO span line-height:from-font on inline text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{line-height:from-font!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-010',
    label: 'Loop AI b10 w05 #010: pin lh FO* normal',
    idea: 'h2-pin-line-height-from-live + FO * line-height:normal global leaf strut vs h2 live pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-011',
    label: 'Loop AI b10 w05 #011: pin lh FO* unset',
    idea: 'h2-pin-line-height-from-live + FO * line-height:unset global cascade reset vs live pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-012',
    label: 'Loop AI b10 w05 #012: pin lh FO* from-font',
    idea: 'h2-pin-line-height-from-live + FO * line-height:from-font global font-metrics cascade vs live pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-013',
    label: 'Loop AI b10 w05 #013: pin lh div normal inner from-font',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO>div>div from-font nested wrapper strut chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-014',
    label: 'Loop AI b10 w05 #014: pin lh div from-font inner normal',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO>div>div normal inverted nested chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}foreignObject>div>div{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-015',
    label: 'Loop AI b10 w05 #015: pin lh div unset star normal',
    idea: 'h2-pin-line-height-from-live + FO>div unset + FO * normal — reset wrapper then normal leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:unset!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-016',
    label: 'Loop AI b10 w05 #016: pin lh div from-font star inherit',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO * inherit font-metrics cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-017',
    label: 'Loop AI b10 w05 #017: pin lh div normal span unset',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO span unset + baseline valign on spans',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject span{line-height:unset!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-018',
    label: 'Loop AI b10 w05 #018: pin lh div from-font span normal',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO span normal inline strut restore',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}foreignObject span{line-height:normal!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-019',
    label: 'Loop AI b10 w05 #019: pin lh deep div>div>div chain',
    idea: 'h2-pin-line-height-from-live + FO>div>div normal + FO>div>div>div from-font deep nested wrappers',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>div{line-height:normal!important}foreignObject>div>div>div{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-020',
    label: 'Loop AI b10 w05 #020: pin lh div normal div* from-font',
    idea: 'h2-pin-line-height-from-live + FO>div normal outer + FO>div * from-font inner leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-021',
    label: 'Loop AI b10 w05 #021: pin lh div unset div* normal',
    idea: 'h2-pin-line-height-from-live + FO>div unset outer + FO>div * normal inner leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:unset!important}foreignObject>div *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-022',
    label: 'Loop AI b10 w05 #022: pin lh FO nav normal',
    idea: 'h2-pin-line-height-from-live + FO nav line-height:normal on flex/grid nav wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav{line-height:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-023',
    label: 'Loop AI b10 w05 #023: pin lh FO nav a normal',
    idea: 'h2-pin-line-height-from-live + FO nav a line-height:normal on nav anchor text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{line-height:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-024',
    label: 'Loop AI b10 w05 #024: pin lh FO nav a from-font',
    idea: 'h2-pin-line-height-from-live + FO nav a line-height:from-font on nav anchor text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{line-height:from-font!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-025',
    label: 'Loop AI b10 w05 #025: pin lh FO nav a unset',
    idea: 'h2-pin-line-height-from-live + FO nav a line-height:unset on nav anchor text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{line-height:unset!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-026',
    label: 'Loop AI b10 w05 #026: pin lh FO a normal baseline',
    idea: 'h2-pin-line-height-from-live + FO a line-height:normal + vertical-align:baseline on all anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{line-height:normal!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-027',
    label: 'Loop AI b10 w05 #027: pin lh FO a from-font baseline',
    idea: 'h2-pin-line-height-from-live + FO a line-height:from-font + vertical-align:baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{line-height:from-font!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-028',
    label: 'Loop AI b10 w05 #028: pin lh FO a unset baseline',
    idea: 'h2-pin-line-height-from-live + FO a line-height:unset + vertical-align:baseline on anchors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{line-height:unset!important;vertical-align:baseline!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-029',
    label: 'Loop AI b10 w05 #029: pin lh div>nav normal nav a from-font',
    idea: 'h2-pin-line-height-from-live + FO>div>nav normal + FO nav a from-font two-level nav chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>nav{line-height:normal!important}foreignObject nav a{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-030',
    label: 'Loop AI b10 w05 #030: pin lh div>nav from-font nav a normal',
    idea: 'h2-pin-line-height-from-live + FO>div>nav from-font + FO nav a normal inverted nav chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>nav{line-height:from-font!important}foreignObject nav a{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-031',
    label: 'Loop AI b10 w05 #031: pin lh div>nav unset nav a unset',
    idea: 'h2-pin-line-height-from-live + FO>div>nav unset + FO nav a unset full nav lh reset vs pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div>nav{line-height:unset!important}foreignObject nav a{line-height:unset!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-032',
    label: 'Loop AI b10 w05 #032: pin lh FO p normal',
    idea: 'h2-pin-line-height-from-live + FO p line-height:normal on paragraph text blocks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p{line-height:normal!important;display:block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-033',
    label: 'Loop AI b10 w05 #033: pin lh FO label from-font',
    idea: 'h2-pin-line-height-from-live + FO label line-height:from-font on form label text',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject label{line-height:from-font!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-034',
    label: 'Loop AI b10 w05 #034: pin lh FO button normal',
    idea: 'h2-pin-line-height-from-live + FO button line-height:normal on button text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject button{line-height:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-035',
    label: 'Loop AI b10 w05 #035: pin lh FO li unset',
    idea: 'h2-pin-line-height-from-live + FO li line-height:unset on list item text wrappers',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject li{line-height:unset!important;display:list-item!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-036',
    label: 'Loop AI b10 w05 #036: pin lh div normal star baseline',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO * vertical-align:baseline + line-height:normal leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject *{line-height:normal!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-037',
    label: 'Loop AI b10 w05 #037: pin lh div from-font size-adjust',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + -webkit-text-size-adjust 100% on FO>div wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-038',
    label: 'Loop AI b10 w05 #038: pin lh triple div span chain',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO>div>div unset + FO span from-font triple wrapper chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:unset!important}foreignObject span{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-039',
    label: 'Loop AI b10 w05 #039: pin lh triple div* chain',
    idea: 'h2-pin-line-height-from-live + FO>div normal + FO>div>div unset + FO>div * from-font triple chain on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:normal!important}foreignObject>div>div{line-height:unset!important}foreignObject>div *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w05-040',
    label: 'Loop AI b10 w05 #040: pin lh div from-font decode',
    idea: 'h2-pin-line-height-from-live + FO>div from-font + FO * inherit + decode-interval raster flush after pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:from-font!important}foreignObject *{line-height:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w05; live lh pin + wrapper lh chain; text metric only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

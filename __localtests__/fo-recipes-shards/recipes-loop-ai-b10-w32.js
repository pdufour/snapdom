/**
 * Loop AI batch-10 FO recipe shard (worker 32) — text-fix: font-stretch normal/condensed/expanded tokens.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w32-001',
    label: 'Loop AI b10 w32 #001: font-stretch normal FO root',
    idea: 'font-stretch:normal on FO root — vs fix367; glyph width reset at FO boundary',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; font-stretch normal FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-002',
    label: 'Loop AI b10 w32 #002: font-stretch normal FO *',
    idea: 'font-stretch:normal on all FO descendants — leaf reset vs inherited condensed/expanded',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; font-stretch normal FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-003',
    label: 'Loop AI b10 w32 #003: font-stretch condensed FO root',
    idea: 'font-stretch:condensed on FO root — vs vary2-013; narrow glyph probe at boundary',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; font-stretch condensed FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-004',
    label: 'Loop AI b10 w32 #004: font-stretch condensed FO *',
    idea: 'font-stretch:condensed on FO * — subtree condensed token vs live stretch',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; font-stretch condensed FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-005',
    label: 'Loop AI b10 w32 #005: font-stretch expanded FO root',
    idea: 'font-stretch:expanded on FO root — wide glyph probe vs normal/condensed baselines',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; font-stretch expanded FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-006',
    label: 'Loop AI b10 w32 #006: font-stretch expanded FO *',
    idea: 'font-stretch:expanded on FO * — expanded token on text leaves inside FO',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; font-stretch expanded FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-007',
    label: 'Loop AI b10 w32 #007: normal on FO>div',
    idea: 'font-stretch:normal on FO>div wrapper only — inner leaves inherit vs * reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; normal on FO>div; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-008',
    label: 'Loop AI b10 w32 #008: condensed on inline leaves',
    idea: 'font-stretch:condensed on a,span — inline text stretch vs block wrapper',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a,foreignObject span{font-stretch:condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; condensed on inline leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-009',
    label: 'Loop AI b10 w32 #009: expanded on headings',
    idea: 'font-stretch:expanded on h1-h6 inside FO — heading stretch token vs nav links',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-stretch:expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; expanded on headings; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-010',
    label: 'Loop AI b10 w32 #010: normal on p labels',
    idea: 'font-stretch:normal on p,label,button — form/copy stretch reset on text controls',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject label,foreignObject button{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; normal on p labels; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-011',
    label: 'Loop AI b10 w32 #011: ultra-condensed FO *',
    idea: 'font-stretch:ultra-condensed on FO * — minimum width keyword vs condensed/normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:ultra-condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; ultra-condensed FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-012',
    label: 'Loop AI b10 w32 #012: extra-condensed FO root',
    idea: 'font-stretch:extra-condensed on FO root — second-tier narrow token at boundary',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:extra-condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; extra-condensed FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-013',
    label: 'Loop AI b10 w32 #013: semi-condensed FO *',
    idea: 'font-stretch:semi-condensed on FO * — between normal and condensed stretch step',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:semi-condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; semi-condensed FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-014',
    label: 'Loop AI b10 w32 #014: semi-expanded FO root',
    idea: 'font-stretch:semi-expanded on FO root — between normal and expanded stretch step',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:semi-expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; semi-expanded FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-015',
    label: 'Loop AI b10 w32 #015: extra-expanded FO *',
    idea: 'font-stretch:extra-expanded on FO * — second-tier wide keyword on leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:extra-expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; extra-expanded FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-016',
    label: 'Loop AI b10 w32 #016: ultra-expanded FO root',
    idea: 'font-stretch:ultra-expanded on FO root — maximum width keyword at FO boundary',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:ultra-expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; ultra-expanded FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-017',
    label: 'Loop AI b10 w32 #017: stretch 50% FO *',
    idea: 'font-stretch:50% on FO * — percentage below normal vs keyword condensed',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:50%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; stretch 50% FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-018',
    label: 'Loop AI b10 w32 #018: stretch 75% FO root',
    idea: 'font-stretch:75% on FO root — three-quarter width percentage at boundary',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:75%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; stretch 75% FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-019',
    label: 'Loop AI b10 w32 #019: stretch 100% FO *',
    idea: 'font-stretch:100% on FO * — explicit percentage normal width vs keyword normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; stretch 100% FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-020',
    label: 'Loop AI b10 w32 #020: stretch 125% FO root',
    idea: 'font-stretch:125% on FO root — quarter-expanded percentage vs expanded keyword',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:125%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; stretch 125% FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-021',
    label: 'Loop AI b10 w32 #021: stretch 150% FO *',
    idea: 'font-stretch:150% on FO * — half again wide percentage on text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:150%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; stretch 150% FO *; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-022',
    label: 'Loop AI b10 w32 #022: stretch 200% FO root',
    idea: 'font-stretch:200% on FO root — double width percentage vs ultra-expanded',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:200%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; stretch 200% FO root; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-023',
    label: 'Loop AI b10 w32 #023: root condensed * normal',
    idea: 'FO root condensed + FO * normal — cascade reset leaves after narrow boundary',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-stretch:condensed!important}foreignObject *{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; root condensed * normal; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-024',
    label: 'Loop AI b10 w32 #024: root expanded * normal',
    idea: 'FO root expanded + FO * normal — wide boundary then leaf normal reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-stretch:expanded!important}foreignObject *{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; root expanded * normal; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-025',
    label: 'Loop AI b10 w32 #025: root normal * condensed',
    idea: 'FO root normal + FO * condensed — normal boundary then narrow leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-stretch:normal!important}foreignObject *{font-stretch:condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; root normal * condensed; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-026',
    label: 'Loop AI b10 w32 #026: root normal * expanded',
    idea: 'FO root normal + FO * expanded — normal boundary then wide leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-stretch:normal!important}foreignObject *{font-stretch:expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; root normal * expanded; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-027',
    label: 'Loop AI b10 w32 #027: normal + variation normal',
    idea: 'font-stretch:normal + font-variation-settings:normal on FO root — vs fix377 bundle',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:normal!important;font-variation-settings:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; normal + variation normal; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-028',
    label: 'Loop AI b10 w32 #028: condensed wdth 75 leaves',
    idea: 'font-stretch:condensed + font-variation-settings:"wdth" 75 on FO * — axis + keyword narrow',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important;font-variation-settings:"wdth" 75!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; condensed wdth 75 leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-029',
    label: 'Loop AI b10 w32 #029: expanded wdth 125 leaves',
    idea: 'font-stretch:expanded + font-variation-settings:"wdth" 125 on FO * — axis + keyword wide',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:expanded!important;font-variation-settings:"wdth" 125!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; expanded wdth 125 leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-030',
    label: 'Loop AI b10 w32 #030: normal chromium leaves',
    idea: 'Chromium copy + font-stretch:normal on FO * — kerning bundle with stretch reset',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-stretch:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; normal chromium leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-031',
    label: 'Loop AI b10 w32 #031: condensed chromium leaves',
    idea: 'Chromium copy + font-stretch:condensed on FO * — narrow token with kerning block',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-stretch:condensed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; condensed chromium leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-032',
    label: 'Loop AI b10 w32 #032: expanded chromium leaves',
    idea: 'Chromium copy + font-stretch:expanded on FO * — wide token with kerning block',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{font-stretch:expanded!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; expanded chromium leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-033',
    label: 'Loop AI b10 w32 #033: normal from-font lh',
    idea: 'font-stretch:normal + line-height:from-font on FO * — stretch reset with font-metrics strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:normal!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; normal from-font lh; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-034',
    label: 'Loop AI b10 w32 #034: condensed from-font lh',
    idea: 'font-stretch:condensed + line-height:from-font on FO * — narrow stretch + from-font strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; condensed from-font lh; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-035',
    label: 'Loop AI b10 w32 #035: expanded from-font lh',
    idea: 'font-stretch:expanded + line-height:from-font on FO * — wide stretch + from-font strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:expanded!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; expanded from-font lh; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-036',
    label: 'Loop AI b10 w32 #036: normal pin lh live',
    idea: 'font-stretch:normal on FO * + h2-pin-line-height-from-live — stretch reset with live strut pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    notes: 'Loop AI b10 w32; normal pin lh live; one text/raster patch — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-037',
    label: 'Loop AI b10 w32 #037: condensed pin width live',
    idea: 'font-stretch:condensed on FO * + h2-pin-width-from-live — narrow token with live width pin',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes: 'Loop AI b10 w32; condensed pin width live; one text/raster patch — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-038',
    label: 'Loop AI b10 w32 #038: expanded letter-spacing normal',
    idea: 'font-stretch:expanded + letter-spacing:normal on FO * — wide stretch with spacing reset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:expanded!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w32; expanded letter-spacing normal; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-039',
    label: 'Loop AI b10 w32 #039: normal decode-interval raster',
    idea: 'font-stretch:normal on FO root + decode-interval raster — stretch reset + decode wait',
    css:
      FO_BASELINE_CSS +
      'foreignObject{font-stretch:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w32; normal decode-interval raster; one text/raster patch — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w32-040',
    label: 'Loop AI b10 w32 #040: condensed int viewbox raster',
    idea: 'font-stretch:condensed on FO * + integer-viewbox svg root — narrow leaves + int floor dims',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-stretch:condensed!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b10 w32; condensed int viewbox raster; one text/raster patch — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

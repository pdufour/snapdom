/**
 * Loop AI batch-10 FO recipe shard (worker 35) — text-fix: text-emphasis-style none/dot/circle on FO *.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w35-001',
    label: 'Loop AI b10 w35 #001: bare none',
    idea: 'text-emphasis-style:none on FO * — strip emphasis marks for glyph parity',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-002',
    label: 'Loop AI b10 w35 #002: none transparent color',
    idea: 'none + transparent emphasis color — marks off, color channel inert',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-003',
    label: 'Loop AI b10 w35 #003: none webkit style',
    idea: '-webkit-text-emphasis-style:none on FO * — WebKit longhand vs FO raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;-webkit-text-emphasis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-004',
    label: 'Loop AI b10 w35 #004: none shorthand',
    idea: 'text-emphasis:none shorthand on FO * — vs longhand style:none',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis:none!important;-webkit-text-emphasis:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-005',
    label: 'Loop AI b10 w35 #005: none over right',
    idea: 'none + emphasis-position over right — position longhand with style none',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-emphasis-position:over right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-006',
    label: 'Loop AI b10 w35 #006: none under left',
    idea: 'none + emphasis-position under left — under-axis with disabled marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-emphasis-position:under left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-007',
    label: 'Loop AI b10 w35 #007: none line-height normal',
    idea: 'none + line-height:normal — strut vs emphasis-free metrics',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-008',
    label: 'Loop AI b10 w35 #008: none font-kerning normal',
    idea: 'none + font-kerning:normal — Chromium copy + stripped emphasis',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important}foreignObject *{text-emphasis-style:none!important;font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-009',
    label: 'Loop AI b10 w35 #009: none leading-trim',
    idea: 'none + leading-trim:both — trim leading with emphasis off',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;leading-trim:both!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-010',
    label: 'Loop AI b10 w35 #010: none skip-ink',
    idea: 'none + text-decoration-skip-ink:all — decoration/emphasis axis',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-decoration-skip-ink:all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-011',
    label: 'Loop AI b10 w35 #011: none writing-mode lock',
    idea: 'none + writing-mode:horizontal-tb — lock flow with emphasis disabled',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-012',
    label: 'Loop AI b10 w35 #012: none text-orientation',
    idea: 'none + text-orientation:mixed — orientation vs emphasis marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-013',
    label: 'Loop AI b10 w35 #013: none font-variant-east-asian',
    idea: 'none + font-variant-east-asian:normal — CJK variant + no marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;font-variant-east-asian:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-014',
    label: 'Loop AI b10 w35 #014: none text-rendering',
    idea: 'none + text-rendering:geometricPrecision — hinting vs emphasis-free ink',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:none!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-015',
    label: 'Loop AI b10 w35 #015: open dot',
    idea: 'text-emphasis-style:dot on FO * — open dot marks vs FO text raster',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:dot!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-016',
    label: 'Loop AI b10 w35 #016: filled dot',
    idea: 'text-emphasis-style:filled dot on FO * — filled dot emphasis ink',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-017',
    label: 'Loop AI b10 w35 #017: dot over',
    idea: 'dot + text-emphasis-position:over — marks above base line',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:dot!important;text-emphasis-position:over!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-018',
    label: 'Loop AI b10 w35 #018: dot under left',
    idea: 'dot + position under left — below-line dot marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:dot!important;text-emphasis-position:under left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-019',
    label: 'Loop AI b10 w35 #019: dot currentColor',
    idea: 'filled dot + currentColor — emphasis ink follows text color',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-020',
    label: 'Loop AI b10 w35 #020: dot transparent',
    idea: 'dot style + transparent color — style present, ink suppressed',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:dot!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-021',
    label: 'Loop AI b10 w35 #021: dot webkit',
    idea: '-webkit-text-emphasis:dot on FO * — WebKit shorthand dot',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:dot!important;-webkit-text-emphasis:dot!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-022',
    label: 'Loop AI b10 w35 #022: dot line-height normal',
    idea: 'filled dot + line-height:normal — strut vs dot mark box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled dot!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-023',
    label: 'Loop AI b10 w35 #023: dot over right',
    idea: 'filled dot + over right — corner emphasis position',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-position:over right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-024',
    label: 'Loop AI b10 w35 #024: open dot under',
    idea: 'open dot + under — below-line open dots',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:open dot!important;text-emphasis-position:under!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-025',
    label: 'Loop AI b10 w35 #025: dot color-mix',
    idea: 'filled dot + color-mix emphasis color — relative color on marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled dot!important;text-emphasis-color:color-mix(in srgb, currentColor 90%, transparent)!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-026',
    label: 'Loop AI b10 w35 #026: dot text-edge',
    idea: 'dot + text-edge:cap alphabetic — typography edge + dot marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:dot!important;text-edge:cap alphabetic!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-027',
    label: 'Loop AI b10 w35 #027: dot font-kerning',
    idea: 'dot + font-kerning:normal on FO * — kerning vs dot metrics',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled dot!important;font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-028',
    label: 'Loop AI b10 w35 #028: open circle',
    idea: 'text-emphasis-style:circle on FO * — open circle marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:circle!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-029',
    label: 'Loop AI b10 w35 #029: filled circle',
    idea: 'text-emphasis-style:filled circle on FO * — filled circle emphasis',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-030',
    label: 'Loop AI b10 w35 #030: circle over',
    idea: 'circle + emphasis-position:over — marks above glyphs',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:circle!important;text-emphasis-position:over!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-031',
    label: 'Loop AI b10 w35 #031: circle under left',
    idea: 'filled circle + under left — below-line circles',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;text-emphasis-position:under left!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-032',
    label: 'Loop AI b10 w35 #032: circle currentColor',
    idea: 'filled circle + currentColor — circle ink from text',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;text-emphasis-color:currentColor!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-033',
    label: 'Loop AI b10 w35 #033: circle webkit filled',
    idea: '-webkit-text-emphasis:filled circle — WebKit filled circles',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;-webkit-text-emphasis:filled circle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-034',
    label: 'Loop AI b10 w35 #034: open circle under right',
    idea: 'open circle + under right — corner under circles',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:open circle!important;text-emphasis-position:under right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-035',
    label: 'Loop AI b10 w35 #035: circle line-height normal',
    idea: 'filled circle + line-height:normal — strut vs circle box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-036',
    label: 'Loop AI b10 w35 #036: circle over right',
    idea: 'circle + over right position — top-right emphasis slot',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:circle!important;text-emphasis-position:over right!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-037',
    label: 'Loop AI b10 w35 #037: circle transparent',
    idea: 'circle style + transparent color — geometry without visible ink',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:circle!important;text-emphasis-color:transparent!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-038',
    label: 'Loop AI b10 w35 #038: circle leading-trim',
    idea: 'filled circle + leading-trim:both — trim + circle marks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;leading-trim:both!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-039',
    label: 'Loop AI b10 w35 #039: circle writing-mode',
    idea: 'circle + writing-mode:horizontal-tb — flow lock with circles',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis-style:filled circle!important;writing-mode:horizontal-tb!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w35-040',
    label: 'Loop AI b10 w35 #040: circle shorthand webkit',
    idea: 'text-emphasis:filled circle + webkit — shorthand vs longhand',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{text-emphasis:filled circle!important;-webkit-text-emphasis:filled circle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w35; text-emphasis-style axis on FO *; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

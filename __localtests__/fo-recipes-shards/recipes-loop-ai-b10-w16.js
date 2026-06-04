/**
 * Loop AI batch-10 FO recipe shard (worker 16) — text-fix: font-synthesis weight/style/small-caps none.
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
    id: 'loop-ai-b10-w16-001',
    label: 'Loop AI b10 w16 #001: synthesis none FO root',
    idea: 'font-synthesis:none on FO root — block faux bold/italic/small-caps synthesis before FO raster',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-synthesis:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis:none root only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-002',
    label: 'Loop AI b10 w16 #002: synthesis-weight none root',
    idea: 'font-synthesis-weight:none on FO root — per-axis faux bold block without style/small-caps longhands',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-synthesis-weight:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis-weight none root; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-003',
    label: 'Loop AI b10 w16 #003: synthesis-style none root',
    idea: 'font-synthesis-style:none on FO root — per-axis faux italic block without weight/small-caps longhands',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis-style none root; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-004',
    label: 'Loop AI b10 w16 #004: synthesis-small-caps none root',
    idea: 'font-synthesis-small-caps:none on FO root — faux small-caps synthesis off (vs vary5-012 legacy)',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis-small-caps none root; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-005',
    label: 'Loop AI b10 w16 #005: weight style none root',
    idea: 'font-synthesis-weight:none + font-synthesis-style:none on FO root — dual-axis without small-caps',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis-weight:none!important;font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; weight+style none root (esoteric-035 axis); FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-006',
    label: 'Loop AI b10 w16 #006: weight small-caps none root',
    idea: 'font-synthesis-weight:none + font-synthesis-small-caps:none on FO root — bold + small-caps axes',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis-weight:none!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; weight+small-caps none root; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-007',
    label: 'Loop AI b10 w16 #007: style small-caps none root',
    idea: 'font-synthesis-style:none + font-synthesis-small-caps:none on FO root — italic + small-caps axes',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis-style:none!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; style+small-caps none root; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-008',
    label: 'Loop AI b10 w16 #008: all synthesis axes root',
    idea: 'font-synthesis:none + weight/style/small-caps longhands on FO root — shorthand + per-axis redundancy probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; full synthesis axis stack root; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-009',
    label: 'Loop AI b10 w16 #009: synthesis none FO star',
    idea: 'font-synthesis:none on FO * — faux synthesis block on every text leaf (vs fix256 root-only)',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-synthesis:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis:none on * leaves; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-010',
    label: 'Loop AI b10 w16 #010: synthesis-weight none star',
    idea: 'font-synthesis-weight:none on FO * — per-leaf faux bold block without root shorthand',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-synthesis-weight:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis-weight none on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-011',
    label: 'Loop AI b10 w16 #011: synthesis-style none star',
    idea: 'font-synthesis-style:none on FO * — per-leaf faux italic block without root shorthand',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis-style none on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-012',
    label: 'Loop AI b10 w16 #012: synthesis-small-caps none star',
    idea: 'font-synthesis-small-caps:none on FO * — per-leaf small-caps synthesis off on all descendants',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis-small-caps none on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-013',
    label: 'Loop AI b10 w16 #013: all synthesis axes star',
    idea: 'font-synthesis:none + weight/style/small-caps longhands on FO * — deep leaf axis redundancy',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-synthesis:none!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; full synthesis axis stack on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-014',
    label: 'Loop AI b10 w16 #014: Chromium synthesis none',
    idea: 'Chromium font copy (kerning + synthesis:none) on FO root — modern-screenshot baseline vs longhands-only',
    css: FO_BASELINE_CSS + TEXT_LEAF + CHROMIUM,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; Chromium synthesis:none shorthand; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-015',
    label: 'Loop AI b10 w16 #015: Chromium weight style longhands',
    idea: 'Chromium kerning copy + font-synthesis-weight/style:none on FO — longhands without shorthand/small-caps',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; Chromium + weight/style longhands; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-016',
    label: 'Loop AI b10 w16 #016: Chromium small-caps none',
    idea: 'Chromium kerning + font-synthesis-small-caps:none on FO — small-caps axis only with kerning normal',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; Chromium + small-caps none only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-017',
    label: 'Loop AI b10 w16 #017: Chromium all synthesis longhands',
    idea: 'Chromium kerning + weight/style/small-caps:none longhands on FO — full axis block without shorthand',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; Chromium + all synthesis longhands; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-018',
    label: 'Loop AI b10 w16 #018: synthesis none + kerning star',
    idea: 'font-synthesis:none on FO root + font-kerning:normal on FO * — synthesis + kerning leaf pairing',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none root + kerning *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-019',
    label: 'Loop AI b10 w16 #019: synthesis none + ligatures none',
    idea: 'font-synthesis:none + font-variant-ligatures:none on FO * — faux synthesis + ligature disable (fix306 pair)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{font-synthesis:none!important;font-variant-ligatures:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis + ligatures none on *; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-020',
    label: 'Loop AI b10 w16 #020: synthesis axes text chain',
    idea: 'font-synthesis weight/style/small-caps:none on inline text chain only — scoped vs FO * blanket',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{font-synthesis:none!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important;font-synthesis-small-caps:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis axes on text chain only; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-021',
    label: 'Loop AI b10 w16 #021: synthesis none strong em b',
    idea: 'font-synthesis:none on strong/em/b only — faux-bold targets without nav-wide * blanket',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject strong,foreignObject em,foreignObject b{font-synthesis:none!important;' +
      'font-synthesis-weight:none!important;font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none on strong/em/b; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-022',
    label: 'Loop AI b10 w16 #022: synthesis none nav anchors',
    idea: 'font-synthesis:none on nav a — checkout nav link faux synthesis vs flex stretch siblings',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{font-synthesis:none!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none on nav a; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-023',
    label: 'Loop AI b10 w16 #023: layer weight vs synthesis none',
    idea: '@layer low weight-only vs high synthesis:none — cascade override inside FO subtree',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      '@layer fo-loop-b10-w16-low, fo-loop-b10-w16-high;' +
      '@layer fo-loop-b10-w16-low{foreignObject{font-synthesis-weight:auto!important}}' +
      '@layer fo-loop-b10-w16-high{foreignObject{font-synthesis:none!important;' +
      'font-synthesis-weight:none!important;font-synthesis-style:none!important;' +
      'font-synthesis-small-caps:none!important}}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; @layer weight vs full synthesis none; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-024',
    label: 'Loop AI b10 w16 #024: layer style vs small-caps none',
    idea: '@layer low style:auto vs high style+small-caps:none — per-axis cascade on FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      '@layer fo-loop-b10-w16-s-low, fo-loop-b10-w16-s-high;' +
      '@layer fo-loop-b10-w16-s-low{foreignObject{font-synthesis-style:auto!important;' +
      'font-synthesis-small-caps:auto!important}}' +
      '@layer fo-loop-b10-w16-s-high{foreignObject{font-synthesis-style:none!important;' +
      'font-synthesis-small-caps:none!important}}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; @layer style vs small-caps none; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-025',
    label: 'Loop AI b10 w16 #025: FO>div synthesis + * inherit',
    idea: 'FO>div font-synthesis:none + FO * inherit — synthesis cascade through FO wrapper chain',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-synthesis:none!important}foreignObject *{font-synthesis:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; FO>div synthesis none + * inherit; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-026',
    label: 'Loop AI b10 w16 #026: FO>div weight style div* inherit',
    idea: 'FO>div weight/style:none + div* inherit synthesis — wrapper longhand cascade vs root shorthand',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{font-synthesis-weight:none!important;font-synthesis-style:none!important}' +
      'foreignObject>div *{font-synthesis:inherit!important;font-synthesis-weight:inherit!important;' +
      'font-synthesis-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; FO>div weight/style + div* inherit; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-027',
    label: 'Loop AI b10 w16 #027: synthesis none + from-font lh',
    idea: 'font-synthesis:none on FO root + line-height:from-font on FO * — synthesis vs metrics lh strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + from-font lh; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-028',
    label: 'Loop AI b10 w16 #028: synthesis none + normal lh',
    idea: 'font-synthesis:none on FO root + line-height:normal on FO * — synthesis vs normal strut probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + normal lh; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-029',
    label: 'Loop AI b10 w16 #029: synthesis none + lh 1',
    idea: 'font-synthesis:none on FO root + line-height:1 on FO * — synthesis vs unitless strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + lh:1; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-030',
    label: 'Loop AI b10 w16 #030: synthesis none geometricPrecision',
    idea: 'font-synthesis:none on FO + text-rendering:geometricPrecision on FO * — synthesis vs glyph hinting',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + geometricPrecision; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-031',
    label: 'Loop AI b10 w16 #031: synthesis none optimizeLegibility',
    idea: 'font-synthesis:none on FO + text-rendering:optimizeLegibility on FO * — synthesis vs legibility hinting',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + optimizeLegibility; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-032',
    label: 'Loop AI b10 w16 #032: synthesis none tabular-nums',
    idea: 'font-synthesis:none on FO + font-variant-numeric:tabular-nums on FO * — synthesis vs figure width',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{font-variant-numeric:tabular-nums!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + tabular-nums; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-033',
    label: 'Loop AI b10 w16 #033: synthesis none font-feature kern',
    idea: 'font-synthesis:none on FO + font-feature-settings:"kern" 1 on FO * — synthesis vs explicit kern feature',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important}foreignObject *{font-feature-settings:"kern" 1!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; synthesis none + kern feature; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-034',
    label: 'Loop AI b10 w16 #034: weight root style star split',
    idea: 'font-synthesis-weight:none on FO root + font-synthesis-style:none on FO * — split-axis root vs leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis-weight:none!important}foreignObject *{font-synthesis-style:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; weight root + style * split axes; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-035',
    label: 'Loop AI b10 w16 #035: small-caps none variant-caps normal',
    idea: 'font-synthesis-small-caps:none + font-variant-caps:normal on FO — small-caps axis vs variant-caps pairing',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis-small-caps:none!important;font-variant-caps:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w16; small-caps none + variant-caps normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-036',
    label: 'Loop AI b10 w16 #036: Chromium synthesis decode-interval',
    idea: 'Chromium synthesis:none + decode-interval raster — timing flush with faux synthesis block',
    css: FO_BASELINE_CSS + TEXT_LEAF + CHROMIUM,
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w16; Chromium synthesis + decode-interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-037',
    label: 'Loop AI b10 w16 #037: all axes integer-viewbox',
    idea: 'font-synthesis weight/style/small-caps:none on FO + integer-viewbox snap — synthesis vs viewBox rounding',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-synthesis:none!important;font-synthesis-weight:none!important;' +
      'font-synthesis-style:none!important;font-synthesis-small-caps:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b10 w16; full synthesis axes + integer-viewbox; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-038',
    label: 'Loop AI b10 w16 #038: synthesis star fonts-ready',
    idea: 'font-synthesis:none on FO * + fonts-ready-interval — leaf synthesis block after font load settle',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{font-synthesis:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'fonts-ready-interval',
    notes: 'Loop AI b10 w16; synthesis * + fonts-ready-interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-039',
    label: 'Loop AI b10 w16 #039: weight root decode-interval-raf',
    idea: 'font-synthesis-weight:none root only + decode-interval-raf — weight-axis timing vs rAF raster flush',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{font-synthesis-weight:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval-raf',
    notes: 'Loop AI b10 w16; weight none root + decode-interval-raf; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w16-040',
    label: 'Loop AI b10 w16 #040: Chromium synthesis pin lh decode',
    idea: 'Chromium full synthesis axes + pin lh from live + decode-interval — structural patches with synthesis block',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      CHROMIUM +
      'foreignObject{font-synthesis-weight:none!important;font-synthesis-style:none!important;' +
      'font-synthesis-small-caps:none!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w16; Chromium synthesis + pin lh + decode-interval; FO-raster — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 21) — text-fix: white-space modes
 * (normal / nowrap / pre / pre-wrap / pre-line) — 40 recipes, 8 per mode.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CODE_CHAIN =
  'foreignObject pre,foreignObject code,foreignObject kbd,foreignObject samp'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  // —— white-space: normal (001–008) ——
  {
    id: 'loop-ai-b10-w21-001',
    label: 'Loop AI b10 w21 #001: white-space normal star',
    idea: 'white-space:normal on FO * — reset inherited pre/nowrap before FO raster',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{white-space:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; ws normal baseline on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-002',
    label: 'Loop AI b10 w21 #002: normal + text-wrap wrap',
    idea: 'white-space:normal + text-wrap:wrap on FO * — explicit wrap with normal collapse',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:normal!important;text-wrap:wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; normal + text-wrap wrap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-003',
    label: 'Loop AI b10 w21 #003: normal + overflow-wrap anywhere',
    idea: 'white-space:normal + overflow-wrap:anywhere — long-token break with normal ws',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:normal!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; normal + overflow-wrap anywhere; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-004',
    label: 'Loop AI b10 w21 #004: normal on anchors',
    idea: 'white-space:normal on FO anchors only — nav link wrap reset vs inherited nowrap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{white-space:normal!important;text-wrap:wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; normal on anchors only; nav-like — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-005',
    label: 'Loop AI b10 w21 #005: normal on text chain',
    idea: 'white-space:normal on inline text chain selectors — headings/labels vs block pre',
    css: FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{white-space:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; normal on text chain only; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-006',
    label: 'Loop AI b10 w21 #006: normal + Chromium kerning',
    idea: 'Chromium FO font copy + white-space:normal on FO * — kerning with collapsed ws',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{white-space:normal!important;font-kerning:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'Loop AI b10 w21; Chromium + normal ws; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-007',
    label: 'Loop AI b10 w21 #007: normal + ws-collapse collapse',
    idea: 'white-space:normal + white-space-collapse:collapse on FO * — CSS Text 4 collapse probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:normal!important;white-space-collapse:collapse!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; normal + ws-collapse collapse; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-008',
    label: 'Loop AI b10 w21 #008: normal + text-wrap-mode wrap',
    idea: 'white-space:normal + text-wrap-mode:wrap on FO * — dual wrap hints before FO decode',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:normal!important;text-wrap-mode:wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; normal + text-wrap-mode wrap; no text bypass.',
  },

  // —— white-space: nowrap (009–016) ——
  {
    id: 'loop-ai-b10-w21-009',
    label: 'Loop AI b10 w21 #009: white-space nowrap star',
    idea: 'white-space:nowrap on FO * — single-line strut vs wrap before FO raster',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap baseline on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-010',
    label: 'Loop AI b10 w21 #010: nowrap + text-wrap nowrap',
    idea: 'white-space:nowrap + text-wrap:nowrap on FO * — dual single-line hints',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap + text-wrap nowrap; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-011',
    label: 'Loop AI b10 w21 #011: nowrap + break locks',
    idea: 'white-space:nowrap + overflow-wrap:normal + word-break:normal — no soft breaks',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important;' +
      'word-break:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap + break locks; nav-like — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-012',
    label: 'Loop AI b10 w21 #012: nowrap on anchors',
    idea: 'white-space:nowrap on FO anchors — nav label single-line vs block wrap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{white-space:nowrap!important;text-wrap:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap on anchors only; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-013',
    label: 'Loop AI b10 w21 #013: nowrap on text chain',
    idea: 'white-space:nowrap on inline text chain — headings/labels single line',
    css: FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap on text chain; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-014',
    label: 'Loop AI b10 w21 #014: nowrap + Chromium geometric',
    idea: 'Chromium FO font copy + nowrap + text-rendering:geometricPrecision on FO *',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{white-space:nowrap!important;text-rendering:geometricPrecision!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; Chromium + nowrap + geometricPrecision; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-015',
    label: 'Loop AI b10 w21 #015: nowrap + ellipsis clip',
    idea: 'white-space:nowrap + overflow:hidden + text-overflow:ellipsis on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:nowrap!important;overflow:hidden!important;' +
      'text-overflow:ellipsis!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap + ellipsis clip; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-016',
    label: 'Loop AI b10 w21 #016: nowrap + hyphens none',
    idea: 'white-space:nowrap + hyphens:none on FO * — disable hyphenation on single line',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:nowrap!important;hyphens:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; nowrap + hyphens none; no text bypass.',
  },

  // —— white-space: pre (017–024) ——
  {
    id: 'loop-ai-b10-w21-017',
    label: 'Loop AI b10 w21 #017: white-space pre star',
    idea: 'white-space:pre on FO * — preserve sequences and newline breaks before FO raster',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{white-space:pre!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre baseline on leaves; text metric only — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-018',
    label: 'Loop AI b10 w21 #018: pre + overflow-x auto',
    idea: 'white-space:pre + overflow-x:auto on FO block children — horizontal scroll for long runs',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre!important}' +
      'foreignObject pre,foreignObject div,foreignObject p' +
      '{overflow-x:auto!important;max-width:100%!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre + overflow-x auto on blocks; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-019',
    label: 'Loop AI b10 w21 #019: pre + tab-size 4',
    idea: 'white-space:pre + tab-size:4 on FO * — tab width strut in preserved layout',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre!important;tab-size:4!important;-moz-tab-size:4!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre + tab-size 4; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-020',
    label: 'Loop AI b10 w21 #020: pre on code chain',
    idea: 'white-space:pre on pre/code/kbd/samp only — monospace blocks vs inline leaves',
    css: FO_BASELINE_CSS + TEXT_LEAF + CODE_CHAIN + '{white-space:pre!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre on code chain only; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-021',
    label: 'Loop AI b10 w21 #021: pre + monospace code',
    idea: 'white-space:pre + monospace font stack on code chain — glyph metrics with preserved ws',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      CODE_CHAIN +
      '{white-space:pre!important;font-family:ui-monospace,monospace!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre + monospace on code; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-022',
    label: 'Loop AI b10 w21 #022: pre + Chromium break lock',
    idea: 'Chromium FO font copy + white-space:pre + overflow-wrap:normal on FO *',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{white-space:pre!important;overflow-wrap:normal!important;word-break:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; Chromium + pre + break lock; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-023',
    label: 'Loop AI b10 w21 #023: pre + ws-collapse preserve',
    idea: 'white-space:pre + white-space-collapse:preserve on FO * — CSS Text 4 preserve probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre!important;white-space-collapse:preserve!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre + ws-collapse preserve; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-024',
    label: 'Loop AI b10 w21 #024: pre + word-break keep-all',
    idea: 'white-space:pre + word-break:keep-all on FO * — CJK/word cluster keep with preserved runs',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre!important;word-break:keep-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre + word-break keep-all; no text bypass.',
  },

  // —— white-space: pre-wrap (025–032) ——
  {
    id: 'loop-ai-b10-w21-025',
    label: 'Loop AI b10 w21 #025: white-space pre-wrap star',
    idea: 'white-space:pre-wrap on FO * — preserved runs with soft wrap before FO raster',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{white-space:pre-wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap baseline on leaves; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-026',
    label: 'Loop AI b10 w21 #026: pre-wrap + overflow-wrap break-word',
    idea: 'white-space:pre-wrap + overflow-wrap:break-word — long tokens wrap inside preserved runs',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-wrap!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap + overflow-wrap break-word; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-027',
    label: 'Loop AI b10 w21 #027: pre-wrap + word-break break-word',
    idea: 'white-space:pre-wrap + word-break:break-word on FO * — dual break hints',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-wrap!important;word-break:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap + word-break break-word; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-028',
    label: 'Loop AI b10 w21 #028: pre-wrap on block chain',
    idea: 'white-space:pre-wrap on p/h block text chain — paragraph wrap vs inline nowrap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
      'foreignObject h5,foreignObject h6,foreignObject li,foreignObject label' +
      '{white-space:pre-wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap on block chain; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-029',
    label: 'Loop AI b10 w21 #029: pre-wrap + ws-collapse preserve-breaks',
    idea: 'white-space:pre-wrap + white-space-collapse:preserve-breaks — CSS Text 4 break preservation',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-wrap!important;white-space-collapse:preserve-breaks!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap + preserve-breaks collapse; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-030',
    label: 'Loop AI b10 w21 #030: pre-wrap + text-wrap wrap',
    idea: 'white-space:pre-wrap + text-wrap:wrap on FO * — soft wrap with preserved spaces',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-wrap!important;text-wrap:wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap + text-wrap wrap; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-031',
    label: 'Loop AI b10 w21 #031: pre-wrap + Chromium spacing',
    idea: 'Chromium FO font copy + pre-wrap + letter/word-spacing:normal on FO *',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{white-space:pre-wrap!important;letter-spacing:normal!important;' +
      'word-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; Chromium + pre-wrap + spacing normal; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-032',
    label: 'Loop AI b10 w21 #032: pre-wrap + line-height normal',
    idea: 'white-space:pre-wrap + line-height:normal on FO * — strut vs preserved run wrap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-wrap!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-wrap + line-height normal; no text bypass.',
  },

  // —— white-space: pre-line (033–040) ——
  {
    id: 'loop-ai-b10-w21-033',
    label: 'Loop AI b10 w21 #033: white-space pre-line star',
    idea: 'white-space:pre-line on FO * — collapse spaces, preserve newlines before FO raster',
    css: FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{white-space:pre-line!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-line baseline on leaves; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-034',
    label: 'Loop AI b10 w21 #034: pre-line + overflow-wrap anywhere',
    idea: 'white-space:pre-line + overflow-wrap:anywhere — newline preserve + long-token break',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-line!important;overflow-wrap:anywhere!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-line + overflow-wrap anywhere; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-035',
    label: 'Loop AI b10 w21 #035: pre-line + word-break normal',
    idea: 'white-space:pre-line + word-break:normal on FO * — default breaks with newline preserve',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-line!important;word-break:normal!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-line + word-break normal; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-036',
    label: 'Loop AI b10 w21 #036: pre-line on block chain',
    idea: 'white-space:pre-line on p/h/li/label block chain — multiline copy vs inline nowrap',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject p,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
      'foreignObject h5,foreignObject h6,foreignObject li,foreignObject label' +
      '{white-space:pre-line!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-line on block chain; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-037',
    label: 'Loop AI b10 w21 #037: pre-line + text-wrap wrap',
    idea: 'white-space:pre-line + text-wrap:wrap on FO * — soft wrap with newline preservation',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-line!important;text-wrap:wrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-line + text-wrap wrap; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-038',
    label: 'Loop AI b10 w21 #038: pre-line + ws-collapse preserve-breaks',
    idea: 'white-space:pre-line + white-space-collapse:preserve-breaks — newline + break policy',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-line!important;white-space-collapse:preserve-breaks!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; pre-line + preserve-breaks; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-039',
    label: 'Loop AI b10 w21 #039: pre-line + Chromium spacing',
    idea: 'Chromium FO font copy + pre-line + letter/word-spacing:normal on FO *',
    css:
      FO_BASELINE_CSS +
      CHROMIUM_COPY +
      'foreignObject *{white-space:pre-line!important;letter-spacing:normal!important;' +
      'word-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w21; Chromium + pre-line + spacing; no text bypass.',
  },
  {
    id: 'loop-ai-b10-w21-040',
    label: 'Loop AI b10 w21 #040: pre-line + line-height from-font',
    idea: 'white-space:pre-line + line-height:from-font on FO * — font metrics lh with newline preserve',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{white-space:pre-line!important;line-height:from-font!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w21; pre-line + from-font lh + decode-interval; no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

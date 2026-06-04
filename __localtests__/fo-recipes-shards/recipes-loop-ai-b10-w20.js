/**
 * Loop AI batch-10 FO recipe shard (worker 20) — text-fix: text-wrap balance/pretty/nowrap/stable.
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
    id: 'loop-ai-b10-w20-001',
    label: 'Loop AI b10 w20 #001: text-wrap balance style auto',
    idea: 'text-wrap:balance + text-wrap-style:auto on FO * — balanced line lengths before FO raster',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap balance style auto; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-002',
    label: 'Loop AI b10 w20 #002: text-wrap pretty style auto',
    idea: 'text-wrap:pretty + text-wrap-style:auto on FO * — Chromium pretty wrap vs balance',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:pretty!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap pretty style auto; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-003',
    label: 'Loop AI b10 w20 #003: text-wrap stable style auto',
    idea: 'text-wrap:stable + text-wrap-style:auto on FO * — stable wrap vs pretty/balance drift',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:stable!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap stable style auto; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-004',
    label: 'Loop AI b10 w20 #004: text-wrap nowrap single line',
    idea: 'text-wrap:nowrap + white-space:nowrap on FO * — nav-like single-line strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap nowrap single line; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-005',
    label: 'Loop AI b10 w20 #005: text-wrap-mode wrap explicit',
    idea: 'text-wrap-mode:wrap on FO * — explicit wrap mode vs shorthand balance/pretty',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap-mode:wrap!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap-mode wrap explicit; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-006',
    label: 'Loop AI b10 w20 #006: text-wrap-mode nowrap mode',
    idea: 'text-wrap-mode:nowrap + white-space:nowrap on FO * — longhand nowrap mode stack',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap-mode:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap-mode nowrap mode; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-007',
    label: 'Loop AI b10 w20 #007: text-wrap-style balance longhand',
    idea: 'text-wrap-style:balance only on FO * — style longhand without text-wrap shorthand',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap-style:balance!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap-style balance longhand; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-008',
    label: 'Loop AI b10 w20 #008: text-wrap-style pretty longhand',
    idea: 'text-wrap-style:pretty only on FO * — pretty style longhand probe',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap-style:pretty!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap-style pretty longhand; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-009',
    label: 'Loop AI b10 w20 #009: text-wrap-style stable longhand',
    idea: 'text-wrap-style:stable only on FO * — stable style longhand probe',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap-style:stable!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap-style stable longhand; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-010',
    label: 'Loop AI b10 w20 #010: text-wrap-style auto reset',
    idea: 'text-wrap-style:auto on FO * — reset inherited wrap style to browser default',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; text-wrap-style auto reset; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-011',
    label: 'Loop AI b10 w20 #011: balance on FO anchors',
    idea: 'text-wrap:balance on FO a only — nav anchor balanced wrap vs body copy',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-wrap:balance!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance on FO anchors; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-012',
    label: 'Loop AI b10 w20 #012: pretty on FO anchors',
    idea: 'text-wrap:pretty on FO a only — anchor pretty wrap for nav labels',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-wrap:pretty!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; pretty on FO anchors; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-013',
    label: 'Loop AI b10 w20 #013: stable on FO anchors',
    idea: 'text-wrap:stable on FO a only — stable wrap on inline nav links',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-wrap:stable!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; stable on FO anchors; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-014',
    label: 'Loop AI b10 w20 #014: nowrap on FO anchors',
    idea: 'text-wrap:nowrap + white-space:nowrap on FO a — single-line nav anchors only',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-wrap:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; nowrap on FO anchors; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-015',
    label: 'Loop AI b10 w20 #015: balance nav a nowrap siblings',
    idea: 'text-wrap:balance on FO nav a — named nav row balanced wrap on links',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-wrap:balance!important;text-wrap-style:auto!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance nav a nowrap siblings; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-016',
    label: 'Loop AI b10 w20 #016: balance inline text chain',
    idea: 'text-wrap:balance on inline text chain selectors — p/span/a/label limited scope',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-wrap:balance!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance inline text chain; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-017',
    label: 'Loop AI b10 w20 #017: pretty on FO labels',
    idea: 'text-wrap:pretty on FO label only — form label pretty wrap vs nav',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject label{text-wrap:pretty!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; pretty on FO labels; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-018',
    label: 'Loop AI b10 w20 #018: stable on FO headings',
    idea: 'text-wrap:stable on FO h1–h6 — heading stable wrap before FO raster',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{text-wrap:stable!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; stable on FO headings; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-019',
    label: 'Loop AI b10 w20 #019: nowrap on FO buttons',
    idea: 'text-wrap:nowrap on FO button — single-line button label strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject button{text-wrap:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; nowrap on FO buttons; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-020',
    label: 'Loop AI b10 w20 #020: stable inline text chain',
    idea: 'text-wrap:stable on inline text chain — limited selector stable wrap',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-wrap:stable!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; stable inline text chain; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-021',
    label: 'Loop AI b10 w20 #021: balance overflow-wrap anywhere',
    idea: 'text-wrap:balance + overflow-wrap:anywhere on FO * — soft break + balanced lines',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;overflow-wrap:anywhere!important;word-break:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance overflow-wrap anywhere; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-022',
    label: 'Loop AI b10 w20 #022: pretty hyphens none',
    idea: 'text-wrap:pretty + hyphens:none on FO * — pretty wrap without hyphenation',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:pretty!important;hyphens:none!important;-webkit-hyphens:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; pretty hyphens none; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-023',
    label: 'Loop AI b10 w20 #023: stable overflow-wrap break-word',
    idea: 'text-wrap:stable + overflow-wrap:break-word on FO * — stable wrap with break-word fallback',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:stable!important;overflow-wrap:break-word!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; stable overflow-wrap break-word; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-024',
    label: 'Loop AI b10 w20 #024: nowrap overflow-wrap normal',
    idea: 'text-wrap:nowrap + overflow-wrap:normal on FO * — nowrap with normal overflow wrap',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:nowrap!important;white-space:nowrap!important;overflow-wrap:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; nowrap overflow-wrap normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-025',
    label: 'Loop AI b10 w20 #025: balance white-space normal',
    idea: 'text-wrap:balance + white-space:normal on FO * — balanced wrap with normal ws collapse',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;white-space:normal!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance white-space normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-026',
    label: 'Loop AI b10 w20 #026: pretty text-wrap-mode wrap',
    idea: 'text-wrap:pretty + text-wrap-mode:wrap on FO * — pretty shorthand + explicit wrap mode',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:pretty!important;text-wrap-mode:wrap!important;text-wrap-style:auto!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; pretty text-wrap-mode wrap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-027',
    label: 'Loop AI b10 w20 #027: stable letter-spacing normal',
    idea: 'text-wrap:stable + letter-spacing:normal on FO * — stable wrap + tracking reset',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:stable!important;letter-spacing:normal!important;word-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; stable letter-spacing normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-028',
    label: 'Loop AI b10 w20 #028: balance font-kerning normal',
    idea: 'text-wrap:balance on FO * + Chromium font-kerning:normal copy on root',
    css:
      FO_BASELINE_CSS + CHROMIUM + 'foreignObject *{text-wrap:balance!important;text-wrap-style:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance font-kerning normal; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-029',
    label: 'Loop AI b10 w20 #029: nowrap nav hyphens none',
    idea: 'text-wrap:nowrap on FO nav a + hyphens:none — nav single-line without hyphen breaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important;hyphens:none!important;-webkit-hyphens:none!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; nowrap nav hyphens none; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-030',
    label: 'Loop AI b10 w20 #030: balance double rAF',
    idea: 'text-wrap:balance on FO * + double rAF raster flush before FO decode',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'double-raf',
    notes: 'Loop AI b10 w20; balance double rAF; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-031',
    label: 'Loop AI b10 w20 #031: balance decode interval',
    idea: 'text-wrap:balance on FO * + decode-interval raster wait — wrap settle before draw',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w20; balance decode interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-032',
    label: 'Loop AI b10 w20 #032: pretty decode interval',
    idea: 'text-wrap:pretty on FO * + decode-interval — pretty wrap before compositor flush',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:pretty!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w20; pretty decode interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-033',
    label: 'Loop AI b10 w20 #033: stable decode interval',
    idea: 'text-wrap:stable on FO * + decode-interval — stable wrap raster timing probe',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:stable!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w20; stable decode interval; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-034',
    label: 'Loop AI b10 w20 #034: balance pin lh decode',
    idea: 'text-wrap:balance + h2-pin-line-height-from-live + decode-interval — wrap + measured strut',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w20; balance pin lh decode; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-035',
    label: 'Loop AI b10 w20 #035: pretty stretch leaf decode',
    idea: 'text-wrap:pretty + h2-flex-stretch-leaf-from-live + decode-interval — pretty + cross-axis pin',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:pretty!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w20; pretty stretch leaf decode; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-036',
    label: 'Loop AI b10 w20 #036: stable pin width decode',
    idea: 'text-wrap:stable + h2-pin-width-from-live + decode-interval — stable wrap + width pin',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:stable!important;text-wrap-style:auto!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    rasterPatch: 'decode-interval',
    notes: 'Loop AI b10 w20; stable pin width decode; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-037',
    label: 'Loop AI b10 w20 #037: stable star anchor nowrap',
    idea: 'text-wrap:stable on FO * + text-wrap:nowrap on FO a — body stable, nav anchors single-line',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:stable!important;text-wrap-style:auto!important}' + 'foreignObject a{text-wrap:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; stable star anchor nowrap; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-038',
    label: 'Loop AI b10 w20 #038: balance FO root inherit',
    idea: 'text-wrap:balance on FO root + text-wrap:inherit on FO * — root wrap model cascade',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-wrap:balance!important;text-wrap-style:auto!important}' + 'foreignObject *{text-wrap:inherit!important;text-wrap-style:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; balance FO root inherit; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-039',
    label: 'Loop AI b10 w20 #039: wrap stack balance mode style',
    idea: 'text-wrap:balance + text-wrap-mode:wrap + text-wrap-style:balance — full wrap longhand stack',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:balance!important;text-wrap-mode:wrap!important;text-wrap-style:balance!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; wrap stack balance mode style; FO-raster — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w20-040',
    label: 'Loop AI b10 w20 #040: pretty nowrap anchor contrast',
    idea: 'text-wrap:pretty on FO * + nowrap override on FO a — pretty body, anchor single-line',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-wrap:pretty!important;text-wrap-style:auto!important}' + 'foreignObject a{text-wrap:nowrap!important;white-space:nowrap!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w20; pretty nowrap anchor contrast; FO-raster — no text bypass.',
  }
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

#!/usr/bin/env node
/** One-shot generator for recipes-drift-batch777-triple.js */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const LH039 = {
  css: 'LH039_CSS',
  harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
}

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR_ROOT = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

const HEADER = `/**
 * Drift batch 777 — tc-fix-drift-039 lh-normal × winner stacks (drift-batch777-001..040).
 * Lane theme: line-height:normal!important on every row + lab (555) or product (66) winner forks.
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch777-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch777-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const LH039_CSS = FO_BASELINE_CSS + CAPTURE_LH_NORMAL_IMPORTANT
const H2_LH039_CSS = H2_RASTER_NORMALIZE_CSS + CAPTURE_LH_NORMAL_IMPORTANT

const LH039 = {
  css: LH039_CSS,
  harnessSnapdom: { experimentalFoTextLineHeightNormal: true },
}

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR_ROOT = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
`

const FOOTER = `
]

if (SPECS.length !== 40) {
  throw new Error(\`recipes-drift-batch777-triple: expected 40 specs, got \${SPECS.length}\`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set([])

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: \`drift-batch777-\${num}\`,
    label: \`drift-batch777 #\${i + 1}: \${spec.label}\`,
    idea: spec.idea,
    css: specCss ?? LH039_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch777',
    active: DRIFT_BATCH_KEEP_ACTIVE.size === 0 || DRIFT_BATCH_KEEP_ACTIVE.has(\`drift-batch777-\${num}\`),
    notes: \`Drift batch 777 lane=\${spec.lane}; 039 lh-normal × winner fork; FO raster only.\`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    (r.labRasterPatches ?? []).join(','),
    r.labLoadPipeline ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null),
    r.css,
  ].join('\\0')
  if (seen.has(key)) throw new Error(\`recipes-drift-batch777-triple: duplicate recipe key \${r.id}\`)
  seen.add(key)
}

export const DRIFT_BATCH777_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`

/** @type {{ lane: string, label: string, idea: string, extra: object }[]} */
const specs = [
  // 001-010 lab: 039 + svgRootRound × decode
  { lane: '039-int-vb-settle-w7', label: '039 + int-vb + decode-settle + w7', idea: 'lh-normal + integer-viewbox + decodeSettle + w7 meta', extra: { inject: 'both', css: 'LH039_CSS', lh039: true, rasterPatch: 'lab-toCanvas', svgRootRound: 'integer-viewbox', labToCanvasOpts: 'W7_META_SETTLE' } },
  { lane: '039-int-vb-interval-dpr', label: '039 + int-vb + decode-interval + w7 dpr', idea: 'lh-normal + integer-viewbox + decode-interval + w7 dpr root', extra: { inject: 'both', ...LH039, rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox', labToCanvasOpts: { ...W7_DPR_ROOT } } },
  { lane: '039-int-floor-double-w7', label: '039 + int-floor + double-decode + w7', idea: 'lh-normal + int-floor + double-decode + w7 meta', extra: { inject: 'both', ...LH039, rasterPatch: 'double-decode', svgRootRound: 'int-floor', labToCanvasOpts: { ...W7_META } } },
  { lane: '039-round-dims-fonts-w7', label: '039 + round-dims + fonts-ready + w7', idea: 'lh-normal + round-dims + fonts-ready + w7 meta', extra: { inject: 'both', ...LH039, rasterPatch: 'fonts-ready', svgRootRound: 'round-dims', labToCanvasOpts: { ...W7_META } } },
  { lane: '039-round-dims-settle-dpr', label: '039 + round-dims + decode-settle + w7 dpr', idea: 'lh-normal + round-dims + decodeSettle + w7 dpr (555-040 base)', extra: { inject: 'both', ...LH039, rasterPatch: 'lab-toCanvas', svgRootRound: 'round-dims', labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-round-dims-double-decode', label: '039 + round-dims + double-decode + settle', idea: 'lh-normal + round-dims + double-decode + decodeSettle (555-040 winner)', extra: { inject: 'both', ...LH039, rasterPatch: 'double-decode', svgRootRound: 'round-dims', labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-googlefonts-int-vb-interval', label: '039 + googlefonts + int-vb + interval (555-037)', idea: 'lh-normal + batch2-036 rfork on lab path', extra: { inject: 'capture', css: LH039_CSS, monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-meta', disableGbcrFracNudge: true, dprScaledSvgRootDraw: true } } },
  { lane: '039-googlefonts-round-settle-dpr', label: '039 + googlefonts + round-dims + settle (555-038)', idea: 'lh-normal + batch2-036 round-dims rfork', extra: { inject: 'both', css: LH039_CSS, monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'lab-toCanvas', svgRootRound: 'round-dims', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-h2-full-int-floor-interval', label: '039 + h2 full + int-floor + interval (555-039)', idea: 'lh-normal + batch1-040 h2+googlefonts rfork', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'decode-interval', svgRootRound: 'int-floor', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-h2-full-round-double', label: '039 + h2 full + round + double (555-040)', idea: 'lh-normal + batch1-040 full stack winner', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'double-decode', svgRootRound: 'round-dims', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  // 011-020 lab: 039 + timing / mp / decode variants
  { lane: '039-decode-100ms-w7-dpr', label: '039 + lab-decode-100ms + w7 dpr', idea: 'lh-normal + lab-decode-100ms + w7 dpr root', extra: { inject: 'both', ...LH039, rasterPatch: 'lab-toCanvas', labRasterPatches: ['lab-decode-100ms'], labToCanvasOpts: { ...W7_DPR_ROOT } } },
  { lane: '039-decode-raf-w7', label: '039 + lab-decode-raf + w7 meta', idea: 'lh-normal + decode-raf + w7 meta', extra: { inject: 'both', ...LH039, rasterPatch: 'lab-toCanvas', labRasterPatches: ['lab-decode-raf'], labToCanvasOpts: { ...W7_META } } },
  { lane: '039-mp-h2-settle-w7', label: '039 + mp h2 normalize + decode-settle', idea: 'lh-normal + mp h2-fo-normalize-full + decodeSettle + w7', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: 'h2-fo-normalize-full', rasterPatch: 'lab-toCanvas', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { ...W7_META, decodeSettle: true } } },
  { lane: '039-mp-capture-recipe-interval-dpr', label: '039 + mp capture-recipe + interval + dpr', idea: 'lh-normal + capture-recipe-css + decode-interval + w7 dpr', extra: { inject: 'both', css: LH039_CSS + 'foreignObject *{box-sizing:border-box!important;min-width:0!important}', monkeypatch: 'capture-recipe-css', rasterPatch: 'decode-interval', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { ...W7_DPR_ROOT } } },
  { lane: '039-fonts-ready-interval-w7', label: '039 + fonts-ready-interval + w7 (batch1-029)', idea: 'lh-normal + batch1-029 fonts-ready rfork', extra: { inject: 'both', ...LH039, rasterPatch: 'fonts-ready-interval', labToCanvasOpts: { ...W7_META } } },
  { lane: '039-phantom-font-settle-dpr', label: '039 + phantom font + decode-settle + dpr', idea: 'lh-normal + batch1-030 phantom font rfork', extra: { inject: 'both', ...LH039, rasterPatch: 'lab-toCanvas', labPreRaster: 'phantom-font-prime', labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-combo-settle-interval-fonts', label: '039 + combo settle+interval+fonts (batch1-040)', idea: 'lh-normal + batch1-040 combo decode+font stack', extra: { inject: 'both', ...LH039, rasterPatch: 'lab-toCanvas', labLoadPipeline: 'decode-interval', labPreRaster: 'fonts-ready', labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-chromium-copy-interval-w7', label: '039 + chromium copy + decode-interval + w7', idea: 'lh-normal + chromium font copies + decode-interval', extra: { inject: 'both', css: LH039_CSS + 'foreignObject{font-kerning:normal!important;font-synthesis:none!important;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, rasterPatch: 'decode-interval', labToCanvasOpts: { ...W7_META } } },
  { lane: '039-device-grid-round-settle', label: '039 + device-grid + round-dims + settle', idea: 'lh-normal + device-grid-floor + round-dims + decodeSettle', extra: { inject: 'both', ...LH039, rasterPatch: 'device-grid-floor', svgRootRound: 'round-dims', labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-offscreen-int-vb-w7', label: '039 + offscreen + int-vb + w7 meta', idea: 'lh-normal + offscreen-canvas + integer-viewbox + w7', extra: { inject: 'both', ...LH039, rasterPatch: 'offscreen-canvas', svgRootRound: 'integer-viewbox', labToCanvasOpts: { ...W7_META } } },
  // 021-030 product: 039 + product winners
  { lane: '039-product-settle-w7', label: '039 + product settle + w7 meta', idea: 'lh-normal + product-toCanvas decodeSettle + w7 meta', extra: { inject: 'both', ...LH039, rasterPatch: 'product-toCanvas', harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-product-interval-w7-dpr', label: '039 + product interval + w7 dpr', idea: 'lh-normal + product decode-interval + w7 dpr root', extra: { inject: 'both', ...LH039, rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-mp-googlefonts-product-interval', label: '039 + mp googlefonts product interval (66-012)', idea: 'lh-normal + drift-batch66-012 winner rfork', extra: { inject: 'both', css: LH039_CSS, monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-mp-h2-googlefonts-product-settle', label: '039 + mp h2+googlefonts product settle', idea: 'lh-normal + h2+googlefonts product decodeSettle + w7 dpr', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'product-toCanvas', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-mp-capture-recipe-product-w7', label: '039 + mp capture-recipe product w7', idea: 'lh-normal + capture-recipe-css on product path + w7 meta', extra: { inject: 'both', css: LH039_CSS + 'foreignObject *{box-sizing:border-box!important;min-width:0!important}', monkeypatch: 'capture-recipe-css', rasterPatch: 'product-toCanvas', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-radical-pin-inline-product-settle', label: '039 + pin-inline product settle (66-016)', idea: 'lh-normal + lab-pin-inline-box + product settle + w7', extra: { inject: 'both', ...LH039, radicalPatch: 'lab-pin-inline-box-height-from-clientrects', rasterPatch: 'product-toCanvas', harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-radical-pin-ink-product-interval', label: '039 + pin-ink product interval (66-017)', idea: 'lh-normal + pin-ink + product decode-interval + w7', extra: { inject: 'both', ...LH039, radicalPatch: 'lab-pin-ink-top-in-border-padding', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-product-chromium-settle-w7-dpr', label: '039 + product chromium + settle + dpr', idea: 'lh-normal + chromium copy + product settle + w7 dpr', extra: { inject: 'both', css: LH039_CSS + 'foreignObject{font-kerning:normal!important;text-rendering:geometricPrecision!important}', harnessSnapdom: { experimentalFoTextLineHeightNormal: true }, rasterPatch: 'product-toCanvas', harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-product-textlayout-interval-w7', label: '039 + product textLayout + interval + w7', idea: 'lh-normal + experimentalFoTextLayout + product interval', extra: { inject: 'both', ...LH039, experimentalFoTextLayout: true, rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-product-trim-settle-w7', label: '039 + product leading-trim + settle + w7', idea: 'lh-normal + leading-trim on product + decodeSettle + w7', extra: { inject: 'both', css: LH039_CSS + 'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}', harnessSnapdom: { experimentalFoTextLineHeightNormal: true, experimentalFoLeadingTrim: true }, rasterPatch: 'product-toCanvas', harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  // 031-040 product wf forks with 039
  { lane: '039-wf-batch1-029-product-dpr', label: '039 + wf batch1-029 product dpr', idea: 'lh-normal + batch1-029 on product path', extra: { inject: 'both', ...LH039, rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessProductToCanvas: { experimentalRasterDprScaledSvgRootDraw: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDecodeSettle: true } } },
  { lane: '039-wf-batch1-030-product-settle', label: '039 + wf batch1-030 phantom font product', idea: 'lh-normal + batch1-030 phantom font on product', extra: { inject: 'both', ...LH039, rasterPatch: 'product-toCanvas', labPreRaster: 'phantom-font-prime', harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta' } } },
  { lane: '039-wf-tc-drift-039-product-only', label: '039 + product path 039-only control', idea: 'lh-normal capture only on product-toCanvas (no extra mp)', extra: { inject: 'capture', ...LH039, rasterPatch: 'product-toCanvas' } },
  { lane: '039-wf-batch2-036-product-interval', label: '039 + wf batch2-036 product interval', idea: 'lh-normal + batch2-036 googlefonts+dpr on product', extra: { inject: 'both', css: LH039_CSS, monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-wf-batch1-040-product-full-settle', label: '039 + wf batch1-040 product full settle', idea: 'lh-normal + h2+googlefonts full stack product settle', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'product-toCanvas', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-wf-batch1-040-product-full-interval', label: '039 + wf batch1-040 product full interval', idea: 'lh-normal + h2+googlefonts full stack product interval', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true, experimentalRasterDecodeSettle: true } } },
  { lane: '039-wf-batch2-036-product-settle-dpr', label: '039 + wf batch2-036 product settle dpr', idea: 'lh-normal + googlefonts product settle + w7 dpr', extra: { inject: 'both', css: LH039_CSS, monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'product-toCanvas', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-max-lab-round-double-google', label: '039 + max lab stack round double google', idea: 'lh-normal + 555-040 + 555-037 combined lab max', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'double-decode', svgRootRound: 'round-dims', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { ...W7_DPR_ROOT, decodeSettle: true } } },
  { lane: '039-max-product-full-triple', label: '039 + max product triple stack', idea: 'lh-normal + 66-012 + 66-040 combined product max', extra: { inject: 'both', css: H2_LH039_CSS, monkeypatch: ['h2-fo-normalize-full', 'googlefonts-embed-capture'], rasterPatch: 'product-toCanvas', labLoadPipeline: 'decode-interval', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, harnessProductToCanvas: { experimentalRasterDecodeSettle: true, experimentalRasterSvgPatch: 'fo-y-half-leading-dpr-root-meta', experimentalRasterDprScaledSvgRootDraw: true } } },
  { lane: '039-max-lab-intvb-google-interval', label: '039 + max lab int-vb google interval', idea: 'lh-normal + 555-037 lab max rfork', extra: { inject: 'capture', css: LH039_CSS, monkeypatch: 'googlefonts-embed-capture', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox', harnessSnapdom: { embedFonts: true, experimentalFoTextLineHeightNormal: true }, labToCanvasOpts: { rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta', disableGbcrFracNudge: true, dprScaledSvgRootDraw: true, decodeSettle: true } } },
]

function fmtExtra(extra) {
  const lines = Object.entries(extra).map(([k, v]) => {
    if (k === 'css' && v === 'LH039_CSS') return `      css: LH039_CSS,`
    if (k === 'css' && v === 'H2_LH039_CSS') return `      css: H2_LH039_CSS,`
    if (typeof v === 'string') return `      ${k}: ${JSON.stringify(v)},`
    if (k === 'labToCanvasOpts' && v && typeof v === 'object') {
      const inner = Object.entries(v)
        .map(([kk, vv]) => {
          if (kk === 'rasterOnlySvgPatch') return `        rasterOnlySvgPatch: ${JSON.stringify(vv)},`
          if (kk === 'disableGbcrFracNudge') return `        disableGbcrFracNudge: true,`
          if (kk === 'dprScaledSvgRootDraw') return `        dprScaledSvgRootDraw: true,`
          if (kk === 'decodeSettle') return `        decodeSettle: true,`
          return `        ${kk}: ${JSON.stringify(vv)},`
        })
        .join('\n')
      return `      labToCanvasOpts: { ${inner.includes('rasterOnlySvgPatch') ? '' : ''}\n${inner}\n      },`.replace('{\n', '{\n')
    }
    if (k === 'harnessSnapdom' && v && typeof v === 'object') {
      const parts = Object.entries(v).map(([kk, vv]) => `        ${kk}: ${JSON.stringify(vv)},`)
      return `      harnessSnapdom: {\n${parts.join('\n')}\n      },`
    }
    if (k === 'harnessProductToCanvas' && v && typeof v === 'object') {
      const parts = Object.entries(v).map(([kk, vv]) => `        ${kk}: ${JSON.stringify(vv)},`)
      return `      harnessProductToCanvas: {\n${parts.join('\n')}\n      },`
    }
    return `      ${k}: ${JSON.stringify(v)},`
  })
  // expand spread LH039
  const hasLh = extra.css === 'LH039_CSS' || extra.css === 'H2_LH039_CSS'
  const filtered = lines.filter((l) => !l.includes('"LH039_CSS"') && !l.includes('experimentalFoTextLineHeightNormal'))
  if (hasLh && extra.css === 'LH039_CSS') {
    filtered.unshift(`      css: LH039_CSS,`, `      harnessSnapdom: { experimentalFoTextLineHeightNormal: true },`)
  }
  return `    extra: {\n      inject: ${JSON.stringify(extra.inject ?? 'both')},\n${filtered.filter((l) => !l.includes('inject:')).join('\n')}\n    },`
}

const body = specs
  .map(
    (s) => `  {
    lane: ${JSON.stringify(s.lane)},
    label: ${JSON.stringify(s.label)},
    idea: ${JSON.stringify(s.idea)},
${fmtExtra(s.extra)}
  },`,
  )
  .join('\n')

const out = path.join(__dirname, 'fo-recipes-shards/recipes-drift-batch777-triple.js')
fs.writeFileSync(out, HEADER + body + FOOTER)
console.log('Wrote', out, 'specs=', specs.length)

/**
 * Math-layout FO recipes — live measurement pins, viewBox/dpr alignment, raster frac-draw.
 * No display:grid / nav-selector CSS. Category: math-layout.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/**
 * @type {{
 *   n: number,
 *   slug: string,
 *   radicalPatch: import('../fo-fix-recipe-shared.js').FoFixRadicalPatch,
 *   idea: string,
 *   extra?: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe>,
 * }[]}
 */
const SPECS = [
  {
    n: 1,
    slug: 'half-leading-pt',
    radicalPatch: 'lab-pin-half-leading-padding-top',
    idea: 'padding-top from (linePx − fontBox)/2 measured live',
  },
  {
    n: 2,
    slug: 'half-leading-split',
    radicalPatch: 'lab-pin-half-leading-split-padding',
    idea: 'split half-leading as padding-top + padding-bottom',
  },
  {
    n: 3,
    slug: 'lh-layout-box',
    radicalPatch: 'lab-pin-line-height-from-layout-box',
    idea: 'line-height px from GBCR content / scrollHeight layout box',
  },
  {
    n: 4,
    slug: 'height-gbcr',
    radicalPatch: 'lab-pin-height-from-gbcr',
    idea: 'height + min-height from getBoundingClientRect',
  },
  {
    n: 5,
    slug: 'width-gbcr',
    radicalPatch: 'lab-pin-width-from-gbcr',
    idea: 'width from getBoundingClientRect on text leaves',
  },
  {
    n: 6,
    slug: 'ink-top-border-pad',
    radicalPatch: 'lab-pin-ink-top-in-border-padding',
    idea: 'padding-top from cap ink topInBorder (font metrics model)',
  },
  {
    n: 7,
    slug: 'content-box-h',
    radicalPatch: 'lab-pin-content-box-height',
    idea: 'height + line-height from border-box minus padding/border',
  },
  {
    n: 8,
    slug: 'normal-lh-probe',
    radicalPatch: 'lab-pin-normal-lh-from-probe',
    idea: 'offscreen line-height:normal probe height → px line-height',
  },
  {
    n: 9,
    slug: 'fo-container-dims',
    radicalPatch: 'math-pin-fo-container-dims-from-live-root',
    idea: 'FO>div width/height inline from live root GBCR',
  },
  {
    n: 10,
    slug: 'fo-attrs-gbcr',
    radicalPatch: 'math-pin-foreign-object-attrs-from-live-root',
    idea: 'foreignObject width/height attrs from live root GBCR',
  },
  {
    n: 11,
    slug: 'composite-stretch-lh',
    radicalPatch: 'lab-pin-composite-stretch-lh-half',
    idea: 'flex cross-size + half-leading pt + layout line-height',
  },
  {
    n: 12,
    slug: 'composite-gbcr-lh',
    radicalPatch: 'lab-pin-composite-gbcr-lh-half',
    idea: 'GBCR width/height + layout lh + half-leading pt',
  },
  {
    n: 13,
    slug: 'floor-vb-frac',
    radicalPatch: 'math-floor-viewbox-stash-frac',
    idea: 'floor viewBox origin; stash frac for h2-frac-draw raster',
    extra: { rasterPatch: 'h2-frac-draw', inject: 'raster' },
  },
  {
    n: 14,
    slug: 'range-lh',
    radicalPatch: 'lab-pin-text-ascent-descent-from-range',
    idea: 'line-height from Range getClientRects union height',
  },
  {
    n: 15,
    slug: 'clientrects-h',
    radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
    idea: 'height/min/max from getClientRects union',
  },
  {
    n: 16,
    slug: 'flex-cross-anchor',
    radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
    idea: 'flex/grid cross-axis height from GBCR + align-self flex-start',
  },
  {
    n: 17,
    slug: 'h2-pin-lh',
    radicalPatch: 'h2-pin-line-height-from-live',
    idea: 'h2 stretch/normal line-height pin from live layout',
  },
  {
    n: 18,
    slug: 'h2-pin-width',
    radicalPatch: 'h2-pin-width-from-live',
    idea: 'h2 width pin from live GBCR',
  },
  {
    n: 19,
    slug: 'h2-stretch-bundle',
    radicalPatch: 'h2-pin-lh-stretch-width-from-live',
    idea: 'h2 stretch leaf + width + line-height composite',
  },
  {
    n: 20,
    slug: 'measure-nudge-root',
    radicalPatch: 'measure-nudge-svg-root',
    idea: 'svg root translateY from live vs serialized ink delta (layout-derived)',
  },
  {
    n: 21,
    slug: 'half-leading int-vb',
    radicalPatch: 'lab-pin-half-leading-padding-top',
    idea: 'half-leading pt + integer viewBox snap',
    extra: { svgRootRound: 'integer-viewbox' },
  },
  {
    n: 22,
    slug: 'lh-layout device-grid',
    radicalPatch: 'lab-pin-line-height-from-layout-box',
    idea: 'layout line-height pin + floor(cssW*dpr) SVG root',
    extra: { rasterPatch: 'device-grid-floor' },
  },
  {
    n: 23,
    slug: 'fo-dims product-canvas',
    radicalPatch: 'math-pin-fo-container-dims-from-live-root',
    idea: 'FO container dims pin + product toCanvas raster path',
    extra: { rasterPatch: 'product-toCanvas' },
  },
  {
    n: 24,
    slug: 'floor-vb frac decode',
    radicalPatch: 'math-floor-viewbox-stash-frac',
    idea: 'fractional viewBox stash + h2-frac-draw + decode-interval',
    extra: { rasterPatch: 'h2-frac-draw', inject: 'raster' },
  },
  {
    n: 25,
    slug: 'ink-top decode-raf',
    radicalPatch: 'lab-pin-ink-top-in-border-padding',
    idea: 'cap-model padding-top + decode-interval-raf',
    extra: { rasterPatch: 'decode-interval-raf' },
  },
  {
    n: 26,
    slug: 'composite-stretch int-floor',
    radicalPatch: 'lab-pin-composite-stretch-lh-half',
    idea: 'stretch/lh/half-leading composite + int-floor root dims',
    extra: { svgRootRound: 'int-floor' },
  },
  {
    n: 27,
    slug: 'width-gbcr int-vb',
    radicalPatch: 'lab-pin-width-from-gbcr',
    idea: 'GBCR width pin + integer viewBox',
    extra: { svgRootRound: 'integer-viewbox', rasterPatch: 'decode-interval' },
  },
  {
    n: 28,
    slug: 'normal-lh fonts-ready',
    radicalPatch: 'lab-pin-normal-lh-from-probe',
    idea: 'normal lh probe + fonts.ready before decode',
    extra: { rasterPatch: 'fonts-ready-interval' },
  },
  {
    n: 29,
    slug: 'fo-attrs round-dims',
    radicalPatch: 'math-pin-foreign-object-attrs-from-live-root',
    idea: 'FO attrs from GBCR + round svg root width/height',
    extra: { svgRootRound: 'round-dims' },
  },
  {
    n: 30,
    slug: 'content-box bitmap',
    radicalPatch: 'lab-pin-content-box-height',
    idea: 'content-box height pin + createImageBitmap decode',
    extra: { rasterPatch: 'create-image-bitmap' },
  },
  {
    n: 31,
    slug: 'range-then-clientrects',
    radicalPatch: 'lab-pin-range-then-clientrects-height',
    idea: 'Range lh pin then clientRects height pin',
  },
  {
    n: 32,
    slug: 'half-leading h2-frac',
    radicalPatch: 'math-half-leading-with-floor-viewbox',
    idea: 'half-leading + math floor vb frac + h2-frac-draw',
    extra: { rasterPatch: 'h2-frac-draw', inject: 'raster' },
  },
  {
    n: 33,
    slug: 'h2-lh int-vb decode',
    radicalPatch: 'h2-pin-line-height-from-live',
    idea: 'h2 line-height pin + integer viewBox + decode-interval',
    extra: { svgRootRound: 'integer-viewbox', rasterPatch: 'decode-interval' },
  },
  {
    n: 34,
    slug: 'clientrects device-grid',
    radicalPatch: 'lab-pin-inline-box-height-from-clientrects',
    idea: 'clientRects height pin + device-grid-floor',
    extra: { rasterPatch: 'device-grid-floor' },
  },
  {
    n: 35,
    slug: 'composite-gbcr product',
    radicalPatch: 'lab-pin-composite-gbcr-lh-half',
    idea: 'GBCR/lh/half-leading + product toCanvas',
    extra: { rasterPatch: 'product-toCanvas' },
  },
  {
    n: 36,
    slug: 'measure-nudge decode',
    radicalPatch: 'measure-nudge-svg-root',
    idea: 'layout ink nudge on svg root + decode-interval',
    extra: { rasterPatch: 'decode-interval' },
  },
  {
    n: 37,
    slug: 'split-half int-vb',
    radicalPatch: 'lab-pin-half-leading-split-padding',
    idea: 'split half-leading padding + integer viewBox',
    extra: { svgRootRound: 'integer-viewbox' },
  },
  {
    n: 38,
    slug: 'height-gbcr double-decode',
    radicalPatch: 'lab-pin-height-from-gbcr',
    idea: 'GBCR height pin + double-decode timing',
    extra: { rasterPatch: 'double-decode' },
  },
  {
    n: 39,
    slug: 'fo-dims fo-attrs',
    radicalPatch: 'math-pin-fo-container-and-attrs-from-live-root',
    idea: 'FO container + FO attrs both from live root GBCR',
  },
  {
    n: 40,
    slug: 'h2-stretch int-vb',
    radicalPatch: 'h2-pin-lh-stretch-width-from-live',
    idea: 'h2 stretch bundle + integer viewBox',
    extra: { svgRootRound: 'integer-viewbox' },
  },
  {
    n: 41,
    slug: 'ink-top int-floor frac',
    radicalPatch: 'lab-pin-ink-top-in-border-padding',
    idea: 'cap padding-top + int-floor + h2-frac-draw',
    extra: {
      svgRootRound: 'int-floor',
      rasterPatch: 'h2-frac-draw',
      inject: 'raster',
    },
  },
  {
    n: 42,
    slug: 'flex-cross decode-micro',
    radicalPatch: 'lab-pin-flex-cross-size-from-anchor',
    idea: 'flex cross pin + decode-microtask-twice',
    extra: { rasterPatch: 'decode-microtask-twice' },
  },
  {
    n: 43,
    slug: 'lh-layout raf-draw',
    radicalPatch: 'lab-pin-line-height-from-layout-box',
    idea: 'layout lh + raf-before-draw',
    extra: { rasterPatch: 'raf-before-draw' },
  },
  {
    n: 44,
    slug: 'floor-vb product',
    radicalPatch: 'math-floor-viewbox-stash-frac',
    idea: 'viewBox floor/stash frac + product toCanvas',
    extra: { rasterPatch: 'product-toCanvas', inject: 'raster' },
  },
  {
    n: 45,
    slug: 'composite-stretch device',
    radicalPatch: 'lab-pin-composite-stretch-lh-half',
    idea: 'stretch/lh/half composite + device-grid-floor',
    extra: { rasterPatch: 'device-grid-floor' },
  },
  {
    n: 46,
    slug: 'gbcr-lh-half decode',
    radicalPatch: 'lab-pin-composite-gbcr-lh-half',
    idea: 'GBCR/lh/half-leading + decode-interval',
    extra: { rasterPatch: 'decode-interval' },
  },
  {
    n: 47,
    slug: 'normal-lh half-leading',
    radicalPatch: 'lab-pin-normal-lh-then-half-leading',
    idea: 'normal lh probe then half-leading padding-top',
  },
  {
    n: 48,
    slug: 'range clientrects int-vb',
    radicalPatch: 'lab-pin-range-then-clientrects-height',
    idea: 'Range lh + clientRects height + integer viewBox',
    extra: { svgRootRound: 'integer-viewbox' },
  },
]

/** @param {typeof SPECS[0]} spec */
function buildRecipe(spec) {
  const id = `math-layout-${String(spec.n).padStart(3, '0')}`
  const { inject: injectOverride, rasterPatch, svgRootRound, ..._rest } = spec.extra ?? {}
  const radicalPatch = spec.radicalPatch
  const inject = injectOverride ?? 'both'
  return {
    id,
    label: `Math layout #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject,
    category: 'math-layout',
    active: true,
    radicalPatch,
    ...(rasterPatch ? { rasterPatch } : {}),
    ...(svgRootRound ? { svgRootRound } : {}),
    notes: `math-layout shard 01; ${spec.slug}; live measurement — no display:grid.`,
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
export const FO_FIX_RECIPES_SHARD = SPECS.map(buildRecipe)

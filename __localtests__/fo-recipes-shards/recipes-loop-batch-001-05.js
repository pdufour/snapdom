/**
 * Loop batch 001 shard (worker 5) — raster / decode timing combos.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-b001-w05-001',
    label: 'Loop b001 w05 #001: double-raf + integer-viewbox',
    idea: 'double-raf raster flush + integer-viewbox root snap',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'double-raf',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop batch 001 worker 05; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w05-002',
    label: 'Loop b001 w05 #002: fonts-ready-interval + int-floor',
    idea: 'fonts-ready-interval wait + int-floor SVG dimensions',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'fonts-ready-interval',
    svgRootRound: 'int-floor',
    notes: 'Loop batch 001 worker 05; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w05-003',
    label: 'Loop b001 w05 #003: offscreen-canvas + chromium copy',
    idea: 'offscreen-canvas decode path + chromium FO style copies',
    css: FO_BASELINE_CSS + CHROMIUM_COPY,
    inject: 'both',
    category: 'crazy',
    active: true,
    rasterPatch: 'offscreen-canvas',
    notes: 'Loop batch 001 worker 05; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w05-004',
    label: 'Loop b001 w05 #004: device-grid + integer-viewbox',
    idea: 'device-grid-floor raster + integer-viewbox root snap',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{image-rendering:crisp-edges!important;transform:translateZ(0)!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'device-grid-floor',
    svgRootRound: 'integer-viewbox',
    notes: 'Loop batch 001 worker 05; global FO; FO-raster only.',
  },
  {
    id: 'loop-b001-w05-005',
    label: 'Loop b001 w05 #005: blob-url-decode-interval + round-dims',
    idea: 'blob-url-decode-interval + round-dims root rounding',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'blob-url-decode-interval',
    svgRootRound: 'round-dims',
    notes: 'Loop batch 001 worker 05; global FO; FO-raster only.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

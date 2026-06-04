/**
 * AI crazy FO recipe shard (worker 5) — SVG root / viewBox / encode theme.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'crazy-ai-w05-001',
    label: 'Crazy AI w05 #001: integer-viewbox + overflow hidden svg',
    idea: 'svg{overflow:hidden} vs FO visible + integer-viewbox root snap',
    css:
      FO_BASELINE_CSS +
      'svg{overflow:hidden!important}foreignObject{overflow:visible!important}',
    inject: 'both',
    category: 'crazy',
    active: true,
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 05 — SVG root theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w05-002',
    label: 'Crazy AI w05 #002: int-floor + crispEdges',
    idea: 'shape-rendering:crispEdges on svg root with int-floor dim snap',
    css:
      FO_BASELINE_CSS +
      'svg{shape-rendering:crispEdges!important}foreignObject *{shape-rendering:auto!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgRootRound: 'int-floor',
    rasterPatch: 'decode-interval',
    notes: 'AI crazy shard worker 05 — SVG root theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w05-003',
    label: 'Crazy AI w05 #003: round-dims device-grid',
    idea: 'round-dims root rounding + device-grid-floor raster alignment',
    css: FO_BASELINE_CSS + 'foreignObject *{vector-effect:non-scaling-stroke!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    svgRootRound: 'round-dims',
    rasterPatch: 'device-grid-floor',
    notes: 'AI crazy shard worker 05 — SVG root theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w05-004',
    label: 'Crazy AI w05 #004: svg-dataurl double encode',
    idea: 'Double percent-encode SVG data URL before img decode',
    css: FO_BASELINE_CSS + '',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'svg-dataurl-double-encode',
    notes: 'AI crazy shard worker 05 — SVG root theme; FO-raster only — no text bypass.',
  },
  {
    id: 'crazy-ai-w05-005',
    label: 'Crazy AI w05 #005: v2-double-svg-encode + webp',
    idea: 'v2-double-svg-encode structural path vs webp-roundtrip lossy probe',
    css:
      FO_BASELINE_CSS +
      'foreignObject *{text-rendering:optimizeLegibility!important}',
    inject: 'raster',
    category: 'crazy',
    active: true,
    rasterPatch: 'v2-double-svg-encode',
    svgRootRound: 'integer-viewbox',
    notes: 'AI crazy shard worker 05 — SVG root theme; FO-raster only — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

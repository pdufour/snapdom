/**
 * Loop AI batch-12 FO recipe shard (worker 33) — raster: blob-url-decode-interval variants.
 * PRIMARY: rasterPatch blob-url-decode-interval × minimal capture CSS × viewBox/inject grid.
 * 40 recipes: loop-ai-b12-w33-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const CONTAIN_MIN =
  'foreignObject{contain:paint!important}' +
  'foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}'

const OVERFLOW_MIN =
  'svg{display:block!important;overflow:visible!important}' +
  'foreignObject{overflow:visible!important}'

/** @type {{ slug: string, idea: string, css: string, inject: 'raster' | 'both', svgRootRound?: string, radicalPatch?: string, monkeypatch?: string }[]} */
const SPECS = [
  {
    slug: 'blob raster bare',
    idea: 'blob-url-decode-interval raster only — no capture CSS inject',
    css: '',
    inject: 'raster',
  },
  {
    slug: 'blob raster FO baseline',
    idea: 'blob decode-interval wait with FO_BASELINE only at raster',
    css: FO_BASELINE_CSS,
    inject: 'raster',
  },
  {
    slug: 'blob raster text leaf',
    idea: 'blob decode-interval + TEXT_LEAF min-width/box-sizing at raster',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'raster',
  },
  {
    slug: 'blob raster chromium leaf',
    idea: 'blob decode-interval + Chromium kerning copy + TEXT_LEAF',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + TEXT_LEAF,
    inject: 'raster',
  },
  {
    slug: 'blob raster contain paint',
    idea: 'blob decode-interval + contain:paint + min-size zero on FO *',
    css: FO_BASELINE_CSS + CONTAIN_MIN,
    inject: 'raster',
  },
  {
    slug: 'blob int-vb bare',
    idea: 'integer-viewbox snap + blob-url-decode-interval — no extra FO CSS',
    css: '',
    inject: 'raster',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob int-vb baseline',
    idea: 'integer-viewbox + blob decode-interval + FO_BASELINE',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob int-vb text leaf',
    idea: 'integer-viewbox + blob decode-interval + TEXT_LEAF',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'raster',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob int-vb chromium',
    idea: 'integer-viewbox + blob decode-interval + Chromium font copy',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + TEXT_LEAF,
    inject: 'raster',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob int-vb overflow min',
    idea: 'integer-viewbox + blob decode-interval + svg/FO overflow visible block',
    css: FO_BASELINE_CSS + OVERFLOW_MIN,
    inject: 'raster',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob int-floor bare',
    idea: 'int-floor viewBox dimensions + blob-url-decode-interval raster',
    css: '',
    inject: 'raster',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob int-floor baseline',
    idea: 'int-floor viewBox + blob decode-interval + FO_BASELINE',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob int-floor text leaf',
    idea: 'int-floor viewBox + blob decode-interval + TEXT_LEAF',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'raster',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob int-floor chromium',
    idea: 'int-floor viewBox + blob decode-interval + Chromium copy',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + TEXT_LEAF,
    inject: 'raster',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob int-floor contain',
    idea: 'int-floor viewBox + blob decode-interval + contain:paint min FO',
    css: FO_BASELINE_CSS + CONTAIN_MIN,
    inject: 'raster',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob round-dims bare',
    idea: 'round-dims SVG root + blob-url-decode-interval — raster only',
    css: '',
    inject: 'raster',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob round-dims baseline',
    idea: 'round-dims + blob decode-interval + FO_BASELINE',
    css: FO_BASELINE_CSS,
    inject: 'raster',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob round-dims text leaf',
    idea: 'round-dims + blob decode-interval + TEXT_LEAF',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'raster',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob round-dims chromium',
    idea: 'round-dims + blob decode-interval + Chromium kerning copy',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + TEXT_LEAF,
    inject: 'raster',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob round-dims overflow',
    idea: 'round-dims + blob decode-interval + overflow visible block',
    css: FO_BASELINE_CSS + OVERFLOW_MIN,
    inject: 'raster',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob both baseline bare',
    idea: 'capture+raster both scope — FO_BASELINE + blob decode-interval',
    css: FO_BASELINE_CSS,
    inject: 'both',
  },
  {
    slug: 'blob both int-vb baseline',
    idea: 'both inject + integer-viewbox + FO_BASELINE + blob decode-interval',
    css: FO_BASELINE_CSS,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob both int-vb text leaf',
    idea: 'both inject + integer-viewbox + TEXT_LEAF + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
  },
  {
    slug: 'blob both int-vb pin lh',
    idea: 'both + integer-viewbox + h2-pin-line-height-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-pin-line-height-from-live',
  },
  {
    slug: 'blob both int-vb stretch leaf',
    idea: 'both + integer-viewbox + h2-flex-stretch-leaf-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
  },
  {
    slug: 'blob both int-vb pin width',
    idea: 'both + integer-viewbox + h2-pin-width-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'h2-pin-width-from-live',
  },
  {
    slug: 'blob both int-vb snap rects',
    idea: 'both + integer-viewbox + integer-snap-all-rects + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
    radicalPatch: 'integer-snap-all-rects',
  },
  {
    slug: 'blob both int-vb h2 normalize',
    idea: 'both + integer-viewbox + h2-fo-normalize-full monkeypatch + blob decode-interval',
    css: FO_BASELINE_CSS,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
    monkeypatch: 'h2-fo-normalize-full',
  },
  {
    slug: 'blob both int-floor baseline',
    idea: 'both inject + int-floor viewBox + FO_BASELINE + blob decode-interval',
    css: FO_BASELINE_CSS,
    inject: 'both',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob both int-floor text leaf',
    idea: 'both + int-floor + TEXT_LEAF + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'int-floor',
  },
  {
    slug: 'blob both int-floor pin lh',
    idea: 'both + int-floor + h2-pin-line-height-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'int-floor',
    radicalPatch: 'h2-pin-line-height-from-live',
  },
  {
    slug: 'blob both int-floor stretch',
    idea: 'both + int-floor + h2-flex-stretch-leaf-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'int-floor',
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
  },
  {
    slug: 'blob both int-floor pin width',
    idea: 'both + int-floor + h2-pin-width-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'int-floor',
    radicalPatch: 'h2-pin-width-from-live',
  },
  {
    slug: 'blob both int-floor snap rects',
    idea: 'both + int-floor + integer-snap-all-rects + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'int-floor',
    radicalPatch: 'integer-snap-all-rects',
  },
  {
    slug: 'blob both round-dims baseline',
    idea: 'both + round-dims + FO_BASELINE + blob decode-interval',
    css: FO_BASELINE_CSS,
    inject: 'both',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob both round-dims text leaf',
    idea: 'both + round-dims + TEXT_LEAF + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob both round-dims pin lh',
    idea: 'both + round-dims + h2-pin-line-height-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'round-dims',
    radicalPatch: 'h2-pin-line-height-from-live',
  },
  {
    slug: 'blob both round-dims stretch',
    idea: 'both + round-dims + h2-flex-stretch-leaf-from-live + blob decode-interval',
    css: FO_BASELINE_CSS + TEXT_LEAF,
    inject: 'both',
    svgRootRound: 'round-dims',
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
  },
  {
    slug: 'blob both round-dims chromium contain',
    idea: 'both + round-dims + Chromium copy + contain:paint + blob decode-interval',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + CONTAIN_MIN,
    inject: 'both',
    svgRootRound: 'round-dims',
  },
  {
    slug: 'blob both int-vb chromium contain',
    idea: 'both + integer-viewbox + Chromium + contain:paint + blob decode-interval',
    css: FO_BASELINE_CSS + CHROMIUM_COPY + CONTAIN_MIN,
    inject: 'both',
    svgRootRound: 'integer-viewbox',
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w33: expected 40 specs, got ${SPECS.length}`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
  const recipe = {
    id: `loop-ai-b12-w33-${num}`,
    label: `Loop AI b12 w33 #${num}: ${spec.slug}`,
    idea: spec.idea,
    css: spec.css,
    inject: spec.inject,
    category: 'text-fix',
    active: true,
    rasterPatch: 'blob-url-decode-interval',
    notes:
      'Loop AI b12 w33; blob-url-decode-interval raster variant; minimal FO CSS — no text bypass.',
  }
  if (spec.svgRootRound) recipe.svgRootRound = spec.svgRootRound
  if (spec.radicalPatch) recipe.radicalPatch = spec.radicalPatch
  if (spec.monkeypatch) recipe.monkeypatch = spec.monkeypatch
  return recipe
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w33: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

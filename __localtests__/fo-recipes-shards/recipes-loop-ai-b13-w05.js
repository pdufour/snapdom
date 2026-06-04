/**
 * Loop AI batch-13 FO recipe shard (worker 05) — RASTER PRIMARY: img-srcset-1x raster.
 * img.srcset 1x descriptor handoff vs plain src decode
 * 40 recipes: loop-ai-b13-w05-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "srcset-1x chromium-leaf int-floor",
    idea: "img-srcset-1x + Chromium copy leaf — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "srcset-1x bare round-dims",
    idea: "img-srcset-1x + bare raster — srcset selection before decode/draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "srcset-1x overflow",
    idea: "img-srcset-1x + FO overflow visible — srcset selection before decode/draw",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 4,
    slug: "srcset-1x leaf integer-viewbox",
    idea: "img-srcset-1x + FO leaf min-width — srcset selection before decode/draw",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "srcset-1x kerning int-floor",
    idea: "img-srcset-1x + FO kerning normal — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "srcset-1x shape round-dims",
    idea: "img-srcset-1x + shape-rendering geometric — srcset selection before decode/draw",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "srcset-1x img-auto",
    idea: "img-srcset-1x + image-rendering auto — srcset selection before decode/draw",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
    },
  },
  {
    n: 8,
    slug: "srcset-1x contain integer-viewbox",
    idea: "img-srcset-1x + contain paint min — srcset selection before decode/draw",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "srcset-1x overflow-min int-floor",
    idea: "img-srcset-1x + svg block overflow — srcset selection before decode/draw",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 10,
    slug: "srcset-1x block-svg round-dims",
    idea: "img-srcset-1x + svg display block — srcset selection before decode/draw",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "srcset-1x chromium-leaf",
    idea: "img-srcset-1x + Chromium copy leaf — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
    },
  },
  {
    n: 12,
    slug: "srcset-1x bare integer-viewbox",
    idea: "img-srcset-1x + bare raster — srcset selection before decode/draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "srcset-1x overflow int-floor",
    idea: "img-srcset-1x + FO overflow visible — srcset selection before decode/draw",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "srcset-1x leaf round-dims",
    idea: "img-srcset-1x + FO leaf min-width — srcset selection before decode/draw",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "srcset-1x kerning",
    idea: "img-srcset-1x + FO kerning normal — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 16,
    slug: "srcset-1x shape integer-viewbox",
    idea: "img-srcset-1x + shape-rendering geometric — srcset selection before decode/draw",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "srcset-1x img-auto int-floor",
    idea: "img-srcset-1x + image-rendering auto — srcset selection before decode/draw",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "srcset-1x contain round-dims",
    idea: "img-srcset-1x + contain paint min — srcset selection before decode/draw",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "srcset-1x overflow-min",
    idea: "img-srcset-1x + svg block overflow — srcset selection before decode/draw",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
    },
  },
  {
    n: 20,
    slug: "srcset-1x block-svg integer-viewbox",
    idea: "img-srcset-1x + svg display block — srcset selection before decode/draw",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "srcset-1x chromium-leaf int-floor alt2",
    idea: "img-srcset-1x + Chromium copy leaf — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 22,
    slug: "srcset-1x bare round-dims + filter-noop-defs",
    idea: "img-srcset-1x + bare raster — srcset selection before decode/draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "srcset-1x overflow alt2",
    idea: "img-srcset-1x + FO overflow visible — srcset selection before decode/draw",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
    },
  },
  {
    n: 24,
    slug: "srcset-1x leaf integer-viewbox + filter-noop-defs",
    idea: "img-srcset-1x + FO leaf min-width — srcset selection before decode/draw",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "srcset-1x kerning int-floor + filter-noop-defs",
    idea: "img-srcset-1x + FO kerning normal — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "srcset-1x shape round-dims + filter-noop-defs",
    idea: "img-srcset-1x + shape-rendering geometric — srcset selection before decode/draw",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "srcset-1x img-auto alt2",
    idea: "img-srcset-1x + image-rendering auto — srcset selection before decode/draw",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 28,
    slug: "srcset-1x contain integer-viewbox + filter-noop-defs",
    idea: "img-srcset-1x + contain paint min — srcset selection before decode/draw",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "srcset-1x overflow-min int-floor alt2",
    idea: "img-srcset-1x + svg block overflow — srcset selection before decode/draw",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 30,
    slug: "srcset-1x block-svg round-dims + filter-noop-defs",
    idea: "img-srcset-1x + svg display block — srcset selection before decode/draw",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "srcset-1x chromium-leaf + filter-noop-defs",
    idea: "img-srcset-1x + Chromium copy leaf — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "srcset-1x bare integer-viewbox + filter-noop-defs",
    idea: "img-srcset-1x + bare raster — srcset selection before decode/draw",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "srcset-1x overflow int-floor alt2",
    idea: "img-srcset-1x + FO overflow visible — srcset selection before decode/draw",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 34,
    slug: "srcset-1x leaf round-dims + filter-noop-defs",
    idea: "img-srcset-1x + FO leaf min-width — srcset selection before decode/draw",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "srcset-1x kerning alt2",
    idea: "img-srcset-1x + FO kerning normal — srcset selection before decode/draw",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
    },
  },
  {
    n: 36,
    slug: "srcset-1x shape integer-viewbox + filter-noop-defs",
    idea: "img-srcset-1x + shape-rendering geometric — srcset selection before decode/draw",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "srcset-1x img-auto int-floor + filter-noop-defs",
    idea: "img-srcset-1x + image-rendering auto — srcset selection before decode/draw",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "srcset-1x contain round-dims + filter-noop-defs",
    idea: "img-srcset-1x + contain paint min — srcset selection before decode/draw",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "srcset-1x overflow-min alt2",
    idea: "img-srcset-1x + svg block overflow — srcset selection before decode/draw",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "img-srcset-1x",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    n: 40,
    slug: "srcset-1x block-svg integer-viewbox + filter-noop-defs",
    idea: "img-srcset-1x + svg display block — srcset selection before decode/draw",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "img-srcset-1x",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w05: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w05: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w05-${num}`,
    label: `Loop AI b13 w05 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w05; RASTER PRIMARY img-srcset-1x raster; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w05: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

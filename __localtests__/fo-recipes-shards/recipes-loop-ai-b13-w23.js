/**
 * Loop AI batch-13 FO recipe shard (worker 23) — RASTER PRIMARY: blob-url-early-revoke.
 * revoke objectURL immediately after img.src assign — timing stress
 * 40 recipes: loop-ai-b13-w23-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "early-revoke kerning",
    idea: "blob-url-early-revoke + FO kerning normal — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 2,
    slug: "early-revoke shape integer-viewbox",
    idea: "blob-url-early-revoke + shape-rendering geometric — revoke blob before decode completes",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "early-revoke img-auto int-floor",
    idea: "blob-url-early-revoke + image-rendering auto — revoke blob before decode completes",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "early-revoke contain round-dims",
    idea: "blob-url-early-revoke + contain paint min — revoke blob before decode completes",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 5,
    slug: "early-revoke overflow-min",
    idea: "blob-url-early-revoke + svg block overflow — revoke blob before decode completes",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 6,
    slug: "early-revoke block-svg integer-viewbox",
    idea: "blob-url-early-revoke + svg display block — revoke blob before decode completes",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 7,
    slug: "early-revoke chromium-leaf int-floor",
    idea: "blob-url-early-revoke + Chromium copy leaf — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "early-revoke bare round-dims",
    idea: "blob-url-early-revoke + bare raster — revoke blob before decode completes",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "early-revoke overflow",
    idea: "blob-url-early-revoke + FO overflow visible — revoke blob before decode completes",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 10,
    slug: "early-revoke leaf integer-viewbox",
    idea: "blob-url-early-revoke + FO leaf min-width — revoke blob before decode completes",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 11,
    slug: "early-revoke kerning int-floor",
    idea: "blob-url-early-revoke + FO kerning normal — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "early-revoke shape round-dims",
    idea: "blob-url-early-revoke + shape-rendering geometric — revoke blob before decode completes",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "early-revoke img-auto",
    idea: "blob-url-early-revoke + image-rendering auto — revoke blob before decode completes",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 14,
    slug: "early-revoke contain integer-viewbox",
    idea: "blob-url-early-revoke + contain paint min — revoke blob before decode completes",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "early-revoke overflow-min int-floor",
    idea: "blob-url-early-revoke + svg block overflow — revoke blob before decode completes",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "early-revoke block-svg round-dims",
    idea: "blob-url-early-revoke + svg display block — revoke blob before decode completes",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 17,
    slug: "early-revoke chromium-leaf",
    idea: "blob-url-early-revoke + Chromium copy leaf — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 18,
    slug: "early-revoke bare integer-viewbox",
    idea: "blob-url-early-revoke + bare raster — revoke blob before decode completes",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 19,
    slug: "early-revoke overflow int-floor",
    idea: "blob-url-early-revoke + FO overflow visible — revoke blob before decode completes",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "early-revoke leaf round-dims",
    idea: "blob-url-early-revoke + FO leaf min-width — revoke blob before decode completes",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "early-revoke kerning + filter-noop-defs",
    idea: "blob-url-early-revoke + FO kerning normal — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "early-revoke shape integer-viewbox alt2",
    idea: "blob-url-early-revoke + shape-rendering geometric — revoke blob before decode completes",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 23,
    slug: "early-revoke img-auto int-floor alt2",
    idea: "blob-url-early-revoke + image-rendering auto — revoke blob before decode completes",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 24,
    slug: "early-revoke contain round-dims alt2",
    idea: "blob-url-early-revoke + contain paint min — revoke blob before decode completes",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 25,
    slug: "early-revoke overflow-min alt2",
    idea: "blob-url-early-revoke + svg block overflow — revoke blob before decode completes",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 26,
    slug: "early-revoke block-svg integer-viewbox alt2",
    idea: "blob-url-early-revoke + svg display block — revoke blob before decode completes",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 27,
    slug: "early-revoke chromium-leaf int-floor + filter-noop-defs",
    idea: "blob-url-early-revoke + Chromium copy leaf — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "early-revoke bare round-dims alt2",
    idea: "blob-url-early-revoke + bare raster — revoke blob before decode completes",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 29,
    slug: "early-revoke overflow alt2",
    idea: "blob-url-early-revoke + FO overflow visible — revoke blob before decode completes",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 30,
    slug: "early-revoke leaf integer-viewbox alt2",
    idea: "blob-url-early-revoke + FO leaf min-width — revoke blob before decode completes",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 31,
    slug: "early-revoke kerning int-floor alt2",
    idea: "blob-url-early-revoke + FO kerning normal — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 32,
    slug: "early-revoke shape round-dims alt2",
    idea: "blob-url-early-revoke + shape-rendering geometric — revoke blob before decode completes",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 33,
    slug: "early-revoke img-auto + filter-noop-defs",
    idea: "blob-url-early-revoke + image-rendering auto — revoke blob before decode completes",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "early-revoke contain integer-viewbox alt2",
    idea: "blob-url-early-revoke + contain paint min — revoke blob before decode completes",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
  {
    n: 35,
    slug: "early-revoke overflow-min int-floor alt2",
    idea: "blob-url-early-revoke + svg block overflow — revoke blob before decode completes",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 36,
    slug: "early-revoke block-svg round-dims alt2",
    idea: "blob-url-early-revoke + svg display block — revoke blob before decode completes",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 37,
    slug: "early-revoke chromium-leaf alt2",
    idea: "blob-url-early-revoke + Chromium copy leaf — revoke blob before decode completes",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
    },
  },
  {
    n: 38,
    slug: "early-revoke bare integer-viewbox alt2",
    idea: "blob-url-early-revoke + bare raster — revoke blob before decode completes",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 39,
    slug: "early-revoke overflow int-floor + filter-noop-defs",
    idea: "blob-url-early-revoke + FO overflow visible — revoke blob before decode completes",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "early-revoke leaf round-dims alt2",
    idea: "blob-url-early-revoke + FO leaf min-width — revoke blob before decode completes",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "blob-url-early-revoke",
      svgRootRound: "round-dims",
      svgMarkupPatch: "strip-all-transforms",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w23: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w23: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w23-${num}`,
    label: `Loop AI b13 w23 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w23; RASTER PRIMARY blob-url-early-revoke; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w23: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

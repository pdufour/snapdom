/**
 * Loop AI batch-13 FO recipe shard (worker 16) — RASTER PRIMARY: scale-down-up two-pass.
 * raster at reduced scale then upscale blit to target canvas
 * 40 recipes: loop-ai-b13-w16-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "scale-down-up leaf round-dims",
    idea: "scale-down-up + FO leaf min-width — two-pass scale raster pipeline",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "scale-down-up kerning",
    idea: "scale-down-up + FO kerning normal — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 3,
    slug: "scale-down-up shape integer-viewbox",
    idea: "scale-down-up + shape-rendering geometric — two-pass scale raster pipeline",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 4,
    slug: "scale-down-up img-auto int-floor",
    idea: "scale-down-up + image-rendering auto — two-pass scale raster pipeline",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "scale-down-up contain round-dims",
    idea: "scale-down-up + contain paint min — two-pass scale raster pipeline",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "scale-down-up overflow-min",
    idea: "scale-down-up + svg block overflow — two-pass scale raster pipeline",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 7,
    slug: "scale-down-up block-svg integer-viewbox",
    idea: "scale-down-up + svg display block — two-pass scale raster pipeline",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "scale-down-up chromium-leaf int-floor",
    idea: "scale-down-up + Chromium copy leaf — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "scale-down-up bare round-dims",
    idea: "scale-down-up + bare raster — two-pass scale raster pipeline",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "scale-down-up overflow",
    idea: "scale-down-up + FO overflow visible — two-pass scale raster pipeline",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 11,
    slug: "scale-down-up leaf integer-viewbox",
    idea: "scale-down-up + FO leaf min-width — two-pass scale raster pipeline",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 12,
    slug: "scale-down-up kerning int-floor",
    idea: "scale-down-up + FO kerning normal — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "scale-down-up shape round-dims",
    idea: "scale-down-up + shape-rendering geometric — two-pass scale raster pipeline",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "scale-down-up img-auto",
    idea: "scale-down-up + image-rendering auto — two-pass scale raster pipeline",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 15,
    slug: "scale-down-up contain integer-viewbox",
    idea: "scale-down-up + contain paint min — two-pass scale raster pipeline",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "scale-down-up overflow-min int-floor",
    idea: "scale-down-up + svg block overflow — two-pass scale raster pipeline",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "scale-down-up block-svg round-dims",
    idea: "scale-down-up + svg display block — two-pass scale raster pipeline",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "scale-down-up chromium-leaf",
    idea: "scale-down-up + Chromium copy leaf — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 19,
    slug: "scale-down-up bare integer-viewbox",
    idea: "scale-down-up + bare raster — two-pass scale raster pipeline",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 20,
    slug: "scale-down-up overflow int-floor",
    idea: "scale-down-up + FO overflow visible — two-pass scale raster pipeline",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "scale-down-up leaf round-dims alt2",
    idea: "scale-down-up + FO leaf min-width — two-pass scale raster pipeline",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 22,
    slug: "scale-down-up kerning alt2",
    idea: "scale-down-up + FO kerning normal — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 23,
    slug: "scale-down-up shape integer-viewbox alt2",
    idea: "scale-down-up + shape-rendering geometric — two-pass scale raster pipeline",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "scale-down-up img-auto int-floor alt2",
    idea: "scale-down-up + image-rendering auto — two-pass scale raster pipeline",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 25,
    slug: "scale-down-up contain round-dims alt2",
    idea: "scale-down-up + contain paint min — two-pass scale raster pipeline",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 26,
    slug: "scale-down-up overflow-min + filter-noop-defs",
    idea: "scale-down-up + svg block overflow — two-pass scale raster pipeline",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "scale-down-up block-svg integer-viewbox alt2",
    idea: "scale-down-up + svg display block — two-pass scale raster pipeline",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 28,
    slug: "scale-down-up chromium-leaf int-floor alt2",
    idea: "scale-down-up + Chromium copy leaf — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 29,
    slug: "scale-down-up bare round-dims + filter-noop-defs",
    idea: "scale-down-up + bare raster — two-pass scale raster pipeline",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "scale-down-up overflow alt2",
    idea: "scale-down-up + FO overflow visible — two-pass scale raster pipeline",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 31,
    slug: "scale-down-up leaf integer-viewbox alt2",
    idea: "scale-down-up + FO leaf min-width — two-pass scale raster pipeline",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 32,
    slug: "scale-down-up kerning int-floor + filter-noop-defs",
    idea: "scale-down-up + FO kerning normal — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "scale-down-up shape round-dims alt2",
    idea: "scale-down-up + shape-rendering geometric — two-pass scale raster pipeline",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 34,
    slug: "scale-down-up img-auto alt2",
    idea: "scale-down-up + image-rendering auto — two-pass scale raster pipeline",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
    },
  },
  {
    n: 35,
    slug: "scale-down-up contain integer-viewbox alt2",
    idea: "scale-down-up + contain paint min — two-pass scale raster pipeline",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-identity-transforms",
    },
  },
  {
    n: 36,
    slug: "scale-down-up overflow-min int-floor alt2",
    idea: "scale-down-up + svg block overflow — two-pass scale raster pipeline",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 37,
    slug: "scale-down-up block-svg round-dims alt2",
    idea: "scale-down-up + svg display block — two-pass scale raster pipeline",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 38,
    slug: "scale-down-up chromium-leaf + filter-noop-defs",
    idea: "scale-down-up + Chromium copy leaf — two-pass scale raster pipeline",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "scale-down-up bare integer-viewbox alt2",
    idea: "scale-down-up + bare raster — two-pass scale raster pipeline",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 40,
    slug: "scale-down-up overflow int-floor alt2",
    idea: "scale-down-up + FO overflow visible — two-pass scale raster pipeline",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootRound: "int-floor",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w16: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w16: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w16-${num}`,
    label: `Loop AI b13 w16 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w16; RASTER PRIMARY scale-down-up two-pass; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w16: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

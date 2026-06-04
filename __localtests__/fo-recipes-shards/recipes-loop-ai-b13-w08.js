/**
 * Loop AI batch-13 FO recipe shard (worker 08) — RASTER PRIMARY: context-alpha-false-desync.
 * 2d context alpha:false vs premultiplied FO ink desync probe
 * 40 recipes: loop-ai-b13-w08-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "alpha-desync block-svg round-dims",
    idea: "context-alpha-false-desync + svg display block — alpha premultiply mismatch probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "alpha-desync chromium-leaf",
    idea: "context-alpha-false-desync + Chromium copy leaf — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
    },
  },
  {
    n: 3,
    slug: "alpha-desync bare integer-viewbox",
    idea: "context-alpha-false-desync + bare raster — alpha premultiply mismatch probe",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "alpha-desync overflow int-floor",
    idea: "context-alpha-false-desync + FO overflow visible — alpha premultiply mismatch probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "alpha-desync leaf round-dims",
    idea: "context-alpha-false-desync + FO leaf min-width — alpha premultiply mismatch probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 6,
    slug: "alpha-desync kerning",
    idea: "context-alpha-false-desync + FO kerning normal — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
    },
  },
  {
    n: 7,
    slug: "alpha-desync shape integer-viewbox",
    idea: "context-alpha-false-desync + shape-rendering geometric — alpha premultiply mismatch probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "alpha-desync img-auto int-floor",
    idea: "context-alpha-false-desync + image-rendering auto — alpha premultiply mismatch probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "alpha-desync contain round-dims",
    idea: "context-alpha-false-desync + contain paint min — alpha premultiply mismatch probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "alpha-desync overflow-min",
    idea: "context-alpha-false-desync + svg block overflow — alpha premultiply mismatch probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
    },
  },
  {
    n: 11,
    slug: "alpha-desync block-svg integer-viewbox",
    idea: "context-alpha-false-desync + svg display block — alpha premultiply mismatch probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "alpha-desync chromium-leaf int-floor",
    idea: "context-alpha-false-desync + Chromium copy leaf — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "alpha-desync bare round-dims",
    idea: "context-alpha-false-desync + bare raster — alpha premultiply mismatch probe",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "alpha-desync overflow",
    idea: "context-alpha-false-desync + FO overflow visible — alpha premultiply mismatch probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 15,
    slug: "alpha-desync leaf integer-viewbox",
    idea: "context-alpha-false-desync + FO leaf min-width — alpha premultiply mismatch probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "alpha-desync kerning int-floor",
    idea: "context-alpha-false-desync + FO kerning normal — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "alpha-desync shape round-dims",
    idea: "context-alpha-false-desync + shape-rendering geometric — alpha premultiply mismatch probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "alpha-desync img-auto",
    idea: "context-alpha-false-desync + image-rendering auto — alpha premultiply mismatch probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
    },
  },
  {
    n: 19,
    slug: "alpha-desync contain integer-viewbox",
    idea: "context-alpha-false-desync + contain paint min — alpha premultiply mismatch probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "alpha-desync overflow-min int-floor",
    idea: "context-alpha-false-desync + svg block overflow — alpha premultiply mismatch probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "alpha-desync block-svg round-dims + filter-noop-defs",
    idea: "context-alpha-false-desync + svg display block — alpha premultiply mismatch probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "alpha-desync chromium-leaf + filter-noop-defs",
    idea: "context-alpha-false-desync + Chromium copy leaf — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "alpha-desync bare integer-viewbox alt2",
    idea: "context-alpha-false-desync + bare raster — alpha premultiply mismatch probe",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 24,
    slug: "alpha-desync overflow int-floor + filter-noop-defs",
    idea: "context-alpha-false-desync + FO overflow visible — alpha premultiply mismatch probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "alpha-desync leaf round-dims alt2",
    idea: "context-alpha-false-desync + FO leaf min-width — alpha premultiply mismatch probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 26,
    slug: "alpha-desync kerning + filter-noop-defs",
    idea: "context-alpha-false-desync + FO kerning normal — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "alpha-desync shape integer-viewbox + filter-noop-defs",
    idea: "context-alpha-false-desync + shape-rendering geometric — alpha premultiply mismatch probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "alpha-desync img-auto int-floor + filter-noop-defs",
    idea: "context-alpha-false-desync + image-rendering auto — alpha premultiply mismatch probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "alpha-desync contain round-dims + filter-noop-defs",
    idea: "context-alpha-false-desync + contain paint min — alpha premultiply mismatch probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "alpha-desync overflow-min + filter-noop-defs",
    idea: "context-alpha-false-desync + svg block overflow — alpha premultiply mismatch probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "alpha-desync block-svg integer-viewbox + filter-noop-defs",
    idea: "context-alpha-false-desync + svg display block — alpha premultiply mismatch probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "alpha-desync chromium-leaf int-floor alt2",
    idea: "context-alpha-false-desync + Chromium copy leaf — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    n: 33,
    slug: "alpha-desync bare round-dims + filter-noop-defs",
    idea: "context-alpha-false-desync + bare raster — alpha premultiply mismatch probe",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "alpha-desync overflow alt2",
    idea: "context-alpha-false-desync + FO overflow visible — alpha premultiply mismatch probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
    },
  },
  {
    n: 35,
    slug: "alpha-desync leaf integer-viewbox + filter-noop-defs",
    idea: "context-alpha-false-desync + FO leaf min-width — alpha premultiply mismatch probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "alpha-desync kerning int-floor + filter-noop-defs",
    idea: "context-alpha-false-desync + FO kerning normal — alpha premultiply mismatch probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "alpha-desync shape round-dims + filter-noop-defs",
    idea: "context-alpha-false-desync + shape-rendering geometric — alpha premultiply mismatch probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "alpha-desync img-auto + filter-noop-defs",
    idea: "context-alpha-false-desync + image-rendering auto — alpha premultiply mismatch probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "alpha-desync contain integer-viewbox + filter-noop-defs",
    idea: "context-alpha-false-desync + contain paint min — alpha premultiply mismatch probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "alpha-desync overflow-min int-floor + filter-noop-defs",
    idea: "context-alpha-false-desync + svg block overflow — alpha premultiply mismatch probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "context-alpha-false-desync",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w08: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w08: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w08-${num}`,
    label: `Loop AI b13 w08 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w08; RASTER PRIMARY context-alpha-false-desync; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w08: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

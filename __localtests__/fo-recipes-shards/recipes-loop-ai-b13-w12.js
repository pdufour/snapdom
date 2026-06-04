/**
 * Loop AI batch-13 FO recipe shard (worker 12) — RASTER PRIMARY: double-raster average/difference.
 * two-pass raster average or pixel difference merge
 * 40 recipes: loop-ai-b13-w12-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "double-raster-average bare round-dims",
    idea: "double-raster-average + bare raster — dual decode merge before ink measure",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 2,
    slug: "double-raster-difference overflow",
    idea: "double-raster-difference + FO overflow visible — dual decode merge before ink measure",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 3,
    slug: "double-raster-average leaf integer-viewbox",
    idea: "double-raster-average + FO leaf min-width — dual decode merge before ink measure",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 4,
    slug: "double-raster-difference kerning int-floor",
    idea: "double-raster-difference + FO kerning normal — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 5,
    slug: "double-raster-average shape round-dims",
    idea: "double-raster-average + shape-rendering geometric — dual decode merge before ink measure",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 6,
    slug: "double-raster-difference img-auto",
    idea: "double-raster-difference + image-rendering auto — dual decode merge before ink measure",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 7,
    slug: "double-raster-average contain integer-viewbox",
    idea: "double-raster-average + contain paint min — dual decode merge before ink measure",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 8,
    slug: "double-raster-difference overflow-min int-floor",
    idea: "double-raster-difference + svg block overflow — dual decode merge before ink measure",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 9,
    slug: "double-raster-average block-svg round-dims",
    idea: "double-raster-average + svg display block — dual decode merge before ink measure",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 10,
    slug: "double-raster-difference chromium-leaf",
    idea: "double-raster-difference + Chromium copy leaf — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 11,
    slug: "double-raster-average bare integer-viewbox",
    idea: "double-raster-average + bare raster — dual decode merge before ink measure",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 12,
    slug: "double-raster-difference overflow int-floor",
    idea: "double-raster-difference + FO overflow visible — dual decode merge before ink measure",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 13,
    slug: "double-raster-average leaf round-dims",
    idea: "double-raster-average + FO leaf min-width — dual decode merge before ink measure",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 14,
    slug: "double-raster-difference kerning",
    idea: "double-raster-difference + FO kerning normal — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 15,
    slug: "double-raster-average shape integer-viewbox",
    idea: "double-raster-average + shape-rendering geometric — dual decode merge before ink measure",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 16,
    slug: "double-raster-difference img-auto int-floor",
    idea: "double-raster-difference + image-rendering auto — dual decode merge before ink measure",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 17,
    slug: "double-raster-average contain round-dims",
    idea: "double-raster-average + contain paint min — dual decode merge before ink measure",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 18,
    slug: "double-raster-difference overflow-min",
    idea: "double-raster-difference + svg block overflow — dual decode merge before ink measure",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 19,
    slug: "double-raster-average block-svg integer-viewbox",
    idea: "double-raster-average + svg display block — dual decode merge before ink measure",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 20,
    slug: "double-raster-difference chromium-leaf int-floor",
    idea: "double-raster-difference + Chromium copy leaf — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 21,
    slug: "double-raster-average bare round-dims alt2",
    idea: "double-raster-average + bare raster — dual decode merge before ink measure",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 22,
    slug: "double-raster-difference overflow + filter-noop-defs",
    idea: "double-raster-difference + FO overflow visible — dual decode merge before ink measure",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "double-raster-average leaf integer-viewbox alt2",
    idea: "double-raster-average + FO leaf min-width — dual decode merge before ink measure",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 24,
    slug: "double-raster-difference kerning int-floor alt2",
    idea: "double-raster-difference + FO kerning normal — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 25,
    slug: "double-raster-average shape round-dims + filter-noop-defs",
    idea: "double-raster-average + shape-rendering geometric — dual decode merge before ink measure",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "double-raster-difference img-auto alt2",
    idea: "double-raster-difference + image-rendering auto — dual decode merge before ink measure",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 27,
    slug: "double-raster-average contain integer-viewbox alt2",
    idea: "double-raster-average + contain paint min — dual decode merge before ink measure",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 28,
    slug: "double-raster-difference overflow-min int-floor + filter-noop-defs",
    idea: "double-raster-difference + svg block overflow — dual decode merge before ink measure",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "double-raster-average block-svg round-dims alt2",
    idea: "double-raster-average + svg display block — dual decode merge before ink measure",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 30,
    slug: "double-raster-difference chromium-leaf alt2",
    idea: "double-raster-difference + Chromium copy leaf — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 31,
    slug: "double-raster-average bare integer-viewbox + filter-noop-defs",
    idea: "double-raster-average + bare raster — dual decode merge before ink measure",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "double-raster-difference overflow int-floor alt2",
    idea: "double-raster-difference + FO overflow visible — dual decode merge before ink measure",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 33,
    slug: "double-raster-average leaf round-dims alt2",
    idea: "double-raster-average + FO leaf min-width — dual decode merge before ink measure",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 34,
    slug: "double-raster-difference kerning + filter-noop-defs",
    idea: "double-raster-difference + FO kerning normal — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "double-raster-average shape integer-viewbox alt2",
    idea: "double-raster-average + shape-rendering geometric — dual decode merge before ink measure",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 36,
    slug: "double-raster-difference img-auto int-floor alt2",
    idea: "double-raster-difference + image-rendering auto — dual decode merge before ink measure",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 37,
    slug: "double-raster-average contain round-dims + filter-noop-defs",
    idea: "double-raster-average + contain paint min — dual decode merge before ink measure",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-average",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "double-raster-difference overflow-min alt2",
    idea: "double-raster-difference + svg block overflow — dual decode merge before ink measure",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
    },
  },
  {
    n: 39,
    slug: "double-raster-average block-svg integer-viewbox alt2",
    idea: "double-raster-average + svg display block — dual decode merge before ink measure",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raster-average",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 40,
    slug: "double-raster-difference chromium-leaf int-floor + filter-noop-defs",
    idea: "double-raster-difference + Chromium copy leaf — dual decode merge before ink measure",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raster-difference",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w12: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w12: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w12-${num}`,
    label: `Loop AI b13 w12 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w12; RASTER PRIMARY double-raster average/difference; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w12: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-13 FO recipe shard (worker 02) — RASTER PRIMARY: triple-raf-flush compositor.
 * triple requestAnimationFrame flush before drawImage — compositor settle probes
 * 40 recipes: loop-ai-b13-w02-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "triple-raf leaf",
    idea: "triple-raf-flush + FO leaf min-width — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 2,
    slug: "triple-raf kerning integer-viewbox",
    idea: "triple-raf-flush + FO kerning normal — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "triple-raf shape int-floor",
    idea: "triple-raf-flush + shape-rendering geometric — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "triple-raf img-auto round-dims",
    idea: "triple-raf-flush + image-rendering auto — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "triple-raf contain",
    idea: "triple-raf-flush + contain paint min — three-frame compositor flush before FO ink blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 6,
    slug: "triple-raf overflow-min integer-viewbox",
    idea: "triple-raf-flush + svg block overflow — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 7,
    slug: "triple-raf block-svg int-floor",
    idea: "triple-raf-flush + svg display block — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "triple-raf chromium-leaf round-dims mp-raf",
    idea: "triple-raf-flush + Chromium copy leaf — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
      monkeypatch: "raf-before-draw",
    },
  },
  {
    n: 9,
    slug: "triple-raf bare",
    idea: "triple-raf-flush + bare raster — three-frame compositor flush before FO ink blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 10,
    slug: "triple-raf overflow integer-viewbox",
    idea: "triple-raf-flush + FO overflow visible — three-frame compositor flush before FO ink blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 11,
    slug: "triple-raf leaf int-floor",
    idea: "triple-raf-flush + FO leaf min-width — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "triple-raf kerning round-dims",
    idea: "triple-raf-flush + FO kerning normal — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "triple-raf shape",
    idea: "triple-raf-flush + shape-rendering geometric — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 14,
    slug: "triple-raf img-auto integer-viewbox",
    idea: "triple-raf-flush + image-rendering auto — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "triple-raf contain int-floor",
    idea: "triple-raf-flush + contain paint min — three-frame compositor flush before FO ink blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "triple-raf overflow-min round-dims",
    idea: "triple-raf-flush + svg block overflow — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    n: 17,
    slug: "triple-raf block-svg",
    idea: "triple-raf-flush + svg display block — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 18,
    slug: "triple-raf chromium-leaf integer-viewbox",
    idea: "triple-raf-flush + Chromium copy leaf — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 19,
    slug: "triple-raf bare int-floor",
    idea: "triple-raf-flush + bare raster — three-frame compositor flush before FO ink blit",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "triple-raf overflow round-dims",
    idea: "triple-raf-flush + FO overflow visible — three-frame compositor flush before FO ink blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "triple-raf leaf alt2",
    idea: "triple-raf-flush + FO leaf min-width — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 22,
    slug: "triple-raf kerning integer-viewbox alt2",
    idea: "triple-raf-flush + FO kerning normal — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 23,
    slug: "triple-raf shape int-floor + filter-noop-defs",
    idea: "triple-raf-flush + shape-rendering geometric — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "triple-raf img-auto round-dims alt2",
    idea: "triple-raf-flush + image-rendering auto — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "triple-raf contain alt2",
    idea: "triple-raf-flush + contain paint min — three-frame compositor flush before FO ink blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 26,
    slug: "triple-raf overflow-min integer-viewbox + filter-noop-defs",
    idea: "triple-raf-flush + svg block overflow — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "triple-raf block-svg int-floor alt2",
    idea: "triple-raf-flush + svg display block — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 28,
    slug: "triple-raf chromium-leaf round-dims",
    idea: "triple-raf-flush + Chromium copy leaf — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 29,
    slug: "triple-raf bare + filter-noop-defs",
    idea: "triple-raf-flush + bare raster — three-frame compositor flush before FO ink blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "triple-raf overflow integer-viewbox alt2",
    idea: "triple-raf-flush + FO overflow visible — three-frame compositor flush before FO ink blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 31,
    slug: "triple-raf leaf int-floor alt2",
    idea: "triple-raf-flush + FO leaf min-width — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 32,
    slug: "triple-raf kerning round-dims alt2",
    idea: "triple-raf-flush + FO kerning normal — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 33,
    slug: "triple-raf shape alt2",
    idea: "triple-raf-flush + shape-rendering geometric — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 34,
    slug: "triple-raf img-auto integer-viewbox alt2",
    idea: "triple-raf-flush + image-rendering auto — three-frame compositor flush before FO ink blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 35,
    slug: "triple-raf contain int-floor + filter-noop-defs",
    idea: "triple-raf-flush + contain paint min — three-frame compositor flush before FO ink blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "triple-raf overflow-min round-dims alt2",
    idea: "triple-raf-flush + svg block overflow — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 37,
    slug: "triple-raf block-svg alt2",
    idea: "triple-raf-flush + svg display block — three-frame compositor flush before FO ink blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
    },
  },
  {
    n: 38,
    slug: "triple-raf chromium-leaf integer-viewbox + filter-noop-defs",
    idea: "triple-raf-flush + Chromium copy leaf — three-frame compositor flush before FO ink blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "triple-raf bare int-floor alt2",
    idea: "triple-raf-flush + bare raster — three-frame compositor flush before FO ink blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 40,
    slug: "triple-raf overflow round-dims alt2",
    idea: "triple-raf-flush + FO overflow visible — three-frame compositor flush before FO ink blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootRound: "round-dims",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w02: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w02: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w02-${num}`,
    label: `Loop AI b13 w02 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w02; RASTER PRIMARY triple-raf-flush compositor; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w02: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

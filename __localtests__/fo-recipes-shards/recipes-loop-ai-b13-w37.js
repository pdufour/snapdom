/**
 * Loop AI batch-13 FO recipe shard (worker 37) — RASTER PRIMARY: preserveAspectRatio svgRootPatch.
 * xMidYMid meet / slice / none on svg root + raster decode paths
 * 40 recipes: loop-ai-b13-w37-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "aspect xMinYMin slice decode-interval overflow",
    idea: "preserveAspectRatio xMinYMin slice + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 2,
    slug: "aspect none double-raf leaf",
    idea: "preserveAspectRatio none + double-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 3,
    slug: "aspect xMidYMid fonts-ready-interval kerning",
    idea: "preserveAspectRatio xMidYMid + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 4,
    slug: "aspect xMidYMid meet triple-raf-flush shape",
    idea: "preserveAspectRatio xMidYMid meet + triple-raf-flush + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 5,
    slug: "aspect xMinYMin slice webp-roundtrip img-auto",
    idea: "preserveAspectRatio xMinYMin slice + webp-roundtrip + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 6,
    slug: "aspect none bitmaprenderer-transfer contain",
    idea: "preserveAspectRatio none + bitmaprenderer-transfer + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 7,
    slug: "aspect xMidYMid phantom-font-prime overflow-min",
    idea: "preserveAspectRatio xMidYMid + phantom-font-prime + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 8,
    slug: "aspect xMidYMid meet composite-copy block-svg",
    idea: "preserveAspectRatio xMidYMid meet + composite-copy + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 9,
    slug: "aspect xMinYMin slice flip-y chromium-leaf",
    idea: "preserveAspectRatio xMinYMin slice + flip-y + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 10,
    slug: "aspect none scale-down-up bare",
    idea: "preserveAspectRatio none + scale-down-up + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 11,
    slug: "aspect xMidYMid decode-interval overflow",
    idea: "preserveAspectRatio xMidYMid + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "decode-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 12,
    slug: "aspect xMidYMid meet double-raf leaf",
    idea: "preserveAspectRatio xMidYMid meet + double-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 13,
    slug: "aspect xMinYMin slice fonts-ready-interval kerning",
    idea: "preserveAspectRatio xMinYMin slice + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 14,
    slug: "aspect none triple-raf-flush shape",
    idea: "preserveAspectRatio none + triple-raf-flush + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "triple-raf-flush",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 15,
    slug: "aspect xMidYMid webp-roundtrip img-auto",
    idea: "preserveAspectRatio xMidYMid + webp-roundtrip + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 16,
    slug: "aspect xMidYMid meet bitmaprenderer-transfer contain",
    idea: "preserveAspectRatio xMidYMid meet + bitmaprenderer-transfer + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 17,
    slug: "aspect xMinYMin slice phantom-font-prime overflow-min",
    idea: "preserveAspectRatio xMinYMin slice + phantom-font-prime + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "phantom-font-prime",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 18,
    slug: "aspect none composite-copy block-svg",
    idea: "preserveAspectRatio none + composite-copy + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 19,
    slug: "aspect xMidYMid flip-y chromium-leaf",
    idea: "preserveAspectRatio xMidYMid + flip-y + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 20,
    slug: "aspect xMidYMid meet scale-down-up bare",
    idea: "preserveAspectRatio xMidYMid meet + scale-down-up + bare raster",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "scale-down-up",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 21,
    slug: "aspect xMinYMin slice decode-interval overflow + filter-noop-defs",
    idea: "preserveAspectRatio xMinYMin slice + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "aspect none double-raf leaf alt2",
    idea: "preserveAspectRatio none + double-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "double-raf",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 23,
    slug: "aspect xMidYMid fonts-ready-interval kerning alt2",
    idea: "preserveAspectRatio xMidYMid + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "fonts-ready-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 24,
    slug: "aspect xMidYMid meet triple-raf-flush shape + filter-noop-defs",
    idea: "preserveAspectRatio xMidYMid meet + triple-raf-flush + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "aspect xMinYMin slice webp-roundtrip img-auto alt2",
    idea: "preserveAspectRatio xMinYMin slice + webp-roundtrip + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "webp-roundtrip",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 26,
    slug: "aspect none bitmaprenderer-transfer contain alt2",
    idea: "preserveAspectRatio none + bitmaprenderer-transfer + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 27,
    slug: "aspect xMidYMid phantom-font-prime overflow-min + filter-noop-defs",
    idea: "preserveAspectRatio xMidYMid + phantom-font-prime + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "aspect xMidYMid meet composite-copy block-svg alt2",
    idea: "preserveAspectRatio xMidYMid meet + composite-copy + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "composite-copy",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 29,
    slug: "aspect xMinYMin slice flip-y chromium-leaf alt2",
    idea: "preserveAspectRatio xMinYMin slice + flip-y + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "flip-y",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 30,
    slug: "aspect none scale-down-up bare + filter-noop-defs",
    idea: "preserveAspectRatio none + scale-down-up + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "aspect xMidYMid decode-interval overflow alt2",
    idea: "preserveAspectRatio xMidYMid + decode-interval + FO overflow visible",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "decode-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 32,
    slug: "aspect xMidYMid meet double-raf leaf alt2",
    idea: "preserveAspectRatio xMidYMid meet + double-raf + FO leaf min-width",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "double-raf",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
  {
    n: 33,
    slug: "aspect xMinYMin slice fonts-ready-interval kerning + filter-noop-defs",
    idea: "preserveAspectRatio xMinYMin slice + fonts-ready-interval + FO kerning normal",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "fonts-ready-interval",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "aspect none triple-raf-flush shape alt2",
    idea: "preserveAspectRatio none + triple-raf-flush + shape-rendering geometric",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "triple-raf-flush",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 35,
    slug: "aspect xMidYMid webp-roundtrip img-auto alt2",
    idea: "preserveAspectRatio xMidYMid + webp-roundtrip + image-rendering auto",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "webp-roundtrip",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 36,
    slug: "aspect xMidYMid meet bitmaprenderer-transfer contain + filter-noop-defs",
    idea: "preserveAspectRatio xMidYMid meet + bitmaprenderer-transfer + contain paint min",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "bitmaprenderer-transfer",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "aspect xMinYMin slice phantom-font-prime overflow-min alt2",
    idea: "preserveAspectRatio xMinYMin slice + phantom-font-prime + svg block overflow",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "phantom-font-prime",
      svgRootPatch: {
      preserveAspectRatio: "xMinYMin slice",
      },
    },
  },
  {
    n: 38,
    slug: "aspect none composite-copy block-svg alt2",
    idea: "preserveAspectRatio none + composite-copy + svg display block",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "composite-copy",
      svgRootPatch: {
      preserveAspectRatio: "none",
      },
    },
  },
  {
    n: 39,
    slug: "aspect xMidYMid flip-y chromium-leaf + filter-noop-defs",
    idea: "preserveAspectRatio xMidYMid + flip-y + Chromium copy leaf",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "flip-y",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid",
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "aspect xMidYMid meet scale-down-up bare alt2",
    idea: "preserveAspectRatio xMidYMid meet + scale-down-up + bare raster",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "scale-down-up",
      svgRootPatch: {
      preserveAspectRatio: "xMidYMid meet",
      },
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w37: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w37: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w37-${num}`,
    label: `Loop AI b13 w37 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w37; RASTER PRIMARY preserveAspectRatio svgRootPatch; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w37: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

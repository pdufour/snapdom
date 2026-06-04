/**
 * Loop AI batch-13 FO recipe shard (worker 13) — RASTER PRIMARY: supersample-downscale.
 * lab supersample then downscale — scaleMultiplier from radicalOptions
 * 40 recipes: loop-ai-b13-w13-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "supersample 1.5x kerning int-floor",
    idea: "supersample-downscale 1.5× + FO kerning normal — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "supersample 1.75x shape round-dims",
    idea: "supersample-downscale 1.75× + shape-rendering geometric — oversample then downscale blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "supersample 2x img-auto",
    idea: "supersample-downscale 2× + image-rendering auto — oversample then downscale blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 4,
    slug: "supersample 2.25x contain integer-viewbox",
    idea: "supersample-downscale 2.25× + contain paint min — oversample then downscale blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "supersample 1.5x overflow-min int-floor",
    idea: "supersample-downscale 1.5× + svg block overflow — oversample then downscale blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
    },
  },
  {
    n: 6,
    slug: "supersample 1.75x block-svg round-dims",
    idea: "supersample-downscale 1.75× + svg display block — oversample then downscale blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "supersample 2x chromium-leaf",
    idea: "supersample-downscale 2× + Chromium copy leaf — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 8,
    slug: "supersample 2.25x bare integer-viewbox",
    idea: "supersample-downscale 2.25× + bare raster — oversample then downscale blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "supersample 1.5x overflow int-floor",
    idea: "supersample-downscale 1.5× + FO overflow visible — oversample then downscale blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
    },
  },
  {
    n: 10,
    slug: "supersample 1.75x leaf round-dims",
    idea: "supersample-downscale 1.75× + FO leaf min-width — oversample then downscale blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "supersample 2x kerning",
    idea: "supersample-downscale 2× + FO kerning normal — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 12,
    slug: "supersample 2.25x shape integer-viewbox",
    idea: "supersample-downscale 2.25× + shape-rendering geometric — oversample then downscale blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "supersample 1.5x img-auto int-floor",
    idea: "supersample-downscale 1.5× + image-rendering auto — oversample then downscale blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "supersample 1.75x contain round-dims",
    idea: "supersample-downscale 1.75× + contain paint min — oversample then downscale blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "supersample 2x overflow-min",
    idea: "supersample-downscale 2× + svg block overflow — oversample then downscale blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 16,
    slug: "supersample 2.25x block-svg integer-viewbox",
    idea: "supersample-downscale 2.25× + svg display block — oversample then downscale blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "supersample 1.5x chromium-leaf int-floor",
    idea: "supersample-downscale 1.5× + Chromium copy leaf — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "supersample 1.75x bare round-dims",
    idea: "supersample-downscale 1.75× + bare raster — oversample then downscale blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "supersample 2x overflow",
    idea: "supersample-downscale 2× + FO overflow visible — oversample then downscale blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
    },
  },
  {
    n: 20,
    slug: "supersample 2.25x leaf integer-viewbox",
    idea: "supersample-downscale 2.25× + FO leaf min-width — oversample then downscale blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "supersample 1.5x kerning int-floor + filter-noop-defs",
    idea: "supersample-downscale 1.5× + FO kerning normal — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "supersample 1.75x shape round-dims + filter-noop-defs",
    idea: "supersample-downscale 1.75× + shape-rendering geometric — oversample then downscale blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "supersample 2x img-auto + filter-noop-defs",
    idea: "supersample-downscale 2× + image-rendering auto — oversample then downscale blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "supersample 2.25x contain integer-viewbox + filter-noop-defs",
    idea: "supersample-downscale 2.25× + contain paint min — oversample then downscale blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "supersample 1.5x overflow-min int-floor + filter-noop-defs",
    idea: "supersample-downscale 1.5× + svg block overflow — oversample then downscale blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "supersample 1.75x block-svg round-dims + filter-noop-defs",
    idea: "supersample-downscale 1.75× + svg display block — oversample then downscale blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "supersample 2x chromium-leaf + filter-noop-defs",
    idea: "supersample-downscale 2× + Chromium copy leaf — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "supersample 2.25x bare integer-viewbox + filter-noop-defs",
    idea: "supersample-downscale 2.25× + bare raster — oversample then downscale blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "supersample 1.5x overflow int-floor + filter-noop-defs",
    idea: "supersample-downscale 1.5× + FO overflow visible — oversample then downscale blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "supersample 1.75x leaf round-dims + filter-noop-defs",
    idea: "supersample-downscale 1.75× + FO leaf min-width — oversample then downscale blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "supersample 2x kerning + filter-noop-defs",
    idea: "supersample-downscale 2× + FO kerning normal — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "supersample 2.25x shape integer-viewbox + filter-noop-defs",
    idea: "supersample-downscale 2.25× + shape-rendering geometric — oversample then downscale blit",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "supersample 1.5x img-auto int-floor + filter-noop-defs",
    idea: "supersample-downscale 1.5× + image-rendering auto — oversample then downscale blit",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "supersample 1.75x contain round-dims + filter-noop-defs",
    idea: "supersample-downscale 1.75× + contain paint min — oversample then downscale blit",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "supersample 2x overflow-min + filter-noop-defs",
    idea: "supersample-downscale 2× + svg block overflow — oversample then downscale blit",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "supersample 2.25x block-svg integer-viewbox + filter-noop-defs",
    idea: "supersample-downscale 2.25× + svg display block — oversample then downscale blit",
    css: "svg{display:block!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "supersample 1.5x chromium-leaf int-floor + filter-noop-defs",
    idea: "supersample-downscale 1.5× + Chromium copy leaf — oversample then downscale blit",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.5,
      },
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "supersample 1.75x bare round-dims + filter-noop-defs",
    idea: "supersample-downscale 1.75× + bare raster — oversample then downscale blit",
    css: "",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 1.75,
      },
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "supersample 2x overflow + filter-noop-defs",
    idea: "supersample-downscale 2× + FO overflow visible — oversample then downscale blit",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2,
      },
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "supersample 2.25x leaf integer-viewbox + filter-noop-defs",
    idea: "supersample-downscale 2.25× + FO leaf min-width — oversample then downscale blit",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "supersample-downscale",
      radicalOptions: {
      scaleMultiplier: 2.25,
      },
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w13: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w13: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w13-${num}`,
    label: `Loop AI b13 w13 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w13; RASTER PRIMARY supersample-downscale; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w13: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

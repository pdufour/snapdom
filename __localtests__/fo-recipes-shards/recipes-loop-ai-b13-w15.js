/**
 * Loop AI batch-13 FO recipe shard (worker 15) — RASTER PRIMARY: h2-frac-draw offsets.
 * fractional drawImage dest offsets — sub-pixel blit alignment
 * 40 recipes: loop-ai-b13-w15-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "h2-frac-draw chromium-leaf",
    idea: "h2-frac-draw + Chromium copy leaf — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
    },
  },
  {
    n: 2,
    slug: "h2-frac-draw bare integer-viewbox",
    idea: "h2-frac-draw + bare raster — fractional drawImage dest probe",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 3,
    slug: "h2-frac-draw overflow int-floor",
    idea: "h2-frac-draw + FO overflow visible — fractional drawImage dest probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 4,
    slug: "h2-frac-draw leaf round-dims",
    idea: "h2-frac-draw + FO leaf min-width — fractional drawImage dest probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 5,
    slug: "h2-frac-draw kerning",
    idea: "h2-frac-draw + FO kerning normal — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
    },
  },
  {
    n: 6,
    slug: "h2-frac-draw shape integer-viewbox",
    idea: "h2-frac-draw + shape-rendering geometric — fractional drawImage dest probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 7,
    slug: "h2-frac-draw img-auto int-floor",
    idea: "h2-frac-draw + image-rendering auto — fractional drawImage dest probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 8,
    slug: "h2-frac-draw contain round-dims",
    idea: "h2-frac-draw + contain paint min — fractional drawImage dest probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 9,
    slug: "h2-frac-draw overflow-min",
    idea: "h2-frac-draw + svg block overflow — fractional drawImage dest probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
    },
  },
  {
    n: 10,
    slug: "h2-frac-draw block-svg integer-viewbox",
    idea: "h2-frac-draw + svg display block — fractional drawImage dest probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 11,
    slug: "h2-frac-draw chromium-leaf int-floor",
    idea: "h2-frac-draw + Chromium copy leaf — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 12,
    slug: "h2-frac-draw bare round-dims",
    idea: "h2-frac-draw + bare raster — fractional drawImage dest probe",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 13,
    slug: "h2-frac-draw overflow",
    idea: "h2-frac-draw + FO overflow visible — fractional drawImage dest probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
    },
  },
  {
    n: 14,
    slug: "h2-frac-draw leaf integer-viewbox",
    idea: "h2-frac-draw + FO leaf min-width — fractional drawImage dest probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 15,
    slug: "h2-frac-draw kerning int-floor",
    idea: "h2-frac-draw + FO kerning normal — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 16,
    slug: "h2-frac-draw shape round-dims",
    idea: "h2-frac-draw + shape-rendering geometric — fractional drawImage dest probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 17,
    slug: "h2-frac-draw img-auto",
    idea: "h2-frac-draw + image-rendering auto — fractional drawImage dest probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
    },
  },
  {
    n: 18,
    slug: "h2-frac-draw contain integer-viewbox",
    idea: "h2-frac-draw + contain paint min — fractional drawImage dest probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 19,
    slug: "h2-frac-draw overflow-min int-floor",
    idea: "h2-frac-draw + svg block overflow — fractional drawImage dest probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 20,
    slug: "h2-frac-draw block-svg round-dims",
    idea: "h2-frac-draw + svg display block — fractional drawImage dest probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 21,
    slug: "h2-frac-draw chromium-leaf + filter-noop-defs",
    idea: "h2-frac-draw + Chromium copy leaf — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "h2-frac-draw bare integer-viewbox + filter-noop-defs",
    idea: "h2-frac-draw + bare raster — fractional drawImage dest probe",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "h2-frac-draw overflow int-floor + filter-noop-defs",
    idea: "h2-frac-draw + FO overflow visible — fractional drawImage dest probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "h2-frac-draw leaf round-dims + filter-noop-defs",
    idea: "h2-frac-draw + FO leaf min-width — fractional drawImage dest probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "h2-frac-draw kerning + filter-noop-defs",
    idea: "h2-frac-draw + FO kerning normal — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 26,
    slug: "h2-frac-draw shape integer-viewbox alt2",
    idea: "h2-frac-draw + shape-rendering geometric — fractional drawImage dest probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 27,
    slug: "h2-frac-draw img-auto int-floor + filter-noop-defs",
    idea: "h2-frac-draw + image-rendering auto — fractional drawImage dest probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "h2-frac-draw contain round-dims + filter-noop-defs",
    idea: "h2-frac-draw + contain paint min — fractional drawImage dest probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "h2-frac-draw overflow-min + filter-noop-defs",
    idea: "h2-frac-draw + svg block overflow — fractional drawImage dest probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "h2-frac-draw block-svg integer-viewbox alt2",
    idea: "h2-frac-draw + svg display block — fractional drawImage dest probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
      monkeypatch: "drawImage-wrap",
    },
  },
  {
    n: 31,
    slug: "h2-frac-draw chromium-leaf int-floor + filter-noop-defs",
    idea: "h2-frac-draw + Chromium copy leaf — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "h2-frac-draw bare round-dims + filter-noop-defs",
    idea: "h2-frac-draw + bare raster — fractional drawImage dest probe",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "h2-frac-draw overflow + filter-noop-defs",
    idea: "h2-frac-draw + FO overflow visible — fractional drawImage dest probe",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "h2-frac-draw leaf integer-viewbox + filter-noop-defs",
    idea: "h2-frac-draw + FO leaf min-width — fractional drawImage dest probe",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "h2-frac-draw kerning int-floor + filter-noop-defs",
    idea: "h2-frac-draw + FO kerning normal — fractional drawImage dest probe",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 36,
    slug: "h2-frac-draw shape round-dims + filter-noop-defs",
    idea: "h2-frac-draw + shape-rendering geometric — fractional drawImage dest probe",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "h2-frac-draw img-auto + filter-noop-defs",
    idea: "h2-frac-draw + image-rendering auto — fractional drawImage dest probe",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "h2-frac-draw contain integer-viewbox alt2",
    idea: "h2-frac-draw + contain paint min — fractional drawImage dest probe",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 39,
    slug: "h2-frac-draw overflow-min int-floor + filter-noop-defs",
    idea: "h2-frac-draw + svg block overflow — fractional drawImage dest probe",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "raster",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "h2-frac-draw block-svg round-dims + filter-noop-defs",
    idea: "h2-frac-draw + svg display block — fractional drawImage dest probe",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "h2-frac-draw",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w15: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w15: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w15-${num}`,
    label: `Loop AI b13 w15 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w15; RASTER PRIMARY h2-frac-draw offsets; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w15: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

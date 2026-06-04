/**
 * Loop AI batch-13 FO recipe shard (worker 21) — RASTER PRIMARY: putImageData live snapshot.
 * canvas putImageData overlay from live DOM pixel snapshot
 * 40 recipes: loop-ai-b13-w21-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "putImageData overflow-min int-floor",
    idea: "canvas-putImageData-live-snapshot + svg block overflow — live pixel graft after FO decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 2,
    slug: "putImageData block-svg round-dims",
    idea: "canvas-putImageData-live-snapshot + svg display block — live pixel graft after FO decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 3,
    slug: "putImageData chromium-leaf",
    idea: "canvas-putImageData-live-snapshot + Chromium copy leaf — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
    },
  },
  {
    n: 4,
    slug: "putImageData bare integer-viewbox",
    idea: "canvas-putImageData-live-snapshot + bare raster — live pixel graft after FO decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 5,
    slug: "putImageData overflow int-floor",
    idea: "canvas-putImageData-live-snapshot + FO overflow visible — live pixel graft after FO decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 6,
    slug: "putImageData leaf round-dims",
    idea: "canvas-putImageData-live-snapshot + FO leaf min-width — live pixel graft after FO decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 7,
    slug: "putImageData kerning",
    idea: "canvas-putImageData-live-snapshot + FO kerning normal — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
    },
  },
  {
    n: 8,
    slug: "putImageData shape integer-viewbox",
    idea: "canvas-putImageData-live-snapshot + shape-rendering geometric — live pixel graft after FO decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 9,
    slug: "putImageData img-auto int-floor",
    idea: "canvas-putImageData-live-snapshot + image-rendering auto — live pixel graft after FO decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 10,
    slug: "putImageData contain round-dims",
    idea: "canvas-putImageData-live-snapshot + contain paint min — live pixel graft after FO decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 11,
    slug: "putImageData overflow-min",
    idea: "canvas-putImageData-live-snapshot + svg block overflow — live pixel graft after FO decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
    },
  },
  {
    n: 12,
    slug: "putImageData block-svg integer-viewbox",
    idea: "canvas-putImageData-live-snapshot + svg display block — live pixel graft after FO decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 13,
    slug: "putImageData chromium-leaf int-floor",
    idea: "canvas-putImageData-live-snapshot + Chromium copy leaf — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 14,
    slug: "putImageData bare round-dims",
    idea: "canvas-putImageData-live-snapshot + bare raster — live pixel graft after FO decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 15,
    slug: "putImageData overflow",
    idea: "canvas-putImageData-live-snapshot + FO overflow visible — live pixel graft after FO decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "fe-turbulence-composite",
    },
  },
  {
    n: 16,
    slug: "putImageData leaf integer-viewbox",
    idea: "canvas-putImageData-live-snapshot + FO leaf min-width — live pixel graft after FO decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 17,
    slug: "putImageData kerning int-floor",
    idea: "canvas-putImageData-live-snapshot + FO kerning normal — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
    },
  },
  {
    n: 18,
    slug: "putImageData shape round-dims",
    idea: "canvas-putImageData-live-snapshot + shape-rendering geometric — live pixel graft after FO decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
    },
  },
  {
    n: 19,
    slug: "putImageData img-auto",
    idea: "canvas-putImageData-live-snapshot + image-rendering auto — live pixel graft after FO decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
    },
  },
  {
    n: 20,
    slug: "putImageData contain integer-viewbox",
    idea: "canvas-putImageData-live-snapshot + contain paint min — live pixel graft after FO decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    n: 21,
    slug: "putImageData overflow-min int-floor + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + svg block overflow — live pixel graft after FO decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 22,
    slug: "putImageData block-svg round-dims + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + svg display block — live pixel graft after FO decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 23,
    slug: "putImageData chromium-leaf + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + Chromium copy leaf — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 24,
    slug: "putImageData bare integer-viewbox + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + bare raster — live pixel graft after FO decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 25,
    slug: "putImageData overflow int-floor + fo-0",
    idea: "canvas-putImageData-live-snapshot + FO overflow visible — live pixel graft after FO decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 26,
    slug: "putImageData leaf round-dims + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + FO leaf min-width — live pixel graft after FO decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 27,
    slug: "putImageData kerning + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + FO kerning normal — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 28,
    slug: "putImageData shape integer-viewbox + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + shape-rendering geometric — live pixel graft after FO decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 29,
    slug: "putImageData img-auto int-floor + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + image-rendering auto — live pixel graft after FO decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 30,
    slug: "putImageData contain round-dims + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + contain paint min — live pixel graft after FO decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 31,
    slug: "putImageData overflow-min + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + svg block overflow — live pixel graft after FO decode",
    css: "svg{display:block!important;overflow:visible!important}foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 32,
    slug: "putImageData block-svg integer-viewbox + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + svg display block — live pixel graft after FO decode",
    css: "svg{display:block!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 33,
    slug: "putImageData chromium-leaf int-floor + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + Chromium copy leaf — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 34,
    slug: "putImageData bare round-dims + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + bare raster — live pixel graft after FO decode",
    css: "",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 35,
    slug: "putImageData overflow + fo-0",
    idea: "canvas-putImageData-live-snapshot + FO overflow visible — live pixel graft after FO decode",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    n: 36,
    slug: "putImageData leaf integer-viewbox + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + FO leaf min-width — live pixel graft after FO decode",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 37,
    slug: "putImageData kerning int-floor + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + FO kerning normal — live pixel graft after FO decode",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "int-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 38,
    slug: "putImageData shape round-dims + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + shape-rendering geometric — live pixel graft after FO decode",
    css: "foreignObject *{shape-rendering:geometricPrecision!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "round-dims",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 39,
    slug: "putImageData img-auto + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + image-rendering auto — live pixel graft after FO decode",
    css: "foreignObject *{image-rendering:auto!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    n: 40,
    slug: "putImageData contain integer-viewbox + filter-noop-defs",
    idea: "canvas-putImageData-live-snapshot + contain paint min — live pixel graft after FO decode",
    css: "foreignObject{contain:paint!important}foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}",
    extra: {
      inject: "both",
      rasterPatch: "canvas-putImageData-live-snapshot",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w21: expected 40 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(`recipes-loop-ai-b13-w21: duplicate slugs in SPECS`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `loop-ai-b13-w21-${num}`,
    label: `Loop AI b13 w21 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w21; RASTER PRIMARY putImageData live snapshot; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b13-w21: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

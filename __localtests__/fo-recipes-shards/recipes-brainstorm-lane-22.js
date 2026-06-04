/**
 * Worker batch E brainstorm — lane 22: foreignObject width/height attribute vs CSS dimension sync
 * 40 FO-only recipes: brain-l22-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "fo-attr wh 100pct decode-interval",
    idea: "foAttrPatch width/height 100% on each FO — attr vs inline CSS dimension sync",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 2,
    slug: "fo-attr explicit px decode-interval",
    idea: "foAttrPatch width/height from capture box — explicit px attrs on FO",
    css: FO_BASELINE_CSS,
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%",
        "x": "0",
        "y": "0"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 3,
    slug: "h2-pin-width decode-interval",
    idea: "h2-pin-width-from-live — measured width pin before FO raster",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 4,
    slug: "h2-pin-width-line-height decode-interval",
    idea: "h2-pin-width-line-height-from-live — width then lh pin from live layout",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-line-height-from-live",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 5,
    slug: "h2-fo-percent-int-viewbox decode-interval",
    idea: "h2-fo-percent-int-viewbox — FO percent attrs + integer viewBox snap",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-fo-percent-int-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 6,
    slug: "fo css width height auto",
    idea: "foreignObject{width:auto!important;height:auto!important} — let CSS drive FO box",
    css: "foreignObject{width:auto!important;height:auto!important;overflow:visible!important}",
    extra: {
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 7,
    slug: "fo css 100pct box-sizing",
    idea: "FO width/height 100% + border-box on FO * — attr/CSS sync via box model",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 8,
    slug: "fo attr micro-origin decode-interval",
    idea: "foAttrPatch x/y 0.0001 — Chromium #104-style micro origin on FO attrs",
    css: FO_BASELINE_CSS,
    extra: {
      "foAttrPatch": {
        "x": "0.0001",
        "y": "0.0001"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 9,
    slug: "fo attr x0 y0 wh 100pct",
    idea: "foAttrPatch x=0 y=0 width=100% height=100% — full attr box sync",
    css: "foreignObject{overflow:visible!important;width:100%!important;height:100%!important}",
    extra: {
      "foAttrPatch": {
        "x": "0",
        "y": "0",
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 10,
    slug: "svg root patch wh int-vb",
    idea: "svgRootPatch explicit width/height + integer-viewbox — root dim sync with FO",
    css: FO_BASELINE_CSS,
    extra: {
      "svgRootRound": "integer-viewbox",
      "svgRootPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 11,
    slug: "h2-pin-width int-vb",
    idea: "h2-pin-width-from-live + integer-viewbox — measured width + viewBox snap",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 12,
    slug: "h2-pin-width int-floor",
    idea: "h2-pin-width-from-live + int-floor — width pin + floored root dims",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "svgRootRound": "int-floor",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 13,
    slug: "h2-pin-width round-dims",
    idea: "h2-pin-width-from-live + round-dims — width pin + rounded SVG root",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "svgRootRound": "round-dims",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 14,
    slug: "h2-pin-wh-lh int-vb",
    idea: "h2-pin-width-line-height + integer-viewbox — composite pin + viewBox",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-line-height-from-live",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 15,
    slug: "h2-fo-percent int-vb blob",
    idea: "h2-fo-percent-int-viewbox + blob-url-decode-interval",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-fo-percent-int-viewbox",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 16,
    slug: "fo attr wh + css fit-content",
    idea: "foAttrPatch 100% + CSS width:fit-content on FO * — attr vs content intrinsic",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}foreignObject *{width:fit-content!important;max-width:100%!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 17,
    slug: "fo min-width 0 height auto",
    idea: "FO min-width:0 + height:auto — flex leaf height from content vs attr",
    css: "foreignObject{min-width:0!important;height:auto!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 18,
    slug: "fo block-size inline-size 100pct",
    idea: "logical sizing block-size/inline-size 100% on FO — modern CSS dim sync",
    css: "foreignObject{block-size:100%!important;inline-size:100%!important;box-sizing:border-box!important}",
    extra: {
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 19,
    slug: "fo attr shape-rendering auto",
    idea: "foAttrPatch shape-rendering:auto + width/height 100% — FO attr bundle",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%",
        "shape-rendering": "auto"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 20,
    slug: "h2-pin-width double-decode",
    idea: "h2-pin-width-from-live + double-decode — width pin + double decode pass",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 21,
    slug: "h2-pin-width decode-interval-raf",
    idea: "h2-pin-width-from-live + decode-interval-raf — width pin + rAF flush",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "decode-interval-raf"
    },
  },
  {
    n: 22,
    slug: "fo height 1px overflow visible",
    idea: "fo-height-1px-overflow-visible — attr height 1px + CSS overflow visible",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "fo-height-1px-overflow-visible",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 23,
    slug: "device-grid fo wh attrs",
    idea: "device-grid-floor + foAttrPatch width/height 100% — pixel grid + FO attrs",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 24,
    slug: "h2-pin-width create-image-bitmap",
    idea: "h2-pin-width-from-live + create-image-bitmap — width pin + bitmap decode",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 25,
    slug: "h2-pin-wh-lh fonts-ready",
    idea: "h2-pin-width-line-height + fonts-ready-interval — pin + font settle",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-line-height-from-live",
      "rasterPatch": "fonts-ready-interval"
    },
  },
  {
    n: 26,
    slug: "fo css max-width none",
    idea: "FO max-width:none + width 100% attr — unconstrained inline axis",
    css: "foreignObject{max-width:none!important;width:100%!important;height:100%!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 27,
    slug: "fo css aspect-ratio auto",
    idea: "aspect-ratio:auto on FO — reset aspect before attr/Css sync",
    css: "foreignObject{aspect-ratio:auto!important;width:100%!important;height:100%!important}",
    extra: {
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 28,
    slug: "h2-pin-width explicit-xmlns",
    idea: "h2-pin-width-from-live + explicit-xmlns — width pin + xmlns hygiene",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "svgMarkupPatch": "explicit-xmlns",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 29,
    slug: "h2-fo-percent decode-via-blob",
    idea: "h2-fo-percent-int-viewbox + decode-via-blob — percent FO + blob decode",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-fo-percent-int-viewbox",
      "rasterPatch": "decode-via-blob"
    },
  },
  {
    n: 30,
    slug: "fo attr wh int-vb decode",
    idea: "foAttrPatch 100% + integer-viewbox + decode-interval — triple dim sync",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 31,
    slug: "h2-pin-width int-vb blob",
    idea: "h2-pin-width + integer-viewbox + blob-url-decode-interval",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 32,
    slug: "fo contain size layout",
    idea: "contain:size on FO — size containment vs width/height attrs",
    css: "foreignObject{contain:size!important;width:100%!important;height:100%!important;overflow:visible!important}",
    extra: {
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 33,
    slug: "h2-pin-width h2-frac-draw",
    idea: "h2-pin-width-from-live + h2-frac-draw — width pin + fractional drawImage source rect",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "h2-frac-draw"
    },
  },
  {
    n: 34,
    slug: "fo attr wh two-stage",
    idea: "foAttrPatch 100% + two-stage raster — attr sync + intermediate canvas",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "two-stage"
    },
  },
  {
    n: 35,
    slug: "h2-pin-wh-lh int-floor blob",
    idea: "h2-pin-width-line-height + int-floor + blob decode-interval",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-line-height-from-live",
      "svgRootRound": "int-floor",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 36,
    slug: "fo css width 100pct height auto attr",
    idea: "CSS height:auto + foAttr height 100% — intentional attr/CSS tension probe",
    css: "foreignObject{width:100%!important;height:auto!important;overflow:visible!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 37,
    slug: "h2-pin-width triple-decode",
    idea: "h2-pin-width-from-live + triple-decode — width pin + triple decode loop",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "triple-decode"
    },
  },
  {
    n: 38,
    slug: "fo attr overflow visible wh",
    idea: "foAttrPatch overflow=visible + width/height 100% — SVG attr overflow sync",
    css: "foreignObject{width:100%!important;height:100%!important;box-sizing:border-box!important}",
    extra: {
      "foAttrPatch": {
        "width": "100%",
        "height": "100%",
        "overflow": "visible"
      },
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 39,
    slug: "h2-pin-width mp draw-pixelated",
    idea: "h2-pin-width-from-live + draw-image-pixelated monkeypatch",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-pin-width-from-live",
      "rasterPatch": "decode-interval",
      "monkeypatch": "draw-image-pixelated"
    },
  },
  {
    n: 40,
    slug: "h2-fo-percent int-vb decode-interval-raf",
    idea: "h2-fo-percent-int-viewbox + decode-interval-raf — percent FO + compositor flush",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "h2-fo-percent-int-viewbox",
      "rasterPatch": "decode-interval-raf"
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error('recipes-brainstorm-lane-22: expected 40 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const useBaseline = inject !== 'raster' && css === FO_BASELINE_CSS
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `brain-l22-${num}`,
    label: `Brain L22 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'decode',
    active: true,
    notes:
      'Worker batch E lane 22; foreignObject width/height attribute vs CSS dimension sync — FO raster only, no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

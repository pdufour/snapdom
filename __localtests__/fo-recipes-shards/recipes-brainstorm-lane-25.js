/**
 * Worker batch E brainstorm — lane 25: Blob URL / data URL raster preload timing
 * 40 FO-only recipes: brain-l25-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "blob-url bare",
    idea: "blob-url raster — object URL handoff vs inline data URL decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url"
    },
  },
  {
    n: 2,
    slug: "blob-url-decode-interval bare",
    idea: "blob-url-decode-interval — blob handoff + 100ms post-decode wait",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 3,
    slug: "blob-url-early-revoke bare",
    idea: "blob-url-early-revoke — revoke object URL immediately after img.src assign",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-early-revoke"
    },
  },
  {
    n: 4,
    slug: "blob-url-fetch-revoke bare",
    idea: "blob-url-fetch-revoke — fetch blob, revoke, re-create URL for decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-fetch-revoke"
    },
  },
  {
    n: 5,
    slug: "decode-via-blob bare",
    idea: "decode-via-blob — fetch SVG data URL → blob URL decode bypass",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-via-blob"
    },
  },
  {
    n: 6,
    slug: "load-event bare",
    idea: "load-event — await img.onload instead of decode() before drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "load-event"
    },
  },
  {
    n: 7,
    slug: "load-event-interval bare",
    idea: "load-event-interval — onload + 100ms interval before drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "load-event-interval"
    },
  },
  {
    n: 8,
    slug: "pre-decode-dom bare",
    idea: "pre-decode-dom — hidden DOM img attachment before decode assignment",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "pre-decode-dom"
    },
  },
  {
    n: 9,
    slug: "double-decode bare",
    idea: "double-decode — two decode() passes on data URL img before draw",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 10,
    slug: "triple-decode bare",
    idea: "triple-decode — three decode() loops before FO ink draw",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "triple-decode"
    },
  },
  {
    n: 11,
    slug: "blob-decode-interval int-vb",
    idea: "blob-url-decode-interval + integer-viewbox — blob timing + viewBox snap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-decode-interval",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 12,
    slug: "decode-via-blob int-vb",
    idea: "decode-via-blob + integer-viewbox",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-via-blob",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 13,
    slug: "blob-fetch-revoke int-floor",
    idea: "blob-url-fetch-revoke + int-floor — revoke stress + floored root",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-fetch-revoke",
      "svgRootRound": "int-floor"
    },
  },
  {
    n: 14,
    slug: "blob-early-revoke round-dims",
    idea: "blob-url-early-revoke + round-dims — early revoke + rounded SVG root",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-early-revoke",
      "svgRootRound": "round-dims"
    },
  },
  {
    n: 15,
    slug: "blob-url int-vb baseline",
    idea: "blob-url + integer-viewbox + FO_BASELINE",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "blob-url",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 16,
    slug: "blob-decode-interval baseline both",
    idea: "blob-url-decode-interval + FO_BASELINE at capture — blob timing + baseline CSS",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 17,
    slug: "decode-via-blob baseline both",
    idea: "decode-via-blob + FO_BASELINE — blob bypass + product foNormalize CSS",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "decode-via-blob"
    },
  },
  {
    n: 18,
    slug: "load-event-interval leaf both",
    idea: "load-event-interval + TEXT_LEAF — load timing + structural leaf CSS",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "load-event-interval"
    },
  },
  {
    n: 19,
    slug: "pre-decode-dom kerning both",
    idea: "pre-decode-dom + Chromium kerning copy at capture",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "pre-decode-dom"
    },
  },
  {
    n: 20,
    slug: "double-decode explicit-xmlns",
    idea: "double-decode + explicit-xmlns — xmlns fix + double decode pass",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-decode",
      "svgMarkupPatch": "explicit-xmlns"
    },
  },
  {
    n: 21,
    slug: "triple-decode strip-xml",
    idea: "triple-decode + strip-xml-declaration — prolog strip + triple decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "triple-decode",
      "svgMarkupPatch": "strip-xml-declaration"
    },
  },
  {
    n: 22,
    slug: "blob-decode-interval fonts-ready",
    idea: "blob-url-decode-interval + fonts-ready-interval — blob + font settle",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "fonts-ready-interval"
    },
  },
  {
    n: 23,
    slug: "decode-via-blob decode-interval-raf",
    idea: "decode-via-blob + decode-interval-raf — blob bypass + rAF flush",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-interval-raf"
    },
  },
  {
    n: 24,
    slug: "blob-url double-decode",
    idea: "blob-url handoff + double-decode on resulting img",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 25,
    slug: "blob-decode-interval create-image-bitmap",
    idea: "blob-url-decode-interval then create-image-bitmap path — blob timing + bitmap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 26,
    slug: "decode-via-blob wait-fonts-500ms",
    idea: "decode-via-blob + wait-fonts-500ms — slow font wall clock before blob decode",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "wait-fonts-500ms"
    },
  },
  {
    n: 27,
    slug: "load-event int-vb pin-lh",
    idea: "load-event + integer-viewbox + h2-pin-line-height-from-live",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "load-event",
      "svgRootRound": "integer-viewbox",
      "radicalPatch": "h2-pin-line-height-from-live"
    },
  },
  {
    n: 28,
    slug: "pre-decode-dom int-floor pin-width",
    idea: "pre-decode-dom + int-floor + h2-pin-width-from-live",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "pre-decode-dom",
      "svgRootRound": "int-floor",
      "radicalPatch": "h2-pin-width-from-live"
    },
  },
  {
    n: 29,
    slug: "blob-fetch-revoke decode-microtask",
    idea: "blob-url-fetch-revoke + decode-microtask-twice — revoke + microtask flush",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-microtask-twice"
    },
  },
  {
    n: 30,
    slug: "blob-early-revoke double-raf",
    idea: "blob-url-early-revoke + double-raf — early revoke + compositor flush",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-raf"
    },
  },
  {
    n: 31,
    slug: "svg-double-encode blob-decode",
    idea: "svg-dataurl-double-encode + blob-url-decode-interval — encode stress + blob timing",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "svg-dataurl-double-encode"
    },
  },
  {
    n: 32,
    slug: "v2-double-encode decode-via-blob",
    idea: "v2-double-svg-encode + decode-via-blob — v2 encode into blob decode path",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "v2-double-svg-encode"
    },
  },
  {
    n: 33,
    slug: "blob-decode-interval device-grid",
    idea: "blob-url-decode-interval + device-grid-floor — blob timing + pixel grid snap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 34,
    slug: "decode-via-blob mp decode-prototype",
    idea: "decode-via-blob + decode-interval-prototype monkeypatch",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "decode-via-blob",
      "monkeypatch": "decode-interval-prototype"
    },
  },
  {
    n: 35,
    slug: "blob-decode-interval mp draw-pixelated",
    idea: "blob-url-decode-interval + draw-image-pixelated monkeypatch",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "blob-url-decode-interval",
      "monkeypatch": "draw-image-pixelated"
    },
  },
  {
    n: 36,
    slug: "load-event-interval int-vb explicit-xmlns",
    idea: "load-event-interval + integer-viewbox + explicit-xmlns — triple preload hygiene",
    css: '',
    extra: {
      "inject": "both",
      "rasterPatch": "load-event-interval",
      "svgRootRound": "integer-viewbox",
      "svgMarkupPatch": "explicit-xmlns"
    },
  },
  {
    n: 37,
    slug: "pre-decode-dom triple-decode int-vb",
    idea: "pre-decode-dom + triple-decode + integer-viewbox — DOM preload + triple decode",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "triple-decode",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 38,
    slug: "blob-url direct control",
    idea: "direct single-pass data URL decode — control row for blob/timing lane",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "direct"
    },
  },
  {
    n: 39,
    slug: "blob-decode-interval int-vb baseline leader",
    idea: "blob-url-decode-interval + integer-viewbox + FO_BASELINE — lane leader combo",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "blob-url-decode-interval",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 40,
    slug: "decode-via-blob decode-interval baseline leader",
    idea: "decode-via-blob + decode-interval + FO_BASELINE — blob bypass + interval wait",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "decode-via-blob"
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error('recipes-brainstorm-lane-25: expected 40 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const useBaseline = inject !== 'raster' && css === FO_BASELINE_CSS
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `brain-l25-${num}`,
    label: `Brain L25 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'decode',
    active: true,
    notes:
      'Worker batch E lane 25; Blob URL / data URL raster preload timing — FO raster only, no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

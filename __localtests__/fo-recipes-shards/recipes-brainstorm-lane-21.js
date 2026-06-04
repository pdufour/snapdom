/**
 * Worker batch E brainstorm — lane 21: SVG serialization / XML entity / namespace fixes
 * 40 FO-only recipes: brain-l21-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "strip-xml-decl decode-interval",
    idea: "strip-xml-declaration on serialized SVG before Image decode — XML prolog vs data URL parser",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-xml-declaration",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 2,
    slug: "explicit-xmlns decode-interval",
    idea: "explicit xmlns + xmlns:xlink on root before decode — namespace declaration hygiene",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "explicit-xmlns",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 3,
    slug: "strip-id-transforms decode-interval",
    idea: "strip-identity-transforms before raster — remove noop matrix/translate from serialized SVG",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-identity-transforms",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 4,
    slug: "xmlns-strip-transforms decode-interval",
    idea: "explicit-xmlns-strip-transforms bundle — xmlns + identity transform cleanup",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "explicit-xmlns-strip-transforms",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 5,
    slug: "base64-roundtrip decode-interval",
    idea: "svg base64 data URL round-trip re-encode — entity/charset path stress",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "base64-roundtrip",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 6,
    slug: "strip-all-transforms decode-interval",
    idea: "strip-all-transforms on capture SVG — decode without transform attrs",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-all-transforms",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 7,
    slug: "fo-explicit-xhtml-xmlns decode-interval",
    idea: "fo-explicit-xhtml-xmlns on FO inner div — XHTML namespace parity with capture.js",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "fo-explicit-xhtml-xmlns",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 8,
    slug: "parse-svg-dom-reserialize decode-interval",
    idea: "parse-svg-dom-reserialize — DOMParser round-trip entity normalization",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "parse-svg-dom-reserialize",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 9,
    slug: "svg-purge-whitespace decode-interval",
    idea: "svg-purge-whitespace — collapse inter-tag whitespace before FO decode",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "svg-purge-whitespace",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 10,
    slug: "svg-dataurl-double-encode bare",
    idea: "svg-dataurl-double-encode raster — double URI encode/decode before blob handoff",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "svg-dataurl-double-encode"
    },
  },
  {
    n: 11,
    slug: "v2-double-svg-encode bare",
    idea: "v2-double-svg-encode — alternate double-encode path via blob URL",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "v2-double-svg-encode"
    },
  },
  {
    n: 12,
    slug: "strip-xml int-vb decode-interval",
    idea: "strip-xml-declaration + integer-viewbox — prolog strip + integer snap",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-xml-declaration",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 13,
    slug: "explicit-xmlns int-vb decode-interval",
    idea: "explicit-xmlns + integer-viewbox + decode-interval",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "explicit-xmlns",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 14,
    slug: "strip-id-transforms int-vb",
    idea: "strip-identity-transforms + integer-viewbox — transform hygiene + viewBox floor",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-identity-transforms",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 15,
    slug: "xmlns-strip-transforms int-floor",
    idea: "explicit-xmlns-strip-transforms + int-floor root dims",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "explicit-xmlns-strip-transforms",
      "svgRootRound": "int-floor",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 16,
    slug: "base64-roundtrip int-vb",
    idea: "base64-roundtrip + integer-viewbox — charset round-trip + integer snap",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "base64-roundtrip",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 17,
    slug: "strip-all-transforms round-dims",
    idea: "strip-all-transforms + round-dims — full transform strip + rounded root",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-all-transforms",
      "svgRootRound": "round-dims",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 18,
    slug: "fo-xhtml baseline both",
    idea: "fo-explicit-xhtml-xmlns + FO_BASELINE at capture — namespace at serialize time",
    css: FO_BASELINE_CSS,
    extra: {
      "inject": "both",
      "radicalPatch": "fo-explicit-xhtml-xmlns",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 19,
    slug: "dom-reserialize baseline both",
    idea: "parse-svg-dom-reserialize + FO_BASELINE — DOM entity fix at both inject scopes",
    css: FO_BASELINE_CSS,
    extra: {
      "inject": "both",
      "radicalPatch": "parse-svg-dom-reserialize",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 20,
    slug: "purge-whitespace baseline both",
    idea: "svg-purge-whitespace + FO_BASELINE — whitespace normalization + baseline CSS",
    css: FO_BASELINE_CSS,
    extra: {
      "inject": "both",
      "radicalPatch": "svg-purge-whitespace",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 21,
    slug: "strip-xml blob-decode-interval",
    idea: "strip-xml-declaration + blob-url-decode-interval — prolog strip via blob decode path",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-xml-declaration",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 22,
    slug: "explicit-xmlns blob-decode-interval",
    idea: "explicit-xmlns + blob-url-decode-interval — xmlns fix before blob handoff",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "explicit-xmlns",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 23,
    slug: "double-encode int-vb",
    idea: "svg-dataurl-double-encode + integer-viewbox — encode path + viewBox snap",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "svg-dataurl-double-encode",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 24,
    slug: "v2-double-encode int-vb",
    idea: "v2-double-svg-encode + integer-viewbox — v2 encode + integer viewBox",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "v2-double-svg-encode",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 25,
    slug: "strip-xml int-floor double-decode",
    idea: "strip-xml + int-floor + double-decode — markup hygiene + double decode pass",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-xml-declaration",
      "svgRootRound": "int-floor",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 26,
    slug: "explicit-xmlns round-dims fonts-ready",
    idea: "explicit-xmlns + round-dims + fonts-ready-interval — xmlns + font settle",
    css: '',
    extra: {
      "inject": "both",
      "svgMarkupPatch": "explicit-xmlns",
      "svgRootRound": "round-dims",
      "rasterPatch": "fonts-ready-interval"
    },
  },
  {
    n: 27,
    slug: "xmlns-strip-transforms fonts-ready",
    idea: "explicit-xmlns-strip-transforms + fonts-ready-interval",
    css: '',
    extra: {
      "inject": "both",
      "svgMarkupPatch": "explicit-xmlns-strip-transforms",
      "rasterPatch": "fonts-ready-interval"
    },
  },
  {
    n: 28,
    slug: "base64-roundtrip double-decode",
    idea: "base64-roundtrip + double-decode — charset round-trip + double decode",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "base64-roundtrip",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 29,
    slug: "fo-xhtml create-image-bitmap",
    idea: "fo-explicit-xhtml-xmlns + create-image-bitmap — namespace fix + bitmap handoff",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "fo-explicit-xhtml-xmlns",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 30,
    slug: "dom-reserialize decode-via-blob",
    idea: "parse-svg-dom-reserialize + decode-via-blob — DOM normalize + blob decode",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "parse-svg-dom-reserialize",
      "rasterPatch": "decode-via-blob"
    },
  },
  {
    n: 31,
    slug: "strip-xml leaf both",
    idea: "strip-xml-declaration + TEXT_LEAF min-width + decode-interval at capture",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      "inject": "both",
      "svgMarkupPatch": "strip-xml-declaration",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 32,
    slug: "explicit-xmlns kerning both",
    idea: "explicit-xmlns + Chromium kerning copy + decode-interval",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      "inject": "both",
      "svgMarkupPatch": "explicit-xmlns",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 33,
    slug: "strip-id-transforms device-grid",
    idea: "strip-identity-transforms + device-grid-floor — transform strip + pixel grid snap",
    css: '',
    extra: {
      "inject": "raster",
      "svgMarkupPatch": "strip-identity-transforms",
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 34,
    slug: "strip-all pin-lh int-vb",
    idea: "strip-all-transforms + h2-pin-line-height-from-live + integer-viewbox",
    css: FO_BASELINE_CSS,
    extra: {
      "svgMarkupPatch": "strip-all-transforms",
      "svgRootRound": "integer-viewbox",
      "radicalPatch": "h2-pin-line-height-from-live",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 35,
    slug: "double-encode decode-interval",
    idea: "svg-dataurl-double-encode + decode-interval — encode stress + 100ms wait",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "svg-dataurl-double-encode"
    },
  },
  {
    n: 36,
    slug: "v2-double decode-interval-raf",
    idea: "v2-double-svg-encode + decode-interval-raf — encode + rAF flush",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "v2-double-svg-encode"
    },
  },
  {
    n: 37,
    slug: "fo-xhtml int-vb decode-interval",
    idea: "fo-explicit-xhtml-xmlns + integer-viewbox + decode-interval — triple namespace/viewBox fix",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "fo-explicit-xhtml-xmlns",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 38,
    slug: "dom-reserialize int-floor blob",
    idea: "parse-svg-dom-reserialize + int-floor + blob-url-decode-interval",
    css: FO_BASELINE_CSS,
    extra: {
      "radicalPatch": "parse-svg-dom-reserialize",
      "svgRootRound": "int-floor",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 39,
    slug: "strip-xml filter-noop decode",
    idea: "strip-xml-declaration + filter-noop-defs + decode-interval — SVG defs flush + prolog strip",
    css: '',
    extra: {
      "inject": "both",
      "svgMarkupPatch": "strip-xml-declaration",
      "foSvgPatch": "filter-noop-defs",
      "rasterPatch": "decode-interval"
    },
  },
  {
    n: 40,
    slug: "xmlns-strip mp decode-prototype",
    idea: "explicit-xmlns-strip-transforms + decode-interval-prototype monkeypatch",
    css: FO_BASELINE_CSS,
    extra: {
      "svgMarkupPatch": "explicit-xmlns-strip-transforms",
      "rasterPatch": "decode-interval",
      "monkeypatch": "decode-interval-prototype"
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error('recipes-brainstorm-lane-21: expected 40 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const useBaseline = inject !== 'raster' && css === FO_BASELINE_CSS
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `brain-l21-${num}`,
    label: `Brain L21 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'decode',
    active: true,
    notes:
      'Worker batch E lane 21; SVG serialization / XML entity / namespace fixes — FO raster only, no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

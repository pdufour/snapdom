/**
 * Worker batch E brainstorm — lane 23: canvas drawImage source rect / dest rect fractional handling
 * 40 FO-only recipes: brain-l23-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "h2-frac-draw bare",
    idea: "h2-frac-draw — fractional source rect from viewBox frac metadata (h2 portable)",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "h2-frac-draw"
    },
  },
  {
    n: 2,
    slug: "h2-frac-draw baseline both",
    idea: "h2-frac-draw + FO_BASELINE at capture — fractional draw with baseline CSS",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw"
    },
  },
  {
    n: 3,
    slug: "h2-frac-draw int-vb",
    idea: "h2-frac-draw + integer-viewbox — integer snap before fractional source rect",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 4,
    slug: "h2-frac-draw int-floor",
    idea: "h2-frac-draw + int-floor root dims",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "int-floor"
    },
  },
  {
    n: 5,
    slug: "h2-frac-draw round-dims",
    idea: "h2-frac-draw + round-dims — rounded root before frac drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "round-dims"
    },
  },
  {
    n: 6,
    slug: "h2-frac-draw composite-copy",
    idea: "composite-copy raster — globalCompositeOperation copy during drawImage blit",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "composite-copy"
    },
  },
  {
    n: 7,
    slug: "h2-frac-draw canvas-pixelated",
    idea: "canvas-pixelated raster — imageSmoothingEnabled false during frac-style blit",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "canvas-pixelated"
    },
  },
  {
    n: 8,
    slug: "canvas-pixelated decode-interval",
    idea: "canvas-pixelated raster — imageSmoothingEnabled false on drawImage dest",
    css: "foreignObject{overflow:visible!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "canvas-pixelated"
    },
  },
  {
    n: 9,
    slug: "device-grid-floor decode-interval",
    idea: "device-grid-floor — floor SVG root to device pixel grid before drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 10,
    slug: "two-stage decode-interval",
    idea: "two-stage — intermediate canvas staging before final fractional dest blit",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "two-stage"
    },
  },
  {
    n: 11,
    slug: "mp draw-image-pixelated decode-interval",
    idea: "draw-image-pixelated monkeypatch + decode-interval — global drawImage hook",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "decode-interval",
      "monkeypatch": "draw-image-pixelated"
    },
  },
  {
    n: 12,
    slug: "h2-frac-draw decode-interval",
    idea: "h2-frac-draw + decode-interval — fractional source + 100ms post-decode wait",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw"
    },
  },
  {
    n: 13,
    slug: "h2-frac-draw decode-interval-raf",
    idea: "h2-frac-draw + decode-interval-raf — frac source + rAF compositor flush",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "decode-interval-raf"
    },
  },
  {
    n: 14,
    slug: "h2-frac-draw double-decode",
    idea: "double-decode before drawImage — double decode pass (frac-draw lane context)",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-decode"
    },
  },
  {
    n: 15,
    slug: "h2-frac-draw int-vb leaf",
    idea: "h2-frac-draw + integer-viewbox + TEXT_LEAF — frac draw + structural leaf CSS",
    css: "foreignObject *{box-sizing:border-box!important;min-width:0!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 16,
    slug: "h2-frac-draw int-vb kerning",
    idea: "h2-frac-draw + integer-viewbox + Chromium kerning copy",
    css: "foreignObject{font-kerning:normal!important;font-synthesis:none!important}",
    extra: {
      "inject": "both",
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox"
    },
  },
  {
    n: 17,
    slug: "h2-frac-draw device-grid",
    idea: "h2-frac-draw path after device-grid-floor snap on SVG root",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 18,
    slug: "h2-frac-draw two-stage baseline",
    idea: "two-stage raster + FO_BASELINE — staged canvas before dest rect blit",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "two-stage"
    },
  },
  {
    n: 19,
    slug: "h2-frac-draw offscreen-canvas",
    idea: "offscreen-canvas blit — OffscreenCanvas transfer before drawImage dest",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "offscreen-canvas"
    },
  },
  {
    n: 20,
    slug: "h2-frac-draw int-vb pin-lh",
    idea: "h2-frac-draw + integer-viewbox + h2-pin-line-height-from-live",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox",
      "radicalPatch": "h2-pin-line-height-from-live"
    },
  },
  {
    n: 21,
    slug: "h2-frac-draw int-vb pin-width",
    idea: "h2-frac-draw + integer-viewbox + h2-pin-width-from-live",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox",
      "radicalPatch": "h2-pin-width-from-live"
    },
  },
  {
    n: 22,
    slug: "h2-frac-draw blob-decode-interval",
    idea: "h2-frac-draw + blob-url-decode-interval — frac source via blob decode path",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 23,
    slug: "h2-frac-draw create-image-bitmap",
    idea: "create-image-bitmap handoff — compare ImageBitmap vs img frac draw path",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "create-image-bitmap"
    },
  },
  {
    n: 24,
    slug: "h2-frac-draw explicit-xmlns",
    idea: "h2-frac-draw + explicit-xmlns — xmlns fix before fractional drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "h2-frac-draw",
      "svgMarkupPatch": "explicit-xmlns"
    },
  },
  {
    n: 25,
    slug: "h2-frac-draw strip-xml",
    idea: "h2-frac-draw + strip-xml-declaration — markup hygiene + frac blit",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "h2-frac-draw",
      "svgMarkupPatch": "strip-xml-declaration"
    },
  },
  {
    n: 26,
    slug: "h2-frac-draw fonts-ready-interval",
    idea: "h2-frac-draw + fonts-ready-interval — font settle before frac draw",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "fonts-ready-interval"
    },
  },
  {
    n: 27,
    slug: "h2-frac-draw triple-decode",
    idea: "triple-decode before h2-frac-draw blit — triple decode + fractional source",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "triple-decode"
    },
  },
  {
    n: 28,
    slug: "h2-frac-draw raf-before-draw",
    idea: "raf-before-draw + manual frac path proxy — single rAF before drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "raf-before-draw"
    },
  },
  {
    n: 29,
    slug: "h2-frac-draw double-raf",
    idea: "double-raf compositor flush before drawImage dest rect",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "double-raf"
    },
  },
  {
    n: 30,
    slug: "h2-frac-draw will-read-frequently",
    idea: "will-read-frequently 2d context hint + h2-frac-draw timing",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "will-read-frequently"
    },
  },
  {
    n: 31,
    slug: "h2-frac-draw shape-rendering crisp",
    idea: "svgRootPatch shape-rendering:crispEdges + h2-frac-draw fractional blit",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "svgRootPatch": {
        "shape-rendering": "crispEdges"
      }
    },
  },
  {
    n: 32,
    slug: "h2-frac-draw preserveAspectRatio none",
    idea: "preserveAspectRatio=none on svg root — dest rect stretch vs frac source",
    css: '',
    extra: {
      "inject": "both",
      "rasterPatch": "h2-frac-draw",
      "svgRootPatch": {
        "preserveAspectRatio": "none"
      }
    },
  },
  {
    n: 33,
    slug: "h2-frac-draw int-floor blob",
    idea: "int-floor + blob-url-decode-interval — floored root + blob + frac draw proxy",
    css: '',
    extra: {
      "inject": "raster",
      "svgRootRound": "int-floor",
      "rasterPatch": "blob-url-decode-interval"
    },
  },
  {
    n: 34,
    slug: "h2-frac-draw mp decode-prototype",
    idea: "h2-frac-draw + decode-interval-prototype monkeypatch — prototype vs harness frac draw",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "monkeypatch": "decode-interval-prototype"
    },
  },
  {
    n: 35,
    slug: "h2-frac-draw mp draw-pixelated",
    idea: "h2-frac-draw + draw-image-pixelated — frac source + smoothing off hook",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "monkeypatch": "draw-image-pixelated"
    },
  },
  {
    n: 36,
    slug: "h2-frac-draw int-vb device-grid",
    idea: "integer-viewbox then device-grid-floor — dual snap before drawImage",
    css: '',
    extra: {
      "inject": "raster",
      "svgRootRound": "integer-viewbox",
      "rasterPatch": "device-grid-floor"
    },
  },
  {
    n: 37,
    slug: "h2-frac-draw decode-microtask-twice",
    idea: "decode-microtask-twice + h2-frac-draw proxy — microtask flush before frac blit",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "decode-microtask-twice"
    },
  },
  {
    n: 38,
    slug: "h2-frac-draw int-vb explicit-xmlns",
    idea: "integer-viewbox + explicit-xmlns + h2-frac-draw — triple pre-draw hygiene",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox",
      "svgMarkupPatch": "explicit-xmlns"
    },
  },
  {
    n: 39,
    slug: "h2-frac-draw direct control",
    idea: "direct single-pass decode — control row for frac-draw lane (no interval)",
    css: '',
    extra: {
      "inject": "raster",
      "rasterPatch": "direct"
    },
  },
  {
    n: 40,
    slug: "h2-frac-draw int-vb decode-interval baseline",
    idea: "h2-frac-draw + integer-viewbox + decode-interval + FO_BASELINE — lane leader combo",
    css: FO_BASELINE_CSS,
    extra: {
      "rasterPatch": "h2-frac-draw",
      "svgRootRound": "integer-viewbox"
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error('recipes-brainstorm-lane-23: expected 40 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'both'
  const useBaseline = inject !== 'raster' && css === FO_BASELINE_CSS
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: `brain-l23-${num}`,
    label: `Brain L23 #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'decode',
    active: true,
    notes:
      'Worker batch E lane 23; canvas drawImage source rect / dest rect fractional handling — FO raster only, no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

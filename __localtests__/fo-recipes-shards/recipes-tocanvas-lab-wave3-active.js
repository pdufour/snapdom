/**
 * Wave-3 active lab-toCanvas forks — tc-lab-w3-on-001..040.
 * Structural dupes of tc-only / tc-lab-vb matrix leaders; rasterPatch forced lab-toCanvas;
 * active:true so new ids stay off fo-fix-deactivated-ids.json (do not remove denylist entries).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-on-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  'text-rendering:geometricPrecision!important}' +
  'foreignObject *{font-kerning:normal!important}'

/** @type {{ source: string, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string, labPreRaster?: string } }} */
const SPECS = [
  {
    source: 'tc-only-002',
    slug: "tc-only→lab product-toCanvas integer-viewbox",
    idea: "product-toCanvas + integer-viewBox floor on SVG root (dup tc-only-002; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    source: 'tc-only-003',
    slug: "tc-only→lab product-toCanvas round-dims",
    idea: "product-toCanvas + round root width/height to device grid (dup tc-only-003; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      svgRootRound: "round-dims",
    },
  },
  {
    source: 'tc-only-004',
    slug: "tc-only→lab product-toCanvas int-floor",
    idea: "product-toCanvas + int-floor root dims (dup tc-only-004; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      svgRootRound: "int-floor",
    },
  },
  {
    source: 'tc-only-005',
    slug: "tc-only→lab product-toCanvas device-grid-floor",
    idea: "product-toCanvas + device-grid-floor SVG snap before raster (dup tc-only-005; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-only-006',
    slug: "tc-only→lab product-toCanvas xmlns strip transforms",
    idea: "product-toCanvas + explicit-xmlns-strip-transforms markup (dup tc-only-006; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      svgMarkupPatch: "explicit-xmlns-strip-transforms",
    },
  },
  {
    source: 'tc-only-007',
    slug: "tc-only→lab product-toCanvas base64 roundtrip",
    idea: "product-toCanvas + base64-roundtrip SVG reserialize (dup tc-only-007; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      svgMarkupPatch: "base64-roundtrip",
    },
  },
  {
    source: 'tc-only-008',
    slug: "tc-only→lab product-toCanvas filter-noop-defs",
    idea: "product-toCanvas + filter-noop-defs on FO (dup tc-only-008; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    source: 'tc-only-020',
    slug: "tc-only→lab create-image-bitmap pixelated MP high",
    idea: "create-image-bitmap-pixelated + tc createImageBitmap resizeQuality high (dup tc-only-020; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      monkeypatch: "createImageBitmap-high",
    },
  },
  {
    source: 'tc-only-024',
    slug: "tc-only→lab MP tc canvas backing ceil decode-interval",
    idea: "tc-canvas-backing-ceil on canvas width/height + decode-interval (dup tc-only-024; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      monkeypatch: "tc-canvas-backing-ceil",
    },
  },
  {
    source: 'tc-only-028',
    slug: "tc-only→lab fe-color-matrix decode-interval",
    idea: "fe-color-matrix-identity on FO + decode-interval (dup tc-only-028; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      foSvgPatch: "fe-color-matrix-identity",
    },
  },
  {
    source: 'tc-only-029',
    slug: "tc-only→lab fe-morphology decode-interval",
    idea: "fe-morphology-identity on FO + decode-interval (dup tc-only-029; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    source: 'tc-only-030',
    slug: "tc-only→lab fo-shape-rendering decode-interval",
    idea: "fo-shape-rendering-auto + decode-interval (dup tc-only-030; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      foSvgPatch: "fo-shape-rendering-auto",
    },
  },
  {
    source: 'tc-only-031',
    slug: "tc-only→lab h2-percent-vb h2-frac-draw",
    idea: "h2-fo-percent-int-viewbox pre-raster + h2-frac-draw fractional drawImage (dup tc-only-031; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      radicalPatch: "h2-fo-percent-int-viewbox",
    },
  },
  {
    source: 'tc-only-032',
    slug: "tc-only→lab math-floor-vb h2-frac-draw",
    idea: "math-floor-viewbox-stash-frac + h2-frac-draw (dup tc-only-032; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      radicalPatch: "math-floor-viewbox-stash-frac",
    },
  },
  {
    source: 'tc-only-034',
    slug: "tc-only→lab remove-fe decode-interval",
    idea: "remove-fe-filters pre-raster + decode-interval (dup tc-only-034; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      radicalPatch: "remove-fe-filters",
    },
  },
  {
    source: 'tc-only-035',
    slug: "tc-only→lab h2 raster normalize product-toCanvas",
    idea: "H2_RASTER_NORMALIZE structural CSS at pre-raster inject + product-toCanvas (dup tc-only-035; raster→lab-toCanvas)",
    extra: {
      css: H2_RASTER_NORMALIZE_CSS,
      inject: "both",
    },
  },
  {
    source: 'tc-only-036',
    slug: "tc-only→lab leaf flex strut decode-interval",
    idea: "FO * min-width/min-height + decode-interval (dup tc-only-036; raster→lab-toCanvas)",
    extra: {
      css: FO_BASELINE_CSS + LEAF,
      inject: "both",
    },
  },
  {
    source: 'tc-only-037',
    slug: "tc-only→lab chromium copy decode-interval",
    idea: "Chromium font-kerning/smoothing copy block + decode-interval (dup tc-only-037; raster→lab-toCanvas)",
    extra: {
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      inject: "both",
    },
  },
  {
    source: 'tc-only-038',
    slug: "tc-only→lab MP decode-interval prototype",
    idea: "Image.decode prototype interval + decode-interval raster (dup tc-only-038; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      monkeypatch: "decode-interval-prototype",
    },
  },
  {
    source: 'tc-only-039',
    slug: "tc-only→lab MP tc drawImage round all product-toCanvas",
    idea: "tc-draw-image-round-all on all drawImage coords + product-toCanvas (dup tc-only-039; raster→lab-toCanvas)",
    extra: {
      inject: "raster",
      monkeypatch: "tc-draw-image-round-all",
    },
  },
  {
    source: 'tc-lab-vb-027',
    slug: "tc-lab-vb→lab int-vb device-grid filter-noop",
    idea: "integer-viewbox + device-grid-floor + filter-noop-defs trio (dup tc-lab-vb-027; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "integer-viewbox",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    source: 'tc-lab-vb-030',
    slug: "tc-lab-vb→lab h2-percent int-vb explicit-xmlns",
    idea: "h2-fo-percent-int-viewbox + integer-viewbox + explicit-xmlns (dup tc-lab-vb-030; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    source: 'tc-lab-vb-031',
    slug: "tc-lab-vb→lab math-frac int-vb strip-xml",
    idea: "math-floor-viewbox-stash-frac + integer-viewbox + strip-xml-declaration (dup tc-lab-vb-031; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      svgRootRound: "integer-viewbox",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    source: 'tc-lab-vb-033',
    slug: "tc-lab-vb→lab int-floor device-grid fe-merge",
    idea: "int-floor + device-grid-floor + fe-merge-empty (dup tc-lab-vb-033; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "int-floor",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fe-merge-empty",
    },
  },
  {
    source: 'tc-lab-vb-034',
    slug: "tc-lab-vb→lab round-dims device-grid fe-transfer",
    idea: "round-dims + device-grid-floor + fe-component-transfer-identity (dup tc-lab-vb-034; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "fe-component-transfer-identity",
    },
  },
  {
    source: 'tc-lab-vb-035',
    slug: "tc-lab-vb→lab h2-percent device-grid strip-xml",
    idea: "h2-fo-percent-int-viewbox + device-grid-floor + strip-xml-declaration (dup tc-lab-vb-035; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
      svgMarkupPatch: "strip-xml-declaration",
    },
  },
  {
    source: 'tc-lab-vb-036',
    slug: "tc-lab-vb→lab math-frac device-grid explicit-xmlns",
    idea: "math-floor-viewbox-stash-frac + device-grid-floor + explicit-xmlns (dup tc-lab-vb-036; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      labPreRaster: "device-grid-floor",
      svgMarkupPatch: "explicit-xmlns",
    },
  },
  {
    source: 'tc-lab-vb-039',
    slug: "tc-lab-vb→lab int-floor h2-percent device-grid",
    idea: "int-floor + h2-fo-percent-int-viewbox + device-grid-floor stack (dup tc-lab-vb-039; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "int-floor",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-lab-vb-040',
    slug: "tc-lab-vb→lab round-dims math-frac filter-noop",
    idea: "round-dims + math-floor-viewbox-stash-frac + filter-noop-defs full dimension stack (dup tc-lab-vb-040; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "round-dims",
      radicalPatch: "math-floor-viewbox-stash-frac",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    source: 'tc-lab-vb-008',
    slug: "tc-lab-vb→lab integer-viewbox device-grid",
    idea: "integer-viewbox + device-grid-floor pre-raster snap (dup tc-lab-vb-008; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "integer-viewbox",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-lab-vb-009',
    slug: "tc-lab-vb→lab int-floor device-grid",
    idea: "int-floor root dims + device-grid-floor HiDPI snap (dup tc-lab-vb-009; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "int-floor",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-lab-vb-010',
    slug: "tc-lab-vb→lab round-dims device-grid",
    idea: "round-dims root + device-grid-floor device-pixel grid alignment (dup tc-lab-vb-010; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "round-dims",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-lab-vb-011',
    slug: "tc-lab-vb→lab h2-percent int-vb",
    idea: "h2-fo-percent-int-viewbox + integer-viewbox double snap (dup tc-lab-vb-011; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    source: 'tc-lab-vb-012',
    slug: "tc-lab-vb→lab math-frac int-vb",
    idea: "math-floor-viewbox-stash-frac + integer-viewbox (dup tc-lab-vb-012; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      svgRootRound: "integer-viewbox",
    },
  },
  {
    source: 'tc-lab-vb-013',
    slug: "tc-lab-vb→lab h2-percent device-grid",
    idea: "h2-fo-percent-int-viewbox + device-grid-floor before lab toCanvas (dup tc-lab-vb-013; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "h2-fo-percent-int-viewbox",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-lab-vb-014',
    slug: "tc-lab-vb→lab math-frac device-grid",
    idea: "math-floor-viewbox-stash-frac + device-grid-floor (dup tc-lab-vb-014; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      radicalPatch: "math-floor-viewbox-stash-frac",
      labPreRaster: "device-grid-floor",
    },
  },
  {
    source: 'tc-lab-vb-021',
    slug: "tc-lab-vb→lab int-vb filter-noop-defs",
    idea: "integer-viewbox + filter-noop-defs foSvgPatch (dup tc-lab-vb-021; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "integer-viewbox",
      foSvgPatch: "filter-noop-defs",
    },
  },
  {
    source: 'tc-lab-vb-022',
    slug: "tc-lab-vb→lab int-floor fe-color-matrix",
    idea: "int-floor + fe-color-matrix-identity on FO (dup tc-lab-vb-022; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "int-floor",
      foSvgPatch: "fe-color-matrix-identity",
    },
  },
  {
    source: 'tc-lab-vb-023',
    slug: "tc-lab-vb→lab round-dims fe-morphology",
    idea: "round-dims + fe-morphology-identity foSvgPatch (dup tc-lab-vb-023; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      svgRootRound: "round-dims",
      foSvgPatch: "fe-morphology-identity",
    },
  },
  {
    source: 'tc-lab-vb-024',
    slug: "tc-lab-vb→lab device-grid filter-noop",
    idea: "device-grid-floor + filter-noop-defs (dup tc-lab-vb-024; active denylist fork)",
    extra: {
      css: FO_BASELINE_CSS,
      inject: "both",
      labPreRaster: "device-grid-floor",
      foSvgPatch: "filter-noop-defs",
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-active.js: expected 40 specs, got ${SPECS.length}`,
  )
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  const inject = restExtra.inject ?? 'both'
  const useBaseline = inject === 'both' && extraCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-on-${num}`,
    label: `tc-lab-w3-on #${i + 1}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Wave3 active fork of ${spec.source}; FO raster only — no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-active.js: expected 40 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  if (r.active !== true) {
    throw new Error(`${r.id}: active must be true`)
  }
  const key = [
    r.inject,
    r.rasterPatch,
    r.labPreRaster ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.svgRootPatch ?? null),
    r.monkeypatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-active.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

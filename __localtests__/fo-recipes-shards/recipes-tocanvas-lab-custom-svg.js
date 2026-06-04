/**
 * Lab toCanvas pre-raster SVG customizations — tc-lab-svg-001..050.
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Mechanisms: svgMarkupPatch, foSvgPatch, svgRootRound, inject:'both',
 * H2_RASTER_NORMALIZE_CSS, radicalPatch remove-fe-filters, strip-transform markup.
 * No text bypass. No src/ edits.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-svg-*'
 */
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from '../fo-fix-recipes-constants.js'

const H2 = H2_RASTER_NORMALIZE_CSS
const FO = FO_BASELINE_CSS

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab-toCanvas bare both',
    idea: 'Lab toCanvas fork — inject both, no SVG patch',
    extra: { inject: 'both', rasterPatch: 'lab-toCanvas', css: FO },
  },
  {
    n: 2,
    slug: 'H2 raster normalize',
    idea: 'H2_RASTER_NORMALIZE structural CSS at pre-raster inject + lab-toCanvas',
    extra: { inject: 'both', rasterPatch: 'lab-toCanvas', css: H2 },
  },
  {
    n: 3,
    slug: 'integer-viewbox',
    idea: 'Integer viewBox floor on SVG root before lab toCanvas draw',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 4,
    slug: 'round-dims',
    idea: 'Round SVG root width/height attrs before lab toCanvas raster',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 5,
    slug: 'int-floor dims',
    idea: 'int-floor root width/height before lab toCanvas raster',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 6,
    slug: 'strip-xml-declaration',
    idea: 'strip-xml-declaration svgMarkupPatch before raster',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 7,
    slug: 'explicit-xmlns',
    idea: 'explicit-xmlns on capture SVG root',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 8,
    slug: 'strip-identity-transforms',
    idea: 'strip-identity-transforms svgMarkupPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'strip-identity-transforms',
    },
  },
  {
    n: 9,
    slug: 'explicit-xmlns strip transforms',
    idea: 'explicit-xmlns + strip identity transforms on serialized SVG',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 10,
    slug: 'base64-roundtrip',
    idea: 'base64-roundtrip SVG reserialize before lab toCanvas',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'base64-roundtrip',
    },
  },
  {
    n: 11,
    slug: 'strip-all-transforms',
    idea: 'strip-all-transforms svgMarkupPatch — remove all transform attrs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'strip-all-transforms',
    },
  },
  {
    n: 12,
    slug: 'filter-noop-defs',
    idea: 'filter-noop-defs foSvgPatch on capture SVG',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 13,
    slug: 'fe-morphology-identity',
    idea: 'fe-morphology-identity foSvgPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 14,
    slug: 'fe-component-transfer-identity',
    idea: 'fe-component-transfer-identity foSvgPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 15,
    slug: 'fe-color-matrix-identity',
    idea: 'fe-color-matrix-identity foSvgPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 16,
    slug: 'filter-empty-nop',
    idea: 'filter-empty-nop foSvgPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 17,
    slug: 'fe-merge-empty',
    idea: 'fe-merge-empty foSvgPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 18,
    slug: 'fe-displacement-map-identity',
    idea: 'fe-displacement-map-identity foSvgPatch',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 19,
    slug: 'fo-shape-rendering-auto',
    idea: 'fo-shape-rendering-auto on foreignObject',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 20,
    slug: 'remove-fe-filters',
    idea: 'radicalPatch remove-fe-filters — strip fe* filter primitives pre-raster',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 21,
    slug: 'H2 integer-viewbox',
    idea: 'H2 normalize + integer viewBox snap',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 22,
    slug: 'H2 round-dims',
    idea: 'H2 normalize + round-dims root attrs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'round-dims',
    },
  },
  {
    n: 23,
    slug: 'H2 int-floor',
    idea: 'H2 normalize + int-floor root dims',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'int-floor',
    },
  },
  {
    n: 24,
    slug: 'H2 xmlns strip transforms',
    idea: 'H2 normalize + explicit-xmlns-strip-transforms',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 25,
    slug: 'H2 strip-all-transforms',
    idea: 'H2 normalize + strip-all-transforms',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgMarkupPatch: 'strip-all-transforms',
    },
  },
  {
    n: 26,
    slug: 'H2 filter-noop-defs',
    idea: 'H2 normalize + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 27,
    slug: 'H2 remove-fe-filters',
    idea: 'H2 normalize + radical remove-fe-filters',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 28,
    slug: 'integer-viewbox filter-noop',
    idea: 'integer-viewbox + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 29,
    slug: 'integer-viewbox strip transforms',
    idea: 'integer-viewbox + explicit-xmlns-strip-transforms',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 30,
    slug: 'integer-viewbox remove-fe',
    idea: 'integer-viewbox + remove-fe-filters',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'integer-viewbox',
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 31,
    slug: 'round-dims filter-noop',
    idea: 'round-dims + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'round-dims',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 32,
    slug: 'int-floor fe-morphology',
    idea: 'int-floor + fe-morphology-identity',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'int-floor',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 33,
    slug: 'strip-all filter-noop',
    idea: 'strip-all-transforms + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 34,
    slug: 'base64 integer-viewbox',
    idea: 'base64-roundtrip + integer-viewbox',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgMarkupPatch: 'base64-roundtrip',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 35,
    slug: 'base64 H2 normalize',
    idea: 'base64-roundtrip + H2_RASTER_NORMALIZE',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgMarkupPatch: 'base64-roundtrip',
    },
  },
  {
    n: 36,
    slug: 'H2 integer strip transforms',
    idea: 'H2 + integer-viewbox + explicit-xmlns-strip-transforms',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 37,
    slug: 'H2 strip-all remove-fe',
    idea: 'H2 + strip-all-transforms + remove-fe-filters',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgMarkupPatch: 'strip-all-transforms',
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 38,
    slug: 'H2 integer fe-component',
    idea: 'H2 + integer-viewbox + fe-component-transfer-identity',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 39,
    slug: 'round-dims fe-morphology FO',
    idea: 'FO baseline + round-dims + fe-morphology-identity',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'round-dims',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 40,
    slug: 'int-floor shape-rendering H2',
    idea: 'H2 + int-floor + fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'int-floor',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 41,
    slug: 'H2 integer filter-noop',
    idea: 'H2 + integer-viewbox + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 42,
    slug: 'H2 integer remove-fe',
    idea: 'H2 + integer-viewbox + remove-fe-filters',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 43,
    slug: 'H2 strip transforms remove-fe',
    idea: 'H2 + explicit-xmlns-strip-transforms + remove-fe-filters',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 44,
    slug: 'FO integer strip-all',
    idea: 'FO baseline + integer-viewbox + strip-all-transforms',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-all-transforms',
    },
  },
  {
    n: 45,
    slug: 'H2 round-dims filter-noop',
    idea: 'H2 + round-dims + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'round-dims',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 46,
    slug: 'H2 int-floor fe-component',
    idea: 'H2 + int-floor + fe-component-transfer-identity',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'int-floor',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 47,
    slug: 'integer strip transforms filter-noop',
    idea: 'integer-viewbox + explicit-xmlns-strip-transforms + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: FO,
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 48,
    slug: 'H2 round-dims remove-fe',
    idea: 'H2 + round-dims + remove-fe-filters',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'round-dims',
      radicalPatch: 'remove-fe-filters',
    },
  },
  {
    n: 49,
    slug: 'H2 integer strip transforms filter-noop',
    idea: 'H2 + integer-viewbox + explicit-xmlns-strip-transforms + filter-noop-defs',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 50,
    slug: 'H2 integer strip-all remove-fe',
    idea: 'H2 + integer-viewbox + strip-all-transforms + remove-fe-filters — full pre-raster SVG bundle',
    extra: {
      inject: 'both',
      rasterPatch: 'lab-toCanvas',
      css: H2,
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-all-transforms',
      radicalPatch: 'remove-fe-filters',
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-svg-${num}`,
    label: `tc-lab-svg #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? FO,
    inject: restExtra.inject ?? 'both',
    category: 'tocanvas',
    active: true,
    notes: `lab-toCanvas pre-raster SVG; ${spec.slug}; no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-custom-svg.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-custom-svg.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

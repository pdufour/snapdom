/**
 * Lab toCanvas fork — viewBox / dpr / FO dimension raster probes (tc-lab-vb-001..040).
 * ALL rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Pre-raster: svgRootRound, radicalPatch, foSvgPatch, svgMarkupPatch, labPreRaster device-grid-floor.
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-vb-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { labPreRaster?: 'device-grid-floor' } }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab-tc bare',
    idea: 'Lab toCanvas fork baseline — no pre-raster SVG dimension patches',
    extra: { inject: 'both' },
  },
  {
    n: 2,
    slug: 'integer-viewbox',
    idea: 'Floor viewBox components to integers before lab toCanvas draw',
    extra: { inject: 'both', svgRootRound: 'integer-viewbox' },
  },
  {
    n: 3,
    slug: 'int-floor',
    idea: 'Floor SVG root width/height attrs to integer CSS px before lab toCanvas',
    extra: { inject: 'both', svgRootRound: 'int-floor' },
  },
  {
    n: 4,
    slug: 'round-dims',
    idea: 'Round SVG root width/height to nearest integer CSS px before lab toCanvas',
    extra: { inject: 'both', svgRootRound: 'round-dims' },
  },
  {
    n: 5,
    slug: 'h2-fo-percent-int-viewbox',
    idea: 'Radical h2-fo-percent-int-viewbox — FO percent attrs + integer viewBox alignment',
    extra: { inject: 'both', radicalPatch: 'h2-fo-percent-int-viewbox' },
  },
  {
    n: 6,
    slug: 'math-floor-viewbox-stash-frac',
    idea: 'Radical math-floor-viewbox-stash-frac — floor viewBox origin; stash fractional tail',
    extra: { inject: 'both', radicalPatch: 'math-floor-viewbox-stash-frac' },
  },
  {
    n: 7,
    slug: 'device-grid-floor bare',
    idea: 'labPreRaster device-grid-floor — HiDPI width/height snap on SVG root before lab toCanvas',
    extra: { inject: 'raster', labPreRaster: 'device-grid-floor' },
  },
  {
    n: 8,
    slug: 'integer-viewbox device-grid',
    idea: 'integer-viewbox + device-grid-floor pre-raster snap',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 9,
    slug: 'int-floor device-grid',
    idea: 'int-floor root dims + device-grid-floor HiDPI snap',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 10,
    slug: 'round-dims device-grid',
    idea: 'round-dims root + device-grid-floor device-pixel grid alignment',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 11,
    slug: 'h2-percent int-vb',
    idea: 'h2-fo-percent-int-viewbox + integer-viewbox double snap',
    extra: {
      inject: 'both',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 12,
    slug: 'math-frac int-vb',
    idea: 'math-floor-viewbox-stash-frac + integer-viewbox',
    extra: {
      inject: 'both',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 13,
    slug: 'h2-percent device-grid',
    idea: 'h2-fo-percent-int-viewbox + device-grid-floor before lab toCanvas',
    extra: {
      inject: 'both',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 14,
    slug: 'math-frac device-grid',
    idea: 'math-floor-viewbox-stash-frac + device-grid-floor',
    extra: {
      inject: 'both',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 15,
    slug: 'int-vb explicit-xmlns',
    idea: 'integer-viewbox + explicit-xmlns markup hygiene',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 16,
    slug: 'int-vb strip-xml-declaration',
    idea: 'integer-viewbox + strip-xml-declaration before decode',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 17,
    slug: 'int-floor explicit-xmlns',
    idea: 'int-floor + explicit-xmlns on serialized capture SVG',
    extra: {
      inject: 'raster',
      svgRootRound: 'int-floor',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 18,
    slug: 'round-dims strip-xml',
    idea: 'round-dims + strip-xml-declaration',
    extra: {
      inject: 'raster',
      svgRootRound: 'round-dims',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 19,
    slug: 'device-grid explicit-xmlns',
    idea: 'device-grid-floor + explicit-xmlns',
    extra: {
      inject: 'raster',
      labPreRaster: 'device-grid-floor',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 20,
    slug: 'device-grid strip-xml',
    idea: 'device-grid-floor + strip-xml-declaration',
    extra: {
      inject: 'raster',
      labPreRaster: 'device-grid-floor',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 21,
    slug: 'int-vb filter-noop-defs',
    idea: 'integer-viewbox + filter-noop-defs foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 22,
    slug: 'int-floor fe-color-matrix',
    idea: 'int-floor + fe-color-matrix-identity on FO',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 23,
    slug: 'round-dims fe-morphology',
    idea: 'round-dims + fe-morphology-identity foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 24,
    slug: 'device-grid filter-noop',
    idea: 'device-grid-floor + filter-noop-defs',
    extra: {
      inject: 'both',
      labPreRaster: 'device-grid-floor',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 25,
    slug: 'h2-percent filter-noop',
    idea: 'h2-fo-percent-int-viewbox + filter-noop-defs',
    extra: {
      inject: 'both',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 26,
    slug: 'math-frac fo-shape-auto',
    idea: 'math-floor-viewbox-stash-frac + fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 27,
    slug: 'int-vb device-grid filter-noop',
    idea: 'integer-viewbox + device-grid-floor + filter-noop-defs trio',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labPreRaster: 'device-grid-floor',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 28,
    slug: 'int-floor device-grid explicit-xmlns',
    idea: 'int-floor + device-grid-floor + explicit-xmlns',
    extra: {
      inject: 'raster',
      svgRootRound: 'int-floor',
      labPreRaster: 'device-grid-floor',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 29,
    slug: 'round-dims device-grid strip-xml',
    idea: 'round-dims + device-grid-floor + strip-xml-declaration',
    extra: {
      inject: 'raster',
      svgRootRound: 'round-dims',
      labPreRaster: 'device-grid-floor',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 30,
    slug: 'h2-percent int-vb explicit-xmlns',
    idea: 'h2-fo-percent-int-viewbox + integer-viewbox + explicit-xmlns',
    extra: {
      inject: 'both',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 31,
    slug: 'math-frac int-vb strip-xml',
    idea: 'math-floor-viewbox-stash-frac + integer-viewbox + strip-xml-declaration',
    extra: {
      inject: 'both',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 32,
    slug: 'int-vb explicit-xmlns strip-transforms',
    idea: 'integer-viewbox + explicit-xmlns-strip-transforms bundle',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 33,
    slug: 'int-floor device-grid fe-merge',
    idea: 'int-floor + device-grid-floor + fe-merge-empty',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      labPreRaster: 'device-grid-floor',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 34,
    slug: 'round-dims device-grid fe-transfer',
    idea: 'round-dims + device-grid-floor + fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      labPreRaster: 'device-grid-floor',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 35,
    slug: 'h2-percent device-grid strip-xml',
    idea: 'h2-fo-percent-int-viewbox + device-grid-floor + strip-xml-declaration',
    extra: {
      inject: 'both',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      labPreRaster: 'device-grid-floor',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 36,
    slug: 'math-frac device-grid explicit-xmlns',
    idea: 'math-floor-viewbox-stash-frac + device-grid-floor + explicit-xmlns',
    extra: {
      inject: 'both',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      labPreRaster: 'device-grid-floor',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 37,
    slug: 'int-vb device-grid aspect meet',
    idea: 'integer-viewbox + device-grid-floor + preserveAspectRatio meet',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labPreRaster: 'device-grid-floor',
      svgRootPatch: { preserveAspectRatio: 'xMidYMid meet' },
    },
  },
  {
    n: 38,
    slug: 'int-vb device-grid aspect slice',
    idea: 'integer-viewbox + device-grid-floor + preserveAspectRatio slice',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      labPreRaster: 'device-grid-floor',
      svgRootPatch: { preserveAspectRatio: 'xMidYMid slice' },
    },
  },
  {
    n: 39,
    slug: 'int-floor h2-percent device-grid',
    idea: 'int-floor + h2-fo-percent-int-viewbox + device-grid-floor stack',
    extra: {
      inject: 'both',
      svgRootRound: 'int-floor',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      labPreRaster: 'device-grid-floor',
    },
  },
  {
    n: 40,
    slug: 'round-dims math-frac filter-noop',
    idea: 'round-dims + math-floor-viewbox-stash-frac + filter-noop-defs full dimension stack',
    extra: {
      inject: 'both',
      svgRootRound: 'round-dims',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      foSvgPatch: 'filter-noop-defs',
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-fork-viewbox.js: expected 40 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error('recipes-tocanvas-lab-fork-viewbox.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-vb-${num}`,
    label: `tc-lab-vb #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? FO_BASELINE_CSS : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: `Lab toCanvas viewBox/dpr probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-fork-viewbox.js: expected 40 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
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
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-fork-viewbox.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

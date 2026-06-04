/**
 * Wave 7 — lab toCanvas pre-raster SVG prep combinatorial (tc-lab-w7-svg-001..080).
 * Knobs only: svgRootRound × svgMarkupPatch × foSvgPatch (slice 81–160 of 363; w6 owns 1–80).
 * rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-svg-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'none / strip-all-tf / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 2,
    slug: 'none / strip-all-tf / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 3,
    slug: 'none / strip-all-tf / fe-ct-id',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 4,
    slug: 'none / strip-all-tf / fe-merge',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fe-merge-empty',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 5,
    slug: 'none / strip-all-tf / fe-disp-id',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fe-displacement-map-identity',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 6,
    slug: 'none / strip-all-tf / fe-turb',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fe-turbulence-composite',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 7,
    slug: 'none / strip-all-tf / root-pattern',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=svg-root-pattern-fill',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'svg-root-pattern-fill',
    },
  },
  {
    n: 8,
    slug: 'none / strip-all-tf / fo-border-grad',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fo-border-linear-gradient-stroke',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fo-border-linear-gradient-stroke',
    },
  },
  {
    n: 9,
    slug: 'none / strip-all-tf / filter-bundle',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=svg-filter-pattern-border-bundle',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'svg-filter-pattern-border-bundle',
    },
  },
  {
    n: 10,
    slug: 'none / strip-all-tf / shape-auto',
    idea: 'lab-toCanvas pre-raster SVG prep: no svgRootRound; svgMarkupPatch=strip-all-transforms; foSvgPatch=fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      svgMarkupPatch: 'strip-all-transforms',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 11,
    slug: 'int-vb / none / none',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; no foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 12,
    slug: 'int-vb / none / fe-cm-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fe-color-matrix-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 13,
    slug: 'int-vb / none / filt-empty',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=filter-empty-nop',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 14,
    slug: 'int-vb / none / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 15,
    slug: 'int-vb / none / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 16,
    slug: 'int-vb / none / fe-ct-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 17,
    slug: 'int-vb / none / fe-merge',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fe-merge-empty',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 18,
    slug: 'int-vb / none / fe-disp-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fe-displacement-map-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 19,
    slug: 'int-vb / none / fe-turb',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fe-turbulence-composite',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 20,
    slug: 'int-vb / none / root-pattern',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=svg-root-pattern-fill',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'svg-root-pattern-fill',
    },
  },
  {
    n: 21,
    slug: 'int-vb / none / fo-border-grad',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fo-border-linear-gradient-stroke',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fo-border-linear-gradient-stroke',
    },
  },
  {
    n: 22,
    slug: 'int-vb / none / filter-bundle',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=svg-filter-pattern-border-bundle',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'svg-filter-pattern-border-bundle',
    },
  },
  {
    n: 23,
    slug: 'int-vb / none / shape-auto',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; no svgMarkupPatch; foSvgPatch=fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 24,
    slug: 'int-vb / strip-xml / none',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; no foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
    },
  },
  {
    n: 25,
    slug: 'int-vb / strip-xml / fe-cm-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fe-color-matrix-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 26,
    slug: 'int-vb / strip-xml / filt-empty',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=filter-empty-nop',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 27,
    slug: 'int-vb / strip-xml / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 28,
    slug: 'int-vb / strip-xml / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 29,
    slug: 'int-vb / strip-xml / fe-ct-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 30,
    slug: 'int-vb / strip-xml / fe-merge',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fe-merge-empty',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 31,
    slug: 'int-vb / strip-xml / fe-disp-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fe-displacement-map-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 32,
    slug: 'int-vb / strip-xml / fe-turb',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fe-turbulence-composite',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 33,
    slug: 'int-vb / strip-xml / root-pattern',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=svg-root-pattern-fill',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'svg-root-pattern-fill',
    },
  },
  {
    n: 34,
    slug: 'int-vb / strip-xml / fo-border-grad',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fo-border-linear-gradient-stroke',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fo-border-linear-gradient-stroke',
    },
  },
  {
    n: 35,
    slug: 'int-vb / strip-xml / filter-bundle',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=svg-filter-pattern-border-bundle',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'svg-filter-pattern-border-bundle',
    },
  },
  {
    n: 36,
    slug: 'int-vb / strip-xml / shape-auto',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-xml-declaration; foSvgPatch=fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-xml-declaration',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 37,
    slug: 'int-vb / xmlns / none',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; no foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
    },
  },
  {
    n: 38,
    slug: 'int-vb / xmlns / fe-cm-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fe-color-matrix-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 39,
    slug: 'int-vb / xmlns / filt-empty',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=filter-empty-nop',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 40,
    slug: 'int-vb / xmlns / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 41,
    slug: 'int-vb / xmlns / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 42,
    slug: 'int-vb / xmlns / fe-ct-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 43,
    slug: 'int-vb / xmlns / fe-merge',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fe-merge-empty',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 44,
    slug: 'int-vb / xmlns / fe-disp-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fe-displacement-map-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 45,
    slug: 'int-vb / xmlns / fe-turb',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fe-turbulence-composite',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 46,
    slug: 'int-vb / xmlns / root-pattern',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=svg-root-pattern-fill',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'svg-root-pattern-fill',
    },
  },
  {
    n: 47,
    slug: 'int-vb / xmlns / fo-border-grad',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fo-border-linear-gradient-stroke',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fo-border-linear-gradient-stroke',
    },
  },
  {
    n: 48,
    slug: 'int-vb / xmlns / filter-bundle',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=svg-filter-pattern-border-bundle',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'svg-filter-pattern-border-bundle',
    },
  },
  {
    n: 49,
    slug: 'int-vb / xmlns / shape-auto',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns; foSvgPatch=fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 50,
    slug: 'int-vb / strip-id-tf / none',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; no foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
    },
  },
  {
    n: 51,
    slug: 'int-vb / strip-id-tf / fe-cm-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fe-color-matrix-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 52,
    slug: 'int-vb / strip-id-tf / filt-empty',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=filter-empty-nop',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 53,
    slug: 'int-vb / strip-id-tf / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 54,
    slug: 'int-vb / strip-id-tf / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 55,
    slug: 'int-vb / strip-id-tf / fe-ct-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 56,
    slug: 'int-vb / strip-id-tf / fe-merge',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fe-merge-empty',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 57,
    slug: 'int-vb / strip-id-tf / fe-disp-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fe-displacement-map-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 58,
    slug: 'int-vb / strip-id-tf / fe-turb',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fe-turbulence-composite',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 59,
    slug: 'int-vb / strip-id-tf / root-pattern',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=svg-root-pattern-fill',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'svg-root-pattern-fill',
    },
  },
  {
    n: 60,
    slug: 'int-vb / strip-id-tf / fo-border-grad',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fo-border-linear-gradient-stroke',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fo-border-linear-gradient-stroke',
    },
  },
  {
    n: 61,
    slug: 'int-vb / strip-id-tf / filter-bundle',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=svg-filter-pattern-border-bundle',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'svg-filter-pattern-border-bundle',
    },
  },
  {
    n: 62,
    slug: 'int-vb / strip-id-tf / shape-auto',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=strip-identity-transforms; foSvgPatch=fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'strip-identity-transforms',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 63,
    slug: 'int-vb / xmlns-strip-tf / none',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; no foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
    },
  },
  {
    n: 64,
    slug: 'int-vb / xmlns-strip-tf / fe-cm-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fe-color-matrix-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 65,
    slug: 'int-vb / xmlns-strip-tf / filt-empty',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=filter-empty-nop',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 66,
    slug: 'int-vb / xmlns-strip-tf / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 67,
    slug: 'int-vb / xmlns-strip-tf / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
  {
    n: 68,
    slug: 'int-vb / xmlns-strip-tf / fe-ct-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fe-component-transfer-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fe-component-transfer-identity',
    },
  },
  {
    n: 69,
    slug: 'int-vb / xmlns-strip-tf / fe-merge',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fe-merge-empty',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fe-merge-empty',
    },
  },
  {
    n: 70,
    slug: 'int-vb / xmlns-strip-tf / fe-disp-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fe-displacement-map-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fe-displacement-map-identity',
    },
  },
  {
    n: 71,
    slug: 'int-vb / xmlns-strip-tf / fe-turb',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fe-turbulence-composite',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fe-turbulence-composite',
    },
  },
  {
    n: 72,
    slug: 'int-vb / xmlns-strip-tf / root-pattern',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=svg-root-pattern-fill',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'svg-root-pattern-fill',
    },
  },
  {
    n: 73,
    slug: 'int-vb / xmlns-strip-tf / fo-border-grad',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fo-border-linear-gradient-stroke',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fo-border-linear-gradient-stroke',
    },
  },
  {
    n: 74,
    slug: 'int-vb / xmlns-strip-tf / filter-bundle',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=svg-filter-pattern-border-bundle',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'svg-filter-pattern-border-bundle',
    },
  },
  {
    n: 75,
    slug: 'int-vb / xmlns-strip-tf / shape-auto',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=explicit-xmlns-strip-transforms; foSvgPatch=fo-shape-rendering-auto',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'explicit-xmlns-strip-transforms',
      foSvgPatch: 'fo-shape-rendering-auto',
    },
  },
  {
    n: 76,
    slug: 'int-vb / b64 / none',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=base64-roundtrip; no foSvgPatch',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'base64-roundtrip',
    },
  },
  {
    n: 77,
    slug: 'int-vb / b64 / fe-cm-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=base64-roundtrip; foSvgPatch=fe-color-matrix-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'base64-roundtrip',
      foSvgPatch: 'fe-color-matrix-identity',
    },
  },
  {
    n: 78,
    slug: 'int-vb / b64 / filt-empty',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=base64-roundtrip; foSvgPatch=filter-empty-nop',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'base64-roundtrip',
      foSvgPatch: 'filter-empty-nop',
    },
  },
  {
    n: 79,
    slug: 'int-vb / b64 / filt-noop',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=base64-roundtrip; foSvgPatch=filter-noop-defs',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'base64-roundtrip',
      foSvgPatch: 'filter-noop-defs',
    },
  },
  {
    n: 80,
    slug: 'int-vb / b64 / fe-morph-id',
    idea: 'lab-toCanvas pre-raster SVG prep: svgRootRound=integer-viewbox; svgMarkupPatch=base64-roundtrip; foSvgPatch=fe-morphology-identity',
    extra: {
      inject: 'both',
      svgRootRound: 'integer-viewbox',
      svgMarkupPatch: 'base64-roundtrip',
      foSvgPatch: 'fe-morphology-identity',
    },
  },
]

if (SPECS.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-svgprep.js: expected 80 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 80) {
  throw new Error('recipes-tocanvas-lab-wave7-svgprep.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w7-svg-${num}`,
    label: `tc-lab-w7-svg #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: FO_BASELINE_CSS,
    inject: spec.extra.inject ?? 'both',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Wave7 SVG prep; ${spec.slug}; FO raster only — no text bypass.`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-svgprep.js: expected 80 recipes, got ${RECIPES.length}`,
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
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave7-svgprep.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

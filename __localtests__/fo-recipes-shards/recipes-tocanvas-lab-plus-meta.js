/**
 * Lab toCanvas dimension harness probes — tc-lab-meta-001..050.
 * ALL rasterPatch: lab-toCanvas → __localtests__/fo-fix-toCanvas.js
 *
 * ## How the harness passes dims (fo-fix-lab-runner.js)
 *
 * 1. **Capture** builds `dims` from live root: `{ cssW, cssH, dpr }` (export scale/dpr).
 * 2. **parseCaptureMeta(svg, root)** → `meta`:
 *    - `w0` / `h0`: SVG root width/height attrs when > 0, else root `getBoundingClientRect`.
 *    - `targetW` / `targetH`: live root GBCR (CSS layout box).
 * 3. **resolveRecipeRasterScale(recipe, callerScale)** → `rasterScale` (optional `radicalOptions.recipeScale`).
 * 4. **resolveLabToCanvasHarness(recipe, dims, rasterScale, meta)** merges `recipe.toCanvasHarness`:
 *    - `width` / `height`: `'dims'` → `dims.cssW` / `dims.cssH`; `'omit'` → unset (toCanvas uses
 *      `img.naturalWidth` / `naturalHeight`); finite number → explicit `optW` / `optH`.
 *    - `scale` / `dpr`: override export scale / device pixel ratio when finite.
 *    - `meta.w0` / `meta.h0`: `'parsed'` keep capture meta; `'target'` → `targetW`/`targetH`;
 *      `'css'` → `dims.cssW`/`cssH`; `'omit'` → delete (toCanvas ref = decoded natural size);
 *      number → literal reference width/height for single-dimension aspect math.
 * 5. **rasterLabToCanvas** calls `labToCanvas(url, { width, height, scale, dpr, meta })` which mirrors
 *    `src/exporters/toCanvas.js`: `refW = meta.w0 ?? naturalWidth`; aspect from `optW`/`optH`/`ref*`.
 *
 * Pre-raster: optional `svgRootRound: 'round-dims' | …`, `labPreRaster`, FO CSS — unchanged.
 *
 * Matrix: `node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-meta-*'`
 * Dupes: `node __localtests__/fo-fix-recipes-merge.mjs --check-dupes`
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

/**
 * @typedef {import('../fo-fix-recipe-shared.js').FoFixRecipe & {
 *   toCanvasHarness?: {
 *     width?: 'dims' | 'omit' | number,
 *     height?: 'dims' | 'omit' | number,
 *     scale?: number,
 *     dpr?: number,
 *     meta?: {
 *       w0?: 'parsed' | 'target' | 'css' | 'omit' | number,
 *       h0?: 'parsed' | 'target' | 'css' | 'omit' | number,
 *     },
 *   },
 *   labPreRaster?: 'device-grid-floor',
 * }} MetaLabRecipe
 */

/** @type {{ n: number, slug: string, idea: string, css?: string, extra: Partial<MetaLabRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'harness baseline dims+parsed meta',
    idea: 'optW/optH = dims.cssW/cssH; meta.w0/h0 from parseCaptureMeta (SVG attrs or GBCR)',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 2,
    slug: 'naturalWidth omit optW optH',
    idea: 'width/height omitted — toCanvas uses img.naturalWidth/Height after decode',
    extra: { toCanvasHarness: { width: 'omit', height: 'omit' } },
  },
  {
    n: 3,
    slug: 'optW only aspect from meta h0',
    idea: 'width=dims.cssW; height omitted; refH from parsed meta.h0',
    extra: {
      toCanvasHarness: { width: 'dims', height: 'omit', meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 4,
    slug: 'optH only aspect from meta w0',
    idea: 'height=dims.cssH; width omitted; refW from parsed meta.w0',
    extra: {
      toCanvasHarness: { width: 'omit', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 5,
    slug: 'dims opts meta css refs',
    idea: 'optW/optH from dims with meta.w0/h0 = cssW/cssH (not parsed SVG attrs)',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'css', h0: 'css' },
      },
    },
  },
  {
    n: 6,
    slug: 'natural + meta w0 h0 omit',
    idea: 'natural decode size; meta ref also omitted so refW/refH = natural after load',
    extra: {
      toCanvasHarness: {
        width: 'omit',
        height: 'omit',
        meta: { w0: 'omit', h0: 'omit' },
      },
    },
  },
  {
    n: 7,
    slug: 'optW only meta target h0',
    idea: 'width=dims; refH from live targetH (GBCR) not SVG attr',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        meta: { w0: 'parsed', h0: 'target' },
      },
    },
  },
  {
    n: 8,
    slug: 'optH only meta target w0',
    idea: 'height=dims; refW from live targetW',
    extra: {
      toCanvasHarness: {
        width: 'omit',
        height: 'dims',
        meta: { w0: 'target', h0: 'parsed' },
      },
    },
  },
  {
    n: 9,
    slug: 'meta w0 h0 target GBCR',
    idea: 'Both meta refs from live root box — differs when SVG attrs ≠ layout box',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 10,
    slug: 'height only meta css w0',
    idea: 'optH=dims; width omitted; meta.w0=cssW for refW aspect',
    extra: {
      toCanvasHarness: {
        width: 'omit',
        height: 'dims',
        meta: { w0: 'css', h0: 'parsed' },
      },
    },
  },
  {
    n: 11,
    slug: 'meta w0 omit natural refW',
    idea: 'meta.w0 deleted — single-sided height uses naturalWidth as refW',
    extra: {
      toCanvasHarness: {
        width: 'omit',
        height: 'dims',
        meta: { w0: 'omit', h0: 'parsed' },
      },
    },
  },
  {
    n: 12,
    slug: 'meta h0 omit natural refH',
    idea: 'meta.h0 deleted — width-only path uses naturalHeight as refH',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        meta: { w0: 'parsed', h0: 'omit' },
      },
    },
  },
  {
    n: 13,
    slug: 'natural + meta target refs',
    idea: 'natural bitmap size but meta targetW/H still passed (unused unless one opt set)',
    extra: {
      toCanvasHarness: {
        width: 'omit',
        height: 'omit',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 14,
    slug: 'harness scale 2',
    idea: 'scale=2 on top of dims — canvas CSS px ×2 before dpr backing store',
    extra: {
      toCanvasHarness: { width: 'dims', height: 'dims', scale: 2, meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 15,
    slug: 'harness scale 0.5',
    idea: 'scale=0.5 downscale raster — structural probe not gate-tuned px',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        scale: 0.5,
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 16,
    slug: 'harness dpr 1',
    idea: 'Force dpr=1 backing store regardless of device DPR',
    extra: {
      toCanvasHarness: { width: 'dims', height: 'dims', dpr: 1, meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 17,
    slug: 'harness dpr 2',
    idea: 'Force dpr=2 HiDPI backing store with CSS px from dims',
    extra: {
      toCanvasHarness: { width: 'dims', height: 'dims', dpr: 2, meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 18,
    slug: 'scale 2 dpr 2',
    idea: 'Combined scale and dpr overrides — canvas.width = cssW×scale×dpr',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        scale: 2,
        dpr: 2,
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 19,
    slug: 'natural scale 2',
    idea: 'naturalWidth path with scale multiplier only',
    extra: {
      toCanvasHarness: { width: 'omit', height: 'omit', scale: 2, meta: { w0: 'omit', h0: 'omit' } },
    },
  },
  {
    n: 20,
    slug: 'width only scale 2',
    idea: 'optW=dims + scale 2 — aspect height from refH×scale',
    extra: {
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        scale: 2,
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 21,
    slug: 'round-dims baseline harness',
    idea: 'svgRootRound round-dims + default dims/meta passthrough',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 22,
    slug: 'round-dims naturalWidth',
    idea: 'round-dims pre-raster + omit optW/optH (natural decode)',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
    },
  },
  {
    n: 23,
    slug: 'round-dims optW only',
    idea: 'round-dims + width-only export with parsed meta.h0 ref',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 24,
    slug: 'round-dims meta target',
    idea: 'round-dims + meta targetW/H refs',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 25,
    slug: 'round-dims meta css',
    idea: 'round-dims + meta.w0/h0 = css dims',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'css', h0: 'css' },
      },
    },
  },
  {
    n: 26,
    slug: 'round-dims device-grid pre-raster',
    idea: 'round-dims + labPreRaster device-grid-floor before lab toCanvas',
    extra: {
      svgRootRound: 'round-dims',
      labPreRaster: 'device-grid-floor',
      inject: 'both',
      toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 'parsed', h0: 'parsed' } },
    },
  },
  {
    n: 27,
    slug: 'integer-viewbox meta target',
    idea: 'integer-viewbox snap + meta targetW/H refs',
    extra: {
      svgRootRound: 'integer-viewbox',
      inject: 'both',
      toCanvasHarness: { width: 'dims', height: 'dims', meta: { w0: 'target', h0: 'target' } },
    },
  },
  {
    n: 28,
    slug: 'integer-viewbox natural',
    idea: 'integer-viewbox + naturalWidth harness path',
    extra: {
      svgRootRound: 'integer-viewbox',
      toCanvasHarness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
    },
  },
  {
    n: 29,
    slug: 'int-floor width only',
    idea: 'int-floor root + optW only + meta target h0',
    extra: {
      svgRootRound: 'int-floor',
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 30,
    slug: 'round-dims scale 2 dpr 2',
    idea: 'round-dims + harness scale/dpr stack',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        scale: 2,
        dpr: 2,
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 31,
    slug: 'FO baseline meta target',
    idea: 'FO_BASELINE_CSS + meta target refs',
    extra: {
      css: FO_BASELINE_CSS,
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 32,
    slug: 'FO baseline natural',
    idea: 'FO baseline + naturalWidth omit opts',
    extra: {
      css: FO_BASELINE_CSS,
      toCanvasHarness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
    },
  },
  {
    n: 33,
    slug: 'FO baseline width only',
    idea: 'FO baseline + optW only + parsed meta',
    extra: {
      css: FO_BASELINE_CSS,
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 34,
    slug: 'Chromium copy scale 2',
    idea: 'Chromium FO copies + harness scale 2',
    extra: {
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        scale: 2,
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 35,
    slug: 'Chromium meta css dims',
    idea: 'Chromium copies + meta.w0/h0 = css dims',
    extra: {
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'css', h0: 'css' },
      },
    },
  },
  {
    n: 36,
    slug: 'h2-pin-width harness dpr 2',
    idea: 'radical h2-pin-width-from-live + forced dpr 2',
    extra: {
      radicalPatch: 'h2-pin-width-from-live',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        dpr: 2,
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 37,
    slug: 'math-floor-viewbox natural',
    idea: 'math-floor-viewbox-stash-frac + natural decode',
    extra: {
      radicalPatch: 'math-floor-viewbox-stash-frac',
      toCanvasHarness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
    },
  },
  {
    n: 38,
    slug: 'h2-percent int-vb meta target',
    idea: 'h2-fo-percent-int-viewbox + meta target + dims opts',
    extra: {
      radicalPatch: 'h2-fo-percent-int-viewbox',
      svgRootRound: 'integer-viewbox',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 39,
    slug: 'device-grid natural meta target',
    idea: 'labPreRaster device-grid + natural + meta target (latent refs)',
    extra: {
      labPreRaster: 'device-grid-floor',
      inject: 'raster',
      toCanvasHarness: {
        width: 'omit',
        height: 'omit',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 40,
    slug: 'device-grid width only dpr 1',
    idea: 'device-grid pre-raster + optW only + dpr 1',
    extra: {
      labPreRaster: 'device-grid-floor',
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        dpr: 1,
        meta: { w0: 'css', h0: 'target' },
      },
    },
  },
  {
    n: 41,
    slug: 'round-dims FO baseline natural',
    idea: 'round-dims + FO baseline + naturalWidth',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      toCanvasHarness: { width: 'omit', height: 'omit', meta: { w0: 'omit', h0: 'omit' } },
    },
  },
  {
    n: 42,
    slug: 'round-dims FO width only target meta',
    idea: 'round-dims + FO + optW + meta target h0',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 43,
    slug: 'round-dims height only css meta',
    idea: 'round-dims + optH only + meta css refs',
    extra: {
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'omit',
        height: 'dims',
        meta: { w0: 'css', h0: 'css' },
      },
    },
  },
  {
    n: 44,
    slug: 'int-floor dims meta parsed',
    idea: 'int-floor + full dims + parsed meta control',
    extra: {
      svgRootRound: 'int-floor',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'parsed', h0: 'parsed' },
      },
    },
  },
  {
    n: 45,
    slug: 'integer-viewbox scale 2 width only',
    idea: 'integer-viewbox + scale 2 + width-only',
    extra: {
      svgRootRound: 'integer-viewbox',
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        scale: 2,
        meta: { w0: 'parsed', h0: 'target' },
      },
    },
  },
  {
    n: 46,
    slug: 'round-dims device-grid meta css',
    idea: 'round-dims + device-grid + meta css + dims opts',
    extra: {
      svgRootRound: 'round-dims',
      labPreRaster: 'device-grid-floor',
      inject: 'both',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        meta: { w0: 'css', h0: 'css' },
      },
    },
  },
  {
    n: 47,
    slug: 'FO round-dims scale 0.5',
    idea: 'FO baseline + round-dims + downscale 0.5',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        scale: 0.5,
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
  {
    n: 48,
    slug: 'Chromium round-dims dpr 2 natural',
    idea: 'Chromium + round-dims + natural + dpr 2',
    extra: {
      css: FO_BASELINE_CSS + CHROMIUM_COPY,
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'omit',
        height: 'omit',
        dpr: 2,
        meta: { w0: 'omit', h0: 'omit' },
      },
    },
  },
  {
    n: 49,
    slug: 'h2-pin-lh-flex width only dpr 2',
    idea: 'h2-pin-lh-flex-stretch-leaf + width-only + dpr 2',
    extra: {
      radicalPatch: 'h2-pin-lh-flex-stretch-leaf-from-live',
      toCanvasHarness: {
        width: 'dims',
        height: 'omit',
        dpr: 2,
        meta: { w0: 'parsed', h0: 'target' },
      },
    },
  },
  {
    n: 50,
    slug: 'full stack round-dims FO scale2 target',
    idea: 'round-dims + FO baseline + scale 2 + meta target + dims opts',
    extra: {
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      toCanvasHarness: {
        width: 'dims',
        height: 'dims',
        scale: 2,
        meta: { w0: 'target', h0: 'target' },
      },
    },
  },
]

if (SPECS.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-plus-meta.js: expected 50 specs, got ${SPECS.length}`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 50) {
  throw new Error('recipes-tocanvas-lab-plus-meta.js: duplicate slugs in SPECS')
}

/** @type {MetaLabRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, extra } = spec
  const inject = extra.inject ?? 'both'
  const useBaseline = inject === 'both' && specCss === undefined
  return {
    id: `tc-lab-meta-${num}`,
    label: `tc-lab-meta #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? (useBaseline ? '' : ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab toCanvas meta harness; ${spec.slug}; FO raster only — no text bypass.`,
    ...extra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(`recipes-tocanvas-lab-plus-meta.js: expected 50 recipes, got ${RECIPES.length}`)
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
    JSON.stringify(r.toCanvasHarness ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-plus-meta.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

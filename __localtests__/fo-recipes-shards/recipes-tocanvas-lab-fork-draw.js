/**
 * Lab toCanvas fork — drawImage / backing-store probes (tc-lab-draw-001..040).
 * All recipes: rasterPatch 'lab-toCanvas' → __localtests__/fo-fix-toCanvas.js
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-draw-*'
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }} */
const SPECS = [
  {
    n: 1,
    slug: 'lab-toCanvas baseline',
    idea: 'Lab fork toCanvas draw — default drawImage + backing store from fo-fix-toCanvas.js',
    extra: { inject: 'raster' },
  },
  {
    n: 2,
    slug: 'MP tc-draw-image-round-all',
    idea: 'Round all numeric drawImage args after image source (lab toCanvas path)',
    extra: { inject: 'raster', monkeypatch: 'tc-draw-image-round-all' },
  },
  {
    n: 3,
    slug: 'MP drawImage-wrap floor destY',
    idea: 'Floor drawImage 9-arg dest width (drawImage-wrap) on lab toCanvas blit',
    extra: { inject: 'raster', monkeypatch: 'drawImage-wrap' },
  },
  {
    n: 4,
    slug: 'MP tc-canvas-backing-ceil',
    idea: 'Ceil canvas width/height assignment before lab toCanvas backing store',
    extra: { inject: 'raster', monkeypatch: 'tc-canvas-backing-ceil' },
  },
  {
    n: 5,
    slug: 'MP round-all + backing-ceil',
    idea: 'tc-draw-image-round-all + tc-canvas-backing-ceil — grid snap + rounded blit',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-draw-image-round-all', 'tc-canvas-backing-ceil'],
    },
  },
  {
    n: 6,
    slug: 'MP draw-image-pixelated',
    idea: 'imageSmoothingEnabled false during drawImage (pixelated lab probe)',
    extra: { inject: 'raster', monkeypatch: 'draw-image-pixelated' },
  },
  {
    n: 7,
    slug: 'MP createImageBitmap-high',
    idea: 'Force createImageBitmap resizeQuality high before lab toCanvas draw',
    extra: { inject: 'raster', monkeypatch: 'createImageBitmap-high' },
  },
  {
    n: 8,
    slug: 'math-floor-vb MP h2-frac-draw',
    idea: 'math-floor-viewbox-stash-frac pre-raster + tc-lab-draw-h2-frac-draw fractional source',
    extra: {
      inject: 'raster',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      monkeypatch: 'tc-lab-draw-h2-frac-draw',
    },
  },
  {
    n: 9,
    slug: 'h2-percent-vb MP h2-frac-draw',
    idea: 'h2-fo-percent-int-viewbox + tc-lab-draw-h2-frac-draw on lab fork',
    extra: {
      inject: 'raster',
      radicalPatch: 'h2-fo-percent-int-viewbox',
      monkeypatch: 'tc-lab-draw-h2-frac-draw',
    },
  },
  {
    n: 10,
    slug: 'MP tc-lab-draw-h2-frac-draw',
    idea: 'tc-lab-draw-h2-frac-draw — parse viewBox frac from SVG data URL at draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-draw-h2-frac-draw' },
  },
  {
    n: 11,
    slug: 'MP tc-lab-draw-two-stage',
    idea: 'Intermediate canvas stage before final lab toCanvas drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-draw-two-stage' },
  },
  {
    n: 12,
    slug: 'MP supersample-downscale 2x',
    idea: 'tc-lab-draw-supersample-downscale — 2× oversample then downscale blit (lab diagnostic)',
    extra: {
      inject: 'raster',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    n: 13,
    slug: 'MP tc-lab-draw-create-image-bitmap',
    idea: 'createImageBitmap high-quality handoff before lab toCanvas drawImage',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-draw-create-image-bitmap' },
  },
  {
    n: 14,
    slug: 'MP create-image-bitmap-pixelated',
    idea: 'createImageBitmap resizeQuality pixelated + lab toCanvas draw',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-draw-create-image-bitmap-pixelated' },
  },
  {
    n: 15,
    slug: 'MP tc-lab-draw-device-grid-floor',
    idea: 'Floor capture SVG root width/height to device pixel grid before lab fork raster',
    extra: { inject: 'raster', monkeypatch: 'tc-lab-draw-device-grid-floor' },
  },
  {
    n: 16,
    slug: 'integer-viewbox lab fork',
    idea: 'integer-viewBox snap on SVG root + lab toCanvas draw',
    extra: { inject: 'raster', svgRootRound: 'integer-viewbox' },
  },
  {
    n: 17,
    slug: 'round-dims lab fork',
    idea: 'Round SVG root width/height attrs + lab toCanvas backing alignment',
    extra: { inject: 'raster', svgRootRound: 'round-dims' },
  },
  {
    n: 18,
    slug: 'int-floor lab fork',
    idea: 'int-floor root dims before lab toCanvas raster',
    extra: { inject: 'raster', svgRootRound: 'int-floor' },
  },
  {
    n: 19,
    slug: 'device-grid MP + integer-viewbox',
    idea: 'tc-lab-draw-device-grid-floor + integer-viewbox — dual root snap',
    extra: {
      inject: 'raster',
      monkeypatch: 'tc-lab-draw-device-grid-floor',
      svgRootRound: 'integer-viewbox',
    },
  },
  {
    n: 20,
    slug: 'two-stage MP round-all',
    idea: 'tc-lab-draw-two-stage + tc-draw-image-round-all on final blit',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-draw-two-stage', 'tc-draw-image-round-all'],
    },
  },
  {
    n: 21,
    slug: 'supersample MP backing-ceil',
    idea: 'tc-lab-draw-supersample-downscale + tc-canvas-backing-ceil',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-draw-supersample-downscale', 'tc-canvas-backing-ceil'],
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    n: 22,
    slug: 'create-image-bitmap MP drawImage-wrap',
    idea: 'tc-lab-draw-create-image-bitmap + drawImage-wrap floor dest',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-draw-create-image-bitmap', 'drawImage-wrap'],
    },
  },
  {
    n: 23,
    slug: 'FO baseline both inject',
    idea: 'FO_BASELINE_CSS at capture + lab toCanvas raster draw',
    extra: { inject: 'both', css: FO_BASELINE_CSS },
  },
  {
    n: 24,
    slug: 'integer-viewbox MP round-all',
    idea: 'integer-viewbox + tc-draw-image-round-all on lab fork',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-draw-image-round-all',
    },
  },
  {
    n: 25,
    slug: 'int-floor MP backing-ceil',
    idea: 'int-floor root dims + tc-canvas-backing-ceil',
    extra: {
      inject: 'raster',
      svgRootRound: 'int-floor',
      monkeypatch: 'tc-canvas-backing-ceil',
    },
  },
  {
    n: 26,
    slug: 'math-floor-vb round-all h2-frac',
    idea: 'math-floor-viewbox-stash-frac + round-all + tc-lab-draw-h2-frac-draw',
    extra: {
      inject: 'raster',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      monkeypatch: ['tc-draw-image-round-all', 'tc-lab-draw-h2-frac-draw'],
    },
  },
  {
    n: 27,
    slug: 'device-grid MP FO baseline',
    idea: 'tc-lab-draw-device-grid-floor + FO overflow/size-adjust baseline',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      monkeypatch: 'tc-lab-draw-device-grid-floor',
    },
  },
  {
    n: 28,
    slug: 'two-stage MP pixelated',
    idea: 'tc-lab-draw-two-stage + draw-image-pixelated smoothing off',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-draw-two-stage', 'draw-image-pixelated'],
    },
  },
  {
    n: 29,
    slug: 'supersample math-floor h2-frac',
    idea: 'math-floor-viewbox-stash-frac + supersample-downscale + h2-frac draw',
    extra: {
      inject: 'raster',
      radicalPatch: 'math-floor-viewbox-stash-frac',
      monkeypatch: ['tc-lab-draw-supersample-downscale', 'tc-lab-draw-h2-frac-draw'],
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    n: 30,
    slug: 'createImageBitmap-high MP round-all',
    idea: 'createImageBitmap-high + tc-draw-image-round-all on lab fork',
    extra: {
      inject: 'raster',
      monkeypatch: ['createImageBitmap-high', 'tc-draw-image-round-all'],
    },
  },
  {
    n: 31,
    slug: 'MP tc-decode-safari-raf',
    idea: 'Double-RAF after img.decode (Safari-style) before lab toCanvas draw',
    extra: { inject: 'raster', monkeypatch: 'tc-decode-safari-raf' },
  },
  {
    n: 32,
    slug: 'drawImage-wrap MP backing-ceil',
    idea: 'drawImage-wrap + tc-canvas-backing-ceil on lab toCanvas path',
    extra: {
      inject: 'raster',
      monkeypatch: ['drawImage-wrap', 'tc-canvas-backing-ceil'],
    },
  },
  {
    n: 33,
    slug: 'round-dims device-grid MP',
    idea: 'round-dims root + tc-lab-draw-device-grid-floor',
    extra: {
      inject: 'raster',
      svgRootRound: 'round-dims',
      monkeypatch: 'tc-lab-draw-device-grid-floor',
    },
  },
  {
    n: 34,
    slug: 'h2-percent-vb lab fork only',
    idea: 'h2-fo-percent-int-viewbox pre-raster only — fractional stash without h2-frac MP',
    extra: { inject: 'raster', radicalPatch: 'h2-fo-percent-int-viewbox' },
  },
  {
    n: 35,
    slug: 'two-stage device-grid',
    idea: 'tc-lab-draw-two-stage + tc-lab-draw-device-grid-floor',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-draw-two-stage', 'tc-lab-draw-device-grid-floor'],
    },
  },
  {
    n: 36,
    slug: 'create-image-bitmap backing-ceil',
    idea: 'tc-lab-draw-create-image-bitmap + tc-canvas-backing-ceil',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-lab-draw-create-image-bitmap', 'tc-canvas-backing-ceil'],
    },
  },
  {
    n: 37,
    slug: 'supersample integer-viewbox',
    idea: 'integer-viewbox + tc-lab-draw-supersample-downscale on lab fork',
    extra: {
      inject: 'raster',
      svgRootRound: 'integer-viewbox',
      monkeypatch: 'tc-lab-draw-supersample-downscale',
      radicalOptions: { scaleMultiplier: 2 },
    },
  },
  {
    n: 38,
    slug: 'round-all wrap backing-ceil',
    idea: 'tc-draw-image-round-all + drawImage-wrap + tc-canvas-backing-ceil triple probe',
    extra: {
      inject: 'raster',
      monkeypatch: ['tc-draw-image-round-all', 'drawImage-wrap', 'tc-canvas-backing-ceil'],
    },
  },
  {
    n: 39,
    slug: 'decode-interval-prototype lab fork',
    idea: 'Image.decode prototype interval wait before lab toCanvas drawImage',
    extra: { inject: 'raster', monkeypatch: 'decode-interval-prototype' },
  },
  {
    n: 40,
    slug: 'bitmap-pixelated round-dims wrap',
    idea: 'tc-lab-draw-create-image-bitmap-pixelated + round-dims + drawImage-wrap',
    extra: {
      inject: 'raster',
      svgRootRound: 'round-dims',
      monkeypatch: ['tc-lab-draw-create-image-bitmap-pixelated', 'drawImage-wrap'],
    },
  },
]

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: extraCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-draw-${num}`,
    label: `tc-lab-draw #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: extraCss ?? '',
    inject: restExtra.inject ?? 'raster',
    category: 'tocanvas',
    active: true,
    rasterPatch: 'lab-toCanvas',
    notes: `Lab toCanvas draw/backing; ${spec.slug}; no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(
    `recipes-tocanvas-lab-fork-draw.js: expected 40 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch ?? '',
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.svgMarkupPatch ?? '',
    r.foSvgPatch ?? '',
    JSON.stringify(r.radicalOptions ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-fork-draw.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

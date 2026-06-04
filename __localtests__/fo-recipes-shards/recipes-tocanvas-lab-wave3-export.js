/**
 * Lab toCanvas wave 3 — canvas export / re-import before ink display (tc-lab-w3-exp-001..050).
 * rasterPatch: lab-toCanvas → fo-fix-toCanvas.js reads recipe.labToCanvasOpts.canvasExport.
 * Paths: toDataURL | toBlob | OffscreenCanvas.transferToImageBitmap | createImageBitmap re-import.
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w3-exp-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/**
 * @typedef {{
 *   path: 'none' | 'dataurl' | 'blob' | 'offscreen-transfer' | 'createImageBitmap',
 *   mime?: 'image/png' | 'image/jpeg' | 'image/webp',
 *   quality?: number,
 *   passes?: number,
 *   rafBeforeReimport?: boolean,
 *   microtaskBeforeReimport?: boolean,
 *   revokeBlob?: 'after-decode' | 'immediate',
 *   bitmapFrom?: 'canvas' | 'blob' | 'dataurl-blob',
 *   bitmapResizeQuality?: 'high' | 'pixelated' | 'low',
 *   premultiplyAlpha?: 'none' | 'premultiply' | 'default',
 *   closeBitmap?: boolean,
 * }} LabCanvasExportOpts
 */

/** @param {LabCanvasExportOpts} exp */
function expOpts(exp) {
  return { labToCanvasOpts: { canvasExport: exp } }
}

/** @type {{ n: number, slug: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }} */
const SPECS = [
  {
    n: 1,
    slug: 'direct no export roundtrip',
    idea: 'Lab toCanvas draw only — canvasExport path none (baseline for ink probe)',
    extra: { inject: 'raster', ...expOpts({ path: 'none' }) },
  },
  {
    n: 2,
    slug: 'toDataURL image/png once',
    idea: 'canvas.toDataURL(image/png) → Image.decode → redraw before display',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 1 }),
    },
  },
  {
    n: 3,
    slug: 'toDataURL png double pass',
    idea: 'Two sequential toDataURL(png) re-import passes on same backing store',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 2 }),
    },
  },
  {
    n: 4,
    slug: 'toDataURL png triple pass',
    idea: 'Three toDataURL(png) roundtrips before ink measurement',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 3 }),
    },
  },
  {
    n: 5,
    slug: 'toDataURL image/jpeg',
    idea: 'canvas.toDataURL(image/jpeg, quality 0.92) re-import via Image',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'dataurl', mime: 'image/jpeg', quality: 0.92, passes: 1 }),
    },
  },
  {
    n: 6,
    slug: 'toDataURL image/webp',
    idea: 'canvas.toDataURL(image/webp) when supported — lossy re-import path',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'dataurl', mime: 'image/webp', passes: 1 }),
    },
  },
  {
    n: 7,
    slug: 'toDataURL png + rAF',
    idea: 'toDataURL(png) then double requestAnimationFrame before Image.decode',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'dataurl',
        mime: 'image/png',
        passes: 1,
        rafBeforeReimport: true,
      }),
    },
  },
  {
    n: 8,
    slug: 'toDataURL png + microtask',
    idea: 'queueMicrotask gate before data-URL Image decode re-import',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'dataurl',
        mime: 'image/png',
        passes: 1,
        microtaskBeforeReimport: true,
      }),
    },
  },
  {
    n: 9,
    slug: 'toDataURL png FO baseline',
    idea: 'toDataURL(png) roundtrip with FO_BASELINE_CSS on capture',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 1 }),
    },
  },
  {
    n: 10,
    slug: 'toDataURL png integer-viewbox',
    idea: 'integer-viewBox snap pre-raster + toDataURL(png) re-import',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 1 }),
    },
  },
  {
    n: 11,
    slug: 'toBlob image/png',
    idea: 'canvas.toBlob(image/png) → object URL → Image.decode → redraw',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'blob', mime: 'image/png', passes: 1, revokeBlob: 'after-decode' }),
    },
  },
  {
    n: 12,
    slug: 'toBlob png revoke immediate',
    idea: 'toBlob(png) with URL.revokeObjectURL immediately after assigning img.src',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'blob', mime: 'image/png', passes: 1, revokeBlob: 'immediate' }),
    },
  },
  {
    n: 13,
    slug: 'toBlob image/jpeg',
    idea: 'canvas.toBlob(image/jpeg, quality 0.92) re-import path',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'blob',
        mime: 'image/jpeg',
        quality: 0.92,
        passes: 1,
        revokeBlob: 'after-decode',
      }),
    },
  },
  {
    n: 14,
    slug: 'toBlob image/webp',
    idea: 'canvas.toBlob(image/webp) → object URL decode when engine supports webp',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'blob', mime: 'image/webp', passes: 1, revokeBlob: 'after-decode' }),
    },
  },
  {
    n: 15,
    slug: 'toBlob png double pass',
    idea: 'Two toBlob(png) object-URL roundtrips on same canvas dimensions',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'blob',
        mime: 'image/png',
        passes: 2,
        revokeBlob: 'after-decode',
      }),
    },
  },
  {
    n: 16,
    slug: 'toBlob png + rAF',
    idea: 'toBlob(png) + double rAF before Image.decode re-import',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'blob',
        mime: 'image/png',
        passes: 1,
        revokeBlob: 'after-decode',
        rafBeforeReimport: true,
      }),
    },
  },
  {
    n: 17,
    slug: 'toBlob png FO baseline',
    idea: 'FO_BASELINE_CSS + toBlob(png) display roundtrip',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      ...expOpts({ path: 'blob', mime: 'image/png', passes: 1, revokeBlob: 'after-decode' }),
    },
  },
  {
    n: 18,
    slug: 'toBlob png round-dims',
    idea: 'round-dims SVG root snap + toBlob(png) re-import',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      ...expOpts({ path: 'blob', mime: 'image/png', passes: 1, revokeBlob: 'after-decode' }),
    },
  },
  {
    n: 19,
    slug: 'toBlob webp + math-floor-vb',
    idea: 'math-floor-viewbox-stash-frac + toBlob(webp) re-import',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'math-floor-viewbox-stash-frac',
      ...expOpts({ path: 'blob', mime: 'image/webp', passes: 1, revokeBlob: 'after-decode' }),
    },
  },
  {
    n: 20,
    slug: 'toBlob jpeg + device-grid',
    idea: 'labPreRaster device-grid-floor + toBlob(jpeg) roundtrip',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      ...expOpts({
        path: 'blob',
        mime: 'image/jpeg',
        quality: 0.92,
        passes: 1,
        revokeBlob: 'after-decode',
      }),
    },
  },
  {
    n: 21,
    slug: 'offscreen transferToImageBitmap',
    idea: 'OffscreenCanvas same dims → drawImage → transferToImageBitmap → main canvas',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: true }),
    },
  },
  {
    n: 22,
    slug: 'offscreen transfer double',
    idea: 'Two offscreen transferToImageBitmap blits before ink probe',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'offscreen-transfer', passes: 2, closeBitmap: true }),
    },
  },
  {
    n: 23,
    slug: 'offscreen transfer + rAF',
    idea: 'transferToImageBitmap handoff after double rAF flush',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'offscreen-transfer',
        passes: 1,
        closeBitmap: true,
        rafBeforeReimport: true,
      }),
    },
  },
  {
    n: 24,
    slug: 'offscreen transfer FO baseline',
    idea: 'FO_BASELINE_CSS + offscreen transferToImageBitmap display path',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: true }),
    },
  },
  {
    n: 25,
    slug: 'offscreen transfer integer-viewbox',
    idea: 'integer-viewBox + offscreen transferToImageBitmap',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: true }),
    },
  },
  {
    n: 26,
    slug: 'offscreen transfer device-grid',
    idea: 'device-grid-floor pre-raster + transferToImageBitmap re-display',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: true }),
    },
  },
  {
    n: 27,
    slug: 'offscreen transfer no close',
    idea: 'transferToImageBitmap without ImageBitmap.close (leak probe)',
    extra: {
      inject: 'raster',
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: false }),
    },
  },
  {
    n: 28,
    slug: 'offscreen transfer h2-percent-vb',
    idea: 'h2-fo-percent-int-viewbox + offscreen transfer display path',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      radicalPatch: 'h2-fo-percent-int-viewbox',
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: true }),
    },
  },
  {
    n: 29,
    slug: 'createImageBitmap from canvas',
    idea: 'createImageBitmap(canvas) → drawImage bitmap on fresh same-size canvas',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 30,
    slug: 'createImageBitmap canvas pixelated',
    idea: 'createImageBitmap(canvas, { resizeQuality: pixelated }) re-import',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'pixelated',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 31,
    slug: 'createImageBitmap canvas premultiply',
    idea: 'createImageBitmap(canvas, { premultiplyAlpha: premultiply }) re-import',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        premultiplyAlpha: 'premultiply',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 32,
    slug: 'createImageBitmap from blob',
    idea: 'toBlob(png) → createImageBitmap(blob) → drawImage (skips Image element)',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'blob',
        mime: 'image/png',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 33,
    slug: 'createImageBitmap from dataurl-blob',
    idea: 'fetch(dataURL) → blob → createImageBitmap(blob) re-import chain',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'dataurl-blob',
        mime: 'image/png',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 34,
    slug: 'createImageBitmap double pass',
    idea: 'Two createImageBitmap(canvas) re-import passes before ink scan',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 2,
      }),
    },
  },
  {
    n: 35,
    slug: 'createImageBitmap MP high',
    idea: 'monkeypatch createImageBitmap-high + canvasExport createImageBitmap path',
    extra: {
      inject: 'raster',
      monkeypatch: 'createImageBitmap-high',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 36,
    slug: 'createImageBitmap FO baseline',
    idea: 'FO_BASELINE_CSS + createImageBitmap(canvas) display roundtrip',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 37,
    slug: 'createImageBitmap int-floor vb',
    idea: 'int-floor root dims + createImageBitmap(canvas) re-import',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'int-floor',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 38,
    slug: 'createImageBitmap blob webp',
    idea: 'toBlob(webp) → createImageBitmap(blob) when webp blob decode supported',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'blob',
        mime: 'image/webp',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 39,
    slug: 'createImageBitmap + rAF',
    idea: 'createImageBitmap(canvas) after double rAF before drawImage',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
        rafBeforeReimport: true,
      }),
    },
  },
  {
    n: 40,
    slug: 'createImageBitmap low quality',
    idea: 'createImageBitmap(canvas, { resizeQuality: low }) re-import',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'low',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 41,
    slug: 'dataurl then blob chain',
    idea: 'toDataURL(png) → fetch → blob → object URL → Image (encode/decode chain)',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'dataurl',
        mime: 'image/png',
        passes: 1,
        bitmapFrom: 'dataurl-blob',
      }),
    },
  },
  {
    n: 42,
    slug: 'blob then createImageBitmap',
    idea: 'toBlob(png) + createImageBitmap(blob) combined export path',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'blob',
        mime: 'image/png',
        passes: 1,
        revokeBlob: 'after-decode',
        bitmapFrom: 'blob',
      }),
    },
  },
  {
    n: 43,
    slug: 'transfer then createImageBitmap',
    idea: 'offscreen transferToImageBitmap then createImageBitmap on result canvas',
    extra: {
      inject: 'raster',
      ...expOpts({
        path: 'offscreen-transfer',
        passes: 1,
        closeBitmap: true,
        bitmapFrom: 'canvas',
      }),
    },
  },
  {
    n: 44,
    slug: 'dataurl jpeg double + FO',
    idea: 'FO baseline + double toDataURL(jpeg) lossy re-import',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      ...expOpts({
        path: 'dataurl',
        mime: 'image/jpeg',
        quality: 0.92,
        passes: 2,
      }),
    },
  },
  {
    n: 45,
    slug: 'toBlob png MP round draw',
    idea: 'toBlob(png) roundtrip + tc-draw-image-round-all on final blit',
    extra: {
      inject: 'raster',
      monkeypatch: 'tc-draw-image-round-all',
      ...expOpts({ path: 'blob', mime: 'image/png', passes: 1, revokeBlob: 'after-decode' }),
    },
  },
  {
    n: 46,
    slug: 'dataurl MP backing-ceil',
    idea: 'toDataURL(png) + tc-canvas-backing-ceil on re-import canvas',
    extra: {
      inject: 'raster',
      monkeypatch: 'tc-canvas-backing-ceil',
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 1 }),
    },
  },
  {
    n: 47,
    slug: 'createImageBitmap device-grid',
    idea: 'device-grid-floor + createImageBitmap(canvas) display path',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      labPreRaster: 'device-grid-floor',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
  {
    n: 48,
    slug: 'offscreen transfer MP frac-draw',
    idea: 'tc-lab-draw-h2-frac-draw + offscreen transferToImageBitmap',
    extra: {
      inject: 'raster',
      monkeypatch: 'tc-lab-draw-h2-frac-draw',
      ...expOpts({ path: 'offscreen-transfer', passes: 1, closeBitmap: true }),
    },
  },
  {
    n: 49,
    slug: 'full stack dataurl double',
    idea: 'FO baseline + integer-viewbox + device-grid + double toDataURL(png)',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'integer-viewbox',
      labPreRaster: 'device-grid-floor',
      ...expOpts({ path: 'dataurl', mime: 'image/png', passes: 2 }),
    },
  },
  {
    n: 50,
    slug: 'full stack createImageBitmap high',
    idea: 'FO baseline + round-dims + createImageBitmap-high MP + bitmap re-import',
    extra: {
      inject: 'both',
      css: FO_BASELINE_CSS,
      svgRootRound: 'round-dims',
      monkeypatch: 'createImageBitmap-high',
      ...expOpts({
        path: 'createImageBitmap',
        bitmapFrom: 'canvas',
        bitmapResizeQuality: 'high',
        closeBitmap: true,
        passes: 1,
      }),
    },
  },
]

if (SPECS.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-export.js: expected 50 specs, got ${SPECS.length}`,
  )
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 50) {
  throw new Error('recipes-tocanvas-lab-wave3-export.js: duplicate slugs in SPECS')
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  /** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe} */
  return {
    id: `tc-lab-w3-exp-${num}`,
    label: `tc-lab-w3-exp #${spec.n}: ${spec.slug}`,
    idea: spec.idea,
    css: specCss ?? '',
    inject: restExtra.inject ?? 'raster',
    rasterPatch: 'lab-toCanvas',
    category: 'tocanvas',
    active: true,
    notes: `Lab canvas export probe; ${spec.slug}; FO raster only — no text bypass.`,
    ...restExtra,
  }
})

if (RECIPES.length !== 50) {
  throw new Error(
    `recipes-tocanvas-lab-wave3-export.js: expected 50 recipes, got ${RECIPES.length}`,
  )
}

const seen = new Set()
for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(`${r.id}: rasterPatch must be lab-toCanvas`)
  }
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject,
    r.rasterPatch,
    mp,
    r.radicalPatch ?? '',
    r.svgRootRound ?? '',
    r.labPreRaster ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave3-export.js: duplicate recipe key at ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

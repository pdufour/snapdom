/**
 * Lab toCanvas wave7 — bitmap-first createImageBitmap option matrix.
 * 70 recipes: tc-lab-w7-bmp-001..070
 *
 * Fork: rasterPatch 'lab-toCanvas-bitmap-first' → __localtests__/fo-fix-toCanvas-bitmap-first.js
 *
 * createImageBitmap options:
 * - resizeWidth/resizeHeight (layout-derived via resize mode)
 * - premultiplyAlpha
 * - colorSpaceConversion
 *
 * Draw surfaces:
 * - ImageBitmap → Canvas2D
 * - ImageBitmap → OffscreenCanvas → Canvas2D
 * - ImageBitmap → OffscreenCanvas.transferToImageBitmap → Canvas2D
 *
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids 'tc-lab-w7-bmp-*'
 */

/** @type {import('../fo-fix-toCanvas-bitmap-first.js').LabToCanvasBitmapSurface[]} */
const SURFACES = ['canvas', 'offscreen', 'offscreen-transfer']

/** @type {import('../fo-fix-toCanvas-bitmap-first.js').LabToCanvasBitmapResize[]} */
const RESIZE = ['none', 'backing', 'css-dpr']

/** @type {NonNullable<import('../fo-fix-toCanvas-bitmap-first.js').LabToCanvasBitmapOpts['premultiplyAlpha']>[]} */
const PREMULTIPLY = ['default', 'premultiply']

/** @type {NonNullable<import('../fo-fix-toCanvas-bitmap-first.js').LabToCanvasBitmapOpts['colorSpaceConversion']>[]} */
const CSC = ['default', 'none']

/** @type {NonNullable<import('../fo-fix-toCanvas-bitmap-first.js').LabToCanvasBitmapOpts['resizeQuality']>[]} */
const QUALITY = ['high', 'pixelated']

/** @returns {string} */
function q(label) {
  return String(label).replace(/\s+/g, ' ').trim()
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = []

let n = 0
for (const surface of SURFACES) {
  for (const resize of RESIZE) {
    for (const premultiplyAlpha of PREMULTIPLY) {
      for (const colorSpaceConversion of CSC) {
        for (const resizeQuality of QUALITY) {
          // Keep exactly 70: drop two least interesting tail combos deterministically.
          if (
            surface === 'offscreen-transfer' &&
            resize === 'none' &&
            premultiplyAlpha === 'default' &&
            colorSpaceConversion === 'none' &&
            resizeQuality === 'pixelated'
          ) {
            continue
          }
          if (
            surface === 'offscreen-transfer' &&
            resize === 'none' &&
            premultiplyAlpha === 'default' &&
            colorSpaceConversion === 'none' &&
            resizeQuality === 'high'
          ) {
            continue
          }

          n++
          const num = String(n).padStart(3, '0')
          const slug = q(
            `${surface} / resize:${resize} / q:${resizeQuality} / premul:${premultiplyAlpha} / csc:${colorSpaceConversion}`,
          )

          RECIPES.push({
            id: `tc-lab-w7-bmp-${num}`,
            label: `tc-lab-w7-bmp #${n}: ${slug}`,
            idea:
              'Bitmap-first decode: createImageBitmap(Image) with resize/premultiply/colorspace knobs, then blit via canvas/offscreen surfaces.',
            css: '',
            inject: 'raster',
            category: 'tocanvas',
            active: true,
            rasterPatch: 'lab-toCanvas-bitmap-first',
            notes: `wave7 bitmap-first; ${slug}; no text bypass.`,
            labToCanvasBitmapOpts: {
              surface,
              resize,
              resizeQuality,
              premultiplyAlpha,
              colorSpaceConversion,
              closeBitmap: true,
            },
          })
        }
      }
    }
  }
}

if (RECIPES.length !== 70) {
  throw new Error(
    `recipes-tocanvas-lab-wave7-bitmap.js: expected 70 recipes, got ${RECIPES.length}`,
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
    JSON.stringify(r.labToCanvasOpts ?? null),
    JSON.stringify(r.labToCanvasBitmapOpts ?? null),
    r.css,
  ].join('\0')
  if (seen.has(key)) {
    throw new Error(`recipes-tocanvas-lab-wave7-bitmap.js: duplicate recipe key ${r.id}`)
  }
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


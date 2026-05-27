/**
 * Browser visual diff using pixelmatch (CDN) + translation align from test helpers.
 */
import pixelmatch from 'https://esm.sh/pixelmatch@6.0.0'
import {
  alignCanvasPair,
  findTranslationOffset,
  translateCanvas,
  resizeCanvas,
  formatShiftLabel,
  dataUrlToCanvas,
} from '../__tests__/helpers/visualDiff.js'

export { alignCanvasPair, formatShiftLabel, dataUrlToCanvas, resizeCanvas }

/**
 * @param {HTMLCanvasElement} a
 * @param {HTMLCanvasElement} b
 * @param {{ threshold?: number, includeAA?: boolean, diffColor?: [number, number, number] }} [opts]
 */
export function compareVisualDiff(a, b, opts = {}) {
  const w = Math.min(a.width, b.width)
  const h = Math.min(a.height, b.height)
  if (a.width !== b.width || a.height !== b.height) {
    return {
      diffCanvas: null,
      mismatchedPixels: Infinity,
      totalPixels: w * h,
      mismatchRatio: 1,
      sizeMismatch: true,
    }
  }

  const ctx1 = a.getContext('2d', { willReadFrequently: true })
  const ctx2 = b.getContext('2d', { willReadFrequently: true })
  const img1 = ctx1.getImageData(0, 0, w, h).data
  const img2 = ctx2.getImageData(0, 0, w, h).data
  const diffData = new Uint8ClampedArray(w * h * 4)

  const mismatched = pixelmatch(img1, img2, diffData, w, h, {
    threshold: opts.threshold ?? 0.1,
    includeAA: opts.includeAA ?? false,
    alpha: opts.alpha ?? 0.1,
    diffColor: opts.diffColor ?? [255, 40, 40],
  })

  const diff = document.createElement('canvas')
  diff.width = w
  diff.height = h
  diff.getContext('2d').putImageData(new ImageData(diffData, w, h), 0, 0)

  const total = w * h
  return {
    diffCanvas: diff,
    mismatchedPixels: mismatched,
    totalPixels: total,
    mismatchRatio: total ? mismatched / total : 0,
    sizeMismatch: false,
  }
}

/**
 * @param {HTMLCanvasElement} a live tab
 * @param {HTMLCanvasElement} b snapdom
 * @param {{ threshold?: number, maxShift?: number, includeAA?: boolean }} [opts]
 */
export function compareVisualDiffAligned(a, b, opts = {}) {
  const pmOpts = {
    threshold: opts.threshold ?? 0.1,
    includeAA: opts.includeAA ?? false,
  }
  const raw = compareVisualDiff(a, b, pmOpts)

  if (raw.sizeMismatch || !raw.diffCanvas) {
    return {
      ...raw,
      offsetX: 0,
      offsetY: 0,
      rawMismatchRatio: raw.mismatchRatio,
      rawMismatchedPixels: raw.mismatchedPixels,
      alignedCanvas: b,
    }
  }

  const { dx, dy } = findTranslationOffset(a, b, opts.maxShift ?? 8)
  const alignedCanvas = translateCanvas(b, -dx, -dy)
  const aligned = compareVisualDiff(a, alignedCanvas, pmOpts)

  return {
    ...aligned,
    offsetX: dx,
    offsetY: dy,
    rawMismatchRatio: raw.mismatchRatio,
    rawMismatchedPixels: raw.mismatchedPixels,
    rawDiffCanvas: raw.diffCanvas,
    alignedCanvas,
  }
}

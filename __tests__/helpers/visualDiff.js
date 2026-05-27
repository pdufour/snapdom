/**
 * Pixel visual diff between two canvases (browser).
 * @param {HTMLCanvasElement} a
 * @param {HTMLCanvasElement} b
 * @param {{ threshold?: number }} [opts] — per-channel sum delta above which a pixel counts as different
 * @returns {{
 *   diffCanvas: HTMLCanvasElement|null,
 *   mismatchedPixels: number,
 *   totalPixels: number,
 *   mismatchRatio: number,
 *   sizeMismatch: boolean,
 * }}
 */
export function compareVisualDiff(a, b, opts = {}) {
  const threshold = opts.threshold ?? 16
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

  const da = a.getContext('2d').getImageData(0, 0, w, h)
  const db = b.getContext('2d').getImageData(0, 0, w, h)
  const diff = document.createElement('canvas')
  diff.width = w
  diff.height = h
  const ctx = diff.getContext('2d')
  const out = ctx.createImageData(w, h)

  let mismatched = 0
  const total = w * h

  for (let i = 0; i < da.data.length; i += 4) {
    const dr = Math.abs(da.data[i] - db.data[i])
    const dg = Math.abs(da.data[i + 1] - db.data[i + 1])
    const db_ = Math.abs(da.data[i + 2] - db.data[i + 2])
    const da_ = Math.abs(da.data[i + 3] - db.data[i + 3])
    const delta = dr + dg + db_ + da_

    if (delta > threshold) {
      mismatched++
      out.data[i] = 255
      out.data[i + 1] = 40
      out.data[i + 2] = 40
      out.data[i + 3] = 220
    } else {
      const y = Math.floor(i / 4 / w)
      const x = (i / 4) % w
      const dim = ((x + y) % 2) * 20
      out.data[i] = dim
      out.data[i + 1] = dim
      out.data[i + 2] = dim
      out.data[i + 3] = 40
    }
  }

  ctx.putImageData(out, 0, 0)

  return {
    diffCanvas: diff,
    mismatchedPixels: mismatched,
    totalPixels: total,
    mismatchRatio: total ? mismatched / total : 0,
    sizeMismatch: false,
  }
}

/**
 * @param {string} dataUrl
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function dataUrlToCanvas(dataUrl) {
  const img = new Image()
  img.decoding = 'sync'
  img.src = dataUrl
  await img.decode()
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0)
  return canvas
}

/**
 * @param {HTMLCanvasElement} src
 * @param {number} width
 * @param {number} height
 * @returns {HTMLCanvasElement}
 */
export function resizeCanvas(src, width, height) {
  const out = document.createElement('canvas')
  out.width = width
  out.height = height
  const ctx = out.getContext('2d')
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(src, 0, 0, width, height)
  return out
}

/**
 * Align two canvases to the same pixel size (uses the smaller dimensions).
 * @param {HTMLCanvasElement} a
 * @param {HTMLCanvasElement} b
 */
export function alignCanvasPair(a, b) {
  const w = Math.min(a.width, b.width)
  const h = Math.min(a.height, b.height)
  return {
    a: a.width === w && a.height === h ? a : resizeCanvas(a, w, h),
    b: b.width === w && b.height === h ? b : resizeCanvas(b, w, h),
  }
}

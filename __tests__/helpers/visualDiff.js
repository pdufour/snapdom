/**
 * Pixel visual diff between two canvases (browser).
 */

/**
 * @param {Uint8ClampedArray} data
 * @param {number} i
 */
function lumAt(data, i) {
  return 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
}

/**
 * Downsampled ink mask for fast translation search.
 * @param {ImageData} imageData
 * @param {number} scale
 */
function buildInkMask(imageData, scale = 4) {
  const sw = imageData.width
  const sh = imageData.height
  const w = Math.max(1, Math.ceil(sw / scale))
  const h = Math.max(1, Math.ceil(sh / scale))
  const mask = new Uint8Array(w * h)
  const d = imageData.data
  for (let my = 0; my < h; my++) {
    for (let mx = 0; mx < w; mx++) {
      let ink = 0
      const y0 = my * scale
      const x0 = mx * scale
      const y1 = Math.min(sh, y0 + scale)
      const x1 = Math.min(sw, x0 + scale)
      for (let y = y0; y < y1; y++) {
        for (let x = x0; x < x1; x++) {
          const i = (y * sw + x) * 4
          if (d[i + 3] > 32 && lumAt(d, i) < 210) ink = 1
        }
      }
      mask[my * w + mx] = ink
    }
  }
  return { mask, w, h, scale }
}

/**
 * Best integer translation (device px) to align b onto a (maximize ink overlap).
 * Positive dy = move b down on canvas to match a (b content was higher).
 * @param {HTMLCanvasElement} a live / reference
 * @param {HTMLCanvasElement} b snapdom
 * @param {number} [maxShift]
 */
export function findTranslationOffset(a, b, maxShift = 8) {
  const w = Math.min(a.width, b.width)
  const h = Math.min(a.height, b.height)
  if (w < 1 || h < 1) return { dx: 0, dy: 0, score: 0 }

  const ma = buildInkMask(a.getContext('2d').getImageData(0, 0, w, h))
  const mb = buildInkMask(b.getContext('2d').getImageData(0, 0, w, h))
  const scale = ma.scale

  let bestDx = 0
  let bestDy = 0
  let bestScore = -1

  for (let dy = -maxShift; dy <= maxShift; dy++) {
    for (let dx = -maxShift; dx <= maxShift; dx++) {
      const sdx = Math.round(dx / scale)
      const sdy = Math.round(dy / scale)
      let score = 0
      for (let y = 0; y < ma.h; y++) {
        const y2 = y + sdy
        if (y2 < 0 || y2 >= mb.h) continue
        for (let x = 0; x < ma.w; x++) {
          const x2 = x + sdx
          if (x2 < 0 || x2 >= mb.w) continue
          if (ma.mask[y * ma.w + x] && mb.mask[y2 * mb.w + x2]) score++
        }
      }
      if (score > bestScore) {
        bestScore = score
        bestDx = dx
        bestDy = dy
      }
    }
  }

  return { dx: bestDx, dy: bestDy, score: bestScore }
}

/**
 * @param {HTMLCanvasElement} src
 * @param {number} dx
 * @param {number} dy
 * @param {string} [fill]
 */
export function translateCanvas(src, dx, dy, fill = '#ffffff') {
  const out = document.createElement('canvas')
  out.width = src.width
  out.height = src.height
  const ctx = out.getContext('2d')
  ctx.fillStyle = fill
  ctx.fillRect(0, 0, out.width, out.height)
  ctx.drawImage(src, dx, dy)
  return out
}

/**
 * @param {HTMLCanvasElement} a
 * @param {HTMLCanvasElement} b
 * @param {{ threshold?: number }} [opts]
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
  const structural = opts.structural === true

  for (let i = 0; i < da.data.length; i += 4) {
    const dr = Math.abs(da.data[i] - db.data[i])
    const dg = Math.abs(da.data[i + 1] - db.data[i + 1])
    const db_ = Math.abs(da.data[i + 2] - db.data[i + 2])
    const da_ = Math.abs(da.data[i + 3] - db.data[i + 3])
    const delta = dr + dg + db_ + da_

    const inkA = da.data[i + 3] > 32 && lumAt(da.data, i) < 210
    const inkB = db.data[i + 3] > 32 && lumAt(db.data, i) < 210
    const structuralMiss = structural && inkA !== inkB
    const colorMiss = !structural && delta > threshold

    if (structuralMiss || colorMiss) {
      mismatched++
      if (structuralMiss) {
        out.data[i] = 255
        out.data[i + 1] = 120
        out.data[i + 2] = 0
        out.data[i + 3] = 200
      } else {
        out.data[i] = 255
        out.data[i + 1] = 60
        out.data[i + 2] = 60
        out.data[i + 3] = 180
      }
    } else {
      const y = Math.floor(i / 4 / w)
      const x = (i / 4) % w
      const dim = ((x + y) % 2) * 18
      out.data[i] = dim
      out.data[i + 1] = dim
      out.data[i + 2] = dim
      out.data[i + 3] = 35
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
 * Auto-align b to a, then diff. Avoids “everything red” for a 1px vertical shift.
 * @param {HTMLCanvasElement} a reference (live tab)
 * @param {HTMLCanvasElement} b snapdom
 * @param {{
 *   threshold?: number,
 *   maxShift?: number,
 *   structural?: boolean,
 * }} [opts]
 */
export function compareVisualDiffAligned(a, b, opts = {}) {
  const maxShift = opts.maxShift ?? 8
  const raw = compareVisualDiff(a, b, { threshold: opts.threshold ?? 32 })

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

  const { dx, dy } = findTranslationOffset(a, b, maxShift)
  // dy>0 means b ink sits lower — pull b up before diffing.
  const alignedCanvas = translateCanvas(b, -dx, -dy)
  const aligned = compareVisualDiff(a, alignedCanvas, {
    threshold: opts.threshold ?? 28,
    structural: opts.structural !== false,
  })

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

/**
 * @param {number} dx device px
 * @param {number} dy device px
 * @param {number} dpr
 */
export function formatShiftLabel(dx, dy, dpr = 1) {
  const parts = []
  const cssX = dx / dpr
  const cssY = dy / dpr
  if (dx !== 0) {
    parts.push(`SnapDOM ${dx > 0 ? 'right' : 'left'} ${Math.abs(cssX).toFixed(2)}px`)
  }
  if (dy !== 0) {
    parts.push(`SnapDOM ${dy > 0 ? 'down' : 'up'} ${Math.abs(cssY).toFixed(2)}px`)
  }
  if (!parts.length) return 'no shift detected'
  return parts.join(' · ')
}

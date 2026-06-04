/**
 * FO lab ink-top detection — image-trim wrapper + native-lum / cap-crest fallbacks.
 *
 * Sign: smaller row / Y = higher on screen. delta = stageTop − liveTop (+ = lower on screen).
 *
 * ## Library evaluation (2026-06)
 *
 * | Backend          | Source              | Pros                          | Cons                                      |
 * |------------------|---------------------|-------------------------------|-------------------------------------------|
 * | `image-trim`     | npm + esm.sh CDN    | Fast getBorders on white FO   | Solid uniform bands → top=0 false positive|
 * | `native-lum`     | built-in fallback   | Row coverage; cap-crest refine| Threshold tuning                          |
 * | `trim-image-data`| optional CDN        | Alpha trim edges              | Poor for white bg + dark text             |
 * | `trim-canvas`    | —                   | Simple                        | Canvas-only                               |
 * | `opencv.js`      | —                   | Powerful                      | ~8MB async init — skipped                 |
 *
 * Default backend: `image-trim` with `native-lum` + `solid-band` fallbacks (`auto`).
 */

/** @typedef {'opencv' | 'image-trim' | 'native' | 'native-lum' | 'auto'} InkScanBackend */

export const DEFAULT_INK_BACKEND = /** @type {InkScanBackend} */ ('image-trim')

const OPENCV_CDN = 'https://docs.opencv.org/4.x/opencv.js'

/** @type {Promise<void> | null} */
let opencvInit = null

export const INK_SCAN_DEFAULTS = {
  minAlpha: 32,
  lumMax: 170,
  minRowCoverage: 0.02,
  background: [255, 255, 255, 255],
  margin: 0,
  padding: 0,
}

/** Softer thresholds for visible ascenders on displayed preview. */
export const INK_SCAN_VISIBLE_DEFAULTS = {
  minAlpha: 24,
  lumMax: 185,
  minRowCoverage: 0.015,
}

/** Stricter pixel gate for cap-crest row pick (avoids anti-alias inside glyphs). */
export const INK_SCAN_CAP_CORE_DEFAULTS = {
  minAlpha: 48,
  lumMax: 155,
  minRowCoverage: 0.04,
}

/** First row ≥ max(coverage)×ratio in band — top of dense ink (cap), not fringe. */
export const INK_SCAN_CAP_CREST_RATIO = 0.72

/** @type {typeof import('image-trim').getBorders | null} */
let getBordersCached = null

/** Register image-trim getBorders (browser import-map boot). */
export function registerImageTrimGetBorders(getBorders) {
  getBordersCached = getBorders
}

/**
 * @param {string} src
 */
function loadScript(src) {
  if (typeof document === 'undefined') {
    throw new Error('ensureInkScanBackend(opencv) requires a browser document')
  }
  const existing = document.querySelector(`script[data-ink-scan="${src}"]`)
  if (existing?.dataset.ready === '1') return Promise.resolve()
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.async = true
    s.src = src
    s.dataset.inkScan = src
    s.onload = () => {
      s.dataset.ready = '1'
      resolve()
    }
    s.onerror = () => reject(new Error(`script load failed: ${src}`))
    document.head.appendChild(s)
  })
}

/**
 * @param {InkScanBackend} [backend]
 * @param {{ timeoutMs?: number }} [opts]
 * @returns {Promise<boolean>}
 */
export async function ensureInkScanBackend(backend = DEFAULT_INK_BACKEND, opts = {}) {
  const name = backend === 'native' ? 'native-lum' : backend
  if (name === 'opencv') {
    if (typeof globalThis.cv?.Mat === 'function') return true
    if (!opencvInit) {
      const timeoutMs = opts.timeoutMs ?? 120_000
      opencvInit = (async () => {
        await loadScript(OPENCV_CDN)
        const cv = globalThis.cv
        if (!cv) throw new Error('opencv.js did not attach globalThis.cv')
        if (typeof cv.onRuntimeInitialized === 'function' && !cv.Mat) {
          await new Promise((resolve, reject) => {
            const t = setTimeout(() => reject(new Error('opencv.js init timeout')), timeoutMs)
            cv.onRuntimeInitialized = () => {
              clearTimeout(t)
              resolve()
            }
          })
        }
      })()
    }
    await opencvInit
    return true
  }
  if (getBordersCached) return true
  try {
    const mod = await import('image-trim')
    getBordersCached = mod.getBorders
    return !!getBordersCached
  } catch {
    return false
  }
}

/**
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {{ lumMax?: number }} opts
 */
function opencvInkTopRow(data, w, h, opts = {}) {
  const cv = globalThis.cv
  if (!cv?.Mat) return null
  const lumMax = opts.lumMax ?? INK_SCAN_DEFAULTS.lumMax
  const src = cv.matFromImageData({ data, width: w, height: h })
  const gray = new cv.Mat()
  const binary = new cv.Mat()
  try {
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY)
    cv.threshold(gray, binary, lumMax, 255, cv.THRESH_BINARY_INV)
    const rect = cv.boundingRect(binary)
    if (!rect || rect.height < 1) return null
    return rect.y
  } finally {
    src.delete()
    gray.delete()
    binary.delete()
  }
}

/** @deprecated alias */
export const ensureInkScanBackendReady = ensureInkScanBackend

/** @param {Uint8ClampedArray} data @param {number} i */
function lumAt(data, i) {
  return 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
}

/**
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {{ minAlpha?: number, lumMax?: number, minRowCoverage?: number, ignoreTopRows?: number }} opts
 */
export function nativeLumInkTopRow(data, w, h, opts = {}) {
  const minAlpha = opts.minAlpha ?? INK_SCAN_DEFAULTS.minAlpha
  const lumMax = opts.lumMax ?? INK_SCAN_DEFAULTS.lumMax
  const minRowCoverage = opts.minRowCoverage ?? INK_SCAN_DEFAULTS.minRowCoverage
  const ignoreTopRows = opts.ignoreTopRows ?? 0
  if (!data?.length || w < 1 || h < 1) return null

  for (let row = ignoreTopRows; row < h; row++) {
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      if (data[i + 3] > minAlpha && lumAt(data, i) < lumMax) dark++
    }
    if (dark / w >= minRowCoverage) return row
  }
  return null
}

/**
 * Solid fill bands (block glyphs): detect first non-background row.
 * @param {Uint8ClampedArray} data
 * @param {number} h
 * @param {number} w
 * @param {{ minRowCoverage?: number, lumDelta?: number }} [opts]
 */
export function solidBandInkTopRow(data, w, h, opts = {}) {
  const minRowCoverage = opts.minRowCoverage ?? 0.85
  const lumDelta = opts.lumDelta ?? 18
  if (!data?.length || w < 1 || h < 1) return null

  let bgLum = 255
  for (let col = 0; col < w; col++) {
    bgLum = Math.min(bgLum, lumAt(data, col * 4))
  }

  for (let row = 0; row < h; row++) {
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      if (data[i + 3] > 16 && lumAt(data, i) < bgLum - lumDelta) dark++
    }
    if (dark / w >= minRowCoverage) return row
  }
  return null
}

/**
 * @param {{ data: Uint8ClampedArray, width: number, height: number }} imageLike
 * @param {object} [trimOpts]
 */
function imageTrimTopRow(imageLike, trimOpts = {}) {
  if (!getBordersCached || !imageLike?.data) return null
  const h = imageLike.height
  try {
    const borders = getBordersCached(imageLike, {
      background: trimOpts.background ?? INK_SCAN_DEFAULTS.background,
      margin: trimOpts.margin ?? 0,
      padding: trimOpts.padding ?? 0,
    })
    if (!borders || !Number.isFinite(borders.top) || borders.top >= h) return null
    return borders.top
  } catch {
    return null
  }
}

/**
 * Cap-crest: first row whose coverage ≥ maxRowCoverage × ratio (dense ink top).
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {{ minAlpha?: number, lumMax?: number, minRowCoverage?: number, crestRatio?: number }} opts
 */
export function scanCapCrestIntegerRow(data, w, h, opts = {}) {
  const minAlpha = opts.minAlpha ?? INK_SCAN_CAP_CORE_DEFAULTS.minAlpha
  const lumMax = opts.lumMax ?? INK_SCAN_CAP_CORE_DEFAULTS.lumMax
  const minRowCoverage = opts.minRowCoverage ?? INK_SCAN_CAP_CORE_DEFAULTS.minRowCoverage
  const crestRatio = opts.crestRatio ?? INK_SCAN_CAP_CREST_RATIO
  if (!data?.length || w < 1 || h < 1) return null

  /** @type {number[]} */
  const coverages = []
  let maxCov = 0
  for (let row = 0; row < h; row++) {
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      if (data[i + 3] > minAlpha && lumAt(data, i) < lumMax) dark++
    }
    const cov = dark / w
    coverages.push(cov)
    if (cov > maxCov) maxCov = cov
  }
  if (maxCov < minRowCoverage) return null
  const threshold = maxCov * crestRatio
  for (let row = 0; row < h; row++) {
    if (coverages[row] >= threshold) return row
  }
  return null
}

/**
 * Walk upward while row coverage stays above fringe threshold.
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {number} startRow
 * @param {{ minAlpha?: number, lumMax?: number, fringeCoverage?: number }} [opts]
 */
export function refineInkTopRowUpward(data, w, h, startRow, opts = {}) {
  const minAlpha = opts.minAlpha ?? INK_SCAN_CAP_CORE_DEFAULTS.minAlpha
  const lumMax = opts.lumMax ?? INK_SCAN_CAP_CORE_DEFAULTS.lumMax
  const fringeCoverage = opts.fringeCoverage ?? 0.012
  if (!Number.isFinite(startRow) || startRow <= 0) return startRow

  let row = startRow
  while (row > 0) {
    const prev = row - 1
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (prev * w + col) * 4
      if (data[i + 3] > minAlpha && lumAt(data, i) < lumMax) dark++
    }
    if (dark / w < fringeCoverage) break
    row = prev
  }
  return row
}

/**
 * CSS-equivalent top for solid horizontal ink bands (block glyphs).
 * Uses alpha-weighted row coverage so a half-height anti-aliased row reports
 * the true CSS top (e.g. block at 2.5px → 2.5, not integer row 2).
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {{ minAlpha?: number, lumMax?: number, fringeCoverage?: number }} [opts]
 */
export function solidBandCssTopRow(data, w, h, opts = {}) {
  const minAlpha = opts.minAlpha ?? INK_SCAN_CAP_CORE_DEFAULTS.minAlpha
  const lumMax = opts.lumMax ?? INK_SCAN_CAP_CORE_DEFAULTS.lumMax
  const fringeCoverage = opts.fringeCoverage ?? 0.005
  if (!data?.length || w < 1 || h < 1) return null

  /** @type {number[]} */
  const coverages = []
  let maxCov = 0
  for (let row = 0; row < h; row++) {
    let ink = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      const alpha = data[i + 3]
      if (alpha > minAlpha && lumAt(data, i) < lumMax) ink += alpha / 255
    }
    const cov = ink / w
    coverages.push(cov)
    if (cov > maxCov) maxCov = cov
  }
  if (maxCov < fringeCoverage) return null

  const firstRow = coverages.findIndex((c) => c >= fringeCoverage)
  if (firstRow < 0) return null

  const firstCov = coverages[firstRow]
  if (firstCov >= maxCov - 1e-6) return firstRow
  // Leading-edge fade-in: CSS top = firstRow + (partial row coverage / full row coverage).
  return firstRow + firstCov / maxCov
}

/**
 * Fractional ink row via sub-row coverage interpolation.
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {{ minAlpha?: number, lumMax?: number, minRowCoverage?: number, mode?: string }} opts
 */
function fractionalInkTopRow(data, w, h, opts = {}) {
  const minAlpha = opts.minAlpha ?? INK_SCAN_DEFAULTS.minAlpha
  const lumMax = opts.lumMax ?? INK_SCAN_DEFAULTS.lumMax
  const minRowCoverage = opts.minRowCoverage ?? INK_SCAN_DEFAULTS.minRowCoverage
  const mode = opts.mode ?? 'fractional-threshold'

  /** @type {{ row: number, cov: number }[]} */
  const rows = []
  for (let row = 0; row < h; row++) {
    let dark = 0
    for (let col = 0; col < w; col++) {
      const i = (row * w + col) * 4
      if (data[i + 3] > minAlpha && lumAt(data, i) < lumMax) dark++
    }
    rows.push({ row, cov: dark / w })
  }

  const intRow = rows.find((r) => r.cov >= minRowCoverage)?.row ?? null
  if (intRow == null) return null

  if (mode === 'fractional-com') {
    const prev = intRow > 0 ? rows[intRow - 1].cov : 0
    const cur = rows[intRow].cov
    const delta = cur - prev
    if (delta <= 1e-6) return intRow
    const frac = (minRowCoverage - prev) / delta
    return intRow - 1 + Math.max(0, Math.min(1, frac))
  }

  const prev = intRow > 0 ? rows[intRow - 1].cov : 0
  const cur = rows[intRow].cov
  if (cur <= prev + 1e-6) return intRow
  const frac = (minRowCoverage - prev) / (cur - prev)
  return intRow - 1 + Math.max(0, Math.min(1, frac))
}

/**
 * Primary scan API used by fo-fix-lab-runner.
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {{
 *   mode?: 'integer' | 'fractional-threshold' | 'fractional-com' | 'css-top',
 *   minAlpha?: number,
 *   lumMax?: number,
 *   minRowCoverage?: number,
 *   capCrest?: boolean,
 *   refineUpward?: boolean,
 *   solidBand?: boolean,
 *   backend?: InkScanBackend,
 * }} [opts]
 */
export function scanCanvasInkTopFromImageData(data, w, h, opts = {}) {
  if (!data?.length || w < 1 || h < 1) {
    return { integerRow: null, fractionalRow: null, backend: null }
  }

  const scanOpts = {
    minAlpha: opts.minAlpha ?? INK_SCAN_DEFAULTS.minAlpha,
    lumMax: opts.lumMax ?? INK_SCAN_DEFAULTS.lumMax,
    minRowCoverage: opts.minRowCoverage ?? INK_SCAN_DEFAULTS.minRowCoverage,
  }

  let integerRow = null
  let backend = 'native-lum'
  const forceBackend = opts.backend

  if (forceBackend === 'opencv' && globalThis.cv?.Mat) {
    integerRow = opencvInkTopRow(data, w, h, scanOpts)
    if (integerRow != null) backend = 'opencv'
  }

  if (integerRow == null && (forceBackend === 'image-trim' || forceBackend === 'auto') && getBordersCached) {
    const trimRow = imageTrimTopRow({ data, width: w, height: h }, opts)
    if (trimRow != null && trimRow < h) {
      integerRow = trimRow
      backend = 'image-trim'
    }
  }

  if (integerRow == null && (forceBackend === 'native' || forceBackend === 'native-lum')) {
    integerRow = nativeLumInkTopRow(data, w, h, scanOpts)
    if (integerRow != null) backend = 'native-lum'
  }

  if (forceBackend && integerRow != null) {
    if (integerRow != null && opts.refineUpward) {
      integerRow = refineInkTopRowUpward(data, w, h, integerRow, scanOpts)
    }
    const fractionalRow =
      opts.mode && opts.mode !== 'integer'
        ? fractionalInkTopRow(data, w, h, { ...scanOpts, mode: opts.mode })
        : integerRow
    return { integerRow, fractionalRow, backend }
  }

  if (opts.solidBand) {
    integerRow = solidBandInkTopRow(data, w, h, opts)
    if (integerRow != null) backend = 'solid-band'
  }

  if (integerRow == null && opts.capCrest) {
    integerRow = scanCapCrestIntegerRow(data, w, h, scanOpts)
    if (integerRow != null) backend = 'cap-crest'
  }

  if (integerRow == null && getBordersCached) {
    const trimRow = imageTrimTopRow({ data, width: w, height: h }, opts)
    const nativeRow = nativeLumInkTopRow(data, w, h, scanOpts)
    if (trimRow != null && trimRow > 0) {
      integerRow = trimRow
      backend = 'image-trim'
      if (nativeRow != null && Math.abs(trimRow - nativeRow) > 3) {
        integerRow = nativeRow
        backend = 'native-lum'
      }
    } else if (nativeRow != null) {
      integerRow = nativeRow
      backend = 'native-lum'
    } else if (trimRow === 0) {
      integerRow = solidBandInkTopRow(data, w, h, opts)
      if (integerRow != null) backend = 'solid-band'
    }
  }

  if (integerRow == null) {
    integerRow = nativeLumInkTopRow(data, w, h, scanOpts)
    if (integerRow != null) backend = 'native-lum'
  }

  if (integerRow == null) {
    integerRow = solidBandInkTopRow(data, w, h, opts)
    if (integerRow != null) backend = 'solid-band'
  }

  if (integerRow != null && opts.refineUpward) {
    integerRow = refineInkTopRowUpward(data, w, h, integerRow, scanOpts)
  }

  if (opts.mode === 'css-top') {
    const cssTop = solidBandCssTopRow(data, w, h, scanOpts)
    return {
      integerRow: cssTop != null ? Math.round(cssTop) : null,
      fractionalRow: cssTop,
      backend: cssTop != null ? 'css-top' : null,
    }
  }

  const fractionalRow =
    opts.mode && opts.mode !== 'integer'
      ? fractionalInkTopRow(data, w, h, { ...scanOpts, mode: opts.mode })
      : integerRow

  return { integerRow, fractionalRow, backend }
}

/**
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {Parameters<typeof scanCanvasInkTopFromImageData>[3]} [opts]
 * @returns {{ row: number, backend: string } | null}
 */
export function inkTopRowFromImageData(data, w, h, opts = {}) {
  const scan = scanCanvasInkTopFromImageData(data, w, h, opts)
  const row = opts.mode === 'integer' ? scan.integerRow : (scan.fractionalRow ?? scan.integerRow)
  if (row == null) return null
  return { row, backend: scan.backend ?? 'native-lum' }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {Parameters<typeof inkTopRowFromImageData>[3]} [opts]
 * @returns {{ row: number, backend: string, regionRow: number } | null}
 */
export function inkTopRowFromCanvasRegion(ctx, x, y, w, h, opts = {}) {
  if (!ctx || w < 1 || h < 1) return null
  let imageData
  try {
    imageData = ctx.getImageData(x, y, w, h)
  } catch {
    return null
  }
  const hit = inkTopRowFromImageData(imageData.data, w, h, opts)
  if (!hit) return null
  return { ...hit, regionRow: hit.row, row: y + hit.row }
}

export const INK_SCAN_BACKEND_NOTES = {
  chosen:
    'image-trim default with native-lum + solid-band fallbacks; e2e matrix: native-lum ≈ image-trim ≈ opencv (±5px @ row 45)',
  backends: ['image-trim', 'native-lum', 'opencv', 'solid-band', 'cap-crest'],
  skipped: ['trim-canvas (canvas-only)', 'jimp (Node-only)'],
}

/**
 * Solid white band + black ink bar for e2e / backend parity (device pixels).
 */
export function syntheticInkBandRgba(w, h, inkTop, barH = 12, barX = 0, barW = null) {
  const data = new Uint8ClampedArray(w * h * 4)
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255
    data[i + 1] = 255
    data[i + 2] = 255
    data[i + 3] = 255
  }
  const bw = barW ?? w
  const bx = Math.max(0, Math.min(w - 1, barX))
  const bwClamped = Math.max(1, Math.min(bw, w - bx))
  const top = Math.max(0, Math.min(h, inkTop))
  const topInt = Math.floor(top)
  const topFrac = top - topInt

  if (topFrac > 1e-6 && topInt < h) {
    const alpha = Math.round(255 * topFrac)
    for (let col = bx; col < bx + bwClamped; col++) {
      const i = (topInt * w + col) * 4
      data[i] = 0
      data[i + 1] = 0
      data[i + 2] = 0
      data[i + 3] = alpha
    }
  }

  const fullStart = topFrac > 1e-6 ? topInt + 1 : topInt
  const fullRows = Math.max(0, barH - (topFrac > 1e-6 ? 1 : 0))
  const fullEnd = Math.min(h, fullStart + fullRows)
  for (let row = fullStart; row < fullEnd; row++) {
    for (let col = bx; col < bx + bwClamped; col++) {
      const i = (row * w + col) * 4
      data[i] = 0
      data[i + 1] = 0
      data[i + 2] = 0
      data[i + 3] = 255
    }
  }
  return data
}

/** Integer ink row only — Node e2e probes. */
export function inkTopIntegerRowFromImageData(data, w, h, opts = {}) {
  return scanCanvasInkTopFromImageData(data, w, h, opts).integerRow
}

/**
 * Async variant — warms image-trim then delegates to sync scan.
 * @param {Uint8ClampedArray} data
 * @param {number} w
 * @param {number} h
 * @param {Parameters<typeof scanCanvasInkTopFromImageData>[3]} [opts]
 */
export async function inkTopRowFromImageDataAsync(data, w, h, opts = {}) {
  await ensureInkScanBackend(opts.backend ?? DEFAULT_INK_BACKEND)
  return inkTopRowFromImageData(data, w, h, opts)
}

/**
 * Lab-only image load / decode / preload pipeline for fo-fix-toCanvas*.js forks.
 * Recipe field: labLoadPipeline — wired from fo-fix-lab-runner rasterLabToCanvas*.
 */

/** modern-screenshot drawImageInterval default (ms). */
export const LAB_DECODE_INTERVAL_MS = 100

/** @typedef {string} LabLoadPipeline */

/**
 * @param {LabLoadPipeline} p
 * @returns {{ attempts: number, backoffMs: number[] } | null}
 */
function parseDecodeRetryPipeline(p) {
  const m = /^decode-retry-(\d+)(?:@([\d,]+))?$/i.exec(p || '')
  if (!m) return null
  const attempts = Math.max(1, parseInt(m[1] || '1', 10) || 1)
  const backoffMs =
    m[2] != null && m[2].length
      ? m[2]
          .split(',')
          .map((x) => parseInt(x, 10))
          .filter((n) => Number.isFinite(n) && n >= 0)
      : []
  return { attempts, backoffMs }
}

/**
 * @param {LabLoadPipeline} p
 * @returns {{ passes: number, backoffMs: number[] } | null}
 */
function parseMultiDecodeBackoffPipeline(p) {
  const m = /^(double|triple)-decode-backoff@([\d,]+)$/i.exec(p || '')
  if (!m) return null
  const passes = m[1].toLowerCase() === 'triple' ? 3 : 2
  const backoffMs = String(m[2] || '')
    .split(',')
    .map((x) => parseInt(x, 10))
    .filter((n) => Number.isFinite(n) && n >= 0)
  return { passes, backoffMs }
}

/**
 * @param {LabLoadPipeline} p
 * @returns {{ attempts: number, backoffMs: number[] } | null}
 */
function parseIframeDecodeRetryPipeline(p) {
  if (p === 'iframe-decode-retry') {
    return { attempts: 3, backoffMs: [0, 100] }
  }
  const m = /^iframe-decode-retry-(\d+)(?:@([\d,]+))?$/i.exec(p || '')
  if (!m) return null
  const attempts = Math.max(1, parseInt(m[1] || '3', 10) || 3)
  const backoffMs =
    m[2] != null && m[2].length
      ? m[2]
          .split(',')
          .map((x) => parseInt(x, 10))
          .filter((n) => Number.isFinite(n) && n >= 0)
      : [0, 100]
  return { attempts, backoffMs }
}

/** @param {string} u */
function decodeSvgFromDataURL(u) {
  const i = u.indexOf(',')
  if (i < 0) return ''
  const header = u.slice(0, i)
  const payload = u.slice(i + 1)
  if (/;base64/i.test(header)) {
    return atob(payload)
  }
  return decodeURIComponent(payload)
}

function waitSingleRaf() {
  return new Promise((resolve) => requestAnimationFrame(resolve))
}

/**
 * @param {string} svgMarkup
 * @param {number} attempts
 * @param {number[]} backoffMs
 * @returns {Promise<ImageBitmap>}
 */
async function createImageBitmapFromIframeSvg(svgMarkup, attempts, backoffMs) {
  if (typeof createImageBitmap !== 'function') {
    throw new Error('createImageBitmap unavailable')
  }
  const iframe = document.createElement('iframe')
  iframe.setAttribute('sandbox', 'allow-same-origin')
  iframe.style.cssText =
    'position:fixed;left:-99999px;top:-99999px;width:0;height:0;border:0;visibility:hidden'
  document.body.appendChild(iframe)
  try {
    const doc = iframe.contentDocument
    if (!doc) throw new Error('iframe document unavailable')
    doc.open()
    doc.write(
      `<!DOCTYPE html><html><head><meta charset="utf-8"></head>` +
        `<body style="margin:0;padding:0">${svgMarkup}</body></html>`,
    )
    doc.close()
    await waitSingleRaf()
    const svg = doc.querySelector('svg')
    if (!svg) throw new Error('no svg in iframe')
    /** @type {unknown} */
    let lastErr = null
    for (let attempt = 0; attempt < attempts; attempt++) {
      try {
        return await createImageBitmap(svg)
      } catch (err) {
        lastErr = err
        if (attempt >= attempts - 1) break
        await waitBackoff(backoffMs[Math.min(attempt, backoffMs.length - 1)] ?? 0)
      }
    }
    const ser = new XMLSerializer().serializeToString(svg)
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(ser)}`
    const img = new Image()
    img.loading = 'eager'
    img.decoding = 'sync'
    img.src = dataUrl
    await img.decode()
    try {
      return await createImageBitmap(img, { resizeQuality: 'high' })
    } catch {
      return await createImageBitmap(img)
    }
  } finally {
    iframe.remove()
  }
}

/**
 * createImageBitmap from SVG bytes via blob URL (skip HTMLImageElement decode when blob path works).
 * @param {string} url
 * @param {boolean} postInterval
 */
async function loadImageBitmapFromSvgBlob(url, postInterval) {
  if (typeof createImageBitmap !== 'function') {
    throw new Error('createImageBitmap unavailable')
  }
  const blobUrl = await dataUrlToBlobUrl(url)
  try {
    const resp = await fetch(blobUrl)
    const blob = await resp.blob()
    /** @type {ImageBitmap | null} */
    let bitmap = null
    try {
      bitmap = await createImageBitmap(blob, { resizeQuality: 'high' })
    } catch {
      /* SVG blobs typically need Image decode before createImageBitmap */
    }
    if (!bitmap) {
      const img = new Image()
      img.loading = 'eager'
      img.decoding = 'sync'
      img.src = blobUrl
      await img.decode()
      if (postInterval) await waitInterval()
      try {
        bitmap = await createImageBitmap(img, { resizeQuality: 'high' })
      } catch {
        bitmap = await createImageBitmap(img)
      }
    } else if (postInterval) {
      await waitInterval()
    }
    const bmp = bitmap
    return {
      source: bmp,
      cleanup: () => {
        try {
          bmp.close()
        } catch {
          /* ok */
        }
      },
    }
  } finally {
    URL.revokeObjectURL(blobUrl)
  }
}

/**
 * @typedef {{
 *   crossOrigin?: 'anonymous' | 'use-credentials' | 'unset',
 *   referrerPolicy?: ReferrerPolicy | 'unset',
 *   decoding?: 'sync' | 'async' | 'auto' | 'unset',
 *   fetchPriority?: 'high' | 'low' | 'auto' | 'unset',
 * }} LabImageAttrs
 */

function waitMicrotask() {
  return Promise.resolve().then(() => {})
}

function waitDoubleRaf() {
  return new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  )
}

function waitInterval(ms = LAB_DECODE_INTERVAL_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Optional pre-decode DOM attachment styles for visibility experiments.
 * Syntax: "<basePipeline>@<attachMode>", for example:
 *   "decode-interval@pre-decode-dom-opacity-0"
 *
 * @param {string} pipeline
 * @returns {{ attachMode: string | null, base: string }}
 */
function splitPipelineMode(pipeline) {
  const p = pipeline || 'default'
  const i = p.indexOf('@')
  if (i < 0) {
    const isAttach = p.startsWith('pre-decode-dom-') || p === 'pre-decode-dom'
    return { attachMode: isAttach ? p : null, base: p }
  }
  const left = p.slice(0, i).trim()
  const right = p.slice(i + 1).trim() || 'default'
  const isAttach = right.startsWith('pre-decode-dom-') || right === 'pre-decode-dom'
  return { attachMode: isAttach ? right : null, base: left || 'default' }
}

/** @param {string | null} attachMode */
function preDecodeDomStyle(attachMode) {
  const OFFSCREEN = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none;'
  switch (attachMode) {
    case 'pre-decode-dom':
    case 'pre-decode-dom-vis-hidden':
      return OFFSCREEN + 'visibility:hidden'
    case 'pre-decode-dom-opacity-0':
      return OFFSCREEN + 'opacity:0'
    case 'pre-decode-dom-display-none':
      return OFFSCREEN + 'display:none'
    case 'pre-decode-dom-offscreen':
      return OFFSCREEN + 'visibility:visible'
    case 'pre-decode-dom-vis-hidden-opacity-0':
      return OFFSCREEN + 'visibility:hidden;opacity:0'
    default:
      return OFFSCREEN + 'visibility:hidden'
  }
}

/** @param {number} ms */
function waitBackoff(ms) {
  return ms > 0 ? waitInterval(ms) : waitMicrotask()
}

/**
 * @param {string} dataUrl
 * @returns {Promise<string>}
 */
async function dataUrlToBlobUrl(dataUrl) {
  const resp = await fetch(dataUrl)
  const blob = await resp.blob()
  return URL.createObjectURL(blob)
}

/**
 * @param {HTMLImageElement} img
 */
function waitImgLoadEvent(img) {
  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve(undefined)
      return
    }
    img.onload = () => resolve(undefined)
    img.onerror = () => reject(new Error('img load failed'))
  })
}

/**
 * @param {string} url
 * @param {LabLoadPipeline} pipeline
 * @param {{ imageAttrs?: LabImageAttrs }} [opts]
 * @returns {Promise<{ source: CanvasImageSource, cleanup: () => void }>}
 */
export async function loadLabRasterSource(url, pipeline = 'default', opts = {}) {
  const raw = pipeline || 'default'
  const parts = String(raw)
    .split('+')
    .map((s) => s.trim())
    .filter(Boolean)
  const { attachMode, base } = splitPipelineMode(parts[0] || 'default')
  const p = base || 'default'
  const imageAttrs = opts.imageAttrs ?? {}

  if (p === 'fonts-ready' || p === 'fonts-ready-interval' || p === 'fonts-ready-decode') {
    try {
      await document.fonts.ready
    } catch {
      /* ok */
    }
  }

  const useBitmap =
    p === 'create-image-bitmap' ||
    p === 'create-image-bitmap-pixelated' ||
    p === 'create-image-bitmap-premultiply' ||
    p === 'bitmap-close' ||
    p === 'bitmap-decode-interval' ||
    p === 'bitmap-decode-interval-raf' ||
    p === 'fonts-ready-bitmap' ||
    p === 'interval-then-bitmap'

  const decodeInterval =
    p === 'decode-interval' ||
    p === 'default' ||
    p === 'decode-interval-raf' ||
    p === 'load-event-interval' ||
    p === 'blob-decode-interval' ||
    p === 'decode-via-blob-interval' ||
    p === 'double-decode-interval' ||
    p === 'triple-decode-interval' ||
    p === 'pre-decode-dom-interval' ||
    p === 'fonts-ready-interval' ||
    p === 'bitmap-decode-interval' ||
    p === 'bitmap-decode-interval-raf' ||
    p === 'decode-then-interval' ||
    p === 'blob-then-interval'

  const noDecodeInterval = p === 'no-decode-interval'

  const iframeRetry = parseIframeDecodeRetryPipeline(p)
  if (iframeRetry) {
    const svgText = decodeSvgFromDataURL(url)
    if (!svgText) throw new Error('iframe-decode-retry: empty svg from data url')
    const bitmap = await createImageBitmapFromIframeSvg(
      svgText,
      iframeRetry.attempts,
      iframeRetry.backoffMs,
    )
    return {
      source: bitmap,
      cleanup: () => {
        try {
          bitmap.close()
        } catch {
          /* ok */
        }
      },
    }
  }

  if (p === 'image-bitmap-decode') {
    return loadImageBitmapFromSvgBlob(url, !noDecodeInterval)
  }

  if (useBitmap) {
    const img = await loadLabImage(url, raw, { skipInterval: true }, imageAttrs)
    if (decodeInterval && !noDecodeInterval) await waitInterval()
    if (p === 'interval-then-bitmap') await waitInterval()
    /** @type {ImageBitmapOptions} */
    const bitmapOpts = { resizeQuality: 'high' }
    if (p === 'create-image-bitmap-pixelated') bitmapOpts.resizeQuality = 'pixelated'
    if (p === 'create-image-bitmap-premultiply') bitmapOpts.premultiplyAlpha = 'premultiply'
    let bitmap
    try {
      bitmap = await createImageBitmap(img, bitmapOpts)
    } catch {
      bitmap = await createImageBitmap(img)
    }
    if (p === 'bitmap-close') {
      try {
        bitmap.close()
      } catch {
        /* ok */
      }
      const img2 = await loadLabImage(url, 'default', {})
      return { source: img2, cleanup: () => {} }
    }
    return {
      source: bitmap,
      cleanup: () => {
        try {
          bitmap.close()
        } catch {
          /* ok */
        }
      },
    }
  }

  const img = await loadLabImage(
    url,
    raw,
    { skipInterval: noDecodeInterval, decodeInterval: decodeInterval && !noDecodeInterval },
    imageAttrs,
  )

  return { source: img, cleanup: () => {} }
}

/**
 * @param {string} url
 * @param {LabLoadPipeline} pipeline
 * @param {{ skipInterval?: boolean, decodeInterval?: boolean }} flags
 * @param {LabImageAttrs} imageAttrs
 * @returns {Promise<HTMLImageElement>}
 */
async function loadLabImage(url, pipeline, flags = {}, imageAttrs = {}) {
  const rawToken =
    pipeline && typeof pipeline === 'object' && 'raw' in pipeline
      ? /** @type {{ raw?: string }} */ (pipeline).raw
      : pipeline
  const raw = rawToken || 'default'
  const parts = String(raw)
    .split('+')
    .map((s) => s.trim())
    .filter(Boolean)
  const { attachMode, base } = splitPipelineMode(parts[0] || 'default')
  const p = base || 'default'
  const extra = new Set(parts.slice(1))
  let decodeUrl = url
  /** @type {(() => void) | null} */
  let revoke = null

  if (
    p === 'decode-via-blob' ||
    p === 'decode-via-blob-interval' ||
    p === 'blob-decode-interval' ||
    p === 'blob-then-interval' ||
    p === 'blob-then-double-decode' ||
    p === 'blob-then-double-raf' ||
    p === 'load-then-blob-decode'
  ) {
    revoke = await dataUrlToBlobUrl(url)
    decodeUrl = revoke
  } else if (p === 'blob-fetch-revoke' && url.startsWith('blob:')) {
    const resp = await fetch(url)
    const blob = await resp.blob()
    URL.revokeObjectURL(url)
    revoke = URL.createObjectURL(blob)
    decodeUrl = revoke
  }

  const img = new Image()
  if (imageAttrs.crossOrigin === 'anonymous' || imageAttrs.crossOrigin === 'use-credentials') {
    img.crossOrigin = imageAttrs.crossOrigin
  } else if (imageAttrs.crossOrigin !== 'unset') {
    // Default: avoid taint for most data-URL and proxy captures.
    img.crossOrigin = 'anonymous'
  }

  if (p === 'img-loading-lazy' || p === 'lazy-async-decode') {
    img.loading = 'lazy'
  } else {
    img.loading = 'eager'
  }

  if (imageAttrs.decoding && imageAttrs.decoding !== 'unset') {
    img.decoding = /** @type {'sync'|'async'|'auto'} */ (imageAttrs.decoding)
  } else if (p === 'img-decoding-async' || p === 'lazy-async-decode') {
    img.decoding = 'async'
  } else {
    img.decoding = 'sync'
  }

  if (imageAttrs.referrerPolicy && imageAttrs.referrerPolicy !== 'unset') {
    img.referrerPolicy = /** @type {ReferrerPolicy} */ (imageAttrs.referrerPolicy)
  }

  if (imageAttrs.fetchPriority && imageAttrs.fetchPriority !== 'unset') {
    // Not supported in every browser, but safe to set when present.
    try {
      // @ts-ignore
      img.fetchPriority = imageAttrs.fetchPriority
    } catch {
      /* ok */
    }
  }

  for (const tag of extra) {
    const mAttr = /^img-attrs-(\d+)x(\d+)$/.exec(tag)
    if (mAttr) {
      img.setAttribute('width', mAttr[1])
      img.setAttribute('height', mAttr[2])
      continue
    }
    const mProp = /^img-props-(\d+)x(\d+)$/.exec(tag)
    if (mProp) {
      img.width = Number(mProp[1])
      img.height = Number(mProp[2])
      continue
    }
    if (tag === 'img-srcset-1x') {
      img.srcset = `${decodeUrl} 1x`
      continue
    }
    if (tag === 'img-srcset-2x') {
      img.srcset = `${decodeUrl} 1x, ${decodeUrl} 2x`
      continue
    }
    const mSizes = /^img-sizes-(.+)$/.exec(tag)
    if (mSizes) {
      const token = mSizes[1]
      if (token === '100vw') img.sizes = '100vw'
      else if (token === '50vw') img.sizes = '50vw'
      else if (token === '600px') img.sizes = '600px'
      else img.sizes = token
    }
  }

  const preDecodeDom =
    p === 'pre-decode-dom' ||
    p === 'pre-decode-dom-interval' ||
    p === 'pre-decode-dom-interval-raf' ||
    (attachMode != null && attachMode.startsWith('pre-decode-dom'))

  if (preDecodeDom) {
    img.style.cssText = preDecodeDomStyle(attachMode)
    document.body.appendChild(img)
  }

  img.src = decodeUrl

  if (p === 'blob-early-revoke' && decodeUrl.startsWith('blob:')) {
    URL.revokeObjectURL(decodeUrl)
  }

  const useLoadEvent = p === 'load-event' || p === 'load-event-interval' || p === 'load-then-blob-decode'

  try {
    if (useLoadEvent) {
      await waitImgLoadEvent(img)
    } else if (parseMultiDecodeBackoffPipeline(p)) {
      const { passes, backoffMs } = /** @type {NonNullable<ReturnType<typeof parseMultiDecodeBackoffPipeline>>} */ (
        parseMultiDecodeBackoffPipeline(p)
      )
      for (let i = 0; i < passes; i++) {
        await img.decode()
        if (i < passes - 1) {
          await waitBackoff(backoffMs[Math.min(i, backoffMs.length - 1)] ?? 0)
        }
      }
    } else if (p === 'triple-decode' || p === 'triple-decode-interval') {
      for (let i = 0; i < 3; i++) await img.decode()
    } else if (p === 'double-decode' || p === 'double-decode-interval' || p === 'blob-then-double-decode') {
      await img.decode()
      await img.decode()
    } else if (parseDecodeRetryPipeline(p)) {
      const { attempts, backoffMs } = /** @type {NonNullable<ReturnType<typeof parseDecodeRetryPipeline>>} */ (
        parseDecodeRetryPipeline(p)
      )
      for (let attempt = 0; attempt < attempts; attempt++) {
        try {
          await img.decode()
          break
        } catch (err) {
          if (attempt >= attempts - 1) throw err
          await waitBackoff(backoffMs[Math.min(attempt, backoffMs.length - 1)] ?? 0)
        }
      }
    } else {
      await img.decode()
      if (p === 'decode-microtask-twice') {
        await waitMicrotask()
        await img.decode()
      }
    }

    if (!flags.skipInterval && flags.decodeInterval) {
      await waitInterval()
    } else if (p === 'decode-then-interval' || p === 'blob-then-interval') {
      await waitInterval()
    }

    if (p === 'decode-interval-raf' || p === 'bitmap-decode-interval-raf' || p === 'pre-decode-dom-interval-raf') {
      await waitDoubleRaf()
    }

    if (p === 'double-raf' || p === 'blob-then-double-raf') {
      img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
      if (!img.isConnected) document.body.appendChild(img)
      await waitDoubleRaf()
    }

    if (p === 'raf-before-draw' || p === 'interval-raf-before-draw') {
      await new Promise((resolve) => requestAnimationFrame(resolve))
    }

    if (p === 'triple-raf-flush') {
      await waitDoubleRaf()
      await new Promise((resolve) => requestAnimationFrame(resolve))
    }

    if (p === 'load-then-raf') {
      await waitImgLoadEvent(img)
      await waitDoubleRaf()
    }
  } finally {
    if (preDecodeDom && img.isConnected) {
      try {
        img.remove()
      } catch {
        /* ok */
      }
    }
    if (revoke) URL.revokeObjectURL(revoke)
  }

  return img
}

/**
 * Lab fork: single toCanvas path with recipe-driven raster flags.
 * Opt in: rasterPatch: 'lab-toCanvas-unified' → __localtests__/fo-fix-toCanvas-unified.js
 *
 * Recipe knobs (labToCanvasOpts): decodeMs, roundDraw, smoothOff, useBitmap, waitRaf.
 */
import { isSafari } from '../src/utils/browser.js'
import { loadLabRasterSource } from './fo-fix-toCanvas-load-pipeline.js'

/** modern-screenshot drawImageInterval default (ms). */
const DEFAULT_DECODE_MS = 100

/**
 * @typedef {{
 *   decodeMs?: number | false,
 *   roundDraw?: boolean,
 *   smoothOff?: boolean,
 *   useBitmap?: boolean,
 *   waitRaf?: boolean,
 * }} LabToCanvasUnifiedOpts
 */

function isSvgDataURL(u) {
  return typeof u === 'string' && /^data:image\/svg\+xml/i.test(u)
}
function decodeSvgFromDataURL(u) {
  const i = u.indexOf(',')
  return i >= 0 ? decodeURIComponent(u.slice(i + 1)) : ''
}
function encodeSvgToDataURL(svgText) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
}
function splitDecls(s) {
  let parts = [],
    buf = '',
    depth = 0
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '(') depth++
    if (ch === ')') depth = Math.max(0, depth - 1)
    if (ch === ';' && depth === 0) {
      parts.push(buf)
      buf = ''
    } else buf += ch
  }
  if (buf.trim()) parts.push(buf)
  return parts.map((x) => x.trim()).filter(Boolean)
}
function boxShadowToDropShadow(value) {
  const layers = []
  let buf = '',
    depth = 0
  for (let i = 0; i < value.length; i++) {
    const ch = value[i]
    if (ch === '(') depth++
    if (ch === ')') depth = Math.max(0, depth - 1)
    if (ch === ',' && depth === 0) {
      layers.push(buf.trim())
      buf = ''
    } else buf += ch
  }
  if (buf.trim()) layers.push(buf.trim())

  const fns = []
  for (const layer of layers) {
    if (/\binset\b/i.test(layer)) continue
    const nums = layer.match(/-?\d+(?:\.\d+)?px/gi) || []
    const [ox = '0px', oy = '0px', blur = '0px'] = nums
    let color = layer
      .replace(/-?\d+(?:\.\d+)?px/gi, '')
      .replace(/\binset\b/ig, '')
      .trim()
      .replace(/\s{2,}/g, ' ')
    const hasColor = !!color && color !== ','
    fns.push(`drop-shadow(${ox} ${oy} ${blur}${hasColor ? ` ${color}` : ''})`)
  }
  return fns.join(' ')
}
function rewriteDeclList(list) {
  const decls = splitDecls(list)
  let filter = null,
    wfilter = null,
    box = null
  const rest = []
  for (const d of decls) {
    const idx = d.indexOf(':')
    if (idx < 0) continue
    const prop = d.slice(0, idx).trim().toLowerCase()
    const val = d.slice(idx + 1).trim()
    if (prop === 'box-shadow') box = val
    else if (prop === 'filter') filter = val
    else if (prop === '-webkit-filter') wfilter = val
    else rest.push([prop, val])
  }
  if (box) {
    const ds = boxShadowToDropShadow(box)
    if (ds) {
      filter = filter ? `${filter} ${ds}` : ds
      wfilter = wfilter ? `${wfilter} ${ds}` : ds
    }
  }
  const out = [...rest]
  if (filter) out.push(['filter', filter])
  if (wfilter) out.push(['-webkit-filter', wfilter])
  return out.map(([k, v]) => `${k}:${v}`).join(';')
}
function rewriteCssBlock(css) {
  return css.replace(/([^{}]+)\{([^}]*)\}/g, (_m, sel, body) => `${sel}{${rewriteDeclList(body)}}`)
}
function rewriteSvgBoxShadowToDropShadow(svgText) {
  svgText = svgText.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (m, css) =>
    m.replace(css, rewriteCssBlock(css)),
  )
  svgText = svgText.replace(/style=(['"])([\s\S]*?)\1/gi, (m, q, body) =>
    `style=${q}${rewriteDeclList(body)}${q}`,
  )
  return svgText
}
function maybeConvertBoxShadowForSafari(url) {
  if (!isSafari() || !isSvgDataURL(url)) return url
  try {
    const svg = decodeSvgFromDataURL(url)
    const fixed = rewriteSvgBoxShadowToDropShadow(svg)
    return encodeSvgToDataURL(fixed)
  } catch {
    return url
  }
}

function waitMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function waitDoubleRaf() {
  return new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  )
}

/** @param {number} n */
function roundDim(n) {
  return Math.round(n)
}

/**
 * @param {{ labToCanvasOpts?: LabToCanvasUnifiedOpts & Record<string, unknown> }} options
 * @returns {Required<Pick<LabToCanvasUnifiedOpts, 'roundDraw' | 'smoothOff' | 'useBitmap' | 'waitRaf'>> & { decodeMs: number | false }}
 */
function resolveUnifiedFlags(options) {
  const u = /** @type {LabToCanvasUnifiedOpts} */ (options.labToCanvasOpts ?? {})
  const decodeMs =
    u.decodeMs === false || u.decodeMs === 0
      ? false
      : typeof u.decodeMs === 'number' && Number.isFinite(u.decodeMs)
        ? u.decodeMs
        : DEFAULT_DECODE_MS
  return {
    decodeMs,
    roundDraw: Boolean(u.roundDraw),
    smoothOff: Boolean(u.smoothOff),
    useBitmap: Boolean(u.useBitmap),
    waitRaf: Boolean(u.waitRaf),
  }
}

/** @param {CanvasImageSource} source */
function sourceSize(source) {
  if (source instanceof ImageBitmap) {
    return { w: source.width, h: source.height }
  }
  const img = /** @type {HTMLImageElement} */ (source)
  return { w: img.naturalWidth, h: img.naturalHeight }
}

/**
 * @param {string} url
 * @param {number | false} decodeMs
 * @param {boolean} useBitmap
 * @returns {Promise<{ source: CanvasImageSource, cleanup: () => void }>}
 */
async function loadUnifiedSource(url, decodeMs, useBitmap) {
  if (useBitmap) {
    const pipeline =
      decodeMs === false ? 'create-image-bitmap' : 'bitmap-decode-interval'
    const loaded = await loadLabRasterSource(url, pipeline)
    if (decodeMs !== false && typeof decodeMs === 'number' && decodeMs !== DEFAULT_DECODE_MS) {
      await waitMs(decodeMs)
    }
    return loaded
  }

  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'
  img.crossOrigin = 'anonymous'
  img.src = url
  await img.decode()
  if (decodeMs !== false && typeof decodeMs === 'number' && decodeMs > 0) {
    await waitMs(decodeMs)
  }

  if (isSafari()) {
    img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
    document.body.appendChild(img)
    try {
      await waitDoubleRaf()
    } finally {
      try {
        img.remove()
      } catch {
        /* ok */
      }
    }
  }

  return { source: img, cleanup: () => {} }
}

/**
 * @param {string} url
 * @param {{
 *   width?: number,
 *   height?: number,
 *   scale?: number,
 *   dpr?: number,
 *   meta?: object,
 *   backgroundColor?: string,
 *   labToCanvasOpts?: LabToCanvasUnifiedOpts & Record<string, unknown>,
 * }} options
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function toCanvas(url, options = {}) {
  let { width: optW, height: optH, scale = 1, dpr = 1, meta = {}, backgroundColor } = options
  const flags = resolveUnifiedFlags(options)
  url = maybeConvertBoxShadowForSafari(url)

  const { source, cleanup } = await loadUnifiedSource(url, flags.decodeMs, flags.useBitmap)
  try {
    if (flags.waitRaf) await waitDoubleRaf()

    const { w: natW, h: natH } = sourceSize(source)
    const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
    const refH = Number.isFinite(meta.h0) ? meta.h0 : natH

    let outW
    let outH
    const hasW = Number.isFinite(optW)
    const hasH = Number.isFinite(optH)
    const rd = flags.roundDraw

    if (hasW && hasH) {
      outW = Math.max(1, rd ? roundDim(optW) : optW)
      outH = Math.max(1, rd ? roundDim(optH) : optH)
    } else if (hasW) {
      const w = rd ? roundDim(optW) : optW
      const k = w / Math.max(1, refW)
      outW = w
      outH = rd ? roundDim(refH * k) : refH * k
    } else if (hasH) {
      const h = rd ? roundDim(optH) : optH
      const k = h / Math.max(1, refH)
      outH = h
      outW = rd ? roundDim(refW * k) : refW * k
    } else {
      outW = rd ? roundDim(natW) : natW
      outH = rd ? roundDim(natH) : natH
    }

    outW = rd ? roundDim(outW * scale) : outW * scale
    outH = rd ? roundDim(outH * scale) : outH * scale

    const pxW = Math.max(1, rd ? roundDim(outW * dpr) : outW * dpr)
    const pxH = Math.max(1, rd ? roundDim(outH * dpr) : outH * dpr)

    const canvas = document.createElement('canvas')
    canvas.width = pxW
    canvas.height = pxH
    canvas.style.width = `${outW}px`
    canvas.style.height = `${outH}px`

    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('2d context unavailable')
    if (dpr !== 1) ctx.scale(dpr, dpr)
    if (flags.smoothOff) ctx.imageSmoothingEnabled = false

    if (backgroundColor) {
      ctx.save()
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, outW, outH)
      ctx.restore()
    }

    if (flags.waitRaf) await waitDoubleRaf()

    const dw = flags.roundDraw ? Math.max(1, roundDim(outW)) : outW
    const dh = flags.roundDraw ? Math.max(1, roundDim(outH)) : outH
    ctx.drawImage(source, 0, 0, dw, dh)
    return canvas
  } finally {
    cleanup()
  }
}

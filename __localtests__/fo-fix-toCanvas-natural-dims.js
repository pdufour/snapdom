/**
 * Lab fork of __localtests__/fo-fix-toCanvas.js — force output dims from natural image.
 *
 * Opt in from recipes: rasterPatch: 'lab-toCanvas-natural-dims'
 */
import { toCanvas as baseToCanvas } from './fo-fix-toCanvas.js'

/**
 * Wrapper around the lab toCanvas fork that forces `optDims='natural'`.
 * This is a harness-only raster experiment; do not promote to src/ without matrix validation.
 */
export async function toCanvasNaturalDimsWrapper(url, options) {
  return baseToCanvas(url, {
    ...options,
    labToCanvasOpts: {
      ...(options?.labToCanvasOpts ?? {}),
      optDims: 'natural',
    },
  })
}

/**
 * Lab fork: force canvas outW/outH from natural vs meta.w0/h0 vs harness opt dimensions.
 * Opt in: rasterPatch: 'lab-toCanvas-natural' → this module.
 * Recipe knobs via labToCanvasOpts.outWFrom / outHFrom (per-axis source).
 */
import { isSafari } from '../src/utils/browser.js'

/**
 * @typedef {'natural' | 'meta' | 'opt' | 'inherit'} OutDimFrom
 * @typedef {{
 *   backingRound?: 'none' | 'floor' | 'ceil' | 'round',
 *   dprSource?: 'harness' | 'device',
 *   stylePixels?: 'css' | 'device',
 *   optDims?: 'harness-css' | 'harness-device' | 'natural',
 *   ctxScale?: boolean,
 *   outWFrom?: OutDimFrom,
 *   outHFrom?: OutDimFrom,
 *   suppressOptW?: boolean,
 *   suppressOptH?: boolean,
 * }} LabNaturalDimOpts
 */

/**
 * @typedef {{
 *   willReadFrequently?: boolean,
 *   imageSmoothingEnabled?: boolean,
 *   imageSmoothingQuality?: 'low' | 'medium' | 'high',
 *   globalAlpha?: number,
 *   resetTransformBeforeDraw?: boolean,
 * }} LabToCanvasCtxOptions
 */

/**
 * @param {number} px
 * @param {'none' | 'floor' | 'ceil' | 'round'} mode
 */
function snapBackingPx(px, mode) {
  const n = Number(px) || 1
  if (mode === 'floor') return Math.max(1, Math.floor(n))
  if (mode === 'ceil') return Math.max(1, Math.ceil(n))
  if (mode === 'round') return Math.max(1, Math.round(n))
  return Math.max(1, n)
}

/** @type {LabToCanvasCtxOptions | null} */
let labToCanvasCtxOverride = null

/** @param {LabToCanvasCtxOptions | null} opts */
export function setLabToCanvasCtxOverride(opts) {
  labToCanvasCtxOverride = opts ? { ...opts } : null
}

export function clearLabToCanvasCtxOverride() {
  labToCanvasCtxOverride = null
}

/**
 * @param {LabToCanvasCtxOptions} a
 * @param {LabToCanvasCtxOptions} b
 * @returns {LabToCanvasCtxOptions}
 */
function mergeLabToCanvasCtx(a, b) {
  /** @type {LabToCanvasCtxOptions} */
  const out = { ...a }
  for (const [k, v] of Object.entries(b)) {
    if (v !== undefined) out[/** @type {keyof LabToCanvasCtxOptions} */ (k)] = v
  }
  return out
}

/**
 * @param {object} [options]
 * @returns {LabToCanvasCtxOptions}
 */
function resolveLabToCanvasCtx(options = {}) {
  const fromOpts = options.labCtx ?? options.labToCanvasCtx ?? {}
  const base = labToCanvasCtxOverride ?? {}
  return mergeLabToCanvasCtx(base, fromOpts)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {LabToCanvasCtxOptions} labCtx
 * @param {number} dpr
 */
function applyLabToCanvasCtx(ctx, labCtx, dpr) {
  if (typeof labCtx.imageSmoothingEnabled === 'boolean') {
    ctx.imageSmoothingEnabled = labCtx.imageSmoothingEnabled
  }
  if (labCtx.imageSmoothingQuality) {
    ctx.imageSmoothingQuality = labCtx.imageSmoothingQuality
  }
  if (typeof labCtx.globalAlpha === 'number') {
    ctx.globalAlpha = labCtx.globalAlpha
  }
  if (labCtx.resetTransformBeforeDraw) {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    if (dpr !== 1) ctx.scale(dpr, dpr)
  }
}

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
  let parts = [], buf = '', depth = 0
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '(') depth++
    if (ch === ')') depth = Math.max(0, depth - 1)
    if (ch === ';' && depth === 0) { parts.push(buf); buf='' } else buf += ch
  }
  if (buf.trim()) parts.push(buf)
  return parts.map(x => x.trim()).filter(Boolean)
}
function boxShadowToDropShadow(value) {
  const layers = []
  let buf = '', depth = 0
  for (let i = 0; i < value.length; i++) {
    const ch = value[i]
    if (ch === '(') depth++
    if (ch === ')') depth = Math.max(0, depth - 1)
    if (ch === ',' && depth === 0) { layers.push(buf.trim()); buf = '' }
    else buf += ch
  }
  if (buf.trim()) layers.push(buf.trim())

  const fns = []
  for (const layer of layers) {
    if (/\binset\b/i.test(layer)) continue
    const nums = layer.match(/-?\d+(?:\.\d+)?px/gi) || []
    const [ox='0px', oy='0px', blur='0px'] = nums
    let color = layer.replace(/-?\d+(?:\.\d+)?px/gi, '')
                     .replace(/\binset\b/ig, '')
                     .trim().replace(/\s{2,}/g, ' ')
    const hasColor = !!color && color !== ','
    fns.push(`drop-shadow(${ox} ${oy} ${blur}${hasColor ? ` ${color}` : ''})`)
  }
  return fns.join(' ')
}
function rewriteDeclList(list) {
  const decls = splitDecls(list)
  let filter = null, wfilter = null, box = null
  const rest = []
  for (const d of decls) {
    const idx = d.indexOf(':')
    if (idx < 0) continue
    const prop = d.slice(0, idx).trim().toLowerCase()
    const val  = d.slice(idx + 1).trim()
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
    m.replace(css, rewriteCssBlock(css))
  )
  svgText = svgText.replace(/style=(['"])([\s\S]*?)\1/gi, (m, q, body) =>
    `style=${q}${rewriteDeclList(body)}${q}`
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

/**
 * Standard lab toCanvas cascade (fo-fix-toCanvas.js) before per-axis overrides.
 * @param {{ natW: number, natH: number, refW: number, refH: number, optW?: number, optH?: number, hasW: boolean, hasH: boolean }} p
 */
function inheritOutDims(p) {
  const { natW, natH, refW, refH, optW, optH, hasW, hasH } = p
  if (hasW && hasH) {
    return { outW: Math.max(1, optW), outH: Math.max(1, optH) }
  }
  if (hasW) {
    const k = optW / Math.max(1, refW)
    return { outW: optW, outH: refH * k }
  }
  if (hasH) {
    const k = optH / Math.max(1, refH)
    return { outH: optH, outW: refW * k }
  }
  return { outW: natW, outH: natH }
}

/**
 * @param {{
 *   natW: number, natH: number, refW: number, refH: number,
 *   optW?: number, optH?: number, hasW: boolean, hasH: boolean,
 *   outWFrom?: OutDimFrom, outHFrom?: OutDimFrom,
 * }} p
 */
export function resolveForcedOutDims(p) {
  const {
    natW,
    natH,
    refW,
    refH,
    optW,
    optH,
    hasW,
    hasH,
    outWFrom = 'inherit',
    outHFrom = 'inherit',
  } = p
  const inherited = inheritOutDims(p)

  /**
   * @param {OutDimFrom} from
   * @param {'w' | 'h'} axis
   */
  function pick(from, axis) {
    if (from === 'inherit') {
      return axis === 'w' ? inherited.outW : inherited.outH
    }
    if (from === 'natural') return axis === 'w' ? natW : natH
    if (from === 'meta') return axis === 'w' ? refW : refH
    if (from === 'opt') {
      if (axis === 'w') {
        if (hasW) return Math.max(1, optW)
        if (hasH) return refW * (optH / Math.max(1, refH))
        return natW
      }
      if (hasH) return Math.max(1, optH)
      if (hasW) return refH * (optW / Math.max(1, refW))
      return natH
    }
    return axis === 'w' ? inherited.outW : inherited.outH
  }

  return {
    outW: Math.max(1, pick(outWFrom, 'w')),
    outH: Math.max(1, pick(outHFrom, 'h')),
  }
}

/**
 * @param {string} url
 * @param {{
 *   width?:number,
 *   height?:number,
 *   scale?:number,
 *   dpr?:number,
 *   meta?:object,
 *   backgroundColor?: string,
 *   labCtx?: LabToCanvasCtxOptions,
 *   labToCanvasCtx?: LabToCanvasCtxOptions,
 *   labToCanvasOpts?: LabNaturalDimOpts,
 * }} options
 * @returns {Promise<HTMLCanvasElement>}
 */
export async function toCanvas(url, options) {
  let {
    width: optW,
    height: optH,
    scale = 1,
    dpr = 1,
    meta = {},
    backgroundColor,
    labToCanvasOpts = {},
  } = options
  const {
    backingRound = 'none',
    dprSource = 'harness',
    stylePixels = 'css',
    optDims = 'harness-css',
    ctxScale = true,
    outWFrom = 'inherit',
    outHFrom = 'inherit',
    suppressOptW = false,
    suppressOptH = false,
  } = labToCanvasOpts

  if (dprSource === 'device') {
    dpr = window.devicePixelRatio || 1
  }

  url = maybeConvertBoxShadowForSafari(url)

  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'
  img.crossOrigin = 'anonymous'
  img.src = url
  await img.decode()

  if (isSafari()) {
    img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
    document.body.appendChild(img)
    try {
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))
    } finally {
      try { img.remove() } catch { /* ok */ }
    }
  }

  const natW = img.naturalWidth
  const natH = img.naturalHeight

  const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta.h0) ? meta.h0 : natH

  if (optDims === 'natural') {
    optW = undefined
    optH = undefined
  } else if (optDims === 'harness-device') {
    if (Number.isFinite(optW)) optW = optW * dpr
    if (Number.isFinite(optH)) optH = optH * dpr
  }

  if (suppressOptW) optW = undefined
  if (suppressOptH) optH = undefined

  const hasW = Number.isFinite(optW)
  const hasH = Number.isFinite(optH)

  let { outW, outH } = resolveForcedOutDims({
    natW,
    natH,
    refW,
    refH,
    optW,
    optH,
    hasW,
    hasH,
    outWFrom,
    outHFrom,
  })

  outW = outW * scale
  outH = outH * scale

  const labCtx = resolveLabToCanvasCtx(options)

  const canvas = document.createElement('canvas')
  canvas.width = snapBackingPx(outW * dpr, backingRound)
  canvas.height = snapBackingPx(outH * dpr, backingRound)
  if (stylePixels === 'device') {
    canvas.style.width = `${outW * dpr}px`
    canvas.style.height = `${outH * dpr}px`
  } else {
    canvas.style.width = `${outW}px`
    canvas.style.height = `${outH}px`
  }

  const ctx = canvas.getContext(
    '2d',
    labCtx.willReadFrequently ? { willReadFrequently: true } : undefined,
  )
  if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)

  if (backgroundColor) {
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, outW, outH)
    ctx.restore()
  }

  applyLabToCanvasCtx(ctx, labCtx, dpr)
  ctx.drawImage(img, 0, 0, outW, outH)
  return canvas
}

// src/exporters/toCanvas.js
import {
  applyRasterOnlySvgPatch,
  resolveRasterSvgPatchId,
} from './rasterOnlySvgPatch.js'
import { isSafari } from '../utils/browser.js'
import { rasterInkAlignDestDy } from '../utils/inkMeta.js'

/** modern-screenshot drawImageInterval default (ms) — upstream structural default, not gate-tuned. */
const DECODE_SETTLE_INTERVAL_MS = 100

/**
 * Converts a data URL to a Canvas element.
 *
 * @param {string} url - The image data URL.
 * @param {{
 *   width?: number,
 *   height?: number,
 *   scale?: number,
 *   dpr?: number,
 *   meta?: {
 *     w0?: number,
 *     h0?: number,
 *     gbcrFracX?: number,
 *     gbcrFracY?: number,
 *     inkTopFracInBorder?: number,
 *     inkTopFracExpected?: number,
 *     inkRefBorderH?: number,
 *   },
 *   backgroundColor?: string,
 *   experimentalRasterDecodeSettle?: boolean
 *   experimentalRasterBackingCeil?: boolean
 *   experimentalRasterDoubleDecode?: boolean
 *   experimentalRasterCtxNoScale?: boolean
 *   experimentalRasterPreDecodeRaf?: boolean
 *   experimentalRasterNaturalDims?: boolean
 *   experimentalRasterDisableGbcrNudge?: boolean
 *   experimentalRasterSvgPatch?: import('./rasterOnlySvgPatch.js').ExperimentalRasterSvgPatch
 *   experimentalRasterInkAlign?: boolean
 *   experimentalRasterMetaInkAlign?: boolean
 * }} options - Rendering options.
 * @returns {Promise<HTMLCanvasElement>} Resolves with the rendered Canvas element.
 */
export async function toCanvas(url, options) {
  let {
    width: optW,
    height: optH,
    scale = 1,
    dpr = 1,
    meta = {},
    backgroundColor,
    experimentalRasterDecodeSettle = false,
    experimentalRasterBackingCeil = false,
    experimentalRasterDoubleDecode = false,
    experimentalRasterCtxNoScale = false,
    experimentalRasterPreDecodeRaf = false,
    experimentalRasterNaturalDims = false,
    experimentalRasterDisableGbcrNudge = false,
    experimentalRasterSvgPatch,
    experimentalRasterInkAlign = false,
    experimentalRasterMetaInkAlign = false,
  } = options

  const rasterInkAlign =
    experimentalRasterInkAlign === true ||
    experimentalRasterMetaInkAlign === true

  url = maybeConvertBoxShadowForSafari(url)
  url = maybeApplyExperimentalRasterSvgPatch(url, experimentalRasterSvgPatch, meta)

  const img = new Image()
  img.loading = 'eager'
  img.decoding = 'sync'

  // Only use anonymous CORS for external URLs. data: and blob: URLs
  // can cause tainting in some browsers if crossOrigin is set.
  if (url && !url.startsWith('data:') && !url.startsWith('blob:')) {
    img.crossOrigin = 'anonymous'
  }

  // experimentalRasterDecodeSettle: fonts.ready + decode retry/interval before drawImage.
  // Default off — validate via __localtests__/fo-experimental-flags-probe.mjs before promotion.
  if (experimentalRasterDecodeSettle) {
    try {
      await document.fonts?.ready
    } catch { /* ok */ }
  }

  img.src = url

  // experimentalRasterPreDecodeRaf: offscreen attach + 2× rAF before decode (wave-2; all browsers).
  let preDecodeRafDone = false
  if (experimentalRasterPreDecodeRaf) {
    img.style.cssText = 'position:fixed;left:-99999px;top:-99999px;pointer-events:none'
    document.body.appendChild(img)
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    } finally {
      try {
        img.remove()
      } catch { /* ok */ }
    }
    preDecodeRafDone = true
  }

  await decodeSvgImage(img, {
    decodeSettle: experimentalRasterDecodeSettle,
    doubleDecode: experimentalRasterDoubleDecode,
  })

  // 2) Safari/WebKit warmup: primes font and image decode pipeline.
  // Workaround for WebKit #219770 (img.onload fires before embedded font ready).
  // This ensures the first drawImage isn't blank.
  if (isSafari() && !preDecodeRafDone) {
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

  // Reference dimensions (usually the original element size)
  const refW = Number.isFinite(meta.w0) ? meta.w0 : natW
  const refH = Number.isFinite(meta.h0) ? meta.h0 : natH

  // Calculate output dimensions
  let outW, outH
  const hasW = Number.isFinite(optW)
  const hasH = Number.isFinite(optH)

  if (hasW && hasH) {
    outW = Math.max(1, optW)
    outH = Math.max(1, optH)
  } else if (hasW) {
    const k = optW / Math.max(1, refW)
    outW = optW
    outH = refH * k
  } else if (hasH) {
    const k = optH / Math.max(1, refH)
    outH = optH
    outW = refW * k
  } else {
    outW = natW
    outH = natH
  }

  outW = outW * scale
  outH = outH * scale

  // Strict integer pixel grid alignment for the backing store
  // experimentalRasterBackingCeil: Math.ceil(out*dpr) for backing store (lab w8-backing-ceil probe).
  // Default off — validate via __localtests__/fo-experimental-flags-probe.mjs before promotion.
  const backingRound = experimentalRasterBackingCeil ? Math.ceil : Math.round
  const physicalW = backingRound(outW * dpr)
  const physicalH = backingRound(outH * dpr)

  const canvas = document.createElement('canvas')
  canvas.width = physicalW
  canvas.height = physicalH
  canvas.style.width = `${outW}px`
  canvas.style.height = `${outH}px`

  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('[snapdom] 2d context unavailable')

  // experimentalRasterCtxNoScale: draw in backing-store device pixels (wave-2 lab w2-ctx-no-scale).
  const ctxScale = !experimentalRasterCtxNoScale
  if (ctxScale && dpr !== 1) ctx.scale(dpr, dpr)

  const paintW = ctxScale ? outW : physicalW
  const paintH = ctxScale ? outH : physicalH

  if (backgroundColor) {
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, paintW, paintH)
    ctx.restore()
  }

  // experimentalRasterNaturalDims: aspect-preserving contain using natural dimensions.
  // Default gbcr nudge (-gbcrFrac) when meta carries fractional GBCR; skip when
  // experimentalRasterDisableGbcrNudge. Validate via __localtests__/fo-tocanvas-only-flags-probe.mjs.
  const drawRect = computeRasterDrawRect(natW, natH, paintW, paintH, meta, refH, {
    naturalDims: experimentalRasterNaturalDims,
    disableGbcrNudge: experimentalRasterDisableGbcrNudge,
    inkAlign: rasterInkAlign,
  })
  if (drawRect.useNineArg) {
    ctx.drawImage(
      img,
      drawRect.sx,
      drawRect.sy,
      drawRect.sw,
      drawRect.sh,
      drawRect.dx,
      drawRect.dy,
      drawRect.dw,
      drawRect.dh,
    )
  } else if (drawRect.useDestNudge) {
    ctx.drawImage(img, drawRect.dx, drawRect.dy, paintW, paintH)
  } else {
    ctx.drawImage(img, 0, 0, paintW, paintH)
  }

  return canvas
}

/**
 * @param {number} natW
 * @param {number} natH
 * @param {number} paintW
 * @param {number} paintH
 * @param {object} meta
 * @param {number} refH
 * @param {{ naturalDims?: boolean, disableGbcrNudge?: boolean, inkAlign?: boolean }} opts
 */
function computeRasterDrawRect(natW, natH, paintW, paintH, meta, refH, opts = {}) {
  const nw = Math.max(1, natW)
  const nh = Math.max(1, natH)
  const gbcrActive =
    !opts.disableGbcrNudge &&
    Number.isFinite(meta?.gbcrFracX) &&
    Number.isFinite(meta?.gbcrFracY)

  let dx = 0
  let dy = 0
  let dw = paintW
  let dh = paintH

  if (opts.naturalDims) {
    const scale = Math.min(paintW / nw, paintH / nh)
    dw = nw * scale
    dh = nh * scale
    dx = (paintW - dw) / 2
    dy = (paintH - dh) / 2
  }

  if (gbcrActive) {
    dx -= meta.gbcrFracX
    dy -= meta.gbcrFracY
  }

  // experimentalRasterInkAlign: dest dy from capture Range vs cap-model fraction.
  if (opts.inkAlign) {
    dy += rasterInkAlignDestDy(meta, paintH, refH)
  }

  const useNineArg = opts.naturalDims || gbcrActive
  const useDestNudge = !useNineArg && (dx !== 0 || dy !== 0)
  return {
    useNineArg,
    useDestNudge,
    sx: 0,
    sy: 0,
    sw: nw,
    sh: nh,
    dx,
    dy,
    dw,
    dh,
  }
}

/**
 * Decode SVG data URL image; optional modern-screenshot-style retry / double-decode / settle.
 * @param {HTMLImageElement} img
 * @param {{ decodeSettle?: boolean, doubleDecode?: boolean }} [opts]
 */
async function decodeSvgImage(img, { decodeSettle = false, doubleDecode = false } = {}) {
  const attempts = decodeSettle ? 2 : 1
  for (let i = 0; i < attempts; i++) {
    try {
      await img.decode()
      break
    } catch (err) {
      if (!decodeSettle || i >= attempts - 1) throw err
      await new Promise((r) => setTimeout(r, DECODE_SETTLE_INTERVAL_MS))
    }
  }
  // experimentalRasterDoubleDecode: modern-screenshot drawImageInterval — decode twice with 100ms gap.
  if (doubleDecode) {
    await new Promise((r) => setTimeout(r, DECODE_SETTLE_INTERVAL_MS))
    await img.decode()
  }
  if (decodeSettle) {
    await new Promise((r) => setTimeout(r, DECODE_SETTLE_INTERVAL_MS))
  }
}

// ——— Safari Helpers ———

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
    let color = layer.replace(/-?\d+(?:\.\d+)?px/gi)
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
 * experimentalRasterSvgPatch: fork capture SVG string before decode only (serialized SVG unchanged).
 * @param {string} url
 * @param {string | undefined} patch
 * @param {object | undefined} meta
 */
function maybeApplyExperimentalRasterSvgPatch(url, patch, meta) {
  const labId = resolveRasterSvgPatchId(patch, meta)
  if (!labId || !isSvgDataURL(url)) return url
  try {
    const svgFork = applyRasterOnlySvgPatch(decodeSvgFromDataURL(url), labId, { meta })
    return encodeSvgToDataURL(svgFork)
  } catch {
    return url
  }
}

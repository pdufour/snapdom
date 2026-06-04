/**
 * Lab fork: fractional drawImage source rect (h2-frac-draw harness parity).
 * Opt in: rasterPatch: 'lab-toCanvas-frac' → __localtests__/fo-fix-toCanvas-frac-draw.js
 * Pair with radicalPatch math-floor-viewbox-stash-frac or h2-fo-percent-int-viewbox.
 * New drawImage matrix probes: tc-lab-di-* → fo-fix-toCanvas-custom-draw.js + lab-toCanvas.
 */
import { isSafari } from '../src/utils/browser.js'
import {
  computeLabDraw9Frac,
  computeLabDrawFit,
  drawImageLabFit,
} from './fo-fix-toCanvas-draw-fit.js'
import { parseH2ViewBoxFrac } from './fo-fix-monkeypatch.js'

/** @typedef {import('./fo-fix-toCanvas-draw-fit.js').LabDrawFitMode} LabDrawFitMode */
/** @typedef {import('./fo-fix-toCanvas-draw-fit.js').LabDraw9FracMode} LabDraw9FracMode */

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
 * @param {string} url
 * @param {{
 *   width?:number,
 *   height?:number,
 *   scale?:number,
 *   dpr?:number,
 *   meta?:object,
 *   backgroundColor?: string,
 *   useFracDraw?: boolean,
 *   labToCanvasOpts?: { drawFit?: LabDrawFitMode, draw9Frac?: LabDraw9FracMode },
 * }} options
 */
export async function toCanvas(url, options) {
  let {
    width: optW,
    height: optH,
    scale = 1,
    dpr = 1,
    meta = {},
    backgroundColor,
    useFracDraw = true,
    labToCanvasOpts = {},
  } = options
  const { drawFit = 'fill', draw9Frac } = labToCanvasOpts
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

  const canvas = document.createElement('canvas')
  canvas.width = outW * dpr
  canvas.height = outH * dpr
  canvas.style.width = `${outW}px`
  canvas.style.height = `${outH}px`

  const ctx = canvas.getContext('2d')
  if (dpr !== 1) ctx.scale(dpr, dpr)

  if (backgroundColor) {
    ctx.save()
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, outW, outH)
    ctx.restore()
  }

  const { fracX, fracY } = parseH2ViewBoxFrac(meta, url)
  const frac =
    useFracDraw && (fracX !== 0 || fracY !== 0) ? { fracX, fracY } : { fracX: 0, fracY: 0 }
  const fitRect = draw9Frac
    ? computeLabDraw9Frac(natW, natH, outW, outH, draw9Frac, frac)
    : computeLabDrawFit(natW, natH, outW, outH, drawFit, frac)
  drawImageLabFit(ctx, img, fitRect)
  return canvas
}

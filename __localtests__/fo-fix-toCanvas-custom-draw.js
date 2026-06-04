/**
 * Lab toCanvas drawImage customization — tc-lab-di-* recipes.
 * Opt in: rasterPatch `lab-toCanvas` + monkeypatch `tc-lab-di-NNN` (sets draw kind override).
 * Promote to fo-fix-toCanvas.js only after matrix validation.
 */

/**
 * NOTE: duplicated from fo-fix-monkeypatch.js to avoid a Node-only circular import
 * during shard validation (fo-fix-recipes.js top-level await loads all shards).
 * @param {string} dataUrl
 */
function svgFromDataUrl(dataUrl) {
  const prefix = 'data:image/svg+xml;charset=utf-8,'
  if (dataUrl.startsWith(prefix)) return decodeURIComponent(dataUrl.slice(prefix.length))
  const comma = dataUrl.indexOf(',')
  if (comma < 0) return dataUrl
  const meta = dataUrl.slice(0, comma)
  const body = dataUrl.slice(comma + 1)
  if (meta.includes(';base64')) return atob(body)
  return decodeURIComponent(body)
}

/**
 * Parse h2-1 fractional viewBox shift from meta or serialized SVG data attrs.
 * @param {object} [meta]
 * @param {string} [url]
 */
function parseH2ViewBoxFrac(meta, url) {
  if (meta && Number.isFinite(meta.fracX)) {
    return { fracX: meta.fracX, fracY: Number.isFinite(meta.fracY) ? meta.fracY : 0 }
  }
  let svg = ''
  if (typeof url === 'string' && url.startsWith('data:image/svg+xml')) {
    try {
      svg = svgFromDataUrl(url)
    } catch {
      svg = ''
    }
  }
  const fx = svg.match(/\bdata-h2-frac-x=["']([\d.]+)["']/i)?.[1]
  const fy = svg.match(/\bdata-h2-frac-y=["']([\d.]+)["']/i)?.[1]
  if (fx != null) return { fracX: parseFloat(fx) || 0, fracY: parseFloat(fy) || 0 }
  const vb = svg.match(/\bviewBox=["']([^"']+)["']/i)?.[1]
  if (vb) {
    const parts = vb.trim().split(/\s+/).map(Number)
    if (parts.length === 4) {
      return { fracX: parts[0] - Math.floor(parts[0]), fracY: parts[1] - Math.floor(parts[1]) }
    }
  }
  return { fracX: 0, fracY: 0 }
}

/** @typedef {typeof TC_LAB_DI_DRAW_KINDS[number]} LabCustomDrawKind */

/** @type {readonly LabCustomDrawKind[]} */
export const TC_LAB_DI_DRAW_KINDS = [
  'baseline',
  'round-all-coords',
  'floor-dest-9arg',
  'frac-dst-5',
  'frac-src-9',
  'frac-dst-9',
  'subpixel-destY-9',
  'two-stage',
  'supersample-2x',
  'image-bitmap',
  'offscreen-transfer',
  'frac-src-9-round-all',
]

/** @type {LabCustomDrawKind | null} */
let labDrawKindOverride = null

/** @param {LabCustomDrawKind | null} kind */
export function setLabDrawKindOverride(kind) {
  labDrawKindOverride = kind
}

export function clearLabDrawKindOverride() {
  labDrawKindOverride = null
}

/** @returns {LabCustomDrawKind | null} */
export function getLabDrawKindOverride() {
  return labDrawKindOverride
}

/** @param {number} n 1..60 */
export function tcLabDiPatchId(n) {
  return `tc-lab-di-${String(n).padStart(3, '0')}`
}

/** @param {number} n 1..60 */
export function drawKindForTcLabDiRecipe(n) {
  return TC_LAB_DI_DRAW_KINDS[(n - 1) % TC_LAB_DI_DRAW_KINDS.length]
}

/**
 * @param {number} n
 * @returns {Partial<import('./fo-fix-recipe-shared.js').FoFixRecipe>}
 */
export function preRasterExtraForTcLabDiRecipe(n) {
  const tier = Math.floor((n - 1) / TC_LAB_DI_DRAW_KINDS.length)
  switch (tier) {
    case 0:
      return {}
    case 1:
      return { radicalPatch: 'math-floor-viewbox-stash-frac' }
    case 2:
      return { svgRootRound: 'integer-viewbox' }
    case 3:
      return { radicalPatch: 'h2-fo-percent-int-viewbox' }
    case 4:
      return { inject: 'both', svgRootRound: 'int-floor' }
    default:
      return {}
  }
}

/** @param {number} n */
function roundN(n) {
  return Math.round(n)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} src
 * @param {{ fracX: number, fracY: number }} frac
 * @param {number} outW
 * @param {number} outH
 * @param {boolean} roundAll
 */
function drawFracSrc9(ctx, src, frac, outW, outH, roundAll) {
  const img = /** @type {HTMLImageElement} */ (src)
  const sw = img.naturalWidth || outW
  const sh = img.naturalHeight || outH
  let sx = frac.fracX
  let sy = frac.fracY
  let sWidth = sw - sx
  let sHeight = sh - sy
  let dx = 0
  let dy = 0
  let dWidth = outW
  let dHeight = outH
  if (roundAll) {
    sx = roundN(sx)
    sy = roundN(sy)
    sWidth = roundN(sWidth)
    sHeight = roundN(sHeight)
    dx = roundN(dx)
    dy = roundN(dy)
    dWidth = roundN(dWidth)
    dHeight = roundN(dHeight)
  }
  ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} src
 * @param {{ fracX: number, fracY: number }} frac
 * @param {number} outW
 * @param {number} outH
 * @param {boolean} roundAll
 */
function drawFracDst9(ctx, src, frac, outW, outH, roundAll) {
  const img = /** @type {HTMLImageElement} */ (src)
  const sw = img.naturalWidth || outW
  const sh = img.naturalHeight || outH
  let dx = frac.fracX
  let dy = frac.fracY
  let dWidth = outW
  let dHeight = outH
  if (roundAll) {
    dx = roundN(dx)
    dy = roundN(dy)
    dWidth = roundN(dWidth)
    dHeight = roundN(dHeight)
  }
  ctx.drawImage(img, 0, 0, sw, sh, dx, dy, dWidth, dHeight)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} src
 * @param {number} outW
 * @param {number} outH
 */
function drawTwoStage(ctx, src, outW, outH) {
  const stage = document.createElement('canvas')
  stage.width = ctx.canvas.width
  stage.height = ctx.canvas.height
  const sctx = stage.getContext('2d')
  if (!sctx) {
    ctx.drawImage(src, 0, 0, outW, outH)
    return
  }
  const t = ctx.getTransform?.()
  if (t) sctx.setTransform(t.a, t.b, t.c, t.d, t.e, t.f)
  sctx.drawImage(src, 0, 0, outW, outH)
  ctx.drawImage(stage, 0, 0, outW, outH)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} src
 * @param {number} outW
 * @param {number} outH
 * @param {number} mult
 */
function drawSupersample2x(ctx, src, outW, outH, mult = 2) {
  const hi = document.createElement('canvas')
  const canvas = ctx.canvas
  const cssW = parseFloat(canvas.style.width)
  const ratio = Number.isFinite(cssW) && cssW > 0 ? canvas.width / cssW : 1
  const drawW = outW * mult
  const drawH = outH * mult
  hi.width = Math.max(1, Math.round(drawW * ratio))
  hi.height = Math.max(1, Math.round(drawH * ratio))
  const hctx = hi.getContext('2d')
  if (!hctx) {
    ctx.drawImage(src, 0, 0, outW, outH)
    return
  }
  if (ratio !== 1) hctx.scale(ratio, ratio)
  hctx.drawImage(src, 0, 0, drawW, drawH)
  ctx.drawImage(hi, 0, 0, drawW, drawH, 0, 0, outW, outH)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLImageElement} img
 * @param {number} outW
 * @param {number} outH
 */
async function drawImageBitmapPath(ctx, img, outW, outH) {
  if (typeof createImageBitmap !== 'function') {
    ctx.drawImage(img, 0, 0, outW, outH)
    return
  }
  const bitmap = await createImageBitmap(img, { resizeQuality: 'high' })
  try {
    ctx.drawImage(bitmap, 0, 0, outW, outH)
  } finally {
    bitmap.close?.()
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} src
 * @param {number} outW
 * @param {number} outH
 */
function drawOffscreenTransfer(ctx, src, outW, outH) {
  if (typeof OffscreenCanvas === 'undefined') {
    ctx.drawImage(src, 0, 0, outW, outH)
    return
  }
  const off = new OffscreenCanvas(ctx.canvas.width, ctx.canvas.height)
  const octx = off.getContext('2d')
  if (!octx) {
    ctx.drawImage(src, 0, 0, outW, outH)
    return
  }
  const t = ctx.getTransform?.()
  if (t) octx.setTransform(t.a, t.b, t.c, t.d, t.e, t.f)
  octx.drawImage(src, 0, 0, outW, outH)
  const bmp = off.transferToImageBitmap()
  try {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(bmp, 0, 0)
  } finally {
    bmp.close?.()
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLImageElement} img
 * @param {number} outW
 * @param {number} outH
 */
function drawFloorDest9Arg(ctx, img, outW, outH) {
  const sw = img.naturalWidth || outW
  const sh = img.naturalHeight || outH
  const dw = Math.floor(outW)
  const dh = Math.floor(outH)
  ctx.drawImage(img, 0, 0, sw, sh, 0, 0, dw, dh)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {HTMLImageElement} img
 * @param {number} outW
 * @param {number} outH
 * @param {object} meta
 * @param {string} url
 * @param {LabCustomDrawKind} kind
 */
export async function applyLabCustomDrawImage(ctx, img, outW, outH, meta, url, kind) {
  const frac = parseH2ViewBoxFrac(meta, url)

  switch (kind) {
    case 'baseline':
      ctx.drawImage(img, 0, 0, outW, outH)
      break
    case 'round-all-coords': {
      const dw = roundN(outW)
      const dh = roundN(outH)
      ctx.drawImage(img, 0, 0, dw, dh)
      break
    }
    case 'floor-dest-9arg':
      drawFloorDest9Arg(ctx, img, outW, outH)
      break
    case 'frac-dst-5':
      if (frac.fracX !== 0 || frac.fracY !== 0) {
        ctx.drawImage(img, frac.fracX, frac.fracY, outW, outH)
      } else {
        ctx.drawImage(img, 0, 0, outW, outH)
      }
      break
    case 'frac-src-9':
      drawFracSrc9(ctx, img, frac, outW, outH, false)
      break
    case 'frac-dst-9':
      drawFracDst9(ctx, img, frac, outW, outH, false)
      break
    case 'subpixel-destY-9':
      drawFracDst9(ctx, img, frac, outW, outH, false)
      break
    case 'two-stage':
      drawTwoStage(ctx, img, outW, outH)
      break
    case 'supersample-2x':
      drawSupersample2x(ctx, img, outW, outH, 2)
      break
    case 'image-bitmap':
      await drawImageBitmapPath(ctx, img, outW, outH)
      break
    case 'offscreen-transfer':
      drawOffscreenTransfer(ctx, img, outW, outH)
      break
    case 'frac-src-9-round-all':
      drawFracSrc9(ctx, img, frac, outW, outH, true)
      break
    default:
      ctx.drawImage(img, 0, 0, outW, outH)
  }
}

/**
 * Register tc-lab-di-001..060 monkeypatches on the harness PATCHES map.
 * @param {Record<string, { install: (recipe?: import('./fo-fix-recipe-shared.js').FoFixRecipe) => void }>} patches
 * @param {(fn: () => void) => void} pushUninstall
 */
export function registerTcLabDiMonkeypatches(patches, pushUninstall) {
  for (let n = 1; n <= 60; n++) {
    const id = tcLabDiPatchId(n)
    const kind = drawKindForTcLabDiRecipe(n)
    patches[id] = {
      install() {
        setLabDrawKindOverride(kind)
        pushUninstall(() => clearLabDrawKindOverride())
      },
    }
  }
}

/**
 * Lab drawImage fit/contain/cover — structural ratios from natural vs outW/outH only.
 * Used by fo-fix-toCanvas.js, fo-fix-toCanvas-frac-draw.js, and wave5 draw9-frac recipes.
 */

/**
 * @typedef {typeof LAB_DRAW_FIT_MODES[number]} LabDrawFitMode
 */

/** @typedef {'floor' | 'round'} LabDrawFitSnap */

/**
 * Nine-arg drawImage rect: source (sx,sy,sw,sh) → dest (dx,dy,dw,dh).
 * @typedef {{ sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number }} LabDrawFitRect
 */

/**
 * @typedef {typeof LAB_DRAW9_FRAC_MODES[number]} LabDraw9FracMode
 */

/** Wave5: 9-arg drawImage with fractional sx/sy/sw/sh and dest offsets from viewBox frac stash. */
export const LAB_DRAW9_FRAC_MODES = /** @type {const} */ ([
  'd9-fill',
  'd9-5-dest',
  'd9-5-plain',
  'd9-src-xy-out',
  'd9-src-min',
  'd9-dest-xy',
  'd9-both-out',
  'd9-both-srcmin',
  'd9-src-floor',
  'd9-dest-floor',
  'd9-src-round',
  'd9-dest-neg',
  'd9-grid',
])

/** 30 unique fit modes — paired with lab-toCanvas + lab-toCanvas-frac (60 recipes). */
export const LAB_DRAW_FIT_MODES = /** @type {const} */ ([
  'fill',
  'contain-center',
  'contain-top',
  'contain-bottom',
  'contain-left',
  'contain-right',
  'contain-top-left',
  'contain-top-right',
  'contain-bottom-left',
  'contain-bottom-right',
  'cover-center',
  'cover-top',
  'cover-bottom',
  'cover-left',
  'cover-right',
  'cover-top-left',
  'cover-top-right',
  'cover-bottom-left',
  'cover-bottom-right',
  'width-fit-top',
  'width-fit-center',
  'width-fit-bottom',
  'height-fit-left',
  'height-fit-center',
  'height-fit-right',
  'contain-center-floor',
  'contain-center-round',
  'cover-center-floor',
  'cover-center-round',
  'native-center',
])

/**
 * @param {number} ow
 * @param {number} oh
 * @param {number} dw
 * @param {number} dh
 * @param {string} align
 */
function alignDestInBox(ow, oh, dw, dh, align) {
  let dx = (ow - dw) / 2
  let dy = (oh - dh) / 2
  if (align.includes('left')) dx = 0
  else if (align.includes('right')) dx = ow - dw
  if (align.includes('top')) dy = 0
  else if (align.includes('bottom')) dy = oh - dh
  return { dx, dy }
}

/**
 * @param {number} nw
 * @param {number} nh
 * @param {number} sw
 * @param {number} sh
 * @param {string} align
 */
function alignSrcInImage(nw, nh, sw, sh, align) {
  let sx = (nw - sw) / 2
  let sy = (nh - sh) / 2
  if (align.includes('left')) sx = 0
  else if (align.includes('right')) sx = nw - sw
  if (align.includes('top')) sy = 0
  else if (align.includes('bottom')) sy = nh - sh
  return { sx, sy }
}

/**
 * @param {number} v
 * @param {LabDrawFitSnap | undefined} snap
 */
function snapDim(v, snap) {
  if (snap === 'floor') return Math.max(1, Math.floor(v))
  if (snap === 'round') return Math.max(1, Math.round(v))
  return v
}

/**
 * @param {LabDrawFitMode} mode
 * @returns {{ kind: string, align: string, destSnap?: LabDrawFitSnap, srcSnap?: LabDrawFitSnap }}
 */
function parseDrawFitMode(mode) {
  if (mode === 'fill') return { kind: 'fill', align: 'center' }
  if (mode === 'native-center') return { kind: 'native', align: 'center' }

  const floor = mode.endsWith('-floor')
  const round = mode.endsWith('-round')
  const base = floor ? mode.slice(0, -6) : round ? mode.slice(0, -6) : mode

  if (base.startsWith('width-fit-')) {
    return { kind: 'width-fit', align: base.slice('width-fit-'.length), destSnap: floor ? 'floor' : round ? 'round' : undefined }
  }
  if (base.startsWith('height-fit-')) {
    return { kind: 'height-fit', align: base.slice('height-fit-'.length), destSnap: floor ? 'floor' : round ? 'round' : undefined }
  }
  if (base.startsWith('contain-')) {
    return {
      kind: 'contain',
      align: base.slice('contain-'.length),
      destSnap: floor ? 'floor' : round ? 'round' : undefined,
    }
  }
  if (base.startsWith('cover-')) {
    return {
      kind: 'cover',
      align: base.slice('cover-'.length),
      srcSnap: floor ? 'floor' : round ? 'round' : undefined,
    }
  }
  return { kind: 'fill', align: 'center' }
}

/**
 * @param {number} natW
 * @param {number} natH
 * @param {number} outW
 * @param {number} outH
 * @param {LabDrawFitMode} [mode='fill']
 * @param {{ fracX?: number, fracY?: number }} [opts]
 * @returns {LabDrawFitRect}
 */
export function computeLabDrawFit(natW, natH, outW, outH, mode = 'fill', opts = {}) {
  const nw = Math.max(1, natW)
  const nh = Math.max(1, natH)
  const ow = Math.max(1, outW)
  const oh = Math.max(1, outH)
  const fracX = opts.fracX ?? 0
  const fracY = opts.fracY ?? 0

  const parsed = parseDrawFitMode(mode)
  const { kind, align, destSnap, srcSnap } = parsed

  if (kind === 'fill') {
    return { sx: fracX, sy: fracY, sw: nw, sh: nh, dx: 0, dy: 0, dw: ow, dh: oh }
  }

  if (kind === 'native') {
    const dw = nw
    const dh = nh
    const { dx, dy } = alignDestInBox(ow, oh, dw, dh, align)
    return { sx: fracX, sy: fracY, sw: nw, sh: nh, dx, dy, dw, dh }
  }

  if (kind === 'contain') {
    const scale = Math.min(ow / nw, oh / nh)
    let dw = snapDim(nw * scale, destSnap)
    let dh = snapDim(nh * scale, destSnap)
    const { dx, dy } = alignDestInBox(ow, oh, dw, dh, align)
    return { sx: fracX, sy: fracY, sw: nw, sh: nh, dx, dy, dw, dh }
  }

  if (kind === 'cover') {
    const scale = Math.max(ow / nw, oh / nh)
    let sw = snapDim(ow / scale, srcSnap)
    let sh = snapDim(oh / scale, srcSnap)
    const { sx, sy } = alignSrcInImage(nw, nh, sw, sh, align)
    return { sx: sx + fracX, sy: sy + fracY, sw, sh, dx: 0, dy: 0, dw: ow, dh: oh }
  }

  if (kind === 'width-fit') {
    const scale = ow / nw
    let dw = ow
    let dh = snapDim(nh * scale, destSnap)
    const { dx, dy } = alignDestInBox(ow, oh, dw, dh, align)
    return { sx: fracX, sy: fracY, sw: nw, sh: nh, dx, dy, dw, dh }
  }

  if (kind === 'height-fit') {
    const scale = oh / nh
    let dw = snapDim(nw * scale, destSnap)
    let dh = oh
    const { dx, dy } = alignDestInBox(ow, oh, dw, dh, align)
    return { sx: fracX, sy: fracY, sw: nw, sh: nh, dx, dy, dw, dh }
  }

  return { sx: fracX, sy: fracY, sw: nw, sh: nh, dx: 0, dy: 0, dw: ow, dh: oh }
}

/**
 * Nine-arg drawImage rects driven by viewBox fractional stash (data-h2-frac-* / meta.fracX).
 * @param {number} natW
 * @param {number} natH
 * @param {number} outW
 * @param {number} outH
 * @param {LabDraw9FracMode} mode
 * @param {{ fracX?: number, fracY?: number }} [opts]
 * @returns {LabDrawFitRect & { arity5?: boolean }}
 */
export function computeLabDraw9Frac(natW, natH, outW, outH, mode, opts = {}) {
  const nw = Math.max(1, natW)
  const nh = Math.max(1, natH)
  const ow = Math.max(1, outW)
  const oh = Math.max(1, outH)
  const fx = opts.fracX ?? 0
  const fy = opts.fracY ?? 0

  /** @param {number} v */
  const fl = (v) => Math.max(0, v)
  /** @param {number} v */
  const f1 = (v) => Math.max(1, Math.floor(v))
  /** @param {number} v */
  const r1 = (v) => Math.max(1, Math.round(v))

  switch (mode) {
    case 'd9-5-dest':
      return { sx: 0, sy: 0, sw: nw, sh: nh, dx: fx, dy: fy, dw: ow, dh: oh, arity5: true }
    case 'd9-5-plain':
      return { sx: 0, sy: 0, sw: nw, sh: nh, dx: 0, dy: 0, dw: ow, dh: oh, arity5: true }
    case 'd9-src-xy-out':
      return { sx: fx, sy: fy, sw: ow, sh: oh, dx: 0, dy: 0, dw: ow, dh: oh }
    case 'd9-src-min':
      return { sx: fx, sy: fy, sw: fl(nw - fx), sh: fl(nh - fy), dx: 0, dy: 0, dw: ow, dh: oh }
    case 'd9-dest-xy':
      return { sx: 0, sy: 0, sw: nw, sh: nh, dx: fx, dy: fy, dw: ow, dh: oh }
    case 'd9-both-out':
      return { sx: fx, sy: fy, sw: ow, sh: oh, dx: fx, dy: fy, dw: ow, dh: oh }
    case 'd9-both-srcmin':
      return { sx: fx, sy: fy, sw: fl(nw - fx), sh: fl(nh - fy), dx: fx, dy: fy, dw: ow, dh: oh }
    case 'd9-src-floor':
      return {
        sx: f1(fx),
        sy: f1(fy),
        sw: f1(fl(nw - fx)),
        sh: f1(fl(nh - fy)),
        dx: 0,
        dy: 0,
        dw: ow,
        dh: oh,
      }
    case 'd9-dest-floor':
      return {
        sx: 0,
        sy: 0,
        sw: nw,
        sh: nh,
        dx: f1(fx),
        dy: f1(fy),
        dw: f1(ow),
        dh: f1(oh),
      }
    case 'd9-src-round':
      return {
        sx: r1(fx),
        sy: r1(fy),
        sw: r1(fl(nw - fx)),
        sh: r1(fl(nh - fy)),
        dx: 0,
        dy: 0,
        dw: ow,
        dh: oh,
      }
    case 'd9-dest-neg':
      return { sx: 0, sy: 0, sw: nw, sh: nh, dx: -fx, dy: -fy, dw: ow, dh: oh }
    case 'd9-grid':
      return {
        sx: fx,
        sy: fy,
        sw: fl(ow - fx),
        sh: fl(oh - fy),
        dx: fx,
        dy: fy,
        dw: ow,
        dh: oh,
      }
    case 'd9-fill':
    default:
      return { sx: fx, sy: fy, sw: nw, sh: nh, dx: 0, dy: 0, dw: ow, dh: oh }
  }
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {CanvasImageSource} img
 * @param {LabDrawFitRect & { arity5?: boolean }} r
 */
export function drawImageLabFit(ctx, img, r) {
  if (r.arity5) {
    ctx.drawImage(img, r.dx, r.dy, r.dw, r.dh)
    return
  }
  ctx.drawImage(img, r.sx, r.sy, r.sw, r.sh, r.dx, r.dy, r.dw, r.dh)
}

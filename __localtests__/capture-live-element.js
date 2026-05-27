/**
 * Live column for pixel diff: real tab paint via getDisplayMedia only.
 * Clips to the target element (CropTarget / RestrictionTarget, or viewport math).
 */

/**
 * @returns {boolean}
 */
export function liveCaptureSupported() {
  return !!navigator.mediaDevices?.getDisplayMedia
}

/**
 * @param {HTMLCanvasElement} canvas
 * @returns {boolean}
 */
function canvasHasInk(canvas) {
  if (canvas.width < 1 || canvas.height < 1) return false
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const samples = [
    [0, 0],
    [Math.floor(canvas.width / 2), Math.floor(canvas.height / 3)],
    [Math.max(0, canvas.width - 64), Math.max(0, canvas.height - 64)],
  ]
  for (const [x, y] of samples) {
    const w = Math.min(48, canvas.width - x)
    const h = Math.min(48, canvas.height - y)
    if (w < 1 || h < 1) continue
    const data = ctx.getImageData(x, y, w, h).data
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 8) return true
    }
  }
  return false
}

/**
 * @param {HTMLVideoElement} video
 * @param {number} [timeoutMs]
 */
async function waitForVideoFrame(video, timeoutMs = 15000) {
  const start = performance.now()
  while (performance.now() - start < timeoutMs) {
    if (video.videoWidth > 0 && video.readyState >= 2) {
      if (typeof video.requestVideoFrameCallback === 'function') {
        await new Promise((resolve) => video.requestVideoFrameCallback(() => resolve()))
      } else {
        await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
      }
      return
    }
    await new Promise((r) => requestAnimationFrame(r))
  }
  throw new Error('Tab capture timed out waiting for a video frame')
}

/**
 * @param {MediaStreamTrack} track
 * @param {Element} el
 * @returns {Promise<'restrict'|'crop'|'none'>}
 */
async function applyElementCrop(track, el) {
  const RestrictionTarget = globalThis.RestrictionTarget
  const CropTarget = globalThis.CropTarget

  if (CropTarget?.fromElement && typeof track.cropTo === 'function') {
    try {
      await track.cropTo(await CropTarget.fromElement(el))
      return 'crop'
    } catch (err) {
      console.warn('[capture-live-element] cropTo failed:', err)
    }
  }
  if (RestrictionTarget?.fromElement && typeof track.restrictTo === 'function') {
    try {
      await track.restrictTo(await RestrictionTarget.fromElement(el))
      return 'restrict'
    } catch (err) {
      console.warn('[capture-live-element] restrictTo failed:', err)
    }
  }
  return 'none'
}

/**
 * @param {HTMLVideoElement} video
 * @param {Element} el
 * @returns {{ sx: number, sy: number, sw: number, sh: number }}
 */
function viewportCropRect(video, el) {
  const rect = el.getBoundingClientRect()
  const vw = window.innerWidth
  const vh = window.innerHeight
  const scaleX = video.videoWidth / vw
  const scaleY = video.videoHeight / vh
  return {
    sx: Math.max(0, Math.round(rect.left * scaleX)),
    sy: Math.max(0, Math.round(rect.top * scaleY)),
    sw: Math.max(1, Math.round(rect.width * scaleX)),
    sh: Math.max(1, Math.round(rect.height * scaleY)),
  }
}

/**
 * @param {HTMLVideoElement} video
 * @param {Element} el
 * @param {'restrict'|'crop'|'none'} cropMode
 * @param {number} dpr
 * @param {{ width?: number, height?: number }|null} outSize
 */
function frameToCanvas(video, el, cropMode, dpr, outSize) {
  const rect = el.getBoundingClientRect()
  const w = outSize?.width ?? Math.round(rect.width * dpr)
  const h = outSize?.height ?? Math.round(rect.height * dpr)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  if (cropMode === 'none') {
    const { sx, sy, sw, sh } = viewportCropRect(video, el)
    ctx.drawImage(video, sx, sy, sw, sh, 0, 0, w, h)
  } else {
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, w, h)
  }
  return canvas
}

/**
 * @param {Element} el
 * @param {number} dpr
 * @param {{ width?: number, height?: number }|null} outSize
 */
async function captureViaDisplayMedia(el, dpr, outSize) {
  if (!navigator.mediaDevices?.getDisplayMedia) {
    throw new Error('getDisplayMedia is not available (use HTTPS or localhost).')
  }

  /** @type {DisplayMediaStreamOptions} */
  const displayOpts = {
    video: { displaySurface: 'browser' },
    preferCurrentTab: true,
    selfBrowserSurface: 'include',
  }

  const stream = await navigator.mediaDevices.getDisplayMedia(displayOpts)
  const [track] = stream.getVideoTracks()
  if (!track) {
    for (const t of stream.getTracks()) t.stop()
    throw new Error('No video track in tab capture.')
  }

  try {
    const cropMode = await applyElementCrop(track, el)
    const video = document.createElement('video')
    video.muted = true
    video.playsInline = true
    video.srcObject = stream
    await video.play()
    await waitForVideoFrame(video)
    if (cropMode !== 'none') {
      await new Promise((r) => setTimeout(r, 150))
      await waitForVideoFrame(video)
    }

    const canvas = frameToCanvas(video, el, cropMode, dpr, outSize)
    if (!canvasHasInk(canvas)) {
      console.warn('[capture-live-element] tab frame looks blank; cropMode=', cropMode, {
        videoW: video.videoWidth,
        videoH: video.videoHeight,
        outW: canvas.width,
        outH: canvas.height,
      })
    }
    return canvas
  } finally {
    for (const t of stream.getTracks()) t.stop()
  }
}

/**
 * Two tab frames in one share session — matches Space toggle (live DOM, then canvas overlay).
 * @param {Element} el
 * @param {{ dpr?: number, outputWidth?: number, outputHeight?: number, beforeLive?: () => Promise<void>, beforeCap?: () => Promise<void> }} opts
 */
export async function captureTogglePair(el, opts = {}) {
  if (!navigator.mediaDevices?.getDisplayMedia) {
    throw new Error('getDisplayMedia is not available (use HTTPS or localhost).')
  }

  const dpr = opts.dpr ?? 1
  const outSize =
    opts.outputWidth && opts.outputHeight
      ? { width: opts.outputWidth, height: opts.outputHeight }
      : null

  /** @type {DisplayMediaStreamOptions} */
  const displayOpts = {
    video: { displaySurface: 'browser' },
    preferCurrentTab: true,
    selfBrowserSurface: 'include',
  }

  const stream = await navigator.mediaDevices.getDisplayMedia(displayOpts)
  const [track] = stream.getVideoTracks()
  if (!track) {
    for (const t of stream.getTracks()) t.stop()
    throw new Error('No video track in tab capture.')
  }

  try {
    const cropMode = await applyElementCrop(track, el)
    const video = document.createElement('video')
    video.muted = true
    video.playsInline = true
    video.srcObject = stream
    await video.play()
    await waitForVideoFrame(video)
    if (cropMode !== 'none') {
      await new Promise((r) => setTimeout(r, 150))
      await waitForVideoFrame(video)
    }

    if (opts.beforeLive) await opts.beforeLive()
    await waitForVideoFrame(video)
    const liveCanvas = frameToCanvas(video, el, cropMode, dpr, outSize)

    if (opts.beforeCap) await opts.beforeCap()
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))
    await waitForVideoFrame(video)
    const capCanvas = frameToCanvas(video, el, cropMode, dpr, outSize)

    return { liveCanvas, capCanvas, method: 'displayMedia' }
  } finally {
    for (const t of stream.getTracks()) t.stop()
  }
}

/**
 * @param {Element} el
 * @param {{ dpr?: number, requireDisplayMedia?: boolean, outputWidth?: number, outputHeight?: number }} [opts]
 */
export async function captureLiveElement(el, opts = {}) {
  const dpr = opts.dpr ?? 1
  const requireDisplay = opts.requireDisplayMedia !== false
  const outSize =
    opts.outputWidth && opts.outputHeight
      ? { width: opts.outputWidth, height: opts.outputHeight }
      : null

  if (!liveCaptureSupported()) {
    throw new Error(
      'Tab capture is not supported here. Open this page on Chrome/Edge over localhost or HTTPS.',
    )
  }

  try {
    const canvas = await captureViaDisplayMedia(el, dpr, outSize)
    return { canvas, method: 'displayMedia' }
  } catch (err) {
    if (requireDisplay) {
      if (err?.name === 'NotAllowedError') {
        throw new Error(
          'Tab capture was blocked or cancelled. Click Pixel diff again and choose “This tab” / “Chrome tab”.',
          { cause: err },
        )
      }
      throw err
    }
    throw err
  }
}

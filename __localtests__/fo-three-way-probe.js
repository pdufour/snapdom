/**
 * Three-way cap / ink row probes (checkout debug). Minimal implementation for playground imports.
 */
import {
  compareLiveCanvasCapInk,
  measureCapInk,
  measureCanvasInkRowProfile,
} from '../__tests__/helpers/svgLiveCompare.js'

function landmarkRect(root, el) {
  const rootRect = root.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  return {
    left: elRect.left - rootRect.left,
    top: elRect.top - rootRect.top,
    width: elRect.width,
    height: elRect.height,
  }
}

export async function buildThreeWayCapCompare(root, svgMarkup, el, dpr = 1) {
  void svgMarkup
  const live = measureCapInk(el, root)
  return {
    live,
    svg: null,
    canvas: compareLiveCanvasCapInk(root, null, el, dpr),
  }
}

export async function buildThreeWayInkRowScan(root, svgMarkup, el, dpr = 1) {
  void svgMarkup
  const region = landmarkRect(root, el)
  return { region, rows: [] }
}

export function buildSvgFromLiveRoot(root) {
  void root
  return null
}

/**
 * Shared hand-built FO probe + variant ladder for fo-minimal-repro.html.
 * Investigation only — no product capture.
 */
import {
  compareThreeWayInk,
  rasterSvgUrl,
} from './fo-fix-lab-runner.js'

/** Styles mirrored from fo-minimal-repro.html (embedded in FO for hand-built path). */
export const FIXTURE_CSS = `
* { box-sizing: border-box; }
#capture-target {
  width: 500px;
  font: 600 16px/1.35 system-ui, -apple-system, sans-serif;
  background: #fff;
  border: 1px solid #e2e8f0;
}
#capture-target .row {
  display: flex;
  align-items: stretch;
  min-height: 48px;
}
#capture-target .row a {
  display: flex;
  align-items: center;
  padding: 0 12px;
  text-decoration: none;
  color: #111;
}
`

/**
 * Smallest self-contained FO+flex+16px/1.35 text (all inline styles, no class sheet).
 * @param {number} cssW content width inside border box
 * @param {number} cssH outer height
 */
export function buildStaticMinimalFoSvg(cssW, cssH) {
  const w = Number(cssW) || 492
  const h = Number(cssH) || 50
  const shell =
    'margin:0;padding:0;box-sizing:border-box;' +
    `width:${w}px;font:600 16px/1.35 system-ui,-apple-system,sans-serif;` +
    'background:#fff;border:1px solid #e2e8f0'
  const row = 'display:flex;align-items:stretch;min-height:48px;box-sizing:border-box'
  const link =
    'display:flex;align-items:center;padding:0 12px;text-decoration:none;color:#111;box-sizing:border-box'
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="${shell}">` +
    `<div style="${row}"><a href="#" style="${link}">Home</a></div>` +
    `</div></foreignObject></svg>`
  )
}

/** Progressive simplification ladder (largest → smallest). */
export const VARIANTS = [
  {
    id: 'mini-nav-2link',
    description: 'Reference mini checkout nav (500×48, two links)',
    html:
      '<nav class="row" aria-label="Mini nav">' +
      '<a href="#">Home</a><a href="#">Products</a></nav>',
    svgMode: 'fixture-css-outerHTML',
  },
  {
    id: 'static-inline-flex',
    description: 'Static inline FO SVG — smallest hand-built (no class sheet, no snapdom)',
    html: '<div class="row"><a href="#">Home</a></div>',
    svgMode: 'static-minimal',
  },
  {
    id: 'single-link-stretch',
    description: 'One flex row + one stretched link (fixture CSS + outerHTML)',
    html: '<div class="row"><a href="#">Home</a></div>',
    svgMode: 'fixture-css-outerHTML',
  },
  {
    id: 'no-min-height',
    description: 'Drop min-height:48px on flex row',
    html:
      '<div class="row" style="min-height:unset"><a href="#">Home</a></div>',
    svgMode: 'fixture-css-outerHTML',
  },
  {
    id: 'no-anchor-padding',
    description: 'Drop anchor horizontal padding',
    html:
      '<div class="row"><a href="#" style="padding:0">Home</a></div>',
    svgMode: 'fixture-css-outerHTML',
  },
  {
    id: 'baseline-align',
    description: 'align-items:baseline on flex row (not stretch)',
    html:
      '<div class="row" style="align-items:baseline"><a href="#">Home</a></div>',
    svgMode: 'fixture-css-outerHTML',
  },
  {
    id: 'bare-text-in-flex',
    description: 'Text leaf directly in flex row (no anchor wrapper)',
    html: '<div class="row"><span>Home</span></div>',
    svgMode: 'fixture-css-outerHTML',
  },
]

/** @param {{ liveVsSvgTopPx?: number | null, liveVsCanvasTopPx?: number | null }} ink */
export function isBitmapOnlyDrift(ink) {
  const svg = ink?.liveVsSvgTopPx ?? 0
  const canvas = ink?.liveVsCanvasTopPx ?? 0
  return Math.abs(svg) < 0.35 && Math.abs(canvas) > 1.5
}

/**
 * Hand-built SVG: fixture CSS + #capture-target outerHTML inside foreignObject.
 * No snapdom serialization — isolates FO layout + raster from capture pipeline.
 * @param {HTMLElement} root #capture-target
 * @param {number} cssW
 * @param {number} cssH
 */
export function buildHandBuiltFoSvg(root, cssW, cssH) {
  const w = Number(cssW) || 1
  const h = Number(cssH) || 1
  const body = `<style>${FIXTURE_CSS}</style>` + root.outerHTML
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">` +
    `<foreignObject width="100%" height="100%">` +
    `<div xmlns="http://www.w3.org/1999/xhtml" style="margin:0;padding:0">` +
    body +
    `</div></foreignObject></svg>`
  )
}

/**
 * Three-way ink for hand-built FO path: live DOM, inline FO SVG, FO→canvas raster.
 * @param {HTMLElement} root
 * @param {Element} el
 * @param {string} landmark
 * @param {number} dpr
 * @param {number} scale
 */
/**
 * @param {HTMLElement} root
 * @param {Element} el
 * @param {string} landmark
 * @param {number} dpr
 * @param {number} scale
 * @param {{ svgMode?: 'fixture-css-outerHTML' | 'static-minimal', svgText?: string }} [opts]
 */
export async function probeHandBuiltFoPath(root, el, landmark, dpr, scale, opts = {}) {
  const cssW = root.offsetWidth || root.getBoundingClientRect().width
  const cssH = root.offsetHeight || root.getBoundingClientRect().height
  const fixtureDims = { cssW: cssW * scale, cssH: cssH * scale }

  const svgText =
    opts.svgText ??
    (opts.svgMode === 'static-minimal'
      ? buildStaticMinimalFoSvg(fixtureDims.cssW, fixtureDims.cssH)
      : buildHandBuiltFoSvg(root, fixtureDims.cssW, fixtureDims.cssH))

  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`
  const canvas = await rasterSvgUrl(dataUrl, {
    width: fixtureDims.cssW,
    height: fixtureDims.cssH,
    scale: 1,
    dpr,
    rasterPatch: 'none',
  })

  const cmp = compareThreeWayInk(root, canvas, svgText, el, dpr, fixtureDims)
  return {
    svgText,
    canvas,
    cmp,
    fixtureDims,
    landmark,
    svgMode: opts.svgMode ?? (opts.svgText ? 'custom' : 'fixture-css-outerHTML'),
  }
}

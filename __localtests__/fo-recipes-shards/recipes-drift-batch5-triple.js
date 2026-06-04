/**
 * Drift batch 5 — 40 fresh orthogonal triple stacks (drift-batch5-001..040).
 * Stacks registered decode mp (w9/w10/core) + w7/drift-wave rfork + capture CSS/radical.
 * Rank: |svgΔ| + |canvasΔ| + |svg−canvas| via fo-drift-batch5-triple-matrix.mjs
 *
 *   npm run debug:fo-drift-batch5-triple
 */
import {
  FO_BASELINE_CSS,
  FO_TEXT_LEAF_SINGLE_LINE,
  H2_RASTER_NORMALIZE_CSS,
} from '../fo-fix-recipes-constants.js'

const CAPTURE_LEADING_TRIM_BOTH_EDGES =
  'foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}'

const CAPTURE_INLINE_BLOCK_LINEBOX_LEAF =
  FO_TEXT_LEAF_SINGLE_LINE +
  '{display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}'

const CAPTURE_LH_NORMAL_IMPORTANT =
  FO_TEXT_LEAF_SINGLE_LINE + '{line-height:normal!important}'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}' +
  'foreignObject *{box-sizing:border-box!important}'

const W7_META = {
  rasterOnlySvgPatch: 'fo-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_DPR = {
  rasterOnlySvgPatch: 'fo-y-half-leading-dpr-root-meta',
  dprScaledSvgRootDraw: true,
  disableGbcrFracNudge: true,
}

const W7_LEAF = {
  rasterOnlySvgPatch: 'text-leaf-translate-y-half-leading-meta',
  disableGbcrFracNudge: true,
}

const W7_TRIM = {
  rasterOnlySvgPatch: 'leading-trim-text-box-leaf',
  disableGbcrFracNudge: true,
}

const W7_INLINE = {
  rasterOnlySvgPatch: 'text-leaf-inline-block-linebox',
  disableGbcrFracNudge: true,
}

const W7_OVERFLOW = {
  rasterOnlySvgPatch: 'fo-box-linepx-overflow',
  disableGbcrFracNudge: true,
}

const W7_FLEX = {
  rasterOnlySvgPatch: 'flex-container-flex-start',
  disableGbcrFracNudge: true,
}

const W7_COMBO = {
  rasterOnlySvgPatch: 'combo-fo-y-half-leading-trim-text-box',
  disableGbcrFracNudge: true,
}

/** @type {{ lane: string, label: string, idea: string, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> & { css?: string } }[]} */
const SPECS = [
  {
    lane: 'w9-reset-xform-settle-w7',
    label: 'w9-reset-xform-settle-w7',
    idea: 'w9-mp-025 resetTransform + decodeSettle + fo-y-half-leading-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "tc-lab-w9-mp-025",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-meta",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'w10-backing-floor-interval-dpr',
    label: 'w10-backing-floor-interval-dpr',
    idea: 'w10-mp-020 canvas backing floor + decode-interval + w7 dpr root',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "decode-interval",
      "monkeypatch": "tc-lab-w10-mp-020",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-dpr-root-meta",
        "dprScaledSvgRootDraw": true,
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w10-supersample-double-leaf',
    label: 'w10-supersample-double-leaf',
    idea: 'w10-mp-028 supersample downscale + double-decode + text-leaf translateY',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "double-decode",
      "monkeypatch": "tc-lab-w10-mp-028",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-translate-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w9-h2-frac-fonts-ready',
    label: 'w9-h2-frac-fonts-ready',
    idea: 'w9-mp-017 h2 frac draw + fonts-ready + leading-trim-text-box-leaf rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "fonts-ready",
      "monkeypatch": "tc-lab-w9-mp-017",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "leading-trim-text-box-leaf",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w10-two-stage-settle-inline',
    label: 'w10-two-stage-settle-inline',
    idea: 'w10-mp-027 two-stage draw + decodeSettle + inline-block linebox rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "tc-lab-w10-mp-027",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-inline-block-linebox",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'w10-cib-pixelated-100ms',
    label: 'w10-cib-pixelated-100ms',
    idea: 'w10-mp-024 CIB pixelated + lab-decode-100ms + fo-box-linepx-overflow rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-decode-100ms",
      "monkeypatch": "tc-lab-w10-mp-024",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-box-linepx-overflow",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w9-device-grid-w7-flex',
    label: 'w9-device-grid-w7-flex',
    idea: 'w9-mp-016 device-grid draw + device-grid-floor raster + flex-container-flex-start rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "device-grid-floor",
      "monkeypatch": "tc-lab-w9-mp-016",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "flex-container-flex-start",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w9-safari-raf-trim-combo',
    label: 'w9-safari-raf-trim-combo',
    idea: 'w9-mp-010 safari raf + decode-interval-raf + combo trim+w7 + leading-trim capture',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}",
      "rasterPatch": "decode-interval-raf",
      "monkeypatch": "tc-lab-w9-mp-010",
      "harnessSnapdom": {
        "experimentalFoLeadingTrim": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "combo-fo-y-half-leading-trim-text-box",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w9-backing-ceil-settle-w7',
    label: 'w9-backing-ceil-settle-w7',
    idea: 'w9-mp-012 canvas backing ceil + decodeSettle + fo-y-half-leading-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "tc-lab-w9-mp-012",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-meta",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'w10-backing-round-interval-dpr',
    label: 'w10-backing-round-interval-dpr',
    idea: 'w10-mp-021 backing round + decode-interval + fo-y-half-leading-dpr-root-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "decode-interval",
      "monkeypatch": "tc-lab-w10-mp-021",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-dpr-root-meta",
        "dprScaledSvgRootDraw": true,
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w9-round-all-double-leaf',
    label: 'w9-round-all-double-leaf',
    idea: 'w9-mp-001 drawImage round-all + double-decode + text-leaf translateY',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "double-decode",
      "monkeypatch": "tc-lab-w9-mp-001",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-translate-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w10-draw-round-fonts-trim',
    label: 'w10-draw-round-fonts-trim',
    idea: 'w10-mp-008 round-all + fonts-ready-interval + leading-trim-text-box-leaf rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "fonts-ready-interval",
      "monkeypatch": "tc-lab-w10-mp-008",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "leading-trim-text-box-leaf",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'h2-internal-star-settle-inline',
    label: 'h2-internal-star-settle-inline',
    idea: 'h2-fo-internal-star-capture + decodeSettle + text-leaf-inline-block-linebox rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "h2-fo-internal-star-capture",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-inline-block-linebox",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'h2-container-reset-interval-overflow',
    label: 'h2-container-reset-interval-overflow',
    idea: 'h2-container-reset-capture + decode-interval + fo-box-linepx-overflow rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "decode-interval",
      "monkeypatch": "h2-container-reset-capture",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-box-linepx-overflow",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'h2-full-container-double-flex',
    label: 'h2-full-container-double-flex',
    idea: 'h2-full-plus-container-capture + double-decode + flex-container-flex-start rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "double-decode",
      "monkeypatch": "h2-full-plus-container-capture",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "flex-container-flex-start",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'h2-raster-norm-100ms-combo',
    label: 'h2-raster-norm-100ms-combo',
    idea: 'h2-raster-normalize-capture + lab-decode-100ms + combo trim+w7 rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-decode-100ms",
      "monkeypatch": "h2-raster-normalize-capture",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "combo-fo-y-half-leading-trim-text-box",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'image-decode-twice-200ms-w7',
    label: 'image-decode-twice-200ms-w7',
    idea: 'image-decode-twice + lab-decode-200ms + fo-y-half-leading-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-decode-200ms",
      "monkeypatch": "image-decode-twice",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'fonts-ready-delay-settle-dpr',
    label: 'fonts-ready-delay-settle-dpr',
    idea: 'fonts-ready-delay + decodeSettle + fo-y-half-leading-dpr-root-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "fonts-ready-delay",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-dpr-root-meta",
        "dprScaledSvgRootDraw": true,
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'raf-before-draw-triple-leaf',
    label: 'raf-before-draw-triple-leaf',
    idea: 'raf-before-draw + triple-decode + text-leaf translateY half-leading',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "triple-decode",
      "monkeypatch": "raf-before-draw",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-translate-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'measureText-prime-blob-trim',
    label: 'measureText-prime-blob-trim',
    idea: 'measureText-prime + blob-url-decode-interval + leading-trim-text-box-leaf rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "blob-url-decode-interval",
      "monkeypatch": "measureText-prime",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "leading-trim-text-box-leaf",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'cib-high-offscreen-inline',
    label: 'cib-high-offscreen-inline',
    idea: 'createImageBitmap-high + offscreen raster + text-leaf-inline-block-linebox rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "offscreen",
      "monkeypatch": "createImageBitmap-high",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-inline-block-linebox",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'drawImage-wrap-double-raf-overflow',
    label: 'drawImage-wrap-double-raf-overflow',
    idea: 'drawImage-wrap + double-raf + fo-box-linepx-overflow rfork',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "double-raf",
      "monkeypatch": "drawImage-wrap",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-box-linepx-overflow",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'decode-wrap-int-vb-settle',
    label: 'decode-wrap-int-vb-settle',
    idea: 'decode-wrap + integer-viewbox + decodeSettle + fo-y-half-leading-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "decode-wrap",
      "svgRootRound": "integer-viewbox",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-meta",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'decode-interval-wrap-int-floor',
    label: 'decode-interval-wrap-int-floor',
    idea: 'decode-interval-wrap + int-floor svgRootRound + fo-y-half-leading-dpr-root-meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "decode-interval",
      "monkeypatch": "decode-interval-wrap",
      "svgRootRound": "int-floor",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-dpr-root-meta",
        "dprScaledSvgRootDraw": true,
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'w9-supersample-round-dims-double',
    label: 'w9-supersample-round-dims-double',
    idea: 'w9-mp-019 supersample + round-dims + double-decode + text-leaf translateY',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "double-decode",
      "monkeypatch": "tc-lab-w9-mp-019",
      "svgRootRound": "round-dims",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-translate-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'pin-clientrects-w9-decode-interval',
    label: 'pin-clientrects-w9-decode-interval',
    idea: 'clientrects pin + w9-mp-007 decode-interval-prototype + decode-interval + w7 meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "decode-interval",
      "monkeypatch": "tc-lab-w9-mp-007",
      "radicalPatch": "lab-pin-inline-box-height-from-clientrects",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'pin-ink-w10-backing-settle',
    label: 'pin-ink-w10-backing-settle',
    idea: 'ink padding pin + w10-mp-019 backing ceil + decodeSettle + w7 dpr root',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "tc-lab-w10-mp-019",
      "radicalPatch": "lab-pin-ink-top-in-border-padding",
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-dpr-root-meta",
        "dprScaledSvgRootDraw": true,
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'pin-clientrects-w10-two-stage',
    label: 'pin-clientrects-w10-two-stage',
    idea: 'clientrects pin + w10-mp-027 two-stage + fonts-ready + trim rfork + inline capture',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject :is(span,a,p,h1,h2,h3,label){display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}",
      "rasterPatch": "fonts-ready",
      "monkeypatch": "tc-lab-w10-mp-027",
      "radicalPatch": "lab-pin-inline-box-height-from-clientrects",
      "harnessSnapdom": {
        "experimentalFoTextLeafNormalize": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "leading-trim-text-box-leaf",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'pin-ink-chromium-combo-interval',
    label: 'pin-ink-chromium-combo-interval',
    idea: 'ink padding pin + decode-interval + combo trim+w7 + chromium capture CSS',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject{font-kerning:normal!important;font-synthesis:none!important;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}foreignObject *{box-sizing:border-box!important}",
      "rasterPatch": "decode-interval",
      "radicalPatch": "lab-pin-ink-top-in-border-padding",
      "harnessSnapdom": {
        "experimentalFoChromiumText": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "combo-fo-y-half-leading-trim-text-box",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'flex-rfork-lh-pin-settle',
    label: 'flex-rfork-lh-pin-settle',
    idea: 'flex-container-flex-start rfork + lh-pin capture + decodeSettle',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject :is(span,a,p,h1,h2,h3,label){line-height:normal!important}",
      "rasterPatch": "lab-toCanvas",
      "harnessSnapdom": {
        "experimentalFoPinLineHeightOnTextLeaf": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "flex-container-flex-start",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'inline-rfork-textlayout-interval',
    label: 'inline-rfork-textlayout-interval',
    idea: 'inline-block linebox rfork + experimentalFoTextLayout + decode-interval',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject :is(span,a,p,h1,h2,h3,label){display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}",
      "rasterPatch": "decode-interval",
      "harnessSnapdom": {
        "experimentalFoTextLayout": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-inline-block-linebox",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'overflow-rfork-boxlinepx-double',
    label: 'overflow-rfork-boxlinepx-double',
    idea: 'fo-box-linepx-overflow rfork + experimentalFoBoxLinePx + double-decode',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "double-decode",
      "harnessSnapdom": {
        "experimentalFoBoxLinePx": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-box-linepx-overflow",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'trim-rfork-leading-decode-raf',
    label: 'trim-rfork-leading-decode-raf',
    idea: 'leading-trim-text-box-leaf rfork + leading-trim capture + decode-interval-raf',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}",
      "rasterPatch": "decode-interval-raf",
      "harnessSnapdom": {
        "experimentalFoLeadingTrim": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "leading-trim-text-box-leaf",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'flex-align-rfork-fonts-interval',
    label: 'flex-align-rfork-fonts-interval',
    idea: 'flex-container-flex-start rfork + experimentalFoFlexTextLeafAlignStart + fonts-ready-interval',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "fonts-ready-interval",
      "harnessSnapdom": {
        "experimentalFoFlexTextLeafAlignStart": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "flex-container-flex-start",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'combo-trim-googlefonts-settle',
    label: 'combo-trim-googlefonts-settle',
    idea: 'combo trim+w7 rfork + googlefonts mp + leading-trim capture + decodeSettle',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": "googlefonts-embed-capture",
      "harnessSnapdom": {
        "embedFonts": true,
        "experimentalFoLeadingTrim": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "combo-fo-y-half-leading-trim-text-box",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'draw-pixelated-inline-chromium',
    label: 'draw-pixelated-inline-chromium',
    idea: 'draw-image-pixelated + inline-block capture + chromium copy + decode-interval + w7 meta',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject :is(span,a,p,h1,h2,h3,label){display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}foreignObject{font-kerning:normal!important;font-synthesis:none!important;text-rendering:geometricPrecision!important;-webkit-font-smoothing:antialiased!important}foreignObject *{box-sizing:border-box!important}",
      "rasterPatch": "decode-interval",
      "monkeypatch": "draw-image-pixelated",
      "harnessSnapdom": {
        "experimentalFoChromiumText": true,
        "experimentalFoTextLeafNormalize": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-meta",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'capture-css-h2-frac-200ms',
    label: 'capture-css-h2-frac-200ms',
    idea: 'capture-recipe-css + w10-mp-026 h2 frac draw + lab-decode-200ms + w7 dpr root',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-decode-200ms",
      "monkeypatch": [
        "capture-recipe-css",
        "tc-lab-w10-mp-026"
      ],
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "fo-y-half-leading-dpr-root-meta",
        "dprScaledSvgRootDraw": true,
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'h2-normalize-cib-settle-leaf',
    label: 'h2-normalize-cib-settle-leaf',
    idea: 'h2-fo-normalize-full + w10-mp-023 CIB + decodeSettle + text-leaf translateY',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible;font-kerning:normal;font-synthesis:none;text-rendering:geometricPrecision;-webkit-font-smoothing:antialiased}foreignObject *{box-sizing:border-box}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}",
      "rasterPatch": "lab-toCanvas",
      "monkeypatch": [
        "h2-fo-normalize-full",
        "tc-lab-w10-mp-023"
      ],
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "text-leaf-translate-y-half-leading-meta",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
  {
    lane: 'w9-proto-supersample-trim',
    label: 'w9-proto-supersample-trim',
    idea: 'w9-mp-007 decode proto + w9-mp-019 supersample + lab-decode-100ms + trim rfork + leading-trim capture',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}",
      "rasterPatch": "lab-decode-100ms",
      "monkeypatch": [
        "tc-lab-w9-mp-007",
        "tc-lab-w9-mp-019"
      ],
      "harnessSnapdom": {
        "experimentalFoLeadingTrim": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "leading-trim-text-box-leaf",
        "disableGbcrFracNudge": true
      }
    },
  },
  {
    lane: 'max-w9-cib-pin-trim-settle',
    label: 'max-w9-cib-pin-trim-settle',
    idea: 'Max: w9-mp-025 reset + w10-mp-023 CIB + clientrects pin + combo trim+w7 + round-dims + fonts-ready-interval + trim/inline capture',
    extra: {
      "inject": "both",
      "css": "svg{overflow:visible}foreignObject{overflow:visible}foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important}foreignObject :is(span,a,p,h1,h2,h3,label){display:inline-block!important;vertical-align:baseline!important;width:auto!important;height:auto!important}",
      "rasterPatch": "fonts-ready-interval",
      "monkeypatch": [
        "tc-lab-w9-mp-025",
        "tc-lab-w10-mp-023"
      ],
      "svgRootRound": "round-dims",
      "radicalPatch": "lab-pin-inline-box-height-from-clientrects",
      "harnessSnapdom": {
        "experimentalFoLeadingTrim": true,
        "experimentalFoTextLeafNormalize": true
      },
      "labToCanvasOpts": {
        "rasterOnlySvgPatch": "combo-fo-y-half-leading-trim-text-box",
        "disableGbcrFracNudge": true,
        "decodeSettle": true
      }
    },
  },
]

if (SPECS.length !== 40) {
  throw new Error(`recipes-drift-batch5-triple: expected 40 specs, got ${SPECS.length}`)
}

const DRIFT_BATCH_KEEP_ACTIVE = new Set(
  Array.from({ length: 40 }, (_, i) => `drift-batch5-${String(i + 1).padStart(3, '0')}`),
)

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const { css: specCss, ...restExtra } = spec.extra
  return {
    id: `drift-batch5-${num}`,
    label: `drift-batch5 #${i + 1}: ${spec.label}`,
    idea: spec.idea,
    css: specCss ?? FO_BASELINE_CSS,
    inject: restExtra.inject ?? 'both',
    category: 'drift-batch5',
    active: DRIFT_BATCH_KEEP_ACTIVE.has(`drift-batch5-${num}`),
    notes: `Drift batch 5 lane=${spec.lane}; FO raster only — fresh orthogonal triple stack.`,
    ...restExtra,
  }
})

const seen = new Set()
for (const r of RECIPES) {
  const mp = Array.isArray(r.monkeypatch) ? r.monkeypatch.join(',') : (r.monkeypatch ?? '')
  const key = [
    r.inject, r.rasterPatch ?? '', (r.labRasterPatches ?? []).join(','), r.labPreRaster ?? '', mp,
    r.radicalPatch ?? '', r.svgRootRound ?? '', r.labLoadPipeline ?? '',
    JSON.stringify(r.labToCanvasOpts ?? null), JSON.stringify(r.harnessSnapdom ?? null),
    JSON.stringify(r.harnessProductToCanvas ?? null), r.css,
  ].join('\0')
  if (seen.has(key)) throw new Error(`recipes-drift-batch5-triple: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const DRIFT_BATCH5_RECIPE_IDS = RECIPES.map((r) => r.id)
export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


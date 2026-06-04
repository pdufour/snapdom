/**
 * Brainstorm batch H lane 39 — multi-pass raster decode retry structural CSS.
 * 40 FO-raster recipes: brain-l39-001..040. No text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ slug: string, idea: string, suffix: string, noLeaf?: boolean, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  { slug: "decode-interval baseline", idea: "decode-interval raster — modern-screenshot drawImageInterval flush", suffix: "", extra: {"inject":"raster","rasterPatch":"decode-interval"} },
  { slug: "double-decode baseline", idea: "double-decode — img.decode() twice before drawImage", suffix: "", extra: {"inject":"raster","rasterPatch":"double-decode"} },
  { slug: "triple-decode baseline", idea: "triple-decode — three decode passes before FO ink draw", suffix: "", extra: {"inject":"raster","rasterPatch":"triple-decode"} },
  { slug: "decode-interval-raf", idea: "decode-interval-raf — interval + rAF compositor flush", suffix: "", extra: {"inject":"raster","rasterPatch":"decode-interval-raf"} },
  { slug: "fonts-ready decode", idea: "fonts-ready — document.fonts.ready before decode/draw", suffix: "", extra: {"inject":"raster","rasterPatch":"fonts-ready"} },
  { slug: "fonts-ready-interval", idea: "fonts-ready-interval — fonts.ready then decode interval wait", suffix: "", extra: {"inject":"raster","rasterPatch":"fonts-ready-interval"} },
  { slug: "double-raf flush", idea: "double-raf — two animation frames before drawImage", suffix: "", extra: {"inject":"raster","rasterPatch":"double-raf"} },
  { slug: "raf-before-draw", idea: "raf-before-draw — rAF gate immediately before canvas blit", suffix: "", extra: {"inject":"raster","rasterPatch":"raf-before-draw"} },
  { slug: "decode-microtask-twice", idea: "decode-microtask-twice — queueMicrotask between decode passes", suffix: "", extra: {"inject":"raster","rasterPatch":"decode-microtask-twice"} },
  { slug: "load-event decode", idea: "load-event — wait img onload before decode/draw", suffix: "", extra: {"inject":"raster","rasterPatch":"load-event"} },
  { slug: "load-event-interval", idea: "load-event-interval — onload then decode interval wait", suffix: "", extra: {"inject":"raster","rasterPatch":"load-event-interval"} },
  { slug: "blob-url-decode-interval", idea: "blob-url-decode-interval — blob URL handoff + interval", suffix: "", extra: {"inject":"raster","rasterPatch":"blob-url-decode-interval"} },
  { slug: "pre-decode-dom", idea: "pre-decode-dom — attach offscreen img before decode", suffix: "", extra: {"inject":"raster","rasterPatch":"pre-decode-dom"} },
  { slug: "offscreen-canvas blit", idea: "offscreen-canvas — intermediate OffscreenCanvas decode blit", suffix: "", extra: {"inject":"raster","rasterPatch":"offscreen-canvas"} },
  { slug: "create-image-bitmap", idea: "createImageBitmap — ImageBitmap handoff before final draw", suffix: "", extra: {"inject":"raster","rasterPatch":"create-image-bitmap"} },
  { slug: "two-stage raster", idea: "two-stage — intermediate canvas then final blit", suffix: "", extra: {"inject":"raster","rasterPatch":"two-stage"} },
  { slug: "decode-via-blob", idea: "decode-via-blob — blob URL decode path variant", suffix: "", extra: {"inject":"raster","rasterPatch":"decode-via-blob"} },
  { slug: "wait-fonts-500ms", idea: "wait-fonts-500ms — fixed upstream font settle wait before draw", suffix: "", extra: {"inject":"raster","rasterPatch":"wait-fonts-500ms"} },
  { slug: "mp decode-interval-prototype", idea: "monkeypatch decode-interval-prototype — double decode + interval on prototype", suffix: "foreignObject *{font-kerning:normal!important}", extra: {"inject":"both","rasterPatch":"decode-interval","monkeypatch":"decode-interval-prototype"} },
  { slug: "mp image-decode-twice", idea: "monkeypatch image-decode-twice — prototype decode() called twice", suffix: "", extra: {"inject":"both","rasterPatch":"double-decode","monkeypatch":"image-decode-twice"} },
  { slug: "mp fonts-ready-delay", idea: "monkeypatch fonts-ready-delay — fonts.ready before img.decode", suffix: "", extra: {"inject":"both","rasterPatch":"fonts-ready","monkeypatch":"fonts-ready-delay"} },
  { slug: "int-vb decode-interval", idea: "integer-viewbox snap + decode-interval — subpx root + decode wait", suffix: "", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"decode-interval"} },
  { slug: "int-vb double-decode", idea: "integer-viewbox + double-decode multi-pass", suffix: "", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"double-decode"} },
  { slug: "int-floor decode-interval-raf", idea: "int-floor viewBox + decode-interval-raf", suffix: "", extra: {"inject":"both","svgRootRound":"int-floor","rasterPatch":"decode-interval-raf"} },
  { slug: "round-dims fonts-ready-interval", idea: "round-dims SVG root + fonts-ready-interval", suffix: "", extra: {"inject":"both","svgRootRound":"round-dims","rasterPatch":"fonts-ready-interval"} },
  { slug: "font-kerning normal triple-decode", idea: "font-kerning:normal structural CSS + triple-decode", suffix: "foreignObject{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important}foreignObject *{font-kerning:normal!important}", extra: {"inject":"both","rasterPatch":"triple-decode"} },
  { slug: "min-width 0 decode-interval", idea: "min-width:0 flex child CSS + decode-interval", suffix: "foreignObject{display:flex!important}foreignObject *{min-width:0!important;min-height:0!important}", extra: {"inject":"both","rasterPatch":"decode-interval"} },
  { slug: "box-sizing double-raf", idea: "box-sizing:border-box on FO * + double-raf flush", suffix: "foreignObject *{box-sizing:border-box!important}", extra: {"inject":"both","rasterPatch":"double-raf"} },
  { slug: "h2-raster-normalize decode-interval", idea: "h2-raster-normalize capture monkeypatch + decode-interval", suffix: "", extra: {"inject":"both","rasterPatch":"decode-interval","monkeypatch":"h2-raster-normalize-capture"} },
  { slug: "fo-shape-auto decode-interval", idea: "fo-shape-rendering-auto patch + decode-interval", suffix: "", extra: {"inject":"both","foSvgPatch":"fo-shape-rendering-auto","rasterPatch":"decode-interval"} },
  { slug: "int-vb triple-decode", idea: "integer-viewbox + triple-decode capstone timing", suffix: "", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"triple-decode"} },
  { slug: "font-kerning decode-interval-raf", idea: "font-kerning:normal + decode-interval-raf", suffix: "foreignObject{font-kerning:normal!important}foreignObject *{font-kerning:normal!important}", extra: {"inject":"both","rasterPatch":"decode-interval-raf"} },
  { slug: "overflow visible load-event", idea: "overflow:visible FO CSS + load-event decode path", suffix: "foreignObject{overflow:visible!important}", extra: {"inject":"both","rasterPatch":"load-event"} },
  { slug: "int-vb fonts-ready-interval", idea: "integer-viewbox + fonts-ready-interval", suffix: "", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"fonts-ready-interval"} },
  { slug: "blob-decode min-width 0", idea: "blob-url-decode-interval + min-width:0 structural CSS", suffix: "foreignObject *{min-width:0!important}", extra: {"inject":"both","rasterPatch":"blob-url-decode-interval"} },
  { slug: "microtask-twice int-floor", idea: "decode-microtask-twice + int-floor viewBox snap", suffix: "", extra: {"inject":"both","svgRootRound":"int-floor","rasterPatch":"decode-microtask-twice"} },
  { slug: "font-kerning raf-before-draw", idea: "font-kerning:normal + raf-before-draw", suffix: "foreignObject *{font-kerning:normal!important;text-rendering:geometricPrecision!important}", extra: {"inject":"both","rasterPatch":"raf-before-draw"} },
  { slug: "int-vb create-image-bitmap", idea: "integer-viewbox + createImageBitmap decode handoff", suffix: "", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"create-image-bitmap"} },
  { slug: "decode-interval mp + int-vb", idea: "decode-interval + decode-interval-prototype MP + integer-viewbox", suffix: "foreignObject{font-kerning:normal!important}", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"decode-interval","monkeypatch":"decode-interval-prototype"} },
  { slug: "round-dims double-decode kerning", idea: "round-dims viewBox + double-decode + font-kerning:normal", suffix: "foreignObject{font-kerning:normal!important}foreignObject *{font-kerning:normal!important}", extra: {"inject":"both","svgRootRound":"round-dims","rasterPatch":"double-decode"} },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const css = spec.noLeaf ? FO_BASELINE_CSS + spec.suffix : FO_BASELINE_CSS + LEAF + spec.suffix
  /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
  const recipe = {
    id: 'brain-l39-000'.replace('-000', `-${num}`),
    label: `Brain L39 #${num}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject: spec.extra?.inject ?? 'capture',
    category: 'brainstorm',
    active: true,
    notes: `Brainstorm batch H lane 39; ${spec.slug}; FO-raster — no text bypass.`,
    ...spec.extra,
  }
  return recipe
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-brainstorm-lane-39.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [r.css, r.inject, r.rasterPatch ?? '', r.monkeypatch ?? '', r.radicalPatch ?? '', r.svgRootRound ?? '', r.foSvgPatch ?? '', JSON.stringify(r.svgRootPatch ?? {})].join('\0')
  if (seen.has(key)) throw new Error(`recipes-brainstorm-lane-39.js: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

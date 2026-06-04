/**
 * Brainstorm batch H lane 40 — composite 2–3 structural mechanisms.
 * 40 FO-raster recipes: brain-l40-001..040. No text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ slug: string, idea: string, suffix: string, noLeaf?: boolean, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  { slug: "gutter + scheme + decode-interval", idea: "scrollbar-gutter stable + color-scheme light dark + decode-interval", suffix: "foreignObject{scrollbar-gutter:stable!important;color-scheme:light dark!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"decode-interval"} },
  { slug: "overscroll + filter-none + double-decode", idea: "overscroll contain + filter:none + double-decode", suffix: "foreignObject{overscroll-behavior:contain!important;filter:none!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"double-decode"} },
  { slug: "scheme + print + fonts-ready-interval", idea: "color-scheme light dark + print exact + fonts-ready-interval", suffix: "foreignObject{color-scheme:light dark!important;print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}", extra: {"inject":"both","rasterPatch":"fonts-ready-interval"} },
  { slug: "filter backdrop strip + triple-decode", idea: "filter:none + backdrop:none + triple-decode", suffix: "foreignObject{filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}", extra: {"inject":"both","rasterPatch":"triple-decode"} },
  { slug: "gutter + min-width + decode-interval-raf", idea: "scrollbar-gutter stable + min-width:0 + decode-interval-raf", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:auto!important;display:flex!important}foreignObject *{min-width:0!important}", extra: {"inject":"both","rasterPatch":"decode-interval-raf"} },
  { slug: "forced-none + remove-fe + decode-interval", idea: "forced-color-adjust:none + remove-fe-filters + decode-interval", suffix: "foreignObject{forced-color-adjust:none!important;filter:none!important}", extra: {"inject":"both","radicalPatch":"remove-fe-filters","rasterPatch":"decode-interval"} },
  { slug: "overscroll none + isolation + double-decode", idea: "overscroll:none + isolation:isolate + double-decode", suffix: "foreignObject{overscroll-behavior:none!important;isolation:isolate!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"double-decode"} },
  { slug: "scheme dark + filter-none + int-vb decode", idea: "color-scheme:dark + filter:none + integer-viewbox + decode-interval", suffix: "foreignObject{color-scheme:dark!important;filter:none!important}", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"decode-interval"} },
  { slug: "scrollbar thin + backdrop zero + fonts-ready", idea: "scrollbar-width:thin + backdrop blur(0) + fonts-ready", suffix: "foreignObject{scrollbar-width:thin!important;backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"fonts-ready"} },
  { slug: "gutter + fe-matrix + decode-interval", idea: "scrollbar-gutter stable + fe-color-matrix identity + decode-interval", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:auto!important}", extra: {"inject":"both","foSvgPatch":"fe-color-matrix-identity","rasterPatch":"decode-interval"} },
  { slug: "accent + filter-none + decode-interval-raf", idea: "accent-color Highlight + filter:none + decode-interval-raf", suffix: "foreignObject{accent-color:Highlight!important;filter:none!important;color-scheme:light dark!important}", extra: {"inject":"both","rasterPatch":"decode-interval-raf"} },
  { slug: "print exact + filter-none + double-decode", idea: "print-color-adjust exact + filter:none + double-decode", suffix: "foreignObject{print-color-adjust:exact!important;filter:none!important;-webkit-print-color-adjust:exact!important}", extra: {"inject":"both","rasterPatch":"double-decode"} },
  { slug: "overscroll + scheme + min-width + triple-decode", idea: "overscroll contain + color-scheme + min-width:0 + triple-decode", suffix: "foreignObject{overscroll-behavior:contain!important;color-scheme:light dark!important;overflow:auto!important;display:flex!important}foreignObject *{min-width:0!important}", extra: {"inject":"both","rasterPatch":"triple-decode"} },
  { slug: "remove-fe + scheme light + decode-interval", idea: "remove-fe-filters + color-scheme:light + decode-interval", suffix: "foreignObject{color-scheme:light!important;filter:none!important}", extra: {"inject":"both","radicalPatch":"remove-fe-filters","rasterPatch":"decode-interval"} },
  { slug: "gutter both-edges + kerning + fonts-ready-interval", idea: "scrollbar-gutter both-edges + font-kerning:normal + fonts-ready-interval", suffix: "foreignObject{scrollbar-gutter:stable both-edges!important;overflow:auto!important;font-kerning:normal!important}foreignObject *{font-kerning:normal!important}", extra: {"inject":"both","rasterPatch":"fonts-ready-interval"} },
  { slug: "backdrop none + forced auto + load-event", idea: "backdrop:none + forced-color-adjust:auto + load-event", suffix: "foreignObject{backdrop-filter:none!important;forced-color-adjust:auto!important;color-scheme:light dark!important}", extra: {"inject":"both","rasterPatch":"load-event"} },
  { slug: "gutter + int-floor + decode-interval", idea: "scrollbar-gutter stable + int-floor + decode-interval", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:auto!important}", extra: {"inject":"both","svgRootRound":"int-floor","rasterPatch":"decode-interval"} },
  { slug: "only light + overflow visible + double-raf", idea: "color-scheme:only light + overflow:visible + double-raf", suffix: "foreignObject{color-scheme:only light!important;overflow:visible!important}", extra: {"inject":"both","rasterPatch":"double-raf"} },
  { slug: "overscroll block + backdrop zero + createImageBitmap", idea: "overscroll block none + backdrop blur(0) + createImageBitmap", suffix: "foreignObject *{overscroll-behavior-block:none!important}foreignObject{backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important}", extra: {"inject":"both","rasterPatch":"create-image-bitmap"} },
  { slug: "isolation + print exact + microtask-twice", idea: "isolation:isolate + print exact + decode-microtask-twice", suffix: "foreignObject{isolation:isolate!important;print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}", extra: {"inject":"both","rasterPatch":"decode-microtask-twice"} },
  { slug: "gutter + int-vb + triple-decode", idea: "scrollbar-gutter stable + integer-viewbox + triple-decode", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:auto!important}", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"triple-decode"} },
  { slug: "scheme + filter-noop + decode-interval-raf", idea: "color-scheme light dark + filter-noop-defs + decode-interval-raf", suffix: "foreignObject{color-scheme:light dark!important}", extra: {"inject":"both","foSvgPatch":"filter-noop-defs","rasterPatch":"decode-interval-raf"} },
  { slug: "overscroll + mp fonts-ready + kerning", idea: "overscroll contain + fonts-ready-delay MP + font-kerning:normal", suffix: "foreignObject{overscroll-behavior:contain!important;overflow:auto!important;font-kerning:normal!important}foreignObject *{font-kerning:normal!important}", extra: {"inject":"both","rasterPatch":"fonts-ready","monkeypatch":"fonts-ready-delay"} },
  { slug: "filter-none + accent + blob-decode-interval", idea: "filter:none + accent-color + blob-url-decode-interval", suffix: "foreignObject{filter:none!important;accent-color:CanvasText!important}", extra: {"inject":"both","rasterPatch":"blob-url-decode-interval"} },
  { slug: "scrollbar none + scheme dark + double-decode", idea: "scrollbar-width:none + color-scheme:dark + double-decode", suffix: "foreignObject{scrollbar-width:none!important;color-scheme:dark!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"double-decode"} },
  { slug: "backdrop none + min-width + int-floor decode", idea: "backdrop:none + min-width:0 + int-floor + decode-interval", suffix: "foreignObject{backdrop-filter:none!important;display:flex!important}foreignObject *{min-width:0!important}", extra: {"inject":"both","svgRootRound":"int-floor","rasterPatch":"decode-interval"} },
  { slug: "forced-colors media + filter-none + fonts-ready-interval", idea: "@media forced-colors + filter:none + fonts-ready-interval", suffix: "@media (forced-colors:active){foreignObject{color:CanvasText!important;filter:none!important}}", extra: {"inject":"both","rasterPatch":"fonts-ready-interval"} },
  { slug: "overscroll + remove-fe + decode-interval-raf", idea: "overscroll contain + remove-fe-filters + decode-interval-raf", suffix: "foreignObject{overscroll-behavior:contain!important;overflow:auto!important;filter:none!important}", extra: {"inject":"both","radicalPatch":"remove-fe-filters","rasterPatch":"decode-interval-raf"} },
  { slug: "scheme + box-sizing + two-stage", idea: "color-scheme light dark + box-sizing + two-stage raster", suffix: "foreignObject{color-scheme:light dark!important}foreignObject *{box-sizing:border-box!important}", extra: {"inject":"both","rasterPatch":"two-stage"} },
  { slug: "gutter + blend normal + triple-decode", idea: "scrollbar-gutter stable + mix-blend normal + triple-decode", suffix: "foreignObject{scrollbar-gutter:stable!important;mix-blend-mode:normal!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"triple-decode"} },
  { slug: "print + backdrop zero + int-vb decode", idea: "print exact + backdrop blur(0) + integer-viewbox + decode-interval", suffix: "foreignObject{print-color-adjust:exact!important;backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important}", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"decode-interval"} },
  { slug: "overscroll + scheme + pin-lh stretch", idea: "overscroll contain + color-scheme + h2-pin-lh-flex-stretch-leaf-from-live", suffix: "foreignObject{overscroll-behavior:contain!important;color-scheme:light dark!important;overflow:auto!important}", extra: {"inject":"both","radicalPatch":"h2-pin-lh-flex-stretch-leaf-from-live","rasterPatch":"decode-interval"} },
  { slug: "filter opacity + gutter + double-decode", idea: "filter:opacity(100%) + scrollbar-gutter stable + double-decode", suffix: "foreignObject{filter:opacity(100%)!important;scrollbar-gutter:stable!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"double-decode"} },
  { slug: "accent Highlight + overscroll + decode-interval", idea: "accent-color Highlight + overscroll contain + decode-interval", suffix: "foreignObject{accent-color:Highlight!important;overscroll-behavior:contain!important;overflow:auto!important;color-scheme:light dark!important}", extra: {"inject":"both","rasterPatch":"decode-interval"} },
  { slug: "scheme + fe-merge + fonts-ready-interval", idea: "color-scheme light dark + fe-merge-empty + fonts-ready-interval", suffix: "foreignObject{color-scheme:light dark!important}", extra: {"inject":"both","foSvgPatch":"fe-merge-empty","rasterPatch":"fonts-ready-interval"} },
  { slug: "gutter auto + forced-none + load-event-interval", idea: "scrollbar-gutter auto + forced-color-adjust:none + load-event-interval", suffix: "foreignObject{scrollbar-gutter:auto!important;forced-color-adjust:none!important;overflow:auto!important}", extra: {"inject":"both","rasterPatch":"load-event-interval"} },
  { slug: "backdrop none + only dark + decode-via-blob", idea: "backdrop:none + color-scheme:only dark + decode-via-blob", suffix: "foreignObject{backdrop-filter:none!important;color-scheme:only dark!important;-webkit-backdrop-filter:none!important}", extra: {"inject":"both","rasterPatch":"decode-via-blob"} },
  { slug: "filter-none + overflow auto overscroll + int-floor triple", idea: "filter:none + overflow auto overscroll contain + int-floor + triple-decode", suffix: "foreignObject{filter:none!important;overflow:auto!important;overscroll-behavior:contain!important}", extra: {"inject":"both","svgRootRound":"int-floor","rasterPatch":"triple-decode"} },
  { slug: "print economy + isolation + decode-interval-raf", idea: "print-color-adjust economy + isolation:isolate + decode-interval-raf", suffix: "foreignObject{print-color-adjust:economy!important;isolation:isolate!important;-webkit-print-color-adjust:economy!important}", extra: {"inject":"both","rasterPatch":"decode-interval-raf"} },
  { slug: "cap gutter scheme filter decode int-vb", idea: "scrollbar-gutter + color-scheme + filter/backdrop strip + triple-decode + integer-viewbox", suffix: "foreignObject{scrollbar-gutter:stable!important;color-scheme:light dark!important;filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;overflow:auto!important}", extra: {"inject":"both","svgRootRound":"integer-viewbox","rasterPatch":"triple-decode"} },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const css = spec.noLeaf ? FO_BASELINE_CSS + spec.suffix : FO_BASELINE_CSS + LEAF + spec.suffix
  /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
  const recipe = {
    id: 'brain-l40-000'.replace('-000', `-${num}`),
    label: `Brain L40 #${num}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject: spec.extra?.inject ?? 'capture',
    category: 'brainstorm',
    active: true,
    notes: `Brainstorm batch H lane 40; ${spec.slug}; FO-raster — no text bypass.`,
    ...spec.extra,
  }
  return recipe
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-brainstorm-lane-40.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [r.css, r.inject, r.rasterPatch ?? '', r.monkeypatch ?? '', r.radicalPatch ?? '', r.svgRootRound ?? '', r.foSvgPatch ?? '', JSON.stringify(r.svgRootPatch ?? {})].join('\0')
  if (seen.has(key)) throw new Error(`recipes-brainstorm-lane-40.js: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

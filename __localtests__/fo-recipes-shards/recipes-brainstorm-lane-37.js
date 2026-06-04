/**
 * Brainstorm batch H lane 37 — color / profile / color-scheme FO subtree.
 * 40 FO-raster recipes: brain-l37-001..040. No text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ slug: string, idea: string, suffix: string, noLeaf?: boolean, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  { slug: "color-scheme light", idea: "color-scheme:light on FO — light UA form/control palette", suffix: "foreignObject{color-scheme:light!important}" },
  { slug: "color-scheme dark", idea: "color-scheme:dark on FO — dark UA palette inside FO subtree", suffix: "foreignObject{color-scheme:dark!important}" },
  { slug: "color-scheme light dark", idea: "color-scheme:light dark — dual-scheme FO root", suffix: "foreignObject{color-scheme:light dark!important}" },
  { slug: "color-scheme only light", idea: "color-scheme:only light — lock light scheme in FO", suffix: "foreignObject{color-scheme:only light!important}" },
  { slug: "color-scheme only dark", idea: "color-scheme:only dark — lock dark scheme in FO", suffix: "foreignObject{color-scheme:only dark!important}" },
  { slug: "forced-color-adjust none", idea: "forced-color-adjust:none — opt out of forced-colors recolor", suffix: "foreignObject{forced-color-adjust:none!important}" },
  { slug: "forced-color-adjust auto", idea: "forced-color-adjust:auto — system forced-colors default", suffix: "foreignObject{forced-color-adjust:auto!important}" },
  { slug: "print-color-adjust exact", idea: "print-color-adjust:exact — preserve screen colors in FO raster", suffix: "foreignObject{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}" },
  { slug: "print-color-adjust economy", idea: "print-color-adjust:economy — allow color compression in FO", suffix: "foreignObject{print-color-adjust:economy!important;-webkit-print-color-adjust:economy!important}" },
  { slug: "prefers-color-scheme light media", idea: "@media (prefers-color-scheme:light) color-scheme pin", suffix: "@media (prefers-color-scheme:light){foreignObject{color-scheme:light!important}}" },
  { slug: "prefers-color-scheme dark media", idea: "@media (prefers-color-scheme:dark) color-scheme pin", suffix: "@media (prefers-color-scheme:dark){foreignObject{color-scheme:dark!important}}" },
  { slug: "forced-colors active media", idea: "@media (forced-colors:active) Canvas/CanvasText system colors", suffix: "@media (forced-colors:active){foreignObject{forced-color-adjust:auto!important;color-scheme:light dark!important;color:CanvasText!important;background:Canvas!important}}" },
  { slug: "accent-color CanvasText", idea: "accent-color:CanvasText on FO form controls", suffix: "foreignObject{accent-color:CanvasText!important;color-scheme:light dark!important}foreignObject input,foreignObject button,foreignObject select{accent-color:Highlight!important}" },
  { slug: "caret-color auto", idea: "caret-color:auto on editable nodes — caret paint vs FO text", suffix: "foreignObject input,foreignObject textarea,foreignObject [contenteditable]{caret-color:auto!important}" },
  { slug: "color-scheme on FO star", idea: "color-scheme:light dark on all FO descendants", suffix: "foreignObject *{color-scheme:light dark!important}" },
  { slug: "forced-none + color-scheme dual", idea: "forced-color-adjust:none + color-scheme light dark combo", suffix: "foreignObject{forced-color-adjust:none!important;color-scheme:light dark!important}foreignObject *{forced-color-adjust:none!important}" },
  { slug: "print exact on FO star", idea: "print-color-adjust:exact on FO * — full subtree color fidelity", suffix: "foreignObject *{print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}" },
  { slug: "svg color-interpolation sRGB", idea: "svg root color-interpolation-filters:sRGB — filter color space", suffix: "", extra: {"inject":"capture","svgRootPatch":{"color-interpolation-filters":"sRGB"}} },
  { slug: "svg color-interpolation linearRGB", idea: "svg root color-interpolation-filters:linearRGB probe", suffix: "", extra: {"inject":"capture","svgRootPatch":{"color-interpolation-filters":"linearRGB"}} },
  { slug: "mix-blend-mode normal FO", idea: "mix-blend-mode:normal on FO — reset blend stacking for ink", suffix: "foreignObject{mix-blend-mode:normal!important;isolation:isolate!important}" },
  { slug: "isolation isolate color stack", idea: "isolation:isolate on FO — separate color compositing group", suffix: "foreignObject{isolation:isolate!important}" },
  { slug: "opacity 1 explicit FO", idea: "opacity:1 explicit on FO * — alpha stack reset", suffix: "foreignObject *{opacity:1!important}" },
  { slug: "color-scheme + accent Highlight", idea: "color-scheme light dark + accent-color Highlight on inputs", suffix: "foreignObject{color-scheme:light dark!important;accent-color:Highlight!important}" },
  { slug: "prefers-contrast more media", idea: "@media (prefers-contrast:more) — high-contrast color probe", suffix: "@media (prefers-contrast:more){foreignObject{color-scheme:light dark!important;forced-color-adjust:auto!important}}" },
  { slug: "prefers-contrast less media", idea: "@media (prefers-contrast:less) — low-contrast color probe", suffix: "@media (prefers-contrast:less){foreignObject{color-scheme:light dark!important}}" },
  { slug: "dark scheme forced auto", idea: "color-scheme:dark + forced-color-adjust:auto", suffix: "foreignObject{color-scheme:dark!important;forced-color-adjust:auto!important}" },
  { slug: "fe-color-matrix identity patch", idea: "fe-color-matrix identity SVG patch — color pipeline noop", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-color-matrix-identity"} },
  { slug: "color-scheme inherit FO div", idea: "color-scheme:inherit on FO>div wrapper — cascade from FO root", suffix: "foreignObject{color-scheme:light dark!important}foreignObject>div{color-scheme:inherit!important}" },
  { slug: "accent-color currentColor", idea: "accent-color:currentColor on FO controls — inherit text color", suffix: "foreignObject input,foreignObject button{accent-color:currentColor!important}" },
  { slug: "inverted-colors media", idea: "@media (inverted-colors:inverted) color-scheme probe", suffix: "@media (inverted-colors:inverted){foreignObject{color-scheme:light dark!important}}" },
  { slug: "only light on FO star", idea: "color-scheme:only light on all FO descendants", suffix: "foreignObject *{color-scheme:only light!important}" },
  { slug: "print exact + forced auto", idea: "print-color-adjust exact + forced-color-adjust auto", suffix: "foreignObject{print-color-adjust:exact!important;forced-color-adjust:auto!important}" },
  { slug: "color-rendering optimizeQuality", idea: "color-rendering:optimizeQuality on FO * — color precision hint", suffix: "foreignObject *{color-rendering:optimizeQuality!important}" },
  { slug: "color-interpolation sRGB FO star", idea: "color-interpolation:sRGB on FO * — sRGB interpolation lock", suffix: "foreignObject *{color-interpolation:sRGB!important}" },
  { slug: "forced-colors Canvas system", idea: "forced-colors active with Canvas background on FO", suffix: "@media (forced-colors:active){foreignObject{background-color:Canvas!important;color:CanvasText!important;border-color:CanvasText!important}}" },
  { slug: "light dark + print exact combo", idea: "color-scheme light dark + print-color-adjust exact", suffix: "foreignObject{color-scheme:light dark!important;print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}" },
  { slug: "caret-color transparent editable", idea: "caret-color:transparent on editable — caret vs text ink isolation", suffix: "foreignObject input,foreignObject textarea{caret-color:transparent!important}" },
  { slug: "color-scheme blend isolation cap", idea: "color-scheme light dark + mix-blend normal + isolation isolate", suffix: "foreignObject{color-scheme:light dark!important;mix-blend-mode:normal!important;isolation:isolate!important}" },
  { slug: "svg color-rendering auto root", idea: "svg root color-rendering:auto — default color precision on SVG root", suffix: "", extra: {"inject":"capture","svgRootPatch":{"color-rendering":"auto"}} },
  { slug: "forced-none print exact star", idea: "forced-color-adjust:none + print exact on FO * — dual color fidelity lock", suffix: "foreignObject{forced-color-adjust:none!important}foreignObject *{forced-color-adjust:none!important;print-color-adjust:exact!important;-webkit-print-color-adjust:exact!important}" },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const css = spec.noLeaf ? FO_BASELINE_CSS + spec.suffix : FO_BASELINE_CSS + LEAF + spec.suffix
  /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
  const recipe = {
    id: 'brain-l37-000'.replace('-000', `-${num}`),
    label: `Brain L37 #${num}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject: spec.extra?.inject ?? 'capture',
    category: 'brainstorm',
    active: true,
    notes: `Brainstorm batch H lane 37; ${spec.slug}; FO-raster — no text bypass.`,
    ...spec.extra,
  }
  return recipe
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-brainstorm-lane-37.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [r.css, r.inject, r.rasterPatch ?? '', r.monkeypatch ?? '', r.radicalPatch ?? '', r.svgRootRound ?? '', r.foSvgPatch ?? '', JSON.stringify(r.svgRootPatch ?? {})].join('\0')
  if (seen.has(key)) throw new Error(`recipes-brainstorm-lane-37.js: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

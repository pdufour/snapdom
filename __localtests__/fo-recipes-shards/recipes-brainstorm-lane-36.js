/**
 * Brainstorm batch H lane 36 — overscroll / scrollbar-gutter layout isolation.
 * 40 FO-raster recipes: brain-l36-001..040. No text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ slug: string, idea: string, suffix: string, noLeaf?: boolean, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  { slug: "scrollbar-gutter stable", idea: "scrollbar-gutter:stable on FO — reserved gutter vs intrinsic FO box", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:auto!important;box-sizing:border-box!important}" },
  { slug: "scrollbar-gutter both-edges", idea: "scrollbar-gutter:stable both-edges — dual-edge gutter reservation", suffix: "foreignObject{scrollbar-gutter:stable both-edges!important;overflow:auto!important}" },
  { slug: "scrollbar-gutter auto reset", idea: "scrollbar-gutter:auto explicit — default gutter behavior inside FO", suffix: "foreignObject{scrollbar-gutter:auto!important;overflow:auto!important}" },
  { slug: "gutter stable overflow scroll", idea: "stable gutter + overflow:scroll — scrollport vs FO backing store", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:scroll!important}" },
  { slug: "overscroll-behavior contain", idea: "overscroll-behavior:contain on FO root — scroll chaining isolation", suffix: "foreignObject{overscroll-behavior:contain!important;overflow:auto!important}" },
  { slug: "overscroll-behavior none descendants", idea: "overscroll-behavior:none on FO * — descendant scroll chain reset", suffix: "foreignObject *{overscroll-behavior:none!important}" },
  { slug: "overscroll-behavior auto", idea: "overscroll-behavior:auto explicit on FO — browser default chain", suffix: "foreignObject{overscroll-behavior:auto!important;overflow:auto!important}" },
  { slug: "overscroll-behavior-x contain", idea: "overscroll-behavior-x:contain — inline-axis scroll isolation", suffix: "foreignObject{overscroll-behavior-x:contain!important;overflow-x:auto!important;overflow-y:visible!important}" },
  { slug: "overscroll-behavior-y contain", idea: "overscroll-behavior-y:contain — block-axis scroll isolation", suffix: "foreignObject{overscroll-behavior-y:contain!important;overflow-y:auto!important;overflow-x:visible!important}" },
  { slug: "overscroll block contain inline none", idea: "axis split overscroll — block contain + inline none on FO *", suffix: "foreignObject *{overscroll-behavior-block:contain!important;overscroll-behavior-inline:none!important}" },
  { slug: "scrollbar-width thin", idea: "scrollbar-width:thin — narrow scrollbar vs layout box", suffix: "foreignObject{scrollbar-width:thin!important;overflow:auto!important}" },
  { slug: "scrollbar-width none", idea: "scrollbar-width:none — hide scrollbar without overflow clip", suffix: "foreignObject{scrollbar-width:none!important;overflow:auto!important}" },
  { slug: "scrollbar-width auto", idea: "scrollbar-width:auto explicit — platform default scrollbar width", suffix: "foreignObject{scrollbar-width:auto!important;overflow:auto!important}" },
  { slug: "scrollbar-color auto", idea: "scrollbar-color:auto — themed scrollbar thumb/track inside FO", suffix: "foreignObject{scrollbar-color:auto!important;overflow:auto!important}" },
  { slug: "gutter stable + overscroll contain", idea: "scrollbar-gutter stable + overscroll contain — dual scroll isolation", suffix: "foreignObject{scrollbar-gutter:stable!important;overscroll-behavior:contain!important;overflow:auto!important}" },
  { slug: "overflow-x auto y visible", idea: "overflow-x:auto overflow-y:visible — asymmetric scrollport", suffix: "foreignObject{overflow-x:auto!important;overflow-y:visible!important}" },
  { slug: "overflow-x hidden y auto", idea: "overflow-x:hidden overflow-y:auto — vertical-only scroll container", suffix: "foreignObject{overflow-x:hidden!important;overflow-y:auto!important}" },
  { slug: "overflow overlay webkit", idea: "-webkit-overflow-scrolling:touch + overflow:auto — legacy momentum scroll", suffix: "foreignObject{overflow:auto!important;-webkit-overflow-scrolling:touch!important}" },
  { slug: "scroll-behavior auto", idea: "scroll-behavior:auto on FO — instant scroll positioning", suffix: "foreignObject{scroll-behavior:auto!important;overflow:auto!important}" },
  { slug: "scroll-behavior smooth", idea: "scroll-behavior:smooth — animated scroll vs FO static raster", suffix: "foreignObject{scroll-behavior:smooth!important;overflow:auto!important}" },
  { slug: "overflow-anchor none", idea: "overflow-anchor:none — disable scroll anchoring inside FO", suffix: "foreignObject{overflow-anchor:none!important;overflow:auto!important}" },
  { slug: "overflow-anchor auto", idea: "overflow-anchor:auto — browser scroll anchoring default", suffix: "foreignObject{overflow-anchor:auto!important;overflow:auto!important}" },
  { slug: "touch-action pan-y", idea: "touch-action:pan-y on FO scroll container — vertical pan isolation", suffix: "foreignObject{touch-action:pan-y!important;overflow:auto!important}" },
  { slug: "touch-action manipulation", idea: "touch-action:manipulation — disable double-tap zoom delay in FO", suffix: "foreignObject{touch-action:manipulation!important;overflow:auto!important}" },
  { slug: "contain layout scroll child", idea: "contain:layout on FO — layout containment vs scroll overflow", suffix: "foreignObject{contain:layout!important;overflow:visible!important}" },
  { slug: "contain strict scroll", idea: "contain:strict + overflow:auto — strict containment scroll probe", suffix: "foreignObject{contain:strict!important;overflow:auto!important}" },
  { slug: "flex min-height 0 scroll", idea: "min-height:0 on FO * — flex scroll child shrink inside FO", suffix: "foreignObject{display:flex!important;flex-direction:column!important;overflow:auto!important}foreignObject *{min-height:0!important}" },
  { slug: "gutter stable min-width 0", idea: "scrollbar-gutter stable + min-width:0 flex/grid children", suffix: "foreignObject{scrollbar-gutter:stable!important;overflow:auto!important;display:flex!important}foreignObject *{min-width:0!important}" },
  { slug: "overscroll contain isolation", idea: "overscroll contain + isolation:isolate — compositor scroll layer", suffix: "foreignObject{overscroll-behavior:contain!important;isolation:isolate!important;overflow:auto!important}" },
  { slug: "overscroll none overflow visible", idea: "overscroll:none on FO with overflow:visible — chain reset without clip", suffix: "foreignObject{overscroll-behavior:none!important;overflow:visible!important}" },
  { slug: "gutter both-edges overscroll none *", idea: "both-edges gutter + descendant overscroll none", suffix: "foreignObject{scrollbar-gutter:stable both-edges!important;overflow:auto!important}foreignObject *{overscroll-behavior:none!important}" },
  { slug: "overflow clip modern", idea: "overflow:clip on FO — clip without scroll container", suffix: "foreignObject{overflow:clip!important;overflow-clip-margin:content-box!important}" },
  { slug: "overscroll inherit reset", idea: "overscroll-behavior:initial on FO * — cascade reset probe", suffix: "foreignObject *{overscroll-behavior:initial!important}" },
  { slug: "scroll-padding zero", idea: "scroll-padding:0 all sides — snap inset vs ink bounds", suffix: "foreignObject{scroll-padding:0!important;overflow:auto!important;scroll-snap-type:none!important}" },
  { slug: "scroll-margin zero text leaves", idea: "scroll-margin:0 on FO * — scrollIntoView margin reset", suffix: "foreignObject *{scroll-margin:0!important;scroll-margin-block:0!important;scroll-margin-inline:0!important}" },
  { slug: "overscroll inline auto block none", idea: "overscroll-behavior-inline:auto block:none on descendants", suffix: "foreignObject *{overscroll-behavior-inline:auto!important;overscroll-behavior-block:none!important}" },
  { slug: "scrollbar-gutter stable contain size", idea: "stable gutter + contain:size — size containment with gutter", suffix: "foreignObject{scrollbar-gutter:stable!important;contain:size!important;overflow:auto!important}" },
  { slug: "overscroll auto gutter auto", idea: "overscroll auto + scrollbar-gutter auto — dual default scroll", suffix: "foreignObject{overscroll-behavior:auto!important;scrollbar-gutter:auto!important;overflow:auto!important}" },
  { slug: "overflow auto box-sizing border-box", idea: "overflow:auto + explicit border-box on FO scroll root", suffix: "foreignObject{overflow:auto!important;box-sizing:border-box!important;width:100%!important;height:100%!important}" },
  { slug: "scroll snap none + gutter stable", idea: "scroll-snap-type:none + stable gutter — disable snap with reserved gutter", suffix: "foreignObject{scroll-snap-type:none!important;scrollbar-gutter:stable!important;overflow:auto!important}" },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const css = spec.noLeaf ? FO_BASELINE_CSS + spec.suffix : FO_BASELINE_CSS + LEAF + spec.suffix
  /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
  const recipe = {
    id: 'brain-l36-000'.replace('-000', `-${num}`),
    label: `Brain L36 #${num}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject: spec.extra?.inject ?? 'capture',
    category: 'brainstorm',
    active: true,
    notes: `Brainstorm batch H lane 36; ${spec.slug}; FO-raster — no text bypass.`,
    ...spec.extra,
  }
  return recipe
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-brainstorm-lane-36.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [r.css, r.inject, r.rasterPatch ?? '', r.monkeypatch ?? '', r.radicalPatch ?? '', r.svgRootRound ?? '', r.foSvgPatch ?? '', JSON.stringify(r.svgRootPatch ?? {})].join('\0')
  if (seen.has(key)) throw new Error(`recipes-brainstorm-lane-36.js: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

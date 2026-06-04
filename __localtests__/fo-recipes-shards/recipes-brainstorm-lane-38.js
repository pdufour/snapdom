/**
 * Brainstorm batch H lane 38 — filter / backdrop-filter strip or preserve in FO.
 * 40 FO-raster recipes: brain-l38-001..040. No text bypass.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ slug: string, idea: string, suffix: string, noLeaf?: boolean, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  { slug: "filter none FO root", idea: "filter:none on FO root — strip inherited SVG/CSS filters", suffix: "foreignObject{filter:none!important}" },
  { slug: "filter none FO star", idea: "filter:none on FO * — full subtree filter strip", suffix: "foreignObject,foreignObject *{filter:none!important}" },
  { slug: "filter opacity identity", idea: "filter:opacity(100%) identity — compositor hook without change", suffix: "foreignObject{filter:opacity(100%)!important}" },
  { slug: "backdrop-filter none", idea: "backdrop-filter:none on FO — strip backdrop compositing", suffix: "foreignObject{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}" },
  { slug: "backdrop-filter blur zero", idea: "backdrop-filter:blur(0) — layer promotion without visible blur", suffix: "foreignObject{backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important}" },
  { slug: "webkit backdrop none", idea: "-webkit-backdrop-filter:none explicit on FO", suffix: "foreignObject{-webkit-backdrop-filter:none!important}" },
  { slug: "radical remove-fe-filters", idea: "remove-fe-filters radical — strip SVG fe* filter graph", suffix: "foreignObject{filter:none!important}", extra: {"inject":"both","radicalPatch":"remove-fe-filters"} },
  { slug: "foSvg filter-noop-defs", idea: "filter-noop-defs SVG patch — empty filter defs noop", suffix: "", extra: {"inject":"both","foSvgPatch":"filter-noop-defs"} },
  { slug: "foSvg filter-empty-nop", idea: "filter-empty-nop SVG patch — filter attr without effect", suffix: "", extra: {"inject":"both","foSvgPatch":"filter-empty-nop"} },
  { slug: "fe-color-matrix identity", idea: "fe-color-matrix-identity patch — color matrix noop in filter chain", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-color-matrix-identity"} },
  { slug: "fe-morphology identity", idea: "fe-morphology-identity patch — morphology noop filter", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-morphology-identity"} },
  { slug: "fe-component-transfer identity", idea: "fe-component-transfer-identity — transfer noop in filter graph", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-component-transfer-identity"} },
  { slug: "fe-merge empty", idea: "fe-merge-empty patch — empty merge filter primitive", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-merge-empty"} },
  { slug: "isolation + filter none", idea: "isolation:isolate + filter:none — compositor group without filters", suffix: "foreignObject{isolation:isolate!important;filter:none!important}" },
  { slug: "will-change auto reset", idea: "will-change:auto on FO — drop filter promotion layer hint", suffix: "foreignObject{will-change:auto!important;filter:none!important}" },
  { slug: "transform none FO", idea: "transform:none on FO — collapse filter-containing block", suffix: "foreignObject{transform:none!important;filter:none!important}" },
  { slug: "mix-blend normal filter none", idea: "mix-blend-mode:normal + filter:none — blend + filter reset", suffix: "foreignObject{mix-blend-mode:normal!important;filter:none!important}" },
  { slug: "backdrop blur zero isolation", idea: "backdrop-filter blur(0) + isolation:isolate", suffix: "foreignObject{backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important;isolation:isolate!important}" },
  { slug: "filter brightness identity", idea: "filter:brightness(1) — brightness identity compositor probe", suffix: "foreignObject{filter:brightness(1)!important}" },
  { slug: "filter contrast identity", idea: "filter:contrast(1) — contrast identity compositor probe", suffix: "foreignObject{filter:contrast(1)!important}" },
  { slug: "filter saturate identity", idea: "filter:saturate(1) — saturation identity compositor probe", suffix: "foreignObject{filter:saturate(1)!important}" },
  { slug: "backdrop none on FO star", idea: "backdrop-filter:none on FO * — descendant backdrop strip", suffix: "foreignObject *{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}" },
  { slug: "filter + backdrop none combo", idea: "filter:none + backdrop-filter:none on FO root", suffix: "foreignObject{filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}" },
  { slug: "fe-displacement-map identity", idea: "fe-displacement-map-identity patch — displacement noop", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-displacement-map-identity"} },
  { slug: "fe-turbulence composite", idea: "fe-turbulence-composite patch — turbulence filter noop probe", suffix: "", extra: {"inject":"both","foSvgPatch":"fe-turbulence-composite"} },
  { slug: "radical remove-filters-and-masks", idea: "remove-filters-and-masks radical — strip filters + masks", suffix: "foreignObject{filter:none!important}", extra: {"inject":"both","radicalPatch":"remove-filters-and-masks"} },
  { slug: "opacity 1 filter none", idea: "opacity:1 + filter:none — alpha + filter stack reset", suffix: "foreignObject{opacity:1!important;filter:none!important}" },
  { slug: "webkit backdrop blur zero", idea: "-webkit-backdrop-filter:blur(0) only — webkit backdrop hook", suffix: "foreignObject{-webkit-backdrop-filter:blur(0)!important}" },
  { slug: "filter none overflow visible", idea: "filter:none + overflow:visible — no clip with filter strip", suffix: "foreignObject{filter:none!important;overflow:visible!important}" },
  { slug: "preserve brightness FO only", idea: "filter:brightness(1) on FO, filter:none on descendants", suffix: "foreignObject{filter:brightness(1)!important}foreignObject *{filter:none!important}" },
  { slug: "strip descendant filters only", idea: "filter:none on FO * only — preserve root filter if any", suffix: "foreignObject *{filter:none!important;backdrop-filter:none!important}" },
  { slug: "filter none + fe merge empty", idea: "CSS filter:none + fe-merge-empty SVG patch double strip", suffix: "foreignObject{filter:none!important}", extra: {"inject":"both","foSvgPatch":"fe-merge-empty"} },
  { slug: "backdrop preserve blur zero webkit", idea: "backdrop blur(0) preserve + -webkit prefix both", suffix: "foreignObject>div{backdrop-filter:blur(0)!important;-webkit-backdrop-filter:blur(0)!important}" },
  { slug: "isolation isolate backdrop none", idea: "isolation:isolate + backdrop-filter:none", suffix: "foreignObject{isolation:isolate!important;backdrop-filter:none!important}" },
  { slug: "fo-shape-rendering auto patch", idea: "fo-shape-rendering-auto patch + filter:none CSS", suffix: "foreignObject{filter:none!important}", extra: {"inject":"both","foSvgPatch":"fo-shape-rendering-auto"} },
  { slug: "remove-fe + filter none css", idea: "remove-fe-filters radical + CSS filter:none on FO *", suffix: "foreignObject,foreignObject *{filter:none!important;backdrop-filter:none!important}", extra: {"inject":"both","radicalPatch":"remove-fe-filters"} },
  { slug: "fe merge + backdrop none", idea: "fe-merge-empty + backdrop-filter:none combo", suffix: "foreignObject{backdrop-filter:none!important}", extra: {"inject":"both","foSvgPatch":"fe-merge-empty"} },
  { slug: "cap strip filter backdrop blend", idea: "filter:none + backdrop:none + isolation + mix-blend normal", suffix: "foreignObject{filter:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;isolation:isolate!important;mix-blend-mode:normal!important}" },
  { slug: "filter grayscale identity", idea: "filter:grayscale(0) — grayscale identity compositor probe", suffix: "foreignObject{filter:grayscale(0)!important}" },
  { slug: "fe merge + filter brightness identity", idea: "fe-merge-empty patch + filter:brightness(1) preserve hook", suffix: "foreignObject{filter:brightness(1)!important}", extra: {"inject":"both","foSvgPatch":"fe-merge-empty"} },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec, i) => {
  const num = String(i + 1).padStart(3, '0')
  const css = spec.noLeaf ? FO_BASELINE_CSS + spec.suffix : FO_BASELINE_CSS + LEAF + spec.suffix
  /** @type {import('../fo-fix-recipes.js').FoFixRecipe} */
  const recipe = {
    id: 'brain-l38-000'.replace('-000', `-${num}`),
    label: `Brain L38 #${num}: ${spec.slug}`,
    idea: spec.idea,
    css,
    inject: spec.extra?.inject ?? 'capture',
    category: 'brainstorm',
    active: true,
    notes: `Brainstorm batch H lane 38; ${spec.slug}; FO-raster — no text bypass.`,
    ...spec.extra,
  }
  return recipe
})

if (RECIPES.length !== 40) {
  throw new Error(`recipes-brainstorm-lane-38.js: expected 40 recipes, got ${RECIPES.length}`)
}

const seen = new Set()
for (const r of RECIPES) {
  const key = [r.css, r.inject, r.rasterPatch ?? '', r.monkeypatch ?? '', r.radicalPatch ?? '', r.svgRootRound ?? '', r.foSvgPatch ?? '', JSON.stringify(r.svgRootPatch ?? {})].join('\0')
  if (seen.has(key)) throw new Error(`recipes-brainstorm-lane-38.js: duplicate recipe key ${r.id}`)
  seen.add(key)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

#!/usr/bin/env node
/**
 * Generate Worker batch D brainstorm shards (lanes 16–20).
 * FO raster only — category no-text-bypass / float-precision (lane 16).
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dir, 'fo-recipes-shards')

const TEXT_LEAF =
  "const TEXT_LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'"
const CHROMIUM =
  "foreignObject{font-kerning:normal!important;font-synthesis:none!important}"

function pad(n) {
  return String(n).padStart(3, '0')
}

/** @param {number} lane @param {import('./fo-fix-recipe-shared.js').FoFixRecipe[]} recipes */
function writeLane(lane, recipes) {
  if (recipes.length !== 40) {
    throw new Error(`lane ${lane}: expected 40 recipes, got ${recipes.length}`)
  }
  const body = recipes
    .map((r) => {
      const lines = [
        '  {',
        `    id: '${r.id}',`,
        `    label: '${r.label.replace(/'/g, "\\'")}',`,
        `    idea: '${r.idea.replace(/'/g, "\\'")}',`,
        `    css: ${r.cssExpr},`,
        `    inject: '${r.inject}',`,
        `    category: '${r.category}',`,
        '    active: true,',
      ]
      if (r.rasterPatch) lines.push(`    rasterPatch: '${r.rasterPatch}',`)
      if (r.svgRootRound) lines.push(`    svgRootRound: '${r.svgRootRound}',`)
      if (r.foAttrPatch) {
        lines.push(`    foAttrPatch: ${JSON.stringify(r.foAttrPatch)},`)
      }
      if (r.radicalPatch) lines.push(`    radicalPatch: '${r.radicalPatch}',`)
      if (r.foSvgPatch) lines.push(`    foSvgPatch: '${r.foSvgPatch}',`)
      lines.push(`    notes: '${r.notes.replace(/'/g, "\\'")}',`)
      lines.push('  },')
      return lines.join('\n')
    })
    .join('\n')

  const themes = {
    16: 'computed style precision (#104 four-decimal / FO attr bump variants)',
    17: 'inline flex children display/block toggles',
    18: 'nav-like flex row cross-stretch (structural CSS, no nav selectors)',
    19: 'anchor/text leaf height:100% / align-self stretch',
    20: 'border-box vs content-box FO subtree pinning',
  }

  const src = `/**
 * FO decode brainstorm — Worker batch D lane ${lane}.
 * Theme: ${themes[lane]}
 * 40 recipes: brain-l${lane}-001..040 — FO raster only, no text bypass.
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

${TEXT_LEAF}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
${body}
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
  const path = join(outDir, `recipes-brainstorm-lane-${lane}.js`)
  writeFileSync(path, src)
  return path
}

const T = 'FO_BASELINE_CSS + TEXT_LEAF'
const TC = `FO_BASELINE_CSS + TEXT_LEAF + '${CHROMIUM}'`

/** @typedef {{ id: string, label: string, idea: string, cssExpr: string, inject: string, category: string, notes: string, rasterPatch?: string, svgRootRound?: string, foAttrPatch?: Record<string,string>, radicalPatch?: string }} Spec */

/** @returns {Spec[]} */
function lane16() {
  const cat = 'float-precision'
  const bump = (xy, extra = {}) => ({
    foAttrPatch: { x: xy, y: xy, ...extra },
  })
  /** @type {Spec[]} */
  const specs = [
    { label: 'fo-attr xy +0.0001', idea: 'Chromium #104-style FO origin bump on x/y attrs only', cssExpr: 'FO_BASELINE_CSS', inject: 'both', rasterPatch: 'decode-interval', ...bump('0.0001') },
    { label: 'fo-attr xy -0.0001', idea: 'Negative FO origin bump (symmetry probe)', cssExpr: 'FO_BASELINE_CSS', inject: 'both', rasterPatch: 'decode-interval', ...bump('-0.0001') },
    { label: 'fo-attr x only +0.0001', idea: 'FO x attr bump only', cssExpr: 'FO_BASELINE_CSS', inject: 'both', rasterPatch: 'decode-interval', foAttrPatch: { x: '0.0001' } },
    { label: 'fo-attr y only +0.0001', idea: 'FO y attr bump only', cssExpr: 'FO_BASELINE_CSS', inject: 'both', rasterPatch: 'decode-interval', foAttrPatch: { y: '0.0001' } },
    { label: 'fo-attr xy +0.00001', idea: 'Sub-0.0001 FO origin bump magnitude', cssExpr: 'FO_BASELINE_CSS', inject: 'both', rasterPatch: 'decode-interval', ...bump('0.00001') },
    { label: 'fo bump + int-vb', idea: 'FO attr bump + integer viewBox snap before decode', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox', ...bump('0.0001') },
    { label: 'fo bump + round-dims', idea: 'FO attr bump + round-dims on SVG root', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'round-dims', ...bump('0.0001') },
    { label: 'fo bump + int-floor', idea: 'FO attr bump + int-floor root dims', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'int-floor', ...bump('0.0001') },
    { label: 'fo bump fonts-ready', idea: 'FO attr bump + fonts.ready interval gate', cssExpr: T, inject: 'both', rasterPatch: 'fonts-ready-interval', ...bump('0.0001') },
    { label: 'fo bump double-raf', idea: 'FO attr bump + double rAF before drawImage', cssExpr: T, inject: 'both', rasterPatch: 'double-raf', ...bump('0.0001') },
    { label: 'int-vb decode', idea: 'Integer viewBox only (no attr bump)', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox' },
    { label: 'round-dims decode', idea: 'Round SVG root dims + decode-interval', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'round-dims' },
    { label: 'int-floor decode', idea: 'Floor root dims + decode-interval', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'int-floor' },
    { label: 'device-grid-floor', idea: 'Device pixel grid floor raster path', cssExpr: T, inject: 'both', rasterPatch: 'device-grid-floor' },
    { label: 'chromium bump decode', idea: 'Chromium font copy + FO bump + decode-interval', cssExpr: TC, inject: 'both', rasterPatch: 'decode-interval', ...bump('0.0001') },
    { label: 'fo w/h +0.0001', idea: 'FO width/height attr micro-bump (four-decimal bleed)', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', foAttrPatch: { width: '0.0001', height: '0.0001' } },
    { label: 'fo xywh bump', idea: 'FO x/y/width/height combined micro-bump', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', foAttrPatch: { x: '0.0001', y: '0.0001', width: '0.0001', height: '0.0001' } },
    { label: 'translateZ layer', idea: 'Compositor layer hint on FO (subpixel grid)', cssExpr: `${T} + 'foreignObject{transform:translateZ(0)!important}'`, inject: 'both', rasterPatch: 'decode-interval' },
    { label: 'will-change transform', idea: 'will-change:transform on FO for layer promotion', cssExpr: `${T} + 'foreignObject{will-change:transform!important}'`, inject: 'both', rasterPatch: 'decode-interval' },
    { label: 'backface-visibility hidden', idea: 'backface-visibility:hidden on FO subtree', cssExpr: `${T} + 'foreignObject{backface-visibility:hidden!important}'`, inject: 'both', rasterPatch: 'decode-interval' },
    { label: 'integer-snap rects', idea: 'Harness integer-snap-all-rects on serialized SVG', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', radicalPatch: 'integer-snap-all-rects' },
    { label: 'bump int-snap rects', idea: 'FO bump + integer-snap-all-rects', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', radicalPatch: 'integer-snap-all-rects', ...bump('0.0001') },
    { label: 'round() fo size', idea: 'CSS round() on FO width/height (supported engines)', cssExpr: `${T} + 'foreignObject{width:round(up,100%,1px)!important;height:round(up,100%,1px)!important}'`, inject: 'both', rasterPatch: 'decode-interval' },
    { label: 'lh normal precision', idea: 'line-height:normal on FO * + FO bump', cssExpr: `${T} + 'foreignObject *{line-height:normal!important}'`, inject: 'both', rasterPatch: 'decode-interval', ...bump('0.0001') },
    { label: 'from-font lh bump', idea: 'line-height:from-font + FO bump', cssExpr: `${T} + 'foreignObject *{line-height:from-font!important}'`, inject: 'both', rasterPatch: 'decode-interval', ...bump('0.0001') },
    { label: 'int-vb chromium', idea: 'integer-viewbox + Chromium copy + decode', cssExpr: TC, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox' },
    { label: 'int-vb fonts-ready', idea: 'integer-viewbox + fonts.ready interval', cssExpr: T, inject: 'both', rasterPatch: 'fonts-ready-interval', svgRootRound: 'integer-viewbox' },
    { label: 'int-vb microtask', idea: 'integer-viewbox + decode-microtask-twice', cssExpr: T, inject: 'both', rasterPatch: 'decode-microtask-twice', svgRootRound: 'integer-viewbox' },
    { label: 'bump decode-raf', idea: 'FO bump + decode-interval-raf', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval-raf', ...bump('0.0001') },
    { label: 'bump pre-decode-dom', idea: 'FO bump + pre-decode-dom wait', cssExpr: T, inject: 'both', rasterPatch: 'pre-decode-dom', ...bump('0.0001') },
    { label: 'contain layout style', idea: 'contain:layout style on FO (paint isolation)', cssExpr: `${T} + 'foreignObject{contain:layout style!important}'`, inject: 'both', rasterPatch: 'decode-interval' },
    { label: 'isolation isolate', idea: 'isolation:isolate on FO root', cssExpr: `${T} + 'foreignObject{isolation:isolate!important}'`, inject: 'both', rasterPatch: 'decode-interval' },
    { label: 'shape-rendering crisp', idea: 'shape-rendering:crispEdges on FO', cssExpr: `${T} + 'foreignObject{shape-rendering:crispEdges!important}'`, inject: 'both', rasterPatch: 'decode-interval', foSvgPatch: 'fo-shape-rendering-auto' },
    { label: 'text-rendering geometric', idea: 'text-rendering:geometricPrecision on FO *', cssExpr: `${T} + 'foreignObject *{text-rendering:geometricPrecision!important}'`, inject: 'both', rasterPatch: 'decode-interval', ...bump('0.0001') },
    { label: 'pin-lh from live', idea: 'Harness pin line-height from live + int-vb', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', svgRootRound: 'integer-viewbox', radicalPatch: 'h2-pin-line-height-from-live' },
    { label: 'pin-lh bump', idea: 'pin line-height from live + FO bump', cssExpr: T, inject: 'both', rasterPatch: 'decode-interval', radicalPatch: 'h2-pin-line-height-from-live', ...bump('0.0001') },
    { label: 'triple-decode bump', idea: 'FO bump + triple-decode raster', cssExpr: T, inject: 'both', rasterPatch: 'triple-decode', ...bump('0.0001') },
    { label: 'two-stage int-vb', idea: 'integer-viewbox + two-stage raster', cssExpr: T, inject: 'both', rasterPatch: 'two-stage', svgRootRound: 'integer-viewbox' },
    { label: 'blob-url bump', idea: 'FO bump + blob-url decode path', cssExpr: T, inject: 'both', rasterPatch: 'blob-url-decode-interval', ...bump('0.0001') },
    { label: 'canvas-pixelated int-vb', idea: 'integer-viewbox + canvas-pixelated draw', cssExpr: T, inject: 'both', rasterPatch: 'canvas-pixelated', svgRootRound: 'integer-viewbox' },
  ]
  return specs.map((s, i) => ({
    ...s,
    id: `brain-l16-${pad(i + 1)}`,
    category: cat,
    notes: `Brainstorm batch D lane 16 #${pad(i + 1)}; ${s.label} — FO-only, no text bypass.`,
  }))
}

/** @returns {Spec[]} */
function lane17() {
  const cat = 'flex'
  const flexRow = 'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important}'
  /** @type {Spec[]} */
  const knobs = [
    ['child-block-star', 'foreignObject>div *{display:block!important}', 'All FO descendants display:block under flex row'],
    ['anchor-block', 'foreignObject a{display:block!important}', 'Anchors display:block in flex row'],
    ['span-block', 'foreignObject span{display:block!important}', 'Spans display:block'],
    ['direct-child-block', 'foreignObject>div>*{display:block!important}', 'Direct children of capture wrapper block'],
    ['inline-block-anchors', 'foreignObject a{display:inline-block!important;vertical-align:baseline!important}', 'Anchors inline-block baseline'],
    ['contents-wrapper', 'foreignObject>div{display:contents!important}', 'Wrapper display:contents (unwrap flex)'],
    ['fo-flex-block-children', 'foreignObject{display:flex!important;flex-direction:row!important}foreignObject *{display:block!important}', 'FO root flex; all children block'],
    ['fo-inline-flex', 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:center!important}', 'FO as inline-flex row'],
    ['flex-item-blockify', `${flexRow}foreignObject>div>a{display:block!important;width:auto!important}`, 'Flex row + blockified links'],
    ['flex-inline-children', `${flexRow}foreignObject>div *{display:inline!important}`, 'Flex row but children inline'],
    ['flex-inline-block', `${flexRow}foreignObject>div *{display:inline-block!important}`, 'Flex row inline-block children'],
    ['flex-table-cell', `${flexRow}foreignObject a{display:table-cell!important;vertical-align:middle!important}`, 'table-cell display on anchors'],
    ['flex-flow-column', 'foreignObject>div{display:flex!important;flex-direction:column!important}', 'Column flex on wrapper'],
    ['flex-wrap-nowrap', `${flexRow}foreignObject>div{flex-wrap:nowrap!important}`, 'nowrap flex row'],
    ['flex-basis-auto', `${flexRow}foreignObject a{flex:0 1 auto!important}`, 'flex shorthand on anchors'],
    ['flex-grow-0', `${flexRow}foreignObject a{flex-grow:0!important}`, 'flex-grow:0 on anchors'],
    ['flex-shrink-0', `${flexRow}foreignObject a{flex-shrink:0!important}`, 'flex-shrink:0 on anchors'],
    ['block-fo-root', 'foreignObject{display:block!important}', 'FO root display:block (non-flex)'],
    ['block-wrapper-only', 'foreignObject>div{display:block!important}', 'Wrapper block only'],
    ['inline-flex-wrapper', 'foreignObject>div{display:inline-flex!important;flex-direction:row!important;gap:0!important}', 'inline-flex on wrapper'],
    ['flex-reverse-row', 'foreignObject>div{display:flex!important;flex-direction:row-reverse!important;gap:0!important}', 'row-reverse flex'],
    ['flex-column-reverse', 'foreignObject>div{display:flex!important;flex-direction:column-reverse!important}', 'column-reverse'],
    ['display-list-item', 'foreignObject a{display:list-item!important}', 'list-item on anchors'],
    ['display-flow-root', 'foreignObject>div{display:flow-root!important}', 'flow-root wrapper'],
    ['display-grid-fallback', 'foreignObject>div{display:grid!important;grid-auto-flow:column!important;gap:0!important}', 'grid auto-flow column (blockify probe)'],
    ['ruby-display', 'foreignObject a{display:ruby!important}', 'ruby display on text leaf'],
    ['run-in', 'foreignObject span:first-child{display:run-in!important}', 'run-in on first span'],
    ['flex-inline-flex-mix', `${flexRow}foreignObject a{display:inline-flex!important;align-items:center!important}`, 'inline-flex anchors in row'],
    ['blockify-star-minw0', `${flexRow}foreignObject *{display:block!important;min-width:0!important}`, 'block + min-width 0'],
    ['chromium-flex-block', `${flexRow}foreignObject a{display:block!important}`, 'Chromium font copy + block anchors', CHROMIUM],
    ['lh-normal-flex-block', `${flexRow}foreignObject *{display:block!important;line-height:normal!important}`, 'block children + lh normal'],
    ['from-font-flex-block', `${flexRow}foreignObject *{display:block!important;line-height:from-font!important}`, 'block + from-font lh'],
    ['decode-flex-block', `${flexRow}foreignObject a{display:block!important}`, 'block anchors + decode-interval', null, 'decode-interval'],
    ['int-vb-flex-block', `${flexRow}foreignObject a{display:block!important}`, 'block anchors + integer-viewbox', null, 'decode-interval', 'integer-viewbox'],
    ['contents-a-block', 'foreignObject>div{display:contents!important}foreignObject a{display:block!important}', 'contents wrapper + block anchors'],
    ['flex-place-center', `${flexRow}foreignObject>div{place-content:center!important}`, 'place-content center'],
    ['align-items-baseline-block', 'foreignObject>div{display:flex!important;align-items:baseline!important}foreignObject a{display:block!important}', 'baseline cross + block anchors'],
    ['align-items-stretch-block', 'foreignObject>div{display:flex!important;align-items:stretch!important}foreignObject a{display:block!important}', 'stretch cross + block anchors'],
    ['gap-0-block-chromium', `${flexRow}foreignObject *{display:block!important}`, 'Chromium + block all descendants', CHROMIUM],
    ['double-decode-block', `${flexRow}foreignObject a{display:block!important}`, 'block anchors + double-decode raster', null, 'double-decode'],
  ]
  return knobs.map((row, i) => {
    const [slug, cssExtra, idea, chrom, raster, svgRound] = row
    const cssExpr =
      chrom === CHROMIUM ? `${TC} + '${cssExtra}'` : `${T} + '${cssExtra}'`
    return {
      id: `brain-l17-${pad(i + 1)}`,
      label: slug,
      idea: idea || slug,
      cssExpr,
      inject: 'both',
      category: cat,
      rasterPatch: raster || 'decode-interval',
      svgRootRound: svgRound,
      notes: `Brainstorm batch D lane 17 #${pad(i + 1)}; ${slug} — FO-only, no text bypass.`,
    }
  })
}

/** @returns {Spec[]} */
function lane18() {
  const cat = 'flex'
  const stretchRow =
    'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;gap:0!important;overflow:visible!important}'
  const stretchDiv =
    'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:stretch!important;gap:0!important;min-height:0!important}'
  /** @type {[string,string,string?,string?,string?][]} */
  const knobs = [
    ['fo-stretch-row', stretchRow, 'FO root flex row align-items:stretch (structural)'],
    ['wrapper-stretch-row', stretchDiv, 'Capture wrapper flex row stretch'],
    ['stretch-minh0', `${stretchRow}foreignObject *{min-height:0!important}`, 'stretch row + min-height:0 on descendants'],
    ['stretch-align-self', `${stretchRow}foreignObject *{align-self:stretch!important}`, 'stretch row + align-self stretch on *'],
    ['stretch-a-self', `${stretchRow}foreignObject a{align-self:stretch!important}`, 'stretch row + anchor align-self stretch'],
    ['stretch-height-auto', `${stretchRow}foreignObject *{height:auto!important;align-self:stretch!important}`, 'height:auto + align-self stretch'],
    ['stretch-inline-block-a', `${stretchRow}foreignObject a{display:inline-block!important;align-self:stretch!important}`, 'inline-block anchors in stretch row'],
    ['stretch-lh-normal', `${stretchRow}foreignObject *{line-height:normal!important}`, 'stretch + lh normal'],
    ['stretch-from-font', `${stretchRow}foreignObject *{line-height:from-font!important}`, 'stretch + from-font lh'],
    ['stretch-chromium', `${stretchRow}`, 'stretch row + Chromium font copy', CHROMIUM],
    ['stretch-gap0-wrap', `${stretchRow}foreignObject{flex-wrap:nowrap!important}`, 'stretch nowrap'],
    ['stretch-justify-between', `${stretchRow}foreignObject{justify-content:space-between!important}`, 'stretch + space-between'],
    ['stretch-justify-center', `${stretchRow}foreignObject{justify-content:center!important}`, 'stretch + center main'],
    ['stretch-place-start', `${stretchRow}foreignObject{place-items:stretch start!important}`, 'place-items stretch start'],
    ['stretch-cross-start', `${stretchRow}foreignObject *{align-self:flex-start!important}`, 'align-self flex-start (contrast)'],
    ['stretch-cross-end', `${stretchRow}foreignObject *{align-self:flex-end!important}`, 'align-self flex-end'],
    ['stretch-cross-center', `${stretchRow}foreignObject *{align-self:center!important}`, 'align-self center on *'],
    ['stretch-cross-baseline', `${stretchRow}foreignObject{align-items:baseline!important}foreignObject *{align-self:stretch!important}`, 'baseline container + stretch items'],
    ['wrapper-stretch-a', `${stretchDiv}foreignObject a{align-self:stretch!important}`, 'wrapper stretch + anchor stretch'],
    ['wrapper-stretch-star', `${stretchDiv}foreignObject *{align-self:stretch!important}`, 'wrapper stretch + * stretch'],
    ['inline-flex-stretch', 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:stretch!important;gap:0!important}', 'inline-flex stretch row'],
    ['stretch-align-content', `${stretchRow}foreignObject{align-content:stretch!important}`, 'align-content stretch'],
    ['stretch-flex-1', `${stretchRow}foreignObject a{flex:1 1 auto!important;align-self:stretch!important}`, 'flex:1 on anchors'],
    ['stretch-minw0', `${stretchRow}foreignObject *{min-width:0!important;align-self:stretch!important}`, 'min-width:0 + stretch'],
    ['stretch-box-border', `${stretchRow}foreignObject *{box-sizing:border-box!important;align-self:stretch!important}`, 'explicit border-box + stretch'],
    ['stretch-vertical-align', `${stretchRow}foreignObject a{vertical-align:top!important;align-self:stretch!important}`, 'vertical-align top + stretch'],
    ['stretch-overflow-visible', `${stretchRow}foreignObject *{overflow:visible!important}`, 'overflow visible on *'],
    ['stretch-contain-none', `${stretchRow}foreignObject *{contain:none!important}`, 'contain:none on *'],
    ['stretch-decode', stretchRow, 'stretch row decode-interval', null, 'decode-interval'],
    ['stretch-int-vb', stretchRow, 'stretch + integer-viewbox', null, 'decode-interval', 'integer-viewbox'],
    ['stretch-fonts-ready', stretchRow, 'stretch + fonts.ready', null, 'fonts-ready-interval'],
    ['stretch-double-raf', stretchRow, 'stretch + double-raf', null, 'double-raf'],
    ['stretch-pin-flex-leaf', stretchRow, 'stretch + h2-flex-stretch-leaf-from-live', null, 'decode-interval', null, 'h2-flex-stretch-leaf-from-live'],
    ['stretch-pin-lh', `${stretchRow}foreignObject *{line-height:normal!important}`, 'stretch + pin lh from live', null, 'decode-interval', null, 'h2-pin-line-height-from-live'],
    ['stretch-integer-snap', stretchRow, 'stretch + integer-snap-all-rects', null, 'decode-interval', null, 'integer-snap-all-rects'],
    ['stretch-wrapper-center-items', 'foreignObject>div{display:flex!important;align-items:stretch!important}foreignObject a{align-self:stretch!important}', 'wrapper flex stretch + anchor stretch'],
    ['stretch-row-col-mix', 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important}foreignObject>div{display:flex!important;flex-direction:column!important;align-items:stretch!important}', 'nested row+column stretch'],
    ['stretch-height-100-star', `${stretchRow}foreignObject *{height:100%!important;align-self:stretch!important}`, 'height 100% + stretch (structural)'],
    ['stretch-align-items-center-self', `${stretchRow}foreignObject{align-items:center!important}foreignObject a{align-self:stretch!important}`, 'center cross on FO, stretch on anchors'],
    ['stretch-gap0-baseline-items', `${stretchRow}foreignObject *{align-self:stretch!important;vertical-align:baseline!important}`, 'stretch + baseline vertical-align'],
  ]
  return knobs.map((row, i) => {
    const [slug, cssPart, idea, chrom, raster, svgRound, radical] = row
    let cssExpr = T
    if (chrom) cssExpr = TC
    cssExpr += ` + '${cssPart}'`
    return {
      id: `brain-l18-${pad(i + 1)}`,
      label: slug,
      idea,
      cssExpr,
      inject: 'both',
      category: cat,
      rasterPatch: raster || 'decode-interval',
      svgRootRound: svgRound || undefined,
      radicalPatch: radical || undefined,
      notes: `Brainstorm batch D lane 18 #${pad(i + 1)}; ${slug} — structural flex stretch, no nav selectors.`,
    }
  })
}

/** @returns {Spec[]} */
function lane19() {
  const cat = 'flex'
  const flexParent =
    'foreignObject>div{display:flex!important;flex-direction:row!important;align-items:stretch!important;gap:0!important}'
  /** @type {[string,string,string?,string?,string?][]} */
  const knobs = [
    ['a-height-100', `${flexParent}foreignObject a{height:100%!important}`, 'Anchor height:100% in stretch flex row'],
    ['a-min-height-100', `${flexParent}foreignObject a{min-height:100%!important}`, 'Anchor min-height:100%'],
    ['a-align-self-stretch', `${flexParent}foreignObject a{align-self:stretch!important}`, 'align-self:stretch on anchors'],
    ['a-height-100-stretch', `${flexParent}foreignObject a{height:100%!important;align-self:stretch!important}`, 'height 100% + align-self stretch'],
    ['star-height-100', `${flexParent}foreignObject *{height:100%!important}`, 'height 100% on all FO descendants'],
    ['star-align-self-stretch', `${flexParent}foreignObject *{align-self:stretch!important}`, 'align-self stretch on *'],
    ['span-height-100', `${flexParent}foreignObject span{height:100%!important}`, 'span height 100%'],
    ['span-align-self-stretch', `${flexParent}foreignObject span{align-self:stretch!important}`, 'span align-self stretch'],
    ['a-block-stretch', `${flexParent}foreignObject a{display:block!important;height:100%!important;align-self:stretch!important}`, 'block anchor + height 100% + stretch'],
    ['a-inline-block-stretch', `${flexParent}foreignObject a{display:inline-block!important;height:100%!important;align-self:stretch!important}`, 'inline-block + height 100%'],
    ['a-flex-stretch', `${flexParent}foreignObject a{display:flex!important;align-items:center!important;height:100%!important}`, 'anchor as flex container height 100%'],
    ['fo-stretch-a-height', 'foreignObject{display:flex!important;align-items:stretch!important}foreignObject a{height:100%!important}', 'FO stretch + anchor height 100%'],
    ['wrapper-stretch-leaf', `${flexParent}foreignObject>div>a{height:100%!important;align-self:stretch!important}`, 'direct child anchor height 100%'],
    ['max-height-100', `${flexParent}foreignObject a{max-height:100%!important;align-self:stretch!important}`, 'max-height 100% on anchors'],
    ['height-100-lh-normal', `${flexParent}foreignObject a{height:100%!important;line-height:normal!important}`, 'height 100% + lh normal'],
    ['height-100-from-font', `${flexParent}foreignObject a{height:100%!important;line-height:from-font!important}`, 'height 100% + from-font'],
    ['stretch-no-height', `${flexParent}foreignObject a{align-self:stretch!important;height:auto!important}`, 'stretch only, height auto'],
    ['height-100-vertical-baseline', `${flexParent}foreignObject a{height:100%!important;vertical-align:baseline!important}`, 'height 100% + vertical-align baseline'],
    ['height-100-box-border', `${flexParent}foreignObject a{height:100%!important;box-sizing:border-box!important}`, 'height 100% border-box'],
    ['height-100-content-box', `${flexParent}foreignObject a{height:100%!important;box-sizing:content-box!important}`, 'height 100% content-box'],
    ['align-stretch-chromium', `${flexParent}foreignObject a{align-self:stretch!important}`, 'stretch + Chromium copy', CHROMIUM],
    ['height-100-chromium', `${flexParent}foreignObject a{height:100%!important}`, 'height 100% + Chromium', CHROMIUM],
    ['pin-flex-leaf-stretch', `${flexParent}foreignObject a{align-self:stretch!important}`, 'h2-flex-stretch-leaf-from-live', null, 'decode-interval', null, 'h2-flex-stretch-leaf-from-live'],
    ['pin-lh-height-100', `${flexParent}foreignObject a{height:100%!important;line-height:normal!important}`, 'pin lh + height 100%', null, 'decode-interval', null, 'h2-pin-line-height-from-live'],
    ['height-100-int-vb', `${flexParent}foreignObject a{height:100%!important}`, 'height 100% + int viewBox', null, 'decode-interval', 'integer-viewbox'],
    ['stretch-decode', `${flexParent}foreignObject a{align-self:stretch!important}`, 'align-self stretch decode', null, 'decode-interval'],
    ['height-100-fonts-ready', `${flexParent}foreignObject a{height:100%!important}`, 'height 100% fonts.ready', null, 'fonts-ready-interval'],
    ['stretch-double-raf', `${flexParent}foreignObject a{align-self:stretch!important}`, 'stretch double-raf', null, 'double-raf'],
    ['star-stretch-minh0', `${flexParent}foreignObject *{align-self:stretch!important;min-height:0!important}`, 'stretch * + min-height 0'],
    ['a-stretch-flex-1', `${flexParent}foreignObject a{flex:1 1 auto!important;align-self:stretch!important}`, 'flex 1 + stretch on anchor'],
    ['nested-span-stretch', `${flexParent}foreignObject a span{align-self:stretch!important;display:inline-block!important;height:100%!important}`, 'nested span stretch'],
    ['align-items-center-a-stretch', `${flexParent}foreignObject{align-items:center!important}foreignObject a{align-self:stretch!important;height:100%!important}`, 'center cross, anchor stretch+100%'],
    ['align-items-start-a-stretch', 'foreignObject>div{display:flex!important;align-items:flex-start!important}foreignObject a{align-self:stretch!important;height:100%!important}', 'flex-start cross + anchor stretch'],
    ['fo-row-a-100', 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important}foreignObject a{height:100%!important;align-self:stretch!important}', 'FO row stretch + anchor fill'],
    ['block-height-100', `${flexParent}foreignObject a{display:block!important;height:100%!important}`, 'display block + height 100%'],
    ['inline-height-100', `${flexParent}foreignObject a{display:inline!important;height:100%!important;align-self:stretch!important}`, 'display inline + height 100%'],
    ['table-cell-height', `${flexParent}foreignObject a{display:table-cell!important;height:100%!important;vertical-align:middle!important}`, 'table-cell height 100%'],
    ['grid-place-stretch', 'foreignObject>div{display:grid!important;align-items:stretch!important}foreignObject a{height:100%!important;align-self:stretch!important}', 'grid wrapper stretch + anchor 100%'],
    ['stretch-pin-cross', `${flexParent}foreignObject a{align-self:stretch!important}`, 'pin flex cross from anchor', null, 'decode-interval', null, 'lab-pin-flex-cross-size-from-anchor'],
    ['height-100-integer-snap', `${flexParent}foreignObject a{height:100%!important;align-self:stretch!important}`, 'height 100% + integer-snap', null, 'decode-interval', null, 'integer-snap-all-rects'],
  ]
  return knobs.map((row, i) => {
    const [slug, cssPart, idea, chrom, raster, svgRound, radical] = row
    let cssExpr = T
    if (chrom) cssExpr = TC
    cssExpr += ` + '${cssPart}'`
    return {
      id: `brain-l19-${pad(i + 1)}`,
      label: slug,
      idea,
      cssExpr,
      inject: 'both',
      category: cat,
      rasterPatch: raster || 'decode-interval',
      svgRootRound: svgRound || undefined,
      radicalPatch: radical || undefined,
      notes: `Brainstorm batch D lane 19 #${pad(i + 1)}; ${slug} — anchor/text leaf stretch patterns.`,
    }
  })
}

/** @returns {Spec[]} */
function lane20() {
  const cat = 'no-text-bypass'
  /** @type {[string,string,string?,string?,string?][]} */
  const knobs = [
    ['star-border-box', 'foreignObject *{box-sizing:border-box!important}', 'Explicit border-box on entire FO subtree'],
    ['star-content-box', 'foreignObject *{box-sizing:content-box!important}', 'Explicit content-box on FO subtree'],
    ['star-border-box-minw0', 'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}', 'border-box + min sizes 0'],
    ['div-bb-star-cb', 'foreignObject>div{box-sizing:border-box!important}foreignObject *{box-sizing:content-box!important}', 'wrapper border-box, descendants content-box'],
    ['div-cb-star-bb', 'foreignObject>div{box-sizing:content-box!important}foreignObject *{box-sizing:border-box!important}', 'wrapper content-box, descendants border-box'],
    ['a-border-box', 'foreignObject a{box-sizing:border-box!important}', 'border-box on anchors only'],
    ['a-content-box', 'foreignObject a{box-sizing:content-box!important}', 'content-box on anchors only'],
    ['span-border-box', 'foreignObject span{box-sizing:border-box!important}', 'border-box on spans'],
    ['inherit-box', 'foreignObject *{box-sizing:inherit!important}', 'box-sizing inherit cascade'],
    ['bb-padding-zero', 'foreignObject *{box-sizing:border-box!important;padding:0!important}', 'border-box + zero padding'],
    ['cb-padding-zero', 'foreignObject *{box-sizing:content-box!important;padding:0!important}', 'content-box + zero padding'],
    ['bb-border-zero', 'foreignObject *{box-sizing:border-box!important;border-width:0!important}', 'border-box + zero border'],
    ['cb-border-zero', 'foreignObject *{box-sizing:content-box!important;border-width:0!important}', 'content-box + zero border'],
    ['bb-explicit-1px-border', 'foreignObject *{box-sizing:border-box!important;border:1px solid transparent!important}', 'border-box + transparent 1px border'],
    ['cb-explicit-1px-border', 'foreignObject *{box-sizing:content-box!important;border:1px solid transparent!important}', 'content-box + transparent border'],
    ['bb-chromium', 'foreignObject *{box-sizing:border-box!important}', 'border-box + Chromium copy', CHROMIUM],
    ['cb-chromium', 'foreignObject *{box-sizing:content-box!important}', 'content-box + Chromium', CHROMIUM],
    ['bb-lh-normal', 'foreignObject *{box-sizing:border-box!important;line-height:normal!important}', 'border-box + lh normal'],
    ['cb-lh-normal', 'foreignObject *{box-sizing:content-box!important;line-height:normal!important}', 'content-box + lh normal'],
    ['bb-flex-stretch', 'foreignObject>div{display:flex!important;align-items:stretch!important}foreignObject *{box-sizing:border-box!important}', 'flex stretch + border-box *'],
    ['cb-flex-stretch', 'foreignObject>div{display:flex!important;align-items:stretch!important}foreignObject *{box-sizing:content-box!important}', 'flex stretch + content-box *'],
    ['bb-a-cb-star', 'foreignObject a{box-sizing:content-box!important}foreignObject *:not(a){box-sizing:border-box!important}', 'anchors content-box, others border-box'],
    ['cb-a-bb-star', 'foreignObject a{box-sizing:border-box!important}foreignObject *:not(a){box-sizing:content-box!important}', 'anchors border-box, others content-box'],
    ['bb-decode', 'foreignObject *{box-sizing:border-box!important}', 'border-box decode-interval', null, 'decode-interval'],
    ['cb-decode', 'foreignObject *{box-sizing:content-box!important}', 'content-box decode-interval', null, 'decode-interval'],
    ['bb-int-vb', 'foreignObject *{box-sizing:border-box!important}', 'border-box + integer-viewbox', null, 'decode-interval', 'integer-viewbox'],
    ['cb-int-vb', 'foreignObject *{box-sizing:content-box!important}', 'content-box + integer-viewbox', null, 'decode-interval', 'integer-viewbox'],
    ['bb-fonts-ready', 'foreignObject *{box-sizing:border-box!important}', 'border-box fonts.ready', null, 'fonts-ready-interval'],
    ['bb-double-raf', 'foreignObject *{box-sizing:border-box!important}', 'border-box double-raf', null, 'double-raf'],
    ['bb-integer-snap', 'foreignObject *{box-sizing:border-box!important}', 'border-box integer-snap', null, 'decode-interval', null, 'integer-snap-all-rects'],
    ['cb-integer-snap', 'foreignObject *{box-sizing:content-box!important}', 'content-box integer-snap', null, 'decode-interval', null, 'integer-snap-all-rects'],
    ['bb-pin-lh', 'foreignObject *{box-sizing:border-box!important;line-height:normal!important}', 'border-box pin lh', null, 'decode-interval', null, 'h2-pin-line-height-from-live'],
    ['bb-pin-flex-leaf', 'foreignObject *{box-sizing:border-box!important}', 'border-box flex-stretch-leaf pin', null, 'decode-interval', null, 'h2-flex-stretch-leaf-from-live'],
    ['bb-width-height-explicit', 'foreignObject *{box-sizing:border-box!important;width:auto!important;height:auto!important}', 'border-box + auto w/h'],
    ['cb-width-height-explicit', 'foreignObject *{box-sizing:content-box!important;width:auto!important;height:auto!important}', 'content-box + auto w/h'],
    ['bb-margin-collapse-guard', 'foreignObject *{box-sizing:border-box!important;display:flow-root!important}', 'border-box flow-root on *'],
    ['cb-margin-collapse-guard', 'foreignObject *{box-sizing:content-box!important;display:flow-root!important}', 'content-box flow-root on *'],
    ['bb-baseline-a', 'foreignObject *{box-sizing:border-box!important}foreignObject a{vertical-align:baseline!important}', 'border-box * + baseline anchors'],
    ['cb-baseline-a', 'foreignObject *{box-sizing:content-box!important}foreignObject a{vertical-align:baseline!important}', 'content-box * + baseline anchors'],
    ['bb-cb-mixed-decode', 'foreignObject>div{box-sizing:border-box!important}foreignObject a{box-sizing:content-box!important}foreignObject span{box-sizing:border-box!important}', 'mixed div/a/span box model'],
  ]
  return knobs.map((row, i) => {
    const [slug, cssPart, idea, chrom, raster, svgRound, radical] = row
    const cssExpr = chrom === CHROMIUM ? `${TC} + '${cssPart}'` : `FO_BASELINE_CSS + '${cssPart}'`
    return {
      id: `brain-l20-${pad(i + 1)}`,
      label: slug,
      idea,
      cssExpr,
      inject: 'both',
      category: cat,
      rasterPatch: raster || 'decode-interval',
      svgRootRound: svgRound || undefined,
      radicalPatch: radical || undefined,
      notes: `Brainstorm batch D lane 20 #${pad(i + 1)}; ${slug} — box model pinning.`,
    }
  })
}

const paths = []
for (const [lane, fn] of [
  [16, lane16],
  [17, lane17],
  [18, lane18],
  [19, lane19],
  [20, lane20],
]) {
  paths.push(writeLane(lane, fn()))
}

console.log('Wrote:', paths.join('\n'))

#!/usr/bin/env node
/**
 * One-off generator for brainstorm batch C lanes 11–15 (40 recipes each).
 * Run: node __localtests__/fo-recipes-shards/_gen-brainstorm-batch-c.mjs
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))

const FO_BASELINE = "import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'\n"
const CHROMIUM =
  "const CHROMIUM_COPY =\n" +
  "  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +\n" +
  "  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'\n\n"
const STAR = "foreignObject *"
const FO = "foreignObject"

/** @typedef {{ idea: string, css: string, inject?: string, category?: string, rasterPatch?: string, svgRootRound?: string, radicalPatch?: string, foSvgPatch?: string, svgMarkupPatch?: string, monkeypatch?: string }} Spec */

/** @param {number} lane @param {Spec[]} specs */
function renderLane(lane, specs) {
  if (specs.length !== 40) throw new Error(`lane ${lane}: expected 40 specs, got ${specs.length}`)
  const nn = String(lane).padStart(2, '0')
  const themes = {
    11: 'padding/margin collapse prevention in FO subtree',
    12: 'white-space / word-break / overflow-wrap',
    13: 'transform:none / will-change / contain resets in FO',
    14: 'isolation / stacking / z-index flattening in serialized FO',
    15: 'SVG inject CSS: foreignObject * universal rules',
  }
  const cats = {
    11: 'overflow',
    12: 'text-fix',
    13: 'contain',
    14: 'isolation',
    15: 'fo-try',
  }
  const lines = [
    `/**\n * FO decode brainstorm batch C — lane ${lane}: ${themes[lane]}.\n * IDs brain-l${nn}-001..040; FO-raster only (no text bypass).\n */`,
    FO_BASELINE,
    lane === 11 || lane === 12 || lane === 15 ? CHROMIUM : '',
    '/** @type {import(\'../fo-fix-recipes.js\').FoFixRecipe[]} */',
    'const RECIPES = [',
  ]
  specs.forEach((s, i) => {
    const id = `brain-l${nn}-${String(i + 1).padStart(3, '0')}`
    const label = `Brain lane ${lane} #${String(i + 1).padStart(3, '0')}: ${s.idea.slice(0, 72)}`
    const inject = s.inject ?? 'capture'
    const category = s.category ?? cats[lane]
    const cssExpr = s.css.startsWith('FO_BASELINE_CSS')
      ? s.css
      : `FO_BASELINE_CSS + ${JSON.stringify(s.css)}`
    const parts = [
      '  {',
      `    id: '${id}',`,
      `    label: ${JSON.stringify(label)},`,
      `    idea: ${JSON.stringify(s.idea)},`,
      `    css: ${cssExpr},`,
      `    inject: '${inject}',`,
      `    category: '${category}',`,
      '    active: true,',
    ]
    if (s.rasterPatch) parts.push(`    rasterPatch: '${s.rasterPatch}',`)
    if (s.svgRootRound) parts.push(`    svgRootRound: '${s.svgRootRound}',`)
    if (s.radicalPatch) parts.push(`    radicalPatch: '${s.radicalPatch}',`)
    if (s.foSvgPatch) parts.push(`    foSvgPatch: '${s.foSvgPatch}',`)
    if (s.svgMarkupPatch) parts.push(`    svgMarkupPatch: '${s.svgMarkupPatch}',`)
    if (s.monkeypatch) parts.push(`    monkeypatch: '${s.monkeypatch}',`)
    parts.push(
      `    notes: 'Brainstorm batch C lane ${lane}; FO-raster only — no text bypass.',`,
      '  },',
    )
    lines.push(...parts)
  })
  lines.push(']', '', 'export const FO_FIX_RECIPES_SHARD = RECIPES', 'export default FO_FIX_RECIPES_SHARD', '')
  const file = join(dir, `recipes-brainstorm-lane-${lane}.js`)
  writeFileSync(file, lines.join('\n'))
  return file
}

/** @param {string} extra */
function b(extra) {
  return extra
}

/** @type {Record<number, Spec[]>} */
const LANES = {
  11: [
    { idea: 'margin-block:0 on FO * — zero vertical margins before collapse', css: b(`${STAR}{margin-block:0!important}`) },
    { idea: 'margin-inline:0 on FO * — zero horizontal margins in serialized subtree', css: b(`${STAR}{margin-inline:0!important}`) },
    { idea: 'margin:0 !important on all FO descendants', css: b(`${STAR}{margin:0!important}`) },
    { idea: 'padding-block:0 on FO * — strip vertical padding for box-size parity', css: b(`${STAR}{padding-block:0!important}`) },
    { idea: 'padding-inline:0 on FO * — strip horizontal padding in FO', css: b(`${STAR}{padding-inline:0!important}`) },
    { idea: 'padding:0 on FO * — full padding reset inside FO', css: b(`${STAR}{padding:0!important}`) },
    { idea: 'margin-block-start:0 on FO * — block-start margin zero', css: b(`${STAR}{margin-block-start:0!important}`) },
    { idea: 'margin-block-end:0 on FO * — block-end margin zero', css: b(`${STAR}{margin-block-end:0!important}`) },
    { idea: 'margin-inline-start:0 on FO * — inline-start margin zero', css: b(`${STAR}{margin-inline-start:0!important}`) },
    { idea: 'margin-inline-end:0 on FO * — inline-end margin zero', css: b(`${STAR}{margin-inline-end:0!important}`) },
    { idea: 'display:flow-root on FO * — BFC per descendant blocks margin collapse', css: b(`${STAR}{display:flow-root!important}`) },
    { idea: 'display:flow-root on FO root only — single BFC shell', css: b(`${FO}{display:flow-root!important;overflow:visible!important}`) },
    { idea: 'overflow:hidden on FO * — clip BFC blocks adjacent margin collapse', css: b(`${STAR}{overflow:hidden!important}`) },
    { idea: 'overflow:auto on FO * — scrollable BFC vs collapse', css: b(`${STAR}{overflow:auto!important}`) },
    { idea: 'overflow:clip on FO * — clip overflow without scrollbars', css: b(`${STAR}{overflow:clip!important}`) },
    { idea: 'overflow-x:clip + overflow-y:visible on FO * — axis split BFC probe', css: b(`${STAR}{overflow-x:clip!important;overflow-y:visible!important}`) },
    { idea: 'border-top: solid transparent on FO * — 1px top border blocks collapse', css: b(`${STAR}{border-top:1px solid transparent!important}`) },
    { idea: 'border-bottom: solid transparent on FO * — bottom border anti-collapse', css: b(`${STAR}{border-bottom:1px solid transparent!important}`) },
    { idea: 'outline:1px solid transparent on FO * — outline as collapse breaker', css: b(`${STAR}{outline:1px solid transparent!important}`) },
    { idea: 'padding-top:0 + padding-bottom:0 on FO p — paragraph vertical padding strip', css: b(`${STAR}{padding-top:0!important;padding-bottom:0!important}`) },
    { idea: 'gap:0 on flex FO + margin:0 on * — flex gap vs collapsed margins', css: b(`${FO}{display:flex!important;flex-direction:column!important;gap:0!important}${STAR}{margin:0!important}`) },
    { idea: 'row-gap:0 + column-gap:0 on grid FO — grid gap zero with margin reset', css: b(`${FO}{display:grid!important;row-gap:0!important;column-gap:0!important}${STAR}{margin:0!important}`) },
    { idea: 'margin-trim:block on FO * — margin-trim block-end probe (Chromium)', css: b(`${STAR}{margin-trim:block!important}`) },
    { idea: 'margin-trim:inline on FO * — margin-trim inline axis', css: b(`${STAR}{margin-trim:inline!important}`) },
    { idea: 'margin-trim:block-start on FO * — trim block-start margins', css: b(`${STAR}{margin-trim:block-start!important}`) },
    { idea: 'margin-trim:block-end on FO * — trim block-end margins', css: b(`${STAR}{margin-trim:block-end!important}`) },
    { idea: 'display:inline-block on FO * — inline-block boxes resist parent collapse', css: b(`${STAR}{display:inline-block!important;vertical-align:top!important}`) },
    { idea: 'display:flex on FO * + margin:0 — flex item margin reset bundle', css: b(`${STAR}{display:flex!important;margin:0!important;min-width:0!important}`) },
    { idea: 'display:grid on FO * + margin:0 — grid item margin reset', css: b(`${STAR}{display:grid!important;margin:0!important;min-width:0!important}`) },
    { idea: 'box-decoration-break:clone on FO * — fragmented box decoration vs margins', css: b(`${STAR}{box-decoration-break:clone!important;margin:0!important}`) },
    { idea: 'contain:layout on FO * + margin:0 — layout containment with zero margins', css: b(`${STAR}{contain:layout!important;margin:0!important}`) },
    { idea: 'overflow:visible + margin:0 on FO * — explicit visible overflow margin strip', css: b(`${STAR}{overflow:visible!important;margin:0!important}`) },
    { idea: 'padding-block-start:0 + margin-block-end:0 — block axis strip pair', css: b(`${STAR}{padding-block-start:0!important;margin-block-end:0!important}`) },
    { idea: 'padding-block-end:0 + margin-block-start:0 — complementary block axis strip', css: b(`${STAR}{padding-block-end:0!important;margin-block-start:0!important}`) },
    { idea: 'margin-collapse:separate on table FO * — table margin model (where supported)', css: b(`${STAR}{border-collapse:separate!important;border-spacing:0!important;margin:0!important}`) },
    { idea: 'display:table on FO * + border-collapse:separate — table formatting anti-collapse', css: b(`${STAR}{display:table!important;border-collapse:separate!important;margin:0!important}`) },
    { idea: 'display:table-row on FO * children — row display margin behavior', css: b(`${STAR}{display:table-row!important;margin:0!important}`) },
    { idea: 'float:left on FO * + margin:0 — float BFC margin probe', css: b(`${STAR}{float:left!important;margin:0!important;width:100%!important}`) },
    { idea: 'clear:both on FO * after margin:0 — clear + zero margin', css: b(`${STAR}{clear:both!important;margin:0!important}`) },
    {
      idea: 'Chromium copy + margin/padding zero + flow-root FO root — structural collapse bundle',
      css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject{display:flow-root!important;margin:0!important;padding:0!important}foreignObject *{margin:0!important;padding:0!important;box-sizing:border-box!important;min-width:0!important}'",
      inject: 'both',
      rasterPatch: 'decode-interval',
    },
  ],
  12: [
    { idea: 'white-space:normal on FO * — default collapse behavior', css: b(`${STAR}{white-space:normal!important}`) },
    { idea: 'white-space:nowrap on FO * — single-line no wrap', css: b(`${STAR}{white-space:nowrap!important}`) },
    { idea: 'white-space:pre on FO * — preserve all whitespace', css: b(`${STAR}{white-space:pre!important}`) },
    { idea: 'white-space:pre-wrap on FO * — wrap with preserved spaces', css: b(`${STAR}{white-space:pre-wrap!important}`) },
    { idea: 'white-space:pre-line on FO * — collapse spaces keep newlines', css: b(`${STAR}{white-space:pre-line!important}`) },
    { idea: 'white-space:break-spaces on FO * — break-spaces wrap model', css: b(`${STAR}{white-space:break-spaces!important}`) },
    { idea: 'white-space-collapse:collapse on FO * — CSS Text 4 collapse', css: b(`${STAR}{white-space:normal!important;white-space-collapse:collapse!important}`) },
    { idea: 'white-space-collapse:preserve on FO * — preserve spaces policy', css: b(`${STAR}{white-space:pre!important;white-space-collapse:preserve!important}`) },
    { idea: 'white-space-collapse:preserve-breaks on FO * — preserve line breaks only', css: b(`${STAR}{white-space:pre-wrap!important;white-space-collapse:preserve-breaks!important}`) },
    { idea: 'text-wrap:wrap on FO * — explicit wrap mode', css: b(`${STAR}{text-wrap:wrap!important;white-space:normal!important}`) },
    { idea: 'text-wrap:nowrap on FO * — nowrap text-wrap', css: b(`${STAR}{text-wrap:nowrap!important;white-space:nowrap!important}`) },
    { idea: 'text-wrap:balance on FO * — balanced wrapping', css: b(`${STAR}{text-wrap:balance!important;white-space:normal!important}`) },
    { idea: 'text-wrap:pretty on FO * — pretty wrap (Chromium)', css: b(`${STAR}{text-wrap:pretty!important;white-space:normal!important}`) },
    { idea: 'text-wrap-mode:wrap + white-space:normal', css: b(`${STAR}{text-wrap-mode:wrap!important;white-space:normal!important}`) },
    { idea: 'text-wrap-mode:nowrap + white-space:nowrap', css: b(`${STAR}{text-wrap-mode:nowrap!important;white-space:nowrap!important}`) },
    { idea: 'word-break:normal on FO * — default word break', css: b(`${STAR}{word-break:normal!important}`) },
    { idea: 'word-break:break-all on FO * — break anywhere', css: b(`${STAR}{word-break:break-all!important}`) },
    { idea: 'word-break:keep-all on FO * — keep CJK/word units', css: b(`${STAR}{word-break:keep-all!important}`) },
    { idea: 'word-break:break-word legacy alias on FO *', css: b(`${STAR}{word-break:break-word!important}`) },
    { idea: 'overflow-wrap:normal on FO * — default overflow wrap', css: b(`${STAR}{overflow-wrap:normal!important}`) },
    { idea: 'overflow-wrap:break-word on FO * — break long words', css: b(`${STAR}{overflow-wrap:break-word!important}`) },
    { idea: 'overflow-wrap:anywhere on FO * — anywhere wrap', css: b(`${STAR}{overflow-wrap:anywhere!important}`) },
    { idea: 'word-wrap:break-word alias on FO *', css: b(`${STAR}{word-wrap:break-word!important}`) },
    { idea: 'hyphens:none on FO * — disable hyphenation', css: b(`${STAR}{hyphens:none!important}`) },
    { idea: 'hyphens:auto on FO * — auto hyphenation', css: b(`${STAR}{hyphens:auto!important}`) },
    { idea: 'hyphens:manual on FO * — manual hyphenation points', css: b(`${STAR}{hyphens:manual!important}`) },
    { idea: 'line-break:auto on FO * — automatic line breaks', css: b(`${STAR}{line-break:auto!important}`) },
    { idea: 'line-break:strict on FO * — strict line break rules', css: b(`${STAR}{line-break:strict!important}`) },
    { idea: 'line-break:anywhere on FO * — break anywhere line-break', css: b(`${STAR}{line-break:anywhere!important}`) },
    { idea: 'word-spacing:normal on FO * — reset tracked word spacing', css: b(`${STAR}{word-spacing:normal!important}`) },
    { idea: 'letter-spacing:normal on FO * — reset letter-spacing', css: b(`${STAR}{letter-spacing:normal!important}`) },
    { idea: 'text-overflow:clip + nowrap — clip overflow single line', css: b(`${STAR}{white-space:nowrap!important;text-overflow:clip!important;overflow:hidden!important}`) },
    { idea: 'text-overflow:ellipsis + nowrap — ellipsis overflow', css: b(`${STAR}{white-space:nowrap!important;text-overflow:ellipsis!important;overflow:hidden!important}`) },
    { idea: 'nowrap + overflow-wrap:normal — no wrap explicit pair', css: b(`${STAR}{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important}`) },
    { idea: 'pre-wrap + overflow-wrap:break-word — preserved spaces + break', css: b(`${STAR}{white-space:pre-wrap!important;overflow-wrap:break-word!important}`) },
    { idea: 'normal + word-break:keep-all — CJK keep-all with collapse', css: b(`${STAR}{white-space:normal!important;word-break:keep-all!important}`) },
    { idea: 'break-spaces + overflow-wrap:anywhere — modern wrap pair', css: b(`${STAR}{white-space:break-spaces!important;overflow-wrap:anywhere!important}`) },
    { idea: 'text-wrap:stable on FO * — stable wrap (where supported)', css: b(`${STAR}{text-wrap:stable!important;white-space:normal!important}`) },
    { idea: 'text-wrap-style:auto on FO * — style auto with normal ws', css: b(`${STAR}{text-wrap-style:auto!important;white-space:normal!important}`) },
    {
      idea: 'Chromium copy + nowrap + overflow-wrap:normal — nav-like single line bundle',
      css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important;text-wrap:nowrap!important}'",
      inject: 'both',
      rasterPatch: 'decode-interval',
    },
  ],
  13: [
    { idea: 'transform:none on FO root — kill root transforms', css: b(`${FO}{transform:none!important;transform-origin:top left!important}`) },
    { idea: 'transform:none on FO * — flatten descendant transforms', css: b(`${STAR}{transform:none!important}`) },
    { idea: 'translate:none on FO * — reset translate longhand', css: b(`${STAR}{translate:none!important}`) },
    { idea: 'scale:none on FO * — reset scale longhand', css: b(`${STAR}{scale:none!important}`) },
    { idea: 'rotate:none on FO * — reset rotate longhand', css: b(`${STAR}{rotate:none!important}`) },
    { idea: 'transform-style:flat on FO * — flat 3D transform style', css: b(`${STAR}{transform-style:flat!important}`) },
    { idea: 'perspective:none on FO * — remove perspective', css: b(`${STAR}{perspective:none!important}`) },
    { idea: 'backface-visibility:visible on FO * — visible backfaces', css: b(`${STAR}{backface-visibility:visible!important}`) },
    { idea: 'will-change:auto on FO * — reset will-change promotion', css: b(`${STAR}{will-change:auto!important}`) },
    { idea: 'will-change:transform on FO root — layer promotion probe', css: b(`${FO}{will-change:transform!important}`) },
    { idea: 'will-change:opacity on FO * — opacity promotion', css: b(`${STAR}{will-change:opacity!important}`) },
    { idea: 'will-change:scroll-position on FO * — scroll promotion', css: b(`${STAR}{will-change:scroll-position!important}`) },
    { idea: 'contain:none on FO * — strip all containment', css: b(`${STAR}{contain:none!important}`) },
    { idea: 'contain:layout on FO * — layout containment only', css: b(`${STAR}{contain:layout!important}`) },
    { idea: 'contain:style on FO * — style containment', css: b(`${STAR}{contain:style!important}`) },
    { idea: 'contain:paint on FO root — paint containment shell', css: b(`${FO}{contain:paint!important;overflow:visible!important}`) },
    { idea: 'contain:strict on FO root — strict containment bundle', css: b(`${FO}{contain:strict!important;overflow:visible!important}`) },
    { idea: 'contain:content on FO * — content containment', css: b(`${STAR}{contain:content!important}`) },
    { idea: 'contain-intrinsic-size:none on FO * — no intrinsic size hint', css: b(`${STAR}{contain-intrinsic-size:none!important}`) },
    { idea: 'content-visibility:visible on FO * — disable auto visibility', css: b(`${STAR}{content-visibility:visible!important}`) },
    { idea: 'content-visibility:auto on FO * — auto skip probe', css: b(`${STAR}{content-visibility:auto!important}`) },
    { idea: 'animation:none on FO * — kill animations with transform reset', css: b(`${STAR}{animation:none!important;transform:none!important}`) },
    { idea: 'transition:none on FO * — kill transitions', css: b(`${STAR}{transition:none!important;transform:none!important}`) },
    { idea: 'filter:none + transform:none on FO *', css: b(`${STAR}{filter:none!important;transform:none!important}`) },
    { idea: 'translate3d(0,0,0) identity on FO * — legacy GPU layer probe', css: b(`${STAR}{transform:translate3d(0,0,0)!important}`) },
    { idea: 'matrix(1,0,0,1,0,0) identity on FO *', css: b(`${STAR}{transform:matrix(1,0,0,1,0,0)!important}`) },
    { idea: 'transform-origin:center on FO * — center origin with none transform', css: b(`${STAR}{transform:none!important;transform-origin:center!important}`) },
    { idea: 'transform-box:fill-box on FO * — SVG transform-box', css: b(`${STAR}{transform-box:fill-box!important;transform:none!important}`) },
    { idea: 'transform-box:border-box on FO * — border-box transform reference', css: b(`${STAR}{transform-box:border-box!important;transform:none!important}`) },
    { idea: 'contain:layout style on FO * — dual containment', css: b(`${STAR}{contain:layout style!important}`) },
    { idea: 'contain:paint on FO * + transform:none', css: b(`${STAR}{contain:paint!important;transform:none!important}`) },
    { idea: 'will-change:auto + contain:none — full reset pair', css: b(`${STAR}{will-change:auto!important;contain:none!important;transform:none!important}`) },
    { idea: 'FO root transform:none + * contain:none', css: b(`${FO}{transform:none!important}${STAR}{contain:none!important;transform:none!important}`) },
    { idea: 'strip identity transforms markup + transform:none CSS', css: b(`${FO}{transform:none!important}${STAR}{transform:none!important}`), svgMarkupPatch: 'strip-identity-transforms', inject: 'both' },
    { idea: 'strip all transforms markup + transform:none', css: b(`${FO}{transform:none!important}${STAR}{transform:none!important}`), svgMarkupPatch: 'strip-all-transforms', inject: 'both' },
    { idea: 'contain:strict on * + none on FO root', css: b(`${FO}{transform:none!important;contain:none!important}${STAR}{contain:strict!important;transform:none!important}`) },
    { idea: 'will-change:contents on FO * — contents promotion', css: b(`${STAR}{will-change:contents!important;transform:none!important}`) },
    { idea: 'offset-path:none on FO * — motion path reset', css: b(`${STAR}{offset-path:none!important;transform:none!important}`) },
    { idea: 'view-transition-name:none on FO * — VT name reset', css: b(`${STAR}{view-transition-name:none!important;transform:none!important}`) },
    {
      idea: 'transform/will-change/contain full reset + decode-interval',
      css: b(`${FO}{transform:none!important;will-change:auto!important;contain:none!important}${STAR}{transform:none!important;will-change:auto!important;contain:none!important;translate:none!important;scale:none!important;rotate:none!important}`),
      inject: 'both',
      rasterPatch: 'decode-interval',
      svgMarkupPatch: 'strip-identity-transforms',
    },
  ],
  14: [
    { idea: 'isolation:isolate on FO root — new stacking context', css: b(`${FO}{isolation:isolate!important;overflow:visible!important}`) },
    { idea: 'isolation:auto on FO * — auto isolation descendants', css: b(`${STAR}{isolation:auto!important}`) },
    { idea: 'isolation:isolate on FO * — isolate every descendant', css: b(`${STAR}{isolation:isolate!important}`) },
    { idea: 'z-index:auto on FO * — flatten explicit z-index', css: b(`${STAR}{z-index:auto!important}`) },
    { idea: 'z-index:0 on FO * — zero layer without offset', css: b(`${STAR}{z-index:0!important}`) },
    { idea: 'position:static on FO * — static positioning flatten', css: b(`${STAR}{position:static!important;z-index:auto!important}`) },
    { idea: 'position:relative + z-index:0 on FO *', css: b(`${STAR}{position:relative!important;z-index:0!important}`) },
    { idea: 'mix-blend-mode:normal on FO * — normal compositing', css: b(`${STAR}{mix-blend-mode:normal!important}`) },
    { idea: 'mix-blend-mode:multiply reset on FO *', css: b(`${STAR}{mix-blend-mode:multiply!important;isolation:isolate!important}`) },
    { idea: 'opacity:1 on FO * — full opacity flatten', css: b(`${STAR}{opacity:1!important}`) },
    { idea: 'filter:none on FO * — remove filter stacking', css: b(`${STAR}{filter:none!important}`) },
    { idea: 'backdrop-filter:none on FO root', css: b(`${FO}{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}`) },
    { idea: 'pointer-events:auto on FO * — hit testing default', css: b(`${STAR}{pointer-events:auto!important}`) },
    { idea: 'stacking: FO isolate + children auto + z-index auto', css: b(`${FO}{isolation:isolate!important}${STAR}{isolation:auto!important;z-index:auto!important}`) },
    { idea: 'stacking: all static + z-index auto', css: b(`${STAR}{position:static!important;z-index:auto!important;isolation:auto!important}`) },
    { idea: 'stacking: relative z-index 0 everywhere', css: b(`${STAR}{position:relative!important;z-index:0!important}`) },
    { idea: 'mix-blend-mode:normal + isolation:auto pair', css: b(`${STAR}{mix-blend-mode:normal!important;isolation:auto!important}`) },
    { idea: 'mix-blend-mode:plus-lighter with FO isolate', css: b(`${FO}{isolation:isolate!important}${STAR}{mix-blend-mode:plus-lighter!important}`) },
    { idea: 'mix-blend-mode:overlay on FO *', css: b(`${STAR}{mix-blend-mode:overlay!important;isolation:auto!important}`) },
    { idea: 'background-blend-mode:normal on FO *', css: b(`${STAR}{background-blend-mode:normal!important}`) },
    { idea: 'filter:opacity(1) identity on FO *', css: b(`${STAR}{filter:opacity(1)!important}`) },
    { idea: 'filter-empty-nop defs + isolation isolate FO', css: b(`${FO}{isolation:isolate!important;filter:none!important}`), foSvgPatch: 'filter-empty-nop', inject: 'both' },
    { idea: 'filter-noop-defs + z-index auto on *', css: b(`${STAR}{z-index:auto!important}`), foSvgPatch: 'filter-noop-defs', inject: 'both' },
    { idea: 'clip-path:none on FO * — remove clip stacking', css: b(`${STAR}{clip-path:none!important}`) },
    { idea: 'mask:none on FO * — remove mask layers', css: b(`${STAR}{mask:none!important;-webkit-mask:none!important}`) },
    { idea: 'overflow:visible + isolation auto — visible stack', css: b(`${STAR}{overflow:visible!important;isolation:auto!important;z-index:auto!important}`) },
    { idea: 'transform:none + isolation isolate FO root', css: b(`${FO}{isolation:isolate!important;transform:none!important}${STAR}{transform:none!important;z-index:auto!important}`) },
    { idea: 'contain:paint + isolation isolate FO', css: b(`${FO}{contain:paint!important;isolation:isolate!important;overflow:visible!important}`) },
    { idea: 'will-change:auto + z-index auto flatten', css: b(`${STAR}{will-change:auto!important;z-index:auto!important;position:static!important}`) },
    { idea: 'order:0 on flex FO * — flex order reset', css: b(`${FO}{display:flex!important}${STAR}{order:0!important;z-index:auto!important}`) },
    { idea: 'float:none on FO * — clear floats stacking', css: b(`${STAR}{float:none!important;z-index:auto!important}`) },
    { idea: 'clear:none on FO * — clear reset', css: b(`${STAR}{clear:none!important}`) },
    { idea: 'visibility:visible on FO * — visibility flatten', css: b(`${STAR}{visibility:visible!important}`) },
    { idea: 'opacity:1 + mix-blend normal + isolation auto bundle', css: b(`${STAR}{opacity:1!important;mix-blend-mode:normal!important;isolation:auto!important;z-index:auto!important}`) },
    { idea: 'FO z-index:0 relative + * static', css: b(`${FO}{position:relative!important;z-index:0!important}${STAR}{position:static!important;z-index:auto!important}`) },
    { idea: 'stacking: isolation isolate * + normal blend', css: b(`${STAR}{isolation:isolate!important;mix-blend-mode:normal!important}`) },
    { idea: 'fe-color-matrix-identity + isolation auto', css: b(`${STAR}{isolation:auto!important}`), foSvgPatch: 'fe-color-matrix-identity', inject: 'both' },
    { idea: 'remove-fe-filters radical + isolation isolate FO', css: b(`${FO}{isolation:isolate!important}`), radicalPatch: 'remove-fe-filters', inject: 'both' },
    { idea: 'remove-filters-and-masks + z-index auto', css: b(`${STAR}{z-index:auto!important;position:static!important}`), radicalPatch: 'remove-filters-and-masks', inject: 'both' },
    {
      idea: 'Full stack flatten: static, z-auto, normal blend, no filter/mask',
      css: b(`${FO}{isolation:isolate!important;position:relative!important;z-index:0!important;overflow:visible!important}${STAR}{position:static!important;z-index:auto!important;isolation:auto!important;mix-blend-mode:normal!important;opacity:1!important;filter:none!important;clip-path:none!important;mask:none!important;transform:none!important}`),
      inject: 'both',
      rasterPatch: 'decode-interval',
      foSvgPatch: 'filter-empty-nop',
    },
  ],
  15: [
    { idea: 'box-sizing:border-box on FO * — universal border-box', css: b(`${STAR}{box-sizing:border-box!important}`) },
    { idea: 'box-sizing:content-box on FO * — content-box probe', css: b(`${STAR}{box-sizing:content-box!important}`) },
    { idea: 'min-width:0 on FO * — flex/grid min-width auto fix', css: b(`${STAR}{min-width:0!important}`) },
    { idea: 'min-height:0 on FO * — min-height auto fix', css: b(`${STAR}{min-height:0!important}`) },
    { idea: 'max-width:none on FO * — remove max-width caps', css: b(`${STAR}{max-width:none!important}`) },
    { idea: 'width:auto on FO * — auto width universal', css: b(`${STAR}{width:auto!important}`) },
    { idea: 'height:auto on FO * — auto height universal', css: b(`${STAR}{height:auto!important}`) },
    { idea: 'display:block on FO * — blockify descendants', css: b(`${STAR}{display:block!important}`) },
    { idea: 'vertical-align:baseline on inline FO *', css: b(`${STAR}{vertical-align:baseline!important}`) },
    { idea: 'line-height:normal on FO * — normal line-height', css: b(`${STAR}{line-height:normal!important}`) },
    { idea: 'font-family:inherit on FO * — inherit fonts', css: b(`${STAR}{font-family:inherit!important}`) },
    { idea: 'font-size:inherit on FO * — inherit font size', css: b(`${STAR}{font-size:inherit!important}`) },
    { idea: 'font-weight:inherit on FO * — inherit weight', css: b(`${STAR}{font-weight:inherit!important}`) },
    { idea: 'color:inherit on FO * — inherit color', css: b(`${STAR}{color:inherit!important}`) },
    { idea: 'text-align:inherit on FO * — inherit alignment', css: b(`${STAR}{text-align:inherit!important}`) },
    { idea: 'unicode-bidi:normal on FO * — bidi reset', css: b(`${STAR}{unicode-bidi:normal!important}`) },
    { idea: 'direction:inherit on FO * — direction inherit', css: b(`${STAR}{direction:inherit!important}`) },
    { idea: 'list-style:none on FO * — list reset', css: b(`${STAR}{list-style:none!important}`) },
    { idea: 'appearance:none on FO * — appearance reset (forms)', css: b(`${STAR}{appearance:none!important;-webkit-appearance:none!important}`) },
    { idea: 'outline:none on FO * — outline strip (paint probe)', css: b(`${STAR}{outline:none!important}`) },
    { idea: 'border:none on FO * — border strip universal', css: b(`${STAR}{border:none!important}`) },
    { idea: 'background:transparent on FO * — transparent backgrounds', css: b(`${STAR}{background:transparent!important}`) },
    { idea: 'background-color:transparent on FO *', css: b(`${STAR}{background-color:transparent!important}`) },
    { idea: 'object-fit:fill on FO img — image sizing', css: b(`${STAR}{object-fit:fill!important}`) },
    { idea: 'object-position:center on FO img', css: b(`${STAR}{object-position:center!important}`) },
    { idea: 'flex-shrink:1 on FO * — allow shrink', css: b(`${STAR}{flex-shrink:1!important;min-width:0!important}`) },
    { idea: 'flex-grow:0 on FO * — no flex grow', css: b(`${STAR}{flex-grow:0!important}`) },
    { idea: 'align-self:stretch on FO * — stretch cross axis', css: b(`${STAR}{align-self:stretch!important}`) },
    { idea: 'justify-self:stretch on FO * — grid justify stretch', css: b(`${STAR}{justify-self:stretch!important}`) },
    { idea: 'inset:auto on FO * — logical inset reset', css: b(`${STAR}{inset:auto!important}`) },
    { idea: 'all:revert on FO * — revert cascade (probe)', css: b(`${STAR}{all:revert!important}`) },
    { idea: 'Chromium font copy + star normalize — product-like bundle', css: "FO_BASELINE_CSS + CHROMIUM_COPY" },
    { idea: 'h2-fo-internal-star-normalize radical + baseline', css: "FO_BASELINE_CSS", radicalPatch: 'h2-fo-internal-star-normalize', inject: 'both' },
    { idea: 'Chromium + min-width:0 + line-height:normal star bundle', css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{line-height:normal!important;min-width:0!important;min-height:0!important}'" },
    { idea: 'Chromium + display:block + box-sizing star', css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{display:block!important}'" },
    { idea: 'Chromium + vertical-align baseline inline probe', css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{vertical-align:baseline!important;display:inline!important}'" },
    { idea: 'Chromium + flex-shrink 1 min-width 0', css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{flex-shrink:1!important;flex-grow:0!important;min-width:0!important}'" },
    { idea: 'Chromium + unicode-bidi normal direction ltr', css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject{direction:ltr!important}foreignObject *{unicode-bidi:normal!important;direction:ltr!important}'" },
    { idea: 'Chromium + list-style none appearance none', css: "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{list-style:none!important;appearance:none!important;-webkit-appearance:none!important}'" },
    {
      idea: 'Full universal star normalize: border-box, min 0, inherit fonts, block display',
      css:
        "FO_BASELINE_CSS + CHROMIUM_COPY + 'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important;display:block!important;line-height:normal!important;font-family:inherit!important;font-size:inherit!important;color:inherit!important;vertical-align:baseline!important;unicode-bidi:normal!important;margin:0!important;padding:0!important}'",
      inject: 'both',
      rasterPatch: 'decode-interval',
      monkeypatch: 'h2-fo-internal-star-capture',
    },
  ],
}

for (const lane of [11, 12, 13, 14, 15]) {
  const path = renderLane(lane, LANES[lane])
  console.log('wrote', path)
}

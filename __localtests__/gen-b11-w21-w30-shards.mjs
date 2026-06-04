#!/usr/bin/env node
/**
 * One-shot generator: b11 w21–w30 shards (100 text-fix recipes each).
 * Run: node __localtests__/gen-b11-w21-w30-shards.mjs
 */
import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'fo-recipes-shards')

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const PIN_LH = 'h2-pin-line-height-from-live'
const STRETCH = 'h2-flex-stretch-leaf-from-live'

/** @param {string} inner */
const foStar = (inner) => `foreignObject *{${inner}}`
/** @param {string} sel @param {string} inner */
const foSel = (sel, inner) => `${sel}{${inner}}`

/** @param {number} w @param {string} theme @param {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} specs */
function shardSource(w, theme, specs) {
  if (specs.length !== 100) {
    throw new Error(`b11 w${String(w).padStart(2, '0')}: expected 100 specs, got ${specs.length}`)
  }
  const ww = String(w).padStart(2, '0')
  const lines = [
    '/**',
    ` * Loop AI batch-11 FO recipe shard (worker ${w}) — text-fix: ${theme}.`,
    ` * 100 recipes: loop-ai-b11-w${ww}-001..100`,
    ' * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes',
    ' */',
    "import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'",
    '',
    'const TEXT_LEAF =',
    "  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'",
    '',
    'const TEXT_CHAIN =',
    "  '" + TEXT_CHAIN.replace(/'/g, "\\'") + "'",
    '',
    'const CHROMIUM_COPY =',
    "  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'",
    '',
    'const PIN_LH = ' + JSON.stringify(PIN_LH),
    'const STRETCH = ' + JSON.stringify(STRETCH),
    '',
    '/** @type {{ slug: string, idea: string, css: string, extra?: Partial<import(\'../fo-fix-recipes.js\').FoFixRecipe> }[]} */',
    'const SPECS = ' + JSON.stringify(specs, null, 2),
    '',
    '/** @type {import(\'../fo-fix-recipes.js\').FoFixRecipe[]} */',
    'const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {',
    '  const n = String(i + 1).padStart(3, \'0\')',
    '  return {',
    `    id: \`loop-ai-b11-w${ww}-\${n}\`,`,
    `    label: \`Loop AI b11 w${ww} #\${n}: \${slug}\`,`,
    '    idea,',
    '    css: FO_BASELINE_CSS + TEXT_LEAF + css,',
    "    inject: 'capture',",
    "    category: 'text-fix',",
    '    active: true,',
    `    notes: 'Loop AI b11 w${ww}; ${theme}; FO-raster — no text bypass.',`,
    '    ...extra,',
    '  }',
    '})',
    '',
    'if (RECIPES.length !== 100) {',
    `  throw new Error(\`recipes-loop-ai-b11-w${ww}: expected 100 recipes, got \${RECIPES.length}\`)`,
    '}',
    '',
    'export const FO_FIX_RECIPES_SHARD = RECIPES',
    'export default FO_FIX_RECIPES_SHARD',
    '',
  ]
  return lines.join('\n')
}

/** @param {unknown[]} items @param {number} n */
function take(items, n) {
  if (items.length < n) throw new Error(`need ${n} items, got ${items.length}`)
  return items.slice(0, n)
}

/** @param {string} base */
function w21Specs(base = 'leading-trim:both-edges!important') {
  const trimBoth = 'text-box-trim:trim-both!important'
  const trimStart = 'text-box-trim:trim-start!important'
  const trimEnd = 'text-box-trim:trim-end!important'
  const edges = [
    ['cap alphabetic', 'text-box-edge:cap alphabetic!important'],
    ['ex alphabetic', 'text-box-edge:ex alphabetic!important'],
    ['leading alphabetic', 'text-box-edge:leading alphabetic!important'],
    ['text alphabetic', 'text-box-edge:text alphabetic!important'],
    ['edge auto', 'text-box-edge:auto!important'],
    ['edge normal', 'text-box-edge:normal!important'],
    ['text-edge cap', 'text-edge:cap alphabetic!important'],
    ['text-box shorthand', 'text-box:trim-both cap alphabetic!important'],
  ]
  const lh = [
    ['lh 1', 'line-height:1!important;vertical-align:baseline!important'],
    ['lh normal', 'line-height:normal!important'],
    ['lh from-font', 'line-height:from-font!important'],
    ['lh calc 1em', 'line-height:calc(1em)!important;vertical-align:baseline!important'],
  ]
  const selectors = [
    ['FO star', foStar(`${base}`)],
    ['FO star + trim-both', foStar(`${base};${trimBoth}`)],
    ['FO star + trim-start', foStar(`${base};${trimStart}`)],
    ['FO star + trim-end', foStar(`${base};${trimEnd}`)],
    ['text chain', `${TEXT_CHAIN}{${base}}`],
    ['FO>div', foSel('foreignObject>div', base)],
    ['FO>div star', foSel('foreignObject>div *', base)],
    ['FO anchors', foSel('foreignObject a', `${base};display:inline-block!important;vertical-align:baseline!important`)],
    ['FO span', foSel('foreignObject span', `${base};display:inline!important`)],
    ['FO nav a', foSel('foreignObject nav a', `${base};display:inline-block!important;vertical-align:baseline!important`)],
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const [sSlug, sCss] of selectors) {
    for (const [eSlug, eDecl] of edges) {
      if (out.length >= 100) break
      out.push({
        slug: `both-edges ${sSlug} + ${eSlug}`,
        idea: `leading-trim:both-edges on FO text leaves + ${eSlug} pairing — half-leading trim vs edge model`,
        css: sCss.includes(base) && !sCss.includes(';')
          ? sCss.replace(base, `${base};${eDecl}`)
          : sCss.replace('}', `;${eDecl}}`),
      })
    }
  }
  let i = 0
  while (out.length < 100 && i < selectors.length * lh.length) {
    const [sSlug, sCss] = selectors[i % selectors.length]
    const [lSlug, lDecl] = lh[Math.floor(i / selectors.length) % lh.length]
    out.push({
      slug: `both-edges ${sSlug} + ${lSlug}`,
      idea: `leading-trim:both-edges + ${lSlug} on same selector — trim keyword vs strut ratio`,
      css: sCss.replace('}', `;${lDecl}}`),
    })
    i++
  }
  const extras = [
    {
      slug: 'chromium + both-edges trim-both cap',
      idea: 'Chromium font copy + both-edges + trim-both + cap alphabetic stack on FO *',
      css:
        CHROMIUM_COPY +
        foStar(`${base};${trimBoth};text-box-edge:cap alphabetic!important`),
    },
    {
      slug: 'pin lh + both-edges FO star',
      idea: 'h2-pin-line-height-from-live + leading-trim:both-edges on FO * — live strut pin vs trim',
      css: foStar(base),
      extra: { inject: 'both', radicalPatch: PIN_LH },
    },
    {
      slug: 'stretch leaf + both-edges trim-both',
      idea: 'h2-flex-stretch-leaf-from-live + both-edges + trim-both on FO *',
      css: foStar(`${base};${trimBoth}`),
      extra: { radicalPatch: STRETCH },
    },
    {
      slug: 'flex baseline + both-edges',
      idea: 'FO flex row align-items:baseline + leading-trim:both-edges on FO *',
      css:
        'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}' +
        foStar(base),
    },
    {
      slug: 'decode-interval + both-edges cap',
      idea: 'both-edges + trim-both + cap edge + decode-interval raster flush',
      css: foStar(`${base};${trimBoth};text-box-edge:cap alphabetic!important`),
      extra: { inject: 'both', rasterPatch: 'decode-interval' },
    },
  ]
  for (const e of extras) {
    if (out.length >= 100) break
    out.push({ slug: e.slug, idea: e.idea, css: e.css, extra: e.extra })
  }
  return take(out, 100)
}

/** @param {string} trim @param {string} themeSlug */
function trimShardSpecs(trim, themeSlug) {
  const edges = [
    'text-box-edge:cap alphabetic!important',
    'text-box-edge:ex alphabetic!important',
    'text-box-edge:leading alphabetic!important',
    'text-box-edge:text alphabetic!important',
    'text-box-edge:auto!important',
    'text-box-edge:normal!important',
    'text-edge:cap alphabetic!important',
    'text-box:trim-both cap alphabetic!important',
  ]
  const lt = [
    'leading-trim:both-edges!important',
    'leading-trim:both!important',
    'leading-trim:normal!important',
    'leading-trim:none!important',
  ]
  const lh = [
    'line-height:1!important;vertical-align:baseline!important',
    'line-height:normal!important',
    'line-height:from-font!important',
    'line-height:calc(1em)!important;vertical-align:baseline!important',
  ]
  const sels = [
    ['FO star', (d) => foStar(d)],
    ['text chain', (d) => `${TEXT_CHAIN}{${d}}`],
    ['FO>div star', (d) => foSel('foreignObject>div *', d)],
    ['FO anchors', (d) => foSel('foreignObject a', `${d};display:inline-block!important;vertical-align:baseline!important`)],
    ['FO span', (d) => foSel('foreignObject span', `${d};display:inline!important`)],
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  const baseDecl = `text-box-trim:${trim}!important`
  for (const [sSlug, mk] of sels) {
    for (const e of edges) {
      if (out.length >= 100) break
      out.push({
        slug: `${themeSlug} ${sSlug} + ${e.split(':')[0]}`,
        idea: `${baseDecl} + ${e} on ${sSlug} — line box trim vs edge pairing`,
        css: mk(`${baseDecl};${e}`),
      })
    }
  }
  let k = 0
  while (out.length < 100) {
    const [sSlug, mk] = sels[k % sels.length]
    const ltDecl = lt[Math.floor(k / sels.length) % lt.length]
    const lhDecl = lh[Math.floor(k / (sels.length * lt.length)) % lh.length]
    out.push({
      slug: `${themeSlug} ${sSlug} + ${ltDecl.split(':')[0]} + lh`,
      idea: `${baseDecl} + ${ltDecl} + ${lhDecl} stack on ${sSlug}`,
      css: mk(`${baseDecl};${ltDecl};${lhDecl}`),
    })
    k++
  }
  return take(out, 100)
}

/** @param {string} edgeDecl @param {string} theme */
function edgeShardSpecs(edgeDecl, theme) {
  const trims = [
    'text-box-trim:trim-both!important',
    'text-box-trim:trim-start!important',
    'text-box-trim:trim-end!important',
    'text-box-trim:none!important',
    'leading-trim:both-edges!important',
    'leading-trim:both!important',
  ]
  const lh = [
    'line-height:1!important;vertical-align:baseline!important',
    'line-height:normal!important',
    'line-height:from-font!important',
    'line-height:calc(1em)!important;vertical-align:baseline!important',
  ]
  const sels = [
    ['FO star', (d) => foStar(d)],
    ['text chain', (d) => `${TEXT_CHAIN}{${d}}`],
    ['FO>div', (d) => foSel('foreignObject>div', d)],
    ['FO>div star', (d) => foSel('foreignObject>div *', d)],
    ['FO anchors', (d) => foSel('foreignObject a', `${d};display:inline-block!important`)],
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const [sSlug, mk] of sels) {
    for (const t of trims) {
      if (out.length >= 100) break
      out.push({
        slug: `${theme} ${sSlug} + trim stack`,
        idea: `${edgeDecl} + ${t} on ${sSlug} — edge model with trim keyword stack`,
        css: mk(`${edgeDecl};${t}`),
      })
    }
  }
  let k = 0
  while (out.length < 100) {
    const [sSlug, mk] = sels[k % sels.length]
    const lhDecl = lh[Math.floor(k / sels.length) % lh.length]
    out.push({
      slug: `${theme} ${sSlug} + ${lhDecl.split(':')[0]}`,
      idea: `${edgeDecl} + ${lhDecl} on ${sSlug} — edge metric with strut ratio`,
      css: mk(`${edgeDecl};${lhDecl}`),
    })
    k++
  }
  return take(out, 100)
}

function lhUnitless1Specs() {
  const ratios = ['1']
  const secondaries = [
    ['baseline', 'vertical-align:baseline!important'],
    ['middle', 'vertical-align:middle!important'],
    ['trim both-edges', 'leading-trim:both-edges!important'],
    ['trim-both', 'text-box-trim:trim-both!important'],
    ['cap edge', 'text-box-edge:cap alphabetic!important'],
    ['from-font sibling', ''],
    ['normal reset', 'line-height:normal!important'],
    ['unset', 'line-height:unset!important'],
    ['calc 1em mix', 'line-height:calc(1em)!important'],
    ['kerning', 'font-kerning:normal!important'],
  ]
  const sels = [
    ['FO star', (lh, extra) => foStar(`${lh};${extra}`.replace(/;;/g, ';'))],
    ['FO>div', (lh, extra) => foSel('foreignObject>div', `${lh};${extra}`)],
    ['FO>div star', (lh, extra) => foSel('foreignObject>div *', `${lh};${extra}`)],
    ['text chain', (lh, extra) => `${TEXT_CHAIN}{${lh};${extra}}`],
    ['FO anchors', (lh, extra) => foSel('foreignObject a', `${lh};${extra};display:inline-block!important`)],
    ['FO span', (lh, extra) => foSel('foreignObject span', `${lh};${extra};display:inline!important`)],
    ['FO label', (lh, extra) => foSel('foreignObject label', `${lh};${extra}`)],
    ['FO nav a', (lh, extra) => foSel('foreignObject nav a', `${lh};${extra};display:inline-block!important`)],
    ['FO h2', (lh, extra) => foSel('foreignObject h2', `${lh};${extra}`)],
    ['FO button', (lh, extra) => foSel('foreignObject button', `${lh};${extra}`)],
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const [sSlug, mk] of sels) {
    for (const [secSlug, sec] of secondaries) {
      if (out.length >= 100) break
      const lh = 'line-height:1!important'
      const decl = sec ? `${lh};${sec}` : lh
      if (secSlug === 'from-font sibling') {
        out.push({
          slug: `lh-1 ${sSlug} + FO>div from-font`,
          idea: `line-height:1 on ${sSlug} + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf`,
          css: mk(lh, '') + foSel('foreignObject>div', 'line-height:from-font!important'),
        })
      } else {
        out.push({
          slug: `lh-1 ${sSlug} + ${secSlug}`,
          idea: `line-height:1 unitless on ${sSlug} with ${secSlug} — unitless strut matrix cell`,
          css: mk(decl, '').replace(/;\}/, '}'),
        })
      }
    }
  }
  const matrixExtras = [
    {
      slug: 'pin lh + lh 1 FO star',
      idea: 'h2-pin-line-height-from-live + line-height:1 on FO * — measured pin vs unitless strut',
      css: foStar('line-height:1!important;vertical-align:baseline!important'),
      extra: { inject: 'both', radicalPatch: PIN_LH },
    },
    {
      slug: 'flex stretch + lh 1',
      idea: 'FO flex align-items:stretch + line-height:1 on FO * — cross stretch vs tight strut',
      css:
        'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}' +
        foStar('line-height:1!important;vertical-align:baseline!important'),
    },
    {
      slug: '@layer lh1 vs normal',
      idea: 'Ordered @layer — line-height:1 vs normal override on FO *',
      css:
        '@layer fo-b11-w26-a, fo-b11-w26-b;@layer fo-b11-w26-a{foreignObject *{line-height:1!important}}@layer fo-b11-w26-b{foreignObject *{line-height:normal!important;vertical-align:baseline!important}}',
    },
    {
      slug: 'chromium + lh 1 trim-both',
      idea: 'Chromium kerning copy + line-height:1 + text-box-trim:trim-both on FO *',
      css:
        CHROMIUM_COPY +
        foStar('line-height:1!important;text-box-trim:trim-both!important;vertical-align:baseline!important'),
    },
  ]
  for (const e of matrixExtras) {
    if (out.length >= 100) break
    out.push({ slug: e.slug, idea: e.idea, css: e.css, extra: e.extra })
  }
  return take(out, 100)
}

function lhRatioGridSpecs() {
  const ratios = ['1.2', '1.15']
  const sels = [
    ['FO star', (r, d) => foStar(`line-height:${r}!important;${d}`)],
    ['FO>div', (r, d) => foSel('foreignObject>div', `line-height:${r}!important;${d}`)],
    ['FO>div star', (r, d) => foSel('foreignObject>div *', `line-height:${r}!important;${d}`)],
    ['text chain', (r, d) => `${TEXT_CHAIN}{line-height:${r}!important;${d}}`],
    ['FO anchors', (r, d) => foSel('foreignObject a', `line-height:${r}!important;${d};display:inline-block!important`)],
  ]
  const extras = [
    'vertical-align:baseline!important',
    'leading-trim:both-edges!important',
    'text-box-trim:trim-both!important',
    'text-box-edge:cap alphabetic!important',
    'line-height:from-font!important',
    'font-kerning:normal!important',
    'display:inline!important',
    'align-self:flex-start!important',
    'min-height:0!important',
    'box-sizing:border-box!important',
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const r of ratios) {
    for (const [sSlug, mk] of sels) {
      for (const ex of extras) {
        if (out.length >= 100) break
        out.push({
          slug: `lh ${r} ${sSlug} grid cell`,
          idea: `line-height:${r} unitless on ${sSlug} + ${ex.split(':')[0]} — 1.2/1.15 ratio grid`,
          css: mk(r, ex),
        })
      }
    }
  }
  return take(out, 100)
}

function calc1emSpecs() {
  const calcs = [
    'calc(1em)',
    'calc(1em + 0px)',
    'calc(1em + 0lh)',
    'calc(1em * 1)',
    'calc(1em / 1)',
    'calc(1.2em)',
    'calc(1.5em)',
    'calc(1.2em * 1)',
    'calc(1.5em / 1)',
    'calc(1em + 0.001em)',
  ]
  const sels = [
    ['FO star', (c) => foStar(`line-height:${c}!important;vertical-align:baseline!important`)],
    ['FO>div', (c) => foSel('foreignObject>div', `line-height:${c}!important;vertical-align:baseline!important`)],
    ['FO>div star', (c) => foSel('foreignObject>div *', `line-height:${c}!important;vertical-align:baseline!important`)],
    ['text chain', (c) => `${TEXT_CHAIN}{line-height:${c}!important;vertical-align:baseline!important}`],
    ['FO span', (c) => foSel('foreignObject span', `line-height:${c}!important;display:inline!important`)],
  ]
  const stacks = [
    '',
    'leading-trim:both-edges!important',
    'text-box-trim:trim-both!important',
    'text-box-edge:cap alphabetic!important',
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const c of calcs) {
    for (const [sSlug, mk] of sels) {
      for (const st of stacks) {
        if (out.length >= 100) break
        const slug = st ? `${c} ${sSlug} + trim` : `${c} ${sSlug}`
        const decl = st
          ? `line-height:${c}!important;vertical-align:baseline!important;${st}`
          : `line-height:${c}!important;vertical-align:baseline!important`
        out.push({
          slug,
          idea: `line-height:${c} on ${sSlug}${st ? ' with trim/edge stack' : ''} — calc(1em) variant probe`,
          css: mk(c).replace(
            `line-height:${c}!important;vertical-align:baseline!important`,
            decl,
          ),
        })
      }
    }
  }
  return take(out, 100)
}

function lhUnitSpecs() {
  const units = ['1lh', '1.15lh', '1.2lh', '1.5lh', 'calc(1lh)', 'calc(1.2lh)', 'calc(1.5lh)', 'calc(1lh + 0em)', 'calc(1.2lh + 0px)', 'calc(1.5lh + 0px)']
  const sels = [
    ['FO star', (u) => foStar(`line-height:${u}!important;vertical-align:baseline!important`)],
    ['FO>div star', (u) => foSel('foreignObject>div *', `line-height:${u}!important;vertical-align:baseline!important`)],
    ['text chain', (u) => `${TEXT_CHAIN}{line-height:${u}!important;vertical-align:baseline!important}`],
    ['FO anchors', (u) => foSel('foreignObject a', `line-height:${u}!important;display:inline-block!important;vertical-align:baseline!important`)],
    ['FO span', (u) => foSel('foreignObject span', `line-height:${u}!important;display:inline!important`)],
  ]
  const stacks = [
    '',
    'leading-trim:both-edges!important',
    'text-box-trim:trim-both!important',
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const u of units) {
    for (const [sSlug, mk] of sels) {
      for (const st of stacks) {
        if (out.length >= 100) break
        const decl = st
          ? `line-height:${u}!important;vertical-align:baseline!important;${st}`
          : `line-height:${u}!important;vertical-align:baseline!important`
        out.push({
          slug: `${u} ${sSlug}${st ? ' stack' : ''}`,
          idea: `line-height:${u} on ${sSlug} — CSS lh unit strut 1lh–1.5lh probe`,
          css: (st ? mk(u).replace(/line-height:[^;]+;vertical-align:[^}]+/, decl) : mk(u)),
        })
      }
    }
  }
  return take(out, 100)
}

function fromFontWrapperSpecs() {
  const wrappers = [
    ['FO>div from-font', foSel('foreignObject>div', 'line-height:from-font!important')],
    ['FO>div star from-font', foSel('foreignObject>div *', 'line-height:from-font!important')],
    ['FO root from-font', foSel('foreignObject', 'line-height:from-font!important;overflow:visible!important')],
    ['text chain from-font', `${TEXT_CHAIN}{line-height:from-font!important}`],
    ['FO span from-font', foSel('foreignObject span', 'line-height:from-font!important;display:inline!important')],
  ]
  const chains = [
    ['div normal star from-font', 'foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}'],
    ['div from-font star unset', 'foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}'],
    ['div from-font star 1', 'foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}'],
    ['div from-font anchors normal', 'foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}'],
    ['div from-font text chain calc 1em', `foreignObject>div{line-height:from-font!important}${TEXT_CHAIN}{line-height:calc(1em)!important;vertical-align:baseline!important}`],
    ['star from-font div normal', 'foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}'],
    ['nav flex div from-font a from-font', 'foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}'],
    ['pin lh div star from-font', 'foreignObject>div *{line-height:from-font!important}'],
    ['stretch div from-font star normal', 'foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}'],
    ['layer div from-font vs star 1', '@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}'],
  ]
  /** @type {{ slug: string, idea: string, css: string, extra?: Record<string, unknown> }[]} */
  const out = []
  for (const [wSlug, wCss] of wrappers) {
    for (let i = 0; i < 20 && out.length < 100; i++) {
      const [cSlug, cCss] = chains[i % chains.length]
      out.push({
        slug: `${wSlug} + ${cSlug}`,
        idea: `line-height:from-font wrapper (${wSlug}) chained with ${cSlug} — font-metrics strut cascade`,
        css: wCss + cCss,
        extra:
          cSlug === 'pin lh div star from-font'
            ? { inject: 'both', radicalPatch: PIN_LH }
            : cSlug === 'stretch div from-font star normal'
              ? { radicalPatch: STRETCH }
              : undefined,
      })
    }
  }
  return take(out, 100)
}

const SHARDS = [
  [21, 'leading-trim both-edges', w21Specs()],
  [22, 'text-box-trim trim-both', trimShardSpecs('trim-both', 'trim-both')],
  [23, 'text-box-trim trim-start/end', [...trimShardSpecs('trim-start', 'trim-start').slice(0, 50), ...trimShardSpecs('trim-end', 'trim-end').slice(0, 50)]],
  [24, 'text-box-edge cap alphabetic', edgeShardSpecs('text-box-edge:cap alphabetic!important', 'cap alphabetic')],
  [
    25,
    'text-box-edge leading ex',
    [
      ...edgeShardSpecs('text-box-edge:leading alphabetic!important', 'leading edge').slice(0, 50),
      ...edgeShardSpecs('text-box-edge:ex alphabetic!important', 'ex edge').slice(0, 50),
    ],
  ],
  [26, 'line-height unitless 1 matrix', lhUnitless1Specs()],
  [27, 'line-height 1.2/1.15 grid', lhRatioGridSpecs()],
  [28, 'line-height calc(1em) variants', calc1emSpecs()],
  [29, 'line-height lh unit 1lh-1.5lh', lhUnitSpecs()],
  [30, 'line-height from-font wrapper chains', fromFontWrapperSpecs()],
]

for (const [w, theme, specs] of SHARDS) {
  const ww = String(w).padStart(2, '0')
  const file = join(OUT, `recipes-loop-ai-b11-w${ww}.js`)
  await writeFile(file, shardSource(w, theme, specs), 'utf8')
  console.log('wrote', file, specs.length)
}

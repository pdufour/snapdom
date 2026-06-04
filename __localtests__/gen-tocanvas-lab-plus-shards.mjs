#!/usr/bin/env node
/**
 * Generate lab-toCanvas combo shards (320 recipes, no duplicate IDs).
 * Run: node __localtests__/gen-tocanvas-lab-plus-shards.mjs
 * Then: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS, H2_RASTER_NORMALIZE_CSS } from './fo-fix-recipes-constants.js'
import { runCheckDupesCli } from './fo-fix-recipes-merge.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

const CHROMIUM_COPY =
  'foreignObject *{font-kerning:normal!important;-webkit-font-smoothing:antialiased!important;' +
  '-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

const LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important;min-height:0!important}'

/** @type {{ key: string, css?: string, useBaseline?: boolean }[]} */
const CSS_VARIANTS = [
  { key: 'baseline', useBaseline: true },
  { key: 'bare', css: '' },
  { key: 'chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY },
  { key: 'h2-normalize', css: H2_RASTER_NORMALIZE_CSS },
  { key: 'leaf', css: FO_BASELINE_CSS + LEAF },
  { key: 'baseline+chromium', css: FO_BASELINE_CSS + CHROMIUM_COPY },
]

/** @type {import('./fo-fix-recipe-shared.js').FoFixSvgRootRound[]} */
const SVG_ROOT_ROUNDS = ['integer-viewbox', 'round-dims', 'int-floor']

/** toCanvas / lab draw monkeypatch vocabulary (2nd–3rd knobs with lab-toCanvas). */
const TC_MONKEYPATCH = [
  'tc-draw-image-round-all',
  'tc-decode-safari-raf',
  'tc-canvas-backing-ceil',
  'decode-interval-prototype',
  'decode-wrap',
  'decode-interval-wrap',
  'raf-before-draw',
  'draw-image-pixelated',
  'measureText-prime',
  'createImageBitmap-high',
  'tc-lab-draw-h2-frac-draw',
  'tc-lab-draw-two-stage',
  'tc-lab-draw-supersample-downscale',
  'tc-lab-draw-create-image-bitmap',
  'tc-lab-draw-create-image-bitmap-pixelated',
  'tc-lab-draw-device-grid-floor',
  'snapdom-post-fo-baseline',
  'snapdom-post-fo-css',
  'image-decode-twice',
  'fonts-ready-delay',
]

const INJECTS = ['both', 'raster']

/** @param {unknown} v */
function pick(arr, i, salt = 0) {
  return arr[(i + salt) % arr.length]
}

/** @param {Record<string, unknown>} extra */
function knobCount(extra) {
  let n = 0
  if (extra.svgRootRound) n++
  if (extra.monkeypatch) {
    n += Array.isArray(extra.monkeypatch) ? extra.monkeypatch.length : 1
  }
  return n
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe | Record<string, unknown>} r */
function tupleKey(r) {
  const mp = r.monkeypatch
  const mpKey =
    mp == null ? null : Array.isArray(mp) ? [...mp].sort().join('|') : mp
  const css = r.css === '__FO_BASELINE__' ? FO_BASELINE_CSS : (r.css ?? '')
  return JSON.stringify({
    rasterPatch: r.rasterPatch ?? 'lab-toCanvas',
    inject: r.inject ?? 'both',
    css,
    svgRootRound: r.svgRootRound ?? null,
    monkeypatch: mpKey,
    foSvgPatch: r.foSvgPatch ?? null,
    svgMarkupPatch: r.svgMarkupPatch ?? null,
    svgRootPatch: r.svgRootPatch ?? null,
  })
}

/** @returns {Promise<Set<string>>} */
async function loadExistingTupleKeys() {
  const keys = new Set()
  const files = readdirSync(SHARDS_DIR).filter(
    (f) =>
      f.endsWith('.js') &&
      !f.startsWith('recipes-tocanvas-lab-plus-combo-'),
  )
  for (const file of files) {
    try {
      const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
      for (const r of recipesFromShardModule(mod, file)) {
        keys.add(tupleKey(r))
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.warn(`[gen-tocanvas-lab-plus] skip tuple load ${file}: ${msg}`)
    }
  }
  return keys
}

/**
 * @param {object} p
 * @param {number} p.n
 * @param {string} p.slug
 * @param {string} p.idea
 * @param {string} [p.css]
 * @param {boolean} [p.useBaseline]
 * @param {Record<string, unknown>} p.extra
 */
function spec({ n, slug, idea, css, useBaseline, extra }) {
  return { n, slug, idea, css, useBaseline, extra }
}

/** @param {ReturnType<typeof spec>} s */
function resolvedCss(s) {
  if (s.useBaseline) return FO_BASELINE_CSS
  return s.css ?? ''
}

/** Enumerate `count` unique combo picks from cartesian product of value pools. */
function comboSpecs(shardSalt, pools, count, mapFn) {
  /** @type {Record<string, unknown>[]} */
  const all = []
  /** @param {number} depth @param {Record<string, unknown>} cur */
  function rec(depth, cur) {
    if (depth === pools.length) {
      all.push({ ...cur })
      return
    }
    for (const v of pools[depth].values) {
      cur[pools[depth].name] = v
      rec(depth + 1, cur)
    }
  }
  rec(0, {})
  const stride = Math.max(1, Math.floor(all.length / count))
  return Array.from({ length: count }, (_, i) => {
    const c = all[(i * stride + shardSalt) % all.length]
    return mapFn(i, c)
  })
}

/** @type {{ letter: string, theme: string, blurb: string, build: (salt: number) => ReturnType<typeof spec>[] }[]} */
const SHARDS = [
  {
    letter: 'a',
    theme: 'svgRootRound × monkeypatch',
    blurb: '2 knobs: integer/round/int-floor viewBox snap + tc-* draw/decode monkeypatch',
    build: (salt) =>
      comboSpecs(
        salt,
        [
          { name: 'rr', values: SVG_ROOT_ROUNDS },
          { name: 'mp', values: TC_MONKEYPATCH },
        ],
        80,
        (i, c) => {
          const rr = /** @type {string} */ (c.rr)
          const mp = /** @type {string} */ (c.mp)
          const cv = pick(CSS_VARIANTS, i, salt)
          const inj = pick(INJECTS, i, salt + 1)
          return spec({
            n: i + 1,
            slug: `${rr} + ${mp}`,
            idea: `lab-toCanvas + ${rr} + monkeypatch ${mp} — FO root snap before lab draw`,
            useBaseline: cv.useBaseline,
            css: cv.css,
            extra: {
              inject: inj,
              rasterPatch: 'lab-toCanvas',
              svgRootRound: rr,
              monkeypatch: mp,
            },
          })
        },
      ),
  },
  {
    letter: 'b',
    theme: 'CSS × svgRootRound × monkeypatch',
    blurb: '3 knobs: capture CSS variant + svgRootRound + tc monkeypatch on lab-toCanvas',
    build: (salt) =>
      comboSpecs(
        salt + 3,
        [
          { name: 'cv', values: CSS_VARIANTS },
          { name: 'rr', values: SVG_ROOT_ROUNDS },
          { name: 'mp', values: TC_MONKEYPATCH },
        ],
        80,
        (i, c) => {
          const cv = /** @type {typeof CSS_VARIANTS[0]} */ (c.cv)
          const rr = /** @type {string} */ (c.rr)
          const mp = /** @type {string} */ (c.mp)
          const inj = pick(INJECTS, i, salt)
          return spec({
            n: i + 1,
            slug: `${cv.key} ${rr} ${mp}`,
            idea: `lab-toCanvas + ${cv.key} CSS + ${rr} + ${mp} — structural FO CSS + root snap + draw hook`,
            useBaseline: cv.useBaseline,
            css: cv.css,
            extra: {
              inject: inj,
              rasterPatch: 'lab-toCanvas',
              svgRootRound: rr,
              monkeypatch: mp,
            },
          })
        },
      ),
  },
  {
    letter: 'c',
    theme: 'dual monkeypatch + svgRootRound',
    blurb: '3 knobs: paired tc draw/decode hooks + svgRootRound on lab-toCanvas',
    build: (salt) => {
      /** @type {{ rr: string, mp: string[] }[]} */
      const pairs = []
      for (let a = 0; a < TC_MONKEYPATCH.length; a++) {
        for (let b = a + 1; b < TC_MONKEYPATCH.length; b++) {
          for (const rr of SVG_ROOT_ROUNDS) {
            pairs.push({ rr, mp: [TC_MONKEYPATCH[a], TC_MONKEYPATCH[b]] })
          }
        }
      }
      const stride = Math.max(1, Math.floor(pairs.length / 80))
      return Array.from({ length: 80 }, (_, i) => {
        const { rr, mp } = pairs[(i * stride + salt) % pairs.length]
        const cv = pick(CSS_VARIANTS, i, salt + 2)
        const inj = pick(INJECTS, i, salt + 4)
        return spec({
          n: i + 1,
          slug: `${rr} ${mp[0]}+${mp[1]}`,
          idea: `lab-toCanvas + ${rr} + [${mp.join(', ')}] — stacked draw/decode monkeypatches`,
          useBaseline: cv.useBaseline,
          css: cv.css,
          extra: {
            inject: inj,
            rasterPatch: 'lab-toCanvas',
            svgRootRound: rr,
            monkeypatch: mp,
          },
        })
      })
    },
  },
  {
    letter: 'd',
    theme: 'inject × dual monkeypatch × svgRootRound',
    blurb: '3 knobs: inject scope + svgRootRound + dual monkeypatch on lab-toCanvas',
    build: (salt) => {
      /** @type {{ inj: string, rr: string, mp: string[] }[]} */
      const combos = []
      for (const inj of INJECTS) {
        for (const rr of SVG_ROOT_ROUNDS) {
          for (let a = 0; a < TC_MONKEYPATCH.length; a++) {
            for (let b = a + 1; b < TC_MONKEYPATCH.length; b++) {
              combos.push({ inj, rr, mp: [TC_MONKEYPATCH[a], TC_MONKEYPATCH[b]] })
            }
          }
        }
      }
      const stride = Math.max(1, Math.floor(combos.length / 80))
      return Array.from({ length: 80 }, (_, i) => {
        const { inj, rr, mp } = combos[(i * stride + salt + 7) % combos.length]
        const cv = pick(CSS_VARIANTS, i, salt)
        return spec({
          n: i + 1,
          slug: `${inj} ${rr} ${mp[0]}+${mp[1]}`,
          idea: `lab-toCanvas inject:${inj} + ${rr} + [${mp.join(', ')}] — capture/raster scope × root snap × dual hooks`,
          useBaseline: cv.useBaseline,
          css: cv.css,
          extra: {
            inject: inj,
            rasterPatch: 'lab-toCanvas',
            svgRootRound: rr,
            monkeypatch: mp,
          },
        })
      })
    },
  },
]

/** @param {ReturnType<typeof spec>} s @param {number} attempt */
function mutateSpec(s, attempt) {
  const extra = { ...s.extra }
  let slug = s.slug
  const altMp = TC_MONKEYPATCH[(attempt + 5) % TC_MONKEYPATCH.length]
  const altRr = SVG_ROOT_ROUNDS[attempt % SVG_ROOT_ROUNDS.length]
  if (attempt % 4 === 0) {
    extra.svgRootRound = altRr
    slug = `${slug} rr-${altRr}`
  } else if (attempt % 4 === 1 && Array.isArray(extra.monkeypatch)) {
    extra.monkeypatch = [
      extra.monkeypatch[0],
      TC_MONKEYPATCH[(attempt + 11) % TC_MONKEYPATCH.length],
    ]
    slug = `${slug} mp2-alt`
  } else if (attempt % 4 === 2) {
    extra.monkeypatch = altMp
    slug = `${slug} mp-${altMp}`
  } else {
    extra.inject = extra.inject === 'both' ? 'raster' : 'both'
    slug = `${slug} inj-${extra.inject}`
  }
  return { ...s, slug, extra }
}

/** @param {ReturnType<typeof spec>} s @param {Set<string>} used @param {Set<string>} existing */
function ensureUniqueSpec(s, used, existing) {
  let cur = s
  for (let attempt = 0; attempt < 64; attempt++) {
    const css = resolvedCss(cur)
    const key = tupleKey({
      rasterPatch: 'lab-toCanvas',
      inject: cur.extra.inject ?? 'both',
      css,
      ...cur.extra,
    })
    const kc = knobCount(cur.extra)
    if (kc >= 2 && kc <= 3 && !used.has(key) && !existing.has(key)) {
      used.add(key)
      return cur
    }
    cur = mutateSpec(cur, attempt)
  }
  throw new Error(`could not uniquify #${s.n} ${s.slug}`)
}

function fmtExtra(extra) {
  const lines = Object.entries(extra).map(([k, v]) => {
    if (Array.isArray(v)) {
      const items = v.map((x) => JSON.stringify(x)).join(', ')
      return `      ${k}: [${items}],`
    }
    return `      ${k}: ${JSON.stringify(v)},`
  })
  return `{\n${lines.join('\n')}\n    }`
}

function renderShard({ letter, theme, blurb, specs }) {
  const specLines = specs
    .map(({ n, slug, idea, css, useBaseline, extra }) => {
      const cssPart =
        useBaseline === true
          ? '    useBaseline: true,'
          : css !== undefined
            ? `    css: ${JSON.stringify(css)},`
            : ''
      return `  {
    n: ${n},
    slug: ${JSON.stringify(slug)},
    idea: ${JSON.stringify(idea)},
${cssPart}
    extra: ${fmtExtra(extra)},
  },`
    })
    .join('\n')

  const prefix = `tc-lab-c${letter}`

  return `/**
 * Lab toCanvas plus combo ${letter.toUpperCase()} — ${prefix}-001..080.
 * ${blurb}
 * Each recipe: rasterPatch lab-toCanvas + 2–3 knobs (svgRootRound / monkeypatch).
 * Matrix: node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids '${prefix}-*'
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css?: string, useBaseline?: boolean, extra: Partial<import('../fo-fix-recipe-shared.js').FoFixRecipe> }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== 80) {
  throw new Error(\`recipes-tocanvas-lab-plus-combo-${letter}.js: expected 80 specs, got \${SPECS.length}\`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 80) {
  throw new Error(\`recipes-tocanvas-lab-plus-combo-${letter}.js: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipe-shared.js').FoFixRecipe[]} */
const RECIPES = SPECS.map((spec) => {
  const num = String(spec.n).padStart(3, '0')
  const inject = spec.extra.inject ?? 'both'
  const useBaseline = inject === 'both' && spec.useBaseline === true
  return {
    id: \`${prefix}-\${num}\`,
    label: \`${prefix} #\${spec.n}: \${spec.slug}\`,
    idea: spec.idea,
    css: useBaseline ? FO_BASELINE_CSS : (spec.css ?? ''),
    inject,
    rasterPatch: 'lab-toCanvas',
    category: 'raster',
    active: true,
    notes: \`Lab toCanvas plus combo ${letter.toUpperCase()}; ${theme}; FO raster only — no text bypass.\`,
    ...spec.extra,
  }
})

if (RECIPES.length !== 80) {
  throw new Error(
    \`recipes-tocanvas-lab-plus-combo-${letter}.js: expected 80 recipes, got \${RECIPES.length}\`,
  )
}

for (const r of RECIPES) {
  if (r.rasterPatch !== 'lab-toCanvas') {
    throw new Error(\`\${r.id}: rasterPatch must be lab-toCanvas\`)
  }
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

const existingKeys = await loadExistingTupleKeys()
const usedKeys = new Set()
let totalWritten = 0

for (const shard of SHARDS) {
  let specs = shard.build(shard.letter.charCodeAt(0) - 96)
  if (specs.length !== 80) {
    throw new Error(`combo-${shard.letter}: expected 80 specs, got ${specs.length}`)
  }

  for (const s of specs) {
    const kc = knobCount(s.extra)
    if (kc < 2 || kc > 3) {
      throw new Error(`combo-${shard.letter} #${s.n}: knob count ${kc} (need 2–3)`)
    }
  }

  specs = specs.map((s) => ensureUniqueSpec(s, usedKeys, existingKeys))

  const seenSlugs = new Set()
  specs = specs.map((s) => {
    let slug = s.slug
    let k = 2
    while (seenSlugs.has(slug)) {
      slug = `${s.slug} v${k}`
      k++
    }
    seenSlugs.add(slug)
    return slug === s.slug ? s : { ...s, slug }
  })

  const file = join(
    SHARDS_DIR,
    `recipes-tocanvas-lab-plus-combo-${shard.letter}.js`,
  )
  writeFileSync(file, renderShard({ ...shard, specs }))
  totalWritten += 80
  console.log(`wrote ${file}`)
}

console.log(`\nGenerated 4 shards (${totalWritten} recipes)`)
console.log(
  'Matrix (all tc-lab-*): node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids \'tc-lab-*\'',
)
console.log(
  'Matrix (combo only): node __localtests__/fo-fix-lab.mjs --matrix --no-text-bypass --ids \'tc-lab-c[abcd]-*\'',
)

console.log('\nRunning --check-dupes…')
const report = await runCheckDupesCli()
const tcLabCount = [...report.shardCounts]
  .filter((s) => /tc-lab|tocanvas-lab/.test(s.file))
  .reduce((n, s) => n + s.count, 0)
console.log(`\n[gen-tocanvas-lab-plus] tc-lab-ish shard recipes (subset): ${tcLabCount}`)
console.log(`[gen-tocanvas-lab-plus] merged total: ${report.mergedTotal}`)

if (report.duplicateIds.length) {
  process.exitCode = 1
}

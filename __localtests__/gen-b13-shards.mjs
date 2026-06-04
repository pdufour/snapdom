#!/usr/bin/env node
/**
 * One-shot generator for loop-ai-b13-w01..w40 recipe shards.
 * Run: node __localtests__/gen-b13-shards.mjs
 */
import { writeFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { recipesFromShardModule } from './fo-fix-recipes-shard-util.js'
import { FO_BASELINE_CSS } from './fo-fix-recipes-constants.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SHARDS_DIR = join(__dirname, 'fo-recipes-shards')

const MIN_LEAF = 'foreignObject *{box-sizing:border-box!important;min-width:0!important}'
const MIN_OVERFLOW = 'foreignObject{overflow:visible!important}'
const MIN_KERNING =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'
const TEXT_LEAF = MIN_LEAF
const CHROMIUM_COPY = MIN_KERNING
const CONTAIN_MIN =
  'foreignObject{contain:paint!important}' +
  'foreignObject *{min-width:0!important;min-height:0!important;box-sizing:border-box!important}'
const OVERFLOW_MIN =
  'svg{display:block!important;overflow:visible!important}' +
  'foreignObject{overflow:visible!important}'
const SHAPE_PREC = 'foreignObject *{shape-rendering:geometricPrecision!important}'
const IMG_AUTO = 'foreignObject *{image-rendering:auto!important}'
const BLOCK_SVG = 'svg{display:block!important}'

const CSS_VARIANTS = [
  { key: 'bare', css: '', label: 'bare raster' },
  { key: 'overflow', css: MIN_OVERFLOW, label: 'FO overflow visible' },
  { key: 'leaf', css: MIN_LEAF, label: 'FO leaf min-width' },
  { key: 'kerning', css: MIN_KERNING, label: 'FO kerning normal' },
  { key: 'shape', css: SHAPE_PREC, label: 'shape-rendering geometric' },
  { key: 'img-auto', css: IMG_AUTO, label: 'image-rendering auto' },
  { key: 'contain', css: CONTAIN_MIN, label: 'contain paint min' },
  { key: 'overflow-min', css: OVERFLOW_MIN, label: 'svg block overflow' },
  { key: 'block-svg', css: BLOCK_SVG, label: 'svg display block' },
  { key: 'chromium-leaf', css: CHROMIUM_COPY + TEXT_LEAF, label: 'Chromium copy leaf' },
]

const ROOT_ROUNDS = [
  undefined,
  'integer-viewbox',
  'int-floor',
  'round-dims',
]

const INJECTS = ['raster', 'both']

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function tupleKey(r) {
  const css = r.css ?? ''
  return JSON.stringify({
    inject: r.inject,
    rasterPatch: r.rasterPatch ?? null,
    css,
    svgRootRound: r.svgRootRound ?? null,
    foSvgPatch: r.foSvgPatch ?? null,
    monkeypatch: r.monkeypatch ?? null,
    svgRootPatch: r.svgRootPatch ?? null,
    svgMarkupPatch: r.svgMarkupPatch ?? null,
    radicalPatch: r.radicalPatch ?? null,
    radicalOptions: r.radicalOptions ?? null,
    harnessSnapdom: r.harnessSnapdom ?? null,
  })
}

/** Resolved tuple for compare — both+empty css → baseline marker */
function resolvedTupleKey(spec, extra, inject) {
  const css =
    inject === 'both' && (spec.css ?? '') === '' ? FO_BASELINE_CSS : (spec.css ?? '')
  return tupleKey({ inject, css, ...extra })
}

/** @returns {Promise<Set<string>>} */
async function loadB12TupleKeys() {
  const files = readdirSync(SHARDS_DIR).filter((f) => f.includes('b12-w'))
  const keys = new Set()
  for (const file of files) {
    const mod = await import(pathToFileURL(join(SHARDS_DIR, file)).href)
  for (const r of recipesFromShardModule(mod, file)) {
    keys.add(tupleKey(r))
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
 * @param {'raster'|'both'} [p.inject]
 * @param {Record<string, unknown>} [p.extra]
 */
function spec({ n, slug, idea, css = '', inject = 'raster', extra = {} }) {
  return { n, slug, idea, css, extra: { inject, ...extra } }
}

/** Rotate pick from arr using index — avoids flat cross-product ordering. */
function pick(arr, i, salt = 0) {
  return arr[(i + salt) % arr.length]
}

/** @type {{ wid: number, theme: string, blurb: string, build: (w: number) => ReturnType<typeof spec>[] }[]} */
const SHARD_THEMES = [
  {
    wid: 1,
    theme: 'createImageBitmap handoff',
    blurb: 'ImageBitmap premultiply/pixelated/close vs HTMLImageElement drawImage',
    build: (w) => {
      const patches = [
        'create-image-bitmap',
        'create-image-bitmap-premultiply',
        'create-image-bitmap-pixelated',
        'bitmap-close',
      ]
      return comboSpecs(
        w,
        [
          { name: 'rp', values: patches },
          { name: 'cv', values: CSS_VARIANTS },
          { name: 'rr', values: ROOT_ROUNDS },
        ],
        40,
        (i, c) => {
          const cv = /** @type {typeof CSS_VARIANTS[0]} */ (c.cv)
          const rr = /** @type {string|undefined} */ (c.rr)
          const rp = /** @type {string} */ (c.rp)
          const inj = pick(INJECTS, i, w + 1)
          /** @type {Record<string, unknown>} */
          const extra = { inject: inj, rasterPatch: rp }
          if (rr) extra.svgRootRound = rr
          return spec({
            n: i + 1,
            slug: `${rp} ${cv.key}${rr ? ` ${rr}` : ''}`,
            idea: `${rp} raster + ${cv.label}${rr ? ` + ${rr}` : ''} — ImageBitmap vs img decode path`,
            css: cv.css,
            inject: inj,
            extra,
          })
        },
      )
    },
  },
  {
    wid: 2,
    theme: 'triple-raf-flush compositor',
    blurb: 'triple requestAnimationFrame flush before drawImage — compositor settle probes',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w)
        const rr = pick(ROOT_ROUNDS, i, w + 2)
        const inj = i % 3 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'triple-raf-flush' }
        if (rr) extra.svgRootRound = rr
        if (i === 7) extra.monkeypatch = 'raf-before-draw'
        if (i === 15) extra.monkeypatch = 'decode-interval-prototype'
        if (i === 23) extra.foSvgPatch = 'filter-noop-defs'
        if (i === 31) extra.svgRootPatch = { preserveAspectRatio: 'xMidYMid meet' }
        return spec({
          n: i + 1,
          slug: `triple-raf ${cv.key}${rr ? ` ${rr}` : ''}${i === 7 ? ' mp-raf' : ''}`,
          idea: `triple-raf-flush + ${cv.label} — three-frame compositor flush before FO ink blit`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 3,
    theme: 'webp-roundtrip encode',
    blurb: 'canvas→webp→img decode round-trip before final drawImage',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 1)
        const rr = pick(ROOT_ROUNDS, i, w + 3)
        const inj = pick(INJECTS, i, w)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'webp-roundtrip' }
        if (rr) extra.svgRootRound = rr
        if (i % 5 === 0) extra.foSvgPatch = 'fe-color-matrix-identity'
        if (i % 7 === 1) extra.svgMarkupPatch = 'strip-xml-declaration'
        return spec({
          n: i + 1,
          slug: `webp-roundtrip ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `webp-roundtrip lossy re-encode + ${cv.label} — FO decode via webp intermediate`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 4,
    theme: 'bitmaprenderer-transfer',
    blurb: 'ImageBitmap → ImageBitmapRenderingContext transfer path',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 2)
        const rr = pick(ROOT_ROUNDS, i, w + 1)
        const inj = i % 4 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'bitmaprenderer-transfer' }
        if (rr) extra.svgRootRound = rr
        if (i === 12) extra.monkeypatch = 'createImageBitmap-high'
        if (i === 28) extra.foSvgPatch = 'fo-shape-rendering-auto'
        return spec({
          n: i + 1,
          slug: `bitmaprenderer ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `bitmaprenderer-transfer + ${cv.label} — skip 2d drawImage via bitmaprenderer`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 5,
    theme: 'img-srcset-1x raster',
    blurb: 'img.srcset 1x descriptor handoff vs plain src decode',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 4)
        const rr = pick(ROOT_ROUNDS, i, w + 5)
        const inj = pick(INJECTS, i, w + 2)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'img-srcset-1x' }
        if (rr) extra.svgRootRound = rr
        if (i % 6 === 2) extra.svgMarkupPatch = 'explicit-xmlns'
        return spec({
          n: i + 1,
          slug: `srcset-1x ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `img-srcset-1x + ${cv.label} — srcset selection before decode/draw`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 6,
    theme: 'double SVG data-URL encode',
    blurb: 'svg-dataurl-double-encode and v2-double-svg-encode round-trip stress',
    build: (w) => {
      const patches = ['svg-dataurl-double-encode', 'v2-double-svg-encode']
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(patches, i, w)
        const cv = pick(CSS_VARIANTS, i, w + 6)
        const rr = pick(ROOT_ROUNDS, i, w + 7)
        const inj = i % 3 === 1 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp }
        if (rr) extra.svgRootRound = rr
        if (i % 8 === 0) extra.svgMarkupPatch = 'base64-roundtrip'
        return spec({
          n: i + 1,
          slug: `${rp} ${cv.key}`,
          idea: `${rp} + ${cv.label} — double URI encode before Image decode`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 7,
    theme: 'phantom-font-prime',
    blurb: 'offscreen measureText font prime before FO raster decode',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 8)
        const rr = pick(ROOT_ROUNDS, i, w + 9)
        const inj = pick(INJECTS, i, w + 3)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'phantom-font-prime' }
        if (rr) extra.svgRootRound = rr
        if (i === 5) extra.monkeypatch = 'measureText-prime'
        if (i === 19) extra.monkeypatch = 'fonts-ready-delay'
        if (i === 33) extra.foSvgPatch = 'filter-empty-nop'
        return spec({
          n: i + 1,
          slug: `phantom-font ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `phantom-font-prime + ${cv.label} — prime font metrics before svg decode`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 8,
    theme: 'context-alpha-false-desync',
    blurb: '2d context alpha:false vs premultiplied FO ink desync probe',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 10)
        const rr = pick(ROOT_ROUNDS, i, w + 11)
        const inj = i % 5 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'context-alpha-false-desync' }
        if (rr) extra.svgRootRound = rr
        if (i % 9 === 4) extra.foSvgPatch = 'fe-component-transfer-identity'
        return spec({
          n: i + 1,
          slug: `alpha-desync ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `context-alpha-false-desync + ${cv.label} — alpha premultiply mismatch probe`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 9,
    theme: 'composite-copy 2d op',
    blurb: 'globalCompositeOperation copy before FO blit',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 12)
        const rr = pick(ROOT_ROUNDS, i, w + 13)
        const inj = pick(INJECTS, i, w + 4)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'composite-copy' }
        if (rr) extra.svgRootRound = rr
        if (i === 18) extra.monkeypatch = 'draw-image-pixelated'
        return spec({
          n: i + 1,
          slug: `composite-copy ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `composite-copy + ${cv.label} — copy compositing mode on decode blit`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 10,
    theme: 'flip-y coordinate probe',
    blurb: 'vertical flip drawImage — FO origin vs canvas Y axis diagnostic',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 14)
        const rr = pick(ROOT_ROUNDS, i, w + 15)
        const inj = i % 2 === 0 ? 'raster' : 'both'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'flip-y' }
        if (rr) extra.svgRootRound = rr
        if (i % 10 === 3) extra.svgRootPatch = { preserveAspectRatio: 'xMinYMin slice' }
        return spec({
          n: i + 1,
          slug: `flip-y ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `flip-y + ${cv.label} — invert Y before ink compare`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 11,
    theme: 'canvas-filter-invert',
    blurb: 'canvas 2d filter invert diagnostic on FO decode blit',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 16)
        const rr = pick(ROOT_ROUNDS, i, w + 17)
        const inj = pick(INJECTS, i, w + 5)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'canvas-filter-invert' }
        if (rr) extra.svgRootRound = rr
        if (i % 11 === 6) extra.foSvgPatch = 'fe-morphology-identity'
        return spec({
          n: i + 1,
          slug: `filter-invert ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `canvas-filter-invert + ${cv.label} — invert filter then compare ink bounds`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 12,
    theme: 'double-raster average/difference',
    blurb: 'two-pass raster average or pixel difference merge',
    build: (w) => {
      const patches = ['double-raster-average', 'double-raster-difference']
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(patches, i, w)
        const cv = pick(CSS_VARIANTS, i, w + 18)
        const rr = pick(ROOT_ROUNDS, i, w + 19)
        const inj = i % 3 === 2 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `${rp} ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `${rp} + ${cv.label} — dual decode merge before ink measure`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 13,
    theme: 'supersample-downscale',
    blurb: 'lab supersample then downscale — scaleMultiplier from radicalOptions',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 20)
        const rr = pick(ROOT_ROUNDS, i, w + 21)
        const inj = pick(INJECTS, i, w + 6)
        const mult = 1.5 + (i % 4) * 0.25
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: 'supersample-downscale',
          radicalOptions: { scaleMultiplier: mult },
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `supersample ${mult}x ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `supersample-downscale ${mult}× + ${cv.label} — oversample then downscale blit`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 14,
    theme: 'h2-supersample-dpr-lt2',
    blurb: 'HiDPI supersample path when device dpr below 2',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 22)
        const rr = pick(ROOT_ROUNDS, i, w + 23)
        const inj = i % 4 === 1 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'h2-supersample-dpr-lt2' }
        if (rr) extra.svgRootRound = rr
        if (i === 9) extra.monkeypatch = 'h2-raster-normalize-capture'
        if (i === 27) extra.foSvgPatch = 'fe-merge-empty'
        return spec({
          n: i + 1,
          slug: `h2-supersample ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `h2-supersample-dpr-lt2 + ${cv.label} — conditional HiDPI supersample`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 15,
    theme: 'h2-frac-draw offsets',
    blurb: 'fractional drawImage dest offsets — sub-pixel blit alignment',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 24)
        const rr = pick(ROOT_ROUNDS, i, w + 25)
        const inj = pick(INJECTS, i, w + 7)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'h2-frac-draw' }
        if (rr) extra.svgRootRound = rr
        if (i % 12 === 5) extra.monkeypatch = 'drawImage-wrap'
        return spec({
          n: i + 1,
          slug: `h2-frac-draw ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `h2-frac-draw + ${cv.label} — fractional drawImage dest probe`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 16,
    theme: 'scale-down-up two-pass',
    blurb: 'raster at reduced scale then upscale blit to target canvas',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 26)
        const rr = pick(ROOT_ROUNDS, i, w + 27)
        const inj = i % 3 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'scale-down-up' }
        if (rr) extra.svgRootRound = rr
        if (i % 8 === 2) extra.svgMarkupPatch = 'strip-identity-transforms'
        return spec({
          n: i + 1,
          slug: `scale-down-up ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `scale-down-up + ${cv.label} — two-pass scale raster pipeline`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 17,
    theme: 'html-to-canvas-direct',
    blurb: 'iframe HTML→canvas direct bypass of svg Image decode',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 28)
        const rr = pick(ROOT_ROUNDS, i, w + 29)
        const inj = 'both'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'html-to-canvas-direct' }
        if (rr) extra.svgRootRound = rr
        if (i % 7 === 3) extra.svgMarkupPatch = 'explicit-xmlns-strip-transforms'
        return spec({
          n: i + 1,
          slug: `html-canvas ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `html-to-canvas-direct + ${cv.label} — serialized FO via iframe canvas`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 18,
    theme: 'iframe-serialized-svg-decode',
    blurb: 'iframe FO wrapper + decode-interval on serialized SVG string',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 30)
        const rr = pick(ROOT_ROUNDS, i, w + 31)
        const inj = pick(INJECTS, i, w + 8)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'iframe-serialized-svg-decode' }
        if (rr) extra.svgRootRound = rr
        if (i === 14) extra.monkeypatch = 'decode-interval-wrap'
        return spec({
          n: i + 1,
          slug: `iframe-svg ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `iframe-serialized-svg-decode + ${cv.label} — iframe svg string decode path`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 19,
    theme: 'node-layer-datauri-blob',
    blurb: 'data-URI→blob layer handoff mimicking node raster pipeline',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 32)
        const rr = pick(ROOT_ROUNDS, i, w + 33)
        const inj = i % 2 === 1 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'node-layer-datauri-blob' }
        if (rr) extra.svgRootRound = rr
        if (i % 9 === 0) extra.foSvgPatch = 'fe-displacement-map-identity'
        return spec({
          n: i + 1,
          slug: `node-layer ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `node-layer-datauri-blob + ${cv.label} — blob layer staging raster`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 20,
    theme: 'element-capture-bitmap API',
    blurb: 'Element Capture API bitmap handoff vs svg Image decode',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 34)
        const rr = pick(ROOT_ROUNDS, i, w + 35)
        const inj = pick(INJECTS, i, w + 9)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'element-capture-bitmap' }
        if (rr) extra.svgRootRound = rr
        if (i === 22) extra.monkeypatch = 'snapdom-post-fo-baseline'
        return spec({
          n: i + 1,
          slug: `el-capture ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `element-capture-bitmap + ${cv.label} — Restricted API bitmap capture path`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 21,
    theme: 'putImageData live snapshot',
    blurb: 'canvas putImageData overlay from live DOM pixel snapshot',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 36)
        const rr = pick(ROOT_ROUNDS, i, w + 37)
        const inj = 'both'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'canvas-putImageData-live-snapshot' }
        if (rr) extra.svgRootRound = rr
        if (i % 10 === 4) extra.foSvgPatch = 'fe-turbulence-composite'
        return spec({
          n: i + 1,
          slug: `putImageData ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `canvas-putImageData-live-snapshot + ${cv.label} — live pixel graft after FO decode`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 22,
    theme: 'canvas-from-live DOM',
    blurb: 'live DOM element draw to canvas without svg Image intermediate',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 38)
        const rr = pick(ROOT_ROUNDS, i, w + 39)
        const inj = pick(INJECTS, i, w + 10)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'canvas-from-live' }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `canvas-live ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `canvas-from-live + ${cv.label} — direct live subtree canvas blit`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 23,
    theme: 'blob-url-early-revoke',
    blurb: 'revoke objectURL immediately after img.src assign — timing stress',
    build: (w) =>
      Array.from({ length: 40 }, (_, i) => {
        const cv = pick(CSS_VARIANTS, i, w + 40)
        const rr = pick(ROOT_ROUNDS, i, w + 41)
        const inj = i % 3 === 1 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: 'blob-url-early-revoke' }
        if (rr) extra.svgRootRound = rr
        if (i % 6 === 3) extra.svgMarkupPatch = 'strip-all-transforms'
        return spec({
          n: i + 1,
          slug: `early-revoke ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `blob-url-early-revoke + ${cv.label} — revoke blob before decode completes`,
          css: cv.css,
          inject: inj,
          extra,
        })
      }),
  },
  {
    wid: 24,
    theme: 'fe-morphology-identity filter',
    blurb: 'SVG feMorphology identity on FO + varied raster decode paths',
    build: (w) => {
      const rasters = [
        'direct',
        'decode-interval-raf',
        'double-raf',
        'fonts-ready',
        'load-event',
        'pre-decode-dom',
        'blob-url',
        'offscreen-canvas',
        'will-read-frequently',
        'canvas-pixelated',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w)
        const cv = pick(CSS_VARIANTS, i, w + 42)
        const rr = pick(ROOT_ROUNDS, i, w + 43)
        const inj = pick(INJECTS, i, w + 11)
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'fe-morphology-identity',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `fe-morph ${rp} ${cv.key}`,
          idea: `fe-morphology-identity + ${rp} + ${cv.label} — filter graph noop before raster`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 25,
    theme: 'fe-component-transfer-identity',
    blurb: 'feComponentTransfer identity filter + raster timing variants',
    build: (w) => {
      const rasters = [
        'decode-microtask-twice',
        'raf-before-draw',
        'double-decode',
        'fonts-ready-interval',
        'load-event-interval',
        'decode-via-blob',
        'create-image-bitmap',
        'two-stage',
        'triple-raf-flush',
        'webp-roundtrip',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 1)
        const cv = pick(CSS_VARIANTS, i, w + 44)
        const rr = pick(ROOT_ROUNDS, i, w + 45)
        const inj = i % 4 === 2 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'fe-component-transfer-identity',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `fe-comp ${rp} ${cv.key}`,
          idea: `fe-component-transfer-identity + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 26,
    theme: 'fe-merge-empty filter',
    blurb: 'empty feMerge node on FO filter chain + raster paths',
    build: (w) => {
      const rasters = [
        'bitmaprenderer-transfer',
        'img-srcset-1x',
        'phantom-font-prime',
        'composite-copy',
        'flip-y',
        'canvas-filter-invert',
        'double-raster-average',
        'supersample-downscale',
        'h2-frac-draw',
        'scale-down-up',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 2)
        const cv = pick(CSS_VARIANTS, i, w + 46)
        const rr = pick(ROOT_ROUNDS, i, w + 47)
        const inj = pick(INJECTS, i, w + 12)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp, foSvgPatch: 'fe-merge-empty' }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `fe-merge ${rp} ${cv.key}`,
          idea: `fe-merge-empty + ${rp} + ${cv.label} — empty merge filter flush`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 27,
    theme: 'fe-displacement-map-identity',
    blurb: 'feDisplacementMap identity on FO + exotic raster handoffs',
    build: (w) => {
      const rasters = [
        'context-alpha-false-desync',
        'create-image-bitmap-premultiply',
        'create-image-bitmap-pixelated',
        'bitmap-close',
        'svg-dataurl-double-encode',
        'v2-double-svg-encode',
        'h2-supersample-dpr-lt2',
        'double-raster-difference',
        'element-capture-bitmap',
        'canvas-from-live',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 3)
        const cv = pick(CSS_VARIANTS, i, w + 48)
        const rr = pick(ROOT_ROUNDS, i, w + 49)
        const inj = i % 5 === 3 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'fe-displacement-map-identity',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `fe-displace ${rp} ${cv.key}`,
          idea: `fe-displacement-map-identity + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 28,
    theme: 'fe-turbulence-composite filter',
    blurb: 'feTurbulence composite noop on FO + raster decode sweeps',
    build: (w) => {
      const rasters = [
        'node-layer-datauri-blob',
        'html-to-canvas-direct',
        'iframe-serialized-svg-decode',
        'canvas-putImageData-live-snapshot',
        'blob-url-early-revoke',
        'direct',
        'decode-interval-raf',
        'fonts-ready-interval',
        'double-raf',
        'wait-fonts-500ms',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 4)
        const cv = pick(CSS_VARIANTS, i, w + 50)
        const rr = pick(ROOT_ROUNDS, i, w + 51)
        const inj = pick(INJECTS, i, w + 13)
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'fe-turbulence-composite',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `fe-turb ${rp} ${cv.key}`,
          idea: `fe-turbulence-composite + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 29,
    theme: 'svg-root-pattern-fill',
    blurb: 'transparent pattern fill on SVG root before FO raster',
    build: (w) => {
      const rasters = [
        'decode-interval',
        'decode-interval-raf',
        'fonts-ready',
        'double-decode',
        'triple-decode',
        'load-event',
        'pre-decode-dom',
        'blob-url-decode-interval',
        'offscreen-canvas',
        'will-read-frequently',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 5)
        const cv = pick(CSS_VARIANTS, i, w + 52)
        const rr = pick(ROOT_ROUNDS, i, w + 53)
        const inj = i % 3 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'svg-root-pattern-fill',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `pattern-fill ${rp} ${cv.key}`,
          idea: `svg-root-pattern-fill + ${rp} + ${cv.label} — pattern defs flush`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 30,
    theme: 'fo-border-linear-gradient-stroke',
    blurb: 'linearGradient stroke on FO border box + raster timing',
    build: (w) => {
      const rasters = [
        'canvas-pixelated',
        'create-image-bitmap',
        'two-stage',
        'triple-raf-flush',
        'webp-roundtrip',
        'bitmaprenderer-transfer',
        'img-srcset-1x',
        'phantom-font-prime',
        'composite-copy',
        'flip-y',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 6)
        const cv = pick(CSS_VARIANTS, i, w + 54)
        const rr = pick(ROOT_ROUNDS, i, w + 55)
        const inj = pick(INJECTS, i, w + 14)
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'fo-border-linear-gradient-stroke',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `gradient-stroke ${rp} ${cv.key}`,
          idea: `fo-border-linear-gradient-stroke + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 31,
    theme: 'svg-filter-pattern-border bundle',
    blurb: 'combined pattern+filter+border SVG defs bundle on FO',
    build: (w) => {
      const rasters = [
        'canvas-filter-invert',
        'double-raster-average',
        'double-raster-difference',
        'supersample-downscale',
        'h2-supersample-dpr-lt2',
        'h2-frac-draw',
        'scale-down-up',
        'context-alpha-false-desync',
        'blob-url-fetch-revoke',
        'decode-via-blob',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 7)
        const cv = pick(CSS_VARIANTS, i, w + 56)
        const rr = pick(ROOT_ROUNDS, i, w + 57)
        const inj = i % 4 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'svg-filter-pattern-border-bundle',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `filter-bundle ${rp} ${cv.key}`,
          idea: `svg-filter-pattern-border-bundle + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 32,
    theme: 'fo-shape-rendering-auto',
    blurb: 'shape-rendering:auto SVG patch on FO + raster decode sweeps',
    build: (w) => {
      const rasters = [
        'load-event-interval',
        'decode-microtask-twice',
        'raf-before-draw',
        'double-decode',
        'triple-decode',
        'fonts-ready-interval',
        'wait-fonts-500ms',
        'blob-url',
        'direct',
        'device-grid-floor',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 8)
        const cv = pick(CSS_VARIANTS, i, w + 58)
        const rr = pick(ROOT_ROUNDS, i, w + 59)
        const inj = pick(INJECTS, i, w + 15)
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'fo-shape-rendering-auto',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `shape-auto ${rp} ${cv.key}`,
          idea: `fo-shape-rendering-auto + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 33,
    theme: 'svgMarkupPatch sweep',
    blurb: 'strip-xml / explicit-xmlns / base64-roundtrip markup patches + raster',
    build: (w) => {
      const markups = [
        'strip-xml-declaration',
        'explicit-xmlns',
        'strip-identity-transforms',
        'explicit-xmlns-strip-transforms',
        'base64-roundtrip',
        'strip-all-transforms',
      ]
      const rasters = [
        'decode-interval',
        'double-raf',
        'fonts-ready-interval',
        'blob-url-decode-interval',
        'create-image-bitmap',
        'offscreen-canvas',
        'triple-raf-flush',
        'webp-roundtrip',
        'phantom-font-prime',
        'scale-down-up',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const mp = pick(markups, i, w)
        const rp = pick(rasters, i, w + 9)
        const cv = pick(CSS_VARIANTS, i, w + 60)
        const inj = i % 3 === 2 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp, svgMarkupPatch: mp }
        if (i % 4 === 1) extra.svgRootRound = pick(ROOT_ROUNDS, i, w + 60)
        return spec({
          n: i + 1,
          slug: `${mp} ${rp} ${cv.key}`,
          idea: `svgMarkupPatch ${mp} + ${rp} + ${cv.label} — string hygiene before decode`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 34,
    theme: 'monkeypatch decode-wrap family',
    blurb: 'decode-wrap / decode-interval-wrap / image-decode-twice runtime patches',
    build: (w) => {
      const patches = ['decode-wrap', 'decode-interval-wrap', 'image-decode-twice']
      const rasters = [
        'decode-interval',
        'decode-interval-raf',
        'double-decode',
        'fonts-ready',
        'load-event',
        'direct',
        'blob-url',
        'offscreen-canvas',
        'will-read-frequently',
        'canvas-pixelated',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const mp = pick(patches, i, w)
        const rp = pick(rasters, i, w + 10)
        const cv = pick(CSS_VARIANTS, i, w + 61)
        const inj = pick(INJECTS, i, w + 16)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp, monkeypatch: mp }
        if (i % 5 === 2) extra.svgRootRound = pick(ROOT_ROUNDS, i, w + 61)
        return spec({
          n: i + 1,
          slug: `mp-${mp} ${rp} ${cv.key}`,
          idea: `monkeypatch ${mp} + ${rp} + ${cv.label} — runtime decode hook vs harness`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 35,
    theme: 'monkeypatch h2-raster-normalize',
    blurb: 'h2-raster-normalize-capture + h2 capture CSS monkeypatches',
    build: (w) => {
      const patches = [
        'h2-raster-normalize-capture',
        'h2-fo-normalize-full',
        'h2-fo-internal-star-capture',
        'h2-container-reset-capture',
      ]
      const rasters = [
        'decode-interval',
        'fonts-ready-interval',
        'double-raf',
        'triple-raf-flush',
        'blob-url-decode-interval',
        'create-image-bitmap',
        'two-stage',
        'scale-down-up',
        'h2-frac-draw',
        'h2-supersample-dpr-lt2',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const mp = pick(patches, i, w)
        const rp = pick(rasters, i, w + 11)
        const cv = pick(CSS_VARIANTS, i, w + 62)
        const inj = 'both'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp, monkeypatch: mp }
        if (i % 4 === 0) extra.svgRootRound = pick(ROOT_ROUNDS, i, w + 62)
        return spec({
          n: i + 1,
          slug: `mp-${mp} ${rp} ${cv.key}`,
          idea: `monkeypatch ${mp} + ${rp} + ${cv.label} — h2 normalize at capture/raster`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 36,
    theme: 'monkeypatch drawImage/fonts',
    blurb: 'draw-image-pixelated / createImageBitmap-high / measureText-prime / fonts-ready-delay',
    build: (w) => {
      const patches = [
        'draw-image-pixelated',
        'createImageBitmap-high',
        'measureText-prime',
        'fonts-ready-delay',
        'drawImage-wrap',
        'snapdom-post-fo-baseline',
        'h2-full-plus-container-capture',
        'capture-recipe-css',
      ]
      const rasters = [
        'decode-interval',
        'decode-interval-raf',
        'double-decode',
        'fonts-ready',
        'load-event-interval',
        'pre-decode-dom',
        'blob-url-decode-interval',
        'offscreen-canvas',
        'canvas-pixelated',
        'will-read-frequently',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const mp = pick(patches, i, w)
        const rp = pick(rasters, i, w + 12)
        const cv = pick(CSS_VARIANTS, i, w + 63)
        const inj = pick(INJECTS, i, w + 17)
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp, monkeypatch: mp }
        if (i % 6 === 1) extra.foSvgPatch = 'filter-noop-defs'
        return spec({
          n: i + 1,
          slug: `mp-${mp} ${rp} ${cv.key}`,
          idea: `monkeypatch ${mp} + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 37,
    theme: 'preserveAspectRatio svgRootPatch',
    blurb: 'xMidYMid meet / slice / none on svg root + raster decode paths',
    build: (w) => {
      const aspects = [
        { preserveAspectRatio: 'xMidYMid meet' },
        { preserveAspectRatio: 'xMinYMin slice' },
        { preserveAspectRatio: 'none' },
        { preserveAspectRatio: 'xMidYMid' },
      ]
      const rasters = [
        'decode-interval',
        'double-raf',
        'fonts-ready-interval',
        'triple-raf-flush',
        'webp-roundtrip',
        'bitmaprenderer-transfer',
        'phantom-font-prime',
        'composite-copy',
        'flip-y',
        'scale-down-up',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const asp = pick(aspects, i, w)
        const rp = pick(rasters, i, w + 13)
        const cv = pick(CSS_VARIANTS, i, w + 64)
        const inj = i % 3 === 1 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = { inject: inj, rasterPatch: rp, svgRootPatch: asp }
        if (i % 4 === 2) extra.svgRootRound = pick(ROOT_ROUNDS, i, w + 64)
        return spec({
          n: i + 1,
          slug: `aspect ${asp.preserveAspectRatio} ${rp} ${cv.key}`,
          idea: `preserveAspectRatio ${asp.preserveAspectRatio} + ${rp} + ${cv.label}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 38,
    theme: 'filter-empty-nop SVG patch',
    blurb: 'filter-empty-nop on FO + raster timing and viewBox combos',
    build: (w) => {
      const rasters = [
        'decode-interval',
        'decode-interval-raf',
        'double-decode',
        'triple-decode',
        'fonts-ready',
        'fonts-ready-interval',
        'load-event',
        'load-event-interval',
        'pre-decode-dom',
        'decode-microtask-twice',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 14)
        const cv = pick(CSS_VARIANTS, i, w + 65)
        const rr = pick(ROOT_ROUNDS, i, w + 65)
        const inj = pick(INJECTS, i, w + 18)
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          foSvgPatch: 'filter-empty-nop',
        }
        if (rr) extra.svgRootRound = rr
        return spec({
          n: i + 1,
          slug: `filter-nop ${rp} ${cv.key}${rr ? ` ${rr}` : ''}`,
          idea: `filter-empty-nop + ${rp} + ${cv.label}${rr ? ` + ${rr}` : ''}`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 39,
    theme: 'parse-svg-dom-reserialize',
    blurb: 'radical DOM parse+reserialize before raster — serialization round-trip',
    build: (w) => {
      const rasters = [
        'decode-interval',
        'double-raf',
        'fonts-ready-interval',
        'blob-url-decode-interval',
        'create-image-bitmap',
        'offscreen-canvas',
        'triple-raf-flush',
        'webp-roundtrip',
        'phantom-font-prime',
        'scale-down-up',
        'h2-frac-draw',
        'composite-copy',
        'flip-y',
        'canvas-filter-invert',
        'double-raster-average',
        'supersample-downscale',
        'h2-supersample-dpr-lt2',
        'bitmaprenderer-transfer',
        'img-srcset-1x',
        'node-layer-datauri-blob',
      ]
      return Array.from({ length: 40 }, (_, i) => {
        const rp = pick(rasters, i, w + 15)
        const cv = pick(CSS_VARIANTS, i, w + 66)
        const inj = i % 2 === 0 ? 'both' : 'raster'
        /** @type {Record<string, unknown>} */
        const extra = {
          inject: inj,
          rasterPatch: rp,
          radicalPatch: 'parse-svg-dom-reserialize',
        }
        if (i % 5 === 3) extra.svgRootRound = pick(ROOT_ROUNDS, i, w + 66)
        return spec({
          n: i + 1,
          slug: `reserialize ${rp} ${cv.key}`,
          idea: `parse-svg-dom-reserialize + ${rp} + ${cv.label} — DOM round-trip before decode`,
          css: cv.css,
          inject: inj,
          extra,
        })
      })
    },
  },
  {
    wid: 40,
    theme: 'capstone exotic raster mix',
    blurb: 'one-of-each exotic raster path not primary-themed elsewhere in b13',
    build: (w) => {
      /** @type {{ slug: string, idea: string, css: string, inject: 'raster'|'both', extra: Record<string, unknown> }[]} */
      const capstone = [
        {
          slug: 'product-toCanvas round-dims base64',
          idea: 'product-toCanvas + round-dims + base64-roundtrip markup — distinct from b12 w11 grid',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'product-toCanvas',
            svgRootRound: 'round-dims',
            svgMarkupPatch: 'base64-roundtrip',
          },
        },
        {
          slug: 'product-toCanvas xmlns-strip int-floor',
          idea: 'product-toCanvas + explicit-xmlns-strip-transforms + int-floor — distinct markup path',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'product-toCanvas',
            svgRootRound: 'int-floor',
            svgMarkupPatch: 'explicit-xmlns-strip-transforms',
          },
        },
        {
          slug: 'html2canvas-live-draw bare',
          idea: 'html2canvas-live-draw — alternate live HTML canvas exporter',
          css: '',
          inject: 'raster',
          extra: { inject: 'raster', rasterPatch: 'html2canvas-live-draw' },
        },
        {
          slug: 'no-fo-capture bare',
          idea: 'no-fo-capture raster — vector-only baseline diagnostic',
          css: '',
          inject: 'raster',
          extra: { inject: 'raster', rasterPatch: 'no-fo-capture' },
        },
        {
          slug: 'blob-url bare',
          idea: 'plain blob-url raster without decode-interval wait',
          css: '',
          inject: 'raster',
          extra: { inject: 'raster', rasterPatch: 'blob-url' },
        },
        {
          slug: 'integer-snap rects decode-interval',
          idea: 'integer-snap-all-rects radical + decode-interval raster',
          css: MIN_LEAF,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-interval',
            radicalPatch: 'integer-snap-all-rects',
          },
        },
        {
          slug: 'remove-fe-filters decode-interval',
          idea: 'remove-fe-filters radical + decode-interval — strip filters pre-raster',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-interval',
            radicalPatch: 'remove-fe-filters',
          },
        },
        {
          slug: 'force-ltr bidi fonts-ready',
          idea: 'force-ltr-unicode-bidi radical + fonts-ready raster',
          css: MIN_KERNING,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'fonts-ready',
            radicalPatch: 'force-ltr-unicode-bidi',
          },
        },
        {
          slug: 'chrome-legacy-webkit double-raf',
          idea: 'chrome-legacy-webkit-bundle radical + double-raf compositor flush',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'double-raf',
            radicalPatch: 'chrome-legacy-webkit-bundle',
          },
        },
        {
          slug: 'empty-svg-switch decode-interval',
          idea: 'empty-svg-switch-default radical + decode-interval raster wait',
          css: MIN_OVERFLOW,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-interval',
            radicalPatch: 'empty-svg-switch-default',
          },
        },
        {
          slug: 'h2-percent-int-vb triple-decode',
          idea: 'h2-fo-percent-int-viewbox radical + triple-decode raster loop',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'triple-decode',
            radicalPatch: 'h2-fo-percent-int-viewbox',
          },
        },
        {
          slug: 'h2-svg-footer decode-interval-raf',
          idea: 'h2-svg-footer-comment radical + decode-interval-raf',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-interval-raf',
            radicalPatch: 'h2-svg-footer-comment',
          },
        },
        {
          slug: 'h2-container-lang fonts-ready-interval',
          idea: 'h2-container-lang radical + fonts-ready-interval',
          css: TEXT_LEAF,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'fonts-ready-interval',
            radicalPatch: 'h2-container-lang',
          },
        },
        {
          slug: 'clone-node-capture direct',
          idea: 'clone-node-capture radical + direct raster — detached clone decode',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'direct',
            radicalPatch: 'clone-node-capture',
          },
        },
        {
          slug: 'measure-nudge svg-root load-event',
          idea: 'measure-nudge-svg-root radical + load-event raster',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'load-event',
            radicalPatch: 'measure-nudge-svg-root',
          },
        },
        {
          slug: 'fe-drop-shadow-zero decode-interval',
          idea: 'fe-drop-shadow-zero radical + decode-interval — zero shadow filter',
          css: MIN_OVERFLOW,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-interval',
            radicalPatch: 'fe-drop-shadow-zero',
          },
        },
        {
          slug: 'remove-filters-masks offscreen',
          idea: 'remove-filters-and-masks radical + offscreen-canvas blit',
          css: SHAPE_PREC,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'offscreen-canvas',
            radicalPatch: 'remove-filters-and-masks',
          },
        },
        {
          slug: 'fo-height-1px decode-microtask',
          idea: 'fo-height-1px-overflow-visible radical + decode-microtask-twice',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-microtask-twice',
            radicalPatch: 'fo-height-1px-overflow-visible',
          },
        },
        {
          slug: 'fo-explicit-xhtml decode-via-blob',
          idea: 'fo-explicit-xhtml-xmlns radical + decode-via-blob handoff',
          css: TEXT_LEAF,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-via-blob',
            radicalPatch: 'fo-explicit-xhtml-xmlns',
          },
        },
        {
          slug: 'fo-wrap-switch triple-raf',
          idea: 'fo-wrap-in-switch radical + triple-raf-flush compositor',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'triple-raf-flush',
            radicalPatch: 'fo-wrap-in-switch',
          },
        },
        {
          slug: 'svg-purge-ws bitmaprenderer',
          idea: 'svg-purge-whitespace radical + bitmaprenderer-transfer',
          css: BLOCK_SVG,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'bitmaprenderer-transfer',
            radicalPatch: 'svg-purge-whitespace',
          },
        },
        {
          slug: 'strip-svg-styles webp-roundtrip',
          idea: 'strip-svg-styles radical + webp-roundtrip encode path',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'webp-roundtrip',
            radicalPatch: 'strip-svg-styles',
          },
        },
        {
          slug: 'fo-innerhtml-min two-stage',
          idea: 'fo-innerhtml-minimal radical + two-stage PNG staging',
          css: MIN_LEAF,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'two-stage',
            radicalPatch: 'fo-innerhtml-minimal',
          },
        },
        {
          slug: 'split-fo-h createImageBitmap',
          idea: 'split-fo-horizontal radical + create-image-bitmap handoff',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'create-image-bitmap',
            radicalPatch: 'split-fo-horizontal',
          },
        },
        {
          slug: 'split-fo-child img-srcset',
          idea: 'split-fo-per-child radical + img-srcset-1x raster',
          css: CONTAIN_MIN,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'img-srcset-1x',
            radicalPatch: 'split-fo-per-child',
          },
        },
        {
          slug: 'clone-deep-strip phantom-font',
          idea: 'clone-deep-styles-strip radical + phantom-font-prime',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'phantom-font-prime',
            radicalPatch: 'clone-deep-styles-strip',
          },
        },
        {
          slug: 'fo-nbsp-span composite-copy',
          idea: 'fo-nbsp-trailing-span radical + composite-copy blit',
          css: MIN_KERNING,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'composite-copy',
            radicalPatch: 'fo-nbsp-trailing-span',
          },
        },
        {
          slug: 'fo-per-letter flip-y',
          idea: 'fo-per-letter-spans radical + flip-y coordinate probe',
          css: TEXT_LEAF,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'flip-y',
            radicalPatch: 'fo-per-letter-spans',
          },
        },
        {
          slug: 'h2-internal-star supersample',
          idea: 'h2-fo-internal-star-normalize radical + supersample-downscale',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'supersample-downscale',
            radicalPatch: 'h2-fo-internal-star-normalize',
            radicalOptions: { scaleMultiplier: 2 },
          },
        },
        {
          slug: 'capture-without-fo element-capture',
          idea: 'capture-without-fo radical + element-capture-bitmap API',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'element-capture-bitmap',
            radicalPatch: 'capture-without-fo',
          },
        },
        {
          slug: 'fo-to-image-href live decode-interval',
          idea: 'fo-to-image-href-live radical + decode-interval — live href raster',
          css: OVERFLOW_MIN,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'decode-interval',
            radicalPatch: 'fo-to-image-href-live',
          },
        },
        {
          slug: 'fo-to-image-placeholder direct',
          idea: 'fo-to-image-placeholder radical + direct raster — placeholder img swap',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'direct',
            radicalPatch: 'fo-to-image-placeholder',
          },
        },
        {
          slug: 'device-grid round-dims shape-auto',
          idea: 'device-grid-floor + round-dims + fo-shape-rendering-auto — distinct from b12 w10 int-floor bare',
          css: '',
          inject: 'raster',
          extra: {
            inject: 'raster',
            rasterPatch: 'device-grid-floor',
            svgRootRound: 'round-dims',
            foSvgPatch: 'fo-shape-rendering-auto',
          },
        },
        {
          slug: 'device-grid round-dims leaf',
          idea: 'device-grid-floor + round-dims + FO leaf min-width',
          css: MIN_LEAF,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'device-grid-floor',
            svgRootRound: 'round-dims',
          },
        },
        {
          slug: 'mp integer-snap device-grid',
          idea: 'integer-snap-all-rects monkeypatch + device-grid-floor raster',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'device-grid-floor',
            monkeypatch: 'integer-snap-all-rects',
          },
        },
        {
          slug: 'mp decode-proto blob-fetch-revoke',
          idea: 'decode-interval-prototype monkeypatch + blob-url-fetch-revoke raster',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'blob-url-fetch-revoke',
            monkeypatch: 'decode-interval-prototype',
          },
        },
        {
          slug: 'mp snapdom-post canvas-live',
          idea: 'snapdom-post-fo-baseline monkeypatch + canvas-from-live raster',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'canvas-from-live',
            monkeypatch: 'snapdom-post-fo-baseline',
          },
        },
        {
          slug: 'mp h2-full-plus putImageData',
          idea: 'h2-full-plus-container-capture monkeypatch + putImageData live snapshot',
          css: MIN_OVERFLOW,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'canvas-putImageData-live-snapshot',
            monkeypatch: 'h2-full-plus-container-capture',
          },
        },
        {
          slug: 'aspect none h2-frac baseline',
          idea: 'preserveAspectRatio none + h2-frac-draw + FO_BASELINE both inject',
          css: '',
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'h2-frac-draw',
            svgRootPatch: { preserveAspectRatio: 'none' },
          },
        },
        {
          slug: 'markup base64 canvas-filter both',
          idea: 'base64-roundtrip svgMarkupPatch + canvas-filter-invert raster',
          css: IMG_AUTO,
          inject: 'both',
          extra: {
            inject: 'both',
            rasterPatch: 'canvas-filter-invert',
            svgMarkupPatch: 'base64-roundtrip',
          },
        },
      ]
      if (capstone.length !== 40) {
        throw new Error(`capstone needs 40 entries, got ${capstone.length}`)
      }
      return capstone.map((c, i) =>
        spec({
          n: i + 1,
          slug: c.slug,
          idea: c.idea,
          css: c.css,
          inject: c.inject,
          extra: c.extra,
        }),
      )
    },
  },
]

function renderShard(wid, theme, blurb, specs) {
  const w = String(wid).padStart(2, '0')
  return `/**
 * Loop AI batch-13 FO recipe shard (worker ${w}) — RASTER PRIMARY: ${theme}.
 * ${blurb}
 * 40 recipes: loop-ai-b13-w${w}-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = ${JSON.stringify(specs, null, 2)
  .replace(/"extra": \{/g, 'extra: {')
  .replace(/"n":/g, 'n:')
  .replace(/"slug":/g, 'slug:')
  .replace(/"idea":/g, 'idea:')
  .replace(/"css":/g, 'css:')
  .replace(/"inject":/g, 'inject:')
  .replace(/"rasterPatch":/g, 'rasterPatch:')
  .replace(/"svgRootRound":/g, 'svgRootRound:')
  .replace(/"foSvgPatch":/g, 'foSvgPatch:')
  .replace(/"monkeypatch":/g, 'monkeypatch:')
  .replace(/"svgRootPatch":/g, 'svgRootPatch:')
  .replace(/"svgMarkupPatch":/g, 'svgMarkupPatch:')
  .replace(/"radicalPatch":/g, 'radicalPatch:')
  .replace(/"radicalOptions":/g, 'radicalOptions:')
  .replace(/"scaleMultiplier":/g, 'scaleMultiplier:')
  .replace(/"preserveAspectRatio":/g, 'preserveAspectRatio:')
  .replace(/"harnessSnapdom":/g, 'harnessSnapdom:')}

if (SPECS.length !== 40) {
  throw new Error(\`recipes-loop-ai-b13-w${w}: expected 40 specs, got \${SPECS.length}\`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(\`recipes-loop-ai-b13-w${w}: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: \`loop-ai-b13-w${w}-\${num}\`,
    label: \`Loop AI b13 w${w} #\${num}: \${slug}\`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w${w}; RASTER PRIMARY ${theme}; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(\`recipes-loop-ai-b13-w${w}: expected 40 recipes, got \${RECIPES.length}\`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

/** Better render using manual formatting like b12-w09 */
function renderShardManual(wid, theme, blurb, specs) {
  const w = String(wid).padStart(2, '0')
  const fmtExtra = (extra) => {
    const lines = Object.entries(extra).map(([k, v]) => {
      if (typeof v === 'object' && v !== null) {
        const inner = Object.entries(v)
          .map(([ik, iv]) => `      ${ik}: ${JSON.stringify(iv)},`)
          .join('\n')
        return `      ${k}: {\n${inner}\n      },`
      }
      return `      ${k}: ${JSON.stringify(v)},`
    })
    return `{\n${lines.join('\n')}\n    }`
  }

  const specLines = specs
    .map(({ n, slug, idea, css, extra }) => {
      const cssStr = JSON.stringify(css)
      const hasExtra = Object.keys(extra).length > 0
      if (!hasExtra) {
        return `  {
    n: ${n},
    slug: ${JSON.stringify(slug)},
    idea: ${JSON.stringify(idea)},
    css: ${cssStr},
  },`
      }
      return `  {
    n: ${n},
    slug: ${JSON.stringify(slug)},
    idea: ${JSON.stringify(idea)},
    css: ${cssStr},
    extra: ${fmtExtra(extra)},
  },`
    })
    .join('\n')

  return `/**
 * Loop AI batch-13 FO recipe shard (worker ${w}) — RASTER PRIMARY: ${theme}.
 * ${blurb}
 * 40 recipes: loop-ai-b13-w${w}-001..040 — minimal or FO_BASELINE capture CSS; inject raster/both.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

/** @type {{ n: number, slug: string, idea: string, css: string, extra: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
${specLines}
]

if (SPECS.length !== 40) {
  throw new Error(\`recipes-loop-ai-b13-w${w}: expected 40 specs, got \${SPECS.length}\`)
}

const slugs = new Set(SPECS.map((s) => s.slug))
if (slugs.size !== 40) {
  throw new Error(\`recipes-loop-ai-b13-w${w}: duplicate slugs in SPECS\`)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  const fullCss = useBaseline ? FO_BASELINE_CSS : css
  return {
    id: \`loop-ai-b13-w${w}-\${num}\`,
    label: \`Loop AI b13 w${w} #\${num}: \${slug}\`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    active: true,
    notes:
      'Loop AI b13 w${w}; RASTER PRIMARY ${theme}; svg≈canvas FO-decode timing — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 40) {
  throw new Error(\`recipes-loop-ai-b13-w${w}: expected 40 recipes, got \${RECIPES.length}\`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD
`
}

/** Enumerate `count` unique combo picks from cartesian product of value pools. */
function comboSpecs(wid, pools, count, mapFn) {
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
    const c = all[(i * stride + wid - 1) % all.length]
    return mapFn(i, c)
  })
}

const FO_PATCHES = [
  'filter-noop-defs',
  'fe-color-matrix-identity',
  'filter-empty-nop',
  'fo-shape-rendering-auto',
  'fe-morphology-identity',
  'fe-component-transfer-identity',
  'fe-merge-empty',
]
const MARKUP_PATCHES = [
  'strip-xml-declaration',
  'explicit-xmlns',
  'strip-identity-transforms',
  'base64-roundtrip',
  'strip-all-transforms',
]
const MP_PATCHES = [
  'decode-interval-prototype',
  'raf-before-draw',
  'draw-image-pixelated',
  'measureText-prime',
  'snapdom-post-fo-baseline',
]

/** @param {ReturnType<typeof spec>} s @param {number} attempt */
function mutateSpec(s, attempt) {
  const extra = { ...s.extra }
  const css = s.css
  let slug = s.slug
  const n = attempt % 7
  if (n === 0 && !extra.foSvgPatch) {
    extra.foSvgPatch = FO_PATCHES[attempt % FO_PATCHES.length]
    slug = `${s.slug} + ${extra.foSvgPatch}`
  } else if (n === 1 && !extra.svgMarkupPatch) {
    extra.svgMarkupPatch = MARKUP_PATCHES[attempt % MARKUP_PATCHES.length]
    slug = `${s.slug} + ${extra.svgMarkupPatch}`
  } else if (n === 2 && !extra.monkeypatch) {
    extra.monkeypatch = MP_PATCHES[attempt % MP_PATCHES.length]
    slug = `${s.slug} + mp-${extra.monkeypatch}`
  } else if (n === 3 && !extra.svgRootRound) {
    extra.svgRootRound = pick(ROOT_ROUNDS.filter(Boolean), attempt, 0)
    slug = `${s.slug} + ${extra.svgRootRound}`
  } else if (n === 4 && !extra.svgRootPatch) {
    extra.svgRootPatch = { preserveAspectRatio: pick(['xMidYMid meet', 'none', 'xMinYMin slice'], attempt, 0) }
    slug = `${s.slug} + aspect`
  } else if (n === 5 && css === '') {
    return { ...s, css: pick(CSS_VARIANTS, attempt, 1).css, slug: `${s.slug} + css`, extra }
  } else {
    extra.foSvgPatch = FO_PATCHES[(attempt + 3) % FO_PATCHES.length]
    slug = `${s.slug} + fo-${attempt}`
  }
  return { ...s, slug, extra }
}

/** @param {ReturnType<typeof spec>} s @param {number} wid @param {Set<string>} used @param {Set<string>} b12 */
function ensureUniqueSpec(s, wid, used, b12) {
  let cur = s
  for (let attempt = 0; attempt < 48; attempt++) {
    const inject = cur.extra.inject ?? 'raster'
    const key = resolvedTupleKey(cur, cur.extra, inject)
    if (!used.has(key) && !b12.has(key)) {
      used.add(key)
      return cur
    }
    cur = mutateSpec(cur, attempt)
  }
  throw new Error(`could not uniquify w${wid} #${s.n}: ${s.slug}`)
}

/** @param {import('./fo-fix-recipe-shared.js').FoFixRecipe} r */
function recipeFromSpec(wid, { n, slug, idea, css, extra }) {
  const w = String(wid).padStart(2, '0')
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'raster'
  const useBaseline = inject === 'both' && css === ''
  // FO_BASELINE resolved at runtime; for tuple compare use resolved css
  const fullCss = useBaseline ? '__FO_BASELINE__' : css
  return {
    id: `loop-ai-b13-w${w}-${num}`,
    label: `Loop AI b13 w${w} #${num}: ${slug}`,
    idea,
    css: fullCss,
    inject,
    category: 'raster',
    ...extra,
  }
}

const b12Keys = await loadB12TupleKeys()
const usedKeys = new Set()
/** @type {string[]} */
const b12Collisions = []

for (const { wid, theme, blurb, build } of SHARD_THEMES) {
  let specs = build(wid)
  if (specs.length !== 40) {
    throw new Error(`w${wid}: expected 40 specs, got ${specs.length}`)
  }
  specs = specs.map((s) => ensureUniqueSpec(s, wid, usedKeys, b12Keys))

  const seenSlugs = new Set()
  specs = specs.map((s) => {
    let slug = s.slug
    let k = 2
    while (seenSlugs.has(slug)) {
      slug = `${s.slug} alt${k}`
      k++
    }
    seenSlugs.add(slug)
    return slug === s.slug ? s : { ...s, slug }
  })
  const slugSet = new Set(specs.map((s) => s.slug))
  if (slugSet.size !== 40) {
    throw new Error(`w${wid}: duplicate slugs`)
  }

  for (const s of specs) {
    const inject = s.extra.inject ?? 'raster'
    const key = resolvedTupleKey(s, s.extra, inject)
    if (b12Keys.has(key)) {
      b12Collisions.push(`loop-ai-b13-w${String(wid).padStart(2, '0')}-${String(s.n).padStart(3, '0')} collides with b12`)
    }
  }

  const file = join(SHARDS_DIR, `recipes-loop-ai-b13-w${String(wid).padStart(2, '0')}.js`)
  writeFileSync(file, renderShardManual(wid, theme, blurb, specs))
  console.log(`wrote ${file}`)
}

if (b12Collisions.length) {
  console.warn(`\n⚠ b12 tuple collisions (${b12Collisions.length}):`)
  for (const c of b12Collisions.slice(0, 20)) console.warn(' ', c)
  process.exitCode = 1
}

console.log(`\nGenerated ${SHARD_THEMES.length} shards (${SHARD_THEMES.length * 40} recipes)`)

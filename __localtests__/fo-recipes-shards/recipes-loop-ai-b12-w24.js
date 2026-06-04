/**
 * Loop AI batch-12 FO recipe shard (worker 24) — text-fix: font-feature-settings kern 1 invisible.
 * Probe FO raster when font-feature-settings:"kern" 1 drops ink; recovery via kerning resets,
 * feature off/normal, visibility/color guards, Chromium copy — 40 recipes (5 scopes × 8 variants).
 * 40 recipes: loop-ai-b12-w24-001..040
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}' +
  'foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important}'

/** @type {{ key: string, label: string, rule: (decls: string) => string }[]} */
const SCOPES = [
  {
    key: 'star',
    label: 'FO star',
    rule: (d) => `foreignObject *{${d}}`,
  },
  {
    key: 'fo-root',
    label: 'FO root',
    rule: (d) => `foreignObject{${d};overflow:visible!important}`,
  },
  {
    key: 'div-star',
    label: 'FO>div star',
    rule: (d) => `foreignObject>div *{${d}}`,
  },
  {
    key: 'text-chain',
    label: 'text chain',
    rule: (d) => `${TEXT_CHAIN}{${d}}`,
  },
  {
    key: 'nav-a',
    label: 'nav a',
    rule: (d) =>
      `foreignObject nav a{${d};display:inline!important;box-sizing:border-box!important}`,
  },
]

/** @type {{ key: string, slug: string, idea: string, decls: string, extraCss?: string }[]} */
const VARIANTS = [
  {
    key: 'kern1',
    slug: 'kern 1 only',
    idea: 'font-feature-settings:"kern" 1 only — reproduce FO invisible/missing ink on kern enable',
    decls: 'font-feature-settings:"kern" 1!important',
  },
  {
    key: 'kern1-kerning-normal',
    slug: 'kern 1 + kerning normal',
    idea: 'font-kerning:normal + font-feature-settings:"kern" 1 — Chromium kerning vs OT kern stack',
    decls:
      'font-kerning:normal!important;font-feature-settings:"kern" 1!important',
  },
  {
    key: 'kern1-kerning-none',
    slug: 'kern 1 + kerning none',
    idea: 'font-kerning:none + font-feature-settings:"kern" 1 — CSS kerning off, OT kern feature on',
    decls: 'font-kerning:none!important;font-feature-settings:"kern" 1!important',
  },
  {
    key: 'kern1-liga0',
    slug: 'kern 1 liga 0',
    idea: 'font-feature-settings:"liga" 0,"kern" 1 — ligatures off with kern 1 (invisible recovery probe)',
    decls: 'font-feature-settings:"liga" 0,"kern" 1!important',
  },
  {
    key: 'kern0',
    slug: 'kern 0',
    idea: 'font-feature-settings:"kern" 0 — disable kern feature (control vs kern 1 invisible)',
    decls: 'font-feature-settings:"kern" 0!important',
  },
  {
    key: 'features-normal',
    slug: 'features normal',
    idea: 'font-feature-settings:normal — reset OpenType features (no kern 1 invisible path)',
    decls: 'font-feature-settings:normal!important',
  },
  {
    key: 'kern1-visible',
    slug: 'kern 1 visible guard',
    idea:
      'font-feature-settings:"kern" 1 + visibility:visible + color:currentColor — ink guard vs invisible kern',
    decls:
      'font-feature-settings:"kern" 1!important;visibility:visible!important;color:currentColor!important',
  },
  {
    key: 'kern1-chromium',
    slug: 'kern 1 + chromium',
    idea:
      'Chromium font-kerning:normal copy on FO root + font-feature-settings:"kern" 1 on scoped leaves',
    decls: 'font-feature-settings:"kern" 1!important',
    extraCss: CHROMIUM_COPY,
  },
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = []
let index = 0
for (const scope of SCOPES) {
  for (const variant of VARIANTS) {
    index += 1
    const num = String(index).padStart(3, '0')
    const patchCss = scope.rule(variant.decls)
    const css =
      FO_BASELINE_CSS +
      TEXT_LEAF +
      (variant.extraCss ?? '') +
      patchCss
    RECIPES.push({
      id: `loop-ai-b12-w24-${num}`,
      label: `Loop AI b12 w24 #${num}: ${scope.label} ${variant.slug}`,
      idea: `${variant.idea} on ${scope.label}`,
      css,
      inject: 'capture',
      category: 'text-fix',
      active: true,
      notes: `Loop AI b12 w24; ${scope.key}×${variant.key}; kern 1 invisible probe — no text bypass.`,
    })
  }
}

if (RECIPES.length !== 40) {
  throw new Error(`recipes-loop-ai-b12-w24: expected 40 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

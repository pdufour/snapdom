/**
 * Loop AI batch-11 FO recipe shard (worker 41) — text-fix: letter-spacing structural em/% tokens (no gate px).
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "ls normal star",
    idea: "letter-spacing:normal on FO * — reset inherited tracking before FO raster",
    css: "foreignObject *{letter-spacing:normal!important}",
  },
  {
    n: 2,
    slug: "ls zero star",
    idea: "letter-spacing:0 on FO * — zero em token vs normal before FO raster",
    css: "foreignObject *{letter-spacing:0!important}",
  },
  {
    n: 3,
    slug: "ls initial star",
    idea: "letter-spacing:initial on FO * — initial tracking cascade before FO raster",
    css: "foreignObject *{letter-spacing:initial!important}",
  },
  {
    n: 4,
    slug: "ls unset star",
    idea: "letter-spacing:unset on FO * — unset author em on ancestors before FO raster",
    css: "foreignObject *{letter-spacing:unset!important}",
  },
  {
    n: 5,
    slug: "ls revert star",
    idea: "letter-spacing:revert on FO * — UA revert tracking before FO raster",
    css: "foreignObject *{letter-spacing:revert!important}",
  },
  {
    n: 6,
    slug: "ls inherit-star star",
    idea: "letter-spacing:inherit on FO * — inherit FO root em before FO raster",
    css: "foreignObject *{letter-spacing:inherit!important}",
  },
  {
    n: 7,
    slug: "ls revert-layer star",
    idea: "letter-spacing:revert-layer on FO * — layer revert tracking before FO raster",
    css: "foreignObject *{letter-spacing:revert-layer!important}",
  },
  {
    n: 8,
    slug: "ls -0.1em star",
    idea: "letter-spacing:-0.1em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.1em!important}",
  },
  {
    n: 9,
    slug: "ls -0.08em star",
    idea: "letter-spacing:-0.08em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.08em!important}",
  },
  {
    n: 10,
    slug: "ls -0.06em star",
    idea: "letter-spacing:-0.06em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.06em!important}",
  },
  {
    n: 11,
    slug: "ls -0.05em star",
    idea: "letter-spacing:-0.05em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.05em!important}",
  },
  {
    n: 12,
    slug: "ls -0.04em star",
    idea: "letter-spacing:-0.04em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.04em!important}",
  },
  {
    n: 13,
    slug: "ls -0.035em star",
    idea: "letter-spacing:-0.035em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.035em!important}",
  },
  {
    n: 14,
    slug: "ls -0.03em star",
    idea: "letter-spacing:-0.03em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.03em!important}",
  },
  {
    n: 15,
    slug: "ls -0.025em star",
    idea: "letter-spacing:-0.025em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.025em!important}",
  },
  {
    n: 16,
    slug: "ls -0.02em star",
    idea: "letter-spacing:-0.02em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.02em!important}",
  },
  {
    n: 17,
    slug: "ls -0.015em star",
    idea: "letter-spacing:-0.015em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.015em!important}",
  },
  {
    n: 18,
    slug: "ls -0.01em star",
    idea: "letter-spacing:-0.01em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.01em!important}",
  },
  {
    n: 19,
    slug: "ls -0.008em star",
    idea: "letter-spacing:-0.008em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.008em!important}",
  },
  {
    n: 20,
    slug: "ls -0.005em star",
    idea: "letter-spacing:-0.005em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:-0.005em!important}",
  },
  {
    n: 21,
    slug: "ls 0.005em star",
    idea: "letter-spacing:0.005em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.005em!important}",
  },
  {
    n: 22,
    slug: "ls 0.008em star",
    idea: "letter-spacing:0.008em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.008em!important}",
  },
  {
    n: 23,
    slug: "ls 0.01em star",
    idea: "letter-spacing:0.01em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.01em!important}",
  },
  {
    n: 24,
    slug: "ls 0.012em star",
    idea: "letter-spacing:0.012em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.012em!important}",
  },
  {
    n: 25,
    slug: "ls 0.015em star",
    idea: "letter-spacing:0.015em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.015em!important}",
  },
  {
    n: 26,
    slug: "ls 0.02em star",
    idea: "letter-spacing:0.02em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.02em!important}",
  },
  {
    n: 27,
    slug: "ls 0.025em star",
    idea: "letter-spacing:0.025em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.025em!important}",
  },
  {
    n: 28,
    slug: "ls 0.03em star",
    idea: "letter-spacing:0.03em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.03em!important}",
  },
  {
    n: 29,
    slug: "ls 0.035em star",
    idea: "letter-spacing:0.035em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.035em!important}",
  },
  {
    n: 30,
    slug: "ls 0.04em star",
    idea: "letter-spacing:0.04em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.04em!important}",
  },
  {
    n: 31,
    slug: "ls 0.05em star",
    idea: "letter-spacing:0.05em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.05em!important}",
  },
  {
    n: 32,
    slug: "ls 0.06em star",
    idea: "letter-spacing:0.06em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.06em!important}",
  },
  {
    n: 33,
    slug: "ls 0.075em star",
    idea: "letter-spacing:0.075em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.075em!important}",
  },
  {
    n: 34,
    slug: "ls 0.08em star",
    idea: "letter-spacing:0.08em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.08em!important}",
  },
  {
    n: 35,
    slug: "ls 0.1em star",
    idea: "letter-spacing:0.1em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.1em!important}",
  },
  {
    n: 36,
    slug: "ls 0.12em star",
    idea: "letter-spacing:0.12em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.12em!important}",
  },
  {
    n: 37,
    slug: "ls 0.15em star",
    idea: "letter-spacing:0.15em on FO * — structural em tracking (no px)",
    css: "foreignObject *{letter-spacing:0.15em!important}",
  },
  {
    n: 38,
    slug: "ls -5pct star",
    idea: "letter-spacing:-5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-5%!important}",
  },
  {
    n: 39,
    slug: "ls -4pct star",
    idea: "letter-spacing:-4% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-4%!important}",
  },
  {
    n: 40,
    slug: "ls -3pct star",
    idea: "letter-spacing:-3% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-3%!important}",
  },
  {
    n: 41,
    slug: "ls -2.5pct star",
    idea: "letter-spacing:-2.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-2.5%!important}",
  },
  {
    n: 42,
    slug: "ls -2pct star",
    idea: "letter-spacing:-2% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-2%!important}",
  },
  {
    n: 43,
    slug: "ls -1.5pct star",
    idea: "letter-spacing:-1.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-1.5%!important}",
  },
  {
    n: 44,
    slug: "ls -1pct star",
    idea: "letter-spacing:-1% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-1%!important}",
  },
  {
    n: 45,
    slug: "ls -0.75pct star",
    idea: "letter-spacing:-0.75% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-0.75%!important}",
  },
  {
    n: 46,
    slug: "ls -0.5pct star",
    idea: "letter-spacing:-0.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-0.5%!important}",
  },
  {
    n: 47,
    slug: "ls -0.25pct star",
    idea: "letter-spacing:-0.25% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:-0.25%!important}",
  },
  {
    n: 48,
    slug: "ls 0pct star",
    idea: "letter-spacing:0% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:0%!important}",
  },
  {
    n: 49,
    slug: "ls 0.25pct star",
    idea: "letter-spacing:0.25% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:0.25%!important}",
  },
  {
    n: 50,
    slug: "ls 0.5pct star",
    idea: "letter-spacing:0.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:0.5%!important}",
  },
  {
    n: 51,
    slug: "ls 0.75pct star",
    idea: "letter-spacing:0.75% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:0.75%!important}",
  },
  {
    n: 52,
    slug: "ls 1pct star",
    idea: "letter-spacing:1% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:1%!important}",
  },
  {
    n: 53,
    slug: "ls 1.5pct star",
    idea: "letter-spacing:1.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:1.5%!important}",
  },
  {
    n: 54,
    slug: "ls 2pct star",
    idea: "letter-spacing:2% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:2%!important}",
  },
  {
    n: 55,
    slug: "ls 2.5pct star",
    idea: "letter-spacing:2.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:2.5%!important}",
  },
  {
    n: 56,
    slug: "ls 3pct star",
    idea: "letter-spacing:3% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:3%!important}",
  },
  {
    n: 57,
    slug: "ls 4pct star",
    idea: "letter-spacing:4% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:4%!important}",
  },
  {
    n: 58,
    slug: "ls 5pct star",
    idea: "letter-spacing:5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:5%!important}",
  },
  {
    n: 59,
    slug: "ls 6pct star",
    idea: "letter-spacing:6% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:6%!important}",
  },
  {
    n: 60,
    slug: "ls 7.5pct star",
    idea: "letter-spacing:7.5% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:7.5%!important}",
  },
  {
    n: 61,
    slug: "ls 10pct star",
    idea: "letter-spacing:10% on FO * — percent tracking relative to font size",
    css: "foreignObject *{letter-spacing:10%!important}",
  },
  {
    n: 62,
    slug: "FO -0.02em star normal",
    idea: "FO -0.02em star normal — wrapper -0.02em vs leaf normal tracking cascade",
    css: "foreignObject{letter-spacing:-0.02em!important}foreignObject *{letter-spacing:normal!important}",
  },
  {
    n: 63,
    slug: "FO 0.03em star zero",
    idea: "FO 0.03em star zero — wrapper 0.03em vs leaf 0 tracking cascade",
    css: "foreignObject{letter-spacing:0.03em!important}foreignObject *{letter-spacing:0!important}",
  },
  {
    n: 64,
    slug: "FO 0.05em star unset",
    idea: "FO 0.05em star unset — wrapper 0.05em vs leaf unset tracking cascade",
    css: "foreignObject{letter-spacing:0.05em!important}foreignObject *{letter-spacing:unset!important}",
  },
  {
    n: 65,
    slug: "FO -0.04em star inherit",
    idea: "FO -0.04em star inherit — wrapper -0.04em vs leaf inherit tracking cascade",
    css: "foreignObject{letter-spacing:-0.04em!important}foreignObject *{letter-spacing:inherit!important}",
  },
  {
    n: 66,
    slug: "FO 0.02em star initial",
    idea: "FO 0.02em star initial — wrapper 0.02em vs leaf initial tracking cascade",
    css: "foreignObject{letter-spacing:0.02em!important}foreignObject *{letter-spacing:initial!important}",
  },
  {
    n: 67,
    slug: "FO -0.03em star revert",
    idea: "FO -0.03em star revert — wrapper -0.03em vs leaf revert tracking cascade",
    css: "foreignObject{letter-spacing:-0.03em!important}foreignObject *{letter-spacing:revert!important}",
  },
  {
    n: 68,
    slug: "FO 2% star normal",
    idea: "FO 2% star normal — wrapper 2% vs leaf normal tracking cascade",
    css: "foreignObject{letter-spacing:2%!important}foreignObject *{letter-spacing:normal!important}",
  },
  {
    n: 69,
    slug: "FO -1.5% star zero",
    idea: "FO -1.5% star zero — wrapper -1.5% vs leaf 0 tracking cascade",
    css: "foreignObject{letter-spacing:-1.5%!important}foreignObject *{letter-spacing:0!important}",
  },
  {
    n: 70,
    slug: "FO 3% star unset",
    idea: "FO 3% star unset — wrapper 3% vs leaf unset tracking cascade",
    css: "foreignObject{letter-spacing:3%!important}foreignObject *{letter-spacing:unset!important}",
  },
  {
    n: 71,
    slug: "FO -2% star inherit",
    idea: "FO -2% star inherit — wrapper -2% vs leaf inherit tracking cascade",
    css: "foreignObject{letter-spacing:-2%!important}foreignObject *{letter-spacing:inherit!important}",
  },
  {
    n: 72,
    slug: "ls 0.02em span",
    idea: "letter-spacing:0.02em on foreignObject span — scoped inline em tracking",
    css: "foreignObject span{letter-spacing:0.02em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 73,
    slug: "ls -0.02em a",
    idea: "letter-spacing:-0.02em on foreignObject a — scoped inline nav anchor em tracking",
    css: "foreignObject a{letter-spacing:-0.02em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 74,
    slug: "ls 0.01em label",
    idea: "letter-spacing:0.01em on foreignObject label — scoped form label em tracking",
    css: "foreignObject label{letter-spacing:0.01em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 75,
    slug: "ls 0.03em strong",
    idea: "letter-spacing:0.03em on foreignObject strong — scoped emphasis em tracking",
    css: "foreignObject strong{letter-spacing:0.03em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 76,
    slug: "ls -0.01em em",
    idea: "letter-spacing:-0.01em on foreignObject em — scoped italic emphasis em tracking",
    css: "foreignObject em{letter-spacing:-0.01em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 77,
    slug: "ls 0.05em small",
    idea: "letter-spacing:0.05em on foreignObject small — scoped small text em tracking",
    css: "foreignObject small{letter-spacing:0.05em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 78,
    slug: "ls 0 code",
    idea: "letter-spacing:0 on foreignObject code — scoped monospace em tracking",
    css: "foreignObject code{letter-spacing:0!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 79,
    slug: "ls 0.015em h2",
    idea: "letter-spacing:0.015em on foreignObject h2 — scoped heading em tracking",
    css: "foreignObject h2{letter-spacing:0.015em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 80,
    slug: "ls -0.015em p",
    idea: "letter-spacing:-0.015em on foreignObject p — scoped paragraph em tracking",
    css: "foreignObject p{letter-spacing:-0.015em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 81,
    slug: "ls -0.02em nav-a",
    idea: "letter-spacing:-0.02em on foreignObject nav a — scoped nav link em tracking",
    css: "foreignObject nav a{letter-spacing:-0.02em!important;display:inline!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 82,
    slug: "ls combo normal + ws normal",
    idea: "letter-spacing structural combo — normal + ws normal",
    css: "foreignObject *{letter-spacing:normal!important;word-spacing:normal!important}",
  },
  {
    n: 83,
    slug: "ls combo 0 + kerning normal",
    idea: "letter-spacing structural combo — 0 + kerning normal",
    css: "foreignObject *{letter-spacing:0!important;font-kerning:normal!important}",
  },
  {
    n: 84,
    slug: "ls combo -0.02em + nowrap",
    idea: "letter-spacing structural combo — -0.02em + nowrap",
    css: "foreignObject *{letter-spacing:-0.02em!important;white-space:nowrap!important}",
  },
  {
    n: 85,
    slug: "ls combo 0.02em + pre-wrap",
    idea: "letter-spacing structural combo — 0.02em + pre-wrap",
    css: "foreignObject *{letter-spacing:0.02em!important;white-space:pre-wrap!important}",
  },
  {
    n: 86,
    slug: "ls combo 1% + balance",
    idea: "letter-spacing structural combo — 1% + balance",
    css: "foreignObject *{letter-spacing:1%!important;text-wrap:balance!important}",
  },
  {
    n: 87,
    slug: "ls combo -1% + pretty",
    idea: "letter-spacing structural combo — -1% + pretty",
    css: "foreignObject *{letter-spacing:-1%!important;text-wrap:pretty!important}",
  },
  {
    n: 88,
    slug: "ls combo trim + normal",
    idea: "letter-spacing structural combo — trim + normal",
    css: "foreignObject *{text-spacing-trim:space-all!important;letter-spacing:normal!important}",
  },
  {
    n: 89,
    slug: "ls combo div normal div inherit",
    idea: "letter-spacing structural combo — div normal div inherit",
    css: "foreignObject>div{letter-spacing:normal!important}foreignObject>div *{letter-spacing:inherit!important}",
  },
  {
    n: 90,
    slug: "ls combo div -0.02em div 0",
    idea: "letter-spacing structural combo — div -0.02em div 0",
    css: "foreignObject>div{letter-spacing:-0.02em!important}foreignObject>div *{letter-spacing:0!important}",
  },
  {
    n: 91,
    slug: "ls combo first-line 0.02em",
    idea: "letter-spacing structural combo — first-line 0.02em",
    css: "foreignObject *::first-line{letter-spacing:0.02em!important}foreignObject *{letter-spacing:normal!important}",
  },
  {
    n: 92,
    slug: "ls combo first-letter normal",
    idea: "letter-spacing structural combo — first-letter normal",
    css: "foreignObject *::first-letter{letter-spacing:normal!important;font-size:1.05em!important}foreignObject *{letter-spacing:0.02em!important}",
  },
  {
    n: 93,
    slug: "ls combo flex row -0.02em",
    idea: "letter-spacing structural combo — flex row -0.02em",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{letter-spacing:-0.02em!important}",
  },
  {
    n: 94,
    slug: "ls combo inline-flex 0.01em",
    idea: "letter-spacing structural combo — inline-flex 0.01em",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important}foreignObject *{letter-spacing:0.01em!important}",
  },
  {
    n: 95,
    slug: "ls combo nav a inherit root",
    idea: "letter-spacing structural combo — nav a inherit root",
    css: "foreignObject{letter-spacing:0.02em!important}foreignObject nav a{letter-spacing:inherit!important;display:inline!important}",
  },
  {
    n: 96,
    slug: "ls combo 0.06em + text-transform none",
    idea: "letter-spacing structural combo — 0.06em + text-transform none",
    css: "foreignObject *{letter-spacing:0.06em!important;text-transform:none!important}",
  },
  {
    n: 97,
    slug: "ls combo -0.06em + uppercase none",
    idea: "letter-spacing structural combo — -0.06em + uppercase none",
    css: "foreignObject *{letter-spacing:-0.06em!important;text-transform:none!important}",
  },
  {
    n: 98,
    slug: "ls combo 4% + word-spacing normal",
    idea: "letter-spacing structural combo — 4% + word-spacing normal",
    css: "foreignObject *{letter-spacing:4%!important;word-spacing:normal!important}",
  },
  {
    n: 99,
    slug: "ls combo -3% + font-kerning normal",
    idea: "letter-spacing structural combo — -3% + font-kerning normal",
    css: "foreignObject *{letter-spacing:-3%!important;font-kerning:normal!important}",
  },
  {
    n: 100,
    slug: "ls combo 0.11em + text-wrap wrap",
    idea: "letter-spacing structural combo — 0.11em + text-wrap wrap",
    css: "foreignObject *{letter-spacing:0.11em!important;text-wrap:wrap!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w41: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w41-${num}`,
    label: `Loop AI b11 w41 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w41; letter-spacing em/% structural tokens; no px tracking — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

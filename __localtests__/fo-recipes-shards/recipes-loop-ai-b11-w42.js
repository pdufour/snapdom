/**
 * Loop AI batch-11 FO recipe shard (worker 42) — text-fix: word-spacing reset matrix.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "ws normal star",
    idea: "word-spacing:normal on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:normal!important;letter-spacing:normal!important}",
  },
  {
    n: 2,
    slug: "ws 0 star",
    idea: "word-spacing:0 on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:0!important;letter-spacing:normal!important}",
  },
  {
    n: 3,
    slug: "ws initial star",
    idea: "word-spacing:initial on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:initial!important;letter-spacing:normal!important}",
  },
  {
    n: 4,
    slug: "ws unset star",
    idea: "word-spacing:unset on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:unset!important;letter-spacing:normal!important}",
  },
  {
    n: 5,
    slug: "ws revert star",
    idea: "word-spacing:revert on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:revert!important;letter-spacing:normal!important}",
  },
  {
    n: 6,
    slug: "ws inherit star",
    idea: "word-spacing:inherit on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:inherit!important;letter-spacing:normal!important}",
  },
  {
    n: 7,
    slug: "ws revert-layer star",
    idea: "word-spacing:revert-layer on FO * — reset matrix keyword",
    css: "foreignObject *{word-spacing:revert-layer!important;letter-spacing:normal!important}",
  },
  {
    n: 8,
    slug: "ws -0.12em star",
    idea: "word-spacing:-0.12em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.12em!important}",
  },
  {
    n: 9,
    slug: "ws -0.1em star",
    idea: "word-spacing:-0.1em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.1em!important}",
  },
  {
    n: 10,
    slug: "ws -0.08em star",
    idea: "word-spacing:-0.08em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.08em!important}",
  },
  {
    n: 11,
    slug: "ws -0.06em star",
    idea: "word-spacing:-0.06em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.06em!important}",
  },
  {
    n: 12,
    slug: "ws -0.05em star",
    idea: "word-spacing:-0.05em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.05em!important}",
  },
  {
    n: 13,
    slug: "ws -0.04em star",
    idea: "word-spacing:-0.04em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.04em!important}",
  },
  {
    n: 14,
    slug: "ws -0.03em star",
    idea: "word-spacing:-0.03em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.03em!important}",
  },
  {
    n: 15,
    slug: "ws -0.025em star",
    idea: "word-spacing:-0.025em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.025em!important}",
  },
  {
    n: 16,
    slug: "ws -0.02em star",
    idea: "word-spacing:-0.02em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.02em!important}",
  },
  {
    n: 17,
    slug: "ws -0.015em star",
    idea: "word-spacing:-0.015em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.015em!important}",
  },
  {
    n: 18,
    slug: "ws -0.01em star",
    idea: "word-spacing:-0.01em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.01em!important}",
  },
  {
    n: 19,
    slug: "ws -0.005em star",
    idea: "word-spacing:-0.005em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:-0.005em!important}",
  },
  {
    n: 20,
    slug: "ws 0em star",
    idea: "word-spacing:0em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0em!important}",
  },
  {
    n: 21,
    slug: "ws 0.005em star",
    idea: "word-spacing:0.005em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.005em!important}",
  },
  {
    n: 22,
    slug: "ws 0.01em star",
    idea: "word-spacing:0.01em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.01em!important}",
  },
  {
    n: 23,
    slug: "ws 0.015em star",
    idea: "word-spacing:0.015em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.015em!important}",
  },
  {
    n: 24,
    slug: "ws 0.02em star",
    idea: "word-spacing:0.02em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.02em!important}",
  },
  {
    n: 25,
    slug: "ws 0.025em star",
    idea: "word-spacing:0.025em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.025em!important}",
  },
  {
    n: 26,
    slug: "ws 0.03em star",
    idea: "word-spacing:0.03em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.03em!important}",
  },
  {
    n: 27,
    slug: "ws 0.04em star",
    idea: "word-spacing:0.04em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.04em!important}",
  },
  {
    n: 28,
    slug: "ws 0.05em star",
    idea: "word-spacing:0.05em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.05em!important}",
  },
  {
    n: 29,
    slug: "ws 0.06em star",
    idea: "word-spacing:0.06em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.06em!important}",
  },
  {
    n: 30,
    slug: "ws 0.08em star",
    idea: "word-spacing:0.08em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.08em!important}",
  },
  {
    n: 31,
    slug: "ws 0.1em star",
    idea: "word-spacing:0.1em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.1em!important}",
  },
  {
    n: 32,
    slug: "ws 0.12em star",
    idea: "word-spacing:0.12em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.12em!important}",
  },
  {
    n: 33,
    slug: "ws 0.15em star",
    idea: "word-spacing:0.15em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.15em!important}",
  },
  {
    n: 34,
    slug: "ws 0.2em star",
    idea: "word-spacing:0.2em on FO * — em inter-word gap probe",
    css: "foreignObject *{word-spacing:0.2em!important}",
  },
  {
    n: 35,
    slug: "FO 0.12em star normal",
    idea: "FO word-spacing:0.12em + * normal — cascade reset matrix",
    css: "foreignObject{word-spacing:0.12em!important}foreignObject *{word-spacing:normal!important}",
  },
  {
    n: 36,
    slug: "FO 0.08em star 0",
    idea: "FO word-spacing:0.08em + * 0 — cascade reset matrix",
    css: "foreignObject{word-spacing:0.08em!important}foreignObject *{word-spacing:0!important}",
  },
  {
    n: 37,
    slug: "FO 0.15em star unset",
    idea: "FO word-spacing:0.15em + * unset — cascade reset matrix",
    css: "foreignObject{word-spacing:0.15em!important}foreignObject *{word-spacing:unset!important}",
  },
  {
    n: 38,
    slug: "FO -0.05em star inherit",
    idea: "FO word-spacing:-0.05em + * inherit — cascade reset matrix",
    css: "foreignObject{word-spacing:-0.05em!important}foreignObject *{word-spacing:inherit!important}",
  },
  {
    n: 39,
    slug: "FO 0.1em star initial",
    idea: "FO word-spacing:0.1em + * initial — cascade reset matrix",
    css: "foreignObject{word-spacing:0.1em!important}foreignObject *{word-spacing:initial!important}",
  },
  {
    n: 40,
    slug: "FO 0.2em star revert",
    idea: "FO word-spacing:0.2em + * revert — cascade reset matrix",
    css: "foreignObject{word-spacing:0.2em!important}foreignObject *{word-spacing:revert!important}",
  },
  {
    n: 41,
    slug: "FO 0.05em star revert-layer",
    idea: "FO word-spacing:0.05em + * revert-layer — cascade reset matrix",
    css: "foreignObject{word-spacing:0.05em!important}foreignObject *{word-spacing:revert-layer!important}",
  },
  {
    n: 42,
    slug: "FO 0.03em star normal",
    idea: "FO word-spacing:0.03em + * normal — cascade reset matrix",
    css: "foreignObject{word-spacing:0.03em!important}foreignObject *{word-spacing:normal!important}",
  },
  {
    n: 43,
    slug: "FO -0.08em star 0",
    idea: "FO word-spacing:-0.08em + * 0 — cascade reset matrix",
    css: "foreignObject{word-spacing:-0.08em!important}foreignObject *{word-spacing:0!important}",
  },
  {
    n: 44,
    slug: "FO 0.06em star unset",
    idea: "FO word-spacing:0.06em + * unset — cascade reset matrix",
    css: "foreignObject{word-spacing:0.06em!important}foreignObject *{word-spacing:unset!important}",
  },
  {
    n: 45,
    slug: "ws normal + white-space normal",
    idea: "word-spacing:normal + white-space:normal on FO *",
    css: "foreignObject *{word-spacing:normal!important;white-space:normal!important}",
  },
  {
    n: 46,
    slug: "ws normal + white-space nowrap",
    idea: "word-spacing:normal + white-space:nowrap on FO *",
    css: "foreignObject *{word-spacing:normal!important;white-space:nowrap!important}",
  },
  {
    n: 47,
    slug: "ws normal + white-space pre-wrap",
    idea: "word-spacing:normal + white-space:pre-wrap on FO *",
    css: "foreignObject *{word-spacing:normal!important;white-space:pre-wrap!important}",
  },
  {
    n: 48,
    slug: "ws normal + white-space pre-line",
    idea: "word-spacing:normal + white-space:pre-line on FO *",
    css: "foreignObject *{word-spacing:normal!important;white-space:pre-line!important}",
  },
  {
    n: 49,
    slug: "ws normal + ls 0",
    idea: "word-spacing:normal + letter-spacing:0 dual spacing reset",
    css: "foreignObject *{word-spacing:normal!important;letter-spacing:0!important}",
  },
  {
    n: 50,
    slug: "ws normal + ls -0.02em",
    idea: "word-spacing:normal + letter-spacing:-0.02em dual spacing reset",
    css: "foreignObject *{word-spacing:normal!important;letter-spacing:-0.02em!important}",
  },
  {
    n: 51,
    slug: "ws normal + ls 0.02em",
    idea: "word-spacing:normal + letter-spacing:0.02em dual spacing reset",
    css: "foreignObject *{word-spacing:normal!important;letter-spacing:0.02em!important}",
  },
  {
    n: 52,
    slug: "ws normal span",
    idea: "word-spacing:normal on foreignObject span",
    css: "foreignObject span{word-spacing:normal!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 53,
    slug: "ws 0 a",
    idea: "word-spacing:0 on foreignObject a",
    css: "foreignObject a{word-spacing:0!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 54,
    slug: "ws 0.05em label",
    idea: "word-spacing:0.05em on foreignObject label",
    css: "foreignObject label{word-spacing:0.05em!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 55,
    slug: "ws 0.02em p",
    idea: "word-spacing:0.02em on foreignObject p",
    css: "foreignObject p{word-spacing:0.02em!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 56,
    slug: "ws -0.02em nav a",
    idea: "word-spacing:-0.02em on foreignObject nav a",
    css: "foreignObject nav a{word-spacing:-0.02em!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 57,
    slug: "ws 0.03em strong",
    idea: "word-spacing:0.03em on foreignObject strong",
    css: "foreignObject strong{word-spacing:0.03em!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 58,
    slug: "ws initial em",
    idea: "word-spacing:initial on foreignObject em",
    css: "foreignObject em{word-spacing:initial!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 59,
    slug: "ws unset li",
    idea: "word-spacing:unset on foreignObject li",
    css: "foreignObject li{word-spacing:unset!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 60,
    slug: "ws 0.01em h2",
    idea: "word-spacing:0.01em on foreignObject h2",
    css: "foreignObject h2{word-spacing:0.01em!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 61,
    slug: "ws revert button",
    idea: "word-spacing:revert on foreignObject button",
    css: "foreignObject button{word-spacing:revert!important;display:inline!important;min-width:0!important;box-sizing:border-box!important}",
  },
  {
    n: 62,
    slug: "ws 0 + trim space-all",
    idea: "word-spacing:0 + text-spacing-trim:space-all on FO *",
    css: "foreignObject *{word-spacing:0!important;text-spacing-trim:space-all!important}",
  },
  {
    n: 63,
    slug: "ws 0 + trim normal",
    idea: "word-spacing:0 + text-spacing-trim:normal on FO *",
    css: "foreignObject *{word-spacing:0!important;text-spacing-trim:normal!important}",
  },
  {
    n: 64,
    slug: "ws 0 + trim trim-start",
    idea: "word-spacing:0 + text-spacing-trim:trim-start on FO *",
    css: "foreignObject *{word-spacing:0!important;text-spacing-trim:trim-start!important}",
  },
  {
    n: 65,
    slug: "flex baseline ws normal",
    idea: "flex row align-items:baseline + word-spacing:normal",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{word-spacing:normal!important}",
  },
  {
    n: 66,
    slug: "flex center ws 0",
    idea: "flex row align-items:center + word-spacing:0",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important}foreignObject *{word-spacing:0!important}",
  },
  {
    n: 67,
    slug: "flex flex-start ws 0.02em",
    idea: "flex row align-items:flex-start + word-spacing:0.02em",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important}foreignObject *{word-spacing:0.02em!important}",
  },
  {
    n: 68,
    slug: "flex flex-end ws unset",
    idea: "flex row align-items:flex-end + word-spacing:unset",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important}foreignObject *{word-spacing:unset!important}",
  },
  {
    n: 69,
    slug: "pin lh ws normal",
    idea: "word-spacing reset matrix — pin lh ws normal",
    css: "foreignObject *{word-spacing:normal!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 70,
    slug: "pin width ws 0",
    idea: "word-spacing reset matrix — pin width ws 0",
    css: "foreignObject *{word-spacing:0!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-width-from-live"},
  },
  {
    n: 71,
    slug: "stretch ws unset",
    idea: "word-spacing reset matrix — stretch ws unset",
    css: "foreignObject *{word-spacing:unset!important}",
    extra: {"inject":"capture","radicalPatch":"h2-flex-stretch-leaf-from-live"},
  },
  {
    n: 72,
    slug: "div 0.1em div inherit",
    idea: "word-spacing reset matrix — div 0.1em div inherit",
    css: "foreignObject>div{word-spacing:0.1em!important}foreignObject>div *{word-spacing:inherit!important}",
  },
  {
    n: 73,
    slug: "div normal div 0",
    idea: "word-spacing reset matrix — div normal div 0",
    css: "foreignObject>div{word-spacing:normal!important}foreignObject>div *{word-spacing:0!important}",
  },
  {
    n: 74,
    slug: "overflow-wrap any ws normal",
    idea: "word-spacing reset matrix — overflow-wrap any ws normal",
    css: "foreignObject *{word-spacing:normal!important;overflow-wrap:anywhere!important}",
  },
  {
    n: 75,
    slug: "break-word ws 0",
    idea: "word-spacing reset matrix — break-word ws 0",
    css: "foreignObject *{word-spacing:0!important;overflow-wrap:break-word!important;word-break:break-word!important}",
  },
  {
    n: 76,
    slug: "text-wrap wrap ws normal",
    idea: "word-spacing reset matrix — text-wrap wrap ws normal",
    css: "foreignObject *{word-spacing:normal!important;text-wrap:wrap!important}",
  },
  {
    n: 77,
    slug: "text-wrap balance ws 0.02em",
    idea: "word-spacing reset matrix — text-wrap balance ws 0.02em",
    css: "foreignObject *{word-spacing:0.02em!important;text-wrap:balance!important}",
  },
  {
    n: 78,
    slug: "kerning none ws normal",
    idea: "word-spacing reset matrix — kerning none ws normal",
    css: "foreignObject *{word-spacing:normal!important;font-kerning:none!important}",
  },
  {
    n: 79,
    slug: "ws 0.017em lh 1.15",
    idea: "subtle em + lh 1.15",
    css: "foreignObject *{word-spacing:0.017em!important;line-height:1.15!important}",
  },
  {
    n: 80,
    slug: "ws 0.022em lh 1.35",
    idea: "em + lh 1.35",
    css: "foreignObject *{word-spacing:0.022em!important;line-height:1.35!important}",
  },
  {
    n: 81,
    slug: "ws 0.037em lh from-font",
    idea: "em + from-font lh",
    css: "foreignObject *{word-spacing:0.037em!important;line-height:from-font!important}",
  },
  {
    n: 82,
    slug: "ws 0.055em lh 1.5",
    idea: "em + lh 1.5",
    css: "foreignObject *{word-spacing:0.055em!important;line-height:1.5!important}",
  },
  {
    n: 83,
    slug: "ws 0.065em lh normal",
    idea: "em + lh normal",
    css: "foreignObject *{word-spacing:0.065em!important;line-height:normal!important}",
  },
  {
    n: 84,
    slug: "ws 0.085em lh unset",
    idea: "em + lh unset",
    css: "foreignObject *{word-spacing:0.085em!important;line-height:unset!important}",
  },
  {
    n: 85,
    slug: "ws 0.095em lh 1.25",
    idea: "em + lh 1.25",
    css: "foreignObject *{word-spacing:0.095em!important;line-height:1.25!important}",
  },
  {
    n: 86,
    slug: "ws 0.105em lh 1.45",
    idea: "em + lh 1.45",
    css: "foreignObject *{word-spacing:0.105em!important;line-height:1.45!important}",
  },
  {
    n: 87,
    slug: "ws 0.125em lh 1.55",
    idea: "em + lh 1.55",
    css: "foreignObject *{word-spacing:0.125em!important;line-height:1.55!important}",
  },
  {
    n: 88,
    slug: "ws 0.135em lh 1.65",
    idea: "em + lh 1.65",
    css: "foreignObject *{word-spacing:0.135em!important;line-height:1.65!important}",
  },
  {
    n: 89,
    slug: "ws 0.145em lh 1.75",
    idea: "em + lh 1.75",
    css: "foreignObject *{word-spacing:0.145em!important;line-height:1.75!important}",
  },
  {
    n: 90,
    slug: "ws 0.155em lh 1.85",
    idea: "em + lh 1.85",
    css: "foreignObject *{word-spacing:0.155em!important;line-height:1.85!important}",
  },
  {
    n: 91,
    slug: "ws 0.175em lh 2",
    idea: "em + lh 2",
    css: "foreignObject *{word-spacing:0.175em!important;line-height:2!important}",
  },
  {
    n: 92,
    slug: "ws 0.185em lh 1.05",
    idea: "em + lh 1.05",
    css: "foreignObject *{word-spacing:0.185em!important;line-height:1.05!important}",
  },
  {
    n: 93,
    slug: "ws 0.195em lh 1.95",
    idea: "em + lh 1.95",
    css: "foreignObject *{word-spacing:0.195em!important;line-height:1.95!important}",
  },
  {
    n: 94,
    slug: "ws pad em 0",
    idea: "word-spacing reset pad 0 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0010em!important;letter-spacing:normal!important}",
  },
  {
    n: 95,
    slug: "ws pad em 1",
    idea: "word-spacing reset pad 1 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0016em!important;letter-spacing:normal!important}",
  },
  {
    n: 96,
    slug: "ws pad em 2",
    idea: "word-spacing reset pad 2 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0022em!important;letter-spacing:normal!important}",
  },
  {
    n: 97,
    slug: "ws pad em 3",
    idea: "word-spacing reset pad 3 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0028em!important;letter-spacing:normal!important}",
  },
  {
    n: 98,
    slug: "ws pad em 4",
    idea: "word-spacing reset pad 4 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0034em!important;letter-spacing:normal!important}",
  },
  {
    n: 99,
    slug: "ws pad em 5",
    idea: "word-spacing reset pad 5 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0040em!important;letter-spacing:normal!important}",
  },
  {
    n: 100,
    slug: "ws pad em 6",
    idea: "word-spacing reset pad 6 — em matrix fill",
    css: "foreignObject *{word-spacing:0.0046em!important;letter-spacing:normal!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w42: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w42-${num}`,
    label: `Loop AI b11 w42 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w42; word-spacing reset matrix; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

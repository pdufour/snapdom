/**
 * Loop AI batch-11 FO recipe shard (worker 86) — text-fix: text-transform none reset (not uppercase)
 * 100 recipes: loop-ai-b11-w86-001..100
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

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'none-star root capitalize + *',
    idea: 'text-transform:none on FO *; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 2,
    slug: 'none-star root capitalize + a',
    idea: 'text-transform:none on FO *; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 3,
    slug: 'none-star root capitalize + span',
    idea: 'text-transform:none on FO *; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 4,
    slug: 'none-star root capitalize + chain',
    idea: 'text-transform:none on FO *; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:none!important}'
  },
  {
    n: 5,
    slug: 'none-star root capitalize + nav a',
    idea: 'text-transform:none on FO *; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:none!important}'
  },
  {
    n: 6,
    slug: 'none-star p capitalize + span reset',
    idea: 'text-transform:none on FO *; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 7,
    slug: 'none-star strong capitalize + a reset',
    idea: 'text-transform:none on FO *; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 8,
    slug: 'none-star flex capitalize + *',
    idea: 'text-transform:none on FO *; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 9,
    slug: 'none-star Chromium + capitalize + *',
    idea: 'text-transform:none on FO *; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 10,
    slug: 'none-star FO>div capitalize + *',
    idea: 'text-transform:none on FO *; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:none!important}'
  },
  {
    n: 11,
    slug: 'none-anchor root capitalize + *',
    idea: 'none on FO a; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 12,
    slug: 'none-anchor root capitalize + a',
    idea: 'none on FO a; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 13,
    slug: 'none-anchor root capitalize + span',
    idea: 'none on FO a; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 14,
    slug: 'none-anchor root capitalize + chain',
    idea: 'none on FO a; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:none!important}'
  },
  {
    n: 15,
    slug: 'none-anchor root capitalize + nav a',
    idea: 'none on FO a; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:none!important}'
  },
  {
    n: 16,
    slug: 'none-anchor p capitalize + span reset',
    idea: 'none on FO a; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 17,
    slug: 'none-anchor strong capitalize + a reset',
    idea: 'none on FO a; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 18,
    slug: 'none-anchor flex capitalize + *',
    idea: 'none on FO a; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 19,
    slug: 'none-anchor Chromium + capitalize + *',
    idea: 'none on FO a; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 20,
    slug: 'none-anchor FO>div capitalize + *',
    idea: 'none on FO a; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:none!important}'
  },
  {
    n: 21,
    slug: 'none-span root capitalize + *',
    idea: 'none on FO span; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 22,
    slug: 'none-span root capitalize + a',
    idea: 'none on FO span; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 23,
    slug: 'none-span root capitalize + span',
    idea: 'none on FO span; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 24,
    slug: 'none-span root capitalize + chain',
    idea: 'none on FO span; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:none!important}'
  },
  {
    n: 25,
    slug: 'none-span root capitalize + nav a',
    idea: 'none on FO span; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:none!important}'
  },
  {
    n: 26,
    slug: 'none-span p capitalize + span reset',
    idea: 'none on FO span; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 27,
    slug: 'none-span strong capitalize + a reset',
    idea: 'none on FO span; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 28,
    slug: 'none-span flex capitalize + *',
    idea: 'none on FO span; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 29,
    slug: 'none-span Chromium + capitalize + *',
    idea: 'none on FO span; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 30,
    slug: 'none-span FO>div capitalize + *',
    idea: 'none on FO span; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:none!important}'
  },
  {
    n: 31,
    slug: 'none-text-chain root capitalize + *',
    idea: 'none on text chain; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 32,
    slug: 'none-text-chain root capitalize + a',
    idea: 'none on text chain; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 33,
    slug: 'none-text-chain root capitalize + span',
    idea: 'none on text chain; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 34,
    slug: 'none-text-chain root capitalize + chain',
    idea: 'none on text chain; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:none!important}'
  },
  {
    n: 35,
    slug: 'none-text-chain root capitalize + nav a',
    idea: 'none on text chain; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:none!important}'
  },
  {
    n: 36,
    slug: 'none-text-chain p capitalize + span reset',
    idea: 'none on text chain; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:none!important}'
  },
  {
    n: 37,
    slug: 'none-text-chain strong capitalize + a reset',
    idea: 'none on text chain; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:none!important}'
  },
  {
    n: 38,
    slug: 'none-text-chain flex capitalize + *',
    idea: 'none on text chain; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 39,
    slug: 'none-text-chain Chromium + capitalize + *',
    idea: 'none on text chain; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important}'
  },
  {
    n: 40,
    slug: 'none-text-chain FO>div capitalize + *',
    idea: 'none on text chain; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:none!important}'
  },
  {
    n: 41,
    slug: 'none-inherit root capitalize + *',
    idea: 'inherit after root capitalize; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:inherit!important}'
  },
  {
    n: 42,
    slug: 'none-inherit root capitalize + a',
    idea: 'inherit after root capitalize; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:inherit!important}'
  },
  {
    n: 43,
    slug: 'none-inherit root capitalize + span',
    idea: 'inherit after root capitalize; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:inherit!important}'
  },
  {
    n: 44,
    slug: 'none-inherit root capitalize + chain',
    idea: 'inherit after root capitalize; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:inherit!important}'
  },
  {
    n: 45,
    slug: 'none-inherit root capitalize + nav a',
    idea: 'inherit after root capitalize; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:inherit!important}'
  },
  {
    n: 46,
    slug: 'none-inherit p capitalize + span reset',
    idea: 'inherit after root capitalize; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:inherit!important}'
  },
  {
    n: 47,
    slug: 'none-inherit strong capitalize + a reset',
    idea: 'inherit after root capitalize; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:inherit!important}'
  },
  {
    n: 48,
    slug: 'none-inherit flex capitalize + *',
    idea: 'inherit after root capitalize; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:inherit!important}'
  },
  {
    n: 49,
    slug: 'none-inherit Chromium + capitalize + *',
    idea: 'inherit after root capitalize; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:inherit!important}'
  },
  {
    n: 50,
    slug: 'none-inherit FO>div capitalize + *',
    idea: 'inherit after root capitalize; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:inherit!important}'
  },
  {
    n: 51,
    slug: 'none-unset root capitalize + *',
    idea: 'unset after root capitalize; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:unset!important}'
  },
  {
    n: 52,
    slug: 'none-unset root capitalize + a',
    idea: 'unset after root capitalize; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:unset!important}'
  },
  {
    n: 53,
    slug: 'none-unset root capitalize + span',
    idea: 'unset after root capitalize; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:unset!important}'
  },
  {
    n: 54,
    slug: 'none-unset root capitalize + chain',
    idea: 'unset after root capitalize; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:unset!important}'
  },
  {
    n: 55,
    slug: 'none-unset root capitalize + nav a',
    idea: 'unset after root capitalize; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:unset!important}'
  },
  {
    n: 56,
    slug: 'none-unset p capitalize + span reset',
    idea: 'unset after root capitalize; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:unset!important}'
  },
  {
    n: 57,
    slug: 'none-unset strong capitalize + a reset',
    idea: 'unset after root capitalize; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:unset!important}'
  },
  {
    n: 58,
    slug: 'none-unset flex capitalize + *',
    idea: 'unset after root capitalize; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:unset!important}'
  },
  {
    n: 59,
    slug: 'none-unset Chromium + capitalize + *',
    idea: 'unset after root capitalize; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:unset!important}'
  },
  {
    n: 60,
    slug: 'none-unset FO>div capitalize + *',
    idea: 'unset after root capitalize; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:unset!important}'
  },
  {
    n: 61,
    slug: 'none-revert root capitalize + *',
    idea: 'revert after root capitalize; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:revert!important}'
  },
  {
    n: 62,
    slug: 'none-revert root capitalize + a',
    idea: 'revert after root capitalize; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:revert!important}'
  },
  {
    n: 63,
    slug: 'none-revert root capitalize + span',
    idea: 'revert after root capitalize; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:revert!important}'
  },
  {
    n: 64,
    slug: 'none-revert root capitalize + chain',
    idea: 'revert after root capitalize; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:revert!important}'
  },
  {
    n: 65,
    slug: 'none-revert root capitalize + nav a',
    idea: 'revert after root capitalize; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:revert!important}'
  },
  {
    n: 66,
    slug: 'none-revert p capitalize + span reset',
    idea: 'revert after root capitalize; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:revert!important}'
  },
  {
    n: 67,
    slug: 'none-revert strong capitalize + a reset',
    idea: 'revert after root capitalize; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:revert!important}'
  },
  {
    n: 68,
    slug: 'none-revert flex capitalize + *',
    idea: 'revert after root capitalize; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:revert!important}'
  },
  {
    n: 69,
    slug: 'none-revert Chromium + capitalize + *',
    idea: 'revert after root capitalize; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:revert!important}'
  },
  {
    n: 70,
    slug: 'none-revert FO>div capitalize + *',
    idea: 'revert after root capitalize; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:revert!important}'
  },
  {
    n: 71,
    slug: 'none-initial root capitalize + *',
    idea: 'initial after root capitalize; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:initial!important}'
  },
  {
    n: 72,
    slug: 'none-initial root capitalize + a',
    idea: 'initial after root capitalize; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:initial!important}'
  },
  {
    n: 73,
    slug: 'none-initial root capitalize + span',
    idea: 'initial after root capitalize; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:initial!important}'
  },
  {
    n: 74,
    slug: 'none-initial root capitalize + chain',
    idea: 'initial after root capitalize; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:initial!important}'
  },
  {
    n: 75,
    slug: 'none-initial root capitalize + nav a',
    idea: 'initial after root capitalize; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:initial!important}'
  },
  {
    n: 76,
    slug: 'none-initial p capitalize + span reset',
    idea: 'initial after root capitalize; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:initial!important}'
  },
  {
    n: 77,
    slug: 'none-initial strong capitalize + a reset',
    idea: 'initial after root capitalize; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:initial!important}'
  },
  {
    n: 78,
    slug: 'none-initial flex capitalize + *',
    idea: 'initial after root capitalize; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:initial!important}'
  },
  {
    n: 79,
    slug: 'none-initial Chromium + capitalize + *',
    idea: 'initial after root capitalize; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:initial!important}'
  },
  {
    n: 80,
    slug: 'none-initial FO>div capitalize + *',
    idea: 'initial after root capitalize; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:initial!important}'
  },
  {
    n: 81,
    slug: 'none-revert-layer root capitalize + *',
    idea: 'revert-layer after root capitalize; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:revert-layer!important}'
  },
  {
    n: 82,
    slug: 'none-revert-layer root capitalize + a',
    idea: 'revert-layer after root capitalize; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:revert-layer!important}'
  },
  {
    n: 83,
    slug: 'none-revert-layer root capitalize + span',
    idea: 'revert-layer after root capitalize; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:revert-layer!important}'
  },
  {
    n: 84,
    slug: 'none-revert-layer root capitalize + chain',
    idea: 'revert-layer after root capitalize; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:revert-layer!important}'
  },
  {
    n: 85,
    slug: 'none-revert-layer root capitalize + nav a',
    idea: 'revert-layer after root capitalize; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:revert-layer!important}'
  },
  {
    n: 86,
    slug: 'none-revert-layer p capitalize + span reset',
    idea: 'revert-layer after root capitalize; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:revert-layer!important}'
  },
  {
    n: 87,
    slug: 'none-revert-layer strong capitalize + a reset',
    idea: 'revert-layer after root capitalize; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:revert-layer!important}'
  },
  {
    n: 88,
    slug: 'none-revert-layer flex capitalize + *',
    idea: 'revert-layer after root capitalize; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:revert-layer!important}'
  },
  {
    n: 89,
    slug: 'none-revert-layer Chromium + capitalize + *',
    idea: 'revert-layer after root capitalize; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:revert-layer!important}'
  },
  {
    n: 90,
    slug: 'none-revert-layer FO>div capitalize + *',
    idea: 'revert-layer after root capitalize; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:revert-layer!important}'
  },
  {
    n: 91,
    slug: 'none-capitalize-contrast root capitalize + *',
    idea: 'none + letter-spacing normal; root capitalize + *',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject *{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 92,
    slug: 'none-capitalize-contrast root capitalize + a',
    idea: 'none + letter-spacing normal; root capitalize + a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject a{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 93,
    slug: 'none-capitalize-contrast root capitalize + span',
    idea: 'none + letter-spacing normal; root capitalize + span',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject span{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 94,
    slug: 'none-capitalize-contrast root capitalize + chain',
    idea: 'none + letter-spacing normal; root capitalize + chain',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 95,
    slug: 'none-capitalize-contrast root capitalize + nav a',
    idea: 'none + letter-spacing normal; root capitalize + nav a',
    css: 'foreignObject{text-transform:capitalize!important}foreignObject nav a{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 96,
    slug: 'none-capitalize-contrast p capitalize + span reset',
    idea: 'none + letter-spacing normal; p capitalize + span reset',
    css: 'foreignObject p{text-transform:capitalize!important}foreignObject span{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 97,
    slug: 'none-capitalize-contrast strong capitalize + a reset',
    idea: 'none + letter-spacing normal; strong capitalize + a reset',
    css: 'foreignObject strong{text-transform:capitalize!important}foreignObject a{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 98,
    slug: 'none-capitalize-contrast flex capitalize + *',
    idea: 'none + letter-spacing normal; flex capitalize + *',
    css: 'foreignObject{display:flex!important;align-items:baseline!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 99,
    slug: 'none-capitalize-contrast Chromium + capitalize + *',
    idea: 'none + letter-spacing normal; Chromium + capitalize + *',
    css: 'foreignObject{font-kerning:normal!important;text-transform:capitalize!important}foreignObject *{text-transform:none!important;letter-spacing:normal!important}'
  },
  {
    n: 100,
    slug: 'none-capitalize-contrast FO>div capitalize + *',
    idea: 'none + letter-spacing normal; FO>div capitalize + *',
    css: 'foreignObject>div{text-transform:capitalize!important}foreignObject>div *{text-transform:none!important;letter-spacing:normal!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w86: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w86-${num}`,
    label: `Loop AI b11 w86 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w86; text-transform none reset (not uppercase); FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

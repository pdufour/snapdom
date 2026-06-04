/**
 * Loop AI batch-11 FO recipe shard (worker 85) — text-fix: tab-size structural
 * 100 recipes: loop-ai-b11-w85-001..100
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
    slug: 'tab-2 FO *',
    idea: 'tab-size:2 + pre on FO *',
    css: 'foreignObject *{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 2,
    slug: 'tab-2 FO root',
    idea: 'tab-size:2 + pre on FO root',
    css: 'foreignObject{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 3,
    slug: 'tab-2 FO a',
    idea: 'tab-size:2 + pre on FO a',
    css: 'foreignObject a{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 4,
    slug: 'tab-2 FO span',
    idea: 'tab-size:2 + pre on FO span',
    css: 'foreignObject span{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 5,
    slug: 'tab-2 text chain',
    idea: 'tab-size:2 + pre on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 6,
    slug: 'tab-2 nav a',
    idea: 'tab-size:2 + pre on nav a',
    css: 'foreignObject nav a{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 7,
    slug: 'tab-2 FO strong',
    idea: 'tab-size:2 + pre on FO strong',
    css: 'foreignObject strong{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 8,
    slug: 'tab-2 headings',
    idea: 'tab-size:2 + pre on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 9,
    slug: 'tab-2 Chromium + *',
    idea: 'tab-size:2 + pre on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 10,
    slug: 'tab-2 FO>div *',
    idea: 'tab-size:2 + pre on FO>div *',
    css: 'foreignObject>div *{tab-size:2!important;white-space:pre!important}'
  },
  {
    n: 11,
    slug: 'tab-4 FO *',
    idea: 'tab-size:4 + pre on FO *',
    css: 'foreignObject *{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 12,
    slug: 'tab-4 FO root',
    idea: 'tab-size:4 + pre on FO root',
    css: 'foreignObject{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 13,
    slug: 'tab-4 FO a',
    idea: 'tab-size:4 + pre on FO a',
    css: 'foreignObject a{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 14,
    slug: 'tab-4 FO span',
    idea: 'tab-size:4 + pre on FO span',
    css: 'foreignObject span{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 15,
    slug: 'tab-4 text chain',
    idea: 'tab-size:4 + pre on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 16,
    slug: 'tab-4 nav a',
    idea: 'tab-size:4 + pre on nav a',
    css: 'foreignObject nav a{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 17,
    slug: 'tab-4 FO strong',
    idea: 'tab-size:4 + pre on FO strong',
    css: 'foreignObject strong{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 18,
    slug: 'tab-4 headings',
    idea: 'tab-size:4 + pre on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 19,
    slug: 'tab-4 Chromium + *',
    idea: 'tab-size:4 + pre on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 20,
    slug: 'tab-4 FO>div *',
    idea: 'tab-size:4 + pre on FO>div *',
    css: 'foreignObject>div *{tab-size:4!important;white-space:pre!important}'
  },
  {
    n: 21,
    slug: 'tab-8 FO *',
    idea: 'tab-size:8 + pre on FO *',
    css: 'foreignObject *{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 22,
    slug: 'tab-8 FO root',
    idea: 'tab-size:8 + pre on FO root',
    css: 'foreignObject{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 23,
    slug: 'tab-8 FO a',
    idea: 'tab-size:8 + pre on FO a',
    css: 'foreignObject a{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 24,
    slug: 'tab-8 FO span',
    idea: 'tab-size:8 + pre on FO span',
    css: 'foreignObject span{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 25,
    slug: 'tab-8 text chain',
    idea: 'tab-size:8 + pre on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 26,
    slug: 'tab-8 nav a',
    idea: 'tab-size:8 + pre on nav a',
    css: 'foreignObject nav a{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 27,
    slug: 'tab-8 FO strong',
    idea: 'tab-size:8 + pre on FO strong',
    css: 'foreignObject strong{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 28,
    slug: 'tab-8 headings',
    idea: 'tab-size:8 + pre on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 29,
    slug: 'tab-8 Chromium + *',
    idea: 'tab-size:8 + pre on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 30,
    slug: 'tab-8 FO>div *',
    idea: 'tab-size:8 + pre on FO>div *',
    css: 'foreignObject>div *{tab-size:8!important;white-space:pre!important}'
  },
  {
    n: 31,
    slug: 'tab-16 FO *',
    idea: 'tab-size:16 + pre on FO *',
    css: 'foreignObject *{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 32,
    slug: 'tab-16 FO root',
    idea: 'tab-size:16 + pre on FO root',
    css: 'foreignObject{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 33,
    slug: 'tab-16 FO a',
    idea: 'tab-size:16 + pre on FO a',
    css: 'foreignObject a{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 34,
    slug: 'tab-16 FO span',
    idea: 'tab-size:16 + pre on FO span',
    css: 'foreignObject span{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 35,
    slug: 'tab-16 text chain',
    idea: 'tab-size:16 + pre on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 36,
    slug: 'tab-16 nav a',
    idea: 'tab-size:16 + pre on nav a',
    css: 'foreignObject nav a{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 37,
    slug: 'tab-16 FO strong',
    idea: 'tab-size:16 + pre on FO strong',
    css: 'foreignObject strong{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 38,
    slug: 'tab-16 headings',
    idea: 'tab-size:16 + pre on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 39,
    slug: 'tab-16 Chromium + *',
    idea: 'tab-size:16 + pre on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 40,
    slug: 'tab-16 FO>div *',
    idea: 'tab-size:16 + pre on FO>div *',
    css: 'foreignObject>div *{tab-size:16!important;white-space:pre!important}'
  },
  {
    n: 41,
    slug: 'tab-0 FO *',
    idea: 'tab-size:0 + pre on FO *',
    css: 'foreignObject *{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 42,
    slug: 'tab-0 FO root',
    idea: 'tab-size:0 + pre on FO root',
    css: 'foreignObject{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 43,
    slug: 'tab-0 FO a',
    idea: 'tab-size:0 + pre on FO a',
    css: 'foreignObject a{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 44,
    slug: 'tab-0 FO span',
    idea: 'tab-size:0 + pre on FO span',
    css: 'foreignObject span{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 45,
    slug: 'tab-0 text chain',
    idea: 'tab-size:0 + pre on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 46,
    slug: 'tab-0 nav a',
    idea: 'tab-size:0 + pre on nav a',
    css: 'foreignObject nav a{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 47,
    slug: 'tab-0 FO strong',
    idea: 'tab-size:0 + pre on FO strong',
    css: 'foreignObject strong{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 48,
    slug: 'tab-0 headings',
    idea: 'tab-size:0 + pre on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 49,
    slug: 'tab-0 Chromium + *',
    idea: 'tab-size:0 + pre on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 50,
    slug: 'tab-0 FO>div *',
    idea: 'tab-size:0 + pre on FO>div *',
    css: 'foreignObject>div *{tab-size:0!important;white-space:pre!important}'
  },
  {
    n: 51,
    slug: 'tab-1em FO *',
    idea: 'tab-size:1em + pre-wrap on FO *',
    css: 'foreignObject *{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 52,
    slug: 'tab-1em FO root',
    idea: 'tab-size:1em + pre-wrap on FO root',
    css: 'foreignObject{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 53,
    slug: 'tab-1em FO a',
    idea: 'tab-size:1em + pre-wrap on FO a',
    css: 'foreignObject a{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 54,
    slug: 'tab-1em FO span',
    idea: 'tab-size:1em + pre-wrap on FO span',
    css: 'foreignObject span{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 55,
    slug: 'tab-1em text chain',
    idea: 'tab-size:1em + pre-wrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 56,
    slug: 'tab-1em nav a',
    idea: 'tab-size:1em + pre-wrap on nav a',
    css: 'foreignObject nav a{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 57,
    slug: 'tab-1em FO strong',
    idea: 'tab-size:1em + pre-wrap on FO strong',
    css: 'foreignObject strong{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 58,
    slug: 'tab-1em headings',
    idea: 'tab-size:1em + pre-wrap on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 59,
    slug: 'tab-1em Chromium + *',
    idea: 'tab-size:1em + pre-wrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 60,
    slug: 'tab-1em FO>div *',
    idea: 'tab-size:1em + pre-wrap on FO>div *',
    css: 'foreignObject>div *{tab-size:1em!important;white-space:pre-wrap!important}'
  },
  {
    n: 61,
    slug: 'tab-0.5em FO *',
    idea: 'tab-size:0.5em + pre-wrap on FO *',
    css: 'foreignObject *{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 62,
    slug: 'tab-0.5em FO root',
    idea: 'tab-size:0.5em + pre-wrap on FO root',
    css: 'foreignObject{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 63,
    slug: 'tab-0.5em FO a',
    idea: 'tab-size:0.5em + pre-wrap on FO a',
    css: 'foreignObject a{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 64,
    slug: 'tab-0.5em FO span',
    idea: 'tab-size:0.5em + pre-wrap on FO span',
    css: 'foreignObject span{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 65,
    slug: 'tab-0.5em text chain',
    idea: 'tab-size:0.5em + pre-wrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 66,
    slug: 'tab-0.5em nav a',
    idea: 'tab-size:0.5em + pre-wrap on nav a',
    css: 'foreignObject nav a{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 67,
    slug: 'tab-0.5em FO strong',
    idea: 'tab-size:0.5em + pre-wrap on FO strong',
    css: 'foreignObject strong{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 68,
    slug: 'tab-0.5em headings',
    idea: 'tab-size:0.5em + pre-wrap on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 69,
    slug: 'tab-0.5em Chromium + *',
    idea: 'tab-size:0.5em + pre-wrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 70,
    slug: 'tab-0.5em FO>div *',
    idea: 'tab-size:0.5em + pre-wrap on FO>div *',
    css: 'foreignObject>div *{tab-size:0.5em!important;white-space:pre-wrap!important}'
  },
  {
    n: 71,
    slug: 'tab-inherit FO *',
    idea: 'tab-size:inherit + pre-wrap on FO *',
    css: 'foreignObject *{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 72,
    slug: 'tab-inherit FO root',
    idea: 'tab-size:inherit + pre-wrap on FO root',
    css: 'foreignObject{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 73,
    slug: 'tab-inherit FO a',
    idea: 'tab-size:inherit + pre-wrap on FO a',
    css: 'foreignObject a{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 74,
    slug: 'tab-inherit FO span',
    idea: 'tab-size:inherit + pre-wrap on FO span',
    css: 'foreignObject span{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 75,
    slug: 'tab-inherit text chain',
    idea: 'tab-size:inherit + pre-wrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 76,
    slug: 'tab-inherit nav a',
    idea: 'tab-size:inherit + pre-wrap on nav a',
    css: 'foreignObject nav a{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 77,
    slug: 'tab-inherit FO strong',
    idea: 'tab-size:inherit + pre-wrap on FO strong',
    css: 'foreignObject strong{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 78,
    slug: 'tab-inherit headings',
    idea: 'tab-size:inherit + pre-wrap on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 79,
    slug: 'tab-inherit Chromium + *',
    idea: 'tab-size:inherit + pre-wrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 80,
    slug: 'tab-inherit FO>div *',
    idea: 'tab-size:inherit + pre-wrap on FO>div *',
    css: 'foreignObject>div *{tab-size:inherit!important;white-space:pre-wrap!important}'
  },
  {
    n: 81,
    slug: 'tab-unset FO *',
    idea: 'tab-size:unset + pre on FO *',
    css: 'foreignObject *{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 82,
    slug: 'tab-unset FO root',
    idea: 'tab-size:unset + pre on FO root',
    css: 'foreignObject{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 83,
    slug: 'tab-unset FO a',
    idea: 'tab-size:unset + pre on FO a',
    css: 'foreignObject a{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 84,
    slug: 'tab-unset FO span',
    idea: 'tab-size:unset + pre on FO span',
    css: 'foreignObject span{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 85,
    slug: 'tab-unset text chain',
    idea: 'tab-size:unset + pre on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 86,
    slug: 'tab-unset nav a',
    idea: 'tab-size:unset + pre on nav a',
    css: 'foreignObject nav a{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 87,
    slug: 'tab-unset FO strong',
    idea: 'tab-size:unset + pre on FO strong',
    css: 'foreignObject strong{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 88,
    slug: 'tab-unset headings',
    idea: 'tab-size:unset + pre on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 89,
    slug: 'tab-unset Chromium + *',
    idea: 'tab-size:unset + pre on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 90,
    slug: 'tab-unset FO>div *',
    idea: 'tab-size:unset + pre on FO>div *',
    css: 'foreignObject>div *{tab-size:unset!important;white-space:pre!important}'
  },
  {
    n: 91,
    slug: 'tab-8-normal-ws FO *',
    idea: 'tab-size:8 + normal white-space on FO *',
    css: 'foreignObject *{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 92,
    slug: 'tab-8-normal-ws FO root',
    idea: 'tab-size:8 + normal white-space on FO root',
    css: 'foreignObject{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 93,
    slug: 'tab-8-normal-ws FO a',
    idea: 'tab-size:8 + normal white-space on FO a',
    css: 'foreignObject a{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 94,
    slug: 'tab-8-normal-ws FO span',
    idea: 'tab-size:8 + normal white-space on FO span',
    css: 'foreignObject span{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 95,
    slug: 'tab-8-normal-ws text chain',
    idea: 'tab-size:8 + normal white-space on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 96,
    slug: 'tab-8-normal-ws nav a',
    idea: 'tab-size:8 + normal white-space on nav a',
    css: 'foreignObject nav a{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 97,
    slug: 'tab-8-normal-ws FO strong',
    idea: 'tab-size:8 + normal white-space on FO strong',
    css: 'foreignObject strong{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 98,
    slug: 'tab-8-normal-ws headings',
    idea: 'tab-size:8 + normal white-space on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 99,
    slug: 'tab-8-normal-ws Chromium + *',
    idea: 'tab-size:8 + normal white-space on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  },
  {
    n: 100,
    slug: 'tab-8-normal-ws FO>div *',
    idea: 'tab-size:8 + normal white-space on FO>div *',
    css: 'foreignObject>div *{tab-size:8!important;white-space:normal!important;word-spacing:normal!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w85: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w85-${num}`,
    label: `Loop AI b11 w85 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w85; tab-size structural; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

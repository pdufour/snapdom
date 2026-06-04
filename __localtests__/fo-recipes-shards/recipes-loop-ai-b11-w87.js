/**
 * Loop AI batch-11 FO recipe shard (worker 87) — text-fix: half-leading lh1 + trim none stacks
 * 100 recipes: loop-ai-b11-w87-001..100
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
    slug: 'lh1-trim-none FO *',
    idea: 'lh:1 + text-box-trim:none on FO *',
    css: 'foreignObject *{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 2,
    slug: 'lh1-trim-none FO root',
    idea: 'lh:1 + text-box-trim:none on FO root',
    css: 'foreignObject{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 3,
    slug: 'lh1-trim-none FO a',
    idea: 'lh:1 + text-box-trim:none on FO a',
    css: 'foreignObject a{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 4,
    slug: 'lh1-trim-none FO span',
    idea: 'lh:1 + text-box-trim:none on FO span',
    css: 'foreignObject span{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 5,
    slug: 'lh1-trim-none text chain',
    idea: 'lh:1 + text-box-trim:none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 6,
    slug: 'lh1-trim-none nav a',
    idea: 'lh:1 + text-box-trim:none on nav a',
    css: 'foreignObject nav a{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 7,
    slug: 'lh1-trim-none FO strong',
    idea: 'lh:1 + text-box-trim:none on FO strong',
    css: 'foreignObject strong{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 8,
    slug: 'lh1-trim-none headings',
    idea: 'lh:1 + text-box-trim:none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 9,
    slug: 'lh1-trim-none Chromium + *',
    idea: 'lh:1 + text-box-trim:none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 10,
    slug: 'lh1-trim-none FO>div *',
    idea: 'lh:1 + text-box-trim:none on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 11,
    slug: 'lh1-leading-none FO *',
    idea: 'lh:1 + leading-trim:none on FO *',
    css: 'foreignObject *{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 12,
    slug: 'lh1-leading-none FO root',
    idea: 'lh:1 + leading-trim:none on FO root',
    css: 'foreignObject{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 13,
    slug: 'lh1-leading-none FO a',
    idea: 'lh:1 + leading-trim:none on FO a',
    css: 'foreignObject a{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 14,
    slug: 'lh1-leading-none FO span',
    idea: 'lh:1 + leading-trim:none on FO span',
    css: 'foreignObject span{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 15,
    slug: 'lh1-leading-none text chain',
    idea: 'lh:1 + leading-trim:none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 16,
    slug: 'lh1-leading-none nav a',
    idea: 'lh:1 + leading-trim:none on nav a',
    css: 'foreignObject nav a{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 17,
    slug: 'lh1-leading-none FO strong',
    idea: 'lh:1 + leading-trim:none on FO strong',
    css: 'foreignObject strong{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 18,
    slug: 'lh1-leading-none headings',
    idea: 'lh:1 + leading-trim:none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 19,
    slug: 'lh1-leading-none Chromium + *',
    idea: 'lh:1 + leading-trim:none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 20,
    slug: 'lh1-leading-none FO>div *',
    idea: 'lh:1 + leading-trim:none on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;leading-trim:none!important}'
  },
  {
    n: 21,
    slug: 'lh1-both-trim-none FO *',
    idea: 'lh:1 + dual trim none on FO *',
    css: 'foreignObject *{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 22,
    slug: 'lh1-both-trim-none FO root',
    idea: 'lh:1 + dual trim none on FO root',
    css: 'foreignObject{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 23,
    slug: 'lh1-both-trim-none FO a',
    idea: 'lh:1 + dual trim none on FO a',
    css: 'foreignObject a{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 24,
    slug: 'lh1-both-trim-none FO span',
    idea: 'lh:1 + dual trim none on FO span',
    css: 'foreignObject span{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 25,
    slug: 'lh1-both-trim-none text chain',
    idea: 'lh:1 + dual trim none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 26,
    slug: 'lh1-both-trim-none nav a',
    idea: 'lh:1 + dual trim none on nav a',
    css: 'foreignObject nav a{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 27,
    slug: 'lh1-both-trim-none FO strong',
    idea: 'lh:1 + dual trim none on FO strong',
    css: 'foreignObject strong{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 28,
    slug: 'lh1-both-trim-none headings',
    idea: 'lh:1 + dual trim none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 29,
    slug: 'lh1-both-trim-none Chromium + *',
    idea: 'lh:1 + dual trim none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 30,
    slug: 'lh1-both-trim-none FO>div *',
    idea: 'lh:1 + dual trim none on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;text-box-trim:none!important;leading-trim:none!important}'
  },
  {
    n: 31,
    slug: 'lh1-edge-cap FO *',
    idea: 'lh:1 + trim none + cap edge on FO *',
    css: 'foreignObject *{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 32,
    slug: 'lh1-edge-cap FO root',
    idea: 'lh:1 + trim none + cap edge on FO root',
    css: 'foreignObject{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 33,
    slug: 'lh1-edge-cap FO a',
    idea: 'lh:1 + trim none + cap edge on FO a',
    css: 'foreignObject a{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 34,
    slug: 'lh1-edge-cap FO span',
    idea: 'lh:1 + trim none + cap edge on FO span',
    css: 'foreignObject span{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 35,
    slug: 'lh1-edge-cap text chain',
    idea: 'lh:1 + trim none + cap edge on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 36,
    slug: 'lh1-edge-cap nav a',
    idea: 'lh:1 + trim none + cap edge on nav a',
    css: 'foreignObject nav a{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 37,
    slug: 'lh1-edge-cap FO strong',
    idea: 'lh:1 + trim none + cap edge on FO strong',
    css: 'foreignObject strong{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 38,
    slug: 'lh1-edge-cap headings',
    idea: 'lh:1 + trim none + cap edge on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 39,
    slug: 'lh1-edge-cap Chromium + *',
    idea: 'lh:1 + trim none + cap edge on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 40,
    slug: 'lh1-edge-cap FO>div *',
    idea: 'lh:1 + trim none + cap edge on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;text-box-trim:none!important;text-box-edge:cap alphabetic!important}'
  },
  {
    n: 41,
    slug: 'lh1-edge-leading FO *',
    idea: 'lh:1 + leading edge on FO *',
    css: 'foreignObject *{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 42,
    slug: 'lh1-edge-leading FO root',
    idea: 'lh:1 + leading edge on FO root',
    css: 'foreignObject{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 43,
    slug: 'lh1-edge-leading FO a',
    idea: 'lh:1 + leading edge on FO a',
    css: 'foreignObject a{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 44,
    slug: 'lh1-edge-leading FO span',
    idea: 'lh:1 + leading edge on FO span',
    css: 'foreignObject span{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 45,
    slug: 'lh1-edge-leading text chain',
    idea: 'lh:1 + leading edge on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 46,
    slug: 'lh1-edge-leading nav a',
    idea: 'lh:1 + leading edge on nav a',
    css: 'foreignObject nav a{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 47,
    slug: 'lh1-edge-leading FO strong',
    idea: 'lh:1 + leading edge on FO strong',
    css: 'foreignObject strong{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 48,
    slug: 'lh1-edge-leading headings',
    idea: 'lh:1 + leading edge on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 49,
    slug: 'lh1-edge-leading Chromium + *',
    idea: 'lh:1 + leading edge on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 50,
    slug: 'lh1-edge-leading FO>div *',
    idea: 'lh:1 + leading edge on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;text-box-trim:none!important;text-box-edge:leading alphabetic!important}'
  },
  {
    n: 51,
    slug: 'lh1-from-font-trim-none FO *',
    idea: 'from-font + trim none on FO *',
    css: 'foreignObject *{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 52,
    slug: 'lh1-from-font-trim-none FO root',
    idea: 'from-font + trim none on FO root',
    css: 'foreignObject{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 53,
    slug: 'lh1-from-font-trim-none FO a',
    idea: 'from-font + trim none on FO a',
    css: 'foreignObject a{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 54,
    slug: 'lh1-from-font-trim-none FO span',
    idea: 'from-font + trim none on FO span',
    css: 'foreignObject span{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 55,
    slug: 'lh1-from-font-trim-none text chain',
    idea: 'from-font + trim none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 56,
    slug: 'lh1-from-font-trim-none nav a',
    idea: 'from-font + trim none on nav a',
    css: 'foreignObject nav a{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 57,
    slug: 'lh1-from-font-trim-none FO strong',
    idea: 'from-font + trim none on FO strong',
    css: 'foreignObject strong{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 58,
    slug: 'lh1-from-font-trim-none headings',
    idea: 'from-font + trim none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 59,
    slug: 'lh1-from-font-trim-none Chromium + *',
    idea: 'from-font + trim none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 60,
    slug: 'lh1-from-font-trim-none FO>div *',
    idea: 'from-font + trim none on FO>div *',
    css: 'foreignObject>div *{line-height:from-font!important;text-box-trim:none!important}'
  },
  {
    n: 61,
    slug: 'lh1-normal-trim-none FO *',
    idea: 'normal + trim none contrast on FO *',
    css: 'foreignObject *{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 62,
    slug: 'lh1-normal-trim-none FO root',
    idea: 'normal + trim none contrast on FO root',
    css: 'foreignObject{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 63,
    slug: 'lh1-normal-trim-none FO a',
    idea: 'normal + trim none contrast on FO a',
    css: 'foreignObject a{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 64,
    slug: 'lh1-normal-trim-none FO span',
    idea: 'normal + trim none contrast on FO span',
    css: 'foreignObject span{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 65,
    slug: 'lh1-normal-trim-none text chain',
    idea: 'normal + trim none contrast on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 66,
    slug: 'lh1-normal-trim-none nav a',
    idea: 'normal + trim none contrast on nav a',
    css: 'foreignObject nav a{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 67,
    slug: 'lh1-normal-trim-none FO strong',
    idea: 'normal + trim none contrast on FO strong',
    css: 'foreignObject strong{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 68,
    slug: 'lh1-normal-trim-none headings',
    idea: 'normal + trim none contrast on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 69,
    slug: 'lh1-normal-trim-none Chromium + *',
    idea: 'normal + trim none contrast on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 70,
    slug: 'lh1-normal-trim-none FO>div *',
    idea: 'normal + trim none contrast on FO>div *',
    css: 'foreignObject>div *{line-height:normal!important;text-box-trim:none!important}'
  },
  {
    n: 71,
    slug: 'lh1-trim-start-none FO *',
    idea: 'lh:1 + trim-start + leading none on FO *',
    css: 'foreignObject *{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 72,
    slug: 'lh1-trim-start-none FO root',
    idea: 'lh:1 + trim-start + leading none on FO root',
    css: 'foreignObject{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 73,
    slug: 'lh1-trim-start-none FO a',
    idea: 'lh:1 + trim-start + leading none on FO a',
    css: 'foreignObject a{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 74,
    slug: 'lh1-trim-start-none FO span',
    idea: 'lh:1 + trim-start + leading none on FO span',
    css: 'foreignObject span{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 75,
    slug: 'lh1-trim-start-none text chain',
    idea: 'lh:1 + trim-start + leading none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 76,
    slug: 'lh1-trim-start-none nav a',
    idea: 'lh:1 + trim-start + leading none on nav a',
    css: 'foreignObject nav a{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 77,
    slug: 'lh1-trim-start-none FO strong',
    idea: 'lh:1 + trim-start + leading none on FO strong',
    css: 'foreignObject strong{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 78,
    slug: 'lh1-trim-start-none headings',
    idea: 'lh:1 + trim-start + leading none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 79,
    slug: 'lh1-trim-start-none Chromium + *',
    idea: 'lh:1 + trim-start + leading none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 80,
    slug: 'lh1-trim-start-none FO>div *',
    idea: 'lh:1 + trim-start + leading none on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;text-box-trim:trim-start!important;leading-trim:none!important}'
  },
  {
    n: 81,
    slug: 'lh1-trim-end-none FO *',
    idea: 'lh:1 + trim-end + leading none on FO *',
    css: 'foreignObject *{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 82,
    slug: 'lh1-trim-end-none FO root',
    idea: 'lh:1 + trim-end + leading none on FO root',
    css: 'foreignObject{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 83,
    slug: 'lh1-trim-end-none FO a',
    idea: 'lh:1 + trim-end + leading none on FO a',
    css: 'foreignObject a{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 84,
    slug: 'lh1-trim-end-none FO span',
    idea: 'lh:1 + trim-end + leading none on FO span',
    css: 'foreignObject span{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 85,
    slug: 'lh1-trim-end-none text chain',
    idea: 'lh:1 + trim-end + leading none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 86,
    slug: 'lh1-trim-end-none nav a',
    idea: 'lh:1 + trim-end + leading none on nav a',
    css: 'foreignObject nav a{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 87,
    slug: 'lh1-trim-end-none FO strong',
    idea: 'lh:1 + trim-end + leading none on FO strong',
    css: 'foreignObject strong{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 88,
    slug: 'lh1-trim-end-none headings',
    idea: 'lh:1 + trim-end + leading none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 89,
    slug: 'lh1-trim-end-none Chromium + *',
    idea: 'lh:1 + trim-end + leading none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 90,
    slug: 'lh1-trim-end-none FO>div *',
    idea: 'lh:1 + trim-end + leading none on FO>div *',
    css: 'foreignObject>div *{line-height:1!important;text-box-trim:trim-end!important;leading-trim:none!important}'
  },
  {
    n: 91,
    slug: 'lh1-div-normal-trim FO *',
    idea: 'lh:1 + trim none + FO>div normal on FO *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 92,
    slug: 'lh1-div-normal-trim FO root',
    idea: 'lh:1 + trim none + FO>div normal on FO root',
    css: 'foreignObject>div{line-height:normal!important}foreignObject{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 93,
    slug: 'lh1-div-normal-trim FO a',
    idea: 'lh:1 + trim none + FO>div normal on FO a',
    css: 'foreignObject>div{line-height:normal!important}foreignObject a{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 94,
    slug: 'lh1-div-normal-trim FO span',
    idea: 'lh:1 + trim none + FO>div normal on FO span',
    css: 'foreignObject>div{line-height:normal!important}foreignObject span{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 95,
    slug: 'lh1-div-normal-trim text chain',
    idea: 'lh:1 + trim none + FO>div normal on text chain',
    css: 'foreignObject>div{line-height:normal!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 96,
    slug: 'lh1-div-normal-trim nav a',
    idea: 'lh:1 + trim none + FO>div normal on nav a',
    css: 'foreignObject>div{line-height:normal!important}foreignObject nav a{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 97,
    slug: 'lh1-div-normal-trim FO strong',
    idea: 'lh:1 + trim none + FO>div normal on FO strong',
    css: 'foreignObject>div{line-height:normal!important}foreignObject strong{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 98,
    slug: 'lh1-div-normal-trim headings',
    idea: 'lh:1 + trim none + FO>div normal on headings',
    css: 'foreignObject>div{line-height:normal!important}foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 99,
    slug: 'lh1-div-normal-trim Chromium + *',
    idea: 'lh:1 + trim none + FO>div normal on Chromium + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;text-box-trim:none!important}'
  },
  {
    n: 100,
    slug: 'lh1-div-normal-trim FO>div *',
    idea: 'lh:1 + trim none + FO>div normal on FO>div *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:1!important;text-box-trim:none!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w87: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w87-${num}`,
    label: `Loop AI b11 w87 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w87; half-leading lh1 + trim none stacks; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

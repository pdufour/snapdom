/**
 * Loop AI batch-11 FO recipe shard (worker 82) — text-fix: max-inline-size fit-content text box
 * 100 recipes: loop-ai-b11-w82-001..100
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
    slug: 'max-inline-fit FO *',
    idea: 'max-inline-size:fit-content on FO *',
    css: 'foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 2,
    slug: 'max-inline-fit FO a',
    idea: 'max-inline-size:fit-content on FO a',
    css: 'foreignObject a{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 3,
    slug: 'max-inline-fit FO span',
    idea: 'max-inline-size:fit-content on FO span',
    css: 'foreignObject span{max-inline-size:fit-content!important;width:auto!important;display:inline!important}'
  },
  {
    n: 4,
    slug: 'max-inline-fit text chain',
    idea: 'max-inline-size:fit-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 5,
    slug: 'max-inline-fit nav a',
    idea: 'max-inline-size:fit-content on nav a',
    css: 'foreignObject nav a{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 6,
    slug: 'max-inline-fit FO>div',
    idea: 'max-inline-size:fit-content on FO>div',
    css: 'foreignObject>div{max-inline-size:fit-content!important;width:auto!important;display:block!important}'
  },
  {
    n: 7,
    slug: 'max-inline-fit FO>div *',
    idea: 'max-inline-size:fit-content on FO>div *',
    css: 'foreignObject>div *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 8,
    slug: 'max-inline-fit flex baseline + *',
    idea: 'max-inline-size:fit-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 9,
    slug: 'max-inline-fit Chromium + *',
    idea: 'max-inline-size:fit-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 10,
    slug: 'max-inline-fit FO>div normal + *',
    idea: 'max-inline-size:fit-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 11,
    slug: 'inline-fit FO *',
    idea: 'inline-size:fit-content on FO *',
    css: 'foreignObject *{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 12,
    slug: 'inline-fit FO a',
    idea: 'inline-size:fit-content on FO a',
    css: 'foreignObject a{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 13,
    slug: 'inline-fit FO span',
    idea: 'inline-size:fit-content on FO span',
    css: 'foreignObject span{inline-size:fit-content!important;width:auto!important;display:inline-block!important;display:inline!important}'
  },
  {
    n: 14,
    slug: 'inline-fit text chain',
    idea: 'inline-size:fit-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 15,
    slug: 'inline-fit nav a',
    idea: 'inline-size:fit-content on nav a',
    css: 'foreignObject nav a{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 16,
    slug: 'inline-fit FO>div',
    idea: 'inline-size:fit-content on FO>div',
    css: 'foreignObject>div{inline-size:fit-content!important;width:auto!important;display:inline-block!important;display:block!important}'
  },
  {
    n: 17,
    slug: 'inline-fit FO>div *',
    idea: 'inline-size:fit-content on FO>div *',
    css: 'foreignObject>div *{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 18,
    slug: 'inline-fit flex baseline + *',
    idea: 'inline-size:fit-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 19,
    slug: 'inline-fit Chromium + *',
    idea: 'inline-size:fit-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 20,
    slug: 'inline-fit FO>div normal + *',
    idea: 'inline-size:fit-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{inline-size:fit-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 21,
    slug: 'width-fit FO *',
    idea: 'width:fit-content on FO *',
    css: 'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 22,
    slug: 'width-fit FO a',
    idea: 'width:fit-content on FO a',
    css: 'foreignObject a{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 23,
    slug: 'width-fit FO span',
    idea: 'width:fit-content on FO span',
    css: 'foreignObject span{width:fit-content!important;max-width:none!important;display:inline-block!important;display:inline!important}'
  },
  {
    n: 24,
    slug: 'width-fit text chain',
    idea: 'width:fit-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 25,
    slug: 'width-fit nav a',
    idea: 'width:fit-content on nav a',
    css: 'foreignObject nav a{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 26,
    slug: 'width-fit FO>div',
    idea: 'width:fit-content on FO>div',
    css: 'foreignObject>div{width:fit-content!important;max-width:none!important;display:inline-block!important;display:block!important}'
  },
  {
    n: 27,
    slug: 'width-fit FO>div *',
    idea: 'width:fit-content on FO>div *',
    css: 'foreignObject>div *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 28,
    slug: 'width-fit flex baseline + *',
    idea: 'width:fit-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 29,
    slug: 'width-fit Chromium + *',
    idea: 'width:fit-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 30,
    slug: 'width-fit FO>div normal + *',
    idea: 'width:fit-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 31,
    slug: 'max-inline-max FO *',
    idea: 'max-inline-size:max-content on FO *',
    css: 'foreignObject *{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 32,
    slug: 'max-inline-max FO a',
    idea: 'max-inline-size:max-content on FO a',
    css: 'foreignObject a{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 33,
    slug: 'max-inline-max FO span',
    idea: 'max-inline-size:max-content on FO span',
    css: 'foreignObject span{max-inline-size:max-content!important;width:auto!important;display:inline!important}'
  },
  {
    n: 34,
    slug: 'max-inline-max text chain',
    idea: 'max-inline-size:max-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 35,
    slug: 'max-inline-max nav a',
    idea: 'max-inline-size:max-content on nav a',
    css: 'foreignObject nav a{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 36,
    slug: 'max-inline-max FO>div',
    idea: 'max-inline-size:max-content on FO>div',
    css: 'foreignObject>div{max-inline-size:max-content!important;width:auto!important;display:block!important}'
  },
  {
    n: 37,
    slug: 'max-inline-max FO>div *',
    idea: 'max-inline-size:max-content on FO>div *',
    css: 'foreignObject>div *{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 38,
    slug: 'max-inline-max flex baseline + *',
    idea: 'max-inline-size:max-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 39,
    slug: 'max-inline-max Chromium + *',
    idea: 'max-inline-size:max-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 40,
    slug: 'max-inline-max FO>div normal + *',
    idea: 'max-inline-size:max-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{max-inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 41,
    slug: 'inline-max FO *',
    idea: 'inline-size:max-content on FO *',
    css: 'foreignObject *{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 42,
    slug: 'inline-max FO a',
    idea: 'inline-size:max-content on FO a',
    css: 'foreignObject a{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 43,
    slug: 'inline-max FO span',
    idea: 'inline-size:max-content on FO span',
    css: 'foreignObject span{inline-size:max-content!important;width:auto!important;display:inline!important}'
  },
  {
    n: 44,
    slug: 'inline-max text chain',
    idea: 'inline-size:max-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 45,
    slug: 'inline-max nav a',
    idea: 'inline-size:max-content on nav a',
    css: 'foreignObject nav a{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 46,
    slug: 'inline-max FO>div',
    idea: 'inline-size:max-content on FO>div',
    css: 'foreignObject>div{inline-size:max-content!important;width:auto!important;display:block!important}'
  },
  {
    n: 47,
    slug: 'inline-max FO>div *',
    idea: 'inline-size:max-content on FO>div *',
    css: 'foreignObject>div *{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 48,
    slug: 'inline-max flex baseline + *',
    idea: 'inline-size:max-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 49,
    slug: 'inline-max Chromium + *',
    idea: 'inline-size:max-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 50,
    slug: 'inline-max FO>div normal + *',
    idea: 'inline-size:max-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 51,
    slug: 'width-min FO *',
    idea: 'width:min-content on FO *',
    css: 'foreignObject *{width:min-content!important;max-width:none!important}'
  },
  {
    n: 52,
    slug: 'width-min FO a',
    idea: 'width:min-content on FO a',
    css: 'foreignObject a{width:min-content!important;max-width:none!important}'
  },
  {
    n: 53,
    slug: 'width-min FO span',
    idea: 'width:min-content on FO span',
    css: 'foreignObject span{width:min-content!important;max-width:none!important;display:inline!important}'
  },
  {
    n: 54,
    slug: 'width-min text chain',
    idea: 'width:min-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{width:min-content!important;max-width:none!important}'
  },
  {
    n: 55,
    slug: 'width-min nav a',
    idea: 'width:min-content on nav a',
    css: 'foreignObject nav a{width:min-content!important;max-width:none!important}'
  },
  {
    n: 56,
    slug: 'width-min FO>div',
    idea: 'width:min-content on FO>div',
    css: 'foreignObject>div{width:min-content!important;max-width:none!important;display:block!important}'
  },
  {
    n: 57,
    slug: 'width-min FO>div *',
    idea: 'width:min-content on FO>div *',
    css: 'foreignObject>div *{width:min-content!important;max-width:none!important}'
  },
  {
    n: 58,
    slug: 'width-min flex baseline + *',
    idea: 'width:min-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{width:min-content!important;max-width:none!important}'
  },
  {
    n: 59,
    slug: 'width-min Chromium + *',
    idea: 'width:min-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{width:min-content!important;max-width:none!important}'
  },
  {
    n: 60,
    slug: 'width-min FO>div normal + *',
    idea: 'width:min-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{width:min-content!important;max-width:none!important}'
  },
  {
    n: 61,
    slug: 'max-inline-min FO *',
    idea: 'max-inline-size:min-content on FO *',
    css: 'foreignObject *{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 62,
    slug: 'max-inline-min FO a',
    idea: 'max-inline-size:min-content on FO a',
    css: 'foreignObject a{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 63,
    slug: 'max-inline-min FO span',
    idea: 'max-inline-size:min-content on FO span',
    css: 'foreignObject span{max-inline-size:min-content!important;width:auto!important;display:inline!important}'
  },
  {
    n: 64,
    slug: 'max-inline-min text chain',
    idea: 'max-inline-size:min-content on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 65,
    slug: 'max-inline-min nav a',
    idea: 'max-inline-size:min-content on nav a',
    css: 'foreignObject nav a{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 66,
    slug: 'max-inline-min FO>div',
    idea: 'max-inline-size:min-content on FO>div',
    css: 'foreignObject>div{max-inline-size:min-content!important;width:auto!important;display:block!important}'
  },
  {
    n: 67,
    slug: 'max-inline-min FO>div *',
    idea: 'max-inline-size:min-content on FO>div *',
    css: 'foreignObject>div *{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 68,
    slug: 'max-inline-min flex baseline + *',
    idea: 'max-inline-size:min-content on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 69,
    slug: 'max-inline-min Chromium + *',
    idea: 'max-inline-size:min-content on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 70,
    slug: 'max-inline-min FO>div normal + *',
    idea: 'max-inline-size:min-content on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{max-inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 71,
    slug: 'fit-nowrap FO *',
    idea: 'fit-content + nowrap on FO *',
    css: 'foreignObject *{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 72,
    slug: 'fit-nowrap FO a',
    idea: 'fit-content + nowrap on FO a',
    css: 'foreignObject a{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 73,
    slug: 'fit-nowrap FO span',
    idea: 'fit-content + nowrap on FO span',
    css: 'foreignObject span{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important;display:inline!important}'
  },
  {
    n: 74,
    slug: 'fit-nowrap text chain',
    idea: 'fit-content + nowrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 75,
    slug: 'fit-nowrap nav a',
    idea: 'fit-content + nowrap on nav a',
    css: 'foreignObject nav a{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 76,
    slug: 'fit-nowrap FO>div',
    idea: 'fit-content + nowrap on FO>div',
    css: 'foreignObject>div{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important;display:block!important}'
  },
  {
    n: 77,
    slug: 'fit-nowrap FO>div *',
    idea: 'fit-content + nowrap on FO>div *',
    css: 'foreignObject>div *{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 78,
    slug: 'fit-nowrap flex baseline + *',
    idea: 'fit-content + nowrap on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 79,
    slug: 'fit-nowrap Chromium + *',
    idea: 'fit-content + nowrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 80,
    slug: 'fit-nowrap FO>div normal + *',
    idea: 'fit-content + nowrap on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{max-inline-size:fit-content!important;white-space:nowrap!important;display:inline-block!important}'
  },
  {
    n: 81,
    slug: 'fit-pre-wrap FO *',
    idea: 'fit-content + pre-wrap on FO *',
    css: 'foreignObject *{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 82,
    slug: 'fit-pre-wrap FO a',
    idea: 'fit-content + pre-wrap on FO a',
    css: 'foreignObject a{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 83,
    slug: 'fit-pre-wrap FO span',
    idea: 'fit-content + pre-wrap on FO span',
    css: 'foreignObject span{max-inline-size:fit-content!important;white-space:pre-wrap!important;display:inline!important}'
  },
  {
    n: 84,
    slug: 'fit-pre-wrap text chain',
    idea: 'fit-content + pre-wrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 85,
    slug: 'fit-pre-wrap nav a',
    idea: 'fit-content + pre-wrap on nav a',
    css: 'foreignObject nav a{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 86,
    slug: 'fit-pre-wrap FO>div',
    idea: 'fit-content + pre-wrap on FO>div',
    css: 'foreignObject>div{max-inline-size:fit-content!important;white-space:pre-wrap!important;display:block!important}'
  },
  {
    n: 87,
    slug: 'fit-pre-wrap FO>div *',
    idea: 'fit-content + pre-wrap on FO>div *',
    css: 'foreignObject>div *{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 88,
    slug: 'fit-pre-wrap flex baseline + *',
    idea: 'fit-content + pre-wrap on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 89,
    slug: 'fit-pre-wrap Chromium + *',
    idea: 'fit-content + pre-wrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 90,
    slug: 'fit-pre-wrap FO>div normal + *',
    idea: 'fit-content + pre-wrap on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{max-inline-size:fit-content!important;white-space:pre-wrap!important}'
  },
  {
    n: 91,
    slug: 'fit-div-normal FO *',
    idea: 'fit-content + FO>div normal on FO *',
    css: 'foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 92,
    slug: 'fit-div-normal FO a',
    idea: 'fit-content + FO>div normal on FO a',
    css: 'foreignObject a{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 93,
    slug: 'fit-div-normal FO span',
    idea: 'fit-content + FO>div normal on FO span',
    css: 'foreignObject span{max-inline-size:fit-content!important;width:auto!important;display:inline!important}'
  },
  {
    n: 94,
    slug: 'fit-div-normal text chain',
    idea: 'fit-content + FO>div normal on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 95,
    slug: 'fit-div-normal nav a',
    idea: 'fit-content + FO>div normal on nav a',
    css: 'foreignObject nav a{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 96,
    slug: 'fit-div-normal FO>div',
    idea: 'fit-content + FO>div normal on FO>div',
    css: 'foreignObject>div{max-inline-size:fit-content!important;width:auto!important;display:block!important}'
  },
  {
    n: 97,
    slug: 'fit-div-normal FO>div *',
    idea: 'fit-content + FO>div normal on FO>div *',
    css: 'foreignObject>div *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 98,
    slug: 'fit-div-normal flex baseline + *',
    idea: 'fit-content + FO>div normal on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 99,
    slug: 'fit-div-normal Chromium + *',
    idea: 'fit-content + FO>div normal on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 100,
    slug: 'fit-div-normal FO>div normal + *',
    idea: 'fit-content + FO>div normal on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{max-inline-size:fit-content!important;width:auto!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w82: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w82-${num}`,
    label: `Loop AI b11 w82 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w82; max-inline-size fit-content text box; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

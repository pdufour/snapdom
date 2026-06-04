/**
 * Loop AI batch-11 FO recipe shard (worker 83) — text-fix: overflow-wrap anywhere combos
 * 100 recipes: loop-ai-b11-w83-001..100
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
    slug: 'wrap-anywhere FO *',
    idea: 'overflow-wrap:anywhere on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important}'
  },
  {
    n: 2,
    slug: 'wrap-anywhere FO a',
    idea: 'overflow-wrap:anywhere on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important}'
  },
  {
    n: 3,
    slug: 'wrap-anywhere FO span',
    idea: 'overflow-wrap:anywhere on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;display:inline!important}'
  },
  {
    n: 4,
    slug: 'wrap-anywhere text chain',
    idea: 'overflow-wrap:anywhere on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important}'
  },
  {
    n: 5,
    slug: 'wrap-anywhere nav a',
    idea: 'overflow-wrap:anywhere on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important}'
  },
  {
    n: 6,
    slug: 'wrap-anywhere FO>div',
    idea: 'overflow-wrap:anywhere on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;display:block!important}'
  },
  {
    n: 7,
    slug: 'wrap-anywhere FO>div *',
    idea: 'overflow-wrap:anywhere on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important}'
  },
  {
    n: 8,
    slug: 'wrap-anywhere flex baseline + *',
    idea: 'overflow-wrap:anywhere on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important}'
  },
  {
    n: 9,
    slug: 'wrap-anywhere Chromium + *',
    idea: 'overflow-wrap:anywhere on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important}'
  },
  {
    n: 10,
    slug: 'wrap-anywhere FO>div normal + *',
    idea: 'overflow-wrap:anywhere on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important}'
  },
  {
    n: 11,
    slug: 'wrap-break-word FO *',
    idea: 'overflow-wrap:break-word on FO *',
    css: 'foreignObject *{overflow-wrap:break-word!important}'
  },
  {
    n: 12,
    slug: 'wrap-break-word FO a',
    idea: 'overflow-wrap:break-word on FO a',
    css: 'foreignObject a{overflow-wrap:break-word!important}'
  },
  {
    n: 13,
    slug: 'wrap-break-word FO span',
    idea: 'overflow-wrap:break-word on FO span',
    css: 'foreignObject span{overflow-wrap:break-word!important;display:inline!important}'
  },
  {
    n: 14,
    slug: 'wrap-break-word text chain',
    idea: 'overflow-wrap:break-word on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:break-word!important}'
  },
  {
    n: 15,
    slug: 'wrap-break-word nav a',
    idea: 'overflow-wrap:break-word on nav a',
    css: 'foreignObject nav a{overflow-wrap:break-word!important}'
  },
  {
    n: 16,
    slug: 'wrap-break-word FO>div',
    idea: 'overflow-wrap:break-word on FO>div',
    css: 'foreignObject>div{overflow-wrap:break-word!important;display:block!important}'
  },
  {
    n: 17,
    slug: 'wrap-break-word FO>div *',
    idea: 'overflow-wrap:break-word on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:break-word!important}'
  },
  {
    n: 18,
    slug: 'wrap-break-word flex baseline + *',
    idea: 'overflow-wrap:break-word on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:break-word!important}'
  },
  {
    n: 19,
    slug: 'wrap-break-word Chromium + *',
    idea: 'overflow-wrap:break-word on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:break-word!important}'
  },
  {
    n: 20,
    slug: 'wrap-break-word FO>div normal + *',
    idea: 'overflow-wrap:break-word on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:break-word!important}'
  },
  {
    n: 21,
    slug: 'wrap-normal FO *',
    idea: 'overflow-wrap:normal on FO *',
    css: 'foreignObject *{overflow-wrap:normal!important}'
  },
  {
    n: 22,
    slug: 'wrap-normal FO a',
    idea: 'overflow-wrap:normal on FO a',
    css: 'foreignObject a{overflow-wrap:normal!important}'
  },
  {
    n: 23,
    slug: 'wrap-normal FO span',
    idea: 'overflow-wrap:normal on FO span',
    css: 'foreignObject span{overflow-wrap:normal!important;display:inline!important}'
  },
  {
    n: 24,
    slug: 'wrap-normal text chain',
    idea: 'overflow-wrap:normal on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:normal!important}'
  },
  {
    n: 25,
    slug: 'wrap-normal nav a',
    idea: 'overflow-wrap:normal on nav a',
    css: 'foreignObject nav a{overflow-wrap:normal!important}'
  },
  {
    n: 26,
    slug: 'wrap-normal FO>div',
    idea: 'overflow-wrap:normal on FO>div',
    css: 'foreignObject>div{overflow-wrap:normal!important;display:block!important}'
  },
  {
    n: 27,
    slug: 'wrap-normal FO>div *',
    idea: 'overflow-wrap:normal on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:normal!important}'
  },
  {
    n: 28,
    slug: 'wrap-normal flex baseline + *',
    idea: 'overflow-wrap:normal on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:normal!important}'
  },
  {
    n: 29,
    slug: 'wrap-normal Chromium + *',
    idea: 'overflow-wrap:normal on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:normal!important}'
  },
  {
    n: 30,
    slug: 'wrap-normal FO>div normal + *',
    idea: 'overflow-wrap:normal on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:normal!important}'
  },
  {
    n: 31,
    slug: 'wrap-anywhere-word-normal FO *',
    idea: 'anywhere + word-break:normal on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 32,
    slug: 'wrap-anywhere-word-normal FO a',
    idea: 'anywhere + word-break:normal on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 33,
    slug: 'wrap-anywhere-word-normal FO span',
    idea: 'anywhere + word-break:normal on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;word-break:normal!important;display:inline!important}'
  },
  {
    n: 34,
    slug: 'wrap-anywhere-word-normal text chain',
    idea: 'anywhere + word-break:normal on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 35,
    slug: 'wrap-anywhere-word-normal nav a',
    idea: 'anywhere + word-break:normal on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 36,
    slug: 'wrap-anywhere-word-normal FO>div',
    idea: 'anywhere + word-break:normal on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;word-break:normal!important;display:block!important}'
  },
  {
    n: 37,
    slug: 'wrap-anywhere-word-normal FO>div *',
    idea: 'anywhere + word-break:normal on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 38,
    slug: 'wrap-anywhere-word-normal flex baseline + *',
    idea: 'anywhere + word-break:normal on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 39,
    slug: 'wrap-anywhere-word-normal Chromium + *',
    idea: 'anywhere + word-break:normal on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 40,
    slug: 'wrap-anywhere-word-normal FO>div normal + *',
    idea: 'anywhere + word-break:normal on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;word-break:normal!important}'
  },
  {
    n: 41,
    slug: 'wrap-anywhere-break-all FO *',
    idea: 'anywhere + break-all on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 42,
    slug: 'wrap-anywhere-break-all FO a',
    idea: 'anywhere + break-all on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 43,
    slug: 'wrap-anywhere-break-all FO span',
    idea: 'anywhere + break-all on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;word-break:break-all!important;display:inline!important}'
  },
  {
    n: 44,
    slug: 'wrap-anywhere-break-all text chain',
    idea: 'anywhere + break-all on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 45,
    slug: 'wrap-anywhere-break-all nav a',
    idea: 'anywhere + break-all on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 46,
    slug: 'wrap-anywhere-break-all FO>div',
    idea: 'anywhere + break-all on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;word-break:break-all!important;display:block!important}'
  },
  {
    n: 47,
    slug: 'wrap-anywhere-break-all FO>div *',
    idea: 'anywhere + break-all on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 48,
    slug: 'wrap-anywhere-break-all flex baseline + *',
    idea: 'anywhere + break-all on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 49,
    slug: 'wrap-anywhere-break-all Chromium + *',
    idea: 'anywhere + break-all on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 50,
    slug: 'wrap-anywhere-break-all FO>div normal + *',
    idea: 'anywhere + break-all on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;word-break:break-all!important}'
  },
  {
    n: 51,
    slug: 'wrap-anywhere-hyphens-auto FO *',
    idea: 'anywhere + hyphens:auto on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 52,
    slug: 'wrap-anywhere-hyphens-auto FO a',
    idea: 'anywhere + hyphens:auto on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 53,
    slug: 'wrap-anywhere-hyphens-auto FO span',
    idea: 'anywhere + hyphens:auto on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;hyphens:auto!important;display:inline!important}'
  },
  {
    n: 54,
    slug: 'wrap-anywhere-hyphens-auto text chain',
    idea: 'anywhere + hyphens:auto on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 55,
    slug: 'wrap-anywhere-hyphens-auto nav a',
    idea: 'anywhere + hyphens:auto on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 56,
    slug: 'wrap-anywhere-hyphens-auto FO>div',
    idea: 'anywhere + hyphens:auto on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;hyphens:auto!important;display:block!important}'
  },
  {
    n: 57,
    slug: 'wrap-anywhere-hyphens-auto FO>div *',
    idea: 'anywhere + hyphens:auto on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 58,
    slug: 'wrap-anywhere-hyphens-auto flex baseline + *',
    idea: 'anywhere + hyphens:auto on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 59,
    slug: 'wrap-anywhere-hyphens-auto Chromium + *',
    idea: 'anywhere + hyphens:auto on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 60,
    slug: 'wrap-anywhere-hyphens-auto FO>div normal + *',
    idea: 'anywhere + hyphens:auto on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;hyphens:auto!important}'
  },
  {
    n: 61,
    slug: 'wrap-anywhere-pre-wrap FO *',
    idea: 'anywhere + pre-wrap on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 62,
    slug: 'wrap-anywhere-pre-wrap FO a',
    idea: 'anywhere + pre-wrap on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 63,
    slug: 'wrap-anywhere-pre-wrap FO span',
    idea: 'anywhere + pre-wrap on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;white-space:pre-wrap!important;display:inline!important}'
  },
  {
    n: 64,
    slug: 'wrap-anywhere-pre-wrap text chain',
    idea: 'anywhere + pre-wrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 65,
    slug: 'wrap-anywhere-pre-wrap nav a',
    idea: 'anywhere + pre-wrap on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 66,
    slug: 'wrap-anywhere-pre-wrap FO>div',
    idea: 'anywhere + pre-wrap on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;white-space:pre-wrap!important;display:block!important}'
  },
  {
    n: 67,
    slug: 'wrap-anywhere-pre-wrap FO>div *',
    idea: 'anywhere + pre-wrap on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 68,
    slug: 'wrap-anywhere-pre-wrap flex baseline + *',
    idea: 'anywhere + pre-wrap on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 69,
    slug: 'wrap-anywhere-pre-wrap Chromium + *',
    idea: 'anywhere + pre-wrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 70,
    slug: 'wrap-anywhere-pre-wrap FO>div normal + *',
    idea: 'anywhere + pre-wrap on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;white-space:pre-wrap!important}'
  },
  {
    n: 71,
    slug: 'wrap-anywhere-nowrap FO *',
    idea: 'anywhere + nowrap on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 72,
    slug: 'wrap-anywhere-nowrap FO a',
    idea: 'anywhere + nowrap on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 73,
    slug: 'wrap-anywhere-nowrap FO span',
    idea: 'anywhere + nowrap on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;white-space:nowrap!important;display:inline!important}'
  },
  {
    n: 74,
    slug: 'wrap-anywhere-nowrap text chain',
    idea: 'anywhere + nowrap on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 75,
    slug: 'wrap-anywhere-nowrap nav a',
    idea: 'anywhere + nowrap on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 76,
    slug: 'wrap-anywhere-nowrap FO>div',
    idea: 'anywhere + nowrap on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;white-space:nowrap!important;display:block!important}'
  },
  {
    n: 77,
    slug: 'wrap-anywhere-nowrap FO>div *',
    idea: 'anywhere + nowrap on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 78,
    slug: 'wrap-anywhere-nowrap flex baseline + *',
    idea: 'anywhere + nowrap on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 79,
    slug: 'wrap-anywhere-nowrap Chromium + *',
    idea: 'anywhere + nowrap on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 80,
    slug: 'wrap-anywhere-nowrap FO>div normal + *',
    idea: 'anywhere + nowrap on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;white-space:nowrap!important}'
  },
  {
    n: 81,
    slug: 'wrap-anywhere-balance FO *',
    idea: 'anywhere + text-wrap:balance on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 82,
    slug: 'wrap-anywhere-balance FO a',
    idea: 'anywhere + text-wrap:balance on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 83,
    slug: 'wrap-anywhere-balance FO span',
    idea: 'anywhere + text-wrap:balance on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;text-wrap:balance!important;display:inline!important}'
  },
  {
    n: 84,
    slug: 'wrap-anywhere-balance text chain',
    idea: 'anywhere + text-wrap:balance on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 85,
    slug: 'wrap-anywhere-balance nav a',
    idea: 'anywhere + text-wrap:balance on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 86,
    slug: 'wrap-anywhere-balance FO>div',
    idea: 'anywhere + text-wrap:balance on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;text-wrap:balance!important;display:block!important}'
  },
  {
    n: 87,
    slug: 'wrap-anywhere-balance FO>div *',
    idea: 'anywhere + text-wrap:balance on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 88,
    slug: 'wrap-anywhere-balance flex baseline + *',
    idea: 'anywhere + text-wrap:balance on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 89,
    slug: 'wrap-anywhere-balance Chromium + *',
    idea: 'anywhere + text-wrap:balance on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 90,
    slug: 'wrap-anywhere-balance FO>div normal + *',
    idea: 'anywhere + text-wrap:balance on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;text-wrap:balance!important}'
  },
  {
    n: 91,
    slug: 'wrap-anywhere-stable FO *',
    idea: 'anywhere + text-wrap:stable on FO *',
    css: 'foreignObject *{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 92,
    slug: 'wrap-anywhere-stable FO a',
    idea: 'anywhere + text-wrap:stable on FO a',
    css: 'foreignObject a{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 93,
    slug: 'wrap-anywhere-stable FO span',
    idea: 'anywhere + text-wrap:stable on FO span',
    css: 'foreignObject span{overflow-wrap:anywhere!important;text-wrap:stable!important;display:inline!important}'
  },
  {
    n: 94,
    slug: 'wrap-anywhere-stable text chain',
    idea: 'anywhere + text-wrap:stable on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 95,
    slug: 'wrap-anywhere-stable nav a',
    idea: 'anywhere + text-wrap:stable on nav a',
    css: 'foreignObject nav a{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 96,
    slug: 'wrap-anywhere-stable FO>div',
    idea: 'anywhere + text-wrap:stable on FO>div',
    css: 'foreignObject>div{overflow-wrap:anywhere!important;text-wrap:stable!important;display:block!important}'
  },
  {
    n: 97,
    slug: 'wrap-anywhere-stable FO>div *',
    idea: 'anywhere + text-wrap:stable on FO>div *',
    css: 'foreignObject>div *{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 98,
    slug: 'wrap-anywhere-stable flex baseline + *',
    idea: 'anywhere + text-wrap:stable on flex baseline + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important}foreignObject *{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 99,
    slug: 'wrap-anywhere-stable Chromium + *',
    idea: 'anywhere + text-wrap:stable on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  },
  {
    n: 100,
    slug: 'wrap-anywhere-stable FO>div normal + *',
    idea: 'anywhere + text-wrap:stable on FO>div normal + *',
    css: 'foreignObject>div{line-height:normal!important}foreignObject *{overflow-wrap:anywhere!important;text-wrap:stable!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w83: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w83-${num}`,
    label: `Loop AI b11 w83 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w83; overflow-wrap anywhere combos; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

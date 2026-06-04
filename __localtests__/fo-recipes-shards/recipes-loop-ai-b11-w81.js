/**
 * Loop AI batch-11 FO recipe shard (worker 81) — text-fix: min-height 0 flex text shrink
 * 100 recipes: loop-ai-b11-w81-001..100
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
const flexRow = (align) =>
  'foreignObject{display:flex!important;flex-direction:row!important;' +
  `align-items:${align}!important;overflow:visible!important}`
const navFlex = (align) =>
  'foreignObject nav{display:flex!important;flex-direction:row!important;' +
  `align-items:${align}!important;gap:0!important;overflow:visible!important}`

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'shrink-items FO *',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped FO *',
    css: 'foreignObject *{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 2,
    slug: 'shrink-items FO>div',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 3,
    slug: 'shrink-items FO>div *',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 4,
    slug: 'shrink-items FO a',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped FO a',
    css: 'foreignObject a{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important;display:inline-block!important}'
  },
  {
    n: 5,
    slug: 'shrink-items FO span',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped FO span',
    css: 'foreignObject span{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important;display:inline!important}'
  },
  {
    n: 6,
    slug: 'shrink-items text chain',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 7,
    slug: 'shrink-items nav a',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 8,
    slug: 'shrink-items FO>div a',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 9,
    slug: 'shrink-items flex stretch root + *',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 10,
    slug: 'shrink-items flex baseline root + *',
    idea: 'min-height:0 flex-shrink:1 on flex items; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;min-width:0!important;flex-shrink:1!important;box-sizing:border-box!important}'
  },
  {
    n: 11,
    slug: 'block-auto FO *',
    idea: 'min-height:0 + block-size:auto shrink; scoped FO *',
    css: 'foreignObject *{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 12,
    slug: 'block-auto FO>div',
    idea: 'min-height:0 + block-size:auto shrink; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 13,
    slug: 'block-auto FO>div *',
    idea: 'min-height:0 + block-size:auto shrink; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 14,
    slug: 'block-auto FO a',
    idea: 'min-height:0 + block-size:auto shrink; scoped FO a',
    css: 'foreignObject a{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important;display:inline-block!important}'
  },
  {
    n: 15,
    slug: 'block-auto FO span',
    idea: 'min-height:0 + block-size:auto shrink; scoped FO span',
    css: 'foreignObject span{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important;display:inline!important}'
  },
  {
    n: 16,
    slug: 'block-auto text chain',
    idea: 'min-height:0 + block-size:auto shrink; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 17,
    slug: 'block-auto nav a',
    idea: 'min-height:0 + block-size:auto shrink; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 18,
    slug: 'block-auto FO>div a',
    idea: 'min-height:0 + block-size:auto shrink; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 19,
    slug: 'block-auto flex stretch root + *',
    idea: 'min-height:0 + block-size:auto shrink; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 20,
    slug: 'block-auto flex baseline root + *',
    idea: 'min-height:0 + block-size:auto shrink; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;block-size:auto!important;min-width:0!important;box-sizing:border-box!important}'
  },
  {
    n: 21,
    slug: 'flex-col FO *',
    idea: 'flex column + min-height:0; scoped FO *',
    css: 'foreignObject *{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 22,
    slug: 'flex-col FO>div',
    idea: 'flex column + min-height:0; scoped FO>div',
    css: 'foreignObject>div{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 23,
    slug: 'flex-col FO>div *',
    idea: 'flex column + min-height:0; scoped FO>div *',
    css: 'foreignObject>div *{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 24,
    slug: 'flex-col FO a',
    idea: 'flex column + min-height:0; scoped FO a',
    css: 'foreignObject a{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important;display:inline-block!important}'
  },
  {
    n: 25,
    slug: 'flex-col FO span',
    idea: 'flex column + min-height:0; scoped FO span',
    css: 'foreignObject span{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important;display:inline!important}'
  },
  {
    n: 26,
    slug: 'flex-col text chain',
    idea: 'flex column + min-height:0; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 27,
    slug: 'flex-col nav a',
    idea: 'flex column + min-height:0; scoped nav a',
    css: 'foreignObject nav a{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 28,
    slug: 'flex-col FO>div a',
    idea: 'flex column + min-height:0; scoped FO>div a',
    css: 'foreignObject>div a{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 29,
    slug: 'flex-col flex stretch root + *',
    idea: 'flex column + min-height:0; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 30,
    slug: 'flex-col flex baseline root + *',
    idea: 'flex column + min-height:0; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{display:flex!important;flex-direction:column!important;min-height:0!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 31,
    slug: 'unset-cascade FO *',
    idea: 'min-height:unset vs root 1px floor; scoped FO *',
    css: 'foreignObject{min-height:1px!important}foreignObject *{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 32,
    slug: 'unset-cascade FO>div',
    idea: 'min-height:unset vs root 1px floor; scoped FO>div',
    css: 'foreignObject{min-height:1px!important}foreignObject>div{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 33,
    slug: 'unset-cascade FO>div *',
    idea: 'min-height:unset vs root 1px floor; scoped FO>div *',
    css: 'foreignObject{min-height:1px!important}foreignObject>div *{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 34,
    slug: 'unset-cascade FO a',
    idea: 'min-height:unset vs root 1px floor; scoped FO a',
    css: 'foreignObject{min-height:1px!important}foreignObject a{min-height:unset!important;min-width:0!important;flex-shrink:1!important;display:inline-block!important}'
  },
  {
    n: 35,
    slug: 'unset-cascade FO span',
    idea: 'min-height:unset vs root 1px floor; scoped FO span',
    css: 'foreignObject{min-height:1px!important}foreignObject span{min-height:unset!important;min-width:0!important;flex-shrink:1!important;display:inline!important}'
  },
  {
    n: 36,
    slug: 'unset-cascade text chain',
    idea: 'min-height:unset vs root 1px floor; scoped text chain',
    css: 'foreignObject{min-height:1px!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 37,
    slug: 'unset-cascade nav a',
    idea: 'min-height:unset vs root 1px floor; scoped nav a',
    css: 'foreignObject{min-height:1px!important}foreignObject nav a{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 38,
    slug: 'unset-cascade FO>div a',
    idea: 'min-height:unset vs root 1px floor; scoped FO>div a',
    css: 'foreignObject{min-height:1px!important}foreignObject>div a{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 39,
    slug: 'unset-cascade flex stretch root + *',
    idea: 'min-height:unset vs root 1px floor; scoped flex stretch root + *',
    css: 'foreignObject{min-height:1px!important}foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 40,
    slug: 'unset-cascade flex baseline root + *',
    idea: 'min-height:unset vs root 1px floor; scoped flex baseline root + *',
    css: 'foreignObject{min-height:1px!important}foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:unset!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 41,
    slug: 'height-auto FO *',
    idea: 'min-height:0 + height:auto; scoped FO *',
    css: 'foreignObject *{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 42,
    slug: 'height-auto FO>div',
    idea: 'min-height:0 + height:auto; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 43,
    slug: 'height-auto FO>div *',
    idea: 'min-height:0 + height:auto; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 44,
    slug: 'height-auto FO a',
    idea: 'min-height:0 + height:auto; scoped FO a',
    css: 'foreignObject a{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important;display:inline-block!important}'
  },
  {
    n: 45,
    slug: 'height-auto FO span',
    idea: 'min-height:0 + height:auto; scoped FO span',
    css: 'foreignObject span{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important;display:inline!important}'
  },
  {
    n: 46,
    slug: 'height-auto text chain',
    idea: 'min-height:0 + height:auto; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 47,
    slug: 'height-auto nav a',
    idea: 'min-height:0 + height:auto; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 48,
    slug: 'height-auto FO>div a',
    idea: 'min-height:0 + height:auto; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 49,
    slug: 'height-auto flex stretch root + *',
    idea: 'min-height:0 + height:auto; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 50,
    slug: 'height-auto flex baseline root + *',
    idea: 'min-height:0 + height:auto; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;height:auto!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 51,
    slug: 'grid-shrink FO *',
    idea: 'grid + min-height:0; scoped FO *',
    css: 'foreignObject *{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 52,
    slug: 'grid-shrink FO>div',
    idea: 'grid + min-height:0; scoped FO>div',
    css: 'foreignObject>div{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 53,
    slug: 'grid-shrink FO>div *',
    idea: 'grid + min-height:0; scoped FO>div *',
    css: 'foreignObject>div *{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 54,
    slug: 'grid-shrink FO a',
    idea: 'grid + min-height:0; scoped FO a',
    css: 'foreignObject a{display:grid!important;min-height:0!important;min-width:0!important;display:inline-block!important}'
  },
  {
    n: 55,
    slug: 'grid-shrink FO span',
    idea: 'grid + min-height:0; scoped FO span',
    css: 'foreignObject span{display:grid!important;min-height:0!important;min-width:0!important;display:inline!important}'
  },
  {
    n: 56,
    slug: 'grid-shrink text chain',
    idea: 'grid + min-height:0; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 57,
    slug: 'grid-shrink nav a',
    idea: 'grid + min-height:0; scoped nav a',
    css: 'foreignObject nav a{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 58,
    slug: 'grid-shrink FO>div a',
    idea: 'grid + min-height:0; scoped FO>div a',
    css: 'foreignObject>div a{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 59,
    slug: 'grid-shrink flex stretch root + *',
    idea: 'grid + min-height:0; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 60,
    slug: 'grid-shrink flex baseline root + *',
    idea: 'grid + min-height:0; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{display:grid!important;min-height:0!important;min-width:0!important}'
  },
  {
    n: 61,
    slug: 'shrink0-contrast FO *',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped FO *',
    css: 'foreignObject *{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 62,
    slug: 'shrink0-contrast FO>div',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 63,
    slug: 'shrink0-contrast FO>div *',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 64,
    slug: 'shrink0-contrast FO a',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped FO a',
    css: 'foreignObject a{min-height:0!important;flex-shrink:0!important;min-width:0!important;display:inline-block!important}'
  },
  {
    n: 65,
    slug: 'shrink0-contrast FO span',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped FO span',
    css: 'foreignObject span{min-height:0!important;flex-shrink:0!important;min-width:0!important;display:inline!important}'
  },
  {
    n: 66,
    slug: 'shrink0-contrast text chain',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 67,
    slug: 'shrink0-contrast nav a',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 68,
    slug: 'shrink0-contrast FO>div a',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 69,
    slug: 'shrink0-contrast flex stretch root + *',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 70,
    slug: 'shrink0-contrast flex baseline root + *',
    idea: 'min-height:0 + flex-shrink:0 contrast; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;flex-shrink:0!important;min-width:0!important}'
  },
  {
    n: 71,
    slug: 'overflow-hidden FO *',
    idea: 'overflow:hidden + min-height:0; scoped FO *',
    css: 'foreignObject *{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 72,
    slug: 'overflow-hidden FO>div',
    idea: 'overflow:hidden + min-height:0; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 73,
    slug: 'overflow-hidden FO>div *',
    idea: 'overflow:hidden + min-height:0; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 74,
    slug: 'overflow-hidden FO a',
    idea: 'overflow:hidden + min-height:0; scoped FO a',
    css: 'foreignObject a{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important;display:inline-block!important}'
  },
  {
    n: 75,
    slug: 'overflow-hidden FO span',
    idea: 'overflow:hidden + min-height:0; scoped FO span',
    css: 'foreignObject span{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important;display:inline!important}'
  },
  {
    n: 76,
    slug: 'overflow-hidden text chain',
    idea: 'overflow:hidden + min-height:0; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 77,
    slug: 'overflow-hidden nav a',
    idea: 'overflow:hidden + min-height:0; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 78,
    slug: 'overflow-hidden FO>div a',
    idea: 'overflow:hidden + min-height:0; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 79,
    slug: 'overflow-hidden flex stretch root + *',
    idea: 'overflow:hidden + min-height:0; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 80,
    slug: 'overflow-hidden flex baseline root + *',
    idea: 'overflow:hidden + min-height:0; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;overflow:hidden!important;flex-shrink:1!important;min-width:0!important}'
  },
  {
    n: 81,
    slug: 'max-height-none FO *',
    idea: 'min-height:0 + max-height:none; scoped FO *',
    css: 'foreignObject *{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 82,
    slug: 'max-height-none FO>div',
    idea: 'min-height:0 + max-height:none; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 83,
    slug: 'max-height-none FO>div *',
    idea: 'min-height:0 + max-height:none; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 84,
    slug: 'max-height-none FO a',
    idea: 'min-height:0 + max-height:none; scoped FO a',
    css: 'foreignObject a{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important;display:inline-block!important}'
  },
  {
    n: 85,
    slug: 'max-height-none FO span',
    idea: 'min-height:0 + max-height:none; scoped FO span',
    css: 'foreignObject span{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important;display:inline!important}'
  },
  {
    n: 86,
    slug: 'max-height-none text chain',
    idea: 'min-height:0 + max-height:none; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 87,
    slug: 'max-height-none nav a',
    idea: 'min-height:0 + max-height:none; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 88,
    slug: 'max-height-none FO>div a',
    idea: 'min-height:0 + max-height:none; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 89,
    slug: 'max-height-none flex stretch root + *',
    idea: 'min-height:0 + max-height:none; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 90,
    slug: 'max-height-none flex baseline root + *',
    idea: 'min-height:0 + max-height:none; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;max-height:none!important;min-width:0!important;flex-shrink:1!important}'
  },
  {
    n: 91,
    slug: 'align-self-start FO *',
    idea: 'align-self:flex-start + min-height:0; scoped FO *',
    css: 'foreignObject *{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 92,
    slug: 'align-self-start FO>div',
    idea: 'align-self:flex-start + min-height:0; scoped FO>div',
    css: 'foreignObject>div{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 93,
    slug: 'align-self-start FO>div *',
    idea: 'align-self:flex-start + min-height:0; scoped FO>div *',
    css: 'foreignObject>div *{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 94,
    slug: 'align-self-start FO a',
    idea: 'align-self:flex-start + min-height:0; scoped FO a',
    css: 'foreignObject a{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important;display:inline-block!important}'
  },
  {
    n: 95,
    slug: 'align-self-start FO span',
    idea: 'align-self:flex-start + min-height:0; scoped FO span',
    css: 'foreignObject span{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important;display:inline!important}'
  },
  {
    n: 96,
    slug: 'align-self-start text chain',
    idea: 'align-self:flex-start + min-height:0; scoped text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 97,
    slug: 'align-self-start nav a',
    idea: 'align-self:flex-start + min-height:0; scoped nav a',
    css: 'foreignObject nav a{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 98,
    slug: 'align-self-start FO>div a',
    idea: 'align-self:flex-start + min-height:0; scoped FO>div a',
    css: 'foreignObject>div a{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 99,
    slug: 'align-self-start flex stretch root + *',
    idea: 'align-self:flex-start + min-height:0; scoped flex stretch root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  },
  {
    n: 100,
    slug: 'align-self-start flex baseline root + *',
    idea: 'align-self:flex-start + min-height:0; scoped flex baseline root + *',
    css: 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{min-height:0!important;align-self:flex-start!important;min-width:0!important;height:auto!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w81: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w81-${num}`,
    label: `Loop AI b11 w81 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w81; min-height 0 flex text shrink; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-11 FO recipe shard (worker 25) — text-fix: text-box-edge leading ex.
 * 100 recipes: loop-ai-b11-w25-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const PIN_LH = "h2-pin-line-height-from-live"
const STRETCH = "h2-flex-stretch-leaf-from-live"

/** @type {{ slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    "slug": "leading edge FO star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-both!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "leading edge FO star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-start!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "leading edge FO star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-end!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "leading edge FO star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:none!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "leading edge FO star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both-edges!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "leading edge FO star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "leading edge text chain + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-both!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "leading edge text chain + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-start!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "leading edge text chain + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-end!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "leading edge text chain + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:none!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "leading edge text chain + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both-edges!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "leading edge text chain + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "leading edge FO>div + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-both!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "leading edge FO>div + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-start!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "leading edge FO>div + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-end!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "leading edge FO>div + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:none!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "leading edge FO>div + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both-edges!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "leading edge FO>div + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "leading edge FO>div star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-both!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "leading edge FO>div star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-start!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "leading edge FO>div star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-end!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "leading edge FO>div star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:none!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "leading edge FO>div star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both-edges!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "leading edge FO>div star + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "leading edge FO anchors + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-both!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;text-box-trim:trim-both!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO anchors + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-start!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;text-box-trim:trim-start!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO anchors + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:trim-end!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;text-box-trim:trim-end!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO anchors + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + text-box-trim:none!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;text-box-trim:none!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO anchors + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both-edges!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;leading-trim:both-edges!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO anchors + trim stack",
    "idea": "text-box-edge:leading alphabetic!important + leading-trim:both!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;leading-trim:both!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge text chain + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:1!important;vertical-align:baseline!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge FO>div + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge FO>div star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge FO anchors + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;line-height:1!important;vertical-align:baseline!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:normal!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "leading edge text chain + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:normal!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "leading edge FO>div + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:normal!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "leading edge FO>div star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:normal!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "leading edge FO anchors + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:normal!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:from-font!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "leading edge text chain + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:from-font!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "leading edge FO>div + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:from-font!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "leading edge FO>div star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:from-font!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "leading edge FO anchors + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:from-font!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "leading edge FO star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:leading alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge text chain + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:leading alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge FO>div + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:leading alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge FO>div star + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:leading alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "leading edge FO anchors + line-height",
    "idea": "text-box-edge:leading alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:leading alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-both!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "ex edge FO star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-start!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "ex edge FO star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-end!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "ex edge FO star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:none!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "ex edge FO star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both-edges!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "ex edge FO star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both!important on FO star — edge model with trim keyword stack",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "ex edge text chain + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-both!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "ex edge text chain + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-start!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "ex edge text chain + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-end!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "ex edge text chain + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:none!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "ex edge text chain + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both-edges!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "ex edge text chain + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both!important on text chain — edge model with trim keyword stack",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "ex edge FO>div + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-both!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "ex edge FO>div + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-start!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "ex edge FO>div + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-end!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "ex edge FO>div + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:none!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "ex edge FO>div + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both-edges!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "ex edge FO>div + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both!important on FO>div — edge model with trim keyword stack",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "ex edge FO>div star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-both!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "ex edge FO>div star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-start!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;text-box-trim:trim-start!important}"
  },
  {
    "slug": "ex edge FO>div star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-end!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;text-box-trim:trim-end!important}"
  },
  {
    "slug": "ex edge FO>div star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:none!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;text-box-trim:none!important}"
  },
  {
    "slug": "ex edge FO>div star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both-edges!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "ex edge FO>div star + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both!important on FO>div star — edge model with trim keyword stack",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;leading-trim:both!important}"
  },
  {
    "slug": "ex edge FO anchors + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-both!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;text-box-trim:trim-both!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO anchors + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-start!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;text-box-trim:trim-start!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO anchors + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:trim-end!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;text-box-trim:trim-end!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO anchors + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + text-box-trim:none!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;text-box-trim:none!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO anchors + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both-edges!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;leading-trim:both-edges!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO anchors + trim stack",
    "idea": "text-box-edge:ex alphabetic!important + leading-trim:both!important on FO anchors — edge model with trim keyword stack",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;leading-trim:both!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge text chain + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:1!important;vertical-align:baseline!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge FO>div + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge FO>div star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge FO anchors + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:1!important;vertical-align:baseline!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;line-height:1!important;vertical-align:baseline!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:normal!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "ex edge text chain + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:normal!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "ex edge FO>div + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:normal!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "ex edge FO>div star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:normal!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;line-height:normal!important}"
  },
  {
    "slug": "ex edge FO anchors + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:normal!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:from-font!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "ex edge text chain + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:from-font!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "ex edge FO>div + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:from-font!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "ex edge FO>div star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:from-font!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;line-height:from-font!important}"
  },
  {
    "slug": "ex edge FO anchors + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:from-font!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "ex edge FO star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO star — edge metric with strut ratio",
    "css": "foreignObject *{text-box-edge:ex alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge text chain + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on text chain — edge metric with strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-edge:ex alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge FO>div + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO>div — edge metric with strut ratio",
    "css": "foreignObject>div{text-box-edge:ex alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge FO>div star + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO>div star — edge metric with strut ratio",
    "css": "foreignObject>div *{text-box-edge:ex alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "ex edge FO anchors + line-height",
    "idea": "text-box-edge:ex alphabetic!important + line-height:calc(1em)!important;vertical-align:baseline!important on FO anchors — edge metric with strut ratio",
    "css": "foreignObject a{text-box-edge:ex alphabetic!important;line-height:calc(1em)!important;vertical-align:baseline!important;display:inline-block!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w25-${n}`,
    label: `Loop AI b11 w25 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w25; text-box-edge leading ex; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w25: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

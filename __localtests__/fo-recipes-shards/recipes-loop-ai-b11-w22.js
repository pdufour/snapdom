/**
 * Loop AI batch-11 FO recipe shard (worker 22) — text-fix: text-box-trim trim-both.
 * 100 recipes: loop-ai-b11-w22-001..100
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
    "slug": "trim-both FO star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:cap alphabetic!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "trim-both FO star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:ex alphabetic!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "trim-both FO star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:leading alphabetic!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "trim-both FO star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:text alphabetic!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "trim-both FO star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:auto!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box-edge:auto!important}"
  },
  {
    "slug": "trim-both FO star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:normal!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box-edge:normal!important}"
  },
  {
    "slug": "trim-both FO star + text-edge",
    "idea": "text-box-trim:trim-both!important + text-edge:cap alphabetic!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "trim-both FO star + text-box",
    "idea": "text-box-trim:trim-both!important + text-box:trim-both cap alphabetic!important on FO star — line box trim vs edge pairing",
    "css": "foreignObject *{text-box-trim:trim-both!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "trim-both text chain + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:cap alphabetic!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "trim-both text chain + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:ex alphabetic!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "trim-both text chain + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:leading alphabetic!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "trim-both text chain + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:text alphabetic!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "trim-both text chain + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:auto!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box-edge:auto!important}"
  },
  {
    "slug": "trim-both text chain + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:normal!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box-edge:normal!important}"
  },
  {
    "slug": "trim-both text chain + text-edge",
    "idea": "text-box-trim:trim-both!important + text-edge:cap alphabetic!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "trim-both text chain + text-box",
    "idea": "text-box-trim:trim-both!important + text-box:trim-both cap alphabetic!important on text chain — line box trim vs edge pairing",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:cap alphabetic!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:ex alphabetic!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:leading alphabetic!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:text alphabetic!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:auto!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box-edge:auto!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:normal!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box-edge:normal!important}"
  },
  {
    "slug": "trim-both FO>div star + text-edge",
    "idea": "text-box-trim:trim-both!important + text-edge:cap alphabetic!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "trim-both FO>div star + text-box",
    "idea": "text-box-trim:trim-both!important + text-box:trim-both cap alphabetic!important on FO>div star — line box trim vs edge pairing",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:cap alphabetic!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:ex alphabetic!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:leading alphabetic!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:text alphabetic!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box-edge:text alphabetic!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:auto!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box-edge:auto!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:normal!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box-edge:normal!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-edge",
    "idea": "text-box-trim:trim-both!important + text-edge:cap alphabetic!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-edge:cap alphabetic!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + text-box",
    "idea": "text-box-trim:trim-both!important + text-box:trim-both cap alphabetic!important on FO anchors — line box trim vs edge pairing",
    "css": "foreignObject a{text-box-trim:trim-both!important;text-box:trim-both cap alphabetic!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:cap alphabetic!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:ex alphabetic!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:leading alphabetic!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:text alphabetic!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box-edge:text alphabetic!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:auto!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box-edge:auto!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-box-edge",
    "idea": "text-box-trim:trim-both!important + text-box-edge:normal!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box-edge:normal!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-edge",
    "idea": "text-box-trim:trim-both!important + text-edge:cap alphabetic!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-edge:cap alphabetic!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO span + text-box",
    "idea": "text-box-trim:trim-both!important + text-box:trim-both cap alphabetic!important on FO span — line box trim vs edge pairing",
    "css": "foreignObject span{text-box-trim:trim-both!important;text-box:trim-both cap alphabetic!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:1!important;vertical-align:baseline!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:1!important;vertical-align:baseline!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:1!important;vertical-align:baseline!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:1!important;vertical-align:baseline!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:1!important;vertical-align:baseline!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:1!important;vertical-align:baseline!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:both!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:1!important;vertical-align:baseline!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:both!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:1!important;vertical-align:baseline!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:both!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:1!important;vertical-align:baseline!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:both!important;line-height:1!important;vertical-align:baseline!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:1!important;vertical-align:baseline!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:both!important;line-height:1!important;vertical-align:baseline!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:1!important;vertical-align:baseline!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:1!important;vertical-align:baseline!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:1!important;vertical-align:baseline!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:1!important;vertical-align:baseline!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:1!important;vertical-align:baseline!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:1!important;vertical-align:baseline!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:1!important;vertical-align:baseline!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:1!important;vertical-align:baseline!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:none!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:1!important;vertical-align:baseline!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:none!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:1!important;vertical-align:baseline!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:none!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:1!important;vertical-align:baseline!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:none!important;line-height:1!important;vertical-align:baseline!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:1!important;vertical-align:baseline!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:none!important;line-height:1!important;vertical-align:baseline!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:normal!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:normal!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:normal!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:normal!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:normal!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:normal!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:normal!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:normal!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:both!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:normal!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:both!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:normal!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:both!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:normal!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:both!important;line-height:normal!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:normal!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:both!important;line-height:normal!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:normal!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:normal!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:normal!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:normal!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:normal!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:normal!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:normal!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:normal!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:none!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:normal!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:none!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:normal!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:none!important;line-height:normal!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:normal!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:none!important;line-height:normal!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:normal!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:none!important;line-height:normal!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:from-font!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:from-font!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:from-font!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:from-font!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:from-font!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both-edges!important + line-height:from-font!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:both-edges!important;line-height:from-font!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:from-font!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:both!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:from-font!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:both!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:from-font!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:both!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:from-font!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:both!important;line-height:from-font!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:both!important + line-height:from-font!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:both!important;line-height:from-font!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:from-font!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:from-font!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:from-font!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:from-font!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:from-font!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:normal!important + line-height:from-font!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:normal!important;line-height:from-font!important;display:inline!important}"
  },
  {
    "slug": "trim-both FO star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:from-font!important stack on FO star",
    "css": "foreignObject *{text-box-trim:trim-both!important;leading-trim:none!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both text chain + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:from-font!important stack on text chain",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-box-trim:trim-both!important;leading-trim:none!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO>div star + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:from-font!important stack on FO>div star",
    "css": "foreignObject>div *{text-box-trim:trim-both!important;leading-trim:none!important;line-height:from-font!important}"
  },
  {
    "slug": "trim-both FO anchors + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:from-font!important stack on FO anchors",
    "css": "foreignObject a{text-box-trim:trim-both!important;leading-trim:none!important;line-height:from-font!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "trim-both FO span + leading-trim + lh",
    "idea": "text-box-trim:trim-both!important + leading-trim:none!important + line-height:from-font!important stack on FO span",
    "css": "foreignObject span{text-box-trim:trim-both!important;leading-trim:none!important;line-height:from-font!important;display:inline!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w22-${n}`,
    label: `Loop AI b11 w22 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w22; text-box-trim trim-both; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w22: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

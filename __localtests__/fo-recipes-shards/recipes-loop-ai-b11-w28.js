/**
 * Loop AI batch-11 FO recipe shard (worker 28) — text-fix: line-height calc(1em) variants.
 * 100 recipes: loop-ai-b11-w28-001..100
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
    "slug": "calc(1em) FO star",
    "idea": "line-height:calc(1em) on FO star — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em) FO star + trim",
    "idea": "line-height:calc(1em) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em) FO star + trim",
    "idea": "line-height:calc(1em) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em) FO star + trim",
    "idea": "line-height:calc(1em) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em) FO>div",
    "idea": "line-height:calc(1em) on FO>div — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em) FO>div + trim",
    "idea": "line-height:calc(1em) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em) FO>div + trim",
    "idea": "line-height:calc(1em) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em) FO>div + trim",
    "idea": "line-height:calc(1em) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em) FO>div star",
    "idea": "line-height:calc(1em) on FO>div star — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em) FO>div star + trim",
    "idea": "line-height:calc(1em) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em) FO>div star + trim",
    "idea": "line-height:calc(1em) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em) FO>div star + trim",
    "idea": "line-height:calc(1em) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em) text chain",
    "idea": "line-height:calc(1em) on text chain — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em) text chain + trim",
    "idea": "line-height:calc(1em) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em) text chain + trim",
    "idea": "line-height:calc(1em) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em) text chain + trim",
    "idea": "line-height:calc(1em) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em) FO span",
    "idea": "line-height:calc(1em) on FO span — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em) FO span + trim",
    "idea": "line-height:calc(1em) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em) FO span + trim",
    "idea": "line-height:calc(1em) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em) FO span + trim",
    "idea": "line-height:calc(1em) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO star",
    "idea": "line-height:calc(1em + 0px) on FO star — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO star + trim",
    "idea": "line-height:calc(1em + 0px) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0px) FO star + trim",
    "idea": "line-height:calc(1em + 0px) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0px) FO star + trim",
    "idea": "line-height:calc(1em + 0px) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div",
    "idea": "line-height:calc(1em + 0px) on FO>div — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0px)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div + trim",
    "idea": "line-height:calc(1em + 0px) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div + trim",
    "idea": "line-height:calc(1em + 0px) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div + trim",
    "idea": "line-height:calc(1em + 0px) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div star",
    "idea": "line-height:calc(1em + 0px) on FO>div star — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div star + trim",
    "idea": "line-height:calc(1em + 0px) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div star + trim",
    "idea": "line-height:calc(1em + 0px) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0px) FO>div star + trim",
    "idea": "line-height:calc(1em + 0px) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0px) text chain",
    "idea": "line-height:calc(1em + 0px) on text chain — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0px)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0px) text chain + trim",
    "idea": "line-height:calc(1em + 0px) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0px) text chain + trim",
    "idea": "line-height:calc(1em + 0px) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0px) text chain + trim",
    "idea": "line-height:calc(1em + 0px) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0px)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0px) FO span",
    "idea": "line-height:calc(1em + 0px) on FO span — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0px)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO span + trim",
    "idea": "line-height:calc(1em + 0px) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0px)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO span + trim",
    "idea": "line-height:calc(1em + 0px) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0px)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0px) FO span + trim",
    "idea": "line-height:calc(1em + 0px) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0px)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO star",
    "idea": "line-height:calc(1em + 0lh) on FO star — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO star + trim",
    "idea": "line-height:calc(1em + 0lh) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO star + trim",
    "idea": "line-height:calc(1em + 0lh) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO star + trim",
    "idea": "line-height:calc(1em + 0lh) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div",
    "idea": "line-height:calc(1em + 0lh) on FO>div — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div + trim",
    "idea": "line-height:calc(1em + 0lh) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div + trim",
    "idea": "line-height:calc(1em + 0lh) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div + trim",
    "idea": "line-height:calc(1em + 0lh) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div star",
    "idea": "line-height:calc(1em + 0lh) on FO>div star — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div star + trim",
    "idea": "line-height:calc(1em + 0lh) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div star + trim",
    "idea": "line-height:calc(1em + 0lh) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO>div star + trim",
    "idea": "line-height:calc(1em + 0lh) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0lh) text chain",
    "idea": "line-height:calc(1em + 0lh) on text chain — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em + 0lh) text chain + trim",
    "idea": "line-height:calc(1em + 0lh) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em + 0lh) text chain + trim",
    "idea": "line-height:calc(1em + 0lh) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em + 0lh) text chain + trim",
    "idea": "line-height:calc(1em + 0lh) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO span",
    "idea": "line-height:calc(1em + 0lh) on FO span — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO span + trim",
    "idea": "line-height:calc(1em + 0lh) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO span + trim",
    "idea": "line-height:calc(1em + 0lh) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em + 0lh) FO span + trim",
    "idea": "line-height:calc(1em + 0lh) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em + 0lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em * 1) FO star",
    "idea": "line-height:calc(1em * 1) on FO star — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em * 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em * 1) FO star + trim",
    "idea": "line-height:calc(1em * 1) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em * 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em * 1) FO star + trim",
    "idea": "line-height:calc(1em * 1) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em * 1) FO star + trim",
    "idea": "line-height:calc(1em * 1) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div",
    "idea": "line-height:calc(1em * 1) on FO>div — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em * 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div + trim",
    "idea": "line-height:calc(1em * 1) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em * 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div + trim",
    "idea": "line-height:calc(1em * 1) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div + trim",
    "idea": "line-height:calc(1em * 1) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div star",
    "idea": "line-height:calc(1em * 1) on FO>div star — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em * 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div star + trim",
    "idea": "line-height:calc(1em * 1) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em * 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div star + trim",
    "idea": "line-height:calc(1em * 1) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em * 1) FO>div star + trim",
    "idea": "line-height:calc(1em * 1) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em * 1) text chain",
    "idea": "line-height:calc(1em * 1) on text chain — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em * 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em * 1) text chain + trim",
    "idea": "line-height:calc(1em * 1) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em * 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em * 1) text chain + trim",
    "idea": "line-height:calc(1em * 1) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em * 1) text chain + trim",
    "idea": "line-height:calc(1em * 1) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em * 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em * 1) FO span",
    "idea": "line-height:calc(1em * 1) on FO span — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em * 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em * 1) FO span + trim",
    "idea": "line-height:calc(1em * 1) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em * 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em * 1) FO span + trim",
    "idea": "line-height:calc(1em * 1) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em * 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em * 1) FO span + trim",
    "idea": "line-height:calc(1em * 1) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em * 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em / 1) FO star",
    "idea": "line-height:calc(1em / 1) on FO star — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em / 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em / 1) FO star + trim",
    "idea": "line-height:calc(1em / 1) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em / 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em / 1) FO star + trim",
    "idea": "line-height:calc(1em / 1) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em / 1) FO star + trim",
    "idea": "line-height:calc(1em / 1) on FO star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject *{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div",
    "idea": "line-height:calc(1em / 1) on FO>div — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em / 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div + trim",
    "idea": "line-height:calc(1em / 1) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em / 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div + trim",
    "idea": "line-height:calc(1em / 1) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div + trim",
    "idea": "line-height:calc(1em / 1) on FO>div with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div star",
    "idea": "line-height:calc(1em / 1) on FO>div star — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em / 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div star + trim",
    "idea": "line-height:calc(1em / 1) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em / 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div star + trim",
    "idea": "line-height:calc(1em / 1) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em / 1) FO>div star + trim",
    "idea": "line-height:calc(1em / 1) on FO>div star with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject>div *{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em / 1) text chain",
    "idea": "line-height:calc(1em / 1) on text chain — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em / 1)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1em / 1) text chain + trim",
    "idea": "line-height:calc(1em / 1) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em / 1)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1em / 1) text chain + trim",
    "idea": "line-height:calc(1em / 1) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1em / 1) text chain + trim",
    "idea": "line-height:calc(1em / 1) on text chain with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em / 1)!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "calc(1em / 1) FO span",
    "idea": "line-height:calc(1em / 1) on FO span — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em / 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em / 1) FO span + trim",
    "idea": "line-height:calc(1em / 1) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em / 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em / 1) FO span + trim",
    "idea": "line-height:calc(1em / 1) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em / 1)!important;display:inline!important}"
  },
  {
    "slug": "calc(1em / 1) FO span + trim",
    "idea": "line-height:calc(1em / 1) on FO span with trim/edge stack — calc(1em) variant probe",
    "css": "foreignObject span{line-height:calc(1em / 1)!important;display:inline!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w28-${n}`,
    label: `Loop AI b11 w28 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w28; line-height calc(1em) variants; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w28: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-11 FO recipe shard (worker 29) — text-fix: line-height lh unit 1lh-1.5lh.
 * 100 recipes: loop-ai-b11-w29-001..100
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
    "slug": "1lh FO star",
    "idea": "line-height:1lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1lh FO star stack",
    "idea": "line-height:1lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1lh FO star stack",
    "idea": "line-height:1lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1lh FO>div star",
    "idea": "line-height:1lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1lh FO>div star stack",
    "idea": "line-height:1lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1lh FO>div star stack",
    "idea": "line-height:1lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1lh text chain",
    "idea": "line-height:1lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1lh text chain stack",
    "idea": "line-height:1lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1lh text chain stack",
    "idea": "line-height:1lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1lh FO anchors",
    "idea": "line-height:1lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1lh FO anchors stack",
    "idea": "line-height:1lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1lh FO anchors stack",
    "idea": "line-height:1lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1lh FO span",
    "idea": "line-height:1lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1lh!important;display:inline!important}"
  },
  {
    "slug": "1lh FO span stack",
    "idea": "line-height:1lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1lh!important;display:inline!important}"
  },
  {
    "slug": "1lh FO span stack",
    "idea": "line-height:1lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1lh!important;display:inline!important}"
  },
  {
    "slug": "1.15lh FO star",
    "idea": "line-height:1.15lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.15lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.15lh FO star stack",
    "idea": "line-height:1.15lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.15lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.15lh FO star stack",
    "idea": "line-height:1.15lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.15lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.15lh FO>div star",
    "idea": "line-height:1.15lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.15lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.15lh FO>div star stack",
    "idea": "line-height:1.15lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.15lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.15lh FO>div star stack",
    "idea": "line-height:1.15lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.15lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.15lh text chain",
    "idea": "line-height:1.15lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.15lh text chain stack",
    "idea": "line-height:1.15lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.15lh text chain stack",
    "idea": "line-height:1.15lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.15lh FO anchors",
    "idea": "line-height:1.15lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.15lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.15lh FO anchors stack",
    "idea": "line-height:1.15lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.15lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.15lh FO anchors stack",
    "idea": "line-height:1.15lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.15lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.15lh FO span",
    "idea": "line-height:1.15lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.15lh!important;display:inline!important}"
  },
  {
    "slug": "1.15lh FO span stack",
    "idea": "line-height:1.15lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.15lh!important;display:inline!important}"
  },
  {
    "slug": "1.15lh FO span stack",
    "idea": "line-height:1.15lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.15lh!important;display:inline!important}"
  },
  {
    "slug": "1.2lh FO star",
    "idea": "line-height:1.2lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.2lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.2lh FO star stack",
    "idea": "line-height:1.2lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.2lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.2lh FO star stack",
    "idea": "line-height:1.2lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.2lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.2lh FO>div star",
    "idea": "line-height:1.2lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.2lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.2lh FO>div star stack",
    "idea": "line-height:1.2lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.2lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.2lh FO>div star stack",
    "idea": "line-height:1.2lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.2lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.2lh text chain",
    "idea": "line-height:1.2lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.2lh text chain stack",
    "idea": "line-height:1.2lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.2lh text chain stack",
    "idea": "line-height:1.2lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.2lh FO anchors",
    "idea": "line-height:1.2lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.2lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.2lh FO anchors stack",
    "idea": "line-height:1.2lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.2lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.2lh FO anchors stack",
    "idea": "line-height:1.2lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.2lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.2lh FO span",
    "idea": "line-height:1.2lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.2lh!important;display:inline!important}"
  },
  {
    "slug": "1.2lh FO span stack",
    "idea": "line-height:1.2lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.2lh!important;display:inline!important}"
  },
  {
    "slug": "1.2lh FO span stack",
    "idea": "line-height:1.2lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.2lh!important;display:inline!important}"
  },
  {
    "slug": "1.5lh FO star",
    "idea": "line-height:1.5lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.5lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.5lh FO star stack",
    "idea": "line-height:1.5lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.5lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.5lh FO star stack",
    "idea": "line-height:1.5lh on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:1.5lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.5lh FO>div star",
    "idea": "line-height:1.5lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.5lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.5lh FO>div star stack",
    "idea": "line-height:1.5lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.5lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.5lh FO>div star stack",
    "idea": "line-height:1.5lh on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:1.5lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.5lh text chain",
    "idea": "line-height:1.5lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.5lh!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.5lh text chain stack",
    "idea": "line-height:1.5lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.5lh!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "1.5lh text chain stack",
    "idea": "line-height:1.5lh on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.5lh!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "1.5lh FO anchors",
    "idea": "line-height:1.5lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.5lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.5lh FO anchors stack",
    "idea": "line-height:1.5lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.5lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.5lh FO anchors stack",
    "idea": "line-height:1.5lh on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:1.5lh!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "1.5lh FO span",
    "idea": "line-height:1.5lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.5lh!important;display:inline!important}"
  },
  {
    "slug": "1.5lh FO span stack",
    "idea": "line-height:1.5lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.5lh!important;display:inline!important}"
  },
  {
    "slug": "1.5lh FO span stack",
    "idea": "line-height:1.5lh on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:1.5lh!important;display:inline!important}"
  },
  {
    "slug": "calc(1lh) FO star",
    "idea": "line-height:calc(1lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1lh) FO star stack",
    "idea": "line-height:calc(1lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1lh) FO star stack",
    "idea": "line-height:calc(1lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1lh) FO>div star",
    "idea": "line-height:calc(1lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1lh) FO>div star stack",
    "idea": "line-height:calc(1lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1lh) FO>div star stack",
    "idea": "line-height:calc(1lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1lh) text chain",
    "idea": "line-height:calc(1lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1lh) text chain stack",
    "idea": "line-height:calc(1lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1lh) text chain stack",
    "idea": "line-height:calc(1lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1lh) FO anchors",
    "idea": "line-height:calc(1lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1lh) FO anchors stack",
    "idea": "line-height:calc(1lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1lh) FO anchors stack",
    "idea": "line-height:calc(1lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1lh) FO span",
    "idea": "line-height:calc(1lh) on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:calc(1lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1lh) FO span stack",
    "idea": "line-height:calc(1lh) on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:calc(1lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1lh) FO span stack",
    "idea": "line-height:calc(1lh) on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:calc(1lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1.2lh) FO star",
    "idea": "line-height:calc(1.2lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1.2lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.2lh) FO star stack",
    "idea": "line-height:calc(1.2lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1.2lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1.2lh) FO star stack",
    "idea": "line-height:calc(1.2lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1.2lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1.2lh) FO>div star",
    "idea": "line-height:calc(1.2lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1.2lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.2lh) FO>div star stack",
    "idea": "line-height:calc(1.2lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1.2lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1.2lh) FO>div star stack",
    "idea": "line-height:calc(1.2lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1.2lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1.2lh) text chain",
    "idea": "line-height:calc(1.2lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1.2lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.2lh) text chain stack",
    "idea": "line-height:calc(1.2lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1.2lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1.2lh) text chain stack",
    "idea": "line-height:calc(1.2lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1.2lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1.2lh) FO anchors",
    "idea": "line-height:calc(1.2lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1.2lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.2lh) FO anchors stack",
    "idea": "line-height:calc(1.2lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1.2lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.2lh) FO anchors stack",
    "idea": "line-height:calc(1.2lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1.2lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.2lh) FO span",
    "idea": "line-height:calc(1.2lh) on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:calc(1.2lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1.2lh) FO span stack",
    "idea": "line-height:calc(1.2lh) on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:calc(1.2lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1.2lh) FO span stack",
    "idea": "line-height:calc(1.2lh) on FO span — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject span{line-height:calc(1.2lh)!important;display:inline!important}"
  },
  {
    "slug": "calc(1.5lh) FO star",
    "idea": "line-height:calc(1.5lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1.5lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.5lh) FO star stack",
    "idea": "line-height:calc(1.5lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1.5lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1.5lh) FO star stack",
    "idea": "line-height:calc(1.5lh) on FO star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject *{line-height:calc(1.5lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1.5lh) FO>div star",
    "idea": "line-height:calc(1.5lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1.5lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.5lh) FO>div star stack",
    "idea": "line-height:calc(1.5lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1.5lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1.5lh) FO>div star stack",
    "idea": "line-height:calc(1.5lh) on FO>div star — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject>div *{line-height:calc(1.5lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1.5lh) text chain",
    "idea": "line-height:calc(1.5lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1.5lh)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "calc(1.5lh) text chain stack",
    "idea": "line-height:calc(1.5lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1.5lh)!important;vertical-align:baseline!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "calc(1.5lh) text chain stack",
    "idea": "line-height:calc(1.5lh) on text chain — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1.5lh)!important;vertical-align:baseline!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "calc(1.5lh) FO anchors",
    "idea": "line-height:calc(1.5lh) on FO anchors — CSS lh unit strut 1lh–1.5lh probe",
    "css": "foreignObject a{line-height:calc(1.5lh)!important;display:inline-block!important;vertical-align:baseline!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w29-${n}`,
    label: `Loop AI b11 w29 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w29; line-height lh unit 1lh-1.5lh; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w29: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

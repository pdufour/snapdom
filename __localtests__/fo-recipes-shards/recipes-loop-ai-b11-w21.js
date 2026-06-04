/**
 * Loop AI batch-11 FO recipe shard (worker 21) — text-fix: leading-trim both-edges.
 * 100 recipes: loop-ai-b11-w21-001..100
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
    "slug": "both-edges FO star + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO star + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO star + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges text chain + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges text chain + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges text chain + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges text chain + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges text chain + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges text chain + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges text chain + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges text chain + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO>div + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO>div + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject>div{leading-trim:both-edges!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div star + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div star + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div star + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div star + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div star + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO>div star + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO>div star + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO>div star + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject>div *{leading-trim:both-edges!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO anchors + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO anchors + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO anchors + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO anchors + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO anchors + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO anchors + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO anchors + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO anchors + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO span + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO span + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO span + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO span + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO span + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO span + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO span + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO span + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO nav a + cap alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + cap alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO nav a + ex alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + ex alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:ex alphabetic!important}"
  },
  {
    "slug": "both-edges FO nav a + leading alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + leading alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:leading alphabetic!important}"
  },
  {
    "slug": "both-edges FO nav a + text alphabetic",
    "idea": "leading-trim:both-edges on FO text leaves + text alphabetic pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:text alphabetic!important}"
  },
  {
    "slug": "both-edges FO nav a + edge auto",
    "idea": "leading-trim:both-edges on FO text leaves + edge auto pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:auto!important}"
  },
  {
    "slug": "both-edges FO nav a + edge normal",
    "idea": "leading-trim:both-edges on FO text leaves + edge normal pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box-edge:normal!important}"
  },
  {
    "slug": "both-edges FO nav a + text-edge cap",
    "idea": "leading-trim:both-edges on FO text leaves + text-edge cap pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-edge:cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO nav a + text-box shorthand",
    "idea": "leading-trim:both-edges on FO text leaves + text-box shorthand pairing — half-leading trim vs edge model",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;text-box:trim-both cap alphabetic!important}"
  },
  {
    "slug": "both-edges FO star + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges text chain + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO>div + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject>div{leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO>div star + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject>div *{leading-trim:both-edges!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO anchors + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO span + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO nav a + lh 1",
    "idea": "leading-trim:both-edges + lh 1 on same selector — trim keyword vs strut ratio",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "both-edges FO star + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO star + trim-both + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-both!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO star + trim-start + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-start!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO star + trim-end + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject *{leading-trim:both-edges!important;text-box-trim:trim-end!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges text chain + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO>div + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject>div{leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO>div star + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject>div *{leading-trim:both-edges!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO anchors + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO span + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject span{leading-trim:both-edges!important;display:inline!important;line-height:normal!important}"
  },
  {
    "slug": "both-edges FO nav a + lh normal",
    "idea": "leading-trim:both-edges + lh normal on same selector — trim keyword vs strut ratio",
    "css": "foreignObject nav a{leading-trim:both-edges!important;display:inline-block!important;vertical-align:baseline!important;line-height:normal!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w21-${n}`,
    label: `Loop AI b11 w21 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w21; leading-trim both-edges; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w21: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

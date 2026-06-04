/**
 * Loop AI batch-11 FO recipe shard (worker 26) — text-fix: line-height unitless 1 matrix.
 * 100 recipes: loop-ai-b11-w26-001..100
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
    "slug": "lh-1 FO star + baseline",
    "idea": "line-height:1 unitless on FO star with baseline — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 FO star + middle",
    "idea": "line-height:1 unitless on FO star with middle — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 FO star + trim both-edges",
    "idea": "line-height:1 unitless on FO star with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 FO star + trim-both",
    "idea": "line-height:1 unitless on FO star with trim-both — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 FO star + cap edge",
    "idea": "line-height:1 unitless on FO star with cap edge — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 FO star + FO>div from-font",
    "idea": "line-height:1 on FO star + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject *{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO star + normal reset",
    "idea": "line-height:1 unitless on FO star with normal reset — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 FO star + unset",
    "idea": "line-height:1 unitless on FO star with unset — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 FO star + calc 1em mix",
    "idea": "line-height:1 unitless on FO star with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 FO star + kerning",
    "idea": "line-height:1 unitless on FO star with kerning — unitless strut matrix cell",
    "css": "foreignObject *{line-height:1!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh-1 FO>div + baseline",
    "idea": "line-height:1 unitless on FO>div with baseline — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 FO>div + middle",
    "idea": "line-height:1 unitless on FO>div with middle — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 FO>div + trim both-edges",
    "idea": "line-height:1 unitless on FO>div with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 FO>div + trim-both",
    "idea": "line-height:1 unitless on FO>div with trim-both — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 FO>div + cap edge",
    "idea": "line-height:1 unitless on FO>div with cap edge — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 FO>div + FO>div from-font",
    "idea": "line-height:1 on FO>div + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject>div{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO>div + normal reset",
    "idea": "line-height:1 unitless on FO>div with normal reset — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 FO>div + unset",
    "idea": "line-height:1 unitless on FO>div with unset — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 FO>div + calc 1em mix",
    "idea": "line-height:1 unitless on FO>div with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 FO>div + kerning",
    "idea": "line-height:1 unitless on FO>div with kerning — unitless strut matrix cell",
    "css": "foreignObject>div{line-height:1!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh-1 FO>div star + baseline",
    "idea": "line-height:1 unitless on FO>div star with baseline — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 FO>div star + middle",
    "idea": "line-height:1 unitless on FO>div star with middle — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 FO>div star + trim both-edges",
    "idea": "line-height:1 unitless on FO>div star with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 FO>div star + trim-both",
    "idea": "line-height:1 unitless on FO>div star with trim-both — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 FO>div star + cap edge",
    "idea": "line-height:1 unitless on FO>div star with cap edge — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 FO>div star + FO>div from-font",
    "idea": "line-height:1 on FO>div star + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject>div *{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO>div star + normal reset",
    "idea": "line-height:1 unitless on FO>div star with normal reset — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 FO>div star + unset",
    "idea": "line-height:1 unitless on FO>div star with unset — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 FO>div star + calc 1em mix",
    "idea": "line-height:1 unitless on FO>div star with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 FO>div star + kerning",
    "idea": "line-height:1 unitless on FO>div star with kerning — unitless strut matrix cell",
    "css": "foreignObject>div *{line-height:1!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh-1 text chain + baseline",
    "idea": "line-height:1 unitless on text chain with baseline — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 text chain + middle",
    "idea": "line-height:1 unitless on text chain with middle — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 text chain + trim both-edges",
    "idea": "line-height:1 unitless on text chain with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 text chain + trim-both",
    "idea": "line-height:1 unitless on text chain with trim-both — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 text chain + cap edge",
    "idea": "line-height:1 unitless on text chain with cap edge — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 text chain + FO>div from-font",
    "idea": "line-height:1 on text chain + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 text chain + normal reset",
    "idea": "line-height:1 unitless on text chain with normal reset — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 text chain + unset",
    "idea": "line-height:1 unitless on text chain with unset — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 text chain + calc 1em mix",
    "idea": "line-height:1 unitless on text chain with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 text chain + kerning",
    "idea": "line-height:1 unitless on text chain with kerning — unitless strut matrix cell",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh-1 FO anchors + baseline",
    "idea": "line-height:1 unitless on FO anchors with baseline — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;vertical-align:baseline!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + middle",
    "idea": "line-height:1 unitless on FO anchors with middle — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;vertical-align:middle!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + trim both-edges",
    "idea": "line-height:1 unitless on FO anchors with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;leading-trim:both-edges!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + trim-both",
    "idea": "line-height:1 unitless on FO anchors with trim-both — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;text-box-trim:trim-both!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + cap edge",
    "idea": "line-height:1 unitless on FO anchors with cap edge — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;text-box-edge:cap alphabetic!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + FO>div from-font",
    "idea": "line-height:1 on FO anchors + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject a{line-height:1!important;;display:inline-block!important}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO anchors + normal reset",
    "idea": "line-height:1 unitless on FO anchors with normal reset — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;line-height:normal!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + unset",
    "idea": "line-height:1 unitless on FO anchors with unset — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;line-height:unset!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + calc 1em mix",
    "idea": "line-height:1 unitless on FO anchors with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;line-height:calc(1em)!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO anchors + kerning",
    "idea": "line-height:1 unitless on FO anchors with kerning — unitless strut matrix cell",
    "css": "foreignObject a{line-height:1!important;font-kerning:normal!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO span + baseline",
    "idea": "line-height:1 unitless on FO span with baseline — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;vertical-align:baseline!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + middle",
    "idea": "line-height:1 unitless on FO span with middle — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;vertical-align:middle!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + trim both-edges",
    "idea": "line-height:1 unitless on FO span with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;leading-trim:both-edges!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + trim-both",
    "idea": "line-height:1 unitless on FO span with trim-both — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;text-box-trim:trim-both!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + cap edge",
    "idea": "line-height:1 unitless on FO span with cap edge — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;text-box-edge:cap alphabetic!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + FO>div from-font",
    "idea": "line-height:1 on FO span + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject span{line-height:1!important;;display:inline!important}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO span + normal reset",
    "idea": "line-height:1 unitless on FO span with normal reset — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;line-height:normal!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + unset",
    "idea": "line-height:1 unitless on FO span with unset — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;line-height:unset!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + calc 1em mix",
    "idea": "line-height:1 unitless on FO span with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;line-height:calc(1em)!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO span + kerning",
    "idea": "line-height:1 unitless on FO span with kerning — unitless strut matrix cell",
    "css": "foreignObject span{line-height:1!important;font-kerning:normal!important;;display:inline!important}"
  },
  {
    "slug": "lh-1 FO label + baseline",
    "idea": "line-height:1 unitless on FO label with baseline — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 FO label + middle",
    "idea": "line-height:1 unitless on FO label with middle — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 FO label + trim both-edges",
    "idea": "line-height:1 unitless on FO label with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 FO label + trim-both",
    "idea": "line-height:1 unitless on FO label with trim-both — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 FO label + cap edge",
    "idea": "line-height:1 unitless on FO label with cap edge — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 FO label + FO>div from-font",
    "idea": "line-height:1 on FO label + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject label{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO label + normal reset",
    "idea": "line-height:1 unitless on FO label with normal reset — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 FO label + unset",
    "idea": "line-height:1 unitless on FO label with unset — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 FO label + calc 1em mix",
    "idea": "line-height:1 unitless on FO label with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 FO label + kerning",
    "idea": "line-height:1 unitless on FO label with kerning — unitless strut matrix cell",
    "css": "foreignObject label{line-height:1!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh-1 FO nav a + baseline",
    "idea": "line-height:1 unitless on FO nav a with baseline — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;vertical-align:baseline!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + middle",
    "idea": "line-height:1 unitless on FO nav a with middle — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;vertical-align:middle!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + trim both-edges",
    "idea": "line-height:1 unitless on FO nav a with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;leading-trim:both-edges!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + trim-both",
    "idea": "line-height:1 unitless on FO nav a with trim-both — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;text-box-trim:trim-both!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + cap edge",
    "idea": "line-height:1 unitless on FO nav a with cap edge — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;text-box-edge:cap alphabetic!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + FO>div from-font",
    "idea": "line-height:1 on FO nav a + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject nav a{line-height:1!important;;display:inline-block!important}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO nav a + normal reset",
    "idea": "line-height:1 unitless on FO nav a with normal reset — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;line-height:normal!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + unset",
    "idea": "line-height:1 unitless on FO nav a with unset — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;line-height:unset!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + calc 1em mix",
    "idea": "line-height:1 unitless on FO nav a with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;line-height:calc(1em)!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO nav a + kerning",
    "idea": "line-height:1 unitless on FO nav a with kerning — unitless strut matrix cell",
    "css": "foreignObject nav a{line-height:1!important;font-kerning:normal!important;;display:inline-block!important}"
  },
  {
    "slug": "lh-1 FO h2 + baseline",
    "idea": "line-height:1 unitless on FO h2 with baseline — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 FO h2 + middle",
    "idea": "line-height:1 unitless on FO h2 with middle — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 FO h2 + trim both-edges",
    "idea": "line-height:1 unitless on FO h2 with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 FO h2 + trim-both",
    "idea": "line-height:1 unitless on FO h2 with trim-both — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 FO h2 + cap edge",
    "idea": "line-height:1 unitless on FO h2 with cap edge — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 FO h2 + FO>div from-font",
    "idea": "line-height:1 on FO h2 + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject h2{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO h2 + normal reset",
    "idea": "line-height:1 unitless on FO h2 with normal reset — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 FO h2 + unset",
    "idea": "line-height:1 unitless on FO h2 with unset — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 FO h2 + calc 1em mix",
    "idea": "line-height:1 unitless on FO h2 with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 FO h2 + kerning",
    "idea": "line-height:1 unitless on FO h2 with kerning — unitless strut matrix cell",
    "css": "foreignObject h2{line-height:1!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh-1 FO button + baseline",
    "idea": "line-height:1 unitless on FO button with baseline — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh-1 FO button + middle",
    "idea": "line-height:1 unitless on FO button with middle — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;vertical-align:middle!important}"
  },
  {
    "slug": "lh-1 FO button + trim both-edges",
    "idea": "line-height:1 unitless on FO button with trim both-edges — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh-1 FO button + trim-both",
    "idea": "line-height:1 unitless on FO button with trim-both — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh-1 FO button + cap edge",
    "idea": "line-height:1 unitless on FO button with cap edge — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh-1 FO button + FO>div from-font",
    "idea": "line-height:1 on FO button + line-height:from-font on FO>div wrapper — wrapper font-metrics vs unitless leaf",
    "css": "foreignObject button{line-height:1!important;}foreignObject>div{line-height:from-font!important}"
  },
  {
    "slug": "lh-1 FO button + normal reset",
    "idea": "line-height:1 unitless on FO button with normal reset — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;line-height:normal!important}"
  },
  {
    "slug": "lh-1 FO button + unset",
    "idea": "line-height:1 unitless on FO button with unset — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;line-height:unset!important}"
  },
  {
    "slug": "lh-1 FO button + calc 1em mix",
    "idea": "line-height:1 unitless on FO button with calc 1em mix — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;line-height:calc(1em)!important}"
  },
  {
    "slug": "lh-1 FO button + kerning",
    "idea": "line-height:1 unitless on FO button with kerning — unitless strut matrix cell",
    "css": "foreignObject button{line-height:1!important;font-kerning:normal!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w26-${n}`,
    label: `Loop AI b11 w26 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w26; line-height unitless 1 matrix; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w26: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

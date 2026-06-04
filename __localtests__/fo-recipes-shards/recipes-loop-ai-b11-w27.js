/**
 * Loop AI batch-11 FO recipe shard (worker 27) — text-fix: line-height 1.2/1.15 grid.
 * 100 recipes: loop-ai-b11-w27-001..100
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
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + display — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;display:inline!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.2 FO star grid cell",
    "idea": "line-height:1.2 unitless on FO star + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.2!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + display — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;display:inline!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.2 FO>div grid cell",
    "idea": "line-height:1.2 unitless on FO>div + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.2!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + display — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;display:inline!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.2 FO>div star grid cell",
    "idea": "line-height:1.2 unitless on FO>div star + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.2!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + display — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;display:inline!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.2 text chain grid cell",
    "idea": "line-height:1.2 unitless on text chain + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.2!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;vertical-align:baseline!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;leading-trim:both-edges!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;text-box-trim:trim-both!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;text-box-edge:cap alphabetic!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;font-kerning:normal!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + display — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;display:inline!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;align-self:flex-start!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;min-height:0!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.2 FO anchors grid cell",
    "idea": "line-height:1.2 unitless on FO anchors + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.2!important;box-sizing:border-box!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + display — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;display:inline!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.15 FO star grid cell",
    "idea": "line-height:1.15 unitless on FO star + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject *{line-height:1.15!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + display — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;display:inline!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.15 FO>div grid cell",
    "idea": "line-height:1.15 unitless on FO>div + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject>div{line-height:1.15!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + display — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;display:inline!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.15 FO>div star grid cell",
    "idea": "line-height:1.15 unitless on FO>div star + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject>div *{line-height:1.15!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;vertical-align:baseline!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;leading-trim:both-edges!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;text-box-trim:trim-both!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;text-box-edge:cap alphabetic!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;line-height:from-font!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;font-kerning:normal!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + display — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;display:inline!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;align-self:flex-start!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;min-height:0!important}"
  },
  {
    "slug": "lh 1.15 text chain grid cell",
    "idea": "line-height:1.15 unitless on text chain + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:1.15!important;box-sizing:border-box!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + vertical-align — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;vertical-align:baseline!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + leading-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;leading-trim:both-edges!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + text-box-trim — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;text-box-trim:trim-both!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + text-box-edge — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;text-box-edge:cap alphabetic!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + line-height — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + font-kerning — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;font-kerning:normal!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + display — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;display:inline!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + align-self — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;align-self:flex-start!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + min-height — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;min-height:0!important;display:inline-block!important}"
  },
  {
    "slug": "lh 1.15 FO anchors grid cell",
    "idea": "line-height:1.15 unitless on FO anchors + box-sizing — 1.2/1.15 ratio grid",
    "css": "foreignObject a{line-height:1.15!important;box-sizing:border-box!important;display:inline-block!important}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w27-${n}`,
    label: `Loop AI b11 w27 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w27; line-height 1.2/1.15 grid; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w27: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

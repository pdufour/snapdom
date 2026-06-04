/**
 * Loop AI batch-11 FO recipe shard (worker 50) — text-fix: align-items baseline flex text row.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "flex row baseline",
    idea: "flex row align-items:baseline text row",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}",
  },
  {
    n: 2,
    slug: "inline-flex baseline",
    idea: "inline-flex align-items:baseline",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}",
  },
  {
    n: 3,
    slug: "nav flex baseline",
    idea: "nav flex align-items:baseline",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 4,
    slug: "flex row center",
    idea: "flex row align-items:center text row",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}",
  },
  {
    n: 5,
    slug: "inline-flex center",
    idea: "inline-flex align-items:center",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}",
  },
  {
    n: 6,
    slug: "nav flex center",
    idea: "nav flex align-items:center",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 7,
    slug: "flex row flex-end",
    idea: "flex row align-items:flex-end text row",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}",
  },
  {
    n: 8,
    slug: "inline-flex flex-end",
    idea: "inline-flex align-items:flex-end",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}",
  },
  {
    n: 9,
    slug: "nav flex flex-end",
    idea: "nav flex align-items:flex-end",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 10,
    slug: "flex row flex-start",
    idea: "flex row align-items:flex-start text row",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important}",
  },
  {
    n: 11,
    slug: "inline-flex flex-start",
    idea: "inline-flex align-items:flex-start",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important}",
  },
  {
    n: 12,
    slug: "nav flex flex-start",
    idea: "nav flex align-items:flex-start",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 13,
    slug: "flex row stretch",
    idea: "flex row align-items:stretch text row",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}",
  },
  {
    n: 14,
    slug: "inline-flex stretch",
    idea: "inline-flex align-items:stretch",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}",
  },
  {
    n: 15,
    slug: "nav flex stretch",
    idea: "nav flex align-items:stretch",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 16,
    slug: "flex baseline valign baseline",
    idea: "align-items:baseline + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 17,
    slug: "flex center valign baseline",
    idea: "align-items:center + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 18,
    slug: "flex flex-end valign baseline",
    idea: "align-items:flex-end + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 19,
    slug: "flex flex-start valign baseline",
    idea: "align-items:flex-start + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 20,
    slug: "flex stretch valign baseline",
    idea: "align-items:stretch + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 21,
    slug: "flex baseline align-self baseline",
    idea: "align-items:baseline + align-self:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{align-self:baseline!important}",
  },
  {
    n: 22,
    slug: "flex center align-self baseline",
    idea: "align-items:center + align-self:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{align-self:baseline!important}",
  },
  {
    n: 23,
    slug: "flex flex-end align-self baseline",
    idea: "align-items:flex-end + align-self:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}foreignObject *{align-self:baseline!important}",
  },
  {
    n: 24,
    slug: "flex flex-start align-self baseline",
    idea: "align-items:flex-start + align-self:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important}foreignObject *{align-self:baseline!important}",
  },
  {
    n: 25,
    slug: "flex stretch align-self baseline",
    idea: "align-items:stretch + align-self:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{align-self:baseline!important}",
  },
  {
    n: 26,
    slug: "baseline justify flex-start",
    idea: "align-items:baseline + justify-content:flex-start",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;justify-content:flex-start!important}",
  },
  {
    n: 27,
    slug: "baseline justify center",
    idea: "align-items:baseline + justify-content:center",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;justify-content:center!important}",
  },
  {
    n: 28,
    slug: "baseline justify space-between",
    idea: "align-items:baseline + justify-content:space-between",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;justify-content:space-between!important}",
  },
  {
    n: 29,
    slug: "baseline justify space-around",
    idea: "align-items:baseline + justify-content:space-around",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;justify-content:space-around!important}",
  },
  {
    n: 30,
    slug: "baseline justify space-evenly",
    idea: "align-items:baseline + justify-content:space-evenly",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;justify-content:space-evenly!important}",
  },
  {
    n: 31,
    slug: "baseline gap 0",
    idea: "align-items:baseline + gap:0",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0!important;row-gap:0!important;column-gap:0!important}",
  },
  {
    n: 32,
    slug: "baseline gap 0.25em",
    idea: "align-items:baseline + gap:0.25em",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.25em!important;row-gap:0.25em!important;column-gap:0.25em!important}",
  },
  {
    n: 33,
    slug: "baseline gap 0.5em",
    idea: "align-items:baseline + gap:0.5em",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.5em!important;row-gap:0.5em!important;column-gap:0.5em!important}",
  },
  {
    n: 34,
    slug: "baseline gap 1em",
    idea: "align-items:baseline + gap:1em",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:1em!important;row-gap:1em!important;column-gap:1em!important}",
  },
  {
    n: 35,
    slug: "baseline flex-wrap nowrap",
    idea: "align-items:baseline + flex-wrap:nowrap",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;flex-wrap:nowrap!important}",
  },
  {
    n: 36,
    slug: "baseline flex-wrap wrap",
    idea: "align-items:baseline + flex-wrap:wrap",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;flex-wrap:wrap!important}",
  },
  {
    n: 37,
    slug: "pin lh baseline",
    idea: "pin lh baseline + align-items:baseline",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 38,
    slug: "pad baseline baseline 0",
    idea: "align-items:baseline pad 0",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:0!important;order:0!important}",
  },
  {
    n: 39,
    slug: "pad baseline center 1",
    idea: "align-items:baseline pad 1",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}",
  },
  {
    n: 40,
    slug: "pad baseline flex-end 2",
    idea: "align-items:baseline pad 2",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}",
  },
  {
    n: 41,
    slug: "pad baseline flex-start 3",
    idea: "align-items:baseline pad 3",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}",
  },
  {
    n: 42,
    slug: "pad baseline stretch 4",
    idea: "align-items:baseline pad 4",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}",
  },
  {
    n: 43,
    slug: "pad baseline baseline 5",
    idea: "align-items:baseline pad 5",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}",
  },
  {
    n: 44,
    slug: "pad baseline center 6",
    idea: "align-items:baseline pad 6",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:6!important}",
  },
  {
    n: 45,
    slug: "pad baseline flex-end 7",
    idea: "align-items:baseline pad 7",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:0!important;order:2!important}",
  },
  {
    n: 46,
    slug: "pad baseline flex-start 8",
    idea: "align-items:baseline pad 8",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:8!important}",
  },
  {
    n: 47,
    slug: "pad baseline stretch 9",
    idea: "align-items:baseline pad 9",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:9!important}",
  },
  {
    n: 48,
    slug: "pad baseline baseline 10",
    idea: "align-items:baseline pad 10",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:10!important}",
  },
  {
    n: 49,
    slug: "pad baseline center 11",
    idea: "align-items:baseline pad 11",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:11!important}",
  },
  {
    n: 50,
    slug: "pad baseline flex-end 12",
    idea: "align-items:baseline pad 12",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:12!important}",
  },
  {
    n: 51,
    slug: "pad baseline flex-start 13",
    idea: "align-items:baseline pad 13",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:13!important}",
  },
  {
    n: 52,
    slug: "pad baseline stretch 14",
    idea: "align-items:baseline pad 14",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:0!important;order:4!important}",
  },
  {
    n: 53,
    slug: "pad baseline baseline 15",
    idea: "align-items:baseline pad 15",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:15!important}",
  },
  {
    n: 54,
    slug: "pad baseline center 16",
    idea: "align-items:baseline pad 16",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:16!important}",
  },
  {
    n: 55,
    slug: "pad baseline flex-end 17",
    idea: "align-items:baseline pad 17",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:17!important}",
  },
  {
    n: 56,
    slug: "pad baseline flex-start 18",
    idea: "align-items:baseline pad 18",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:18!important}",
  },
  {
    n: 57,
    slug: "pad baseline stretch 19",
    idea: "align-items:baseline pad 19",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:19!important}",
  },
  {
    n: 58,
    slug: "pad baseline baseline 20",
    idea: "align-items:baseline pad 20",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:20!important}",
  },
  {
    n: 59,
    slug: "pad baseline center 21",
    idea: "align-items:baseline pad 21",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:0!important;order:1!important}",
  },
  {
    n: 60,
    slug: "pad baseline flex-end 22",
    idea: "align-items:baseline pad 22",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:22!important}",
  },
  {
    n: 61,
    slug: "pad baseline flex-start 23",
    idea: "align-items:baseline pad 23",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:23!important}",
  },
  {
    n: 62,
    slug: "pad baseline stretch 24",
    idea: "align-items:baseline pad 24",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:24!important}",
  },
  {
    n: 63,
    slug: "pad baseline baseline 25",
    idea: "align-items:baseline pad 25",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:25!important}",
  },
  {
    n: 64,
    slug: "pad baseline center 26",
    idea: "align-items:baseline pad 26",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:26!important}",
  },
  {
    n: 65,
    slug: "pad baseline flex-end 27",
    idea: "align-items:baseline pad 27",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:27!important}",
  },
  {
    n: 66,
    slug: "pad baseline flex-start 28",
    idea: "align-items:baseline pad 28",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:0!important;order:3!important}",
  },
  {
    n: 67,
    slug: "pad baseline stretch 29",
    idea: "align-items:baseline pad 29",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:29!important}",
  },
  {
    n: 68,
    slug: "pad baseline baseline 30",
    idea: "align-items:baseline pad 30",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:30!important}",
  },
  {
    n: 69,
    slug: "pad baseline center 31",
    idea: "align-items:baseline pad 31",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:31!important}",
  },
  {
    n: 70,
    slug: "pad baseline flex-end 32",
    idea: "align-items:baseline pad 32",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:32!important}",
  },
  {
    n: 71,
    slug: "pad baseline flex-start 33",
    idea: "align-items:baseline pad 33",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:33!important}",
  },
  {
    n: 72,
    slug: "pad baseline stretch 34",
    idea: "align-items:baseline pad 34",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:34!important}",
  },
  {
    n: 73,
    slug: "pad baseline baseline 35",
    idea: "align-items:baseline pad 35",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:0!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:35!important}",
  },
  {
    n: 74,
    slug: "pad baseline center 36",
    idea: "align-items:baseline pad 36",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:36!important}",
  },
  {
    n: 75,
    slug: "pad baseline flex-end 37",
    idea: "align-items:baseline pad 37",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:37!important}",
  },
  {
    n: 76,
    slug: "pad baseline flex-start 38",
    idea: "align-items:baseline pad 38",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:38!important}",
  },
  {
    n: 77,
    slug: "pad baseline stretch 39",
    idea: "align-items:baseline pad 39",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:39!important}",
  },
  {
    n: 78,
    slug: "pad baseline baseline 40",
    idea: "align-items:baseline pad 40",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:40!important}",
  },
  {
    n: 79,
    slug: "pad baseline center 41",
    idea: "align-items:baseline pad 41",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:41!important}",
  },
  {
    n: 80,
    slug: "pad baseline flex-end 42",
    idea: "align-items:baseline pad 42",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:0!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:42!important}",
  },
  {
    n: 81,
    slug: "pad baseline flex-start 43",
    idea: "align-items:baseline pad 43",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:43!important}",
  },
  {
    n: 82,
    slug: "pad baseline stretch 44",
    idea: "align-items:baseline pad 44",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:44!important}",
  },
  {
    n: 83,
    slug: "pad baseline baseline 45",
    idea: "align-items:baseline pad 45",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:45!important}",
  },
  {
    n: 84,
    slug: "pad baseline center 46",
    idea: "align-items:baseline pad 46",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:46!important}",
  },
  {
    n: 85,
    slug: "pad baseline flex-end 47",
    idea: "align-items:baseline pad 47",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:47!important}",
  },
  {
    n: 86,
    slug: "pad baseline flex-start 48",
    idea: "align-items:baseline pad 48",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:48!important}",
  },
  {
    n: 87,
    slug: "pad baseline stretch 49",
    idea: "align-items:baseline pad 49",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:0!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:49!important}",
  },
  {
    n: 88,
    slug: "pad baseline baseline 50",
    idea: "align-items:baseline pad 50",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:50!important}",
  },
  {
    n: 89,
    slug: "pad baseline center 51",
    idea: "align-items:baseline pad 51",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:51!important}",
  },
  {
    n: 90,
    slug: "pad baseline flex-end 52",
    idea: "align-items:baseline pad 52",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:52!important}",
  },
  {
    n: 91,
    slug: "pad baseline flex-start 53",
    idea: "align-items:baseline pad 53",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:53!important}",
  },
  {
    n: 92,
    slug: "pad baseline stretch 54",
    idea: "align-items:baseline pad 54",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:54!important}",
  },
  {
    n: 93,
    slug: "pad baseline baseline 55",
    idea: "align-items:baseline pad 55",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:55!important}",
  },
  {
    n: 94,
    slug: "pad baseline center 56",
    idea: "align-items:baseline pad 56",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:0!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:56!important}",
  },
  {
    n: 95,
    slug: "pad baseline flex-end 57",
    idea: "align-items:baseline pad 57",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:57!important}",
  },
  {
    n: 96,
    slug: "pad baseline flex-start 58",
    idea: "align-items:baseline pad 58",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important;min-height:auto!important;order:3!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:58!important}",
  },
  {
    n: 97,
    slug: "pad baseline stretch 59",
    idea: "align-items:baseline pad 59",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important;min-height:auto!important;order:4!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:59!important}",
  },
  {
    n: 98,
    slug: "pad baseline baseline 60",
    idea: "align-items:baseline pad 60",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;min-height:auto!important;order:0!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:60!important}",
  },
  {
    n: 99,
    slug: "pad baseline center 61",
    idea: "align-items:baseline pad 61",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important;min-height:auto!important;order:1!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:61!important}",
  },
  {
    n: 100,
    slug: "pad baseline flex-end 62",
    idea: "align-items:baseline pad 62",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important;min-height:auto!important;order:2!important}foreignObject *{outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:62!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w50: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w50-${num}`,
    label: `Loop AI b11 w50 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w50; align-items baseline flex text row; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

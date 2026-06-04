/**
 * Loop AI batch-11 FO recipe shard (worker 48) — text-fix: vertical-align middle inline-block.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "middle inline-block star",
    idea: "vertical-align:middle + inline-block on FO *",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 2,
    slug: "middle a",
    idea: "vertical-align:middle inline-block on a",
    css: "foreignObject a{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 3,
    slug: "middle span",
    idea: "vertical-align:middle inline-block on span",
    css: "foreignObject span{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 4,
    slug: "middle label",
    idea: "vertical-align:middle inline-block on label",
    css: "foreignObject label{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 5,
    slug: "middle strong",
    idea: "vertical-align:middle inline-block on strong",
    css: "foreignObject strong{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 6,
    slug: "middle em",
    idea: "vertical-align:middle inline-block on em",
    css: "foreignObject em{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 7,
    slug: "middle small",
    idea: "vertical-align:middle inline-block on small",
    css: "foreignObject small{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 8,
    slug: "middle img",
    idea: "vertical-align:middle inline-block on img",
    css: "foreignObject img{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 9,
    slug: "middle svg",
    idea: "vertical-align:middle inline-block on svg",
    css: "foreignObject svg{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 10,
    slug: "middle button",
    idea: "vertical-align:middle inline-block on button",
    css: "foreignObject button{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 11,
    slug: "middle nav a",
    idea: "vertical-align:middle inline-block on nav a",
    css: "foreignObject nav a{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 12,
    slug: "middle lh normal",
    idea: "middle inline-block + line-height:normal",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{line-height:normal!important}",
  },
  {
    n: 13,
    slug: "middle lh 1",
    idea: "middle inline-block + line-height:1",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{line-height:1!important}",
  },
  {
    n: 14,
    slug: "middle lh 1.2",
    idea: "middle inline-block + line-height:1.2",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{line-height:1.2!important}",
  },
  {
    n: 15,
    slug: "middle lh from-font",
    idea: "middle inline-block + line-height:from-font",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{line-height:from-font!important}",
  },
  {
    n: 16,
    slug: "middle lh unset",
    idea: "middle inline-block + line-height:unset",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{line-height:unset!important}",
  },
  {
    n: 17,
    slug: "middle height auto",
    idea: "middle inline-block + height:auto",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{height:auto!important}",
  },
  {
    n: 18,
    slug: "middle height 1em",
    idea: "middle inline-block + height:1em",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{height:1em!important}",
  },
  {
    n: 19,
    slug: "middle height 100%",
    idea: "middle inline-block + height:100%",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{height:100%!important}",
  },
  {
    n: 20,
    slug: "middle height min-content",
    idea: "middle inline-block + height:min-content",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{height:min-content!important}",
  },
  {
    n: 21,
    slug: "flex center middle star",
    idea: "flex align-items:center + middle inline-block",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 22,
    slug: "flex baseline middle star",
    idea: "flex align-items:baseline + middle inline-block",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 23,
    slug: "flex flex-end middle star",
    idea: "flex align-items:flex-end + middle inline-block",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 24,
    slug: "grid align center middle",
    idea: "grid + align-items:center + middle",
    css: "foreignObject{display:grid!important;align-items:center!important}foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 25,
    slug: "middle pad 0",
    idea: "middle inline-block pad 0",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important}",
  },
  {
    n: 26,
    slug: "middle pad 1",
    idea: "middle inline-block pad 1",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important}",
  },
  {
    n: 27,
    slug: "middle pad 2",
    idea: "middle inline-block pad 2",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important}",
  },
  {
    n: 28,
    slug: "middle pad 3",
    idea: "middle inline-block pad 3",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important}",
  },
  {
    n: 29,
    slug: "middle pad 4",
    idea: "middle inline-block pad 4",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important}",
  },
  {
    n: 30,
    slug: "middle pad 5",
    idea: "middle inline-block pad 5",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important}",
  },
  {
    n: 31,
    slug: "middle pad 6",
    idea: "middle inline-block pad 6",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important}",
  },
  {
    n: 32,
    slug: "middle pad 7",
    idea: "middle inline-block pad 7",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important}",
  },
  {
    n: 33,
    slug: "middle pad 8",
    idea: "middle inline-block pad 8",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important}",
  },
  {
    n: 34,
    slug: "middle pad 9",
    idea: "middle inline-block pad 9",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:9!important}",
  },
  {
    n: 35,
    slug: "middle pad 10",
    idea: "middle inline-block pad 10",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:10!important}",
  },
  {
    n: 36,
    slug: "middle pad 11",
    idea: "middle inline-block pad 11",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:11!important}",
  },
  {
    n: 37,
    slug: "middle pad 12",
    idea: "middle inline-block pad 12",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:12!important}",
  },
  {
    n: 38,
    slug: "middle pad 13",
    idea: "middle inline-block pad 13",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:13!important}",
  },
  {
    n: 39,
    slug: "middle pad 14",
    idea: "middle inline-block pad 14",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:14!important}",
  },
  {
    n: 40,
    slug: "middle pad 15",
    idea: "middle inline-block pad 15",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:15!important}",
  },
  {
    n: 41,
    slug: "middle pad 16",
    idea: "middle inline-block pad 16",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:16!important}",
  },
  {
    n: 42,
    slug: "middle pad 17",
    idea: "middle inline-block pad 17",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:17!important}",
  },
  {
    n: 43,
    slug: "middle pad 18",
    idea: "middle inline-block pad 18",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:18!important}",
  },
  {
    n: 44,
    slug: "middle pad 19",
    idea: "middle inline-block pad 19",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:19!important}",
  },
  {
    n: 45,
    slug: "middle pad 20",
    idea: "middle inline-block pad 20",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:20!important}",
  },
  {
    n: 46,
    slug: "middle pad 21",
    idea: "middle inline-block pad 21",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:21!important}",
  },
  {
    n: 47,
    slug: "middle pad 22",
    idea: "middle inline-block pad 22",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:22!important}",
  },
  {
    n: 48,
    slug: "middle pad 23",
    idea: "middle inline-block pad 23",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:23!important}",
  },
  {
    n: 49,
    slug: "middle pad 24",
    idea: "middle inline-block pad 24",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:24!important}",
  },
  {
    n: 50,
    slug: "middle pad 25",
    idea: "middle inline-block pad 25",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:25!important}",
  },
  {
    n: 51,
    slug: "middle pad 26",
    idea: "middle inline-block pad 26",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:26!important}",
  },
  {
    n: 52,
    slug: "middle pad 27",
    idea: "middle inline-block pad 27",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:27!important}",
  },
  {
    n: 53,
    slug: "middle pad 28",
    idea: "middle inline-block pad 28",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:28!important}",
  },
  {
    n: 54,
    slug: "middle pad 29",
    idea: "middle inline-block pad 29",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:29!important}",
  },
  {
    n: 55,
    slug: "middle pad 30",
    idea: "middle inline-block pad 30",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:30!important}",
  },
  {
    n: 56,
    slug: "middle pad 31",
    idea: "middle inline-block pad 31",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:31!important}",
  },
  {
    n: 57,
    slug: "middle pad 32",
    idea: "middle inline-block pad 32",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:32!important}",
  },
  {
    n: 58,
    slug: "middle pad 33",
    idea: "middle inline-block pad 33",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:33!important}",
  },
  {
    n: 59,
    slug: "middle pad 34",
    idea: "middle inline-block pad 34",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:34!important}",
  },
  {
    n: 60,
    slug: "middle pad 35",
    idea: "middle inline-block pad 35",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:35!important}",
  },
  {
    n: 61,
    slug: "middle pad 36",
    idea: "middle inline-block pad 36",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:36!important}",
  },
  {
    n: 62,
    slug: "middle pad 37",
    idea: "middle inline-block pad 37",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:37!important}",
  },
  {
    n: 63,
    slug: "middle pad 38",
    idea: "middle inline-block pad 38",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:38!important}",
  },
  {
    n: 64,
    slug: "middle pad 39",
    idea: "middle inline-block pad 39",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:39!important}",
  },
  {
    n: 65,
    slug: "middle pad 40",
    idea: "middle inline-block pad 40",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:40!important}",
  },
  {
    n: 66,
    slug: "middle pad 41",
    idea: "middle inline-block pad 41",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:41!important}",
  },
  {
    n: 67,
    slug: "middle pad 42",
    idea: "middle inline-block pad 42",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:42!important}",
  },
  {
    n: 68,
    slug: "middle pad 43",
    idea: "middle inline-block pad 43",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:43!important}",
  },
  {
    n: 69,
    slug: "middle pad 44",
    idea: "middle inline-block pad 44",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:44!important}",
  },
  {
    n: 70,
    slug: "middle pad 45",
    idea: "middle inline-block pad 45",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:45!important}",
  },
  {
    n: 71,
    slug: "middle pad 46",
    idea: "middle inline-block pad 46",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:46!important}",
  },
  {
    n: 72,
    slug: "middle pad 47",
    idea: "middle inline-block pad 47",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:47!important}",
  },
  {
    n: 73,
    slug: "middle pad 48",
    idea: "middle inline-block pad 48",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:48!important}",
  },
  {
    n: 74,
    slug: "middle pad 49",
    idea: "middle inline-block pad 49",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:49!important}",
  },
  {
    n: 75,
    slug: "middle pad 50",
    idea: "middle inline-block pad 50",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:50!important}",
  },
  {
    n: 76,
    slug: "middle pad 51",
    idea: "middle inline-block pad 51",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:51!important}",
  },
  {
    n: 77,
    slug: "middle pad 52",
    idea: "middle inline-block pad 52",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:52!important}",
  },
  {
    n: 78,
    slug: "middle pad 53",
    idea: "middle inline-block pad 53",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:53!important}",
  },
  {
    n: 79,
    slug: "middle pad 54",
    idea: "middle inline-block pad 54",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:54!important}",
  },
  {
    n: 80,
    slug: "middle pad 55",
    idea: "middle inline-block pad 55",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:55!important}",
  },
  {
    n: 81,
    slug: "middle pad 56",
    idea: "middle inline-block pad 56",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:56!important}",
  },
  {
    n: 82,
    slug: "middle pad 57",
    idea: "middle inline-block pad 57",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:57!important}",
  },
  {
    n: 83,
    slug: "middle pad 58",
    idea: "middle inline-block pad 58",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:58!important}",
  },
  {
    n: 84,
    slug: "middle pad 59",
    idea: "middle inline-block pad 59",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:59!important}",
  },
  {
    n: 85,
    slug: "middle pad 60",
    idea: "middle inline-block pad 60",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:60!important}",
  },
  {
    n: 86,
    slug: "middle pad 61",
    idea: "middle inline-block pad 61",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:61!important}",
  },
  {
    n: 87,
    slug: "middle pad 62",
    idea: "middle inline-block pad 62",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:62!important}",
  },
  {
    n: 88,
    slug: "middle pad 63",
    idea: "middle inline-block pad 63",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:63!important}",
  },
  {
    n: 89,
    slug: "middle pad 64",
    idea: "middle inline-block pad 64",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:64!important}",
  },
  {
    n: 90,
    slug: "middle pad 65",
    idea: "middle inline-block pad 65",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:65!important}",
  },
  {
    n: 91,
    slug: "middle pad 66",
    idea: "middle inline-block pad 66",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:66!important}",
  },
  {
    n: 92,
    slug: "middle pad 67",
    idea: "middle inline-block pad 67",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.04em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:67!important}",
  },
  {
    n: 93,
    slug: "middle pad 68",
    idea: "middle inline-block pad 68",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.05em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:68!important}",
  },
  {
    n: 94,
    slug: "middle pad 69",
    idea: "middle inline-block pad 69",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.06em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:69!important}",
  },
  {
    n: 95,
    slug: "middle pad 70",
    idea: "middle inline-block pad 70",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.07em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:70!important}",
  },
  {
    n: 96,
    slug: "middle pad 71",
    idea: "middle inline-block pad 71",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.08em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:71!important}",
  },
  {
    n: 97,
    slug: "middle pad 72",
    idea: "middle inline-block pad 72",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:72!important}",
  },
  {
    n: 98,
    slug: "middle pad 73",
    idea: "middle inline-block pad 73",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.01em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:73!important}",
  },
  {
    n: 99,
    slug: "middle pad 74",
    idea: "middle inline-block pad 74",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.02em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:74!important}",
  },
  {
    n: 100,
    slug: "middle pad 75",
    idea: "middle inline-block pad 75",
    css: "foreignObject *{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important;min-width:0!important}foreignObject *{padding-top:0.03em!important;padding-bottom:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:75!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w48: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w48-${num}`,
    label: `Loop AI b11 w48 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w48; vertical-align middle inline-block; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

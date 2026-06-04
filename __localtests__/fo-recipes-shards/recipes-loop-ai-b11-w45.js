/**
 * Loop AI batch-11 FO recipe shard (worker 45) — text-fix: white-space nowrap.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "nowrap star",
    idea: "white-space:nowrap on FO *",
    css: "foreignObject *{white-space:nowrap!important}",
  },
  {
    n: 2,
    slug: "text-wrap nowrap star",
    idea: "text-wrap:nowrap on FO *",
    css: "foreignObject *{text-wrap:nowrap!important;white-space:nowrap!important}",
  },
  {
    n: 3,
    slug: "nowrap display inline",
    idea: "white-space:nowrap + display:inline",
    css: "foreignObject *{white-space:nowrap!important;display:inline!important}",
  },
  {
    n: 4,
    slug: "nowrap display inline-block",
    idea: "white-space:nowrap + display:inline-block",
    css: "foreignObject *{white-space:nowrap!important;display:inline-block!important}",
  },
  {
    n: 5,
    slug: "nowrap display inline-flex",
    idea: "white-space:nowrap + display:inline-flex",
    css: "foreignObject *{white-space:nowrap!important;display:inline-flex!important}",
  },
  {
    n: 6,
    slug: "nowrap display flex",
    idea: "white-space:nowrap + display:flex",
    css: "foreignObject *{white-space:nowrap!important;display:flex!important}",
  },
  {
    n: 7,
    slug: "nowrap display grid",
    idea: "white-space:nowrap + display:grid",
    css: "foreignObject *{white-space:nowrap!important;display:grid!important}",
  },
  {
    n: 8,
    slug: "nowrap overflow visible",
    idea: "nowrap + overflow:visible",
    css: "foreignObject *{white-space:nowrap!important;overflow:visible!important}",
  },
  {
    n: 9,
    slug: "nowrap overflow hidden",
    idea: "nowrap + overflow:hidden",
    css: "foreignObject *{white-space:nowrap!important;overflow:hidden!important}",
  },
  {
    n: 10,
    slug: "nowrap overflow clip",
    idea: "nowrap + overflow:clip",
    css: "foreignObject *{white-space:nowrap!important;overflow:clip!important}",
  },
  {
    n: 11,
    slug: "nowrap text-overflow clip",
    idea: "nowrap + text-overflow:clip",
    css: "foreignObject *{white-space:nowrap!important;text-overflow:clip!important;overflow:hidden!important}",
  },
  {
    n: 12,
    slug: "nowrap text-overflow ellipsis",
    idea: "nowrap + text-overflow:ellipsis",
    css: "foreignObject *{white-space:nowrap!important;text-overflow:ellipsis!important;overflow:hidden!important}",
  },
  {
    n: 13,
    slug: "nowrap ow normal",
    idea: "nowrap + overflow-wrap:normal",
    css: "foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important}",
  },
  {
    n: 14,
    slug: "nowrap ow break-word",
    idea: "nowrap + overflow-wrap:break-word",
    css: "foreignObject *{white-space:nowrap!important;overflow-wrap:break-word!important}",
  },
  {
    n: 15,
    slug: "nowrap ow anywhere",
    idea: "nowrap + overflow-wrap:anywhere",
    css: "foreignObject *{white-space:nowrap!important;overflow-wrap:anywhere!important}",
  },
  {
    n: 16,
    slug: "nowrap valign baseline",
    idea: "nowrap + vertical-align:baseline",
    css: "foreignObject *{white-space:nowrap!important;vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 17,
    slug: "nowrap valign middle",
    idea: "nowrap + vertical-align:middle",
    css: "foreignObject *{white-space:nowrap!important;vertical-align:middle!important;display:inline!important}",
  },
  {
    n: 18,
    slug: "nowrap valign text-top",
    idea: "nowrap + vertical-align:text-top",
    css: "foreignObject *{white-space:nowrap!important;vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 19,
    slug: "flex row nowrap baseline",
    idea: "flex row flex-wrap:nowrap + nowrap text",
    css: "foreignObject{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-items:baseline!important}foreignObject *{white-space:nowrap!important}",
  },
  {
    n: 20,
    slug: "flex row wrap center",
    idea: "flex row flex-wrap:wrap + nowrap text",
    css: "foreignObject{display:flex!important;flex-direction:row!important;flex-wrap:wrap!important;align-items:center!important}foreignObject *{white-space:nowrap!important}",
  },
  {
    n: 21,
    slug: "flex column nowrap flex-start",
    idea: "flex column flex-wrap:nowrap + nowrap text",
    css: "foreignObject{display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;align-items:flex-start!important}foreignObject *{white-space:nowrap!important}",
  },
  {
    n: 22,
    slug: "nowrap a",
    idea: "white-space:nowrap on foreignObject a",
    css: "foreignObject a{white-space:nowrap!important;display:inline!important}",
  },
  {
    n: 23,
    slug: "nowrap span",
    idea: "white-space:nowrap on foreignObject span",
    css: "foreignObject span{white-space:nowrap!important;display:inline!important}",
  },
  {
    n: 24,
    slug: "nowrap label",
    idea: "white-space:nowrap on foreignObject label",
    css: "foreignObject label{white-space:nowrap!important;display:inline!important}",
  },
  {
    n: 25,
    slug: "nowrap nav a",
    idea: "white-space:nowrap on foreignObject nav a",
    css: "foreignObject nav a{white-space:nowrap!important;display:inline!important}",
  },
  {
    n: 26,
    slug: "nowrap strong",
    idea: "white-space:nowrap on foreignObject strong",
    css: "foreignObject strong{white-space:nowrap!important;display:inline!important}",
  },
  {
    n: 27,
    slug: "nowrap pin lh",
    idea: "nowrap + h2-pin-line-height-from-live",
    css: "foreignObject *{white-space:nowrap!important;text-wrap:nowrap!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 28,
    slug: "nowrap pad 0",
    idea: "nowrap structural pad 0",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important}",
  },
  {
    n: 29,
    slug: "nowrap pad 1",
    idea: "nowrap structural pad 1",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important}",
  },
  {
    n: 30,
    slug: "nowrap pad 2",
    idea: "nowrap structural pad 2",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important}",
  },
  {
    n: 31,
    slug: "nowrap pad 3",
    idea: "nowrap structural pad 3",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important}",
  },
  {
    n: 32,
    slug: "nowrap pad 4",
    idea: "nowrap structural pad 4",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:4!important}",
  },
  {
    n: 33,
    slug: "nowrap pad 5",
    idea: "nowrap structural pad 5",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:5!important}",
  },
  {
    n: 34,
    slug: "nowrap pad 6",
    idea: "nowrap structural pad 6",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:6!important}",
  },
  {
    n: 35,
    slug: "nowrap pad 7",
    idea: "nowrap structural pad 7",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:7!important}",
  },
  {
    n: 36,
    slug: "nowrap pad 8",
    idea: "nowrap structural pad 8",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:8!important}",
  },
  {
    n: 37,
    slug: "nowrap pad 9",
    idea: "nowrap structural pad 9",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:9!important}",
  },
  {
    n: 38,
    slug: "nowrap pad 10",
    idea: "nowrap structural pad 10",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:10!important}",
  },
  {
    n: 39,
    slug: "nowrap pad 11",
    idea: "nowrap structural pad 11",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:11!important}",
  },
  {
    n: 40,
    slug: "nowrap pad 12",
    idea: "nowrap structural pad 12",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:12!important}",
  },
  {
    n: 41,
    slug: "nowrap pad 13",
    idea: "nowrap structural pad 13",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:13!important}",
  },
  {
    n: 42,
    slug: "nowrap pad 14",
    idea: "nowrap structural pad 14",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:14!important}",
  },
  {
    n: 43,
    slug: "nowrap pad 15",
    idea: "nowrap structural pad 15",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:15!important}",
  },
  {
    n: 44,
    slug: "nowrap pad 16",
    idea: "nowrap structural pad 16",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:16!important}",
  },
  {
    n: 45,
    slug: "nowrap pad 17",
    idea: "nowrap structural pad 17",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:17!important}",
  },
  {
    n: 46,
    slug: "nowrap pad 18",
    idea: "nowrap structural pad 18",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:18!important}",
  },
  {
    n: 47,
    slug: "nowrap pad 19",
    idea: "nowrap structural pad 19",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:19!important}",
  },
  {
    n: 48,
    slug: "nowrap pad 20",
    idea: "nowrap structural pad 20",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:20!important}",
  },
  {
    n: 49,
    slug: "nowrap pad 21",
    idea: "nowrap structural pad 21",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:21!important}",
  },
  {
    n: 50,
    slug: "nowrap pad 22",
    idea: "nowrap structural pad 22",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:22!important}",
  },
  {
    n: 51,
    slug: "nowrap pad 23",
    idea: "nowrap structural pad 23",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:23!important}",
  },
  {
    n: 52,
    slug: "nowrap pad 24",
    idea: "nowrap structural pad 24",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:24!important}",
  },
  {
    n: 53,
    slug: "nowrap pad 25",
    idea: "nowrap structural pad 25",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:25!important}",
  },
  {
    n: 54,
    slug: "nowrap pad 26",
    idea: "nowrap structural pad 26",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:26!important}",
  },
  {
    n: 55,
    slug: "nowrap pad 27",
    idea: "nowrap structural pad 27",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:27!important}",
  },
  {
    n: 56,
    slug: "nowrap pad 28",
    idea: "nowrap structural pad 28",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:28!important}",
  },
  {
    n: 57,
    slug: "nowrap pad 29",
    idea: "nowrap structural pad 29",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:29!important}",
  },
  {
    n: 58,
    slug: "nowrap pad 30",
    idea: "nowrap structural pad 30",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:30!important}",
  },
  {
    n: 59,
    slug: "nowrap pad 31",
    idea: "nowrap structural pad 31",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:31!important}",
  },
  {
    n: 60,
    slug: "nowrap pad 32",
    idea: "nowrap structural pad 32",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:32!important}",
  },
  {
    n: 61,
    slug: "nowrap pad 33",
    idea: "nowrap structural pad 33",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:33!important}",
  },
  {
    n: 62,
    slug: "nowrap pad 34",
    idea: "nowrap structural pad 34",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:34!important}",
  },
  {
    n: 63,
    slug: "nowrap pad 35",
    idea: "nowrap structural pad 35",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:35!important}",
  },
  {
    n: 64,
    slug: "nowrap pad 36",
    idea: "nowrap structural pad 36",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:36!important}",
  },
  {
    n: 65,
    slug: "nowrap pad 37",
    idea: "nowrap structural pad 37",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:37!important}",
  },
  {
    n: 66,
    slug: "nowrap pad 38",
    idea: "nowrap structural pad 38",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:38!important}",
  },
  {
    n: 67,
    slug: "nowrap pad 39",
    idea: "nowrap structural pad 39",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:39!important}",
  },
  {
    n: 68,
    slug: "nowrap pad 40",
    idea: "nowrap structural pad 40",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:40!important}",
  },
  {
    n: 69,
    slug: "nowrap pad 41",
    idea: "nowrap structural pad 41",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:41!important}",
  },
  {
    n: 70,
    slug: "nowrap pad 42",
    idea: "nowrap structural pad 42",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:42!important}",
  },
  {
    n: 71,
    slug: "nowrap pad 43",
    idea: "nowrap structural pad 43",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:43!important}",
  },
  {
    n: 72,
    slug: "nowrap pad 44",
    idea: "nowrap structural pad 44",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:44!important}",
  },
  {
    n: 73,
    slug: "nowrap pad 45",
    idea: "nowrap structural pad 45",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:45!important}",
  },
  {
    n: 74,
    slug: "nowrap pad 46",
    idea: "nowrap structural pad 46",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:46!important}",
  },
  {
    n: 75,
    slug: "nowrap pad 47",
    idea: "nowrap structural pad 47",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:47!important}",
  },
  {
    n: 76,
    slug: "nowrap pad 48",
    idea: "nowrap structural pad 48",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:48!important}",
  },
  {
    n: 77,
    slug: "nowrap pad 49",
    idea: "nowrap structural pad 49",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:49!important}",
  },
  {
    n: 78,
    slug: "nowrap pad 50",
    idea: "nowrap structural pad 50",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:50!important}",
  },
  {
    n: 79,
    slug: "nowrap pad 51",
    idea: "nowrap structural pad 51",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:51!important}",
  },
  {
    n: 80,
    slug: "nowrap pad 52",
    idea: "nowrap structural pad 52",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:52!important}",
  },
  {
    n: 81,
    slug: "nowrap pad 53",
    idea: "nowrap structural pad 53",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:53!important}",
  },
  {
    n: 82,
    slug: "nowrap pad 54",
    idea: "nowrap structural pad 54",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:54!important}",
  },
  {
    n: 83,
    slug: "nowrap pad 55",
    idea: "nowrap structural pad 55",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:55!important}",
  },
  {
    n: 84,
    slug: "nowrap pad 56",
    idea: "nowrap structural pad 56",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:56!important}",
  },
  {
    n: 85,
    slug: "nowrap pad 57",
    idea: "nowrap structural pad 57",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:57!important}",
  },
  {
    n: 86,
    slug: "nowrap pad 58",
    idea: "nowrap structural pad 58",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:58!important}",
  },
  {
    n: 87,
    slug: "nowrap pad 59",
    idea: "nowrap structural pad 59",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:59!important}",
  },
  {
    n: 88,
    slug: "nowrap pad 60",
    idea: "nowrap structural pad 60",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:60!important}",
  },
  {
    n: 89,
    slug: "nowrap pad 61",
    idea: "nowrap structural pad 61",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:61!important}",
  },
  {
    n: 90,
    slug: "nowrap pad 62",
    idea: "nowrap structural pad 62",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:62!important}",
  },
  {
    n: 91,
    slug: "nowrap pad 63",
    idea: "nowrap structural pad 63",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:63!important}",
  },
  {
    n: 92,
    slug: "nowrap pad 64",
    idea: "nowrap structural pad 64",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:64!important}",
  },
  {
    n: 93,
    slug: "nowrap pad 65",
    idea: "nowrap structural pad 65",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:65!important}",
  },
  {
    n: 94,
    slug: "nowrap pad 66",
    idea: "nowrap structural pad 66",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:66!important}",
  },
  {
    n: 95,
    slug: "nowrap pad 67",
    idea: "nowrap structural pad 67",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:67!important}",
  },
  {
    n: 96,
    slug: "nowrap pad 68",
    idea: "nowrap structural pad 68",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:68!important}",
  },
  {
    n: 97,
    slug: "nowrap pad 69",
    idea: "nowrap structural pad 69",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:69!important}",
  },
  {
    n: 98,
    slug: "nowrap pad 70",
    idea: "nowrap structural pad 70",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:70!important}",
  },
  {
    n: 99,
    slug: "nowrap pad 71",
    idea: "nowrap structural pad 71",
    css: "foreignObject *{white-space:nowrap!important;word-break:keep-all!important;letter-spacing:normal!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:71!important}",
  },
  {
    n: 100,
    slug: "nowrap pad 72",
    idea: "nowrap structural pad 72",
    css: "foreignObject *{white-space:nowrap!important;word-break:normal!important;letter-spacing:0!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:72!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w45: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w45-${num}`,
    label: `Loop AI b11 w45 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w45; white-space nowrap text row; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

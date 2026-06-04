/**
 * Loop AI batch-11 FO recipe shard (worker 46) — text-fix: white-space pre-line/pre-wrap.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "pre-line star",
    idea: "white-space:pre-line on FO *",
    css: "foreignObject *{white-space:pre-line!important}",
  },
  {
    n: 2,
    slug: "pre-wrap star",
    idea: "white-space:pre-wrap on FO *",
    css: "foreignObject *{white-space:pre-wrap!important}",
  },
  {
    n: 3,
    slug: "pre-line ow normal",
    idea: "white-space:pre-line + overflow-wrap:normal",
    css: "foreignObject *{white-space:pre-line!important;overflow-wrap:normal!important}",
  },
  {
    n: 4,
    slug: "pre-line ow break-word",
    idea: "white-space:pre-line + overflow-wrap:break-word",
    css: "foreignObject *{white-space:pre-line!important;overflow-wrap:break-word!important}",
  },
  {
    n: 5,
    slug: "pre-line ow anywhere",
    idea: "white-space:pre-line + overflow-wrap:anywhere",
    css: "foreignObject *{white-space:pre-line!important;overflow-wrap:anywhere!important}",
  },
  {
    n: 6,
    slug: "pre-wrap ow normal",
    idea: "white-space:pre-wrap + overflow-wrap:normal",
    css: "foreignObject *{white-space:pre-wrap!important;overflow-wrap:normal!important}",
  },
  {
    n: 7,
    slug: "pre-wrap ow break-word",
    idea: "white-space:pre-wrap + overflow-wrap:break-word",
    css: "foreignObject *{white-space:pre-wrap!important;overflow-wrap:break-word!important}",
  },
  {
    n: 8,
    slug: "pre-wrap ow anywhere",
    idea: "white-space:pre-wrap + overflow-wrap:anywhere",
    css: "foreignObject *{white-space:pre-wrap!important;overflow-wrap:anywhere!important}",
  },
  {
    n: 9,
    slug: "pre-line wb normal",
    idea: "white-space:pre-line + word-break:normal",
    css: "foreignObject *{white-space:pre-line!important;word-break:normal!important}",
  },
  {
    n: 10,
    slug: "pre-line wb break-word",
    idea: "white-space:pre-line + word-break:break-word",
    css: "foreignObject *{white-space:pre-line!important;word-break:break-word!important}",
  },
  {
    n: 11,
    slug: "pre-line wb break-all",
    idea: "white-space:pre-line + word-break:break-all",
    css: "foreignObject *{white-space:pre-line!important;word-break:break-all!important}",
  },
  {
    n: 12,
    slug: "pre-wrap wb normal",
    idea: "white-space:pre-wrap + word-break:normal",
    css: "foreignObject *{white-space:pre-wrap!important;word-break:normal!important}",
  },
  {
    n: 13,
    slug: "pre-wrap wb break-word",
    idea: "white-space:pre-wrap + word-break:break-word",
    css: "foreignObject *{white-space:pre-wrap!important;word-break:break-word!important}",
  },
  {
    n: 14,
    slug: "pre-wrap wb break-all",
    idea: "white-space:pre-wrap + word-break:break-all",
    css: "foreignObject *{white-space:pre-wrap!important;word-break:break-all!important}",
  },
  {
    n: 15,
    slug: "pre-line text-wrap wrap",
    idea: "white-space:pre-line + text-wrap:wrap",
    css: "foreignObject *{white-space:pre-line!important;text-wrap:wrap!important}",
  },
  {
    n: 16,
    slug: "pre-line text-wrap balance",
    idea: "white-space:pre-line + text-wrap:balance",
    css: "foreignObject *{white-space:pre-line!important;text-wrap:balance!important}",
  },
  {
    n: 17,
    slug: "pre-line text-wrap pretty",
    idea: "white-space:pre-line + text-wrap:pretty",
    css: "foreignObject *{white-space:pre-line!important;text-wrap:pretty!important}",
  },
  {
    n: 18,
    slug: "pre-line text-wrap stable",
    idea: "white-space:pre-line + text-wrap:stable",
    css: "foreignObject *{white-space:pre-line!important;text-wrap:stable!important}",
  },
  {
    n: 19,
    slug: "pre-wrap text-wrap wrap",
    idea: "white-space:pre-wrap + text-wrap:wrap",
    css: "foreignObject *{white-space:pre-wrap!important;text-wrap:wrap!important}",
  },
  {
    n: 20,
    slug: "pre-wrap text-wrap balance",
    idea: "white-space:pre-wrap + text-wrap:balance",
    css: "foreignObject *{white-space:pre-wrap!important;text-wrap:balance!important}",
  },
  {
    n: 21,
    slug: "pre-wrap text-wrap pretty",
    idea: "white-space:pre-wrap + text-wrap:pretty",
    css: "foreignObject *{white-space:pre-wrap!important;text-wrap:pretty!important}",
  },
  {
    n: 22,
    slug: "pre-wrap text-wrap stable",
    idea: "white-space:pre-wrap + text-wrap:stable",
    css: "foreignObject *{white-space:pre-wrap!important;text-wrap:stable!important}",
  },
  {
    n: 23,
    slug: "pre-line hyphens none",
    idea: "white-space:pre-line + hyphens:none",
    css: "foreignObject *{white-space:pre-line!important;hyphens:none!important;-webkit-hyphens:none!important}",
  },
  {
    n: 24,
    slug: "pre-line hyphens auto",
    idea: "white-space:pre-line + hyphens:auto",
    css: "foreignObject *{white-space:pre-line!important;hyphens:auto!important;-webkit-hyphens:auto!important}",
  },
  {
    n: 25,
    slug: "pre-line hyphens manual",
    idea: "white-space:pre-line + hyphens:manual",
    css: "foreignObject *{white-space:pre-line!important;hyphens:manual!important;-webkit-hyphens:manual!important}",
  },
  {
    n: 26,
    slug: "pre-wrap hyphens none",
    idea: "white-space:pre-wrap + hyphens:none",
    css: "foreignObject *{white-space:pre-wrap!important;hyphens:none!important;-webkit-hyphens:none!important}",
  },
  {
    n: 27,
    slug: "pre-wrap hyphens auto",
    idea: "white-space:pre-wrap + hyphens:auto",
    css: "foreignObject *{white-space:pre-wrap!important;hyphens:auto!important;-webkit-hyphens:auto!important}",
  },
  {
    n: 28,
    slug: "pre-wrap hyphens manual",
    idea: "white-space:pre-wrap + hyphens:manual",
    css: "foreignObject *{white-space:pre-wrap!important;hyphens:manual!important;-webkit-hyphens:manual!important}",
  },
  {
    n: 29,
    slug: "pre-line ls normal",
    idea: "white-space:pre-line + letter-spacing:normal",
    css: "foreignObject *{white-space:pre-line!important;letter-spacing:normal!important}",
  },
  {
    n: 30,
    slug: "pre-line ls 0",
    idea: "white-space:pre-line + letter-spacing:0",
    css: "foreignObject *{white-space:pre-line!important;letter-spacing:0!important}",
  },
  {
    n: 31,
    slug: "pre-line ls 0.02em",
    idea: "white-space:pre-line + letter-spacing:0.02em",
    css: "foreignObject *{white-space:pre-line!important;letter-spacing:0.02em!important}",
  },
  {
    n: 32,
    slug: "pre-wrap ls normal",
    idea: "white-space:pre-wrap + letter-spacing:normal",
    css: "foreignObject *{white-space:pre-wrap!important;letter-spacing:normal!important}",
  },
  {
    n: 33,
    slug: "pre-wrap ls 0",
    idea: "white-space:pre-wrap + letter-spacing:0",
    css: "foreignObject *{white-space:pre-wrap!important;letter-spacing:0!important}",
  },
  {
    n: 34,
    slug: "pre-wrap ls 0.02em",
    idea: "white-space:pre-wrap + letter-spacing:0.02em",
    css: "foreignObject *{white-space:pre-wrap!important;letter-spacing:0.02em!important}",
  },
  {
    n: 35,
    slug: "pre-line word-spacing normal",
    idea: "white-space:pre-line + word-spacing:normal",
    css: "foreignObject *{white-space:pre-line!important;word-spacing:normal!important}",
  },
  {
    n: 36,
    slug: "pre-line word-spacing 0",
    idea: "white-space:pre-line + word-spacing:0",
    css: "foreignObject *{white-space:pre-line!important;word-spacing:0!important}",
  },
  {
    n: 37,
    slug: "pre-line word-spacing 0.05em",
    idea: "white-space:pre-line + word-spacing:0.05em",
    css: "foreignObject *{white-space:pre-line!important;word-spacing:0.05em!important}",
  },
  {
    n: 38,
    slug: "pre-wrap word-spacing normal",
    idea: "white-space:pre-wrap + word-spacing:normal",
    css: "foreignObject *{white-space:pre-wrap!important;word-spacing:normal!important}",
  },
  {
    n: 39,
    slug: "pre-wrap word-spacing 0",
    idea: "white-space:pre-wrap + word-spacing:0",
    css: "foreignObject *{white-space:pre-wrap!important;word-spacing:0!important}",
  },
  {
    n: 40,
    slug: "pre-wrap word-spacing 0.05em",
    idea: "white-space:pre-wrap + word-spacing:0.05em",
    css: "foreignObject *{white-space:pre-wrap!important;word-spacing:0.05em!important}",
  },
  {
    n: 41,
    slug: "pre-line p",
    idea: "white-space:pre-line on foreignObject p",
    css: "foreignObject p{white-space:pre-line!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 42,
    slug: "pre-line pre",
    idea: "white-space:pre-line on foreignObject pre",
    css: "foreignObject pre{white-space:pre-line!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 43,
    slug: "pre-line code",
    idea: "white-space:pre-line on foreignObject code",
    css: "foreignObject code{white-space:pre-line!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 44,
    slug: "pre-line label",
    idea: "white-space:pre-line on foreignObject label",
    css: "foreignObject label{white-space:pre-line!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 45,
    slug: "pre-line span",
    idea: "white-space:pre-line on foreignObject span",
    css: "foreignObject span{white-space:pre-line!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 46,
    slug: "pre-line div",
    idea: "white-space:pre-line on foreignObject div",
    css: "foreignObject div{white-space:pre-line!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 47,
    slug: "pre-wrap p",
    idea: "white-space:pre-wrap on foreignObject p",
    css: "foreignObject p{white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 48,
    slug: "pre-wrap pre",
    idea: "white-space:pre-wrap on foreignObject pre",
    css: "foreignObject pre{white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 49,
    slug: "pre-wrap code",
    idea: "white-space:pre-wrap on foreignObject code",
    css: "foreignObject code{white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 50,
    slug: "pre-wrap label",
    idea: "white-space:pre-wrap on foreignObject label",
    css: "foreignObject label{white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 51,
    slug: "pre-wrap span",
    idea: "white-space:pre-wrap on foreignObject span",
    css: "foreignObject span{white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 52,
    slug: "pre-wrap div",
    idea: "white-space:pre-wrap on foreignObject div",
    css: "foreignObject div{white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}",
  },
  {
    n: 53,
    slug: "pad pre-line 0",
    idea: "white-space:pre-line pad 0",
    css: "foreignObject *{white-space:pre-line!important;tab-size:2!important}",
  },
  {
    n: 54,
    slug: "pad pre-wrap 1",
    idea: "white-space:pre-wrap pad 1",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:3!important}",
  },
  {
    n: 55,
    slug: "pad pre-line 2",
    idea: "white-space:pre-line pad 2",
    css: "foreignObject *{white-space:pre-line!important;tab-size:4!important}",
  },
  {
    n: 56,
    slug: "pad pre-wrap 3",
    idea: "white-space:pre-wrap pad 3",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:5!important}",
  },
  {
    n: 57,
    slug: "pad pre-line 4",
    idea: "white-space:pre-line pad 4",
    css: "foreignObject *{white-space:pre-line!important;tab-size:6!important}",
  },
  {
    n: 58,
    slug: "pad pre-wrap 5",
    idea: "white-space:pre-wrap pad 5",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:7!important}",
  },
  {
    n: 59,
    slug: "pad pre-line 6",
    idea: "white-space:pre-line pad 6",
    css: "foreignObject *{white-space:pre-line!important;tab-size:8!important}",
  },
  {
    n: 60,
    slug: "pad pre-wrap 7",
    idea: "white-space:pre-wrap pad 7",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:9!important}",
  },
  {
    n: 61,
    slug: "pad pre-line 8",
    idea: "white-space:pre-line pad 8",
    css: "foreignObject *{white-space:pre-line!important;tab-size:10!important}",
  },
  {
    n: 62,
    slug: "pad pre-wrap 9",
    idea: "white-space:pre-wrap pad 9",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:11!important}",
  },
  {
    n: 63,
    slug: "pad pre-line 10",
    idea: "white-space:pre-line pad 10",
    css: "foreignObject *{white-space:pre-line!important;tab-size:12!important}",
  },
  {
    n: 64,
    slug: "pad pre-wrap 11",
    idea: "white-space:pre-wrap pad 11",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:2!important}",
  },
  {
    n: 65,
    slug: "pad pre-line 12",
    idea: "white-space:pre-line pad 12",
    css: "foreignObject *{white-space:pre-line!important;tab-size:3!important}",
  },
  {
    n: 66,
    slug: "pad pre-wrap 13",
    idea: "white-space:pre-wrap pad 13",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:4!important}",
  },
  {
    n: 67,
    slug: "pad pre-line 14",
    idea: "white-space:pre-line pad 14",
    css: "foreignObject *{white-space:pre-line!important;tab-size:5!important}",
  },
  {
    n: 68,
    slug: "pad pre-wrap 15",
    idea: "white-space:pre-wrap pad 15",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:6!important}",
  },
  {
    n: 69,
    slug: "pad pre-line 16",
    idea: "white-space:pre-line pad 16",
    css: "foreignObject *{white-space:pre-line!important;tab-size:7!important}",
  },
  {
    n: 70,
    slug: "pad pre-wrap 17",
    idea: "white-space:pre-wrap pad 17",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:8!important}",
  },
  {
    n: 71,
    slug: "pad pre-line 18",
    idea: "white-space:pre-line pad 18",
    css: "foreignObject *{white-space:pre-line!important;tab-size:9!important}",
  },
  {
    n: 72,
    slug: "pad pre-wrap 19",
    idea: "white-space:pre-wrap pad 19",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:10!important}",
  },
  {
    n: 73,
    slug: "pad pre-line 20",
    idea: "white-space:pre-line pad 20",
    css: "foreignObject *{white-space:pre-line!important;tab-size:11!important}",
  },
  {
    n: 74,
    slug: "pad pre-wrap 21",
    idea: "white-space:pre-wrap pad 21",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:12!important}",
  },
  {
    n: 75,
    slug: "pad pre-line 22",
    idea: "white-space:pre-line pad 22",
    css: "foreignObject *{white-space:pre-line!important;tab-size:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:22!important}",
  },
  {
    n: 76,
    slug: "pad pre-wrap 23",
    idea: "white-space:pre-wrap pad 23",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:3!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:23!important}",
  },
  {
    n: 77,
    slug: "pad pre-line 24",
    idea: "white-space:pre-line pad 24",
    css: "foreignObject *{white-space:pre-line!important;tab-size:4!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:24!important}",
  },
  {
    n: 78,
    slug: "pad pre-wrap 25",
    idea: "white-space:pre-wrap pad 25",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:5!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:25!important}",
  },
  {
    n: 79,
    slug: "pad pre-line 26",
    idea: "white-space:pre-line pad 26",
    css: "foreignObject *{white-space:pre-line!important;tab-size:6!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:26!important}",
  },
  {
    n: 80,
    slug: "pad pre-wrap 27",
    idea: "white-space:pre-wrap pad 27",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:7!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:27!important}",
  },
  {
    n: 81,
    slug: "pad pre-line 28",
    idea: "white-space:pre-line pad 28",
    css: "foreignObject *{white-space:pre-line!important;tab-size:8!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:28!important}",
  },
  {
    n: 82,
    slug: "pad pre-wrap 29",
    idea: "white-space:pre-wrap pad 29",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:9!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:29!important}",
  },
  {
    n: 83,
    slug: "pad pre-line 30",
    idea: "white-space:pre-line pad 30",
    css: "foreignObject *{white-space:pre-line!important;tab-size:10!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:30!important}",
  },
  {
    n: 84,
    slug: "pad pre-wrap 31",
    idea: "white-space:pre-wrap pad 31",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:11!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:31!important}",
  },
  {
    n: 85,
    slug: "pad pre-line 32",
    idea: "white-space:pre-line pad 32",
    css: "foreignObject *{white-space:pre-line!important;tab-size:12!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:32!important}",
  },
  {
    n: 86,
    slug: "pad pre-wrap 33",
    idea: "white-space:pre-wrap pad 33",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:33!important}",
  },
  {
    n: 87,
    slug: "pad pre-line 34",
    idea: "white-space:pre-line pad 34",
    css: "foreignObject *{white-space:pre-line!important;tab-size:3!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:34!important}",
  },
  {
    n: 88,
    slug: "pad pre-wrap 35",
    idea: "white-space:pre-wrap pad 35",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:4!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:35!important}",
  },
  {
    n: 89,
    slug: "pad pre-line 36",
    idea: "white-space:pre-line pad 36",
    css: "foreignObject *{white-space:pre-line!important;tab-size:5!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:36!important}",
  },
  {
    n: 90,
    slug: "pad pre-wrap 37",
    idea: "white-space:pre-wrap pad 37",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:6!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:37!important}",
  },
  {
    n: 91,
    slug: "pad pre-line 38",
    idea: "white-space:pre-line pad 38",
    css: "foreignObject *{white-space:pre-line!important;tab-size:7!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:38!important}",
  },
  {
    n: 92,
    slug: "pad pre-wrap 39",
    idea: "white-space:pre-wrap pad 39",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:8!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:39!important}",
  },
  {
    n: 93,
    slug: "pad pre-line 40",
    idea: "white-space:pre-line pad 40",
    css: "foreignObject *{white-space:pre-line!important;tab-size:9!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:40!important}",
  },
  {
    n: 94,
    slug: "pad pre-wrap 41",
    idea: "white-space:pre-wrap pad 41",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:10!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:41!important}",
  },
  {
    n: 95,
    slug: "pad pre-line 42",
    idea: "white-space:pre-line pad 42",
    css: "foreignObject *{white-space:pre-line!important;tab-size:11!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:42!important}",
  },
  {
    n: 96,
    slug: "pad pre-wrap 43",
    idea: "white-space:pre-wrap pad 43",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:12!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:43!important}",
  },
  {
    n: 97,
    slug: "pad pre-line 44",
    idea: "white-space:pre-line pad 44",
    css: "foreignObject *{white-space:pre-line!important;tab-size:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:44!important}",
  },
  {
    n: 98,
    slug: "pad pre-wrap 45",
    idea: "white-space:pre-wrap pad 45",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:3!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:45!important}",
  },
  {
    n: 99,
    slug: "pad pre-line 46",
    idea: "white-space:pre-line pad 46",
    css: "foreignObject *{white-space:pre-line!important;tab-size:4!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:46!important}",
  },
  {
    n: 100,
    slug: "pad pre-wrap 47",
    idea: "white-space:pre-wrap pad 47",
    css: "foreignObject *{white-space:pre-wrap!important;tab-size:5!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:47!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w46: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w46-${num}`,
    label: `Loop AI b11 w46 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w46; white-space pre-line/pre-wrap; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

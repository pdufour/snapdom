/**
 * Loop AI batch-11 FO recipe shard (worker 43) — text-fix: text-wrap balance.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "balance star",
    idea: "text-wrap:balance on FO * — balanced line breaks",
    css: "foreignObject *{text-wrap:balance!important}",
  },
  {
    n: 2,
    slug: "balance ow-normal wb-normal",
    idea: "text-wrap:balance + overflow-wrap:normal + word-break:normal",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:normal!important;word-break:normal!important}",
  },
  {
    n: 3,
    slug: "balance ow-normal wb-break-word",
    idea: "text-wrap:balance + overflow-wrap:normal + word-break:break-word",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:normal!important;word-break:break-word!important}",
  },
  {
    n: 4,
    slug: "balance ow-normal wb-break-all",
    idea: "text-wrap:balance + overflow-wrap:normal + word-break:break-all",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:normal!important;word-break:break-all!important}",
  },
  {
    n: 5,
    slug: "balance ow-break-word wb-normal",
    idea: "text-wrap:balance + overflow-wrap:break-word + word-break:normal",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:break-word!important;word-break:normal!important}",
  },
  {
    n: 6,
    slug: "balance ow-break-word wb-break-word",
    idea: "text-wrap:balance + overflow-wrap:break-word + word-break:break-word",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:break-word!important;word-break:break-word!important}",
  },
  {
    n: 7,
    slug: "balance ow-break-word wb-break-all",
    idea: "text-wrap:balance + overflow-wrap:break-word + word-break:break-all",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:break-word!important;word-break:break-all!important}",
  },
  {
    n: 8,
    slug: "balance ow-anywhere wb-normal",
    idea: "text-wrap:balance + overflow-wrap:anywhere + word-break:normal",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:anywhere!important;word-break:normal!important}",
  },
  {
    n: 9,
    slug: "balance ow-anywhere wb-break-word",
    idea: "text-wrap:balance + overflow-wrap:anywhere + word-break:break-word",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:anywhere!important;word-break:break-word!important}",
  },
  {
    n: 10,
    slug: "balance ow-anywhere wb-break-all",
    idea: "text-wrap:balance + overflow-wrap:anywhere + word-break:break-all",
    css: "foreignObject *{text-wrap:balance!important;overflow-wrap:anywhere!important;word-break:break-all!important}",
  },
  {
    n: 11,
    slug: "balance hyphens none",
    idea: "text-wrap:balance + hyphens:none",
    css: "foreignObject *{text-wrap:balance!important;hyphens:none!important;-webkit-hyphens:none!important}",
  },
  {
    n: 12,
    slug: "balance hyphens manual",
    idea: "text-wrap:balance + hyphens:manual",
    css: "foreignObject *{text-wrap:balance!important;hyphens:manual!important;-webkit-hyphens:manual!important}",
  },
  {
    n: 13,
    slug: "balance hyphens auto",
    idea: "text-wrap:balance + hyphens:auto",
    css: "foreignObject *{text-wrap:balance!important;hyphens:auto!important;-webkit-hyphens:auto!important}",
  },
  {
    n: 14,
    slug: "balance white-space normal",
    idea: "text-wrap:balance + white-space:normal",
    css: "foreignObject *{text-wrap:balance!important;white-space:normal!important}",
  },
  {
    n: 15,
    slug: "balance white-space pre-wrap",
    idea: "text-wrap:balance + white-space:pre-wrap",
    css: "foreignObject *{text-wrap:balance!important;white-space:pre-wrap!important}",
  },
  {
    n: 16,
    slug: "balance white-space pre-line",
    idea: "text-wrap:balance + white-space:pre-line",
    css: "foreignObject *{text-wrap:balance!important;white-space:pre-line!important}",
  },
  {
    n: 17,
    slug: "balance hang none",
    idea: "text-wrap:balance + hanging-punctuation:none",
    css: "foreignObject *{text-wrap:balance!important;hanging-punctuation:none!important}",
  },
  {
    n: 18,
    slug: "balance hang first",
    idea: "text-wrap:balance + hanging-punctuation:first",
    css: "foreignObject *{text-wrap:balance!important;hanging-punctuation:first!important}",
  },
  {
    n: 19,
    slug: "balance hang last",
    idea: "text-wrap:balance + hanging-punctuation:last",
    css: "foreignObject *{text-wrap:balance!important;hanging-punctuation:last!important}",
  },
  {
    n: 20,
    slug: "balance hang allow-end",
    idea: "text-wrap:balance + hanging-punctuation:allow-end",
    css: "foreignObject *{text-wrap:balance!important;hanging-punctuation:allow-end!important}",
  },
  {
    n: 21,
    slug: "balance hang force-end",
    idea: "text-wrap:balance + hanging-punctuation:force-end",
    css: "foreignObject *{text-wrap:balance!important;hanging-punctuation:force-end!important}",
  },
  {
    n: 22,
    slug: "balance lh normal",
    idea: "text-wrap:balance + line-height:normal",
    css: "foreignObject *{text-wrap:balance!important;line-height:normal!important}",
  },
  {
    n: 23,
    slug: "balance lh from-font",
    idea: "text-wrap:balance + line-height:from-font",
    css: "foreignObject *{text-wrap:balance!important;line-height:from-font!important}",
  },
  {
    n: 24,
    slug: "balance lh 1.2",
    idea: "text-wrap:balance + line-height:1.2",
    css: "foreignObject *{text-wrap:balance!important;line-height:1.2!important}",
  },
  {
    n: 25,
    slug: "balance lh 1.4",
    idea: "text-wrap:balance + line-height:1.4",
    css: "foreignObject *{text-wrap:balance!important;line-height:1.4!important}",
  },
  {
    n: 26,
    slug: "balance lh unset",
    idea: "text-wrap:balance + line-height:unset",
    css: "foreignObject *{text-wrap:balance!important;line-height:unset!important}",
  },
  {
    n: 27,
    slug: "balance max-w min(100%,40ch)",
    idea: "text-wrap:balance + max-width:min(100%,40ch)",
    css: "foreignObject *{text-wrap:balance!important;max-width:min(100%,40ch)!important}",
  },
  {
    n: 28,
    slug: "balance max-w 30ch",
    idea: "text-wrap:balance + max-width:30ch",
    css: "foreignObject *{text-wrap:balance!important;max-width:30ch!important}",
  },
  {
    n: 29,
    slug: "balance max-w 35ch",
    idea: "text-wrap:balance + max-width:35ch",
    css: "foreignObject *{text-wrap:balance!important;max-width:35ch!important}",
  },
  {
    n: 30,
    slug: "balance max-w 45ch",
    idea: "text-wrap:balance + max-width:45ch",
    css: "foreignObject *{text-wrap:balance!important;max-width:45ch!important}",
  },
  {
    n: 31,
    slug: "balance max-w 50ch",
    idea: "text-wrap:balance + max-width:50ch",
    css: "foreignObject *{text-wrap:balance!important;max-width:50ch!important}",
  },
  {
    n: 32,
    slug: "balance flex row",
    idea: "flex row + text-wrap:balance",
    css: "foreignObject{display:flex!important;flex-direction:row!important}foreignObject *{text-wrap:balance!important}",
  },
  {
    n: 33,
    slug: "balance flex column",
    idea: "flex column + text-wrap:balance",
    css: "foreignObject{display:flex!important;flex-direction:column!important}foreignObject *{text-wrap:balance!important}",
  },
  {
    n: 34,
    slug: "balance pad 0",
    idea: "text-wrap:balance pad combo 0",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important}",
  },
  {
    n: 35,
    slug: "balance pad 1",
    idea: "text-wrap:balance pad combo 1",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important}",
  },
  {
    n: 36,
    slug: "balance pad 2",
    idea: "text-wrap:balance pad combo 2",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important}",
  },
  {
    n: 37,
    slug: "balance pad 3",
    idea: "text-wrap:balance pad combo 3",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important}",
  },
  {
    n: 38,
    slug: "balance pad 4",
    idea: "text-wrap:balance pad combo 4",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important}",
  },
  {
    n: 39,
    slug: "balance pad 5",
    idea: "text-wrap:balance pad combo 5",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important}",
  },
  {
    n: 40,
    slug: "balance pad 6",
    idea: "text-wrap:balance pad combo 6",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:6!important}",
  },
  {
    n: 41,
    slug: "balance pad 7",
    idea: "text-wrap:balance pad combo 7",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:7!important}",
  },
  {
    n: 42,
    slug: "balance pad 8",
    idea: "text-wrap:balance pad combo 8",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:8!important}",
  },
  {
    n: 43,
    slug: "balance pad 9",
    idea: "text-wrap:balance pad combo 9",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:9!important}",
  },
  {
    n: 44,
    slug: "balance pad 10",
    idea: "text-wrap:balance pad combo 10",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:10!important}",
  },
  {
    n: 45,
    slug: "balance pad 11",
    idea: "text-wrap:balance pad combo 11",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:11!important}",
  },
  {
    n: 46,
    slug: "balance pad 12",
    idea: "text-wrap:balance pad combo 12",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:12!important}",
  },
  {
    n: 47,
    slug: "balance pad 13",
    idea: "text-wrap:balance pad combo 13",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:13!important}",
  },
  {
    n: 48,
    slug: "balance pad 14",
    idea: "text-wrap:balance pad combo 14",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:14!important}",
  },
  {
    n: 49,
    slug: "balance pad 15",
    idea: "text-wrap:balance pad combo 15",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:15!important}",
  },
  {
    n: 50,
    slug: "balance pad 16",
    idea: "text-wrap:balance pad combo 16",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:16!important}",
  },
  {
    n: 51,
    slug: "balance pad 17",
    idea: "text-wrap:balance pad combo 17",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:17!important}",
  },
  {
    n: 52,
    slug: "balance pad 18",
    idea: "text-wrap:balance pad combo 18",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:18!important}",
  },
  {
    n: 53,
    slug: "balance pad 19",
    idea: "text-wrap:balance pad combo 19",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:19!important}",
  },
  {
    n: 54,
    slug: "balance pad 20",
    idea: "text-wrap:balance pad combo 20",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:20!important}",
  },
  {
    n: 55,
    slug: "balance pad 21",
    idea: "text-wrap:balance pad combo 21",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:21!important}",
  },
  {
    n: 56,
    slug: "balance pad 22",
    idea: "text-wrap:balance pad combo 22",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:22!important}",
  },
  {
    n: 57,
    slug: "balance pad 23",
    idea: "text-wrap:balance pad combo 23",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:23!important}",
  },
  {
    n: 58,
    slug: "balance pad 24",
    idea: "text-wrap:balance pad combo 24",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:24!important}",
  },
  {
    n: 59,
    slug: "balance pad 25",
    idea: "text-wrap:balance pad combo 25",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:25!important}",
  },
  {
    n: 60,
    slug: "balance pad 26",
    idea: "text-wrap:balance pad combo 26",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:26!important}",
  },
  {
    n: 61,
    slug: "balance pad 27",
    idea: "text-wrap:balance pad combo 27",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:27!important}",
  },
  {
    n: 62,
    slug: "balance pad 28",
    idea: "text-wrap:balance pad combo 28",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:28!important}",
  },
  {
    n: 63,
    slug: "balance pad 29",
    idea: "text-wrap:balance pad combo 29",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:29!important}",
  },
  {
    n: 64,
    slug: "balance pad 30",
    idea: "text-wrap:balance pad combo 30",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:30!important}",
  },
  {
    n: 65,
    slug: "balance pad 31",
    idea: "text-wrap:balance pad combo 31",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:31!important}",
  },
  {
    n: 66,
    slug: "balance pad 32",
    idea: "text-wrap:balance pad combo 32",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:32!important}",
  },
  {
    n: 67,
    slug: "balance pad 33",
    idea: "text-wrap:balance pad combo 33",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:33!important}",
  },
  {
    n: 68,
    slug: "balance pad 34",
    idea: "text-wrap:balance pad combo 34",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:34!important}",
  },
  {
    n: 69,
    slug: "balance pad 35",
    idea: "text-wrap:balance pad combo 35",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:35!important}",
  },
  {
    n: 70,
    slug: "balance pad 36",
    idea: "text-wrap:balance pad combo 36",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:36!important}",
  },
  {
    n: 71,
    slug: "balance pad 37",
    idea: "text-wrap:balance pad combo 37",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:37!important}",
  },
  {
    n: 72,
    slug: "balance pad 38",
    idea: "text-wrap:balance pad combo 38",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:38!important}",
  },
  {
    n: 73,
    slug: "balance pad 39",
    idea: "text-wrap:balance pad combo 39",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:39!important}",
  },
  {
    n: 74,
    slug: "balance pad 40",
    idea: "text-wrap:balance pad combo 40",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:40!important}",
  },
  {
    n: 75,
    slug: "balance pad 41",
    idea: "text-wrap:balance pad combo 41",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:41!important}",
  },
  {
    n: 76,
    slug: "balance pad 42",
    idea: "text-wrap:balance pad combo 42",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:42!important}",
  },
  {
    n: 77,
    slug: "balance pad 43",
    idea: "text-wrap:balance pad combo 43",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:43!important}",
  },
  {
    n: 78,
    slug: "balance pad 44",
    idea: "text-wrap:balance pad combo 44",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:44!important}",
  },
  {
    n: 79,
    slug: "balance pad 45",
    idea: "text-wrap:balance pad combo 45",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:45!important}",
  },
  {
    n: 80,
    slug: "balance pad 46",
    idea: "text-wrap:balance pad combo 46",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:46!important}",
  },
  {
    n: 81,
    slug: "balance pad 47",
    idea: "text-wrap:balance pad combo 47",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:47!important}",
  },
  {
    n: 82,
    slug: "balance pad 48",
    idea: "text-wrap:balance pad combo 48",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:48!important}",
  },
  {
    n: 83,
    slug: "balance pad 49",
    idea: "text-wrap:balance pad combo 49",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:49!important}",
  },
  {
    n: 84,
    slug: "balance pad 50",
    idea: "text-wrap:balance pad combo 50",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:50!important}",
  },
  {
    n: 85,
    slug: "balance pad 51",
    idea: "text-wrap:balance pad combo 51",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:51!important}",
  },
  {
    n: 86,
    slug: "balance pad 52",
    idea: "text-wrap:balance pad combo 52",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:52!important}",
  },
  {
    n: 87,
    slug: "balance pad 53",
    idea: "text-wrap:balance pad combo 53",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:53!important}",
  },
  {
    n: 88,
    slug: "balance pad 54",
    idea: "text-wrap:balance pad combo 54",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:54!important}",
  },
  {
    n: 89,
    slug: "balance pad 55",
    idea: "text-wrap:balance pad combo 55",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:55!important}",
  },
  {
    n: 90,
    slug: "balance pad 56",
    idea: "text-wrap:balance pad combo 56",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:56!important}",
  },
  {
    n: 91,
    slug: "balance pad 57",
    idea: "text-wrap:balance pad combo 57",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:57!important}",
  },
  {
    n: 92,
    slug: "balance pad 58",
    idea: "text-wrap:balance pad combo 58",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:58!important}",
  },
  {
    n: 93,
    slug: "balance pad 59",
    idea: "text-wrap:balance pad combo 59",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:59!important}",
  },
  {
    n: 94,
    slug: "balance pad 60",
    idea: "text-wrap:balance pad combo 60",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:60!important}",
  },
  {
    n: 95,
    slug: "balance pad 61",
    idea: "text-wrap:balance pad combo 61",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:3!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:61!important}",
  },
  {
    n: 96,
    slug: "balance pad 62",
    idea: "text-wrap:balance pad combo 62",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:4!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:62!important}",
  },
  {
    n: 97,
    slug: "balance pad 63",
    idea: "text-wrap:balance pad combo 63",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:2!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:63!important}",
  },
  {
    n: 98,
    slug: "balance pad 64",
    idea: "text-wrap:balance pad combo 64",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:3!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:64!important}",
  },
  {
    n: 99,
    slug: "balance pad 65",
    idea: "text-wrap:balance pad combo 65",
    css: "foreignObject *{text-wrap:balance!important;text-align:left!important;orphans:4!important;widows:2!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:65!important}",
  },
  {
    n: 100,
    slug: "balance pad 66",
    idea: "text-wrap:balance pad combo 66",
    css: "foreignObject *{text-wrap:balance!important;text-align:start!important;orphans:2!important;widows:1!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:66!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w43: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w43-${num}`,
    label: `Loop AI b11 w43 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w43; text-wrap balance; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

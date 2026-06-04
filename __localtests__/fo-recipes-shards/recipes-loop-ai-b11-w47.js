/**
 * Loop AI batch-11 FO recipe shard (worker 47) — text-fix: vertical-align baseline flex.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "valign baseline star",
    idea: "vertical-align:baseline on FO *",
    css: "foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 2,
    slug: "valign bottom star",
    idea: "vertical-align:bottom on FO *",
    css: "foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 3,
    slug: "valign text-bottom star",
    idea: "vertical-align:text-bottom on FO *",
    css: "foreignObject *{vertical-align:text-bottom!important;display:inline!important}",
  },
  {
    n: 4,
    slug: "flex baseline row valign baseline",
    idea: "flex baseline row + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 5,
    slug: "flex baseline row valign bottom",
    idea: "flex baseline row + vertical-align:bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 6,
    slug: "flex baseline row valign text-bottom",
    idea: "flex baseline row + vertical-align:text-bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:text-bottom!important;display:inline!important}",
  },
  {
    n: 7,
    slug: "inline-flex baseline valign baseline",
    idea: "inline-flex baseline + vertical-align:baseline",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}",
  },
  {
    n: 8,
    slug: "inline-flex baseline valign bottom",
    idea: "inline-flex baseline + vertical-align:bottom",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:bottom!important}",
  },
  {
    n: 9,
    slug: "inline-flex baseline valign text-bottom",
    idea: "inline-flex baseline + vertical-align:text-bottom",
    css: "foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:text-bottom!important}",
  },
  {
    n: 10,
    slug: "flex center valign baseline",
    idea: "align-items:center + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 11,
    slug: "flex center valign bottom",
    idea: "align-items:center + vertical-align:bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 12,
    slug: "flex flex-start valign baseline",
    idea: "align-items:flex-start + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 13,
    slug: "flex flex-start valign bottom",
    idea: "align-items:flex-start + vertical-align:bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;overflow:visible!important}foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 14,
    slug: "flex flex-end valign baseline",
    idea: "align-items:flex-end + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 15,
    slug: "flex flex-end valign bottom",
    idea: "align-items:flex-end + vertical-align:bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;overflow:visible!important}foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 16,
    slug: "flex stretch valign baseline",
    idea: "align-items:stretch + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 17,
    slug: "flex stretch valign bottom",
    idea: "align-items:stretch + vertical-align:bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 18,
    slug: "nav flex baseline valign baseline",
    idea: "nav flex baseline + a vertical-align:baseline",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:baseline!important;display:inline-block!important}",
  },
  {
    n: 19,
    slug: "nav flex baseline valign bottom",
    idea: "nav flex baseline + a vertical-align:bottom",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:bottom!important;display:inline-block!important}",
  },
  {
    n: 20,
    slug: "nav flex baseline valign text-bottom",
    idea: "nav flex baseline + a vertical-align:text-bottom",
    css: "foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:text-bottom!important;display:inline-block!important}",
  },
  {
    n: 21,
    slug: "align-self baseline valign baseline",
    idea: "align-self:baseline + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{align-self:baseline!important;vertical-align:baseline!important}",
  },
  {
    n: 22,
    slug: "align-self center valign baseline",
    idea: "align-self:center + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{align-self:center!important;vertical-align:baseline!important}",
  },
  {
    n: 23,
    slug: "align-self flex-end valign baseline",
    idea: "align-self:flex-end + vertical-align:baseline",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{align-self:flex-end!important;vertical-align:baseline!important}",
  },
  {
    n: 24,
    slug: "baseline flex pin lh",
    idea: "flex baseline + h2-pin-line-height-from-live",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 25,
    slug: "pad flex baseline 0",
    idea: "flex baseline valign pad 0",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 26,
    slug: "pad flex baseline 1",
    idea: "flex baseline valign pad 1",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 27,
    slug: "pad flex baseline 2",
    idea: "flex baseline valign pad 2",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 28,
    slug: "pad flex baseline 3",
    idea: "flex baseline valign pad 3",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 29,
    slug: "pad flex baseline 4",
    idea: "flex baseline valign pad 4",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important}",
  },
  {
    n: 30,
    slug: "pad flex baseline 5",
    idea: "flex baseline valign pad 5",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:5!important}",
  },
  {
    n: 31,
    slug: "pad flex baseline 6",
    idea: "flex baseline valign pad 6",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:6!important}",
  },
  {
    n: 32,
    slug: "pad flex baseline 7",
    idea: "flex baseline valign pad 7",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:7!important}",
  },
  {
    n: 33,
    slug: "pad flex baseline 8",
    idea: "flex baseline valign pad 8",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:8!important}",
  },
  {
    n: 34,
    slug: "pad flex baseline 9",
    idea: "flex baseline valign pad 9",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:9!important}",
  },
  {
    n: 35,
    slug: "pad flex baseline 10",
    idea: "flex baseline valign pad 10",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:10!important}",
  },
  {
    n: 36,
    slug: "pad flex baseline 11",
    idea: "flex baseline valign pad 11",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:11!important}",
  },
  {
    n: 37,
    slug: "pad flex baseline 12",
    idea: "flex baseline valign pad 12",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:12!important}",
  },
  {
    n: 38,
    slug: "pad flex baseline 13",
    idea: "flex baseline valign pad 13",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:13!important}",
  },
  {
    n: 39,
    slug: "pad flex baseline 14",
    idea: "flex baseline valign pad 14",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:14!important}",
  },
  {
    n: 40,
    slug: "pad flex baseline 15",
    idea: "flex baseline valign pad 15",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:15!important}",
  },
  {
    n: 41,
    slug: "pad flex baseline 16",
    idea: "flex baseline valign pad 16",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:16!important}",
  },
  {
    n: 42,
    slug: "pad flex baseline 17",
    idea: "flex baseline valign pad 17",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:17!important}",
  },
  {
    n: 43,
    slug: "pad flex baseline 18",
    idea: "flex baseline valign pad 18",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:18!important}",
  },
  {
    n: 44,
    slug: "pad flex baseline 19",
    idea: "flex baseline valign pad 19",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:19!important}",
  },
  {
    n: 45,
    slug: "pad flex baseline 20",
    idea: "flex baseline valign pad 20",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:20!important}",
  },
  {
    n: 46,
    slug: "pad flex baseline 21",
    idea: "flex baseline valign pad 21",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:21!important}",
  },
  {
    n: 47,
    slug: "pad flex baseline 22",
    idea: "flex baseline valign pad 22",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:22!important}",
  },
  {
    n: 48,
    slug: "pad flex baseline 23",
    idea: "flex baseline valign pad 23",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:23!important}",
  },
  {
    n: 49,
    slug: "pad flex baseline 24",
    idea: "flex baseline valign pad 24",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:24!important}",
  },
  {
    n: 50,
    slug: "pad flex baseline 25",
    idea: "flex baseline valign pad 25",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:25!important}",
  },
  {
    n: 51,
    slug: "pad flex baseline 26",
    idea: "flex baseline valign pad 26",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:26!important}",
  },
  {
    n: 52,
    slug: "pad flex baseline 27",
    idea: "flex baseline valign pad 27",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:27!important}",
  },
  {
    n: 53,
    slug: "pad flex baseline 28",
    idea: "flex baseline valign pad 28",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:28!important}",
  },
  {
    n: 54,
    slug: "pad flex baseline 29",
    idea: "flex baseline valign pad 29",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:29!important}",
  },
  {
    n: 55,
    slug: "pad flex baseline 30",
    idea: "flex baseline valign pad 30",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:30!important}",
  },
  {
    n: 56,
    slug: "pad flex baseline 31",
    idea: "flex baseline valign pad 31",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:31!important}",
  },
  {
    n: 57,
    slug: "pad flex baseline 32",
    idea: "flex baseline valign pad 32",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:32!important}",
  },
  {
    n: 58,
    slug: "pad flex baseline 33",
    idea: "flex baseline valign pad 33",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:33!important}",
  },
  {
    n: 59,
    slug: "pad flex baseline 34",
    idea: "flex baseline valign pad 34",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:34!important}",
  },
  {
    n: 60,
    slug: "pad flex baseline 35",
    idea: "flex baseline valign pad 35",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:35!important}",
  },
  {
    n: 61,
    slug: "pad flex baseline 36",
    idea: "flex baseline valign pad 36",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:36!important}",
  },
  {
    n: 62,
    slug: "pad flex baseline 37",
    idea: "flex baseline valign pad 37",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:37!important}",
  },
  {
    n: 63,
    slug: "pad flex baseline 38",
    idea: "flex baseline valign pad 38",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:38!important}",
  },
  {
    n: 64,
    slug: "pad flex baseline 39",
    idea: "flex baseline valign pad 39",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:39!important}",
  },
  {
    n: 65,
    slug: "pad flex baseline 40",
    idea: "flex baseline valign pad 40",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:40!important}",
  },
  {
    n: 66,
    slug: "pad flex baseline 41",
    idea: "flex baseline valign pad 41",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:41!important}",
  },
  {
    n: 67,
    slug: "pad flex baseline 42",
    idea: "flex baseline valign pad 42",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:42!important}",
  },
  {
    n: 68,
    slug: "pad flex baseline 43",
    idea: "flex baseline valign pad 43",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:43!important}",
  },
  {
    n: 69,
    slug: "pad flex baseline 44",
    idea: "flex baseline valign pad 44",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:44!important}",
  },
  {
    n: 70,
    slug: "pad flex baseline 45",
    idea: "flex baseline valign pad 45",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:45!important}",
  },
  {
    n: 71,
    slug: "pad flex baseline 46",
    idea: "flex baseline valign pad 46",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:46!important}",
  },
  {
    n: 72,
    slug: "pad flex baseline 47",
    idea: "flex baseline valign pad 47",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:47!important}",
  },
  {
    n: 73,
    slug: "pad flex baseline 48",
    idea: "flex baseline valign pad 48",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:48!important}",
  },
  {
    n: 74,
    slug: "pad flex baseline 49",
    idea: "flex baseline valign pad 49",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:49!important}",
  },
  {
    n: 75,
    slug: "pad flex baseline 50",
    idea: "flex baseline valign pad 50",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:50!important}",
  },
  {
    n: 76,
    slug: "pad flex baseline 51",
    idea: "flex baseline valign pad 51",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:51!important}",
  },
  {
    n: 77,
    slug: "pad flex baseline 52",
    idea: "flex baseline valign pad 52",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:52!important}",
  },
  {
    n: 78,
    slug: "pad flex baseline 53",
    idea: "flex baseline valign pad 53",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:53!important}",
  },
  {
    n: 79,
    slug: "pad flex baseline 54",
    idea: "flex baseline valign pad 54",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:54!important}",
  },
  {
    n: 80,
    slug: "pad flex baseline 55",
    idea: "flex baseline valign pad 55",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:55!important}",
  },
  {
    n: 81,
    slug: "pad flex baseline 56",
    idea: "flex baseline valign pad 56",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:56!important}",
  },
  {
    n: 82,
    slug: "pad flex baseline 57",
    idea: "flex baseline valign pad 57",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:57!important}",
  },
  {
    n: 83,
    slug: "pad flex baseline 58",
    idea: "flex baseline valign pad 58",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:58!important}",
  },
  {
    n: 84,
    slug: "pad flex baseline 59",
    idea: "flex baseline valign pad 59",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:59!important}",
  },
  {
    n: 85,
    slug: "pad flex baseline 60",
    idea: "flex baseline valign pad 60",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:60!important}",
  },
  {
    n: 86,
    slug: "pad flex baseline 61",
    idea: "flex baseline valign pad 61",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:61!important}",
  },
  {
    n: 87,
    slug: "pad flex baseline 62",
    idea: "flex baseline valign pad 62",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:62!important}",
  },
  {
    n: 88,
    slug: "pad flex baseline 63",
    idea: "flex baseline valign pad 63",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:63!important}",
  },
  {
    n: 89,
    slug: "pad flex baseline 64",
    idea: "flex baseline valign pad 64",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:64!important}",
  },
  {
    n: 90,
    slug: "pad flex baseline 65",
    idea: "flex baseline valign pad 65",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:65!important}",
  },
  {
    n: 91,
    slug: "pad flex baseline 66",
    idea: "flex baseline valign pad 66",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:66!important}",
  },
  {
    n: 92,
    slug: "pad flex baseline 67",
    idea: "flex baseline valign pad 67",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:67!important}",
  },
  {
    n: 93,
    slug: "pad flex baseline 68",
    idea: "flex baseline valign pad 68",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:68!important}",
  },
  {
    n: 94,
    slug: "pad flex baseline 69",
    idea: "flex baseline valign pad 69",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:69!important}",
  },
  {
    n: 95,
    slug: "pad flex baseline 70",
    idea: "flex baseline valign pad 70",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:70!important}",
  },
  {
    n: 96,
    slug: "pad flex baseline 71",
    idea: "flex baseline valign pad 71",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.01em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:71!important}",
  },
  {
    n: 97,
    slug: "pad flex baseline 72",
    idea: "flex baseline valign pad 72",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.02em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:72!important}",
  },
  {
    n: 98,
    slug: "pad flex baseline 73",
    idea: "flex baseline valign pad 73",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.03em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:73!important}",
  },
  {
    n: 99,
    slug: "pad flex baseline 74",
    idea: "flex baseline valign pad 74",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0.04em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:74!important}",
  },
  {
    n: 100,
    slug: "pad flex baseline 75",
    idea: "flex baseline valign pad 75",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important;gap:0em!important}foreignObject *{vertical-align:baseline!important;display:inline!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:75!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w47: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w47-${num}`,
    label: `Loop AI b11 w47 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w47; vertical-align baseline + flex cross-axis; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

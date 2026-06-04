/**
 * Loop AI batch-11 FO recipe shard (worker 44) — text-fix: text-wrap pretty/stable.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "pretty star",
    idea: "text-wrap:pretty on FO *",
    css: "foreignObject *{text-wrap:pretty!important}",
  },
  {
    n: 2,
    slug: "stable star",
    idea: "text-wrap:stable on FO *",
    css: "foreignObject *{text-wrap:stable!important}",
  },
  {
    n: 3,
    slug: "wrap star",
    idea: "text-wrap:wrap on FO *",
    css: "foreignObject *{text-wrap:wrap!important}",
  },
  {
    n: 4,
    slug: "pretty ow normal",
    idea: "text-wrap:pretty + overflow-wrap:normal",
    css: "foreignObject *{text-wrap:pretty!important;overflow-wrap:normal!important}",
  },
  {
    n: 5,
    slug: "pretty ow break-word",
    idea: "text-wrap:pretty + overflow-wrap:break-word",
    css: "foreignObject *{text-wrap:pretty!important;overflow-wrap:break-word!important}",
  },
  {
    n: 6,
    slug: "stable ow normal",
    idea: "text-wrap:stable + overflow-wrap:normal",
    css: "foreignObject *{text-wrap:stable!important;overflow-wrap:normal!important}",
  },
  {
    n: 7,
    slug: "stable ow break-word",
    idea: "text-wrap:stable + overflow-wrap:break-word",
    css: "foreignObject *{text-wrap:stable!important;overflow-wrap:break-word!important}",
  },
  {
    n: 8,
    slug: "wrap ow normal",
    idea: "text-wrap:wrap + overflow-wrap:normal",
    css: "foreignObject *{text-wrap:wrap!important;overflow-wrap:normal!important}",
  },
  {
    n: 9,
    slug: "wrap ow break-word",
    idea: "text-wrap:wrap + overflow-wrap:break-word",
    css: "foreignObject *{text-wrap:wrap!important;overflow-wrap:break-word!important}",
  },
  {
    n: 10,
    slug: "pretty ws normal",
    idea: "text-wrap:pretty + white-space:normal",
    css: "foreignObject *{text-wrap:pretty!important;white-space:normal!important}",
  },
  {
    n: 11,
    slug: "pretty ws nowrap",
    idea: "text-wrap:pretty + white-space:nowrap",
    css: "foreignObject *{text-wrap:pretty!important;white-space:nowrap!important}",
  },
  {
    n: 12,
    slug: "pretty ws pre-wrap",
    idea: "text-wrap:pretty + white-space:pre-wrap",
    css: "foreignObject *{text-wrap:pretty!important;white-space:pre-wrap!important}",
  },
  {
    n: 13,
    slug: "stable ws normal",
    idea: "text-wrap:stable + white-space:normal",
    css: "foreignObject *{text-wrap:stable!important;white-space:normal!important}",
  },
  {
    n: 14,
    slug: "stable ws nowrap",
    idea: "text-wrap:stable + white-space:nowrap",
    css: "foreignObject *{text-wrap:stable!important;white-space:nowrap!important}",
  },
  {
    n: 15,
    slug: "stable ws pre-wrap",
    idea: "text-wrap:stable + white-space:pre-wrap",
    css: "foreignObject *{text-wrap:stable!important;white-space:pre-wrap!important}",
  },
  {
    n: 16,
    slug: "wrap ws normal",
    idea: "text-wrap:wrap + white-space:normal",
    css: "foreignObject *{text-wrap:wrap!important;white-space:normal!important}",
  },
  {
    n: 17,
    slug: "wrap ws nowrap",
    idea: "text-wrap:wrap + white-space:nowrap",
    css: "foreignObject *{text-wrap:wrap!important;white-space:nowrap!important}",
  },
  {
    n: 18,
    slug: "wrap ws pre-wrap",
    idea: "text-wrap:wrap + white-space:pre-wrap",
    css: "foreignObject *{text-wrap:wrap!important;white-space:pre-wrap!important}",
  },
  {
    n: 19,
    slug: "pretty hyphens none",
    idea: "text-wrap:pretty + hyphens:none",
    css: "foreignObject *{text-wrap:pretty!important;hyphens:none!important;-webkit-hyphens:none!important}",
  },
  {
    n: 20,
    slug: "pretty hyphens auto",
    idea: "text-wrap:pretty + hyphens:auto",
    css: "foreignObject *{text-wrap:pretty!important;hyphens:auto!important;-webkit-hyphens:auto!important}",
  },
  {
    n: 21,
    slug: "stable hyphens none",
    idea: "text-wrap:stable + hyphens:none",
    css: "foreignObject *{text-wrap:stable!important;hyphens:none!important;-webkit-hyphens:none!important}",
  },
  {
    n: 22,
    slug: "stable hyphens auto",
    idea: "text-wrap:stable + hyphens:auto",
    css: "foreignObject *{text-wrap:stable!important;hyphens:auto!important;-webkit-hyphens:auto!important}",
  },
  {
    n: 23,
    slug: "wrap hyphens none",
    idea: "text-wrap:wrap + hyphens:none",
    css: "foreignObject *{text-wrap:wrap!important;hyphens:none!important;-webkit-hyphens:none!important}",
  },
  {
    n: 24,
    slug: "wrap hyphens auto",
    idea: "text-wrap:wrap + hyphens:auto",
    css: "foreignObject *{text-wrap:wrap!important;hyphens:auto!important;-webkit-hyphens:auto!important}",
  },
  {
    n: 25,
    slug: "pretty hang first",
    idea: "text-wrap:pretty + hanging-punctuation:first",
    css: "foreignObject *{text-wrap:pretty!important;hanging-punctuation:first!important}",
  },
  {
    n: 26,
    slug: "pretty hang allow-end",
    idea: "text-wrap:pretty + hanging-punctuation:allow-end",
    css: "foreignObject *{text-wrap:pretty!important;hanging-punctuation:allow-end!important}",
  },
  {
    n: 27,
    slug: "stable hang first",
    idea: "text-wrap:stable + hanging-punctuation:first",
    css: "foreignObject *{text-wrap:stable!important;hanging-punctuation:first!important}",
  },
  {
    n: 28,
    slug: "stable hang allow-end",
    idea: "text-wrap:stable + hanging-punctuation:allow-end",
    css: "foreignObject *{text-wrap:stable!important;hanging-punctuation:allow-end!important}",
  },
  {
    n: 29,
    slug: "wrap hang first",
    idea: "text-wrap:wrap + hanging-punctuation:first",
    css: "foreignObject *{text-wrap:wrap!important;hanging-punctuation:first!important}",
  },
  {
    n: 30,
    slug: "wrap hang allow-end",
    idea: "text-wrap:wrap + hanging-punctuation:allow-end",
    css: "foreignObject *{text-wrap:wrap!important;hanging-punctuation:allow-end!important}",
  },
  {
    n: 31,
    slug: "pretty+stable",
    idea: "pretty then stable on star",
    css: "foreignObject *{text-wrap:pretty!important;-webkit-text-wrap:stable!important}",
  },
  {
    n: 32,
    slug: "stable+wrap",
    idea: "stable + wrap keywords",
    css: "foreignObject *{text-wrap:stable!important;-webkit-text-wrap:wrap!important}",
  },
  {
    n: 33,
    slug: "wrap+nowrap",
    idea: "text-wrap:wrap + white-space:nowrap",
    css: "foreignObject *{text-wrap:wrap!important;-webkit-text-wrap:nowrap!important}",
  },
  {
    n: 34,
    slug: "pad pretty 0",
    idea: "text-wrap:pretty structural pad 0",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.00!important}",
  },
  {
    n: 35,
    slug: "pad stable 1",
    idea: "text-wrap:stable structural pad 1",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.03!important}",
  },
  {
    n: 36,
    slug: "pad wrap 2",
    idea: "text-wrap:wrap structural pad 2",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.06!important}",
  },
  {
    n: 37,
    slug: "pad pretty 3",
    idea: "text-wrap:pretty structural pad 3",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.09!important}",
  },
  {
    n: 38,
    slug: "pad stable 4",
    idea: "text-wrap:stable structural pad 4",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.12!important}",
  },
  {
    n: 39,
    slug: "pad wrap 5",
    idea: "text-wrap:wrap structural pad 5",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.15!important}",
  },
  {
    n: 40,
    slug: "pad pretty 6",
    idea: "text-wrap:pretty structural pad 6",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.18!important}",
  },
  {
    n: 41,
    slug: "pad stable 7",
    idea: "text-wrap:stable structural pad 7",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.21!important}",
  },
  {
    n: 42,
    slug: "pad wrap 8",
    idea: "text-wrap:wrap structural pad 8",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.24!important}",
  },
  {
    n: 43,
    slug: "pad pretty 9",
    idea: "text-wrap:pretty structural pad 9",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.27!important}",
  },
  {
    n: 44,
    slug: "pad stable 10",
    idea: "text-wrap:stable structural pad 10",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.30!important}",
  },
  {
    n: 45,
    slug: "pad wrap 11",
    idea: "text-wrap:wrap structural pad 11",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.33!important}",
  },
  {
    n: 46,
    slug: "pad pretty 12",
    idea: "text-wrap:pretty structural pad 12",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.36!important}",
  },
  {
    n: 47,
    slug: "pad stable 13",
    idea: "text-wrap:stable structural pad 13",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.39!important}",
  },
  {
    n: 48,
    slug: "pad wrap 14",
    idea: "text-wrap:wrap structural pad 14",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.42!important}",
  },
  {
    n: 49,
    slug: "pad pretty 15",
    idea: "text-wrap:pretty structural pad 15",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.45!important}",
  },
  {
    n: 50,
    slug: "pad stable 16",
    idea: "text-wrap:stable structural pad 16",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.48!important}",
  },
  {
    n: 51,
    slug: "pad wrap 17",
    idea: "text-wrap:wrap structural pad 17",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.00!important}",
  },
  {
    n: 52,
    slug: "pad pretty 18",
    idea: "text-wrap:pretty structural pad 18",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.03!important}",
  },
  {
    n: 53,
    slug: "pad stable 19",
    idea: "text-wrap:stable structural pad 19",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.06!important}",
  },
  {
    n: 54,
    slug: "pad wrap 20",
    idea: "text-wrap:wrap structural pad 20",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.09!important}",
  },
  {
    n: 55,
    slug: "pad pretty 21",
    idea: "text-wrap:pretty structural pad 21",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.12!important}",
  },
  {
    n: 56,
    slug: "pad stable 22",
    idea: "text-wrap:stable structural pad 22",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.15!important}",
  },
  {
    n: 57,
    slug: "pad wrap 23",
    idea: "text-wrap:wrap structural pad 23",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.18!important}",
  },
  {
    n: 58,
    slug: "pad pretty 24",
    idea: "text-wrap:pretty structural pad 24",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.21!important}",
  },
  {
    n: 59,
    slug: "pad stable 25",
    idea: "text-wrap:stable structural pad 25",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.24!important}",
  },
  {
    n: 60,
    slug: "pad wrap 26",
    idea: "text-wrap:wrap structural pad 26",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.27!important}",
  },
  {
    n: 61,
    slug: "pad pretty 27",
    idea: "text-wrap:pretty structural pad 27",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.30!important}",
  },
  {
    n: 62,
    slug: "pad stable 28",
    idea: "text-wrap:stable structural pad 28",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.33!important}",
  },
  {
    n: 63,
    slug: "pad wrap 29",
    idea: "text-wrap:wrap structural pad 29",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.36!important}",
  },
  {
    n: 64,
    slug: "pad pretty 30",
    idea: "text-wrap:pretty structural pad 30",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.39!important}",
  },
  {
    n: 65,
    slug: "pad stable 31",
    idea: "text-wrap:stable structural pad 31",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.42!important}",
  },
  {
    n: 66,
    slug: "pad wrap 32",
    idea: "text-wrap:wrap structural pad 32",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.45!important}",
  },
  {
    n: 67,
    slug: "pad pretty 33",
    idea: "text-wrap:pretty structural pad 33",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.48!important}",
  },
  {
    n: 68,
    slug: "pad stable 34",
    idea: "text-wrap:stable structural pad 34",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.00!important}",
  },
  {
    n: 69,
    slug: "pad wrap 35",
    idea: "text-wrap:wrap structural pad 35",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.03!important}",
  },
  {
    n: 70,
    slug: "pad pretty 36",
    idea: "text-wrap:pretty structural pad 36",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.06!important}",
  },
  {
    n: 71,
    slug: "pad stable 37",
    idea: "text-wrap:stable structural pad 37",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.09!important}",
  },
  {
    n: 72,
    slug: "pad wrap 38",
    idea: "text-wrap:wrap structural pad 38",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.12!important}",
  },
  {
    n: 73,
    slug: "pad pretty 39",
    idea: "text-wrap:pretty structural pad 39",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.15!important}",
  },
  {
    n: 74,
    slug: "pad stable 40",
    idea: "text-wrap:stable structural pad 40",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.18!important}",
  },
  {
    n: 75,
    slug: "pad wrap 41",
    idea: "text-wrap:wrap structural pad 41",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.21!important}",
  },
  {
    n: 76,
    slug: "pad pretty 42",
    idea: "text-wrap:pretty structural pad 42",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.24!important}",
  },
  {
    n: 77,
    slug: "pad stable 43",
    idea: "text-wrap:stable structural pad 43",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.27!important}",
  },
  {
    n: 78,
    slug: "pad wrap 44",
    idea: "text-wrap:wrap structural pad 44",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.30!important}",
  },
  {
    n: 79,
    slug: "pad pretty 45",
    idea: "text-wrap:pretty structural pad 45",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.33!important}",
  },
  {
    n: 80,
    slug: "pad stable 46",
    idea: "text-wrap:stable structural pad 46",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.36!important}",
  },
  {
    n: 81,
    slug: "pad wrap 47",
    idea: "text-wrap:wrap structural pad 47",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.39!important}",
  },
  {
    n: 82,
    slug: "pad pretty 48",
    idea: "text-wrap:pretty structural pad 48",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.42!important}",
  },
  {
    n: 83,
    slug: "pad stable 49",
    idea: "text-wrap:stable structural pad 49",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.45!important}",
  },
  {
    n: 84,
    slug: "pad wrap 50",
    idea: "text-wrap:wrap structural pad 50",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.48!important}",
  },
  {
    n: 85,
    slug: "pad pretty 51",
    idea: "text-wrap:pretty structural pad 51",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.00!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:51!important}",
  },
  {
    n: 86,
    slug: "pad stable 52",
    idea: "text-wrap:stable structural pad 52",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.03!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:52!important}",
  },
  {
    n: 87,
    slug: "pad wrap 53",
    idea: "text-wrap:wrap structural pad 53",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.06!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:53!important}",
  },
  {
    n: 88,
    slug: "pad pretty 54",
    idea: "text-wrap:pretty structural pad 54",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.09!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:54!important}",
  },
  {
    n: 89,
    slug: "pad stable 55",
    idea: "text-wrap:stable structural pad 55",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.12!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:55!important}",
  },
  {
    n: 90,
    slug: "pad wrap 56",
    idea: "text-wrap:wrap structural pad 56",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.15!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:56!important}",
  },
  {
    n: 91,
    slug: "pad pretty 57",
    idea: "text-wrap:pretty structural pad 57",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.18!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:57!important}",
  },
  {
    n: 92,
    slug: "pad stable 58",
    idea: "text-wrap:stable structural pad 58",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.21!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:58!important}",
  },
  {
    n: 93,
    slug: "pad wrap 59",
    idea: "text-wrap:wrap structural pad 59",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.24!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:59!important}",
  },
  {
    n: 94,
    slug: "pad pretty 60",
    idea: "text-wrap:pretty structural pad 60",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.27!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:60!important}",
  },
  {
    n: 95,
    slug: "pad stable 61",
    idea: "text-wrap:stable structural pad 61",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.30!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:61!important}",
  },
  {
    n: 96,
    slug: "pad wrap 62",
    idea: "text-wrap:wrap structural pad 62",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.33!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:62!important}",
  },
  {
    n: 97,
    slug: "pad pretty 63",
    idea: "text-wrap:pretty structural pad 63",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.36!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:63!important}",
  },
  {
    n: 98,
    slug: "pad stable 64",
    idea: "text-wrap:stable structural pad 64",
    css: "foreignObject *{text-wrap:stable!important;line-height:1.39!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:64!important}",
  },
  {
    n: 99,
    slug: "pad wrap 65",
    idea: "text-wrap:wrap structural pad 65",
    css: "foreignObject *{text-wrap:wrap!important;line-height:1.42!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:65!important}",
  },
  {
    n: 100,
    slug: "pad pretty 66",
    idea: "text-wrap:pretty structural pad 66",
    css: "foreignObject *{text-wrap:pretty!important;line-height:1.45!important;outline-style:solid!important;outline-width:0!important;outline-color:transparent!important;--x-pad:66!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w44: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w44-${num}`,
    label: `Loop AI b11 w44 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w44; text-wrap pretty/stable/wrap; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

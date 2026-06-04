/**
 * Loop AI batch-11 FO recipe shard (worker 49) — text-fix: vertical-align text-top/sub.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: "valign text-top star",
    idea: "vertical-align:text-top on FO *",
    css: "foreignObject *{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 2,
    slug: "valign text-bottom star",
    idea: "vertical-align:text-bottom on FO *",
    css: "foreignObject *{vertical-align:text-bottom!important;display:inline!important}",
  },
  {
    n: 3,
    slug: "valign sub star",
    idea: "vertical-align:sub on FO *",
    css: "foreignObject *{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 4,
    slug: "valign super star",
    idea: "vertical-align:super on FO *",
    css: "foreignObject *{vertical-align:super!important;display:inline!important}",
  },
  {
    n: 5,
    slug: "valign top star",
    idea: "vertical-align:top on FO *",
    css: "foreignObject *{vertical-align:top!important;display:inline!important}",
  },
  {
    n: 6,
    slug: "valign bottom star",
    idea: "vertical-align:bottom on FO *",
    css: "foreignObject *{vertical-align:bottom!important;display:inline!important}",
  },
  {
    n: 7,
    slug: "inline-block text-top",
    idea: "inline-block + vertical-align:text-top",
    css: "foreignObject *{display:inline-block!important;vertical-align:text-top!important}",
  },
  {
    n: 8,
    slug: "inline-block sub",
    idea: "inline-block + vertical-align:sub",
    css: "foreignObject *{display:inline-block!important;vertical-align:sub!important}",
  },
  {
    n: 9,
    slug: "inline-block super",
    idea: "inline-block + vertical-align:super",
    css: "foreignObject *{display:inline-block!important;vertical-align:super!important}",
  },
  {
    n: 10,
    slug: "flex row text-top",
    idea: "flex row + vertical-align:text-top",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 11,
    slug: "flex row text-bottom",
    idea: "flex row + vertical-align:text-bottom",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{vertical-align:text-bottom!important;display:inline!important}",
  },
  {
    n: 12,
    slug: "flex row sub",
    idea: "flex row + vertical-align:sub",
    css: "foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 13,
    slug: "sub super fs 0.75em",
    idea: "vertical-align:sub/super + font-size:0.75em",
    css: "foreignObject *{vertical-align:sub!important;font-size:0.75em!important}",
  },
  {
    n: 14,
    slug: "sub super fs 0.85em",
    idea: "vertical-align:sub/super + font-size:0.85em",
    css: "foreignObject *{vertical-align:sub!important;font-size:0.85em!important}",
  },
  {
    n: 15,
    slug: "sub super fs 1.1em",
    idea: "vertical-align:sub/super + font-size:1.1em",
    css: "foreignObject *{vertical-align:sub!important;font-size:1.1em!important}",
  },
  {
    n: 16,
    slug: "sub super fs 1.2em",
    idea: "vertical-align:sub/super + font-size:1.2em",
    css: "foreignObject *{vertical-align:sub!important;font-size:1.2em!important}",
  },
  {
    n: 17,
    slug: "sup text-top",
    idea: "sup vertical-align:text-top",
    css: "foreignObject sup{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 18,
    slug: "sup sub",
    idea: "sup vertical-align:sub",
    css: "foreignObject sup{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 19,
    slug: "sub text-top",
    idea: "sub vertical-align:text-top",
    css: "foreignObject sub{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 20,
    slug: "sub sub",
    idea: "sub vertical-align:sub",
    css: "foreignObject sub{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 21,
    slug: "span text-top",
    idea: "span vertical-align:text-top",
    css: "foreignObject span{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 22,
    slug: "span sub",
    idea: "span vertical-align:sub",
    css: "foreignObject span{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 23,
    slug: "a text-top",
    idea: "a vertical-align:text-top",
    css: "foreignObject a{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 24,
    slug: "a sub",
    idea: "a vertical-align:sub",
    css: "foreignObject a{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 25,
    slug: "small text-top",
    idea: "small vertical-align:text-top",
    css: "foreignObject small{vertical-align:text-top!important;display:inline!important}",
  },
  {
    n: 26,
    slug: "small sub",
    idea: "small vertical-align:sub",
    css: "foreignObject small{vertical-align:sub!important;display:inline!important}",
  },
  {
    n: 27,
    slug: "text-top h2-pin-line-height-from-live",
    idea: "vertical-align:text-top + h2-pin-line-height-from-live",
    css: "foreignObject *{vertical-align:text-top!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 28,
    slug: "sub h2-pin-line-height-from-live",
    idea: "vertical-align:sub + h2-pin-line-height-from-live",
    css: "foreignObject *{vertical-align:sub!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 29,
    slug: "super h2-pin-line-height-from-live",
    idea: "vertical-align:super + h2-pin-line-height-from-live",
    css: "foreignObject *{vertical-align:super!important}",
    extra: {"inject":"both","radicalPatch":"h2-pin-line-height-from-live"},
  },
  {
    n: 30,
    slug: "pad text-top 0",
    idea: "vertical-align:text-top pad 0",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.00!important}",
  },
  {
    n: 31,
    slug: "pad text-bottom 1",
    idea: "vertical-align:text-bottom pad 1",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.04!important}",
  },
  {
    n: 32,
    slug: "pad sub 2",
    idea: "vertical-align:sub pad 2",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.08!important}",
  },
  {
    n: 33,
    slug: "pad super 3",
    idea: "vertical-align:super pad 3",
    css: "foreignObject *{vertical-align:super!important;line-height:1.12!important}",
  },
  {
    n: 34,
    slug: "pad top 4",
    idea: "vertical-align:top pad 4",
    css: "foreignObject *{vertical-align:top!important;line-height:1.16!important}",
  },
  {
    n: 35,
    slug: "pad bottom 5",
    idea: "vertical-align:bottom pad 5",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.20!important}",
  },
  {
    n: 36,
    slug: "pad text-top 6",
    idea: "vertical-align:text-top pad 6",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.24!important}",
  },
  {
    n: 37,
    slug: "pad text-bottom 7",
    idea: "vertical-align:text-bottom pad 7",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.28!important}",
  },
  {
    n: 38,
    slug: "pad sub 8",
    idea: "vertical-align:sub pad 8",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.32!important}",
  },
  {
    n: 39,
    slug: "pad super 9",
    idea: "vertical-align:super pad 9",
    css: "foreignObject *{vertical-align:super!important;line-height:1.36!important}",
  },
  {
    n: 40,
    slug: "pad top 10",
    idea: "vertical-align:top pad 10",
    css: "foreignObject *{vertical-align:top!important;line-height:1.40!important}",
  },
  {
    n: 41,
    slug: "pad bottom 11",
    idea: "vertical-align:bottom pad 11",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.44!important}",
  },
  {
    n: 42,
    slug: "pad text-top 12",
    idea: "vertical-align:text-top pad 12",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.48!important}",
  },
  {
    n: 43,
    slug: "pad text-bottom 13",
    idea: "vertical-align:text-bottom pad 13",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.00!important}",
  },
  {
    n: 44,
    slug: "pad sub 14",
    idea: "vertical-align:sub pad 14",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.04!important}",
  },
  {
    n: 45,
    slug: "pad super 15",
    idea: "vertical-align:super pad 15",
    css: "foreignObject *{vertical-align:super!important;line-height:1.08!important}",
  },
  {
    n: 46,
    slug: "pad top 16",
    idea: "vertical-align:top pad 16",
    css: "foreignObject *{vertical-align:top!important;line-height:1.12!important}",
  },
  {
    n: 47,
    slug: "pad bottom 17",
    idea: "vertical-align:bottom pad 17",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.16!important}",
  },
  {
    n: 48,
    slug: "pad text-top 18",
    idea: "vertical-align:text-top pad 18",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.20!important}",
  },
  {
    n: 49,
    slug: "pad text-bottom 19",
    idea: "vertical-align:text-bottom pad 19",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.24!important}",
  },
  {
    n: 50,
    slug: "pad sub 20",
    idea: "vertical-align:sub pad 20",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.28!important}",
  },
  {
    n: 51,
    slug: "pad super 21",
    idea: "vertical-align:super pad 21",
    css: "foreignObject *{vertical-align:super!important;line-height:1.32!important}",
  },
  {
    n: 52,
    slug: "pad top 22",
    idea: "vertical-align:top pad 22",
    css: "foreignObject *{vertical-align:top!important;line-height:1.36!important}",
  },
  {
    n: 53,
    slug: "pad bottom 23",
    idea: "vertical-align:bottom pad 23",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.40!important}",
  },
  {
    n: 54,
    slug: "pad text-top 24",
    idea: "vertical-align:text-top pad 24",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.44!important}",
  },
  {
    n: 55,
    slug: "pad text-bottom 25",
    idea: "vertical-align:text-bottom pad 25",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.48!important}",
  },
  {
    n: 56,
    slug: "pad sub 26",
    idea: "vertical-align:sub pad 26",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.00!important}",
  },
  {
    n: 57,
    slug: "pad super 27",
    idea: "vertical-align:super pad 27",
    css: "foreignObject *{vertical-align:super!important;line-height:1.04!important}",
  },
  {
    n: 58,
    slug: "pad top 28",
    idea: "vertical-align:top pad 28",
    css: "foreignObject *{vertical-align:top!important;line-height:1.08!important}",
  },
  {
    n: 59,
    slug: "pad bottom 29",
    idea: "vertical-align:bottom pad 29",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.12!important}",
  },
  {
    n: 60,
    slug: "pad text-top 30",
    idea: "vertical-align:text-top pad 30",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.16!important}",
  },
  {
    n: 61,
    slug: "pad text-bottom 31",
    idea: "vertical-align:text-bottom pad 31",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.20!important}",
  },
  {
    n: 62,
    slug: "pad sub 32",
    idea: "vertical-align:sub pad 32",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.24!important}",
  },
  {
    n: 63,
    slug: "pad super 33",
    idea: "vertical-align:super pad 33",
    css: "foreignObject *{vertical-align:super!important;line-height:1.28!important}",
  },
  {
    n: 64,
    slug: "pad top 34",
    idea: "vertical-align:top pad 34",
    css: "foreignObject *{vertical-align:top!important;line-height:1.32!important}",
  },
  {
    n: 65,
    slug: "pad bottom 35",
    idea: "vertical-align:bottom pad 35",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.36!important}",
  },
  {
    n: 66,
    slug: "pad text-top 36",
    idea: "vertical-align:text-top pad 36",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.40!important}",
  },
  {
    n: 67,
    slug: "pad text-bottom 37",
    idea: "vertical-align:text-bottom pad 37",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.44!important}",
  },
  {
    n: 68,
    slug: "pad sub 38",
    idea: "vertical-align:sub pad 38",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.48!important}",
  },
  {
    n: 69,
    slug: "pad super 39",
    idea: "vertical-align:super pad 39",
    css: "foreignObject *{vertical-align:super!important;line-height:1.00!important}",
  },
  {
    n: 70,
    slug: "pad top 40",
    idea: "vertical-align:top pad 40",
    css: "foreignObject *{vertical-align:top!important;line-height:1.04!important}",
  },
  {
    n: 71,
    slug: "pad bottom 41",
    idea: "vertical-align:bottom pad 41",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.08!important}",
  },
  {
    n: 72,
    slug: "pad text-top 42",
    idea: "vertical-align:text-top pad 42",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.12!important}",
  },
  {
    n: 73,
    slug: "pad text-bottom 43",
    idea: "vertical-align:text-bottom pad 43",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.16!important}",
  },
  {
    n: 74,
    slug: "pad sub 44",
    idea: "vertical-align:sub pad 44",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.20!important}",
  },
  {
    n: 75,
    slug: "pad super 45",
    idea: "vertical-align:super pad 45",
    css: "foreignObject *{vertical-align:super!important;line-height:1.24!important}",
  },
  {
    n: 76,
    slug: "pad top 46",
    idea: "vertical-align:top pad 46",
    css: "foreignObject *{vertical-align:top!important;line-height:1.28!important}",
  },
  {
    n: 77,
    slug: "pad bottom 47",
    idea: "vertical-align:bottom pad 47",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.32!important}",
  },
  {
    n: 78,
    slug: "pad text-top 48",
    idea: "vertical-align:text-top pad 48",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.36!important}",
  },
  {
    n: 79,
    slug: "pad text-bottom 49",
    idea: "vertical-align:text-bottom pad 49",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.40!important}",
  },
  {
    n: 80,
    slug: "pad sub 50",
    idea: "vertical-align:sub pad 50",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.44!important}",
  },
  {
    n: 81,
    slug: "pad super 51",
    idea: "vertical-align:super pad 51",
    css: "foreignObject *{vertical-align:super!important;line-height:1.48!important}",
  },
  {
    n: 82,
    slug: "pad top 52",
    idea: "vertical-align:top pad 52",
    css: "foreignObject *{vertical-align:top!important;line-height:1.00!important}",
  },
  {
    n: 83,
    slug: "pad bottom 53",
    idea: "vertical-align:bottom pad 53",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.04!important}",
  },
  {
    n: 84,
    slug: "pad text-top 54",
    idea: "vertical-align:text-top pad 54",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.08!important}",
  },
  {
    n: 85,
    slug: "pad text-bottom 55",
    idea: "vertical-align:text-bottom pad 55",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.12!important}",
  },
  {
    n: 86,
    slug: "pad sub 56",
    idea: "vertical-align:sub pad 56",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.16!important}",
  },
  {
    n: 87,
    slug: "pad super 57",
    idea: "vertical-align:super pad 57",
    css: "foreignObject *{vertical-align:super!important;line-height:1.20!important}",
  },
  {
    n: 88,
    slug: "pad top 58",
    idea: "vertical-align:top pad 58",
    css: "foreignObject *{vertical-align:top!important;line-height:1.24!important}",
  },
  {
    n: 89,
    slug: "pad bottom 59",
    idea: "vertical-align:bottom pad 59",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.28!important}",
  },
  {
    n: 90,
    slug: "pad text-top 60",
    idea: "vertical-align:text-top pad 60",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.32!important}",
  },
  {
    n: 91,
    slug: "pad text-bottom 61",
    idea: "vertical-align:text-bottom pad 61",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.36!important}",
  },
  {
    n: 92,
    slug: "pad sub 62",
    idea: "vertical-align:sub pad 62",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.40!important}",
  },
  {
    n: 93,
    slug: "pad super 63",
    idea: "vertical-align:super pad 63",
    css: "foreignObject *{vertical-align:super!important;line-height:1.44!important}",
  },
  {
    n: 94,
    slug: "pad top 64",
    idea: "vertical-align:top pad 64",
    css: "foreignObject *{vertical-align:top!important;line-height:1.48!important}",
  },
  {
    n: 95,
    slug: "pad bottom 65",
    idea: "vertical-align:bottom pad 65",
    css: "foreignObject *{vertical-align:bottom!important;line-height:1.00!important}",
  },
  {
    n: 96,
    slug: "pad text-top 66",
    idea: "vertical-align:text-top pad 66",
    css: "foreignObject *{vertical-align:text-top!important;line-height:1.04!important}",
  },
  {
    n: 97,
    slug: "pad text-bottom 67",
    idea: "vertical-align:text-bottom pad 67",
    css: "foreignObject *{vertical-align:text-bottom!important;line-height:1.08!important}",
  },
  {
    n: 98,
    slug: "pad sub 68",
    idea: "vertical-align:sub pad 68",
    css: "foreignObject *{vertical-align:sub!important;line-height:1.12!important}",
  },
  {
    n: 99,
    slug: "pad super 69",
    idea: "vertical-align:super pad 69",
    css: "foreignObject *{vertical-align:super!important;line-height:1.16!important}",
  },
  {
    n: 100,
    slug: "pad top 70",
    idea: "vertical-align:top pad 70",
    css: "foreignObject *{vertical-align:top!important;line-height:1.20!important}",
  },
]

if (SPECS.length !== 100) {
  throw new Error('recipes-loop-ai-b11-w49: expected 100 specs, got ' + SPECS.length)
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  const inject = extra.inject ?? 'capture'
  return {
    id: `loop-ai-b11-w49-${num}`,
    label: `Loop AI b11 w49 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject,
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w49; vertical-align text-top/sub/super; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

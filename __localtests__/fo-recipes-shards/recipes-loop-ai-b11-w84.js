/**
 * Loop AI batch-11 FO recipe shard (worker 84) — text-fix: font-variant-caps
 * 100 recipes: loop-ai-b11-w84-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'
const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'caps-normal FO *',
    idea: 'font-variant-caps:normal on FO *',
    css: 'foreignObject *{font-variant-caps:normal!important}'
  },
  {
    n: 2,
    slug: 'caps-normal FO root',
    idea: 'font-variant-caps:normal on FO root',
    css: 'foreignObject{font-variant-caps:normal!important}'
  },
  {
    n: 3,
    slug: 'caps-normal FO a',
    idea: 'font-variant-caps:normal on FO a',
    css: 'foreignObject a{font-variant-caps:normal!important}'
  },
  {
    n: 4,
    slug: 'caps-normal FO span',
    idea: 'font-variant-caps:normal on FO span',
    css: 'foreignObject span{font-variant-caps:normal!important}'
  },
  {
    n: 5,
    slug: 'caps-normal text chain',
    idea: 'font-variant-caps:normal on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:normal!important}'
  },
  {
    n: 6,
    slug: 'caps-normal nav a',
    idea: 'font-variant-caps:normal on nav a',
    css: 'foreignObject nav a{font-variant-caps:normal!important}'
  },
  {
    n: 7,
    slug: 'caps-normal FO strong',
    idea: 'font-variant-caps:normal on FO strong',
    css: 'foreignObject strong{font-variant-caps:normal!important}'
  },
  {
    n: 8,
    slug: 'caps-normal headings',
    idea: 'font-variant-caps:normal on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:normal!important}'
  },
  {
    n: 9,
    slug: 'caps-normal Chromium + *',
    idea: 'font-variant-caps:normal on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:normal!important}'
  },
  {
    n: 10,
    slug: 'caps-normal FO>div *',
    idea: 'font-variant-caps:normal on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:normal!important}'
  },
  {
    n: 11,
    slug: 'caps-small FO *',
    idea: 'small-caps on FO *',
    css: 'foreignObject *{font-variant-caps:small-caps!important}'
  },
  {
    n: 12,
    slug: 'caps-small FO root',
    idea: 'small-caps on FO root',
    css: 'foreignObject{font-variant-caps:small-caps!important}'
  },
  {
    n: 13,
    slug: 'caps-small FO a',
    idea: 'small-caps on FO a',
    css: 'foreignObject a{font-variant-caps:small-caps!important}'
  },
  {
    n: 14,
    slug: 'caps-small FO span',
    idea: 'small-caps on FO span',
    css: 'foreignObject span{font-variant-caps:small-caps!important}'
  },
  {
    n: 15,
    slug: 'caps-small text chain',
    idea: 'small-caps on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:small-caps!important}'
  },
  {
    n: 16,
    slug: 'caps-small nav a',
    idea: 'small-caps on nav a',
    css: 'foreignObject nav a{font-variant-caps:small-caps!important}'
  },
  {
    n: 17,
    slug: 'caps-small FO strong',
    idea: 'small-caps on FO strong',
    css: 'foreignObject strong{font-variant-caps:small-caps!important}'
  },
  {
    n: 18,
    slug: 'caps-small headings',
    idea: 'small-caps on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:small-caps!important}'
  },
  {
    n: 19,
    slug: 'caps-small Chromium + *',
    idea: 'small-caps on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:small-caps!important}'
  },
  {
    n: 20,
    slug: 'caps-small FO>div *',
    idea: 'small-caps on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:small-caps!important}'
  },
  {
    n: 21,
    slug: 'caps-all-small FO *',
    idea: 'all-small-caps on FO *',
    css: 'foreignObject *{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 22,
    slug: 'caps-all-small FO root',
    idea: 'all-small-caps on FO root',
    css: 'foreignObject{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 23,
    slug: 'caps-all-small FO a',
    idea: 'all-small-caps on FO a',
    css: 'foreignObject a{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 24,
    slug: 'caps-all-small FO span',
    idea: 'all-small-caps on FO span',
    css: 'foreignObject span{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 25,
    slug: 'caps-all-small text chain',
    idea: 'all-small-caps on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 26,
    slug: 'caps-all-small nav a',
    idea: 'all-small-caps on nav a',
    css: 'foreignObject nav a{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 27,
    slug: 'caps-all-small FO strong',
    idea: 'all-small-caps on FO strong',
    css: 'foreignObject strong{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 28,
    slug: 'caps-all-small headings',
    idea: 'all-small-caps on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 29,
    slug: 'caps-all-small Chromium + *',
    idea: 'all-small-caps on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 30,
    slug: 'caps-all-small FO>div *',
    idea: 'all-small-caps on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:all-small-caps!important}'
  },
  {
    n: 31,
    slug: 'caps-petite FO *',
    idea: 'petite-caps on FO *',
    css: 'foreignObject *{font-variant-caps:petite-caps!important}'
  },
  {
    n: 32,
    slug: 'caps-petite FO root',
    idea: 'petite-caps on FO root',
    css: 'foreignObject{font-variant-caps:petite-caps!important}'
  },
  {
    n: 33,
    slug: 'caps-petite FO a',
    idea: 'petite-caps on FO a',
    css: 'foreignObject a{font-variant-caps:petite-caps!important}'
  },
  {
    n: 34,
    slug: 'caps-petite FO span',
    idea: 'petite-caps on FO span',
    css: 'foreignObject span{font-variant-caps:petite-caps!important}'
  },
  {
    n: 35,
    slug: 'caps-petite text chain',
    idea: 'petite-caps on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:petite-caps!important}'
  },
  {
    n: 36,
    slug: 'caps-petite nav a',
    idea: 'petite-caps on nav a',
    css: 'foreignObject nav a{font-variant-caps:petite-caps!important}'
  },
  {
    n: 37,
    slug: 'caps-petite FO strong',
    idea: 'petite-caps on FO strong',
    css: 'foreignObject strong{font-variant-caps:petite-caps!important}'
  },
  {
    n: 38,
    slug: 'caps-petite headings',
    idea: 'petite-caps on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:petite-caps!important}'
  },
  {
    n: 39,
    slug: 'caps-petite Chromium + *',
    idea: 'petite-caps on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:petite-caps!important}'
  },
  {
    n: 40,
    slug: 'caps-petite FO>div *',
    idea: 'petite-caps on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:petite-caps!important}'
  },
  {
    n: 41,
    slug: 'caps-all-petite FO *',
    idea: 'all-petite-caps on FO *',
    css: 'foreignObject *{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 42,
    slug: 'caps-all-petite FO root',
    idea: 'all-petite-caps on FO root',
    css: 'foreignObject{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 43,
    slug: 'caps-all-petite FO a',
    idea: 'all-petite-caps on FO a',
    css: 'foreignObject a{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 44,
    slug: 'caps-all-petite FO span',
    idea: 'all-petite-caps on FO span',
    css: 'foreignObject span{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 45,
    slug: 'caps-all-petite text chain',
    idea: 'all-petite-caps on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 46,
    slug: 'caps-all-petite nav a',
    idea: 'all-petite-caps on nav a',
    css: 'foreignObject nav a{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 47,
    slug: 'caps-all-petite FO strong',
    idea: 'all-petite-caps on FO strong',
    css: 'foreignObject strong{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 48,
    slug: 'caps-all-petite headings',
    idea: 'all-petite-caps on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 49,
    slug: 'caps-all-petite Chromium + *',
    idea: 'all-petite-caps on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 50,
    slug: 'caps-all-petite FO>div *',
    idea: 'all-petite-caps on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:all-petite-caps!important}'
  },
  {
    n: 51,
    slug: 'caps-unicase FO *',
    idea: 'unicase on FO *',
    css: 'foreignObject *{font-variant-caps:unicase!important}'
  },
  {
    n: 52,
    slug: 'caps-unicase FO root',
    idea: 'unicase on FO root',
    css: 'foreignObject{font-variant-caps:unicase!important}'
  },
  {
    n: 53,
    slug: 'caps-unicase FO a',
    idea: 'unicase on FO a',
    css: 'foreignObject a{font-variant-caps:unicase!important}'
  },
  {
    n: 54,
    slug: 'caps-unicase FO span',
    idea: 'unicase on FO span',
    css: 'foreignObject span{font-variant-caps:unicase!important}'
  },
  {
    n: 55,
    slug: 'caps-unicase text chain',
    idea: 'unicase on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:unicase!important}'
  },
  {
    n: 56,
    slug: 'caps-unicase nav a',
    idea: 'unicase on nav a',
    css: 'foreignObject nav a{font-variant-caps:unicase!important}'
  },
  {
    n: 57,
    slug: 'caps-unicase FO strong',
    idea: 'unicase on FO strong',
    css: 'foreignObject strong{font-variant-caps:unicase!important}'
  },
  {
    n: 58,
    slug: 'caps-unicase headings',
    idea: 'unicase on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:unicase!important}'
  },
  {
    n: 59,
    slug: 'caps-unicase Chromium + *',
    idea: 'unicase on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:unicase!important}'
  },
  {
    n: 60,
    slug: 'caps-unicase FO>div *',
    idea: 'unicase on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:unicase!important}'
  },
  {
    n: 61,
    slug: 'caps-titling FO *',
    idea: 'titling-caps on FO *',
    css: 'foreignObject *{font-variant-caps:titling-caps!important}'
  },
  {
    n: 62,
    slug: 'caps-titling FO root',
    idea: 'titling-caps on FO root',
    css: 'foreignObject{font-variant-caps:titling-caps!important}'
  },
  {
    n: 63,
    slug: 'caps-titling FO a',
    idea: 'titling-caps on FO a',
    css: 'foreignObject a{font-variant-caps:titling-caps!important}'
  },
  {
    n: 64,
    slug: 'caps-titling FO span',
    idea: 'titling-caps on FO span',
    css: 'foreignObject span{font-variant-caps:titling-caps!important}'
  },
  {
    n: 65,
    slug: 'caps-titling text chain',
    idea: 'titling-caps on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:titling-caps!important}'
  },
  {
    n: 66,
    slug: 'caps-titling nav a',
    idea: 'titling-caps on nav a',
    css: 'foreignObject nav a{font-variant-caps:titling-caps!important}'
  },
  {
    n: 67,
    slug: 'caps-titling FO strong',
    idea: 'titling-caps on FO strong',
    css: 'foreignObject strong{font-variant-caps:titling-caps!important}'
  },
  {
    n: 68,
    slug: 'caps-titling headings',
    idea: 'titling-caps on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:titling-caps!important}'
  },
  {
    n: 69,
    slug: 'caps-titling Chromium + *',
    idea: 'titling-caps on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:titling-caps!important}'
  },
  {
    n: 70,
    slug: 'caps-titling FO>div *',
    idea: 'titling-caps on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:titling-caps!important}'
  },
  {
    n: 71,
    slug: 'caps-small-synth-none FO *',
    idea: 'small-caps + synthesis:none on FO *',
    css: 'foreignObject *{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 72,
    slug: 'caps-small-synth-none FO root',
    idea: 'small-caps + synthesis:none on FO root',
    css: 'foreignObject{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 73,
    slug: 'caps-small-synth-none FO a',
    idea: 'small-caps + synthesis:none on FO a',
    css: 'foreignObject a{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 74,
    slug: 'caps-small-synth-none FO span',
    idea: 'small-caps + synthesis:none on FO span',
    css: 'foreignObject span{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 75,
    slug: 'caps-small-synth-none text chain',
    idea: 'small-caps + synthesis:none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 76,
    slug: 'caps-small-synth-none nav a',
    idea: 'small-caps + synthesis:none on nav a',
    css: 'foreignObject nav a{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 77,
    slug: 'caps-small-synth-none FO strong',
    idea: 'small-caps + synthesis:none on FO strong',
    css: 'foreignObject strong{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 78,
    slug: 'caps-small-synth-none headings',
    idea: 'small-caps + synthesis:none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 79,
    slug: 'caps-small-synth-none Chromium + *',
    idea: 'small-caps + synthesis:none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 80,
    slug: 'caps-small-synth-none FO>div *',
    idea: 'small-caps + synthesis:none on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:small-caps!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 81,
    slug: 'caps-normal-synth-none FO *',
    idea: 'normal + synthesis:none on FO *',
    css: 'foreignObject *{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 82,
    slug: 'caps-normal-synth-none FO root',
    idea: 'normal + synthesis:none on FO root',
    css: 'foreignObject{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 83,
    slug: 'caps-normal-synth-none FO a',
    idea: 'normal + synthesis:none on FO a',
    css: 'foreignObject a{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 84,
    slug: 'caps-normal-synth-none FO span',
    idea: 'normal + synthesis:none on FO span',
    css: 'foreignObject span{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 85,
    slug: 'caps-normal-synth-none text chain',
    idea: 'normal + synthesis:none on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 86,
    slug: 'caps-normal-synth-none nav a',
    idea: 'normal + synthesis:none on nav a',
    css: 'foreignObject nav a{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 87,
    slug: 'caps-normal-synth-none FO strong',
    idea: 'normal + synthesis:none on FO strong',
    css: 'foreignObject strong{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 88,
    slug: 'caps-normal-synth-none headings',
    idea: 'normal + synthesis:none on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 89,
    slug: 'caps-normal-synth-none Chromium + *',
    idea: 'normal + synthesis:none on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 90,
    slug: 'caps-normal-synth-none FO>div *',
    idea: 'normal + synthesis:none on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:normal!important;font-synthesis-small-caps:none!important}'
  },
  {
    n: 91,
    slug: 'caps-small-lh-normal FO *',
    idea: 'small-caps + lh normal on FO *',
    css: 'foreignObject *{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 92,
    slug: 'caps-small-lh-normal FO root',
    idea: 'small-caps + lh normal on FO root',
    css: 'foreignObject{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 93,
    slug: 'caps-small-lh-normal FO a',
    idea: 'small-caps + lh normal on FO a',
    css: 'foreignObject a{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 94,
    slug: 'caps-small-lh-normal FO span',
    idea: 'small-caps + lh normal on FO span',
    css: 'foreignObject span{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 95,
    slug: 'caps-small-lh-normal text chain',
    idea: 'small-caps + lh normal on text chain',
    css: 'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 96,
    slug: 'caps-small-lh-normal nav a',
    idea: 'small-caps + lh normal on nav a',
    css: 'foreignObject nav a{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 97,
    slug: 'caps-small-lh-normal FO strong',
    idea: 'small-caps + lh normal on FO strong',
    css: 'foreignObject strong{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 98,
    slug: 'caps-small-lh-normal headings',
    idea: 'small-caps + lh normal on headings',
    css: 'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 99,
    slug: 'caps-small-lh-normal Chromium + *',
    idea: 'small-caps + lh normal on Chromium + *',
    css: 'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{font-variant-caps:small-caps!important;line-height:normal!important}'
  },
  {
    n: 100,
    slug: 'caps-small-lh-normal FO>div *',
    idea: 'small-caps + lh normal on FO>div *',
    css: 'foreignObject>div *{font-variant-caps:small-caps!important;line-height:normal!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w84: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w84-${num}`,
    label: `Loop AI b11 w84 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w84; font-variant-caps; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

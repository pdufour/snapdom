/**
 * Loop AI batch-11 FO recipe shard (worker 88) — text-fix: contain-intrinsic-size text (if valid)
 * 100 recipes: loop-ai-b11-w88-001..100
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
    slug: 'ci-auto-300 content-visibility:auto',
    idea: 'auto 300px placeholder with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 2,
    slug: 'ci-auto-300 content-visibility:visible',
    idea: 'auto 300px placeholder with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 3,
    slug: 'ci-auto-300 FO root hidden + * visible',
    idea: 'auto 300px placeholder with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 4,
    slug: 'ci-auto-300 cv auto inherits intrinsic',
    idea: 'auto 300px placeholder with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 5,
    slug: 'ci-auto-300 visible + intrinsic none',
    idea: 'auto 300px placeholder with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 6,
    slug: 'ci-auto-300 cv auto + min-size 0',
    idea: 'auto 300px placeholder with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 7,
    slug: 'ci-auto-300 cv auto + overflow visible',
    idea: 'auto 300px placeholder with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 8,
    slug: 'ci-auto-300 cv auto + border-box',
    idea: 'auto 300px placeholder with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 9,
    slug: 'ci-auto-300 cv auto + contain:layout',
    idea: 'auto 300px placeholder with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 10,
    slug: 'ci-auto-300 cv auto on * only',
    idea: 'auto 300px placeholder with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 300px!important}'
  },
  {
    n: 11,
    slug: 'ci-1px-strut content-visibility:auto',
    idea: '1px strut placeholder with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 12,
    slug: 'ci-1px-strut content-visibility:visible',
    idea: '1px strut placeholder with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 13,
    slug: 'ci-1px-strut FO root hidden + * visible',
    idea: '1px strut placeholder with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 14,
    slug: 'ci-1px-strut cv auto inherits intrinsic',
    idea: '1px strut placeholder with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 15,
    slug: 'ci-1px-strut visible + intrinsic none',
    idea: '1px strut placeholder with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 16,
    slug: 'ci-1px-strut cv auto + min-size 0',
    idea: '1px strut placeholder with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 17,
    slug: 'ci-1px-strut cv auto + overflow visible',
    idea: '1px strut placeholder with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 18,
    slug: 'ci-1px-strut cv auto + border-box',
    idea: '1px strut placeholder with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 19,
    slug: 'ci-1px-strut cv auto + contain:layout',
    idea: '1px strut placeholder with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 20,
    slug: 'ci-1px-strut cv auto on * only',
    idea: '1px strut placeholder with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 1px auto 1px!important}'
  },
  {
    n: 21,
    slug: 'ci-auto-120-24 content-visibility:auto',
    idea: '120×24 text box placeholder with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 22,
    slug: 'ci-auto-120-24 content-visibility:visible',
    idea: '120×24 text box placeholder with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 23,
    slug: 'ci-auto-120-24 FO root hidden + * visible',
    idea: '120×24 text box placeholder with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 24,
    slug: 'ci-auto-120-24 cv auto inherits intrinsic',
    idea: '120×24 text box placeholder with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 25,
    slug: 'ci-auto-120-24 visible + intrinsic none',
    idea: '120×24 text box placeholder with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 26,
    slug: 'ci-auto-120-24 cv auto + min-size 0',
    idea: '120×24 text box placeholder with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 27,
    slug: 'ci-auto-120-24 cv auto + overflow visible',
    idea: '120×24 text box placeholder with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 28,
    slug: 'ci-auto-120-24 cv auto + border-box',
    idea: '120×24 text box placeholder with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 29,
    slug: 'ci-auto-120-24 cv auto + contain:layout',
    idea: '120×24 text box placeholder with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 30,
    slug: 'ci-auto-120-24 cv auto on * only',
    idea: '120×24 text box placeholder with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 120px auto 24px!important}'
  },
  {
    n: 31,
    slug: 'ci-auto-200-40 content-visibility:auto',
    idea: '200×40 placeholder with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 32,
    slug: 'ci-auto-200-40 content-visibility:visible',
    idea: '200×40 placeholder with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 33,
    slug: 'ci-auto-200-40 FO root hidden + * visible',
    idea: '200×40 placeholder with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 34,
    slug: 'ci-auto-200-40 cv auto inherits intrinsic',
    idea: '200×40 placeholder with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 35,
    slug: 'ci-auto-200-40 visible + intrinsic none',
    idea: '200×40 placeholder with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 36,
    slug: 'ci-auto-200-40 cv auto + min-size 0',
    idea: '200×40 placeholder with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 37,
    slug: 'ci-auto-200-40 cv auto + overflow visible',
    idea: '200×40 placeholder with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 38,
    slug: 'ci-auto-200-40 cv auto + border-box',
    idea: '200×40 placeholder with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 39,
    slug: 'ci-auto-200-40 cv auto + contain:layout',
    idea: '200×40 placeholder with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 40,
    slug: 'ci-auto-200-40 cv auto on * only',
    idea: '200×40 placeholder with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 200px auto 40px!important}'
  },
  {
    n: 41,
    slug: 'ci-none content-visibility:auto',
    idea: 'contain-intrinsic-size:none with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 42,
    slug: 'ci-none content-visibility:visible',
    idea: 'contain-intrinsic-size:none with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 43,
    slug: 'ci-none FO root hidden + * visible',
    idea: 'contain-intrinsic-size:none with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 44,
    slug: 'ci-none cv auto inherits intrinsic',
    idea: 'contain-intrinsic-size:none with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:none!important}'
  },
  {
    n: 45,
    slug: 'ci-none visible + intrinsic none',
    idea: 'contain-intrinsic-size:none with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 46,
    slug: 'ci-none cv auto + min-size 0',
    idea: 'contain-intrinsic-size:none with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 47,
    slug: 'ci-none cv auto + overflow visible',
    idea: 'contain-intrinsic-size:none with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 48,
    slug: 'ci-none cv auto + border-box',
    idea: 'contain-intrinsic-size:none with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 49,
    slug: 'ci-none cv auto + contain:layout',
    idea: 'contain-intrinsic-size:none with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 50,
    slug: 'ci-none cv auto on * only',
    idea: 'contain-intrinsic-size:none with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:none!important}'
  },
  {
    n: 51,
    slug: 'ci-0 content-visibility:auto',
    idea: '0×0 intrinsic lock with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 52,
    slug: 'ci-0 content-visibility:visible',
    idea: '0×0 intrinsic lock with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 53,
    slug: 'ci-0 FO root hidden + * visible',
    idea: '0×0 intrinsic lock with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 54,
    slug: 'ci-0 cv auto inherits intrinsic',
    idea: '0×0 intrinsic lock with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 55,
    slug: 'ci-0 visible + intrinsic none',
    idea: '0×0 intrinsic lock with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 56,
    slug: 'ci-0 cv auto + min-size 0',
    idea: '0×0 intrinsic lock with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 57,
    slug: 'ci-0 cv auto + overflow visible',
    idea: '0×0 intrinsic lock with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 58,
    slug: 'ci-0 cv auto + border-box',
    idea: '0×0 intrinsic lock with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 59,
    slug: 'ci-0 cv auto + contain:layout',
    idea: '0×0 intrinsic lock with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 60,
    slug: 'ci-0 cv auto on * only',
    idea: '0×0 intrinsic lock with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:0px 0px!important}'
  },
  {
    n: 61,
    slug: 'ci-auto content-visibility:auto',
    idea: 'contain-intrinsic-size:auto keyword with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 62,
    slug: 'ci-auto content-visibility:visible',
    idea: 'contain-intrinsic-size:auto keyword with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 63,
    slug: 'ci-auto FO root hidden + * visible',
    idea: 'contain-intrinsic-size:auto keyword with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 64,
    slug: 'ci-auto cv auto inherits intrinsic',
    idea: 'contain-intrinsic-size:auto keyword with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:auto!important}'
  },
  {
    n: 65,
    slug: 'ci-auto visible + intrinsic none',
    idea: 'contain-intrinsic-size:auto keyword with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 66,
    slug: 'ci-auto cv auto + min-size 0',
    idea: 'contain-intrinsic-size:auto keyword with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 67,
    slug: 'ci-auto cv auto + overflow visible',
    idea: 'contain-intrinsic-size:auto keyword with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 68,
    slug: 'ci-auto cv auto + border-box',
    idea: 'contain-intrinsic-size:auto keyword with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 69,
    slug: 'ci-auto cv auto + contain:layout',
    idea: 'contain-intrinsic-size:auto keyword with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 70,
    slug: 'ci-auto cv auto on * only',
    idea: 'contain-intrinsic-size:auto keyword with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto!important}'
  },
  {
    n: 71,
    slug: 'ci-80-20 content-visibility:auto',
    idea: 'explicit 80×20 px with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 72,
    slug: 'ci-80-20 content-visibility:visible',
    idea: 'explicit 80×20 px with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 73,
    slug: 'ci-80-20 FO root hidden + * visible',
    idea: 'explicit 80×20 px with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 74,
    slug: 'ci-80-20 cv auto inherits intrinsic',
    idea: 'explicit 80×20 px with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 75,
    slug: 'ci-80-20 visible + intrinsic none',
    idea: 'explicit 80×20 px with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 76,
    slug: 'ci-80-20 cv auto + min-size 0',
    idea: 'explicit 80×20 px with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 77,
    slug: 'ci-80-20 cv auto + overflow visible',
    idea: 'explicit 80×20 px with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 78,
    slug: 'ci-80-20 cv auto + border-box',
    idea: 'explicit 80×20 px with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 79,
    slug: 'ci-80-20 cv auto + contain:layout',
    idea: 'explicit 80×20 px with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 80,
    slug: 'ci-80-20 cv auto on * only',
    idea: 'explicit 80×20 px with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:80px 20px!important}'
  },
  {
    n: 81,
    slug: 'ci-1em-1lh content-visibility:auto',
    idea: '1em × 1lh font-relative with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 82,
    slug: 'ci-1em-1lh content-visibility:visible',
    idea: '1em × 1lh font-relative with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 83,
    slug: 'ci-1em-1lh FO root hidden + * visible',
    idea: '1em × 1lh font-relative with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 84,
    slug: 'ci-1em-1lh cv auto inherits intrinsic',
    idea: '1em × 1lh font-relative with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 85,
    slug: 'ci-1em-1lh visible + intrinsic none',
    idea: '1em × 1lh font-relative with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 86,
    slug: 'ci-1em-1lh cv auto + min-size 0',
    idea: '1em × 1lh font-relative with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 87,
    slug: 'ci-1em-1lh cv auto + overflow visible',
    idea: '1em × 1lh font-relative with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 88,
    slug: 'ci-1em-1lh cv auto + border-box',
    idea: '1em × 1lh font-relative with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 89,
    slug: 'ci-1em-1lh cv auto + contain:layout',
    idea: '1em × 1lh font-relative with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 90,
    slug: 'ci-1em-1lh cv auto on * only',
    idea: '1em × 1lh font-relative with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:1em 1lh!important}'
  },
  {
    n: 91,
    slug: 'ci-auto-1em content-visibility:auto',
    idea: 'auto width 1em height with content-visibility:auto',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 92,
    slug: 'ci-auto-1em content-visibility:visible',
    idea: 'auto width 1em height with content-visibility:visible',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 93,
    slug: 'ci-auto-1em FO root hidden + * visible',
    idea: 'auto width 1em height with FO root hidden + * visible',
    css: 'foreignObject{content-visibility:hidden!important;contain-intrinsic-size:0px 0px!important}foreignObject *{content-visibility:visible!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 94,
    slug: 'ci-auto-1em cv auto inherits intrinsic',
    idea: 'auto width 1em height with cv auto inherits intrinsic',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:inherit;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 95,
    slug: 'ci-auto-1em visible + intrinsic none',
    idea: 'auto width 1em height with visible + intrinsic none',
    css: 'foreignObject *{content-visibility:visible!important;contain-intrinsic-size:none!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 96,
    slug: 'ci-auto-1em cv auto + min-size 0',
    idea: 'auto width 1em height with cv auto + min-size 0',
    css: 'foreignObject *{content-visibility:auto!important;min-height:0!important;min-width:0!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 97,
    slug: 'ci-auto-1em cv auto + overflow visible',
    idea: 'auto width 1em height with cv auto + overflow visible',
    css: 'foreignObject *{content-visibility:auto!important;overflow:visible!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 98,
    slug: 'ci-auto-1em cv auto + border-box',
    idea: 'auto width 1em height with cv auto + border-box',
    css: 'foreignObject *{content-visibility:auto!important;box-sizing:border-box!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 99,
    slug: 'ci-auto-1em cv auto + contain:layout',
    idea: 'auto width 1em height with cv auto + contain:layout',
    css: 'foreignObject *{content-visibility:auto!important;contain:layout!important;contain-intrinsic-size:auto 1em!important}'
  },
  {
    n: 100,
    slug: 'ci-auto-1em cv auto on * only',
    idea: 'auto width 1em height with cv auto on * only',
    css: 'foreignObject *{content-visibility:auto!important;contain-intrinsic-size:auto 1em!important}'
  }
]

if (typeof process !== 'undefined' && process.versions?.node) {
  if (SPECS.length !== 100) {
    throw new Error(`recipes-loop-ai-b11-w88: expected 100 specs, got ${SPECS.length}`)
  }
}

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b11-w88-${num}`,
    label: `Loop AI b11 w88 #${num}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w88; contain-intrinsic-size text (if valid); FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 7) — text-fix: h2 pin width from live × inline-size/nowrap/fit-content.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const FO_DIV_NORMAL = 'foreignObject>div{line-height:normal!important;min-height:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {{ n: number, slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    n: 1,
    slug: 'pin width bare',
    idea: 'h2-pin-width-from-live bare — GBCR width pin on FO text leaves before raster',
    css: TEXT_LEAF
  },
  {
    n: 2,
    slug: 'pin width nowrap leaves',
    idea: 'h2-pin-width-from-live + white-space:nowrap on FO * — single-line width pin vs wrap',
    css: TEXT_LEAF + 'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important}'
  },
  {
    n: 3,
    slug: 'pin width nowrap anchors',
    idea: 'h2-pin-width-from-live + text-wrap:nowrap + white-space:nowrap on FO a — nav anchor single line',
    css: TEXT_LEAF + 'foreignObject a{text-wrap:nowrap!important;white-space:nowrap!important;hyphens:none!important}'
  },
  {
    n: 4,
    slug: 'pin width nowrap span',
    idea: 'h2-pin-width-from-live + white-space:nowrap on FO span — inline run single-line vs GBCR pin',
    css: TEXT_LEAF + 'foreignObject span{white-space:nowrap!important;display:inline!important}'
  },
  {
    n: 5,
    slug: 'pin width text-wrap-mode nowrap',
    idea: 'h2-pin-width-from-live + text-wrap-mode:nowrap on FO * — longhand nowrap vs pinned width',
    css: TEXT_LEAF + 'foreignObject *{text-wrap-mode:nowrap!important;white-space:nowrap!important}'
  },
  {
    n: 6,
    slug: 'pin width max-content star',
    idea: 'h2-pin-width-from-live + inline-size:max-content on FO * — intrinsic max vs live GBCR width pin',
    css: TEXT_LEAF + 'foreignObject *{inline-size:max-content!important;width:auto!important;display:inline-block!important}'
  },
  {
    n: 7,
    slug: 'pin width max-content anchors',
    idea: 'h2-pin-width-from-live + inline-size:max-content on FO a — anchor intrinsic width vs pinned box',
    css: TEXT_LEAF + 'foreignObject a{display:inline-block!important;inline-size:max-content!important;width:auto!important;vertical-align:baseline!important}'
  },
  {
    n: 8,
    slug: 'pin width min-content star',
    idea: 'h2-pin-width-from-live + inline-size:min-content on FO * — min intrinsic vs GBCR width pin',
    css: TEXT_LEAF + 'foreignObject *{inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 9,
    slug: 'pin width min-content anchors',
    idea: 'h2-pin-width-from-live + inline-size:min-content on FO a — shrink-min anchor vs live width pin',
    css: TEXT_LEAF + 'foreignObject a{display:inline-block!important;inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 10,
    slug: 'pin width fit-content leaves',
    idea: 'h2-pin-width-from-live + width:fit-content on FO * — shrink-to-fit vs live box pin',
    css: TEXT_LEAF + 'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 11,
    slug: 'pin width bare chromium',
    idea: 'h2-pin-width-from-live bare + Chromium font-kerning copy on FO root',
    css: CHROMIUM + TEXT_LEAF
  },
  {
    n: 12,
    slug: 'pin width nowrap chromium',
    idea: 'h2-pin-width-from-live + nowrap on FO * + Chromium kerning copy',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important}'
  },
  {
    n: 13,
    slug: 'pin width max-content a chromium',
    idea: 'h2-pin-width-from-live + max-content inline-size on FO a + Chromium copy',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject a{display:inline-block!important;inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 14,
    slug: 'pin width fit-content chromium',
    idea: 'h2-pin-width-from-live + fit-content width on FO * + Chromium copy',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 15,
    slug: 'pin width min-content chromium',
    idea: 'h2-pin-width-from-live + min-content inline-size on FO * + Chromium copy',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject *{inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 16,
    slug: 'pin width nowrap span chromium',
    idea: 'h2-pin-width-from-live + nowrap span + Chromium kerning on FO root',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject span{white-space:nowrap!important;display:inline!important}'
  },
  {
    n: 17,
    slug: 'pin width nowrap div a chromium',
    idea: 'h2-pin-width-from-live + nowrap on FO>div a + Chromium copy — wrapper-scoped anchor',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject>div a{white-space:nowrap!important;text-wrap:nowrap!important;display:inline-block!important}'
  },
  {
    n: 18,
    slug: 'pin width inline-size fit-content a',
    idea: 'h2-pin-width-from-live + inline-size:fit-content on FO a — inline fit vs GBCR pin',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject a{display:inline-block!important;inline-size:fit-content!important;width:auto!important}'
  },
  {
    n: 19,
    slug: 'pin width width max-content star',
    idea: 'h2-pin-width-from-live + width:max-content on FO * — width longhand max vs inline-size',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject *{width:max-content!important;max-width:none!important}'
  },
  {
    n: 20,
    slug: 'pin width nowrap nav a chromium',
    idea: 'h2-pin-width-from-live + nowrap on FO nav a + Chromium — nav row single-line anchors',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important;hyphens:none!important}'
  },
  {
    n: 21,
    slug: 'pin width bare FO div normal',
    idea: 'h2-pin-width-from-live bare + FO>div line-height:normal — wrapper strut vs width pin',
    css: FO_DIV_NORMAL + TEXT_LEAF
  },
  {
    n: 22,
    slug: 'pin width nowrap FO div normal',
    idea: 'h2-pin-width-from-live + nowrap on FO * + FO>div normal line-height',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important}'
  },
  {
    n: 23,
    slug: 'pin width max-content a div normal',
    idea: 'h2-pin-width-from-live + max-content on FO a + FO>div normal — anchor intrinsic + wrapper lh',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject a{display:inline-block!important;inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 24,
    slug: 'pin width fit-content div normal',
    idea: 'h2-pin-width-from-live + fit-content on FO * + FO>div normal + min-height:0 on wrapper',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}'
  },
  {
    n: 25,
    slug: 'pin width min-content span div normal',
    idea: 'h2-pin-width-from-live + min-content on FO span + FO>div normal line-height',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject span{display:inline!important;inline-size:min-content!important;width:auto!important}'
  },
  {
    n: 26,
    slug: 'pin width nowrap nav flex',
    idea: 'h2-pin-width-from-live + FO nav flex row + nowrap nav a — flex nav width pin',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important;flex:0 0 auto!important}'
  },
  {
    n: 27,
    slug: 'pin width max-content text chain',
    idea: 'h2-pin-width-from-live + inline-size:max-content on inline text chain selectors',
    css: FO_DIV_NORMAL + TEXT_LEAF + TEXT_CHAIN + '{display:inline-block!important;inline-size:max-content!important;width:auto!important}'
  },
  {
    n: 28,
    slug: 'pin width fit-content FO div auto star',
    idea: 'h2-pin-width-from-live + fit-content on FO>div + width:auto on FO * — wrapper shrink vs leaf pin',
    css: FO_DIV_NORMAL + 'foreignObject>div{width:fit-content!important;max-width:none!important}' + TEXT_LEAF + 'foreignObject *{width:auto!important;min-width:0!important}'
  },
  {
    n: 29,
    slug: 'pin width nowrap overflow-wrap normal',
    idea: 'h2-pin-width-from-live + nowrap + overflow-wrap:normal + word-break:normal on FO *',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important;word-break:normal!important;text-wrap:nowrap!important}'
  },
  {
    n: 30,
    slug: 'pin width max-content div a only',
    idea: 'h2-pin-width-from-live + inline-size:max-content on FO>div a only — scoped wrapper anchor pin',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject>div a{display:inline-block!important;inline-size:max-content!important;width:auto!important;vertical-align:middle!important}'
  },
  {
    n: 31,
    slug: 'pin width bare decode interval',
    idea: 'h2-pin-width-from-live bare + decode-interval raster — width pin timing flush',
    css: TEXT_LEAF,
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 32,
    slug: 'pin width nowrap decode',
    idea: 'h2-pin-width-from-live + nowrap on FO * + decode-interval before FO draw',
    css: TEXT_LEAF + 'foreignObject *{white-space:nowrap!important;overflow-wrap:normal!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 33,
    slug: 'pin width max-content decode',
    idea: 'h2-pin-width-from-live + max-content on FO a + decode-interval raster wait',
    css: TEXT_LEAF + 'foreignObject a{display:inline-block!important;inline-size:max-content!important;width:auto!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 34,
    slug: 'pin width fit-content decode',
    idea: 'h2-pin-width-from-live + fit-content on FO * + decode-interval — shrink-to-fit pin timing',
    css: TEXT_LEAF + 'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 35,
    slug: 'pin width min-content int vb decode',
    idea: 'h2-pin-width-from-live + min-content on FO * + integer viewBox + decode-interval',
    css: TEXT_LEAF + 'foreignObject *{inline-size:min-content!important;width:auto!important}',
    extra: {inject:"both",svgRootRound:"integer-viewbox",rasterPatch:"decode-interval"}
  },
  {
    n: 36,
    slug: 'pin width nowrap anchor chromium decode',
    idea: 'h2-pin-width-from-live + nowrap FO a + Chromium + decode-interval',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject a{text-wrap:nowrap!important;white-space:nowrap!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 37,
    slug: 'pin width max-content chromium decode',
    idea: 'h2-pin-width-from-live + max-content FO * + Chromium + decode-interval',
    css: CHROMIUM + TEXT_LEAF + 'foreignObject *{inline-size:max-content!important;width:auto!important;display:inline-block!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 38,
    slug: 'pin width fit-content div normal decode',
    idea: 'h2-pin-width-from-live + fit-content leaves + FO>div normal + decode-interval',
    css: FO_DIV_NORMAL + TEXT_LEAF + 'foreignObject *{width:fit-content!important;max-width:none!important;display:inline-block!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  },
  {
    n: 39,
    slug: 'pin width nowrap nav double raf',
    idea: 'h2-pin-width-from-live + nowrap nav a + double-raf raster flush',
    css: TEXT_LEAF + 'foreignObject nav a{text-wrap:nowrap!important;white-space:nowrap!important}',
    extra: {inject:"both",rasterPatch:"double-raf"}
  },
  {
    n: 40,
    slug: 'pin width inline-size fit-content star decode',
    idea: 'h2-pin-width-from-live + inline-size:fit-content on FO * + decode-interval — inline fit longhand pin',
    css: TEXT_LEAF + 'foreignObject *{inline-size:fit-content!important;width:auto!important;display:inline-block!important}',
    extra: {inject:"both",rasterPatch:"decode-interval"}
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ n, slug, idea, css, extra = {} }) => {
  const num = String(n).padStart(3, '0')
  return {
    id: `loop-ai-b10-w07-${num}`,
    label: `Loop AI b10 w07 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-width-from-live',
    notes:
      'Loop AI b10 w07; h2-pin-width-from-live + inline-size/nowrap/fit-content; FO-raster — no text bypass.',
    ...extra,
  }
})

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

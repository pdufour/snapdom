/**
 * Loop AI batch-11 FO recipe shard (worker 30) — text-fix: line-height from-font wrapper chains.
 * 100 recipes: loop-ai-b11-w30-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

const CHROMIUM_COPY =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const PIN_LH = "h2-pin-line-height-from-live"
const STRETCH = "h2-flex-stretch-leaf-from-live"

/** @type {{ slug: string, idea: string, css: string, extra?: Partial<import('../fo-fix-recipes.js').FoFixRecipe> }[]} */
const SPECS = [
  {
    "slug": "FO>div from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO>div from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO>div from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO>div from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO>div from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO>div from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO>div from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO>div from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO>div from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO>div from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO>div from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO>div from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO>div from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject>div{line-height:from-font!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO>div star from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div star from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO>div star from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div star from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO>div star from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO>div star from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO>div star from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div star from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO>div star from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO>div star from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO>div star from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO>div star from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO>div star from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO>div star from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject>div *{line-height:from-font!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO root from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO root from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO root from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO root from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO root from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO root from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO root from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO root from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO root from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO root from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO root from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO root from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO root from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO root from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO root from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO root from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO root from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO root from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO root from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO root from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO root from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject{line-height:from-font!important;overflow:visible!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "text chain from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "text chain from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "text chain from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "text chain from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "text chain from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "text chain from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "text chain from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "text chain from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "text chain from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "text chain from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "text chain from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "text chain from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "text chain from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "text chain from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "text chain from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "text chain from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "text chain from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "text chain from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "text chain from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "text chain from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (text chain from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:from-font!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO span from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO span from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO span from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO span from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO span from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO span from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO span from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO span from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO span from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO span from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  },
  {
    "slug": "FO span from-font + div normal star from-font",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div normal star from-font — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:normal!important}foreignObject>div *{line-height:from-font!important}"
  },
  {
    "slug": "FO span from-font + div from-font star unset",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font star unset — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:unset!important}"
  },
  {
    "slug": "FO span from-font + div from-font star 1",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font star 1 — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO span from-font + div from-font anchors normal",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font anchors normal — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject a{line-height:normal!important;display:inline-block!important}"
  },
  {
    "slug": "FO span from-font + div from-font text chain calc 1em",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with div from-font text chain calc 1em — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{line-height:calc(1em)!important;vertical-align:baseline!important}"
  },
  {
    "slug": "FO span from-font + star from-font div normal",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with star from-font div normal — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject *{line-height:from-font!important}foreignObject>div{line-height:normal!important}"
  },
  {
    "slug": "FO span from-font + nav flex div from-font a from-font",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with nav flex div from-font a from-font — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject>div{line-height:from-font!important}foreignObject nav a{line-height:from-font!important;display:inline-block!important}"
  },
  {
    "slug": "FO span from-font + pin lh div star from-font",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with pin lh div star from-font — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div *{line-height:from-font!important}",
    "extra": {
      "inject": "both",
      "radicalPatch": "h2-pin-line-height-from-live"
    }
  },
  {
    "slug": "FO span from-font + stretch div from-font star normal",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with stretch div from-font star normal — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}foreignObject>div{line-height:from-font!important}foreignObject>div *{line-height:normal!important}",
    "extra": {
      "radicalPatch": "h2-flex-stretch-leaf-from-live"
    }
  },
  {
    "slug": "FO span from-font + layer div from-font vs star 1",
    "idea": "line-height:from-font wrapper (FO span from-font) chained with layer div from-font vs star 1 — font-metrics strut cascade",
    "css": "foreignObject span{line-height:from-font!important;display:inline!important}@layer fo-b11-w30-a, fo-b11-w30-b;@layer fo-b11-w30-a{foreignObject>div{line-height:from-font!important}}@layer fo-b11-w30-b{foreignObject *{line-height:1!important}}"
  }
]

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = SPECS.map(({ slug, idea, css, extra = {} }, i) => {
  const n = String(i + 1).padStart(3, '0')
  return {
    id: `loop-ai-b11-w30-${n}`,
    label: `Loop AI b11 w30 #${n}: ${slug}`,
    idea,
    css: FO_BASELINE_CSS + TEXT_LEAF + css,
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w30; line-height from-font wrapper chains; FO-raster — no text bypass.',
    ...extra,
  }
})

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w30: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-11 FO recipe shard (worker 08) — text-fix: direction ltr forced reset cascades.
 * PRIMARY: direction:ltr forced reset on descendants vs rtl/rtl parent FO
 * 100 recipes: loop-ai-b11-w08-001..100
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

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w08-001',
    label: 'Loop AI b11 w08 #001: fo-rtl star-ltr',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-002',
    label: 'Loop AI b11 w08 #002: fo-rtl span-ltr',
    idea: 'direction:ltr forced reset on foreignObject span under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject span{direction:ltr!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-003',
    label: 'Loop AI b11 w08 #003: fo-rtl a-ltr',
    idea: 'direction:ltr forced reset on foreignObject a under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-004',
    label: 'Loop AI b11 w08 #004: fo-rtl nav-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject nav a under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject nav a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-nav-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-005',
    label: 'Loop AI b11 w08 #005: fo-rtl chain-ltr',
    idea: 'direction:ltr forced reset on foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-chain-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-006',
    label: 'Loop AI b11 w08 #006: fo-rtl star-embed',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:embed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-embed; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-007',
    label: 'Loop AI b11 w08 #007: fo-rtl star-isolate',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-isolate; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-008',
    label: 'Loop AI b11 w08 #008: fo-rtl star-plaintext',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:plaintext!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-plaintext; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-009',
    label: 'Loop AI b11 w08 #009: fo-rtl star-wm-hb',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;writing-mode:horizontal-tb!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-wm-hb; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-010',
    label: 'Loop AI b11 w08 #010: fo-rtl star-mixed-to',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-mixed-to; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-011',
    label: 'Loop AI b11 w08 #011: fo-rtl label-ltr',
    idea: 'direction:ltr forced reset on foreignObject label under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject label{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-label-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-012',
    label: 'Loop AI b11 w08 #012: fo-rtl button-ltr',
    idea: 'direction:ltr forced reset on foreignObject button under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject button{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-button-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-013',
    label: 'Loop AI b11 w08 #013: fo-rtl p-ltr',
    idea: 'direction:ltr forced reset on foreignObject p under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject p{direction:ltr!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-p-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-014',
    label: 'Loop AI b11 w08 #014: fo-rtl li-ltr',
    idea: 'direction:ltr forced reset on foreignObject li under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject li{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-li-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-015',
    label: 'Loop AI b11 w08 #015: fo-rtl h1-ltr',
    idea: 'direction:ltr forced reset on foreignObject h1,foreignObject h2,foreignObject h3 under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject h1,foreignObject h2,foreignObject h3{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-h1-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-016',
    label: 'Loop AI b11 w08 #016: fo-rtl div-star-ltr',
    idea: 'direction:ltr forced reset on foreignObject>div * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}foreignObject>div *{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-017',
    label: 'Loop AI b11 w08 #017: fo-rtl star-inherit',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-inherit; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-018',
    label: 'Loop AI b11 w08 #018: fo-rtl star-baseline',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-baseline; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-019',
    label: 'Loop AI b11 w08 #019: fo-rtl star-max-content',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject *{direction:ltr!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-max-content; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-020',
    label: 'Loop AI b11 w08 #020: fo-rtl span-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject span,foreignObject a under fo-rtl parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}}foreignObject span,foreignObject a{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-021',
    label: 'Loop AI b11 w08 #021: fo-rtl-span star-ltr',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-022',
    label: 'Loop AI b11 w08 #022: fo-rtl-span span-ltr',
    idea: 'direction:ltr forced reset on foreignObject span under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject span{direction:ltr!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-span-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-023',
    label: 'Loop AI b11 w08 #023: fo-rtl-span a-ltr',
    idea: 'direction:ltr forced reset on foreignObject a under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-024',
    label: 'Loop AI b11 w08 #024: fo-rtl-span nav-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject nav a under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject nav a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-nav-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-025',
    label: 'Loop AI b11 w08 #025: fo-rtl-span chain-ltr',
    idea: 'direction:ltr forced reset on foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-chain-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-026',
    label: 'Loop AI b11 w08 #026: fo-rtl-span star-embed',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:embed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-embed; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-027',
    label: 'Loop AI b11 w08 #027: fo-rtl-span star-isolate',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-isolate; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-028',
    label: 'Loop AI b11 w08 #028: fo-rtl-span star-plaintext',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:plaintext!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-plaintext; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-029',
    label: 'Loop AI b11 w08 #029: fo-rtl-span star-wm-hb',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;writing-mode:horizontal-tb!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-wm-hb; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-030',
    label: 'Loop AI b11 w08 #030: fo-rtl-span star-mixed-to',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-mixed-to; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-031',
    label: 'Loop AI b11 w08 #031: fo-rtl-span label-ltr',
    idea: 'direction:ltr forced reset on foreignObject label under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject label{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-label-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-032',
    label: 'Loop AI b11 w08 #032: fo-rtl-span button-ltr',
    idea: 'direction:ltr forced reset on foreignObject button under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject button{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-button-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-033',
    label: 'Loop AI b11 w08 #033: fo-rtl-span p-ltr',
    idea: 'direction:ltr forced reset on foreignObject p under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject p{direction:ltr!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-p-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-034',
    label: 'Loop AI b11 w08 #034: fo-rtl-span li-ltr',
    idea: 'direction:ltr forced reset on foreignObject li under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject li{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-li-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-035',
    label: 'Loop AI b11 w08 #035: fo-rtl-span h1-ltr',
    idea: 'direction:ltr forced reset on foreignObject h1,foreignObject h2,foreignObject h3 under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject h1,foreignObject h2,foreignObject h3{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-h1-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-036',
    label: 'Loop AI b11 w08 #036: fo-rtl-span div-star-ltr',
    idea: 'direction:ltr forced reset on foreignObject>div * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}foreignObject>div *{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-div-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-037',
    label: 'Loop AI b11 w08 #037: fo-rtl-span star-inherit',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-inherit; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-038',
    label: 'Loop AI b11 w08 #038: fo-rtl-span star-baseline',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-baseline; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-039',
    label: 'Loop AI b11 w08 #039: fo-rtl-span star-max-content',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject *{direction:ltr!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-star-max-content; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-040',
    label: 'Loop AI b11 w08 #040: fo-rtl-span span-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject span,foreignObject a under fo-rtl-span parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject span{direction:rtl!important}}foreignObject span,foreignObject a{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-span-span-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-041',
    label: 'Loop AI b11 w08 #041: fo-rtl-a star-ltr',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-042',
    label: 'Loop AI b11 w08 #042: fo-rtl-a span-ltr',
    idea: 'direction:ltr forced reset on foreignObject span under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject span{direction:ltr!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-span-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-043',
    label: 'Loop AI b11 w08 #043: fo-rtl-a a-ltr',
    idea: 'direction:ltr forced reset on foreignObject a under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-044',
    label: 'Loop AI b11 w08 #044: fo-rtl-a nav-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject nav a under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject nav a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-nav-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-045',
    label: 'Loop AI b11 w08 #045: fo-rtl-a chain-ltr',
    idea: 'direction:ltr forced reset on foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-chain-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-046',
    label: 'Loop AI b11 w08 #046: fo-rtl-a star-embed',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:embed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-embed; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-047',
    label: 'Loop AI b11 w08 #047: fo-rtl-a star-isolate',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-isolate; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-048',
    label: 'Loop AI b11 w08 #048: fo-rtl-a star-plaintext',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:plaintext!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-plaintext; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-049',
    label: 'Loop AI b11 w08 #049: fo-rtl-a star-wm-hb',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;writing-mode:horizontal-tb!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-wm-hb; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-050',
    label: 'Loop AI b11 w08 #050: fo-rtl-a star-mixed-to',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-mixed-to; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-051',
    label: 'Loop AI b11 w08 #051: fo-rtl-a label-ltr',
    idea: 'direction:ltr forced reset on foreignObject label under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject label{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-label-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-052',
    label: 'Loop AI b11 w08 #052: fo-rtl-a button-ltr',
    idea: 'direction:ltr forced reset on foreignObject button under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject button{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-button-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-053',
    label: 'Loop AI b11 w08 #053: fo-rtl-a p-ltr',
    idea: 'direction:ltr forced reset on foreignObject p under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject p{direction:ltr!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-p-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-054',
    label: 'Loop AI b11 w08 #054: fo-rtl-a li-ltr',
    idea: 'direction:ltr forced reset on foreignObject li under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject li{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-li-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-055',
    label: 'Loop AI b11 w08 #055: fo-rtl-a h1-ltr',
    idea: 'direction:ltr forced reset on foreignObject h1,foreignObject h2,foreignObject h3 under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject h1,foreignObject h2,foreignObject h3{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-h1-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-056',
    label: 'Loop AI b11 w08 #056: fo-rtl-a div-star-ltr',
    idea: 'direction:ltr forced reset on foreignObject>div * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}foreignObject>div *{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-div-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-057',
    label: 'Loop AI b11 w08 #057: fo-rtl-a star-inherit',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-inherit; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-058',
    label: 'Loop AI b11 w08 #058: fo-rtl-a star-baseline',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-baseline; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-059',
    label: 'Loop AI b11 w08 #059: fo-rtl-a star-max-content',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject *{direction:ltr!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-star-max-content; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-060',
    label: 'Loop AI b11 w08 #060: fo-rtl-a span-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject span,foreignObject a under fo-rtl-a parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject a{direction:rtl!important}}foreignObject span,foreignObject a{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-a-span-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-061',
    label: 'Loop AI b11 w08 #061: fo-rtl-star star-ltr',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-062',
    label: 'Loop AI b11 w08 #062: fo-rtl-star span-ltr',
    idea: 'direction:ltr forced reset on foreignObject span under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject span{direction:ltr!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-span-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-063',
    label: 'Loop AI b11 w08 #063: fo-rtl-star a-ltr',
    idea: 'direction:ltr forced reset on foreignObject a under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-064',
    label: 'Loop AI b11 w08 #064: fo-rtl-star nav-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject nav a under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject nav a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-nav-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-065',
    label: 'Loop AI b11 w08 #065: fo-rtl-star chain-ltr',
    idea: 'direction:ltr forced reset on foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-chain-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-066',
    label: 'Loop AI b11 w08 #066: fo-rtl-star star-embed',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:embed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-embed; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-067',
    label: 'Loop AI b11 w08 #067: fo-rtl-star star-isolate',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-isolate; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-068',
    label: 'Loop AI b11 w08 #068: fo-rtl-star star-plaintext',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:plaintext!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-plaintext; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-069',
    label: 'Loop AI b11 w08 #069: fo-rtl-star star-wm-hb',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;writing-mode:horizontal-tb!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-wm-hb; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-070',
    label: 'Loop AI b11 w08 #070: fo-rtl-star star-mixed-to',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-mixed-to; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-071',
    label: 'Loop AI b11 w08 #071: fo-rtl-star label-ltr',
    idea: 'direction:ltr forced reset on foreignObject label under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject label{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-label-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-072',
    label: 'Loop AI b11 w08 #072: fo-rtl-star button-ltr',
    idea: 'direction:ltr forced reset on foreignObject button under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject button{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-button-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-073',
    label: 'Loop AI b11 w08 #073: fo-rtl-star p-ltr',
    idea: 'direction:ltr forced reset on foreignObject p under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject p{direction:ltr!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-p-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-074',
    label: 'Loop AI b11 w08 #074: fo-rtl-star li-ltr',
    idea: 'direction:ltr forced reset on foreignObject li under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject li{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-li-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-075',
    label: 'Loop AI b11 w08 #075: fo-rtl-star h1-ltr',
    idea: 'direction:ltr forced reset on foreignObject h1,foreignObject h2,foreignObject h3 under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject h1,foreignObject h2,foreignObject h3{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-h1-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-076',
    label: 'Loop AI b11 w08 #076: fo-rtl-star div-star-ltr',
    idea: 'direction:ltr forced reset on foreignObject>div * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}foreignObject>div *{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-div-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-077',
    label: 'Loop AI b11 w08 #077: fo-rtl-star star-inherit',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-inherit; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-078',
    label: 'Loop AI b11 w08 #078: fo-rtl-star star-baseline',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-baseline; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-079',
    label: 'Loop AI b11 w08 #079: fo-rtl-star star-max-content',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject *{direction:ltr!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-star-max-content; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-080',
    label: 'Loop AI b11 w08 #080: fo-rtl-star span-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject span,foreignObject a under fo-rtl-star parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject *{direction:rtl!important}}foreignObject span,foreignObject a{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-star-span-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-081',
    label: 'Loop AI b11 w08 #081: fo-rtl-div star-ltr',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-082',
    label: 'Loop AI b11 w08 #082: fo-rtl-div span-ltr',
    idea: 'direction:ltr forced reset on foreignObject span under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject span{direction:ltr!important;unicode-bidi:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-span-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-083',
    label: 'Loop AI b11 w08 #083: fo-rtl-div a-ltr',
    idea: 'direction:ltr forced reset on foreignObject a under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-084',
    label: 'Loop AI b11 w08 #084: fo-rtl-div nav-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject nav a under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject nav a{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-nav-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-085',
    label: 'Loop AI b11 w08 #085: fo-rtl-div chain-ltr',
    idea: 'direction:ltr forced reset on foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{direction:ltr!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-chain-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-086',
    label: 'Loop AI b11 w08 #086: fo-rtl-div star-embed',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:embed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-embed; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-087',
    label: 'Loop AI b11 w08 #087: fo-rtl-div star-isolate',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:isolate!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-isolate; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-088',
    label: 'Loop AI b11 w08 #088: fo-rtl-div star-plaintext',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:plaintext!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-plaintext; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-089',
    label: 'Loop AI b11 w08 #089: fo-rtl-div star-wm-hb',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;writing-mode:horizontal-tb!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-wm-hb; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-090',
    label: 'Loop AI b11 w08 #090: fo-rtl-div star-mixed-to',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-mixed-to; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-091',
    label: 'Loop AI b11 w08 #091: fo-rtl-div label-ltr',
    idea: 'direction:ltr forced reset on foreignObject label under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject label{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-label-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-092',
    label: 'Loop AI b11 w08 #092: fo-rtl-div button-ltr',
    idea: 'direction:ltr forced reset on foreignObject button under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject button{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-button-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-093',
    label: 'Loop AI b11 w08 #093: fo-rtl-div p-ltr',
    idea: 'direction:ltr forced reset on foreignObject p under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject p{direction:ltr!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-p-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-094',
    label: 'Loop AI b11 w08 #094: fo-rtl-div li-ltr',
    idea: 'direction:ltr forced reset on foreignObject li under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject li{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-li-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-095',
    label: 'Loop AI b11 w08 #095: fo-rtl-div h1-ltr',
    idea: 'direction:ltr forced reset on foreignObject h1,foreignObject h2,foreignObject h3 under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject h1,foreignObject h2,foreignObject h3{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-h1-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-096',
    label: 'Loop AI b11 w08 #096: fo-rtl-div div-star-ltr',
    idea: 'direction:ltr forced reset on foreignObject>div * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}foreignObject>div *{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-div-star-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-097',
    label: 'Loop AI b11 w08 #097: fo-rtl-div star-inherit',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;unicode-bidi:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-inherit; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-098',
    label: 'Loop AI b11 w08 #098: fo-rtl-div star-baseline',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-baseline; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-099',
    label: 'Loop AI b11 w08 #099: fo-rtl-div star-max-content',
    idea: 'direction:ltr forced reset on foreignObject * under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject *{direction:ltr!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-star-max-content; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w08-100',
    label: 'Loop AI b11 w08 #100: fo-rtl-div span-a-ltr',
    idea: 'direction:ltr forced reset on foreignObject span,foreignObject a under fo-rtl-div parent — bidi cascade probe',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{direction:rtl!important}foreignObject>div{direction:rtl!important}}foreignObject span,foreignObject a{direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w08; fo-rtl-div-span-a-ltr; direction:ltr forced reset on descendants vs rtl/rtl parent FO — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w08: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

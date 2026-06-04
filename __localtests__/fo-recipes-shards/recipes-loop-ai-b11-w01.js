/**
 * Loop AI batch-11 FO recipe shard (worker 01) — text-fix: writing-mode horizontal-tb reset cascades.
 * PRIMARY: horizontal-tb descendant reset vs non-tb FO parent
 * 100 recipes: loop-ai-b11-w01-001..100
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
    id: 'loop-ai-b11-w01-001',
    label: 'Loop AI b11 w01 #001: vertical-rl FO * hb-tb reset',
    idea: 'FO parent wm + writing-mode:horizontal-tb reset on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-basic; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-002',
    label: 'Loop AI b11 w01 #002: vertical-rl FO * hb-tb + direction ltr',
    idea: 'horizontal-tb reset on FO * with direction:ltr pin (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-ltr; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-003',
    label: 'Loop AI b11 w01 #003: vertical-rl FO * hb-tb + lh normal',
    idea: 'horizontal-tb reset + line-height:normal strut on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-lh-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-004',
    label: 'Loop AI b11 w01 #004: vertical-rl FO * hb-tb max-content',
    idea: 'horizontal-tb reset + inline-size:max-content on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;inline-size:max-content!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-max-content; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-005',
    label: 'Loop AI b11 w01 #005: vertical-rl FO span hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset scoped to FO span only (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-span-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-006',
    label: 'Loop AI b11 w01 #006: vertical-rl FO a hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset on FO anchors only (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-007',
    label: 'Loop AI b11 w01 #007: vertical-rl FO nav a hb-tb',
    idea: 'horizontal-tb reset on FO nav a under vertical/sideways FO parent (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject nav a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-nav-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-008',
    label: 'Loop AI b11 w01 #008: vertical-rl text chain hb-tb',
    idea: 'horizontal-tb reset limited to inline text chain selectors (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-text-chain; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-009',
    label: 'Loop AI b11 w01 #009: vertical-rl FO>div parent * reset',
    idea: 'non-tb wm on FO>div + horizontal-tb reset on FO>div * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:vertical-rl!important;text-orientation:mixed!important}foreignObject>div *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-div-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-010',
    label: 'Loop AI b11 w01 #010: vertical-rl FO * hb-tb bidi normal',
    idea: 'horizontal-tb reset + unicode-bidi:normal on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;unicode-bidi:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-bidi-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-011',
    label: 'Loop AI b11 w01 #011: vertical-rl parent upright * mixed',
    idea: 'text-orientation:upright on FO parent + horizontal-tb + mixed on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;}undefined{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-upright-parent; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-012',
    label: 'Loop AI b11 w01 #012: vertical-rl FO * block-size auto',
    idea: 'horizontal-tb reset + block-size:auto on FO * leaves (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-block-auto; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-013',
    label: 'Loop AI b11 w01 #013: vertical-rl FO * baseline valign',
    idea: 'horizontal-tb reset + vertical-align:baseline on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;vertical-align:baseline!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-baseline; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-014',
    label: 'Loop AI b11 w01 #014: vertical-rl FO * text-size-adjust',
    idea: 'horizontal-tb reset + text-size-adjust:100% on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-size-adjust; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-015',
    label: 'Loop AI b11 w01 #015: vertical-rl FO kerning + * reset',
    idea: 'font-kerning:normal on FO + horizontal-tb reset on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;font-kerning:normal!important;}foreignObject *{writing-mode:horizontal-tb!important;font-kerning:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-star-kerning; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-016',
    label: 'Loop AI b11 w01 #016: vertical-rl span+a hb-tb pair',
    idea: 'horizontal-tb reset on FO span and FO a under non-tb FO parent (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-span-a-pair; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-017',
    label: 'Loop AI b11 w01 #017: vertical-rl label+button hb-tb',
    idea: 'horizontal-tb reset on FO label and button text leaves (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject label,foreignObject button{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-label-button; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-018',
    label: 'Loop AI b11 w01 #018: vertical-rl p+li hb-tb reset',
    idea: 'horizontal-tb reset on FO p and li under sideways/vertical FO parent (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject li{writing-mode:horizontal-tb!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-p-li; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-019',
    label: 'Loop AI b11 w01 #019: vertical-rl headings hb-tb',
    idea: 'horizontal-tb reset on FO h1–h6 chain under non-tb parent (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-h-tags; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-020',
    label: 'Loop AI b11 w01 #020: vertical-rl strong+em hb-tb',
    idea: 'horizontal-tb reset on FO strong/em inline emphasis leaves (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject strong,foreignObject em{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-strong-em; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-021',
    label: 'Loop AI b11 w01 #021: vertical-rl small+code hb-tb',
    idea: 'horizontal-tb reset on FO small/code monospace leaves (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-small-code; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-022',
    label: 'Loop AI b11 w01 #022: vertical-rl FO then FO>div wm',
    idea: 'wm on FO root + FO>div horizontal-tb + FO * inherit reset stack (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject *{writing-mode:inherit!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-div-then-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-023',
    label: 'Loop AI b11 w01 #023: vertical-rl parent overflow visible',
    idea: 'overflow:visible on FO parent + horizontal-tb reset on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-overflow-visible; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-024',
    label: 'Loop AI b11 w01 #024: vertical-rl hb-tb strut bundle',
    idea: 'horizontal-tb reset + line-height:normal + inline-size:max-content strut bundle on FO * (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-strut-bundle; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-025',
    label: 'Loop AI b11 w01 #025: vertical-rl vrl parent control',
    idea: 'vertical-rl on FO (control) + horizontal-tb on FO * — canonical cascade flip (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-invert-control; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-026',
    label: 'Loop AI b11 w01 #026: vertical-lr FO * hb-tb reset',
    idea: 'FO parent wm + writing-mode:horizontal-tb reset on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-basic; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-027',
    label: 'Loop AI b11 w01 #027: vertical-lr FO * hb-tb + direction ltr',
    idea: 'horizontal-tb reset on FO * with direction:ltr pin (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-ltr; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-028',
    label: 'Loop AI b11 w01 #028: vertical-lr FO * hb-tb + lh normal',
    idea: 'horizontal-tb reset + line-height:normal strut on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-lh-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-029',
    label: 'Loop AI b11 w01 #029: vertical-lr FO * hb-tb max-content',
    idea: 'horizontal-tb reset + inline-size:max-content on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;inline-size:max-content!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-max-content; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-030',
    label: 'Loop AI b11 w01 #030: vertical-lr FO span hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset scoped to FO span only (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-span-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-031',
    label: 'Loop AI b11 w01 #031: vertical-lr FO a hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset on FO anchors only (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-032',
    label: 'Loop AI b11 w01 #032: vertical-lr FO nav a hb-tb',
    idea: 'horizontal-tb reset on FO nav a under vertical/sideways FO parent (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject nav a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-nav-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-033',
    label: 'Loop AI b11 w01 #033: vertical-lr text chain hb-tb',
    idea: 'horizontal-tb reset limited to inline text chain selectors (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-text-chain; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-034',
    label: 'Loop AI b11 w01 #034: vertical-lr FO>div parent * reset',
    idea: 'non-tb wm on FO>div + horizontal-tb reset on FO>div * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:vertical-lr!important;text-orientation:mixed!important}foreignObject>div *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-div-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-035',
    label: 'Loop AI b11 w01 #035: vertical-lr FO * hb-tb bidi normal',
    idea: 'horizontal-tb reset + unicode-bidi:normal on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;unicode-bidi:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-bidi-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-036',
    label: 'Loop AI b11 w01 #036: vertical-lr parent upright * mixed',
    idea: 'text-orientation:upright on FO parent + horizontal-tb + mixed on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;}undefined{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-upright-parent; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-037',
    label: 'Loop AI b11 w01 #037: vertical-lr FO * block-size auto',
    idea: 'horizontal-tb reset + block-size:auto on FO * leaves (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-block-auto; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-038',
    label: 'Loop AI b11 w01 #038: vertical-lr FO * baseline valign',
    idea: 'horizontal-tb reset + vertical-align:baseline on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;vertical-align:baseline!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-baseline; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-039',
    label: 'Loop AI b11 w01 #039: vertical-lr FO * text-size-adjust',
    idea: 'horizontal-tb reset + text-size-adjust:100% on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-size-adjust; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-040',
    label: 'Loop AI b11 w01 #040: vertical-lr FO kerning + * reset',
    idea: 'font-kerning:normal on FO + horizontal-tb reset on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;font-kerning:normal!important;}foreignObject *{writing-mode:horizontal-tb!important;font-kerning:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-star-kerning; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-041',
    label: 'Loop AI b11 w01 #041: vertical-lr span+a hb-tb pair',
    idea: 'horizontal-tb reset on FO span and FO a under non-tb FO parent (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-span-a-pair; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-042',
    label: 'Loop AI b11 w01 #042: vertical-lr label+button hb-tb',
    idea: 'horizontal-tb reset on FO label and button text leaves (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject label,foreignObject button{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-label-button; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-043',
    label: 'Loop AI b11 w01 #043: vertical-lr p+li hb-tb reset',
    idea: 'horizontal-tb reset on FO p and li under sideways/vertical FO parent (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject li{writing-mode:horizontal-tb!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-p-li; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-044',
    label: 'Loop AI b11 w01 #044: vertical-lr headings hb-tb',
    idea: 'horizontal-tb reset on FO h1–h6 chain under non-tb parent (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-h-tags; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-045',
    label: 'Loop AI b11 w01 #045: vertical-lr strong+em hb-tb',
    idea: 'horizontal-tb reset on FO strong/em inline emphasis leaves (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject strong,foreignObject em{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-strong-em; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-046',
    label: 'Loop AI b11 w01 #046: vertical-lr small+code hb-tb',
    idea: 'horizontal-tb reset on FO small/code monospace leaves (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-small-code; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-047',
    label: 'Loop AI b11 w01 #047: vertical-lr FO then FO>div wm',
    idea: 'wm on FO root + FO>div horizontal-tb + FO * inherit reset stack (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject *{writing-mode:inherit!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-div-then-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-048',
    label: 'Loop AI b11 w01 #048: vertical-lr parent overflow visible',
    idea: 'overflow:visible on FO parent + horizontal-tb reset on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-overflow-visible; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-049',
    label: 'Loop AI b11 w01 #049: vertical-lr hb-tb strut bundle',
    idea: 'horizontal-tb reset + line-height:normal + inline-size:max-content strut bundle on FO * (parent vertical-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-lr-strut-bundle; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-050',
    label: 'Loop AI b11 w01 #050: vertical-rl vrl parent control',
    idea: 'vertical-rl on FO (control) + horizontal-tb on FO * — canonical cascade flip (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-invert-control; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-051',
    label: 'Loop AI b11 w01 #051: sideways-rl FO * hb-tb reset',
    idea: 'FO parent wm + writing-mode:horizontal-tb reset on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-basic; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-052',
    label: 'Loop AI b11 w01 #052: sideways-rl FO * hb-tb + direction ltr',
    idea: 'horizontal-tb reset on FO * with direction:ltr pin (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-ltr; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-053',
    label: 'Loop AI b11 w01 #053: sideways-rl FO * hb-tb + lh normal',
    idea: 'horizontal-tb reset + line-height:normal strut on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-lh-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-054',
    label: 'Loop AI b11 w01 #054: sideways-rl FO * hb-tb max-content',
    idea: 'horizontal-tb reset + inline-size:max-content on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;inline-size:max-content!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-max-content; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-055',
    label: 'Loop AI b11 w01 #055: sideways-rl FO span hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset scoped to FO span only (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-span-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-056',
    label: 'Loop AI b11 w01 #056: sideways-rl FO a hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset on FO anchors only (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-057',
    label: 'Loop AI b11 w01 #057: sideways-rl FO nav a hb-tb',
    idea: 'horizontal-tb reset on FO nav a under vertical/sideways FO parent (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject nav a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-nav-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-058',
    label: 'Loop AI b11 w01 #058: sideways-rl text chain hb-tb',
    idea: 'horizontal-tb reset limited to inline text chain selectors (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-text-chain; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-059',
    label: 'Loop AI b11 w01 #059: sideways-rl FO>div parent * reset',
    idea: 'non-tb wm on FO>div + horizontal-tb reset on FO>div * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:sideways-rl!important;text-orientation:mixed!important}foreignObject>div *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-div-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-060',
    label: 'Loop AI b11 w01 #060: sideways-rl FO * hb-tb bidi normal',
    idea: 'horizontal-tb reset + unicode-bidi:normal on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;unicode-bidi:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-bidi-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-061',
    label: 'Loop AI b11 w01 #061: sideways-rl parent upright * mixed',
    idea: 'text-orientation:upright on FO parent + horizontal-tb + mixed on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:upright!important;overflow:visible!important;}undefined{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-upright-parent; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-062',
    label: 'Loop AI b11 w01 #062: sideways-rl FO * block-size auto',
    idea: 'horizontal-tb reset + block-size:auto on FO * leaves (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-block-auto; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-063',
    label: 'Loop AI b11 w01 #063: sideways-rl FO * baseline valign',
    idea: 'horizontal-tb reset + vertical-align:baseline on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;vertical-align:baseline!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-baseline; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-064',
    label: 'Loop AI b11 w01 #064: sideways-rl FO * text-size-adjust',
    idea: 'horizontal-tb reset + text-size-adjust:100% on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-size-adjust; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-065',
    label: 'Loop AI b11 w01 #065: sideways-rl FO kerning + * reset',
    idea: 'font-kerning:normal on FO + horizontal-tb reset on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;font-kerning:normal!important;}foreignObject *{writing-mode:horizontal-tb!important;font-kerning:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-star-kerning; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-066',
    label: 'Loop AI b11 w01 #066: sideways-rl span+a hb-tb pair',
    idea: 'horizontal-tb reset on FO span and FO a under non-tb FO parent (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-span-a-pair; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-067',
    label: 'Loop AI b11 w01 #067: sideways-rl label+button hb-tb',
    idea: 'horizontal-tb reset on FO label and button text leaves (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject label,foreignObject button{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-label-button; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-068',
    label: 'Loop AI b11 w01 #068: sideways-rl p+li hb-tb reset',
    idea: 'horizontal-tb reset on FO p and li under sideways/vertical FO parent (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject li{writing-mode:horizontal-tb!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-p-li; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-069',
    label: 'Loop AI b11 w01 #069: sideways-rl headings hb-tb',
    idea: 'horizontal-tb reset on FO h1–h6 chain under non-tb parent (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-h-tags; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-070',
    label: 'Loop AI b11 w01 #070: sideways-rl strong+em hb-tb',
    idea: 'horizontal-tb reset on FO strong/em inline emphasis leaves (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject strong,foreignObject em{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-strong-em; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-071',
    label: 'Loop AI b11 w01 #071: sideways-rl small+code hb-tb',
    idea: 'horizontal-tb reset on FO small/code monospace leaves (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-small-code; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-072',
    label: 'Loop AI b11 w01 #072: sideways-rl FO then FO>div wm',
    idea: 'wm on FO root + FO>div horizontal-tb + FO * inherit reset stack (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject *{writing-mode:inherit!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-div-then-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-073',
    label: 'Loop AI b11 w01 #073: sideways-rl parent overflow visible',
    idea: 'overflow:visible on FO parent + horizontal-tb reset on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-overflow-visible; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-074',
    label: 'Loop AI b11 w01 #074: sideways-rl hb-tb strut bundle',
    idea: 'horizontal-tb reset + line-height:normal + inline-size:max-content strut bundle on FO * (parent sideways-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-rl-strut-bundle; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-075',
    label: 'Loop AI b11 w01 #075: vertical-rl vrl parent control',
    idea: 'vertical-rl on FO (control) + horizontal-tb on FO * — canonical cascade flip (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-invert-control; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-076',
    label: 'Loop AI b11 w01 #076: sideways-lr FO * hb-tb reset',
    idea: 'FO parent wm + writing-mode:horizontal-tb reset on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-basic; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-077',
    label: 'Loop AI b11 w01 #077: sideways-lr FO * hb-tb + direction ltr',
    idea: 'horizontal-tb reset on FO * with direction:ltr pin (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:mixed!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-ltr; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-078',
    label: 'Loop AI b11 w01 #078: sideways-lr FO * hb-tb + lh normal',
    idea: 'horizontal-tb reset + line-height:normal strut on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-lh-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-079',
    label: 'Loop AI b11 w01 #079: sideways-lr FO * hb-tb max-content',
    idea: 'horizontal-tb reset + inline-size:max-content on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;inline-size:max-content!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-max-content; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-080',
    label: 'Loop AI b11 w01 #080: sideways-lr FO span hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset scoped to FO span only (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-span-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-081',
    label: 'Loop AI b11 w01 #081: sideways-lr FO a hb-tb reset',
    idea: 'parent wm on FO + horizontal-tb reset on FO anchors only (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-082',
    label: 'Loop AI b11 w01 #082: sideways-lr FO nav a hb-tb',
    idea: 'horizontal-tb reset on FO nav a under vertical/sideways FO parent (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject nav a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-nav-a-only; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-083',
    label: 'Loop AI b11 w01 #083: sideways-lr text chain hb-tb',
    idea: 'horizontal-tb reset limited to inline text chain selectors (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-text-chain; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-084',
    label: 'Loop AI b11 w01 #084: sideways-lr FO>div parent * reset',
    idea: 'non-tb wm on FO>div + horizontal-tb reset on FO>div * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:sideways-lr!important;text-orientation:mixed!important}foreignObject>div *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-div-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-085',
    label: 'Loop AI b11 w01 #085: sideways-lr FO * hb-tb bidi normal',
    idea: 'horizontal-tb reset + unicode-bidi:normal on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;unicode-bidi:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-bidi-normal; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-086',
    label: 'Loop AI b11 w01 #086: sideways-lr parent upright * mixed',
    idea: 'text-orientation:upright on FO parent + horizontal-tb + mixed on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;overflow:visible!important;}undefined{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-upright-parent; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-087',
    label: 'Loop AI b11 w01 #087: sideways-lr FO * block-size auto',
    idea: 'horizontal-tb reset + block-size:auto on FO * leaves (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-block-auto; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-088',
    label: 'Loop AI b11 w01 #088: sideways-lr FO * baseline valign',
    idea: 'horizontal-tb reset + vertical-align:baseline on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;vertical-align:baseline!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-baseline; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-089',
    label: 'Loop AI b11 w01 #089: sideways-lr FO * text-size-adjust',
    idea: 'horizontal-tb reset + text-size-adjust:100% on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-size-adjust; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-090',
    label: 'Loop AI b11 w01 #090: sideways-lr FO kerning + * reset',
    idea: 'font-kerning:normal on FO + horizontal-tb reset on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;font-kerning:normal!important;}foreignObject *{writing-mode:horizontal-tb!important;font-kerning:normal!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-star-kerning; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-091',
    label: 'Loop AI b11 w01 #091: sideways-lr span+a hb-tb pair',
    idea: 'horizontal-tb reset on FO span and FO a under non-tb FO parent (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important}foreignObject span{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject a{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-span-a-pair; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-092',
    label: 'Loop AI b11 w01 #092: sideways-lr label+button hb-tb',
    idea: 'horizontal-tb reset on FO label and button text leaves (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject label,foreignObject button{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-label-button; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-093',
    label: 'Loop AI b11 w01 #093: sideways-lr p+li hb-tb reset',
    idea: 'horizontal-tb reset on FO p and li under sideways/vertical FO parent (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject p,foreignObject li{writing-mode:horizontal-tb!important;text-orientation:mixed!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-p-li; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-094',
    label: 'Loop AI b11 w01 #094: sideways-lr headings hb-tb',
    idea: 'horizontal-tb reset on FO h1–h6 chain under non-tb parent (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-h-tags; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-095',
    label: 'Loop AI b11 w01 #095: sideways-lr strong+em hb-tb',
    idea: 'horizontal-tb reset on FO strong/em inline emphasis leaves (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject strong,foreignObject em{writing-mode:horizontal-tb!important;text-orientation:mixed!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-strong-em; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-096',
    label: 'Loop AI b11 w01 #096: sideways-lr small+code hb-tb',
    idea: 'horizontal-tb reset on FO small/code monospace leaves (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject small,foreignObject code{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-small-code; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-097',
    label: 'Loop AI b11 w01 #097: sideways-lr FO then FO>div wm',
    idea: 'wm on FO root + FO>div horizontal-tb + FO * inherit reset stack (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important}foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:mixed!important}foreignObject *{writing-mode:inherit!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-div-then-star; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-098',
    label: 'Loop AI b11 w01 #098: sideways-lr parent overflow visible',
    idea: 'overflow:visible on FO parent + horizontal-tb reset on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-overflow-visible; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-099',
    label: 'Loop AI b11 w01 #099: sideways-lr hb-tb strut bundle',
    idea: 'horizontal-tb reset + line-height:normal + inline-size:max-content strut bundle on FO * (parent sideways-lr)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;line-height:normal!important;inline-size:max-content!important;block-size:auto!important;text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; sideways-lr-strut-bundle; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w01-100',
    label: 'Loop AI b11 w01 #100: vertical-rl vrl parent control',
    idea: 'vertical-rl on FO (control) + horizontal-tb on FO * — canonical cascade flip (parent vertical-rl)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{writing-mode:horizontal-tb!important;text-orientation:mixed!important;unicode-bidi:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w01; vertical-rl-invert-control; horizontal-tb descendant reset vs non-tb FO parent — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w01: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

/**
 * Loop AI batch-10 FO recipe shard (worker 13) — text-fix: line-height calc(1em), unitless 1/1.2/1.5, lh unit.
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code'

/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b10-w13-001',
    label: 'Loop AI b10 w13 #001: lh 1 unitless FO star',
    idea: 'line-height:1 unitless on FO * — tight strut ratio vs serialized computed lh',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1 unitless FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-002',
    label: 'Loop AI b10 w13 #002: lh 1.2 unitless FO star',
    idea: 'line-height:1.2 unitless on FO * — 1.2 ratio strut vs FO raster half-leading',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1.2!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.2 unitless FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-003',
    label: 'Loop AI b10 w13 #003: lh 1.5 unitless FO star',
    idea: 'line-height:1.5 unitless on FO * — relaxed ratio strut vs serialized lh',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1.5!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.5 unitless FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-004',
    label: 'Loop AI b10 w13 #004: lh calc(1em) FO star',
    idea: 'line-height:calc(1em) on FO * — em-based strut equal to used font-size',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-005',
    label: 'Loop AI b10 w13 #005: lh calc(1.2em) FO star',
    idea: 'line-height:calc(1.2em) on FO * — em-scaled 1.2 strut vs unitless 1.2',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.2em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.2em) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-006',
    label: 'Loop AI b10 w13 #006: lh calc(1.5em) FO star',
    idea: 'line-height:calc(1.5em) on FO * — em-scaled 1.5 strut vs unitless 1.5',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.5em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.5em) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-007',
    label: 'Loop AI b10 w13 #007: lh 1lh FO star',
    idea: 'line-height:1lh on FO * — CSS lh unit strut tied to root line box',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1lh!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1lh FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-008',
    label: 'Loop AI b10 w13 #008: lh 1.2lh FO star',
    idea: 'line-height:1.2lh on FO * — lh-unit 1.2 ratio vs unitless/em forms',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1.2lh!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.2lh FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-009',
    label: 'Loop AI b10 w13 #009: lh 1.5lh FO star',
    idea: 'line-height:1.5lh on FO * — lh-unit relaxed strut vs em calc',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:1.5lh!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.5lh FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-010',
    label: 'Loop AI b10 w13 #010: lh calc(1lh) FO star',
    idea: 'line-height:calc(1lh) on FO * — calc wrapper around lh unit vs bare 1lh',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1lh)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1lh) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-011',
    label: 'Loop AI b10 w13 #011: lh 1 unitless FO div root',
    idea: 'line-height:1 unitless on FO>div wrapper only — root strut before descendant cascade',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:1!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1 unitless FO div root; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-012',
    label: 'Loop AI b10 w13 #012: lh 1.2 unitless FO div star',
    idea: 'line-height:1.2 on FO>div * — unitless ratio on direct wrapper descendants only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:1.2!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.2 unitless FO div star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-013',
    label: 'Loop AI b10 w13 #013: lh 1.5 unitless anchors',
    idea: 'line-height:1.5 unitless on FO nav a — nav link strut ratio vs flex cross-axis',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav a{line-height:1.5!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.5 unitless anchors; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-014',
    label: 'Loop AI b10 w13 #014: lh calc(1em) FO div root',
    idea: 'line-height:calc(1em) on FO>div — em strut on capture wrapper root only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:calc(1em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em) FO div root; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-015',
    label: 'Loop AI b10 w13 #015: lh calc(1em) FO div star',
    idea: 'line-height:calc(1em) on FO>div * — em strut on wrapper descendants vs FO root',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:calc(1em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em) FO div star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-016',
    label: 'Loop AI b10 w13 #016: lh calc(1.2em) text chain',
    idea: 'line-height:calc(1.2em) on inline text chain selectors — em calc on leaves only',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{line-height:calc(1.2em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.2em) text chain; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-017',
    label: 'Loop AI b10 w13 #017: lh calc(1.5em) spans only',
    idea: 'line-height:calc(1.5em) on FO span — em calc on inline span leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject span{line-height:calc(1.5em)!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.5em) spans only; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-018',
    label: 'Loop AI b10 w13 #018: lh 1lh FO div star',
    idea: 'line-height:1lh on FO>div * — lh unit on wrapper descendants',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div *{line-height:1lh!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1lh FO div star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-019',
    label: 'Loop AI b10 w13 #019: lh 1.2lh text chain',
    idea: 'line-height:1.2lh on text chain — lh unit on named inline text selectors',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      TEXT_CHAIN +
      '{line-height:1.2lh!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.2lh text chain; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-020',
    label: 'Loop AI b10 w13 #020: lh 1.5lh anchors inline-block',
    idea: 'line-height:1.5lh on FO a inline-block — lh strut on link boxes',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject a{display:inline-block!important;line-height:1.5lh!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh 1.5lh anchors inline-block; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-021',
    label: 'Loop AI b10 w13 #021: lh calc(1em+0px) FO star',
    idea: 'line-height:calc(1em + 0px) on FO * — zero px addend em calc vs bare calc(1em)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1em + 0px)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em+0px) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-022',
    label: 'Loop AI b10 w13 #022: lh calc(1em+0lh) FO star',
    idea: 'line-height:calc(1em + 0lh) on FO * — mixed em+lh calc addends at zero offset',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1em + 0lh)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em+0lh) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-023',
    label: 'Loop AI b10 w13 #023: lh calc(1em*1) FO star',
    idea: 'line-height:calc(1em * 1) on FO * — multiplicative em calc identity vs calc(1em)',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1em * 1)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em*1) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-024',
    label: 'Loop AI b10 w13 #024: lh calc(1.2em*1) FO star',
    idea: 'line-height:calc(1.2em * 1) on FO * — multiplicative em calc for 1.2 ratio',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.2em * 1)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.2em*1) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-025',
    label: 'Loop AI b10 w13 #025: lh calc(1.5lh) FO star',
    idea: 'line-height:calc(1.5lh) on FO * — calc wrapper around 1.5 lh unit',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.5lh)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.5lh) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-026',
    label: 'Loop AI b10 w13 #026: lh calc(1.2lh) FO star',
    idea: 'line-height:calc(1.2lh) on FO * — calc wrapper around 1.2 lh unit',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.2lh)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.2lh) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-027',
    label: 'Loop AI b10 w13 #027: lh calc(1lh+0em) FO star',
    idea: 'line-height:calc(1lh + 0em) on FO * — lh+em calc with zero em addend',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1lh + 0em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1lh+0em) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-028',
    label: 'Loop AI b10 w13 #028: lh calc(1em/1) FO star',
    idea: 'line-height:calc(1em / 1) on FO * — division em calc identity strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1em / 1)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1em/1) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-029',
    label: 'Loop AI b10 w13 #029: lh calc(1.5em/1) FO star',
    idea: 'line-height:calc(1.5em / 1) on FO * — division em calc for 1.5 ratio',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.5em / 1)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.5em/1) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-030',
    label: 'Loop AI b10 w13 #030: lh calc(1.2lh+0px) FO star',
    idea: 'line-height:calc(1.2lh + 0px) on FO * — lh calc with zero px addend',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject *{line-height:calc(1.2lh + 0px)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; lh calc(1.2lh+0px) FO star; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-031',
    label: 'Loop AI b10 w13 #031: @layer unitless 1 vs calc 1em',
    idea: 'Ordered @layer — line-height:1 vs calc(1em) override inside FO subtree',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      '@layer fo-loop-b10-w13-low, fo-loop-b10-w13-high;@layer fo-loop-b10-w13-low{foreignObject *{line-height:1!important}}@layer fo-loop-b10-w13-high{foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important}}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; @layer unitless 1 vs calc 1em; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-032',
    label: 'Loop AI b10 w13 #032: @layer unitless 1.2 vs 1.2lh',
    idea: 'Ordered @layer — line-height:1.2 unitless vs 1.2lh override on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      '@layer fo-loop-b10-w13-a, fo-loop-b10-w13-b;@layer fo-loop-b10-w13-a{foreignObject *{line-height:1.2!important}}@layer fo-loop-b10-w13-b{foreignObject *{line-height:1.2lh!important;vertical-align:baseline!important}}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; @layer unitless 1.2 vs 1.2lh; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-033',
    label: 'Loop AI b10 w13 #033: @layer calc 1.5em vs 1.5 unitless',
    idea: 'Ordered @layer — calc(1.5em) vs unitless 1.5 override on FO *',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      '@layer fo-loop-b10-w13-c, fo-loop-b10-w13-d;@layer fo-loop-b10-w13-c{foreignObject *{line-height:calc(1.5em)!important}}@layer fo-loop-b10-w13-d{foreignObject *{line-height:1.5!important;vertical-align:baseline!important}}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; @layer calc 1.5em vs 1.5 unitless; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-034',
    label: 'Loop AI b10 w13 #034: FO div calc 1em star lh 1',
    idea: 'FO>div calc(1em) wrapper + FO * unitless 1 — root em strut vs leaf unitless',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:calc(1em)!important}foreignObject *{line-height:1!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; FO div calc 1em star lh 1; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-035',
    label: 'Loop AI b10 w13 #035: FO div lh 1 star calc 1.2em',
    idea: 'FO>div 1lh wrapper + FO>div * calc(1.2em) — lh root vs em leaf strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{line-height:1lh!important}foreignObject>div *{line-height:calc(1.2em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; FO div lh 1 star calc 1.2em; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-036',
    label: 'Loop AI b10 w13 #036: flex row baseline lh 1.2 unitless',
    idea: 'FO flex row align-items:baseline + line-height:1.2 unitless on FO * text leaves',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;overflow:visible!important}foreignObject *{line-height:1.2!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; flex row baseline lh 1.2 unitless; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-037',
    label: 'Loop AI b10 w13 #037: flex row center lh calc 1em',
    idea: 'FO flex row align-items:center + line-height:calc(1em) on FO * — cross-axis vs em strut',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;overflow:visible!important}foreignObject *{line-height:calc(1em)!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; flex row center lh calc 1em; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-038',
    label: 'Loop AI b10 w13 #038: inline-block a lh 1.5lh',
    idea: 'FO nav a inline-block + line-height:1.5lh — link box lh strut vs stretch flex',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject nav{display:flex!important;align-items:stretch!important;overflow:visible!important}foreignObject nav a{display:inline-block!important;line-height:1.5lh!important;align-self:stretch!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; inline-block a lh 1.5lh; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-039',
    label: 'Loop AI b10 w13 #039: chromium copy lh 1 unitless',
    idea: 'Chromium font-kerning copy + line-height:1 unitless on FO * — kern + tight strut combo',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:1!important;font-kerning:normal!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; chromium copy lh 1 unitless; line-height calc/unitless/lh probe — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w13-040',
    label: 'Loop AI b10 w13 #040: chromium copy lh calc 1.5em',
    idea: 'Chromium font-kerning copy + line-height:calc(1.5em) on FO * — kern + em 1.5 strut combo',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{font-kerning:normal!important;font-synthesis:none!important}foreignObject *{line-height:calc(1.5em)!important;font-kerning:normal!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w13; chromium copy lh calc 1.5em; line-height calc/unitless/lh probe — no text bypass.',
  },
]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

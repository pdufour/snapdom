/**
 * Loop AI batch-11 FO recipe shard (worker 78) — text-fix: flex gap:0 baseline/center nav text row probes
 * 100 recipes: loop-ai-b11-w78-001..100
 * Merge: node __localtests__/fo-fix-recipes-merge.mjs --check-dupes
 */
import { FO_BASELINE_CSS } from '../fo-fix-recipes-constants.js'

const TEXT_LEAF =
  'foreignObject *{box-sizing:border-box!important;min-width:0!important}'

const CHROMIUM =
  'foreignObject{font-kerning:normal!important;font-synthesis:none!important}'

const TEXT_CHAIN =
  'foreignObject p,foreignObject span,foreignObject a,foreignObject li,' +
  'foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,' +
  'foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,' +
  'foreignObject strong,foreignObject em,foreignObject small,foreignObject code'


/** @type {import('../fo-fix-recipes.js').FoFixRecipe[]} */
const RECIPES = [
  {
    id: 'loop-ai-b11-w78-001',
    label: 'Loop AI b11 w78 #001: FO baseline gap0 plain text',
    idea: 'FO flex row baseline gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-002',
    label: 'Loop AI b11 w78 #002: FO baseline gap0 anchor ib baseline',
    idea: 'FO flex row baseline gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-003',
    label: 'Loop AI b11 w78 #003: FO baseline gap0 anchor lh normal',
    idea: 'FO flex row baseline gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-004',
    label: 'Loop AI b11 w78 #004: FO baseline gap0 span middle',
    idea: 'FO flex row baseline gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-005',
    label: 'Loop AI b11 w78 #005: FO baseline gap0 align-self baseline',
    idea: 'FO flex row baseline gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-006',
    label: 'Loop AI b11 w78 #006: FO baseline gap0 inline baseline',
    idea: 'FO flex row baseline gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-007',
    label: 'Loop AI b11 w78 #007: FO baseline gap0 from-font lh',
    idea: 'FO flex row baseline gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-008',
    label: 'Loop AI b11 w78 #008: FO baseline gap0 kerning normal',
    idea: 'FO flex row baseline gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-baseline+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-009',
    label: 'Loop AI b11 w78 #009: FO baseline gap0 stretch leaf',
    idea: 'FO flex row baseline gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; fo-baseline+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-010',
    label: 'Loop AI b11 w78 #010: FO baseline gap0 pin lh',
    idea: 'FO flex row baseline gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; fo-baseline+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-011',
    label: 'Loop AI b11 w78 #011: FO center gap0 plain text',
    idea: 'FO flex row center gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-012',
    label: 'Loop AI b11 w78 #012: FO center gap0 anchor ib baseline',
    idea: 'FO flex row center gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-013',
    label: 'Loop AI b11 w78 #013: FO center gap0 anchor lh normal',
    idea: 'FO flex row center gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-014',
    label: 'Loop AI b11 w78 #014: FO center gap0 span middle',
    idea: 'FO flex row center gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-015',
    label: 'Loop AI b11 w78 #015: FO center gap0 align-self baseline',
    idea: 'FO flex row center gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-016',
    label: 'Loop AI b11 w78 #016: FO center gap0 inline baseline',
    idea: 'FO flex row center gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-017',
    label: 'Loop AI b11 w78 #017: FO center gap0 from-font lh',
    idea: 'FO flex row center gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-018',
    label: 'Loop AI b11 w78 #018: FO center gap0 kerning normal',
    idea: 'FO flex row center gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-center+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-019',
    label: 'Loop AI b11 w78 #019: FO center gap0 stretch leaf',
    idea: 'FO flex row center gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; fo-center+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-020',
    label: 'Loop AI b11 w78 #020: FO center gap0 pin lh',
    idea: 'FO flex row center gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; fo-center+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-021',
    label: 'Loop AI b11 w78 #021: FO flex-start gap0 plain text',
    idea: 'FO flex row flex-start gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-022',
    label: 'Loop AI b11 w78 #022: FO flex-start gap0 anchor ib baseline',
    idea: 'FO flex row flex-start gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-023',
    label: 'Loop AI b11 w78 #023: FO flex-start gap0 anchor lh normal',
    idea: 'FO flex row flex-start gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-024',
    label: 'Loop AI b11 w78 #024: FO flex-start gap0 span middle',
    idea: 'FO flex row flex-start gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-025',
    label: 'Loop AI b11 w78 #025: FO flex-start gap0 align-self baseline',
    idea: 'FO flex row flex-start gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-026',
    label: 'Loop AI b11 w78 #026: FO flex-start gap0 inline baseline',
    idea: 'FO flex row flex-start gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-027',
    label: 'Loop AI b11 w78 #027: FO flex-start gap0 from-font lh',
    idea: 'FO flex row flex-start gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-028',
    label: 'Loop AI b11 w78 #028: FO flex-start gap0 kerning normal',
    idea: 'FO flex row flex-start gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-start+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-029',
    label: 'Loop AI b11 w78 #029: FO flex-start gap0 stretch leaf',
    idea: 'FO flex row flex-start gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; fo-flex-start+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-030',
    label: 'Loop AI b11 w78 #030: FO flex-start gap0 pin lh',
    idea: 'FO flex row flex-start gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-start!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; fo-flex-start+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-031',
    label: 'Loop AI b11 w78 #031: FO flex-end gap0 plain text',
    idea: 'FO flex row flex-end gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-032',
    label: 'Loop AI b11 w78 #032: FO flex-end gap0 anchor ib baseline',
    idea: 'FO flex row flex-end gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-033',
    label: 'Loop AI b11 w78 #033: FO flex-end gap0 anchor lh normal',
    idea: 'FO flex row flex-end gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-034',
    label: 'Loop AI b11 w78 #034: FO flex-end gap0 span middle',
    idea: 'FO flex row flex-end gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-035',
    label: 'Loop AI b11 w78 #035: FO flex-end gap0 align-self baseline',
    idea: 'FO flex row flex-end gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-036',
    label: 'Loop AI b11 w78 #036: FO flex-end gap0 inline baseline',
    idea: 'FO flex row flex-end gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-037',
    label: 'Loop AI b11 w78 #037: FO flex-end gap0 from-font lh',
    idea: 'FO flex row flex-end gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-038',
    label: 'Loop AI b11 w78 #038: FO flex-end gap0 kerning normal',
    idea: 'FO flex row flex-end gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; fo-flex-end+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-039',
    label: 'Loop AI b11 w78 #039: FO flex-end gap0 stretch leaf',
    idea: 'FO flex row flex-end gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; fo-flex-end+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-040',
    label: 'Loop AI b11 w78 #040: FO flex-end gap0 pin lh',
    idea: 'FO flex row flex-end gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:flex-end!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; fo-flex-end+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-041',
    label: 'Loop AI b11 w78 #041: inline-flex baseline gap0 plain text',
    idea: 'inline-flex baseline gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-042',
    label: 'Loop AI b11 w78 #042: inline-flex baseline gap0 anchor ib baseline',
    idea: 'inline-flex baseline gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-043',
    label: 'Loop AI b11 w78 #043: inline-flex baseline gap0 anchor lh normal',
    idea: 'inline-flex baseline gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-044',
    label: 'Loop AI b11 w78 #044: inline-flex baseline gap0 span middle',
    idea: 'inline-flex baseline gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-045',
    label: 'Loop AI b11 w78 #045: inline-flex baseline gap0 align-self baseline',
    idea: 'inline-flex baseline gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-046',
    label: 'Loop AI b11 w78 #046: inline-flex baseline gap0 inline baseline',
    idea: 'inline-flex baseline gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-047',
    label: 'Loop AI b11 w78 #047: inline-flex baseline gap0 from-font lh',
    idea: 'inline-flex baseline gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-048',
    label: 'Loop AI b11 w78 #048: inline-flex baseline gap0 kerning normal',
    idea: 'inline-flex baseline gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; inline-flex-baseline+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-049',
    label: 'Loop AI b11 w78 #049: inline-flex baseline gap0 stretch leaf',
    idea: 'inline-flex baseline gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; inline-flex-baseline+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-050',
    label: 'Loop AI b11 w78 #050: inline-flex baseline gap0 pin lh',
    idea: 'inline-flex baseline gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:inline-flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; inline-flex-baseline+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-051',
    label: 'Loop AI b11 w78 #051: nav baseline gap0 plain text',
    idea: 'nav flex baseline gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-052',
    label: 'Loop AI b11 w78 #052: nav baseline gap0 anchor ib baseline',
    idea: 'nav flex baseline gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{display:inline-block!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-053',
    label: 'Loop AI b11 w78 #053: nav baseline gap0 anchor lh normal',
    idea: 'nav flex baseline gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important;display:inline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-054',
    label: 'Loop AI b11 w78 #054: nav baseline gap0 span middle',
    idea: 'nav flex baseline gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;vertical-align:middle!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-055',
    label: 'Loop AI b11 w78 #055: nav baseline gap0 align-self baseline',
    idea: 'nav flex baseline gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{align-self:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-056',
    label: 'Loop AI b11 w78 #056: nav baseline gap0 inline baseline',
    idea: 'nav flex baseline gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-057',
    label: 'Loop AI b11 w78 #057: nav baseline gap0 from-font lh',
    idea: 'nav flex baseline gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{line-height:from-font!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-058',
    label: 'Loop AI b11 w78 #058: nav baseline gap0 kerning normal',
    idea: 'nav flex baseline gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{font-kerning:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-baseline+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-059',
    label: 'Loop AI b11 w78 #059: nav baseline gap0 stretch leaf',
    idea: 'nav flex baseline gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; nav-baseline+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-060',
    label: 'Loop AI b11 w78 #060: nav baseline gap0 pin lh',
    idea: 'nav flex baseline gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; nav-baseline+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-061',
    label: 'Loop AI b11 w78 #061: nav center gap0 plain text',
    idea: 'nav flex center gap0; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-062',
    label: 'Loop AI b11 w78 #062: nav center gap0 anchor ib baseline',
    idea: 'nav flex center gap0; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{display:inline-block!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-063',
    label: 'Loop AI b11 w78 #063: nav center gap0 anchor lh normal',
    idea: 'nav flex center gap0; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important;display:inline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-064',
    label: 'Loop AI b11 w78 #064: nav center gap0 span middle',
    idea: 'nav flex center gap0; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;vertical-align:middle!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-065',
    label: 'Loop AI b11 w78 #065: nav center gap0 align-self baseline',
    idea: 'nav flex center gap0; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{align-self:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-066',
    label: 'Loop AI b11 w78 #066: nav center gap0 inline baseline',
    idea: 'nav flex center gap0; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-067',
    label: 'Loop AI b11 w78 #067: nav center gap0 from-font lh',
    idea: 'nav flex center gap0; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{line-height:from-font!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-068',
    label: 'Loop AI b11 w78 #068: nav center gap0 kerning normal',
    idea: 'nav flex center gap0; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{font-kerning:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; nav-center+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-069',
    label: 'Loop AI b11 w78 #069: nav center gap0 stretch leaf',
    idea: 'nav flex center gap0; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; nav-center+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-070',
    label: 'Loop AI b11 w78 #070: nav center gap0 pin lh',
    idea: 'nav flex center gap0; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:flex!important;flex-direction:row!important;align-items:center!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; nav-center+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-071',
    label: 'Loop AI b11 w78 #071: baseline space-between plain text',
    idea: 'baseline gap0 justify space-between; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-072',
    label: 'Loop AI b11 w78 #072: baseline space-between anchor ib baseline',
    idea: 'baseline gap0 justify space-between; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-073',
    label: 'Loop AI b11 w78 #073: baseline space-between anchor lh normal',
    idea: 'baseline gap0 justify space-between; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-074',
    label: 'Loop AI b11 w78 #074: baseline space-between span middle',
    idea: 'baseline gap0 justify space-between; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-075',
    label: 'Loop AI b11 w78 #075: baseline space-between align-self baseline',
    idea: 'baseline gap0 justify space-between; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-076',
    label: 'Loop AI b11 w78 #076: baseline space-between inline baseline',
    idea: 'baseline gap0 justify space-between; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-077',
    label: 'Loop AI b11 w78 #077: baseline space-between from-font lh',
    idea: 'baseline gap0 justify space-between; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-078',
    label: 'Loop AI b11 w78 #078: baseline space-between kerning normal',
    idea: 'baseline gap0 justify space-between; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-space-between+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-079',
    label: 'Loop AI b11 w78 #079: baseline space-between stretch leaf',
    idea: 'baseline gap0 justify space-between; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; baseline-space-between+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-080',
    label: 'Loop AI b11 w78 #080: baseline space-between pin lh',
    idea: 'baseline gap0 justify space-between; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;justify-content:space-between!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; baseline-space-between+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-081',
    label: 'Loop AI b11 w78 #081: baseline nowrap gap0 plain text',
    idea: 'baseline gap0 flex-wrap nowrap; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-082',
    label: 'Loop AI b11 w78 #082: baseline nowrap gap0 anchor ib baseline',
    idea: 'baseline gap0 flex-wrap nowrap; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-083',
    label: 'Loop AI b11 w78 #083: baseline nowrap gap0 anchor lh normal',
    idea: 'baseline gap0 flex-wrap nowrap; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-084',
    label: 'Loop AI b11 w78 #084: baseline nowrap gap0 span middle',
    idea: 'baseline gap0 flex-wrap nowrap; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-085',
    label: 'Loop AI b11 w78 #085: baseline nowrap gap0 align-self baseline',
    idea: 'baseline gap0 flex-wrap nowrap; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-086',
    label: 'Loop AI b11 w78 #086: baseline nowrap gap0 inline baseline',
    idea: 'baseline gap0 flex-wrap nowrap; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-087',
    label: 'Loop AI b11 w78 #087: baseline nowrap gap0 from-font lh',
    idea: 'baseline gap0 flex-wrap nowrap; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-088',
    label: 'Loop AI b11 w78 #088: baseline nowrap gap0 kerning normal',
    idea: 'baseline gap0 flex-wrap nowrap; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-nowrap+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-089',
    label: 'Loop AI b11 w78 #089: baseline nowrap gap0 stretch leaf',
    idea: 'baseline gap0 flex-wrap nowrap; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; baseline-nowrap+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-090',
    label: 'Loop AI b11 w78 #090: baseline nowrap gap0 pin lh',
    idea: 'baseline gap0 flex-wrap nowrap; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important;flex-wrap:nowrap!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; baseline-nowrap+pin-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-091',
    label: 'Loop AI b11 w78 #091: baseline min-height 0 plain text',
    idea: 'baseline gap0 with min-height:0 on FO *; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+plain; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-092',
    label: 'Loop AI b11 w78 #092: baseline min-height 0 anchor ib baseline',
    idea: 'baseline gap0 with min-height:0 on FO *; nav anchor inline-block baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;display:inline-block!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+anchor-ib-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-093',
    label: 'Loop AI b11 w78 #093: baseline min-height 0 anchor lh normal',
    idea: 'baseline gap0 with min-height:0 on FO *; anchor line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;line-height:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+anchor-lh-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-094',
    label: 'Loop AI b11 w78 #094: baseline min-height 0 span middle',
    idea: 'baseline gap0 with min-height:0 on FO *; span vertical-align middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;display:inline!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+span-middle; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-095',
    label: 'Loop AI b11 w78 #095: baseline min-height 0 align-self baseline',
    idea: 'baseline gap0 with min-height:0 on FO *; align-self baseline on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;align-self:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+align-self-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-096',
    label: 'Loop AI b11 w78 #096: baseline min-height 0 inline baseline',
    idea: 'baseline gap0 with min-height:0 on FO *; display inline vertical-align baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+inline-baseline; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-097',
    label: 'Loop AI b11 w78 #097: baseline min-height 0 from-font lh',
    idea: 'baseline gap0 with min-height:0 on FO *; line-height from-font on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;line-height:from-font!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+from-font-lh; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-098',
    label: 'Loop AI b11 w78 #098: baseline min-height 0 kerning normal',
    idea: 'baseline gap0 with min-height:0 on FO *; font-kerning normal on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;font-kerning:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w78; baseline-minh0+kerning-normal; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-099',
    label: 'Loop AI b11 w78 #099: baseline min-height 0 stretch leaf',
    idea: 'baseline gap0 with min-height:0 on FO *; stretch leaf patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w78; baseline-minh0+stretch-leaf; flex gap0 baseline nav text — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w78-100',
    label: 'Loop AI b11 w78 #100: baseline min-height 0 pin lh',
    idea: 'baseline gap0 with min-height:0 on FO *; pin line-height patch context',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-direction:row!important;align-items:baseline!important;gap:0!important;row-gap:0!important;column-gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w78; baseline-minh0+pin-lh; flex gap0 baseline nav text — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


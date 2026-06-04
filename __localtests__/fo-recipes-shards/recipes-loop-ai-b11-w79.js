/**
 * Loop AI batch-11 FO recipe shard (worker 79) — text-fix: grid place-items center/start/end text layout probes
 * 100 recipes: loop-ai-b11-w79-001..100
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
    id: 'loop-ai-b11-w79-001',
    label: 'Loop AI b11 w79 #001: place-items center plain text',
    idea: 'place-items:center on FO grid; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-002',
    label: 'Loop AI b11 w79 #002: place-items center anchor ib middle',
    idea: 'place-items:center on FO grid; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-003',
    label: 'Loop AI b11 w79 #003: place-items center anchor baseline',
    idea: 'place-items:center on FO grid; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-004',
    label: 'Loop AI b11 w79 #004: place-items center span inline',
    idea: 'place-items:center on FO grid; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-005',
    label: 'Loop AI b11 w79 #005: place-items center text-align center',
    idea: 'place-items:center on FO grid; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-006',
    label: 'Loop AI b11 w79 #006: place-items center lh normal',
    idea: 'place-items:center on FO grid; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-007',
    label: 'Loop AI b11 w79 #007: place-items center justify-self center',
    idea: 'place-items:center on FO grid; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-008',
    label: 'Loop AI b11 w79 #008: place-items center align-self center',
    idea: 'place-items:center on FO grid; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; center+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-009',
    label: 'Loop AI b11 w79 #009: place-items center stretch leaf',
    idea: 'place-items:center on FO grid; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; center+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-010',
    label: 'Loop AI b11 w79 #010: place-items center pin lh',
    idea: 'place-items:center on FO grid; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; center+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-011',
    label: 'Loop AI b11 w79 #011: place-items start plain text',
    idea: 'place-items:start on FO grid; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-012',
    label: 'Loop AI b11 w79 #012: place-items start anchor ib middle',
    idea: 'place-items:start on FO grid; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-013',
    label: 'Loop AI b11 w79 #013: place-items start anchor baseline',
    idea: 'place-items:start on FO grid; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-014',
    label: 'Loop AI b11 w79 #014: place-items start span inline',
    idea: 'place-items:start on FO grid; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-015',
    label: 'Loop AI b11 w79 #015: place-items start text-align center',
    idea: 'place-items:start on FO grid; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-016',
    label: 'Loop AI b11 w79 #016: place-items start lh normal',
    idea: 'place-items:start on FO grid; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-017',
    label: 'Loop AI b11 w79 #017: place-items start justify-self center',
    idea: 'place-items:start on FO grid; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-018',
    label: 'Loop AI b11 w79 #018: place-items start align-self center',
    idea: 'place-items:start on FO grid; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; start+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-019',
    label: 'Loop AI b11 w79 #019: place-items start stretch leaf',
    idea: 'place-items:start on FO grid; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; start+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-020',
    label: 'Loop AI b11 w79 #020: place-items start pin lh',
    idea: 'place-items:start on FO grid; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; start+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-021',
    label: 'Loop AI b11 w79 #021: place-items end plain text',
    idea: 'place-items:end on FO grid; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-022',
    label: 'Loop AI b11 w79 #022: place-items end anchor ib middle',
    idea: 'place-items:end on FO grid; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-023',
    label: 'Loop AI b11 w79 #023: place-items end anchor baseline',
    idea: 'place-items:end on FO grid; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-024',
    label: 'Loop AI b11 w79 #024: place-items end span inline',
    idea: 'place-items:end on FO grid; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-025',
    label: 'Loop AI b11 w79 #025: place-items end text-align center',
    idea: 'place-items:end on FO grid; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-026',
    label: 'Loop AI b11 w79 #026: place-items end lh normal',
    idea: 'place-items:end on FO grid; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-027',
    label: 'Loop AI b11 w79 #027: place-items end justify-self center',
    idea: 'place-items:end on FO grid; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-028',
    label: 'Loop AI b11 w79 #028: place-items end align-self center',
    idea: 'place-items:end on FO grid; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; end+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-029',
    label: 'Loop AI b11 w79 #029: place-items end stretch leaf',
    idea: 'place-items:end on FO grid; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; end+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-030',
    label: 'Loop AI b11 w79 #030: place-items end pin lh',
    idea: 'place-items:end on FO grid; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:end!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; end+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-031',
    label: 'Loop AI b11 w79 #031: place-items stretch plain text',
    idea: 'place-items:stretch on FO grid; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-032',
    label: 'Loop AI b11 w79 #032: place-items stretch anchor ib middle',
    idea: 'place-items:stretch on FO grid; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-033',
    label: 'Loop AI b11 w79 #033: place-items stretch anchor baseline',
    idea: 'place-items:stretch on FO grid; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-034',
    label: 'Loop AI b11 w79 #034: place-items stretch span inline',
    idea: 'place-items:stretch on FO grid; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-035',
    label: 'Loop AI b11 w79 #035: place-items stretch text-align center',
    idea: 'place-items:stretch on FO grid; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-036',
    label: 'Loop AI b11 w79 #036: place-items stretch lh normal',
    idea: 'place-items:stretch on FO grid; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-037',
    label: 'Loop AI b11 w79 #037: place-items stretch justify-self center',
    idea: 'place-items:stretch on FO grid; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-038',
    label: 'Loop AI b11 w79 #038: place-items stretch align-self center',
    idea: 'place-items:stretch on FO grid; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; stretch+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-039',
    label: 'Loop AI b11 w79 #039: place-items stretch stretch leaf',
    idea: 'place-items:stretch on FO grid; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; stretch+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-040',
    label: 'Loop AI b11 w79 #040: place-items stretch pin lh',
    idea: 'place-items:stretch on FO grid; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:stretch!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; stretch+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-041',
    label: 'Loop AI b11 w79 #041: align baseline plain text',
    idea: 'align-items:baseline justify-items:center; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-042',
    label: 'Loop AI b11 w79 #042: align baseline anchor ib middle',
    idea: 'align-items:baseline justify-items:center; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-043',
    label: 'Loop AI b11 w79 #043: align baseline anchor baseline',
    idea: 'align-items:baseline justify-items:center; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-044',
    label: 'Loop AI b11 w79 #044: align baseline span inline',
    idea: 'align-items:baseline justify-items:center; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-045',
    label: 'Loop AI b11 w79 #045: align baseline text-align center',
    idea: 'align-items:baseline justify-items:center; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-046',
    label: 'Loop AI b11 w79 #046: align baseline lh normal',
    idea: 'align-items:baseline justify-items:center; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-047',
    label: 'Loop AI b11 w79 #047: align baseline justify-self center',
    idea: 'align-items:baseline justify-items:center; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-048',
    label: 'Loop AI b11 w79 #048: align baseline align-self center',
    idea: 'align-items:baseline justify-items:center; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; baseline-align+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-049',
    label: 'Loop AI b11 w79 #049: align baseline stretch leaf',
    idea: 'align-items:baseline justify-items:center; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; baseline-align+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-050',
    label: 'Loop AI b11 w79 #050: align baseline pin lh',
    idea: 'align-items:baseline justify-items:center; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;align-items:baseline!important;justify-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; baseline-align+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-051',
    label: 'Loop AI b11 w79 #051: nav grid center plain text',
    idea: 'nav display grid place-items center; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-052',
    label: 'Loop AI b11 w79 #052: nav grid center anchor ib middle',
    idea: 'nav display grid place-items center; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{display:inline-block!important;vertical-align:middle!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-053',
    label: 'Loop AI b11 w79 #053: nav grid center anchor baseline',
    idea: 'nav display grid place-items center; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-054',
    label: 'Loop AI b11 w79 #054: nav grid center span inline',
    idea: 'nav display grid place-items center; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-055',
    label: 'Loop AI b11 w79 #055: nav grid center text-align center',
    idea: 'nav display grid place-items center; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{text-align:center!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-056',
    label: 'Loop AI b11 w79 #056: nav grid center lh normal',
    idea: 'nav display grid place-items center; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-057',
    label: 'Loop AI b11 w79 #057: nav grid center justify-self center',
    idea: 'nav display grid place-items center; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{justify-self:center!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-058',
    label: 'Loop AI b11 w79 #058: nav grid center align-self center',
    idea: 'nav display grid place-items center; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{align-self:center!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-059',
    label: 'Loop AI b11 w79 #059: nav grid center stretch leaf',
    idea: 'nav display grid place-items center; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:baseline!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; nav-grid+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-060',
    label: 'Loop AI b11 w79 #060: nav grid center pin lh',
    idea: 'nav display grid place-items center; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important;box-sizing:border-box!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; nav-grid+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-061',
    label: 'Loop AI b11 w79 #061: nav grid start plain text',
    idea: 'nav grid place-items start; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-062',
    label: 'Loop AI b11 w79 #062: nav grid start anchor ib middle',
    idea: 'nav grid place-items start; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-063',
    label: 'Loop AI b11 w79 #063: nav grid start anchor baseline',
    idea: 'nav grid place-items start; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-064',
    label: 'Loop AI b11 w79 #064: nav grid start span inline',
    idea: 'nav grid place-items start; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-065',
    label: 'Loop AI b11 w79 #065: nav grid start text-align center',
    idea: 'nav grid place-items start; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-066',
    label: 'Loop AI b11 w79 #066: nav grid start lh normal',
    idea: 'nav grid place-items start; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-067',
    label: 'Loop AI b11 w79 #067: nav grid start justify-self center',
    idea: 'nav grid place-items start; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-068',
    label: 'Loop AI b11 w79 #068: nav grid start align-self center',
    idea: 'nav grid place-items start; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; nav-grid-start+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-069',
    label: 'Loop AI b11 w79 #069: nav grid start stretch leaf',
    idea: 'nav grid place-items start; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; nav-grid-start+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-070',
    label: 'Loop AI b11 w79 #070: nav grid start pin lh',
    idea: 'nav grid place-items start; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav{display:grid!important;place-items:start!important;gap:0!important;overflow:visible!important}foreignObject nav a{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; nav-grid-start+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-071',
    label: 'Loop AI b11 w79 #071: grid min-height 0 plain text',
    idea: 'grid center with min-height 0 on FO *; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-072',
    label: 'Loop AI b11 w79 #072: grid min-height 0 anchor ib middle',
    idea: 'grid center with min-height 0 on FO *; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-073',
    label: 'Loop AI b11 w79 #073: grid min-height 0 anchor baseline',
    idea: 'grid center with min-height 0 on FO *; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-074',
    label: 'Loop AI b11 w79 #074: grid min-height 0 span inline',
    idea: 'grid center with min-height 0 on FO *; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-075',
    label: 'Loop AI b11 w79 #075: grid min-height 0 text-align center',
    idea: 'grid center with min-height 0 on FO *; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-076',
    label: 'Loop AI b11 w79 #076: grid min-height 0 lh normal',
    idea: 'grid center with min-height 0 on FO *; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-077',
    label: 'Loop AI b11 w79 #077: grid min-height 0 justify-self center',
    idea: 'grid center with min-height 0 on FO *; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-078',
    label: 'Loop AI b11 w79 #078: grid min-height 0 align-self center',
    idea: 'grid center with min-height 0 on FO *; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-minh0+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-079',
    label: 'Loop AI b11 w79 #079: grid min-height 0 stretch leaf',
    idea: 'grid center with min-height 0 on FO *; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; grid-minh0+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-080',
    label: 'Loop AI b11 w79 #080: grid min-height 0 pin lh',
    idea: 'grid center with min-height 0 on FO *; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{min-height:0!important;line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; grid-minh0+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-081',
    label: 'Loop AI b11 w79 #081: grid flow col plain text',
    idea: 'grid auto-flow column place-items center; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-082',
    label: 'Loop AI b11 w79 #082: grid flow col anchor ib middle',
    idea: 'grid auto-flow column place-items center; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-083',
    label: 'Loop AI b11 w79 #083: grid flow col anchor baseline',
    idea: 'grid auto-flow column place-items center; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-084',
    label: 'Loop AI b11 w79 #084: grid flow col span inline',
    idea: 'grid auto-flow column place-items center; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-085',
    label: 'Loop AI b11 w79 #085: grid flow col text-align center',
    idea: 'grid auto-flow column place-items center; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-086',
    label: 'Loop AI b11 w79 #086: grid flow col lh normal',
    idea: 'grid auto-flow column place-items center; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-087',
    label: 'Loop AI b11 w79 #087: grid flow col justify-self center',
    idea: 'grid auto-flow column place-items center; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-088',
    label: 'Loop AI b11 w79 #088: grid flow col align-self center',
    idea: 'grid auto-flow column place-items center; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-auto-flow-col+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-089',
    label: 'Loop AI b11 w79 #089: grid flow col stretch leaf',
    idea: 'grid auto-flow column place-items center; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; grid-auto-flow-col+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-090',
    label: 'Loop AI b11 w79 #090: grid flow col pin lh',
    idea: 'grid auto-flow column place-items center; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;place-items:center!important;gap:0!important;overflow:visible!important;grid-auto-flow:column!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; grid-auto-flow-col+pin-lh; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-091',
    label: 'Loop AI b11 w79 #091: justify stretch plain text',
    idea: 'justify-items stretch align-items center; no extra text tweaks',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+plain; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-092',
    label: 'Loop AI b11 w79 #092: justify stretch anchor ib middle',
    idea: 'justify-items stretch align-items center; nav anchor inline-block middle',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline-block!important;vertical-align:middle!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+anchor-ib-middle; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-093',
    label: 'Loop AI b11 w79 #093: justify stretch anchor baseline',
    idea: 'justify-items stretch align-items center; anchor inline baseline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important;vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+anchor-baseline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-094',
    label: 'Loop AI b11 w79 #094: justify stretch span inline',
    idea: 'justify-items stretch align-items center; span display inline',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+span-inline; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-095',
    label: 'Loop AI b11 w79 #095: justify stretch text-align center',
    idea: 'justify-items stretch align-items center; text-align center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{text-align:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+text-align-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-096',
    label: 'Loop AI b11 w79 #096: justify stretch lh normal',
    idea: 'justify-items stretch align-items center; line-height normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+lh-normal; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-097',
    label: 'Loop AI b11 w79 #097: justify stretch justify-self center',
    idea: 'justify-items stretch align-items center; justify-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{justify-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+justify-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-098',
    label: 'Loop AI b11 w79 #098: justify stretch align-self center',
    idea: 'justify-items stretch align-items center; align-self center on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{align-self:center!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w79; grid-justify-stretch+align-self-center; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-099',
    label: 'Loop AI b11 w79 #099: justify stretch stretch leaf',
    idea: 'justify-items stretch align-items center; stretch leaf patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{vertical-align:baseline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w79; grid-justify-stretch+stretch-leaf; grid place-items text layout — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w79-100',
    label: 'Loop AI b11 w79 #100: justify stretch pin lh',
    idea: 'justify-items stretch align-items center; pin line-height patch',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:grid!important;justify-items:stretch!important;align-items:center!important;gap:0!important;overflow:visible!important}foreignObject *{line-height:normal!important}',
    inject: 'both',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-pin-line-height-from-live',
    inject: 'both',
    notes: 'Loop AI b11 w79; grid-justify-stretch+pin-lh; grid place-items text layout — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


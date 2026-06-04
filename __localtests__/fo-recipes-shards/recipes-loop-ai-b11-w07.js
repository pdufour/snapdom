/**
 * Loop AI batch-11 FO recipe shard (worker 07) — text-fix: text-orientation upright root vs leaves.
 * PRIMARY: text-orientation:upright on FO root and/or text leaves
 * 100 recipes: loop-ai-b11-w07-001..100
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
    id: 'loop-ai-b11-w07-001',
    label: 'Loop AI b11 w07 #001: upright FO root hb',
    idea: 'text-orientation:upright on FO root with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-002',
    label: 'Loop AI b11 w07 #002: upright FO root vrl',
    idea: 'text-orientation:upright on FO root with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-003',
    label: 'Loop AI b11 w07 #003: upright FO root vlr',
    idea: 'text-orientation:upright on FO root with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-004',
    label: 'Loop AI b11 w07 #004: upright FO root swlr',
    idea: 'text-orientation:upright on FO root with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;overflow:visible!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-005',
    label: 'Loop AI b11 w07 #005: upright FO root swrl',
    idea: 'text-orientation:upright on FO root with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:upright!important;overflow:visible!important;}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-006',
    label: 'Loop AI b11 w07 #006: upright FO root vrl-max',
    idea: 'text-orientation:upright on FO root with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;inline-size:max-content!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-007',
    label: 'Loop AI b11 w07 #007: upright FO root hb-lh',
    idea: 'text-orientation:upright on FO root with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;line-height:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-008',
    label: 'Loop AI b11 w07 #008: upright FO root vlr-ltr',
    idea: 'text-orientation:upright on FO root with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;direction:ltr!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-009',
    label: 'Loop AI b11 w07 #009: upright FO root hb-rtl',
    idea: 'text-orientation:upright on FO root with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;direction:rtl!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-010',
    label: 'Loop AI b11 w07 #010: upright FO root vrl-visible',
    idea: 'text-orientation:upright on FO root with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-root-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-011',
    label: 'Loop AI b11 w07 #011: upright FO * leaves hb',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-012',
    label: 'Loop AI b11 w07 #012: upright FO * leaves vrl',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-013',
    label: 'Loop AI b11 w07 #013: upright FO * leaves vlr',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-014',
    label: 'Loop AI b11 w07 #014: upright FO * leaves swlr',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-015',
    label: 'Loop AI b11 w07 #015: upright FO * leaves swrl',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-016',
    label: 'Loop AI b11 w07 #016: upright FO * leaves vrl-max',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;inline-size:max-content!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-017',
    label: 'Loop AI b11 w07 #017: upright FO * leaves hb-lh',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;line-height:normal!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-018',
    label: 'Loop AI b11 w07 #018: upright FO * leaves vlr-ltr',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;direction:ltr!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-019',
    label: 'Loop AI b11 w07 #019: upright FO * leaves hb-rtl',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;direction:rtl!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-020',
    label: 'Loop AI b11 w07 #020: upright FO * leaves vrl-visible',
    idea: 'text-orientation:upright on FO * leaves with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;overflow:visible!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo--leaves-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-021',
    label: 'Loop AI b11 w07 #021: upright root+leaves hb',
    idea: 'text-orientation:upright on root+leaves with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-022',
    label: 'Loop AI b11 w07 #022: upright root+leaves vrl',
    idea: 'text-orientation:upright on root+leaves with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-023',
    label: 'Loop AI b11 w07 #023: upright root+leaves vlr',
    idea: 'text-orientation:upright on root+leaves with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-024',
    label: 'Loop AI b11 w07 #024: upright root+leaves swlr',
    idea: 'text-orientation:upright on root+leaves with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-025',
    label: 'Loop AI b11 w07 #025: upright root+leaves swrl',
    idea: 'text-orientation:upright on root+leaves with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-026',
    label: 'Loop AI b11 w07 #026: upright root+leaves vrl-max',
    idea: 'text-orientation:upright on root+leaves with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;inline-size:max-content!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-027',
    label: 'Loop AI b11 w07 #027: upright root+leaves hb-lh',
    idea: 'text-orientation:upright on root+leaves with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;line-height:normal!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-028',
    label: 'Loop AI b11 w07 #028: upright root+leaves vlr-ltr',
    idea: 'text-orientation:upright on root+leaves with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;direction:ltr!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-029',
    label: 'Loop AI b11 w07 #029: upright root+leaves hb-rtl',
    idea: 'text-orientation:upright on root+leaves with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;direction:rtl!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-030',
    label: 'Loop AI b11 w07 #030: upright root+leaves vrl-visible',
    idea: 'text-orientation:upright on root+leaves with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;overflow:visible!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; rootleaves-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-031',
    label: 'Loop AI b11 w07 #031: upright FO span hb',
    idea: 'text-orientation:upright on FO span with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-032',
    label: 'Loop AI b11 w07 #032: upright FO span vrl',
    idea: 'text-orientation:upright on FO span with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-033',
    label: 'Loop AI b11 w07 #033: upright FO span vlr',
    idea: 'text-orientation:upright on FO span with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-034',
    label: 'Loop AI b11 w07 #034: upright FO span swlr',
    idea: 'text-orientation:upright on FO span with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;overflow:visible!important;}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-035',
    label: 'Loop AI b11 w07 #035: upright FO span swrl',
    idea: 'text-orientation:upright on FO span with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;overflow:visible!important;}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-036',
    label: 'Loop AI b11 w07 #036: upright FO span vrl-max',
    idea: 'text-orientation:upright on FO span with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;inline-size:max-content!important}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-037',
    label: 'Loop AI b11 w07 #037: upright FO span hb-lh',
    idea: 'text-orientation:upright on FO span with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;line-height:normal!important}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-038',
    label: 'Loop AI b11 w07 #038: upright FO span vlr-ltr',
    idea: 'text-orientation:upright on FO span with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;direction:ltr!important}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-039',
    label: 'Loop AI b11 w07 #039: upright FO span hb-rtl',
    idea: 'text-orientation:upright on FO span with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;direction:rtl!important}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-040',
    label: 'Loop AI b11 w07 #040: upright FO span vrl-visible',
    idea: 'text-orientation:upright on FO span with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;overflow:visible!important}foreignObject span{text-orientation:upright!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-span-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-041',
    label: 'Loop AI b11 w07 #041: upright FO a hb',
    idea: 'text-orientation:upright on FO a with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-042',
    label: 'Loop AI b11 w07 #042: upright FO a vrl',
    idea: 'text-orientation:upright on FO a with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-043',
    label: 'Loop AI b11 w07 #043: upright FO a vlr',
    idea: 'text-orientation:upright on FO a with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-044',
    label: 'Loop AI b11 w07 #044: upright FO a swlr',
    idea: 'text-orientation:upright on FO a with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;overflow:visible!important;}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-045',
    label: 'Loop AI b11 w07 #045: upright FO a swrl',
    idea: 'text-orientation:upright on FO a with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;overflow:visible!important;}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-046',
    label: 'Loop AI b11 w07 #046: upright FO a vrl-max',
    idea: 'text-orientation:upright on FO a with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;inline-size:max-content!important}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-047',
    label: 'Loop AI b11 w07 #047: upright FO a hb-lh',
    idea: 'text-orientation:upright on FO a with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;line-height:normal!important}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-048',
    label: 'Loop AI b11 w07 #048: upright FO a vlr-ltr',
    idea: 'text-orientation:upright on FO a with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;direction:ltr!important}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-049',
    label: 'Loop AI b11 w07 #049: upright FO a hb-rtl',
    idea: 'text-orientation:upright on FO a with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;direction:rtl!important}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-050',
    label: 'Loop AI b11 w07 #050: upright FO a vrl-visible',
    idea: 'text-orientation:upright on FO a with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;overflow:visible!important}foreignObject a{text-orientation:upright!important;display:inline-block!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fo-a-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-051',
    label: 'Loop AI b11 w07 #051: upright text chain hb',
    idea: 'text-orientation:upright on text chain with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-052',
    label: 'Loop AI b11 w07 #052: upright text chain vrl',
    idea: 'text-orientation:upright on text chain with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-053',
    label: 'Loop AI b11 w07 #053: upright text chain vlr',
    idea: 'text-orientation:upright on text chain with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-054',
    label: 'Loop AI b11 w07 #054: upright text chain swlr',
    idea: 'text-orientation:upright on text chain with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-055',
    label: 'Loop AI b11 w07 #055: upright text chain swrl',
    idea: 'text-orientation:upright on text chain with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;overflow:visible!important;}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-056',
    label: 'Loop AI b11 w07 #056: upright text chain vrl-max',
    idea: 'text-orientation:upright on text chain with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;inline-size:max-content!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-057',
    label: 'Loop AI b11 w07 #057: upright text chain hb-lh',
    idea: 'text-orientation:upright on text chain with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;line-height:normal!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-058',
    label: 'Loop AI b11 w07 #058: upright text chain vlr-ltr',
    idea: 'text-orientation:upright on text chain with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;direction:ltr!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-059',
    label: 'Loop AI b11 w07 #059: upright text chain hb-rtl',
    idea: 'text-orientation:upright on text chain with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;direction:rtl!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-060',
    label: 'Loop AI b11 w07 #060: upright text chain vrl-visible',
    idea: 'text-orientation:upright on text chain with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;overflow:visible!important}foreignObject p,foreignObject span,foreignObject a,foreignObject li,foreignObject h1,foreignObject h2,foreignObject h3,foreignObject h4,foreignObject h5,foreignObject h6,foreignObject label,foreignObject button,foreignObject strong,foreignObject em,foreignObject small,foreignObject code{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; text-chain-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-061',
    label: 'Loop AI b11 w07 #061: upright nav a hb',
    idea: 'text-orientation:upright on nav a with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-062',
    label: 'Loop AI b11 w07 #062: upright nav a vrl',
    idea: 'text-orientation:upright on nav a with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-063',
    label: 'Loop AI b11 w07 #063: upright nav a vlr',
    idea: 'text-orientation:upright on nav a with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-064',
    label: 'Loop AI b11 w07 #064: upright nav a swlr',
    idea: 'text-orientation:upright on nav a with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;overflow:visible!important;}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-065',
    label: 'Loop AI b11 w07 #065: upright nav a swrl',
    idea: 'text-orientation:upright on nav a with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;overflow:visible!important;}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-066',
    label: 'Loop AI b11 w07 #066: upright nav a vrl-max',
    idea: 'text-orientation:upright on nav a with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;inline-size:max-content!important}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-067',
    label: 'Loop AI b11 w07 #067: upright nav a hb-lh',
    idea: 'text-orientation:upright on nav a with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;line-height:normal!important}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-068',
    label: 'Loop AI b11 w07 #068: upright nav a vlr-ltr',
    idea: 'text-orientation:upright on nav a with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;overflow:visible!important;direction:ltr!important}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-069',
    label: 'Loop AI b11 w07 #069: upright nav a hb-rtl',
    idea: 'text-orientation:upright on nav a with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;overflow:visible!important;direction:rtl!important}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-070',
    label: 'Loop AI b11 w07 #070: upright nav a vrl-visible',
    idea: 'text-orientation:upright on nav a with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;overflow:visible!important;overflow:visible!important}foreignObject nav a{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; nav-a-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-071',
    label: 'Loop AI b11 w07 #071: upright FO>div root upright hb',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-072',
    label: 'Loop AI b11 w07 #072: upright FO>div root upright vrl',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:vertical-rl!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-073',
    label: 'Loop AI b11 w07 #073: upright FO>div root upright vlr',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:vertical-lr!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-074',
    label: 'Loop AI b11 w07 #074: upright FO>div root upright swlr',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-lr!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-075',
    label: 'Loop AI b11 w07 #075: upright FO>div root upright swrl',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:sideways-rl!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-076',
    label: 'Loop AI b11 w07 #076: upright FO>div root upright vrl-max',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:vertical-rl!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-077',
    label: 'Loop AI b11 w07 #077: upright FO>div root upright hb-lh',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-078',
    label: 'Loop AI b11 w07 #078: upright FO>div root upright vlr-ltr',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:vertical-lr!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-079',
    label: 'Loop AI b11 w07 #079: upright FO>div root upright hb-rtl',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:horizontal-tb!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-080',
    label: 'Loop AI b11 w07 #080: upright FO>div root upright vrl-visible',
    idea: 'text-orientation:upright on FO>div root upright with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject>div{writing-mode:vertical-rl!important;text-orientation:upright!important}foreignObject *{text-orientation:mixed!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; fodiv-root-upright-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-081',
    label: 'Loop AI b11 w07 #081: upright parent mixed leaves upright hb',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-082',
    label: 'Loop AI b11 w07 #082: upright parent mixed leaves upright vrl',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-083',
    label: 'Loop AI b11 w07 #083: upright parent mixed leaves upright vlr',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-084',
    label: 'Loop AI b11 w07 #084: upright parent mixed leaves upright swlr',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-085',
    label: 'Loop AI b11 w07 #085: upright parent mixed leaves upright swrl',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:mixed!important;overflow:visible!important;}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-086',
    label: 'Loop AI b11 w07 #086: upright parent mixed leaves upright vrl-max',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;inline-size:max-content!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-087',
    label: 'Loop AI b11 w07 #087: upright parent mixed leaves upright hb-lh',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important;line-height:normal!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-088',
    label: 'Loop AI b11 w07 #088: upright parent mixed leaves upright vlr-ltr',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:mixed!important;overflow:visible!important;direction:ltr!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-089',
    label: 'Loop AI b11 w07 #089: upright parent mixed leaves upright hb-rtl',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:mixed!important;overflow:visible!important;direction:rtl!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-090',
    label: 'Loop AI b11 w07 #090: upright parent mixed leaves upright vrl-visible',
    idea: 'text-orientation:upright on parent mixed leaves upright with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:mixed!important;overflow:visible!important;overflow:visible!important}foreignObject *{text-orientation:upright!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; parent-mixed-leaves-upright-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-091',
    label: 'Loop AI b11 w07 #091: upright root upright * inherit hb',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-hb; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-092',
    label: 'Loop AI b11 w07 #092: upright root upright * inherit vrl',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-vrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-093',
    label: 'Loop AI b11 w07 #093: upright root upright * inherit vlr',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-vlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-094',
    label: 'Loop AI b11 w07 #094: upright root upright * inherit swlr',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:sideways-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-lr!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-swlr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-095',
    label: 'Loop AI b11 w07 #095: upright root upright * inherit swrl',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:sideways-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:sideways-rl!important;text-orientation:upright!important;overflow:visible!important;}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-swrl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-096',
    label: 'Loop AI b11 w07 #096: upright root upright * inherit vrl-max',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;inline-size:max-content!important}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-vrl-max; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-097',
    label: 'Loop AI b11 w07 #097: upright root upright * inherit hb-lh',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;line-height:normal!important}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-hb-lh; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-098',
    label: 'Loop AI b11 w07 #098: upright root upright * inherit vlr-ltr',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:vertical-lr context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-lr!important;text-orientation:upright!important;overflow:visible!important;direction:ltr!important}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-vlr-ltr; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-099',
    label: 'Loop AI b11 w07 #099: upright root upright * inherit hb-rtl',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:horizontal-tb context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:horizontal-tb!important;text-orientation:upright!important;overflow:visible!important;direction:rtl!important}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-hb-rtl; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w07-100',
    label: 'Loop AI b11 w07 #100: upright root upright * inherit vrl-visible',
    idea: 'text-orientation:upright on root upright * inherit with writing-mode:vertical-rl context',
    css:
      FO_BASELINE_CSS +
      TEXT_LEAF +
      'foreignObject{writing-mode:vertical-rl!important;text-orientation:upright!important;overflow:visible!important;overflow:visible!important}foreignObject *{text-orientation:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w07; root-upright--inherit-vrl-visible; text-orientation:upright on FO root and/or text leaves — no text bypass.',
  },
]

if (RECIPES.length !== 100) {
  throw new Error(`recipes-loop-ai-b11-w07: expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

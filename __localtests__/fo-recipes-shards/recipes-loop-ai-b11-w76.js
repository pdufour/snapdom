/**
 * Loop AI batch-11 FO recipe shard (worker 76) — text-fix: text-spacing-trim normal/space-all/space-first/trim-start and spacing pairs
 * 100 recipes: loop-ai-b11-w76-001..100
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
    id: 'loop-ai-b11-w76-001',
    label: 'Loop AI b11 w76 #001: trim normal on FO *',
    idea: 'text-spacing-trim on all FO descendants; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-002',
    label: 'Loop AI b11 w76 #002: trim space-all on FO *',
    idea: 'text-spacing-trim on all FO descendants; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-003',
    label: 'Loop AI b11 w76 #003: trim space-first on FO *',
    idea: 'text-spacing-trim on all FO descendants; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-004',
    label: 'Loop AI b11 w76 #004: trim trim-start on FO *',
    idea: 'text-spacing-trim on all FO descendants; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-005',
    label: 'Loop AI b11 w76 #005: inherit space-all on FO *',
    idea: 'text-spacing-trim on all FO descendants; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-006',
    label: 'Loop AI b11 w76 #006: inherit trim-start on FO *',
    idea: 'text-spacing-trim on all FO descendants; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-007',
    label: 'Loop AI b11 w76 #007: space-all + ws0 on FO *',
    idea: 'text-spacing-trim on all FO descendants; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-008',
    label: 'Loop AI b11 w76 #008: trim-start + ls normal on FO *',
    idea: 'text-spacing-trim on all FO descendants; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-009',
    label: 'Loop AI b11 w76 #009: space-all + autospace on FO *',
    idea: 'text-spacing-trim on all FO descendants; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-010',
    label: 'Loop AI b11 w76 #010: normal + autospace normal on FO *',
    idea: 'text-spacing-trim on all FO descendants; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-011',
    label: 'Loop AI b11 w76 #011: trim normal on FO root',
    idea: 'text-spacing-trim on foreignObject root; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-012',
    label: 'Loop AI b11 w76 #012: trim space-all on FO root',
    idea: 'text-spacing-trim on foreignObject root; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-013',
    label: 'Loop AI b11 w76 #013: trim space-first on FO root',
    idea: 'text-spacing-trim on foreignObject root; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-first!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-014',
    label: 'Loop AI b11 w76 #014: trim trim-start on FO root',
    idea: 'text-spacing-trim on foreignObject root; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:trim-start!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-015',
    label: 'Loop AI b11 w76 #015: inherit space-all on FO root',
    idea: 'text-spacing-trim on foreignObject root; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:inherit!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-016',
    label: 'Loop AI b11 w76 #016: inherit trim-start on FO root',
    idea: 'text-spacing-trim on foreignObject root; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:inherit!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-017',
    label: 'Loop AI b11 w76 #017: space-all + ws0 on FO root',
    idea: 'text-spacing-trim on foreignObject root; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important;word-spacing:0!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-018',
    label: 'Loop AI b11 w76 #018: trim-start + ls normal on FO root',
    idea: 'text-spacing-trim on foreignObject root; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:trim-start!important;letter-spacing:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-019',
    label: 'Loop AI b11 w76 #019: space-all + autospace on FO root',
    idea: 'text-spacing-trim on foreignObject root; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important;text-autospace:space-all!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-020',
    label: 'Loop AI b11 w76 #020: normal + autospace normal on FO root',
    idea: 'text-spacing-trim on foreignObject root; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:normal!important;text-autospace:normal!important;overflow:visible!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (root); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-021',
    label: 'Loop AI b11 w76 #021: trim normal root + inherit *',
    idea: 'trim on FO root with inherit on descendants; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:normal!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-022',
    label: 'Loop AI b11 w76 #022: trim space-all root + inherit *',
    idea: 'trim on FO root with inherit on descendants; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important}foreignObject *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-023',
    label: 'Loop AI b11 w76 #023: trim space-first root + inherit *',
    idea: 'trim on FO root with inherit on descendants; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-first!important}foreignObject *{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-024',
    label: 'Loop AI b11 w76 #024: trim trim-start root + inherit *',
    idea: 'trim on FO root with inherit on descendants; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:trim-start!important}foreignObject *{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-025',
    label: 'Loop AI b11 w76 #025: inherit space-all root + inherit *',
    idea: 'trim on FO root with inherit on descendants; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important}foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-026',
    label: 'Loop AI b11 w76 #026: inherit trim-start root + inherit *',
    idea: 'trim on FO root with inherit on descendants; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:trim-start!important}foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-027',
    label: 'Loop AI b11 w76 #027: space-all + ws0 root + inherit *',
    idea: 'trim on FO root with inherit on descendants; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important}foreignObject *{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-028',
    label: 'Loop AI b11 w76 #028: trim-start + ls normal root + inherit *',
    idea: 'trim on FO root with inherit on descendants; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:trim-start!important}foreignObject *{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-029',
    label: 'Loop AI b11 w76 #029: space-all + autospace root + inherit *',
    idea: 'trim on FO root with inherit on descendants; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:space-all!important}foreignObject *{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-030',
    label: 'Loop AI b11 w76 #030: normal + autospace normal root + inherit *',
    idea: 'trim on FO root with inherit on descendants; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{text-spacing-trim:normal!important}foreignObject *{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (root-inherit); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-031',
    label: 'Loop AI b11 w76 #031: trim normal on text chain',
    idea: 'text-spacing-trim on text chain; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-032',
    label: 'Loop AI b11 w76 #032: trim space-all on text chain',
    idea: 'text-spacing-trim on text chain; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-033',
    label: 'Loop AI b11 w76 #033: trim space-first on text chain',
    idea: 'text-spacing-trim on text chain; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-034',
    label: 'Loop AI b11 w76 #034: trim trim-start on text chain',
    idea: 'text-spacing-trim on text chain; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-035',
    label: 'Loop AI b11 w76 #035: inherit space-all on text chain',
    idea: 'text-spacing-trim on text chain; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-036',
    label: 'Loop AI b11 w76 #036: inherit trim-start on text chain',
    idea: 'text-spacing-trim on text chain; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-037',
    label: 'Loop AI b11 w76 #037: space-all + ws0 on text chain',
    idea: 'text-spacing-trim on text chain; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-038',
    label: 'Loop AI b11 w76 #038: trim-start + ls normal on text chain',
    idea: 'text-spacing-trim on text chain; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-039',
    label: 'Loop AI b11 w76 #039: space-all + autospace on text chain',
    idea: 'text-spacing-trim on text chain; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-040',
    label: 'Loop AI b11 w76 #040: normal + autospace normal on text chain',
    idea: 'text-spacing-trim on text chain; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (text-chain); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-041',
    label: 'Loop AI b11 w76 #041: trim normal on FO a',
    idea: 'text-spacing-trim on FO anchors; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-042',
    label: 'Loop AI b11 w76 #042: trim space-all on FO a',
    idea: 'text-spacing-trim on FO anchors; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:space-all!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-043',
    label: 'Loop AI b11 w76 #043: trim space-first on FO a',
    idea: 'text-spacing-trim on FO anchors; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:space-first!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-044',
    label: 'Loop AI b11 w76 #044: trim trim-start on FO a',
    idea: 'text-spacing-trim on FO anchors; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:trim-start!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-045',
    label: 'Loop AI b11 w76 #045: inherit space-all on FO a',
    idea: 'text-spacing-trim on FO anchors; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-046',
    label: 'Loop AI b11 w76 #046: inherit trim-start on FO a',
    idea: 'text-spacing-trim on FO anchors; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:inherit!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-047',
    label: 'Loop AI b11 w76 #047: space-all + ws0 on FO a',
    idea: 'text-spacing-trim on FO anchors; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:space-all!important;word-spacing:0!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-048',
    label: 'Loop AI b11 w76 #048: trim-start + ls normal on FO a',
    idea: 'text-spacing-trim on FO anchors; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:trim-start!important;letter-spacing:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-049',
    label: 'Loop AI b11 w76 #049: space-all + autospace on FO a',
    idea: 'text-spacing-trim on FO anchors; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:space-all!important;text-autospace:space-all!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-050',
    label: 'Loop AI b11 w76 #050: normal + autospace normal on FO a',
    idea: 'text-spacing-trim on FO anchors; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject a{text-spacing-trim:normal!important;text-autospace:normal!important;display:inline!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (anchors); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-051',
    label: 'Loop AI b11 w76 #051: trim normal on FO nav a',
    idea: 'text-spacing-trim on nav anchors; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-052',
    label: 'Loop AI b11 w76 #052: trim space-all on FO nav a',
    idea: 'text-spacing-trim on nav anchors; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:space-all!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-053',
    label: 'Loop AI b11 w76 #053: trim space-first on FO nav a',
    idea: 'text-spacing-trim on nav anchors; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:space-first!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-054',
    label: 'Loop AI b11 w76 #054: trim trim-start on FO nav a',
    idea: 'text-spacing-trim on nav anchors; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:trim-start!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-055',
    label: 'Loop AI b11 w76 #055: inherit space-all on FO nav a',
    idea: 'text-spacing-trim on nav anchors; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:inherit!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-056',
    label: 'Loop AI b11 w76 #056: inherit trim-start on FO nav a',
    idea: 'text-spacing-trim on nav anchors; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:inherit!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-057',
    label: 'Loop AI b11 w76 #057: space-all + ws0 on FO nav a',
    idea: 'text-spacing-trim on nav anchors; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:space-all!important;word-spacing:0!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-058',
    label: 'Loop AI b11 w76 #058: trim-start + ls normal on FO nav a',
    idea: 'text-spacing-trim on nav anchors; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:trim-start!important;letter-spacing:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-059',
    label: 'Loop AI b11 w76 #059: space-all + autospace on FO nav a',
    idea: 'text-spacing-trim on nav anchors; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:space-all!important;text-autospace:space-all!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-060',
    label: 'Loop AI b11 w76 #060: normal + autospace normal on FO nav a',
    idea: 'text-spacing-trim on nav anchors; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject nav a{text-spacing-trim:normal!important;text-autospace:normal!important;box-sizing:border-box!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (nav-a); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-061',
    label: 'Loop AI b11 w76 #061: trim normal on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-062',
    label: 'Loop AI b11 w76 #062: trim space-all on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-063',
    label: 'Loop AI b11 w76 #063: trim space-first on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-064',
    label: 'Loop AI b11 w76 #064: trim trim-start on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-065',
    label: 'Loop AI b11 w76 #065: inherit space-all on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-066',
    label: 'Loop AI b11 w76 #066: inherit trim-start on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-067',
    label: 'Loop AI b11 w76 #067: space-all + ws0 on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-068',
    label: 'Loop AI b11 w76 #068: trim-start + ls normal on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-069',
    label: 'Loop AI b11 w76 #069: space-all + autospace on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-070',
    label: 'Loop AI b11 w76 #070: normal + autospace normal on FO>div *',
    idea: 'text-spacing-trim on wrapper descendants; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject>div *{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (fo-div-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-071',
    label: 'Loop AI b11 w76 #071: trim normal flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-072',
    label: 'Loop AI b11 w76 #072: trim space-all flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-073',
    label: 'Loop AI b11 w76 #073: trim space-first flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-074',
    label: 'Loop AI b11 w76 #074: trim trim-start flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-075',
    label: 'Loop AI b11 w76 #075: inherit space-all flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-076',
    label: 'Loop AI b11 w76 #076: inherit trim-start flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-077',
    label: 'Loop AI b11 w76 #077: space-all + ws0 flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-078',
    label: 'Loop AI b11 w76 #078: trim-start + ls normal flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-079',
    label: 'Loop AI b11 w76 #079: space-all + autospace flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-080',
    label: 'Loop AI b11 w76 #080: normal + autospace normal flex nowrap row',
    idea: 'flex nowrap row with trim on FO *; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject{display:flex!important;flex-wrap:nowrap!important;gap:0!important;overflow:visible!important}foreignObject *{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (nowrap-row); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-081',
    label: 'Loop AI b11 w76 #081: trim normal Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-082',
    label: 'Loop AI b11 w76 #082: trim space-all Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-083',
    label: 'Loop AI b11 w76 #083: trim space-first Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-first (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-084',
    label: 'Loop AI b11 w76 #084: trim trim-start Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-085',
    label: 'Loop AI b11 w76 #085: inherit space-all Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-space-all (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-086',
    label: 'Loop AI b11 w76 #086: inherit trim-start Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; inherit-trim-start (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-087',
    label: 'Loop AI b11 w76 #087: space-all + ws0 Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-ws0 (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-088',
    label: 'Loop AI b11 w76 #088: trim-start + ls normal Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; trim-start-ls-normal (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-089',
    label: 'Loop AI b11 w76 #089: space-all + autospace Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; space-all-autospace (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-090',
    label: 'Loop AI b11 w76 #090: normal + autospace normal Chromium + FO *',
    idea: 'Chromium copy with text-spacing-trim on FO *; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + CHROMIUM + TEXT_LEAF + 'foreignObject *{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b11 w76; normal-autospace (chromium-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-091',
    label: 'Loop AI b11 w76 #091: trim normal stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; text-spacing-trim:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; normal (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-092',
    label: 'Loop AI b11 w76 #092: trim space-all stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; text-spacing-trim:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; space-all (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-093',
    label: 'Loop AI b11 w76 #093: trim space-first stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; text-spacing-trim:space-first',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-first!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; space-first (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-094',
    label: 'Loop AI b11 w76 #094: trim trim-start stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; text-spacing-trim:trim-start',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:trim-start!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; trim-start (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-095',
    label: 'Loop AI b11 w76 #095: inherit space-all stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; FO root space-all + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; inherit-space-all (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-096',
    label: 'Loop AI b11 w76 #096: inherit trim-start stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; FO root trim-start + inherit on FO *',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:inherit!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; inherit-trim-start (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-097',
    label: 'Loop AI b11 w76 #097: space-all + ws0 stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; space-all with word-spacing:0',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important;word-spacing:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; space-all-ws0 (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-098',
    label: 'Loop AI b11 w76 #098: trim-start + ls normal stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; trim-start with letter-spacing:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:trim-start!important;letter-spacing:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; trim-start-ls-normal (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-099',
    label: 'Loop AI b11 w76 #099: space-all + autospace stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; space-all with text-autospace:space-all',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:space-all!important;text-autospace:space-all!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; space-all-autospace (stretch-star); text-spacing-trim — no text bypass.',
  },
  {
    id: 'loop-ai-b11-w76-100',
    label: 'Loop AI b11 w76 #100: normal + autospace normal stretch + FO *',
    idea: 'stretch leaf with text-spacing-trim on FO *; normal trim with text-autospace:normal',
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{text-spacing-trim:normal!important;text-autospace:normal!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    radicalPatch: 'h2-flex-stretch-leaf-from-live',
    notes: 'Loop AI b11 w76; normal-autospace (stretch-star); text-spacing-trim — no text bypass.',
  }
]

if (RECIPES.length !== 100) {
  throw new Error(`expected 100 recipes, got ${RECIPES.length}`)
}

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD


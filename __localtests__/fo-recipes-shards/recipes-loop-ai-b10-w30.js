/**
 * Loop AI batch-10 FO recipe shard (worker 30) — text-fix: hyphens none/auto +
 * overflow-wrap / word-break matrix (40 cells).
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
    id: 'loop-ai-b10-w30-001',
    label: "Loop AI b10 w30 #001: none ow-normal wb-normal",
    idea: "hyphens:none + overflow-wrap:normal + word-break:normal on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-normal-wb-normal; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-002',
    label: "Loop AI b10 w30 #002: none ow-normal wb-break-all",
    idea: "hyphens:none + overflow-wrap:normal + word-break:break-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;word-break:break-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-normal-wb-break-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-003',
    label: "Loop AI b10 w30 #003: none ow-normal wb-break-word",
    idea: "hyphens:none + overflow-wrap:normal + word-break:break-word on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;word-break:break-word!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-normal-wb-break-word; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-004',
    label: "Loop AI b10 w30 #004: none ow-normal wb-keep-all",
    idea: "hyphens:none + overflow-wrap:normal + word-break:keep-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;word-break:keep-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-normal-wb-keep-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-005',
    label: "Loop AI b10 w30 #005: none ow-break-word wb-normal",
    idea: "hyphens:none + overflow-wrap:break-word + word-break:normal on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-break-word-wb-normal; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-006',
    label: "Loop AI b10 w30 #006: none ow-break-word wb-break-all",
    idea: "hyphens:none + overflow-wrap:break-word + word-break:break-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-break:break-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-break-word-wb-break-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-007',
    label: "Loop AI b10 w30 #007: none ow-break-word wb-break-word",
    idea: "hyphens:none + overflow-wrap:break-word + word-break:break-word on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-break:break-word!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-break-word-wb-break-word; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-008',
    label: "Loop AI b10 w30 #008: none ow-break-word wb-keep-all",
    idea: "hyphens:none + overflow-wrap:break-word + word-break:keep-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-break:keep-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-break-word-wb-keep-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-009',
    label: "Loop AI b10 w30 #009: none ow-anywhere wb-normal",
    idea: "hyphens:none + overflow-wrap:anywhere + word-break:normal on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-anywhere-wb-normal; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-010',
    label: "Loop AI b10 w30 #010: none ow-anywhere wb-break-all",
    idea: "hyphens:none + overflow-wrap:anywhere + word-break:break-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important;word-break:break-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-anywhere-wb-break-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-011',
    label: "Loop AI b10 w30 #011: none ow-anywhere wb-break-word",
    idea: "hyphens:none + overflow-wrap:anywhere + word-break:break-word on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important;word-break:break-word!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-anywhere-wb-break-word; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-012',
    label: "Loop AI b10 w30 #012: none ow-anywhere wb-keep-all",
    idea: "hyphens:none + overflow-wrap:anywhere + word-break:keep-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important;word-break:keep-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-anywhere-wb-keep-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-013',
    label: "Loop AI b10 w30 #013: auto ow-normal wb-normal",
    idea: "hyphens:auto + overflow-wrap:normal + word-break:normal on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-normal-wb-normal; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-014',
    label: "Loop AI b10 w30 #014: auto ow-normal wb-break-all",
    idea: "hyphens:auto + overflow-wrap:normal + word-break:break-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;word-break:break-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-normal-wb-break-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-015',
    label: "Loop AI b10 w30 #015: auto ow-normal wb-break-word",
    idea: "hyphens:auto + overflow-wrap:normal + word-break:break-word on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;word-break:break-word!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-normal-wb-break-word; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-016',
    label: "Loop AI b10 w30 #016: auto ow-normal wb-keep-all",
    idea: "hyphens:auto + overflow-wrap:normal + word-break:keep-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;word-break:keep-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-normal-wb-keep-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-017',
    label: "Loop AI b10 w30 #017: auto ow-break-word wb-normal",
    idea: "hyphens:auto + overflow-wrap:break-word + word-break:normal on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-break-word-wb-normal; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-018',
    label: "Loop AI b10 w30 #018: auto ow-break-word wb-break-all",
    idea: "hyphens:auto + overflow-wrap:break-word + word-break:break-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:break-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-break-word-wb-break-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-019',
    label: "Loop AI b10 w30 #019: auto ow-break-word wb-break-word",
    idea: "hyphens:auto + overflow-wrap:break-word + word-break:break-word on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:break-word!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-break-word-wb-break-word; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-020',
    label: "Loop AI b10 w30 #020: auto ow-break-word wb-keep-all",
    idea: "hyphens:auto + overflow-wrap:break-word + word-break:keep-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:keep-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-break-word-wb-keep-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-021',
    label: "Loop AI b10 w30 #021: auto ow-anywhere wb-normal",
    idea: "hyphens:auto + overflow-wrap:anywhere + word-break:normal on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-anywhere-wb-normal; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-022',
    label: "Loop AI b10 w30 #022: auto ow-anywhere wb-break-all",
    idea: "hyphens:auto + overflow-wrap:anywhere + word-break:break-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;word-break:break-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-anywhere-wb-break-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-023',
    label: "Loop AI b10 w30 #023: auto ow-anywhere wb-break-word",
    idea: "hyphens:auto + overflow-wrap:anywhere + word-break:break-word on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;word-break:break-word!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-anywhere-wb-break-word; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-024',
    label: "Loop AI b10 w30 #024: auto ow-anywhere wb-keep-all",
    idea: "hyphens:auto + overflow-wrap:anywhere + word-break:keep-all on FO * — wrap/hyphen matrix cell",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;word-break:keep-all!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-anywhere-wb-keep-all; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-025',
    label: "Loop AI b10 w30 #025: auto ow-break-word hyphenate-limit-chars",
    idea: "hyphens:auto + overflow-wrap:break-word + hyphenate-limit-chars:6 3 2 on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:normal!important;-webkit-hyphenate-limit-chars:6 3 2!important;hyphenate-limit-chars:6 3 2!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-bw-hyphen-limit-chars; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-026',
    label: "Loop AI b10 w30 #026: auto ow-break-word hyphenate-limit-lines",
    idea: "hyphens:auto + overflow-wrap:break-word + hyphenate-limit-lines:2 on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:normal!important;-webkit-hyphenate-limit-lines:2!important;hyphenate-limit-lines:2!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-bw-hyphen-limit-lines; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-027',
    label: "Loop AI b10 w30 #027: none ow-break-word word-wrap alias",
    idea: "hyphens:none + overflow-wrap:break-word + word-wrap:break-word alias on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-wrap:break-word!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-bw-word-wrap-alias; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-028',
    label: "Loop AI b10 w30 #028: auto ow-anywhere word-wrap alias",
    idea: "hyphens:auto + overflow-wrap:anywhere + word-wrap:break-word on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;word-wrap:break-word!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-anywhere-word-wrap-alias; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-029',
    label: "Loop AI b10 w30 #029: none ow-normal wb-all line-break anywhere",
    idea: "hyphens:none + overflow-wrap:normal + word-break:break-all + line-break:anywhere on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;word-break:break-all!important;line-break:anywhere!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-normal-wb-all-line-break-anywhere; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-030',
    label: "Loop AI b10 w30 #030: auto ow-normal wb-all line-break strict",
    idea: "hyphens:auto + overflow-wrap:normal + word-break:break-all + line-break:strict on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;word-break:break-all!important;line-break:strict!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-normal-wb-all-line-break-strict; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-031',
    label: "Loop AI b10 w30 #031: none ow-anywhere wb-break-word line-break loose",
    idea: "hyphens:none + overflow-wrap:anywhere + word-break:break-word + line-break:loose on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important;word-break:break-word!important;line-break:loose!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-anywhere-wb-bw-line-break-loose; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-032',
    label: "Loop AI b10 w30 #032: auto ow-break-word wb-keep-all line-break strict",
    idea: "hyphens:auto + overflow-wrap:break-word + word-break:keep-all + line-break:strict on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:keep-all!important;line-break:strict!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-bw-wb-keep-line-break-strict; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-033',
    label: "Loop AI b10 w30 #033: none ow-break-word text chain only",
    idea: "hyphens:none + overflow-wrap:break-word on inline text chain selectors only (not FO *)",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-bw-text-chain; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-034',
    label: "Loop AI b10 w30 #034: auto ow-break-word text chain only",
    idea: "hyphens:auto + overflow-wrap:break-word on inline text chain selectors only (not FO *)",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + TEXT_CHAIN + '{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:normal!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-bw-text-chain; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-035',
    label: "Loop AI b10 w30 #035: none ow-normal white-space pre-wrap",
    idea: "hyphens:none + overflow-wrap:normal + white-space:pre-wrap on FO * — preserved breaks vs wrap",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:normal!important;word-break:normal!important;white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-normal-pre-wrap; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-036',
    label: "Loop AI b10 w30 #036: auto ow-normal white-space pre-wrap",
    idea: "hyphens:auto + overflow-wrap:normal + white-space:pre-wrap on FO * — hyphenation with pre-wrap",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:normal!important;word-break:normal!important;white-space:pre-wrap!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-normal-pre-wrap; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-037',
    label: "Loop AI b10 w30 #037: auto ow-anywhere wb-all hyphenate-character",
    idea: "hyphens:auto + overflow-wrap:anywhere + word-break:break-all + hyphenate-character on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:anywhere!important;word-break:break-all!important;-webkit-hyphenate-character:"-"!important;hyphenate-character:"-"!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-anywhere-wb-all-hyphen-char; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-038',
    label: "Loop AI b10 w30 #038: none ow-break-word wb-break-word webkit line-break",
    idea: "hyphens:none + overflow-wrap:break-word + word-break:break-word + -webkit-line-break:after-white-space",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:break-word!important;word-break:break-word!important;-webkit-line-break:after-white-space!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-bw-wb-bw-webkit-line-break; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-039',
    label: "Loop AI b10 w30 #039: auto ow-break-word text-wrap wrap",
    idea: "hyphens:auto + overflow-wrap:break-word + text-wrap:wrap on FO * — modern wrap mode vs legacy break-word",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:auto!important;-webkit-hyphens:auto!important;overflow-wrap:break-word!important;word-break:normal!important;text-wrap:wrap!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; auto-ow-bw-text-wrap-wrap; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  },
  {
    id: 'loop-ai-b10-w30-040',
    label: "Loop AI b10 w30 #040: none ow-anywhere wb-normal line-break auto",
    idea: "hyphens:none + overflow-wrap:anywhere + word-break:normal + line-break:auto on FO *",
    css:
      FO_BASELINE_CSS + TEXT_LEAF + 'foreignObject *{hyphens:none!important;-webkit-hyphens:none!important;overflow-wrap:anywhere!important;word-break:normal!important;line-break:auto!important;box-sizing:border-box!important;min-width:0!important}',
    inject: 'capture',
    category: 'text-fix',
    active: true,
    notes: 'Loop AI b10 w30; none-ow-anywhere-wb-normal-line-break-auto; hyphens/overflow-wrap/word-break matrix — no text bypass.',
  }]

export const FO_FIX_RECIPES_SHARD = RECIPES
export default FO_FIX_RECIPES_SHARD

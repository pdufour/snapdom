#!/usr/bin/env node
/**
 * Reset FO fix recipe denylist to empty.
 *
 * This is a manual tool: it only updates __localtests__/fo-fix-deactivated-ids.json.
 * Default matrix behavior remains unchanged; it simply respects whatever ids are in that file.
 *
 * Usage:
 *   node __localtests__/fo-fix-reset-deactivated-ids.mjs
 */
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))

const out = {
  ids: [],
  meta: {
    strategy: 'reset-denylist',
    date: new Date().toISOString().slice(0, 10),
    note: 'Cleared FO fix denylist (manual reset).',
  },
}

writeFileSync(join(__dir, 'fo-fix-deactivated-ids.json'), JSON.stringify(out, null, 2) + '\n')
console.log(JSON.stringify({ ok: true, ids: 0 }, null, 2))


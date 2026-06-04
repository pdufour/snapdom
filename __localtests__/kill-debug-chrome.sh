#!/usr/bin/env bash
# Kill snapdom headed-Chrome / Playwright automation only (not user Chrome).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# LOOP DISABLED — do not arm fo-fix-loop.sh arm-immediate / AGENT_LOOP_* after kills.
patterns=(
  'playwright_chromiumdev_profile'
  '__localtests__/fo-fix-lab'
  '__localtests__/mega-variant'
  '__localtests__/fix-trial'
  '__localtests__/bounce-check'
  'AGENT_LOOP_WAKE'
  'sleep 2'
  'AGENT_LOOP_WAKE_FOFIX'
  'AGENT_LOOP_TICK_FOFIX'
  'sleep 120'
  'local-http-server.mjs'
  'npm run debug:fo-fix-lab'
  'npm run test:blackbox'
)

killed=0
for pat in "${patterns[@]}"; do
  if pgrep -f "$pat" >/dev/null 2>&1; then
    echo "pkill -9 -f $pat"
    pkill -9 -f "$pat" 2>/dev/null || true
    killed=1
  fi
done

# Playwright-launched Chrome (remote-debugging profile dir)
while read -r pid; do
  [[ -z "$pid" ]] && continue
  cmd=$(ps -p "$pid" -o command= 2>/dev/null || true)
  if [[ "$cmd" == *playwright_chromiumdev_profile* ]]; then
    echo "kill -9 $pid (playwright Chrome)"
    kill -9 "$pid" 2>/dev/null || true
    killed=1
  fi
done < <(pgrep -f 'Google Chrome' 2>/dev/null || true)

if [[ "$killed" -eq 0 ]]; then
  echo "No snapdom automation processes found."
else
  echo "Done. Re-check: pgrep -fl 'fo-fix-lab|playwright_chromium|local-http-server'"
fi

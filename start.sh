#!/usr/bin/env bash
set -e

PORT="${1:-8000}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$DIR"

echo "Starting Italian Tutor at http://localhost:$PORT"
echo "Press Ctrl+C to stop."
echo

open "http://localhost:$PORT" 2>/dev/null || true

python3 -m http.server "$PORT"

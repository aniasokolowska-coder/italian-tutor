#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT=8000
echo "Starting Italian Tutor at http://localhost:$PORT"
echo "Keep this window open while using the app. Press Ctrl+C to stop."
open "http://localhost:$PORT"
python3 -m http.server "$PORT"

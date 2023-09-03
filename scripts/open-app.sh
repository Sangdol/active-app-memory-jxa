#!/bin/bash

APP_PATH="$(cat "$HOME/.sang_storage/active-app")"

if pgrep -f "$APP_PATH" > /dev/null; then
  open "$APP_PATH"
else
  echo "$APP_PATH is not running"

  terminal_notifier=/usr/local/bin/terminal-notifier
  if [ -f "$terminal_notifier" ]; then
    "$terminal_notifier" -title "App is not running" -message "$APP_PATH" -timeout 5 &
  else
    echo "Can't find $terminal_notifier"
  fi
fi


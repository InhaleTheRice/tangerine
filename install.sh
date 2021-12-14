#!/usr/bin/env bash

PURPLE_GEM_STUDIO_DIRECTORY="$HOME/.purple-gem-studio"
TANGERINE_INSTALL_DIRECTORY="$PURPLE_GEM_STUDIO_DIRECTORY/tangerine"
TANGERINE_DIRECTORY="$TANGERINE_INSTALL_DIRECTORY/node_modules/@purple-gem-studio/tangerine"
TANGERINE_LAUNCHER_PATH="$TANGERINE_DIRECTORY/bin/tangerine"

# TODO: Check if Node.js is installed and install if not found.
#       Make sure to implement this in `install.bat` as well before removing
#       this reminder.

echo "Installing Tangerine..."

npm i --prefix $TANGERINE_INSTALL_DIRECTORY @purple-gem-studio/tangerine

echo "Install complete."

rm -f /Applications/tangerine
cp $TANGERINE_LAUNCHER_PATH /Applications/tangerine

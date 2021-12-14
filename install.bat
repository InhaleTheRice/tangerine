@echo off

PURPLE_GEM_STUDIO_DIRECTORY="$HOME/.purple-gem-studio"
TANGERINE_INSTALL_DIRECTORY="$PURPLE_GEM_STUDIO_DIRECTORY/tangerine"
TANGERINE_DIRECTORY="$TANGERINE_INSTALL_DIRECTORY/node_modules/tangerine"
TANGERINE_LAUNCHER_PATH="$TANGERINE_DIRECTORY/bin/"

echo "Installing Tangerine..."

npm i --prefix $TANGERINE_INSTALL_DIRECTORY @purple-gem-studio/tangerine

echo "Install complete."

del /Applications/tangerine
cp $TANGERINE_LAUNCHER_PATH /Applications/tangerine

echo "Launching the Tangerine app."

tangerine

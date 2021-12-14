@echo off

PURPLE_GEM_STUDIO_DIRECTORY="$HOME/.purple-gem-studio"
TANGERINE_INSTALL_DIRECTORY="$PURPLE_GEM_STUDIO_DIRECTORY/tangerine"
TANGERINE_DIRECTORY="$TANGERINE_INSTALL_DIRECTORY/node_modules/@purple-gem-studio/tangerine"
TANGERINE_LAUNCHER_PATH="$TANGERINE_DIRECTORY/bin/tangerine"

echo "Installing Tangerine..."

npm i --prefix $TANGERINE_INSTALL_DIRECTORY @purple-gem-studio/tangerine

del /Applications/tangerine
cp $TANGERINE_LAUNCHER_PATH $HOME/Desktop/Tangerine

echo "Installation complete."


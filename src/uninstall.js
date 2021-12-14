const child_process = require('child_process');
const fs = require('fs');

function uninstallSpork() {
    child_process.execSync('npm un -g spork');

    window.location.href = '../uninstall_tangerine/index.html';
}

function uninstallTangerine() {
    fs.rmdirSync('$HOME/.purple-gem-studio/tangerine');

    // TODO: If .purple-gem-studio/ is empty, remove it as well

    child_process.execSync('npm un -g @purple-gem-studio/tangerine');

    process.exit();
}

module.exports = {
    uninstallSpork,
    uninstallTangerine
};

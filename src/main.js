// Electron modules
const child_process = require('child_process');
const {app, BrowserWindow} = require('electron');
const path = require('path');

function createWindow () {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 500,
        height: 375,
        backgroundColor: '#616161',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile('assets/pages/home/index.html');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

function installSporkIfMissing() {
    // Check if Spork is already installed
    child_process.exec(
        'spork -v',
        (error, stdout, stderr) => {
            if (error) {
                console.error(stderr);
            }

            // If Spork is already installed, return
            if (stdout === '1.3.3') {
                return;
            }

            // Install Spork
            console.log('Installing: spork (v1.3.3)');

            const installCommand = 'npm i -g @atek-cloud/spork@^1.3.3';

            try {
                child_process.execSync(installCommand);
            } catch {
                child_process.execSync(`sudo ${installCommand}`);
            }

            console.log('Installed: spork (v1.3.3)');
        }
    )
}

function updateTangerine() {
    const TANGERINE_DIRECTORY = '$HOME/.purple-gem-studio/tangerine';

    child_process.execSync(`npm i --prefix ${TANGERINE_DIRECTORY}/ @purple-gem-studio/tangerine`);
}

// Install Spork if missing
installSporkIfMissing();

// Update Tangerine
console.log('Updating: tangerine');

updateTangerine();

console.log('Update complete: tangerine');

// TODO: Check if this version of Tangerine matches the previous version.
//       If not, prompt the user to restart Tangerine for the installed changes
//       to take full effect.

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
        }
    )
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

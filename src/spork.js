const child_process = require('child_process');

const Spork = {};

Spork.processOutputs = {};
Spork.processes = {};
Spork.publicKeys = {};

Spork.bind = function (port, publicKey) {
    let sporkProcess;

    if (typeof publicKey === 'undefined' || publicKey === null) {
        // Request Spork to reverse-bind the given port.
        sporkProcess = child_process.spawn('spork.cmd', [ 'bind', '-p', port ]);

        Spork.processOutputs[port] = '';
        Spork.processes[port] = sporkProcess;
        Spork.publicKeys[port] = null;

        sporkProcess.stdout.on('data', function (buffer) {
            // Add the incoming data buffer to the process' output
            Spork.processOutputs[port] += buffer.toString();

            updatePublicKey(port);
        });
    } else if (typeof publicKey === 'string') {
        // Request Spork to forward-bind the socket to the given port.
        sporkProcess = child_process.exec(`spork.cmd bind ${publicKey} -p ${port}`);
        console.log(`forward proxy: ${publicKey}`);
    } else {
        // An invalid public key was passed as an argument; throw an error.
        throw `Invalid argument of type '${typeof publicKey}' passed to ` +
            "parameter 'publicKey'";
    }

    Spork.processes[port] = sporkProcess;

    process.on('exit', () => {
        sporkProcess.kill();
    });
}

Spork.unbind = function(port) {
    const process = Spork.processes[port];

    // If Spork is not currently hosting the given port, then there is nothing
    // to be done, so return
    if (typeof process === 'undefined' || process === null) {
        return;
    }

    // Stop the Spork process for the given port
    process.kill();
}

module.exports = Spork;

function parseBindOutput(stdout) {
    let line;

    if (stdout.includes('\n')) {
        const lines = stdout.split('\n');

        for (let i = 0; i < lines.length; i++) {
            lines[i] = lines[i].trim();
        }

        line = lines[0];
    }
    else {
        line = stdout;
    }

    let publicKey;

    if (line.includes(':')) {
        publicKey = line.split(':')[1].trim();
    } else {
        publicKey = null;
    }

    return {
        publicKey: publicKey
    };
}

function updatePublicKey(port) {
    const stdout = Spork.processOutputs[port];

    const bindOutput = parseBindOutput(stdout);

    Spork.publicKeys[port] = bindOutput.publicKey;

    // TODO: Delete this
    console.log('updated');
}

const Spork = require('./spork');

function getPort() {
    const urlParams = getURLParams();

    return urlParams.get('port');
}

function getPublicKey() {
    const port = getPort();

    const publicKey = Spork.publicKeys[port];

    return typeof publicKey === 'string' ?
        publicKey :
        null;
}

function getURLParams() {
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}

function shouldStop() {
    return getURLParams().get('stop') === 1;
}

const port = getPort();
const url = window.location.toString();

// HACK: Find a better way to determine which page they're currently on
if (url.includes('assets/pages/host/index.html')) {
    if (shouldStop()) {
        Spork.unbind(port);
    }
}
else if (url.includes('assets/pages/hosting/index.html')) {
    Spork.bind(port);

    console.log(window.publicKey);

    window.onload = function () {
        // Update the port and public-key display text
        const portElement = document.getElementById('port');
        const publicKeyElement = document.getElementById('publicKey');
    
        portElement.innerText = "Port: " + getPort();

        var intervalId = window.setInterval(() => {
            const publicKey = getPublicKey();

            publicKeyElement.innerText = "Public key: " + publicKey;
            
            if (publicKey !== null) {
                window.clearInterval(intervalId);
            }
        }, 1000);
    }
}

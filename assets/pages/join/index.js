function getPort() {
    const portElement = document.getElementById('port');
    const port = portElement.value;

    return port;
}

function getPublicKey() {
    const portElement = document.getElementById('public-key');
    const port = portElement.value;

    return port;
}

function join() {
    const port = getPort();
    const publicKey = getPublicKey();

    window.location.href = '../joining/index.html?port=' + port+'&pubkey=' + publicKey;
}

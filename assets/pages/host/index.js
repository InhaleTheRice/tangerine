function getPort() {
    const portElement = document.getElementById('port');
    const port = portElement.value;

    return port;
}

function host() {
    const port = getPort();

    window.location.href = '../hosting/index.html?port=' + port;
}

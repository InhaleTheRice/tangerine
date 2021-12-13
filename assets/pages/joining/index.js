function getPort() {
    const urlParams = getURLParams();

    return urlParams.get('port');
}

function getURLParams() {
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}

function disconnect() {
    const port = getPort();

    // Return to the host page and request that it stop hosting the given port
    window.location.href = '../join/index.html?port=' + port + '&disconnect=1';
}

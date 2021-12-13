function getPort() {
    const urlParams = getURLParams();

    return urlParams.get('port');
}

function getURLParams() {
    const queryString = window.location.search;
    return new URLSearchParams(queryString);
}

function stop() {
    const port = getPort();

    // Return to the host page and request that it stop hosting the given port
    window.location.href = '../host/index.html?port=' + port + '&stop=1';
}

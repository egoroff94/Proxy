function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.google.com") || host === "google.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my") {
        return "PROXY 138.124.120.18:63880";
    }
    return "DIRECT";
}

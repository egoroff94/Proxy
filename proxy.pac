function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.google.com") || host === "2ip.ru" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my") {
        return "PROXY 138.124.120.18:63880";
    }
    return "DIRECT";
}

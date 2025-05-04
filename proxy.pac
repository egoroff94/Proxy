function FindProxyForURL(url, host) {
    if (host === "gemini.google.com") {
        return "PROXY 138.124.120.18:63880";
    }
    if (shExpMatch(host, "*.2ip.ru") || host === "chatgpt.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my") {
        return "PROXY 138.124.120.18:63880";
    }
    return "DIRECT";
}

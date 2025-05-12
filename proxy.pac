function FindProxyForURL(url, host) {
    var proxy = "PROXY 138.124.120.18:63880";

    if (host === "gemini.google.com") {
        return proxy;
    }
    if (host === "notebooklm.google.com") {
        return proxy;
    }
    if (host === "sora.chatgpt.com") {
        return proxy;
    }
    if (shExpMatch(host, "*.sora.chatgpt.com")) {
        return proxy;
    }
    if (host === "platform.openai.com") {
        return proxy;
    }
    if (shExpMatch(host, "*.chatgpt.com") || host === "chatgpt.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my" ||
        shExpMatch(host, "*.openai.com") || host === "openai.com") {
        return proxy;
    }
    return "DIRECT";
}

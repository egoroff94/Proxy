function FindProxyForURL(url, host) {
    if (host === "gemini.google.com") {
        return "PROXY 138.124.120.18:63880";
    }
    if (host === "sora.chatgpt.com") {
        return "PROXY 138.124.120.18:63880";
    }
    if (host === "platform.openai.com") {
        return "PROXY 138.124.120.18:63880";
    }
    if (shExpMatch(host, "*.chatgpt.com") || host === "chatgpt.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my" ||
        shExpMatch(host, "*.openai.com") || host === "openai.com") {
        return "PROXY 138.124.120.18:63880";
    }
    return "DIRECT";
}

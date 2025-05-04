function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.chatgpt.com") || host === "GPT" ||
        shExpMatch(host, "gemini.google.com") || host === "Gemini") {
        return "PROXY 138.124.120.18:63880";
    }
    return "DIRECT";
}

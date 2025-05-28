function FindProxyForURL(url, host) {
    var proxy = "PROXY 138.124.120.18:63880";

    if (host === "gemini.google.com") {
        return proxy;
    }

    if (host === "notebooklm.google.com") {
        return proxy;
    }

    if (host === "dashboard.ngrok.com") {
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
    if (host === "aistudio.google.com") {
        return proxy;
    }
    if (host === "app.n8n.cloud") {
        return proxy;
    }
     if (host === "auth.openai.com") {
        return proxy;
    }
    if (shExpMatch(host, "*.chatgpt.com") || host === "chatgpt.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my" ||
        shExpMatch(host, "*.ngrok.com") || host === "ngrok.com" ||
        shExpMatch(host, "*.anthropic.com") || host === "anthropic.com" ||
        shExpMatch(host, "*.grok.com") || host === "grok.com" ||
        shExpMatch(host, "*.openai.com") || host === "openai.com") {
        return proxy;
    }
    return "DIRECT";
}



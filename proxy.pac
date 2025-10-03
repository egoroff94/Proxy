function FindProxyForURL(url, host) {
    var proxy = "PROXY 154.215.12.102:62820";

    if (host === "enterprisedb.com") {
        return proxy;
    }

    if (host === "umnico.com") {
        return proxy;
    }
    
    if (host === "jetbrains.com") {
        return proxy;
    }

    if (host === "gemini.google.com") {
        return proxy;
    }
    
    if (host === "aistudio.google.com") {
        return proxy;
    }
    
    if (host === "notebooklm.google.com") {
        return proxy;
    }

    if (host === "protonvpn.com") {
        return proxy;
    }

    if (host === "dashboard.ngrok.com") {
        return proxy;
    }

    if (host === "2ip.ru") {
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
    
    if (host === "app.n8n.cloud") {
        return proxy;
    }

    if (host === "surfshark.com") {
        return proxy;
    }

    if (host === "nordvpn.com") {
        return proxy;
    }

     if (host === "x.ai") {
        return proxy;
    }

    if (shExpMatch(host, "*.chatgpt.com") || host === "chatgpt.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my" ||
        shExpMatch(host, "*.jetbrains.com") || host === "jetbrains.com" ||
        shExpMatch(host, "*.ngrok.com") || host === "ngrok.com" ||
        shExpMatch(host, "*.anthropic.com") || host === "anthropic.com" ||
        shExpMatch(host, "*.enterprisedb.com") || host === "enterprisedb.com" ||
        shExpMatch(host, "*.grok.com") || host === "grok.com" ||
        shExpMatch(host, "*.surfshark.com") || host === "surfshark.com" ||
        shExpMatch(host, "*.x.ai") || host === "x.ai" ||
        shExpMatch(host, "*.openai.com") || host === "openai.com") {
        return proxy;
    }
    return "DIRECT";
}



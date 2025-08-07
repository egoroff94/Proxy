function FindProxyForURL(url, host) {
    var proxy = "PROXY 156.246.142.163:62502";
    var proxy2 = "PROXY pool.proxy.market:10006";

    if (host === "enterprisedb.com") {
        return proxy;
    }

    if (host === "jetbrains.com") {
        return proxy;
    }

    if (host === "gemini.google.com") {
        return proxy;
    }

    if (host === "notebooklm.google.com") {
        return proxy;
    }

    if (host === "dashboard.ngrok.com") {
        return proxy;
    }

    if (host === "2ip.ru") {
        return proxy2;
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

     if (host === "x.ai") {
        return proxy;
    }

    if (shExpMatch(host, "*.chatgpt.com") || host === "chatgpt.com" ||
        shExpMatch(host, "*.ipaddress.my") || host === "ipaddress.my" ||
        shExpMatch(host, "*.ngrok.com") || host === "ngrok.com" ||
        shExpMatch(host, "*.anthropic.com") || host === "anthropic.com" ||
        shExpMatch(host, "*.enterprisedb.com") || host === "enterprisedb.com" ||
        shExpMatch(host, "*.grok.com") || host === "grok.com" ||
        shExpMatch(host, "*.x.ai") || host === "x.ai" ||
        shExpMatch(host, "*.openai.com") || host === "openai.com") {
        return proxy;
    }
    return "DIRECT";
}



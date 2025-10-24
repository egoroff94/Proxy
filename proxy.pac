function FindProxyForURL(url, host) {
  var PROXY = "PROXY 156.243.150.117:63312";
  if (!host) return "DIRECT";

  var h = host.toLowerCase().replace(/\.$/, "");

  // Все зоны .google (например, labs.google, jules.google)
  if (shExpMatch(h, "*.google")) return PROXY;

  // Домены/зоны, которые нужно проксировать (включая их поддомены)
  var domains = [
    // Инструменты/провайдеры
    "enterprisedb.com",
    "umnico.com",
    "jetbrains.com",
    "ngrok.com",
    "2ip.ru",
    "n8n.cloud",
    "surfshark.com",
    "nordvpn.com",

    // AI/LLM и смежные
    "chatgpt.com",
    "openai.com",
    "anthropic.com",
    "grok.com",
    "x.ai",
    "ipaddress.my",

    // Экосистема Google
    "google.com",
    "googleapis.com",
    "googleusercontent.com",
    "gstatic.com",
    "g.co",
    "goo.gl",
    "gvt1.com",
    "gvt2.com",
    "ggpht.com"
  ];

  for (var i = 0; i < domains.length; i++) {
    if (h === domains[i] || shExpMatch(h, "*." + domains[i])) {
      return PROXY;
    }
  }

  return "DIRECT";
}

function FindProxyForURL(url, host) {
  var PROXY = "PROXY 156.243.150.117:63312";
  if (!host) return "DIRECT";

  // нормализуем
  var h = host.toLowerCase().replace(/\.$/, "");

  // лёгкие исключения: локальные имена/домашние зоны — без DNS
  if (isPlainHostName(h) ||
      shExpMatch(h, "*.local") ||
      shExpMatch(h, "*.lan") ||
      shExpMatch(h, "*.home") ||
      shExpMatch(h, "*.intra")) {
    return "DIRECT";
  }

  // TLD .google (labs.google, jules.google и т.д.)
  if (shExpMatch(h, "*.google")) return PROXY;

  // Суффиксы доменов, которые нужно вести через прокси
  var zones = [
    // инструменты/провайдеры
    "enterprisedb.com",
    "umnico.com",
    "jetbrains.com",
    "ngrok.com",
    "2ip.ru",
    "n8n.cloud",
    "surfshark.com",
    "nordvpn.com",

    // AI/LLM/прочее
    "chatgpt.com",
    "openai.com",
    "anthropic.com",
    "grok.com",
    "x.ai",
    "ipaddress.my",

    // Google-экосистема
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

  // суффиксное совпадение (root и поддомены)
  for (var i = 0; i < zones.length; i++) {
    if (dnsDomainIs(h, zones[i])) return PROXY;
  }

  return "DIRECT";
}

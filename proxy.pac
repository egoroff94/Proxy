function FindProxyForURL(url, host) {
  var PROXY = "PROXY 156.243.150.117:63312";
  if (!host) return "DIRECT";

  // нормализуем хост (на всякий случай)
  var h = host.toLowerCase().replace(/\.$/, "");

  // быстрый обход локальных имён и сетей (ускоряет интранет)
  if (isPlainHostName(h)) return "DIRECT";
  var ip = dnsResolve(h);
  if (ip) {
    if (isInNet(ip, "10.0.0.0", "255.0.0.0") ||
        isInNet(ip, "172.16.0.0", "255.240.0.0") ||
        isInNet(ip, "192.168.0.0", "255.255.0.0") ||
        isInNet(ip, "127.0.0.0", "255.0.0.0")) {
      return "DIRECT";
    }
  }

  // Доменные зоны/доменные суффиксы, которые нужно проксировать
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

    // AI/LLM-сервисы
    "chatgpt.com",
    "openai.com",
    "anthropic.com",
    "grok.com",
    "x.ai",
    "ipaddress.my",

    // Google: все сервисы и связанные зоны
    // .google.com (Gmail, Gemini, Aistudio, NotebookLM, и т.д.)
    "google.com",
    // .google (labs.google, jules.google и прочие)
    "google",
    // API/статика/контент
    "googleapis.com",
    "googleusercontent.com",
    "gstatic.com",
    // короткие домены и дистрибуция
    "g.co",
    "goo.gl",
    "gvt1.com",
    "gvt2.com",
    "ggpht.com"
  ];

  // Совпадение по домену или его поддоменам
  for (var i = 0; i < domains.length; i++) {
    if (dnsDomainIs(h, domains[i])) return PROXY;
  }

  return "DIRECT";
}

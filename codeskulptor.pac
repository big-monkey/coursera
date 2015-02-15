function FindProxyForURL(url, host) {
  return "PROXY 54.92.82.200:25";
  if (/^maps\.gstatic\.com$/.test(host)) return "PROXY 54.92.82.200:25;DIRECT";
  if (/^www\.codeskulptor\.org$/.test(host)) return "PROXY 54.92.82.200:25;DIRECT";
  if (/(?:^|\.)commondatastorage\.googleapis\.com$/.test(host)) return "PROXY 54.92.82.200:25;DIRECT";
  if (/^ajax\.googleapis\.com$/.test(host)) return "PROXY 54.92.82.200:25;DIRECT";
  if (/^maps\.googleapis\.com$/.test(host)) return "PROXY 54.92.82.200:25;DIRECT";
  return "DIRECT";
}

var UAInfo = "";
try {
  UAInfo = navigator.userAgent || "";
} catch (error) {
  UAInfo = "";
}

export var isAndroid =
  UAInfo.indexOf("Android") > -1 || UAInfo.indexOf("Adr") > -1;

export var isIOS = !!UAInfo.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

var encode = encodeURIComponent

export function stringifyQuery(query) {
  return Object.keys(query)
    .map(function (key) {
      var value = query[key];
      return encode(key) + "=" + encode(value);
    })
    .join("&");
}

export function parseQuery(str) {
  var pairs = (str[0] === "?" ? str.slice(1) : str).split("&");
  return pairs.reduce(function (acc, value) {
    let _v = value.split("=");
    acc[_v[0]] = _v[1];
    return acc;
  }, {});
}

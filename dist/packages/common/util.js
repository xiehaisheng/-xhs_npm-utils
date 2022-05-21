export function get(source, path, defaultvalue) {
  if (defaultvalue === void 0) {
    defaultvalue = undefined;
  }
  var result;
  var stringPath = String(path);
  if (!isEmpty(source)) {
    stringPath = stringPath.replace(/\[(.*?)\]/g, function (match, p1, index) {
      return index === 0 ? p1 : "." + p1;
    });
    var keys = stringPath.split(".");
    result = keys.reduce(function (src, key) {
      return (src || {})[key];
    }, source);
  }
  return isUndefined(result) ? defaultvalue : result;
}
export function isUndefined(input) {
  return input === void 0;
}
export function isNull(input) {
  return input === null;
}
export function isNaN(input) {
  return input !== input;
}
export function isType(input, type) {
  return Object.prototype.toString.call(input) === "[object " + type + "]";
}
export function isString(input) {
  return isType(input, "String");
}
export function isNumber(input) {
  return isType(input, "Number");
}
export function isObject(input) {
  return isType(input, "Object");
}
export function isDate(input) {
  return isType(input, "Date");
}
export function isArray(input) {
  return isType(input, "Array");
}
export function isFunction(input) {
  return isType(input, "Function");
}
export function isTrue(input) {
  return !isFalse(input);
}
export function isFalse(input) {
  if (isString(input)) {
    return input === "" || input === "false";
  }
  return !input;
}
export function isEmpty(input) {
  if (isNull(input) || isUndefined(input)) {
    return true;
  }
  if (isArray(input) || isString(input)) {
    return input.length === 0;
  }
  return Object.keys(input).length === 0;
}

export function formatDate(g) {
  if (isHour === void 0) {
    isHour = true;
  }
  function add0(m) {
    return m < 10 ? "0" + m : m;
  }
  var now = new Date(g);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  return isHour
    ? `${year}-${add0(month)}-${add0(date)} ${add0(hour)}:${add0(
        minute
      )}:${add0(second)}`
    : `${year}-${add0(month)}-${add0(date)}`;
}

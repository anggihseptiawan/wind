import * as p from "react";
import { r as e } from "./index127.js";
function f(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const l = Object.getPrototypeOf(t);
  return (l === null || l === Object.prototype || Object.getPrototypeOf(l) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function a(t) {
  if (/* @__PURE__ */ p.isValidElement(t) || e.isValidElementType(t) || !f(t))
    return t;
  const l = {};
  return Object.keys(t).forEach((i) => {
    l[i] = a(t[i]);
  }), l;
}
function r(t, l, i = {
  clone: !0
}) {
  const o = i.clone ? {
    ...t
  } : t;
  return f(t) && f(l) && Object.keys(l).forEach((n) => {
    /* @__PURE__ */ p.isValidElement(l[n]) || e.isValidElementType(l[n]) ? o[n] = l[n] : f(l[n]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(t, n) && f(t[n]) ? o[n] = r(t[n], l[n], i) : i.clone ? o[n] = f(l[n]) ? a(l[n]) : l[n] : o[n] = l[n];
  }), o;
}
export {
  r as default,
  f as isPlainObject
};

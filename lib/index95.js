import P from "./index122.js";
import { handleBreakpoints as m } from "./index92.js";
import $ from "./index28.js";
function c(t, e, f = !0) {
  if (!e || typeof e != "string")
    return null;
  if (t && t.vars && f) {
    const n = `vars.${e}`.split(".").reduce((r, s) => r && r[s] ? r[s] : null, t);
    if (n != null)
      return n;
  }
  return e.split(".").reduce((n, r) => n && n[r] != null ? n[r] : null, t);
}
function y(t, e, f, n = f) {
  let r;
  return typeof t == "function" ? r = t(f) : Array.isArray(t) ? r = t[f] || n : r = c(t, f) || n, e && (r = e(r, n, t)), r;
}
function k(t) {
  const {
    prop: e,
    cssProperty: f = t.prop,
    themeKey: n,
    transform: r
  } = t, s = (o) => {
    if (o[e] == null)
      return null;
    const v = o[e], d = o.theme, i = c(d, n) || {};
    return m(o, v, (u) => {
      let l = y(i, r, u);
      return u === l && typeof u == "string" && (l = y(i, r, `${e}${u === "default" ? "" : $(u)}`, u)), f === !1 ? l : {
        [f]: l
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [e]: P
  } : {}, s.filterProps = [e], s;
}
export {
  k as default,
  c as getPath,
  y as getStyleValue
};

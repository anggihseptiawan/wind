import d from "./index91.js";
import { createEmptyBreakpointObject as j, handleBreakpoints as p, removeUnusedBreakpoints as S } from "./index92.js";
import k from "./index93.js";
import { sortContainerQueries as x } from "./index94.js";
import { getPath as O, getStyleValue as h } from "./index95.js";
import P from "./index28.js";
function B(...o) {
  const l = o.reduce((e, t) => e.concat(Object.keys(t)), []), r = new Set(l);
  return o.every((e) => r.size === Object.keys(e).length);
}
function C(o, l) {
  return typeof o == "function" ? o(l) : o;
}
function z() {
  function o(r, e, t, m) {
    const y = {
      [r]: e,
      theme: t
    }, c = m[r];
    if (!c)
      return {
        [r]: e
      };
    const {
      cssProperty: u = r,
      themeKey: b,
      transform: g,
      style: n
    } = c;
    if (e == null)
      return null;
    if (b === "typography" && e === "inherit")
      return {
        [r]: e
      };
    const s = O(t, b) || {};
    return n ? n(y) : p(y, e, (f) => {
      let a = h(s, g, f);
      return f === a && typeof f == "string" && (a = h(s, g, `${r}${f === "default" ? "" : P(f)}`, f)), u === !1 ? a : {
        [u]: a
      };
    });
  }
  function l(r) {
    const {
      sx: e,
      theme: t = {}
    } = r || {};
    if (!e)
      return null;
    const m = t.unstable_sxConfig ?? d;
    function y(c) {
      let u = c;
      if (typeof c == "function")
        u = c(t);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const b = j(t.breakpoints), g = Object.keys(b);
      let n = b;
      return Object.keys(u).forEach((s) => {
        const i = C(u[s], t);
        if (i != null)
          if (typeof i == "object")
            if (m[s])
              n = k(n, o(s, i, t, m));
            else {
              const f = p({
                theme: t
              }, i, (a) => ({
                [s]: a
              }));
              B(f, i) ? n[s] = l({
                sx: i,
                theme: t
              }) : n = k(n, f);
            }
          else
            n = k(n, o(s, i, t, m));
      }), x(t, S(g, n));
    }
    return Array.isArray(e) ? e.map(y) : y(e);
  }
  return l;
}
const A = z();
A.filterProps = ["sx"];
export {
  A as default,
  z as unstable_createStyleFunctionSx
};

import { isCqShorthand as m, getContainerQuery as y } from "./index88.js";
const c = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, f = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${c[n]}px)`
}, h = {
  containerQueries: (n) => ({
    up: (e) => {
      let t = typeof e == "number" ? e : c[e] || e;
      return typeof t == "number" && (t = `${t}px`), n ? `@container ${n} (min-width:${t})` : `@container (min-width:${t})`;
    }
  })
};
function B(n, e, t) {
  const s = n.theme || {};
  if (Array.isArray(e)) {
    const u = s.breakpoints || f;
    return e.reduce((o, r, i) => (o[u.up(u.keys[i])] = t(e[i]), o), {});
  }
  if (typeof e == "object") {
    const u = s.breakpoints || f;
    return Object.keys(e).reduce((o, r) => {
      if (m(u.keys, r)) {
        const i = y(s.containerQueries ? s : h, r);
        i && (o[i] = t(e[r], r));
      } else if (Object.keys(u.values || c).includes(r)) {
        const i = u.up(r);
        o[i] = t(e[r], r);
      } else {
        const i = r;
        o[i] = e[i];
      }
      return o;
    }, {});
  }
  return t(e);
}
function O(n = {}) {
  var t;
  return ((t = n.keys) == null ? void 0 : t.reduce((s, d) => {
    const u = n.up(d);
    return s[u] = {}, s;
  }, {})) || {};
}
function x(n, e) {
  return n.reduce((t, s) => {
    const d = t[s];
    return (!d || Object.keys(d).length === 0) && delete t[s], t;
  }, e);
}
export {
  O as createEmptyBreakpointObject,
  B as handleBreakpoints,
  x as removeUnusedBreakpoints,
  c as values
};

import { clsx as v } from "./index15.js";
import k from "./index103.js";
import H from "./index104.js";
function W(j) {
  const {
    getSlotProps: y,
    additionalProps: e,
    externalSlotProps: s,
    externalForwardedProps: c,
    className: n
  } = j;
  if (!y) {
    const h = v(e == null ? void 0 : e.className, n, c == null ? void 0 : c.className, s == null ? void 0 : s.className), u = {
      ...e == null ? void 0 : e.style,
      ...c == null ? void 0 : c.style,
      ...s == null ? void 0 : s.style
    }, f = {
      ...e,
      ...c,
      ...s
    };
    return h.length > 0 && (f.className = h), Object.keys(u).length > 0 && (f.style = u), {
      props: f,
      internalRef: void 0
    };
  }
  const l = k({
    ...c,
    ...s
  }), E = H(s), b = H(c), m = y(l), N = v(m == null ? void 0 : m.className, e == null ? void 0 : e.className, n, c == null ? void 0 : c.className, s == null ? void 0 : s.className), g = {
    ...m == null ? void 0 : m.style,
    ...e == null ? void 0 : e.style,
    ...c == null ? void 0 : c.style,
    ...s == null ? void 0 : s.style
  }, t = {
    ...m,
    ...e,
    ...b,
    ...E
  };
  return N.length > 0 && (t.className = N), Object.keys(g).length > 0 && (t.style = g), {
    props: t,
    internalRef: m.ref
  };
}
export {
  W as default
};

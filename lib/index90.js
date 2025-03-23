import i from "./index89.js";
import p from "./index104.js";
import { handleBreakpoints as x, values as c } from "./index86.js";
function r(t) {
  return t <= 1 && t !== 0 ? `${t * 100}%` : t;
}
const g = i({
  prop: "width",
  transform: r
}), f = (t) => {
  if (t.maxWidth !== void 0 && t.maxWidth !== null) {
    const d = (n) => {
      var e, m, s, h, a;
      const o = ((s = (m = (e = t.theme) == null ? void 0 : e.breakpoints) == null ? void 0 : m.values) == null ? void 0 : s[n]) || c[n];
      return o ? ((a = (h = t.theme) == null ? void 0 : h.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${o}${t.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: r(n)
      };
    };
    return x(t, t.maxWidth, d);
  }
  return null;
};
f.filterProps = ["maxWidth"];
const u = i({
  prop: "minWidth",
  transform: r
}), W = i({
  prop: "height",
  transform: r
}), b = i({
  prop: "maxHeight",
  transform: r
}), l = i({
  prop: "minHeight",
  transform: r
});
i({
  prop: "size",
  cssProperty: "width",
  transform: r
});
i({
  prop: "size",
  cssProperty: "height",
  transform: r
});
const k = i({
  prop: "boxSizing"
});
p(g, f, u, W, b, l, k);
export {
  k as boxSizing,
  W as height,
  b as maxHeight,
  f as maxWidth,
  l as minHeight,
  u as minWidth,
  r as sizingTransform,
  g as width
};

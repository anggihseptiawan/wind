import { createUnaryUnit as i, getValue as b } from "./index83.js";
import l from "./index122.js";
import u from "./index123.js";
import c from "./index95.js";
import { handleBreakpoints as m } from "./index92.js";
function e(r) {
  return typeof r != "number" ? r : `${r}px solid`;
}
function o(r, t) {
  return c({
    prop: r,
    themeKey: "borders",
    transform: t
  });
}
const f = o("border", e), a = o("borderTop", e), p = o("borderRight", e), R = o("borderBottom", e), C = o("borderLeft", e), h = o("borderColor"), y = o("borderTopColor"), T = o("borderRightColor"), B = o("borderBottomColor"), g = o("borderLeftColor"), L = o("outline", e), P = o("outlineColor"), d = (r) => {
  if (r.borderRadius !== void 0 && r.borderRadius !== null) {
    const t = i(r.theme, "shape.borderRadius", 4, "borderRadius"), n = (s) => ({
      borderRadius: b(t, s)
    });
    return m(r, r.borderRadius, n);
  }
  return null;
};
d.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: l
} : {};
d.filterProps = ["borderRadius"];
u(f, a, p, R, C, h, y, T, B, g, d, L, P);
export {
  f as border,
  R as borderBottom,
  B as borderBottomColor,
  h as borderColor,
  C as borderLeft,
  g as borderLeftColor,
  d as borderRadius,
  p as borderRight,
  T as borderRightColor,
  a as borderTop,
  y as borderTopColor,
  e as borderTransform,
  L as outline,
  P as outlineColor
};

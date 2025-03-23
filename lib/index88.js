import { createUnarySpacing as i } from "./index82.js";
function m(r = 8, n = i({
  spacing: r
})) {
  if (r.mui)
    return r;
  const t = (...e) => (process.env.NODE_ENV !== "production" && (e.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${e.length}`)), (e.length === 0 ? [1] : e).map((c) => {
    const o = n(c);
    return typeof o == "number" ? `${o}px` : o;
  }).join(" "));
  return t.mui = !0, t;
}
export {
  m as default
};

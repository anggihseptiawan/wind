import c from "./index11.js";
import l from "./index62.js";
function f(n) {
  const {
    prototype: e = {}
  } = n;
  return !!e.isReactComponent;
}
function u(n, e, i, r, p) {
  const t = n[e], a = p || e;
  if (t == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let o;
  return typeof t == "function" && !f(t) && (o = "Did you accidentally provide a plain function component instead?"), o !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${i}\`. Expected an element type that can hold a ref. ${o} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const m = l(c.elementType, u);
export {
  m as default
};

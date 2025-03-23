import * as c from "react";
import s from "./index11.js";
import "./index3.js";
import p from "./index104.js";
const i = /* @__PURE__ */ c.createContext(void 0);
process.env.NODE_ENV !== "production" && (s.node, s.object);
function m(n) {
  const {
    theme: e,
    name: t,
    props: r
  } = n;
  if (!e || !e.components || !e.components[t])
    return r;
  const o = e.components[t];
  return o.defaultProps ? p(o.defaultProps, r) : !o.styleOverrides && !o.variants ? p(o, r) : r;
}
function d({
  props: n,
  name: e
}) {
  const t = c.useContext(i);
  return m({
    props: n,
    name: e,
    theme: {
      components: t
    }
  });
}
export {
  d as useDefaultProps
};

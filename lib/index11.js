import * as e from "react";
import { j as a } from "./index3.js";
import t from "./index46.js";
function s(n, r) {
  function o(m, i) {
    return /* @__PURE__ */ a.jsx(t, {
      "data-testid": `${r}Icon`,
      ref: i,
      ...m,
      children: n
    });
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${r}Icon`), o.muiName = t.muiName, /* @__PURE__ */ e.memo(/* @__PURE__ */ e.forwardRef(o));
}
export {
  s as default
};

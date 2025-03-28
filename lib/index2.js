import { j as r } from "./index3.js";
import i from "./index4.js";
import m from "./index5.js";
import s from "./index6.js";
const e = {
  alert: /* @__PURE__ */ r.jsx(i, {}),
  info: /* @__PURE__ */ r.jsx(m, {})
}, a = ({ variant: o = "alert", ref: t, ...n }) => /* @__PURE__ */ r.jsx(s, { ref: t, variant: o, ...n, icon: e[o] });
export {
  a as Alert
};

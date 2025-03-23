import { j as r } from "./index3.js";
import { Info as i, Warning as s } from "@mui/icons-material";
import e from "./index4.js";
const m = {
  alert: /* @__PURE__ */ r.jsx(s, {}),
  info: /* @__PURE__ */ r.jsx(i, {})
}, p = ({ variant: o = "alert", ref: t, ...n }) => /* @__PURE__ */ r.jsx(
  e,
  {
    ref: t,
    variant: o,
    ...n,
    icon: m[o]
  }
);
export {
  p as Alert
};

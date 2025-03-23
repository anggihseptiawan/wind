import { j as r } from "../../_virtual/jsx-runtime.js";
import { Info as i, Warning as s } from "@mui/icons-material";
import e from "../../node_modules/@mui/material/Alert/Alert.js";
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

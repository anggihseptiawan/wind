import * as o from "react";
import u from "./index101.js";
function f(...e) {
  return o.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    e.forEach((t) => {
      u(t, r);
    });
  }, e);
}
export {
  f as default
};

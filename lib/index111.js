import * as n from "react";
const r = {};
function u(t, f) {
  const e = n.useRef(r);
  return e.current === r && (e.current = t(f)), e;
}
export {
  u as default
};

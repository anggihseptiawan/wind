import { r as u } from "./index105.js";
function a(e, r = "") {
  return e.displayName || e.name || r;
}
function i(e, r, t) {
  const f = a(r);
  return e.displayName || (f !== "" ? `${t}(${f})` : t);
}
function n(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return a(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case u.ForwardRef:
          return i(e, e.render, "ForwardRef");
        case u.Memo:
          return i(e, e.type, "memo");
        default:
          return;
      }
  }
}
export {
  n as default
};

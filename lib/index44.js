import a from "./index102.js";
function f(t, n, e) {
  return t === void 0 || a(t) ? n : {
    ...n,
    ownerState: {
      ...n.ownerState,
      ...e
    }
  };
}
export {
  f as default
};

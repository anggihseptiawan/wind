import f from "./index89.js";
function o(e, r) {
  return r ? f(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
export {
  o as default
};

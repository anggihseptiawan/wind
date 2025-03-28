import a from "./index85.js";
const l = {
  theme: void 0
};
function h(u) {
  let m, n;
  return function(t) {
    let e = m;
    return (e === void 0 || t.theme !== n) && (l.theme = t.theme, e = a(u(l)), m = e, n = t.theme), e;
  };
}
export {
  h as default
};

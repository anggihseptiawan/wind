import f from "./index74.js";
import g from "./index77.js";
import h from "./index75.js";
import x from "./index84.js";
import b from "./index85.js";
import d from "./index107.js";
import p from "./index82.js";
import y from "./index88.js";
function Q(r = {}, ...s) {
  const {
    breakpoints: i = {},
    palette: a = {},
    spacing: m,
    shape: c = {},
    ...t
  } = r, u = f(i), l = h(m);
  let e = p({
    breakpoints: u,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...a
    },
    spacing: l,
    shape: {
      ...g,
      ...c
    }
  }, t);
  return e = y(e), e.applyStyles = d, e = s.reduce((o, n) => p(o, n), e), e.unstable_sxConfig = {
    ...b,
    ...t == null ? void 0 : t.unstable_sxConfig
  }, e.unstable_sx = function(n) {
    return x({
      sx: n,
      theme: this
    });
  }, e;
}
export {
  Q as default
};

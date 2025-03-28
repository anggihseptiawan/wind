import x from "./index151.js";
import b from "./index116.js";
import v from "./index152.js";
import I from "./index153.js";
import E from "./index154.js";
import N from "./index155.js";
import { stringifyTheme as O } from "./index149.js";
import S from "./index59.js";
import T from "./index125.js";
import c from "./index89.js";
import k from "./index91.js";
import C from "./index90.js";
import M from "./index33.js";
function B(i = {}, ...f) {
  const {
    breakpoints: V,
    mixins: h = {},
    spacing: _,
    palette: d = {},
    transitions: y = {},
    typography: g = {},
    shape: w,
    ...o
  } = i;
  if (i.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  i.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : S(20));
  const p = b(d), m = T(i);
  let e = c(m, {
    mixins: x(m.breakpoints, h),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: I.slice(),
    typography: v(p, g),
    transitions: E(y),
    zIndex: {
      ...N
    }
  });
  if (e = c(e, o), e = f.reduce((n, r) => c(n, r), e), process.env.NODE_ENV !== "production") {
    const n = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], r = (t, a) => {
      let s;
      for (s in t) {
        const u = t[s];
        if (n.includes(s) && Object.keys(u).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const l = M("", s);
            console.error([`MUI: The \`${a}\` component increases the CSS specificity of the \`${s}\` internal state.`, "You can not override it like this: ", JSON.stringify(t, null, 2), "", `Instead, you need to use the '&.${l}' syntax:`, JSON.stringify({
              root: {
                [`&.${l}`]: u
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          t[s] = {};
        }
      }
    };
    Object.keys(e.components).forEach((t) => {
      const a = e.components[t].styleOverrides;
      a && t.startsWith("Mui") && r(a, t);
    });
  }
  return e.unstable_sxConfig = {
    ...k,
    ...o == null ? void 0 : o.unstable_sxConfig
  }, e.unstable_sx = function(r) {
    return C({
      sx: r,
      theme: this
    });
  }, e.toRuntimeSource = O, e;
}
export {
  B as default
};

import { isPlainObject as f } from "./index94.js";
function m(e) {
  return f(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function p(e = {}) {
  const s = {
    ...e
  };
  function a(t) {
    const o = Object.entries(t);
    for (let r = 0; r < o.length; r++) {
      const [i, n] = o[r];
      !m(n) || i.startsWith("unstable_") ? delete t[i] : f(n) && (t[i] = {
        ...n
      }, a(t[i]));
    }
  }
  return a(s), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(s, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
export {
  p as stringifyTheme
};

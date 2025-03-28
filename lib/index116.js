import l from "./index138.js";
import I from "./index139.js";
import s from "./index140.js";
import c from "./index141.js";
import f from "./index142.js";
import d from "./index143.js";
import g from "./index144.js";
import m from "./index145.js";
import P from "./index89.js";
import { getContrastRatio as k, lighten as S, darken as U } from "./index31.js";
import v from "./index59.js";
function D() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: l.white,
      default: l.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const V = D();
function E() {
  return {
    text: {
      primary: l.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: l.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const w = E();
function O(r, e, u, i) {
  const h = i.light || i, y = i.dark || i * 1.5;
  r[e] || (r.hasOwnProperty(u) ? r[e] = r[u] : e === "light" ? r.light = S(r.main, h) : e === "dark" && (r.dark = U(r.main, y)));
}
function _(r = "light") {
  return r === "dark" ? {
    main: d[200],
    light: d[50],
    dark: d[400]
  } : {
    main: d[700],
    light: d[400],
    dark: d[800]
  };
}
function B(r = "light") {
  return r === "dark" ? {
    main: s[200],
    light: s[50],
    dark: s[400]
  } : {
    main: s[500],
    light: s[300],
    dark: s[700]
  };
}
function L(r = "light") {
  return r === "dark" ? {
    main: c[500],
    light: c[300],
    dark: c[700]
  } : {
    main: c[700],
    light: c[400],
    dark: c[800]
  };
}
function R(r = "light") {
  return r === "dark" ? {
    main: g[400],
    light: g[300],
    dark: g[700]
  } : {
    main: g[700],
    light: g[500],
    dark: g[900]
  };
}
function W(r = "light") {
  return r === "dark" ? {
    main: m[400],
    light: m[300],
    dark: m[700]
  } : {
    main: m[800],
    light: m[500],
    dark: m[900]
  };
}
function j(r = "light") {
  return r === "dark" ? {
    main: f[400],
    light: f[300],
    dark: f[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: f[500],
    dark: f[900]
  };
}
function tr(r) {
  const {
    mode: e = "light",
    contrastThreshold: u = 3,
    tonalOffset: i = 0.2,
    ...h
  } = r, y = r.primary || _(e), T = r.secondary || B(e), $ = r.error || L(e), x = r.info || R(e), N = r.success || W(e), C = r.warning || j(e);
  function b(t) {
    const a = k(t, w.text.primary) >= u ? w.text.primary : V.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const n = k(t, a);
      n < 3 && console.error([`MUI: The contrast ratio of ${n}:1 for ${a} on ${t}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return a;
  }
  const o = ({
    color: t,
    name: a,
    mainShade: n = 500,
    lightShade: M = 300,
    darkShade: A = 700
  }) => {
    if (t = {
      ...t
    }, !t.main && t[n] && (t.main = t[n]), !t.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${a ? ` (${a})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${n}\` property.` : v(11, a ? ` (${a})` : "", n));
    if (typeof t.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${a ? ` (${a})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(t.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : v(12, a ? ` (${a})` : "", JSON.stringify(t.main)));
    return O(t, "light", M, i), O(t, "dark", A, i), t.contrastText || (t.contrastText = b(t.main)), t;
  };
  let p;
  return e === "light" ? p = D() : e === "dark" && (p = E()), process.env.NODE_ENV !== "production" && (p || console.error(`MUI: The palette mode \`${e}\` is not supported.`)), P({
    // A collection of common colors.
    common: {
      ...l
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: e,
    // The colors used to represent primary interface elements for a user.
    primary: o({
      color: y,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: o({
      color: T,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: o({
      color: $,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: o({
      color: C,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: o({
      color: x,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: o({
      color: N,
      name: "success"
    }),
    // The grey colors.
    grey: I,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: u,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: b,
    // Generate a rich color object.
    augmentColor: o,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: i,
    // The light and dark mode object.
    ...p
  }, h);
}
export {
  w as dark,
  tr as default,
  V as light
};

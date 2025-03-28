import R from "./index89.js";
function T(n) {
  return Math.round(n * 1e5) / 1e5;
}
const h = {
  textTransform: "uppercase"
}, m = '"Roboto", "Helvetica", "Arial", sans-serif';
function v(n, i) {
  const {
    fontFamily: r = m,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: f = 300,
    fontWeightRegular: t = 400,
    fontWeightMedium: o = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: b,
    pxToRem: d,
    ...g
  } = typeof i == "function" ? i(n) : i;
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const S = a / 14, c = d || ((s) => `${s / l * S}rem`), e = (s, u, F, x, z) => ({
    fontFamily: r,
    fontWeight: s,
    fontSize: c(u),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: F,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === m ? {
      letterSpacing: `${T(x / u)}em`
    } : {},
    ...z,
    ...b
  }), y = {
    h1: e(f, 96, 1.167, -1.5),
    h2: e(f, 60, 1.2, -0.5),
    h3: e(t, 48, 1.167, 0),
    h4: e(t, 34, 1.235, 0.25),
    h5: e(t, 24, 1.334, 0),
    h6: e(o, 20, 1.6, 0.15),
    subtitle1: e(t, 16, 1.75, 0.15),
    subtitle2: e(o, 14, 1.57, 0.1),
    body1: e(t, 16, 1.5, 0.15),
    body2: e(t, 14, 1.43, 0.15),
    button: e(o, 14, 1.75, 0.4, h),
    caption: e(t, 12, 1.66, 0.4),
    overline: e(t, 12, 2.66, 1, h),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return R({
    htmlFontSize: l,
    pxToRem: c,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: f,
    fontWeightRegular: t,
    fontWeightMedium: o,
    fontWeightBold: p,
    ...y
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
export {
  v as default
};

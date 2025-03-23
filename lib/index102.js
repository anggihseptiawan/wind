import R from "./index103.js";
import U, { getOverlays as W, getOpacity as j } from "./index136.js";
import z from "./index137.js";
import q from "./index138.js";
import { stringifyTheme as J } from "./index139.js";
import K from "./index57.js";
import Q from "./index140.js";
import { private_safeDarken as o, private_safeLighten as i, private_safeEmphasize as A, private_safeAlpha as w, private_safeColorChannel as b, hslToRgb as X } from "./index28.js";
import Y from "./index94.js";
import Z from "./index91.js";
import ee from "./index93.js";
import re from "./index88.js";
import { createGetColorSchemeSelector as te } from "./index113.js";
import ae from "./index75.js";
import ne from "./index74.js";
import { createUnarySpacing as oe } from "./index82.js";
function ie(n, a) {
  a.forEach((g) => {
    n[g] || (n[g] = {});
  });
}
function r(n, a, g) {
  !n[a] && g && (n[a] = g);
}
function k(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : X(n);
}
function p(n, a) {
  `${a}Channel` in n || (n[`${a}Channel`] = b(k(n[a]), `MUI: Can't create \`palette.${a}Channel\` because \`palette.${a}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${a}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function le(n) {
  return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px";
}
const d = (n) => {
  try {
    return n();
  } catch {
  }
}, se = (n = "mui") => Z(n);
function v(n, a, g, S) {
  if (!a)
    return;
  a = a === !0 ? {} : a;
  const u = S === "dark" ? "dark" : "light";
  if (!g) {
    n[S] = U({
      ...a,
      palette: {
        mode: u,
        ...a == null ? void 0 : a.palette
      }
    });
    return;
  }
  const {
    palette: y,
    ...B
  } = R({
    ...g,
    palette: {
      mode: u,
      ...a == null ? void 0 : a.palette
    }
  });
  return n[S] = {
    ...a,
    palette: y,
    opacity: {
      ...j(u),
      ...a == null ? void 0 : a.opacity
    },
    overlays: (a == null ? void 0 : a.overlays) || W(u)
  }, B;
}
function Te(n = {}, ...a) {
  const {
    colorSchemes: g = {
      light: !0
    },
    defaultColorScheme: S,
    disableCssColorScheme: u = !1,
    cssVarPrefix: y = "mui",
    shouldSkipGeneratingVar: B = z,
    colorSchemeSelector: F = g.light && g.dark ? "media" : void 0,
    rootSelector: P = ":root",
    ...C
  } = n, D = Object.keys(g)[0], f = S || (g.light && D !== "light" ? "light" : D), I = se(y), {
    [f]: $,
    light: V,
    dark: L,
    ...E
  } = g, h = {
    ...E
  };
  let T = $;
  if ((f === "dark" && !("dark" in g) || f === "light" && !("light" in g)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : K(21, f));
  const x = v(h, T, C, f);
  V && !h.light && v(h, V, void 0, "light"), L && !h.dark && v(h, L, void 0, "dark");
  let l = {
    defaultColorScheme: f,
    ...x,
    cssVarPrefix: y,
    colorSchemeSelector: F,
    rootSelector: P,
    getCssVar: I,
    colorSchemes: h,
    font: {
      ...Q(x.typography),
      ...x.font
    },
    spacing: le(C.spacing)
  };
  Object.keys(l.colorSchemes).forEach((m) => {
    const e = l.colorSchemes[m].palette, t = (s) => {
      const c = s.split("-"), M = c[1], N = c[2];
      return I(s, e[M][N]);
    };
    if (e.mode === "light" && (r(e.common, "background", "#fff"), r(e.common, "onBackground", "#000")), e.mode === "dark" && (r(e.common, "background", "#000"), r(e.common, "onBackground", "#fff")), ie(e, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), e.mode === "light") {
      r(e.Alert, "errorColor", o(e.error.light, 0.6)), r(e.Alert, "infoColor", o(e.info.light, 0.6)), r(e.Alert, "successColor", o(e.success.light, 0.6)), r(e.Alert, "warningColor", o(e.warning.light, 0.6)), r(e.Alert, "errorFilledBg", t("palette-error-main")), r(e.Alert, "infoFilledBg", t("palette-info-main")), r(e.Alert, "successFilledBg", t("palette-success-main")), r(e.Alert, "warningFilledBg", t("palette-warning-main")), r(e.Alert, "errorFilledColor", d(() => e.getContrastText(e.error.main))), r(e.Alert, "infoFilledColor", d(() => e.getContrastText(e.info.main))), r(e.Alert, "successFilledColor", d(() => e.getContrastText(e.success.main))), r(e.Alert, "warningFilledColor", d(() => e.getContrastText(e.warning.main))), r(e.Alert, "errorStandardBg", i(e.error.light, 0.9)), r(e.Alert, "infoStandardBg", i(e.info.light, 0.9)), r(e.Alert, "successStandardBg", i(e.success.light, 0.9)), r(e.Alert, "warningStandardBg", i(e.warning.light, 0.9)), r(e.Alert, "errorIconColor", t("palette-error-main")), r(e.Alert, "infoIconColor", t("palette-info-main")), r(e.Alert, "successIconColor", t("palette-success-main")), r(e.Alert, "warningIconColor", t("palette-warning-main")), r(e.AppBar, "defaultBg", t("palette-grey-100")), r(e.Avatar, "defaultBg", t("palette-grey-400")), r(e.Button, "inheritContainedBg", t("palette-grey-300")), r(e.Button, "inheritContainedHoverBg", t("palette-grey-A100")), r(e.Chip, "defaultBorder", t("palette-grey-400")), r(e.Chip, "defaultAvatarColor", t("palette-grey-700")), r(e.Chip, "defaultIconColor", t("palette-grey-700")), r(e.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), r(e.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), r(e.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), r(e.LinearProgress, "primaryBg", i(e.primary.main, 0.62)), r(e.LinearProgress, "secondaryBg", i(e.secondary.main, 0.62)), r(e.LinearProgress, "errorBg", i(e.error.main, 0.62)), r(e.LinearProgress, "infoBg", i(e.info.main, 0.62)), r(e.LinearProgress, "successBg", i(e.success.main, 0.62)), r(e.LinearProgress, "warningBg", i(e.warning.main, 0.62)), r(e.Skeleton, "bg", `rgba(${t("palette-text-primaryChannel")} / 0.11)`), r(e.Slider, "primaryTrack", i(e.primary.main, 0.62)), r(e.Slider, "secondaryTrack", i(e.secondary.main, 0.62)), r(e.Slider, "errorTrack", i(e.error.main, 0.62)), r(e.Slider, "infoTrack", i(e.info.main, 0.62)), r(e.Slider, "successTrack", i(e.success.main, 0.62)), r(e.Slider, "warningTrack", i(e.warning.main, 0.62));
      const s = A(e.background.default, 0.8);
      r(e.SnackbarContent, "bg", s), r(e.SnackbarContent, "color", d(() => e.getContrastText(s))), r(e.SpeedDialAction, "fabHoverBg", A(e.background.paper, 0.15)), r(e.StepConnector, "border", t("palette-grey-400")), r(e.StepContent, "border", t("palette-grey-400")), r(e.Switch, "defaultColor", t("palette-common-white")), r(e.Switch, "defaultDisabledColor", t("palette-grey-100")), r(e.Switch, "primaryDisabledColor", i(e.primary.main, 0.62)), r(e.Switch, "secondaryDisabledColor", i(e.secondary.main, 0.62)), r(e.Switch, "errorDisabledColor", i(e.error.main, 0.62)), r(e.Switch, "infoDisabledColor", i(e.info.main, 0.62)), r(e.Switch, "successDisabledColor", i(e.success.main, 0.62)), r(e.Switch, "warningDisabledColor", i(e.warning.main, 0.62)), r(e.TableCell, "border", i(w(e.divider, 1), 0.88)), r(e.Tooltip, "bg", w(e.grey[700], 0.92));
    }
    if (e.mode === "dark") {
      r(e.Alert, "errorColor", i(e.error.light, 0.6)), r(e.Alert, "infoColor", i(e.info.light, 0.6)), r(e.Alert, "successColor", i(e.success.light, 0.6)), r(e.Alert, "warningColor", i(e.warning.light, 0.6)), r(e.Alert, "errorFilledBg", t("palette-error-dark")), r(e.Alert, "infoFilledBg", t("palette-info-dark")), r(e.Alert, "successFilledBg", t("palette-success-dark")), r(e.Alert, "warningFilledBg", t("palette-warning-dark")), r(e.Alert, "errorFilledColor", d(() => e.getContrastText(e.error.dark))), r(e.Alert, "infoFilledColor", d(() => e.getContrastText(e.info.dark))), r(e.Alert, "successFilledColor", d(() => e.getContrastText(e.success.dark))), r(e.Alert, "warningFilledColor", d(() => e.getContrastText(e.warning.dark))), r(e.Alert, "errorStandardBg", o(e.error.light, 0.9)), r(e.Alert, "infoStandardBg", o(e.info.light, 0.9)), r(e.Alert, "successStandardBg", o(e.success.light, 0.9)), r(e.Alert, "warningStandardBg", o(e.warning.light, 0.9)), r(e.Alert, "errorIconColor", t("palette-error-main")), r(e.Alert, "infoIconColor", t("palette-info-main")), r(e.Alert, "successIconColor", t("palette-success-main")), r(e.Alert, "warningIconColor", t("palette-warning-main")), r(e.AppBar, "defaultBg", t("palette-grey-900")), r(e.AppBar, "darkBg", t("palette-background-paper")), r(e.AppBar, "darkColor", t("palette-text-primary")), r(e.Avatar, "defaultBg", t("palette-grey-600")), r(e.Button, "inheritContainedBg", t("palette-grey-800")), r(e.Button, "inheritContainedHoverBg", t("palette-grey-700")), r(e.Chip, "defaultBorder", t("palette-grey-700")), r(e.Chip, "defaultAvatarColor", t("palette-grey-300")), r(e.Chip, "defaultIconColor", t("palette-grey-300")), r(e.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), r(e.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), r(e.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), r(e.LinearProgress, "primaryBg", o(e.primary.main, 0.5)), r(e.LinearProgress, "secondaryBg", o(e.secondary.main, 0.5)), r(e.LinearProgress, "errorBg", o(e.error.main, 0.5)), r(e.LinearProgress, "infoBg", o(e.info.main, 0.5)), r(e.LinearProgress, "successBg", o(e.success.main, 0.5)), r(e.LinearProgress, "warningBg", o(e.warning.main, 0.5)), r(e.Skeleton, "bg", `rgba(${t("palette-text-primaryChannel")} / 0.13)`), r(e.Slider, "primaryTrack", o(e.primary.main, 0.5)), r(e.Slider, "secondaryTrack", o(e.secondary.main, 0.5)), r(e.Slider, "errorTrack", o(e.error.main, 0.5)), r(e.Slider, "infoTrack", o(e.info.main, 0.5)), r(e.Slider, "successTrack", o(e.success.main, 0.5)), r(e.Slider, "warningTrack", o(e.warning.main, 0.5));
      const s = A(e.background.default, 0.98);
      r(e.SnackbarContent, "bg", s), r(e.SnackbarContent, "color", d(() => e.getContrastText(s))), r(e.SpeedDialAction, "fabHoverBg", A(e.background.paper, 0.15)), r(e.StepConnector, "border", t("palette-grey-600")), r(e.StepContent, "border", t("palette-grey-600")), r(e.Switch, "defaultColor", t("palette-grey-300")), r(e.Switch, "defaultDisabledColor", t("palette-grey-600")), r(e.Switch, "primaryDisabledColor", o(e.primary.main, 0.55)), r(e.Switch, "secondaryDisabledColor", o(e.secondary.main, 0.55)), r(e.Switch, "errorDisabledColor", o(e.error.main, 0.55)), r(e.Switch, "infoDisabledColor", o(e.info.main, 0.55)), r(e.Switch, "successDisabledColor", o(e.success.main, 0.55)), r(e.Switch, "warningDisabledColor", o(e.warning.main, 0.55)), r(e.TableCell, "border", o(w(e.divider, 1), 0.68)), r(e.Tooltip, "bg", w(e.grey[700], 0.92));
    }
    p(e.background, "default"), p(e.background, "paper"), p(e.common, "background"), p(e.common, "onBackground"), p(e, "divider"), Object.keys(e).forEach((s) => {
      const c = e[s];
      s !== "tonalOffset" && c && typeof c == "object" && (c.main && r(e[s], "mainChannel", b(k(c.main))), c.light && r(e[s], "lightChannel", b(k(c.light))), c.dark && r(e[s], "darkChannel", b(k(c.dark))), c.contrastText && r(e[s], "contrastTextChannel", b(k(c.contrastText))), s === "text" && (p(e[s], "primary"), p(e[s], "secondary")), s === "action" && (c.active && p(e[s], "active"), c.selected && p(e[s], "selected")));
    });
  }), l = a.reduce((m, e) => Y(m, e), l);
  const G = {
    prefix: y,
    disableCssColorScheme: u,
    shouldSkipGeneratingVar: B,
    getSelector: q(l)
  }, {
    vars: _,
    generateThemeVars: O,
    generateStyleSheets: H
  } = ee(l, G);
  return l.vars = _, Object.entries(l.colorSchemes[l.defaultColorScheme]).forEach(([m, e]) => {
    l[m] = e;
  }), l.generateThemeVars = O, l.generateStyleSheets = H, l.generateSpacing = function() {
    return re(C.spacing, oe(this));
  }, l.getColorSchemeSelector = te(F), l.spacing = l.generateSpacing(), l.shouldSkipGeneratingVar = B, l.unstable_sxConfig = {
    ...ae,
    ...C == null ? void 0 : C.unstable_sxConfig
  }, l.unstable_sx = function(e) {
    return ne({
      sx: e,
      theme: this
    });
  }, l.toRuntimeSource = J, l;
}
export {
  se as createGetCssVar,
  Te as default
};

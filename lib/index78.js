import s from "./index116.js";
import p from "./index117.js";
import d from "./index118.js";
function u(a, o, e) {
  a.colorSchemes && e && (a.colorSchemes[o] = {
    ...e !== !0 && e,
    palette: s({
      ...e === !0 ? {} : e.palette,
      mode: o
    })
    // cast type to skip module augmentation test
  });
}
function C(a = {}, ...o) {
  const {
    palette: e,
    cssVariables: f = !1,
    colorSchemes: i = e ? void 0 : {
      light: !0
    },
    defaultColorScheme: m = e == null ? void 0 : e.mode,
    ...n
  } = a, r = m || "light", h = i == null ? void 0 : i[r], t = {
    ...i,
    ...e ? {
      [r]: {
        ...typeof h != "boolean" && h,
        palette: e
      }
    } : void 0
  };
  if (f === !1) {
    if (!("colorSchemes" in a))
      return d(a, ...o);
    let c = e;
    "palette" in a || t[r] && (t[r] !== !0 ? c = t[r].palette : r === "dark" && (c = {
      mode: "dark"
    }));
    const l = d({
      ...a,
      palette: c
    }, ...o);
    return l.defaultColorScheme = r, l.colorSchemes = t, l.palette.mode === "light" && (l.colorSchemes.light = {
      ...t.light !== !0 && t.light,
      palette: l.palette
    }, u(l, "dark", t.dark)), l.palette.mode === "dark" && (l.colorSchemes.dark = {
      ...t.dark !== !0 && t.dark,
      palette: l.palette
    }, u(l, "light", t.light)), l;
  }
  return !e && !("light" in t) && r === "light" && (t.light = !0), p({
    ...n,
    colorSchemes: t,
    defaultColorScheme: r,
    ...typeof f != "boolean" && f
  }, ...o);
}
export {
  C as default
};

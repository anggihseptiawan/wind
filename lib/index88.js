import p from "./index87.js";
import C from "./index89.js";
function z(f, h = {}) {
  const {
    getSelector: d = x,
    disableCssColorScheme: g,
    colorSchemeSelector: o
  } = h, {
    colorSchemes: u = {},
    components: G,
    defaultColorScheme: v = "light",
    ...y
  } = f, {
    vars: E,
    css: V,
    varsWithDefaults: T
  } = p(y, h);
  let l = T;
  const m = {}, {
    [v]: b,
    ...$
  } = u;
  if (Object.entries($ || {}).forEach(([e, s]) => {
    const {
      vars: t,
      css: c,
      varsWithDefaults: n
    } = p(s, h);
    l = C(l, n), m[e] = {
      css: c,
      vars: t
    };
  }), b) {
    const {
      css: e,
      vars: s,
      varsWithDefaults: t
    } = p(b, h);
    l = C(l, t), m[v] = {
      css: e,
      vars: s
    };
  }
  function x(e, s) {
    var c, n;
    let t = o;
    if (o === "class" && (t = ".%s"), o === "data" && (t = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (t = `[${o}="%s"]`), e) {
      if (t === "media")
        return f.defaultColorScheme === e ? ":root" : {
          [`@media (prefers-color-scheme: ${((n = (c = u[e]) == null ? void 0 : c.palette) == null ? void 0 : n.mode) || e})`]: {
            ":root": s
          }
        };
      if (t)
        return f.defaultColorScheme === e ? `:root, ${t.replace("%s", String(e))}` : t.replace("%s", String(e));
    }
    return ":root";
  }
  return {
    vars: l,
    generateThemeVars: () => {
      let e = {
        ...E
      };
      return Object.entries(m).forEach(([, {
        vars: s
      }]) => {
        e = C(e, s);
      }), e;
    },
    generateStyleSheets: () => {
      var S, W;
      const e = [], s = f.defaultColorScheme || "light";
      function t(r, a) {
        Object.keys(a).length && e.push(typeof r == "string" ? {
          [r]: {
            ...a
          }
        } : r);
      }
      t(d(void 0, {
        ...V
      }), V);
      const {
        [s]: c,
        ...n
      } = m;
      if (c) {
        const {
          css: r
        } = c, a = (W = (S = u[s]) == null ? void 0 : S.palette) == null ? void 0 : W.mode, i = !g && a ? {
          colorScheme: a,
          ...r
        } : {
          ...r
        };
        t(d(s, {
          ...i
        }), i);
      }
      return Object.entries(n).forEach(([r, {
        css: a
      }]) => {
        var D, O;
        const i = (O = (D = u[r]) == null ? void 0 : D.palette) == null ? void 0 : O.mode, j = !g && i ? {
          colorScheme: i,
          ...a
        } : {
          ...a
        };
        t(d(r, {
          ...j
        }), j);
      }), e;
    }
  };
}
export {
  z as default
};

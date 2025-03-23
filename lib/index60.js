import H, { internal_mutateStyles as B } from "./index72.js";
import I from "./index78.js";
import K from "./index106.js";
import k from "./index84.js";
import M from "./index25.js";
import q from "./index108.js";
import { isPlainObject as G } from "./index82.js";
const J = K();
function R(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Q(e) {
  return e ? (r, t) => t[e] : null;
}
function U(e, r, t) {
  e.theme = Y(e.theme) ? t : e.theme[r] || e.theme;
}
function O(e, r) {
  const t = typeof r == "function" ? r(e) : r;
  if (Array.isArray(t))
    return t.flatMap((o) => O(e, o));
  if (Array.isArray(t == null ? void 0 : t.variants)) {
    let o;
    if (t.isProcessed)
      o = t.style;
    else {
      const {
        variants: p,
        ...c
      } = t;
      o = c;
    }
    return $(e, t.variants, [o]);
  }
  return t != null && t.isProcessed ? t.style : t;
}
function $(e, r, t = []) {
  var p;
  let o;
  e: for (let c = 0; c < r.length; c += 1) {
    const u = r[c];
    if (typeof u.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !u.props(o))
        continue;
    } else
      for (const n in u.props)
        if (e[n] !== u.props[n] && ((p = e.ownerState) == null ? void 0 : p[n]) !== u.props[n])
          continue e;
    typeof u.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), t.push(u.style(o))) : t.push(u.style);
  }
  return t;
}
function ae(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = J,
    rootShouldForwardProp: o = R,
    slotShouldForwardProp: p = R
  } = e;
  function c(n) {
    U(n, r, t);
  }
  return (n, g = {}) => {
    B(n, (i) => i.filter((s) => s !== k));
    const {
      name: h,
      slot: l,
      skipVariantsResolver: T,
      skipSx: C,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: N = Q(b(l)),
      ...D
    } = g, E = T !== void 0 ? T : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), j = C || !1;
    let v = R;
    l === "Root" || l === "root" ? v = o : l ? v = p : Z(n) && (v = void 0);
    const x = H(n, {
      shouldForwardProp: v,
      label: X(h, l),
      ...D
    }), L = (i) => {
      if (typeof i == "function" && i.__emotion_real !== i)
        return function(y) {
          return O(y, i);
        };
      if (G(i)) {
        const s = I(i);
        return s.variants ? function(m) {
          return O(m, s);
        } : s.style;
      }
      return i;
    }, F = (...i) => {
      const s = [], y = i.map(L), m = [];
      if (s.push(c), h && N && m.push(function(f) {
        var w, V;
        const a = (V = (w = f.theme.components) == null ? void 0 : w[h]) == null ? void 0 : V.styleOverrides;
        if (!a)
          return null;
        const S = {};
        for (const _ in a)
          S[_] = O(f, a[_]);
        return N(f, S);
      }), h && !E && m.push(function(f) {
        var S, w;
        const d = f.theme, a = (w = (S = d == null ? void 0 : d.components) == null ? void 0 : S[h]) == null ? void 0 : w.variants;
        return a ? $(f, a) : null;
      }), j || m.push(k), Array.isArray(y[0])) {
        const A = y.shift(), f = new Array(s.length).fill(""), d = new Array(m.length).fill("");
        let a;
        a = [...f, ...A, ...d], a.raw = [...f, ...A.raw, ...d], s.unshift(a);
      }
      const z = [...s, ...y, ...m], P = x(...z);
      return n.muiName && (P.muiName = n.muiName), process.env.NODE_ENV !== "production" && (P.displayName = W(h, l, n)), P;
    };
    return x.withConfig && (F.withConfig = x.withConfig), F;
  };
}
function W(e, r, t) {
  return e ? `${e}${M(r || "")}` : `Styled(${q(t)})`;
}
function X(e, r) {
  let t;
  return process.env.NODE_ENV !== "production" && e && (t = `${e}-${b(r || "Root")}`), t;
}
function Y(e) {
  for (const r in e)
    return !1;
  return !0;
}
function Z(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function b(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
export {
  ae as default,
  R as shouldForwardProp,
  J as systemDefaultTheme
};

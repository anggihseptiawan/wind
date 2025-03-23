import y from "./index37.js";
import T from "./index38.js";
import g from "./index39.js";
import h from "./index40.js";
function N(o, n) {
  const {
    className: i,
    elementType: m,
    ownerState: s,
    externalForwardedProps: a,
    internalForwardedProps: p,
    shouldForwardComponentProp: l = !1,
    ...u
  } = n, {
    component: d,
    slots: t = {
      [o]: void 0
    },
    slotProps: P = {
      [o]: void 0
    },
    ...w
  } = a, f = t[o] || m, e = y(P[o], s), {
    props: {
      component: c,
      ...S
    },
    internalRef: F
  } = T({
    className: i,
    ...u,
    externalForwardedProps: o === "root" ? w : void 0,
    externalSlotProps: e
  }), x = g(F, e == null ? void 0 : e.ref, n.ref), r = o === "root" ? c || d : c, C = h(f, {
    ...o === "root" && !d && !t[o] && p,
    ...o !== "root" && !t[o] && p,
    ...S,
    ...r && !l && {
      as: r
    },
    ...r && l && {
      component: r
    },
    ref: x
  }, s);
  return [f, C];
}
export {
  N as default
};

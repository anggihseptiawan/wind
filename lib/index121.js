var h = Object.defineProperty;
var l = (u, t, e) => t in u ? h(u, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : u[t] = e;
var n = (u, t, e) => l(u, typeof t != "symbol" ? t + "" : t, e);
import * as r from "react";
import c from "./index155.js";
class s {
  constructor() {
    n(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new s();
  }
  static use() {
    const t = c(s.create).current, [e, o] = r.useState(!1);
    return t.shouldMount = e, t.setShouldMount = o, r.useEffect(t.mountEffect, [e]), t;
  }
  mount() {
    return this.mounted || (this.mounted = d(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var e;
      return (e = this.ref.current) == null ? void 0 : e.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var e;
      return (e = this.ref.current) == null ? void 0 : e.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var e;
      return (e = this.ref.current) == null ? void 0 : e.pulsate(...t);
    });
  }
}
function m() {
  return s.use();
}
function d() {
  let u, t;
  const e = new Promise((o, i) => {
    u = o, t = i;
  });
  return e.resolve = u, e.reject = t, e;
}
export {
  s as LazyRipple,
  m as default
};

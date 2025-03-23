var n = Object.defineProperty;
var c = (e, t, r) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var u = (e, t, r) => c(e, typeof t != "symbol" ? t + "" : t, r);
import i from "./index155.js";
import l from "./index156.js";
class s {
  constructor() {
    u(this, "currentId", null);
    u(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    u(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new s();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function d() {
  const e = i(s.create).current;
  return l(e.disposeEffect), e;
}
export {
  s as Timeout,
  d as default
};

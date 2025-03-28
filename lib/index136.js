import { __exports as e } from "./index156.js";
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R;
function d() {
  if (R) return e;
  R = 1;
  var l = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), C = Symbol.for("react.client.reference");
  function t(r) {
    if (typeof r == "object" && r !== null) {
      var m = r.$$typeof;
      switch (m) {
        case l:
          switch (r = r.type, r) {
            case n:
            case f:
            case o:
            case a:
            case E:
              return r;
            default:
              switch (r = r && r.$$typeof, r) {
                case i:
                case u:
                case _:
                case c:
                  return r;
                case s:
                  return r;
                default:
                  return m;
              }
          }
        case T:
          return m;
      }
    }
  }
  return e.ContextConsumer = s, e.ContextProvider = i, e.Element = l, e.ForwardRef = u, e.Fragment = n, e.Lazy = _, e.Memo = c, e.Portal = T, e.Profiler = f, e.StrictMode = o, e.Suspense = a, e.SuspenseList = E, e.isContextConsumer = function(r) {
    return t(r) === s;
  }, e.isContextProvider = function(r) {
    return t(r) === i;
  }, e.isElement = function(r) {
    return typeof r == "object" && r !== null && r.$$typeof === l;
  }, e.isForwardRef = function(r) {
    return t(r) === u;
  }, e.isFragment = function(r) {
    return t(r) === n;
  }, e.isLazy = function(r) {
    return t(r) === _;
  }, e.isMemo = function(r) {
    return t(r) === c;
  }, e.isPortal = function(r) {
    return t(r) === T;
  }, e.isProfiler = function(r) {
    return t(r) === f;
  }, e.isStrictMode = function(r) {
    return t(r) === o;
  }, e.isSuspense = function(r) {
    return t(r) === a;
  }, e.isSuspenseList = function(r) {
    return t(r) === E;
  }, e.isValidElementType = function(r) {
    return typeof r == "string" || typeof r == "function" || r === n || r === f || r === o || r === a || r === E || r === S || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === c || r.$$typeof === i || r.$$typeof === s || r.$$typeof === u || r.$$typeof === C || r.getModuleId !== void 0);
  }, e.typeOf = t, e;
}
export {
  d as __require
};

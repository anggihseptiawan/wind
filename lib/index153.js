import { __exports as e } from "./index158.js";
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R;
function d() {
  return R ? e : (R = 1, process.env.NODE_ENV !== "production" && function() {
    function n(r) {
      if (typeof r == "object" && r !== null) {
        var m = r.$$typeof;
        switch (m) {
          case _:
            switch (r = r.type, r) {
              case t:
              case f:
              case o:
              case a:
              case E:
                return r;
              default:
                switch (r = r && r.$$typeof, r) {
                  case i:
                  case u:
                  case l:
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
    var _ = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), C = Symbol.for("react.client.reference");
    e.ContextConsumer = s, e.ContextProvider = i, e.Element = _, e.ForwardRef = u, e.Fragment = t, e.Lazy = l, e.Memo = c, e.Portal = T, e.Profiler = f, e.StrictMode = o, e.Suspense = a, e.SuspenseList = E, e.isContextConsumer = function(r) {
      return n(r) === s;
    }, e.isContextProvider = function(r) {
      return n(r) === i;
    }, e.isElement = function(r) {
      return typeof r == "object" && r !== null && r.$$typeof === _;
    }, e.isForwardRef = function(r) {
      return n(r) === u;
    }, e.isFragment = function(r) {
      return n(r) === t;
    }, e.isLazy = function(r) {
      return n(r) === l;
    }, e.isMemo = function(r) {
      return n(r) === c;
    }, e.isPortal = function(r) {
      return n(r) === T;
    }, e.isProfiler = function(r) {
      return n(r) === f;
    }, e.isStrictMode = function(r) {
      return n(r) === o;
    }, e.isSuspense = function(r) {
      return n(r) === a;
    }, e.isSuspenseList = function(r) {
      return n(r) === E;
    }, e.isValidElementType = function(r) {
      return typeof r == "string" || typeof r == "function" || r === t || r === f || r === o || r === a || r === E || r === S || typeof r == "object" && r !== null && (r.$$typeof === l || r.$$typeof === c || r.$$typeof === i || r.$$typeof === s || r.$$typeof === u || r.$$typeof === C || r.getModuleId !== void 0);
    }, e.typeOf = n;
  }(), e);
}
export {
  d as __require
};

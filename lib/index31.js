import { __module as r } from "./index32.js";
import { __require as s } from "./index33.js";
import { __require as t } from "./index34.js";
import { __require as p } from "./index35.js";
var e;
function q() {
  if (e) return r.exports;
  if (e = 1, process.env.NODE_ENV !== "production") {
    var o = s(), i = !0;
    r.exports = /* @__PURE__ */ t()(o.isElement, i);
  } else
    r.exports = /* @__PURE__ */ p()();
  return r.exports;
}
export {
  q as __require
};

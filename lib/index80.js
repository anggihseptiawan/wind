import w from "./index119.js";
import x from "./index120.js";
import A from "./index121.js";
var _ = /[A-Z]|^ms/g, C = /_EMO_([^_]+?)_([^]*?)_EMO_/g, p = function(a) {
  return a.charCodeAt(1) === 45;
}, h = function(a) {
  return a != null && typeof a != "boolean";
}, m = /* @__PURE__ */ A(function(r) {
  return p(r) ? r : r.replace(_, "-$&").toLowerCase();
}), y = function(a, e) {
  switch (a) {
    case "animation":
    case "animationName":
      if (typeof e == "string")
        return e.replace(C, function(f, t, n) {
          return u = {
            name: t,
            styles: n,
            next: u
          }, t;
        });
  }
  return x[a] !== 1 && !p(a) && typeof e == "number" && e !== 0 ? e + "px" : e;
};
function l(r, a, e) {
  if (e == null)
    return "";
  var f = e;
  if (f.__emotion_styles !== void 0)
    return f;
  switch (typeof e) {
    case "boolean":
      return "";
    case "object": {
      var t = e;
      if (t.anim === 1)
        return u = {
          name: t.name,
          styles: t.styles,
          next: u
        }, t.name;
      var n = e;
      if (n.styles !== void 0) {
        var s = n.next;
        if (s !== void 0)
          for (; s !== void 0; )
            u = {
              name: s.name,
              styles: s.styles,
              next: u
            }, s = s.next;
        var i = n.styles + ";";
        return i;
      }
      return S(r, a, e);
    }
  }
  var o = e;
  return o;
}
function S(r, a, e) {
  var f = "";
  if (Array.isArray(e))
    for (var t = 0; t < e.length; t++)
      f += l(r, a, e[t]) + ";";
  else
    for (var n in e) {
      var s = e[n];
      if (typeof s != "object") {
        var i = s;
        h(i) && (f += m(n) + ":" + y(n, i) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && a == null)
        for (var o = 0; o < s.length; o++)
          h(s[o]) && (f += m(n) + ":" + y(n, s[o]) + ";");
      else {
        var c = l(r, a, s);
        switch (n) {
          case "animation":
          case "animationName": {
            f += m(n) + ":" + c + ";";
            break;
          }
          default:
            f += n + "{" + c + "}";
        }
      }
    }
  return f;
}
var d = /label:\s*([^\s;{]+)\s*(;|$)/g, u;
function O(r, a, e) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var f = !0, t = "";
  u = void 0;
  var n = r[0];
  if (n == null || n.raw === void 0)
    f = !1, t += l(e, a, n);
  else {
    var s = n;
    t += s[0];
  }
  for (var i = 1; i < r.length; i++)
    if (t += l(e, a, r[i]), f) {
      var o = n;
      t += o[i];
    }
  d.lastIndex = 0;
  for (var c = "", v; (v = d.exec(t)) !== null; )
    c += "-" + v[1];
  var b = w(t) + c;
  return {
    name: b,
    styles: t,
    next: u
  };
}
export {
  O as serializeStyles
};

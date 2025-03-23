import { isValidElement as v, cloneElement as d, Children as s } from "react";
function h(i, e) {
  var t = function(a) {
    return e && v(a) ? e(a) : a;
  }, u = /* @__PURE__ */ Object.create(null);
  return i && s.map(i, function(r) {
    return r;
  }).forEach(function(r) {
    u[r.key] = t(r);
  }), u;
}
function m(i, e) {
  i = i || {}, e = e || {};
  function t(g) {
    return g in e ? e[g] : i[g];
  }
  var u = /* @__PURE__ */ Object.create(null), r = [];
  for (var a in i)
    a in e ? r.length && (u[a] = r, r = []) : r.push(a);
  var n, f = {};
  for (var l in e) {
    if (u[l])
      for (n = 0; n < u[l].length; n++) {
        var c = u[l][n];
        f[u[l][n]] = t(c);
      }
    f[l] = t(l);
  }
  for (n = 0; n < r.length; n++)
    f[r[n]] = t(r[n]);
  return f;
}
function o(i, e, t) {
  return t[e] != null ? t[e] : i.props[e];
}
function E(i, e) {
  return h(i.children, function(t) {
    return d(t, {
      onExited: e.bind(null, t),
      in: !0,
      appear: o(t, "appear", i),
      enter: o(t, "enter", i),
      exit: o(t, "exit", i)
    });
  });
}
function p(i, e, t) {
  var u = h(i.children), r = m(e, u);
  return Object.keys(r).forEach(function(a) {
    var n = r[a];
    if (v(n)) {
      var f = a in e, l = a in u, c = e[a], g = v(c) && !c.props.in;
      l && (!f || g) ? r[a] = d(n, {
        onExited: t.bind(null, n),
        in: !0,
        exit: o(n, "exit", i),
        enter: o(n, "enter", i)
      }) : !l && f && !g ? r[a] = d(n, {
        in: !1
      }) : l && f && v(c) && (r[a] = d(n, {
        onExited: t.bind(null, n),
        in: c.props.in,
        exit: o(n, "exit", i),
        enter: o(n, "enter", i)
      }));
    }
  }), r;
}
export {
  h as getChildMapping,
  E as getInitialChildMapping,
  p as getNextChildMapping,
  m as mergeChildMappings
};

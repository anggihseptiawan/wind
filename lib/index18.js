function n(e) {
  return typeof e.main == "string";
}
function a(e, t = []) {
  if (!n(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function f(e = []) {
  return ([, t]) => t && a(t, e);
}
export {
  f as default
};

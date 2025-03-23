function s(f, a, e = void 0) {
  const u = {};
  for (const r in f) {
    const l = f[r];
    let o = "", i = !0;
    for (let n = 0; n < l.length; n += 1) {
      const t = l[n];
      t && (o += (i === !0 ? "" : " ") + a(t), i = !1, e && e[t] && (o += " " + e[t]));
    }
    u[r] = o;
  }
  return u;
}
export {
  s as default
};

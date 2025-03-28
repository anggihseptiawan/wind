const x = (i) => {
  const t = Object.keys(i).map((r) => ({
    key: r,
    val: i[r]
  })) || [];
  return t.sort((r, o) => r.val - o.val), t.reduce((r, o) => ({
    ...r,
    [o.key]: o.val
  }), {});
};
function v(i) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: o = 5,
    ...f
  } = i, c = x(t), e = Object.keys(c);
  function a(n) {
    return `@media (min-width:${typeof t[n] == "number" ? t[n] : n}${r})`;
  }
  function l(n) {
    return `@media (max-width:${(typeof t[n] == "number" ? t[n] : n) - o / 100}${r})`;
  }
  function s(n, u) {
    const d = e.indexOf(u);
    return `@media (min-width:${typeof t[n] == "number" ? t[n] : n}${r}) and (max-width:${(d !== -1 && typeof t[e[d]] == "number" ? t[e[d]] : u) - o / 100}${r})`;
  }
  function m(n) {
    return e.indexOf(n) + 1 < e.length ? s(n, e[e.indexOf(n) + 1]) : a(n);
  }
  function p(n) {
    const u = e.indexOf(n);
    return u === 0 ? a(e[1]) : u === e.length - 1 ? l(e[u]) : s(n, e[e.indexOf(n) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: e,
    values: c,
    up: a,
    down: l,
    between: s,
    only: m,
    not: p,
    unit: r,
    ...f
  };
}
export {
  v as default
};

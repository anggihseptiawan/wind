const d = (o, e, s, c = []) => {
  let t = o;
  e.forEach((n, f) => {
    f === e.length - 1 ? Array.isArray(t) ? t[Number(n)] = s : t && typeof t == "object" && (t[n] = s) : t && typeof t == "object" && (t[n] || (t[n] = c.includes(n) ? [] : {}), t = t[n]);
  });
}, j = (o, e, s) => {
  function c(t, n = [], f = []) {
    Object.entries(t).forEach(([r, i]) => {
      (!s || s && !s([...n, r])) && i != null && (typeof i == "object" && Object.keys(i).length > 0 ? c(i, [...n, r], Array.isArray(i) ? [...f, r] : f) : e([...n, r], i, f));
    });
  }
  c(o);
}, $ = (o, e) => typeof e == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((c) => o.includes(c)) || o[o.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
function l(o, e) {
  const {
    prefix: s,
    shouldSkipGeneratingVar: c
  } = e || {}, t = {}, n = {}, f = {};
  return j(
    o,
    (r, i, g) => {
      if ((typeof i == "string" || typeof i == "number") && (!c || !c(r, i))) {
        const b = `--${s ? `${s}-` : ""}${r.join("-")}`, p = $(r, i);
        Object.assign(t, {
          [b]: p
        }), d(n, r, `var(${b})`, g), d(f, r, `var(${b}, ${p})`, g);
      }
    },
    (r) => r[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: t,
    vars: n,
    varsWithDefaults: f
  };
}
export {
  d as assignNestedKeys,
  l as default,
  j as walkObjectDeep
};

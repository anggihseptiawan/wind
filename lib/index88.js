import u from "./index52.js";
function l(n, r) {
  if (!n.containerQueries)
    return r;
  const a = Object.keys(r).filter((e) => e.startsWith("@container")).sort((e, s) => {
    var i, o;
    const t = /min-width:\s*([0-9.]+)/;
    return +(((i = e.match(t)) == null ? void 0 : i[1]) || 0) - +(((o = s.match(t)) == null ? void 0 : o[1]) || 0);
  });
  return a.length ? a.reduce((e, s) => {
    const t = r[s];
    return delete e[s], e[s] = t, e;
  }, {
    ...r
  }) : r;
}
function p(n, r) {
  return r === "@" || r.startsWith("@") && (n.some((a) => r.startsWith(`@${a}`)) || !!r.match(/^@\d/));
}
function b(n, r) {
  const a = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${r})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : u(18, `(${r})`));
    return null;
  }
  const [, e, s] = a, t = Number.isNaN(+e) ? e || 0 : +e;
  return n.containerQueries(s).up(t);
}
function f(n) {
  const r = (t, i) => t.replace("@media", i ? `@container ${i}` : "@container");
  function a(t, i) {
    t.up = (...o) => r(n.breakpoints.up(...o), i), t.down = (...o) => r(n.breakpoints.down(...o), i), t.between = (...o) => r(n.breakpoints.between(...o), i), t.only = (...o) => r(n.breakpoints.only(...o), i), t.not = (...o) => {
      const c = r(n.breakpoints.not(...o), i);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const e = {}, s = (t) => (a(e, t), e);
  return a(s), {
    ...n,
    containerQueries: s
  };
}
export {
  f as default,
  b as getContainerQuery,
  p as isCqShorthand,
  l as sortContainerQueries
};

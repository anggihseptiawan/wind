import c from "./index77.js";
function f(...n) {
  const u = n.reduce((r, e) => (e.filterProps.forEach((o) => {
    r[o] = e;
  }), r), {}), t = (r) => Object.keys(r).reduce((e, o) => u[o] ? c(e, u[o](r)) : e, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? n.reduce((r, e) => Object.assign(r, e.propTypes), {}) : {}, t.filterProps = n.reduce((r, e) => r.concat(e.filterProps), []), t;
}
export {
  f as default
};

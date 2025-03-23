function f(e) {
  const r = typeof e;
  switch (r) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return r;
  }
}
function o(e, r, n, i) {
  const t = e[r];
  if (t == null || !Number.isInteger(t)) {
    const c = f(t);
    return new RangeError(`Invalid ${i} \`${r}\` of type \`${c}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function l(e, r, ...n) {
  return e[r] === void 0 ? null : o(e, r, ...n);
}
function u() {
  return null;
}
l.isRequired = o;
u.isRequired = u;
const s = process.env.NODE_ENV === "production" ? u : l;
export {
  s as default,
  f as getTypeByValue
};

import { getPath as l } from "./index79.js";
import y from "./index77.js";
import h from "./index110.js";
import c from "./index105.js";
import { handleBreakpoints as E } from "./index76.js";
const b = {
  m: "margin",
  p: "padding"
}, N = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, p = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, $ = h((n) => {
  if (n.length > 2)
    if (p[n])
      n = p[n];
    else
      return [n];
  const [e, i] = n.split(""), o = b[e], r = N[i] || "";
  return Array.isArray(r) ? r.map((t) => o + t) : [o + r];
}), u = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], d = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], I = [...u, ...d];
function B(n, e, i, o) {
  const r = l(n, e, !0) ?? i;
  return typeof r == "number" || typeof r == "string" ? (t) => typeof t == "string" ? t : (process.env.NODE_ENV !== "production" && typeof t != "number" && console.error(`MUI: Expected ${o} argument to be a number or a string, got ${t}.`), typeof r == "string" ? `calc(${t} * ${r})` : r * t) : Array.isArray(r) ? (t) => {
    if (typeof t == "string")
      return t;
    const s = Math.abs(t);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > r.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(r)}.`, `${s} > ${r.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${e}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${e}\` as a number.`].join(`
`)));
    const a = r[s];
    return t >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof r == "function" ? r : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${e}\` value (${r}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function T(n) {
  return B(n, "spacing", 8, "spacing");
}
function v(n, e) {
  return typeof e == "string" || e == null ? e : n(e);
}
function P(n, e) {
  return (i) => n.reduce((o, r) => (o[r] = v(e, i), o), {});
}
function k(n, e, i, o) {
  if (!e.includes(i))
    return null;
  const r = $(i), t = P(r, o), s = n[i];
  return E(n, s, t);
}
function g(n, e) {
  const i = T(n.theme);
  return Object.keys(n).map((o) => k(n, e, o, i)).reduce(y, {});
}
function m(n) {
  return g(n, u);
}
m.propTypes = process.env.NODE_ENV !== "production" ? u.reduce((n, e) => (n[e] = c, n), {}) : {};
m.filterProps = u;
function f(n) {
  return g(n, d);
}
f.propTypes = process.env.NODE_ENV !== "production" ? d.reduce((n, e) => (n[e] = c, n), {}) : {};
f.filterProps = d;
process.env.NODE_ENV !== "production" && I.reduce((n, e) => (n[e] = c, n), {});
export {
  T as createUnarySpacing,
  B as createUnaryUnit,
  P as getStyleFromPropValue,
  v as getValue,
  m as margin,
  u as marginKeys,
  f as padding,
  d as paddingKeys
};

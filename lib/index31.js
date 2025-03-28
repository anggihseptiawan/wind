import o from "./index59.js";
import b from "./index60.js";
function l(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), b(e, t, n);
}
function v(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, s) => s < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function a(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return a(v(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : o(9, e));
  let r = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (r = r.split(" "), s = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : o(10, s));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: s
  };
}
const $ = (e) => {
  const t = a(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, C = (e, t) => {
  try {
    return $(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function u(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((s, i) => i < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function M(e) {
  e = a(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, s = t[2] / 100, i = r * Math.min(s, 1 - s), p = (y, d = (y + n / 30) % 12) => s - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let g = "rgb";
  const f = [Math.round(p(0) * 255), Math.round(p(8) * 255), Math.round(p(4) * 255)];
  return e.type === "hsla" && (g += "a", f.push(t[3])), u({
    type: g,
    values: f
  });
}
function h(e) {
  e = a(e);
  let t = e.type === "hsl" || e.type === "hsla" ? a(M(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function I(e, t) {
  const n = h(e), r = h(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function E(e, t) {
  return e = a(e), t = l(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, u(e);
}
function D(e, t, n) {
  try {
    return E(e, t);
  } catch {
    return e;
  }
}
function c(e, t) {
  if (e = a(e), t = l(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return u(e);
}
function O(e, t, n) {
  try {
    return c(e, t);
  } catch {
    return e;
  }
}
function m(e, t) {
  if (e = a(e), t = l(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return u(e);
}
function T(e, t, n) {
  try {
    return m(e, t);
  } catch {
    return e;
  }
}
function w(e, t = 0.15) {
  return h(e) > 0.5 ? c(e, t) : m(e, t);
}
function x(e, t, n) {
  try {
    return w(e, t);
  } catch {
    return e;
  }
}
export {
  E as alpha,
  $ as colorChannel,
  c as darken,
  a as decomposeColor,
  w as emphasize,
  I as getContrastRatio,
  h as getLuminance,
  v as hexToRgb,
  M as hslToRgb,
  m as lighten,
  D as private_safeAlpha,
  C as private_safeColorChannel,
  O as private_safeDarken,
  x as private_safeEmphasize,
  T as private_safeLighten,
  u as recomposeColor
};

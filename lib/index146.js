import l from "./index116.js";
import c from "./index73.js";
const i = [...Array(25)].map((r, t) => {
  if (t === 0)
    return "none";
  const e = c(t);
  return `linear-gradient(rgba(255 255 255 / ${e}), rgba(255 255 255 / ${e}))`;
});
function p(r) {
  return {
    inputPlaceholder: r === "dark" ? 0.5 : 0.42,
    inputUnderline: r === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: r === "dark" ? 0.2 : 0.12,
    switchTrack: r === "dark" ? 0.3 : 0.38
  };
}
function s(r) {
  return r === "dark" ? i : [];
}
function y(r) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: e,
    overlays: n,
    ...o
  } = r, a = l(t);
  return {
    palette: a,
    opacity: {
      ...p(a.mode),
      ...e
    },
    overlays: n || s(a.mode),
    ...o
  };
}
export {
  y as default,
  p as getOpacity,
  s as getOverlays
};

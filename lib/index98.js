import o from "./index95.js";
import p from "./index123.js";
function r(e, t) {
  return t === "grey" ? t : e;
}
const n = o({
  prop: "color",
  themeKey: "palette",
  transform: r
}), c = o({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: r
}), m = o({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: r
});
p(n, c, m);
export {
  m as backgroundColor,
  c as bgcolor,
  n as color,
  r as paletteTransform
};

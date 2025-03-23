import { internal_serializeStyles as l } from "./index72.js";
function i(o) {
  const {
    variants: e,
    ...r
  } = o, t = {
    variants: e,
    style: l(r),
    isProcessed: !0
  };
  return t.style === r || e && e.forEach((s) => {
    typeof s.style != "function" && (s.style = l(s.style));
  }), t;
}
export {
  i as default
};

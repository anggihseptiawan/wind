import s from "./index72.js";
const t = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function o(d, e, r = "Mui") {
  const a = t[e];
  return a ? `${r}-${a}` : `${s.generate(d)}-${e}`;
}
export {
  o as default,
  t as globalStateClasses
};

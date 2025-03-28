import * as u from "react";
let n = 0;
function f(t) {
  const [e, a] = u.useState(t), c = t || e;
  return u.useEffect(() => {
    e == null && (n += 1, a(`mui-${n}`));
  }, [e]), c;
}
const o = {
  ...u
}, s = o.useId;
function l(t) {
  if (s !== void 0) {
    const e = s();
    return t ?? e;
  }
  return f(t);
}
export {
  l as default
};

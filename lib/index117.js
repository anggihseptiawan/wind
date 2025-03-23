import * as t from "react";
import c from "./index127.js";
function f(e) {
  const r = t.useRef(e);
  return c(() => {
    r.current = e;
  }), t.useRef((...u) => (
    // @ts-expect-error hide `this`
    (0, r.current)(...u)
  )).current;
}
export {
  f as default
};

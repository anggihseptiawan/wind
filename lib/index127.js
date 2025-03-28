import * as n from "react";
import { ThemeContext as o } from "@emotion/react";
function r(e) {
  return Object.keys(e).length === 0;
}
function u(e = null) {
  const t = n.useContext(o);
  return !t || r(t) ? e : t;
}
export {
  u as default
};

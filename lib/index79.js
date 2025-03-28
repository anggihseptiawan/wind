import l from "@emotion/styled";
import { serializeStyles as m } from "./index80.js";
import { ThemeContext as _, css as S, keyframes as h } from "@emotion/react";
/**
 * @mui/styled-engine v6.4.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function a(e, t) {
  const r = l(e, t);
  return process.env.NODE_ENV !== "production" ? (...o) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return o.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : o.some((i) => i === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), r(...o);
  } : r;
}
function c(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const n = [];
function f(e) {
  return n[0] = e, m(n);
}
export {
  _ as ThemeContext,
  S as css,
  a as default,
  c as internal_mutateStyles,
  f as internal_serializeStyles,
  h as keyframes
};

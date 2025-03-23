import * as n from "react";
import e from "./index11.js";
import { clsx as a } from "./index12.js";
import { j as u } from "./index3.js";
function g(c) {
  const {
    className: m,
    classes: s,
    pulsate: p = !1,
    rippleX: d,
    rippleY: f,
    rippleSize: i,
    in: t,
    onExited: l,
    timeout: r
  } = c, [o, b] = n.useState(!1), h = a(m, s.ripple, s.rippleVisible, p && s.ripplePulsate), x = {
    width: i,
    height: i,
    top: -(i / 2) + f,
    left: -(i / 2) + d
  }, N = a(s.child, o && s.childLeaving, p && s.childPulsate);
  return !t && !o && b(!0), n.useEffect(() => {
    if (!t && l != null) {
      const E = setTimeout(l, r);
      return () => {
        clearTimeout(E);
      };
    }
  }, [l, t, r]), /* @__PURE__ */ u.jsx("span", {
    className: h,
    style: x,
    children: /* @__PURE__ */ u.jsx("span", {
      className: N
    })
  });
}
process.env.NODE_ENV !== "production" && (g.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object.isRequired,
  className: e.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: e.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: e.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: e.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: e.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: e.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: e.number,
  /**
   * exit delay
   */
  timeout: e.number.isRequired
});
export {
  g as default
};

import * as y from "react";
import o from "./index11.js";
import { clsx as po } from "./index12.js";
import fo from "./index119.js";
import bo, { getButtonBaseUtilityClass as mo } from "./index120.js";
import { j as F } from "./index3.js";
import { useDefaultProps as ho } from "./index22.js";
import yo from "./index121.js";
import K from "./index39.js";
import x from "./index117.js";
import Ro from "./index23.js";
import To from "./index26.js";
import P from "./index122.js";
import go from "./index123.js";
import Mo from "./index124.js";
const Co = (p) => {
  const {
    disabled: u,
    focusVisible: i,
    focusVisibleClassName: a,
    classes: l
  } = p, R = To({
    root: ["root", u && "disabled", i && "focusVisible"]
  }, mo, l);
  return i && a && (R.root += ` ${a}`), R;
}, xo = Ro("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (p, u) => u.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${bo.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Bo = /* @__PURE__ */ y.forwardRef(function(u, i) {
  const a = ho({
    props: u,
    name: "MuiButtonBase"
  }), {
    action: l,
    centerRipple: B = !1,
    children: R,
    className: O,
    component: T = "button",
    disabled: r = !1,
    disableRipple: g = !1,
    disableTouchRipple: n = !1,
    focusRipple: f = !1,
    focusVisibleClassName: Do,
    LinkComponent: A = "a",
    onBlur: V,
    onClick: d,
    onContextMenu: I,
    onDragLeave: z,
    onFocus: w,
    onFocusVisible: E,
    onKeyDown: L,
    onKeyUp: N,
    onMouseDown: q,
    onMouseLeave: j,
    onMouseUp: H,
    onTouchEnd: W,
    onTouchMove: $,
    onTouchStart: _,
    tabIndex: S = 0,
    TouchRippleProps: G,
    touchRippleRef: J,
    type: D,
    ...b
  } = a, m = y.useRef(null), t = yo(), Q = K(t.ref, J), [c, M] = y.useState(!1);
  r && c && M(!1), y.useImperativeHandle(l, () => ({
    focusVisible: () => {
      M(!0), m.current.focus();
    }
  }), []);
  const X = t.shouldMount && !g && !r;
  y.useEffect(() => {
    c && f && !g && t.pulsate();
  }, [g, f, c, t]);
  const Y = s(t, "start", q, n), Z = s(t, "stop", I, n), v = s(t, "stop", z, n), oo = s(t, "stop", H, n), eo = s(t, "stop", (e) => {
    c && e.preventDefault(), j && j(e);
  }, n), to = s(t, "start", _, n), no = s(t, "stop", W, n), so = s(t, "stop", $, n), ro = s(t, "stop", (e) => {
    P(e.target) || M(!1), V && V(e);
  }, !1), uo = x((e) => {
    m.current || (m.current = e.currentTarget), P(e.target) && (M(!0), E && E(e)), w && w(e);
  }), k = () => {
    const e = m.current;
    return T && T !== "button" && !(e.tagName === "A" && e.href);
  }, io = x((e) => {
    f && !e.repeat && c && e.key === " " && t.stop(e, () => {
      t.start(e);
    }), e.target === e.currentTarget && k() && e.key === " " && e.preventDefault(), L && L(e), e.target === e.currentTarget && k() && e.key === "Enter" && !r && (e.preventDefault(), d && d(e));
  }), ao = x((e) => {
    f && e.key === " " && c && !e.defaultPrevented && t.stop(e, () => {
      t.pulsate(e);
    }), N && N(e), d && e.target === e.currentTarget && k() && e.key === " " && !e.defaultPrevented && d(e);
  });
  let C = T;
  C === "button" && (b.href || b.to) && (C = A);
  const h = {};
  C === "button" ? (h.type = D === void 0 ? "button" : D, h.disabled = r) : (!b.href && !b.to && (h.role = "button"), r && (h["aria-disabled"] = r));
  const co = K(i, m), U = {
    ...a,
    centerRipple: B,
    component: T,
    disabled: r,
    disableRipple: g,
    disableTouchRipple: n,
    focusRipple: f,
    tabIndex: S,
    focusVisible: c
  }, lo = Co(U);
  return /* @__PURE__ */ F.jsxs(xo, {
    as: C,
    className: po(lo.root, O),
    ownerState: U,
    onBlur: ro,
    onClick: d,
    onContextMenu: Z,
    onFocus: uo,
    onKeyDown: io,
    onKeyUp: ao,
    onMouseDown: Y,
    onMouseLeave: eo,
    onMouseUp: oo,
    onDragLeave: v,
    onTouchEnd: no,
    onTouchMove: so,
    onTouchStart: to,
    ref: co,
    tabIndex: r ? -1 : S,
    type: D,
    ...h,
    ...b,
    children: [R, X ? /* @__PURE__ */ F.jsx(fo, {
      ref: Q,
      center: B,
      ...G
    }) : null]
  });
});
function s(p, u, i, a = !1) {
  return x((l) => (i && i(l), a || p[u](l), !0));
}
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Mo,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: go,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
export {
  xo as ButtonBaseRoot,
  Bo as default
};

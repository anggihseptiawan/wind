import * as i from "react";
import C from "./index14.js";
import { clsx as c } from "./index15.js";
import q from "./index158.js";
import e from "./index132.js";
import { j as k } from "./index3.js";
import { useDefaultProps as A } from "./index25.js";
import H from "./index113.js";
import N from "./index26.js";
import _ from "./index159.js";
import { keyframes as E } from "@emotion/react";
const w = 550, B = 80, G = E`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, U = E`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, W = E`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, F = N("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), J = N(q, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${e.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${G};
    animation-duration: ${w}ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
  }

  &.${e.ripplePulsate} {
    animation-duration: ${({
  theme: o
}) => o.transitions.duration.shorter}ms;
  }

  & .${e.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${e.childLeaving} {
    opacity: 0;
    animation-name: ${U};
    animation-duration: ${w}ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
  }

  & .${e.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${W};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: o
}) => o.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Q = /* @__PURE__ */ i.forwardRef(function(D, O) {
  const V = A({
    props: D,
    name: "MuiTouchRipple"
  }), {
    center: I = !1,
    classes: s = {},
    className: K,
    ...S
  } = V, [X, Y] = i.useState([]), j = i.useRef(0), h = i.useRef(null);
  i.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [X]);
  const b = i.useRef(!1), d = H(), r = i.useRef(null), z = i.useRef(null), x = i.useCallback((t) => {
    const {
      pulsate: l,
      rippleX: n,
      rippleY: R,
      rippleSize: y,
      cb: T
    } = t;
    Y((a) => [...a, /* @__PURE__ */ k.jsx(J, {
      classes: {
        ripple: c(s.ripple, e.ripple),
        rippleVisible: c(s.rippleVisible, e.rippleVisible),
        ripplePulsate: c(s.ripplePulsate, e.ripplePulsate),
        child: c(s.child, e.child),
        childLeaving: c(s.childLeaving, e.childLeaving),
        childPulsate: c(s.childPulsate, e.childPulsate)
      },
      timeout: w,
      pulsate: l,
      rippleX: n,
      rippleY: R,
      rippleSize: y
    }, j.current)]), j.current += 1, h.current = T;
  }, [s]), g = i.useCallback((t = {}, l = {}, n = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: y = I || l.pulsate,
      fakeElement: T = !1
      // For test purposes
    } = l;
    if ((t == null ? void 0 : t.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (t == null ? void 0 : t.type) === "touchstart" && (b.current = !0);
    const a = T ? null : z.current, p = a ? a.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let u, m, f;
    if (y || t === void 0 || t.clientX === 0 && t.clientY === 0 || !t.clientX && !t.touches)
      u = Math.round(p.width / 2), m = Math.round(p.height / 2);
    else {
      const {
        clientX: $,
        clientY: P
      } = t.touches && t.touches.length > 0 ? t.touches[0] : t;
      u = Math.round($ - p.left), m = Math.round(P - p.top);
    }
    if (y)
      f = Math.sqrt((2 * p.width ** 2 + p.height ** 2) / 3), f % 2 === 0 && (f += 1);
    else {
      const $ = Math.max(Math.abs((a ? a.clientWidth : 0) - u), u) * 2 + 2, P = Math.max(Math.abs((a ? a.clientHeight : 0) - m), m) * 2 + 2;
      f = Math.sqrt($ ** 2 + P ** 2);
    }
    t != null && t.touches ? r.current === null && (r.current = () => {
      x({
        pulsate: R,
        rippleX: u,
        rippleY: m,
        rippleSize: f,
        cb: n
      });
    }, d.start(B, () => {
      r.current && (r.current(), r.current = null);
    })) : x({
      pulsate: R,
      rippleX: u,
      rippleY: m,
      rippleSize: f,
      cb: n
    });
  }, [I, x, d]), L = i.useCallback(() => {
    g({}, {
      pulsate: !0
    });
  }, [g]), M = i.useCallback((t, l) => {
    if (d.clear(), (t == null ? void 0 : t.type) === "touchend" && r.current) {
      r.current(), r.current = null, d.start(0, () => {
        M(t, l);
      });
      return;
    }
    r.current = null, Y((n) => n.length > 0 ? n.slice(1) : n), h.current = l;
  }, [d]);
  return i.useImperativeHandle(O, () => ({
    pulsate: L,
    start: g,
    stop: M
  }), [L, g, M]), /* @__PURE__ */ k.jsx(F, {
    className: c(e.root, s.root, K),
    ref: z,
    ...S,
    children: /* @__PURE__ */ k.jsx(_, {
      component: null,
      exit: !0,
      children: X
    })
  });
});
process.env.NODE_ENV !== "production" && (Q.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: C.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: C.object,
  /**
   * @ignore
   */
  className: C.string
});
export {
  B as DELAY_RIPPLE,
  J as TouchRippleRipple,
  F as TouchRippleRoot,
  Q as default
};

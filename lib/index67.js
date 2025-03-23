import * as O from "react";
import r from "./index11.js";
import { clsx as R } from "./index12.js";
import C from "./index13.js";
import T from "./index15.js";
import { getCircularProgressUtilityClass as M } from "./index125.js";
import { j as h } from "./index3.js";
import { useDefaultProps as N } from "./index22.js";
import g from "./index23.js";
import c from "./index25.js";
import E from "./index26.js";
import z from "./index62.js";
import { css as P, keyframes as w } from "@emotion/react";
const s = 44, v = w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, y = w`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, F = typeof v != "string" ? P`
        animation: ${v} 1.4s linear infinite;
      ` : null, I = typeof y != "string" ? P`
        animation: ${y} 1.4s ease-in-out infinite;
      ` : null, U = (t) => {
  const {
    classes: e,
    variant: o,
    color: i,
    disableShrink: l
  } = t, p = {
    root: ["root", o, `color${c(i)}`],
    svg: ["svg"],
    circle: ["circle", `circle${c(o)}`, l && "circleDisableShrink"]
  };
  return E(p, M, e);
}, V = g("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (t, e) => {
    const {
      ownerState: o
    } = t;
    return [e.root, e[o.variant], e[`color${c(o.color)}`]];
  }
})(C(({
  theme: t
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: t.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: F || {
      animation: `${v} 1.4s linear infinite`
    }
  }, ...Object.entries(t.palette).filter(T()).map(([e]) => ({
    props: {
      color: e
    },
    style: {
      color: (t.vars || t).palette[e].main
    }
  }))]
}))), A = g("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (t, e) => e.svg
})({
  display: "block"
  // Keeps the progress centered
}), K = g("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (t, e) => {
    const {
      ownerState: o
    } = t;
    return [e.circle, e[`circle${c(o.variant)}`], o.disableShrink && e.circleDisableShrink];
  }
})(C(({
  theme: t
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: t.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: e
    }) => e.variant === "indeterminate" && !e.disableShrink,
    style: I || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${y} 1.4s ease-in-out infinite`
    }
  }]
}))), B = /* @__PURE__ */ O.forwardRef(function(e, o) {
  const i = N({
    props: e,
    name: "MuiCircularProgress"
  }), {
    className: l,
    color: p = "primary",
    disableShrink: $ = !1,
    size: m = 40,
    style: j,
    thickness: a = 3.6,
    value: f = 0,
    variant: k = "indeterminate",
    ...D
  } = i, n = {
    ...i,
    color: p,
    disableShrink: $,
    size: m,
    thickness: a,
    value: f,
    variant: k
  }, d = U(n), u = {}, x = {}, b = {};
  if (k === "determinate") {
    const S = 2 * Math.PI * ((s - a) / 2);
    u.strokeDasharray = S.toFixed(3), b["aria-valuenow"] = Math.round(f), u.strokeDashoffset = `${((100 - f) / 100 * S).toFixed(3)}px`, x.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ h.jsx(V, {
    className: R(d.root, l),
    style: {
      width: m,
      height: m,
      ...x,
      ...j
    },
    ownerState: n,
    ref: o,
    role: "progressbar",
    ...b,
    ...D,
    children: /* @__PURE__ */ h.jsx(A, {
      className: d.svg,
      ownerState: n,
      viewBox: `${s / 2} ${s / 2} ${s} ${s}`,
      children: /* @__PURE__ */ h.jsx(K, {
        className: d.circle,
        style: u,
        ownerState: n,
        cx: s,
        cy: s,
        r: (s - a) / 2,
        fill: "none",
        strokeWidth: a
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (B.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: r.oneOfType([r.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: z(r.bool, (t) => t.disableShrink && t.variant && t.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: r.oneOfType([r.number, r.string]),
  /**
   * @ignore
   */
  style: r.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: r.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: r.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: r.oneOf(["determinate", "indeterminate"])
});
export {
  B as default
};

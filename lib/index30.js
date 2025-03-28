import * as h from "react";
import e from "./index14.js";
import { clsx as P } from "./index15.js";
import b from "./index61.js";
import { j as w } from "./index3.js";
import g from "./index26.js";
import T from "./index16.js";
import f from "./index73.js";
import { getPaperUtilityClass as x } from "./index74.js";
import { useDefaultProps as $ } from "./index25.js";
import { alpha as m } from "./index31.js";
import j from "./index29.js";
import O from "./index71.js";
import R from "./index75.js";
const E = (o) => {
  const {
    square: r,
    elevation: a,
    variant: n,
    classes: t
  } = o, i = {
    root: ["root", n, !r && "rounded", n === "elevation" && `elevation${a}`]
  };
  return j(i, x, t);
}, N = g("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (o, r) => {
    const {
      ownerState: a
    } = o;
    return [r.root, r[a.variant], !a.square && r.rounded, a.variant === "elevation" && r[`elevation${a.elevation}`]];
  }
})(T(({
  theme: o
}) => ({
  backgroundColor: (o.vars || o).palette.background.paper,
  color: (o.vars || o).palette.text.primary,
  transition: o.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: r
    }) => !r.square,
    style: {
      borderRadius: o.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(o.vars || o).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), k = /* @__PURE__ */ h.forwardRef(function(r, a) {
  var c;
  const n = $({
    props: r,
    name: "MuiPaper"
  }), t = b(), {
    className: i,
    component: p = "div",
    elevation: s = 1,
    square: u = !1,
    variant: l = "elevation",
    ...v
  } = n, d = {
    ...n,
    component: p,
    elevation: s,
    square: u,
    variant: l
  }, y = E(d);
  return process.env.NODE_ENV !== "production" && t.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ w.jsx(N, {
    as: p,
    ownerState: d,
    className: P(y.root, i),
    ref: a,
    ...v,
    style: {
      ...l === "elevation" && {
        "--Paper-shadow": (t.vars || t).shadows[s],
        ...t.vars && {
          "--Paper-overlay": (c = t.vars.overlays) == null ? void 0 : c[s]
        },
        ...!t.vars && t.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${m("#fff", f(s))}, ${m("#fff", f(s))})`
        }
      },
      ...v.style
    }
  });
});
process.env.NODE_ENV !== "production" && (k.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: O(R, (o) => {
    const {
      elevation: r,
      variant: a
    } = o;
    return r > 0 && a === "outlined" ? new Error(`MUI: Combining \`elevation={${r}}\` with \`variant="${a}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: e.bool,
  /**
   * @ignore
   */
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: e.oneOfType([e.oneOf(["elevation", "outlined"]), e.string])
});
export {
  k as default
};

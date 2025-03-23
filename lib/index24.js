import * as f from "react";
import e from "./index11.js";
import { clsx as T } from "./index12.js";
import R from "./index13.js";
import B from "./index15.js";
import x, { getIconButtonUtilityClass as $ } from "./index66.js";
import { j as l } from "./index3.js";
import { useDefaultProps as w } from "./index22.js";
import P from "./index67.js";
import O from "./index23.js";
import a from "./index25.js";
import S from "./index26.js";
import k from "./index68.js";
import N from "./index69.js";
import E from "./index63.js";
import { alpha as z } from "./index28.js";
const L = (o) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: s,
    size: p,
    loading: d
  } = o, c = {
    root: ["root", d && "loading", r && "disabled", n !== "default" && `color${a(n)}`, s && `edge${a(s)}`, `size${a(p)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return S(c, $, t);
}, M = O(k, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: r
    } = o;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${a(r.color)}`], r.edge && t[`edge${a(r.edge)}`], t[`size${a(r.size)}`]];
  }
})(R(({
  theme: o
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: o.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (o.vars || o).palette.action.active,
  transition: o.transitions.create("background-color", {
    duration: o.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : z(o.palette.action.active, o.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), R(({
  theme: o
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(o.palette).filter(B()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (o.vars || o).palette[t].main
    }
  })), ...Object.entries(o.palette).filter(B()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": o.vars ? `rgba(${(o.vars || o).palette[t].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : z((o.vars || o).palette[t].main, o.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: o.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: o.typography.pxToRem(28)
    }
  }],
  [`&.${x.disabled}`]: {
    backgroundColor: "transparent",
    color: (o.vars || o).palette.action.disabled
  },
  [`&.${x.loading}`]: {
    color: "transparent"
  }
}))), F = O("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (o, t) => t.loadingIndicator
})(({
  theme: o
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (o.vars || o).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), U = /* @__PURE__ */ f.forwardRef(function(t, r) {
  const n = w({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: p,
    className: d,
    color: c = "default",
    disabled: m = !1,
    disableFocusRipple: y = !1,
    size: h = "medium",
    id: v,
    loading: i = null,
    loadingIndicator: C,
    ...j
  } = n, b = P(v), I = C ?? /* @__PURE__ */ l.jsx(N, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), g = {
    ...n,
    edge: s,
    color: c,
    disabled: m,
    disableFocusRipple: y,
    loading: i,
    loadingIndicator: I,
    size: h
  }, u = L(g);
  return /* @__PURE__ */ l.jsxs(M, {
    id: i ? b : v,
    className: T(u.root, d),
    centerRipple: !0,
    focusRipple: !y,
    disabled: m || i,
    ref: r,
    ...j,
    ownerState: g,
    children: [typeof i == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ l.jsx("span", {
      className: u.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ l.jsx(F, {
        className: u.loadingIndicator,
        ownerState: g,
        children: i && I
      })
    }), p]
  });
});
process.env.NODE_ENV !== "production" && (U.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: E(e.node, (o) => f.Children.toArray(o.children).some((r) => /* @__PURE__ */ f.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: e.oneOfType([e.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: e.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: e.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: e.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: e.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: e.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: e.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: e.oneOfType([e.oneOf(["small", "medium", "large"]), e.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
export {
  U as default
};

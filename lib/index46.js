import * as z from "react";
import o from "./index14.js";
import { clsx as w } from "./index15.js";
import T from "./index16.js";
import { getSvgIconUtilityClass as R } from "./index106.js";
import { j as x } from "./index3.js";
import { useDefaultProps as O } from "./index25.js";
import j from "./index26.js";
import h from "./index28.js";
import C from "./index29.js";
const I = (e) => {
  const {
    color: r,
    fontSize: t,
    classes: n
  } = e, i = {
    root: ["root", r !== "inherit" && `color${h(r)}`, `fontSize${h(t)}`]
  };
  return C(i, R, n);
}, N = j("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: t
    } = e;
    return [r.root, t.color !== "inherit" && r[`color${h(t.color)}`], r[`fontSize${h(t.fontSize)}`]];
  }
})(T(({
  theme: e
}) => {
  var r, t, n, i, c, g, l, u, p, m, a, d, y, f;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (r = e.transitions) == null ? void 0 : r.create) == null ? void 0 : i.call(r, "fill", {
      duration: (n = (t = (e.vars ?? e).transitions) == null ? void 0 : t.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (s) => !s.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((g = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : g.call(c, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : u.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (p = e.typography) == null ? void 0 : p.pxToRem) == null ? void 0 : m.call(p, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, s]) => s && s.main).map(([s]) => {
        var S, v;
        return {
          props: {
            color: s
          },
          style: {
            color: (v = (S = (e.vars ?? e).palette) == null ? void 0 : S[s]) == null ? void 0 : v.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (d = (a = (e.vars ?? e).palette) == null ? void 0 : a.action) == null ? void 0 : d.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (f = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : f.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), b = /* @__PURE__ */ z.forwardRef(function(r, t) {
  const n = O({
    props: r,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: c,
    color: g = "inherit",
    component: l = "svg",
    fontSize: u = "medium",
    htmlColor: p,
    inheritViewBox: m = !1,
    titleAccess: a,
    viewBox: d = "0 0 24 24",
    ...y
  } = n, f = /* @__PURE__ */ z.isValidElement(i) && i.type === "svg", s = {
    ...n,
    color: g,
    component: l,
    fontSize: u,
    instanceFontSize: r.fontSize,
    inheritViewBox: m,
    viewBox: d,
    hasSvgAsChild: f
  }, S = {};
  m || (S.viewBox = d);
  const v = I(s);
  return /* @__PURE__ */ x.jsxs(N, {
    as: l,
    className: w(v.root, c),
    focusable: "false",
    color: p,
    "aria-hidden": a ? void 0 : !0,
    role: a ? "img" : void 0,
    ref: t,
    ...S,
    ...y,
    ...f && i.props,
    ownerState: s,
    children: [f ? i.props.children : i, a ? /* @__PURE__ */ x.jsx("title", {
      children: a
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (b.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
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
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
b.muiName = "SvgIcon";
export {
  b as default
};

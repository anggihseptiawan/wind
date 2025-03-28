import * as q from "react";
import o from "./index14.js";
import { clsx as G } from "./index15.js";
import H from "./index16.js";
import i from "./index17.js";
import u from "./index18.js";
import b, { getAlertUtilityClass as J } from "./index19.js";
import K from "./index20.js";
import Q from "./index21.js";
import X from "./index22.js";
import Y from "./index23.js";
import Z from "./index24.js";
import { j as s } from "./index3.js";
import { useDefaultProps as oo } from "./index25.js";
import f from "./index26.js";
import eo from "./index27.js";
import g from "./index28.js";
import to from "./index29.js";
import ro from "./index30.js";
import { darken as I, lighten as O } from "./index31.js";
const no = (e) => {
  const {
    variant: r,
    color: n,
    severity: t,
    classes: c
  } = e, m = {
    root: ["root", `color${g(n || t)}`, `${r}${g(n || t)}`, `${r}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return to(m, J, c);
}, so = f(ro, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: n
    } = e;
    return [r.root, r[n.variant], r[`${n.variant}${g(n.color || n.severity)}`]];
  }
})(H(({
  theme: e
}) => {
  const r = e.palette.mode === "light" ? I : O, n = e.palette.mode === "light" ? O : I;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(u(["light"])).map(([t]) => ({
      props: {
        colorSeverity: t,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${t}Color`] : r(e.palette[t].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${t}StandardBg`] : n(e.palette[t].light, 0.9),
        [`& .${b.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${t}IconColor`]
        } : {
          color: e.palette[t].main
        }
      }
    })), ...Object.entries(e.palette).filter(u(["light"])).map(([t]) => ({
      props: {
        colorSeverity: t,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${t}Color`] : r(e.palette[t].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[t].light}`,
        [`& .${b.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${t}IconColor`]
        } : {
          color: e.palette[t].main
        }
      }
    })), ...Object.entries(e.palette).filter(u(["dark"])).map(([t]) => ({
      props: {
        colorSeverity: t,
        variant: "filled"
      },
      style: {
        fontWeight: e.typography.fontWeightMedium,
        ...e.vars ? {
          color: e.vars.palette.Alert[`${t}FilledColor`],
          backgroundColor: e.vars.palette.Alert[`${t}FilledBg`]
        } : {
          backgroundColor: e.palette.mode === "dark" ? e.palette[t].dark : e.palette[t].main,
          color: e.palette.getContrastText(e.palette[t].main)
        }
      }
    }))]
  };
})), lo = f("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (e, r) => r.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), ao = f("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (e, r) => r.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), io = f("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (e, r) => r.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), A = {
  success: /* @__PURE__ */ s.jsx(K, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ s.jsx(Q, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ s.jsx(X, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ s.jsx(Y, {
    fontSize: "inherit"
  })
}, co = /* @__PURE__ */ q.forwardRef(function(r, n) {
  const t = oo({
    props: r,
    name: "MuiAlert"
  }), {
    action: c,
    children: m,
    className: P,
    closeText: y = "Close",
    color: v,
    components: x = {},
    componentsProps: $ = {},
    icon: T,
    iconMapping: B = A,
    onClose: C,
    role: R = "alert",
    severity: p = "success",
    slotProps: M = {},
    slots: w = {},
    variant: k = "standard",
    ...z
  } = t, l = {
    ...t,
    color: v,
    severity: p,
    variant: k,
    colorSeverity: v || p
  }, d = no(l), a = {
    slots: {
      closeButton: x.CloseButton,
      closeIcon: x.CloseIcon,
      ...w
    },
    slotProps: {
      ...$,
      ...M
    }
  }, [N, h] = i("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: G(d.root, P),
    elementType: so,
    externalForwardedProps: {
      ...a,
      ...z
    },
    ownerState: l,
    additionalProps: {
      role: R,
      elevation: 0
    }
  }), [F, E] = i("icon", {
    className: d.icon,
    elementType: lo,
    externalForwardedProps: a,
    ownerState: l
  }), [W, D] = i("message", {
    className: d.message,
    elementType: ao,
    externalForwardedProps: a,
    ownerState: l
  }), [j, S] = i("action", {
    className: d.action,
    elementType: io,
    externalForwardedProps: a,
    ownerState: l
  }), [U, V] = i("closeButton", {
    elementType: eo,
    externalForwardedProps: a,
    ownerState: l
  }), [L, _] = i("closeIcon", {
    elementType: Z,
    externalForwardedProps: a,
    ownerState: l
  });
  return /* @__PURE__ */ s.jsxs(N, {
    ...h,
    children: [T !== !1 ? /* @__PURE__ */ s.jsx(F, {
      ...E,
      children: T || B[p] || A[p]
    }) : null, /* @__PURE__ */ s.jsx(W, {
      ...D,
      children: m
    }), c != null ? /* @__PURE__ */ s.jsx(j, {
      ...S,
      children: c
    }) : null, c == null && C ? /* @__PURE__ */ s.jsx(j, {
      ...S,
      children: /* @__PURE__ */ s.jsx(U, {
        size: "small",
        "aria-label": y,
        title: y,
        color: "inherit",
        onClick: C,
        ...V,
        children: /* @__PURE__ */ s.jsx(L, {
          fontSize: "small",
          ..._
        })
      })
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (co.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: o.node,
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
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](https://mui.com/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: o.oneOfType([o.oneOf(["error", "info", "success", "warning"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * @deprecated use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: o.shape({
    CloseButton: o.elementType,
    CloseIcon: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: o.shape({
    closeButton: o.object,
    closeIcon: o.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: o.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: o.shape({
    error: o.node,
    info: o.node,
    success: o.node,
    warning: o.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: o.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: o.oneOfType([o.oneOf(["error", "info", "success", "warning"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    action: o.oneOfType([o.func, o.object]),
    closeButton: o.oneOfType([o.func, o.object]),
    closeIcon: o.oneOfType([o.func, o.object]),
    icon: o.oneOfType([o.func, o.object]),
    message: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: o.shape({
    action: o.elementType,
    closeButton: o.elementType,
    closeIcon: o.elementType,
    icon: o.elementType,
    message: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: o.oneOfType([o.oneOf(["filled", "outlined", "standard"]), o.string])
});
export {
  co as default
};

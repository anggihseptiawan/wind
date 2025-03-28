import m from "./index161.js";
import f from "./index162.js";
import v from "./index163.js";
import x from "./index164.js";
import d from "./index14.js";
import s from "react";
import c from "./index165.js";
import { getInitialChildMapping as E, getNextChildMapping as y, getChildMapping as g } from "./index166.js";
var M = Object.values || function(a) {
  return Object.keys(a).map(function(r) {
    return a[r];
  });
}, F = {
  component: "div",
  childFactory: function(r) {
    return r;
  }
}, h = /* @__PURE__ */ function(a) {
  x(r, a);
  function r(p, t) {
    var e;
    e = a.call(this, p, t) || this;
    var o = e.handleExited.bind(v(e));
    return e.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: o,
      firstRender: !0
    }, e;
  }
  var l = r.prototype;
  return l.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, l.componentWillUnmount = function() {
    this.mounted = !1;
  }, r.getDerivedStateFromProps = function(t, e) {
    var o = e.children, n = e.handleExited, i = e.firstRender;
    return {
      children: i ? E(t, n) : y(t, o, n),
      firstRender: !1
    };
  }, l.handleExited = function(t, e) {
    var o = g(this.props.children);
    t.key in o || (t.props.onExited && t.props.onExited(e), this.mounted && this.setState(function(n) {
      var i = f({}, n.children);
      return delete i[t.key], {
        children: i
      };
    }));
  }, l.render = function() {
    var t = this.props, e = t.component, o = t.childFactory, n = m(t, ["component", "childFactory"]), i = this.state.contextValue, u = M(this.state.children).map(o);
    return delete n.appear, delete n.enter, delete n.exit, e === null ? /* @__PURE__ */ s.createElement(c.Provider, {
      value: i
    }, u) : /* @__PURE__ */ s.createElement(c.Provider, {
      value: i
    }, /* @__PURE__ */ s.createElement(e, n, u));
  }, r;
}(s.Component);
h.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: d.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: d.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: d.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: d.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: d.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: d.func
} : {};
h.defaultProps = F;
export {
  h as default
};

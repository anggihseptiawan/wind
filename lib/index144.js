const d = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, f = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function m(e) {
  return `${Math.round(e)}ms`;
}
function l(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function p(e) {
  const n = {
    ...d,
    ...e.easing
  }, i = {
    ...f,
    ...e.duration
  };
  return {
    getAutoHeightDuration: l,
    create: (o = ["all"], u = {}) => {
      const {
        duration: r = i.standard,
        easing: c = n.easeInOut,
        delay: a = 0,
        ...g
      } = u;
      if (process.env.NODE_ENV !== "production") {
        const t = (s) => typeof s == "string", b = (s) => !Number.isNaN(parseFloat(s));
        !t(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !b(r) && !t(r) && console.error(`MUI: Argument "duration" must be a number or a string but found ${r}.`), t(c) || console.error('MUI: Argument "easing" must be a string.'), !b(a) && !t(a) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof u != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(g).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(g).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((t) => `${t} ${typeof r == "string" ? r : m(r)} ${c} ${typeof a == "string" ? a : m(a)}`).join(",");
    },
    ...e,
    easing: n,
    duration: i
  };
}
export {
  p as default,
  f as duration,
  d as easing
};

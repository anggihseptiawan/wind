function r(t) {
  var o;
  return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || // ends with sxConfig
  t[0] === "palette" && !!((o = t[1]) != null && o.match(/(mode|contrastThreshold|tonalOffset)/));
}
export {
  r as default
};

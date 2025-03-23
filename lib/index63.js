function u(e, r) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || r(...n);
  };
}
export {
  u as default
};

function u(t) {
  const n = {};
  return (e) => (n[e] === void 0 && (n[e] = t(e)), n[e]);
}
export {
  u as default
};

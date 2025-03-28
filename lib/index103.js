function u(e, f = []) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !f.includes(n)).forEach((n) => {
    t[n] = e[n];
  }), t;
}
export {
  u as default
};

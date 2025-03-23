function e(t, n) {
  typeof t == "function" ? t(n) : t && (t.current = n);
}
export {
  e as default
};

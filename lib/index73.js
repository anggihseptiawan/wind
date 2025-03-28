function t(a) {
  let l;
  return a < 1 ? l = 5.11916 * a ** 2 : l = 4.5 * Math.log(a + 1) + 2, Math.round(l * 10) / 1e3;
}
export {
  t as default
};

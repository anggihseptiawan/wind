const t = (e) => e, a = () => {
  let e = t;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = t;
    }
  };
}, n = a();
export {
  n as default
};

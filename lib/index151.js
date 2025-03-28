function t(i, e) {
  return {
    toolbar: {
      minHeight: 56,
      [i.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [i.up("sm")]: {
        minHeight: 64
      }
    },
    ...e
  };
}
export {
  t as default
};

function i(e, r) {
  const t = {
    ...r
  };
  for (const l in e)
    if (Object.prototype.hasOwnProperty.call(e, l)) {
      const o = l;
      if (o === "components" || o === "slots")
        t[o] = {
          ...e[o],
          ...t[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const s = e[o], n = r[o];
        if (!n)
          t[o] = s || {};
        else if (!s)
          t[o] = n;
        else {
          t[o] = {
            ...n
          };
          for (const p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) {
              const c = p;
              t[o][c] = i(s[c], n[c]);
            }
        }
      } else t[o] === void 0 && (t[o] = e[o]);
    }
  return t;
}
export {
  i as default
};

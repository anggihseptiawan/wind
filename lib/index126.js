function l(r, o) {
  var c;
  const t = this;
  if (t.vars) {
    if (!((c = t.colorSchemes) != null && c[r]) || typeof t.getColorSchemeSelector != "function")
      return {};
    let e = t.getColorSchemeSelector(r);
    return e === "&" ? o : ((e.includes("data-") || e.includes(".")) && (e = `*:where(${e.replace(/\s*&$/, "")}) &`), {
      [e]: o
    });
  }
  return t.palette.mode === r ? o : {};
}
export {
  l as default
};
